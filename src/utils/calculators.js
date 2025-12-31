/**
 * MASTER MEDICS CLINICAL ENGINE
 * Unified Medical Decision Support for Clinicians.
 * Logic: Mandatory + Optional Advanced Parameters.
 */

// Global Reference Data
export const CLINICAL_CONSTANTS = {
    NTI_DRUGS: [
        { drug: "Digoxin", caution: "Target: 0.5-0.9 ng/mL. Monitor K+ levels strictly.", toxicity: "Visual disturbances, bradycardia." },
        { drug: "Lithium", caution: "Target: 0.6-1.2 mEq/L. Requires euvolemia.", toxicity: "Tremor, ataxia, confusion." },
        { drug: "Warfarin", caution: "Target INR: 2.0-3.0. Vit-K consistency is key.", toxicity: "Unexplained bruising/bleeding." },
        { drug: "Phenytoin", caution: "Target: 10-20 mg/L. Non-linear kinetics.", toxicity: "Nystagmus, lethargy." },
    ]
};

/** 1. PEDIATRIC & NEONATAL MASTERY */
export const calculatePediatricDose = (weight, age, unit = 'kg', indication = 'general') => {
    let w = parseFloat(weight);
    let a = parseFloat(age);
    if (!w || isNaN(w)) return null;
    if (unit === 'lbs') w /= 2.205;

    const isNeonatal = !isNaN(a) && a <= 0.08; 
    const factor = isNeonatal ? 5 : 10; 
    const dose = w * factor;
    
    // Mastery Insight based on Neonatal Physiology
    const insight = isNeonatal 
        ? "Neonates have a higher % of total body water and immature renal/hepatic clearance. Dosing factors are reduced to prevent accumulation."
        : "Standard pediatric dosing. Note: Adult maximum doses must never be exceeded regardless of weight-based calculation.";

    return {
        value: dose.toFixed(1),
        unit: "mg",
        status: isNeonatal ? "Neonatal Protocol" : "Standard Pediatric",
        interpretation: `Dose calculated at ${factor}mg/kg for ${indication} use.`,
        actionPlan: "Verify dose against age-specific maximums and concentrate available.",
        masteryInsight: insight,
        isCritical: isNeonatal
    };
};

/** 2. RENAL MASTERY (CKD-EPI 2021 + BSA Normalization) */
export const calculateGFR = (creatinine, age, gender, weight = null, height = null, unit = 'mg/dl') => {
    let scr = parseFloat(creatinine);
    let a = parseFloat(age);
    if (isNaN(scr) || isNaN(a) || scr <= 0) return null;

    if (unit === 'umol/l') scr /= 88.4;

    const kappa = gender === 'female' ? 0.7 : 0.9;
    const alpha = gender === 'female' ? -0.329 : -0.411;
    const gFactor = gender === 'female' ? 1.018 : 1.0;

    let gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, a) * gFactor;
    
    let result = {
        value: gfr > 90 ? ">90" : gfr.toFixed(0),
        unit: "mL/min/1.73m²",
        masteryInsight: "The CKD-EPI 2021 formula is the current gold standard as it removes race-based coefficients for more equitable care.",
    };

    // Advanced: BSA Normalization if Ht/Wt provided
    if (weight && height) {
        const bsa = Math.sqrt((parseFloat(height) * parseFloat(weight)) / 3600);
        const absoluteGfr = (gfr * bsa) / 1.73;
        result.absoluteGfr = absoluteGfr.toFixed(0);
        result.masteryInsight += ` BSA-Adjusted GFR (${result.absoluteGfr} mL/min) is more accurate for narrow-window drug dosing in non-average body sizes.`;
    }

    // KDIGO Staging & Action Plan
    if (gfr < 15) { 
        result.status = "Critical (G5)"; 
        result.interpretation = "Kidney Failure / End-Stage Renal Disease.";
        result.actionPlan = "Emergency: Review all medications. Avoid nephrotoxins. Consult Nephrology for dialysis readiness.";
        result.isCritical = true;
    } else if (gfr < 30) { 
        result.status = "Severe Decrease (G4)"; 
        result.interpretation = "Severely decreased renal function.";
        result.actionPlan = "Reduce dose by 50% or double the interval for renal-cleared drugs (e.g., Vancomycin, Enoxaparin).";
        result.isCritical = true;
    } else if (gfr < 60) { 
        result.status = "Moderate Decrease (G3)"; 
        result.interpretation = "Moderately decreased function. Chronic Kidney Disease likely.";
        result.actionPlan = "Reduce doses by 25%. Monitor electrolytes (K+, PO4) and blood pressure strictly.";
        result.isCritical = false;
    } else {
        result.status = "Normal/Mildly Decreased (G1-G2)";
        result.interpretation = "Renal function is within acceptable clinical limits.";
        result.actionPlan = "Continue standard dosing. Re-evaluate if patient becomes acutely ill or dehydrated.";
        result.isCritical = false;
    }

    return result;
};

