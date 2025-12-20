/**
 * Medical Calculation Utilities (Pharm.D Standard)
 * Updated for structured grid output and educational references.
 * Contains: Pediatric Dosing, BMI, eGFR (CKD-EPI 2021), MAP, and IV Fluid Management.
 */

// --- 1. CLINICAL SAFETY WARNINGS ---
export const NARROW_THERAPEUTIC_INDEX_WARNINGS = [
    { drug: "Digoxin", caution: "Serum levels: 0.5-0.9 ng/mL. Toxicity risk increases with hypokalemia." },
    { drug: "Lithium", caution: "Range: 0.6-1.2 mEq/L. Maintain consistent salt/water intake." },
    { drug: "Warfarin", caution: "Target INR 2.0-3.0. Multiple drug/food interactions (Vitamin K)." },
    { drug: "Vancomycin", caution: "Trough: 10-20 mcg/mL depending on infection severity/site." },
    { drug: "Phenytoin", caution: "Range: 10-20 mg/L. Correct for albumin (Sheiner-Tozer formula)." },
    { drug: "Theophylline", caution: "Range: 5-15 mcg/mL. Risk of seizures and arrhythmias." },
    { drug: "Carbamazepine", caution: "Range: 4-12 mg/L. Notable auto-inducer." },
];

// --- 2. EDUCATIONAL REFERENCE METADATA ---
export const CLINICAL_REFERENCES = {
    bmi: [
        { range: "< 18.5", label: "Underweight", color: "blue" },
        { range: "18.5 - 24.9", label: "Normal", color: "emerald" },
        { range: "25.0 - 29.9", label: "Overweight", color: "orange" },
        { range: "> 30.0", label: "Obese", color: "red" }
    ],
    gfr: [
        { stage: "G1", range: "≥ 90", desc: "Normal" },
        { stage: "G2", range: "60-89", desc: "Mild ↓" },
        { stage: "G3a", range: "45-59", desc: "Mod ↓" },
        { stage: "G3b", range: "30-44", desc: "Mod-Sev ↓" },
        { stage: "G4", range: "15-29", desc: "Severe ↓" },
        { stage: "G5", range: "< 15", desc: "Failure" }
    ],
    map: [
        { range: "> 65", label: "Adequate Perfusion", color: "emerald" },
        { range: "< 65", label: "Low Perfusion / Ischemia Risk", color: "red" }
    ]
};

// --- 3. PEDIATRIC DOSE CALCULATOR ---
export const calculatePediatricDose = (weight, drugType = 'paracetamol', unit = 'kg') => {
    if (!weight) return null;
    let weightInKg = unit === 'lbs' ? parseFloat(weight) / 2.205 : parseFloat(weight);
    
    if (isNaN(weightInKg) || weightInKg <= 0) return null;

    // Clinical Protocols (mg/kg/dose)
    const protocols = {
        paracetamol: { dose: 15, max: 1000, frequency: "q4-6h", info: "10-15 mg/kg" },
        ibuprofen: { dose: 10, max: 800, frequency: "q6-8h", info: "5-10 mg/kg" },
        amoxicillin: { dose: 30, max: 1000, frequency: "q8-12h", info: "20-40 mg/kg" },
        ceftriaxone: { dose: 50, max: 2000, frequency: "q12-24h", info: "50-100 mg/kg" }
    };

    const config = protocols[drugType] || { dose: 10, max: 1000, frequency: "prn", info: "Standard" };
    let calculated = weightInKg * config.dose;
    const finalDose = Math.min(calculated, config.max);

    return {
        value: finalDose.toFixed(1),
        frequency: config.frequency,
        info: config.info,
        max: config.max
    };
};

// --- 4. BMI CALCULATOR ---
export const calculateBMI = (weight, height, weightUnit = 'kg', heightUnit = 'cm') => {
    if (!weight || !height) return null;

    const weightInKg = weightUnit === 'lbs' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    let heightInMeters = parseFloat(height);
    if (heightUnit === 'cm') heightInMeters /= 100;
    else if (heightUnit === 'ft') heightInMeters *= 0.3048; 
    else if (heightUnit === 'in') heightInMeters *= 0.0254;

    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters === 0) return null;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    
    let category = "Normal";
    let color = "emerald";
    if (bmi < 18.5) { category = "Underweight"; color = "blue"; }
    else if (bmi >= 25 && bmi < 30) { category = "Overweight"; color = "orange"; }
    else if (bmi >= 30) { category = "Obese"; color = "red"; }

    return { value: bmi.toFixed(1), category, color };
};

