export const diseaseDatabase = {
  "Common Cold": {
    category: "Respiratory",
    clinicalPearls: "Antibiotics are ineffective and should not be prescribed. Focus on symptom relief. Zinc lozenges may reduce duration if started within 24 hours.",
    redFlags: ["High fever > 39°C (Suggests Influenza)", "Shortness of breath", "Symptoms > 10 days (Bacterial Sinusitis)"],
    differentials: ["Allergic Rhinitis", "Acute Bacterial Sinusitis", "Influenza", "COVID-19"],
    
    symptoms: ["Rhinorrhea", "Nasal congestion", "Sore throat", "Sneezing", "Malaise"],
    history: "Patient presents with a 2-day history of clear nasal discharge and scratchy throat. Reports mild fatigue but no difficulty breathing. Denies high-grade fever or chills.",
    vitals: { temp: "37.2°C", hr: "78 bpm", bp: "118/76 mmHg", rr: "14/min", spo2: "99% RA" },
    admissionDuration: 1, 
    
    // Educational Management (General Protocol)
    managementRationale: [
      { drug: "Acetaminophen/NSAIDs", rationale: "Analgesic/Antipyretic for headache and myalgia." },
      { drug: "Intranasal Ipratropium", rationale: "Reduces rhinorrhea (runny nose) specifically." },
      { drug: "Oral Decongestants", rationale: "For nasal congestion (Use caution in HTN)." }
    ],

    // Simulation Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "6,200 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [
        { day: 1, hb: "14.0 g/dL", wbc: "6,200 /cmm", plt: "250,000 /cmm", hct: "42%" }
      ]
    },
    specialTests: [
      { name: "Rapid Flu Ag", result: "Negative", notes: "Rule out Influenza A/B" },
      { name: "COVID-19 PCR", result: "Negative", notes: "Rule out SARS-CoV-2" },
      { name: "Strep A Antigen", result: "Negative", notes: "Rule out GABHS Pharyngitis" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Paracetamol 500mg SOS", "Steam Inhalation", "Warm Saline Gargles", "Tab. Cetirizine 10mg HS"] }
    ]
  },

  "Acute Gastroenteritis": {
    category: "Gastroenterology",
    clinicalPearls: "Oral Rehydration Therapy (ORT) is as effective as IV fluids for mild-moderate dehydration. Avoid antidiarrheals in dysentery (bloody stool/fever).",
    redFlags: ["Signs of severe dehydration (Hypotension, Tachycardia)", "Bloody stool (Dysentery)", "Severe abdominal pain (Acute Abdomen)", "Recent antibiotic use (C. diff)"],
    differentials: ["Appendicitis", "IBD Flare", "Food Poisoning (Toxin-mediated)", "Ischemic Colitis"],

    symptoms: ["Watery diarrhea", "Vomiting", "Abdominal cramping", "Nausea", "Low-grade fever"],
    history: "Patient reports sudden onset of multiple episodes of watery stool and vomiting starting last night. Complains of generalized weakness, dry mouth, and thirst.",
    vitals: { temp: "37.9°C", hr: "102 bpm (Tachy)", bp: "105/68 mmHg", rr: "18/min", spo2: "98% RA" },
    admissionDuration: 3,

    managementRationale: [
      { drug: "Oral Rehydration Solution (ORS)", rationale: "Gold standard. Exploits Glucose-Na+ co-transport to absorb water." },
      { drug: "Ondansetron", rationale: "Serotonin antagonist. Reduces vomiting to facilitate oral rehydration." },
      { drug: "Probiotics (L. rhamnosus)", rationale: "May shorten duration of viral diarrhea by ~1 day." }
    ],

    hematology: {
      baseline: { hb: "15.5 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "48% (Hemoconcentrated)" }, 
      progression: [
        { day: 1, hb: "15.0 g/dL", wbc: "10,200 /cmm", plt: "290,000 /cmm", hct: "46%" },
        { day: 2, hb: "14.2 g/dL", wbc: "8,500 /cmm", plt: "280,000 /cmm", hct: "43% (Rehydrated)" },
        { day: 3, hb: "13.8 g/dL", wbc: "7,200 /cmm", plt: "270,000 /cmm", hct: "41%" }
      ]
    },
    specialTests: [
      { name: "Serum Electrolytes", result: "Na: 133, K: 3.3", notes: "Mild hyponatremia/hypokalemia from GI loss" },
      { name: "Renal Function", result: "BUN: 28, Cr: 1.1", notes: "Pre-renal azotemia due to dehydration" },
      { name: "Stool Lactoferrin", result: "Negative", notes: "Rules out inflammatory/invasive bacterial etiology" }
    ],
    treatment: [
      { day: 1, meds: ["IV Ringer Lactate 100ml/hr", "Inj. Ondansetron 4mg IV", "Tab. Zinc 20mg OD"] },
      { day: 2, meds: ["IV Fluids tapered", "ORS ad libitum", "Tab. Racecadotril 100mg TID", "Probiotics"] },
      { day: 3, meds: ["Oral Fluids liberally", "Discharge on BRAT diet"] }
    ]
  },

  "Community Acquired Pneumonia": {
    category: "Respiratory",
    clinicalPearls: "Use CURB-65 score to determine admission. Macrolide resistance is increasing; comorbidities require broader coverage (Beta-lactam + Macrolide or Fluoroquinolone).",
    redFlags: ["Confusion (Mental Status)", "RR > 30/min", "Hypotension (SBP <90)", "SpO2 < 92% RA"],
    differentials: ["Acute Bronchitis", "Pulmonary Embolism", "Congestive Heart Failure", "Tuberculosis"],

    symptoms: ["Productive cough", "Fever", "Pleuritic chest pain", "Dyspnea", "Chills"],
    history: "Patient presents with a 4-day history of cough with rust-colored sputum and sharp right-sided chest pain worsening on inspiration. History of chills and rigors.",
    vitals: { temp: "39.1°C", hr: "110 bpm", bp: "110/70 mmHg", rr: "26/min", spo2: "91% RA" },
    admissionDuration: 5,

    managementRationale: [
      { drug: "Ceftriaxone", rationale: "3rd Gen Cephalosporin. Covers S. pneumoniae and H. influenzae." },
      { drug: "Azithromycin", rationale: "Macrolide. Covers atypical organisms (Legionella, Mycoplasma)." },
      { drug: "Oxygen Therapy", rationale: "Maintain SpO2 > 94%." }
    ],

    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "18,500 /cmm (Left Shift)", plt: "200,000 /cmm", hct: "41%" },
      progression: [
        { day: 1, hb: "13.4 g/dL", wbc: "17,500 /cmm", plt: "210,000 /cmm", hct: "41%" },
        { day: 3, hb: "13.2 g/dL", wbc: "12,000 /cmm", plt: "220,000 /cmm", hct: "40%" },
        { day: 5, hb: "13.5 g/dL", wbc: "8,500 /cmm", plt: "230,000 /cmm", hct: "41%" }
      ]
    },
    specialTests: [
      { name: "CXR PA View", result: "R Lower Lobe Consolidation", notes: "Lobar pneumonia hallmark" },
      { name: "CURB-65 Score", result: "Score: 2", notes: "Consider short inpatient admission" },
      { name: "Procalcitonin", result: "2.8 ng/mL", notes: "Strongly suggests bacterial etiology" },
      { name: "Sputum Culture", result: "S. pneumoniae", notes: "Sensitivity: Penicillin susceptible" }
    ],
    treatment: [
      { day: 1, meds: ["IV Ceftriaxone 1g BD", "Tab. Azithromycin 500mg OD", "O2 via Nasal Prongs @ 2L"] },
      { day: 2, meds: ["IV Ceftriaxone 1g BD", "Tab. Azithromycin 500mg OD", "Nebulization with Saline"] },
      { day: 3, meds: ["Switch to Oral Cefpodoxime", "Chest Physiotherapy", "Taper O2"] },
      { day: 4, meds: ["Oral Antibiotics continued", "Ambulatory O2 check"] },
      { day: 5, meds: ["Discharge on Oral Antibiotics", "Pneumococcal vaccination"] }
    ]
  },

  "Hypertension (Urgency)": {
    category: "Cardiology",
    clinicalPearls: "Hypertensive Urgency (BP >180/120 without end-organ damage) should be lowered gradually over 24-48h. Rapid reduction can cause cerebral ischemia.",
    redFlags: ["Chest Pain (MI/Dissection)", "Neurological Deficit (Stroke)", "Visual Changes (Papilledema)", "Acute Kidney Injury"],
    differentials: ["Hypertensive Emergency", "Pheochromocytoma", "Acute Anxiety/Panic Attack", "Pain-induced HTN"],

    symptoms: ["Occipital headache", "Dizziness", "Palpitations", "Epistaxis", "Anxiety"],
    history: "Patient discovered high BP during routine checkup. Complains of dull morning headaches and occasional dizziness. Denies chest pain, shortness of breath, or visual blurring.",
    vitals: { temp: "36.8°C", hr: "88 bpm", bp: "192/112 mmHg", rr: "18/min", spo2: "98% RA" },
    admissionDuration: 2, 
    
    managementRationale: [
      { drug: "Amlodipine", rationale: "Calcium Channel Blocker. Smooth, predictable BP reduction." },
      { drug: "Telmisartan/Lisinopril", rationale: "RAAS blockade. Long-term remodeling protection." },
      { drug: "Avoid IV Labetalol", rationale: "IV agents reserved for Emergencies, not Urgencies." }
    ],

    hematology: {
      baseline: { hb: "14.2 g/dL", wbc: "7,000 /cmm", plt: "260,000 /cmm", hct: "43%" },
      progression: [
        { day: 1, hb: "14.2 g/dL", wbc: "7,000 /cmm", plt: "260,000 /cmm", hct: "43%" },
        { day: 2, hb: "14.1 g/dL", wbc: "6,900 /cmm", plt: "255,000 /cmm", hct: "43%" }
      ]
    },
    specialTests: [
      { name: "ECG", result: "LVH Criteria Met", notes: "Sokolow-Lyon voltage criteria >35mm" },
      { name: "Fundoscopy", result: "AV Nicking", notes: "Grade II Hypertensive Retinopathy (Chronic)" },
      { name: "Serum Creatinine", result: "1.0 mg/dL", notes: "No acute renal injury" },
      { name: "Troponin I", result: "Negative", notes: "Rules out acute ischemia" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Amlodipine 5mg Stat", "Tab. Telmisartan 40mg HS", "Low Salt Diet initiated"] },
      { day: 2, meds: ["Tab. Amlodipine 5mg OD", "Tab. Hydrochlorothiazide 12.5mg OD", "Discharge with BP log"] }
    ]
  },

  "Migraine": {
    category: "Neurology",
    clinicalPearls: "Use the 'POUND' mnemonic: Pulsating, One-day duration, Unilateral, Nausea, Disabling. Triptans are most effective when taken early in the attack.",
    redFlags: ["Thunderclap headache (Subarachnoid Hemorrhage)", "Fever + Neck Stiffness (Meningitis)", "Focal neurological deficit", "Onset > 50 years age"],
    differentials: ["Tension Headache", "Cluster Headache", "Giant Cell Arteritis", "Intracranial Tumor"],

    symptoms: ["Unilateral throbbing headache", "Photophobia", "Phonophobia", "Nausea", "Visual Aura"],
    history: "Patient presents with severe throbbing headache on the right side, associated with nausea and sensitivity to light. Describes 'zig-zag' lines in vision prior to onset.",
    vitals: { temp: "37.0°C", hr: "94 bpm (Pain)", bp: "135/85 mmHg", rr: "20/min", spo2: "99% RA" },
    admissionDuration: 1,

    managementRationale: [
      { drug: "Sumatriptan", rationale: "Serotonin (5-HT 1B/1D) agonist. Aborts attack via vasoconstriction." },
      { drug: "Metoclopramide/Domperidone", rationale: "Antiemetic and improves absorption of oral analgesics." },
      { drug: "NSAIDs (Naproxen)", rationale: "Synergistic effect with Triptans." }
    ],

    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,200 /cmm", plt: "280,000 /cmm", hct: "39%" },
      progression: [
        { day: 1, hb: "13.0 g/dL", wbc: "6,200 /cmm", plt: "280,000 /cmm", hct: "39%" }
      ]
    },
    specialTests: [
      { name: "Neuro Exam", result: "Normal", notes: "No focal deficits" },
      { name: "ESR", result: "10 mm/hr", notes: "Normal (Rules out Temporal Arteritis)" },
      { name: "CT Brain", result: "Normal", notes: "Performed only to rule out bleed (if red flags exist)" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Diclofenac 75mg IM", "Tab. Sumatriptan 50mg PO", "Tab. Domperidone 10mg", "Dark room rest"] }
    ]
  },

  "Type 2 Diabetes (New)": {
    category: "Endocrinology",
    clinicalPearls: "Metformin is the first-line therapy unless contraindicated (eGFR <30). Early initiation of SGLT2i or GLP-1 RA is recommended for Cardio-Renal protection.",
    redFlags: ["Ketoacidosis (DKA) signs: Kussmaul breathing, ketones", "Hyperosmolar Hyperglycemic State (HHS)", "Foot Ulcers/Gangrene"],
    differentials: ["Type 1 Diabetes (LADA)", "Secondary Diabetes (Steroid induced)", "Diabetes Insipidus (Polyuria only)"],

    symptoms: ["Polyuria", "Polydipsia", "Polyphagia", "Unexplained weight loss", "Fatigue"],
    history: "Patient reports excessive thirst and frequent urination, including nocturia (3-4 times/night). Has lost 5kg in the last 2 months unintentionally despite good appetite.",
    vitals: { temp: "36.7°C", hr: "78 bpm", bp: "134/84 mmHg", rr: "16/min", spo2: "98% RA" },
    admissionDuration: 2,

    managementRationale: [
      { drug: "Metformin", rationale: "Decreases hepatic glucose production. Weight neutral. No hypoglycemia." },
      { drug: "Statin Therapy", rationale: "Primary prevention of ASCVD is critical in all diabetics >40y." },
      { drug: "Lifestyle", rationale: "Weight loss of 5-10% can significantly improve glycemic control." }
    ],

    hematology: {
      baseline: { hb: "13.8 g/dL", wbc: "7,500 /cmm", plt: "220,000 /cmm", hct: "41%" },
      progression: [
        { day: 1, hb: "13.8 g/dL", wbc: "7,500 /cmm", plt: "220,000 /cmm", hct: "41%" },
        { day: 2, hb: "13.8 g/dL", wbc: "7,400 /cmm", plt: "225,000 /cmm", hct: "41%" }
      ]
    },
    specialTests: [
      { name: "Random Blood Sugar", result: "280 mg/dL", notes: "Hyperglycemia" },
      { name: "HbA1c", result: "9.2%", notes: "Diagnostic (>6.5%). Indicates poor control over 3 months." },
      { name: "Urine Microalbumin", result: "Positive (+)", notes: "Early diabetic nephropathy marker" },
      { name: "C-Peptide", result: "Normal/High", notes: "Confirms Type 2 (Insulin resistance, not deficiency)" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Metformin 500mg BD (Start)", "Diabetic Diet Consult", "Ophthalmology Referral"] },
      { day: 2, meds: ["Tab. Metformin 500mg BD", "Tab. Atorvastatin 10mg HS", "Glucometer training"] }
    ]
  },

  "Acute Asthma": {
    category: "Respiratory",
    clinicalPearls: "Systemic steroids (Oral/IV) should be given early in acute exacerbations to prevent relapse. Inhaler technique is the most common cause of treatment failure.",
    redFlags: ["Silent Chest (Absent wheeze = severe obstruction)", "Drowsiness/Confusion (Hypercapnia)", "Peak Flow < 33% predicted"],
    differentials: ["COPD Exacerbation", "Anaphylaxis", "Foreign Body Aspiration", "Heart Failure (Cardiac Asthma)"],

    symptoms: ["Wheezing", "Breathlessness", "Chest tightness", "Cough (worse at night/early morning)"],
    history: "Known asthmatic presents with acute worsening of breathlessness and audible wheezing after exposure to dust. Rescue inhaler at home provided no relief.",
    vitals: { temp: "37.1°C", hr: "110 bpm", bp: "128/78 mmHg", rr: "28/min", spo2: "92% RA" },
    admissionDuration: 3,

    managementRationale: [
      { drug: "SABA (Salbutamol)", rationale: "Rapid bronchodilation via Beta-2 agonism." },
      { drug: "SAMA (Ipratropium)", rationale: "Synergistic bronchodilation in acute settings." },
      { drug: "Systemic Corticosteroids", rationale: "Reduces airway inflammation (takes 4-6h to work)." }
    ],

    hematology: {
      baseline: { hb: "14.5 g/dL", wbc: "8,000 /cmm", plt: "290,000 /cmm", hct: "44%" },
      progression: [
        { day: 1, hb: "14.5 g/dL", wbc: "8,000 /cmm", plt: "290,000 /cmm", hct: "44%" },
        { day: 2, hb: "14.3 g/dL", wbc: "9,500 /cmm", plt: "280,000 /cmm", hct: "43% (Steroid effect)" },
        { day: 3, hb: "14.4 g/dL", wbc: "8,200 /cmm", plt: "285,000 /cmm", hct: "43%" }
      ]
    },
    specialTests: [
      { name: "Peak Flow (PEFR)", result: "150 L/min", notes: "Severe obstruction (<50% predicted)" },
      { name: "ABG", result: "pH 7.42, pCO2 38, pO2 80", notes: "Normal pCO2 in severe attack is a danger sign (fatigue)" },
      { name: "CXR", result: "Hyperinflation", notes: "Rules out pneumothorax/pneumonia" },
      { name: "Absolute Eosinophils", result: "650 cells/uL", notes: "Supports allergic/atopic phenotype" }
    ],
    treatment: [
      { day: 1, meds: ["Nebulization (Levolin + Budecort) q20min x3", "Inj. Hydrocortisone 100mg IV", "O2 to maintain SpO2 >94%"] },
      { day: 2, meds: ["Nebulization q6h", "Tab. Prednisolone 40mg OD", "Inhaler Technique Review"] },
      { day: 3, meds: ["Switch to MDI (Salbutamol + Budesonide)", "Discharge with Asthma Action Plan"] }
    ]
  },

  "GERD / Gastritis": {
    category: "Gastroenterology",
    clinicalPearls: "Alarm features (Dysphagia, Odynophagia, Weight loss, Anemia) mandate early Endoscopy. PPIs are most effective when taken 30-60 mins before the first meal.",
    redFlags: ["Hematemesis/Melena", "Unintentional weight loss", "Dysphagia (Difficulty swallowing)", "Severe epigastric pain radiating to back (Pancreatitis)"],
    differentials: ["Peptic Ulcer Disease", "Inferior Wall MI", "Biliary Colic", "Esophageal Cancer"],

    symptoms: ["Heartburn (Pyrosis)", "Regurgitation", "Epigastric pain", "Bloating", "Water brash"],
    history: "Patient complains of burning sensation in the chest and sour taste, especially after heavy meals and lying down. Reports occasional epigastric pain.",
    vitals: { temp: "36.5°C", hr: "76 bpm", bp: "118/74 mmHg", rr: "16/min", spo2: "99% RA" },
    admissionDuration: 1,

    managementRationale: [
      { drug: "PPI (Pantoprazole)", rationale: "Irreversibly inhibits H+/K+ ATPase. Drug of choice." },
      { drug: "Lifestyle", rationale: "Weight loss and head-end elevation are proven to reduce reflux." },
      { drug: "Sucralfate", rationale: "Mucosal protectant for symptomatic relief." }
    ],

    hematology: {
      baseline: { hb: "13.2 g/dL", wbc: "6,000 /cmm", plt: "240,000 /cmm", hct: "40%" },
      progression: [
        { day: 1, hb: "13.2 g/dL", wbc: "6,000 /cmm", plt: "240,000 /cmm", hct: "40%" }
      ]
    },
    specialTests: [
      { name: "H. Pylori Serology", result: "Negative", notes: "If positive, eradication therapy is needed" },
      { name: "ECG", result: "Normal Sinus Rhythm", notes: "Rules out Inferior Wall MI (mimics GERD)" },
      { name: "Endoscopy", result: "Grade A Esophagitis", notes: "Shows mild mucosal breaks" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Pantoprazole 40mg OD (Empty Stomach)", "Syp. Sucralfate 10ml TID", "Diet: Avoid spicy/fatty foods"] }
    ]
  }
};