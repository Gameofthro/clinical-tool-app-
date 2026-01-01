import { diseaseDatabase } from "../data/diseases";
import { getMatchTier } from "./SymptomTriage";

/**
 * MASTER DIAGNOSTIC ENGINE v3.0
 * Features: Weighted Scoring, Negative Predictive Value, and Pattern Recognition.
 */

export const generateDDx = (selectedSymptoms, excludedSymptoms = []) => {
  if (!selectedSymptoms || selectedSymptoms.length === 0) return [];

  const results = [];

  for (const [key, data] of Object.entries(diseaseDatabase)) {
    let baseScore = 0;
    const matches = [];
    const redFlagsMatched = [];

    // --- STEP 3: WEIGHTED SCORING ALGORITHM ---
    selectedSymptoms.forEach((symptom) => {
      const normalizedInput = symptom.toLowerCase().trim();
      const triage = getMatchTier(normalizedInput, data);

      if (triage.tier > 0) {
        // Points: Cardinal (+50), Red Flag (+40), Associated (+10)
        const points = 10 * triage.weight; 
        baseScore += points;

        const matchDetail = {
          term: symptom,
          label: triage.label,
          tier: triage.tier
        };

        if (triage.tier === 2) redFlagsMatched.push(matchDetail);
        else matches.push(matchDetail);
      }
    });

    // --- STEP 5 PRE-LOGIC: EXCLUSION PENALTIES ---
    // Heavily penalizes diseases if a user explicitly excludes a Cardinal sign
    excludedSymptoms.forEach((eSym) => {
      const exTriage = getMatchTier(eSym.toLowerCase(), data);
      if (exTriage.tier === 1) baseScore -= 100; // Cardinal exclusion penalty
      if (exTriage.tier === 3) baseScore -= 20;  // Associated exclusion penalty
    });

    // --- STEP 4: PATTERN & CONSTELLATION MULTIPLIERS ---
    // If multiple Cardinal symptoms match (e.g., Fever + Rose Spots), the confidence spikes
    const cardinalCount = matches.filter(m => m.tier === 1).length;
    let finalScore = baseScore;

    if (cardinalCount >= 2) {
      finalScore *= 1.8; // High-confidence clinical triad boost
    } else if (cardinalCount === 1) {
      finalScore *= 1.2; // Single cardinal sign boost
    }

    if (finalScore > 0) {
      // Confidence is calculated relative to a "Perfect Match" threshold of 150 points
      const confidence = Math.min(Math.round((finalScore / 150) * 100), 99);

      results.push({
        key: key,
        data: data,
        score: finalScore,
        confidence: confidence,
        matchedSymptoms: matches,
        redFlags: redFlagsMatched,
        isCriticalMatch: redFlagsMatched.length > 0
      });
    }
  }

  // Final Sort: Highest Clinical Correlation first
  return results.sort((a, b) => b.score - a.score);
};

/**
 * PROFESSIONAL SYMPTOM EXTRACTOR
 * Dynamically builds the searchable list from the DB
 */
export const extractAllSymptoms = () => {
  const symptomSet = new Set();
  Object.values(diseaseDatabase).forEach((disease) => {
    const allFeatures = [
      ...(disease.clinicalFeatures?.symptoms || []),
      ...(disease.clinicalFeatures?.signs || []),
      ...(disease.redFlags || [])
    ];
    allFeatures.forEach(f => {
      const cleanRoot = f.split('(')[0].trim(); // Extract root symptom
      if (cleanRoot) symptomSet.add(cleanRoot);
    });
  });
  return Array.from(symptomSet).sort();
};