// --- 5. eGFR CALCULATION (CKD-EPI 2021 Race-Free) ---
export const calculateGFR = (creatinine, age, gender, unit = 'mg/dl') => {
    if (!creatinine || !age) return null;

    let scr = unit === 'umol/l' ? parseFloat(creatinine) / 88.4 : parseFloat(creatinine);
    const ageVal = parseFloat(age);

    if (isNaN(scr) || isNaN(ageVal) || scr <= 0) return null;

    const kappa = gender === 'female' ? 0.7 : 0.9;
    const alpha = gender === 'female' ? -0.241 : -0.302;
    const genderFactor = gender === 'female' ? 1.012 : 1.0;

    let gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, ageVal) * genderFactor;
    
    let stage = "G1";
    let desc = "Normal";
    if (gfr < 15) { stage = "G5"; desc = "Kidney Failure"; }
    else if (gfr < 30) { stage = "G4"; desc = "Severely ↓"; }
    else if (gfr < 60) { stage = "G3"; desc = "Moderately ↓"; }
    else if (gfr < 90) { stage = "G2"; desc = "Mildly ↓"; }

    return { value: gfr.toFixed(0), stage, desc };
};

// --- 6. MEAN ARTERIAL PRESSURE (MAP) ---
export const calculateMAP = (sbp, dbp) => {
    if (!sbp || !dbp) return null;
    const s = parseFloat(sbp);
    const d = parseFloat(dbp);
    
    if (isNaN(s) || isNaN(d) || s <= d) return null;

    const map = (s + (2 * d)) / 3;
    
    let status = map < 65 ? "Low Perfusion" : "Adequate Perfusion";
    let color = map < 65 ? "red" : "emerald";

    return { value: map.toFixed(0), status, color };
};

// --- 7. MAINTENANCE FLUID (4-2-1 Rule) ---
export const calculateMaintenanceFluid = (weight, unit = 'kg') => {
    if (!weight) return null;
    const w = unit === 'lbs' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    
    let rate = 0;
    if (w <= 10) rate = w * 4;
    else if (w <= 20) rate = 40 + (w - 10) * 2;
    else rate = 60 + (w - 20) * 1;

    return { 
        rate: rate.toFixed(0), 
        daily: (rate * 24).toFixed(0) 
    };
};

// --- 8. DYNAMIC FLUID RATE CALCULATOR ---
export const calculateIVFluidRate = ({ baseRate, fluidType, glucoseMgDl, sbp }) => {
    const rate = parseFloat(baseRate);
    if (isNaN(rate) || rate <= 0) return { error: "Invalid base rate." };

    let rationale = "Standard maintenance based on Holliday-Segar 4-2-1 rule.";
    let risk = "";
    let finalRate = rate;

    if (fluidType === 'NS') {
        rationale = "Isotonic: Used for volume resuscitation and replacement.";
        if (sbp && parseFloat(sbp) < 90) {
            finalRate = rate * 1.5; 
            rationale = "Resuscitation protocol: Rate increased due to SBP < 90.";
            risk = "Monitor for hyperchloremic acidosis in large volumes.";
        }
    } 
    else if (fluidType === 'RL') {
        rationale = "Isotonic: Balanced electrolyte solution with bicarbonate precursor.";
        if (sbp && parseFloat(sbp) < 90) {
            finalRate = rate * 1.5;
            risk = "Caution: Contains potassium (hyperkalemia) and calcium.";
        }
    } 
    else if (fluidType === 'D5NS') {
        rationale = "Maintenance: Provides free water, sodium, and calories.";
        if (glucoseMgDl && parseFloat(glucoseMgDl) < 70) {
            finalRate = rate * 1.25; 
            rationale = "Hypoglycemia adjustment: Increased dextrose delivery.";
        }
    } 
    else if (fluidType === 'D5W') {
        rationale = "Free Water: Provides calories but no electrolytes.";
        if (sbp && parseFloat(sbp) < 100) {
            risk = "CRITICAL: Avoid in shock; risk of cerebral edema.";
        }
    }
    else if (fluidType === 'D10W') {
        rationale = "Concentrated Dextrose: Primarily for hypoglycemia or insulin protocols.";
    }

    return {
        rate: finalRate.toFixed(0),
        rationale: rationale,
        risk: risk
    };
};