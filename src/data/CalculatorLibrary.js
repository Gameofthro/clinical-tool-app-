/**
 * MASTER CLINICAL LIBRARY v4.0 (2026)
 * Purpose: Deep-dive clinical evidence, formula breakdown, and reference deep-links.
 */

export const CalculatorLibrary = {
  pediatric: {
    title: "Pediatric Dosing Mastery",
    subtitle: "Pharmacokinetic Weight-Based Protocols",
    description: "Pediatric drug administration is a specialized field where dosages are calculated based on weight to account for rapid physiological changes in growth and organ maturation. Unlike adults, pediatric patients exhibit significant variations in drug distribution volumes and metabolic rates.",
    formula: "Dose (mg) = Weight (kg) × Dosage Factor (mg/kg)",
    formulaBreakdown: [
      { term: "Weight (kg)", detail: "Total body weight. For accuracy, actual weight is used unless a drug is highly lipophilic (where Ideal Body Weight may be considered)." },
      { term: "Dosage Factor (mg/kg)", detail: "The standard dose amount per unit of weight. This varies by drug class and patient age (Neonatal vs. Pediatric)." }
    ],
    whyBest: "This tool prioritizes patient safety by identifying neonatal physiological constraints (age ≤ 28 days) and enforcing pediatric maximums to prevent toxic accumulation.",
    clinicalPearls: [
      "Neonates exhibit immature hepatic glucuronidation, increasing the risk of 'Gray Baby Syndrome' with specific drugs.",
      "Pediatric doses should never exceed the standard adult maximum dose, regardless of the child's weight.",
      "Total body water is higher in infants (~75-80%), which increases the Volume of Distribution (Vd) for water-soluble medications."
    ],
    references: [
      { name: "FDA Pediatric Drug Development", url: "https://www.fda.gov/drugs/development-resources/pediatric-drug-development-resources" },
      { name: "WHO Model Formulary for Children", url: "https://www.who.int/publications/i/item/9789241547659" }
    ]
  },
  renal: {
    title: "eGFR (CKD-EPI 2021)",
    subtitle: "Race-Neutral Renal Staging",
    description: "The CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration) equation is the current gold standard for estimating Glomerular Filtration Rate. The 2021 update removed the race coefficient to provide a more equitable and biologically accurate assessment of kidney function across diverse populations.",
    formula: "142 × min(SCr/κ, 1)ᵅ × max(SCr/κ, 1)⁻¹·²⁰⁰ × 0.9938ᴬᵍᵉ [× 1.018 if Female]",
    formulaBreakdown: [
      { term: "SCr", detail: "Serum Creatinine (mg/dL). A waste product from muscle breakdown." },
      { term: "κ (Kappa)", detail: "0.7 for females, 0.9 for males." },
      { term: "α (Alpha)", detail: "-0.329 for females, -0.411 for males." },
      { term: "min/max", detail: "Mathematical functions used to adjust the curve based on creatinine levels relative to Kappa." }
    ],
    whyBest: "The CKD-EPI 2021 formula is more accurate than the older MDRD or Cockcroft-Gault equations, particularly for patients with near-normal kidney function (GFR > 60 mL/min).",
    clinicalPearls: [
      "Absolute GFR (unadjusted for BSA) must be used when dosing drugs with a Narrow Therapeutic Index (NTI).",
      "eGFR is unreliable in patients with Acute Kidney Injury (AKI) or those with extreme variations in muscle mass (e.g., bodybuilders or amputees).",
      "The removal of the race coefficient ensures that kidney disease is staged based on physiological data rather than social constructs."
    ],
    references: [
      { name: "NEJM: CKD-EPI 2021 Publication", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2102953" },
      { name: "National Kidney Foundation (NKF)", url: "https://www.kidney.org/content/ckd-epi-2021-egfr-equation" }
    ]
  },
  fluid: {
    title: "IV Fluid Management",
    subtitle: "Holliday-Segar Maintenance & Resuscitation",
    description: "This management tool estimates the hourly volume requirements for maintenance therapy and identifies clinical scenarios where aggressive resuscitation is required due to hemodynamic instability.",
    formula: "4-2-1 Rule: 4mL/kg (0-10kg) + 2mL/kg (10-20kg) + 1mL/kg (>20kg)",
    formulaBreakdown: [
      { term: "4mL/kg", detail: "Hourly rate for the first 10kg of body weight." },
      { term: "2mL/kg", detail: "Hourly rate for the weight between 10kg and 20kg." },
      { term: "1mL/kg", detail: "Hourly rate for every kg above 20kg." },
      { term: "Resuscitation Factor", detail: "For RL or NS, if SBP < 90, the maintenance rate is increased by 50% to address hypoperfusion." }
    ],
    whyBest: "It differentiates between the steady-state needs of a stable patient and the emergency volume requirements of a hypotensive patient.",
    clinicalPearls: [
      "The 4-2-1 rule only addresses basal metabolic needs; it does not account for ongoing fluid losses (e.g., fever, diarrhea, or surgical drains).",
      "Lactated Ringer's (RL) is often preferred over Normal Saline (NS) in large-volume resuscitation to avoid hyperchloremic metabolic acidosis.",
      "Monitor urine output goal (>0.5 mL/kg/hr) as a primary indicator of successful fluid resuscitation."
    ],
    references: [
      { name: "UpToDate: Maintenance IV Fluids", url: "https://www.uptodate.com/contents/maintenance-intravenous-fluid-therapy-in-children" }
    ]
  },
  bmi: {
    title: "Metabolic BMI Staging",
    subtitle: "Anthropometric Weight Distribution",
    description: "Body Mass Index (BMI) is a screening tool used to categorize body mass relative to height. In pharmacy, it is a critical parameter for determining the Volume of Distribution (Vd) for various medications.",
    formula: "BMI = Weight (kg) / [Height (m)]²",
    formulaBreakdown: [
      { term: "Weight (kg)", detail: "Total body mass." },
      { term: "Height (m)", detail: "Stature in meters. (Note: Centimeters must be divided by 100 before squaring)." }
    ],
    whyBest: "It provides a standardized metabolic profile that correlates with risks for metabolic syndrome, cardiovascular disease, and Type 2 Diabetes.",
    clinicalPearls: [
      "BMI is a measure of total mass and does not distinguish between muscle tissue and adipose tissue.",
      "Highly lipophilic drugs (e.g., certain anesthetics) may require dosing based on Adjusted Body Weight in obese patients.",
      "A 'Normal' BMI does not exclude metabolic risk; central adiposity (waist circumference) is an important co-factor."
    ],
    references: [
      { name: "CDC: BMI for Health Professionals", url: "https://www.cdc.gov/healthyweight/assessing/bmi/index.html" }
    ]
  },
  map: {
    title: "Hemodynamic Perfusion (MAP)",
    subtitle: "Mean Arterial Pressure Modeling",
    description: "Mean Arterial Pressure (MAP) is the average pressure in a patient's arteries during one cardiac cycle. It is considered a more accurate indicator of organ perfusion than Systolic Blood Pressure alone.",
    formula: "MAP = [SBP + (2 × DBP)] / 3",
    formulaBreakdown: [
      { term: "SBP", detail: "Systolic Blood Pressure (Pressure during heart contraction)." },
      { term: "DBP", detail: "Diastolic Blood Pressure (Pressure while heart is at rest)." },
      { term: "2 × DBP", detail: "Diastole accounts for two-thirds of the cardiac cycle, hence it is weighted twice as much as Systole." }
    ],
    whyBest: "It represents the steady-state pressure that drives blood into vital tissues; a MAP of ≥ 65 mmHg is generally required for adequate organ perfusion.",
    clinicalPearls: [
      "A MAP < 65 mmHg indicates a high risk of hypoperfusion and potential end-organ damage (e.g., Acute Tubular Necrosis in the kidneys).",
      "MAP is used in critical care to titrate vasopressor therapy.",
      "Narrow Pulse Pressure (the difference between SBP and DBP) can indicate low stroke volume or heart failure."
    ],
    references: [
      { name: "AHA: Blood Pressure Monitoring", url: "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings" }
    ]
  }
};