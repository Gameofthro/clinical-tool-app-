export const diseaseDatabase = {
  "Common Cold": {
    category: "Respiratory",
    pathophysiology: "Self-limiting viral infection of the upper respiratory tract (Rhinovirus, Coronavirus) causing mucosal inflammation and increased mucus production.",
    
    clinicalFeatures: {
      symptoms: ["Nasal congestion & Rhinorrhea (Runny nose)", "Sore throat (Pharyngitis)", "Sneezing", "Malaise & Low-grade fever"],
      signs: ["Erythematous pharynx without exudates", "Clear nasal discharge", "No lymphadenopathy (usually)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Based on history/exam", significance: "Gold Standard" },
      { test: "Rapid Flu/COVID PCR", finding: "Negative", significance: "Rule out differentials if fever is high" }
    ],

    clinicalPearls: [
      { pearl: "Antibiotics are ineffective.", explanation: "Viral etiology (Rhinovirus) does not respond to antibacterials; prescribing them breeds resistance." },
      { pearl: "Zinc lozenges utility.", explanation: "May reduce duration by 30% if started within 24 hours of symptom onset by inhibiting viral replication." }
    ],
    redFlags: ["Fever > 39°C (Suggests Influenza)", "Shortness of breath (Pneumonia)", "Symptoms > 10 days (Bacterial Sinusitis)", "Severe ear pain (Otitis Media)"],
    differentials: ["Allergic Rhinitis", "Acute Bacterial Sinusitis", "Influenza", "COVID-19"],

    managementRationale: [
      { drug: "Acetaminophen", class: "Analgesic/Antipyretic", dose: "650 mg", freq: "Q4-6H SOS", indication: "Pain/Fever", rationale: "Symptomatic relief for headache and myalgia." },
      { drug: "Ipratropium Bromide", class: "Anticholinergic (Nasal)", dose: "0.06% Spray", freq: "2 sprays/nostril TID", indication: "Rhinorrhea", rationale: "Specifically reduces serous nasal secretions." },
      { drug: "Cetirizine", class: "Antihistamine (2nd Gen)", dose: "10 mg", freq: "OD (HS)", indication: "Sneezing/Runny nose", rationale: "Reduces histamine-mediated symptoms with less sedation." }
    ],

    lifestyle: [
      "Rest is crucial for immune recovery.",
      "Steam inhalation to loosen mucus.",
      "Strict hand hygiene to prevent transmission."
    ],
    diet: {
      eat: ["Warm fluids (Ginger Tea/Adrak Chai)", "Khichdi (Easy to digest)", "Honey with Tulsi (Cough suppression)", "Turmeric Milk (Haldi Doodh)"],
      avoid: ["Cold drinks/Ice cream", "Curd/Yogurt at night (Ayurvedic precaution often advised)", "Oily snacks"]
    }
  },

  "Acute Gastroenteritis": {
    category: "Gastroenterology",
    pathophysiology: "Inflammation of the stomach and intestines (usually Norovirus or Rotavirus) leading to blunting of intestinal villi and malabsorption of water/electrolytes.",
    
    clinicalFeatures: {
      symptoms: ["Non-bloody watery diarrhea", "Nausea & Vomiting", "Abdominal cramping", "Low-grade fever"],
      signs: ["Hyperactive bowel sounds", "Signs of dehydration (Dry tongue, reduced skin turgor, tachycardia)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "History of acute onset <14 days", significance: "Standard of Care" },
      { test: "Stool Electrolytes", finding: "Gap > 100 mOsm/kg", significance: "Indicates Osmotic/Viral etiology" },
      { test: "Renal Function Panel", finding: "Elevated BUN/Cr ratio", significance: "Indicates Pre-renal Azotemia (Dehydration)" }
    ],

    clinicalPearls: [
      { pearl: "ORT matches IV efficacy.", explanation: "Oral Rehydration Therapy is as effective as IV fluids for mild-moderate dehydration due to coupled transport." },
      { pearl: "Avoid Antidiarrheals in Dysentery.", explanation: "Loperamide is contraindicated if fever or bloody stool is present as it may retain toxins." }
    ],
    redFlags: ["Severe Dehydration (Hypotension)", "Bloody stool (Dysentery)", "Rigid Abdomen (Perforation)", "Recent antibiotic use (C. diff)"],
    differentials: ["Appendicitis", "IBD Flare (Crohn's/UC)", "Food Poisoning (Toxin)", "Ischemic Colitis"],

    managementRationale: [
      { drug: "Oral Rehydration Salts (ORS)", class: "Electrolyte Replenisher", dose: "200-400ml", freq: "After every loose stool", indication: "Rehydration", rationale: "Exploits Glucose-Na+ cotransport to absorb water." },
      { drug: "Ondansetron", class: "5-HT3 Antagonist", dose: "4 mg", freq: "Single dose (Stat)", indication: "Vomiting", rationale: "Enables oral hydration by stopping vomiting centrally." },
      { drug: "Zinc Sulfate", class: "Mineral Supplement", dose: "20 mg", freq: "OD x 14 days", indication: "Gut immunity", rationale: "Reduces duration and severity of diarrhea episodes." }
    ],

    lifestyle: [
      "Hand washing with Soap & Water (Sanitizer doesn't kill Norovirus).",
      "Boil drinking water during outbreaks."
    ],
    diet: {
      eat: ["Curd Rice (Probiotic)", "Khichdi (Moong Dal)", "Banana (Potassium)", "Toast/Rusk", "Tender Coconut Water"],
      avoid: ["Spicy Curries", "Milk Tea (Chai) - lactose intolerance", "Street food/Chaat", "Fruit juices (High sugar worsens diarrhea)"]
    }
  },

  "Community Acquired Pneumonia": {
    category: "Respiratory",
    pathophysiology: "Infection of the pulmonary parenchyma (alveoli) causing inflammatory exudate filling, leading to consolidation and impaired gas exchange.",
    
    clinicalFeatures: {
      symptoms: ["Productive cough (Rust/Green sputum)", "High grade fever with chills", "Pleuritic chest pain", "Dyspnea"],
      signs: ["Bronchial breath sounds", "Dullness to percussion", "Increased tactile fremitus", "Crackles/Rales"]
    },

    diagnosticWorkup: [
      { test: "CXR (PA/Lateral)", finding: "Lobar consolidation", significance: "Diagnostic Hallmark" },
      { test: "Procalcitonin", finding: "> 0.25 ng/mL", significance: "Strongly suggests Bacterial etiology" },
      { test: "Sputum Culture", finding: "S. pneumoniae", significance: "Guides targeted therapy" }
    ],

    clinicalPearls: [
      { pearl: "CURB-65 Score.", explanation: "Confusion, Urea, RR, BP, Age>65. Score ≥2 warrants admission." },
      { pearl: "Macrolide Resistance.", explanation: "Monotherapy with Azithromycin is no longer recommended due to high pneumococcal resistance." }
    ],
    redFlags: ["Confusion (Hypoxia/Sepsis)", "RR > 30/min", "SBP < 90 mmHg (Shock)", "SpO2 < 92% on Room Air"],
    differentials: ["Acute Bronchitis", "Pulmonary Embolism", "Congestive Heart Failure", "Tuberculosis"],

    managementRationale: [
      { drug: "Amoxicillin-Clavulanate", class: "Beta-Lactam", dose: "625 mg", freq: "TID x 5-7 days", indication: "Bacterial Pneumonia", rationale: "Covers S. pneumoniae and H. influenzae." },
      { drug: "Azithromycin", class: "Macrolide", dose: "500 mg", freq: "OD x 3 days", indication: "Atypical Coverage", rationale: "Covers Legionella/Mycoplasma." },
      { drug: "Paracetamol", class: "Antipyretic", dose: "650 mg", freq: "SOS", indication: "Fever > 100°F", rationale: "Symptomatic relief." }
    ],

    lifestyle: [
      "Smoking cessation prevents recurrence.",
      "Steam inhalation helps liquefy sputum.",
      "Pneumococcal vaccination post-recovery."
    ],
    diet: {
      eat: ["High protein (Dal, Paneer, Eggs) for repair", "Warm soups", "Ginger/Garlic (Anti-inflammatory)"],
      avoid: ["Fried foods (Heavy digestion)", "Cold yogurt (Subjective worsening of cough)", "Smoking/Alcohol"]
    }
  },

  "Hypertension (Urgency)": {
    category: "Cardiology",
    pathophysiology: "Increased Systemic Vascular Resistance (SVR) causing sustained elevation in arterial pressure (>180/120), without acute end-organ damage.",
    
    clinicalFeatures: {
      symptoms: ["Often Asymptomatic", "Occipital headache", "Dizziness/Tinnitus", "Epistaxis"],
      signs: ["S4 Heart Sound", "AV Nicking on Fundoscopy", "BP > 180/120 mmHg"]
    },

    diagnosticWorkup: [
      { test: "Ambulatory BP", finding: "Mean > 130/80", significance: "Gold Standard" },
      { test: "ECG", finding: "LVH Criteria", significance: "Chronic damage check" },
      { test: "Creatinine", finding: "Normal", significance: "Rule out Acute Kidney Injury" }
    ],

    clinicalPearls: [
      { pearl: "Gradual Reduction.", explanation: "Lower BP slowly over 24-48h. Rapid drops can cause cerebral ischemia/stroke." },
      { pearl: "Asymptomatic Spikes.", explanation: "Often due to non-adherence or salt loading. Restart meds rather than aggressive IV therapy." }
    ],
    redFlags: ["Chest Pain (MI)", "Neurological Deficit (Stroke)", "Visual Loss (Papilledema)", "Oliguria (AKI)"],
    differentials: ["Hypertensive Emergency", "Pheochromocytoma", "Renal Artery Stenosis", "Thyrotoxicosis"],

    managementRationale: [
      { drug: "Amlodipine", class: "CCB (DHP)", dose: "5 mg", freq: "OD", indication: "BP Lowering", rationale: "Smooth vasodilation without electrolyte disturbance." },
      { drug: "Telmisartan", class: "ARB", dose: "40 mg", freq: "OD", indication: "BP Lowering", rationale: "Renal protection and long half-life (24h control)." },
      { drug: "Chlorthalidone", class: "Thiazide Diuretic", dose: "12.5 mg", freq: "OD (Morning)", indication: "Add-on", rationale: "Reduces volume status." }
    ],

    lifestyle: [
      "Weight loss (Target BMI < 23 for Indians).",
      "30 mins Brisk Walking daily.",
      "Yoga/Meditation for stress."
    ],
    diet: {
      eat: ["DASH Diet", "Lauki (Bottle gourd) juice", "Flaxseeds", "Garlic", "Fruits"],
      avoid: ["Pickles/Achar (High Salt)", "Papad", "Namkeen/Bhujia", "Processed Cheese", "Added salt at table"]
    }
  },

  "Migraine": {
    category: "Neurology",
    pathophysiology: "Neurovascular disorder involving activation of the Trigeminal system, release of CGRP, and neurogenic inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Unilateral throbbing headache", "Nausea", "Photophobia", "Visual Aura"],
      signs: ["Normal neuro exam", "Scalp tenderness", "Patient seeks dark room"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "5 attacks, 4-72h duration", significance: "ICHD-3 Criteria" },
      { test: "MRI Brain", finding: "Normal", significance: "Rule out space occupying lesion if red flags present" }
    ],

    clinicalPearls: [
      { pearl: "Treat Early.", explanation: "Triptans work best when taken at the onset of mild pain, not when pain is severe." },
      { pearl: "MOH Risk.", explanation: "Medication Overuse Headache occurs if analgesics are used >15 days/month." }
    ],
    redFlags: ["Thunderclap onset", "Fever + Stiffness", "New onset > 50y", "Papilledema"],
    differentials: ["Tension Headache", "Cluster Headache", "Sinusitis", "Glaucoma"],

    managementRationale: [
      { drug: "Sumatriptan", class: "Triptan (5-HT1B/1D)", dose: "50 mg", freq: "Stat at onset", indication: "Abortive", rationale: "Vasoconstriction of cranial vessels." },
      { drug: "Naproxen", class: "NSAID", dose: "500 mg", freq: "Stat with Triptan", indication: "Pain relief", rationale: "Synergistic effect preventing recurrence." },
      { drug: "Propranolol", class: "Beta Blocker", dose: "40 mg", freq: "BD", indication: "Prophylaxis", rationale: "Reduces frequency of attacks." }
    ],

    lifestyle: [
      "Sleep Hygiene (Same time daily).",
      "Regular meals (Fasting triggers migraine).",
      "Dark room rest during attack."
    ],
    diet: {
      eat: ["Ginger Tea", "Magnesium rich foods (Almonds, Spinach)", "Hydration"],
      avoid: ["Aged Cheese/Paneer (Tyramine)", "Chinese food (MSG)", "Red Wine", "Excessive Caffeine"]
    }
  },

  "Type 2 Diabetes": {
    category: "Endocrinology",
    pathophysiology: "Insulin resistance coupled with progressive beta-cell dysfunction leading to chronic hyperglycemia.",
    
    clinicalFeatures: {
      symptoms: ["Polyuria", "Polydipsia", "Weight loss", "Fatigue"],
      signs: ["Acanthosis Nigricans", "Decreased sensation (Neuropathy)", "Central Obesity"]
    },

    diagnosticWorkup: [
      { test: "HbA1c", finding: "≥ 6.5%", significance: "3-month average glucose" },
      { test: "Fasting Glucose", finding: "≥ 126 mg/dL", significance: "Diagnostic" },
      { test: "Urine Microalbumin", finding: "Positive", significance: "Early nephropathy" }
    ],

    clinicalPearls: [
      { pearl: "Metformin First.", explanation: "First-line unless eGFR <30 due to safety, weight neutrality, and cost." },
      { pearl: "B12 Deficiency.", explanation: "Long-term Metformin use reduces B12 absorption; monitor annually." }
    ],
    redFlags: ["Kussmaul breathing (DKA)", "Foot Ulcers", "Chest pain (Silent MI)"],
    differentials: ["LADA", "Steroid-induced Diabetes", "Pancreatic Diabetes"],

    managementRationale: [
      { drug: "Metformin", class: "Biguanide", dose: "500 mg", freq: "BD after meals", indication: "First-line", rationale: "Reduces hepatic glucose output." },
      { drug: "Glimepiride", class: "Sulfonylurea", dose: "1 mg", freq: "OD before breakfast", indication: "Add-on", rationale: "Stimulates insulin secretion (Watch for hypos)." },
      { drug: "Atorvastatin", class: "Statin", dose: "10 mg", freq: "HS (Night)", indication: "Lipid control", rationale: "Cardiovascular risk reduction." }
    ],

    lifestyle: [
      "Weight loss of 5-10%.",
      "150 min moderate exercise/week.",
      "Daily foot inspection."
    ],
    diet: {
      eat: ["Methi (Fenugreek) seeds", "Karela (Bitter gourd)", "Jamun", "Ragi/Bajra (Complex carbs)", "Roasted Chana"],
      avoid: ["Sweets/Mithai", "Maida (Naan/Bhatura)", "Fruit Juices", "White Rice (Limit quantity)", "Mango/Sapota (High GI)"]
    }
  },

  "Acute Asthma": {
    category: "Respiratory",
    pathophysiology: "Airway inflammation and hyperresponsiveness leading to reversible bronchoconstriction and mucus plugging.",
    
    clinicalFeatures: {
      symptoms: ["Wheezing", "Breathlessness", "Chest tightness", "Nocturnal cough"],
      signs: ["Accessory muscle use", "Prolonged expiration", "Polyphonic wheeze"]
    },

    diagnosticWorkup: [
      { test: "Spirometry", finding: "FEV1/FVC < 0.7", significance: "Obstructive pattern" },
      { test: "Reversibility", finding: "FEV1 >12% increase", significance: "Confirms Asthma" }
    ],

    clinicalPearls: [
      { pearl: "Silent Chest.", explanation: "Absence of wheeze in severe distress indicates no air entry (Emergency)." },
      { pearl: "Inhaler Technique.", explanation: "Most treatment failures are due to poor technique; always use a Spacer." }
    ],
    redFlags: ["Silent Chest", "Drowsiness (CO2 Narcosis)", "Peak Flow < 33%"],
    differentials: ["COPD", "Anaphylaxis", "Cardiac Asthma", "Foreign Body"],

    managementRationale: [
      { drug: "Salbutamol", class: "SABA", dose: "2 puffs / 2.5mg Neb", freq: "PRN / Q20min", indication: "Rescue", rationale: "Rapid bronchodilation." },
      { drug: "Budesonide", class: "Inhaled Corticosteroid", dose: "400 mcg", freq: "BD", indication: "Maintenance", rationale: "Treats underlying inflammation." },
      { drug: "Prednisolone", class: "Oral Steroid", dose: "40 mg", freq: "OD x 5 days", indication: "Acute Flare", rationale: "Prevents relapse and reduces edema." }
    ],

    lifestyle: [
      "Avoid triggers (Agarbatti smoke, Dust mites).",
      "Use spacer device.",
      "Annual Flu vaccine."
    ],
    diet: {
      eat: ["Omega-3 (Fish/Flax)", "Magnesium rich foods", "Fruits/Veg"],
      avoid: ["Cold drinks/Ice cream (Trigger)", "Sulfites (Preserved foods)", "Allergenic foods (Peanuts/Shellfish)"]
    }
  },

  "GERD": {
    category: "Gastroenterology",
    pathophysiology: "Transient Lower Esophageal Sphincter (LES) relaxation allowing acid reflux, causing mucosal damage.",
    
    clinicalFeatures: {
      symptoms: ["Heartburn", "Acid regurgitation", "Dysphagia", "Chest pain"],
      signs: ["Normal exam", "Dental erosions", "Epigastric tenderness"]
    },

    diagnosticWorkup: [
      { test: "PPI Trial", finding: "Symptoms resolve", significance: "Diagnostic" },
      { test: "Endoscopy", finding: "Esophagitis", significance: "Rule out Barret's/Cancer" }
    ],

    clinicalPearls: [
      { pearl: "Timing Matters.", explanation: "PPIs must be taken 30-60 mins BEFORE the first meal to be effective." },
      { pearl: "Cardiac Mimic.", explanation: "Always rule out Inferior Wall MI in patients with new onset epigastric pain." }
    ],
    redFlags: ["Dysphagia", "Weight Loss", "Hematemesis", "Anemia"],
    differentials: ["Peptic Ulcer", "Inferior MI", "Esophageal Spasm"],

    managementRationale: [
      { drug: "Pantoprazole", class: "PPI", dose: "40 mg", freq: "OD (Empty Stomach)", indication: "Acid Suppression", rationale: "Irreversible H+/K+ ATPase inhibition." },
      { drug: "Domperidone", class: "Prokinetic", dose: "10 mg", freq: "TID", indication: "Reflux/Nausea", rationale: "Increases LES tone and gastric emptying." },
      { drug: "Sucralfate", class: "Mucosal Protectant", dose: "10 ml", freq: "TID", indication: "Symptom relief", rationale: "Coats the esophagus." }
    ],

    lifestyle: [
      "Elevate head of bed.",
      "Dinner 3 hours before sleep.",
      "Left lateral decubitus sleeping."
    ],
    diet: {
      eat: ["Cold Milk (Temporary relief)", "Oatmeal", "Banana", "Saunf (Fennel) after meals"],
      avoid: ["Spicy/Oily curries", "Tea/Coffee (Caffeine)", "Peppermint", "Samosa/Pakora", "Alcohol"]
    }
  }
};