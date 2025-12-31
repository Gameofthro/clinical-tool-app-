/**
 * MASTER MEDICS KNOWLEDGE REPOSITORY
 * Centralized clinical interpretations and educational mastery data.
 */

export const CLINICAL_KNOWLEDGE = {
  gfr: {
    title: "Renal Function (eGFR)",
    description: "Estimated Glomerular Filtration Rate measures how well the kidneys filter waste from the blood.",
    mastery: {
      low: {
        label: "Decreased Renal Function",
        pathophysiology: "Can be caused by Acute Kidney Injury (AKI) due to hypovolemia/toxins, or Chronic Kidney Disease (CKD) from long-term DM/HTN.",
        management: "Avoid nephrotoxic drugs (NSAIDs, IV Contrast). Adjust doses for renally cleared medications (Vancomycin, Enoxaparin).",
        education: "Stage G5 (GFR <15) indicates failure; G3 (30-59) is the threshold for significant medication adjustment."
      },
      normal: {
        label: "Optimal Filtration",
        pathophysiology: "Healthy nephron mass maintaining fluid, electrolyte, and acid-base homeostasis.",
        management: "Continue standard care. Monitor GFR annually in patients with risk factors like Diabetes.",
        education: "Normal GFR is ~90-120 mL/min/1.73m². A decline of 1 mL/min per year after age 40 is a normal physiological process."
      }
    }
  },
  bmi: {
    title: "Body Mass Index (BMI)",
    description: "A proxy measure for body fat based on height and weight.",
    mastery: {
      low: {
        label: "Underweight",
        pathophysiology: "May indicate nutritional deficiency, malabsorption, or hypermetabolic states (hyperthyroidism, malignancy).",
        management: "Screen for albumin levels and micronutrient deficiencies. High-protein/High-calorie dietary support.",
        education: "BMI < 18.5 increases risk for bone loss (osteoporosis) and impaired immune function."
      },
      normal: {
        label: "Healthy Weight Range",
        pathophysiology: "Energy intake is balanced with energy expenditure.",
        management: "Focus on cardiovascular health and strength training to maintain muscle mass.",
        education: "Target range is 18.5 – 24.9. Note that BMI does not distinguish between muscle and fat."
      },
      high: {
        label: "Overweight / Obese",
        pathophysiology: "Excess adipose tissue leads to a chronic pro-inflammatory state and insulin resistance.",
        management: "Screen for Metabolic Syndrome (HTN, Dyslipidemia, DM). Consider lifestyle or pharmacological weight management.",
        education: "Adipose tissue alters Volume of Distribution (Vd) for lipophilic drugs like certain anesthetics and antibiotics."
      }
    }
  },
  map: {
    title: "Mean Arterial Pressure (MAP)",
    description: "The average pressure in a patient's arteries during one cardiac cycle.",
    mastery: {
      low: {
        label: "Hypoperfusion Risk",
        pathophysiology: "Insufficient pressure to drive blood flow to vital organs. Often due to shock (Hypovolemic, Sepsis, Cardiogenic).",
        management: "Emergency: Fluid resuscitation or vasopressor support (Norepinephrine) to maintain MAP > 65 mmHg.",
        education: "MAP < 65 is the critical threshold where renal and cerebral perfusion begins to fail."
      },
      normal: {
        label: "Adequate Perfusion",
        pathophysiology: "Heart rate and systemic vascular resistance are balanced to provide optimal organ blood flow.",
        management: "Monitor vitals to ensure stability. No immediate intervention required.",
        education: "MAP is calculated as: [SBP + (2 × DBP)] / 3, because the heart spends twice as much time in diastole."
      },
      high: {
        label: "Hypertension / High Afterload",
        pathophysiology: "Increased systemic vascular resistance. Chronic high MAP damages vessel walls and increases cardiac workload.",
        management: "Evaluate for hypertensive urgency. Consider vasodilators or antihypertensive adjustments.",
        education: "Persistent high MAP leads to Left Ventricular Hypertrophy (LVH) and vascular remodeling."
      }
    }
  },
  pediatric: {
    title: "Weight-Based Dosing",
    description: "Calculation of drug doses based on pediatric/neonatal weight and physiological development.",
    mastery: {
      neonatal: {
        label: "Neonatal Precautions",
        pathophysiology: "Immature hepatic enzymes (CYP450) and low GFR lead to prolonged drug half-lives.",
        management: "Lower dosing factors and extended intervals are mandatory to avoid toxicity.",
        education: "The 'Neonatal' period is the first 28 days of life; physiology changes rapidly during this window."
      },
      pediatric: {
        label: "Standard Pediatric Dosing",
        pathophysiology: "Metabolic rates in children are often higher than adults per kg, but organ reserve is lower.",
        management: "Always cross-check mg/kg results against the Absolute Maximum Adult Dose.",
        education: "Double-check 'mg' vs 'mcg' and ensure liquid concentrations (e.g., 100mg/5mL) are verified before administration."
      }
    }
  }
};