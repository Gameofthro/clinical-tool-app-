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
  },
  "Orthostatic Hypotension": {
    category: "Cardiovascular",
    pathophysiology: "Autonomic failure or volume depletion leads to an inability to increase systemic vascular resistance or heart rate upon standing, causing cerebral hypoperfusion.",
    
    clinicalFeatures: {
      symptoms: ["Lightheadedness upon standing", "Syncopal episodes (fainting)", "Visual blurring", "Coat-hanger neck pain"],
      signs: ["Drop in SBP >20mmHg within 3 mins of standing", "Drop in DBP >10mmHg", "Lack of compensatory tachycardia (in neurogenic causes)"]
    },

    diagnosticWorkup: [
      { test: "Active Stand Test / Tilt Table", finding: "SBP drop >20mmHg", significance: "Gold Standard Diagnosis" },
      { test: "Morning Cortisol", finding: "Low", significance: "Rule out Adrenal Insufficiency (Addison's)" },
      { test: "HbA1c", finding: "High", significance: "Screen for Diabetic Autonomic Neuropathy" }
    ],

    clinicalPearls: [
      { pearl: "Postprandial Dip.", explanation: "BP often drops significantly after large carbohydrate-rich meals due to splanchnic pooling." },
      { pearl: "Reverse Dipping.", explanation: "Many patients have supine hypertension at night; treat by elevating the head end of the bed." }
    ],
    
    redFlags: ["Melena (GI Bleed cause)", "New murmur (Aortic Stenosis)", "Focal neuro deficit (Stroke mimic)", "Chest pain"],
    differentials: ["Vasovagal Syncope", "Volume Depletion (Dehydration)", "Adrenal Insufficiency", "Drug-induced (Alpha-blockers)"],

    managementRationale: [
      { 
        drug: "Fludrocortisone", 
        class: "Mineralocorticoid", 
        dose: "0.1 mg", 
        freq: "OD (Morning)", 
        indication: "First-line Volume Expansion", 
        rationale: "Increases sodium and water retention to boost blood volume." 
      },
      { 
        drug: "Midodrine", 
        class: "Alpha-1 Agonist", 
        dose: "2.5-5 mg", 
        freq: "TID (Daytime only)", 
        indication: "Vasoconstriction", 
        rationale: "Increases vascular tone. Avoid before bed to prevent supine hypertension." 
      }
    ],

    lifestyle: [
      "Physical Counter-maneuvers: Leg crossing or squatting when dizzy.",
      "Head-up tilt sleeping (10-20 degrees).",
      "Compression stockings (waist-high preferred)."
    ],
    
    diet: {
      eat: ["Salted Lassi/Chaas", "Pickles (Achar) - Liberal salt intake", "Hydration (>2.5L/day)"],
      avoid: ["Large carbohydrate-heavy meals (prevents post-prandial drop)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Orthostatic Vitals", result: "Positive", notes: "Drop >20/10 mmHg" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Fludrocortisone 0.1mg", "Increased Salt/Fluid intake"] }
    ]
  },

  "Chronic Obstructive Pulmonary Disease": {
    category: "Respiratory",
    pathophysiology: "Chronic airway inflammation due to noxious particles (smoke/biomass) leading to small airway fibrosis (obstructive bronchiolitis) and parenchymal destruction (emphysema).",
    
    clinicalFeatures: {
      symptoms: ["Chronic progressive dyspnea", "Cough with sputum production", "Wheezing", "Fatigue"],
      signs: ["Barrel chest", "Pursed-lip breathing", "Prolonged expiration", "Use of accessory muscles"]
    },

    diagnosticWorkup: [
      { test: "Spirometry", finding: "Post-bronchodilator FEV1/FVC < 0.7", significance: "Gold Standard Confirmation" },
      { test: "CXR", finding: "Hyperinflation/Flattened diaphragm", significance: "Supports diagnosis/Rules out cancer" },
      { test: "Alpha-1 Antitrypsin", finding: "Low levels", significance: "Check in young (<45y) non-smokers" }
    ],

    clinicalPearls: [
      { pearl: "Oxygen Target.", explanation: "Target SpO2 88-92% in CO2 retainers to avoid suppressing hypoxic respiratory drive." },
      { pearl: "Chulha Risk.", explanation: "Biomass fuel smoke is a major cause in rural Indian women who never smoked tobacco." }
    ],
    
    redFlags: ["altered mental status (Hypercapnia)", "Worsening cyanosis", "Silent Chest", "Hemoptysis (Malignancy risk)"],
    differentials: ["Asthma (Reversible)", "Congestive Heart Failure", "Bronchiectasis", "Tuberculosis"],

    managementRationale: [
      { 
        drug: "Tiotropium", 
        class: "LAMA (Long-Acting Muscarinic Antagonist)", 
        dose: "18 mcg", 
        freq: "OD (Inhaler)", 
        indication: "Maintenance", 
        rationale: "Bronchodilation and reduction of exacerbations." 
      },
      { 
        drug: "Formoterol + Budesonide", 
        class: "LABA + ICS", 
        dose: "6/200 mcg", 
        freq: "BD", 
        indication: "Severe/Frequent Exacerbations", 
        rationale: "Reduces inflammation and improves FEV1." 
      }
    ],

    lifestyle: [
      "Smoking Cessation (Single most effective intervention).",
      "Pulmonary Rehabilitation (Pursed lip breathing exercises).",
      "Annual Flu & Pneumococcal vaccines."
    ],
    
    diet: {
      eat: ["High protein (Paneer, Soya chunks, Eggs) to prevent muscle wasting", "Small frequent meals"],
      avoid: ["Gas-forming foods (Rajma, Chole, Cabbage) which push diaphragm up", "Very high carb loads (Increases CO2 production)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "16.5 g/dL (Polycythemia)", wbc: "8,000 /cmm", plt: "280,000 /cmm", hct: "50%" },
      progression: [{ day: 1, hb: "16.5 g/dL", wbc: "8,000 /cmm", plt: "280,000 /cmm", hct: "50%" }]
    },
    specialTests: [
      { name: "ABG", result: "pH 7.35, pCO2 55 (Compensated)", notes: "Chronic Respiratory Acidosis" }
    ],
    treatment: [
      { day: 1, meds: ["Inhaled Tiotropium", "Nebulized Salbutamol SOS", "O2 to maintain 88-92%"] }
    ]
  },

  "Parkinson’s Disease": {
    category: "Neurology",
    pathophysiology: "Progressive degeneration of dopaminergic neurons in the substantia nigra pars compacta, leading to a dopamine-acetylcholine imbalance in the basal ganglia.",
    
    clinicalFeatures: {
      symptoms: ["Tremor at rest (Pill-rolling)", "Stiffness/Rigidity", "Slowness of movement (Bradykinesia)", "Postural instability"],
      signs: ["Cogwheel rigidity", "Mask-like facies", "Shuffling gait", "Micrographia (Small handwriting)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "Bradykinesia + Tremor or Rigidity", significance: "Primary Diagnosis" },
      { test: "Levodopa Challenge", finding: "Significant symptom improvement", significance: "Supports diagnosis" },
      { test: "MRI Brain", finding: "Normal (excludes stroke/tumor)", significance: "Rule out secondary parkinsonism" }
    ],

    clinicalPearls: [
      { pearl: "TRAP Mnemonic.", explanation: "Tremor, Rigidity, Akinesia/Bradykinesia, Postural instability." },
      { pearl: "Protein Interference.", explanation: "Dietary protein competes with Levodopa for absorption in the gut and crossing BBB." }
    ],
    
    redFlags: ["Early falls (PSP)", "Early dementia (Lewy Body)", "Gaze palsy (PSP)", "Rapid progression"],
    differentials: ["Essential Tremor (Action tremor)", "Drug-induced (Metoclopramide/Antipsychotics)", "Wilson's Disease", "Vascular Parkinsonism"],

    managementRationale: [
      { 
        drug: "Carbidopa-Levodopa", 
        class: "Dopamine Precursor/Decarboxylase Inhibitor", 
        dose: "25/100 mg", 
        freq: "TID", 
        indication: "Motor symptoms", 
        rationale: "Levodopa converts to dopamine; Carbidopa prevents peripheral breakdown." 
      },
      { 
        drug: "Pramipexole", 
        class: "Dopamine Agonist", 
        dose: "0.125 mg", 
        freq: "TID (Titrate)", 
        indication: "Early onset (<65y)", 
        rationale: "Delays need for Levodopa; reduces risk of dyskinesias." 
      }
    ],

    lifestyle: [
      "Physical Therapy: Big and Loud exercises.",
      "Fall prevention strategies (Remove rugs, install grab bars).",
      "Speech therapy for dysphagia/hypophonia."
    ],
    
    diet: {
      eat: ["Fiber-rich foods (Constipation is common)", "Hydration", "Turmeric (Neuroprotective potential)"],
      avoid: ["High protein meals WITH Levodopa dose (Space them out)", "Heavy meals at lunch if taking meds"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "MRI Brain", result: "Normal", notes: "No structural lesions" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Syndopa (Levodopa+Carbidopa) 110mg TID", "Physiotherapy"] }
    ]
  },

  "Type 1 Diabetes Mellitus": {
    category: "Endocrinology",
    pathophysiology: "T-cell mediated autoimmune destruction of pancreatic beta cells resulting in absolute insulin deficiency and proneness to ketoacidosis.",
    
    clinicalFeatures: {
      symptoms: ["Rapid weight loss", "Polyuria/Polydipsia", "Fatigue", "Fruity breath odor (in DKA)"],
      signs: ["Lean body habitus", "Kussmaul breathing (if acidotic)", "Signs of dehydration"]
    },

    diagnosticWorkup: [
      { test: "C-Peptide", finding: "Low or Undetectable", significance: "Confirms endogenous insulin deficiency" },
      { test: "Autoantibodies (GAD65/IA-2)", finding: "Positive", significance: "Confirms Autoimmune etiology" },
      { test: "Ketones (Blood/Urine)", finding: "Positive", significance: "Risk of DKA" }
    ],

    clinicalPearls: [
      { pearl: "Honeymoon Phase.", explanation: "Temporary remission shortly after diagnosis where insulin needs drop; always transient." },
      { pearl: "Sick Day Rule.", explanation: "Never stop insulin during illness/fever, even if not eating, due to stress hyperglycemia." }
    ],
    
    redFlags: ["Vomiting + Abdominal Pain (Impending DKA)", "Confusion (Cerebral Edema/Severe Hypo)", "Kussmaul Respirations"],
    differentials: ["Type 2 Diabetes (Ketosis-prone)", "MODY (Maturity Onset Diabetes of Young)", "Pancreatic injury"],

    managementRationale: [
      { 
        drug: "Insulin Glargine", 
        class: "Long-acting Insulin (Basal)", 
        dose: "0.2-0.4 U/kg/day", 
        freq: "OD (Bedtime)", 
        indication: "Basal requirement", 
        rationale: "Suppresses hepatic glucose production between meals." 
      },
      { 
        drug: "Insulin Lispro/Aspart", 
        class: "Rapid-acting Insulin (Bolus)", 
        dose: "Carb ratio based", 
        freq: "Before meals", 
        indication: "Prandial spikes", 
        rationale: "Covers glucose rise from food intake." 
      }
    ],

    lifestyle: [
      "Carbohydrate Counting is essential.",
      "Continuous Glucose Monitoring (CGM) recommended.",
      "Always carry fast-acting glucose (sugar/juice) for hypoglycemia."
    ],
    
    diet: {
      eat: ["Complex carbs (Ragi/Jowar Roti)", "Vegetables (Bhindi, Karela)", "Lean protein"],
      avoid: ["Simple sugars (Mithai, Halwa)", "Fruit juices (Rapid spike)", "Fasting (Risk of Hypo)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "C-Peptide", result: "< 0.1 ng/mL", notes: "Absolute deficiency" },
      { name: "Anti-GAD65", result: "Positive", notes: "Autoimmune marker" }
    ],
    treatment: [
      { day: 1, meds: ["Insulin Glargine 10U HS", "Insulin Aspart 4U before meals", "Glucometer Check Q4H"] }
    ]
  },

  "Peptic Ulcer Disease": {
    category: "Gastroenterology",
    pathophysiology: "Mucosal defect in the stomach or duodenum caused by an imbalance between aggressive factors (Acid, Pepsin) and defense mechanisms, usually driven by H. pylori or NSAIDs.",
    
    clinicalFeatures: {
      symptoms: ["Epigastric burning pain", "Pain relieved by food (Duodenal) or worsened by food (Gastric)", "Bloating", "Early satiety"],
      signs: ["Epigastric tenderness", "Melena (if bleeding)", "Pallor (if chronic bleed)"]
    },

    diagnosticWorkup: [
      { test: "Upper GI Endoscopy", finding: "Ulcer visualization", significance: "Gold Standard + Biopsy capability" },
      { test: "Urea Breath Test / H. pylori Ag", finding: "Positive", significance: "Confirms etiology for eradication" },
      { test: "CBC", finding: "Low Hb", significance: "Check for chronic GI blood loss" }
    ],

    clinicalPearls: [
      { pearl: "Gastric vs Duodenal.", explanation: "Duodenal ulcers improve with meals (Weight gain); Gastric ulcers worsen with meals (Weight loss)." },
      { pearl: "Alarm Signs.", explanation: "Any patient >55y with new dyspepsia requires endoscopy to rule out cancer." }
    ],
    
    redFlags: ["Hematemesis (Coffee ground)", "Melena (Black tarry stools)", "Rigid board-like abdomen (Perforation)", "Persistent vomiting (Outlet obstruction)"],
    differentials: ["GERD", "Gastric Cancer", "Pancreatitis", "Biliary Colic"],

    managementRationale: [
      { 
        drug: "Pantoprazole", 
        class: "Proton Pump Inhibitor", 
        dose: "40 mg", 
        freq: "BD (if H.pylori) or OD", 
        indication: "Acid suppression", 
        rationale: "Maintains pH > 4 to allow mucosal healing." 
      },
      { 
        drug: "Clarithromycin + Amoxicillin", 
        class: "Antibiotics", 
        dose: "500mg + 1g", 
        freq: "BD x 14 days", 
        indication: "H. pylori Eradication", 
        rationale: "Standard triple therapy backbone (with PPI)." 
      }
    ],

    lifestyle: [
      "Stop NSAIDs (Painkillers) immediately.",
      "Smoking cessation (Smoking delays ulcer healing).",
      "Stress reduction."
    ],
    
    diet: {
      eat: ["Curd/Yogurt (Probiotics)", "Cold Milk (Symptomatic relief)", "Fiber-rich veg"],
      avoid: ["Red Chili powder", "Spicy Pickles", "Coffee/Caffeine (Stimulates acid)", "Alcohol", "Deep fried foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.2 g/dL (Mild anemia)", wbc: "6,800 /cmm", plt: "300,000 /cmm", hct: "34%" },
      progression: [{ day: 1, hb: "11.2 g/dL", wbc: "6,800 /cmm", plt: "300,000 /cmm", hct: "34%" }]
    },
    specialTests: [
      { name: "H. Pylori Urease", result: "Positive", notes: "Indicates active infection" },
      { name: "Endoscopy", result: "1cm Duodenal Ulcer", notes: "Clean base, no active bleed" }
    ],
    treatment: [
      { day: 1, meds: ["Kit-Kat (Pantoprazole+Amox+Clarithro) Kit", "Avoid NSAIDs"] }
    ]
  },

  "Acute Kidney Injury": {
    category: "Renal",
    pathophysiology: "Abrupt reduction in kidney function (Pre-renal, Intrinsic, or Post-renal) leading to retention of nitrogenous waste (Azotemia) and electrolyte imbalances.",
    
    clinicalFeatures: {
      symptoms: ["Oliguria (<400ml urine/day)", "Peripheral edema", "Nausea/Vomiting", "Fatigue/Confusion (Uremic)"],
      signs: ["Fluid overload (Crackles, JVP elevated)", "Hypertension", "Asterixis (Flapping tremor in severe cases)"]
    },

    diagnosticWorkup: [
      { test: "Serum Creatinine", finding: "Rise > 0.3 mg/dL in 48h", significance: "KDIGO Diagnostic Criteria" },
      { test: "Ultrasound KUB", finding: "Normal size (Acute) vs Small (Chronic)", significance: "Rule out Post-renal obstruction" },
      { test: "Urine Electrolytes", finding: "FENa < 1% (Prerenal)", significance: "Distinguishes Prerenal from ATN" }
    ],

    clinicalPearls: [
      { pearl: "Stop Nephrotoxins.", explanation: "Immediate cessation of NSAIDs, ACEi/ARBs, and Aminoglycosides is the first step in management." },
      { pearl: "Fluid Challenge.", explanation: "If lungs are clear, a fluid bolus helps distinguish volume depletion (Prerenal) from intrinsic damage." }
    ],
    
    redFlags: ["Hyperkalemia (>6.5 mEq/L)", "Pulmonary Edema", "Severe Acidosis (pH < 7.1)", "Uremic Encephalopathy"],
    differentials: ["Chronic Kidney Disease", "Urinary Retention (BPH)", "Heart Failure", "Dehydration"],

    managementRationale: [
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "40-80 mg", 
        freq: "IV Bolus", 
        indication: "Fluid Overload", 
        rationale: "Manages volume status; does not 'jumpstart' kidneys but aids fluid balance." 
      },
      { 
        drug: "Calcium Gluconate", 
        class: "Electrolyte Supplement", 
        dose: "10 ml (10%)", 
        freq: "IV Stat", 
        indication: "Hyperkalemia", 
        rationale: "Stabilizes cardiac membrane to prevent arrhythmia (does not lower K+)." 
      },
      { 
        drug: "Sodium Bicarbonate", 
        class: "Alkalinizing Agent", 
        dose: "1 mEq/kg", 
        freq: "IV Infusion", 
        indication: "Severe Acidosis", 
        rationale: "Corrects metabolic acidosis (pH < 7.1)." 
      }
    ],

    lifestyle: [
      "Daily Weight Monitoring (Track fluid status).",
      "Strict Input/Output charting.",
      "Avoid herbal supplements (Nephrotoxicity risk)."
    ],
    
    diet: {
      eat: ["Gourd vegetables (Lauki/Tinda - Low K+)", "White Rice (Low protein load)", "Apples/Guava"],
      avoid: ["Coconut Water (High Potassium)", "Fruit Juices", "Spinach/Tomatoes (High K+)", "High Protein Dals (Urea load)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Serum Creatinine", result: "2.8 mg/dL", notes: "Acute rise from baseline" },
      { name: "Potassium", result: "5.8 mEq/L", notes: "Mild Hyperkalemia" }
    ],
    treatment: [
      { day: 1, meds: ["IV Fluids (if dry)", "Stop Nephrotoxic Drugs", "Monitor Output"] }
    ]
  },

  "Iron Deficiency Anemia": {
    category: "Hematology",
    pathophysiology: "Inadequate iron stores leading to defective heme synthesis, resulting in microcytic hypochromic red blood cells and reduced oxygen capacity.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue/Lethargy", "Pica (Craving ice/mud)", "Dyspnea on exertion", "Hair loss"],
      signs: ["Pallor (Conjunctiva/Palms)", "Koilonychia (Spoon nails)", "Glossitis (Smooth tongue)", "Angular Cheilitis"]
    },

    diagnosticWorkup: [
      { test: "Serum Ferritin", finding: "< 30 ng/mL", significance: "Most sensitive/specific test for low iron stores" },
      { test: "CBC", finding: "Low Hb, Low MCV (<80 fL)", significance: "Microcytic Hypochromic Anemia" },
      { test: "TIBC", finding: "High (>400 mcg/dL)", significance: "Compensatory increase in transferrin" }
    ],

    clinicalPearls: [
      { pearl: "Search for Cause.", explanation: "In adult males and post-menopausal women, IDA implies GI Bleed (Colon Cancer/Ulcer) until proven otherwise." },
      { pearl: "Absorption Boost.", explanation: "Iron requires an acidic environment; absorption increases with Vitamin C (Ascorbic Acid)." }
    ],
    
    redFlags: ["Melena/Hematemesis", "Weight Loss (Malignancy)", "Hemodynamic Instability", "Severe Tachycardia"],
    differentials: ["Thalassemia Trait (Normal RDW)", "Anemia of Chronic Disease", "Sideroblastic Anemia"],

    managementRationale: [
      { 
        drug: "Ferrous Ascorbate", 
        class: "Iron Supplement", 
        dose: "100 mg (Elemental)", 
        freq: "BD", 
        indication: "Iron Replenishment", 
        rationale: "Ascorbate salt has better GI tolerability and absorption than sulfate." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Co-supplementation", 
        rationale: "Supportive for erythropoiesis." 
      }
    ],

    lifestyle: [
      "Avoid tea/coffee 1 hour before/after meals (Tannins block iron).",
      "Cook in cast-iron cookware (traditional method).",
      "Deworming if parasitic cause suspected."
    ],
    
    diet: {
      eat: ["Jaggery (Gur)", "Dates/Khajoor", "Spinach (Palak)", "Amla/Lemon (Vit C boost)", "Pomegranate"],
      avoid: ["Tea/Coffee with meals", "Excess milk (Calcium inhibits iron absorption)", "Phytate-rich grains without soaking"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "8.2 g/dL", wbc: "6,000 /cmm", plt: "450,000 /cmm (Reactive)", hct: "28%" },
      progression: [{ day: 1, hb: "8.2 g/dL", wbc: "6,000 /cmm", plt: "450,000 /cmm", hct: "28%" }]
    },
    specialTests: [
      { name: "Peripheral Smear", result: "Microcytic Hypochromic", notes: "Pencil cells seen" },
      { name: "Serum Ferritin", result: "8 ng/mL", notes: "Severe deficiency" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Ferrous Ascorbate 100mg BD", "Tab. Folic Acid 5mg OD"] }
    ]
  },

  "Typhoid Fever": {
    category: "Infectious Disease",
    pathophysiology: "Systemic infection by Salmonella Typhi transmitted via fecal-oral route, invading Peyer's patches and spreading via the reticuloendothelial system.",
    
    clinicalFeatures: {
      symptoms: ["Step-ladder fever pattern", "Headache (Frontal)", "Abdominal pain", "Constipation or 'Pea-soup' diarrhea"],
      signs: ["Rose spots (Trunk)", "Relative Bradycardia (Faget's sign)", "Hepatosplenomegaly", "Coated tongue"]
    },

    diagnosticWorkup: [
      { test: "Blood Culture", finding: "Salmonella Typhi growth", significance: "Gold Standard (Week 1)" },
      { test: "Widal Test", finding: "TO > 1:160 (Rising titer)", significance: "Supportive (Week 2 onwards, high false positive rate)" },
      { test: "CBC", finding: "Leukopenia with Neutropenia", significance: "Viral-like picture is typical" }
    ],

    clinicalPearls: [
      { pearl: "Antibiotic Resistance.", explanation: "Multi-Drug Resistant (MDR) strains are common in India. Ciprofloxacin often fails; Ceftriaxone/Azithromycin preferred." },
      { pearl: "Carrier State.", explanation: "2-5% become chronic carriers (gallbladder colonization), continuing to spread disease." }
    ],
    
    redFlags: ["GI Bleeding", "Intestinal Perforation (Sudden pain)", "Typhoid Encephalopathy (Delirium)", "Myocarditis"],
    differentials: ["Malaria", "Dengue Fever", "Leptospirosis", "Scrub Typhus"],

    managementRationale: [
      { 
        drug: "Ceftriaxone", 
        class: "Cephalosporin (3rd Gen)", 
        dose: "2 g", 
        freq: "IV OD x 7-14 days", 
        indication: "Severe/Inpatient", 
        rationale: "Highly effective against MDR strains." 
      },
      { 
        drug: "Azithromycin", 
        class: "Macrolide", 
        dose: "500-1000 mg", 
        freq: "PO OD x 7 days", 
        indication: "Uncomplicated/Outpatient", 
        rationale: "Intracellular penetration makes it effective for Salmonella." 
      },
      { 
        drug: "Paracetamol", 
        class: "Antipyretic", 
        dose: "650 mg", 
        freq: "SOS", 
        indication: "Fever", 
        rationale: "Symptomatic control." 
      }
    ],

    lifestyle: [
      "Enteric Precautions (Hand hygiene).",
      "Complete full course of antibiotics to prevent carrier state.",
      "Bed rest during febrile phase."
    ],
    
    diet: {
      eat: ["Soft Diet (Khichdi, Dalia)", "Boiled Water", "High Calorie fluids (Lassi)", "Banana"],
      avoid: ["Raw vegetables (Salad)", "Street food/Pani Puri", "Spicy food (Irritates inflamed Peyer's patches)", "High fiber (Risk of perforation)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "3,800 /cmm (Leukopenia)", plt: "150,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "3,800 /cmm", plt: "150,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "Widal Test", result: "TO 1:320, TH 1:160", notes: "Positive titer" },
      { name: "Blood Culture", result: "S. Typhi", notes: "Sensitivity: Ceftriaxone (S)" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Ceftriaxone 2g IV", "Tab. Paracetamol 650mg SOS"] }
    ]
  },

  "Systemic Lupus Erythematosus": {
    category: "Autoimmune",
    pathophysiology: "Chronic multisystem autoimmune disease involving autoantibodies (ANA, Anti-dsDNA) and immune complex deposition leading to tissue inflammation and damage.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue (Profound)", "Joint pain (Arthralgia)", "Photosensitivity", "Pleuritic chest pain"],
      signs: ["Malar Rash (Butterfly rash)", "Discoid Rash", "Oral Ulcers (Painless)", "Alopecia"]
    },

    diagnosticWorkup: [
      { test: "ANA (Antinuclear Antibody)", finding: "Positive (>1:80)", significance: "Screening Test (High Sensitivity)" },
      { test: "Anti-dsDNA", finding: "Positive", significance: "High Specificity (Correlates with Nephritis)" },
      { test: "Complement (C3/C4)", finding: "Low", significance: "Indicates active disease consumption" }
    ],

    clinicalPearls: [
      { pearl: "Lupus Nephritis.", explanation: "Monitor Urinalysis every visit. Proteinuria/Hematuria suggests renal involvement (major morbidity)." },
      { pearl: "Drug Induced Lupus.", explanation: "Hydralazine, Procainamide, and Isoniazid can trigger reversible lupus-like syndrome (Anti-Histone antibodies)." }
    ],
    
    redFlags: ["New Proteinuria (Nephritis)", "Seizures/Psychosis (Neuro-Lupus)", "Hemoptysis (Pulmonary Hemorrhage)", "High Fever (Rule out Infection vs Flare)"],
    differentials: ["Rheumatoid Arthritis", "Dermatomyositis", "Drug Eruptions", "Fibromyalgia"],

    managementRationale: [
      { 
        drug: "Hydroxychloroquine", 
        class: "Antimalarial", 
        dose: "200-400 mg", 
        freq: "OD", 
        indication: "Maintenance", 
        rationale: "Prevents flares and reduces organ damage. Requires annual eye exam." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "0.5-1 mg/kg", 
        freq: "OD (Taper)", 
        indication: "Acute Flare", 
        rationale: "Rapid anti-inflammatory action." 
      },
      { 
        drug: "Mycophenolate Mofetil", 
        class: "Immunosuppressant", 
        dose: "1 g", 
        freq: "BD", 
        indication: "Lupus Nephritis", 
        rationale: "Sparing agent for steroid reduction." 
      }
    ],

    lifestyle: [
      "Strict Sun Protection (Sunscreen SPF >50, Umbrella).",
      "Smoking cessation (Smoking reduces Hydroxychloroquine efficacy).",
      "Vitamin D supplementation."
    ],
    
    diet: {
      eat: ["Omega-3 rich foods (Fish/Walnuts)", "Calcium rich foods (Milk/Paneer)", "Turmeric (Anti-inflammatory)"],
      avoid: ["Alfalfa sprouts (Contains L-canavanine, triggers lupus)", "Garlic (Immune booster - controversial in autoimmunity)", "Excessive Salt"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "3,500 /cmm", plt: "110,000 /cmm", hct: "32%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "3,500 /cmm", plt: "110,000 /cmm", hct: "32%" }]
    },
    specialTests: [
      { name: "ANA", result: "Positive 1:640", notes: "Speckled pattern" },
      { name: "Anti-dsDNA", result: "Positive", notes: "High titer" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Hydroxychloroquine 200mg", "Tab. Prednisolone 20mg"] }
    ]
  },

  "Breast Cancer": {
    category: "Oncology",
    pathophysiology: "Uncontrolled proliferation of epithelial cells in the breast lobules or ducts, often driven by hormonal (Estrogen/Progesterone) or genetic (BRCA) factors.",
    
    clinicalFeatures: {
      symptoms: ["Painless breast lump", "Nipple discharge (Bloody)", "Skin changes (Dimpling)", "Axillary swelling"],
      signs: ["Hard, irregular fixed mass", "Peau d'orange (Orange peel skin)", "Nipple retraction", "Lymphadenopathy"]
    },

    diagnosticWorkup: [
      { test: "Mammography", finding: "Spiculated mass / Microcalcifications", significance: "Primary Screening/Diagnosis" },
      { test: "Core Needle Biopsy", finding: "Invasive Ductal Carcinoma", significance: "Gold Standard Confirmation" },
      { test: "IHC Panel", finding: "ER/PR/HER2 Status", significance: "Guides targeted therapy choices" }
    ],

    clinicalPearls: [
      { pearl: "Triple Assessment.", explanation: "Diagnosis requires agreement of Clinical Exam, Imaging (Mammo/USG), and Pathology (Biopsy)." },
      { pearl: "Upper Outer Quadrant.", explanation: "The most common site for breast cancer (Tail of Spence)." }
    ],
    
    redFlags: ["Skin ulceration", "Fixed mass to chest wall", "Bone pain/Jaundice (Metastasis)", "Dyspnea (Lung Mets)"],
    differentials: ["Fibroadenoma (Mobile)", "Breast Cyst", "Mastitis/Abscess", "Fat Necrosis"],

    managementRationale: [
      { 
        drug: "Tamoxifen", 
        class: "SERM", 
        dose: "20 mg", 
        freq: "OD", 
        indication: "ER+ Breast Cancer", 
        rationale: "Blocks estrogen receptors in breast tissue (Pre-menopausal)." 
      },
      { 
        drug: "Letrozole", 
        class: "Aromatase Inhibitor", 
        dose: "2.5 mg", 
        freq: "OD", 
        indication: "ER+ Breast Cancer", 
        rationale: "Inhibits peripheral estrogen synthesis (Post-menopausal)." 
      },
      { 
        drug: "Trastuzumab", 
        class: "Monoclonal Antibody", 
        dose: "Loading/Maintenance", 
        freq: "IV q3 weeks", 
        indication: "HER2+ Breast Cancer", 
        rationale: "Targets HER2 receptor overexpression." 
      }
    ],

    lifestyle: [
      "Weight control (Obesity increases recurrence risk).",
      "Lymphedema precautions (Avoid BP/Needles on affected arm).",
      "Regular exercise."
    ],
    
    diet: {
      eat: ["Cruciferous vegetables (Cabbage/Cauliflower)", "Soy (Moderate amounts safe)", "Flaxseeds", "Whole grains"],
      avoid: ["Alcohol (Increases estrogen)", "Processed meats", "High fat dairy", "Sugary beverages"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" }]
    },
    specialTests: [
      { name: "Biopsy", result: "Invasive Ductal Carcinoma", notes: "Grade 2" },
      { name: "Receptors", result: "ER+, PR+, HER2-", notes: "Luminal A subtype" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Tamoxifen 20mg OD", "Post-op care"] }
    ]
  },

  "Lead Poisoning": {
    category: "Toxicology",
    pathophysiology: "Heavy metal toxicity causing inhibition of delta-aminolevulinic acid dehydratase (ALAD) in heme synthesis and interfering with calcium-dependent neuronal signaling.",
    
    clinicalFeatures: {
      symptoms: ["Colicky abdominal pain (Lead Colic)", "Constipation", "Fatigue/Irritability", "Headache", "Memory loss"],
      signs: ["Burton's Line (Blue-black gum line)", "Wrist drop (Radial nerve palsy)", "Pallor", "Hypertension"]
    },

    diagnosticWorkup: [
      { test: "Blood Lead Level (BLL)", finding: "> 5 mcg/dL", significance: "CDC Reference Level (Diagnosis)" },
      { test: "Peripheral Smear", finding: "Basophilic Stippling", significance: "Classic hematological sign" },
      { test: "X-ray Long Bones", finding: "Lead Lines", significance: "Indicates chronic exposure (growth plates)" }
    ],

    clinicalPearls: [
      { pearl: "Exposure Sources.", explanation: "In India: Ayurvedic 'Bhasmas', lead-acid battery recycling, old paints, and adulterated turmeric." },
      { pearl: "Mimics Acute Abdomen.", explanation: "Severe lead colic is often mistaken for appendicitis or obstruction." }
    ],
    
    redFlags: ["Encephalopathy (Seizures/Coma)", "BLL > 70 mcg/dL (Emergency)", "Severe Intractable Vomiting"],
    differentials: ["Acute Porphyria", "Iron Deficiency Anemia", "Appendicitis", "Guillain-Barre Syndrome"],

    managementRationale: [
      { 
        drug: "Succimer (DMSA)", 
        class: "Chelating Agent", 
        dose: "10 mg/kg", 
        freq: "TID x 5 days", 
        indication: "BLL > 45 mcg/dL", 
        rationale: "Oral chelator; binds lead and excretes it in urine." 
      },
      { 
        drug: "Calcium Carbonate", 
        class: "Mineral Supplement", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Prevention", 
        rationale: "Competes with lead for absorption in the gut." 
      }
    ],

    lifestyle: [
      "Environmental Abatement: Remove peeling paint, check water pipes.",
      "Workplace hygiene: Shower/change clothes before entering home (if battery worker).",
      "Wet mopping dust."
    ],
    
    diet: {
      eat: ["Calcium rich foods (Milk/Paneer)", "Iron rich foods (Spinach/Dates)", "Vitamin C (Amla) to help excretion"],
      avoid: ["Fasting (Increases absorption)", "High fat meals", "Adulterated spices (Loose turmeric)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "28%" },
      progression: [{ day: 1, hb: "9.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "28%" }]
    },
    specialTests: [
      { name: "Blood Lead Level", result: "55 mcg/dL", notes: "Requires Chelation" },
      { name: "Peripheral Smear", result: "Basophilic Stippling", notes: "Classic finding" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Succimer 10mg/kg", "Calcium Supplementation"] }
    ]
  },

  "Polycystic Ovary Syndrome": {
    category: "Reproductive Health",
    pathophysiology: "Complex endocrine disorder involving insulin resistance and hyperinsulinemia, driving ovarian androgen overproduction and arresting follicular development.",
    
    clinicalFeatures: {
      symptoms: ["Irregular periods (Oligomenorrhea)", "Weight gain/Difficulty losing weight", "Acne", "Unwanted hair growth (Hirsutism)"],
      signs: ["Acanthosis Nigricans (Velvety neck skin)", "Central Obesity", "Ferriman-Gallwey Score > 8"]
    },

    diagnosticWorkup: [
      { test: "Pelvic Ultrasound", finding: "String of Pearls", significance: ">12 follicles or ovarian volume >10ml" },
      { test: "Serum Testosterone", finding: "Elevated (Free/Total)", significance: "Biochemical Hyperandrogenism" },
      { test: "Fasting Insulin/Glucose", finding: "High HOMA-IR", significance: "Insulin Resistance check" }
    ],

    clinicalPearls: [
      { pearl: "Rotterdam Criteria.", explanation: "Diagnosis needs 2 of 3: Oligo-ovulation, Hyperandrogenism, Polycystic ovaries." },
      { pearl: "Not just fertility.", explanation: "Major risk factor for Metabolic Syndrome, Type 2 Diabetes, and Endometrial Cancer." }
    ],
    
    redFlags: ["Rapid virilization (Voice deepening - Rule out Tumor)", "Severe menorrhagia (Anemia)", "Amenorrhea > 3 months (Endometrial hyperplasia risk)"],
    differentials: ["Cushing's Syndrome", "Congenital Adrenal Hyperplasia", "Hypothyroidism", "Prolactinoma"],

    managementRationale: [
      { 
        drug: "Ethinylestradiol + Cyproterone", 
        class: "OCP (Anti-androgenic)", 
        dose: "Standard pill", 
        freq: "OD x 21 days", 
        indication: "Cycle regulation/Acne", 
        rationale: "Increases SHBG to bind free testosterone; regulates shedding." 
      },
      { 
        drug: "Metformin", 
        class: "Biguanide", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "Insulin Resistance", 
        rationale: "Improves insulin sensitivity and spontaneous ovulation." 
      },
      { 
        drug: "Letrozole", 
        class: "Aromatase Inhibitor", 
        dose: "2.5 mg", 
        freq: "CD 3-7", 
        indication: "Infertility", 
        rationale: "First-line ovulation induction agent." 
      }
    ],

    lifestyle: [
      "Weight loss of 5-10% restores ovulation in 50% of patients.",
      "Resistance training to improve insulin sensitivity.",
      "Sleep hygiene to lower cortisol."
    ],
    
    diet: {
      eat: ["Low GI Foods", "Methi (Fenugreek) water", "Flaxseeds (Anti-androgenic)", "Spearmint Tea"],
      avoid: ["Maida (White flour)", "Sugar/Sweets", "Dairy (if acne prone)", "Processed snacks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "USG Pelvis", result: "Bilateral Polycystic Ovaries", notes: "Ovarian volume 12cc" },
      { name: "Testosterone", result: "80 ng/dL (High)", notes: "Upper normal limit 45" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Metformin 500mg BD", "Lifestyle Modification"] }
    ]
  },

  "Osteoporosis": {
    category: "Musculoskeletal",
    pathophysiology: "Imbalance of bone remodeling where resorption (Osteoclasts) exceeds formation (Osteoblasts), leading to decreased bone mineral density and micro-architectural deterioration.",
    
    clinicalFeatures: {
      symptoms: ["Asymptomatic (Silent disease)", "Back pain (Vertebral collapse)", "Loss of height"],
      signs: ["Kyphosis (Dowager's hump)", "Fragility fractures (Wrist, Hip, Spine)"]
    },

    diagnosticWorkup: [
      { test: "DEXA Scan", finding: "T-score ≤ -2.5", significance: "Gold Standard Diagnosis" },
      { test: "Serum Calcium/Vit D", finding: "Often Normal or Low D", significance: "Rule out Osteomalacia" },
      { test: "PTH", finding: "Normal", significance: "Rule out Hyperparathyroidism" }
    ],

    clinicalPearls: [
      { pearl: "Fragility Fracture.", explanation: "A fracture resulting from a fall from standing height or less defines severe osteoporosis regardless of T-score." },
      { pearl: "Indian Paradox.", explanation: "Despite high sun exposure, Vitamin D deficiency is rampant in India, worsening bone health." }
    ],
    
    redFlags: ["History of Hip Fracture", "Severe localized spine pain (Acute compression fracture)", "Steroid use > 3 months"],
    differentials: ["Osteomalacia (Vit D deficiency)", "Multiple Myeloma", "Metastatic Bone Disease", "Hyperparathyroidism"],

    managementRationale: [
      { 
        drug: "Alendronate", 
        class: "Bisphosphonate", 
        dose: "70 mg", 
        freq: "Once Weekly", 
        indication: "First-line Therapy", 
        rationale: "Inhibits osteoclast-mediated bone resorption. Take on empty stomach, stay upright 30 mins." 
      },
      { 
        drug: "Calcium Carbonate", 
        class: "Supplement", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Supportive", 
        rationale: "Essential substrate for bone mineralization." 
      },
      { 
        drug: "Cholecalciferol", 
        class: "Vitamin D3", 
        dose: "60,000 IU", 
        freq: "Weekly x 8 weeks", 
        indication: "Deficiency correction", 
        rationale: "Increases gut calcium absorption." 
      }
    ],

    lifestyle: [
      "Weight-bearing exercises (Walking, Jogging).",
      "Fall prevention (Correct vision, remove tripping hazards).",
      "Sun exposure (10-15 mins midday)."
    ],
    
    diet: {
      eat: ["Ragi (Finger Millet) - Highest calcium grain", "Milk/Curd/Paneer", "Sesame seeds (Til)", "Moringa leaves"],
      avoid: ["Excess Salt (Caused Calcium excretion)", "Excess Caffeine", "Smoking", "Cola drinks (High phosphate)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "DEXA Scan", result: "L-Spine T-score -2.8", notes: "Osteoporosis confirmed" },
      { name: "Vitamin D", result: "12 ng/mL", notes: "Deficiency" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Alendronate 70mg Weekly", "Cap. Vit D3 60k Weekly", "Calcium 500mg BD"] }
    ]
  },

  "Eczema": {
    category: "Dermatology",
    pathophysiology: "Defective skin barrier function (Filaggrin mutation) leading to transepidermal water loss and immune dysregulation (Th2 pathway) causing inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Severe Pruritus ('Itch that rashes')", "Dry skin", "Sleep disturbance due to itch"],
      signs: ["Erythema", "Lichenification (Thickening from scratching)", "Excoriations", "Flexural distribution (Inner elbows/knees)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "Hanifin & Rajka", significance: "Diagnosis is clinical" },
      { test: "Serum IgE", finding: "Elevated", significance: "Supportive of atopic diathesis" },
      { test: "Skin Prick Test", finding: "Positive to allergens", significance: "Identify triggers (rarely needed)" }
    ],

    clinicalPearls: [
      { pearl: "The Atopic March.", explanation: "Eczema in infancy often progresses to Allergic Rhinitis and then Asthma later in childhood." },
      { pearl: "Soak and Seal.", explanation: "Apply moisturizers immediately (within 3 mins) after bathing to trap moisture." }
    ],
    
    redFlags: ["Eczema Herpeticum (Punched out erosions/fever)", "Superinfected (Yellow crusting - Staph)", "Erythroderma (>90% body surface)"],
    differentials: ["Psoriasis (Extensor surfaces)", "Scabies", "Contact Dermatitis", "Seborrheic Dermatitis"],

    managementRationale: [
      { 
        drug: "White Soft Paraffin / Coconut Oil", 
        class: "Emollient", 
        dose: "Apply liberally", 
        freq: "Q4H (Continuous)", 
        indication: "Maintenance", 
        rationale: "Restores skin barrier function. Foundation of therapy." 
      },
      { 
        drug: "Mometasone Furoate", 
        class: "Topical Corticosteroid", 
        dose: "0.1% Cream", 
        freq: "OD (Acute flares)", 
        indication: "Inflammation", 
        rationale: "Anti-inflammatory. Use potent steroids for short duration." 
      },
      { 
        drug: "Tacrolimus", 
        class: "Calcineurin Inhibitor", 
        dose: "0.03% or 0.1%", 
        freq: "BD", 
        indication: "Face/Neck", 
        rationale: "Non-steroidal option suitable for thin skin areas." 
      }
    ],

    lifestyle: [
      "Use lukewarm water for baths (Hot water dries skin).",
      "Wear cotton clothes; avoid wool/synthetic.",
      "Keep fingernails short to prevent excoriation."
    ],
    
    diet: {
      eat: ["Omega-3 rich foods", "Probiotics (Curd)", "Hydration"],
      avoid: ["Common allergens ONLY if confirmed (Egg/Peanut)", "Spicy foods (Can trigger sweat/itch)", "Processed sugar"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,500 /cmm", plt: "280,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,500 /cmm", plt: "280,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Total IgE", result: "450 IU/mL", notes: "Elevated" },
      { name: "Skin Swab", result: "Staph aureus", notes: "Treat if infected" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Emollients liberally", "Tab. Cetirizine 5mg for itch"] }
    ]
  },

  "Anaphylaxis": {
    category: "Emergency / Immunology",
    pathophysiology: "Severe, life-threatening systemic hypersensitivity reaction (Type I) involving massive mast cell degranulation and histamine release causing vasodilation and bronchospasm.",
    
    clinicalFeatures: {
      symptoms: ["Difficulty breathing", "Dizziness/Fainting", "Tongue swelling", "Feeling of impending doom"],
      signs: ["Hypotension (Shock)", "Wheezing/Stridor", "Urticaria (Hives)", "Angioedema"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "Acute onset + Skin/Mucosa + Resp/CVS compromise", significance: "Diagnosis is CLINICAL. Do not wait for labs." },
      { test: "Serum Tryptase", finding: "Elevated", significance: "Retrospective confirmation (peaks 1-2h after)" }
    ],

    clinicalPearls: [
      { pearl: "Epinephrine First.", explanation: "Adrenaline is the ONLY life-saving drug. Antihistamines/Steroids do not treat shock or airway obstruction." },
      { pearl: "Biphasic Reaction.", explanation: "Symptoms can recur 1-72 hours later; observation for at least 4-6 hours is mandatory." }
    ],
    
    redFlags: ["Stridor (Airway closing)", "Hypotension (Shock)", "Persistent vomiting", "Bradycardia (ominous sign in shock)"],
    differentials: ["Acute Asthma Attack", "Vasovagal Syncope", "Panic Attack", "Hereditary Angioedema"],

    managementRationale: [
      { 
        drug: "Epinephrine (Adrenaline)", 
        class: "Sympathomimetic", 
        dose: "0.5 mg (1:1000)", 
        freq: "IM Stat (Repeat q5min)", 
        indication: "First-line Life Saving", 
        rationale: "Alpha-1 vasoconstriction (BP) + Beta-2 bronchodilation (Airway) + Mast cell stabilization." 
      },
      { 
        drug: "Hydrocortisone", 
        class: "Corticosteroid", 
        dose: "200 mg", 
        freq: "IV Stat", 
        indication: "Prevent biphasic reaction", 
        rationale: "Reduces late-phase inflammation (slow onset)." 
      },
      { 
        drug: "Pheniramine", 
        class: "Antihistamine", 
        dose: "45 mg", 
        freq: "IV Stat", 
        indication: "Cutaneous symptoms", 
        rationale: "Relieves itching and hives only." 
      }
    ],

    lifestyle: [
      "Carry Epipen (or ampoule/syringe) at all times.",
      "MedicAlert bracelet.",
      "Strict avoidance of known triggers."
    ],
    
    diet: {
      eat: ["Safe home-cooked meals"],
      avoid: ["Common Indian triggers: Brinjal (Eggplant), Peanuts, Shellfish", "Street food (Unknown ingredients)", "Beta-blockers (Reduce Epinephrine efficacy)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Serum Tryptase", result: "25 ng/mL", notes: "Elevated (Acute phase)" },
      { name: "SpO2", result: "88% RA", notes: "Hypoxia present" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Adrenaline 0.5mg IM Stat", "IV Fluids Bolus", "O2 High Flow"] }
    ]
  },
};