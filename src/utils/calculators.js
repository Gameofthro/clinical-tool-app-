/**
 * MASTER CLINICAL ENGINE v4.0 (2026)
 * Standards: CKD-EPI 2021 (Race-Neutral), Mosteller BSA, Holliday-Segar 4-2-1.
 * Purpose: Professional Pharmaceutical & Medical Learning Suite.
 */

/** * 1. PEDIATRIC DOSING PROTOCOL
 * Logic: Weight-based dosing with neonatal physiological guards.
 */
export const calculatePediatricDose = (weight, age, unit = 'kg') => {
  let w = parseFloat(weight); 
  let a = parseFloat(age);
  
  if (!w || isNaN(w)) return null;
  
  // Standard Pound to Kilogram conversion
  if (unit === 'lbs') w /= 2.20462;
  
  // Neonatal physiology guard (Defined as age <= 28 days or 0.08 years)
  const isNeonatal = !isNaN(a) && a <= 0.08;
  const factor = isNeonatal ? 5 : 10; 
  const dose = w * factor;

  return {
    value: dose.toFixed(1),
    unit: "mg",
    status: isNeonatal ? "Neonatal Protocol" : "Pediatric Protocol",
    isCritical: isNeonatal,
    interpretation: `Clinical dose calculated at ${factor}mg/kg based on pediatric weight-based standards.`,
    actionPlan: "Pharmacological Note: Ensure the calculated dose does not exceed the absolute adult maximum dose for the specific drug.",
    masteryInsight: "Clinical Pearl: Neonates have higher total body water and immature renal/hepatic clearance, often requiring reduced mg/kg factors."
  };
};

/** * 2. RENAL CLEARANCE PROTOCOL (eGFR)
 * Logic: 2021 CKD-EPI Race-Neutral Equation + Mosteller BSA Normalization.
 */
export const calculateGFR = (creatinine, age, gender, weight = null, height = null, unit = 'mg/dl') => {
  let scr = parseFloat(creatinine); 
  let a = parseFloat(age);
  
  if (isNaN(scr) || isNaN(a) || scr <= 0) return null;
  
  // Standard μmol/L to mg/dL conversion
  if (unit === 'umol/l') scr /= 88.4;

  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.329 : -0.411;
  
  const gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, a) * (gender === 'female' ? 1.018 : 1.0);
  
  let res = { 
    value: gfr.toFixed(0), 
    unit: "mL/min/1.73m²",
    isCritical: gfr < 30 
  };

  // BSA Normalization for Absolute GFR (Crucial for NTI Drug Dosing)
  if (weight && height) {
    const bsa = Math.sqrt((parseFloat(height) * parseFloat(weight)) / 3600);
    res.absoluteGfr = ((gfr * bsa) / 1.73).toFixed(0);
    res.bsa = bsa.toFixed(2);
  }

  const isLow = gfr < 60;
  res.status = isLow ? "Decreased Renal Clearance" : "Normal Renal Function";
  res.interpretation = `Renal Stage: ${gfr < 15 ? 'G5 (Kidney Failure)' : gfr < 30 ? 'G4 (Severely Decreased)' : gfr < 60 ? 'G3 (Moderately Decreased)' : 'G1-G2 (Normal to Mildly Decreased)'}.`;
  res.actionPlan = isLow ? "Clinical Note: Adjust dosing intervals for renal-cleared medications; monitor for potential drug accumulation." : "Standard clinical dosing protocols typically apply.";
  res.masteryInsight = "2021 Update: The CKD-EPI formula now excludes race to ensure equitable and precise renal assessment in global healthcare.";
  
  return res;
};

/** * 3. INTRAVENOUS FLUID MANAGEMENT
 * Logic: Holliday-Segar 4-2-1 Maintenance + Resuscitation Hemodynamics.
 */
export const calculateIVFluid = (weight, type, sbp = null) => {
  let w = parseFloat(weight); 
  if (isNaN(w)) return null;

  // 4-2-1 Maintenance Rule
  let rate = w <= 10 ? w * 4 : w <= 20 ? 40 + (w - 10) * 2 : 60 + (w - 20) * 1;
  
  let res = { 
    value: rate.toFixed(0), 
    unit: "mL/hr",
    status: "Maintenance Protocol",
    isCritical: false,
    interpretation: "Maintenance rate calculated using the Holliday-Segar 4-2-1 rule for basal metabolic requirements.",
    actionPlan: "Clinical Note: Evaluate for fluid overload (e.g., peripheral edema or lung crackles) in patients with cardiac or renal comorbidities.",
    masteryInsight: "Fluid Pearl: Maintenance fluids only address daily metabolic needs; replacement for ongoing losses (e.g., GI or surgical) must be calculated separately."
  };

  // Resuscitation Logic: Increased rate for NS/RL in Hypotension (SBP < 90)
  if ((type === 'NS' || type === 'RL') && sbp && parseFloat(sbp) < 90) {
    res.value = (rate * 1.5).toFixed(0);
    res.status = "Resuscitation Protocol";
    res.isCritical = true;
    res.interpretation = "Aggressive resuscitation protocol initiated: rate increased due to detected clinical hypotension (SBP < 90 mmHg).";
  }
  
  return res;
};

/** * 4. METABOLIC BMI STAGING
 * Logic: Quetelet's index for body mass distribution.
 */
export const calculateBMI = (weight, height, wUnit = 'kg') => {
  let w = parseFloat(weight); 
  let h = parseFloat(height);
  
  if (isNaN(w) || isNaN(h) || h === 0) return null;
  
  if (wUnit === 'lbs') w *= 0.453592;
  
  // Height conversion: Centimeters to Meters
  const heightMeters = h / 100;
  const bmi = w / (heightMeters * heightMeters);
  
  let res = { 
    value: bmi.toFixed(1), 
    unit: "kg/m²", 
    isCritical: (bmi >= 30 || bmi < 18.5) 
  };

  if (bmi < 18.5) res.status = "Underweight"; 
  else if (bmi < 25) res.status = "Normal Weight"; 
  else if (bmi < 30) res.status = "Overweight"; 
  else res.status = "Obese";

  res.interpretation = `Metabolic classification: ${res.status}.`;
  res.actionPlan = "Clinical Note: Evaluate the impact of adiposity on the volume of distribution (Vd) for lipophilic medications.";
  res.masteryInsight = "Pharmacological Pearl: BMI is a measure of total mass; body composition (fat vs. muscle) may significantly alter drug kinetics.";
  
  return res;
};

/** * 5. HEMODYNAMIC PERFUSION (MAP)
 * Logic: Mean Arterial Pressure (MAP) for organ perfusion pressure.
 */
export const calculateMAP = (sbp, dbp) => {
  const s = parseFloat(sbp); 
  const d = parseFloat(dbp);
  
  if (isNaN(s) || isNaN(d) || s <= d) return null;
  
  const map = (s + (2 * d)) / 3;
  
  return {
    value: map.toFixed(0), 
    unit: "mmHg",
    status: map < 65 ? "Hypoperfusion Risk" : "Optimal Perfusion",
    isCritical: map < 65,
    interpretation: `Mean Arterial Pressure (MAP) of ${map.toFixed(0)} mmHg indicates perfusion state.`,
    actionPlan: map < 65 ? "Clinical Warning: MAP < 65 mmHg suggests inadequate pressure to drive vital organ perfusion. Evaluate for shock." : "Continue hemodynamic monitoring for stability.",
    masteryInsight: "Hemodynamic Pearl: MAP is the average pressure in a patient's arteries during one cardiac cycle and is considered a better indicator of perfusion than SBP."
  };
};