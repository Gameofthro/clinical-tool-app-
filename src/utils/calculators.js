/**
 * ULTIMATE CLINICAL UTILITIES ENGINE
 * Optimized for Pharm.D Students & Clinicians.
 * Includes: Renal Dose Adjustments, Neonatal Logic, and Hemodynamic Strategies.
 */

export const NARROW_THERAPEUTIC_INDEX_WARNINGS = [
    { drug: "Digoxin", caution: "Serum target: 0.5-0.9 ng/mL. Toxicity risk increases with hypokalemia." },
    { drug: "Lithium", caution: "Serum target: 0.6-1.2 mEq/L. High risk of toxicity with dehydration." },
    { drug: "Warfarin", caution: "Target INR: 2.0-3.0. Multiple drug-food interactions (Vit K)." },
    { drug: "Phenytoin", caution: "Serum target: 10-20 mg/L. Follows Michaelis-Menten (non-linear) kinetics." },
];

/** 1. Pediatric & Neonatal Dosing */
export const calculatePediatricDose = (weight, age, unit = 'kg') => {
    let w = parseFloat(weight);
    let a = parseFloat(age);
    if (!w || isNaN(w)) return null;
    if (unit === 'lbs') w /= 2.205;

    // Logic: Adjusts factor if patient is a neonate (<28 days / approx 1 month)
    const isNeonatal = !isNaN(a) && a <= 0.08; 
    const standardFactor = isNeonatal ? 5 : 10; 
    const dose = w * standardFactor;
    
    return {
        value: dose.toFixed(1),
        pearl: isNeonatal 
            ? "Neonatal metabolism: Hepatic/Renal clearance is immature. Standard factor reduced to 5mg/kg."
            : "Pediatric standard: 10mg/kg used. Always ensure dose does not exceed adult maximum."
    };
};

/** 2. BMI with Risk Stratification */
export const calculateBMI = (weight, height, wUnit = 'kg', hUnit = 'cm') => {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return null;

    if (wUnit === 'lbs') w *= 0.453592;
    if (hUnit === 'cm') h /= 100;
    else if (hUnit === 'ft') h *= 0.3048;
    else if (hUnit === 'in') h *= 0.0254;

    const bmi = w / (h * h);
    let category, risk, color;

    if (bmi < 18.5) { category = "Underweight"; risk = "Nutritional Deficiency"; color = "text-blue-500"; }
    else if (bmi < 25) { category = "Normal"; risk = "Minimal"; color = "text-emerald-500"; }
    else if (bmi < 30) { category = "Overweight"; risk = "Increased CVD/DM Risk"; color = "text-orange-500"; }
    else { category = "Obese"; risk = "High Metabolic/CVD Risk"; color = "text-red-500"; }

    return { value: bmi.toFixed(1), category, risk, color, pearl: "Normal BMI range: 18.5 – 24.9 kg/m²." };
};

/** 3. eGFR (CKD-EPI 2021) with Dose Adjustments */
export const calculateGFR = (creatinine, age, gender, unit = 'mg/dl') => {
    let scr = parseFloat(creatinine);
    let a = parseFloat(age);
    if (isNaN(scr) || isNaN(a) || scr <= 0) return null;

    if (unit === 'umol/l') scr /= 88.4;

    const kappa = gender === 'female' ? 0.7 : 0.9;
    const alpha = gender === 'female' ? -0.329 : -0.411;
    const gFactor = gender === 'female' ? 1.018 : 1.0;

    const gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, a) * gFactor;
    
    let adjustment = "100% of standard dose";
    let stage = "G1 (Normal)";

    if (gfr < 15) { stage = "G5 (Failure)"; adjustment = "Avoid or reduce dose by 75%"; }
    else if (gfr < 30) { stage = "G4 (Severe)"; adjustment = "Reduce dose by 50% or double interval"; }
    else if (gfr < 60) { stage = "G3 (Moderate)"; adjustment = "Reduce dose by 25%"; }
    else if (gfr < 90) { stage = "G2 (Mild)"; }
    
    return { 
        value: gfr > 90 ? ">90" : gfr.toFixed(0),
        stage,
        adjustment,
        pearl: "Renal dose adjustments are critical for NTI drugs like Vancomycin and Aminoglycosides."
    };
};

/** 4. Mean Arterial Pressure (MAP) */
export const calculateMAP = (sbp, dbp) => {
    const s = parseFloat(sbp);
    const d = parseFloat(dbp);
    if (isNaN(s) || isNaN(d) || s <= d) return null;

    const map = (s + (2 * d)) / 3;
    let status = "Normal Perfusion";
    let color = "text-emerald-500";
    if (map < 65) { status = "Hypoperfusion Risk"; color = "text-red-500"; }
    else if (map >= 100) { status = "High Afterload"; color = "text-orange-500"; }

    return { value: map.toFixed(0), status, color, pearl: "Target MAP for vital organ perfusion is typically >65 mmHg." };
};

/** 5. Fluid Maintenance & Strategy */
export const calculateMaintenanceFluid = (weight, unit = 'kg') => {
    let w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return null;
    if (unit === 'lbs') w *= 0.453592;

    let rate = 0;
    if (w <= 10) rate = w * 4;
    else if (w <= 20) rate = 40 + ((w - 10) * 2);
    else rate = 60 + ((w - 20) * 1);

    return { 
        rate: rate.toFixed(0), 
        pearl: "Holliday-Segar Formula: 4mL (first 10kg) + 2mL (second 10kg) + 1mL (rest)." 
    };
};

export const calculateIVFluidRate = ({ baseRate, fluidType, glucoseMgDl, sbp }) => {
    const rate = parseFloat(baseRate);
    const s = parseFloat(sbp);
    const glu = parseFloat(glucoseMgDl);
    if (isNaN(rate)) return null;

    let finalRate = rate;
    let rationale = [];
    let risk = [];
    let pearls = [];

    if (['NS', 'RL'].includes(fluidType)) {
        if (s && s < 90) {
            finalRate = rate * 1.5;
            rationale.push("Hypotension detected (SBP < 90). Rate increased for resuscitation.");
            risk.push("Monitor for fluid overload (lung crackles, edema).");
            pearls.push("Isotonic crystalloids are first-line for shock.");
        } else { rationale.push("Isotonic maintenance for euvolemic patient."); }
    }

    if (fluidType === 'D5NS') {
        if (glu && glu < 70) {
            finalRate = rate * 1.25;
            rationale.push("Hypoglycemia detected (<70 mg/dL). Rate increased to provide glucose.");
        } else if (glu && glu > 250) { risk.push("Hyperglycemia detected. Consider switching to NS."); }
        pearls.push("D5NS provides ~170 kcal/L for caloric support.");
    }

    return { 
        rate: finalRate.toFixed(0), 
        rationale: rationale.join(" "), 
        risk: risk.join(" "),
        pearl: pearls.join(" ")
    };
};