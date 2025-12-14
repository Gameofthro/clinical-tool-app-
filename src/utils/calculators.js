/**
 * Medical Calculation Utilities
 * Contains algorithms for Pediatric Dosing, BMI, Renal Function, MAP, and Fluid Maintenance.
 * * NOTE: These calculations are for EDUCATIONAL REFERENCE ONLY. Clinical decisions MUST
 * be based on validated institutional protocols and professional medical judgment.
 */

// --- CLINICAL SAFETY WARNINGS (Narrow Therapeutic Index Drugs) ---
export const NARROW_THERAPEUTIC_INDEX_WARNINGS = [
    { drug: "Digoxin", caution: "Requires monitoring of serum levels (0.5-0.9 ng/mL)." },
    { drug: "Lithium", caution: "Requires monitoring of serum levels (0.6-1.2 mEq/L)." },
    { drug: "Warfarin", caution: "Requires monitoring of INR (target 2.0-3.0 generally)." },
    { drug: "Phenytoin", caution: "Requires monitoring of serum levels (10-20 mg/L)." },
    { drug: "Theophylline", caution: "Requires monitoring of serum levels (5-15 mcg/mL)." },
    { drug: "Carbamazepine", caution: "Requires monitoring of serum levels (4-12 mg/L)." },
];


// --- 1. PEDIATRIC DOSE (Weight-Based Standard Placeholder) ---
export const calculatePediatricDose = (weight, adultDose, weightUnit = 'kg') => {
    // FIX: Removed unsafe Clark's Rule (Adult Dose input is ignored for safety compliance).
    if (!weight) return null;
    
    let weightInKg = parseFloat(weight);
    if (weightUnit === 'lbs') {
        weightInKg = weightInKg / 2.205;
    }
    
    if (isNaN(weightInKg) || weightInKg <= 0) return "Error: Invalid weight input.";

    // Educational Placeholder: Assuming a standard demonstrative pediatric dose (e.g., 10 mg/kg/dose)
    const mgPerKgDose = 10;
    const resultMg = weightInKg * mgPerKgDose;
    
    // Output formatted result with context
    return `Calculated Dose: ${resultMg.toFixed(1)} mg (based on ${mgPerKgDose} mg/kg)`;
};

// --- 2. BMI CALCULATOR ---
export const calculateBMI = (weight, height, weightUnit = 'kg', heightUnit = 'cm') => {
    if (!weight || !height) return null;

    // Convert Weight to kg
    const weightInKg = weightUnit === 'lbs' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    
    // Convert Height to meters
    let heightInMeters = parseFloat(height);
    if (heightUnit === 'cm') {
        heightInMeters = heightInMeters / 100;
    } else if (heightUnit === 'ft') {
        // Assuming height in feet is total feet (e.g., 5.5 ft = 5 feet 6 inches)
        heightInMeters = heightInMeters * 0.3048; 
    } else if (heightUnit === 'in') {
        heightInMeters = heightInMeters * 0.0254;
    }

    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters === 0) return null;

    // Formula: kg / m^2
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    
    // Categorize (WHO/CDC standard classification)
    let category = "Normal";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 25 && bmi < 30) category = "Overweight";
    else if (bmi >= 30) category = "Obese";

    return { value: bmi.toFixed(1), category };
};

// --- 3. eGFR CALCULATION (CKD-EPI 2021 Approximation) ---
// Note: This uses a simplified approximation of the race-free CKD-EPI 2021 formula.
export const calculateGFR = (creatinine, age, gender, unit = 'mg/dl') => {
    if (!creatinine || !age) return null;

    // Convert µmol/L to mg/dL (Standard factor: 88.4)
    let scr = unit === 'umol/l' ? parseFloat(creatinine) / 88.4 : parseFloat(creatinine);
    const ageVal = parseFloat(age);

    if (isNaN(scr) || isNaN(ageVal) || scr <= 0) return null;

    // Set kappa (κ) and alpha (α) based on gender and creatinine level
    let kappa = gender === 'female' ? 0.7 : 0.9;
    let alpha = gender === 'female' ? -0.329 : -0.411; // exponent
    let gfrFactor = gender === 'female' ? 1.018 : 1.0; // Gender factor

    // CKD-EPI 2021 Formula Structure (Simplified/Approximate)
    // Formula: 142 * min(SCr/κ, 1)^α * max(SCr/κ, 1)^-1.200 * 0.9938^Age * [Gender Factor]
    
    // Calculation:
    let gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, ageVal) *
              gfrFactor;
    
    if (gfr > 90) return ">90";
    
    return gfr.toFixed(0);
};

