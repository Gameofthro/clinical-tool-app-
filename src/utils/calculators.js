/**
 * MASTER MEDICS - PHARMACEUTICAL & CLINICAL LEARNING ENGINE
 * Standards: CKD-EPI 2021, Mosteller BSA, Holliday-Segar 4-2-1.
 * Purpose: Precision educational modeling for students.
 */

/** * 1. PEDIATRIC DOSING MODEL 
 * Logic: Weight-based scaling with neonatal physiological guards.
 */
export const calculatePediatricDose = (weight, age, unit = 'kg', indication = 'general') => {
    let w = parseFloat(weight);
    let a = parseFloat(age);
    if (!w || isNaN(w)) return null;
    if (unit === 'lbs') w /= 2.205; // Standard conversion

    const isNeonatal = !isNaN(a) && a <= 0.08; // Defined as <= 1 month
    const factor = isNeonatal ? 5 : 10; 
    const dose = w * factor;

    return {
        value: dose.toFixed(1),
        unit: "mg",
        status: isNeonatal ? "Neonatal Simulation" : "Pediatric Simulation",
        interpretation: `Theoretical modeling at ${factor}mg/kg for ${indication} indication.`,
        actionPlan: "Study Pearl: Always verify weight-based results against the absolute adult maximum dose to prevent overexposure.",
        masteryInsight: isNeonatal 
            ? "Neonatal Insight: Immature renal/hepatic clearance and higher total body water require conservative dosing factors."
            : "Pediatric Insight: As children grow, drug distribution volumes shift; always check for age-specific maximums.",
        isCritical: isNeonatal
    };
};

/** * 2. RENAL STAGING MODEL 
 * Logic: CKD-EPI 2021 (Race-Neutral) + BSA Normalization (Mosteller).
 */
export const calculateGFR = (creatinine, age, gender, weight = null, height = null, unit = 'mg/dl') => {
    let scr = parseFloat(creatinine);
    let a = parseFloat(age);
    if (isNaN(scr) || isNaN(a) || scr <= 0) return null;
    if (unit === 'umol/l') scr /= 88.4;

    const kappa = gender === 'female' ? 0.7 : 0.9;
    const alpha = gender === 'female' ? -0.329 : -0.411;
    const gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, a) * (gender === 'female' ? 1.018 : 1.0);
    
    let res = { 
        value: gfr.toFixed(0), 
        unit: "mL/min/1.73m²", 
        masteryInsight: "Learning Pearl: CKD-EPI 2021 is preferred for staging as it eliminates race-based bias in renal assessment." 
    };

    // Advanced: Absolute GFR for NTI drug dosing
    if (weight && height) {
        const bsa = Math.sqrt((parseFloat(height) * parseFloat(weight)) / 3600); // Mosteller Formula
        res.absoluteGfr = ((gfr * bsa) / 1.73).toFixed(0);
        res.bsa = bsa.toFixed(2);
        res.masteryInsight = `Advanced Insight: Absolute GFR (${res.absoluteGfr} mL/min) is essential for dosing narrow therapeutic index (NTI) drugs.`;
    }

    const isLow = gfr < 60;
    res.status = gfr < 30 ? "Critical (G4-G5) Simulation" : isLow ? "Moderate (G3) Simulation" : "Normal (G1-G2) Simulation";
    res.isCritical = gfr < 30;
    res.interpretation = isLow ? "Theoretical modeling indicates decreased clearance." : "Renal function within standard simulation limits.";
    res.actionPlan = isLow ? "Study Case: Evaluate the need for dose reductions or interval extensions for renal-cleared drugs." : "Standard simulation parameters applied.";
    
    return res;
};

/** * 3. FLUID STRATEGY MODEL 
 * Logic: Holliday-Segar 4-2-1 hourly maintenance.
 */
export const calculateIVFluid = (weight) => {
    let w = parseFloat(weight);
    if (isNaN(w)) return null;
    // 4-2-1 Rule: 4mL/kg (first 10kg), 2mL/kg (next 10kg), 1mL/kg (rest)
    let rate = w <= 10 ? w * 4 : w <= 20 ? 40 + (w - 10) * 2 : 60 + (w - 20) * 1;
    
    return {
        value: rate.toFixed(0),
        unit: "mL/hr",
        status: "Maintenance Simulation",
        interpretation: "Modeled via 4-2-1 rule for maintenance water requirements.",
        actionPlan: "Academic Note: Monitor simulated fluid balance and electrolyte status to prevent overload.",
        masteryInsight: "Fluid Pearl: The 4-2-1 rule estimates basal requirements; additional volume is needed for fever or drains.",
        isCritical: false
    };
};

/** * 4. METABOLIC BMI MODEL 
 * Logic: Quetelet's index with clinical staging.
 */
export const calculateBMI = (weight, height, wUnit = 'kg', hUnit = 'cm') => {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return null;

    if (wUnit === 'lbs') w *= 0.453592;
    if (hUnit === 'cm') h /= 100;
    else if (hUnit === 'ft') h *= 0.3048;
    else if (hUnit === 'in') h *= 0.0254;

    const bmi = w / (h * h);
    let res = { value: bmi.toFixed(1), unit: "kg/m²", isCritical: (bmi >= 30 || bmi < 18.5) };

    if (bmi < 18.5) { res.status = "Underweight Simulation"; res.interpretation = "Simulation suggests potential nutritional risk."; }
    else if (bmi < 25) { res.status = "Normal Simulation"; res.interpretation = "Healthy weight modeling."; }
    else if (bmi < 30) { res.status = "Overweight Simulation"; res.interpretation = "Increased metabolic risk modeling."; }
    else { res.status = "Obese Simulation"; res.interpretation = "High-risk metabolic staging."; }

    res.actionPlan = "Study Case: Evaluate the impact of adiposity on the volume of distribution for lipophilic drugs.";
    res.masteryInsight = "Metabolic Pearl: BMI does not differentiate between muscle and fat; correlate with waist circumference for risk.";
    
    return res;
};

/** * 5. HEMODYNAMIC MAP MODEL 
 * Logic: Mean Arterial Pressure calculation.
 */
export const calculateMAP = (sbp, dbp) => {
    const s = parseFloat(sbp);
    const d = parseFloat(dbp);
    if (isNaN(s) || isNaN(d) || s <= d) return null;
    const map = (s + (2 * d)) / 3;
    
    return {
        value: map.toFixed(0),
        unit: "mmHg",
        status: map < 65 ? "Hypoperfusion Risk" : "Adequate Perfusion",
        isCritical: map < 65,
        interpretation: `Mean Arterial Pressure modeled at ${map.toFixed(0)} mmHg.`,
        actionPlan: "Academic Note: MAP <65 mmHg in simulation suggests potential organ hypoperfusion risk.",
        masteryInsight: "Hemodynamic Pearl: MAP represents the steady-state pressure driving blood to vital organs throughout the cardiac cycle."
    };
};