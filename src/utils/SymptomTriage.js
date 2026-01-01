/**
 * SYMPTOM TRIAGE LOGIC v1.0
 * Purpose: Analyzes a symptom's "Diagnostic Value" based on its position in the DB.
 */

export const getMatchTier = (symptomName, diseaseData) => {
  const symptoms = diseaseData.clinicalFeatures?.symptoms || [];
  const redFlags = diseaseData.redFlags || [];
  const normalizedInput = symptomName.toLowerCase().trim();
  
  // 1. Check for Red Flags (Tier 2)
  // Importance: High - These are critical diagnostic markers.
  const isRedFlag = redFlags.some(rf => rf.toLowerCase().includes(normalizedInput));
  if (isRedFlag) {
    return { tier: 2, weight: 4.0, label: "CRITICAL FLAG" };
  }

  // 2. Check for Cardinal Symptoms (Tier 1: The Top 3 Symptoms)
  // Importance: Highest - These define the disease's "Classic Presentation".
  const cardinalIndex = symptoms.findIndex(s => s.toLowerCase().includes(normalizedInput));
  
  if (cardinalIndex >= 0 && cardinalIndex <= 2) {
    return { tier: 1, weight: 5.0, label: "CARDINAL SIGN" };
  }

  // 3. Associated Symptoms (Tier 3: Everything else)
  // Importance: Low - These symptoms are common but non-specific.
  if (cardinalIndex > 2) {
    return { tier: 3, weight: 1.0, label: "ASSOCIATED" };
  }

  return { tier: 0, weight: 0, label: "NO MATCH" };
};