// --- 4. MEAN ARTERIAL PRESSURE (MAP) ---
export const calculateMAP = (sbp, dbp) => {
    if (!sbp || !dbp) return null;
    const s = parseFloat(sbp);
    const d = parseFloat(dbp);
    
    if (isNaN(s) || isNaN(d) || s <= d) return null;

    // Formula: (SBP + 2*DBP) / 3
    const map = (s + (2 * d)) / 3;
    
    let status = "Normal Perfusion";
    if (map < 65) status = "Low Perfusion (Critical)";
    else if (map >= 100) status = "High Afterload / Vasoconstriction";

    return { value: map.toFixed(0), status };
};


// --- 5. FLUID MANAGEMENT MODULE (Core 4-2-1 Rule) ---
export const calculateMaintenanceFluid = (weight, unit = 'kg') => {
    if (!weight) return null;
    
    const w = unit === 'lbs' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    let rate = 0;

    // 4-2-1 Rule (Holliday-Segar Formula)
    if (w <= 10) {
        rate = w * 4; // 4 mL/kg/hr for first 10 kg
    } else if (w <= 20) {
        rate = (10 * 4) + ((w - 10) * 2); // + 2 mL/kg/hr for next 10 kg
    } else {
        rate = (10 * 4) + (10 * 2) + ((w - 20) * 1); // + 1 mL/kg/hr for remaining kg
    }

    return { 
        rate: rate.toFixed(0), // mL/hr
        daily: (rate * 24).toFixed(0) // Total mL/day
    };
};

// --- 6. DYNAMIC FLUID RATE CALCULATOR (New Module Logic) ---
export const calculateIVFluidRate = ({ baseRate, fluidType, glucoseMgDl, sbp }) => {
    const rate = parseFloat(baseRate);
    if (isNaN(rate) || rate <= 0) return null;

    let rationale = "";
    let risk = "";
    let finalRate = rate;

    // NS (0.9% NaCl): Isotonic. Used for volume expansion/resuscitation.
    if (fluidType === 'NS') {
        rationale = "Recommended for initial volume resuscitation and replacement in patients without heart failure or severe hyponatremia. Isotonic.";
        if (sbp && sbp < 90) {
            finalRate = rate * 1.5; // Example: Increase rate for hypotension (though bolus needed for true shock)
            risk = "Caution: Monitor for hyperchloremic acidosis if used in large volumes.";
        }
    } 
    // RL (Lactated Ringer's): Isotonic. Used for volume replacement.
    else if (fluidType === 'RL') {
        rationale = "Recommended for volume resuscitation. Contains lactate (bicarb precursor), which may be preferred over NS to avoid hyperchloremic acidosis. Isotonic.";
        if (sbp && sbp < 90) {
            finalRate = rate * 1.5;
            risk = "Caution: Contains potassium (avoid in hyperkalemia) and calcium (may clot if transfusing blood).";
        }
    } 
    // D5NS (Dextrose 5% in NS): Maintenance fluid.
    else if (fluidType === 'D5NS') {
        rationale = "Used for maintenance therapy. Provides free water, sodium, and dextrose to prevent hypoglycemia. Effectively hypotonic in the body.";
        if (glucoseMgDl && glucoseMgDl < 70) {
            finalRate = rate * 1.25; // Increase glucose delivery
            risk = "Risk of hyperglycemia if maintenance rate is too high or patient is diabetic.";
        }
    } 
    // D5W (Dextrose 5% in Water): Free water.
    else if (fluidType === 'D5W') {
        rationale = "Used for providing free water or diluting IV medications. Provides minimal calories and no electrolytes.";
        if (sbp && sbp < 100) {
            risk = "CRITICAL: Contraindicated in shock/hypovolemia (no sodium). Risk of cerebral edema.";
        }
    }
    // D10W (Dextrose 10% in Water): Hypoglycemia/Insulin infusion.
    else if (fluidType === 'D10W') {
        rationale = "Used for treating hypoglycemia or in DKA management to switch from D5 to D10 when glucose is below 250 mg/dL.";
        if (!glucoseMgDl) {
            risk = "CRITICAL: Use requires frequent glucose monitoring.";
        }
        finalRate = rate * 1.0; // Rate remains base rate unless specific insulin calculation used
    }

    return {
        rate: finalRate.toFixed(0),
        rationale: rationale,
        risk: risk
    };
};