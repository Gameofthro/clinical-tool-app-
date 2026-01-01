/**
 * MASTER SYMPTOM LIBRARY v1.0
 * Semantic mapping of patient language to clinical pathology.
 * Purpose: Provides the "Clinical Granularity" needed for weighted matching.
 */

export const SYMPTOM_DICTIONARY = {
  // SYSTEM: CONSTITUTIONAL
  "fever": {
    clinicalTerms: ["pyrexia", "febrile", "high temperature", "chills"],
    qualifiers: ["step-ladder", "continuous", "intermittent", "remittent", "night sweats"],
    system: "Constitutional"
  },
  "fatigue": {
    clinicalTerms: ["malaise", "lethargy", "weakness", "exhaustion"],
    qualifiers: ["chronic", "post-exertional"],
    system: "Constitutional"
  },
  "weight loss": {
    clinicalTerms: ["cachexia", "wasting", "loss of appetite", "anorexia"],
    qualifiers: ["unintentional", "rapid"],
    system: "Constitutional"
  },

  // SYSTEM: GASTROINTESTINAL (Critical for Typhoid vs. Lymphoma)
  "abdominal pain": {
    clinicalTerms: ["epigastric pain", "cramps", "colic", "tenderness"],
    qualifiers: ["generalized", "localized", "dull ache"],
    system: "Gastrointestinal"
  },
  "diarrhea": {
    clinicalTerms: ["loose motion", "watery stool", "frequent stools"],
    qualifiers: ["pea-soup", "bloody", "mucoid"],
    system: "Gastrointestinal"
  },
  "constipation": {
    clinicalTerms: ["infrequent bowel movements", "hard stools"],
    qualifiers: ["early-stage", "obstipation"],
    system: "Gastrointestinal"
  },

  // SYSTEM: DERMATOLOGICAL
  "rash": {
    clinicalTerms: ["eruption", "exanthema", "urticaria", "spots"],
    qualifiers: ["rose spots", "petechiae", "maculopapular"],
    system: "Dermatological"
  },

  // SYSTEM: CARDIOVASCULAR
  "bradycardia": {
    clinicalTerms: ["slow heart rate", "slow pulse"],
    qualifiers: ["relative bradycardia", "faget sign"],
    system: "Cardiovascular"
  },

  // SYSTEM: LYMPHATIC (Critical for Lymphoma/Hematology)
  "lymphadenopathy": {
    clinicalTerms: ["swollen glands", "lymph node swelling", "bubo"],
    qualifiers: ["painless", "rubbery", "generalized", "localized"],
    system: "Lymphatic"
  },

  // SYSTEM: NEUROLOGICAL
  "headache": {
    clinicalTerms: ["cephalgia", "head pain", "throbbing"],
    qualifiers: ["frontal", "occipital", "tension"],
    system: "Neurological"
  }
};

/**
 * HELPER: Semantic Matcher
 * Finds the "Root" symptom even if the user uses patient-friendly slang.
 */
export const getClinicalRoot = (userInput) => {
  const input = userInput.toLowerCase().trim();
  for (const [root, data] of Object.entries(SYMPTOM_DICTIONARY)) {
    if (root === input || 
        data.clinicalTerms.includes(input) || 
        data.qualifiers.some(q => input.includes(q))) {
      return { root, ...data };
    }
  }
  return null;
};