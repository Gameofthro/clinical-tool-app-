export const CLINICAL_CONSTANTS = {
    NTI_DRUGS: [
        { drug: "Digoxin", caution: "Target: 0.5-0.9 ng/mL. Monitor K+ strictly.", toxicity: "Visual disturbances, bradycardia." },
        { drug: "Lithium", caution: "Target: 0.6-1.2 mEq/L. Requires euvolemia.", toxicity: "Tremor, ataxia, confusion." },
        { drug: "Warfarin", caution: "Target INR: 2.0-3.0. Vit-K consistency.", toxicity: "Unexplained bruising/bleeding." },
        { drug: "Phenytoin", caution: "Target: 10-20 mg/L. Non-linear kinetics.", toxicity: "Nystagmus, lethargy." },
    ]
};

export const calculatePediatricDose = (weight, age, unit = 'kg', indication = 'general') => {
    let w = parseFloat(weight);
    let a = parseFloat(age);
    if (!w || isNaN(w)) return null;
    if (unit === 'lbs') w /= 2.205;
    const isNeonatal = !isNaN(a) && a <= 0.08; 
    const factor = isNeonatal ? 5 : 10; 
    const dose = w * factor;
    return {
        value: dose.toFixed(1), unit: "mg",
        status: isNeonatal ? "Neonatal Protocol" : "Standard Pediatric",
        interpretation: `Dose calculated at ${factor}mg/kg for ${indication} use.`,
        actionPlan: "Verify dose against absolute adult maximums and vial concentration.",
        masteryInsight: isNeonatal ? "Neonates have immature clearance; dosing is reduced to prevent accumulation." : "Standard pediatric dosing. Adult max doses must never be exceeded.",
        isCritical: isNeonatal
    };
};

export const calculateGFR = (creatinine, age, gender, weight = null, height = null, unit = 'mg/dl') => {
    let scr = parseFloat(creatinine); let a = parseFloat(age);
    if (isNaN(scr) || isNaN(a) || scr <= 0) return null;
    if (unit === 'umol/l') scr /= 88.4;
    const kappa = gender === 'female' ? 0.7 : 0.9;
    const alpha = gender === 'female' ? -0.329 : -0.411;
    const gfr = 142 * Math.pow(Math.min(scr / kappa, 1), alpha) * Math.pow(Math.max(scr / kappa, 1), -1.200) * Math.pow(0.9938, a) * (gender === 'female' ? 1.018 : 1.0);
    let res = { value: gfr.toFixed(0), unit: "mL/min/1.73m²", masteryInsight: "CKD-EPI 2021 is the gold standard for equitable renal staging." };
    if (weight && height) {
        const bsa = Math.sqrt((parseFloat(height) * parseFloat(weight)) / 3600);
        res.absoluteGfr = ((gfr * bsa) / 1.73).toFixed(0);
        res.bsa = bsa.toFixed(2);
        res.masteryInsight = `Absolute GFR is ${res.absoluteGfr} mL/min (BSA: ${res.bsa}m²). Use for NTI drug dosing.`;
    }
    if (gfr < 30) { res.status = "Critical (G4-G5)"; res.isCritical = true; res.interpretation = "Severely decreased renal function."; res.actionPlan = "Reduce dose by 50% or double interval for renal-cleared drugs."; }
    else if (gfr < 60) { res.status = "Moderate (G3)"; res.isCritical = false; res.interpretation = "Moderately decreased function."; res.actionPlan = "Review renal-cleared drug doses. Monitor K+ levels."; }
    else { res.status = "Normal (G1-G2)"; res.isCritical = false; res.interpretation = "Renal function within clinical limits."; res.actionPlan = "Continue standard dosing protocols."; }
    return res;
};

export const calculateBMI = (weight, height, wUnit = 'kg', hUnit = 'cm') => {
    let w = parseFloat(weight); let h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h === 0) return null;
    if (wUnit === 'lbs') w *= 0.453592;
    if (hUnit === 'cm') h /= 100; else if (hUnit === 'ft') h *= 0.3048; else if (hUnit === 'in') h *= 0.0254;
    const bmi = w / (h * h);
    let res = { value: bmi.toFixed(1), unit: "kg/m²", isCritical: (bmi >= 30 || bmi < 18.5) };
    if (bmi < 18.5) { res.status = "Underweight"; res.interpretation = "Nutritional or malabsorptive deficiency."; res.actionPlan = "Evaluate for frailty or malnutrition."; res.masteryInsight = "Underweight status in the elderly is a high-risk factor for mortality."; }
    else if (bmi < 25) { res.status = "Normal"; res.interpretation = "Healthy weight range."; res.actionPlan = "Maintain metabolic stability."; res.masteryInsight = "BMI is a mass index; it does not measure body fat distribution."; }
    else if (bmi < 30) { res.status = "Overweight"; res.interpretation = "Increased cardiovascular risk."; res.actionPlan = "Screen for pre-diabetes. Suggest physical activity."; res.masteryInsight = "Overweight BMI may carry a 'protection paradox' in heart failure patients."; }
    else { res.status = "Obese"; res.interpretation = "Pro-inflammatory metabolic state."; res.actionPlan = "Weight management and Metabolic Syndrome screening."; res.masteryInsight = "Obesity alters the Volume of Distribution (Vd) for lipophilic drugs."; }
    return res;
};

export const calculateMAP = (sbp, dbp) => {
    const s = parseFloat(sbp); const d = parseFloat(dbp);
    if (isNaN(s) || isNaN(d) || s <= d) return null;
    const map = (s + (2 * d)) / 3;
    const pulsePressure = s - d;
    let res = { value: map.toFixed(0), unit: "mmHg", isCritical: map < 65, masteryInsight: `Pulse Pressure is ${pulsePressure} mmHg. Wide (>60) indicates stiffness; Narrow (<25) suggests low SV.` };
    if (map < 65) { res.status = "Hypoperfusion"; res.interpretation = "Inadequate organ perfusion pressure."; res.actionPlan = "CRITICAL: Evaluate for shock. Consider fluid bolus."; }
    else { res.status = "Optimal"; res.interpretation = "Adequate vital organ perfusion."; res.actionPlan = "Monitor vitals for stability."; }
    return res;
};

export const calculateIVFluidStrategy = (weight, type, glucose = null, sbp = null) => {
    let w = parseFloat(weight); if (isNaN(w)) return null;
    let rate = w <= 10 ? w * 4 : w <= 20 ? 40 + (w - 10) * 2 : 60 + (w - 20) * 1;
    let res = { value: rate.toFixed(0), unit: "mL/hr", status: "Maintenance", interpretation: "Standard 4-2-1 maintenance rate.", actionPlan: "Observe for fluid overload.", isCritical: false, masteryInsight: "Tailor therapy: Isotonic for volume, Dextrose for metabolic support." };
    if (type === 'NS' || type === 'RL') {
        if (sbp && parseFloat(sbp) < 90) {
            res.advancedRate = (rate * 1.5).toFixed(0);
            res.status = "Resuscitation"; res.isCritical = true; res.interpretation = "Rate increased due to hypotension.";
        }
    }
    return res;
};