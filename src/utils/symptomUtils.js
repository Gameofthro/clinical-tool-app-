import { diseaseDatabase } from "../data/diseases";

// --- 1. THE MASTER DICTIONARY (Semantic Layer) ---
// Maps common patient language to the clinical terms found in your database.
// This allows the "Smart Match" logic to connect "High Temp" -> "Fever" -> "Pyrexia".
const SYMPTOM_DICTIONARY = {
  "fever": ["pyrexia", "high temperature", "chills", "warm", "febrile", "shivering"],
  "dyspnea": ["shortness of breath", "breathlessness", "difficulty breathing", "cant breathe", "air hunger", "tachypnea"],
  "chest pain": ["angina", "tightness in chest", "heavy chest", "squeezing pain", "retrosternal pain", "precordial"],
  "cough": ["sputum", "phlegm", "hemoptysis", "dry cough", "productive cough"],
  "headache": ["migraine", "cephalgia", "head pain", "throbbing"],
  "abdominal pain": ["stomach ache", "belly pain", "cramps", "epigastric", "colic"],
  "vomiting": ["nausea", "puking", "emesis", "queasy"],
  "diarrhea": ["loose motion", "watery stool", "runny stomach", "dysentery"],
  "fatigue": ["tiredness", "lethargy", "weakness", "malaise", "exhaustion"],
  "edema": ["swelling", "puffy", "fluid retention", "pedal edema"],
  "rash": ["eruption", "spots", "hives", "urticaria", "redness", "itching", "pruritus"],
  "weight loss": ["loss of appetite", "anorexia", "cachexia", "wasting"],
  "polyuria": ["frequent urination", "peeing a lot", "urinary frequency", "nocturia"],
  "polydipsia": ["excessive thirst", "thirsty", "dry mouth"],
  "confusion": ["altered mental status", "disoriented", "delirium", "drowsiness"],
  "palpitations": ["racing heart", "fluttering", "fast heartbeat", "tachycardia"],
  "jaundice": ["yellow skin", "yellow eyes", "icterus"],
  "joint pain": ["arthralgia", "arthritis", "stiff joints"],
};

// --- 2. SMART EXTRACTOR (Auto-Updater) ---
// Scans your entire database to build a list of all unique symptoms dynamically.
// You NEVER need to update this list manually.
export const extractAllSymptoms = () => {
  const symptomSet = new Set();

  Object.values(diseaseDatabase).forEach((disease) => {
    // Extract from Symptoms Array
    if (disease.clinicalFeatures?.symptoms) {
      disease.clinicalFeatures.symptoms.forEach(s => symptomSet.add(cleanText(s)));
    }
    // Extract from Signs Array
    if (disease.clinicalFeatures?.signs) {
      disease.clinicalFeatures.signs.forEach(s => symptomSet.add(cleanText(s)));
    }
    // Extract from Red Flags (Critical for matching)
    if (disease.redFlags) {
      disease.redFlags.forEach(f => symptomSet.add(cleanText(f)));
    }
  });

  // Convert Set to Array and Sort A-Z
  return Array.from(symptomSet).sort();
};

// Helper: Cleans text (removes punctuation, lowercase) for easier matching
const cleanText = (text) => {
  return text.toLowerCase().replace(/[().,]/g, "").trim();
};

// --- 3. THE SCORING ENGINE (The Logic) ---
// This is the brain. It takes user symptoms and finds the best matching diseases.
export const generateDDx = (userSymptoms) => {
  if (!userSymptoms || userSymptoms.length === 0) return [];

  const results = [];

  // Loop through every disease in the DB
  for (const [key, data] of Object.entries(diseaseDatabase)) {
    let score = 0;
    const matches = [];
    const criticalMatches = [];

    // Combine all disease features into one searchable text blob for this disease
    // This allows "Fever" to match "High grade fever" easily.
    const diseaseText = [
      ...(data.clinicalFeatures?.symptoms || []),
      ...(data.clinicalFeatures?.signs || []),
      data.pathophysiology || ""
    ].join(" ").toLowerCase();

    const redFlagText = (data.redFlags || []).join(" ").toLowerCase();

    // Check every symptom the user selected
    userSymptoms.forEach((symptom) => {
      const userSym = symptom.toLowerCase();
      
      // 1. Check for Synonyms (Semantic Expansion)
      // If user types "Fever", we also look for "Pyrexia" or "High Temp"
      let searchTerms = [userSym];
      for (const [mainTerm, synonyms] of Object.entries(SYMPTOM_DICTIONARY)) {
        if (mainTerm === userSym || synonyms.includes(userSym)) {
          searchTerms = [mainTerm, ...synonyms];
          break; 
        }
      }

      // 2. Perform the Match
      let isMatch = false;
      let isCritical = false;

      // Check against Synonyms
      searchTerms.forEach(term => {
        if (diseaseText.includes(term)) {
          isMatch = true;
        }
        // Critical Check: Does this symptom appear in Red Flags?
        if (redFlagText.includes(term)) {
          isMatch = true;
          isCritical = true;
        }
      });

      // 3. Apply Scoring Weights
      if (isMatch) {
        if (isCritical) {
          score += 5; // RED FLAG MATCH (High Weight)
          criticalMatches.push(symptom);
        } else {
          score += 2; // Standard Match
          matches.push(symptom);
        }
      }
    });

    // 4. Calculate Confidence (Simple Algorithm)
    // Avoid division by zero
    const totalDiseaseFeatures = (data.clinicalFeatures?.symptoms?.length || 0) + (data.clinicalFeatures?.signs?.length || 0);
    const matchCount = matches.length + criticalMatches.length;
    
    // Confidence is relative to how many of the disease's known symptoms were found
    // Capped at 100%, boosted by matches
    let confidence = 0;
    if (totalDiseaseFeatures > 0) {
      confidence = Math.round((matchCount / totalDiseaseFeatures) * 100);
      // Boost confidence slightly for each match to reward matching multiple symptoms
      confidence += (matchCount * 5); 
    }

    // Only add if there is at least a minimal match score
    if (score > 0) {
      results.push({
        key: key, // Disease Name
        data: data,
        score: score,
        confidence: Math.min(confidence, 99), // Cap at 99%
        matchedSymptoms: matches,
        redFlags: criticalMatches
      });
    }
  }

  // 5. Sort Results: Highest Score First
  return results.sort((a, b) => b.score - a.score);
};