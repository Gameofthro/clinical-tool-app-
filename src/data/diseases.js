// src/data/diseases.js

export const diseaseDatabase = {
  "common cold": {
    category: "Respiratory",
    color: "blue",
    firstLine: "Symptomatic treatment; no antibiotics.",
    management: [
      "Paracetamol 500 mg TID (e.g., Calpol)",
      "Pseudoephedrine or Phenylephrine SOS",
      "Chlorpheniramine maleate (CPM) HS",
      "Steam inhalation, Warm saline gargles"
    ],
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Mild fever"],
    labs: ["Not routinely required"],
    lifestyle: [
      "Rest is crucial for recovery",
      "Elevate head while sleeping to ease congestion",
      "Hand hygiene to prevent spread"
    ],
    diet: {
      eat: ["Warm soups (Chicken/Veg)", "Ginger tea with honey", "Citrus fruits (Vitamin C)", "Warm water"],
      avoid: ["Cold carbonated drinks", "Ice cream", "Fried/Oily foods (worsens throat)", "Alcohol"]
    },
    contraindications: ["Avoid decongestants in Hypertension"],
    specialPopulations: { pregnancy: "Category B (Safe)", renal: "No adjustment" }
  },
  "hypertension": {
    category: "Cardiology",
    color: "red",
    firstLine: "Amlodipine 5mg OD OR Telmisartan 40mg OD.",
    management: [
      "Target BP: <130/80 mmHg",
      "Monitor BP weekly initially",
      "Add Hydrochlorothiazide 12.5mg if uncontrolled"
    ],
    symptoms: ["Often Asymptomatic", "Occipital headache (morning)", "Dizziness", "Palpitations"],
    labs: ["Lipid Profile", "Serum Creatinine", "ECG", "Fundoscopy"],
    lifestyle: [
      "Aerobic exercise 30 min/day (Brisk walking)",
      "Weight loss (Target BMI < 25)",
      "Stress management (Yoga/Meditation)",
      "Smoking cessation is non-negotiable"
    ],
    diet: {
      eat: ["DASH Diet", "Leafy greens (Spinach)", "Bananas (Potassium)", "Skimmed milk", "Garlic"],
      avoid: ["Table salt (>5g/day)", "Pickles & Papad", "Processed meats (Sausages)", "Canned soups"]
    },
    contraindications: ["ACEi/ARBs in Pregnancy (Absolute Contraindication)"],
    specialPopulations: { pregnancy: "Labetalol / Methyldopa", renal: "Monitor Potassium" }
  },
  "type 2 diabetes": {
    category: "Endocrinology",
    color: "emerald",
    firstLine: "Metformin 500mg BD after meals.",
    management: [
      "Target HbA1c < 7.0%",
      "Foot examination every visit",
      "Add Glimepiride or Gliptins if uncontrolled"
    ],
    symptoms: ["Polyuria (Frequent Urination)", "Polydipsia (Thirst)", "Weight loss", "Slow healing wounds"],
    labs: ["HbA1c", "FBS/PPBS", "Urine Microalbumin", "Lipid Profile"],
    lifestyle: [
      "150 mins exercise per week",
      "Daily foot inspection for cuts",
      "Regular eye checkups (Retinopathy)"
    ],
    diet: {
      eat: ["Whole grains (Brown rice, Oats)", "Pulses/Lentils", "Bitter gourd (Karela)", "Nuts (Almonds)", "Fenugreek seeds"],
      avoid: ["Sugar & Jaggery", "Maida (White bread/Pasta)", "Fruit juices", "Mango/Banana/Sapota (in excess)", "Deep fried foods"]
    },
    contraindications: ["Metformin if eGFR < 30"],
    specialPopulations: { pregnancy: "Insulin is gold standard", renal: "Reduce Metformin dose" }
  },
  "acute asthma": {
    category: "Respiratory",
    color: "blue",
    firstLine: "Inhaled Salbutamol + Budesonide.",
    management: [
      "Nebulization: Levolin + Budecort stat",
      "Oral Prednisolone 40mg OD x 5 days",
      "Maintain O2 Sat > 94%"
    ],
    symptoms: ["Wheezing", "Breathlessness", "Chest tightness", "Cough (worse at night)"],
    labs: ["Spirometry (FEV1)", "CXR (rule out pneumonia)"],
    lifestyle: [
      "Identify and avoid triggers (Dust, Pollen, Pets)",
      "Use spacer with inhalers for better effect",
      "Annual flu vaccination"
    ],
    diet: {
      eat: ["Magnesium rich foods (Spinach, Seeds)", "Omega-3 (Flaxseeds, Fish)", "Apples", "Ginger"],
      avoid: ["Sulfites (Dried fruits, Wine)", "Cold foods (if trigger)", "Dairy (if it thickens mucus)"]
    },
    contraindications: ["Non-selective Beta-blockers"],
    specialPopulations: { pregnancy: "Inhalers Safe", renal: "No adjustment" }
  },
  "migraine": {
    category: "Neurology",
    color: "purple",
    firstLine: "Naproxen 500mg + Domperidone 10mg.",
    management: [
      "Rest in dark, quiet room",
      "Prophylaxis: Propranolol 40mg BD",
      "Hydration is key"
    ],
    symptoms: ["Unilateral throbbing headache", "Photophobia (Light sensitivity)", "Nausea", "Aura"],
    labs: ["MRI Brain (if atypical features)"],
    lifestyle: [
      "Regular sleep schedule (critical)",
      "Stress reduction techniques",
      "Keep a headache diary"
    ],
    diet: {
      eat: ["Magnesium rich foods", "Riboflavin (B2) rich foods", "Ginger tea", "Water (stay hydrated)"],
      avoid: ["Aged cheese", "Red wine/Alcohol", "Chocolate", "MSG (Chinese food)", "Excessive caffeine"]
    },
    contraindications: ["Triptans in Ischemic Heart Disease"],
    specialPopulations: { pregnancy: "Paracetamol Only", renal: "Adjust NSAIDs" }
  },
  "gerd / gastritis": {
    category: "Gastro",
    color: "orange",
    firstLine: "Pantoprazole 40mg OD (Empty Stomach).",
    management: [
      "Syrup Sucralfate before meals",
      "Domperidone if nausea present",
      "Rule out H. pylori infection"
    ],
    symptoms: ["Heartburn (Retrosternal burning)", "Regurgitation", "Epigastric pain", "Bloating"],
    labs: ["Endoscopy (if alarm signs: weight loss, dysphagia)"],
    lifestyle: [
      "Head end elevation while sleeping",
      "Do not lie down immediately after food (wait 2-3 hrs)",
      "Weight loss if obese"
    ],
    diet: {
      eat: ["Oatmeal", "Ginger", "Non-citrus fruits (Melon, Banana)", "Egg whites", "Yogurt"],
      avoid: ["Spicy/Oily food", "Caffeine/Coffee", "Chocolate", "Peppermint", "Carbonated drinks", "Alcohol"]
    },
    contraindications: [],
    specialPopulations: { pregnancy: "Pantoprazole Safe", renal: "No adjustment" }
  }
};