/** 3. METABOLIC MASTERY (BMI + Pulse Pressure Insight) */
export const calculateBMI = (weight, height, wUnit = 'kg', hUnit = 'cm') => {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return null;

    if (wUnit === 'lbs') w *= 0.453592;
    if (hUnit === 'cm') h /= 100;
    else if (hUnit === 'ft') h *= 0.3048;
    else if (hUnit === 'in') h *= 0.0254;

    const bmi = w / (h * h);
    let res = { value: bmi.toFixed(1), unit: "kg/m²" };

    if (bmi < 18.5) { 
        res.status = "Underweight"; 
        res.actionPlan = "Evaluate for nutritional deficiencies, malabsorption, or eating disorders.";
        res.masteryInsight = "Underweight status in the elderly is a high-risk factor for frailty and increased mortality.";
    } else if (bmi < 25) { 
        res.status = "Normal"; 
        res.actionPlan = "Maintain current lifestyle. Focus on balanced nutrition and metabolic health.";
        res.masteryInsight = "BMI is a population tool; it does not distinguish between muscle mass and adipose tissue.";
    } else if (bmi < 30) { 
        res.status = "Overweight"; 
        res.actionPlan = "Screen for pre-diabetes and hypertension. Suggest increased physical activity.";
        res.masteryInsight = "Overweight BMI may carry a 'protection paradox' in certain chronic diseases like HF, but increases long-term CVD risk.";
    } else { 
        res.status = "Obese"; 
        res.actionPlan = "High clinical priority. Implement weight management and screen for Sleep Apnea/Metabolic Syndrome.";
        res.masteryInsight = "Obesity is a pro-inflammatory state that significantly alters the volume of distribution for lipophilic drugs.";
    }

    return res;
};

/** 4. HEMODYNAMIC MASTERY (MAP + Pulse Pressure) */
export const calculateMAP = (sbp, dbp) => {
    const s = parseFloat(sbp);
    const d = parseFloat(dbp);
    if (isNaN(s) || isNaN(d) || s <= d) return null;

    const map = (s + (2 * d)) / 3;
    const pulsePressure = s - d;
    
    let res = {
        value: map.toFixed(0),
        unit: "mmHg",
        masteryInsight: `Pulse Pressure is ${pulsePressure} mmHg. High pulse pressure (>60) often indicates arterial stiffness or aortic regurgitation.`
    };

    if (map < 65) { 
        res.status = "Hypoperfusion Risk"; 
        res.actionPlan = "CRITICAL: Vital organ perfusion is compromised. Consider fluid bolus or vasopressors.";
        res.isCritical = true;
    } else if (map > 100) { 
        res.status = "High Afterload"; 
        res.actionPlan = "Increased cardiac workload. Evaluate for hypertensive urgency or pain/distress.";
        res.isCritical = false;
    } else {
        res.status = "Adequate Perfusion";
        res.actionPlan = "Perfusion is stable. Target MAP achieved for vital organs.";
        res.isCritical = false;
    }

    return res;
};

/** 5. FLUID & TONICITY MASTERY */
export const calculateIVFluidStrategy = (weight, type, glucose = null, sbp = null) => {
    let w = parseFloat(weight);
    if (isNaN(w)) return null;

    // Maintenance (4-2-1 Rule)
    let rate = w <= 10 ? w * 4 : w <= 20 ? 40 + (w - 10) * 2 : 60 + (w - 20) * 1;
    
    let res = {
        value: rate.toFixed(0),
        unit: "mL/hr",
        status: "Maintenance Rate",
        masteryInsight: "The Holliday-Segar rule estimates caloric requirements; 100kcal used = 100mL water required."
    };

    if (type === 'NS' || type === 'RL') {
        if (sbp && parseFloat(sbp) < 90) {
            res.value = (rate * 1.5).toFixed(0);
            res.status = "Resuscitation Strategy";
            res.actionPlan = "Hypotension detected. Rate increased to support volume. Monitor for lung crackles (fluid overload).";
        }
    }

    if (type === 'D5NS' && glucose) {
        const glu = parseFloat(glucose);
        if (glu < 70) {
            res.actionPlan = "Hypoglycemia detected. D5 provides caloric support (170 kcal/L) and prevents ketosis.";
        }
    }

    return res;
};