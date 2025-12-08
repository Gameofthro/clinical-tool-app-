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
  "Atherosclerosis": {
    category: "Cardiovascular System",
    pathophysiology: "Chronic inflammatory response to endothelial injury involving lipid accumulation (LDL), macrophage infiltration, and smooth muscle proliferation. Formation of atheromatous plaques leads to luminal narrowing and potential rupture/thrombosis.",
    
    clinicalFeatures: {
      symptoms: ["Angina pectoris (exertional chest pain)", "Intermittent claudication", "Transient ischemic attacks", "Fatigue"],
      signs: ["Carotid/femoral bruits", "Diminished peripheral pulses", "Xanthelasma (lipid deposits around eyes)", "Arcus senilis"]
    },

    diagnosticWorkup: [
      { test: "Lipid Profile", finding: "High LDL (>100 mg/dL), Low HDL, High Triglycerides", significance: "Risk Stratification" },
      { test: "Doppler Ultrasound", finding: "Reduced flow/Stenosis", significance: "Assesses peripheral flow" },
      { test: "Coronary Angiography", finding: "Luminal narrowing", significance: "Gold Standard for anatomy" }
    ],

    clinicalPearls: [
      { pearl: "The Silent Killer", explanation: "Often asymptomatic until >70% stenosis occurs." },
      { pearl: "Plaque Stability", explanation: "Vulnerable plaques with thin fibrous caps are more prone to rupture than stable, calcified plaques." }
    ],
    
    redFlags: ["Unstable angina", "Rest pain in limbs", "Sudden neurologic deficit (Stroke)", "Acute MI symptoms"],
    differentials: ["Vasculitis", "Fibromuscular dysplasia", "Arterial embolism"],

    managementRationale: [
      { 
        drug: "Atorvastatin", 
        class: "HMG-CoA Reductase Inhibitor", 
        dose: "40-80 mg", 
        freq: "OD (Night)", 
        indication: "Dyslipidemia", 
        rationale: "Pleiotropic effects stabilize plaque and lower LDL." 
      },
      { 
        drug: "Aspirin", 
        class: "Antiplatelet", 
        dose: "75-150 mg", 
        freq: "OD", 
        indication: "Prophylaxis", 
        rationale: "Prevents thrombotic events over ruptured plaque." 
      },
      { 
        drug: "Ezetimibe", 
        class: "Cholesterol Absorption Inhibitor", 
        dose: "10 mg", 
        freq: "OD", 
        indication: "Adjunct therapy", 
        rationale: "Inhibits intestinal absorption of cholesterol." 
      }
    ],

    lifestyle: ["Smoking cessation is critical", "150 mins/week moderate aerobic exercise", "Weight management (BMI <23 for Asians)"],
    
    diet: {
      eat: ["Oats/Daliya (Soluble fiber)", "Methi (Fenugreek) seeds", "Garlic", "Walnuts/Almonds (soaked)", "High fiber Roti (Multigrain)"],
      avoid: ["Vanaspati/Dalda", "Deep fried foods (Samosa, Pakora)", "Full cream milk", "Red meat", "Excess Ghee"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Hs-CRP", result: "Elevated", notes: "Marker of inflammation" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Atorvastatin 40mg HS", "Tab. Aspirin 75mg OD"] }
    ]
  },

  "Tuberculosis (Pulmonary)": {
    category: "Respiratory System",
    pathophysiology: "Infection by Mycobacterium tuberculosis leads to alveolar macrophage uptake and granuloma formation (Ghon focus). Failure of immune containment results in caseous necrosis, cavitation, and active disease transmission.",
    
    clinicalFeatures: {
      symptoms: ["Chronic cough (>2 weeks)", "Hemoptysis", "Evening rise fever", "Night sweats", "Significant weight loss"],
      signs: ["Crepitations in apical zones", "Bronchial breath sounds", "Lymphadenopathy", "Cachexia"]
    },

    diagnosticWorkup: [
      { test: "Sputum Smear (ZN Stain)", finding: "Acid Fast Bacilli (AFB) positive", significance: "Initial screening" },
      { test: "CBNAAT (GeneXpert)", finding: "MTB detected + Rifampin sensitivity", significance: "Gold Standard (Rapid)" },
      { test: "Chest X-Ray", finding: "Apical infiltrates/Cavitation", significance: "Radiological evidence" }
    ],

    clinicalPearls: [
      { pearl: "DOTS Strategy", explanation: "Directly Observed Treatment Short-course ensures adherence." },
      { pearl: "Pyridoxine Co-admin", explanation: "Vitamin B6 must be given with Isoniazid to prevent peripheral neuropathy." }
    ],
    
    redFlags: ["Massive hemoptysis", "Spontaneous pneumothorax", "Disseminated TB (Miliary)", "Drug-induced hepatitis"],
    differentials: ["Lung abscess", "Bronchiectasis", "Lung malignancy", "Fungal pneumonia"],

    managementRationale: [
      { 
        drug: "Rifampin", 
        class: "Antitubercular (R)", 
        dose: "10 mg/kg (Max 600)", 
        freq: "OD", 
        indication: "Active TB", 
        rationale: "Bactericidal; inhibits RNA polymerase. Red/Orange urine warning." 
      },
      { 
        drug: "Isoniazid", 
        class: "Antitubercular (H)", 
        dose: "5 mg/kg (Max 300)", 
        freq: "OD", 
        indication: "Active TB", 
        rationale: "Inhibits mycolic acid synthesis. Hepatotoxic." 
      },
      { 
        drug: "Pyrazinamide", 
        class: "Antitubercular (Z)", 
        dose: "25 mg/kg", 
        freq: "OD", 
        indication: "Active TB (Intensive Phase)", 
        rationale: "Active in acidic pH (macrophages). Increases Uric Acid." 
      },
      { 
        drug: "Ethambutol", 
        class: "Antitubercular (E)", 
        dose: "15 mg/kg", 
        freq: "OD", 
        indication: "Active TB", 
        rationale: "Inhibits arabinosyl transferase. Monitor visual acuity." 
      }
    ],

    lifestyle: ["Isolate until sputum negative", "Use mask at home initially", "Sunlight exposure (UV kills bacilli)"],
    
    diet: {
      eat: ["High protein (Paneer, Soy chunks, Eggs)", "Khichdi with Ghee (Calorie density)", "Groundnut chikki", "Seasonal fruits"],
      avoid: ["Alcohol (Strictly - Liver toxicity risk)", "Tobacco", "Carbonated drinks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.2 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "32%" },
      progression: [{ day: 1, hb: "10.2 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "32%" }]
    },
    specialTests: [
      { name: "ESR", result: "High (>60mm/hr)", notes: "Non-specific inflammatory marker" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. 4FDC (RHEZ) Daily", "Tab. Pyridoxine 20mg"] }
    ]
  },

  "Schizophrenia": {
    category: "Nervous System (Psychiatry)",
    pathophysiology: "Neurodevelopmental disorder linked to dopamine dysregulation (excess D2 activity in mesolimbic pathway causing positive symptoms; low D1 in mesocortical causing negative symptoms) and glutamate NMDA receptor hypofunction.",
    
    clinicalFeatures: {
      symptoms: ["Hallucinations (Auditory)", "Delusions (Paranoid/Grandeur)", "Disorganized speech", "Social withdrawal"],
      signs: ["Flat affect", "Avolition (lack of drive)", "Poor hygiene", "Catatonia (rare now)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Interview (DSM-5)", finding: "2+ symptoms for >1 month", significance: "Diagnosis basis" },
      { test: "MRI Brain", finding: "Ventricular enlargement (non-specific)", significance: "Rule out organic causes" },
      { test: "Urine Toxicology", finding: "Negative", significance: "Rule out substance-induced psychosis" }
    ],

    clinicalPearls: [
      { pearl: "Rule of Thirds", explanation: "1/3 recover fully, 1/3 have intermittent episodes, 1/3 become chronic." },
      { pearl: "Metabolic Syndrome", explanation: "Atypical antipsychotics significantly increase risk of diabetes and obesity." }
    ],
    
    redFlags: ["Suicidal ideation", "Command hallucinations", "Neuroleptic Malignant Syndrome", "Agranulocytosis (Clozapine)"],
    differentials: ["Bipolar disorder with psychosis", "Substance-induced psychosis", "Delusional disorder"],

    managementRationale: [
      { 
        drug: "Risperidone", 
        class: "Atypical Antipsychotic", 
        dose: "2-6 mg", 
        freq: "OD/BD", 
        indication: "Psychosis", 
        rationale: "Serotonin-Dopamine Antagonist (SDA); treats positive & negative symptoms." 
      },
      { 
        drug: "Olanzapine", 
        class: "Atypical Antipsychotic", 
        dose: "5-20 mg", 
        freq: "HS", 
        indication: "Psychosis/Agitation", 
        rationale: "High affinity for D2/5HT2A; sedative effect useful for sleep. High metabolic risk." 
      },
      { 
        drug: "Trihexyphenidyl", 
        class: "Anticholinergic", 
        dose: "2 mg", 
        freq: "BD", 
        indication: "EPS Prophylaxis", 
        rationale: "Manages drug-induced parkinsonism (EPS)." 
      }
    ],

    lifestyle: ["Structured daily routine", "Vocational rehabilitation", "Avoid cannabis/alcohol (precipitates relapse)"],
    
    diet: {
      eat: ["Omega-3 rich (Flaxseeds/Alsi, Walnuts)", "Whole grains", "Curd/Buttermilk (Microbiome-Brain axis)"],
      avoid: ["Excess Chai/Coffee (worsens insomnia)", "Sugary snacks (metabolic risk)", "Gluten (some sensitivity noted)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Fasting Lipid Profile", result: "Monitor", notes: "Due to antipsychotic side effects" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Risperidone 2mg BD", "Tab. Trihexyphenidyl 2mg BD"] }
    ]
  },

  "Hyperthyroidism (Graves')": {
    category: "Endocrine System",
    pathophysiology: "Autoimmune disorder where Thyroid Stimulating Immunoglobulins (TSI) mimic TSH, activating the TSH receptor. This causes uncontrolled synthesis and release of T3 and T4, independent of pituitary feedback.",
    
    clinicalFeatures: {
      symptoms: ["Palpitations", "Heat intolerance", "Weight loss despite increased appetite", "Tremors", "Anxiety"],
      signs: ["Tachycardia", "Exophthalmos (Proptosis)", "Diffuse Goiter", "Pretibial myxedema", "Warm moist skin"]
    },

    diagnosticWorkup: [
      { test: "TSH", finding: "Suppressed (<0.05 mIU/L)", significance: "Primary screening" },
      { test: "Free T4/T3", finding: "Elevated", significance: "Confirms thyrotoxicosis" },
      { test: "RAIU Scan", finding: "Diffuse high uptake", significance: "Distinguishes Graves' from thyroiditis" }
    ],

    clinicalPearls: [
      { pearl: "Thyroid Storm", explanation: "Life-threatening exacerbation triggered by stress/infection; presents with fever, delirium, and arrhythmia." },
      { pearl: "Graves' Ophthalmopathy", explanation: "Can progress independently of thyroid levels; worsens with smoking." }
    ],
    
    redFlags: ["Atrial Fibrillation", "High fever (Storm risk)", "Agranulocytosis (Sore throat from Methimazole)", "Jaundice"],
    differentials: ["Toxic Multinodular Goiter", "Thyroiditis (Hashimoto's initial phase)", "Pheochromocytoma"],

    managementRationale: [
      { 
        drug: "Methimazole", 
        class: "Thionamide", 
        dose: "10-20 mg", 
        freq: "OD", 
        indication: "Inhibit hormone synthesis", 
        rationale: "Blocks thyroid peroxidase (TPO) and coupling of iodotyrosines." 
      },
      { 
        drug: "Propranolol", 
        class: "Beta Blocker (Non-selective)", 
        dose: "10-40 mg", 
        freq: "TID/QID", 
        indication: "Symptom control", 
        rationale: "Controls tachycardia/tremors and inhibits peripheral T4 to T3 conversion." 
      }
    ],

    lifestyle: ["Stress reduction (Yoga/Meditation)", "Smoking cessation (crucial for eyes)", "Use dark glasses for photophobia"],
    
    diet: {
      eat: ["Calcium rich foods (Milk, Paneer) - bone protection", "Cruciferous veggies (Cabbage/Cauliflower) - mild goitrogens allowed", "High calorie homemade sweets"],
      avoid: ["Iodized salt excess", "Seaweed/Kelp", "Excess caffeine (worsens palpitations)", "Highly processed foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "37%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "37%" }]
    },
    specialTests: [
      { name: "TSI Antibody", result: "Positive", notes: "Specific for Graves" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Methimazole 10mg OD", "Tab. Propranolol 20mg TID"] }
    ]
  },

  "Crohn’s Disease": {
    category: "Gastrointestinal System",
    pathophysiology: "Chronic transmural granulomatous inflammation capable of affecting any part of the GI tract (Mouth to Anus). Driven by T-helper cell (Th1/Th17) dysregulation and microbiome imbalance. Characterized by 'skip lesions'.",
    
    clinicalFeatures: {
      symptoms: ["Abdominal pain (often RLQ)", "Chronic diarrhea (usually non-bloody)", "Fatigue", "Weight loss"],
      signs: ["Perianal fistulas/tags", "Aphthous ulcers", "Abdominal mass", "Pallor (Anemia)"]
    },

    diagnosticWorkup: [
      { test: "Colonoscopy", finding: "Cobblestone appearance, Skip lesions", significance: "Gold Standard" },
      { test: "Biopsy", finding: "Non-caseating granulomas", significance: "Pathognomonic" },
      { test: "Fecal Calprotectin", finding: "Elevated", significance: "Differentiates IBD from IBS" }
    ],

    clinicalPearls: [
      { pearl: "ASCA vs pANCA", explanation: "Crohn's is typically ASCA positive and pANCA negative (opposite of UC)." },
      { pearl: "Transmural Nature", explanation: "Deep inflammation predisposes Crohn's patients to strictures and fistulas." }
    ],
    
    redFlags: ["Bowel obstruction", "Toxic megacolon", "Perforation", "Massive hemorrhage"],
    differentials: ["Ulcerative Colitis", "Intestinal TB", "Celiac disease", "Appendicitis"],

    managementRationale: [
      { 
        drug: "Budesonide", 
        class: "Corticosteroid", 
        dose: "9 mg", 
        freq: "OD", 
        indication: "Mild-Mod Ileal Crohn's", 
        rationale: "High first-pass metabolism reduces systemic side effects compared to systemic steroids." 
      },
      { 
        drug: "Azathioprine", 
        class: "Immunomodulator", 
        dose: "2-2.5 mg/kg", 
        freq: "OD", 
        indication: "Maintenance", 
        rationale: "Inhibits purine synthesis; steroid-sparing agent. Monitor bone marrow." 
      },
      { 
        drug: "Mesalamine", 
        class: "5-ASA", 
        dose: "2-4 g", 
        freq: "Divided", 
        indication: "Mild disease", 
        rationale: "Local anti-inflammatory effect (limited efficacy in Crohn's vs UC)." 
      }
    ],

    lifestyle: ["Stress management", "Smoking cessation (Smoking worsens Crohn's)", "Hydration maintenance"],
    
    diet: {
      eat: ["Curd/Yogurt (Probiotics)", "Khichdi (well cooked)", "Banana", "Boiled potato", "Lean chicken/fish"],
      avoid: ["Raw leafy vegetables (during flares)", "Spicy Curries", "Whole pulses with husk", "Popcorn/Nuts", "Milk (if lactose intolerant)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "12,000 /cmm", plt: "450,000 /cmm", hct: "31%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "12,000 /cmm", plt: "450,000 /cmm", hct: "31%" }]
    },
    specialTests: [
      { name: "Vit B12", result: "Low", notes: "Terminal ileum malabsorption" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Budesonide 9mg OD", "Tab. Azathioprine 50mg OD"] }
    ]
  },
  "Chronic Kidney Disease": {
    category: "Renal System",
    pathophysiology: "Progressive, irreversible loss of nephrons leading to glomerular sclerosis and interstitial fibrosis. Results in reduced GFR, retention of uremic toxins, and failure of hormonal functions (Erythropoietin, Vitamin D activation).",
    
    clinicalFeatures: {
      symptoms: ["Fatigue (Anemia)", "Nausea/Vomiting (Uremia)", "Pruritus", "Edema (Fluid overload)"],
      signs: ["Hypertension", "Pallor", "Asterixis (in advanced stages)", "Uremic frost (rare/terminal)"]
    },

    diagnosticWorkup: [
      { test: "eGFR", finding: "< 60 mL/min/1.73m²", significance: "Definition of CKD (sustained >3 months)" },
      { test: "Urine ACR", finding: "> 30 mg/g", significance: "Albumin-Creatinine Ratio indicates glomerular damage" },
      { test: "Ultrasound KUB", finding: "Small, shrunken kidneys", significance: "Differentitates Chronic from Acute (normal size)" }
    ],

    clinicalPearls: [
      { pearl: "Renal Bone Disease.", explanation: "Hyperphosphatemia drags Calcium from bones, stimulating PTH (Secondary Hyperparathyroidism)." },
      { pearl: "The 'Triple Whammy'.", explanation: "Avoid combination of ACEi/ARB + Diuretic + NSAID; precipitates acute failure on chronic background." }
    ],
    
    redFlags: ["Hyperkalemia (>6.5 mEq/L)", "Pericardial rub (Uremic Pericarditis)", "Refractory fluid overload", "Encephalopathy"],
    differentials: ["Acute Kidney Injury", "Renal Artery Stenosis", "Polycystic Kidney Disease"],

    managementRationale: [
      { 
        drug: "Telmisartan", 
        class: "ARB", 
        dose: "40-80 mg", 
        freq: "OD", 
        indication: "Proteinuria reduction", 
        rationale: "Reduces intraglomerular pressure; renoprotective even if BP is normal." 
      },
      { 
        drug: "Calcium Acetate", 
        class: "Phosphate Binder", 
        dose: "667 mg", 
        freq: "TID with meals", 
        indication: "Hyperphosphatemia", 
        rationale: "Binds dietary phosphorus in the gut to prevent absorption." 
      },
      { 
        drug: "Erythropoietin (EPO)", 
        class: "ESA", 
        dose: "4000 IU", 
        freq: "Twice Weekly (SC)", 
        indication: "Anemia of CKD", 
        rationale: "Stimulates erythropoiesis usually deficient due to renal mass loss." 
      }
    ],

    lifestyle: ["Smoking cessation (slows progression)", "Avoid NSAIDs strictly", "Fluid restriction (in late stages)"],
    
    diet: {
      eat: ["Leached vegetables (Boil & discard water to lower K+)", "Egg whites (High biologic value protein)", "White rice (Low phosphate)"],
      avoid: ["Coconut water (Very High Potassium)", "Spinach/Tomato (High K+)", "Dal/Pulses (High Phosphate - limit intake)", "Salt substitutes (contain KCl)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "29%" },
      progression: [{ day: 1, hb: "9.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "29%" }]
    },
    specialTests: [
      { name: "Serum Creatinine", result: "3.2 mg/dL", notes: "eGFR ~20" },
      { name: "Potassium", result: "5.4 mEq/L", notes: "Borderline High" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Telmisartan 40mg OD", "Tab. Calcium Acetate 667mg TID", "Inj. EPO 4000IU SC"] }
    ]
  },

  "Megaloblastic Anemia": {
    category: "Hematology",
    pathophysiology: "Deficiency of Vitamin B12 (Cobalamin) or Folate inhibits DNA synthesis during erythropoiesis, leading to nuclear-cytoplasmic asynchrony and large, immature red blood cells (Megaloblasts).",
    
    clinicalFeatures: {
      symptoms: ["Fatigue", "Glossitis (Beefy red tongue)", "Paresthesia (Pins & needles - B12 specific)", "Memory loss"],
      signs: ["Lemon-yellow pallor", "Knuckle hyperpigmentation", "Ataxic gait (Subacute Combined Degeneration)"]
    },

    diagnosticWorkup: [
      { test: "Peripheral Smear", finding: "Macro-ovalocytes + Hypersegmented Neutrophils", significance: "Pathognomonic Hallmark" },
      { test: "Serum B12/Folate", finding: "B12 <200 pg/mL", significance: "Confirms deficiency" },
      { test: "Homocysteine", finding: "Elevated", significance: "Sensitive metabolic marker" }
    ],

    clinicalPearls: [
      { pearl: "Folate Trap.", explanation: "Treating B12 deficiency with Folic Acid alone corrects anemia but allows neurological damage to progress rapidly." },
      { pearl: "Vegetarian Risk.", explanation: "Strict vegetarians/vegans are at highest risk as B12 is primarily found in animal products." }
    ],
    
    redFlags: ["Pancytopenia (Bone marrow failure mimic)", "Severe neurological deficit", "Psychosis ('Megaloblastic Madness')"],
    differentials: ["Myelodysplastic Syndrome", "Liver Disease (Macrocytosis)", "Hypothyroidism"],

    managementRationale: [
      { 
        drug: "Cyanocobalamin", 
        class: "Vitamin B12", 
        dose: "1000 mcg", 
        freq: "IM OD x 7d, then Weekly", 
        indication: "B12 Deficiency", 
        rationale: "Parenteral route bypasses intrinsic factor defects (Pernicious Anemia)." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin B9", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Folate Deficiency", 
        rationale: "Replenishes stores; crucial for DNA synthesis." 
      }
    ],

    lifestyle: ["Strict adherence to supplements for vegans", "Alcohol cessation (Interferes with folate absorption)"],
    
    diet: {
      eat: ["Curd/Paneer (Best veg B12 sources)", "Fortified cereals", "Green leafy vegetables (Folate)", "Fermented foods (Idli/Dosa - trace B12)"],
      avoid: ["Overcooking vegetables (Destroys Folate)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "7.5 g/dL", wbc: "3,500 /cmm", plt: "110,000 /cmm", hct: "24%" },
      progression: [{ day: 1, hb: "7.5 g/dL", wbc: "3,500 /cmm", plt: "110,000 /cmm", hct: "24%" }]
    },
    specialTests: [
      { name: "MCV", result: "115 fL", notes: "Macrocytic" },
      { name: "Peripheral Smear", result: "Hypersegmented Neutrophils", notes: ">5 lobes" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Vit B12 1000mcg IM", "Tab. Folic Acid 5mg OD"] }
    ]
  },

  "Syphilis": {
    category: "Infectious Disease (STI)",
    pathophysiology: "Systemic infection by spirochete Treponema pallidum. Causes obliterative endarteritis leading to chancre (Primary), rash (Secondary), and gummas/neuro-cardio involvement (Tertiary).",
    
    clinicalFeatures: {
      symptoms: ["Painless ulcer (Chancre)", "Generalized rash (Palms/Soles)", "Fever/Malaise"],
      signs: ["Hard Chancre (Indurated)", "Condyloma Lata (Wart-like moist lesions)", "Patchy alopecia ('Moth-eaten')"]
    },

    diagnosticWorkup: [
      { test: "VDRL / RPR", finding: "Reactive", significance: "Screening (Non-treponemal). Monitors treatment response." },
      { test: "TPHA / FTA-ABS", finding: "Positive", significance: "Confirmatory (Treponemal). Remains positive for life." },
      { test: "Dark Field Microscopy", finding: "Motile Spirochetes", significance: "Direct visualization from chancre." }
    ],

    clinicalPearls: [
      { pearl: "The Great Imitator.", explanation: "Secondary syphilis can mimic psoriasis, drug eruption, or viral exanthems." },
      { pearl: "Jarisch-Herxheimer Reaction.", explanation: "Acute fever/chills hours after penicillin injection due to massive lysis of spirochetes; self-limiting." }
    ],
    
    redFlags: ["Neurological signs (Neurosyphilis)", "Vision loss (Ocular syphilis)", "Aortic Regurgitation (Aortitis)", "Gummas"],
    differentials: ["Chancroid (Painful)", "Herpes Simplex (Vesicular)", "Psoriasis (Secondary stage mimic)"],

    managementRationale: [
      { 
        drug: "Benzathine Penicillin G", 
        class: "Antibiotic (Beta-lactam)", 
        dose: "2.4 Million Units", 
        freq: "IM Stat (Single dose)", 
        indication: "Primary/Secondary Syphilis", 
        rationale: "Maintains treponemicidal levels for >2 weeks. Gold Standard." 
      },
      { 
        drug: "Doxycycline", 
        class: "Tetracycline", 
        dose: "100 mg", 
        freq: "BD x 14 days", 
        indication: "Penicillin Allergy", 
        rationale: "Bacteriostatic alternative; less effective than Penicillin." 
      }
    ],

    lifestyle: ["Partner notification and treatment is mandatory", "Abstinence for 7 days post-treatment", "Screen for HIV/Hep B/C"],
    
    diet: {
      eat: ["Balanced diet for immune support", "Hydration (during Herxheimer reaction)"],
      avoid: ["Alcohol (Lowers immune inhibition)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "VDRL", result: "Reactive 1:64", notes: "High titer" },
      { name: "TPHA", result: "Positive", notes: "Confirmed" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Benzathine Penicillin 2.4MU IM (Deep Gluteal)"] }
    ]
  },

  "Rheumatoid Arthritis": {
    category: "Musculoskeletal (Autoimmune)",
    pathophysiology: "Chronic systemic autoimmune disease characterized by symmetric synovitis. Citrullinated protein antibodies form immune complexes, driving pannus formation and cartilage/bone destruction.",
    
    clinicalFeatures: {
      symptoms: ["Morning stiffness > 1 hour", "Joint pain (Small joints of hands/feet)", "Fatigue"],
      signs: ["Symmetrical swelling (MCP/PIP joints)", "Ulnar deviation", "Rheumatoid nodules", "Swan-neck deformity"]
    },

    diagnosticWorkup: [
      { test: "Anti-CCP", finding: "Positive", significance: "Highly specific (>95%) Gold Standard" },
      { test: "Rheumatoid Factor (RF)", finding: "Positive", significance: "Sensitive but less specific" },
      { test: "X-ray Hands", finding: "Marginal erosions", significance: "Evidence of structural damage" }
    ],

    clinicalPearls: [
      { pearl: "Treat to Target.", explanation: "Aim for remission within 3-6 months. Delayed DMARDs = Irreversible joint damage." },
      { pearl: "Spare the DIPs.", explanation: "RA typically affects MCP/PIP joints but spares the Distal Interphalangeal (DIP) joints (unlike Osteoarthritis)." }
    ],
    
    redFlags: ["Cervical instability (Atlanto-axial subluxation)", "Scleritis (Vision threat)", "Pulmonary Fibrosis (ILD)", "Felty Syndrome"],
    differentials: ["Osteoarthritis", "Psoriatic Arthritis", "SLE", "Chikungunya Arthritis"],

    managementRationale: [
      { 
        drug: "Methotrexate", 
        class: "DMARD (Antimetabolite)", 
        dose: "10-25 mg", 
        freq: "Once Weekly", 
        indication: "Anchor Drug", 
        rationale: "Inhibits AICAR transformylase and increases adenosine (anti-inflammatory)." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin", 
        dose: "5 mg", 
        freq: "Weekly (Day after MTX)", 
        indication: "Toxicity Prevention", 
        rationale: "Prevents mucositis and hepatotoxicity from Methotrexate." 
      },
      { 
        drug: "Hydroxychloroquine", 
        class: "DMARD", 
        dose: "200-400 mg", 
        freq: "OD", 
        indication: "Mild RA / Adjunct", 
        rationale: "Modulates TLR signaling; lipid-lowering benefits." 
      }
    ],

    lifestyle: ["Physiotherapy to maintain range of motion", "Smoking cessation (Smoking triggers ACPA production)", "Heat therapy for stiffness"],
    
    diet: {
      eat: ["Turmeric/Haldi (Curcumin is anti-inflammatory)", "Omega-3 (Fish/Flaxseeds)", "Ginger", "Vegetarian diet (often reduces inflammation)"],
      avoid: ["Sugar/Processed foods (Pro-inflammatory)", "Red meat", "Nightshades (Tomatoes/Brinjal - Subjective worsening)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "400,000 /cmm (Reactive)", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "400,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Anti-CCP", result: ">200 U/mL", notes: "Strongly positive" },
      { name: "ESR", result: "60 mm/hr", notes: "Active inflammation" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Methotrexate 15mg Weekly", "Tab. Folic Acid 5mg (Day 2)", "Tab. Naproxen SOS"] }
    ]
  },

  "Lung Cancer": {
    category: "Oncology",
    pathophysiology: "Uncontrolled proliferation of malignant cells arising from the respiratory epithelium (Bronchi/Bronchioles/Alveoli), driven by carcinogens (Tobacco) or genetic mutations (EGFR/ALK).",
    
    clinicalFeatures: {
      symptoms: ["Chronic cough / Change in cough", "Hemoptysis", "Weight loss", "Hoarseness of voice"],
      signs: ["Clubbing", "Monophonic wheeze (Tumor obstruction)", "SVC Obstruction (Facial swelling)", "Supraclavicular lymphadenopathy"]
    },

    diagnosticWorkup: [
      { test: "Contrast CT Chest", finding: "Spiculated mass / Hilar nodes", significance: "Primary Staging" },
      { test: "Biopsy (Bronchoscopy/CT Guided)", finding: "Malignant cells", significance: "Histological Confirmation (SCLC vs NSCLC)" },
      { test: "PET-CT", finding: "High FDG uptake", significance: "Metastasis check" }
    ],

    clinicalPearls: [
      { pearl: "Paraneoplastic Syndromes.", explanation: "SCLC is famous for SIADH (Hyponatremia) and Lambert-Eaton Myasthenic Syndrome." },
      { pearl: "Pancoast Tumor.", explanation: "Apical tumors can compress the sympathetic chain causing Horner's Syndrome (Ptosis, Miosis, Anhidrosis)." }
    ],
    
    redFlags: ["Massive Hemoptysis", "Stridor", "SVC Syndrome (Emergency)", "Cord Compression"],
    differentials: ["Pulmonary Tuberculosis (India's #1 mimic)", "Lung Abscess", "Fungal Ball", "Metastasis from other primary"],

    managementRationale: [
      { 
        drug: "Cisplatin", 
        class: "Platinum Agent", 
        dose: "75 mg/m2", 
        freq: "IV q3 weeks", 
        indication: "Chemotherapy Backbone", 
        rationale: "Cross-links DNA inhibiting replication." 
      },
      { 
        drug: "Pemetrexed", 
        class: "Antifolate", 
        dose: "500 mg/m2", 
        freq: "IV q3 weeks", 
        indication: "Adenocarcinoma (NSCLC)", 
        rationale: "Inhibits thymidylate synthase. Requires B12/Folate supplementation." 
      },
      { 
        drug: "Osimertinib", 
        class: "Tyrosine Kinase Inhibitor", 
        dose: "80 mg", 
        freq: "OD", 
        indication: "EGFR+ NSCLC", 
        rationale: "Targeted therapy for specific mutation; oral route." 
      }
    ],

    lifestyle: ["Smoking cessation (Improves chemo response)", "Pulmonary rehabilitation", "Palliative care integration early"],
    
    diet: {
      eat: ["High calorie/High protein (Eggs, Paneer, Chicken) to fight cachexia", "Smoothies (if dysphagia)", "Frequent small meals"],
      avoid: ["Raw foods (if neutropenic)", "Spicy foods (if mucositis present)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.5 g/dL", wbc: "9,000 /cmm", plt: "350,000 /cmm", hct: "32%" },
      progression: [{ day: 1, hb: "10.5 g/dL", wbc: "9,000 /cmm", plt: "350,000 /cmm", hct: "32%" }]
    },
    specialTests: [
      { name: "Biopsy", result: "Adenocarcinoma", notes: "TTF-1 Positive" },
      { name: "EGFR Mutation", result: "Detected (Exon 19)", notes: "Targetable" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Osimertinib 80mg OD", "Supportive Care"] }
    ]
  },
  "Organophosphate Poisoning": {
    category: "Toxicology",
    pathophysiology: "Irreversible inhibition of Acetylcholinesterase (AChE) by organophosphates (pesticides) leads to toxic accumulation of acetylcholine at muscarinic and nicotinic receptors, causing a 'Cholinergic Crisis'.",
    
    clinicalFeatures: {
      symptoms: ["Excessive salivation/lacrimation", "Difficulty breathing (Bronchorrhea)", "Blurring of vision", "Abdominal cramps/Diarrhea"],
      signs: ["Pinpoint pupils (Miosis)", "Fasciculations (Muscle twitching)", "Bradycardia", "Garlic-like breath odor"]
    },

    diagnosticWorkup: [
      { test: "Serum Butyrylcholinesterase", finding: "Reduced (<50%)", significance: "Screening test (more sensitive than RBC AChE)" },
      { test: "RBC Acetylcholinesterase", finding: "Reduced", significance: "Gold Standard (reflects neuronal AChE status)" },
      { test: "ECG", finding: "Prolonged QTc", significance: "Risk of arrhythmia (Torsades)" }
    ],

    clinicalPearls: [
      { pearl: "SLUDGE-M.", explanation: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis." },
      { pearl: "Atropinization Target.", explanation: "Treatment goal is NOT pupil dilation, but drying of secretions (clear chest) and heart rate >80." }
    ],
    
    redFlags: ["Respiratory Failure (Type 2)", "Seizures", "Intermediate Syndrome (Neck weakness days later)", "Aspiration Pneumonia"],
    differentials: ["Carbamate Poisoning (Reversible AChE)", "Opioid Overdose (Miosis but dry)", "Pontine Hemorrhage"],

    managementRationale: [
      { 
        drug: "Atropine", 
        class: "Anticholinergic", 
        dose: "2-5 mg (Doubling dose)", 
        freq: "IV q5-10min", 
        indication: "Muscarinic symptoms", 
        rationale: "Competitively blocks ACh at muscarinic receptors to dry secretions. No limit on max dose." 
      },
      { 
        drug: "Pralidoxime (PAM)", 
        class: "Oxime", 
        dose: "1-2 g", 
        freq: "IV Infusion", 
        indication: "Nicotinic symptoms", 
        rationale: "Reactivates AChE enzyme if given early (before 'aging' of bond)." 
      },
      { 
        drug: "Diazepam", 
        class: "Benzodiazepine", 
        dose: "10 mg", 
        freq: "IV Stat", 
        indication: "Seizures/Agitation", 
        rationale: "Prevents CNS toxicity and seizures." 
      }
    ],

    lifestyle: ["Strict avoidance of re-exposure.", "Use of PPE (Personal Protective Equipment) for farmers.", "Wash vegetables thoroughly."],
    
    diet: {
      eat: ["High protein fluids (post-recovery)", "Coconut water (Electrolytes)"],
      avoid: ["Fatty foods initially (Gastric stasis is common)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Cholinesterase Level", result: "Low (20%)", notes: "Severe toxicity" },
      { name: "ABG", result: "Acidosis", notes: "Respiratory failure" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Atropine Bolus + Infusion", "Inj. PAM 1g", "Ventilatory Support"] }
    ]
  },

  "Endometriosis": {
    category: "Gynecology",
    pathophysiology: "Presence of functional endometrial tissue outside the uterus (Ovaries, Pouch of Douglas) which responds to hormonal cycles, causing inflammation, fibrosis, and adhesion formation.",
    
    clinicalFeatures: {
      symptoms: ["Dysmenorrhea (Severe cramps)", "Dyspareunia (Painful intercourse)", "Chronic Pelvic Pain", "Infertility"],
      signs: ["Fixed retroverted uterus", "Adnexal masses (Chocolate cysts)", "Tenderness in Pouch of Douglas"]
    },

    diagnosticWorkup: [
      { test: "Laparoscopy", finding: "Powder-burn lesions", significance: "Gold Standard Diagnosis + Histology" },
      { test: "USG Pelvis", finding: "Endometrioma (Ground glass)", significance: "Detects ovarian involvement" },
      { test: "CA-125", finding: "Mildly Elevated", significance: "Supportive (Low specificity)" }
    ],

    clinicalPearls: [
      { pearl: "Cyclical Pain.", explanation: "Pain typically starts few days before menses and lasts throughout the flow." },
      { pearl: "Chocolate Cyst.", explanation: "Endometrioma in the ovary filled with old blood." }
    ],
    
    redFlags: ["Sudden severe pain (Cyst rupture)", "Bowel obstruction symptoms", "Hematuria (Bladder invasion)"],
    differentials: ["Pelvic Inflammatory Disease (PID)", "Adenomyosis", "Irritable Bowel Syndrome", "Ovarian Cyst"],

    managementRationale: [
      { 
        drug: "Dienogest", 
        class: "Progestin", 
        dose: "2 mg", 
        freq: "OD", 
        indication: "Pain/Lesion regression", 
        rationale: "Specific activity against endometriotic tissue; induces atrophy." 
      },
      { 
        drug: "Mefenamic Acid", 
        class: "NSAID", 
        dose: "500 mg", 
        freq: "TID", 
        indication: "Dysmenorrhea", 
        rationale: "Inhibits prostaglandins which drive uterine cramping." 
      },
      { 
        drug: "Combined Oral Contraceptive", 
        class: "Hormone", 
        dose: "Standard", 
        freq: "OD (Continuous)", 
        indication: "Suppression", 
        rationale: "Suppresses ovulation and thins the endometrium." 
      }
    ],

    lifestyle: ["Heat therapy (Hot water bag) for cramps.", "Stress reduction (Yoga).", "Regular exercise (Lowers estrogen)."],
    
    diet: {
      eat: ["Omega-3 (Walnuts/Flax)", "Ginger Tea (Anti-inflammatory)", "Fiber-rich foods (Reduces circulating estrogen)"],
      avoid: ["Trans fats (Processed foods)", "Red meat", "Excess Caffeine", "Gluten (Subjective relief reported)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" }]
    },
    specialTests: [
      { name: "USG", result: "Complex Cyst 4cm", notes: "Likely Endometrioma" },
      { name: "CA-125", result: "45 U/mL", notes: "Mild elevation" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Dienogest 2mg OD", "Tab. Mefenamic Acid SOS"] }
    ]
  },

  "Osteoarthritis": {
    category: "Musculoskeletal",
    pathophysiology: "Degenerative joint disease involving breakdown of articular cartilage, subchondral bone remodeling (sclerosis/cysts), and osteophyte formation due to mechanical stress.",
    
    clinicalFeatures: {
      symptoms: ["Joint pain (worsens with activity, relieved by rest)", "Morning stiffness <30 mins", "Crepitus (Grating sound)", "Instability"],
      signs: ["Heberden's/Bouchard's nodes (Hands)", "Bony tenderness", "Reduced Range of Motion", "Varus deformity (Knees)"]
    },

    diagnosticWorkup: [
      { test: "X-Ray", finding: "Joint space narrowing + Osteophytes", significance: "Diagnostic Hallmark (Kellgren-Lawrence scale)" },
      { test: "ESR/CRP", finding: "Normal", significance: "Rule out inflammatory arthritis (RA)" },
      { test: "Synovial Fluid Analysis", finding: "Non-inflammatory (<2000 WBC)", significance: "Rule out Gout/Septic Arthritis" }
    ],

    clinicalPearls: [
      { pearl: "Gelling Phenomenon.", explanation: "Stiffness after periods of inactivity that resolves quickly (<30 min)." },
      { pearl: "Mechanical Pain.", explanation: "Pain correlates with load-bearing; night pain suggests advanced disease." }
    ],
    
    redFlags: ["Hot swollen joint (Septic Arthritis)", "History of trauma (Fracture/Ligament)", "Weight loss/Fever (Malignancy/Infection)"],
    differentials: ["Rheumatoid Arthritis", "Gout", "Meniscal Tear", "Bursitis"],

    managementRationale: [
      { 
        drug: "Paracetamol", 
        class: "Analgesic", 
        dose: "650-1000 mg", 
        freq: "TID", 
        indication: "Mild Pain", 
        rationale: "First-line for pain relief with safety profile better than NSAIDs." 
      },
      { 
        drug: "Diclofenac Gel", 
        class: "Topical NSAID", 
        dose: "1% Gel", 
        freq: "QID", 
        indication: "Local Pain", 
        rationale: "Effective concentration in joint with minimal systemic absorption." 
      },
      { 
        drug: "Duloxetine", 
        class: "SNRI", 
        dose: "30-60 mg", 
        freq: "OD", 
        indication: "Chronic Pain", 
        rationale: "Modulates central pain pathways; useful when NSAIDs contraindicated." 
      }
    ],

    lifestyle: ["Weight Loss (Every 1kg loss reduces 4kg knee load).", "Quadriceps strengthening exercises.", "Use of walking aids/knee braces."],
    
    diet: {
      eat: ["Ragi (Calcium)", "Ginger/Turmeric (Anti-inflammatory)", "Vitamin D rich foods"],
      avoid: ["Sugar/Sweets (Weight gain)", "Fried foods", "Excess salt"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "X-Ray Knee", result: "Medial space narrowing", notes: "Osteophytes present" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Paracetamol 650mg TID", "Topical Diclofenac", "Physiotherapy"] }
    ]
  },

  "Acne Vulgaris": {
    category: "Dermatology",
    pathophysiology: "Disorder of the pilosebaceous unit involving follicular hyperkeratosis, increased sebum production (androgen driven), C. acnes colonization, and inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Oily skin (Seborrhea)", "Painful bumps", "Cosmetic concern"],
      signs: ["Comedones (Blackheads/Whiteheads)", "Papules/Pustules", "Nodulocystic lesions", "Scarring"]
    },

    diagnosticWorkup: [
      { test: "Clinical Grading", finding: "Mild/Mod/Severe", significance: "Determines treatment step" },
      { test: "Hormonal Panel", finding: "High Testosterone/DHEAS", significance: "If signs of virilization/PCOS present" }
    ],

    clinicalPearls: [
      { pearl: "Purging Phase.", explanation: "Retinoids may worsen acne initially (first 2-4 weeks) before improvement; encourage adherence." },
      { pearl: "Photosensitivity.", explanation: "Doxycycline and Retinoids increase sun sensitivity; sunscreen is mandatory." }
    ],
    
    redFlags: ["Sudden severe flare (Acne Fulminans)", "Systemic signs (Fever/Arthralgia)", "Mid-face dominance (Rosacea)"],
    differentials: ["Rosacea", "Folliculitis", "Drug-induced Acne (Steroids)", "Perioral Dermatitis"],

    managementRationale: [
      { 
        drug: "Adapalene", 
        class: "Topical Retinoid", 
        dose: "0.1% Gel", 
        freq: "OD (Night)", 
        indication: "Comedonal Acne", 
        rationale: "Normalizes follicular keratinization and reduces microcomedones." 
      },
      { 
        drug: "Benzoyl Peroxide", 
        class: "Antimicrobial", 
        dose: "2.5% Gel", 
        freq: "OD (Day/Night)", 
        indication: "Inflammatory Acne", 
        rationale: "Releases free radicals to kill C. acnes; prevents antibiotic resistance." 
      },
      { 
        drug: "Doxycycline", 
        class: "Antibiotic (Tetracycline)", 
        dose: "100 mg", 
        freq: "BD", 
        indication: "Mod-Severe Acne", 
        rationale: "Anti-inflammatory and antibacterial action." 
      }
    ],

    lifestyle: ["Use non-comedogenic (oil-free) face wash.", "Avoid picking/squeezing (Causes scarring).", "Change pillowcases regularly."],
    
    diet: {
      eat: ["Low GI foods", "Zinc rich foods (Pumpkin seeds)", "Green Tea"],
      avoid: ["High Glycemic Load (Sweets, Maida)", "Skimmed Milk/Whey Protein (Linked to acne flares)", "Greasy/Oily snacks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Grading", result: "Grade 3", notes: "Papulopustular" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Adapalene+BPO", "Cap. Doxycycline 100mg BD"] }
    ]
  },

  "Septic Shock": {
    category: "Emergency / Critical Care",
    pathophysiology: "Dysregulated host response to infection causing widespread vasodilation, capillary leak, and myocardial depression, leading to persistent hypotension requiring vasopressors.",
    
    clinicalFeatures: {
      symptoms: ["Fever or Hypothermia", "Confusion/Altered mental status", "Breathlessness", "Decreased urine output"],
      signs: ["Hypotension (MAP <65)", "Tachycardia", "Warm flushed skin (early) or Cold clammy (late)", "Mottling"]
    },

    diagnosticWorkup: [
      { test: "Serum Lactate", finding: "> 2 mmol/L", significance: "Marker of tissue hypoperfusion" },
      { test: "Blood Cultures", finding: "Pathogen Growth", significance: "Guides de-escalation of antibiotics" },
      { test: "qSOFA Score", finding: "≥ 2 (RR>22, AMS, SBP<100)", significance: "Bedside screen for poor outcome" }
    ],

    clinicalPearls: [
      { pearl: "The Golden Hour.", explanation: "IV Antibiotics must be administered within 1 hour of recognition." },
      { pearl: "Fluid Responsiveness.", explanation: "Not all patients respond to fluids; over-resuscitation causes pulmonary edema. Use PLR test." }
    ],
    
    redFlags: ["Lactate > 4 mmol/L", "Refractory Hypotension", "Anuria", "Disseminated Intravascular Coagulation (DIC)"],
    differentials: ["Cardiogenic Shock", "Anaphylaxis", "Hypovolemic Shock", "Adrenal Crisis"],

    managementRationale: [
      { 
        drug: "Norepinephrine", 
        class: "Vasopressor", 
        dose: "Start 0.05 mcg/kg/min", 
        freq: "Continuous Infusion", 
        indication: "Hypotension", 
        rationale: "Alpha-1 agonist; increases SVR to maintain MAP > 65 mmHg." 
      },
      { 
        drug: "Piperacillin-Tazobactam", 
        class: "Antibiotic", 
        dose: "4.5 g", 
        freq: "IV Q6H", 
        indication: "Empiric Coverage", 
        rationale: "Broad spectrum covering Pseudomonas and Gram-negatives." 
      },
      { 
        drug: "Normal Saline / Ringer Lactate", 
        class: "Crystalloid", 
        dose: "30 ml/kg", 
        freq: "Stat Bolus", 
        indication: "Resuscitation", 
        rationale: "Restores intravascular volume." 
      }
    ],

    lifestyle: ["ICU Care required.", "DVT Prophylaxis.", "Early enteral nutrition."],
    
    diet: {
      eat: ["Enteral feeds (NG Tube) preferred over Parenteral", "High protein supplements"],
      avoid: ["Starvation (gut barrier breakdown)", "Overfeeding (Hyperglycemia)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "22,000 /cmm", plt: "90,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "22,000 /cmm", plt: "90,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Lactate", result: "4.5 mmol/L", notes: "Severe Sepsis" },
      { name: "MAP", result: "55 mmHg", notes: "Hypotension" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Noradrenaline Infusion", "Inj. Pip-Taz 4.5g IV", "IV Fluid Bolus"] }
    ]
  },
  "Angina Pectoris": {
    category: "Cardiovascular",
    pathophysiology: "Myocardial oxygen demand exceeds supply due to coronary artery stenosis (Stable) or plaque rupture/thrombosis (Unstable), leading to transient ischemia without necrosis.",
    
    clinicalFeatures: {
      symptoms: ["Retrosternal chest pressure (Squeezing)", "Radiation to left arm/jaw", "Dyspnea on exertion", "Diaphoresis"],
      signs: ["S4 Heart Sound (Stiff ventricle)", "Levine's Sign (Clenched fist to chest)", "Transient Mitral Regurgitation murmur"]
    },

    diagnosticWorkup: [
      { test: "ECG", finding: "ST depression / T-wave inversion", significance: "Ischemia during pain" },
      { test: "Stress Test (TMT)", finding: "Reproducible symptoms/ECG changes", significance: "Functional assessment" },
      { test: "Coronary Angiography", finding: "Luminal narrowing >70%", significance: "Gold Standard Anatomy" }
    ],

    clinicalPearls: [
      { pearl: "Time is Muscle.", explanation: "Stable angina is predictable; Unstable Angina (pain at rest) is a pre-infarction emergency." },
      { pearl: "Nitrate Tolerance.", explanation: "Provide a nitrate-free interval of 10-12 hours daily to maintain efficacy." }
    ],
    
    redFlags: ["Pain at rest > 20 mins (ACS)", "Syncope", "New murmur", "Hypotension"],
    differentials: ["GERD", "Costochondritis", "Pulmonary Embolism", "Aortic Dissection"],

    managementRationale: [
      { 
        drug: "Nitroglycerin", 
        class: "Nitrate", 
        dose: "0.5 mg SL", 
        freq: "Stat (Max 3 doses)", 
        indication: "Acute Attack", 
        rationale: "Venodilation reduces preload; coronary dilation improves supply." 
      },
      { 
        drug: "Metoprolol", 
        class: "Beta Blocker (Cardioselective)", 
        dose: "25-50 mg", 
        freq: "BD", 
        indication: "Maintenance", 
        rationale: "Reduces heart rate and contractility, lowering oxygen demand." 
      },
      { 
        drug: "Aspirin", 
        class: "Antiplatelet", 
        dose: "75 mg", 
        freq: "OD", 
        indication: "Prophylaxis", 
        rationale: "Prevents platelet aggregation on atherosclerotic plaques." 
      }
    ],

    lifestyle: ["Graded Exercise Therapy.", "Smoking Cessation (Vasoconstrictor).", "Stress management."],
    
    diet: {
      eat: ["Garlic (Lahsune) - vasodilation", "Flaxseeds (Omega-3)", "High fiber oats"],
      avoid: ["Heavy meals (diverts blood to gut)", "Vanaspati/Trans-fats", "Excess salt"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "TMT", result: "Positive at 9 METs", notes: "Inducible ischemia" },
      { name: "Lipid Profile", result: "LDL 140 mg/dL", notes: "Target <70" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Metoprolol 25mg BD", "Tab. Aspirin 75mg OD", "SL Nitroglycerin SOS"] }
    ]
  },

  "Hypoxia": {
    category: "Respiratory / Systemic",
    pathophysiology: "Insufficient oxygen delivery to tissues to sustain metabolism. Etiologies include Hypoxic (lung failure), Anemic (low Hb), Stagnant (Shock), or Histotoxic (Cyanide).",
    
    clinicalFeatures: {
      symptoms: ["Shortness of breath", "Confusion/Agitation", "Headache", "Fatigue"],
      signs: ["Central Cyanosis (Blue tongue/lips)", "Tachypnea", "Tachycardia", "SpO2 < 90%"]
    },

    diagnosticWorkup: [
      { test: "Pulse Oximetry", finding: "SpO2 < 90%", significance: "Rapid screening" },
      { test: "ABG (Arterial Blood Gas)", finding: "PaO2 < 60 mmHg", significance: "Gold Standard Confirmation" },
      { test: "Hemoglobin", finding: "Low (if Anemic)", significance: "Identify carrying capacity defect" }
    ],

    clinicalPearls: [
      { pearl: "Cyanosis is late.", explanation: "Cyanosis only appears when deoxygenated Hb > 5 g/dL; severe anemia may mask it." },
      { pearl: "Happy Hypoxia.", explanation: "In COVID-19, patients may have profound hypoxia (SpO2 <80%) without significant dyspnea." }
    ],
    
    redFlags: ["Silent Chest", "Bradycardia (Impending arrest)", "GCS drop", "PaO2 < 50 mmHg"],
    differentials: ["Pneumonia", "Pulmonary Embolism", "COPD Exacerbation", "Methemoglobinemia"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "Titrate to SpO2 >94%", 
        freq: "Continuous", 
        indication: "Hypoxemia", 
        rationale: "Increases FiO2 to improve alveolar-arterial gradient." 
      },
      { 
        drug: "Dexamethasone", 
        class: "Corticosteroid", 
        dose: "6 mg", 
        freq: "OD", 
        indication: "Inflammatory Hypoxia (e.g. COVID)", 
        rationale: "Reduces alveolar inflammation and improves gas exchange." 
      },
      { 
        drug: "Salbutamol", 
        class: "Bronchodilator", 
        dose: "2.5 mg Nebulization", 
        freq: "Q4H", 
        indication: "Bronchospasm", 
        rationale: "Relieves airflow obstruction improving ventilation/perfusion match." 
      }
    ],

    lifestyle: ["Deep breathing exercises.", "Proning (Lying on stomach) to improve V/Q match.", "Smoking cessation."],
    
    diet: {
      eat: ["Iron rich foods (Dates, Spinach) if anemic", "Beetroot (Nitrates -> NO -> Vasodilation)", "Warm fluids"],
      avoid: ["Gas forming foods (bloating restricts diaphragm)", "Cold dairy (subjective cough worsening)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "Varies", wbc: "Varies", plt: "Varies", hct: "Varies" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "ABG", result: "pO2 55 mmHg", notes: "Type 1 Respiratory Failure" }
    ],
    treatment: [
      { day: 1, meds: ["O2 via Nasal Prongs 4L/min", "Treat Underlying Cause"] }
    ]
  },

  "Major Depressive Disorder": {
    category: "Psychiatry",
    pathophysiology: "Dysregulation of monoamine neurotransmitters (Serotonin, Norepinephrine, Dopamine) in the limbic system, coupled with BDNF reduction and HPA axis overactivity.",
    
    clinicalFeatures: {
      symptoms: ["Persistent low mood > 2 weeks", "Anhedonia (Loss of interest)", "Guilt/Worthlessness", "Suicidal Ideation"],
      signs: ["Psychomotor retardation", "Weight change (>5%)", "Sleep disturbance (Early morning awakening)", "Poor eye contact"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "DSM-5 (5 of 9 symptoms)", significance: "Diagnostic Standard" },
      { test: "Thyroid Profile", finding: "Normal", significance: "Rule out Hypothyroidism" },
      { test: "Vitamin B12/D", finding: "Low levels common", significance: "Reversible nutritional causes" }
    ],

    clinicalPearls: [
      { pearl: "Lag Period.", explanation: "Antidepressants take 2-4 weeks to show mood improvement, though physical symptoms (sleep/appetite) improve first." },
      { pearl: "Suicide Risk.", explanation: "Risk may paradoxically increase in the first weeks of treatment as energy returns before mood improves." }
    ],
    
    redFlags: ["Active Suicidality with plan", "Psychosis (Hallucinations)", "Catatonia", "Mania history (Bipolar risk)"],
    differentials: ["Bipolar Disorder", "Hypothyroidism", "Adjustment Disorder", "Grief Reaction"],

    managementRationale: [
      { 
        drug: "Escitalopram", 
        class: "SSRI", 
        dose: "10-20 mg", 
        freq: "OD (Morning)", 
        indication: "First-line", 
        rationale: "Selectively inhibits serotonin reuptake with minimal drug interactions." 
      },
      { 
        drug: "Sertraline", 
        class: "SSRI", 
        dose: "50-100 mg", 
        freq: "OD", 
        indication: "Maintenance", 
        rationale: "Safe in cardiac patients; broad efficacy." 
      },
      { 
        drug: "Clonazepam", 
        class: "Benzodiazepine", 
        dose: "0.25-0.5 mg", 
        freq: "HS (Short term)", 
        indication: "Insomnia/Anxiety", 
        rationale: "Bridging therapy for sleep until SSRI takes effect." 
      }
    ],

    lifestyle: ["CBT (Cognitive Behavioral Therapy).", "Sunlight exposure (circadian rhythm).", "Regular exercise (boosts endorphins)."],
    
    diet: {
      eat: ["Omega-3 (Walnuts/Akhrot)", "Curd/Yogurt (Gut-Brain axis)", "Complex carbs", "Dark Chocolate (mood boost)"],
      avoid: ["Alcohol (Depressant)", "Excess caffeine (Anxiety)", "Sugary highs/crashes"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "PHQ-9 Score", result: "18/27", notes: "Moderately Severe Depression" },
      { name: "TSH", result: "2.5 mIU/L", notes: "Euthyroid" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Escitalopram 10mg OD", "Tab. Clonazepam 0.25mg HS (SOS)"] }
    ]
  },

  "Hypothyroidism (Hashimoto's)": {
    category: "Endocrine",
    pathophysiology: "Autoimmune destruction of thyroid follicles by anti-TPO antibodies and T-cell infiltration, leading to reduced T3/T4 synthesis and compensatory TSH elevation.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue/Lethargy", "Weight gain", "Cold intolerance", "Constipation", "Hair loss"],
      signs: ["Bradycardia", "Delayed tendon reflexes", "Dry coarse skin", "Goiter (firm/rubbery)", "Puffy face"]
    },

    diagnosticWorkup: [
      { test: "TSH", finding: "Elevated (>10 mIU/L)", significance: "Primary Screening Test" },
      { test: "Free T4", finding: "Low", significance: "Confirms Overt Hypothyroidism" },
      { test: "Anti-TPO Antibody", finding: "Positive", significance: "Confirms Hashimoto's etiology" }
    ],

    clinicalPearls: [
      { pearl: "Empty Stomach Rule.", explanation: "Levothyroxine must be taken on an empty stomach 30-60 mins before breakfast to ensure absorption." },
      { pearl: "Myxedema Coma.", explanation: "Severe untreated hypothyroidism leading to hypothermia and unconsciousness; medical emergency." }
    ],
    
    redFlags: ["Hypothermia", "Bradycardia < 40", "Altered Mental Status", "Pericardial Effusion"],
    differentials: ["Anemia", "Depression", "Nephrotic Syndrome (Edema)", "Chronic Fatigue Syndrome"],

    managementRationale: [
      { 
        drug: "Levothyroxine", 
        class: "Synthetic T4", 
        dose: "1.6 mcg/kg", 
        freq: "OD (Early Morning)", 
        indication: "Hormone Replacement", 
        rationale: "Restores euthyroid state; long half-life (7 days) allows stable levels." 
      }
    ],

    lifestyle: ["Regular exercise to combat metabolic slowing.", "Warm clothing for cold intolerance."],
    
    diet: {
      eat: ["Selenium rich foods (Brazil nuts, Eggs)", "Iodized Salt", "High fiber (for constipation)"],
      avoid: ["Raw Goitrogens (Cabbage, Cauliflower, Broccoli) - Cooking neutralizes them", "Soy (interferes with absorption)", "Gluten (Link to autoimmunity)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "5,500 /cmm", plt: "200,000 /cmm", hct: "34%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "5,500 /cmm", plt: "200,000 /cmm", hct: "34%" }]
    },
    specialTests: [
      { name: "TSH", result: "18.5 mIU/L", notes: "High" },
      { name: "Anti-TPO", result: "Positive", notes: "Hashimoto's confirmed" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Levothyroxine 75mcg OD (Empty Stomach)"] }
    ]
  },

  "Ulcerative Colitis": {
    category: "Gastroenterology",
    pathophysiology: "Chronic inflammatory bowel disease affecting the colonic mucosa, starting at the rectum and extending proximally in a continuous fashion. Mediated by Th2 response.",
    
    clinicalFeatures: {
      symptoms: ["Bloody diarrhea", "Mucus in stool", "Tenesmus (Urgency)", "Abdominal cramping"],
      signs: ["Pallor (Anemia)", "Tenderness along colon", "Fever (in severe colitis)", "Extraintestinal (Uveitis, Arthritis)"]
    },

    diagnosticWorkup: [
      { test: "Colonoscopy", finding: "Continuous mucosal inflammation, loss of vascular pattern", significance: "Gold Standard" },
      { test: "Biopsy", finding: "Crypt abscesses", significance: "Histological Hallmark" },
      { test: "Stool Culture", finding: "Negative", significance: "Rule out infectious colitis" }
    ],

    clinicalPearls: [
      { pearl: "Cancer Risk.", explanation: "Risk of Colorectal Cancer increases significantly after 8-10 years of disease; surveillance required." },
      { pearl: "Smoking Paradox.", explanation: "Smoking is actually protective in UC (unlike Crohn's), and cessation may trigger a flare." }
    ],
    
    redFlags: ["Toxic Megacolon (>6cm dilation)", "Massive Hemorrhage", "Perforation", "Primary Sclerosing Cholangitis (PSC) signs"],
    differentials: ["Crohn's Disease", "Infectious Dysentery", "Ischemic Colitis", "Hemorrhoids"],

    managementRationale: [
      { 
        drug: "Mesalamine", 
        class: "5-ASA", 
        dose: "2-4 g", 
        freq: "Divided", 
        indication: "Mild-Mod Disease", 
        rationale: "Topical anti-inflammatory effect on colonic mucosa." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "40 mg", 
        freq: "OD (Taper)", 
        indication: "Acute Flare", 
        rationale: "Rapidly induces remission but not for maintenance due to side effects." 
      },
      { 
        drug: "Azathioprine", 
        class: "Immunomodulator", 
        dose: "2.5 mg/kg", 
        freq: "OD", 
        indication: "Maintenance", 
        rationale: "Steroid-sparing agent for frequent relapsers." 
      }
    ],

    lifestyle: ["Stress management (Gut-Brain axis).", "Hydration.", "Avoid NSAIDs (can trigger flare)."],
    
    diet: {
      eat: ["Curd Rice (Probiotic & Soft)", "Boiled Potatoes", "Banana", "Lean protein"],
      avoid: ["Spicy Curries", "Raw vegetables (High residue during flare)", "Milk (if lactose intolerant)", "Red Meat", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "11,000 /cmm", plt: "450,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "11,000 /cmm", plt: "450,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "Fecal Calprotectin", result: "Elevated", notes: "Active inflammation" },
      { name: "Colonoscopy", result: "Pancolitis", notes: "Mayo Score 2" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Mesalamine 1.2g TID", "Tab. Prednisolone 40mg OD", "Iron supplementation"] }
    ]
  },
  "Nephrotic Syndrome": {
    category: "Renal",
    pathophysiology: "Glomerular podocyte injury leading to loss of the negative charge barrier, resulting in massive proteinuria (>3.5g/day), hypoalbuminemia, and compensatory hyperlipidemia.",
    
    clinicalFeatures: {
      symptoms: ["Frothy urine", "Periorbital edema (morning puffiness)", "Pedal edema", "Weight gain"],
      signs: ["Ascites", "Anasarca", "Muehrcke's lines (Leukonychia)", "Xanthelasma"]
    },

    diagnosticWorkup: [
      { test: "24h Urine Protein", finding: "> 3.5 g/day", significance: "Gold Standard Definition" },
      { test: "Serum Albumin", finding: "< 3.0 g/dL", significance: "Hypoalbuminemia" },
      { test: "Lipid Profile", finding: "Elevated Cholesterol/Triglycerides", significance: "Hepatic overproduction" }
    ],

    clinicalPearls: [
      { pearl: "Hypercoagulability.", explanation: "Loss of Antithrombin III in urine increases risk of DVT and Renal Vein Thrombosis." },
      { pearl: "Infection Risk.", explanation: "Loss of Immunoglobulins in urine predisposes to encapsulated bacterial infections." }
    ],
    
    redFlags: ["Sudden flank pain (Renal Vein Thrombosis)", "Dyspnea (Pulmonary Edema/PE)", "Severe abdominal pain (Peritonitis)"],
    differentials: ["IgA Nephropathy", "Lupus Nephritis", "Heart Failure", "Cirrhosis"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Minimal Change Disease", 
        rationale: "Suppresses T-cell cytokine production that damages podocytes." 
      },
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "40 mg", 
        freq: "BD", 
        indication: "Edema", 
        rationale: "Promotes natriuresis to manage fluid overload." 
      },
      { 
        drug: "Ramipril", 
        class: "ACE Inhibitor", 
        dose: "2.5-5 mg", 
        freq: "OD", 
        indication: "Antiproteinuric", 
        rationale: "Reduces intraglomerular pressure, lowering protein loss." 
      }
    ],

    lifestyle: ["Daily weight monitoring.", "Fluid restriction if edematous.", "Avoid NSAIDs."],
    
    diet: {
      eat: ["Normal protein (0.8-1g/kg) - High protein diet worsens damage", "Egg whites", "Soy"],
      avoid: ["Salt (Papad, Pickles, Namkeen)", "Saturated fats (Ghee, Butter)", "High sodium processed foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "300,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "300,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Urine Protein/Creatinine", result: "4.5", notes: "Nephrotic range" },
      { name: "Albumin", result: "2.2 g/dL", notes: "Severe Hypoalbuminemia" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 60mg OD", "Tab. Furosemide 40mg BD", "Tab. Atorvastatin 10mg HS"] }
    ]
  },

  "Sickle Cell Disease": {
    category: "Hematology",
    pathophysiology: "Point mutation (Glu -> Val) in Beta-globin chain forms HbS. Deoxygenation causes HbS polymerization, RBC sickling, hemolysis, and vaso-occlusion.",
    
    clinicalFeatures: {
      symptoms: ["Severe bone pain (Vaso-occlusive crisis)", "Fatigue", "Priapism", "Abdominal pain"],
      signs: ["Jaundice", "Dactylitis (Hand-foot syndrome in kids)", "Splenomegaly (early) -> Autosplenectomy (late)", "Leg ulcers"]
    },

    diagnosticWorkup: [
      { test: "Hb Electrophoresis", finding: "HbS present, No HbA", significance: "Confirmatory Diagnosis" },
      { test: "Peripheral Smear", finding: "Sickle cells, Howell-Jolly bodies", significance: "Morphological evidence" },
      { test: "CBC", finding: "Low Hb, High Reticulocytes", significance: "Hemolytic Anemia" }
    ],

    clinicalPearls: [
      { pearl: "Autosplenectomy.", explanation: "Repeated infarcts render the spleen non-functional by adulthood, increasing risk of encapsulated infections." },
      { pearl: "Acute Chest Syndrome.", explanation: "New infiltrate on CXR + Fever/Respiratory symptoms. Leading cause of death." }
    ],
    
    redFlags: ["Fever (Sepsis risk)", "Chest pain/Dyspnea (Acute Chest)", "Sudden pallor (Aplastic Crisis)", "Stroke symptoms"],
    differentials: ["Thalassemia Major", "Osteomyelitis", "Acute Abdomen", "Leukemia (bone pain)"],

    managementRationale: [
      { 
        drug: "Hydroxyurea", 
        class: "Antimetabolite", 
        dose: "15-35 mg/kg", 
        freq: "OD", 
        indication: "Maintenance", 
        rationale: "Increases HbF (Fetal Hemoglobin) which inhibits polymerization of HbS." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Supplementation", 
        rationale: "High RBC turnover increases folate demand; prevents megaloblastic crisis." 
      },
      { 
        drug: "Tramadol", 
        class: "Opioid Analgesic", 
        dose: "50 mg", 
        freq: "TID (during crisis)", 
        indication: "Pain Control", 
        rationale: "Management of severe vaso-occlusive pain." 
      }
    ],

    lifestyle: ["Avoid high altitudes and dehydration.", "Vaccination (Pneumococcal/Meningococcal) is vital.", "Warm compresses for pain."],
    
    diet: {
      eat: ["High fluid intake (>3L/day)", "Iron rich foods (if deficiency co-exists, otherwise caution due to overload)", "Balanced diet"],
      avoid: ["Alcohol (Dehydration trigger)", "Smoking (Vasoconstriction)", "Ice/Cold water exposure (Triggers crisis)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "7.0 g/dL", wbc: "12,000 /cmm", plt: "400,000 /cmm", hct: "21%" },
      progression: [{ day: 1, hb: "7.0 g/dL", wbc: "12,000 /cmm", plt: "400,000 /cmm", hct: "21%" }]
    },
    specialTests: [
      { name: "Hb Electrophoresis", result: "HbS 85%, HbF 15%", notes: "Homozygous SS" },
      { name: "Reticulocyte Count", result: "10%", notes: "High turnover" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Hydroxyurea 500mg OD", "Tab. Folic Acid 5mg OD", "IV Fluids"] }
    ]
  },

  "Gonorrhea": {
    category: "Infectious Disease (STI)",
    pathophysiology: "Sexually transmitted infection by Neisseria gonorrhoeae (Gram-negative diplococci) infecting columnar epithelium of urethra, cervix, rectum, or pharynx.",
    
    clinicalFeatures: {
      symptoms: ["Dysuria (Burning micturition)", "Purulent urethral discharge (Green/Yellow)", "Testicular pain", "Vaginal bleeding"],
      signs: ["Mucopurulent discharge", "Cervical motion tenderness", "Epididymal tenderness"]
    },

    diagnosticWorkup: [
      { test: "NAAT (PCR)", finding: "Positive for N. gonorrhoeae", significance: "Gold Standard (Urine/Swab)" },
      { test: "Gram Stain", finding: "Intracellular Gram-negative Diplococci", significance: "Rapid diagnosis in males" },
      { test: "Culture", finding: "Growth on Thayer-Martin agar", significance: "Required for antibiotic sensitivity" }
    ],

    clinicalPearls: [
      { pearl: "Co-infection.", explanation: "High rate of Chlamydia co-infection; empiric coverage often included." },
      { pearl: "Disseminated Gonorrhea.", explanation: "Can present as septic arthritis, tenosynovitis, and dermatitis triad." }
    ],
    
    redFlags: ["Joint swelling (Septic Arthritis)", "Pelvic Pain (PID)", "Scrotal Swelling (Epididymo-orchitis)"],
    differentials: ["Chlamydia", "Trichomoniasis", "UTI", "Reiter's Syndrome"],

    managementRationale: [
      { 
        drug: "Ceftriaxone", 
        class: "Cephalosporin (3rd Gen)", 
        dose: "500 mg / 1 g", 
        freq: "IM Stat", 
        indication: "Primary Therapy", 
        rationale: "Highly effective single-dose regimen due to increasing resistance to oral agents." 
      },
      { 
        drug: "Azithromycin", 
        class: "Macrolide", 
        dose: "1 g", 
        freq: "PO Stat", 
        indication: "Dual Therapy (Guidelines vary)", 
        rationale: "Covers Chlamydia and may delay cephalosporin resistance." 
      }
    ],

    lifestyle: ["Partner notification (Ping-pong infection prevention).", "Abstinence for 7 days.", "Condom use."],
    
    diet: {
      eat: ["Hydration to flush urinary tract"],
      avoid: ["Alcohol (during treatment)", "Spicy foods (may irritate inflamed urethra)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Urethral Swab NAAT", result: "Positive", notes: "N. gonorrhoeae detected" },
      { name: "Urinalysis", result: "Pyuria", notes: "White cells present" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Ceftriaxone 500mg IM Stat", "Tab. Azithromycin 1g PO Stat"] }
    ]
  },

  "Psoriasis": {
    category: "Dermatology",
    pathophysiology: "Chronic immune-mediated inflammatory skin disease where T-cell activation leads to keratinocyte hyperproliferation and accelerated epidermal turnover.",
    
    clinicalFeatures: {
      symptoms: ["Itchy, scaly patches", "Joint pain (Psoriatic Arthritis)", "Nail changes"],
      signs: ["Well-demarcated erythematous plaques with silvery scales", "Auspitz sign (bleeding on scale removal)", "Koebner phenomenon"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Classic appearance", significance: "Primary method" },
      { test: "Skin Biopsy", finding: "Munro's microabscesses", significance: "If diagnosis uncertain" },
      { test: "ESR/CRP", finding: "Elevated", significance: "In Psoriatic Arthritis" }
    ],

    clinicalPearls: [
      { pearl: "Metabolic Syndrome.", explanation: "Strong association with obesity, diabetes, and cardiovascular disease." },
      { pearl: "Steroid Rebound.", explanation: "Systemic steroids should be avoided as withdrawal can trigger severe pustular psoriasis." }
    ],
    
    redFlags: ["Erythroderma (>90% BSA)", "Pustular Psoriasis (Fever/Toxic)", "Joint destruction (Arthritis mutilans)"],
    differentials: ["Seborrheic Dermatitis", "Eczema", "Lichen Planus", "Fungal Infection"],

    managementRationale: [
      { 
        drug: "Clobetasol Propionate", 
        class: "Topical Corticosteroid", 
        dose: "0.05% Ointment", 
        freq: "BD", 
        indication: "Plaques (Body)", 
        rationale: "Potent anti-inflammatory and anti-proliferative." 
      },
      { 
        drug: "Calcipotriol", 
        class: "Vitamin D Analog", 
        dose: "0.005% Cream", 
        freq: "BD", 
        indication: "Maintenance", 
        rationale: "Inhibits keratinocyte proliferation; steroid-sparing." 
      },
      { 
        drug: "Methotrexate", 
        class: "Immunomodulator", 
        dose: "10-15 mg", 
        freq: "Weekly", 
        indication: "Mod-Severe Disease", 
        rationale: "Systemic suppression of T-cell function." 
      }
    ],

    lifestyle: ["Sun exposure (UV light helps).", "Moisturize frequently.", "Stress reduction (triggers flares)."],
    
    diet: {
      eat: ["Omega-3 (Fish/Flax)", "Turmeric (Curcumin)", "Antioxidant rich fruits"],
      avoid: ["Alcohol (Trigger)", "Red meat (Pro-inflammatory)", "Gluten (if sensitive)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Skin Biopsy", result: "Psoriasiform hyperplasia", notes: "Consistent with Psoriasis" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Clobetasol BD", "Tab. Methotrexate 10mg Weekly", "Tab. Folic Acid 5mg"] }
    ]
  },

  "Prostate Cancer": {
    category: "Oncology / Urology",
    pathophysiology: "Malignant proliferation of prostatic acinar cells, largely driven by androgens (Testosterone/DHT). Most common pathology is Adenocarcinoma.",
    
    clinicalFeatures: {
      symptoms: ["Urinary hesitancy/Frequency (LUTS)", "Hematuria", "Bone pain (Back/Hips - Metastasis)", "Erectile dysfunction"],
      signs: ["Hard, nodular prostate on DRE", "Spinal tenderness (if mets)", "Lymphedema"]
    },

    diagnosticWorkup: [
      { test: "Serum PSA", finding: "> 4 ng/mL", significance: "Screening (Low specificity)" },
      { test: "Transrectal Biopsy (TRUS)", finding: "Adenocarcinoma", significance: "Gold Standard Confirmation" },
      { test: "Bone Scan", finding: "Osteoblastic lesions", significance: "Metastasis check" }
    ],

    clinicalPearls: [
      { pearl: "Gleason Score.", explanation: "Sum of the two most common histological patterns (e.g., 3+4=7). Determines prognosis and aggressiveness." },
      { pearl: "Osteoblastic Mets.", explanation: "Prostate cancer uniquely causes bone forming (sclerotic) metastases, unlike the lytic lesions of other cancers." }
    ],
    
    redFlags: ["Cord Compression (Back pain + weakness)", "Gross Hematuria", "Hydronephrosis (Renal failure)"],
    differentials: ["Benign Prostatic Hyperplasia (BPH)", "Prostatitis", "Bladder Cancer"],

    managementRationale: [
      { 
        drug: "Leuprolide", 
        class: "GnRH Agonist", 
        dose: "7.5 mg Depot", 
        freq: "Monthly IM", 
        indication: "Androgen Deprivation", 
        rationale: "Desensitizes pituitary GnRH receptors, stopping LH/FSH and Testosterone production." 
      },
      { 
        drug: "Bicalutamide", 
        class: "Anti-androgen", 
        dose: "50 mg", 
        freq: "OD", 
        indication: "Flare Prevention", 
        rationale: "Blocks androgen receptors to prevent initial testosterone flare from GnRH agonists." 
      },
      { 
        drug: "Docetaxel", 
        class: "Chemotherapy", 
        dose: "75 mg/m2", 
        freq: "IV q3 weeks", 
        indication: "Castration Resistant", 
        rationale: "Microtubule stabilizer inhibiting cell division." 
      }
    ],

    lifestyle: ["Exercise (Combats muscle loss from ADT).", "Kegel exercises (Post-prostatectomy)."],
    
    diet: {
      eat: ["Cooked Tomatoes (Lycopene)", "Soy products (Phytoestrogens)", "Green Tea", "Cruciferous vegetables"],
      avoid: ["Red meat", "High fat dairy", "Calcium supplements (Excess calcium linked to risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "PSA", result: "15 ng/mL", notes: "Elevated" },
      { name: "Biopsy", result: "Gleason 4+3=7", notes: "Intermediate Risk" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Leuprolide Depot 7.5mg", "Tab. Bicalutamide 50mg OD"] }
    ]
  },
  "Carbon Monoxide Poisoning": {
    category: "Toxicology",
    pathophysiology: "CO binds to hemoglobin with 200x greater affinity than oxygen, forming carboxyhemoglobin (COHb). This reduces oxygen carrying capacity and shifts the dissociation curve to the left, preventing O2 release to tissues.",
    
    clinicalFeatures: {
      symptoms: ["Headache ('band-like')", "Nausea/Vomiting", "Confusion", "Dizziness"],
      signs: ["Cherry-red skin (Rare/Post-mortem)", "Tachycardia", "Tachypnea", "Altered mental status"]
    },

    diagnosticWorkup: [
      { test: "Co-Oximetry (ABG)", finding: "Elevated COHb (>3% non-smokers, >10% smokers)", significance: "Gold Standard (Pulse ox is falsely normal)" },
      { test: "ECG", finding: "Ischemia/Arrhythmia", significance: "Cardiac hypoxia check" },
      { test: "Serum Lactate", finding: "Elevated", significance: "Indicates tissue hypoxia" }
    ],

    clinicalPearls: [
      { pearl: "Pulse Oximetry Trap.", explanation: "Standard SpO2 monitors cannot distinguish between Oxyhemoglobin and Carboxyhemoglobin, giving falsely high readings." },
      { pearl: "Half-life.", explanation: "CO half-life is ~5 hours on room air, but reduces to ~60-90 mins on 100% O2." }
    ],
    
    redFlags: ["Syncope", "Seizures", "Coma", "Myocardial Ischemia"],
    differentials: ["Cyanide Poisoning", "Viral Gastroenteritis (Flu-like symptoms)", "Migraine", "Hypoglycemia"],

    managementRationale: [
      { 
        drug: "Oxygen (Normobaric)", 
        class: "Medical Gas", 
        dose: "100% via Non-rebreather mask", 
        freq: "Continuous", 
        indication: "First-line", 
        rationale: "Competitively displaces CO from Hemoglobin." 
      },
      { 
        drug: "Hyperbaric Oxygen", 
        class: "Therapy", 
        dose: "2.5-3 ATM", 
        freq: "Session", 
        indication: "Severe (COHb >25%, Pregnancy, Neuro signs)", 
        rationale: "Dissolves O2 in plasma independent of Hb; prevents delayed neurological sequelae." 
      }
    ],

    lifestyle: ["Install CO detectors.", "Check gas geysers/heaters for leaks (Common cause in Indian bathrooms).", "Avoid running cars in closed garages."],
    
    diet: {
      eat: ["High antioxidant foods post-recovery", "Hydration"],
      avoid: ["Alcohol (CNS depressant)", "Smoking (Add more CO)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "COHb Level", result: "25%", notes: "Severe toxicity" },
      { name: "SpO2 (Standard)", result: "99%", notes: "Falsely normal" }
    ],
    treatment: [
      { day: 1, meds: ["100% Oxygen High Flow", "Cardiac Monitoring"] }
    ]
  },

  "Erectile Dysfunction": {
    category: "Urology",
    pathophysiology: "Inability to achieve or maintain erection due to failure of the Nitric Oxide-cGMP pathway, often caused by vascular insufficiency (endothelial dysfunction), neuropathy, or psychogenic factors.",
    
    clinicalFeatures: {
      symptoms: ["Inability to get erection", "Inability to keep erection", "Reduced libido"],
      signs: ["Peripheral pulses (check for PVD)", "Sensory loss (Neuropathy)", "Peyronie's plaques"]
    },

    diagnosticWorkup: [
      { test: "Fasting Lipid/Glucose", finding: "Abnormal", significance: "Risk factor identification" },
      { test: "Serum Testosterone", finding: "Low (<300 ng/dL)", significance: "Hypogonadism check" },
      { test: "Nocturnal Penile Tumescence", finding: "Absent", significance: "Differentiates Organic from Psychogenic" }
    ],

    clinicalPearls: [
      { pearl: "Canary in Coal Mine.", explanation: "ED is often the first sign of generalized atherosclerosis and may precede MI by 3-5 years." },
      { pearl: "Nitrate Contraindication.", explanation: "Never combine PDE5 inhibitors with Nitrates (e.g. Sorbitrate); causes fatal hypotension." }
    ],
    
    redFlags: ["Sudden onset (Psychogenic/Trauma)", "Loss of morning erections (Organic)", "Neurological deficits (Cauda Equina)"],
    differentials: ["Psychogenic ED", "Drug-induced (Beta-blockers/SSRIs)", "Hypogonadism", "Peyronie's Disease"],

    managementRationale: [
      { 
        drug: "Sildenafil", 
        class: "PDE5 Inhibitor", 
        dose: "50 mg", 
        freq: "PRN (1h before activity)", 
        indication: "First-line", 
        rationale: "Inhibits breakdown of cGMP, sustaining vasodilation and inflow." 
      },
      { 
        drug: "Tadalafil", 
        class: "PDE5 Inhibitor", 
        dose: "10-20 mg", 
        freq: "PRN or 5mg OD", 
        indication: "Longer duration needed", 
        rationale: "Long half-life (36h); 'The Weekend Pill'." 
      }
    ],

    lifestyle: ["Smoking cessation (major risk factor).", "Weight loss.", "Stress reduction."],
    
    diet: {
      eat: ["Watermelon (Citrulline -> Arginine)", "Walnuts/Almonds (Arginine)", "Dark Chocolate (Flavonoids)"],
      avoid: ["Alcohol (CNS depressant)", "High fat meal before Sildenafil (Delays absorption)", "Processed sugar"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Testosterone", result: "350 ng/dL", notes: "Low normal" },
      { name: "HbA1c", result: "7.2%", notes: "Diabetes risk" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Sildenafil 50mg PRN", "Lifestyle modification"] }
    ]
  },

  "Gout": {
    category: "Rheumatology",
    pathophysiology: "Metabolic disorder characterized by hyperuricemia and deposition of Monosodium Urate (MSU) crystals in joints, triggering NLRP3 inflammasome and neutrophil-mediated inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Sudden severe joint pain (often nocturnal)", "Swelling", "Redness"],
      signs: ["Podagra (Inflamed 1st MTP/Big Toe)", "Tophi (Chronic lumps)", "Warmth/Erythema"]
    },

    diagnosticWorkup: [
      { test: "Synovial Fluid Analysis", finding: "Needle-shaped, negatively birefringent crystals", significance: "Gold Standard" },
      { test: "Serum Uric Acid", finding: "> 6.8 mg/dL", significance: "Supportive (can be normal during acute attack)" },
      { test: "X-ray", finding: "Punched-out erosions ('Rat bite')", significance: "Chronic Gout" }
    ],

    clinicalPearls: [
      { pearl: "Acute Attack Paradox.", explanation: "Uric acid levels may drop during an acute flare (IL-6 effect); do not rule out gout based on normal UA." },
      { pearl: "Start Low.", explanation: "Starting Allopurinol during an acute attack can worsen/prolong it; wait until inflammation subsides." }
    ],
    
    redFlags: ["Septic Arthritis mimic (Fever/High WBC)", "Polyarticular involvement (rare initially)", "Kidney Stones"],
    differentials: ["Septic Arthritis", "Pseudogout (CPPD)", "Cellulitis", "Bunion"],

    managementRationale: [
      { 
        drug: "Indomethacin", 
        class: "NSAID", 
        dose: "50 mg", 
        freq: "TID", 
        indication: "Acute Flare", 
        rationale: "Potent COX inhibition reduces prostaglandins and pain." 
      },
      { 
        drug: "Colchicine", 
        class: "Anti-mitotic", 
        dose: "0.5 mg", 
        freq: "BD/TID", 
        indication: "Acute/Prophylaxis", 
        rationale: "Inhibits microtubule polymerization and neutrophil migration." 
      },
      { 
        drug: "Allopurinol", 
        class: "Xanthine Oxidase Inhibitor", 
        dose: "100-300 mg", 
        freq: "OD", 
        indication: "Chronic Management", 
        rationale: "Inhibits uric acid production. Titrate to UA < 6 mg/dL." 
      }
    ],

    lifestyle: ["Weight loss.", "Hydration (>2L/day).", "Avoid trauma to joints."],
    
    diet: {
      eat: ["Vitamin C (Amla/Lemon) - Uricosuric", "Low fat dairy (Protective)", "Coffee"],
      avoid: ["Alcohol (Beer/Whisky)", "Organ meats", "Red meat", "High fructose drinks", "Shellfish", "Some pulses (moderation)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Uric Acid", result: "8.5 mg/dL", notes: "Hyperuricemia" },
      { name: "Fluid Analysis", result: "MSU Crystals", notes: "Confirmed" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Indomethacin 50mg TID", "Tab. Colchicine 0.5mg BD"] }
    ]
  },

  "Cellulitis": {
    category: "Dermatology / Infectious Disease",
    pathophysiology: "Acute bacterial infection (Strep. pyogenes or Staph. aureus) of the deep dermis and subcutaneous tissue, usually entering via a skin breach.",
    
    clinicalFeatures: {
      symptoms: ["Pain/Tenderness", "Swelling", "Fever/Chills"],
      signs: ["Erythema (indistinct borders)", "Warmth", "Edema", "Lymphangitis (Red streaks)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Unilateral red/hot/swollen leg", significance: "Primary method" },
      { test: "WBC Count", finding: "Leukocytosis", significance: "Systemic involvement" },
      { test: "Blood Culture", finding: "Positive (rarely)", significance: "Only in severe sepsis" }
    ],

    clinicalPearls: [
      { pearl: "Elevation is key.", explanation: "Antibiotics usually fail if the limb is not elevated to reduce edema." },
      { pearl: "Look for entry.", explanation: "Always check web spaces of toes for Tinea pedis (Athlete's foot) which creates the entry portal for bacteria." }
    ],
    
    redFlags: ["Crepitus (Necrotizing Fasciitis)", "Rapid spread", "Pain out of proportion", "Bullae/Necrosis"],
    differentials: ["DVT (Deep Vein Thrombosis)", "Stasis Dermatitis", "Necrotizing Fasciitis", "Erysipelas"],

    managementRationale: [
      { 
        drug: "Cephalexin", 
        class: "Cephalosporin (1st Gen)", 
        dose: "500 mg", 
        freq: "QID", 
        indication: "Uncomplicated MSSA/Strep", 
        rationale: "Good skin penetration and coverage of Gram-positives." 
      },
      { 
        drug: "Clindamycin", 
        class: "Lincosamide", 
        dose: "300-450 mg", 
        freq: "QID", 
        indication: "Penicillin Allergy / MRSA", 
        rationale: "Inhibits protein synthesis; covers MRSA." 
      },
      { 
        drug: "Amoxicillin-Clavulanate", 
        class: "Beta-lactam", 
        dose: "625 mg", 
        freq: "TID", 
        indication: "Broad coverage", 
        rationale: "Used if anaerobes or bite wound suspected." 
      }
    ],

    lifestyle: ["Limb elevation above heart level.", "Skin hygiene.", "Treat underlying Tinea Pedis."],
    
    diet: {
      eat: ["High protein (healing)", "Turmeric Milk (Haldi Doodh - Anti-inflammatory)", "Hydration"],
      avoid: ["Sugar (High glucose impairs neutrophil function)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "14,000 /cmm", plt: "300,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "14,000 /cmm", plt: "300,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "Doppler USG", result: "Negative for DVT", notes: "Rule out mimic" },
      { name: "WBC", result: "14.5 K/uL", notes: "Neutrophilia" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Cephalexin 500mg QID", "Limb Elevation"] }
    ]
  },

  "Hypovolemic Shock": {
    category: "Emergency / Critical Care",
    pathophysiology: "Critical reduction in effective circulating blood volume (Hemorrhage or Dehydration) leads to decreased venous return (preload), reduced cardiac output, and inadequate tissue perfusion.",
    
    clinicalFeatures: {
      symptoms: ["Thirst", "Dizziness", "Confusion", "Weakness"],
      signs: ["Tachycardia", "Hypotension", "Cool clammy skin", "Oliguria", "Delayed capillary refill"]
    },

    diagnosticWorkup: [
      { test: "Lactate", finding: "> 2 mmol/L", significance: "Indicates anaerobic metabolism/hypoperfusion" },
      { test: "FAST Scan", finding: "Free fluid", significance: "Detects internal hemorrhage (Trauma)" },
      { test: "Hct/Hb", finding: "Low (or normal initially)", significance: "Blood loss estimation" }
    ],

    clinicalPearls: [
      { pearl: "Permissive Hypotension.", explanation: "In trauma, aim for SBP 80-90 mmHg until bleeding is controlled to prevent popping clots." },
      { pearl: "Class III Shock.", explanation: "Hypotension usually appears only after 30-40% blood volume loss (Class III); Tachycardia appears earlier." }
    ],
    
    redFlags: ["SBP < 90 mmHg", "Anuria", "Altered Sensorium", "Base Deficit > -6"],
    differentials: ["Cardiogenic Shock", "Septic Shock", "Neurogenic Shock", "Obstructive Shock"],

    managementRationale: [
      { 
        drug: "Ringer Lactate", 
        class: "Crystalloid", 
        dose: "1-2 L Bolus", 
        freq: "Stat", 
        indication: "Initial Resuscitation", 
        rationale: "Isotonic volume expander; preferred over Saline in trauma to avoid acidosis." 
      },
      { 
        drug: "Norepinephrine", 
        class: "Vasopressor", 
        dose: "Titrated", 
        freq: "IV Infusion", 
        indication: "Refractory Shock", 
        rationale: "Use ONLY after fluid resuscitation to maintain MAP > 65." 
      },
      { 
        drug: "Tranexamic Acid", 
        class: "Antifibrinolytic", 
        dose: "1 g", 
        freq: "IV Stat", 
        indication: "Trauma/Hemorrhage", 
        rationale: "Prevents clot breakdown; effective if given within 3 hours." 
      }
    ],

    lifestyle: ["Immediate Hospitalization.", "Stop active bleeding (Compression)."],
    
    diet: {
      eat: ["NPO (Nil Per Oral) initially", "ORS (if mild dehydration only)"],
      avoid: ["Feeding until stable"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "8.0 g/dL", wbc: "15,000 /cmm", plt: "150,000 /cmm", hct: "24%" },
      progression: [{ day: 1, hb: "8.0 g/dL", wbc: "15,000 /cmm", plt: "150,000 /cmm", hct: "24%" }]
    },
    specialTests: [
      { name: "Lactate", result: "5.5 mmol/L", notes: "Severe shock" },
      { name: "Base Deficit", result: "-10", notes: "Metabolic acidosis" }
    ],
    treatment: [
      { day: 1, meds: ["IV Fluids Rapid Bolus", "Blood Transfusion Protocol", "Stop Bleeding"] }
    ]
  },
  "Myocardial Infarction": {
    category: "Cardiovascular",
    pathophysiology: "Rupture or erosion of an atherosclerotic plaque triggers platelet aggregation and thrombus formation, causing acute occlusion of a coronary artery and cardiomyocyte necrosis.",
    
    clinicalFeatures: {
      symptoms: ["Severe retrosternal chest pain (Crushing)", "Pain radiating to left arm/jaw", "Diaphoresis (Sweating)", "Nausea/Vomiting"],
      signs: ["Tachycardia", "Hypotension (in large infarcts)", "S3/S4 Gallop", "Levine's sign"]
    },

    diagnosticWorkup: [
      { test: "High Sensitivity Troponin I", finding: "Elevated (>99th percentile)", significance: "Gold Standard Biomarker" },
      { test: "ECG", finding: "ST Elevation (STEMI) or Depression (NSTEMI)", significance: "Immediate Triage tool" },
      { test: "Coronary Angiography", finding: "Occluded vessel", significance: "Definitive anatomy" }
    ],

    clinicalPearls: [
      { pearl: "Time is Muscle.", explanation: "Door-to-balloon time <90 mins (PCI) or Door-to-needle <30 mins (Thrombolysis) is critical." },
      { pearl: "Silent MI.", explanation: "Diabetics and elderly patients often present with atypical symptoms like fatigue or dyspnea instead of pain." }
    ],
    
    redFlags: ["Cardiogenic Shock", "Ventricular Arrhythmias", "New murmur (Papillary muscle rupture)", "Stroke (Mural thrombus)"],
    differentials: ["Aortic Dissection", "Pulmonary Embolism", "Pneumothorax", "Pericarditis"],

    managementRationale: [
      { 
        drug: "Aspirin", 
        class: "Antiplatelet", 
        dose: "300-325 mg (Chewable)", 
        freq: "Stat", 
        indication: "Acute Coronary Syndrome", 
        rationale: "Rapidly inhibits COX-1 and Thromboxane A2 to stop clot growth." 
      },
      { 
        drug: "Atorvastatin", 
        class: "Statin", 
        dose: "80 mg", 
        freq: "OD", 
        indication: "Plaque Stabilization", 
        rationale: "High intensity statin reduces inflammation and stabilizes plaque acutely." 
      },
      { 
        drug: "Clopidogrel", 
        class: "P2Y12 Inhibitor", 
        dose: "300-600 mg Loading", 
        freq: "Stat", 
        indication: "Dual Antiplatelet Therapy", 
        rationale: "Synergistic platelet inhibition required post-stent or fibrinolysis." 
      }
    ],

    lifestyle: ["Cardiac Rehabilitation.", "Smoking Cessation (Non-negotiable).", "Strict BP and Sugar control."],
    
    diet: {
      eat: ["Garlic (Lahsune - Vasodilation)", "High fiber (Oats/Dalia)", "Fatty fish/Flaxseeds"],
      avoid: ["Vanaspati/Trans-fats", "Red meat", "Excess salt (Fluid retention)", "Deep fried snacks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "12,000 /cmm (Reactive)", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Troponin I", result: "55 ng/mL", notes: "Significant myocardial injury" },
      { name: "ECG", result: "ST Elevation V1-V4", notes: "Anterior Wall MI" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Aspirin 300mg", "Tab. Clopidogrel 300mg", "Inj. Heparin"] }
    ]
  },

  "Asphyxia": {
    category: "Emergency / Forensic",
    pathophysiology: "Physical or chemical interference with oxygen uptake or utilization (Suffocation, Stragulation, Chemical) leading to hypoxia, hypercapnia, and acidosis, culminating in cardiac arrest.",
    
    clinicalFeatures: {
      symptoms: ["Air hunger", "Headache", "Loss of consciousness", "Convulsions"],
      signs: ["Cyanosis", "Petechial hemorrhages (Subconjunctival)", "Congestion of face", "Gasping"]
    },

    diagnosticWorkup: [
      { test: "ABG", finding: "Severe Hypoxia + Hypercapnia", significance: "Confirms respiratory failure" },
      { test: "Chest X-ray", finding: "Pulmonary Edema / Foreign Body", significance: "Identify cause" },
      { test: "Toxicology Screen", finding: "Drugs/Poisons", significance: "If chemical asphyxia suspected" }
    ],

    clinicalPearls: [
      { pearl: "Time Limits.", explanation: "Brain damage begins within 4-6 minutes of complete anoxia." },
      { pearl: "Traumatic Asphyxia.", explanation: "Sudden compression of the chest (e.g., stampede) forces blood retrograde, causing deep purple facial discoloration." }
    ],
    
    redFlags: ["Cardiac Arrest", "Fixed dilated pupils (Poor prognosis)", "Seizures", "Laryngeal edema"],
    differentials: ["Sudden Cardiac Death", "Stroke", "Opioid Overdose", "Cyanide Poisoning"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "100%", 
        freq: "Continuous", 
        indication: "Hypoxia", 
        rationale: "Immediate reversal of hypoxemia via Ambu bag or Intubation." 
      },
      { 
        drug: "Epinephrine", 
        class: "Sympathomimetic", 
        dose: "1 mg (1:10,000)", 
        freq: "IV q3-5min", 
        indication: "Cardiac Arrest", 
        rationale: "Vasoconstriction improves coronary and cerebral perfusion pressure." 
      },
      { 
        drug: "Sodium Bicarbonate", 
        class: "Alkalinizer", 
        dose: "1 mEq/kg", 
        freq: "IV", 
        indication: "Severe Acidosis", 
        rationale: "Corrects metabolic acidosis in prolonged arrest (Controversial)." 
      }
    ],

    lifestyle: ["Heimlich maneuver training.", "Childproofing (small objects).", "Workplace safety (Confined spaces)."],
    
    diet: {
      eat: ["NPO (Nil Per Oral) initially due to aspiration risk"],
      avoid: ["Solid food until swallow reflex verified"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "ABG", result: "pH 6.9, pCO2 90", notes: "Severe Respiratory Acidosis" },
      { name: "Lactate", result: "12 mmol/L", notes: "Tissue ischemia" }
    ],
    treatment: [
      { day: 1, meds: ["Intubation + Ventilation", "ACLS Protocol"] }
    ]
  },

  "Bipolar Disorder": {
    category: "Psychiatry",
    pathophysiology: "Mood disorder characterized by cycling between Mania (High dopamine/glutamate) and Depression (Low monoamines). Involves circadian rhythm disruption and intracellular signaling (GSK-3) defects.",
    
    clinicalFeatures: {
      symptoms: ["Mania: Grandiosity, Sleeplessness, Flight of ideas", "Depression: Hopelessness, Anhedonia"],
      signs: ["Pressured speech", "Risk-taking behavior (spending/sex)", "Psychomotor agitation"]
    },

    diagnosticWorkup: [
      { test: "Clinical Interview", finding: "DSM-5 Criteria", significance: "History of at least one Manic episode (Bipolar I)" },
      { test: "Thyroid Profile", finding: "Normal", significance: "Rule out Hyperthyroidism (Mania mimic)" },
      { test: "Urine Toxicology", finding: "Negative", significance: "Rule out Cocaine/Amphetamines" }
    ],

    clinicalPearls: [
      { pearl: "Antidepressant Risk.", explanation: "Prescribing SSRIs alone ('Monotherapy') can trigger a manic switch; always use with a mood stabilizer." },
      { pearl: "Lithium Toxicity.", explanation: "Narrow therapeutic index (0.6-1.2 mEq/L). Dehydration or NSAIDs can cause fatal toxicity." }
    ],
    
    redFlags: ["Suicide Attempts", "Homicidal ideation", "Catatonia", "Steven-Johnson Syndrome (Lamotrigine risk)"],
    differentials: ["Schizophrenia", "Borderline Personality Disorder", "ADHD", "Substance Induced Mood Disorder"],

    managementRationale: [
      { 
        drug: "Lithium Carbonate", 
        class: "Mood Stabilizer", 
        dose: "300-900 mg", 
        freq: "BD/TID", 
        indication: "Maintenance/Mania", 
        rationale: "Gold standard for suicide prevention. Modulates second messenger systems." 
      },
      { 
        drug: "Sodium Valproate", 
        class: "Anticonvulsant", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "Acute Mania", 
        rationale: "Increases GABA levels; preferred for rapid cycling." 
      },
      { 
        drug: "Quetiapine", 
        class: "Atypical Antipsychotic", 
        dose: "300-600 mg", 
        freq: "HS", 
        indication: "Acute Mania/Depression", 
        rationale: "Dopamine/Serotonin antagonism; effective for both poles." 
      }
    ],

    lifestyle: ["Strict Sleep Hygiene (Sleep deprivation triggers mania).", "Avoid Alcohol/Drugs.", "Regular routine (SRT)."],
    
    diet: {
      eat: ["Consistent Salt Intake (Crucial for Lithium users)", "Hydration"],
      avoid: ["Caffeine (Disrupts sleep)", "Low sodium diets (Increases Lithium levels)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Serum Lithium", result: "0.8 mEq/L", notes: "Therapeutic Range" },
      { name: "TSH", result: "Monitor", notes: "Lithium can cause Hypothyroidism" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Lithium 300mg BD", "Tab. Quetiapine 100mg HS"] }
    ]
  },

  "Cushing’s Syndrome": {
    category: "Endocrine",
    pathophysiology: "Chronic exposure to excess glucocorticoids (Cortisol). Causes include Exogenous steroids (Most common), Pituitary Adenoma (Cushing's Disease), or Adrenal Tumor.",
    
    clinicalFeatures: {
      symptoms: ["Weight gain (Central)", "Muscle weakness (Proximal)", "Easy bruising", "Mood changes"],
      signs: ["Moon Face", "Buffalo Hump", "Purple Striae (Abdomen)", "Hypertension", "Hirsutism"]
    },

    diagnosticWorkup: [
      { test: "Overnight Dexamethasone Suppression", finding: "Cortisol > 1.8 mcg/dL", significance: "Screening Test (Failure to suppress)" },
      { test: "24h Urine Free Cortisol", finding: "Elevated (>3x normal)", significance: "Confirms Hypercortisolism" },
      { test: "Plasma ACTH", finding: "High (Pituitary) / Low (Adrenal)", significance: "Determines Source" }
    ],

    clinicalPearls: [
      { pearl: "Steroid Withdrawal.", explanation: "Most cases are iatrogenic. Stop steroids slowly to avoid Addisonian crisis (HPA axis is suppressed)." },
      { pearl: "Osteoporosis Risk.", explanation: "Excess cortisol inhibits osteoblasts and calcium absorption, leading to severe bone loss." }
    ],
    
    redFlags: ["Severe Hypokalemia (Ectopic ACTH)", "Psychosis", "Vertebral Fractures", "Infection (Immunosuppression)"],
    differentials: ["Metabolic Syndrome", "PCOS", "Chronic Alcoholism (Pseudo-Cushing's)", "Depression"],

    managementRationale: [
      { 
        drug: "Ketoconazole", 
        class: "Steroidogenesis Inhibitor", 
        dose: "200-400 mg", 
        freq: "BD", 
        indication: "Pre-op/Non-surgical", 
        rationale: "Inhibits adrenal enzymes (17-alpha-hydroxylase) to lower cortisol rapidly." 
      },
      { 
        drug: "Spironolactone", 
        class: "MRA", 
        dose: "50-100 mg", 
        freq: "BD", 
        indication: "Hypokalemia/Hirsutism", 
        rationale: "Blocks mineralocorticoid and androgen effects of excess precursors." 
      },
      { 
        drug: "Pasireotide", 
        class: "Somatostatin Analog", 
        dose: "600 mcg", 
        freq: "SC BD", 
        indication: "Pituitary Tumor", 
        rationale: "Inhibits ACTH secretion." 
      }
    ],

    lifestyle: ["Fall prevention (Osteoporosis).", "Infection control measures.", "Regular BP monitoring."],
    
    diet: {
      eat: ["High Protein (Combats muscle wasting)", "Calcium/Vit D rich foods", "Potassium rich foods"],
      avoid: ["Simple sugars (Diabetes risk)", "Excess Salt (Worsens HTN/Edema)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.5 g/dL", wbc: "11,000 /cmm (Neutrophilia)", plt: "250,000 /cmm", hct: "43%" },
      progression: [{ day: 1, hb: "14.5 g/dL", wbc: "11,000 /cmm", plt: "250,000 /cmm", hct: "43%" }]
    },
    specialTests: [
      { name: "Serum Cortisol (8AM)", result: "35 mcg/dL", notes: "Very High" },
      { name: "ACTH", result: "Low", notes: "Adrenal source likely" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Ketoconazole 200mg BD", "Surgical Consult"] }
    ]
  },

  "Hepatitis A": {
    category: "Gastroenterology / Infectious Disease",
    pathophysiology: "Acute self-limiting liver infection caused by Hepatitis A Virus (Picornavirus), transmitted via fecal-oral route. Causes hepatocyte necrosis and inflammation (immune mediated).",
    
    clinicalFeatures: {
      symptoms: ["Nausea/Vomiting", "Anorexia (Loss of appetite)", "Fever", "Jaundice (Yellow eyes/urine)"],
      signs: ["Hepatomegaly (Tender)", "Scleral Icterus", "Dark Urine / Pale Stools"]
    },

    diagnosticWorkup: [
      { test: "IgM Anti-HAV", finding: "Positive", significance: "Diagnostic of Acute Infection" },
      { test: "Liver Function Tests", finding: "ALT/AST > 1000 IU/L", significance: "Hepatocellular injury" },
      { test: "INR/PT", finding: "Normal or Mildly elevated", significance: "Assess synthetic function (Prognostic)" }
    ],

    clinicalPearls: [
      { pearl: "Does not become chronic.", explanation: "Unlike Hep B or C, Hep A never causes chronic liver disease or carrier state." },
      { pearl: "Smoke Aversion.", explanation: "Sudden distaste for cigarettes/smoking is a classic early symptom of viral hepatitis." }
    ],
    
    redFlags: ["Encephalopathy (Fulminant Failure)", "INR > 1.5 (Coagulopathy)", "Persistent Vomiting (Dehydration)", "Hypoglycemia"],
    differentials: ["Hepatitis E (Similar presentation)", "Drug Induced Liver Injury", "Acute Cholecystitis", "Leptospirosis"],

    managementRationale: [
      { 
        drug: "Supportive Care", 
        class: "N/A", 
        dose: "N/A", 
        freq: "N/A", 
        indication: "Primary Treatment", 
        rationale: "No specific antiviral exists. Disease is self-limiting." 
      },
      { 
        drug: "Ondansetron", 
        class: "Antiemetic", 
        dose: "4 mg", 
        freq: "TID", 
        indication: "Severe Vomiting", 
        rationale: "Allows oral intake to prevent dehydration." 
      },
      { 
        drug: "Vitamin K", 
        class: "Vitamin", 
        dose: "10 mg", 
        freq: "PO/SC", 
        indication: "Prolonged INR", 
        rationale: "Supports clotting factor synthesis if cholestasis is present." 
      }
    ],

    lifestyle: ["Hand hygiene (Prevent spread).", "Rest (Fatigue is profound).", "Avoid alcohol completely."],
    
    diet: {
      eat: ["Sugarcane Juice (Traditional energy source)", "Khichdi (Easy to digest)", "Glucose water", "Fruits"],
      avoid: ["Fatty/Oily foods (Nausea trigger)", "Spicy curries", "Paracetamol (High doses hepatotoxic)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "IgM Anti-HAV", result: "Positive", notes: "Acute Infection" },
      { name: "ALT", result: "1250 IU/L", notes: "Acute Hepatitis" }
    ],
    treatment: [
      { day: 1, meds: ["Supportive Care", "Oral Rehydration"] }
    ]
  },
  "Nephritic Syndrome": {
    category: "Renal",
    pathophysiology: "Glomerular inflammation resulting in breach of the filtration barrier, allowing passage of Red Blood Cells (Hematuria) and mild protein. Often caused by immune complex deposition (e.g., Post-Strep Glomerulonephritis, IgA Nephropathy).",
    
    clinicalFeatures: {
      symptoms: ["Coca-cola colored urine (Hematuria)", "Oliguria (Decreased urine)", "Puffy face", "Headache (Hypertension)"],
      signs: ["Hypertension", "Edema (Mild compared to Nephrotic)", "Raised JVP"]
    },

    diagnosticWorkup: [
      { test: "Urinalysis", finding: "RBC Casts + Dysmorphic RBCs", significance: "Pathognomonic of Glomerular Bleeding" },
      { test: "ASO Titer / C3", finding: "High ASO / Low C3", significance: "Suggests Post-Streptococcal etiology" },
      { test: "Renal Biopsy", finding: "Hypercellular glomeruli", significance: "Definitive diagnosis" }
    ],

    clinicalPearls: [
      { pearl: "Nephrotic vs Nephritic.", explanation: "Nephrotic = Proteinuria >3.5g (Foamy urine, Edema). Nephritic = Hematuria + HTN (Red urine, Oliguria)." },
      { pearl: "IgA Nephropathy.", explanation: "Most common cause worldwide; typically presents as synpharyngitic hematuria (blood in urine during sore throat)." }
    ],
    
    redFlags: ["Rapidly Progressive Glomerulonephritis (RPGN)", "Pulmonary Hemorrhage (Goodpasture's)", "Severe Hyperkalemia", "Hypertensive Emergency"],
    differentials: ["Nephrotic Syndrome", "Kidney Stones", "Bladder Cancer", "UTI"],

    managementRationale: [
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "40 mg", 
        freq: "BD", 
        indication: "Fluid Overload/HTN", 
        rationale: "Manages edema and helps control blood pressure by reducing volume." 
      },
      { 
        drug: "Nifedipine", 
        class: "CCB", 
        dose: "10-20 mg", 
        freq: "BD", 
        indication: "Hypertension", 
        rationale: "Vasodilation to control BP (ACEi usually avoided initially if AKI is severe)." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Autoimmune causes (Lupus/RPGN)", 
        rationale: "Suppresses glomerular inflammation." 
      }
    ],

    lifestyle: ["Salt restriction (<2g/day).", "Fluid restriction (Output + 500ml).", "Daily weight monitoring."],
    
    diet: {
      eat: ["Low Potassium fruits (Apple/Guava) if K+ high", "Carbohydrate rich foods (Energy sparing)"],
      avoid: ["Salt substitutes (KCl)", "Pickles/Papad (Sodium)", "Banana/Coconut water (if oliguric/hyperkalemic)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Urine Microscopy", result: "RBC Casts seen", notes: "Active sediment" },
      { name: "Serum Creatinine", result: "1.8 mg/dL", notes: "Acute Kidney Injury" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Furosemide 40mg BD", "Tab. Nifedipine 20mg BD"] }
    ]
  },

  "Thalassemia": {
    category: "Hematology",
    pathophysiology: "Genetic defect in globin chain synthesis (Alpha or Beta) leading to imbalanced globin chains, ineffective erythropoiesis, and hemolysis. Beta-Thalassemia Major requires lifelong transfusions.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue", "Failure to thrive (in children)", "Abdominal fullness (Splenomegaly)"],
      signs: ["Chipmunk facies (Maxillary overgrowth)", "Severe pallor", "Jaundice", "Hepatosplenomegaly"]
    },

    diagnosticWorkup: [
      { test: "Hb Electrophoresis (HPLC)", finding: "High HbF (>90%) and HbA2", significance: "Gold Standard Diagnosis (Beta-Thal Major)" },
      { test: "Peripheral Smear", finding: "Target Cells, Microcytic Hypochromic", significance: "Morphological hallmark" },
      { test: "Serum Ferritin", finding: "High (>1000 ng/mL)", significance: "Iron overload assessment" }
    ],

    clinicalPearls: [
      { pearl: "Iron Overload.", explanation: "Body cannot excrete excess iron from transfusions. Accumulation causes cardiomyopathy, cirrhosis, and diabetes." },
      { pearl: "Mentzer Index.", explanation: "MCV/RBC count < 13 suggests Thalassemia trait; > 13 suggests Iron Deficiency Anemia." }
    ],
    
    redFlags: ["Heart Failure (Iron cardiomyopathy)", "Severe Infection (Yersinia - iron loving bacteria)", "Growth retardation"],
    differentials: ["Iron Deficiency Anemia", "Sideroblastic Anemia", "Anemia of Chronic Disease"],

    managementRationale: [
      { 
        drug: "Deferasirox", 
        class: "Iron Chelator", 
        dose: "20-30 mg/kg", 
        freq: "OD (Dispersible)", 
        indication: "Iron Overload", 
        rationale: "Oral chelator; binds excess iron and excretes it via bile/feces." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Erythropoiesis Support", 
        rationale: "Prevents megaloblastic changes due to high bone marrow turnover." 
      },
      { 
        drug: "Hydroxyurea", 
        class: "HbF Inducer", 
        dose: "15 mg/kg", 
        freq: "OD", 
        indication: "Thalassemia Intermedia", 
        rationale: "Increases Gamma-globin (HbF) to bind excess Alpha chains." 
      }
    ],

    lifestyle: ["Regular Transfusions (Target Hb 9.5-10.5).", "Avoid iron supplements strictly.", "Vaccination (Splenectomy protocol)."],
    
    diet: {
      eat: ["Tea/Coffee with meals (Tannins inhibit iron absorption)", "Calcium rich foods (Bone health)"],
      avoid: ["Iron rich foods (Spinach, Pomegranate, Dates)", "Vitamin C supplements (Increases iron absorption)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "6.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "18%" },
      progression: [{ day: 1, hb: "6.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "18%" }]
    },
    specialTests: [
      { name: "Hb Electrophoresis", result: "HbF 95%, HbA Absent", notes: "Beta-Thal Major" },
      { name: "Ferritin", result: "2500 ng/mL", notes: "Severe Iron Overload" }
    ],
    treatment: [
      { day: 1, meds: ["Blood Transfusion (PRBC)", "Tab. Deferasirox 500mg", "Tab. Folic Acid 5mg"] }
    ]
  },

  "Leprosy": {
    category: "Infectious Disease",
    pathophysiology: "Chronic granulomatous infection by Mycobacterium leprae affecting skin and peripheral nerves. Immune response determines type: Tuberculoid (High cellular immunity) vs Lepromatous (Low immunity).",
    
    clinicalFeatures: {
      symptoms: ["Numbness in hands/feet", "Painless skin patches", "Nasal stuffiness"],
      signs: ["Hypopigmented anesthetic patches", "Thickened nerves (Ulnar/Greater Auricular)", "Claw hand", "Loss of eyebrows (Madarosis)"]
    },

    diagnosticWorkup: [
      { test: "Slit Skin Smear", finding: "AFB Positive (in Multibacillary)", significance: "Bacteriological Index (BI)" },
      { test: "Skin Biopsy", finding: "Granulomas / Acid Fast Bacilli", significance: "Histological Classification" },
      { test: "Sensory Testing", finding: "Loss of Temp/Touch", significance: "Cardinal Sign" }
    ],

    clinicalPearls: [
      { pearl: "Cardinal Signs.", explanation: "Diagnosis requires 1 of 3: Hypopigmented anesthetic patch, Thickened nerve, or Positive skin smear." },
      { pearl: "Lepra Reactions.", explanation: "Type 1 (Reversal) and Type 2 (ENL) are immune-mediated complications requiring steroids/thalidomide, not stopping MDT." }
    ],
    
    redFlags: ["Silent Neuritis (Painless nerve damage)", "Eye pain (Lagophthalmos/Uveitis)", "Orchitis"],
    differentials: ["Vitiligo (Sensation intact)", "Tinea Versicolor", "Psoriasis", "Peripheral Neuropathy (Diabetes)"],

    managementRationale: [
      { 
        drug: "Rifampicin", 
        class: "Antimycobacterial", 
        dose: "600 mg", 
        freq: "Monthly (Supervised)", 
        indication: "MDT Component", 
        rationale: "Highly bactericidal; key component of WHO Multi-Drug Therapy." 
      },
      { 
        drug: "Dapsone", 
        class: "Sulfone", 
        dose: "100 mg", 
        freq: "Daily", 
        indication: "MDT Component", 
        rationale: "Bacteriostatic. Monitor for G6PD deficiency hemolysis." 
      },
      { 
        drug: "Clofazimine", 
        class: "Dye/Antimycobacterial", 
        dose: "50 mg Daily + 300 mg Monthly", 
        freq: "Daily/Monthly", 
        indication: "Multibacillary Leprosy", 
        rationale: "Anti-inflammatory and antibacterial. Causes skin discoloration." 
      }
    ],

    lifestyle: ["Foot care (MCR footwear for anesthesia).", "Physiotherapy for deformities.", "Stigma reduction counseling."],
    
    diet: {
      eat: ["Nutritious balanced diet (Immunity)", "Vitamin B12 (Nerve health)"],
      avoid: ["None specific (Avoid allergens)", "Alcohol (Liver toxicity with Rifampicin)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" }]
    },
    specialTests: [
      { name: "Slit Skin Smear", result: "BI 3+", notes: "Multibacillary" },
      { name: "Biopsy", result: "Foamy Macrophages", notes: "Lepromatous pole" }
    ],
    treatment: [
      { day: 1, meds: ["WHO MDT Kit (MB Adult)", "Foot Care Education"] }
    ]
  },

  "Ankylosing Spondylitis": {
    category: "Rheumatology",
    pathophysiology: "Chronic inflammatory arthritis affecting the axial skeleton (Spondyloarthropathy). HLA-B27 association leads to enthesitis (inflammation at tendon insertion), fibrosis, and eventual bony fusion.",
    
    clinicalFeatures: {
      symptoms: ["Chronic low back pain (>3 months)", "Morning stiffness >30 min (Improves with exercise)", "Buttock pain (Alternating)"],
      signs: ["Reduced spinal flexion (Schober's Test +ve)", "Tenderness over SI joints", "Stooped posture"]
    },

    diagnosticWorkup: [
      { test: "MRI SI Joints", finding: "Bone marrow edema (Sacroiliitis)", significance: "Early diagnosis (Pre-radiographic)" },
      { test: "HLA-B27", finding: "Positive", significance: "Strong genetic association (>90%)" },
      { test: "X-ray Spine", finding: "Bamboo Spine / Syndesmophytes", significance: "Late stage finding" }
    ],

    clinicalPearls: [
      { pearl: "Inflammatory Back Pain.", explanation: "Pain usually starts before age 40, insidious onset, improves with exercise, no improvement with rest, pain at night." },
      { pearl: "Extraskeletal.", explanation: "Look for Uveitis (Red eye), IBD, and Psoriasis as they share pathogenesis." }
    ],
    
    redFlags: ["Uveitis (Vision loss risk)", "Cauda Equina Syndrome", "Vertebral Fracture", "Aortic Regurgitation"],
    differentials: ["Mechanical Back Pain (Worsens with activity)", "Disc Prolapse", "Diffuse Idiopathic Skeletal Hyperostosis (DISH)"],

    managementRationale: [
      { 
        drug: "Indomethacin", 
        class: "NSAID", 
        dose: "25-50 mg", 
        freq: "TID", 
        indication: "First-line", 
        rationale: "Highly effective for inflammatory back pain; often diagnostic response." 
      },
      { 
        drug: "Sulfasalazine", 
        class: "DMARD", 
        dose: "1 g", 
        freq: "BD", 
        indication: "Peripheral Arthritis", 
        rationale: "Effective for knee/hip involvement, less so for spine." 
      },
      { 
        drug: "Adalimumab", 
        class: "TNF Alpha Inhibitor", 
        dose: "40 mg", 
        freq: "SC every 2 weeks", 
        indication: "NSAID Failure", 
        rationale: "Biologic that halts disease progression and fusion." 
      }
    ],

    lifestyle: ["Swimming (Best exercise).", "No pillows/firm mattress (Prevent kyphosis).", "Smoking cessation (Smoking accelerates fusion)."],
    
    diet: {
      eat: ["Omega-3 (Fish/Walnuts)", "Ginger/Turmeric (Anti-inflammatory)", "Calcium rich foods"],
      avoid: ["Starch-rich diet (Klebsiella theory - controversial but cited)", "Processed foods", "Sugar"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "300,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "300,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "HLA-B27", result: "Positive", notes: "Genetic susceptibility" },
      { name: "MRI SI Joint", result: "Active Sacroiliitis", notes: "Bilateral" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Indomethacin 25mg TID", "Physiotherapy"] }
    ]
  },

  "Colorectal Cancer": {
    category: "Oncology",
    pathophysiology: "Malignancy arising from colonic or rectal epithelium, typically following the Adenoma-Carcinoma sequence (APC gene mutation -> Polyp -> Dysplasia -> Cancer).",
    
    clinicalFeatures: {
      symptoms: ["Change in bowel habits", "Rectal bleeding/Melena", "Abdominal pain", "Unexplained weight loss"],
      signs: ["Abdominal mass", "Pallor (Right sided tumors bleed)", "Positive DRE"]
    },

    diagnosticWorkup: [
      { test: "Colonoscopy", finding: "Mass/Ulcer + Biopsy", significance: "Gold Standard Diagnosis" },
      { test: "CEA (Carcinoembryonic Antigen)", finding: "Elevated", significance: "Prognostic marker / Recurrence monitoring" },
      { test: "CT Abdomen/Pelvis", finding: "Primary tumor + Mets", significance: "Staging" }
    ],

    clinicalPearls: [
      { pearl: "Right vs Left.", explanation: "Right sided tumors present with Anemia (occult bleed); Left sided tumors present with Obstruction (pencil stools)." },
      { pearl: "Apple Core Lesion.", explanation: "Classic Barium enema finding indicating annular constricting carcinoma." }
    ],
    
    redFlags: ["Intestinal Obstruction", "Perforation", "Massive Bleeding", "Liver Metastasis (Jaundice)"],
    differentials: ["Diverticulitis", "IBD (Crohn's/UC)", "Hemorrhoids", "Ischemic Colitis"],

    managementRationale: [
      { 
        drug: "5-Fluorouracil (5-FU)", 
        class: "Antimetabolite", 
        dose: "Protocol based", 
        freq: "IV Infusion", 
        indication: "Chemotherapy Backbone", 
        rationale: "Inhibits thymidylate synthase, blocking DNA replication." 
      },
      { 
        drug: "Oxaliplatin", 
        class: "Platinum Agent", 
        dose: "85 mg/m2", 
        freq: "IV q2 weeks", 
        indication: "FOLFOX Regimen", 
        rationale: "Forms DNA crosslinks; synergistic with 5-FU." 
      },
      { 
        drug: "Leucovorin", 
        class: "Folinic Acid", 
        dose: "400 mg/m2", 
        freq: "IV", 
        indication: "Enhancer", 
        rationale: "Potentiates 5-FU binding to thymidylate synthase." 
      }
    ],

    lifestyle: ["Screening Colonoscopy >45y.", "Smoking cessation.", "Physical activity."],
    
    diet: {
      eat: ["High Fiber (Isabgol, Veggies) - Prevention", "Cruciferous vegetables", "Calcium/Vit D"],
      avoid: ["Red Meat (Beef/Lamb)", "Processed meats (Sausage/Salami - Carcinogenic)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "27%" },
      progression: [{ day: 1, hb: "9.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "27%" }]
    },
    specialTests: [
      { name: "Colonoscopy", result: "Fungating Mass", notes: "Sigmoid Colon" },
      { name: "CEA", result: "45 ng/mL", notes: "High" }
    ],
    treatment: [
      { day: 1, meds: ["Surgical Resection", "Adjunct FOLFOX Chemo"] }
    ]
  },
  "Opioid Overdose": {
    category: "Toxicology",
    pathophysiology: "Excessive stimulation of Mu-opioid receptors in the brainstem respiratory centers leading to decreased sensitivity to CO2, causing respiratory depression, hypoxia, and death.",
    
    clinicalFeatures: {
      symptoms: ["Unresponsiveness", "Shallow/Slow breathing", "Snoring/Gurgling sounds (Death rattle)"],
      signs: ["Pinpoint Pupils (Miosis)", "Bradypnea (<12/min)", "Cyanosis", "Track marks (if IV user)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Triad", finding: "Coma + Miosis + Respiratory Depression", significance: "Strongly suggestive" },
      { test: "Response to Naloxone", finding: "Rapid awakening", significance: "Diagnostic & Therapeutic" },
      { test: "Urine Toxicology", finding: "Positive for Opiates", significance: "Confirmation (Delayed)" }
    ],

    clinicalPearls: [
      { pearl: "Half-life Mismatch.", explanation: "Naloxone's duration (30-90 min) is shorter than most opioids; re-sedation is common, requiring observation or infusion." },
      { pearl: "Non-Cardiogenic Pulmonary Edema.", explanation: "A potential complication of severe overdose, manifesting as frothy sputum post-resuscitation." }
    ],
    
    redFlags: ["Respiratory Rate < 8/min", "SpO2 < 90%", "Hypothermia", "Rhabdomyolysis (from prolonged immobilization)"],
    differentials: ["Pontine Hemorrhage (Pinpoint pupils)", "Organophosphate Poisoning", "Hypoglycemia", "Sedative Overdose"],

    managementRationale: [
      { 
        drug: "Naloxone", 
        class: "Opioid Antagonist", 
        dose: "0.4-2 mg", 
        freq: "IV/IM/Nasal Stat", 
        indication: "Respiratory Depression", 
        rationale: "Competitively displaces opioids from receptors. Repeat q2-3min until breathing improves." 
      },
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "High Flow", 
        freq: "Continuous", 
        indication: "Hypoxia", 
        rationale: "Supportive care while waiting for antagonist effect." 
      }
    ],

    lifestyle: ["Harm reduction (Needle exchange).", "Avoid mixing with Alcohol/Benzos.", "Carry Naloxone kit."],
    
    diet: {
      eat: ["NPO during acute phase", "Fluids post-recovery"],
      avoid: ["Alcohol", "Sedatives"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "ABG", result: "Respiratory Acidosis", notes: "High pCO2" },
      { name: "Pupils", result: "1mm Bilateral", notes: "Non-reactive" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Naloxone 0.4mg IV", "Ventilatory Support"] }
    ]
  },

  "Benign Prostatic Hyperplasia (BPH)": {
    category: "Urology",
    pathophysiology: "Non-malignant proliferation of stromal and epithelial cells in the transition zone of the prostate, driven by Dihydrotestosterone (DHT), causing Bladder Outlet Obstruction (BOO).",
    
    clinicalFeatures: {
      symptoms: ["Hesitancy", "Weak stream", "Nocturia (waking up to pee)", "Sense of incomplete emptying"],
      signs: ["Enlarged smooth prostate on DRE", "Distended bladder (if retention)"]
    },

    diagnosticWorkup: [
      { test: "Digital Rectal Exam (DRE)", finding: "Smooth, rubbery enlargement", significance: "Distinguishes from cancerous nodules (hard)" },
      { test: "PSA", finding: "Mildly elevated (<10 ng/mL)", significance: "Rule out cancer (overlap exists)" },
      { test: "Uroflowmetry", finding: "Qmax < 10 ml/sec", significance: "Objective measure of obstruction" }
    ],

    clinicalPearls: [
      { pearl: "Alpha-1 Selective.", explanation: "Tamsulosin targets Alpha-1a receptors in the prostate, minimizing hypotension compared to non-selective agents." },
      { pearl: "Avoid Anticholinergics/Decongestants.", explanation: "Cold medicines (Pseudoephedrine) can trigger acute urinary retention in BPH patients." }
    ],
    
    redFlags: ["Acute Urinary Retention (Painful)", "Hydronephrosis (Renal Failure)", "Recurrent UTIs", "Gross Hematuria"],
    differentials: ["Prostate Cancer", "Urethral Stricture", "Neurogenic Bladder", "UTI"],

    managementRationale: [
      { 
        drug: "Tamsulosin", 
        class: "Alpha-1 Blocker", 
        dose: "0.4 mg", 
        freq: "OD (Night)", 
        indication: "Symptoms (LUTS)", 
        rationale: "Relaxes smooth muscle in bladder neck and prostate capsule. Rapid relief." 
      },
      { 
        drug: "Finasteride", 
        class: "5-Alpha Reductase Inhibitor", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Large Prostate (>40g)", 
        rationale: "Blocks conversion of Testosterone to DHT; shrinks prostate over 6 months." 
      },
      { 
        drug: "Tadalafil", 
        class: "PDE5 Inhibitor", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "BPH + ED", 
        rationale: "Reduces LUTS and treats erectile dysfunction simultaneously." 
      }
    ],

    lifestyle: ["Fluid restriction before bed.", "Double voiding technique.", "Avoid caffeine/alcohol (Diuretics)."],
    
    diet: {
      eat: ["Pumpkin seeds (Zinc/Phytosterols)", "Tomatoes (Lycopene)", "Soy"],
      avoid: ["Red meat", "Spicy foods (Bladder irritants)", "Excess dairy"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Prostate Volume", result: "50 cc", notes: "Enlarged" },
      { name: "Post Void Residual", result: "150 ml", notes: "Significant" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Tamsulosin 0.4mg HS", "Tab. Finasteride 5mg OD"] }
    ]
  },

  "Fibromyalgia": {
    category: "Rheumatology / Pain Medicine",
    pathophysiology: "Central sensitization syndrome characterized by amplified pain perception (Allodynia/Hyperalgesia) due to altered neurotransmitters (High Glutamate/Substance P, Low Serotonin/NE) in the CNS.",
    
    clinicalFeatures: {
      symptoms: ["Widespread body pain (>3 months)", "Fatigue (unrefreshing sleep)", "Brain fog", "Mood disturbances"],
      signs: ["Tenderness at specific points (historic)", "Normal joint exam", "No inflammation"]
    },

    diagnosticWorkup: [
      { test: "Clinical Criteria", finding: "Widespread Pain Index (WPI)", significance: "Diagnosis of exclusion" },
      { test: "ESR/CRP", finding: "Normal", significance: "Rules out inflammatory arthritis" },
      { test: "Thyroid/Vitamin D", finding: "Normal", significance: "Rule out mimics" }
    ],

    clinicalPearls: [
      { pearl: "Start Low, Go Slow.", explanation: "Patients are often hypersensitive to drug side effects. Titrate doses gradually." },
      { pearl: "Exercise is Medicine.", explanation: "Low impact aerobic exercise is the single most effective intervention, superior to most drugs." }
    ],
    
    redFlags: ["Unexplained weight loss (Malignancy)", "Fever", "Focal neurological signs", "Joint swelling"],
    differentials: ["Hypothyroidism", "Rheumatoid Arthritis", "Polymyalgia Rheumatica", "Vitamin D Deficiency"],

    managementRationale: [
      { 
        drug: "Pregabalin", 
        class: "Gabapentinoid", 
        dose: "75-150 mg", 
        freq: "BD", 
        indication: "Pain/Sleep", 
        rationale: "Binds Alpha-2-Delta calcium channels to reduce neurotransmitter release." 
      },
      { 
        drug: "Duloxetine", 
        class: "SNRI", 
        dose: "30-60 mg", 
        freq: "OD", 
        indication: "Pain/Depression", 
        rationale: "Increases Serotonin/NE in descending inhibitory pain pathways." 
      },
      { 
        drug: "Amitriptyline", 
        class: "TCA", 
        dose: "10-25 mg", 
        freq: "HS", 
        indication: "Sleep aid", 
        rationale: "Low dose improves sleep architecture and pain threshold." 
      }
    ],

    lifestyle: ["CBT (Cognitive Behavioral Therapy).", "Tai Chi / Yoga.", "Sleep hygiene."],
    
    diet: {
      eat: ["Anti-inflammatory diet (Turmeric, Ginger)", "Magnesium rich foods (Almonds)", "Omega-3"],
      avoid: ["Excitotoxins (MSG, Aspartame - controversial but often avoided)", "Processed sugar", "Caffeine"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "ESR", result: "10 mm/hr", notes: "Normal" },
      { name: "Rheumatoid Factor", result: "Negative", notes: "Ruled out RA" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Pregabalin 75mg BD", "Tab. Amitriptyline 10mg HS"] }
    ]
  },

  "Tinea Infections (Ringworm)": {
    category: "Dermatology",
    pathophysiology: "Superficial fungal infection of keratinized tissue (Skin, Hair, Nails) by dermatophytes (Trichophyton, Microsporum), causing inflammation and scaling.",
    
    clinicalFeatures: {
      symptoms: ["Intense Itching", "Red circular rash", "Hair loss (Tinea Capitis)"],
      signs: ["Annular plaque with central clearing", "Active raised border", "Scale"]
    },

    diagnosticWorkup: [
      { test: "KOH Mount", finding: "Branching Septate Hyphae", significance: "Rapid office confirmation" },
      { test: "Clinical Diagnosis", finding: "Ringworm appearance", significance: "Usually sufficient" },
      { test: "Wood's Lamp", finding: "Fluorescence", significance: "For specific species (Microsporum)" }
    ],

    clinicalPearls: [
      { pearl: "Tinea Incognito.", explanation: "Appearance altered by inappropriate steroid use (less red, more extensive). Do NOT use steroids on ringworm." },
      { pearl: "Indian Epidemic.", explanation: "Widespread resistance to standard doses seen in India; higher doses/longer durations now required." }
    ],
    
    redFlags: ["Secondary Bacterial Infection (Pus/Pain)", "Kerion (Boggy abscess in scalp)", "Widespread involvement"],
    differentials: ["Psoriasis", "Nummular Eczema", "Granuloma Annulare", "Pityriasis Rosea"],

    managementRationale: [
      { 
        drug: "Terbinafine", 
        class: "Allylamine", 
        dose: "250 mg", 
        freq: "OD x 2-4 weeks", 
        indication: "Systemic/Widespread", 
        rationale: "Fungicidal; inhibits squalene epoxidase. Gold standard for oral therapy." 
      },
      { 
        drug: "Clotrimazole / Luliconazole", 
        class: "Azole Topical", 
        dose: "1% Cream", 
        freq: "BD x 2-4 weeks", 
        indication: "Localized Tinea", 
        rationale: "Inhibits ergosterol synthesis. Continue 1 week after rash clears." 
      },
      { 
        drug: "Itraconazole", 
        class: "Azole Systemic", 
        dose: "100-200 mg", 
        freq: "BD", 
        indication: "Resistant cases", 
        rationale: "Alternative systemic agent; check liver enzymes." 
      }
    ],

    lifestyle: ["Keep areas dry (fungus loves moisture).", "Wash clothes in hot water/sun dry.", "Avoid sharing towels/combs."],
    
    diet: {
      eat: ["Probiotics (Curd) if on long term antibiotics/antifungals", "Garlic (antifungal properties)"],
      avoid: ["Sugar/Refined Carbs (Promotes yeast/fungal overgrowth - controversial but advised)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "KOH Scraping", result: "Hyphae seen", notes: "Positive" },
      { name: "LFT", result: "Normal", notes: "Pre-oral antifungal check" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Terbinafine 250mg OD", "Topical Luliconazole BD"] }
    ]
  },

  "Burn Injury (Thermal)": {
    category: "Emergency / Surgery",
    pathophysiology: "Tissue destruction caused by heat leading to coagulative necrosis, release of inflammatory mediators, and massive fluid shift (capillary leak) resulting in hypovolemic shock.",
    
    clinicalFeatures: {
      symptoms: ["Pain (1st/2nd degree)", "Painless (3rd degree - nerve destroyed)", "Thirst"],
      signs: ["Erythema (1st)", "Blisters (2nd)", "Leathery/Charred Eschar (3rd)", "Singed nasal hair (Inhalation injury)"]
    },

    diagnosticWorkup: [
      { test: "Rule of Nines", finding: "% TBSA calculation", significance: "Determines fluid resuscitation needs" },
      { test: "Carboxyhemoglobin", finding: "Elevated", significance: "Check for CO poisoning in enclosed fires" },
      { test: "Urine Output", finding: "Target 0.5 ml/kg/hr", significance: "Best guide for fluid adequacy" }
    ],

    clinicalPearls: [
      { pearl: "Parkland Formula.", explanation: "4ml x kg x %TBSA. Give 50% in first 8 hours, rest in next 16 hours." },
      { pearl: "Escharotomy.", explanation: "Circumferential burns can act as a tourniquet; incision is needed to restore perfusion." }
    ],
    
    redFlags: ["Inhalation Injury (Hoarseness/Stridor)", "Electrical Burn (Cardiac arrhythmia)", "Circumferential Burn (Compartment syndrome)"],
    differentials: ["Chemical Burn", "Electrical Burn", "Steven-Johnson Syndrome (TEN)", "Scald Injury"],

    managementRationale: [
      { 
        drug: "Ringer Lactate", 
        class: "Crystalloid", 
        dose: "Parkland Formula", 
        freq: "IV Continuous", 
        indication: "Resuscitation", 
        rationale: "Isotonic fluid of choice; large volumes needed to counter capillary leak." 
      },
      { 
        drug: "Silver Sulfadiazine", 
        class: "Topical Antimicrobial", 
        dose: "1% Cream", 
        freq: "OD/BD dressing", 
        indication: "Wound Care", 
        rationale: "Broad spectrum coverage against Pseudomonas and Staph." 
      },
      { 
        drug: "Morphine", 
        class: "Opioid", 
        dose: "0.1 mg/kg", 
        freq: "IV Small Boluses", 
        indication: "Severe Pain", 
        rationale: "IV route preferred as IM/SC absorption is erratic in shock." 
      }
    ],

    lifestyle: ["Tetanus prophylaxis.", "Early mobilization to prevent contractures.", "Pressure garments for scars."],
    
    diet: {
      eat: ["High Protein (2-3g/kg) - Hypermetabolic state requires massive substrate for healing", "Eggs/Paneer/Chicken", "Vitamin C/Zinc"],
      avoid: ["Low calorie diet", "Empty calories"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "16.0 g/dL (Hemoconcentration)", wbc: "15,000 /cmm", plt: "250,000 /cmm", hct: "50%" },
      progression: [{ day: 1, hb: "16.0 g/dL", wbc: "15,000 /cmm", plt: "250,000 /cmm", hct: "50%" }]
    },
    specialTests: [
      { name: "TBSA", result: "40%", notes: "Major Burn" },
      { name: "Myoglobin", result: "Negative", notes: "No Rhabdomyolysis" }
    ],
    treatment: [
      { day: 1, meds: ["IV Ringer Lactate", "Inj. Morphine IV", "Tetanus Toxoid"] }
    ]
  },
  "Congestive Heart Failure (CHF)": {
    category: "Cardiovascular",
    pathophysiology: "Inability of the heart to pump blood effectively to meet metabolic needs (HFrEF) or inability to fill properly (HFpEF), leading to fluid retention and reduced cardiac output.",
    
    clinicalFeatures: {
      symptoms: ["Dyspnea on exertion", "Orthopnea (Breathlessness lying flat)", "PND (Waking up gasping)", "Fatigue"],
      signs: ["Elevated JVP", "Bilateral pedal edema", "S3 Gallop", "Bibasilar crackles"]
    },

    diagnosticWorkup: [
      { test: "NT-proBNP", finding: "Elevated (>125 pg/mL)", significance: "High sensitivity for cardiac etiology of dyspnea" },
      { test: "Echocardiography", finding: "Reduced EF (<40%) or Diastolic dysfunction", significance: "Gold Standard Classification" },
      { test: "Chest X-ray", finding: "Cardiomegaly + Kerley B lines", significance: "Pulmonary congestion check" }
    ],

    clinicalPearls: [
      { pearl: "Fantastic Four.", explanation: "GDMT involves 4 pillars: ARNI/ACEi, Beta-blocker, MRA, and SGLT2i. Reduces mortality significantly." },
      { pearl: "Fluid Weight.", explanation: "Sudden weight gain (>2kg in 3 days) is the earliest sign of decompensation, often before edema appears." }
    ],
    
    redFlags: ["Resting Dyspnea", "Hypotension (Cardiogenic Shock)", "Azotemia (Cardiorenal Syndrome)", "Hyponatremia"],
    differentials: ["COPD", "Nephrotic Syndrome", "Liver Failure (Cirrhosis)", "Anemia"],

    managementRationale: [
      { 
        drug: "Sacubitril-Valsartan", 
        class: "ARNI", 
        dose: "50 mg BD", 
        freq: "BD", 
        indication: "HFrEF", 
        rationale: "Superior to ACEi; inhibits neprilysin to increase natriuretic peptides." 
      },
      { 
        drug: "Metoprolol Succinate", 
        class: "Beta Blocker", 
        dose: "25-50 mg", 
        freq: "OD (XL)", 
        indication: "Stable HF", 
        rationale: "Prevents remodeling and arrhythmia. Do NOT start in acute decompensated shock." 
      },
      { 
        drug: "Dapagliflozin", 
        class: "SGLT2 Inhibitor", 
        dose: "10 mg", 
        freq: "OD", 
        indication: "All HF types", 
        rationale: "Reduces hospitalization and mortality independent of diabetes status." 
      }
    ],

    lifestyle: ["Fluid restriction (<1.5L/day in severe cases).", "Daily weight monitoring.", "Avoid NSAIDs (causes fluid retention)."],
    
    diet: {
      eat: ["High fiber (prevent straining)", "Potassium rich foods (if on Lasix only)"],
      avoid: ["Salt (Pickles, Papad, Chutney)", "Hidden sodium (Bakery items)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "NT-proBNP", result: "2500 pg/mL", notes: "Acute HF" },
      { name: "ECHO", result: "LVEF 30%", notes: "Severe LV Dysfunction" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Sacubitril-Valsartan 50mg BD", "Tab. Dapagliflozin 10mg OD", "Tab. Furosemide 40mg BD"] }
    ]
  },

  "Dyspnea (Differential Diagnosis)": {
    category: "Symptom / Multi-system",
    pathophysiology: "Subjective sensation of uncomfortable breathing arising from mismatch between central respiratory motor output and incoming afferent information from receptors (Lung, Chest wall, Chemoreceptors).",
    
    clinicalFeatures: {
      symptoms: ["Air hunger", "Chest tightness", "Rapid breathing", "Suffocation sensation"],
      signs: ["Tachypnea", "Use of accessory muscles", "Stridor/Wheeze", "Cyanosis"]
    },

    diagnosticWorkup: [
      { test: "SpO2 / ABG", finding: "Hypoxia vs Hypercapnia", significance: "Type 1 vs Type 2 Respiratory Failure" },
      { test: "Chest X-ray", finding: "Lung vs Heart pathology", significance: "Differentiation" },
      { test: "D-Dimer", finding: "Elevated", significance: "Screening for Pulmonary Embolism" }
    ],

    clinicalPearls: [
      { pearl: "Orthopnea Specificity.", explanation: "Dyspnea lying flat that improves with sitting up is highly specific for Cardiac causes (CHF) or Diaphragmatic palsy." },
      { pearl: "Sudden Onset.", explanation: "Think P-E-A: Pneumothorax, Embolism, Asthma/Anaphylaxis." }
    ],
    
    redFlags: ["Silent Chest (Severe Asthma)", "Stridor (Upper airway obstruction)", "Hemoptysis", "Unilateral leg swelling (PE)"],
    differentials: ["Cardiac (CHF/MI)", "Pulmonary (COPD/Asthma/Pneumonia)", "Hematologic (Anemia)", "Psychogenic (Panic Attack)"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "Titrate", 
        freq: "Continuous", 
        indication: "Hypoxia", 
        rationale: "Corrects hypoxemia regardless of cause." 
      },
      { 
        drug: "Furosemide", 
        class: "Diuretic", 
        dose: "40 mg IV", 
        freq: "Stat", 
        indication: "Volume Overload", 
        rationale: "Rapid relief for cardiac dyspnea (Pulmonary Edema)." 
      },
      { 
        drug: "Salbutamol", 
        class: "Bronchodilator", 
        dose: "2.5 mg Neb", 
        freq: "Stat", 
        indication: "Bronchospasm", 
        rationale: "Relieves airflow obstruction." 
      }
    ],

    lifestyle: ["Pursed lip breathing (COPD).", "Tripod position.", "Anxiety management."],
    
    diet: {
      eat: ["Small frequent meals (Full stomach restricts diaphragm)"],
      avoid: ["Gas forming foods", "Excessive carbs (High CO2 load)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "Varies", wbc: "Varies", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "CXR", result: "Clear fields", notes: "Rule out pneumonia" },
      { name: "ECG", result: "Sinus Tachycardia", notes: "Non-specific" }
    ],
    treatment: [
      { day: 1, meds: ["O2 Therapy", "Treat Underlying Cause"] }
    ]
  },

  "Epilepsy (Seizure Disorder)": {
    category: "Neurology",
    pathophysiology: "Chronic neurological disorder characterized by recurrent, unprovoked seizures due to hypersynchronous abnormal neuronal discharge in the brain.",
    
    clinicalFeatures: {
      symptoms: ["Aura (Déjà vu/Smells)", "Loss of consciousness", "Involuntary movements", "Post-ictal confusion"],
      signs: ["Tongue bite (Lateral)", "Urinary incontinence", "Tonic-clonic movements", "Frothing"]
    },

    diagnosticWorkup: [
      { test: "EEG", finding: "Spike and Wave patterns", significance: "Classifies seizure type (Focal vs Generalized)" },
      { test: "MRI Brain (Epilepsy Protocol)", finding: "Mesial Temporal Sclerosis", significance: "Structural cause identification" },
      { test: "Prolactin", finding: "Elevated (Acute)", significance: "Differentiates true seizure from PNES (Pseudoseizure)" }
    ],

    clinicalPearls: [
      { pearl: "Status Epilepticus.", explanation: "Seizure >5 mins or recurrent without recovery is an emergency requiring Benzodiazepines immediately." },
      { pearl: "SUDEP.", explanation: "Sudden Unexpected Death in Epilepsy is a risk, especially in uncontrolled generalized tonic-clonic seizures." }
    ],
    
    redFlags: ["Seizure > 5 mins", "Fever (Meningitis)", "History of head trauma", "Focal deficit (Todd's Paresis - usually resolves, but rule out stroke)"],
    differentials: ["Syncope (Fainting)", "PNES (Psychogenic)", "Migraine Aura", "Hypoglycemia"],

    managementRationale: [
      { 
        drug: "Levetiracetam", 
        class: "Anticonvulsant", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "Broad Spectrum", 
        rationale: "SV2A protein binding; safe profile, few drug interactions." 
      },
      { 
        drug: "Sodium Valproate", 
        class: "Anticonvulsant", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Generalized Seizures", 
        rationale: "Broad spectrum; avoid in young women (Teratogenic/PCOS risk)." 
      },
      { 
        drug: "Carbamazepine", 
        class: "Sodium Channel Blocker", 
        dose: "200-400 mg", 
        freq: "TID", 
        indication: "Focal Seizures", 
        rationale: "First-line for focal onset; risk of hyponatremia/SJS." 
      }
    ],

    lifestyle: ["Sleep hygiene (Sleep deprivation is #1 trigger).", "Avoid swimming/driving alone.", "Medication adherence."],
    
    diet: {
      eat: ["Ketogenic Diet (for refractory pediatric cases)", "Regular meals"],
      avoid: ["Fasting (Upvas - trigger)", "Alcohol (Lowers seizure threshold)", "Excess Caffeine"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "EEG", result: "3Hz Spike-Wave", notes: "Absence Seizure pattern" },
      { name: "MRI Brain", result: "Normal", notes: "Idiopathic" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Levetiracetam 500mg BD", "Rescue Midazolam Spray"] }
    ]
  },

  "Addison’s Disease": {
    category: "Endocrine",
    pathophysiology: "Primary Adrenal Insufficiency involving destruction of the adrenal cortex (Autoimmune or TB), leading to deficiency of Cortisol (Glucocorticoid) and Aldosterone (Mineralocorticoid).",
    
    clinicalFeatures: {
      symptoms: ["Profound fatigue", "Salt craving", "Dizziness on standing", "Weight loss"],
      signs: ["Hyperpigmentation (Knuckles/Gums - POMC effect)", "Hypotension", "Vitiligo (Autoimmune association)"]
    },

    diagnosticWorkup: [
      { test: "ACTH Stimulation Test", finding: "Cortisol < 18 mcg/dL", significance: "Gold Standard (Adrenal cannot respond)" },
      { test: "Plasma ACTH", finding: "High (>100 pg/mL)", significance: "Primary failure (Loss of feedback)" },
      { test: "Electrolytes", finding: "Hyponatremia + Hyperkalemia", significance: "Aldosterone deficiency effect" }
    ],

    clinicalPearls: [
      { pearl: "Adrenal Crisis.", explanation: "Hypotensive shock refractory to fluids/pressors. Treat with IV Hydrocortisone immediately upon suspicion." },
      { pearl: "Indian Etiology.", explanation: "While autoimmune is most common globally, Tuberculosis is a leading cause of adrenal destruction in India." }
    ],
    
    redFlags: ["Hypoglycemia", "Shock (Crisis)", "Abdominal Pain (Crisis mimic)", "Severe Hyperkalemia"],
    differentials: ["Secondary Adrenal Insufficiency (Pituitary - No pigment)", "Occult malignancy", "Anorexia Nervosa"],

    managementRationale: [
      { 
        drug: "Hydrocortisone", 
        class: "Glucocorticoid", 
        dose: "15-25 mg", 
        freq: "Divided (2/3 AM, 1/3 PM)", 
        indication: "Cortisol Replacement", 
        rationale: "Mimics circadian rhythm. Stress dosing (Double dose) needed during illness." 
      },
      { 
        drug: "Fludrocortisone", 
        class: "Mineralocorticoid", 
        dose: "0.05-0.1 mg", 
        freq: "OD", 
        indication: "Aldosterone Replacement", 
        rationale: "Maintains sodium balance and blood pressure." 
      }
    ],

    lifestyle: ["Medical Alert Bracelet.", "Carry Injectable Hydrocortisone kit.", "Stress dosing rules education."],
    
    diet: {
      eat: ["Liberal Salt intake (Add salt to curd/rice)", "High fluid intake"],
      avoid: ["Potassium rich foods (if Hyperkalemic)", "Fasting", "Licorice (Interferes with metabolism - rare)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "5,000 /cmm (Eosinophilia)", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "5,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Cortisol (8AM)", result: "3 mcg/dL", notes: "Very Low" },
      { name: "ACTH", result: "1200 pg/mL", notes: "Very High" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Hydrocortisone 10mg-5mg-5mg", "Tab. Fludrocortisone 0.1mg"] }
    ]
  },

  "Hepatitis B": {
    category: "Infectious Disease (Hepatology)",
    pathophysiology: "Viral infection (DNA Hepadnavirus) transmitted parenterally or sexually. Host immune response to infected hepatocytes causes liver injury. Can progress to Cirrhosis or HCC.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue", "Abdominal pain (RUQ)", "Joint pain", "Jaundice (or asymptomatic)"],
      signs: ["Hepatomegaly", "Palmar erythema/Spider angioma (if Chronic)", "Ascites (Decompensated)"]
    },

    diagnosticWorkup: [
      { test: "HBsAg", finding: "Positive", significance: "Active Infection (Acute or Chronic)" },
      { test: "Anti-HBs", finding: "Positive (alone)", significance: "Immunity (Vaccine or Past Infection)" },
      { test: "HBV DNA (Viral Load)", finding: "> 2000 IU/mL", significance: "Indicates replication; guides treatment" }
    ],

    clinicalPearls: [
      { pearl: "Vertical Transmission.", explanation: "Most common route in high prevalence areas. Immunoglobulin + Vaccine at birth prevents 95% of cases." },
      { pearl: "Window Period.", explanation: "HBsAg disappears before Anti-HBs appears. Anti-HBc IgM is the ONLY marker positive during this time." }
    ],
    
    redFlags: ["Coagulopathy (INR > 1.5)", "Encephalopathy", "GI Bleed (Varices)", "HCC Nodule on USG"],
    differentials: ["Hepatitis C", "Alcoholic Liver Disease", "Autoimmune Hepatitis", "Wilson's Disease"],

    managementRationale: [
      { 
        drug: "Entecavir", 
        class: "Nucleoside Analog", 
        dose: "0.5 mg", 
        freq: "OD (Empty Stomach)", 
        indication: "Chronic Hep B", 
        rationale: "Potent viral suppression with high barrier to resistance. First-line." 
      },
      { 
        drug: "Tenofovir Disoproxil (TDF)", 
        class: "Nucleotide Analog", 
        dose: "300 mg", 
        freq: "OD", 
        indication: "Chronic Hep B", 
        rationale: "First-line alternative; prefer TAF (Alafenamide) if renal/bone issues exist." 
      },
      { 
        drug: "Peg-Interferon", 
        class: "Cytokine", 
        dose: "180 mcg", 
        freq: "Weekly SC", 
        indication: "Specific Genotypes", 
        rationale: "Finite duration therapy (48 weeks) aiming for seroconversion." 
      }
    ],

    lifestyle: ["Avoid Alcohol completely.", "Safe sex practices.", "Screen family members."],
    
    diet: {
      eat: ["Coffee (Hepatoprotective)", "Fresh fruits/vegetables"],
      avoid: ["Alcohol", "Aflatoxin contaminated grains (Groundnuts) - HCC risk", "Raw shellfish"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "5,500 /cmm", plt: "150,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "5,500 /cmm", plt: "150,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "HBsAg", result: "Positive", notes: "Chronic carrier" },
      { name: "HBV DNA", result: "10,000 IU/mL", notes: "High replication" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Entecavir 0.5mg OD", "Liver Surveillance"] }
    ]
  },
  "Renal Calculi (Kidney Stones)": {
    category: "Urology",
    pathophysiology: "Supersaturation of urine with stone-forming salts (Calcium Oxalate, Uric Acid, Struvite) exceeding their solubility product, leading to crystal nucleation and aggregation.",
    
    clinicalFeatures: {
      symptoms: ["Renal Colic (Loin to Groin pain)", "Hematuria", "Nausea/Vomiting", "Urgency"],
      signs: ["Costovertebral angle tenderness", "Restlessness (unable to find comfortable position)", "Tachycardia"]
    },

    diagnosticWorkup: [
      { test: "NCCT KUB", finding: "Hyperdense calculus", significance: "Gold Standard (detects radio-lucent stones too)" },
      { test: "Urinalysis", finding: "RBCs + Crystals", significance: "Supportive; Crystal type hints at composition" },
      { test: "Ultrasound", finding: "Hydronephrosis / Acoustic shadowing", significance: "First-line screening (No radiation)" }
    ],

    clinicalPearls: [
      { pearl: "Size Matters.", explanation: "Stones < 5mm pass spontaneously in >90% cases; > 10mm rarely pass without intervention." },
      { pearl: "Calcium Paradox.", explanation: "Do NOT restrict dietary calcium. Low calcium increases oxalate absorption in the gut, worsening Ca-Oxalate stones." }
    ],
    
    redFlags: ["Obstructed infected kidney (Pus + Stone = Emergency)", "Anuria (Bilateral obstruction)", "Intractable pain"],
    differentials: ["Appendicitis", "Ectopic Pregnancy", "Pyelonephritis", "Aortic Aneurysm"],

    managementRationale: [
      { 
        drug: "Diclofenac", 
        class: "NSAID", 
        dose: "75 mg", 
        freq: "IM/IV Stat", 
        indication: "Renal Colic", 
        rationale: "Reduces ureteric spasm and glomerular filtration rate, relieving capsular distension." 
      },
      { 
        drug: "Tamsulosin", 
        class: "Alpha-1 Blocker", 
        dose: "0.4 mg", 
        freq: "OD", 
        indication: "Medical Expulsion Therapy", 
        rationale: "Relaxes distal ureter smooth muscle to facilitate stone passage." 
      },
      { 
        drug: "Potassium Citrate", 
        class: "Urinary Alkalinizer", 
        dose: "1080 mg", 
        freq: "TID", 
        indication: "Prevention", 
        rationale: "Citrate inhibits crystal aggregation; essential for Uric acid/CaOx stone prevention." 
      }
    ],

    lifestyle: ["Fluid intake > 3L/day (Target urine output > 2.5L).", "Limit salt intake."],
    
    diet: {
      eat: ["Lemonade/Citrus juices (Citrate)", "Horse Gram (Kulthi Dal) - Traditional remedy", "Calcium rich foods (Curd/Milk)"],
      avoid: ["High Oxalate (Spinach/Palak, Chocolate, Nuts)", "Animal protein (Increases uric acid)", "High Sodium"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "NCCT KUB", result: "7mm Calculus", notes: "Distal Ureter" },
      { name: "Urine pH", result: "5.0", notes: "Acidic (Risk for Uric acid/CaOx)" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Diclofenac 75mg", "Cap. Tamsulosin 0.4mg", "IV Fluids"] }
    ]
  },

  "Hemophilia A/B": {
    category: "Hematology",
    pathophysiology: "X-linked recessive bleeding disorder caused by deficiency of Factor VIII (Hemophilia A) or Factor IX (Hemophilia B), disrupting the intrinsic coagulation pathway.",
    
    clinicalFeatures: {
      symptoms: ["Spontaneous bleeding", "Joint pain/swelling", "Deep bruising"],
      signs: ["Hemarthrosis (Target joints: Knee/Ankle/Elbow)", "Muscle hematomas", "Prolonged bleeding post-trauma"]
    },

    diagnosticWorkup: [
      { test: "APTT", finding: "Prolonged", significance: "Intrinsic pathway defect" },
      { test: "Factor Assay", finding: "Low VIII or IX levels", significance: "Diagnostic & Severity Grading (<1% = Severe)" },
      { test: "PT/INR", finding: "Normal", significance: "Extrinsic pathway intact" }
    ],

    clinicalPearls: [
      { pearl: "Mixing Study.", explanation: "APTT corrects upon mixing with normal plasma, distinguishing factor deficiency from inhibitors." },
      { pearl: "Target Joint.", explanation: "Recurrent bleeding into the same joint leads to chronic synovitis and hemophilic arthropathy." }
    ],
    
    redFlags: ["Head Injury (Intracranial Bleed)", "Neck swelling (Airway compromise)", "Retroperitoneal Bleed", "Acute Abdomen"],
    differentials: ["Von Willebrand Disease", "Vitamin K Deficiency", "Liver Disease"],

    managementRationale: [
      { 
        drug: "Factor VIII / IX Concentrate", 
        class: "Clotting Factor", 
        dose: "20-50 IU/kg", 
        freq: "Stat / Prophylaxis", 
        indication: "Active Bleed / Prevention", 
        rationale: "Direct replacement. Dose depends on severity of bleed and desired % rise." 
      },
      { 
        drug: "Tranexamic Acid", 
        class: "Antifibrinolytic", 
        dose: "1 g", 
        freq: "TID", 
        indication: "Mucosal Bleeds", 
        rationale: "Stabilizes the clot; useful for dental bleeds or epistaxis." 
      },
      { 
        drug: "Desmopressin", 
        class: "Vasopressin Analog", 
        dose: "0.3 mcg/kg", 
        freq: "SC/IV", 
        indication: "Mild Hemophilia A", 
        rationale: "Releases stored Factor VIII from endothelial cells." 
      }
    ],

    lifestyle: ["Avoid contact sports.", "Good oral hygiene (Prevent dental procedures).", "RICE therapy for acute bleeds."],
    
    diet: {
      eat: ["Iron rich foods (Spinach, Jaggery) to combat chronic blood loss", "Healthy weight maintenance (protect joints)"],
      avoid: ["Aspirin/NSAIDs (Platelet inhibition worsens bleeding)", "Herbal supplements affecting clotting (Gingko, Garlic supplements)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "APTT", result: "70 sec", notes: "Prolonged" },
      { name: "Factor VIII Activity", result: "2%", notes: "Moderate Hemophilia A" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Factor VIII 1500 IU", "Tab. Tranexamic Acid 500mg TID"] }
    ]
  },

  "Bacterial Meningitis": {
    category: "Infectious Disease / Neurology",
    pathophysiology: "Bacterial invasion of the subarachnoid space (S. pneumoniae, N. meningitidis) causing inflammation of the meninges, cerebral edema, and increased intracranial pressure.",
    
    clinicalFeatures: {
      symptoms: ["High Fever", "Severe Headache", "Photophobia", "Vomiting (Projectile)"],
      signs: ["Nuchal Rigidity (Neck stiffness)", "Kernig's Sign", "Brudzinski's Sign", "Petechial rash (Meningococcal)"]
    },

    diagnosticWorkup: [
      { test: "Lumbar Puncture (CSF)", finding: "High Protein, Low Glucose, Neutrophilic Pleocytosis", significance: "Gold Standard (unless ICP elevated)" },
      { test: "Blood Culture", finding: "Positive", significance: "Identify organism if LP delayed" },
      { test: "CT Brain", finding: "Normal or Edema", significance: "Rule out mass effect before LP" }
    ],

    clinicalPearls: [
      { pearl: "Steroids First.", explanation: "Dexamethasone must be given BEFORE or WITH the first dose of antibiotic to reduce hearing loss and neurological sequelae." },
      { pearl: "Chemoprophylaxis.", explanation: "Close contacts of Meningococcal meningitis require Rifampicin or Ciprofloxacin prophylaxis." }
    ],
    
    redFlags: ["Papilledema (Raised ICP)", "Focal Deficits", "Seizures", "Purpura Fulminans (DIC)"],
    differentials: ["Viral Meningitis (Normal glucose)", "Tuberculous Meningitis", "Subarachnoid Hemorrhage", "Encephalitis"],

    managementRationale: [
      { 
        drug: "Ceftriaxone", 
        class: "Cephalosporin (3rd Gen)", 
        dose: "2 g", 
        freq: "IV BD", 
        indication: "Empiric Therapy", 
        rationale: "Excellent CSF penetration; covers Pneumococcus and Meningococcus." 
      },
      { 
        drug: "Vancomycin", 
        class: "Glycopeptide", 
        dose: "15-20 mg/kg", 
        freq: "IV BD/TID", 
        indication: "Empiric Therapy", 
        rationale: "Added for resistant Pneumococcus (DRSP)." 
      },
      { 
        drug: "Dexamethasone", 
        class: "Corticosteroid", 
        dose: "10 mg", 
        freq: "IV Q6H x 4 days", 
        indication: "Adjunct", 
        rationale: "Dampens inflammatory response to bacterial lysis." 
      }
    ],

    lifestyle: ["Isolation (Droplet precautions) for 24h.", "Vaccination (Pneumococcal/Meningococcal/Hib)."],
    
    diet: {
      eat: ["Supportive fluids", "High calorie feeds (NG if comatose)"],
      avoid: ["N/A"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "22,000 /cmm", plt: "150,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "22,000 /cmm", plt: "150,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "CSF Glucose", result: "20 mg/dL", notes: "Very Low (<40% of serum)" },
      { name: "CSF Protein", result: "200 mg/dL", notes: "High" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Dexamethasone 10mg", "Inj. Ceftriaxone 2g", "Inj. Vancomycin 1g"] }
    ]
  },

  "Myasthenia Gravis": {
    category: "Neurology",
    pathophysiology: "Autoimmune disorder where antibodies attack Acetylcholine Receptors (AChR) at the neuromuscular junction, leading to fatigable muscle weakness.",
    
    clinicalFeatures: {
      symptoms: ["Diplopia (Double vision)", "Ptosis (Drooping eyelid)", "Dysphagia", "Fatigue worsening by evening"],
      signs: ["Positive Ice Pack Test", "Curtain Sign", "Normal sensation/reflexes"]
    },

    diagnosticWorkup: [
      { test: "AChR Antibodies", finding: "Positive", significance: "Highly specific Serology" },
      { test: "RNS (Repetitive Nerve Stimulation)", finding: "Decremental response (>10%)", significance: "Electrophysiological hallmark" },
      { test: "CT Chest", finding: "Thymoma", significance: "Screening for Thymic hyperplasia/tumor" }
    ],

    clinicalPearls: [
      { pearl: "Fatigability.", explanation: "Weakness worsens with repetitive use and improves with rest. Ocular muscles are often involved first." },
      { pearl: "Cholinergic Crisis.", explanation: "Excess Pyridostigmine can cause weakness + SLUDGE symptoms; distinguish from Myasthenic crisis (insufficient drug)." }
    ],
    
    redFlags: ["Myasthenic Crisis (Respiratory Failure)", "Aspiration Pneumonia", "Inability to hold neck up"],
    differentials: ["Lambert-Eaton Syndrome", "Botulism", "Guillain-Barre Syndrome", "Mitochondrial Myopathy"],

    managementRationale: [
      { 
        drug: "Pyridostigmine", 
        class: "AChE Inhibitor", 
        dose: "60 mg", 
        freq: "TID/QID", 
        indication: "Symptomatic", 
        rationale: "Prolongs ACh presence in synaptic cleft to improve transmission." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "Start low, titrate up", 
        freq: "OD", 
        indication: "Immunosuppression", 
        rationale: "Reduces antibody production. Start low to avoid initial transient worsening." 
      },
      { 
        drug: "Azathioprine", 
        class: "Immunomodulator", 
        dose: "2-3 mg/kg", 
        freq: "OD", 
        indication: "Steroid Sparing", 
        rationale: "Long term maintenance." 
      }
    ],

    lifestyle: ["Plan activities for morning (peak energy).", "Avoid hot baths (worsens weakness).", "Avoid drugs like Aminoglycosides/Fluoroquinolones."],
    
    diet: {
      eat: ["Small frequent meals (chewing fatigue)", "Soft diet/Khichdi (if dysphagia present)"],
      avoid: ["Hard/Chewy foods", "Heavy meals before activity"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "AChR Antibody", result: "Positive", notes: "Diagnostic" },
      { name: "CT Chest", result: "Thymic Hyperplasia", notes: "Surgical candidate" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Pyridostigmine 60mg QID", "Tab. Prednisolone 10mg"] }
    ]
  },

  "Leukemia (ALL/AML)": {
    category: "Oncology / Hematology",
    pathophysiology: "Malignant clonal proliferation of hematopoietic precursor cells (Blasts) in the bone marrow, causing marrow failure (Anemia, Thrombocytopenia, Neutropenia) and organ infiltration.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue", "Bone pain", "Bleeding gums/Epistaxis", "Fever/Infections"],
      signs: ["Pallor", "Petechiae/Ecchymoses", "Hepatosplenomegaly", "Gum hypertrophy (AML M4/M5)"]
    },

    diagnosticWorkup: [
      { test: "Bone Marrow Aspiration", finding: "> 20% Blasts", significance: "Gold Standard Diagnosis" },
      { test: "Flow Cytometry", finding: "CD markers (CD33/CD13 for AML; CD10/CD19 for ALL)", significance: "Lineage Confirmation" },
      { test: "Cytogenetics", finding: "t(15;17) or Philadelphia chromosome", significance: "Prognostic and Therapeutic guide" }
    ],

    clinicalPearls: [
      { pearl: "Leukostasis.", explanation: "WBC > 100,000 can sludge in capillaries causing stroke or pulmonary distress; medical emergency." },
      { pearl: "Tumor Lysis Syndrome.", explanation: "Rapid cell death releases Uric Acid, K+, PO4; requires hydration and Allopurinol/Rasburicase." }
    ],
    
    redFlags: ["Neutropenic Sepsis (Fever > 100.4)", "Active Bleeding (DIC risk in APML)", "Respiratory Distress"],
    differentials: ["Aplastic Anemia", "Infectious Mononucleosis", "Immune Thrombocytopenia (ITP)", "Lymphoma"],

    managementRationale: [
      { 
        drug: "Cytarabine (Ara-C)", 
        class: "Antimetabolite", 
        dose: "100-200 mg/m2", 
        freq: "Continuous IV x 7d", 
        indication: "AML Induction (7+3)", 
        rationale: "Inhibits DNA polymerase." 
      },
      { 
        drug: "Daunorubicin", 
        class: "Anthracycline", 
        dose: "60-90 mg/m2", 
        freq: "IV x 3d", 
        indication: "AML Induction (7+3)", 
        rationale: "Intercalates DNA. Cardiotoxic risk." 
      },
      { 
        drug: "Vincristine", 
        class: "Vinca Alkaloid", 
        dose: "1.4 mg/m2", 
        freq: "Weekly", 
        indication: "ALL Induction", 
        rationale: "Microtubule inhibitor. Neuropathy risk." 
      }
    ],

    lifestyle: ["Neutropenic precautions (Masks, no flowers/plants).", "Central line care.", "Avoid crowded places."],
    
    diet: {
      eat: ["Cooked food ONLY (Neutropenic diet)", "Pasteurized dairy", "Peeled fruits (Banana/Orange)"],
      avoid: ["Raw salads/sprouts (Bacterial risk)", "Street food", "Raw eggs/meat", "Unwashed fruits"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "7.0 g/dL", wbc: "45,000 /cmm (Blasts)", plt: "20,000 /cmm", hct: "21%" },
      progression: [{ day: 1, hb: "7.0 g/dL", wbc: "45,000 /cmm", plt: "20,000 /cmm", hct: "21%" }]
    },
    specialTests: [
      { name: "Peripheral Smear", result: "30% Blasts", notes: "Auer rods seen (AML)" },
      { name: "Flow Cytometry", result: "MPO Positive", notes: "Myeloid lineage" }
    ],
    treatment: [
      { day: 1, meds: ["Induction Chemotherapy", "Allopurinol", "Broad Spectrum Antibiotics"] }
    ]
  },
  "Paracetamol Toxicity": {
    category: "Toxicology",
    pathophysiology: "Overdose saturates glucuronidation pathways, shunting metabolism to CYP450 which produces toxic NAPQI. NAPQI depletes glutathione stores, causing direct hepatocellular necrosis.",
    
    clinicalFeatures: {
      symptoms: ["Nausea/Vomiting (Phase 1)", "RUQ Pain (Phase 2)", "Confusion (Phase 3 - Encephalopathy)"],
      signs: ["Jaundice", "Hepatomegaly", "Coagulopathy (Bleeding)", "Asterixis"]
    },

    diagnosticWorkup: [
      { test: "Serum Paracetamol Level", finding: "Plot on Rumack-Matthew Nomogram", significance: "Determines need for NAC (valid 4-24h post-ingestion)" },
      { test: "LFT", finding: "AST/ALT > 1000 IU/L", significance: "Hepatocellular injury (peaks at 72-96h)" },
      { test: "INR", finding: "Prolonged", significance: "Best marker of synthetic liver failure" }
    ],

    clinicalPearls: [
      { pearl: "The 4-Hour Rule.", explanation: "Paracetamol levels drawn before 4 hours post-ingestion are unreliable for the Nomogram due to ongoing absorption." },
      { pearl: "NAC Efficacy.", explanation: "Nearly 100% effective in preventing liver damage if given within 8 hours. Efficacy drops significantly after." }
    ],
    
    redFlags: ["King's College Criteria (pH < 7.3)", "INR > 6.5", "Creatinine > 3.4 mg/dL", "Encephalopathy Grade III/IV"],
    differentials: ["Viral Hepatitis", "Mushroom Poisoning", "Alcoholic Hepatitis", "Ischemic Hepatitis"],

    managementRationale: [
      { 
        drug: "N-Acetylcysteine (NAC)", 
        class: "Antidote", 
        dose: "150 mg/kg Load -> 50 -> 100", 
        freq: "IV Protocol (21h)", 
        indication: "Toxic Levels / Hepatic Injury", 
        rationale: "Replenishes Glutathione stores to detoxify NAPQI. Life-saving." 
      },
      { 
        drug: "Activated Charcoal", 
        class: "Adsorbent", 
        dose: "1 g/kg", 
        freq: "Stat", 
        indication: "Ingestion < 1-2 hours", 
        rationale: "Binds drug in gut preventing absorption. Separate from oral NAC by 2h." 
      }
    ],

    lifestyle: ["Suicide risk assessment (Psychiatry referral).", "Avoid alcohol during recovery.", "Check other meds for hidden acetaminophen."],
    
    diet: {
      eat: ["High Calorie (Glucose) - prevents catabolism", "Low protein (if encephalopathic)"],
      avoid: ["Fasting (Depletes glutathione)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "APAP Level", result: "200 mcg/mL (at 4h)", notes: "Above treatment line" },
      { name: "INR", result: "2.5", notes: "Coagulopathy" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. N-Acetylcysteine Infusion", "Dextrose Support"] }
    ]
  },

  "Chlamydia Infection": {
    category: "Infectious Disease (STI)",
    pathophysiology: "Sexually transmitted infection by Chlamydia trachomatis (obligate intracellular bacterium). Infects columnar epithelium causing urethritis, cervicitis, and potentially PID or infertility.",
    
    clinicalFeatures: {
      symptoms: ["Dysuria", "Mucoid discharge (Watery/Cloudy)", "Post-coital bleeding", "Lower abdominal pain"],
      signs: ["Cervical motion tenderness", "Adnexal tenderness", "Friable cervix"]
    },

    diagnosticWorkup: [
      { test: "NAAT (PCR)", finding: "Positive for C. trachomatis", significance: "Gold Standard (Urine/Vaginal Swab)" },
      { test: "Wet Mount", finding: "WBCs > 10/hpf", significance: "Suggests inflammation (Nonspecific)" },
      { test: "Urinalysis", finding: "Pyuria with Negative Culture", significance: "Sterile Pyuria suggests Chlamydia" }
    ],

    clinicalPearls: [
      { pearl: "Silent Epidemic.", explanation: "Most women (70%) and many men (50%) are asymptomatic, leading to high transmission rates and silent PID." },
      { pearl: "Reiter's Triad.", explanation: "Can trigger Reactive Arthritis: Urethritis + Arthritis + Conjunctivitis ('Can't see, can't pee, can't climb a tree')." }
    ],
    
    redFlags: ["Pelvic Inflammatory Disease (Fever/Pain)", "Fitz-Hugh-Curtis Syndrome (Perihepatitis)", "Tubal Infertility", "Ectopic Pregnancy risk"],
    differentials: ["Gonorrhea", "Trichomoniasis", "Bacterial Vaginosis", "UTI"],

    managementRationale: [
      { 
        drug: "Doxycycline", 
        class: "Tetracycline", 
        dose: "100 mg", 
        freq: "BD x 7 days", 
        indication: "First-line Treatment", 
        rationale: "Superior efficacy for rectal/urogenital infection compared to Azithromycin." 
      },
      { 
        drug: "Azithromycin", 
        class: "Macrolide", 
        dose: "1 g", 
        freq: "Stat (Single dose)", 
        indication: "Pregnancy / Poor Adherence", 
        rationale: "Safe in pregnancy; convenient but slightly lower cure rates." 
      }
    ],

    lifestyle: ["Partner treatment (Expedited Partner Therapy).", "Abstinence for 7 days.", "Retesting in 3 months."],
    
    diet: {
      eat: ["Probiotics (Yogurt) if on antibiotics"],
      avoid: ["Dairy/Calcium with Doxycycline (Decreases absorption)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "NAAT", result: "Positive Chlamydia", notes: "Negative Gonorrhea" },
      { name: "Pregnancy Test", result: "Negative", notes: "Rule out Ectopic" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Doxycycline 100mg BD x 7d", "Partner Treatment"] }
    ]
  },

  "Spondylitis": {
    category: "Musculoskeletal",
    pathophysiology: "Degenerative changes in the spine (Cervical/Lumbar Spondylosis) involving disc dehydration, osteophyte formation, and ligament hypertrophy causing neural compression. (Distinguish from Ankylosing Spondylitis).",
    
    clinicalFeatures: {
      symptoms: ["Neck/Back pain radiating to arm/leg (Radiculopathy)", "Stiffness", "Numbness/Tingling", "Vertigo (Cervical)"],
      signs: ["Restricted Range of Motion", "Positive Spurling's Test", "Muscle spasm", "Reflex changes"]
    },

    diagnosticWorkup: [
      { test: "MRI Spine", finding: "Disc herniation / Canal stenosis", significance: "Gold Standard for nerve compression" },
      { test: "X-ray Spine", finding: "Osteophytes / Loss of lordosis", significance: "Initial screening" },
      { test: "EMG/NCS", finding: "Radiculopathy pattern", significance: "Assesses nerve function" }
    ],

    clinicalPearls: [
      { pearl: "Red Flag Myelopathy.", explanation: "Signs of cord compression: Gait ataxia, hyperreflexia, Babinski sign, or loss of bowel/bladder control require urgent MRI." },
      { pearl: "Text Neck.", explanation: "Flexed posture significantly increases load on the cervical spine, accelerating degeneration in young adults." }
    ],
    
    redFlags: ["Cauda Equina Syndrome", "Progressive motor deficit", "History of Cancer (Metastasis)", "Trauma"],
    differentials: ["Ankylosing Spondylitis", "Trapezius Myalgia", "Rotator Cuff Injury", "Carpal Tunnel Syndrome"],

    managementRationale: [
      { 
        drug: "Naproxen", 
        class: "NSAID", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Pain/Inflammation", 
        rationale: "Reduces prostaglandin-mediated inflammation and pain." 
      },
      { 
        drug: "Tizanidine", 
        class: "Muscle Relaxant", 
        dose: "2 mg", 
        freq: "HS/BD", 
        indication: "Muscle Spasm", 
        rationale: "Central alpha-2 agonist reduces spasticity associated with spondylosis." 
      },
      { 
        drug: "Pregabalin", 
        class: "Gabapentinoid", 
        dose: "75 mg", 
        freq: "BD", 
        indication: "Radicular Pain", 
        rationale: "Stabilizes nerve membranes to treat shooting/burning nerve pain." 
      }
    ],

    lifestyle: ["Ergonomic correction (Computer screen at eye level).", "Neck isometric exercises.", "Avoid heavy lifting."],
    
    diet: {
      eat: ["Calcium/Vit D (Bone health)", "Anti-inflammatory foods (Ginger/Turmeric)", "Protein for muscle repair"],
      avoid: ["Sour foods (Ayurvedic belief - controversial but often avoided by patients)", "Processed foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "MRI Cervical Spine", result: "C5-C6 Disc Bulge", notes: "Thecal sac indentation" },
      { name: "Vitamin D", result: "15 ng/mL", notes: "Insufficient" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Naproxen 500mg BD", "Tab. Pregabalin 75mg HS", "Physiotherapy"] }
    ]
  },

  "Melanoma": {
    category: "Oncology / Dermatology",
    pathophysiology: "Malignant tumor of melanocytes, often driven by UV radiation induced DNA damage (BRAF mutations) leading to uncontrolled proliferation and metastasis.",
    
    clinicalFeatures: {
      symptoms: ["Changing mole", "Itching/Bleeding lesion", "New pigmented lesion"],
      signs: ["ABCDE: Asymmetry, Border irreg, Color var, Diameter >6mm, Evolving", "Ugly Duckling Sign"]
    },

    diagnosticWorkup: [
      { test: "Excisional Biopsy", finding: "Melanoma (Breslow depth)", significance: "Gold Standard Diagnosis & Staging" },
      { test: "Sentinel Lymph Node Biopsy", finding: "Micrometastasis", significance: "Staging for local spread" },
      { test: "BRAF Mutation Analysis", finding: "V600E Mutation", significance: "Guide for targeted therapy" }
    ],

    clinicalPearls: [
      { pearl: "Breslow Depth.", explanation: "The single most important prognostic factor. Depth < 1mm has excellent survival; > 4mm has poor prognosis." },
      { pearl: "Acral Lentiginous.", explanation: "Subtype common in Asians/Dark skin, appearing on palms, soles, or under nails (Bob Marley's cause of death)." }
    ],
    
    redFlags: ["Satellite nodules", "Palpable lymph nodes", "Neurological symptoms (Brain mets)", "Rapid growth"],
    differentials: ["Seborrheic Keratosis", "Dysplastic Nevus", "Pigmented Basal Cell Carcinoma", "Subungual Hematoma"],

    managementRationale: [
      { 
        drug: "Pembrolizumab", 
        class: "Immune Checkpoint Inhibitor (PD-1)", 
        dose: "200 mg", 
        freq: "IV q3 weeks", 
        indication: "Metastatic / Adjuvant", 
        rationale: "Unleashes T-cells to attack cancer cells. Standard of care." 
      },
      { 
        drug: "Dabrafenib + Trametinib", 
        class: "Targeted Therapy (BRAF/MEK)", 
        dose: "Oral regimen", 
        freq: "Daily", 
        indication: "BRAF V600E Positive", 
        rationale: "Blocks the MAPK pathway. Rapid response but resistance develops." 
      }
    ],

    lifestyle: ["Sun protection (SPF > 50).", "Regular skin self-exam.", "Avoid tanning beds."],
    
    diet: {
      eat: ["High antioxidant diet (Green Tea, Berries)", "Coffee (some protective evidence)"],
      avoid: ["Pro-inflammatory foods", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Biopsy", result: "Malignant Melanoma", notes: "Breslow 2.5mm" },
      { name: "BRAF", result: "V600E Detected", notes: "Targetable" }
    ],
    treatment: [
      { day: 1, meds: ["Surgical Wide Excision", "Immunotherapy Eval"] }
    ]
  },

  "Hyperkalemia": {
    category: "Electrolyte Disorder",
    pathophysiology: "Serum Potassium > 5.5 mEq/L due to decreased excretion (CKD, Drugs) or transcellular shift (Acidosis, Cell lysis). High K+ lowers resting membrane potential, causing cardiac instability.",
    
    clinicalFeatures: {
      symptoms: ["Palpitations", "Muscle weakness", "Paresthesia", "Nausea"],
      signs: ["Arrhythmia (Bradycardia)", "Flaccid paralysis", "Decreased tendon reflexes"]
    },

    diagnosticWorkup: [
      { test: "Serum Potassium", finding: "> 5.5 mEq/L", significance: "Diagnostic" },
      { test: "ECG", finding: "Tall Peaked T waves / Wide QRS", significance: "Urgency Indicator (Membrane instability)" },
      { test: "Creatinine / ABG", finding: "Renal Failure / Acidosis", significance: "Etiology check" }
    ],

    clinicalPearls: [
      { pearl: "Pseudohyperkalemia.", explanation: "Hemolysis during blood draw or prolonged tourniquet time can falsely elevate K+. Repeat sample if ECG is normal." },
      { pearl: "Calcium doesn't lower K+.", explanation: "Calcium Gluconate stabilizes the heart membrane but has NO effect on serum potassium levels." }
    ],
    
    redFlags: ["ECG Changes (Sine Wave)", "K+ > 6.5 mEq/L", "Muscle paralysis", "Digoxin toxicity co-existence"],
    differentials: ["Pseudohyperkalemia", "Tumor Lysis Syndrome", "Rhabdomyolysis", "Adrenal Insufficiency"],

    managementRationale: [
      { 
        drug: "Calcium Gluconate", 
        class: "Membrane Stabilizer", 
        dose: "10 ml (10%)", 
        freq: "IV Stat", 
        indication: "ECG Changes", 
        rationale: "Antagonizes membrane effect of K+ to prevent arrhythmia. Effect lasts 30-60 min." 
      },
      { 
        drug: "Insulin + Dextrose", 
        class: "Shifter", 
        dose: "10U Regular + 50ml D50", 
        freq: "IV Stat", 
        indication: "Lower K+", 
        rationale: "Insulin drives K+ into cells via Na-K ATPase. Dextrose prevents hypoglycemia." 
      },
      { 
        drug: "Salbutamol", 
        class: "Beta-2 Agonist", 
        dose: "10-20 mg Nebulization", 
        freq: "Stat", 
        indication: "Adjunct Shift", 
        rationale: "Stimulates Na-K pump. Dose is 4-8x higher than asthma dose." 
      }
    ],

    lifestyle: ["Review medication list (Stop ACEi/ARBs/Spironolactone).", "Avoid fasting (Insulin deficiency)."],
    
    diet: {
      eat: ["Low Potassium fruits (Apple, Pear, Guava)", "Leached vegetables", "White Rice"],
      avoid: ["High Potassium (Coconut Water, Banana, Citrus, Mango)", "Salt substitutes (contain KCl)", "Chocolate"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "8,000 /cmm", plt: "200,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "Potassium", result: "6.8 mEq/L", notes: "Critical High" },
      { name: "ECG", result: "Peaked T waves", notes: "Cardiotoxicity" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Calcium Gluconate IV", "Inj. Insulin 10U + Dextrose", "Neb. Salbutamol"] }
    ]
  },
  "Cardiac Arrhythmias (Atrial Fibrillation)": {
    category: "Cardiovascular",
    pathophysiology: "Disorganized electrical activity in the atria (often originating from pulmonary veins) leads to loss of atrial kick and an irregularly irregular ventricular response, risking thrombus formation in the left atrial appendage.",
    
    clinicalFeatures: {
      symptoms: ["Palpitations", "Fatigue", "Shortness of breath", "Dizziness"],
      signs: ["Irregularly irregular pulse", "Pulse deficit (Apical > Radial)", "Variable S1 intensity"]
    },

    diagnosticWorkup: [
      { test: "ECG", finding: "Absent P waves + Irregular QRS complexes", significance: "Diagnostic Hallmark" },
      { test: "Echocardiography", finding: "LA Enlargement / Thrombus", significance: "Stroke risk assessment / Structural cause" },
      { test: "Thyroid Profile", finding: "Low TSH", significance: "Rule out Thyrotoxicosis as cause" }
    ],

    clinicalPearls: [
      { pearl: "CHADS2-VASc Score.", explanation: "Determines need for anticoagulation. Score ≥2 in men or ≥3 in women mandates chronic anticoagulation." },
      { pearl: "Holiday Heart Syndrome.", explanation: "Binge alcohol consumption is a common trigger for acute AFib in otherwise healthy individuals." }
    ],
    
    redFlags: ["Hemodynamic Instability (Shock)", "Stroke (TIA/CVA)", "Heart Failure (Tachycardia-induced cardiomyopathy)", "Chest Pain"],
    differentials: ["Multifocal Atrial Tachycardia (MAT)", "Atrial Flutter", "Premature Atrial Contractions (PACs)", "Sinus Tachycardia"],

    managementRationale: [
      { 
        drug: "Metoprolol", 
        class: "Beta Blocker", 
        dose: "25-50 mg", 
        freq: "BD", 
        indication: "Rate Control", 
        rationale: "Slows AV node conduction to keep heart rate <110 bpm." 
      },
      { 
        drug: "Apixaban", 
        class: "DOAC (Factor Xa Inhibitor)", 
        dose: "5 mg", 
        freq: "BD", 
        indication: "Stroke Prevention", 
        rationale: "Prevents thromboembolism without need for INR monitoring (unlike Warfarin)." 
      },
      { 
        drug: "Amiodarone", 
        class: "Antiarrhythmic (Class III)", 
        dose: "200 mg", 
        freq: "OD (after loading)", 
        indication: "Rhythm Control", 
        rationale: "Maintains sinus rhythm in symptomatic patients or heart failure." 
      }
    ],

    lifestyle: ["Limit Caffeine/Alcohol.", "Weight loss (Obesity is a strong risk factor).", "Sleep Apnea treatment (CPAP)."],
    
    diet: {
      eat: ["Magnesium rich foods", "If on Warfarin: Consistent Vitamin K intake (Spinach/Methi)"],
      avoid: ["Binge drinking", "Energy drinks", "Herbal supplements (St John's Wort affects drugs)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "ECG", result: "A-Fib @ 130 bpm", notes: "RVR present" },
      { name: "INR", result: "1.1", notes: "Baseline" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Metoprolol 25mg BD", "Tab. Apixaban 5mg BD"] }
    ]
  },

  "Decompression Sickness (The Bends)": {
    category: "Emergency / Environmental",
    pathophysiology: "Rapid decrease in ambient pressure (e.g., surfacing too fast from a dive) causes dissolved nitrogen in blood/tissues to come out of solution and form bubbles (Henry's Law), causing mechanical obstruction and inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Joint pain ('The Bends')", "Dizziness/Vertigo ('The Staggers')", "Dyspnea ('The Chokes')", "Skin rash"],
      signs: ["Mottled skin (Cutis Marmorata)", "Focal neurological deficits", "Confusion"]
    },

    diagnosticWorkup: [
      { test: "Clinical History", finding: "Recent dive/Rapid ascent", significance: "Primary Diagnosis" },
      { test: "Chest X-ray", finding: "Pneumothorax / Pulmonary Edema", significance: "Rule out Barotrauma" },
      { test: "MRI Brain/Spine", finding: "Ischemic lesions (bubbles)", significance: "If CNS involvement suspected" }
    ],

    clinicalPearls: [
      { pearl: "Flying after Diving.", explanation: "Air travel too soon (<12-24h) after diving can trigger DCS due to lower cabin pressure." },
      { pearl: "Type I vs Type II.", explanation: "Type I is mild (Joints/Skin); Type II is severe (Neuro/Respiratory). Type II requires urgent HBO." }
    ],
    
    redFlags: ["Paralysis/Paresthesia (Spinal hit)", "Hemoptysis", "Loss of consciousness", "Shock"],
    differentials: ["Air Gas Embolism (AGE)", "Muscle Strain", "Inner Ear Barotrauma", "Nitrogen Narcosis"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "100%", 
        freq: "Continuous", 
        indication: "First Aid", 
        rationale: "Washes out nitrogen by creating a steep diffusion gradient." 
      },
      { 
        drug: "Hyperbaric Oxygen Therapy (HBOT)", 
        class: "Recompression", 
        dose: "US Navy Table 6", 
        freq: "Session", 
        indication: "Definitive Treatment", 
        rationale: "Compresses bubbles (Boyles Law) and forces nitrogen back into solution." 
      },
      { 
        drug: "IV Fluids (Crystalloids)", 
        class: "Supportive", 
        dose: "Bolus + Maintenance", 
        freq: "Continuous", 
        indication: "Dehydration", 
        rationale: "Maintains perfusion; DCS causes hemoconcentration and capillary leak." 
      }
    ],

    lifestyle: ["Dive safety rules (Ascent rate <30ft/min).", "Safety stops.", "Hydration pre-dive."],
    
    diet: {
      eat: ["Hydration (Water/ORS)"],
      avoid: ["Alcohol (Dehydrating)", "Carbonated drinks (Gas expansion - minor concern)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "15.0 g/dL", wbc: "10,000 /cmm", plt: "200,000 /cmm", hct: "45%" },
      progression: [{ day: 1, hb: "15.0 g/dL", wbc: "10,000 /cmm", plt: "200,000 /cmm", hct: "45%" }]
    },
    specialTests: [
      { name: "SpO2", result: "94% on RA", notes: "Mild hypoxia" },
      { name: "Neuro Exam", result: "Left leg weakness", notes: "Spinal DCS" }
    ],
    treatment: [
      { day: 1, meds: ["100% O2", "Transport to Hyperbaric Chamber"] }
    ]
  },

  "Generalized Anxiety Disorder": {
    category: "Psychiatry",
    pathophysiology: "Chronic, excessive, uncontrollable worry involving dysregulation of GABA (inhibitory) and Serotonin/Norepinephrine systems, alongside Amygdala hyperactivity.",
    
    clinicalFeatures: {
      symptoms: ["Free-floating anxiety", "Muscle tension", "Restlessness", "Sleep disturbance"],
      signs: ["Tachycardia", "Tremors", "Sweaty palms", "Fatigue"]
    },

    diagnosticWorkup: [
      { test: "GAD-7 Scale", finding: "Score > 10", significance: "Screening & Monitoring tool" },
      { test: "Thyroid Function Test", finding: "Normal", significance: "Rule out Hyperthyroidism" },
      { test: "ECG", finding: "Sinus Tachycardia", significance: "Rule out Arrhythmia" }
    ],

    clinicalPearls: [
      { pearl: "Somatic Symptoms.", explanation: "Patients often present to GP with headache, GI upset, or chest pain rather than 'worry'." },
      { pearl: "Benzodiazepine Trap.", explanation: "Highly effective acutely but high abuse potential/tolerance. Use only for short-term bridging (2-4 weeks)." }
    ],
    
    redFlags: ["Suicidal Ideation", "Panic Attacks", "Substance Abuse", "Social Withdrawal"],
    differentials: ["Panic Disorder", "Hyperthyroidism", "Pheochromocytoma", "Adjustment Disorder"],

    managementRationale: [
      { 
        drug: "Escitalopram", 
        class: "SSRI", 
        dose: "10-20 mg", 
        freq: "OD", 
        indication: "First-line", 
        rationale: "Increases serotonin availability; better tolerability than TCAs." 
      },
      { 
        drug: "Buspirone", 
        class: "Anxiolytic (Non-benzo)", 
        dose: "5-10 mg", 
        freq: "TID", 
        indication: "Chronic Anxiety", 
        rationale: "5-HT1A partial agonist; no sedation or addiction risk." 
      },
      { 
        drug: "Clonazepam", 
        class: "Benzodiazepine", 
        dose: "0.25-0.5 mg", 
        freq: "SOS / HS", 
        indication: "Acute Severe Anxiety", 
        rationale: "Rapid GABA-A modulation for immediate relief." 
      }
    ],

    lifestyle: ["CBT (Cognitive Behavioral Therapy).", "Mindfulness Meditation.", "Reduce Caffeine."],
    
    diet: {
      eat: ["Complex carbs", "Chamomile Tea", "Magnesium rich foods"],
      avoid: ["Caffeine (jitters mimic anxiety)", "Alcohol (Rebound anxiety)", "Sugary snacks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "GAD-7", result: "15/21", notes: "Severe Anxiety" },
      { name: "TSH", result: "2.0 mIU/L", notes: "Normal" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Escitalopram 10mg OD", "Tab. Clonazepam 0.25mg SOS"] }
    ]
  },

  "Acromegaly": {
    category: "Endocrine",
    pathophysiology: "Excessive secretion of Growth Hormone (GH) and IGF-1 after closure of epiphyseal plates, usually due to a pituitary adenoma. Causes somatic overgrowth and metabolic dysfunction.",
    
    clinicalFeatures: {
      symptoms: ["Increase in shoe/ring size", "Headache", "Visual disturbances", "Hyperhidrosis"],
      signs: ["Frontal bossing", "Prognathism (Jaw protrusion)", "Spade-like hands", "Macroglossia"]
    },

    diagnosticWorkup: [
      { test: "Serum IGF-1", finding: "Elevated", significance: "Best Screening Test (Stable levels)" },
      { test: "OGTT with GH", finding: "Failure to suppress GH < 1 ng/mL", significance: "Gold Standard Confirmation" },
      { test: "MRI Pituitary", finding: "Sellar Mass", significance: "Localization (Micro vs Macroadenoma)" }
    ],

    clinicalPearls: [
      { pearl: "Cardiovascular Risk.", explanation: "Main cause of mortality is cardiomyopathy and hypertension, not the tumor mass." },
      { pearl: "Colonic Polyps.", explanation: "High risk of colon cancer; screening colonoscopy required at diagnosis." }
    ],
    
    redFlags: ["Bitemporal Hemianopsia (Optic Chiasm compression)", "Severe Sleep Apnea", "Diabetes Mellitus (GH is diabetogenic)", "Heart Failure"],
    differentials: ["Gigantism (Pre-puberty)", "Pachydermoperiostosis", "Hypothyroidism (Myxedema features)"],

    managementRationale: [
      { 
        drug: "Octreotide LAR", 
        class: "Somatostatin Analog", 
        dose: "20-30 mg", 
        freq: "IM Monthly", 
        indication: "Primary Medical Therapy", 
        rationale: "Inhibits GH secretion by binding to pituitary SSTR2 receptors." 
      },
      { 
        drug: "Cabergoline", 
        class: "Dopamine Agonist", 
        dose: "0.5 mg", 
        freq: "Twice Weekly", 
        indication: "Mild disease / Adjunct", 
        rationale: "Inhibits GH (paradoxical effect in acromegaly, unlike normal physiology)." 
      },
      { 
        drug: "Pegvisomant", 
        class: "GH Receptor Antagonist", 
        dose: "10-30 mg", 
        freq: "SC Daily", 
        indication: "Resistant Cases", 
        rationale: "Blocks peripheral action of GH; normalizes IGF-1 but does not shrink tumor." 
      }
    ],

    lifestyle: ["Sleep study (Apnea check).", "Regular dental checkups (Jaw spacing).", "Diabetes management."],
    
    diet: {
      eat: ["Low Glycemic Index foods (Diabetes prevention)", "Ragi/Jowar"],
      avoid: ["Simple sugars (worsens insulin resistance)", "High sodium"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "IGF-1", result: "800 ng/mL", notes: "Elevated" },
      { name: "GH Post-Glucose", result: "15 ng/mL", notes: "Non-suppressed" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Octreotide LAR 20mg", "Surgical Referral"] }
    ]
  },

  "Hepatitis C": {
    category: "Infectious Disease (Hepatology)",
    pathophysiology: "Chronic liver infection by Hepatitis C Virus (RNA Flavivirus). High mutation rate allows immune evasion, leading to chronic inflammation, fibrosis, cirrhosis, and HCC.",
    
    clinicalFeatures: {
      symptoms: ["Usually Asymptomatic ('Silent Killer')", "Fatigue", "Arthralgia", "Pruritus"],
      signs: ["Hepatomegaly", "Spider Angioma (if cirrhotic)", "Cryoglobulinemia rash (Purpura)"]
    },

    diagnosticWorkup: [
      { test: "Anti-HCV Antibody", finding: "Positive", significance: "Screening (Past or Present infection)" },
      { test: "HCV RNA (PCR)", finding: "Positive", significance: "Confirms Active Infection" },
      { test: "FibroScan", finding: "Stiffness Score (F0-F4)", significance: "Staging of fibrosis" }
    ],

    clinicalPearls: [
      { pearl: "Curable.", explanation: "Unlike HIV or Hep B, Hep C is curable with DAAs (SVR12 = Cure)." },
      { pearl: "Extrahepatic Manifestations.", explanation: "Strong association with Lichen Planus, Porphyria Cutanea Tarda, and Glomerulonephritis." }
    ],
    
    redFlags: ["Decompensated Cirrhosis (Ascites/Varices)", "HCC Nodule", "Platelets < 100k (Portal HTN)", "Cryoglobulinemic Vasculitis"],
    differentials: ["Hepatitis B", "NASH (Fatty Liver)", "Autoimmune Hepatitis", "Hemochromatosis"],

    managementRationale: [
      { 
        drug: "Sofosbuvir + Velpatasvir", 
        class: "Direct Acting Antiviral (DAA)", 
        dose: "400/100 mg", 
        freq: "OD x 12 weeks", 
        indication: "Pan-genotypic", 
        rationale: "Inhibits NS5B polymerase and NS5A protein. High cure rate (>95%)." 
      },
      { 
        drug: "Glecaprevir + Pibrentasvir", 
        class: "DAA", 
        dose: "300/120 mg", 
        freq: "3 tabs OD x 8 weeks", 
        indication: "Pan-genotypic", 
        rationale: "Alternative regimen, useful in renal failure." 
      }
    ],

    lifestyle: ["ABSOLUTE Alcohol cessation (Accelerates fibrosis).", "Vaccinate for Hep A/B.", "Avoid sharing razors/toothbrushes."],
    
    diet: {
      eat: ["Coffee (Proven to reduce fibrosis)", "Balanced diet"],
      avoid: ["Alcohol", "Raw shellfish (Vibrio risk in liver disease)", "Iron supplements (if ferritin high)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "5,000 /cmm", plt: "140,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "5,000 /cmm", plt: "140,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "HCV RNA", result: "500,000 IU/mL", notes: "Active viremia" },
      { name: "Genotype", result: "3", notes: "Common in India" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Sofosbuvir+Velpatasvir OD", "Liver Health Education"] }
    ]
  },
  "Urinary Tract Infection (UTI)": {
    category: "Urology / Infectious Disease",
    pathophysiology: "Ascending infection by uropathogens (commonly E. coli) colonizing the periurethral area and entering the bladder (Cystitis) or ascending to kidneys (Pyelonephritis).",
    
    clinicalFeatures: {
      symptoms: ["Dysuria (Burning)", "Frequency/Urgency", "Suprapubic pain", "Hematuria"],
      signs: ["Suprapubic tenderness", "Costovertebral Angle (CVA) tenderness (suggests Pyelonephritis)", "Fever (in complicated UTI)"]
    },

    diagnosticWorkup: [
      { test: "Urinalysis", finding: "Nitrites + Leukocyte Esterase", significance: "Rapid screening (Nitrites specific for Gram-negatives)" },
      { test: "Urine Culture", finding: "> 10^5 CFU/mL", significance: "Gold Standard for confirmation and sensitivity" },
      { test: "Ultrasound KUB", finding: "Hydronephrosis/Stones", significance: "Rule out complicated/obstructive causes" }
    ],

    clinicalPearls: [
      { pearl: "Honeymoon Cystitis.", explanation: "Sexual intercourse facilitates bacterial entry into the female urethra; post-coital voiding reduces risk." },
      { pearl: "Asymptomatic Bacteriuria.", explanation: "Do NOT treat positive cultures in asymptomatic patients, EXCEPT in pregnancy or pre-urologic procedures." }
    ],
    
    redFlags: ["High fever with chills (Pyelonephritis)", "Flank pain", "Recurrent UTIs in male (Prostatitis/Stricture)", "Sepsis"],
    differentials: ["Vaginitis", "Urethritis (STI)", "Interstitial Cystitis", "Nephrolithiasis"],

    managementRationale: [
      { 
        drug: "Nitrofurantoin", 
        class: "Nitrofuran", 
        dose: "100 mg", 
        freq: "BD x 5 days", 
        indication: "Uncomplicated Cystitis", 
        rationale: "Concentrates in urine; low collateral damage to gut flora. Avoid if GFR < 30." 
      },
      { 
        drug: "Fosfomycin", 
        class: "Phosphonic Acid Derivative", 
        dose: "3 g", 
        freq: "Single Sachet", 
        indication: "Uncomplicated Cystitis", 
        rationale: "Single-dose convenience improves adherence." 
      },
      { 
        drug: "Ceftriaxone", 
        class: "Cephalosporin (3rd Gen)", 
        dose: "1 g", 
        freq: "IV OD", 
        indication: "Pyelonephritis / Complicated", 
        rationale: "Broad coverage for Gram-negatives including some resistant strains." 
      }
    ],

    lifestyle: ["Hydration (>2.5L/day).", "Wipe front-to-back.", "Post-coital voiding."],
    
    diet: {
      eat: ["Barley Water (Jau ka pani - Diuretic/Alkalizer)", "Coconut Water", "Cranberry (prevention, not cure)"],
      avoid: ["Caffeine/Alcohol (Bladder irritants)", "Spicy foods", "Holding urine for long periods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "11,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "11,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Urine Routine", result: "Pus cells 20-30/hpf", notes: "Pyuria" },
      { name: "Culture", result: "E. coli", notes: "Sensitive to Nitrofurantoin" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Nitrofurantoin 100mg BD", "Urine Alkalinizer Syrup"] }
    ]
  },

  "Immune Thrombocytopenic Purpura (ITP)": {
    category: "Hematology",
    pathophysiology: "Acquired autoimmune disorder where IgG autoantibodies target platelet glycoproteins (GPIIb/IIIa), leading to platelet destruction in the spleen and impaired platelet production.",
    
    clinicalFeatures: {
      symptoms: ["Easy bruising", "Bleeding gums", "Epistaxis", "Menorrhagia"],
      signs: ["Petechiae (Pinpoint bleeds)", "Purpura / Ecchymoses", "NO Splenomegaly (Spleen is normal size)"]
    },

    diagnosticWorkup: [
      { test: "CBC", finding: "Isolated Thrombocytopenia (<100k)", significance: "Hb and WBC are typically normal" },
      { test: "Peripheral Smear", finding: "Giant Platelets", significance: "Indicates high marrow turnover (peripheral destruction)" },
      { test: "Viral Screen (HIV/HCV)", finding: "Negative", significance: "Rule out secondary causes" }
    ],

    clinicalPearls: [
      { pearl: "Diagnosis of Exclusion.", explanation: "ITP is diagnosed only after ruling out drugs, viruses, and bone marrow failure. Palpable spleen suggests diagnosis is NOT ITP." },
      { pearl: "Treat the patient, not the count.", explanation: "Treatment is generally indicated only if platelets <30k or active bleeding occurs." }
    ],
    
    redFlags: ["Wet Purpura (Blood blisters in mouth - ICH risk)", "Headache (Intracranial Hemorrhage)", "Hematuria"],
    differentials: ["TTP/HUS", "Drug-induced Thrombocytopenia", "Leukemia", "Dengue Fever"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "First-line", 
        rationale: "Suppresses antibody production and reticuloendothelial phagocytosis of platelets." 
      },
      { 
        drug: "IVIG", 
        class: "Immunoglobulin", 
        dose: "1 g/kg", 
        freq: "IV x 2 days", 
        indication: "Emergency / Pre-op", 
        rationale: "Rapidly increases count by saturating Fc receptors on macrophages (blockade)." 
      },
      { 
        drug: "Eltrombopag", 
        class: "TPO Receptor Agonist", 
        dose: "50 mg", 
        freq: "OD", 
        indication: "Chronic / Refractory", 
        rationale: "Stimulates megakaryocytes to produce more platelets." 
      }
    ],

    lifestyle: ["Avoid contact sports.", "Use soft toothbrush.", "Avoid IM injections."],
    
    diet: {
      eat: ["Papaya Leaf Extract (Traditional supportive)", "Vitamin C/K rich foods"],
      avoid: ["Aspirin/NSAIDs (Inhibits platelet function)", "Alcohol (Marrow suppression)", "Quinine containing drinks (Tonic water)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "15,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "15,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Peripheral Smear", result: "Large platelets", notes: "No clumps" },
      { name: "Bone Marrow", result: "Increased Megakaryocytes", notes: "Peripheral destruction" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 60mg OD", "Monitor for bleeding"] }
    ]
  },

  "HIV/AIDS": {
    category: "Infectious Disease",
    pathophysiology: "Infection of CD4+ T-lymphocytes by Human Immunodeficiency Virus (Retrovirus). Progressive depletion of CD4 cells leads to profound immunodeficiency and Opportunistic Infections (AIDS).",
    
    clinicalFeatures: {
      symptoms: ["Fever/Rash (Acute retroviral syndrome)", "Weight loss", "Chronic diarrhea", "Night sweats"],
      signs: ["Generalized Lymphadenopathy", "Oral Thrush (Candidiasis)", "Kaposi Sarcoma", "Hairy Leukoplakia"]
    },

    diagnosticWorkup: [
      { test: "4th Gen Ag/Ab Combo", finding: "Positive", significance: "Detects p24 Antigen (early) & Antibodies" },
      { test: "HIV Viral Load (PCR)", finding: "Detected", significance: "Confirms diagnosis and monitors therapy response" },
      { test: "CD4 Count", finding: "< 200 cells/mm3", significance: "Definition of AIDS / Risk of OIs" }
    ],

    clinicalPearls: [
      { pearl: "U = U.", explanation: "Undetectable = Untransmittable. Patients with fully suppressed viral load cannot sexually transmit the virus." },
      { pearl: "IRIS.", explanation: "Immune Reconstitution Inflammatory Syndrome: Worsening of pre-existing infections (e.g., TB) after starting ART due to immune recovery." }
    ],
    
    redFlags: ["Dyspnea (PCP Pneumonia)", "Headache/Seizure (Toxoplasmosis/Cryptococcus)", "Vision loss (CMV Retinitis)", "Severe Wasting"],
    differentials: ["Mononucleosis", "Secondary Syphilis", "Disseminated TB", "Lymphoma"],

    managementRationale: [
      { 
        drug: "Tenofovir Disoproxil (TDF)", 
        class: "NRTI", 
        dose: "300 mg", 
        freq: "OD", 
        indication: "Backbone of ART", 
        rationale: "Nucleotide analog inhibiting reverse transcriptase." 
      },
      { 
        drug: "Lamivudine (3TC)", 
        class: "NRTI", 
        dose: "300 mg", 
        freq: "OD", 
        indication: "Backbone", 
        rationale: "Synergistic with Tenofovir; high barrier to resistance in combination." 
      },
      { 
        drug: "Dolutegravir", 
        class: "Integrase Inhibitor (INSTI)", 
        dose: "50 mg", 
        freq: "OD", 
        indication: "Third Agent", 
        rationale: "Rapid viral suppression, high barrier to resistance. Part of 'TLD' regimen." 
      }
    ],

    lifestyle: ["Safe sex practices (Condoms).", "Partner notification.", "Avoid raw/undercooked foods (Neutropenia risk)."],
    
    diet: {
      eat: ["High protein (prevent wasting)", "Thoroughly cooked meats/eggs", "Boiled water"],
      avoid: ["Raw salads (Contamination risk)", "Unpasteurized dairy", "Grapefruit (Drug interactions)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "3,500 /cmm (Leukopenia)", plt: "140,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "3,500 /cmm", plt: "140,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "CD4 Count", result: "350 cells/uL", notes: "Start ART immediately" },
      { name: "Viral Load", result: "50,000 copies/mL", notes: "High replication" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. TLD (Tenofovir+Lamivudine+Dolutegravir) OD", "Co-trimoxazole Prophylaxis"] }
    ]
  },

  "Sjögren’s Syndrome": {
    category: "Rheumatology",
    pathophysiology: "Chronic autoimmune inflammatory disorder characterized by lymphocytic infiltration of exocrine glands (Lacrimal and Salivary), leading to glandular destruction and dryness (Sicca symptoms).",
    
    clinicalFeatures: {
      symptoms: ["Dry eyes (Sand/Grit sensation)", "Dry mouth (Dysphagia/Thirst)", "Joint pain", "Vaginal dryness"],
      signs: ["Parotid gland enlargement", "Dental caries (lack of saliva)", "Conjunctival injection"]
    },

    diagnosticWorkup: [
      { test: "Anti-Ro (SS-A) / Anti-La (SS-B)", finding: "Positive", significance: "Serological Hallmark" },
      { test: "Schirmer's Test", finding: "< 5mm wetness in 5 min", significance: "Objective measure of tear production" },
      { test: "Minor Salivary Gland Biopsy", finding: "Focal lymphocytic sialadenitis", significance: "Gold Standard (if serology negative)" }
    ],

    clinicalPearls: [
      { pearl: "Lymphoma Risk.", explanation: "Patients have a 44x increased risk of developing Non-Hodgkin Lymphoma (MALT type). Watch for persistent gland swelling." },
      { pearl: "Secondary Sjögren's.", explanation: "Often accompanies other autoimmune diseases like RA or SLE." }
    ],
    
    redFlags: ["Persistent swollen lymph nodes (Lymphoma)", "Purpura (Vasculitis)", "Renal Tubular Acidosis", "Pulmonary Fibrosis"],
    differentials: ["Age-related Sicca", "Sarcoidosis (Mikulicz syndrome)", "IgG4-related disease", "Medication side effect (Anticholinergics)"],

    managementRationale: [
      { 
        drug: "Artificial Tears (CMC)", 
        class: "Lubricant", 
        dose: "gtts q2-4h", 
        freq: "PRN", 
        indication: "Xerophthalmia", 
        rationale: "Symptomatic relief of corneal dryness." 
      },
      { 
        drug: "Pilocarpine", 
        class: "Cholinergic Agonist", 
        dose: "5 mg", 
        freq: "QID", 
        indication: "Xerostomia", 
        rationale: "Stimulates muscarinic receptors to increase residual gland secretion." 
      },
      { 
        drug: "Hydroxychloroquine", 
        class: "Immunomodulator", 
        dose: "200-400 mg", 
        freq: "OD", 
        indication: "Systemic/Arthralgia", 
        rationale: "Treats fatigue and joint pain; prevents systemic progression." 
      }
    ],

    lifestyle: ["Excellent dental hygiene (Fluoride treatments).", "Humidifier use.", "Avoid smoking/wind exposure."],
    
    diet: {
      eat: ["Moist/Soft foods (Gravy based)", "Saunf (Fennel) - stimulates saliva", "Sugar-free gum"],
      avoid: ["Dry crackers/bread", "Caffeine (Diuretic/Drying)", "Sugary drinks (Caries risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "5,000 /cmm", plt: "250,000 /cmm", hct: "37%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "5,000 /cmm", plt: "250,000 /cmm", hct: "37%" }]
    },
    specialTests: [
      { name: "Schirmer Test", result: "3mm (Right Eye)", notes: "Positive" },
      { name: "Anti-Ro", result: "Positive", notes: "Diagnostic" }
    ],
    treatment: [
      { day: 1, meds: ["Artificial Tears Q4H", "Tab. Hydroxychloroquine 200mg BD", "Sugar-free gum"] }
    ]
  },

  "Lymphoma (Hodgkin’s)": {
    category: "Oncology / Hematology",
    pathophysiology: "B-cell malignancy characterized by the presence of Reed-Sternberg cells (Binucleated giant cells) in a background of reactive inflammatory cells. Spreads contiguously via lymph nodes.",
    
    clinicalFeatures: {
      symptoms: ["Painless lymph node swelling (Neck)", "B-Symptoms: Fever, Night sweats, Weight loss (>10%)", "Pruritus"],
      signs: ["Rubber, matted lymphadenopathy (Cervical/Supraclavicular)", "Pel-Ebstein fever (Cyclical)", "Alcohol-induced pain (Rare but classic)"]
    },

    diagnosticWorkup: [
      { test: "Excisional Lymph Node Biopsy", finding: "Reed-Sternberg Cells", significance: "Gold Standard ('Owl's eye' appearance)" },
      { test: "PET-CT Scan", finding: "Hypermetabolic nodes", significance: "Staging (Ann Arbor)" },
      { test: "ESR", finding: "Elevated", significance: "Prognostic factor" }
    ],

    clinicalPearls: [
      { pearl: "Bimodal Distribution.", explanation: "Peak incidence occurs in young adulthood (20s) and again in elderly (>55)." },
      { pearl: "Curability.", explanation: "One of the most curable cancers, even in advanced stages, with modern chemotherapy." }
    ],
    
    redFlags: ["SVC Syndrome (Mediastinal mass)", "Spinal Cord Compression", "Severe B-Symptoms (Poor prognosis)", "Neutropenic Sepsis"],
    differentials: ["Non-Hodgkin Lymphoma", "Tuberculosis (Scrofula - Common in India)", "Infectious Mononucleosis", "Metastatic Carcinoma"],

    managementRationale: [
      { 
        drug: "Doxorubicin (Adriamycin)", 
        class: "Anthracycline", 
        dose: "25 mg/m2", 
        freq: "Days 1, 15", 
        indication: "ABVD Regimen", 
        rationale: "DNA intercalation. Risk of cardiomyopathy." 
      },
      { 
        drug: "Bleomycin", 
        class: "Antitumor Antibiotic", 
        dose: "10 U/m2", 
        freq: "Days 1, 15", 
        indication: "ABVD Regimen", 
        rationale: "DNA strand scission. Risk of Pulmonary Fibrosis." 
      },
      { 
        drug: "Vinblastine", 
        class: "Vinca Alkaloid", 
        dose: "6 mg/m2", 
        freq: "Days 1, 15", 
        indication: "ABVD Regimen", 
        rationale: "Microtubule inhibition. Risk of neuropathy." 
      }
    ],

    lifestyle: ["Fertility preservation (Sperm banking) pre-chemo.", "Infection prevention.", "Smoking cessation (Lung protection)."],
    
    diet: {
      eat: ["High calorie/protein (combat catabolism)", "Cooked foods only (Neutropenic precaution)", "Small frequent meals"],
      avoid: ["Raw salads/meats", "Unpasteurized dairy", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "12,000 /cmm", plt: "400,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "12,000 /cmm", plt: "400,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Biopsy", result: "Nodular Sclerosis HL", notes: "RS cells positive" },
      { name: "PET-CT", result: "Stage IIB", notes: "Mediastinal + Cervical nodes" }
    ],
    treatment: [
      { day: 1, meds: ["ABVD Chemotherapy Cycle 1", "Antiemetics"] }
    ]
  },
  "Arsenic Poisoning": {
    category: "Toxicology",
    pathophysiology: "Trivalent arsenic binds to sulfhydryl groups, inhibiting critical enzymes (Pyruvate Dehydrogenase), disrupting cellular respiration (uncouples oxidative phosphorylation) and DNA repair.",
    
    clinicalFeatures: {
      symptoms: ["Rice-water stools (Acute)", "Garlic breath", "Peripheral neuropathy (Stocking-glove)", "Fatigue"],
      signs: ["Raindrop pigmentation (Chronic)", "Mees' Lines (Transverse white nail bands)", "Hyperkeratosis of palms/soles"]
    },

    diagnosticWorkup: [
      { test: "24h Urine Arsenic", finding: "> 50 mcg/L", significance: "Best indicator of recent exposure" },
      { test: "Hair/Nail Analysis", finding: "High levels", significance: "Indicates chronic exposure (months)" },
      { test: "ECG", finding: "QT Prolongation", significance: "Risk of Torsades de Pointes" }
    ],

    clinicalPearls: [
      { pearl: "Groundwater Hazard.", explanation: "Endemic in West Bengal and Bangladesh due to geological contamination of tube wells." },
      { pearl: "Malignancy Risk.", explanation: "Chronic exposure is a potent carcinogen (Skin - Squamous Cell, Lung, Bladder)." }
    ],
    
    redFlags: ["Cholera-like Diarrhea (Shock)", "QTc > 500ms", "Encephalopathy", "Pancytopenia"],
    differentials: ["Guillain-Barre Syndrome (Neuropathy)", "Lead Poisoning", "Thallium Poisoning", "Cholera"],

    managementRationale: [
      { 
        drug: "Dimercaprol (BAL)", 
        class: "Chelating Agent", 
        dose: "3-5 mg/kg", 
        freq: "IM q4h", 
        indication: "Severe Acute Toxicity", 
        rationale: "Sulfhydryl donor that binds arsenic; crosses BBB. Use with caution (painful injection)." 
      },
      { 
        drug: "Succimer (DMSA)", 
        class: "Chelator", 
        dose: "10 mg/kg", 
        freq: "PO TID", 
        indication: "Subacute/Chronic", 
        rationale: "Oral analogue of BAL; safer side effect profile." 
      },
      { 
        drug: "Penicillamine", 
        class: "Chelator", 
        dose: "250-500 mg", 
        freq: "QID", 
        indication: "Alternative", 
        rationale: "Used if DMSA unavailable; high allergic potential." 
      }
    ],

    lifestyle: ["Source identification (Check well water).", "Stop Ayurvedic medicines containing Bhasmas.", "Dermatologic surveillance."],
    
    diet: {
      eat: ["High Protein (Methionine/Cysteine provide sulfhydryl groups)", "Selenium rich foods (antagonistic to arsenic)", "Garlic"],
      avoid: ["Seafood (Organic Arsenic - non-toxic but confounds tests)", "Contaminated water"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.0 g/dL", wbc: "3,000 /cmm", plt: "100,000 /cmm", hct: "27%" },
      progression: [{ day: 1, hb: "9.0 g/dL", wbc: "3,000 /cmm", plt: "100,000 /cmm", hct: "27%" }]
    },
    specialTests: [
      { name: "Urine Arsenic", result: "200 mcg/L", notes: "Toxic" },
      { name: "Nerve Conduction", result: "Axonal Neuropathy", notes: "Sensory-Motor" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Dimercaprol IM", "IV Fluids"] }
    ]
  },

  "Infertility (Male/Female)": {
    category: "Reproductive Health",
    pathophysiology: "Failure to conceive after 12 months of unprotected intercourse. Causes include Ovulatory dysfunction (PCOS), Tubal blockage, or Male factor (Sperm quality/quantity).",
    
    clinicalFeatures: {
      symptoms: ["Inability to conceive", "Irregular cycles (Female)", "Sexual dysfunction (Male)"],
      signs: ["Hirsutism/Obesity (PCOS)", "Varicocele (Male)", "Small testes"]
    },

    diagnosticWorkup: [
      { test: "Semen Analysis", finding: "Count/Motility/Morphology defects", significance: "First-line Male test" },
      { test: "Hysterosalpingogram (HSG)", finding: "Tubal patency/blockage", significance: "Check mechanical obstruction" },
      { test: "Mid-luteal Progesterone", finding: "< 3 ng/mL", significance: "Indicates Anovulation" }
    ],

    clinicalPearls: [
      { pearl: "Time Limit.", explanation: "Evaluation starts after 1 year if <35y, but after 6 months if female age >35y." },
      { pearl: "Male Factor.", explanation: "Accounts for 40-50% of infertility cases; Semen analysis should be the first non-invasive test performed." }
    ],
    
    redFlags: ["Amenorrhea (Primary/Secondary)", "Severe Dysmenorrhea (Endometriosis)", "Azoospermia (Genetic/Obstructive)"],
    differentials: ["Thyroid Dysfunction", "Hyperprolactinemia", "Premature Ovarian Failure", "Retrograde Ejaculation"],

    managementRationale: [
      { 
        drug: "Clomiphene Citrate", 
        class: "SERM", 
        dose: "50-100 mg", 
        freq: "OD (Day 2-6)", 
        indication: "Ovulation Induction", 
        rationale: "Blocks estrogen feedback to hypothalamus, increasing FSH/LH surge." 
      },
      { 
        drug: "Letrozole", 
        class: "Aromatase Inhibitor", 
        dose: "2.5-5 mg", 
        freq: "OD (Day 3-7)", 
        indication: "PCOS", 
        rationale: "Often superior to Clomiphene for live birth rates in PCOS; mono-follicular growth." 
      },
      { 
        drug: "Metformin", 
        class: "Insulin Sensitizer", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "PCOS Adjunct", 
        rationale: "Improves insulin resistance and spontaneous ovulation rates." 
      }
    ],

    lifestyle: ["Weight modulation (BMI 20-25).", "Avoid tight underwear/heat (Male).", "Timing intercourse (Ovulation kits)."],
    
    diet: {
      eat: ["Zinc/Selenium rich foods (Sperm health)", "Walnuts", "Full-fat dairy (associated with better fertility than low-fat)"],
      avoid: ["Trans fats", "Alcohol/Smoking (DNA fragmentation)", "Soy (Excessive - controversial for males)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "Semen Analysis", result: "Oligospermia", notes: "10 million/ml" },
      { name: "AMH", result: "6.5 ng/mL", notes: "Suggests PCOS" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Letrozole 2.5mg OD", "Tab. CoQ10 100mg"] }
    ]
  },

  "Myopathy": {
    category: "Rheumatology / Neurology",
    pathophysiology: "Disease of muscle tissue leading to weakness. Causes include Inflammatory (Polymyositis), Drug-induced (Statins/Steroids), or Endocrine (Hypothyroid).",
    
    clinicalFeatures: {
      symptoms: ["Proximal muscle weakness (Difficulty climbing stairs/combing hair)", "Myalgia (Pain)", "Fatigue"],
      signs: ["Gower's Sign (using hands to stand)", "Muscle atrophy", "Normal sensation/reflexes (usually)"]
    },

    diagnosticWorkup: [
      { test: "Creatine Kinase (CPK)", finding: "Elevated (>1000 IU/L)", significance: "Marker of muscle breakdown" },
      { test: "EMG", finding: "Myopathic pattern (Small, short potentials)", significance: "Distinguishes from neuropathy" },
      { test: "Muscle Biopsy", finding: "Inflammation/Necrosis", significance: "Gold Standard Classification" }
    ],

    clinicalPearls: [
      { pearl: "Statin Check.", explanation: "Statin-induced myopathy is common. Always check drug history. Co-admin with Macrolides/Fibrates increases risk." },
      { pearl: "Skin Signs.", explanation: "If rash (Heliotrope/Gottron's papules) accompanies myopathy, think Dermatomyositis (Cancer risk)." }
    ],
    
    redFlags: ["Dysphagia (Aspiration risk)", "Respiratory muscle weakness", "Dark urine (Myoglobinuria/Rhabdomyolysis)", "Cardiac arrhythmia"],
    differentials: ["Guillain-Barre Syndrome", "Myasthenia Gravis", "Hypothyroidism", "Fibromyalgia"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Inflammatory Myopathy", 
        rationale: "Suppresses immune-mediated muscle destruction." 
      },
      { 
        drug: "Methotrexate", 
        class: "Immunosuppressant", 
        dose: "15-25 mg", 
        freq: "Weekly", 
        indication: "Steroid Sparing", 
        rationale: "Long term maintenance for Polymyositis/Dermatomyositis." 
      },
      { 
        drug: "Coenzyme Q10", 
        class: "Supplement", 
        dose: "100-200 mg", 
        freq: "OD", 
        indication: "Statin-induced (Supportive)", 
        rationale: "Repletes mitochondrial CoQ10 depleted by statins (Evidence mixed but commonly used)." 
      }
    ],

    lifestyle: ["Physiotherapy (prevent contractures).", "Fall prevention.", "Sun protection (if Dermatomyositis)."],
    
    diet: {
      eat: ["High Biological Value Protein (Eggs, Whey)", "Creatine rich foods"],
      avoid: ["Grapefruit (Interacts with Statins)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "CPK Total", result: "2500 IU/L", notes: "Significant muscle injury" },
      { name: "ANA", result: "Positive", notes: "Autoimmune likely" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 60mg OD", "Stop Atorvastatin"] }
    ]
  },

  "Skin Infections (Impetigo)": {
    category: "Dermatology / Infectious Disease",
    pathophysiology: "Superficial bacterial skin infection (Staph. aureus or Strep. pyogenes) involving the epidermis, producing contagious pustules and crusts.",
    
    clinicalFeatures: {
      symptoms: ["Itchy sores", "Pain (mild)", "Rapid spread"],
      signs: ["Honey-colored crusts (Non-bullous)", "Flaccid bullae (Bullous)", "Satellite lesions"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Classic honey crusts", significance: "Usually sufficient" },
      { test: "Pus Swab C&S", finding: "Staph/Strep growth", significance: "If MRSA suspected or treatment failure" },
      { test: "ASO Titer", finding: "Elevated", significance: "Check if Post-Strep Glomerulonephritis suspected" }
    ],

    clinicalPearls: [
      { pearl: "School Sores.", explanation: "Highly contagious; children should stay home until 24h after starting antibiotics." },
      { pearl: "Nephritogenic Strains.", explanation: "Strep impetigo can lead to Glomerulonephritis (PSGN) but NOT Rheumatic Fever." }
    ],
    
    redFlags: ["Fever", "Rapidly spreading erythema (Cellulitis)", "Desquamation (Scalded Skin Syndrome)", "Tea-colored urine (PSGN)"],
    differentials: ["Herpes Simplex", "Eczema Herpeticum", "Insect Bites", "Contact Dermatitis"],

    managementRationale: [
      { 
        drug: "Mupirocin", 
        class: "Topical Antibiotic", 
        dose: "2% Ointment", 
        freq: "TID x 5-7 days", 
        indication: "Localized Disease", 
        rationale: "Inhibits bacterial protein synthesis. Highly effective for limited lesions." 
      },
      { 
        drug: "Cephalexin", 
        class: "Cephalosporin (1st Gen)", 
        dose: "500 mg", 
        freq: "QID", 
        indication: "Widespread / Bullous", 
        rationale: "Systemic coverage for MSSA and Strep." 
      },
      { 
        drug: "Amoxicillin-Clavulanate", 
        class: "Beta-lactam", 
        dose: "625 mg", 
        freq: "TID", 
        indication: "Resistant / Recurrent", 
        rationale: "Covers beta-lactamase producing Staph." 
      }
    ],

    lifestyle: ["Hand hygiene (Separate towels).", "Trim fingernails.", "Wash crusts gently with soap/water."],
    
    diet: {
      eat: ["Turmeric (Anti-bacterial properties)", "Hydration"],
      avoid: ["Sugar (High glucose promotes bacterial growth)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "11,000 /cmm", plt: "300,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Swab Culture", result: "Staph aureus", notes: "MSSA" },
      { name: "Urinalysis", result: "Normal", notes: "No PSGN" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Mupirocin TID", "Tab. Cephalexin 500mg QID"] }
    ]
  },

  "Dehydration & Heat Stroke": {
    category: "Emergency / Environmental",
    pathophysiology: "Heat Stroke is failure of thermoregulation (Core temp >40°C) with CNS dysfunction. Dehydration is loss of body water/salt leading to hypovolemia and impaired cooling.",
    
    clinicalFeatures: {
      symptoms: ["Thirst", "Dizziness", "Confusion", "Cessation of sweating (Classic Heat Stroke)"],
      signs: ["Hyperthermia (>104°F)", "Tachycardia", "Hypotension", "Hot dry skin"]
    },

    diagnosticWorkup: [
      { test: "Rectal Temperature", finding: "> 40°C (104°F)", significance: "Accurate Core Temp" },
      { test: "Electrolytes", finding: "Hypernatremia (Dehydration) / Hypokalemia", significance: "Guide replacement" },
      { test: "CPK / Urine Myoglobin", finding: "Elevated", significance: "Rule out Rhabdomyolysis" }
    ],

    clinicalPearls: [
      { pearl: "Cool First, Transport Second.", explanation: "Immediate rapid cooling (Ice water immersion) determines survival. Antipyretics (Paracetamol) are INEFFECTIVE and hepatotoxic here." },
      { pearl: "Classic vs Exertional.", explanation: "Classic: Elderly, dry skin, gradual. Exertional: Athletes, sweating present, rapid." }
    ],
    
    redFlags: ["Seizures", "Coma", "Anuria (Renal Failure)", "DIC (Bleeding)"],
    differentials: ["Sepsis", "Malignant Hyperthermia", "Neuroleptic Malignant Syndrome", "Thyroid Storm"],

    managementRationale: [
      { 
        drug: "IV Fluids (Normal Saline)", 
        class: "Crystalloid", 
        dose: "Bolus (Cooled)", 
        freq: "Stat", 
        indication: "Hypovolemia", 
        rationale: "Restores perfusion. Use cooled fluids to assist temp reduction." 
      },
      { 
        drug: "Benzodiazepines (Diazepam)", 
        class: "Sedative", 
        dose: "5-10 mg", 
        freq: "IV Stat", 
        indication: "Shivering / Seizures", 
        rationale: "Shivering generates heat, counteracting cooling measures. Must be suppressed." 
      },
      { 
        drug: "Mannitol", 
        class: "Osmotic Diuretic", 
        dose: "0.25 g/kg", 
        freq: "IV", 
        indication: "Rhabdomyolysis / Cerebral Edema", 
        rationale: "Maintains renal flow and reduces intracranial pressure if present." 
      }
    ],

    lifestyle: ["Acclimatization.", "Avoid midday sun.", "Wear loose cotton clothing."],
    
    diet: {
      eat: ["Aam Panna (Raw Mango Juice) - Traditional electrolyte source", "Buttermilk (Chaas)", "ORS"],
      avoid: ["Alcohol/Caffeine (Diuretics)", "Heavy meals (Thermic effect of food)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "16.0 g/dL (Hemoconcentration)", wbc: "12,000 /cmm", plt: "200,000 /cmm", hct: "50%" },
      progression: [{ day: 1, hb: "16.0 g/dL", wbc: "12,000 /cmm", plt: "200,000 /cmm", hct: "50%" }]
    },
    specialTests: [
      { name: "Core Temp", result: "41°C", notes: "Critical" },
      { name: "Creatinine", result: "1.5 mg/dL", notes: "AKI" }
    ],
    treatment: [
      { day: 1, meds: ["Ice Water Immersion", "IV Normal Saline (Chilled)"] }
    ]
  },
  "Cardiogenic Shock": {
    category: "Emergency / Cardiology",
    pathophysiology: "Primary cardiac pump failure (usually due to massive MI) resulting in reduced Cardiac Output (CI < 2.2 L/min/m2) leading to tissue hypoperfusion and pulmonary congestion.",
    
    clinicalFeatures: {
      symptoms: ["Dyspnea (severe)", "Confusion/Agitation", "Oliguria", "Cold extremities"],
      signs: ["Hypotension (SBP < 90)", "Tachycardia", "Elevated JVP", "S3 Gallop"]
    },

    diagnosticWorkup: [
      { test: "Echocardiography", finding: "Severely reduced LVEF / Wall motion abnormality", significance: "Gold Standard to identify cause" },
      { test: "Lactate", finding: "> 2 mmol/L", significance: "Marker of hypoperfusion" },
      { test: "Pulmonary Artery Catheter", finding: "High PCWP (>15) + Low CI", significance: "Hemodynamic profiling ('Cold and Wet')" }
    ],

    clinicalPearls: [
      { pearl: "Inotropes vs Pressors.", explanation: "Dobutamine improves contractility but can cause hypotension; Norepinephrine is preferred if SBP < 90 mmHg to maintain perfusion pressure." },
      { pearl: "Avoid Beta Blockers.", explanation: "Contraindicated in acute shock as they reduce contractility and compensatory tachycardia." }
    ],
    
    redFlags: ["Anuria", "Lactate > 4 mmol/L", "Refractory Hypotension", "Pulmonary Edema"],
    differentials: ["Septic Shock (Warm)", "Hypovolemic Shock (Low JVP)", "Massive PE", "Cardiac Tamponade"],

    managementRationale: [
      { 
        drug: "Norepinephrine", 
        class: "Vasopressor", 
        dose: "0.05-0.1 mcg/kg/min", 
        freq: "IV Infusion", 
        indication: "Hypotension", 
        rationale: "Increases SVR (Alpha-1) and contractility (Beta-1) with less arrhythmia risk than Dopamine." 
      },
      { 
        drug: "Dobutamine", 
        class: "Inotrope", 
        dose: "2-20 mcg/kg/min", 
        freq: "IV Infusion", 
        indication: "Low Cardiac Output", 
        rationale: "Beta-1 agonist; increases contractility. Use only if BP permits." 
      },
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "40-80 mg", 
        freq: "IV Bolus", 
        indication: "Pulmonary Congestion", 
        rationale: "Reduces preload to relieve pulmonary edema." 
      }
    ],

    lifestyle: ["ICU Admission.", "Mechanical Circulatory Support (IABP/ECMO) consideration.", "Revascularization (PCI) is definitive if MI."],
    
    diet: {
      eat: ["NPO in acute phase", "Enteral nutrition once stable"],
      avoid: ["Fluid overload"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "15,000 /cmm (Stress)", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "15,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Lactate", result: "5.5 mmol/L", notes: "Critical" },
      { name: "ECHO", result: "EF 25%", notes: "Global hypokinesia" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Norepinephrine Infusion", "Inj. Furosemide 40mg IV"] }
    ]
  },

  "Cystic Fibrosis": {
    category: "Respiratory / Genetic",
    pathophysiology: "Autosomal recessive mutation in the CFTR gene leading to defective chloride transport. Results in thick, dehydrated mucus in lungs (infections) and pancreas (malabsorption).",
    
    clinicalFeatures: {
      symptoms: ["Chronic productive cough", "Steatorrhea (Greasy stools)", "Failure to thrive", "Salty tasting skin"],
      signs: ["Clubbing", "Nasal polyps", "Crackles/Wheezing", "Meconium ileus (at birth)"]
    },

    diagnosticWorkup: [
      { test: "Sweat Chloride Test", finding: "> 60 mmol/L", significance: "Gold Standard Diagnosis" },
      { test: "Genetic Testing", finding: "CFTR mutation (e.g. F508del)", significance: "Confirmation & Therapy selection" },
      { test: "Fecal Elastase", finding: "Low (<200 mcg/g)", significance: "Indicates Pancreatic Insufficiency" }
    ],

    clinicalPearls: [
      { pearl: "Pseudomonas Colonization.", explanation: "Chronic infection with Pseudomonas aeruginosa is the hallmark of CF lung disease; requires inhaled antibiotics." },
      { pearl: "CFRD.", explanation: "Cystic Fibrosis Related Diabetes is unique (insulin deficiency + resistance) and affects ~50% of adults." }
    ],
    
    redFlags: ["Hemoptysis (Bronchial artery bleed)", "Pneumothorax", "Distal Intestinal Obstruction Syndrome (DIOS)", "Acute Exacerbation"],
    differentials: ["Primary Ciliary Dyskinesia", "Immunodeficiency", "Celiac Disease", "Asthma"],

    managementRationale: [
      { 
        drug: "Pancrelipase", 
        class: "Enzyme Replacement", 
        dose: "Titrated to fat intake", 
        freq: "With every meal/snack", 
        indication: "Exocrine Insufficiency", 
        rationale: "Replaces lipase/protease/amylase to allow nutrient absorption." 
      },
      { 
        drug: "Tobramycin", 
        class: "Aminoglycoside", 
        dose: "300 mg Nebulized", 
        freq: "BD (28 days on/off)", 
        indication: "Pseudomonas Suppression", 
        rationale: "Inhaled route delivers high lung concentrations with minimal systemic toxicity." 
      },
      { 
        drug: "Ivacaftor / Lumacaftor", 
        class: "CFTR Modulator", 
        dose: "Genotype dependent", 
        freq: "BD", 
        indication: "Specific Mutations", 
        rationale: "Corrects the folding or gating defect of the CFTR protein." 
      }
    ],

    lifestyle: ["Chest Physiotherapy (Vest/Percussion) daily.", "Exercise (clears mucus).", "Infection control."],
    
    diet: {
      eat: ["High Calorie (150% of normal)", "High Fat (Ghee, Paneer, Cheese)", "Extra Salt (due to sweat loss)"],
      avoid: ["Low calorie foods", "Missing enzymes with snacks"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "12,000 /cmm", plt: "300,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "12,000 /cmm", plt: "300,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Sweat Chloride", result: "95 mmol/L", notes: "Diagnostic" },
      { name: "Sputum Culture", result: "Pseudomonas aeruginosa", notes: "Mucoid strain" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Pancrelipase with meals", "Neb. Tobramycin BD"] }
    ]
  },

  "Alzheimer’s Disease (AD)": {
    category: "Neurology / Geriatrics",
    pathophysiology: "Progressive neurodegenerative disorder characterized by extracellular Amyloid-beta plaques and intracellular Tau tangles, leading to cholinergic neuron loss in the hippocampus and cortex.",
    
    clinicalFeatures: {
      symptoms: ["Short-term memory loss (Anterograde amnesia)", "Getting lost in familiar places", "Word-finding difficulty", "Personality changes"],
      signs: ["Normal motor exam (early)", "Apraxia", "Agnosia", "MMS Score < 24"]
    },

    diagnosticWorkup: [
      { test: "MRI Brain", finding: "Hippocampal Atrophy", significance: "Supportive (rules out vascular causes)" },
      { test: "MoCA / MMSE", finding: "Cognitive decline", significance: "Objective assessment" },
      { test: "Vitamin B12 / TSH", finding: "Normal", significance: "Rule out reversible dementia" }
    ],

    clinicalPearls: [
      { pearl: "Sundowning.", explanation: "Worsening of confusion and agitation in the late afternoon or evening." },
      { pearl: "Cholinergic Hypothesis.", explanation: "Loss of acetylcholine correlates with cognitive severity, forming the basis for AChEI therapy." }
    ],
    
    redFlags: ["Rapid progression (CJD)", "Incontinence/Gait disturbance early (NPH)", "Visual hallucinations (Lewy Body Dementia)", "Falls"],
    differentials: ["Vascular Dementia", "Frontotemporal Dementia", "Normal Pressure Hydrocephalus (NPH)", "Delirium"],

    managementRationale: [
      { 
        drug: "Donepezil", 
        class: "Acetylcholinesterase Inhibitor", 
        dose: "5-10 mg", 
        freq: "OD (Night)", 
        indication: "Mild-Moderate AD", 
        rationale: "Increases synaptic acetylcholine. Side effect: Vivid dreams/Bradycardia." 
      },
      { 
        drug: "Memantine", 
        class: "NMDA Antagonist", 
        dose: "10-20 mg", 
        freq: "BD", 
        indication: "Mod-Severe AD", 
        rationale: "Prevents glutamate excitotoxicity. Can be combined with Donepezil." 
      },
      { 
        drug: "Quetiapine", 
        class: "Antipsychotic", 
        dose: "12.5-25 mg", 
        freq: "SOS", 
        indication: "Severe Agitation", 
        rationale: "Black Box Warning (mortality), but used for safety when non-pharm fails." 
      }
    ],

    lifestyle: ["Routine and structure.", "Music therapy.", "Safety modifications (Door locks, Stove guards)."],
    
    diet: {
      eat: ["MIND Diet", "Turmeric (Curcumin - Neuroprotective)", "Walnuts (Omega-3)", "Leafy greens"],
      avoid: ["Processed foods", "Saturated fats (limited evidence)", "Aluminum cookware (Debunked but often asked)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "MMSE", result: "18/30", notes: "Moderate Dementia" },
      { name: "MRI Brain", result: "Global atrophy", notes: "Temporal dominant" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Donepezil 5mg HS", "Tab. Memantine 5mg BD"] }
    ]
  },

  "Growth Hormone Deficiency": {
    category: "Endocrine / Pediatrics",
    pathophysiology: "Deficient secretion of Growth Hormone (GH) from the anterior pituitary, leading to short stature in children and metabolic syndrome/osteoporosis in adults.",
    
    clinicalFeatures: {
      symptoms: ["Short stature (Child)", "Fatigue/Low energy (Adult)", "Delayed puberty"],
      signs: ["Height < 3rd percentile", "Cherubic facies (Child)", "Central obesity", "Micropenis (at birth)"]
    },

    diagnosticWorkup: [
      { test: "IGF-1 / IGFBP-3", finding: "Low", significance: "Screening Test (GH is pulsatile and unreliable)" },
      { test: "GH Stimulation Test", finding: "Peak GH < 10 ng/mL", significance: "Gold Standard (using Arginine/Clonidine/Insulin)" },
      { test: "MRI Pituitary", finding: "Hypoplasia / Empty Sella", significance: "Structural cause" }
    ],

    clinicalPearls: [
      { pearl: "Bone Age.", explanation: "X-ray of the left hand/wrist usually shows delayed bone age (>2 SD below chronological age) in GHD." },
      { pearl: "Metabolic Effects.", explanation: "GH is lipolytic and anabolic; adults with GHD present with high fat mass, low muscle, and dyslipidemia." }
    ],
    
    redFlags: ["Headache/Visual field defect (Craniopharyngioma)", "Diabetes Insipidus (Panhypopituitarism)", "Hypoglycemia (in neonates)"],
    differentials: ["Constitutional Delay of Growth", "Hypothyroidism", "Celiac Disease", "Turner Syndrome"],

    managementRationale: [
      { 
        drug: "Somatropin", 
        class: "Recombinant Human GH", 
        dose: "0.025-0.05 mg/kg/day", 
        freq: "SC Daily (Evening)", 
        indication: "Replacement", 
        rationale: "Mimics physiological nocturnal surge. Promotes linear growth via IGF-1." 
      }
    ],

    lifestyle: ["Monitor height velocity every 3-6 months.", "Check for scoliosis (rapid growth side effect).", "Thyroid function monitoring."],
    
    diet: {
      eat: ["Balanced protein/calorie diet to support catch-up growth", "Calcium/Vit D"],
      avoid: ["Malnutrition (causes GH resistance)", "Excess sugar"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "38%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "38%" }]
    },
    specialTests: [
      { name: "IGF-1", result: "Low", notes: "-2 SD" },
      { name: "Bone Age", result: "Delayed by 2 years", notes: "Consistent with GHD" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Somatropin SC Daily"] }
    ]
  },

  "Alcoholic Liver Disease(ALD)": {
    category: "Gastroenterology / Hepatology",
    pathophysiology: "Chronic ethanol consumption leads to metabolic byproducts (Acetaldehyde) causing hepatocyte steatosis (Fatty Liver), inflammation (Alcoholic Hepatitis), and fibrosis/cirrhosis.",
    
    clinicalFeatures: {
      symptoms: ["Jaundice", "Abdominal swelling (Ascites)", "Right Upper Quadrant pain", "Fever (in Hepatitis)"],
      signs: ["Parotid enlargement", "Dupuytren's contracture", "Gynecomastia", "Spider Angioma"]
    },

    diagnosticWorkup: [
      { test: "LFT", finding: "AST:ALT ratio > 2:1", significance: "Classic sign (AST usually <300; ALT lower due to B6 deficiency)" },
      { test: "GGT", finding: "Markedly Elevated", significance: "Sensitive indicator of alcohol use" },
      { test: "Maddrey's Discriminant Function", finding: "Score > 32", significance: "Predicts high mortality; indication for steroids" }
    ],

    clinicalPearls: [
      { pearl: "Mallory Bodies.", explanation: "Eosinophilic inclusions seen on biopsy; characteristic but not pathognomonic." },
      { pearl: "Withdrawal Risk.", explanation: "Sudden cessation in hospital can trigger Delirium Tremens; monitor CIWA score." }
    ],
    
    redFlags: ["Hematemesis (Variceal Bleed)", "Hepatic Encephalopathy (Confusion)", "Hepatorenal Syndrome (Oliguria)", "Spontaneous Bacterial Peritonitis"],
    differentials: ["NAFLD/NASH", "Viral Hepatitis", "Drug Induced Liver Injury", "Hemochromatosis"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "40 mg", 
        freq: "OD x 28 days", 
        indication: "Severe Alcoholic Hepatitis (MDF > 32)", 
        rationale: "Reduces inflammatory cytokine storm. Survival benefit in severe cases." 
      },
      { 
        drug: "Pentoxifylline", 
        class: "TNF Inhibitor (Non-specific)", 
        dose: "400 mg", 
        freq: "TID", 
        indication: "Steroid Contraindication", 
        rationale: "Alternative for severe hepatitis (weak evidence but renal protective)." 
      },
      { 
        drug: "Thiamine (Vit B1)", 
        class: "Vitamin", 
        dose: "100 mg", 
        freq: "IV/IM Daily", 
        indication: "Prophylaxis", 
        rationale: "Prevents Wernicke's Encephalopathy (Triad: Confusion, Ataxia, Ophthalmoplegia)." 
      }
    ],

    lifestyle: ["TOTAL Alcohol Abstinence (Cornerstone).", "AA (Alcoholics Anonymous).", "Vaccinate for Hep A/B."],
    
    diet: {
      eat: ["High Protein (1.2-1.5g/kg) - malnutrition is major killer", "Small frequent meals (Night snack)", "Coffee (Protective)"],
      avoid: ["Alcohol (Zero tolerance)", "Salt (if Ascites present)", "Raw shellfish"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL (Macrocytic)", wbc: "14,000 /cmm", plt: "90,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "14,000 /cmm", plt: "90,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "AST/ALT", result: "250/100", notes: "Ratio > 2" },
      { name: "Maddrey Score", result: "35", notes: "High Mortality Risk" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 40mg OD", "Inj. Thiamine 100mg", "High Protein Diet"] }
    ]
  },
  "Glomerulonephritis": {
    category: "Renal",
    pathophysiology: "Inflammation of the glomeruli caused by immune complex deposition (e.g., IgA, Post-Strep) or anti-GBM antibodies, leading to basement membrane damage, hematuria, and renal insufficiency.",
    
    clinicalFeatures: {
      symptoms: ["Pink/Cola-colored urine (Hematuria)", "Foamy urine (Proteinuria)", "Puffy eyes (Edema)", "High BP"],
      signs: ["Hypertension", "Edema (Pedal/Periorbital)", "Raised JVP (Fluid overload)"]
    },

    diagnosticWorkup: [
      { test: "Urinalysis", finding: "RBC Casts + Dysmorphic RBCs", significance: "Pathognomonic of glomerular bleeding" },
      { test: "Renal Biopsy", finding: "Crescents (in RPGN) or Mesangial proliferation", significance: "Gold Standard Classification" },
      { test: "Complements (C3/C4)", finding: "Low (in Lupus/Post-Strep)", significance: "Etiology clue" }
    ],

    clinicalPearls: [
      { pearl: "The RBC Cast.", explanation: "Red blood cells trapped in the renal tubule mucoprotein matrix; unequivocally places the pathology in the kidney (glomerulus)." },
      { pearl: "Goodpasture's.", explanation: "Pulmonary-Renal Syndrome: Hemoptysis + Glomerulonephritis due to anti-GBM antibodies." }
    ],
    
    redFlags: ["Rapidly rising Creatinine (RPGN)", "Hemoptysis", "Oliguria/Anuria", "Hypertensive Encephalopathy"],
    differentials: ["Nephrolithiasis", "Bladder Cancer", "UTI", "Tubulointerstitial Nephritis"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Immune-mediated GN", 
        rationale: "Suppresses glomerular inflammation and crescent formation." 
      },
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "40-80 mg", 
        freq: "BD", 
        indication: "Fluid Overload", 
        rationale: "Essential for managing edema and hypertension in oliguric patients." 
      },
      { 
        drug: "Ramipril", 
        class: "ACE Inhibitor", 
        dose: "2.5-5 mg", 
        freq: "OD", 
        indication: "Proteinuria / HTN", 
        rationale: "Reduces intraglomerular pressure; use with caution if Creatinine is rising rapidly." 
      }
    ],

    lifestyle: ["Salt restriction (<2g Na/day).", "Fluid restriction.", "Daily weight monitoring."],
    
    diet: {
      eat: ["High biological value protein (limited quantity)", "Apple/Berries (Low K+)"],
      avoid: ["Salt substitutes (KCl)", "Processed foods (Sodium)", "Banana/Coconut water (Hyperkalemia risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "31%" },
      progression: [{ day: 1, hb: "10.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "31%" }]
    },
    specialTests: [
      { name: "Urine Microscopy", result: "RBC Casts present", notes: "Active Nephritis" },
      { name: "Creatinine", result: "2.5 mg/dL", notes: "Acute Kidney Injury" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 60mg OD", "Tab. Furosemide 40mg BD"] }
    ]
  },

  "Polycythemia Vera": {
    category: "Hematology / Oncology",
    pathophysiology: "Myeloproliferative neoplasm driven by JAK2 V617F mutation leading to autonomous, EPO-independent production of red blood cells (erythrocytosis), increasing blood viscosity.",
    
    clinicalFeatures: {
      symptoms: ["Aquagenic Pruritus (Itching after hot bath)", "Headache/Dizziness", "Fatigue", "Blurred vision"],
      signs: ["Plethora (Facial redness)", "Splenomegaly", "Hypertension", "Engorged retinal veins"]
    },

    diagnosticWorkup: [
      { test: "CBC", finding: "Hb >16.5 (M), >16.0 (F) + High Hct", significance: "Initial Screen" },
      { test: "JAK2 V617F Mutation", finding: "Positive (95% cases)", significance: "Major Diagnostic Criterion" },
      { test: "Serum Erythropoietin", finding: "Low (Suppressed)", significance: "Distinguishes from Secondary Polycythemia (High EPO)" }
    ],

    clinicalPearls: [
      { pearl: "Hyperviscosity.", explanation: "Sluggish blood flow predisposes to both Arterial (Stroke/MI) and Venous (DVT/Budd-Chiari) thrombosis." },
      { pearl: "Spent Phase.", explanation: "Can progress to Myelofibrosis (Burn out) or Acute Myeloid Leukemia (AML) over years." }
    ],
    
    redFlags: ["TIA/Stroke symptoms", "Acute painful spleen (Infarct)", "Severe erythromelalgia (Burning hands/feet)", "Bleeding"],
    differentials: ["Secondary Polycythemia (COPD/Altitude)", "Dehydration (Relative)", "Renal Cell Carcinoma (EPO secreting)"],

    managementRationale: [
      { 
        drug: "Hydroxyurea", 
        class: "Cytoreductive", 
        dose: "500-1000 mg", 
        freq: "OD", 
        indication: "High Risk (>60y or Thrombosis)", 
        rationale: "Suppresses bone marrow production of all cell lines." 
      },
      { 
        drug: "Aspirin", 
        class: "Antiplatelet", 
        dose: "75 mg", 
        freq: "OD", 
        indication: "Thrombosis Prophylaxis", 
        rationale: "Reduces risk of cardiovascular events and controls erythromelalgia." 
      },
      { 
        drug: "Ruxolitinib", 
        class: "JAK1/2 Inhibitor", 
        dose: "10 mg", 
        freq: "BD", 
        indication: "Hydroxyurea Intolerance/Resistance", 
        rationale: "Targeted therapy reducing spleen size and symptom burden." 
      }
    ],

    lifestyle: ["Therapeutic Phlebotomy (Target Hct < 45%).", "Avoid dehydration.", "Cool baths (for pruritus)."],
    
    diet: {
      eat: ["Hydrating foods (Cucumber/Melon)", "Balanced diet"],
      avoid: ["Iron supplements (unless severely deficient)", "Iron-fortified cereals (Feeds red cell production)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "18.5 g/dL", wbc: "14,000 /cmm", plt: "500,000 /cmm", hct: "55%" },
      progression: [{ day: 1, hb: "18.5 g/dL", wbc: "14,000 /cmm", plt: "500,000 /cmm", hct: "55%" }]
    },
    specialTests: [
      { name: "JAK2 Mutation", result: "Detected", notes: "Primary Polycythemia" },
      { name: "EPO Level", result: "2 mIU/mL", notes: "Suppressed" }
    ],
    treatment: [
      { day: 1, meds: ["Phlebotomy 450ml", "Tab. Hydroxyurea 500mg OD", "Tab. Aspirin 75mg"] }
    ]
  },

  "Influenza (Seasonal)": {
    category: "Infectious Disease",
    pathophysiology: "Acute respiratory infection by Influenza Virus A or B (Orthomyxovirus). Hemagglutinin binds sialic acid receptors; Neuraminidase releases new virions. Causes epithelial necrosis.",
    
    clinicalFeatures: {
      symptoms: ["Sudden onset high fever", "Severe myalgia (Muscle aches)", "Dry cough", "Headache/Fatigue"],
      signs: ["Fever > 38.5°C", "Pharyngeal erythema", "Clear lungs (usually)", "Tachycardia"]
    },

    diagnosticWorkup: [
      { test: "Rapid Influenza Antigen", finding: "Positive", significance: "Quick but low sensitivity (False negatives common)" },
      { test: "RT-PCR", finding: "Positive", significance: "Gold Standard (High sensitivity)" },
      { test: "CXR", finding: "Normal", significance: "Rule out secondary bacterial pneumonia" }
    ],

    clinicalPearls: [
      { pearl: "The 48-Hour Window.", explanation: "Antivirals are most effective if started within 48h of symptom onset; benefits decrease rapidly after." },
      { pearl: "Secondary Pneumonia.", explanation: "Brief improvement followed by worsening fever/cough suggests secondary bacterial infection (Staph aureus is classic)." }
    ],
    
    redFlags: ["Shortness of Breath (Viral Pneumonia)", "Confusion", "Persistent vomiting", "Cyanosis"],
    differentials: ["COVID-19", "Dengue (Bone break fever)", "Common Cold (Milder)", "Bacterial Pneumonia"],

    managementRationale: [
      { 
        drug: "Oseltamivir", 
        class: "Neuraminidase Inhibitor", 
        dose: "75 mg", 
        freq: "BD x 5 days", 
        indication: "Treatment / Prophylaxis", 
        rationale: "Prevents release of new viral particles. Reduces illness duration by ~1 day." 
      },
      { 
        drug: "Paracetamol", 
        class: "Antipyretic", 
        dose: "650 mg", 
        freq: "Q6H SOS", 
        indication: "Fever/Myalgia", 
        rationale: "Symptomatic relief. Avoid Aspirin in children (Reye's Syndrome)." 
      },
      { 
        drug: "Baloxavir", 
        class: "Endonuclease Inhibitor", 
        dose: "40-80 mg", 
        freq: "Single Dose", 
        indication: "Uncomplicated Flu", 
        rationale: "Newer single-dose alternative; blocks viral replication earlier." 
      }
    ],

    lifestyle: ["Droplet Precautions (Masks).", "Stay home for 24h after fever resolves.", "Annual Vaccination."],
    
    diet: {
      eat: ["Turmeric Milk (Haldi Doodh - Immunity)", "Chicken Soup / Khichdi", "Ginger Tea"],
      avoid: ["Cold beverages", "Dairy (if phlegm is an issue - subjective)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "4,500 /cmm", plt: "180,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "4,500 /cmm", plt: "180,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Nasopharyngeal Swab", result: "Flu A Positive", notes: "H3N2 Strain" },
      { name: "SpO2", result: "97% RA", notes: "Stable" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Oseltamivir 75mg BD", "Tab. Paracetamol SOS"] }
    ]
  },

  "Inflammatory Myopathies": {
    category: "Rheumatology",
    pathophysiology: "Autoimmune destruction of muscle fibers. Polymyositis (PM) involves CD8+ T-cell invasion of fibers; Dermatomyositis (DM) involves CD4+ and B-cell perivascular inflammation.",
    
    clinicalFeatures: {
      symptoms: ["Symmetrical Proximal Weakness (Hips/Shoulders)", "Difficulty rising from chair", "Dysphagia", "Skin rash (DM)"],
      signs: ["Heliotrope Rash (Eyelids - DM)", "Gottron's Papules (Knuckles - DM)", "Mechanic's Hands", "Muscle tenderness"]
    },

    diagnosticWorkup: [
      { test: "Creatine Kinase (CPK)", finding: "Elevated (often >10x)", significance: "Marker of muscle necrosis" },
      { test: "Autoantibody Panel", finding: "Anti-Jo-1 / Anti-Mi-2", significance: "Specific markers (Antisynthetase syndrome)" },
      { test: "Muscle Biopsy", finding: "Endomysial (PM) vs Perimysial (DM) inflammation", significance: "Gold Standard" }
    ],

    clinicalPearls: [
      { pearl: "Malignancy Association.", explanation: "Dermatomyositis has a strong link to occult cancers (Ovarian, Lung, Gastric); age-appropriate screening is mandatory." },
      { pearl: "ILD Risk.", explanation: "Interstitial Lung Disease is the major cause of mortality; check for Anti-Jo-1 antibody." }
    ],
    
    redFlags: ["Respiratory Failure (Diaphragm weakness)", "Aspiration", "Severe Dysphagia", "Cardiac Arrhythmias"],
    differentials: ["Statin-induced Myopathy", "Hypothyroidism", "Muscular Dystrophy", "Inclusion Body Myositis"],

    managementRationale: [
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Induction", 
        rationale: "High dose required to halt inflammation. Taper slowly over months." 
      },
      { 
        drug: "Methotrexate", 
        class: "Immunosuppressant", 
        dose: "15-25 mg", 
        freq: "Weekly", 
        indication: "Steroid Sparing", 
        rationale: "First-line adjunct to reduce steroid load and toxicity." 
      },
      { 
        drug: "IVIG", 
        class: "Immunoglobulin", 
        dose: "2 g/kg", 
        freq: "Monthly", 
        indication: "Refractory / Dysphagia", 
        rationale: "Modulates immune system; effective for resistant skin/muscle disease." 
      }
    ],

    lifestyle: ["Sun protection (DM rash is photosensitive).", "Swallow safety (Soft diet).", "Physical Therapy (isometric initially)."],
    
    diet: {
      eat: ["High Protein (Paneer, Soya, Eggs) for repair", "Calcium/Vit D (Steroid protection)"],
      avoid: ["Aspiration risks (Dry/Crumbly food)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "300,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "300,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "CPK", result: "4500 IU/L", notes: "Active Myositis" },
      { name: "Anti-Jo-1", result: "Positive", notes: "ILD risk" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Prednisolone 60mg OD", "Tab. Methotrexate 15mg Weekly"] }
    ]
  },

  "Pancreatic Cancer": {
    category: "Oncology / Gastroenterology",
    pathophysiology: "Malignancy arising mostly from ductal epithelium (Adenocarcinoma). KRAS mutation is an early driver. Tumors in the head cause obstructive jaundice; tail tumors present late with pain.",
    
    clinicalFeatures: {
      symptoms: ["Painless Jaundice (Head of Pancreas)", "Epigastric pain radiating to back", "Significant weight loss", "New onset Diabetes"],
      signs: ["Courvoisier's Sign (Palpable non-tender gallbladder)", "Trousseau's Sign (Migratory thrombophlebitis)", "Cachexia"]
    },

    diagnosticWorkup: [
      { test: "CECT Abdomen (Pancreatic Protocol)", finding: "Hypodense mass", significance: "Diagnosis & Staging (Vascular involvement)" },
      { test: "CA 19-9", finding: "Elevated (>37 U/mL)", significance: "Tumor Marker (Prognostic/Monitoring)" },
      { test: "EUS-FNA", finding: "Adenocarcinoma cells", significance: "Tissue diagnosis" }
    ],

    clinicalPearls: [
      { pearl: "New Diabetes.", explanation: "New onset diabetes in a thin, elderly patient is Pancreatic Cancer until proven otherwise." },
      { pearl: "Double Duct Sign.", explanation: "Dilatation of both the Common Bile Duct and Pancreatic Duct on imaging, highly suggestive of head of pancreas tumor." }
    ],
    
    redFlags: ["Unrelenting back pain (Retroperitoneal invasion)", "Ascites (Peritoneal seeding)", "Supraclavicular Node (Virchow's)", "Sister Mary Joseph Nodule"],
    differentials: ["Chronic Pancreatitis", "Choledocholithiasis", "Gastric Cancer", "Lymphoma"],

    managementRationale: [
      { 
        drug: "Gemcitabine", 
        class: "Antimetabolite", 
        dose: "1000 mg/m2", 
        freq: "Weekly", 
        indication: "Adjuvant / Palliative", 
        rationale: "Standard backbone. Inhibits DNA synthesis." 
      },
      { 
        drug: "Nab-Paclitaxel", 
        class: "Taxane", 
        dose: "125 mg/m2", 
        freq: "Weekly", 
        indication: "Metastatic", 
        rationale: "Albumin-bound paclitaxel improves uptake in pancreatic stroma." 
      },
      { 
        drug: "Pancrelipase", 
        class: "Enzyme Replacement", 
        dose: "40k-50k Units", 
        freq: "With meals", 
        indication: "Exocrine Insufficiency", 
        rationale: "Treats malabsorption and steatorrhea caused by duct blockage." 
      }
    ],

    lifestyle: ["Smoking cessation.", "Pain management (Celiac plexus block).", "Palliative care early."],
    
    diet: {
      eat: ["Small frequent meals", "MCT Oil (absorbed without enzymes)", "High calorie supplements"],
      avoid: ["High fat meals (worsens steatorrhea)", "Raw vegetables (digestive burden)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "CA 19-9", result: "500 U/mL", notes: "High tumor burden" },
      { name: "CT Scan", result: "3cm Mass Head of Pancreas", notes: "Abuts SMV" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Gemcitabine", "Cap. Pancrelipase", "Tab. Morphine"] }
    ]
  },
  "Drug Overdose (Benzodiazepines)": {
    category: "Toxicology",
    pathophysiology: "Potentiation of GABA-A receptors increases chloride influx, causing hyperpolarization and CNS depression. Unlike opioids, benzodiazepines rarely cause lethal respiratory depression unless combined with alcohol.",
    
    clinicalFeatures: {
      symptoms: ["Drowsiness", "Slurred speech (Dysarthria)", "Ataxia (Staggering gait)", "Confusion"],
      signs: ["Nystagmus", "Hypotonia", "Coma with relatively stable vitals (unless mixed ingestion)"]
    },

    diagnosticWorkup: [
      { test: "Urine Toxicology", finding: "Positive for Benzos", significance: "Qualitative screen" },
      { test: "ABG", finding: "Normal or Mild Respiratory Acidosis", significance: "Rule out respiratory failure" },
      { test: "Serum Ethanol", finding: "Level", significance: "Common co-ingestant increasing mortality" }
    ],

    clinicalPearls: [
      { pearl: "The Flumazenil Risk.", explanation: "Flumazenil can precipitate seizures in chronic users or mixed TCA overdose; use with extreme caution." },
      { pearl: "Coma with Normal Vitals.", explanation: "Classic presentation of isolated benzo overdose; distinguishes it from Opioids (Bradypnea) or Barbiturates (Shock)." }
    ],
    
    redFlags: ["Aspiration Pneumonia", "Respiratory Depression (Mixed overdose)", "Paradoxical Agitation"],
    differentials: ["Alcohol Intoxication", "Hypoglycemia", "Stroke", "Opioid Overdose"],

    managementRationale: [
      { 
        drug: "Flumazenil", 
        class: "GABA Antagonist", 
        dose: "0.2 mg IV", 
        freq: "Stat (Repeat up to 3mg)", 
        indication: "Reversal (Naive patients)", 
        rationale: "Competitively blocks BZD binding site. Contraindicated in chronic users due to seizure risk." 
      },
      { 
        drug: "Activated Charcoal", 
        class: "Adsorbent", 
        dose: "1 g/kg", 
        freq: "Stat", 
        indication: "Ingestion < 1 hour", 
        rationale: "Reduces absorption; only if airway is protected." 
      }
    ],

    lifestyle: ["Psychiatric evaluation.", "Fall precautions during recovery.", "Avoid driving for 24h."],
    
    diet: {
      eat: ["Fluids once awake"],
      avoid: ["Alcohol", "Caffeine (during recovery phase)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "GCS", result: "10/15", notes: "Drowsy" },
      { name: "Pupils", result: "Normal size", notes: "Reactive" }
    ],
    treatment: [
      { day: 1, meds: ["Observation", "IV Fluids", "Wait for clearance"] }
    ]
  },

  "Menstrual Disorders (Amenorrhea)": {
    category: "Reproductive Health",
    pathophysiology: "Absence of menses due to disruption in the Hypothalamic-Pituitary-Ovarian (HPO) axis or anatomical outflow tract defects. Primary (never started) vs Secondary (stopped for >3-6 months).",
    
    clinicalFeatures: {
      symptoms: ["No periods", "Galactorrhea (Prolactinoma)", "Headache/Visual changes", "Hot flashes (POF)"],
      signs: ["Hirsutism (PCOS)", "Vaginal dryness (Estrogen deficiency)", "Short stature (Turner's)"]
    },

    diagnosticWorkup: [
      { test: "Beta-HCG", finding: "Negative", significance: "Rule out Pregnancy first" },
      { test: "FSH / LH", finding: "High (Ovarian failure) / Low (Hypothalamic)", significance: "Localizes the defect" },
      { test: "Progesterone Challenge", finding: "Withdrawal Bleed", significance: "Confirms intact uterus and estrogen presence (Anovulation)" }
    ],

    clinicalPearls: [
      { pearl: "Prolactin Check.", explanation: "Hyperprolactinemia inhibits GnRH pulsatility; always screen in secondary amenorrhea." },
      { pearl: "Functional Hypothalamic Amenorrhea.", explanation: "Common in athletes or anorexia due to energy deficit suppressing the axis." }
    ],
    
    redFlags: ["Visual Field Defect (Pituitary Macroadenoma)", "Virilization (Adrenal Tumor)", "Severe Headaches"],
    differentials: ["Pregnancy", "PCOS", "Thyroid Dysfunction", "Asherman's Syndrome"],

    managementRationale: [
      { 
        drug: "Medroxyprogesterone", 
        class: "Progestin", 
        dose: "10 mg", 
        freq: "OD x 10 days", 
        indication: "Progesterone Challenge", 
        rationale: "Induces withdrawal bleed to diagnose anovulation and shed endometrium." 
      },
      { 
        drug: "Ethinylestradiol + Desogestrel", 
        class: "OCP", 
        dose: "Standard", 
        freq: "OD", 
        indication: "HPO Axis Restoration", 
        rationale: "Provides estrogen replacement and regulates cycles in PCOS/Hypogonadism." 
      },
      { 
        drug: "Cabergoline", 
        class: "Dopamine Agonist", 
        dose: "0.25-0.5 mg", 
        freq: "Weekly", 
        indication: "Hyperprolactinemia", 
        rationale: "Shrinks pituitary prolactinomas and restores ovulation." 
      }
    ],

    lifestyle: ["Weight modulation (BMI >19 required for menses).", "Stress reduction.", "Calcium/Vit D if hypoestrogenic."],
    
    diet: {
      eat: ["Sesame seeds/Jaggery (Traditional emmenagogues)", "Iron rich foods (if anemic)", "Healthy fats"],
      avoid: ["Excessive caffeine", "Extreme calorie restriction"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Prolactin", result: "80 ng/mL", notes: "Elevated" },
      { name: "TSH", result: "3.5 mIU/L", notes: "Normal" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Cabergoline 0.5mg Weekly", "Dietary Counseling"] }
    ]
  },

  "Organ Transplant Rejection": {
    category: "Immunology / Transplant",
    pathophysiology: "Host immune system recognition of foreign HLA antigens on the graft. T-cell mediated (Acute Cellular) or Antibody-mediated (Humoral) damage leading to graft dysfunction.",
    
    clinicalFeatures: {
      symptoms: ["Fever", "Graft tenderness (e.g., over kidney)", "Decreased urine output (Kidney)", "Malaise"],
      signs: ["Hypertension", "Edema", "Rising Creatinine/LFTs"]
    },

    diagnosticWorkup: [
      { test: "Biopsy of Graft", finding: "Lymphocytic infiltration / C4d staining", significance: "Gold Standard Confirmation" },
      { test: "Drug Levels (Tacrolimus)", finding: "Sub-therapeutic", significance: "Common cause of rejection" },
      { test: "Donor Specific Antibodies (DSA)", finding: "Positive", significance: "Indicates antibody-mediated rejection" }
    ],

    clinicalPearls: [
      { pearl: "Triple Therapy.", explanation: "Standard maintenance involves Calcineurin Inhibitor + Antimetabolite + Steroid." },
      { pearl: "Infection vs Rejection.", explanation: "Symptoms overlap; biopsy is crucial because treatment is opposite (Immunosuppression vs Antibiotics)." }
    ],
    
    redFlags: ["Anuria", "High Fever (CMV/Sepsis)", "Graft Rupture", "New Diabetes (NODAT from Tacrolimus)"],
    differentials: ["Drug Toxicity (Nephrotoxicity)", "Infection (CMV/BK Virus)", "Surgical Complication (Leak/Stenosis)"],

    managementRationale: [
      { 
        drug: "Tacrolimus", 
        class: "Calcineurin Inhibitor", 
        dose: "Titrated to trough (5-10 ng/mL)", 
        freq: "BD", 
        indication: "Maintenance", 
        rationale: "Inhibits IL-2 production blocking T-cell activation. Potent but nephrotoxic." 
      },
      { 
        drug: "Mycophenolate Mofetil", 
        class: "Antimetabolite", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "Maintenance", 
        rationale: "Inhibits purine synthesis specific to lymphocytes." 
      },
      { 
        drug: "Methylprednisolone", 
        class: "Corticosteroid", 
        dose: "500-1000 mg (Pulse)", 
        freq: "IV OD x 3d", 
        indication: "Acute Rejection", 
        rationale: "Pulse therapy to rapidly halt cellular rejection." 
      }
    ],

    lifestyle: ["Strict drug adherence.", "Infection avoidance (Masks/Crowds).", "Sun protection (Skin cancer risk)."],
    
    diet: {
      eat: ["Cooked food ONLY (Low microbial diet)", "Boiled water", "Peelable fruits"],
      avoid: ["Raw salads/chutneys", "Grapefruit (Tacrolimus toxicity)", "Street food"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "5,000 /cmm", plt: "150,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "5,000 /cmm", plt: "150,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "Creatinine", result: "2.5 mg/dL", notes: "Rising (Baseline 1.2)" },
      { name: "Tacrolimus Level", result: "3 ng/mL", notes: "Sub-therapeutic" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Methylprednisolone Pulse", "Adjust Tacrolimus Dose"] }
    ]
  },

  "Fungal Skin Infections (Candidiasis)": {
    category: "Dermatology / Infectious Disease",
    pathophysiology: "Opportunistic overgrowth of Candida albicans (yeast) in warm, moist areas or mucous membranes, often due to antibiotic use, diabetes, or immunosuppression.",
    
    clinicalFeatures: {
      symptoms: ["Intense itching", "Burning sensation", "White discharge (Vaginal/Oral)"],
      signs: ["Beefy red plaques with satellite lesions", "Curd-like white patches (Thrush)", "Intertrigo (folds)"]
    },

    diagnosticWorkup: [
      { test: "KOH Mount", finding: "Budding yeast + Pseudohyphae", significance: "Office diagnostic" },
      { test: "Clinical Exam", finding: "Scrapeable white plaques", significance: "Oral Thrush hallmark" },
      { test: "Blood Glucose", finding: "High", significance: "Screen for underlying Diabetes" }
    ],

    clinicalPearls: [
      { pearl: "Satellite Lesions.", explanation: "Small red papules scattered around the main red plaque; pathognomonic for Candida (distinguishes from Tinea)." },
      { pearl: "Antibiotic Aftermath.", explanation: "Broad spectrum antibiotics kill protective flora (Lactobacillus), allowing yeast overgrowth." }
    ],
    
    redFlags: ["Esophageal involvement (Odynophagia - AIDS defining)", "Systemic Candidemia (Fever/Shock)", "Non-healing ulcers"],
    differentials: ["Tinea Cruris (Jock Itch)", "Contact Dermatitis", "Inverse Psoriasis", "Leukoplakia"],

    managementRationale: [
      { 
        drug: "Fluconazole", 
        class: "Azole Antifungal", 
        dose: "150 mg", 
        freq: "Stat (Single dose) or Weekly", 
        indication: "Vaginal/Skin Candidiasis", 
        rationale: "Systemic distribution; inhibits ergosterol synthesis." 
      },
      { 
        drug: "Clotrimazole", 
        class: "Topical Azole", 
        dose: "1% Cream/Pessary", 
        freq: "BD / HS", 
        indication: "Cutaneous/Vaginal", 
        rationale: "Direct topical action with minimal absorption." 
      },
      { 
        drug: "Nystatin", 
        class: "Polyene", 
        dose: "100,000 U/ml Susp", 
        freq: "QID (Swish & Swallow)", 
        indication: "Oral Thrush", 
        rationale: "Non-absorbable; works locally in the gut/mouth." 
      }
    ],

    lifestyle: ["Keep areas dry (Powder).", "Loose cotton underwear.", "Glycemic control."],
    
    diet: {
      eat: ["Probiotics (Curd/Yogurt) - restores flora", "Garlic"],
      avoid: ["Excess Sugar/Sweets (Fuels yeast)", "Yeasty foods (Bread/Beer) - subjective"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "KOH Prep", result: "Pseudohyphae", notes: "Positive" },
      { name: "RBS", result: "250 mg/dL", notes: "Uncontrolled Diabetes" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Fluconazole 150mg Stat", "Topical Clotrimazole", "Metformin adjustment"] }
    ]
  },

  "Electrolyte Imbalance (Hypocalcemia)": {
    category: "Endocrine / Nephrology",
    pathophysiology: "Low serum calcium (<8.5 mg/dL) due to Hypoparathyroidism, Vitamin D deficiency, or Renal failure. Increases neuronal excitability causing tetany.",
    
    clinicalFeatures: {
      symptoms: ["Paresthesia (Perioral/Fingertips)", "Muscle cramps", "Carpopedal spasm", "Seizures"],
      signs: ["Chvostek's Sign (Facial twitch)", "Trousseau's Sign (Carpal spasm with BP cuff)", "Prolonged QT"]
    },

    diagnosticWorkup: [
      { test: "Serum Calcium (Corrected)", finding: "< 8.5 mg/dL", significance: "Correct for Albumin levels" },
      { test: "PTH", finding: "Low (Hypopara) / High (Vit D def)", significance: "Determines etiology" },
      { test: "Magnesium", finding: "Low", significance: "Hypomagnesemia causes refractory hypocalcemia" }
    ],

    clinicalPearls: [
      { pearl: "Albumin Correction.", explanation: "Total Calcium drops by 0.8 for every 1g drop in Albumin. Always calculate Corrected Ca or check Ionized Ca." },
      { pearl: "Thyroid Surgery.", explanation: "Most common cause of acute hypoparathyroidism is accidental removal/damage during thyroidectomy." }
    ],
    
    redFlags: ["Laryngospasm (Stridor - Airway emergency)", "Seizures", "Heart Failure", "QTc > 500ms"],
    differentials: ["Hyperventilation (Alkalosis)", "Hypomagnesemia", "Tetanus", "Epilepsy"],

    managementRationale: [
      { 
        drug: "Calcium Gluconate", 
        class: "Electrolyte", 
        dose: "10-20 ml (10%)", 
        freq: "IV Slow Bolus", 
        indication: "Acute Tetany / Seizures", 
        rationale: "Rapidly raises ionized calcium. Less irritating to veins than Calcium Chloride." 
      },
      { 
        drug: "Calcium Carbonate", 
        class: "Supplement", 
        dose: "500-1000 mg", 
        freq: "BD/TID with meals", 
        indication: "Chronic Maintenance", 
        rationale: "Requires stomach acid for absorption (take with food). 40% elemental calcium." 
      },
      { 
        drug: "Calcitriol", 
        class: "Active Vitamin D", 
        dose: "0.25-0.5 mcg", 
        freq: "OD", 
        indication: "CKD / Hypoparathyroidism", 
        rationale: "Bypasses renal activation step to increase gut absorption." 
      }
    ],

    lifestyle: ["Sun exposure (Vit D).", "Fall prevention (if seizures risk)."],
    
    diet: {
      eat: ["Ragi (Finger Millet - extremely high Ca)", "Paneer/Milk", "Sesame seeds (Til)", "Curry leaves"],
      avoid: ["Caffeine (Increased excretion)", "Excess Sodium", "Phytates (reduce absorption)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "Calcium", result: "6.5 mg/dL", notes: "Symptomatic" },
      { name: "ECG", result: "QTc 520ms", notes: "Risk of Torsades" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Calcium Gluconate IV", "Tab. Calcitriol 0.25mcg"] }
    ]
  },
  "Deep Vein Thrombosis (DVT)": {
    category: "Cardiovascular / Hematology",
    pathophysiology: "Formation of a blood clot in the deep veins (usually leg) due to Virchow's Triad: Stasis (immobility), Endothelial Injury (trauma/surgery), and Hypercoagulability (genetic/cancer).",
    
    clinicalFeatures: {
      symptoms: ["Unilateral leg pain (Calf cramping)", "Swelling", "Warmth"],
      signs: ["Unilateral edema (>3cm difference)", "Tenderness along deep veins", "Homan's Sign (pain on dorsiflexion - unreliable)"]
    },

    diagnosticWorkup: [
      { test: "Compression Ultrasound (Doppler)", finding: "Non-compressible vein", significance: "Gold Standard" },
      { test: "D-Dimer", finding: "Elevated (>500 ng/mL)", significance: "High sensitivity/Low specificity (Rules out DVT)" },
      { test: "Wells Score", finding: "Score > 2", significance: "High pre-test probability" }
    ],

    clinicalPearls: [
      { pearl: "PE Risk.", explanation: "Proximal DVTs (above knee) have a 50% risk of Pulmonary Embolism if untreated." },
      { pearl: "Post-Thrombotic Syndrome.", explanation: "Chronic pain and swelling due to valve destruction; occurs in 20-50% of patients despite treatment." }
    ],
    
    redFlags: ["Dyspnea/Chest Pain (PE)", "Phlegmasia Cerulea Dolens (Blue leg - limb threatening)", "Hypotension"],
    differentials: ["Cellulitis", "Baker's Cyst Rupture", "Muscle Strain", "Lymphedema"],

    managementRationale: [
      { 
        drug: "Enoxaparin", 
        class: "LMWH", 
        dose: "1 mg/kg BD", 
        freq: "SC", 
        indication: "Initial Anticoagulation", 
        rationale: "Immediate action; safe in pregnancy and cancer. Bridge to oral agents." 
      },
      { 
        drug: "Warfarin", 
        class: "Vitamin K Antagonist", 
        dose: "Titrated to INR 2-3", 
        freq: "OD", 
        indication: "Long-term Maintenance", 
        rationale: "Cost-effective standard; requires monitoring." 
      },
      { 
        drug: "Apixaban", 
        class: "DOAC", 
        dose: "10 mg BD x 7d -> 5 mg", 
        freq: "BD", 
        indication: "Monotherapy", 
        rationale: "No monitoring needed; lower bleed risk than Warfarin." 
      }
    ],

    lifestyle: ["Compression stockings.", "Early mobilization.", "Avoid crossing legs."],
    
    diet: {
      eat: ["Ginger/Garlic (mild natural anti-platelet)", "Hydration"],
      avoid: ["Vitamin K fluctuations (if on Warfarin)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Doppler USG", result: "Non-compressible Popliteal Vein", notes: "Positive DVT" },
      { name: "D-Dimer", result: "1500 ng/mL", notes: "Elevated" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Enoxaparin 60mg BD", "Tab. Warfarin 5mg OD"] }
    ]
  },

  "ARDS (Acute Respiratory Distress Syndrome)": {
    category: "Critical Care / Respiratory",
    pathophysiology: "Widespread inflammatory lung injury causing diffuse alveolar damage, increased capillary permeability, and non-cardiogenic pulmonary edema, leading to severe refractory hypoxemia.",
    
    clinicalFeatures: {
      symptoms: ["Severe Dyspnea (rapid onset < 7 days)", "Agitation", "Air hunger"],
      signs: ["Tachypnea", "Cyanosis", "Diffuse crackles", "Intercostal retractions"]
    },

    diagnosticWorkup: [
      { test: "Berlin Definition", finding: "P/F Ratio < 300", significance: "PaO2/FiO2 ratio classifies severity (Mild/Mod/Severe)" },
      { test: "CXR", finding: "Bilateral Opacities ('White out')", significance: "Consistent with pulmonary edema" },
      { test: "Echocardiography", finding: "Normal LVEF", significance: "Excludes cardiac cause (CHF)" }
    ],

    clinicalPearls: [
      { pearl: "Lung Protective Ventilation.", explanation: "Low Tidal Volume (6 ml/kg IBW) is the ONLY intervention proven to decrease mortality." },
      { pearl: "Baby Lungs.", explanation: "The functional lung volume is drastically reduced; high pressures cause barotrauma." }
    ],
    
    redFlags: ["Refractory Hypoxia (SpO2 < 88% despite 100% O2)", "Barotrauma (Pneumothorax)", "Multi-organ Failure"],
    differentials: ["Cardiogenic Pulmonary Edema", "Diffuse Alveolar Hemorrhage", "Acute Interstitial Pneumonia", "Pneumonia"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "High FiO2 / PEEP", 
        freq: "Continuous", 
        indication: "Hypoxemia", 
        rationale: "PEEP recruits collapsed alveoli to improve oxygenation." 
      },
      { 
        drug: "Methylprednisolone", 
        class: "Corticosteroid", 
        dose: "1 mg/kg", 
        freq: "OD", 
        indication: "Early Severe ARDS", 
        rationale: "Reduces inflammation and fibrosis (Benefit mainly in first 7-14 days)." 
      },
      { 
        drug: "Furosemide", 
        class: "Diuretic", 
        dose: "20-40 mg", 
        freq: "IV", 
        indication: "Fluid Management", 
        rationale: "Conservative fluid strategy ('Keeping dry') improves lung function." 
      }
    ],

    lifestyle: ["Prone Positioning (16h/day).", "Deep sedation/Paralysis (to sync with ventilator)."],
    
    diet: {
      eat: ["Enteral Nutrition (Tube feed) preferred", "High Protein"],
      avoid: ["Overfeeding (increases CO2 production)", "High carb load"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "20,000 /cmm (Sepsis)", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "ABG", result: "pO2 55, pCO2 35", notes: "P/F Ratio 110 (Moderate ARDS)" },
      { name: "CXR", result: "Diffuse bilat infiltrates", notes: "Non-cardiac" }
    ],
    treatment: [
      { day: 1, meds: ["Mechanical Ventilation", "Low Tidal Volume Protocol", "Sedation"] }
    ]
  },

  "Dementia (Vascular/General)": {
    category: "Neurology / Geriatrics",
    pathophysiology: "Cognitive decline caused by reduced blood flow to the brain (Vascular) due to small vessel disease or multiple strokes. Unlike Alzheimer's, progression is often 'stepwise'.",
    
    clinicalFeatures: {
      symptoms: ["Memory loss", "Executive dysfunction (Planning/Organizing)", "Mood changes (Apathy/Depression)"],
      signs: ["Focal neurological deficits", "Gait disturbance (Marche à petits pas)", "Pseudobulbar palsy (Emotional lability)"]
    },

    diagnosticWorkup: [
      { test: "MRI Brain", finding: "White matter hyperintensities / Lacunar infarcts", significance: "Structural evidence of ischemia" },
      { test: "MoCA", finding: "Deficits in executive function", significance: "More sensitive than MMSE for vascular cognitive impairment" },
      { test: "Carotid Doppler", finding: "Stenosis", significance: "Etiology check" }
    ],

    clinicalPearls: [
      { pearl: "Stepwise Decline.", explanation: "Sudden worsening followed by plateaus, correlating with new ischemic events." },
      { pearl: "Mixed Dementia.", explanation: "Vascular pathology often co-exists with Alzheimer's plaques; treating vascular risks slows AD progression too." }
    ],
    
    redFlags: ["Rapid decline (CJD)", "Incontinence/Gait Apraxia (NPH)", "Subdural Hematoma (Falls)", "Severe Depression"],
    differentials: ["Alzheimer's Disease", "Normal Pressure Hydrocephalus", "Hypothyroidism", "B12 Deficiency"],

    managementRationale: [
      { 
        drug: "Donepezil", 
        class: "AChE Inhibitor", 
        dose: "5-10 mg", 
        freq: "OD", 
        indication: "Cognitive Symptom Relief", 
        rationale: "Though approved for AD, shows modest benefit in Vascular Dementia." 
      },
      { 
        drug: "Clopidogrel", 
        class: "Antiplatelet", 
        dose: "75 mg", 
        freq: "OD", 
        indication: "Secondary Prevention", 
        rationale: "Prevents recurrent strokes/TIAs." 
      },
      { 
        drug: "Atorvastatin", 
        class: "Statin", 
        dose: "20-40 mg", 
        freq: "OD", 
        indication: "Risk Factor Control", 
        rationale: "Stabilizes plaque and reduces lipid burden." 
      }
    ],

    lifestyle: ["Cognitive Stimulation.", "Physical Exercise.", "Smoking cessation."],
    
    diet: {
      eat: ["Mediterranean Diet (Olive oil, Nuts)", "Fish (Omega-3)", "Berries"],
      avoid: ["Saturated fats", "Excess salt (HTN control)", "Processed sugar"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "MRI Brain", result: "Multiple Lacunar Infarcts", notes: "Periventricular changes" },
      { name: "HbA1c", result: "8.0%", notes: "Poor control" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Aspirin 75mg", "Tab. Donepezil 5mg", "Tab. Atorvastatin 20mg"] }
    ]
  },

  "Hyperparathyroidism": {
    category: "Endocrine",
    pathophysiology: "Excess secretion of Parathyroid Hormone (PTH), usually from a parathyroid adenoma (Primary). High PTH increases bone resorption, renal calcium reabsorption, and Vit D activation, causing Hypercalcemia.",
    
    clinicalFeatures: {
      symptoms: ["Bones (Pain/Fracture)", "Stones (Renal colic)", "Groans (Abdominal pain/Constipation)", "Moans (Psychosis/Depression)"],
      signs: ["Band Keratopathy (Calcium in cornea)", "Hypertension", "Muscle weakness"]
    },

    diagnosticWorkup: [
      { test: "Serum Calcium", finding: "Elevated (>10.5 mg/dL)", significance: "Primary screen" },
      { test: "Serum PTH", finding: "Elevated or Inappropriately Normal", significance: "Confirms PTH-dependency" },
      { test: "Sestamibi Scan", finding: "Hot spot", significance: "Localizes adenoma for surgery" }
    ],

    clinicalPearls: [
      { pearl: "Salt and Pepper Skull.", explanation: "X-ray finding showing punctate erosions of the skull vault; classic for Osteitis Fibrosa Cystica." },
      { pearl: "Brown Tumors.", explanation: "Lytic bone lesions filled with osteoclasts and hemorrhage; mimic metastases but resolve after cure." }
    ],
    
    redFlags: ["Calcium > 14 mg/dL (Hypercalcemic Crisis)", "Pancreatitis", "Short QT interval (Arrhythmia)", "Renal Failure"],
    differentials: ["Malignancy (PTHrP mediated)", "Vitamin D Toxicity", "Sarcoidosis", "Familial Hypocalciuric Hypercalcemia (FHH)"],

    managementRationale: [
      { 
        drug: "Cinacalcet", 
        class: "Calcimimetic", 
        dose: "30 mg", 
        freq: "BD", 
        indication: "Non-surgical candidates", 
        rationale: "Increases sensitivity of calcium-sensing receptor to extracellular calcium, lowering PTH." 
      },
      { 
        drug: "Zoledronic Acid", 
        class: "Bisphosphonate", 
        dose: "4 mg", 
        freq: "IV Yearly", 
        indication: "Osteoporosis / Severe Hypercalcemia", 
        rationale: "Inhibits osteoclast activity to protect bone density." 
      },
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "20-40 mg", 
        freq: "BD", 
        indication: "Acute Hypercalcemia", 
        rationale: "Increases renal calcium excretion (Only after rehydration)." 
      }
    ],

    lifestyle: ["Hydration (>2L/day) to prevent stones.", "Avoid Thiazide diuretics (worsens hypercalcemia)."],
    
    diet: {
      eat: ["Moderate Calcium (Do not restrict - stimulates PTH)", "Hydration"],
      avoid: ["Dehydration", "High oxalate (if stones present)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Calcium", result: "11.8 mg/dL", notes: "High" },
      { name: "PTH", result: "150 pg/mL", notes: "High (Primary)" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Cinacalcet 30mg BD", "Hydration"] }
    ]
  },

  "Acute Pancreatitis": {
    category: "Gastroenterology",
    pathophysiology: "Premature activation of pancreatic enzymes (Trypsin) within the pancreas leads to autodigestion, severe inflammation, and potential systemic inflammatory response (SIRS). Common causes: Gallstones, Alcohol.",
    
    clinicalFeatures: {
      symptoms: ["Severe Epigastric pain radiating to back", "Nausea/Vomiting", "Fever"],
      signs: ["Abdominal tenderness/guarding", "Cullen's Sign (Periumbilical bruising)", "Grey Turner's Sign (Flank bruising)"]
    },

    diagnosticWorkup: [
      { test: "Serum Lipase", finding: "> 3x Upper Limit Normal", significance: "Gold Standard (More specific than Amylase)" },
      { test: "CECT Abdomen", finding: "Pancreatic edema / Necrosis", significance: "Staging (Balthazar Score) - usually done after 72h" },
      { test: "Ultrasound", finding: "Gallstones / Choledocholithiasis", significance: "Etiology check" }
    ],

    clinicalPearls: [
      { pearl: "Aggressive Hydration.", explanation: "Early vigorous fluid resuscitation (250-500ml/hr) reduces necrosis and mortality." },
      { pearl: "Antibiotics?", explanation: "Prophylactic antibiotics are NOT recommended. Use only for infected necrosis confirmed by CT/FNA." }
    ],
    
    redFlags: ["Organ Failure (Shock/ARDS/AKI)", "Hypocalcemia (Saponification)", "CRP > 150 mg/L", "Infected Necrosis"],
    differentials: ["Peptic Ulcer Perforation", "Acute Cholecystitis", "Mesenteric Ischemia", "Myocardial Infarction (Inferior)"],

    managementRationale: [
      { 
        drug: "Ringer Lactate", 
        class: "Crystalloid", 
        dose: "Aggressive Bolus + Rate", 
        freq: "Continuous", 
        indication: "Resuscitation", 
        rationale: "Preferred over Saline; reduces SIRS response and maintains perfusion." 
      },
      { 
        drug: "Fentanyl / Morphine", 
        class: "Opioid", 
        dose: "Titrated", 
        freq: "IV", 
        indication: "Severe Pain", 
        rationale: "Analgesia is a priority. (Morphine causing sphincter of Oddi spasm is largely theoretical/clinical myth)." 
      },
      { 
        drug: "Ondansetron", 
        class: "Antiemetic", 
        dose: "4-8 mg", 
        freq: "IV TID", 
        indication: "Nausea", 
        rationale: "Prevents vomiting and allows bowel rest." 
      }
    ],

    lifestyle: ["Alcohol Cessation.", "Gallbladder surgery (if biliary).", "Low fat diet."],
    
    diet: {
      eat: ["NPO initially -> Clear liquids -> Low fat soft diet", "Khichdi (without Ghee)"],
      avoid: ["Fatty foods (stimulates pancreas)", "Alcohol", "Spicy food"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "15.0 g/dL (Hemoconcentration)", wbc: "16,000 /cmm", plt: "250,000 /cmm", hct: "48%" },
      progression: [{ day: 1, hb: "15.0 g/dL", wbc: "16,000 /cmm", plt: "250,000 /cmm", hct: "48%" }]
    },
    specialTests: [
      { name: "Lipase", result: "2000 U/L", notes: "Diagnostic" },
      { name: "Calcium", result: "7.8 mg/dL", notes: "Mild Hypocalcemia" }
    ],
    treatment: [
      { day: 1, meds: ["IV Ringer Lactate 200ml/hr", "Inj. Fentanyl 50mcg IV"] }
    ]
  },
  "Renal Failure (End Stage)": {
    category: "Renal / Nephrology",
    pathophysiology: "Irreversible loss of kidney function (eGFR < 15 mL/min) resulting in accumulation of uremic toxins, fluid overload, and electrolyte dysregulation necessitating Renal Replacement Therapy (RRT).",
    
    clinicalFeatures: {
      symptoms: ["Uremia (Nausea/Itching/Fatigue)", "Dyspnea (Fluid overload)", "Oliguria/Anuria", "Metallic taste"],
      signs: ["Uremic Frost (rare)", "Pericardial Friction Rub", "Pallor (sallow complexion)", "AV Fistula thrill (if present)"]
    },

    diagnosticWorkup: [
      { test: "eGFR", finding: "< 15 mL/min/1.73m²", significance: "Definition of ESRD (CKD Stage 5)" },
      { test: "Serum Electrolytes", finding: "Hyperkalemia / Hyperphosphatemia", significance: "Life-threatening complications" },
      { test: "Parathyroid Hormone", finding: "Markedly Elevated", significance: "Secondary Hyperparathyroidism" }
    ],

    clinicalPearls: [
      { pearl: "The Fistula Rule.", explanation: "No BP, IV lines, or blood draws on the arm with an AV Fistula to preserve access for dialysis." },
      { pearl: "Calciphylaxis.", explanation: "Painful skin necrosis due to calcium-phosphate deposition in vessels; high mortality risk in ESRD." }
    ],
    
    redFlags: ["K+ > 6.5 mEq/L (Cardiac Arrest risk)", "Uremic Pericarditis (Tamponade risk)", "Fluid overload refractory to diuretics"],
    differentials: ["Acute Kidney Injury (Reversible)", "Chronic Kidney Disease (earlier stages)", "Hepatorenal Syndrome"],

    managementRationale: [
      { 
        drug: "Sevelamer", 
        class: "Phosphate Binder", 
        dose: "800 mg", 
        freq: "TID with meals", 
        indication: "Hyperphosphatemia", 
        rationale: "Non-calcium binder; prevents vascular calcification while lowering serum phosphate." 
      },
      { 
        drug: "Erythropoietin (EPO)", 
        class: "ESA", 
        dose: "4000-10000 IU", 
        freq: "Twice Weekly SC", 
        indication: "Renal Anemia", 
        rationale: "Stimulates red cell production (kidneys no longer produce endogenous EPO)." 
      },
      { 
        drug: "Calcitriol", 
        class: "Active Vitamin D", 
        dose: "0.25 mcg", 
        freq: "OD/Pulse", 
        indication: "Hypocalcemia / High PTH", 
        rationale: "Suppresses PTH secretion to prevent renal bone disease." 
      }
    ],

    lifestyle: ["Dialysis Adherence (Hemodialysis/Peritoneal).", "Fluid Restriction (500ml + Urine Output).", "Fistula exercises."],
    
    diet: {
      eat: ["Leached vegetables (Boil & drain water)", "Egg whites (Albumin support)", "White rice"],
      avoid: ["Bananas/Citrus (Potassium)", "Dairy/Colas (Phosphate)", "Salt substitutes", "Star fruit (Neurotoxic in ESRD)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "8.0 g/dL", wbc: "6,000 /cmm", plt: "180,000 /cmm", hct: "24%" },
      progression: [{ day: 1, hb: "8.0 g/dL", wbc: "6,000 /cmm", plt: "180,000 /cmm", hct: "24%" }]
    },
    specialTests: [
      { name: "Creatinine", result: "8.5 mg/dL", notes: "ESRD" },
      { name: "Potassium", result: "5.8 mEq/L", notes: "Pre-dialysis" }
    ],
    treatment: [
      { day: 1, meds: ["Hemodialysis Session", "Tab. Sevelamer 800mg TID", "Inj. EPO"] }
    ]
  },

  "Aplastic Anemia": {
    category: "Hematology",
    pathophysiology: "Bone marrow failure syndrome where hematopoietic stem cells are destroyed (usually T-cell autoimmune attack), leading to hypocellular marrow and peripheral pancytopenia.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue (Anemia)", "Bleeding gums/Epistaxis (Thrombocytopenia)", "Recurrent Infections (Neutropenia)"],
      signs: ["Pallor", "Petechiae/Ecchymoses", "NO Splenomegaly (distinguishes from leukemia/hypersplenism)"]
    },

    diagnosticWorkup: [
      { test: "Bone Marrow Biopsy", finding: "Hypocellular (<25%) + Fatty marrow", significance: "Gold Standard Diagnosis" },
      { test: "CBC", finding: "Pancytopenia + Reticulocytopenia", significance: "Indicates production failure" },
      { test: "Cytogenetics", finding: "Normal", significance: "Rules out MDS/Leukemia" }
    ],

    clinicalPearls: [
      { pearl: "Dry Tap.", explanation: "Bone marrow aspiration often yields no sample because the marrow is empty (replaced by fat)." },
      { pearl: "PNH Clone.", explanation: "Always screen for Paroxysmal Nocturnal Hemoglobinuria clones, which often coexist with Aplastic Anemia." }
    ],
    
    redFlags: ["Neutropenic Sepsis (ANC < 500)", "Intracranial Hemorrhage (Platelets < 10k)", "Fungal Pneumonia"],
    differentials: ["Myelodysplastic Syndrome (MDS)", "Acute Leukemia", "B12 Deficiency", "PNH"],

    managementRationale: [
      { 
        drug: "Anti-Thymocyte Globulin (ATG)", 
        class: "Immunosuppressant", 
        dose: "Protocol based", 
        freq: "IV infusion (Inpatient)", 
        indication: "Severe AA", 
        rationale: "Destroys cytotoxic T-cells attacking stem cells. Equine ATG is superior to Rabbit ATG." 
      },
      { 
        drug: "Cyclosporine", 
        class: "Calcineurin Inhibitor", 
        dose: "5 mg/kg", 
        freq: "BD (Trough monitoring)", 
        indication: "Maintenance", 
        rationale: "Inhibits T-cell activation/IL-2 production to maintain response." 
      },
      { 
        drug: "Eltrombopag", 
        class: "TPO Receptor Agonist", 
        dose: "50-150 mg", 
        freq: "OD", 
        indication: "Refractory AA", 
        rationale: "Stimulates stem cell proliferation directly (Tri-lineage response)." 
      }
    ],

    lifestyle: ["Neutropenic Precautions.", "Avoid contact sports.", "Irradiated blood products only (prevent GVHD)."],
    
    diet: {
      eat: ["Cooked/Peeled foods only (Neutropenic diet)", "High protein"],
      avoid: ["Raw salads", "Unpasteurized dairy", "Street food (Infection risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "6.5 g/dL", wbc: "1,500 /cmm", plt: "15,000 /cmm", hct: "19%" },
      progression: [{ day: 1, hb: "6.5 g/dL", wbc: "1,500 /cmm", plt: "15,000 /cmm", hct: "19%" }]
    },
    specialTests: [
      { name: "Bone Marrow Cellularity", result: "10%", notes: "Severe Hypocellularity" },
      { name: "Reticulocyte Count", result: "0.2%", notes: "Inappropriately low" }
    ],
    treatment: [
      { day: 1, meds: ["ATG Protocol", "Tab. Cyclosporine", "Transfusion support"] }
    ]
  },

  "Herpes Simplex Virus (HSV)": {
    category: "Infectious Disease / Dermatology",
    pathophysiology: "Infection by HSV-1 (Oral) or HSV-2 (Genital). Virus infects epithelial cells causing vesicles, then establishes lifelong latency in sensory nerve ganglia, reactivating during stress.",
    
    clinicalFeatures: {
      symptoms: ["Prodrome (Tingling/Burning)", "Painful blisters", "Dysuria (Genital)", "Fever (Primary infection)"],
      signs: ["Grouped vesicles on an erythematous base", "Ulcers (post-rupture)", "Tender lymphadenopathy"]
    },

    diagnosticWorkup: [
      { test: "PCR Swab", finding: "HSV-1 or HSV-2 DNA", significance: "Gold Standard (High sensitivity)" },
      { test: "Tzanck Smear", finding: "Multinucleated Giant Cells", significance: "Rapid/Bedside (Low sensitivity)" },
      { test: "Serology", finding: "IgG (Past) / IgM (Acute)", significance: "Distinguishes primary from recurrent" }
    ],

    clinicalPearls: [
      { pearl: "Asymptomatic Shedding.", explanation: "Virus can be transmitted even when no sores are visible, though risk is highest during outbreaks." },
      { pearl: "Herpetic Whitlow.", explanation: "Painful finger infection in dentists/health workers due to direct contact with oral HSV." }
    ],
    
    redFlags: ["HSV Encephalitis (Confusion/Seizures - Temporal lobe)", "Neonatal Herpes", "Ocular Herpes (Blindness risk)", "Eczema Herpeticum"],
    differentials: ["Chancroid (Painful ulcer)", "Syphilis (Painless ulcer)", "Hand Foot Mouth Disease", "Herpes Zoster (Dermatomal)"],

    managementRationale: [
      { 
        drug: "Acyclovir", 
        class: "Nucleoside Analog", 
        dose: "400 mg", 
        freq: "TID x 7-10d (Primary) or 5d (Recurrent)", 
        indication: "Acute Episode", 
        rationale: "Inhibits viral DNA polymerase. Needs phosphorylation by viral thymidine kinase." 
      },
      { 
        drug: "Valacyclovir", 
        class: "Prodrug", 
        dose: "1 g", 
        freq: "BD", 
        indication: "First-line (Convenience)", 
        rationale: "Better bioavailability than Acyclovir; allows less frequent dosing." 
      },
      { 
        drug: "Lidocaine Jelly", 
        class: "Anesthetic", 
        dose: "2% Topical", 
        freq: "SOS", 
        indication: "Local Pain", 
        rationale: "Symptomatic relief for painful genital/oral ulcers." 
      }
    ],

    lifestyle: ["Keep lesions dry.", "Avoid sexual contact during prodrome/outbreak.", "Sunscreen (UV triggers labial herpes)."],
    
    diet: {
      eat: ["Lysine rich foods (Dairy, Fish, Chicken) - may inhibit replication", "Cool fluids (for oral sores)"],
      avoid: ["Arginine rich foods (Chocolate, Nuts, Seeds) - may trigger outbreaks", "Acidic/Spicy foods (during oral outbreak)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "HSV PCR", result: "HSV-2 Detected", notes: "Genital Herpes" },
      { name: "HIV Screen", result: "Negative", notes: "Standard co-testing" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Valacyclovir 1g BD", "Topical Lidocaine"] }
    ]
  },

  "Hashimoto’s Thyroiditis": {
    category: "Endocrine",
    pathophysiology: "Chronic autoimmune thyroiditis where T-cells and anti-TPO antibodies destroy thyroid follicles. Initially may cause transient release of hormone (Hashitoxicosis), followed by fibrosis and permanent hypothyroidism.",
    
    clinicalFeatures: {
      symptoms: ["Painless neck swelling (Goiter)", "Fatigue", "Weight gain", "Transient palpitations (early)"],
      signs: ["Firm, rubbery, nontender goiter (pebbly texture)", "Bradycardia (late)", "Dry skin"]
    },

    diagnosticWorkup: [
      { test: "Anti-TPO Antibodies", finding: "High Titer (>1000 IU/mL)", significance: "Hallmark of Hashimoto's" },
      { test: "Thyroid Ultrasound", finding: "Heterogeneous echotexture ('Giraffe pattern')", significance: "Suggests chronic inflammation" },
      { test: "TSH", finding: "Elevated", significance: "Indicates progression to Hypothyroidism" }
    ],

    clinicalPearls: [
      { pearl: "Lymphoma Risk.", explanation: "Rapidly enlarging goiter in a long-standing Hashimoto's patient raises suspicion for Thyroid Lymphoma." },
      { pearl: "Hashitoxicosis.", explanation: "Acute inflammatory phase releases stored T4/T3 causing transient hyperthyroidism; usually self-limiting." }
    ],
    
    redFlags: ["Compressive symptoms (Dysphagia/Stridor)", "Hoarseness (Recurrent laryngeal nerve)", "Rapid growth (Malignancy)"],
    differentials: ["Simple Goiter (Iodine deficiency)", "Subacute Thyroiditis (Painful)", "Graves' Disease (Diffusely smooth)", "Thyroid Cancer"],

    managementRationale: [
      { 
        drug: "Levothyroxine", 
        class: "Synthetic T4", 
        dose: "1.6 mcg/kg", 
        freq: "OD (Empty Stomach)", 
        indication: "Hypothyroidism", 
        rationale: "Replacement therapy. Dose titration based on TSH every 6-8 weeks." 
      },
      { 
        drug: "Selenium", 
        class: "Supplement", 
        dose: "200 mcg", 
        freq: "OD", 
        indication: "Autoimmunity (Adjunct)", 
        rationale: "May reduce anti-TPO titers and inflammation (Evidence mixed but commonly prescribed)." 
      }
    ],

    lifestyle: ["Regular monitoring of TSH.", "Avoid excess Iodine (can worsen autoimmunity)."],
    
    diet: {
      eat: ["Brazil nuts (Selenium source)", "Eggs", "Chicken"],
      avoid: ["Raw Goitrogens (Cabbage/Kale) - Cook them", "Soy (separate from Levothyroxine by 4h)", "Gluten (if Celiac co-exists)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Anti-TPO", result: "1500 IU/mL", notes: "Strongly Positive" },
      { name: "TSH", result: "8.5 mIU/L", notes: "Subclinical Hypothyroid" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Levothyroxine 50mcg OD", "Cap. Selenium 200mcg"] }
    ]
  },

  "Non-Hodgkin’s Lymphoma": {
    category: "Oncology / Hematology",
    pathophysiology: "Heterogeneous group of lymphoid malignancies (B-cell > T-cell) arising from clonal expansion of lymphocytes. Diffuse Large B-Cell Lymphoma (DLBCL) is the most common aggressive subtype.",
    
    clinicalFeatures: {
      symptoms: ["Painless lymphadenopathy", "B-Symptoms (Fever, Night sweats, Wt loss)", "Abdominal pain/fullness"],
      signs: ["Generalized Lymphadenopathy (non-contiguous spread)", "Hepatosplenomegaly", "Extranodal masses (Skin/GI tract)"]
    },

    diagnosticWorkup: [
      { test: "Excisional Lymph Node Biopsy", finding: "Destruction of architecture", significance: "Required for classification (CD20+ for B-cell)" },
      { test: "PET-CT Scan", finding: "FDG-avid nodes", significance: "Staging (Ann Arbor)" },
      { test: "LDH", finding: "Elevated", significance: "Prognostic marker (High turnover)" }
    ],

    clinicalPearls: [
      { pearl: "Spread Pattern.", explanation: "Unlike Hodgkin's, NHL spreads unpredictably (non-contiguous) and extranodal involvement (GI, CNS, Bone marrow) is common." },
      { pearl: "Tumor Lysis Risk.", explanation: "Aggressive lymphomas (Burkitt's/DLBCL) have high risk of TLS upon treatment initiation." }
    ],
    
    redFlags: ["Superior Vena Cava Obstruction", "Spinal Cord Compression", "Tumor Lysis Syndrome", "Neutropenic Fever"],
    differentials: ["Hodgkin's Lymphoma", "Tuberculosis (Lymphadenitis)", "Metastatic Carcinoma", "Infectious Mononucleosis"],

    managementRationale: [
      { 
        drug: "Rituximab", 
        class: "Monoclonal Antibody", 
        dose: "375 mg/m2", 
        freq: "Day 1", 
        indication: "CD20+ B-cell NHL", 
        rationale: "Targets CD20 antigen on B-cells causing lysis. Cornerstone of R-CHOP." 
      },
      { 
        drug: "Cyclophosphamide", 
        class: "Alkylating Agent", 
        dose: "750 mg/m2", 
        freq: "Day 1", 
        indication: "R-CHOP", 
        rationale: "DNA cross-linking. Risk of hemorrhagic cystitis." 
      },
      { 
        drug: "Doxorubicin", 
        class: "Anthracycline", 
        dose: "50 mg/m2", 
        freq: "Day 1", 
        indication: "R-CHOP", 
        rationale: "DNA intercalation. Dose-limiting cardiotoxicity." 
      }
    ],

    lifestyle: ["Infection prevention.", "Fertility counseling.", "Hydration (prevent TLS)."],
    
    diet: {
      eat: ["High calorie/protein (combat cachexia)", "Safe/Cooked foods (Neutropenia)"],
      avoid: ["Raw/Undercooked meats", "Unwashed produce", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.5 g/dL", wbc: "15,000 /cmm", plt: "120,000 /cmm", hct: "31%" },
      progression: [{ day: 1, hb: "10.5 g/dL", wbc: "15,000 /cmm", plt: "120,000 /cmm", hct: "31%" }]
    },
    specialTests: [
      { name: "Biopsy", result: "DLBCL", notes: "CD20 Positive" },
      { name: "LDH", result: "800 U/L", notes: "High tumor burden" }
    ],
    treatment: [
      { day: 1, meds: ["R-CHOP Regimen Cycle 1", "Tab. Allopurinol 300mg (TLS prophylaxis)"] }
    ]
  },
  "Mercury Poisoning (Hg Toxicity)": {
    category: "Toxicology",
    pathophysiology: "Mercury binds to sulfhydryl groups on enzymes (e.g., Pyruvate Dehydrogenase), disrupting cellular respiration. Elemental/Inorganic forms primarily cause corrosive GI and renal injury; Organic forms (Methylmercury) cause neurotoxicity.",
    
    clinicalFeatures: {
      symptoms: ["Metallic taste", "Tremors ('Hatter's shakes')", "Erethism (Neuropsychiatric irritability)", "Paresthesia"],
      signs: ["Gingivitis with Blue Line", "Ataxia", "Tunnel vision (Organic Hg)", "Acrodynia (Pink hands/feet in kids)"]
    },

    diagnosticWorkup: [
      { test: "24h Urine Mercury", finding: "> 20 mcg/L", significance: "Gold Standard for Inorganic/Elemental exposure" },
      { test: "Whole Blood Mercury", finding: "> 10 mcg/L", significance: "Best for Organic (Methylmercury) exposure" },
      { test: "Renal Function", finding: "Elevated Creatinine", significance: "Acute Tubular Necrosis (Inorganic toxicity)" }
    ],

    clinicalPearls: [
      { pearl: "The Mad Hatter.", explanation: "Historical occupational exposure in felt hat makers caused classic neuropsychiatric symptoms (Erethism and Tremors)." },
      { pearl: "Chelator Contraindication.", explanation: "Dimercaprol (BAL) is contraindicated in Organic (Methylmercury) poisoning as it may redistribute mercury to the brain." }
    ],
    
    redFlags: ["Anuria (Renal Failure)", "Severe GI Bleeding", "Respiratory Failure (Inhalation pneumonitis)", "Visual Field constriction"],
    differentials: ["Pheochromocytoma (Tremors/HTN)", "Parkinson's Disease", "Alcohol Withdrawal", "Arsenic Poisoning"],

    managementRationale: [
      { 
        drug: "Succimer (DMSA)", 
        class: "Chelator", 
        dose: "10 mg/kg", 
        freq: "TID x 5 days", 
        indication: "First-line Chelation", 
        rationale: "Oral, water-soluble analog of BAL with less toxicity. Increases urinary excretion of mercury." 
      },
      { 
        drug: "Dimercaprol (BAL)", 
        class: "Chelator", 
        dose: "3-5 mg/kg", 
        freq: "IM q4h", 
        indication: "Severe Symptomatic Inorganic", 
        rationale: "Traditional antidote containing sulfhydryl groups. Toxic and painful; reserve for severe renal compromise." 
      },
      { 
        drug: "Penicillamine", 
        class: "Chelator", 
        dose: "250 mg", 
        freq: "QID", 
        indication: "Alternative", 
        rationale: "Third-line agent used if DMSA is unavailable; high risk of hypersensitivity reactions." 
      }
    ],

    lifestyle: ["Remove source (broken thermometer, industrial).", "Avoid seafood during recovery.", "Monitor renal function."],
    
    diet: {
      eat: ["Selenium rich foods (Brazil nuts/Eggs) - protective interaction", "High protein"],
      avoid: ["Predatory Fish (Shark/Swordfish/Tuna) - source of methylmercury", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Blood Mercury", result: "50 mcg/L", notes: "Toxic range" },
      { name: "Urine Protein", result: "Positive", notes: "Tubular damage" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Succimer 10mg/kg TID", "Hydration Protocol"] }
    ]
  },

  "Primary Dysmenorrhea": {
    category: "Gynecology",
    pathophysiology: "Painful menstruation in the absence of pelvic pathology, caused by excessive endometrial production of Prostaglandin F2-alpha (PGF2a), leading to potent uterine vasoconstriction and ischemia.",
    
    clinicalFeatures: {
      symptoms: ["Crampy lower abdominal pain", "Radiating to back/thighs", "Nausea/Vomiting", "Headache"],
      signs: ["Normal pelvic exam", "Normal uterus size", "No adnexal tenderness"]
    },

    diagnosticWorkup: [
      { test: "Pelvic Ultrasound", finding: "Normal", significance: "Excludes secondary causes (Fibroids/Adenomyosis)" },
      { test: "Vaginal Swab", finding: "Negative", significance: "Excludes Pelvic Inflammatory Disease (PID)" },
      { test: "Beta-HCG", finding: "Negative", significance: "Rules out Ectopic Pregnancy" }
    ],

    clinicalPearls: [
      { pearl: "Start Early.", explanation: "NSAIDs are most effective if started 1-2 days BEFORE the expected onset of menses to inhibit PG synthesis early." },
      { pearl: "Secondary Clues.", explanation: "Pain beginning years after menarche, lasting longer than menses, or associated with dyspareunia suggests Secondary Dysmenorrhea (e.g., Endometriosis)." }
    ],
    
    redFlags: ["Sudden severe pain (Ectopic/Torsion)", "Heavy bleeding causing anemia", "Fever (PID)", "Progressive severity"],
    differentials: ["Endometriosis", "Adenomyosis", "Pelvic Inflammatory Disease", "Ovarian Cyst Torsion"],

    managementRationale: [
      { 
        drug: "Mefenamic Acid", 
        class: "NSAID", 
        dose: "500 mg", 
        freq: "TID", 
        indication: "First-line Analgesia", 
        rationale: "Potent inhibitor of PG synthesis and blocks PG receptors. 'Ponstan' is a staple in India." 
      },
      { 
        drug: "Drotaverine", 
        class: "Antispasmodic", 
        dose: "40-80 mg", 
        freq: "TID", 
        indication: "Cramps", 
        rationale: "Phosphodiesterase inhibitor leading to smooth muscle relaxation. Often combined with NSAID." 
      },
      { 
        drug: "Combined OCP", 
        class: "Hormonal Contraceptive", 
        dose: "Standard", 
        freq: "OD", 
        indication: "Prophylaxis", 
        rationale: "Suppresses ovulation and thins endometrium, reducing PG production substrate." 
      }
    ],

    lifestyle: ["Heat application (Hot water bottle).", "Exercise (releases endorphins).", "Yoga (Cobra/Cat pose)."],
    
    diet: {
      eat: ["Ginger Tea (Anti-inflammatory)", "Jaggery (Traditional iron/energy source)", "Magnesium rich foods (Banana/Almonds)"],
      avoid: ["Excess Salt (Bloating)", "Caffeine (Vasoconstriction)", "Cold foods (Ayurvedic belief - subjective)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "35%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "6,500 /cmm", plt: "250,000 /cmm", hct: "35%" }]
    },
    specialTests: [
      { name: "USG Pelvis", result: "Normal", notes: "Primary Dysmenorrhea" },
      { name: "Beta-HCG", result: "Negative", notes: "Not pregnant" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Mefenamic Acid 500mg TID", "Tab. Drotaverine 40mg SOS"] }
    ]
  },

  "Acute Urticaria (Type I Hypersensitivity)": {
    category: "Dermatology / Immunology",
    pathophysiology: "IgE-mediated mast cell degranulation releases Histamine, causing vasodilation and increased capillary permeability in the superficial dermis (Wheals).",
    
    clinicalFeatures: {
      symptoms: ["Intense Itching (Pruritus)", "Stinging/Burning sensation"],
      signs: ["Wheals (Raised, red, blanching plaques)", "Dermographism (Linear wheal on stroking)", "Angioedema (if deep dermis involved)"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Migratory wheals < 24h duration", significance: "Classic Urticaria presentation (Lesions move/disappear)" },
      { test: "CBC", finding: "Eosinophilia", significance: "Suggests allergic/parasitic etiology" },
      { test: "Skin Prick Test", finding: "Positive to allergen", significance: "Identifies specific trigger (delayed setting)" }
    ],

    clinicalPearls: [
      { pearl: "The 24-Hour Rule.", explanation: "Individual urticarial lesions typically last < 24 hours. If lesions persist > 24h and leave pigment, suspect Urticarial Vasculitis." },
      { pearl: "ACE Inhibitors.", explanation: "Always check drug history. ACEi can cause Bradykinin-mediated angioedema/urticaria even after years of use." }
    ],
    
    redFlags: ["Stridor/Hoarseness (Laryngeal Edema - Anaphylaxis)", "Hypotension", "Tongue Swelling", "Abdominal Pain"],
    differentials: ["Anaphylaxis", "Urticarial Vasculitis", "Scabies (Itch mimic)", "Contact Dermatitis"],

    managementRationale: [
      { 
        drug: "Levocetirizine", 
        class: "Antihistamine (2nd Gen H1)", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "First-line", 
        rationale: "Potent H1 blockade with minimal sedation compared to first-gen agents." 
      },
      { 
        drug: "Pheniramine (Avil)", 
        class: "Antihistamine (1st Gen H1)", 
        dose: "25-50 mg", 
        freq: "IM/IV/PO", 
        indication: "Acute Severe Itch", 
        rationale: "Rapid onset but sedating. Common emergency use in India for immediate relief." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "0.5-1 mg/kg", 
        freq: "OD x 3-5 days", 
        indication: "Severe/Extensive", 
        rationale: "Suppresses late-phase inflammatory cytokines; prevents recurrence." 
      }
    ],

    lifestyle: ["Avoid known triggers (Foods/Drugs).", "Cool compresses.", "Wear loose cotton clothing."],
    
    diet: {
      eat: ["Hypoallergenic diet initially", "Vitamin C (Natural antihistamine)"],
      avoid: ["Histamine rich foods (Fermented foods, Aged cheese, Wine)", "Spicy foods (vasodilation aggravates itch)", "Shellfish/Peanuts (Common triggers)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Absolute Eosinophil Count", result: "600 /uL", notes: "Mild Eosinophilia" },
      { name: "IgE Levels", result: "300 IU/mL", notes: "Atopic tendency" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Levocetirizine 5mg OD", "Tab. Prednisolone 40mg OD"] }
    ]
  },

  "Scabies (Sarcoptes Scabiei)": {
    category: "Dermatology / Infectious Disease",
    pathophysiology: "Infestation by the mite Sarcoptes scabiei var. hominis. Female mites burrow into the stratum corneum to lay eggs, causing a Type IV hypersensitivity reaction (intense itch) to mite feces/proteins.",
    
    clinicalFeatures: {
      symptoms: ["Nocturnal Pruritus (Itch worse at night)", "Family history of itch"],
      signs: ["Burrows (serpentine lines in web spaces)", "Papules/Pustules (Genitals/Axilla/Umbilicus)", "Excoriations"]
    },

    diagnosticWorkup: [
      { test: "Skin Scraping (KOH)", finding: "Mites, Eggs, or Feces (Scybala)", significance: "Gold Standard Confirmation" },
      { test: "Dermoscopy", finding: "Delta Wing Sign (Jet plane)", significance: "Head of mite visible at end of burrow" },
      { test: "Burrow Ink Test", finding: "Ink tracks in stratum corneum", significance: "Bedside clinical tool" }
    ],

    clinicalPearls: [
      { pearl: "Treat the Household.", explanation: "Symptoms take 4-6 weeks to appear in primary infestation. Asymptomatic family members MUST be treated simultaneously." },
      { pearl: "Post-Scabetic Itch.", explanation: "Itching may persist for 2-4 weeks after successful killing of mites due to residual allergic reaction to dead mites." }
    ],
    
    redFlags: ["Crusted Scabies (Norwegian - Immunocompromised)", "Secondary Bacterial Infection (Impetigo)", "Glomerulonephritis (Post-Strep complication)"],
    differentials: ["Eczema", "Insect Bites", "Prurigo Nodularis", "Lichen Planus"],

    managementRationale: [
      { 
        drug: "Permethrin", 
        class: "Pyrethroid", 
        dose: "5% Cream", 
        freq: "Overnight x 1 (Repeat in 7 days)", 
        indication: "Topical Standard", 
        rationale: "Neurotoxic to mites (Na+ channel blocker). Apply neck-down; wash off after 8-12 hours." 
      },
      { 
        drug: "Ivermectin", 
        class: "Anti-parasitic", 
        dose: "200 mcg/kg", 
        freq: "Stat (Repeat in 7-14 days)", 
        indication: "Systemic / Crusted Scabies", 
        rationale: "Paralyzes mites (Glutamate-gated Cl- channels). Easier compliance than cream." 
      },
      { 
        drug: "Levocetirizine", 
        class: "Antihistamine", 
        dose: "5 mg", 
        freq: "HS", 
        indication: "Pruritus", 
        rationale: "Symptomatic relief for itch to allow sleep." 
      }
    ],

    lifestyle: ["Wash all clothes/bedding in hot water (>60°C).", "Seal non-washables in plastic bag for 72 hours.", "Trim nails."],
    
    diet: {
      eat: ["Healthy balanced diet (Immunity)"],
      avoid: ["N/A"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Microscopy", result: "Mite + Eggs seen", notes: "Confirmed" },
      { name: "Gram Stain", result: "Negative", notes: "No superinfection" }
    ],
    treatment: [
      { day: 1, meds: ["Permethrin 5% Whole Body Application", "Tab. Ivermectin 12mg Stat"] }
    ]
  },

  "Hypernatremia": {
    category: "Electrolyte Disorder",
    pathophysiology: "Serum Sodium > 145 mEq/L indicating a relative deficit of total body water (Dehydration) compared to sodium. Hyperosmolality draws water out of cells, causing cellular shrinkage (brain dehydration).",
    
    clinicalFeatures: {
      symptoms: ["Thirst (Polydipsia)", "Weakness", "Irritability/Confusion", "Polyuria (if Diabetes Insipidus)"],
      signs: ["Dry mucous membranes", "Poor skin turgor", "Hypotension/Tachycardia (Hypovolemic)", "Hyperreflexia"]
    },

    diagnosticWorkup: [
      { test: "Serum Sodium", finding: "> 145 mEq/L", significance: "Diagnostic" },
      { test: "Urine Osmolality", finding: "Low (<300) in DI / High (>800) in Dehydration", significance: "Differentiates renal water loss from extra-renal" },
      { test: "Water Deprivation Test", finding: "Failure to concentrate urine", significance: "Diagnoses Diabetes Insipidus" }
    ],

    clinicalPearls: [
      { pearl: "Correction Speed.", explanation: "Rapid correction causes water to rush into brain cells, leading to Cerebral Edema. Max drop 10-12 mEq/L/day." },
      { pearl: "Thirst Defense.", explanation: "Hypernatremia rarely occurs in alert patients with access to water; implies disability or inability to drink." }
    ],
    
    redFlags: ["Na > 160 mEq/L (High mortality)", "Seizures", "Coma", "Intracranial Hemorrhage (Vascular tear from brain shrinkage)"],
    differentials: ["Diabetes Insipidus (Central/Nephrogenic)", "Osmotic Diuresis (DKA)", "Salt Poisoning", "Severe Dehydration"],

    managementRationale: [
      { 
        drug: "Dextrose 5% (D5W)", 
        class: "Free Water", 
        dose: "Calculated Deficit", 
        freq: "Slow IV Infusion", 
        indication: "Euvolemic Hypernatremia", 
        rationale: "Provides free water to dilute serum sodium. Metabolized to water." 
      },
      { 
        drug: "0.45% Saline (Half Normal)", 
        class: "Hypotonic Saline", 
        dose: "Maintenance", 
        freq: "IV", 
        indication: "Hypovolemic Hypernatremia", 
        rationale: "Replaces volume while providing some free water (safer than D5W in shock)." 
      },
      { 
        drug: "Desmopressin", 
        class: "ADH Analog", 
        dose: "10-40 mcg", 
        freq: "Intranasal/Oral", 
        indication: "Central Diabetes Insipidus", 
        rationale: "Replaces missing ADH to concentrate urine and retain water." 
      }
    ],

    lifestyle: ["Access to free water.", "Monitor fluid balance chart.", "Daily weights."],
    
    diet: {
      eat: ["Watery foods (Porridge/Kanji)", "Milk", "Curd"],
      avoid: ["Salt (Pickles/Papad)", "Soup cubes (High Na)", "ORS (contains Na - use plain water if Na is high)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "15.0 g/dL (Hemoconcentration)", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "45%" },
      progression: [{ day: 1, hb: "15.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "45%" }]
    },
    specialTests: [
      { name: "Serum Sodium", result: "158 mEq/L", notes: "Severe" },
      { name: "Urine Osmolality", result: "700 mOsm/kg", notes: "Intact renal response (Dehydration)" }
    ],
    treatment: [
      { day: 1, meds: ["IV D5W at 100ml/hr", "Frequent Na monitoring"] }
    ]
  },
  "Pulmonary Embolism (PE)": {
    category: "Respiratory / Vascular",
    pathophysiology: "Obstruction of the pulmonary artery or its branches by material (usually a thrombus from DVT) that originated elsewhere, leading to V/Q mismatch, hypoxia, and right heart strain.",
    
    clinicalFeatures: {
      symptoms: ["Sudden onset Dyspnea", "Pleuritic Chest Pain", "Cough/Hemoptysis", "Syncope"],
      signs: ["Tachycardia", "Tachypnea", "Loud P2", "Hypotension (Massive PE)"]
    },

    diagnosticWorkup: [
      { test: "CT Pulmonary Angiography (CTPA)", finding: "Filling defect", significance: "Gold Standard Confirmation" },
      { test: "D-Dimer", finding: "Elevated (>500 ng/mL)", significance: "High Negative Predictive Value (Rules out)" },
      { test: "ECG", finding: "S1Q3T3 Pattern", significance: "Specific but rare; Sinus Tachycardia is most common" }
    ],

    clinicalPearls: [
      { pearl: "Wells Score.", explanation: "Calculates pre-test probability. If score > 4, skip D-Dimer and go straight to CTPA." },
      { pearl: "PESI Score.", explanation: "Pulmonary Embolism Severity Index determines if patient can be treated at home (Low risk) or needs ICU." }
    ],
    
    redFlags: ["Hypotension (SBP < 90) = Massive PE", "Right Ventricular Strain (Echo)", "Cardiac Arrest (PEA)", "Refractory Hypoxia"],
    differentials: ["Myocardial Infarction", "Pneumothorax", "Pneumonia", "Costochondritis"],

    managementRationale: [
      { 
        drug: "Enoxaparin", 
        class: "LMWH", 
        dose: "1 mg/kg", 
        freq: "SC BD", 
        indication: "Acute Anticoagulation", 
        rationale: "Immediate action. Preferred over Heparin unless renal failure exists." 
      },
      { 
        drug: "Apixaban", 
        class: "DOAC", 
        dose: "10 mg BD x 7d -> 5 mg BD", 
        freq: "BD", 
        indication: "Maintenance", 
        rationale: "Oral monotherapy (no bridge needed). Non-inferior to Warfarin with less bleeding." 
      },
      { 
        drug: "Alteplase (tPA)", 
        class: "Thrombolytic", 
        dose: "100 mg", 
        freq: "IV Infusion (2h)", 
        indication: "Massive PE (Shock)", 
        rationale: "Dissolves clot rapidly. ONLY for hemodynamically unstable patients due to bleed risk." 
      }
    ],

    lifestyle: ["Early ambulation.", "Compression stockings.", "Avoid long immobility (flights)."],
    
    diet: {
      eat: ["Garlic/Onion (Natural blood thinners - mild)", "Hydration"],
      avoid: ["Vitamin K fluctuations (if on Warfarin)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "9,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "CTPA", result: "Segmental PE", notes: "Right Lower Lobe" },
      { name: "Troponin", result: "Positive", notes: "RV Strain" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Enoxaparin 60mg BD", "Oxygen Therapy"] }
    ]
  },

  "Silicosis": {
    category: "Occupational Lung Disease",
    pathophysiology: "Fibrotic lung disease caused by inhalation of crystalline silica dust (quartz), leading to macrophage activation, inflammation, and formation of silicotic nodules.",
    
    clinicalFeatures: {
      symptoms: ["Chronic dry cough", "Progressive dyspnea", "Fatigue", "Weight loss"],
      signs: ["Crackles", "Cyanosis (late)", "Clubbing (rare)"]
    },

    diagnosticWorkup: [
      { test: "Chest X-ray", finding: "Upper lobe eggshell calcification", significance: "Classic finding (Hilar nodes)" },
      { test: "HRCT Chest", finding: "Small centrilobular nodules", significance: "Higher sensitivity than CXR" },
      { test: "Spirometry", finding: "Restrictive pattern", significance: "Reduced lung volumes (FVC)" }
    ],

    clinicalPearls: [
      { pearl: "TB Risk.", explanation: "Silica impairs macrophage function, increasing susceptibility to Tuberculosis (Silico-tuberculosis)." },
      { pearl: "Occupational History.", explanation: "Crucial for diagnosis. Ask about mining, stone cutting, sandblasting, or glass manufacturing." }
    ],
    
    redFlags: ["Hemoptysis (TB/Cancer)", "Rapid progression (Acute Silicosis)", "Cor Pulmonale (Right Heart Failure)"],
    differentials: ["Tuberculosis", "Sarcoidosis", "Coal Worker's Pneumoconiosis", "Idiopathic Pulmonary Fibrosis"],

    managementRationale: [
      { 
        drug: "Supportive Care", 
        class: "N/A", 
        dose: "N/A", 
        freq: "N/A", 
        indication: "Primary Treatment", 
        rationale: "No specific cure exists. Focus on symptom relief and preventing complications." 
      },
      { 
        drug: "Bronchodilators", 
        class: "Beta-agonist/Anticholinergic", 
        dose: "Standard", 
        freq: "PRN", 
        indication: "Airflow obstruction", 
        rationale: "Symptomatic relief if mixed obstructive pattern exists." 
      },
      { 
        drug: "Isoniazid", 
        class: "Antitubercular", 
        dose: "300 mg", 
        freq: "OD", 
        indication: "Latent TB Prophylaxis", 
        rationale: "Essential in patients with positive Mantoux due to high reactivation risk." 
      }
    ],

    lifestyle: ["Smoking cessation (synergistic damage).", "Remove from exposure source.", "Flu/Pneumococcal vaccination."],
    
    diet: {
      eat: ["High protein (combat wasting)", "Antioxidant rich foods"],
      avoid: ["Dusty environments (use N95 masks)", "Smoking"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "CXR", result: "Eggshell calcification", notes: "Hilar nodes" },
      { name: "Mantoux", result: "15mm Induration", notes: "Positive" }
    ],
    treatment: [
      { day: 1, meds: ["Symptomatic Care", "TB Prophylaxis eval"] }
    ]
  },

  "Ischemic Stroke (CVA)": {
    category: "Neurology",
    pathophysiology: "Acute interruption of blood supply to a part of the brain due to thrombosis (local clot) or embolism (clot from heart/carotid), causing cytotoxic edema and neuronal necrosis.",
    
    clinicalFeatures: {
      symptoms: ["Sudden weakness (Face/Arm/Leg)", "Speech difficulty (Aphasia/Slurring)", "Vision loss", "Vertigo"],
      signs: ["Hemiparesis", "Facial droop", "Babinski positive", "Visual field defect"]
    },

    diagnosticWorkup: [
      { test: "NCCT Head", finding: "Normal (Early) or Hypodensity", significance: "Exclude Hemorrhage (Priority #1)" },
      { test: "MRI Diffusion (DWI)", finding: "Hyperintensity (Bright)", significance: "Detects ischemia within minutes (Gold Standard)" },
      { test: "Carotid Doppler / Echo", finding: "Stenosis / Thrombus", significance: "Etiology search (Large artery vs Cardioembolic)" }
    ],

    clinicalPearls: [
      { pearl: "Time is Brain.", explanation: "1.9 million neurons die every minute. Thrombolysis window is 4.5 hours from 'Last Known Well' time." },
      { pearl: "Permissive Hypertension.", explanation: "Do NOT lower BP acutely unless >220/120 mmHg (or >185/110 if giving tPA) to maintain cerebral perfusion." }
    ],
    
    redFlags: ["GCS Drop (Herniation)", "Hemorrhagic Transformation", "Seizures", "Malignant MCA Syndrome (Massive Edema)"],
    differentials: ["Hemorrhagic Stroke (ICH)", "TIA (Transient)", "Hypoglycemia (Stroke mimic)", "Todd's Paresis"],

    managementRationale: [
      { 
        drug: "Alteplase (tPA)", 
        class: "Thrombolytic", 
        dose: "0.9 mg/kg (Max 90mg)", 
        freq: "Stat (10% Bolus, 90% Infusion)", 
        indication: "< 4.5 hours onset", 
        rationale: "Converts plasminogen to plasmin to dissolve clot. Strict inclusion/exclusion criteria." 
      },
      { 
        drug: "Aspirin", 
        class: "Antiplatelet", 
        dose: "300 mg", 
        freq: "Stat (Rectal/Oral)", 
        indication: "Acute Phase (After 24h of tPA)", 
        rationale: "Prevents recurrent thrombosis. Give immediately if tPA excluded." 
      },
      { 
        drug: "Atorvastatin", 
        class: "Statin", 
        dose: "80 mg", 
        freq: "OD", 
        indication: "Secondary Prevention", 
        rationale: "Plaque stabilization and neuroprotection." 
      }
    ],

    lifestyle: ["Physiotherapy/Speech Therapy.", "Swallow test before feeding.", "Home modification (Rails)."],
    
    diet: {
      eat: ["Thickened liquids (if Dysphagia)", "Soft diet (Khichdi/Upma)", "Low salt (DASH diet)"],
      avoid: ["Water/Thin liquids (Aspiration risk)", "Dry/Crumbly foods", "Excess salt"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "220,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "220,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "NCCT Head", result: "No Hemorrhage", notes: "Early Ischemic changes MCA" },
      { name: "RBS", result: "110 mg/dL", notes: "Hypoglycemia ruled out" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Aspirin 300mg", "Tab. Atorvastatin 80mg"] }
    ]
  },

  "Hypoparathyroidism": {
    category: "Endocrine",
    pathophysiology: "Deficiency of Parathyroid Hormone (PTH), most commonly iatrogenic (post-thyroidectomy) or autoimmune, leading to hypocalcemia and hyperphosphatemia.",
    
    clinicalFeatures: {
      symptoms: ["Paresthesia (Tingling lips/fingers)", "Muscle cramps", "Tetany", "Seizures"],
      signs: ["Chvostek's Sign (Facial twitch)", "Trousseau's Sign (Carpal spasm)", "Prolonged QT interval"]
    },

    diagnosticWorkup: [
      { test: "Serum Calcium", finding: "Low (<8.5 mg/dL)", significance: "Hallmark" },
      { test: "Serum PTH", finding: "Low or Inappropriately Normal", significance: "Confirms diagnosis (distinguishes from Vit D def where PTH is high)" },
      { test: "Serum Phosphate", finding: "High", significance: "Loss of phosphaturic effect of PTH" }
    ],

    clinicalPearls: [
      { pearl: "Magnesium Check.", explanation: "Severe hypomagnesemia causes reversible hypoparathyroidism by inhibiting PTH secretion/action; must correct Mg first." },
      { pearl: "Calcium-Phosphate Product.", explanation: "Aim to keep Ca x PO4 < 55 to prevent soft tissue calcification (calciphylaxis/kidney stones)." }
    ],
    
    redFlags: ["Laryngospasm (Stridor)", "Seizures", "Heart Failure (hypocalcemic cardiomyopathy)", "QTc > 500ms"],
    differentials: ["Vitamin D Deficiency", "Pseudohypoparathyroidism (PTH Resistance)", "Hungry Bone Syndrome", "Chronic Kidney Disease"],

    managementRationale: [
      { 
        drug: "Calcium Carbonate", 
        class: "Calcium Supplement", 
        dose: "1-2 g elemental", 
        freq: "Divided doses with meals", 
        indication: "Maintenance", 
        rationale: "Binds dietary phosphate and provides calcium." 
      },
      { 
        drug: "Calcitriol", 
        class: "Active Vitamin D", 
        dose: "0.25-1 mcg", 
        freq: "OD/BD", 
        indication: "PTH Deficiency", 
        rationale: "PTH is needed to activate Vit D in kidney; Calcitriol bypasses this step." 
      },
      { 
        drug: "Calcium Gluconate", 
        class: "IV Calcium", 
        dose: "10-20 ml (10%)", 
        freq: "Slow IV", 
        indication: "Acute Tetany", 
        rationale: "Rapid correction of ionized calcium to stabilize membranes." 
      }
    ],

    lifestyle: ["Regular monitoring of Urine Calcium (Hypercalciuria risk).", "Medical alert bracelet."],
    
    diet: {
      eat: ["High Calcium (Dairy/Ragi)", "Low Phosphate (Limit processed foods/colas)"],
      avoid: ["Phytates (Spinach/Nuts) with Calcium pills (reduces absorption)", "Caffeine"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Calcium", result: "6.8 mg/dL", notes: "Symptomatic" },
      { name: "PTH", result: "10 pg/mL", notes: "Low" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Calcium Carbonate 500mg TID", "Tab. Calcitriol 0.25mcg BD"] }
    ]
  },

  "Cholelithiasis (Gallstones)": {
    category: "Gastroenterology / Surgery",
    pathophysiology: "Formation of stones in the gallbladder due to supersaturation of bile with cholesterol (80%) or pigment (bilirubin). Stasis and nucleation factors contribute.",
    
    clinicalFeatures: {
      symptoms: ["Biliary Colic (RUQ pain after fatty meal)", "Nausea/Vomiting", "Bloating"],
      signs: ["Murphy's Sign (In Cholecystitis)", "RUQ Tenderness", "Jaundice (if CBD obstruction)"]
    },

    diagnosticWorkup: [
      { test: "Ultrasound Abdomen", finding: "Echogenic foci with acoustic shadowing", significance: "Gold Standard (>95% sensitivity)" },
      { test: "LFT", finding: "Normal (unless obstruction)", significance: " elevated Alk Phos/GGT suggests Choledocholithiasis" },
      { test: "HIDA Scan", finding: "Non-visualization of GB", significance: "If USG equivocal for Cholecystitis" }
    ],

    clinicalPearls: [
      { pearl: "Asymptomatic Stones.", explanation: "Most stones ('Silent') do not require treatment unless symptoms develop or specific risks exist (e.g., Porcelain GB)." },
      { pearl: "Referred Pain.", explanation: "Pain often radiates to the right scapula/shoulder tip (Boas' sign) due to phrenic nerve irritation." }
    ],
    
    redFlags: ["Fever/Chills (Cholangitis)", "Persistent Pain > 6h (Cholecystitis)", "Jaundice", "Hypotension"],
    differentials: ["Peptic Ulcer Disease", "GERD", "Pancreatitis", "Hepatitis"],

    managementRationale: [
      { 
        drug: "Diclofenac", 
        class: "NSAID", 
        dose: "75 mg", 
        freq: "IM Stat", 
        indication: "Biliary Colic", 
        rationale: "Reduces prostaglandin-mediated gallbladder contraction and pain. Superior to opioids for colic." 
      },
      { 
        drug: "Ursodeoxycholic Acid (UDCA)", 
        class: "Bile Acid", 
        dose: "10-15 mg/kg", 
        freq: "HS", 
        indication: "Dissolution (Selected cases)", 
        rationale: "Reduces cholesterol saturation in bile. Works only for small, radiolucent stones; high recurrence." 
      },
      { 
        drug: "Mebeverine", 
        class: "Antispasmodic", 
        dose: "135 mg", 
        freq: "TID", 
        indication: "Symptomatic relief", 
        rationale: "Relieves smooth muscle spasm." 
      }
    ],

    lifestyle: ["Weight loss (gradual - rapid loss causes stones).", "Low fat diet.", "Cholecystectomy (Definitive)."],
    
    diet: {
      eat: ["High fiber", "Vegetable proteins", "Coffee (Stimulates flow - controversial)"],
      avoid: ["Fried foods (Pakora/Samosa)", "Ghee/Butter", "Full-fat dairy"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "USG Abdomen", result: "Multiple Calculi", notes: "GB wall normal" },
      { name: "Alk Phos", result: "100 IU/L", notes: "Normal" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Diclofenac 75mg IM", "Dietary restriction"] }
    ]
  },
  "Acute Tubular Necrosis (ATN)": {
    category: "Renal / Nephrology",
    pathophysiology: "Most common cause of intrinsic Acute Kidney Injury, resulting from ischemic (hypotension) or nephrotoxic injury to tubular epithelial cells. Leads to cell sloughing, muddy brown casts, and tubular obstruction.",
    
    clinicalFeatures: {
      symptoms: ["Oliguria (Decreased urine)", "Nausea/Vomiting (Uremia)", "Fluid overload", "Confusion"],
      signs: ["Edema", "Hypertension", "Arrhythmia (Hyperkalemia)", "Asterixis"]
    },

    diagnosticWorkup: [
      { test: "Urinalysis", finding: "Muddy Brown Casts", significance: "Pathognomonic for ATN" },
      { test: "FENa (Fractional Excretion of Sodium)", finding: "> 2%", significance: "Differentiates from Prerenal (<1%)" },
      { test: "BUN:Creatinine Ratio", finding: "< 20:1", significance: "Indicates intrinsic renal damage" }
    ],

    clinicalPearls: [
      { pearl: "Three Phases.", explanation: "Initiation (Injury), Maintenance (Oliguria 1-2 weeks), Recovery (Polyuria - watch for hypokalemia)." },
      { pearl: "Contrast Nephropathy.", explanation: "A specific form of ATN caused by iodinated contrast. Prevent with hydration; N-Acetylcysteine efficacy is debated." }
    ],
    
    redFlags: ["Hyperkalemia (>6.5)", "Pulmonary Edema", "Metabolic Acidosis (pH < 7.1)", "Uremic Pericarditis"],
    differentials: ["Prerenal Azotemia", "Acute Interstitial Nephritis (AIN)", "Postrenal Obstruction", "Glomerulonephritis"],

    managementRationale: [
      { 
        drug: "Furosemide", 
        class: "Loop Diuretic", 
        dose: "80-200 mg (High dose)", 
        freq: "IV Bolus", 
        indication: "Fluid Overload", 
        rationale: "Maintains urine output to manage volume; does not speed up kidney recovery." 
      },
      { 
        drug: "Calcium Gluconate", 
        class: "Electrolyte", 
        dose: "10 ml (10%)", 
        freq: "IV Stat", 
        indication: "Hyperkalemia", 
        rationale: "Stabilizes cardiac membrane against arrhythmia." 
      },
      { 
        drug: "Sodium Bicarbonate", 
        class: "Alkalinizer", 
        dose: "1 mEq/kg", 
        freq: "IV", 
        indication: "Severe Acidosis / Hyperkalemia", 
        rationale: "Shifts potassium intracellularly and corrects pH." 
      }
    ],

    lifestyle: ["Fluid Restriction (Output + 500ml).", "Daily Weights.", "Avoid nephrotoxins (NSAIDs/Aminoglycosides)."],
    
    diet: {
      eat: ["Low Potassium (Apple/Guava)", "High Calorie (Non-protein)", "Rice"],
      avoid: ["High Potassium (Banana/Coconut Water)", "High Protein (Urea load)", "Star fruit"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "10,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "10,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Urine Sediment", result: "Muddy Brown Casts", notes: "Diagnostic" },
      { name: "Creatinine", result: "3.5 mg/dL", notes: "Acute Rise" }
    ],
    treatment: [
      { day: 1, meds: ["IV Fluids (if Prerenal ruled out)", "Stop Nephrotoxins", "Dialysis standby"] }
    ]
  },

  "Disseminated Intravascular Coagulation (DIC)": {
    category: "Hematology / Critical Care",
    pathophysiology: "Systemic activation of coagulation (due to Sepsis, Trauma, Malignancy) leading to widespread microvascular thrombosis, consumption of clotting factors/platelets, and subsequent bleeding.",
    
    clinicalFeatures: {
      symptoms: ["Bleeding from multiple sites (IV lines, Gums)", "Confusion", "Dyspnea"],
      signs: ["Ecchymoses/Purpura", "Gangrene of digits (Thrombosis)", "Oozing from wounds", "Shock"]
    },

    diagnosticWorkup: [
      { test: "PT / aPTT", finding: "Prolonged", significance: "Consumption of factors" },
      { test: "Fibrinogen", finding: "Low (<100 mg/dL)", significance: "Specific consumption marker" },
      { test: "D-Dimer / FDP", finding: "Markedly Elevated", significance: "Indicates fibrinolysis of widespread clots" }
    ],

    clinicalPearls: [
      { pearl: "Treat the Cause.", explanation: "DIC is always secondary. Treating the underlying trigger (e.g., Antibiotics for Sepsis, Delivery for Abruptio Placentae) is the only cure." },
      { pearl: "Schistocytes.", explanation: "Fragmented RBCs on peripheral smear indicate Microangiopathic Hemolytic Anemia (MAHA) due to fibrin strands shearing cells." }
    ],
    
    redFlags: ["Intracranial Hemorrhage", "Multi-organ Failure (Kidney/Liver)", "Refractory Shock", "Gangrene"],
    differentials: ["TTP (Thrombotic Thrombocytopenic Purpura)", "HUS", "Liver Failure (Factor deficiency without consumption)", "Vitamin K Deficiency"],

    managementRationale: [
      { 
        drug: "Fresh Frozen Plasma (FFP)", 
        class: "Blood Product", 
        dose: "15 ml/kg", 
        freq: "Stat", 
        indication: "Active Bleeding + High INR", 
        rationale: "Replaces all clotting factors." 
      },
      { 
        drug: "Cryoprecipitate", 
        class: "Blood Product", 
        dose: "10 units", 
        freq: "Stat", 
        indication: "Fibrinogen < 100 mg/dL", 
        rationale: "Concentrated source of Fibrinogen and Factor VIII." 
      },
      { 
        drug: "Platelet Concentrate", 
        class: "Blood Product", 
        dose: "1 Unit/10kg", 
        freq: "Stat", 
        indication: "Platelets < 50k + Bleeding", 
        rationale: "Replaces consumed platelets. Avoid in TTP, but indicated in DIC with bleeding." 
      }
    ],

    lifestyle: ["ICU Care.", "Avoid traumatic procedures (IM injections).", "Pressure on bleed sites."],
    
    diet: {
      eat: ["Enteral nutrition preferred", "Vitamin K rich foods (if not bleeding/NPO)"],
      avoid: ["Herbal blood thinners (Garlic/Ginkgo)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "8.0 g/dL", wbc: "20,000 /cmm", plt: "40,000 /cmm", hct: "24%" },
      progression: [{ day: 1, hb: "8.0 g/dL", wbc: "20,000 /cmm", plt: "40,000 /cmm", hct: "24%" }]
    },
    specialTests: [
      { name: "D-Dimer", result: "> 5000 ng/mL", notes: "Very High" },
      { name: "Peripheral Smear", result: "Schistocytes", notes: "MAHA" }
    ],
    treatment: [
      { day: 1, meds: ["Treat Sepsis/Cause", "Transfuse FFP/Cryo", "IV Fluids"] }
    ]
  },

  "Dengue Fever": {
    category: "Infectious Disease",
    pathophysiology: "Viral infection (Flavivirus Serotypes 1-4) transmitted by Aedes aegypti mosquito. Causes intense systemic inflammation, capillary leak (plasma leakage), and thrombocytopenia.",
    
    clinicalFeatures: {
      symptoms: ["High Fever ('Breakbone')", "Retro-orbital pain", "Severe myalgia/arthralgia", "Rash"],
      signs: ["Petechiae", "Positive Tourniquet Test", "Hepatomegaly", "Signs of Shock (Cold clammy skin)"]
    },

    diagnosticWorkup: [
      { test: "NS1 Antigen", finding: "Positive (Day 1-5)", significance: "Early Diagnosis" },
      { test: "IgM ELISA", finding: "Positive (>Day 5)", significance: "Late Diagnosis" },
      { test: "Hematocrit", finding: "Rising (>20% increase)", significance: "Indicates Plasma Leakage (Critical Phase)" }
    ],

    clinicalPearls: [
      { pearl: "Critical Phase.", explanation: "Occurs around defervescence (fever drop, Day 3-7). Risk of shock and bleeding is highest here due to capillary leak, not during high fever." },
      { pearl: "Platelet Panic.", explanation: "Prophylactic platelet transfusion is NOT recommended unless count < 10k or active bleeding exists. Fluids are the main treatment." }
    ],
    
    redFlags: ["Pulse Pressure < 20 mmHg (Shock)", "Hematemesis/Melena", "Severe Abdominal Pain", "Lethargy/Restlessness"],
    differentials: ["Chikungunya (More joint pain)", "Malaria", "Leptospirosis", "Typhoid"],

    managementRationale: [
      { 
        drug: "Paracetamol", 
        class: "Antipyretic", 
        dose: "500-650 mg", 
        freq: "Q6H SOS", 
        indication: "Fever/Pain", 
        rationale: "Safe analgesic. NSAIDs (Aspirin/Ibuprofen) are CONTRAINDICATED due to bleeding risk." 
      },
      { 
        drug: "Normal Saline / Ringer Lactate", 
        class: "Crystalloid", 
        dose: "Maintenance + Deficit", 
        freq: "IV", 
        indication: "Dehydration / Warning Signs", 
        rationale: "Maintains intravascular volume against capillary leak. Rate titration is key." 
      },
      { 
        drug: "ORS", 
        class: "Electrolyte Solution", 
        dose: "Ad libitum", 
        freq: "Oral", 
        indication: "Non-severe Dengue", 
        rationale: "Prevents dehydration in outpatient setting." 
      }
    ],

    lifestyle: ["Bed rest.", "Mosquito net (prevent spread).", "Monitor urine output."],
    
    diet: {
      eat: ["Papaya Leaf Extract (Traditional - controversial benefit)", "Kiwi/Dragon Fruit", "Coconut water (Hydration)"],
      avoid: ["Red/Brown foods (Chocolate/Beetroot) - mimics hematemesis", "Spicy/Oily foods", "NSAIDs"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "3,000 /cmm (Leukopenia)", plt: "60,000 /cmm", hct: "45%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "3,000 /cmm", plt: "60,000 /cmm", hct: "45%" }]
    },
    specialTests: [
      { name: "NS1 Antigen", result: "Positive", notes: "Day 2" },
      { name: "Platelets", result: "45,000 /cmm", notes: "Falling trend" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Paracetamol 650mg SOS", "Oral Rehydration Therapy"] }
    ]
  },

  "Multiple Sclerosis (MS)": {
    category: "Neurology / Autoimmune",
    pathophysiology: "Autoimmune demyelination of the Central Nervous System (Brain/Spinal Cord). T-cells attack myelin sheath causing slowed conduction and axonal damage. Characterized by lesions separated in 'Time and Space'.",
    
    clinicalFeatures: {
      symptoms: ["Optic Neuritis (Painful vision loss)", "Paresthesia", "Fatigue", "Diplopia"],
      signs: ["Lhermitte's Sign (Electric shock on neck flexion)", "Uhthoff's Phenomenon (Worsening with heat)", "Internuclear Ophthalmoplegia (INO)"]
    },

    diagnosticWorkup: [
      { test: "MRI Brain/Spine", finding: "Periventricular Plaques (Dawson's Fingers)", significance: "Gold Standard (Gadolinium enhancing = Active)" },
      { test: "Lumbar Puncture", finding: "Oligoclonal Bands (IgG)", significance: "Supportive (Inflammation in CNS)" },
      { test: "VEP (Visual Evoked Potential)", finding: "Delayed latency", significance: "Detects subclinical optic nerve damage" }
    ],

    clinicalPearls: [
      { pearl: "Relapsing-Remitting.", explanation: "Most common form (85%). Acute attacks followed by partial/complete recovery. Treatment aims to prevent relapses." },
      { pearl: "Clinically Isolated Syndrome (CIS).", explanation: "First episode of neurologic symptoms. MRI findings determine high vs low risk of converting to MS." }
    ],
    
    redFlags: ["Respiratory Failure (Brainstem lesion)", "Severe Dysphagia", "Urinary Retention (Cord lesion)", "Depression/Suicide"],
    differentials: ["Neuromyelitis Optica (NMO)", "Acute Disseminated Encephalomyelitis (ADEM)", "Vitamin B12 Deficiency", "Lyme Disease"],

    managementRationale: [
      { 
        drug: "Methylprednisolone", 
        class: "Corticosteroid", 
        dose: "1 g", 
        freq: "IV OD x 3-5 days", 
        indication: "Acute Relapse", 
        rationale: "High dose speeds up recovery from attack but does not alter long-term outcome." 
      },
      { 
        drug: "Interferon Beta-1a", 
        class: "DMT (Disease Modifying Therapy)", 
        dose: "Standard", 
        freq: "SC/IM", 
        indication: "Maintenance (RRMS)", 
        rationale: "Reduces relapse rate and lesion accumulation." 
      },
      { 
        drug: "Ocrelizumab", 
        class: "Anti-CD20 Monoclonal Ab", 
        dose: "600 mg", 
        freq: "IV q6 months", 
        indication: "Primary Progressive / RRMS", 
        rationale: "Depletes B-cells; highly effective modern therapy." 
      }
    ],

    lifestyle: ["Avoid heat (Hot showers/Sun) - worsens symptoms.", "Physiotherapy.", "Vitamin D supplementation."],
    
    diet: {
      eat: ["Anti-inflammatory diet", "Vitamin D rich foods (Fish/Eggs)", "Fiber (Constipation is common)"],
      avoid: ["Saturated fats (Swank Diet theory)", "Process foods", "Salt (may worsen inflammation)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "MRI Brain", result: "Multiple Plaques", notes: "Periventricular/Juxtacortical" },
      { name: "CSF", result: "Oligoclonal Bands Positive", notes: "Diagnostic" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Methylprednisolone 1g IV", "PPI prophylaxis"] }
    ]
  },

  "Glioblastoma (GBM)": {
    category: "Oncology / Neurology",
    pathophysiology: "Most common and aggressive primary brain tumor (Grade IV Astrocytoma). Characterized by rapid growth, necrosis, and vascular proliferation. IDH-wildtype is the most common and aggressive form.",
    
    clinicalFeatures: {
      symptoms: ["Headache (Worse in morning)", "Seizures (New onset in adult)", "Personality changes", "Vomiting"],
      signs: ["Papilledema (Raised ICP)", "Hemiparesis", "Cognitive decline"]
    },

    diagnosticWorkup: [
      { test: "MRI Brain with Contrast", finding: "Ring enhancing lesion with central necrosis", significance: "Gold Standard Imaging" },
      { test: "Biopsy / Resection", finding: "Pseudopalisading necrosis", significance: "Histological Hallmark" },
      { test: "Molecular Markers", finding: "MGMT Methylation / IDH Status", significance: "Predicts response to Temozolomide" }
    ],

    clinicalPearls: [
      { pearl: "Butterfly Glioma.", explanation: "GBM often crosses the corpus callosum to the opposite hemisphere, resembling a butterfly." },
      { pearl: "Seizure Prophylaxis.", explanation: "Levetiracetam is preferred over Phenytoin as it does not induce liver enzymes (CYP450) and won't interact with chemo." }
    ],
    
    redFlags: ["Cushing's Triad (Bradycardia, HTN, Irreg Resp) = Herniation", "Sudden coma (Hemorrhage)", "Status Epilepticus"],
    differentials: ["Metastasis (Lung/Breast/Melanoma)", "Brain Abscess", "Lymphoma (Primary CNS)", "Meningioma"],

    managementRationale: [
      { 
        drug: "Dexamethasone", 
        class: "Corticosteroid", 
        dose: "4-16 mg", 
        freq: "Divided doses", 
        indication: "Peritumoral Edema", 
        rationale: "Rapidly reduces vasogenic edema and ICP, improving neurological function." 
      },
      { 
        drug: "Temozolomide", 
        class: "Alkylating Agent", 
        dose: "75 mg/m2", 
        freq: "Daily (with Radiation)", 
        indication: "Stupp Protocol", 
        rationale: "Oral chemo agent that crosses BBB. Works best if MGMT promoter is methylated." 
      },
      { 
        drug: "Levetiracetam", 
        class: "Anticonvulsant", 
        dose: "500-1000 mg", 
        freq: "BD", 
        indication: "Seizure Control", 
        rationale: "Prevents seizures which increase ICP. Safe metabolic profile." 
      }
    ],

    lifestyle: ["Seizure precautions (No driving).", "Rehabilitation (OT/PT).", "Palliative care involvement."],
    
    diet: {
      eat: ["Ketogenic Diet (Theory: starve tumor of glucose - controversial)", "High protein (post-surgery)"],
      avoid: ["Alcohol", "Caffeine (if seizure prone)", "Raw meat (infection risk on chemo)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "MRI Brain", result: "4cm Ring Enhancing Lesion", notes: "Right Frontal Lobe" },
      { name: "Biopsy", result: "Glioblastoma, IDH Wildtype", notes: "Poor prognosis" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Dexamethasone 4mg QID", "Tab. Levetiracetam 500mg BD", "Neurosurgery Consult"] }
    ]
  },

  "Meningioma": {
    category: "Oncology / Neurology",
    pathophysiology: "Slow-growing extra-axial tumor arising from arachnoid cap cells of the meninges. Usually benign (WHO Grade I) but can cause symptoms by compression of adjacent brain tissue.",
    
    clinicalFeatures: {
      symptoms: ["Headache (Chronic)", "Seizures (Focal)", "Vision loss (if near optic nerve)", "Personality change"],
      signs: ["Focal deficit (Location dependent)", "Proptosis (Sphenoid wing)", "Foster Kennedy Syndrome (Olfactory groove)"]
    },

    diagnosticWorkup: [
      { test: "MRI Brain with Contrast", finding: "Dural Tail Sign", significance: "Classic radiological feature" },
      { test: "CT Scan", finding: "Hyperdense / Calcification", significance: "Can detect calcified Psammoma bodies" },
      { test: "Biopsy", finding: "Psammoma Bodies / Whorls", significance: "Histological Hallmark" }
    ],

    clinicalPearls: [
      { pearl: "Hormonal Growth.", explanation: "Meningiomas express Progesterone receptors; can grow during pregnancy or with HRT." },
      { pearl: "Incidentaloma.", explanation: "Often found incidentally on scans for other reasons. Small, asymptomatic ones in elderly can be observed (Wait and Watch)." }
    ],
    
    redFlags: ["Rapid growth (Atypical/Malignant transformation)", "Intractable seizures", "Vision threat", "Midline shift"],
    differentials: ["Glioblastoma", "Metastasis (Dural)", "Hemangiopericytoma", "Schwannoma"],

    managementRationale: [
      { 
        drug: "Dexamethasone", 
        class: "Corticosteroid", 
        dose: "4-8 mg", 
        freq: "BD", 
        indication: "Cerebral Edema", 
        rationale: "Used mainly perioperatively or if significant mass effect exists." 
      },
      { 
        drug: "Levetiracetam", 
        class: "Anticonvulsant", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Seizure Prophylaxis", 
        rationale: "Used if tumor location is epileptogenic (Cortical surface)." 
      },
      { 
        drug: "Hydroxyurea", 
        class: "Chemotherapy", 
        dose: "Variable", 
        freq: "Daily", 
        indication: "Unresectable/Recurrent", 
        rationale: "Limited efficacy; Surgery/Radiation is primary treatment." 
      }
    ],

    lifestyle: ["Regular MRI surveillance.", "Avoid hormonal contraceptives (if possible)."],
    
    diet: {
      eat: ["Balanced diet"],
      avoid: ["Hormone supplements (Progesterone)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "MRI Brain", result: "Extra-axial mass", notes: "Dural tail present" },
      { name: "Biopsy", result: "Meningothelial Meningioma", notes: "Grade I" }
    ],
    treatment: [
      { day: 1, meds: ["Observation", "Surgical Evaluation"] }
    ]
  },
  "Radiation Exposure (Acute Radiation Syndrome)": {
    category: "Emergency / Toxicology",
    pathophysiology: "Ionizing radiation causes direct DNA damage and free radical generation, leading to apoptosis of rapidly dividing cells (Hematopoietic, GI, Cutaneous). Severity depends on dose (Gray) and duration.",
    
    clinicalFeatures: {
      symptoms: ["Nausea/Vomiting (Prodromal marker)", "Diarrhea", "Fatigue", "Epilation (Hair loss)"],
      signs: ["Erythema (Radiation burns)", "Pancytopenia", "Hypotension (CV collapse in lethal doses)"]
    },

    diagnosticWorkup: [
      { test: "Complete Blood Count", finding: "Lymphocyte depletion", significance: "Absolute Lymphocyte Count at 48h predicts survival (Andrews Lymphocyte Nomogram)" },
      { test: "Chromosomal Analysis", finding: "Dicentric chromosomes", significance: "Biological Dosimetry (Gold Standard)" },
      { test: "Amylase", finding: "Elevated", significance: "Salivary gland damage marker" }
    ],

    clinicalPearls: [
      { pearl: "Time to Vomiting.", explanation: "Vomiting < 1 hour after exposure suggests a lethal dose (>4-6 Gy). Vomiting > 4 hours suggests a survivable dose." },
      { pearl: "Walking Ghost Phase.", explanation: "A latent period of apparent well-being often precedes the lethal manifest illness phase." }
    ],
    
    redFlags: ["Vomiting within 1 hour", "Neurovascular collapse", "Absolute Lymphocytes < 100/mm3", "Severe burns > 50% BSA"],
    differentials: ["Thermal Burns", "Sepsis", "Chemotherapy Overdose", "Chemical poisoning"],

    managementRationale: [
      { 
        drug: "Filgrastim (G-CSF)", 
        class: "Colony Stimulating Factor", 
        dose: "5-10 mcg/kg", 
        freq: "SC Daily", 
        indication: "Hematopoietic Syndrome", 
        rationale: "Accelerates neutrophil recovery to prevent opportunistic sepsis." 
      },
      { 
        drug: "Potassium Iodide (KI)", 
        class: "Thyroid Shield", 
        dose: "130 mg", 
        freq: "Stat", 
        indication: "Radioiodine Exposure", 
        rationale: "Saturates thyroid gland with stable iodine, blocking uptake of radioactive I-131." 
      },
      { 
        drug: "Ondansetron", 
        class: "Antiemetic", 
        dose: "8 mg", 
        freq: "TID", 
        indication: "Prodromal Vomiting", 
        rationale: "Control of symptoms to prevent dehydration." 
      }
    ],

    lifestyle: ["Decontamination (Remove clothes = 90% contam removal).", "Isolation (Reverse isolation for neutropenia)."],
    
    diet: {
      eat: ["High calorie/protein (Tissue repair)", "Cooked food only (Neutropenic)"],
      avoid: ["Raw vegetables/fruits", "Probiotics (risk of fungemia in immunosuppression)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "2,000 /cmm (Falling)", plt: "100,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "2,000 /cmm", plt: "100,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Lymphocyte Count", result: "500 /mm3", notes: "Severe exposure" },
      { name: "Dosimetry", result: "3 Gy estimated", notes: "Hematopoietic Syndrome" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Filgrastim", "Isolation", "Antibiotic Prophylaxis"] }
    ]
  },

  "Prostatitis": {
    category: "Urology",
    pathophysiology: "Inflammation of the prostate gland. Acute Bacterial Prostatitis is a severe infection (E. coli). Chronic Prostatitis/CPPS is a pain syndrome with/without bacteria involving pelvic floor dysfunction.",
    
    clinicalFeatures: {
      symptoms: ["Perineal/Pelvic pain", "Dysuria", "Frequency/Urgency", "Painful ejaculation"],
      signs: ["Tender, boggy prostate (Chronic)", "Hot, swollen, exquisite tenderness (Acute)", "Fever (Acute)"]
    },

    diagnosticWorkup: [
      { test: "Urinalysis", finding: "Pyuria/Bacteria", significance: "Positive in Acute; often negative in CPPS" },
      { test: "Meares-Stamey 4-Glass Test", finding: "WBCs in prostatic secretions", significance: "Gold Standard for localization (seldom done now)" },
      { test: "DRE", finding: "Tender prostate", significance: "Diagnostic (Contraindicated if abscess suspected)" }
    ],

    clinicalPearls: [
      { pearl: "Don't Massage Acute.", explanation: "Vigorous prostate massage in Acute Bacterial Prostatitis can precipitate bacteremia and septic shock." },
      { pearl: "Penetration Issue.", explanation: "Most antibiotics penetrate the prostate poorly. Fluoroquinolones and Trimethoprim are preferred due to lipid solubility." }
    ],
    
    redFlags: ["Urinary Retention", "High Fever/Rigors (Sepsis)", "Fluctuant mass on DRE (Abscess)", "Vertebral tenderness (Metastasis mimic)"],
    differentials: ["BPH", "Prostate Cancer", "Cystitis", "Pudendal Neuralgia"],

    managementRationale: [
      { 
        drug: "Ciprofloxacin", 
        class: "Fluoroquinolone", 
        dose: "500 mg", 
        freq: "BD x 4-6 weeks", 
        indication: "Bacterial Prostatitis", 
        rationale: "Excellent tissue penetration. Long duration required to eradicate deep-seated infection." 
      },
      { 
        drug: "Tamsulosin", 
        class: "Alpha-1 Blocker", 
        dose: "0.4 mg", 
        freq: "HS", 
        indication: "Voiding symptoms", 
        rationale: "Relaxes bladder neck/prostate smooth muscle to improve flow and reduce reflux." 
      },
      { 
        drug: "Celecoxib", 
        class: "NSAID", 
        dose: "200 mg", 
        freq: "BD", 
        indication: "Pain / CPPS", 
        rationale: "Anti-inflammatory effect helps with chronic pelvic pain symptoms." 
      }
    ],

    lifestyle: ["Sitz baths (Warm water).", "Avoid cycling (Perineal pressure).", "Regular ejaculation (drains secretions)."],
    
    diet: {
      eat: ["Pumpkin seeds (Zinc)", "Tomatoes"],
      avoid: ["Spicy foods (Chili)", "Caffeine/Alcohol (Bladder irritants)", "Acidic foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "12,000 /cmm (Acute)", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Urine Culture", result: "E. coli > 10^5", notes: "Sensitive to Cipro" },
      { name: "PSA", result: "Elevated (Transient)", notes: "Do not biopsy acute" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Ciprofloxacin 500mg BD", "Tab. Celecoxib 200mg BD"] }
    ]
  },

  "Lysosomal Storage Diseases (Gaucher Disease)": {
    category: "Genetics / Metabolic",
    pathophysiology: "Autosomal recessive deficiency of Glucocerebrosidase enzyme leading to accumulation of glucocerebroside in macrophages (Gaucher cells) causing organomegaly and bone marrow replacement.",
    
    clinicalFeatures: {
      symptoms: ["Bone pain (Bone crisis)", "Fatigue", "Abdominal distension"],
      signs: ["Massive Splenomegaly", "Hepatomegaly", "Pathological fractures", "Pancytopenia"]
    },

    diagnosticWorkup: [
      { test: "Enzyme Assay", finding: "Low Glucocerebrosidase activity", significance: "Gold Standard Diagnosis (Leukocytes)" },
      { test: "Bone Marrow Biopsy", finding: "Gaucher Cells (Crinkled paper cytoplasm)", significance: "Histological Hallmark" },
      { test: "X-ray Femur", finding: "Erlenmeyer Flask Deformity", significance: "Classic radiological sign" }
    ],

    clinicalPearls: [
      { pearl: "Type 1 vs 2/3.", explanation: "Type 1 is non-neuropathic (visceral only, treatable). Types 2/3 involve CNS degeneration and have poor prognosis." },
      { pearl: "Bone Crisis.", explanation: "Acute severe bone pain mimicking osteomyelitis; caused by infarction due to marrow infiltration." }
    ],
    
    redFlags: ["Severe Thrombocytopenia", "Avascular Necrosis", "Spinal Cord Compression", "Pulmonary Hypertension"],
    differentials: ["Leukemia", "Niemann-Pick Disease", "Malaria (Splenomegaly)", "Thalassemia"],

    managementRationale: [
      { 
        drug: "Imiglucerase", 
        class: "Enzyme Replacement Therapy (ERT)", 
        dose: "60 U/kg", 
        freq: "IV q2 weeks", 
        indication: "Type 1 Gaucher", 
        rationale: "Recombinant enzyme taken up by macrophages to break down substrate. Reverses organomegaly." 
      },
      { 
        drug: "Eliglustat", 
        class: "Substrate Reduction Therapy (SRT)", 
        dose: "84 mg", 
        freq: "BD", 
        indication: "Adult Maintenance", 
        rationale: "Inhibits glucosylceramide synthase, reducing substrate production to match defective clearance." 
      },
      { 
        drug: "Alendronate", 
        class: "Bisphosphonate", 
        dose: "70 mg", 
        freq: "Weekly", 
        indication: "Osteopenia", 
        rationale: "Prevents bone loss and fractures secondary to marrow infiltration." 
      }
    ],

    lifestyle: ["Genetic counseling.", "Avoid contact sports (Splenic rupture risk).", "Pain management."],
    
    diet: {
      eat: ["High Calcium/Vit D (Bone health)", "Iron rich foods"],
      avoid: ["N/A"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.5 g/dL", wbc: "3,000 /cmm", plt: "60,000 /cmm", hct: "28%" },
      progression: [{ day: 1, hb: "9.5 g/dL", wbc: "3,000 /cmm", plt: "60,000 /cmm", hct: "28%" }]
    },
    specialTests: [
      { name: "Enzyme Assay", result: "10% Activity", notes: "Diagnostic" },
      { name: "MRI Femur", result: "Marrow Infiltration", notes: "Flask deformity" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Imiglucerase Infusion", "Tab. Calcium/Vit D"] }
    ]
  },

  "Warts (HPV)": {
    category: "Dermatology / Infectious Disease",
    pathophysiology: "Benign proliferation of skin/mucosa caused by Human Papillomavirus (HPV). Infection of basal keratinocytes leads to hyperplasia and hyperkeratosis. Common strains: 1, 2, 4 (Cutaneous); 6, 11 (Genital).",
    
    clinicalFeatures: {
      symptoms: ["Painless bumps", "Cosmetic concern", "Itching (sometimes)"],
      signs: ["Verrucous (rough) surface", "Black dots (thrombosed capillaries)", "Filiform projections"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Classic appearance", significance: "Usually sufficient" },
      { test: "Dermoscopy", finding: "Frog spawn appearance / Red-black dots", significance: "Distinguishes from Corns/Calluses" },
      { test: "Biopsy", finding: "Koilocytes", significance: "If malignancy suspected" }
    ],

    clinicalPearls: [
      { pearl: "Koebner Phenomenon.", explanation: "Trauma or scratching spreads the virus, causing new warts to appear in linear scratch lines." },
      { pearl: "Ring Wart.", explanation: "Treatment often causes a ring of new warts ('doughnut wart') around the original lesion due to inflammation-induced spread." }
    ],
    
    redFlags: ["Bleeding/Ulceration (SCC transformation)", "Rapid growth (Immunosuppression)", "Genital Warts in children (Abuse)", "Giant Condyloma (Buschke-Lowenstein)"],
    differentials: ["Corns/Calluses (Painful/Pressure points)", "Molluscum Contagiosum", "Skin Tag", "Squamous Cell Carcinoma"],

    managementRationale: [
      { 
        drug: "Salicylic Acid", 
        class: "Keratolytic", 
        dose: "16-26% Paint", 
        freq: "Daily", 
        indication: "Common Warts", 
        rationale: "Chemically destroys infected keratinocytes and stimulates local immunity." 
      },
      { 
        drug: "Imiquimod", 
        class: "Immune Response Modifier", 
        dose: "5% Cream", 
        freq: "3x/week", 
        indication: "Genital/Resistant Warts", 
        rationale: "Induces Interferon-alpha production to clear virus. High recurrence rate if stopped early." 
      },
      { 
        drug: "Podophyllotoxin", 
        class: "Antimitotic", 
        dose: "0.5% Solution", 
        freq: "BD x 3 days", 
        indication: "Genital Warts", 
        rationale: "Arrests cell division in metaphase causing necrosis of wart tissue." 
      }
    ],

    lifestyle: ["Avoid picking/scratching.", "Wear flip-flops in public showers.", "HPV Vaccination (Gardasil)."],
    
    diet: {
      eat: ["Zinc supplementation (some evidence for viral clearance)", "Immune boosting foods"],
      avoid: ["Smoking (Increases persistence of HPV)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "N", wbc: "N", plt: "N", hct: "N" },
      progression: [{ day: 1, hb: "N", wbc: "N", plt: "N", hct: "N" }]
    },
    specialTests: [
      { name: "Acetowhite Test", result: "Positive", notes: "Genital lesions" },
      { name: "HIV Screen", result: "Negative", notes: "If extensive" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Salicylic Acid", "Cryotherapy Session"] }
    ]
  },

  "Vitamin D Deficiency (Rickets/Osteomalacia)": {
    category: "Endocrine / Nutrition",
    pathophysiology: "Deficiency of Vitamin D leads to reduced intestinal calcium and phosphate absorption. This causes secondary hyperparathyroidism, bone demineralization, and soft bones (Rickets in kids, Osteomalacia in adults).",
    
    clinicalFeatures: {
      symptoms: ["Bone pain (diffuse)", "Muscle weakness (Proximal)", "Fatigue"],
      signs: ["Bowing of legs (Rickets)", "Waddling gait", "Bone tenderness (Sternum/Tibia)", "Rachitic Rosary"]
    },

    diagnosticWorkup: [
      { test: "25-OH Vitamin D", finding: "< 20 ng/mL (Deficiency)", significance: "Gold Standard Marker of stores" },
      { test: "Serum Alkaline Phosphatase", finding: "Elevated", significance: "Indicates high bone turnover" },
      { test: "PTH", finding: "Elevated", significance: "Secondary Hyperparathyroidism" }
    ],

    clinicalPearls: [
      { pearl: "Looser's Zones.", explanation: "Pseudofractures visible on X-ray (radiolucent bands perpendicular to cortex); pathognomonic for Osteomalacia." },
      { pearl: "The Indian Paradox.", explanation: "Despite abundant sunlight, deficiency is rampant in India due to skin pigmentation (melanin blocks UV), clothing, and pollution." }
    ],
    
    redFlags: ["Hypocalcemic Tetany", "Seizures", "Pathological Fractures", "Cardiomyopathy (Hypocalcemic)"],
    differentials: ["Osteoporosis (Normal labs usually)", "Renal Osteodystrophy", "Hypophosphatemia", "Fibromyalgia (Mimic)"],

    managementRationale: [
      { 
        drug: "Cholecalciferol (Vit D3)", 
        class: "Vitamin Supplement", 
        dose: "60,000 IU", 
        freq: "Weekly x 8 weeks", 
        indication: "Deficiency Correction", 
        rationale: "Loading dose to rapidly saturate body stores. Follow with monthly maintenance." 
      },
      { 
        drug: "Calcium Carbonate", 
        class: "Mineral Supplement", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Adjunct", 
        rationale: "Provides substrate for bone mineralization. Take with food for absorption." 
      },
      { 
        drug: "Calcitriol", 
        class: "Active Vitamin D", 
        dose: "0.25 mcg", 
        freq: "OD", 
        indication: "Renal Failure / Liver Disease", 
        rationale: "Use ONLY if hydroxylation is impaired; otherwise native D3 is preferred." 
      }
    ],

    lifestyle: ["Sun exposure (11am-1pm for 15-20 mins).", "Fortified milk consumption."],
    
    diet: {
      eat: ["Milk/Curd/Paneer", "Mushrooms (Sun exposed)", "Fatty fish", "Fortified oils"],
      avoid: ["Excess Caffeine", "Phytates (Chapati/Roti may bind calcium - need soaking)", "Sunscreen (blocks synthesis)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "25-OH Vitamin D", result: "8 ng/mL", notes: "Severe Deficiency" },
      { name: "Alk Phos", result: "350 IU/L", notes: "Elevated" }
    ],
    treatment: [
      { day: 1, meds: ["Sachet Cholecalciferol 60k IU Weekly", "Tab. Calcium 500mg BD"] }
    ]
  },
  "Hyperlipidemia (Dyslipidemia)": {
    category: "Cardiovascular / Metabolic",
    pathophysiology: "Abnormal elevation of plasma cholesterol (LDL), triglycerides (TG), or low HDL, leading to lipid deposition in arterial walls (atherosclerosis) and increased risk of cardiovascular events.",
    
    clinicalFeatures: {
      symptoms: ["Usually Asymptomatic", "Chest pain (if Angina develops)", "Pancreatitis symptoms (if TG > 1000)"],
      signs: ["Xanthelasma (Eyelids)", "Tendinous Xanthomas (Achilles)", "Corneal Arcus (if young)"]
    },

    diagnosticWorkup: [
      { test: "Lipid Profile (Fasting)", finding: "LDL > 100-130 mg/dL", significance: "Primary target for therapy" },
      { test: "Triglycerides", finding: "> 150 mg/dL", significance: "Component of Metabolic Syndrome" },
      { test: "TSH", finding: "High", significance: "Rule out Hypothyroidism (secondary cause)" }
    ],

    clinicalPearls: [
      { pearl: "Friedewald Equation.", explanation: "LDL = Total Chol - HDL - (TG/5). Invalid if TG > 400 mg/dL; requires direct LDL assay." },
      { pearl: "Statin Benefit.", explanation: "Benefit is driven by LDL reduction AND pleiotropic effects (plaque stabilization, anti-inflammatory)." }
    ],
    
    redFlags: ["TG > 1000 mg/dL (Acute Pancreatitis risk)", "Chest Pain (ACS)", "Refractory Hypercholesterolemia (Familial)"],
    differentials: ["Hypothyroidism", "Nephrotic Syndrome", "Cholestasis", "Uncontrolled Diabetes"],

    managementRationale: [
      { 
        drug: "Atorvastatin", 
        class: "HMG-CoA Reductase Inhibitor", 
        dose: "40-80 mg", 
        freq: "OD (Any time)", 
        indication: "High Intensity Therapy", 
        rationale: "Potent LDL reduction (>50%). Stabilizes atherosclerotic plaques." 
      },
      { 
        drug: "Fenofibrate", 
        class: "Fibrate", 
        dose: "145 mg", 
        freq: "OD", 
        indication: "Hypertriglyceridemia (>500 mg/dL)", 
        rationale: "Activates PPAR-alpha to lower TG. Caution with statins (myopathy risk)." 
      },
      { 
        drug: "Ezetimibe", 
        class: "Cholesterol Absorption Inhibitor", 
        dose: "10 mg", 
        freq: "OD", 
        indication: "Add-on therapy", 
        rationale: "Inhibits NPC1L1 transporter in gut; useful if statin target not met." 
      }
    ],

    lifestyle: ["Weight loss (5-10%).", "Aerobic exercise (Raises HDL).", "Smoking cessation."],
    
    diet: {
      eat: ["Soluble Fiber (Oats, Isabgol) - binds bile acids", "Walnuts/Almonds", "Garlic (mild effect)"],
      avoid: ["Trans fats (Vanaspati/Dalda)", "Saturated fats (Ghee, Butter, Red Meat)", "Refined carbs (raises TG)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "LDL Cholesterol", result: "160 mg/dL", notes: "High" },
      { name: "Triglycerides", result: "250 mg/dL", notes: "Borderline High" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Atorvastatin 40mg OD", "Dietary restriction"] }
    ]
  },

  "Asbestosis": {
    category: "Occupational Lung Disease",
    pathophysiology: "Pneumoconiosis caused by inhalation of asbestos fibers. Fibers deposit in distal airways/alveoli, triggering macrophage activation, chronic inflammation, and diffuse interstitial fibrosis (lower lobe dominance).",
    
    clinicalFeatures: {
      symptoms: ["Progressive Dyspnea", "Dry Cough", "Chest tightness"],
      signs: ["Bibasilar End-inspiratory Crackles ('Velcro')", "Clubbing", "Reduced chest expansion"]
    },

    diagnosticWorkup: [
      { test: "Chest X-ray", finding: "Lower zone reticular opacities + Pleural Plaques", significance: "Hallmark (Plaques indicate exposure)" },
      { test: "HRCT Chest", finding: "Subpleural fibrosis / Honeycombing", significance: "Diagnosis & Severity assessment" },
      { test: "Spirometry", finding: "Restrictive Pattern (Low FVC, Normal FEV1/FVC)", significance: "Functional impairment" }
    ],

    clinicalPearls: [
      { pearl: "Latency.", explanation: "Disease typically manifests 20-30 years after initial exposure (insulation, shipyards, construction)." },
      { pearl: "Malignancy Risk.", explanation: "Increases risk of Bronchogenic Carcinoma (synergistic with smoking) and Mesothelioma (specific to asbestos)." }
    ],
    
    redFlags: ["Hemoptysis (Lung Cancer)", "Pleuritic Pain/Effusion (Mesothelioma)", "Cor Pulmonale (Right Heart Failure)"],
    differentials: ["Idiopathic Pulmonary Fibrosis (IPF)", "Silicosis (Upper lobes)", "Heart Failure", "Rheumatoid Lung"],

    managementRationale: [
      { 
        drug: "Oxygen", 
        class: "Medical Gas", 
        dose: "Titrate to SpO2 > 90%", 
        freq: "Continuous (LTOT)", 
        indication: "Resting/Exertional Hypoxia", 
        rationale: "Prevents pulmonary hypertension and improves quality of life." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "Trial dose", 
        freq: "OD", 
        indication: "Active Inflammation (rare)", 
        rationale: "Limited evidence; generally ineffective for established fibrosis but tried if inflammation suspected." 
      },
      { 
        drug: "Influenza Vaccine", 
        class: "Vaccine", 
        dose: "0.5 ml", 
        freq: "Annually", 
        indication: "Prevention", 
        rationale: "Prevents acute respiratory decompensation." 
      }
    ],

    lifestyle: ["Smoking cessation (Critical to reduce cancer risk).", "Pulmonary Rehabilitation.", "Avoid further dust exposure."],
    
    diet: {
      eat: ["High protein (prevent muscle wasting)", "Antioxidant rich foods"],
      avoid: ["Gas forming foods (bloating worsens dyspnea)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "6,000 /cmm", plt: "220,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "HRCT", result: "Pleural Plaques + Fibrosis", notes: "Asbestos related" },
      { name: "PFT", result: "FVC 60% predicted", notes: "Restriction" }
    ],
    treatment: [
      { day: 1, meds: ["Home Oxygen Therapy", "Supportive Care"] }
    ]
  },

  "Stroke (Hemorrhagic)": {
    category: "Neurology / Emergency",
    pathophysiology: "Rupture of a cerebral blood vessel causing bleeding into the brain parenchyma (Intracerebral Hemorrhage - ICH) or subarachnoid space (SAH). Causes mass effect, increased intracranial pressure (ICP), and cytotoxic edema.",
    
    clinicalFeatures: {
      symptoms: ["Thunderclap Headache (SAH)", "Sudden Vomiting", "Decreased Consciousness", "Focal deficit"],
      signs: ["High BP (Reactive)", "Meningeal signs (Neck stiffness - SAH)", "Bradycardia (Cushing's reflex)"]
    },

    diagnosticWorkup: [
      { test: "NCCT Head", finding: "Hyperdense (White) lesion", significance: "Gold Standard (differentiates from Ischemic)" },
      { test: "CT Angiography", finding: "Aneurysm / AVM / Spot Sign", significance: "Identify source and risk of expansion" },
      { test: "Coagulation Profile", finding: "INR/PT/PTT", significance: "Check for coagulopathy reversal need" }
    ],

    clinicalPearls: [
      { pearl: "Spot Sign.", explanation: "Tiny foci of contrast enhancement within the hematoma on CTA; predicts hematoma expansion and poor prognosis." },
      { pearl: "BP Control.", explanation: "Aggressive BP reduction is crucial to prevent hematoma expansion. Target SBP < 140 mmHg (INTERACT2 trial)." }
    ],
    
    redFlags: ["GCS < 8 (Intubate)", "Pupillary Asymmetry (Herniation)", "Seizures", "Rebleeding"],
    differentials: ["Ischemic Stroke", "Traumatic Brain Injury", "Hypertensive Encephalopathy", "Brain Tumor bleed"],

    managementRationale: [
      { 
        drug: "Mannitol", 
        class: "Osmotic Diuretic", 
        dose: "0.25-1 g/kg", 
        freq: "IV Bolus q4-6h", 
        indication: "Raised ICP", 
        rationale: "Draws water out of brain tissue to reduce edema and intracranial pressure." 
      },
      { 
        drug: "Labetalol", 
        class: "Alpha/Beta Blocker", 
        dose: "10-20 mg", 
        freq: "IV Push", 
        indication: "Hypertension (SBP > 140)", 
        rationale: "Rapidly lowers BP without increasing ICP (unlike vasodilators like Nitroprusside)." 
      },
      { 
        drug: "Vitamin K / FFP", 
        class: "Reversal Agent", 
        dose: "10 mg / 15 ml/kg", 
        freq: "IV Stat", 
        indication: "Warfarin associated ICH", 
        rationale: "Immediate reversal of anticoagulation is mandatory." 
      }
    ],

    lifestyle: ["Head elevation 30 degrees.", "Avoid straining (stool softeners).", "Strict BP compliance post-discharge."],
    
    diet: {
      eat: ["NPO initially (High aspiration risk)", "Nasogastric feeds (after stabilization)"],
      avoid: ["Oral intake until swallow test passed", "Stimulants"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "11,000 /cmm (Stress)", plt: "200,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "11,000 /cmm", plt: "200,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "NCCT Head", result: "Right Putaminal Bleed", notes: "Hypertensive etiology" },
      { name: "INR", result: "1.0", notes: "Normal" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Mannitol 100ml IV", "Inj. Labetalol titrate SBP<140"] }
    ]
  },

  "Metabolic Syndrome": {
    category: "Endocrine / Cardiology",
    pathophysiology: "A cluster of metabolic abnormalities (Insulin resistance, Visceral obesity, Dyslipidemia, HTN) that synergistically increase the risk of Type 2 Diabetes and Cardiovascular Disease.",
    
    clinicalFeatures: {
      symptoms: ["Asymptomatic", "Fatigue", "Sleep apnea symptoms"],
      signs: ["Central Obesity (Waist >90cm M / >80cm F - Asian criteria)", "Acanthosis Nigricans", "HTN (>130/85)"]
    },

    diagnosticWorkup: [
      { test: "Lipid Profile", finding: "TG > 150, HDL < 40(M)/50(F)", significance: "Dyslipidemia criteria" },
      { test: "Fasting Glucose", finding: "> 100 mg/dL", significance: "Impaired Fasting Glucose" },
      { test: "Waist Circumference", finding: "> 90cm (M) / 80cm (F)", significance: "IDF Criteria for South Asians" }
    ],

    clinicalPearls: [
      { pearl: "The Rule of 3.", explanation: "Diagnosis requires 3 of 5: Abdominal Obesity, High TG, Low HDL, High BP, High Fasting Glucose." },
      { pearl: "NAFLD Link.", explanation: "Non-Alcoholic Fatty Liver Disease is the hepatic manifestation of metabolic syndrome." }
    ],
    
    redFlags: ["Angina (Silent ischemia)", "Proteinuria (Renal damage)", "Obstructive Sleep Apnea"],
    differentials: ["Cushing's Syndrome", "Hypothyroidism", "PCOS", "Lipodystrophy"],

    managementRationale: [
      { 
        drug: "Metformin", 
        class: "Biguanide", 
        dose: "500 mg", 
        freq: "BD", 
        indication: "Insulin Resistance", 
        rationale: "Improves insulin sensitivity and assists mild weight loss." 
      },
      { 
        drug: "Telmisartan", 
        class: "ARB", 
        dose: "40 mg", 
        freq: "OD", 
        indication: "Hypertension", 
        rationale: "Has PPAR-gamma agonist properties; improves insulin sensitivity unlike Beta-blockers." 
      },
      { 
        drug: "Atorvastatin", 
        class: "Statin", 
        dose: "10-20 mg", 
        freq: "OD", 
        indication: "Dyslipidemia", 
        rationale: "Reduces CV risk and lipid levels." 
      }
    ],

    lifestyle: ["Weight loss (7-10% target).", "Moderate exercise 150 min/week.", "Sleep hygiene."],
    
    diet: {
      eat: ["Low Glycemic Index foods (Ragi, Whole grains)", "Vegetables (Fiber)", "Karela/Jamun"],
      avoid: ["Refined sugars", "Saturated fats (Ghee/Butter)", "Fruit juices", "White rice (excess)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Waist Circumference", result: "102 cm", notes: "Central Obesity" },
      { name: "Triglycerides", result: "200 mg/dL", notes: "High" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Metformin 500mg BD", "Tab. Telmisartan 40mg OD"] }
    ]
  },

  "Irritable Bowel Syndrome (IBS)": {
    category: "Gastroenterology",
    pathophysiology: "Functional bowel disorder characterized by chronic abdominal pain and altered bowel habits (Diarrhea/Constipation) without structural pathology. Involves Visceral Hypersensitivity and Gut-Brain Axis dysregulation.",
    
    clinicalFeatures: {
      symptoms: ["Abdominal pain (Relieved by defecation)", "Bloating", "Alternating diarrhea/constipation", "Mucus in stool"],
      signs: ["Normal physical exam", "Mild abdominal tenderness", "No weight loss"]
    },

    diagnosticWorkup: [
      { test: "Rome IV Criteria", finding: "Pain 1d/week + Stool changes", significance: "Clinical Diagnosis" },
      { test: "Stool Calprotectin", finding: "Normal (<50)", significance: "Rules out IBD (Crohn's/UC)" },
      { test: "Celiac Screen (tTG-IgA)", finding: "Negative", significance: "Rule out Celiac Disease" }
    ],

    clinicalPearls: [
      { pearl: "Red Flags (Alarm Features).", explanation: "IBS is a diagnosis of exclusion. Weight loss, rectal bleeding, nocturnal diarrhea, or age >50 require Colonoscopy." },
      { pearl: "Post-Infectious IBS.", explanation: "Symptoms often begin after a bout of acute gastroenteritis due to persistent low-grade inflammation." }
    ],
    
    redFlags: ["Nocturnal symptoms (waking up to pass stool)", "Blood in stool", "Anemia", "Unintentional weight loss"],
    differentials: ["Inflammatory Bowel Disease (IBD)", "Celiac Disease", "Lactose Intolerance", "Colon Cancer"],

    managementRationale: [
      { 
        drug: "Mebeverine", 
        class: "Antispasmodic", 
        dose: "135 mg", 
        freq: "TID (20 min before meals)", 
        indication: "Abdominal Pain/Cramps", 
        rationale: "Direct smooth muscle relaxant; reduces colonic spasms without anticholinergic side effects." 
      },
      { 
        drug: "Psyllium Husk (Isabgol)", 
        class: "Bulk Laxative", 
        dose: "1-2 spoons", 
        freq: "HS with water", 
        indication: "IBS-C (Constipation)", 
        rationale: "Soluble fiber regulates stool consistency (helps both C and D subtypes)." 
      },
      { 
        drug: "Rifaximin", 
        class: "Antibiotic (Non-absorbable)", 
        dose: "550 mg", 
        freq: "TID x 14 days", 
        indication: "IBS-D / Bloating", 
        rationale: "Treats Small Intestinal Bacterial Overgrowth (SIBO) which often co-exists." 
      }
    ],

    lifestyle: ["Low FODMAP Diet trial.", "Stress Management (Yoga/Meditation).", "Regular meal times."],
    
    diet: {
      eat: ["Curd/Buttermilk (Probiotics)", "Rice", "Banana", "Ginger"],
      avoid: ["FODMAPs (Garlic, Onion, Wheat, Milk)", "Gas forming foods (Beans/Rajma, Cabbage)", "Caffeine"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Colonoscopy", result: "Normal", notes: "Required if Age > 45" },
      { name: "CRP", result: "Normal", notes: "No inflammation" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Mebeverine 135mg TID", "Isabgol Husk HS"] }
    ]
  },
  "Urolithiasis": {
    category: "Urology",
    pathophysiology: "Formation of calculi in the urinary tract (kidney, ureter, bladder) due to supersaturation of stone-forming salts (Calcium Oxalate, Uric Acid) or infection (Struvite).",
    
    clinicalFeatures: {
      symptoms: ["Renal Colic (Severe flank pain radiating to groin)", "Hematuria", "Urgency/Frequency", "Nausea/Vomiting"],
      signs: ["Costovertebral angle tenderness", "Restlessness (patient cannot find comfortable position)", "Tachycardia (pain response)"]
    },

    diagnosticWorkup: [
      { test: "NCCT KUB", finding: "Hyperdense calculus", significance: "Gold Standard (detects radiolucent stones unlike X-ray)" },
      { test: "Urinalysis", finding: "RBCs + Crystals", significance: "Suggests stone type (Envelope=CaOx, Rhomboid=Uric Acid)" },
      { test: "USG KUB", finding: "Hydronephrosis / Acoustic Shadowing", significance: "First line (No radiation); good for obstruction" }
    ],

    clinicalPearls: [
      { pearl: "Size Cutoff.", explanation: "Stones < 5mm pass spontaneously in >90% of cases. Stones > 10mm rarely pass without intervention (Lithotripsy/URS)." },
      { pearl: "Calcium Paradox.", explanation: "Do NOT restrict dietary calcium. Low calcium increases oxalate absorption in the gut, worsening Calcium Oxalate stone risk." }
    ],
    
    redFlags: ["Obstructed Infected Kidney (Pus + Stone = Urosepsis)", "Anuria (Bilateral obstruction or solitary kidney)", "Intractable Pain/Vomiting"],
    differentials: ["Acute Appendicitis", "Pyelonephritis", "Ectopic Pregnancy", "Musculoskeletal Back Pain"],

    managementRationale: [
      { 
        drug: "Diclofenac", 
        class: "NSAID", 
        dose: "75 mg", 
        freq: "IM Stat", 
        indication: "Renal Colic", 
        rationale: "Reduces ureteric spasm and glomerular filtration, providing superior pain relief to opioids." 
      },
      { 
        drug: "Tamsulosin", 
        class: "Alpha-1 Blocker", 
        dose: "0.4 mg", 
        freq: "OD", 
        indication: "Medical Expulsion Therapy (MET)", 
        rationale: "Relaxes distal ureter smooth muscle to facilitate passage of distal stones." 
      },
      { 
        drug: "Potassium Citrate", 
        class: "Urinary Alkalinizer", 
        dose: "1080 mg", 
        freq: "TID", 
        indication: "Prevention / Uric Acid Stones", 
        rationale: "Citrate inhibits crystal aggregation; alkalization dissolves uric acid stones." 
      }
    ],

    lifestyle: ["Fluid intake > 3L/day (Target urine output > 2.5L).", "Low salt diet (< 2.3g Na).", "Limit animal protein."],
    
    diet: {
      eat: ["Citrus fruits (Lemonade - Citrate)", "Calcium rich foods (Curd/Milk)", "High fluid volume"],
      avoid: ["High Oxalate foods (Spinach, Nuts, Chocolate)", "Excess Salt (Hypercalciuria)", "Purine rich foods (if Uric acid stone)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "NCCT KUB", result: "6mm Distal Ureteric Calculus", notes: "Mild Hydroureteronephrosis" },
      { name: "Urine pH", result: "5.5", notes: "Acidic" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Diclofenac 75mg IM", "Cap. Tamsulosin 0.4mg OD", "IV Fluids"] }
    ]
  },

  "Paroxysmal Nocturnal Hemoglobinuria (PNH)": {
    category: "Hematology",
    pathophysiology: "Acquired somatic mutation in PIG-A gene leading to deficiency of GPI-anchored proteins (CD55/CD59) on red blood cells. This makes RBCs susceptible to complement-mediated intravascular hemolysis.",
    
    clinicalFeatures: {
      symptoms: ["Dark urine (Hemoglobinuria - often morning)", "Fatigue", "Abdominal pain (Mesenteric thrombosis)", "Erectile dysfunction"],
      signs: ["Pallor", "Jaundice", "Thrombosis (Budd-Chiari syndrome)", "Dystonia (due to free Hb scavenging NO)"]
    },

    diagnosticWorkup: [
      { test: "Flow Cytometry", finding: "Absence of CD55/CD59", significance: "Gold Standard Diagnosis" },
      { test: "LDH", finding: "Markedly Elevated", significance: "Marker of intravascular hemolysis" },
      { test: "Coombs Test", finding: "Negative", significance: "Rules out Autoimmune Hemolytic Anemia" }
    ],

    clinicalPearls: [
      { pearl: "Thrombosis Risk.", explanation: "PNH is the most thrombophilic state known. Clots often form in unusual sites (Hepatic vein, Cerebral vein, Mesenteric vein)." },
      { pearl: "Marrow Failure.", explanation: "Strong association with Aplastic Anemia; PNH clones are often found in AA patients." }
    ],
    
    redFlags: ["Acute Abdomen (Mesenteric Ischemia)", "Severe Headache (Cerebral Venous Thrombosis)", "Rapidly falling Hb"],
    differentials: ["Autoimmune Hemolytic Anemia", "Microangiopathic Hemolytic Anemia (TTP/HUS)", "Aplastic Anemia", "Hemoglobinopathies"],

    managementRationale: [
      { 
        drug: "Eculizumab", 
        class: "Monoclonal Antibody (C5 Inhibitor)", 
        dose: "900 mg", 
        freq: "IV q2 weeks", 
        indication: "Symptomatic PNH", 
        rationale: "Blocks terminal complement activation, halting intravascular hemolysis. Requires Meningococcal vaccine." 
      },
      { 
        drug: "Ravulizumab", 
        class: "Long-acting C5 Inhibitor", 
        dose: "Weight based", 
        freq: "IV q8 weeks", 
        indication: "Maintenance", 
        rationale: "Longer half-life improves adherence and quality of life." 
      },
      { 
        drug: "Folic Acid", 
        class: "Vitamin", 
        dose: "5 mg", 
        freq: "OD", 
        indication: "Supportive", 
        rationale: "Supports high erythropoietic drive." 
      }
    ],

    lifestyle: ["Meningococcal Vaccination (Mandatory before Eculizumab).", "Avoid triggers (Infection/Surgery)."],
    
    diet: {
      eat: ["Iron rich foods (Chronic hemoglobinuria leads to iron loss)", "High fluid intake"],
      avoid: ["N/A"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "8.5 g/dL", wbc: "4,000 /cmm", plt: "120,000 /cmm", hct: "25%" },
      progression: [{ day: 1, hb: "8.5 g/dL", wbc: "4,000 /cmm", plt: "120,000 /cmm", hct: "25%" }]
    },
    specialTests: [
      { name: "Flow Cytometry", result: "CD55/CD59 Negative", notes: "PNH Clone 60%" },
      { name: "LDH", result: "2000 U/L", notes: "Severe Hemolysis" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Eculizumab Induction", "Tab. Folic Acid 5mg"] }
    ]
  },

  "COVID-19 (Severe)": {
    category: "Infectious Disease / Critical Care",
    pathophysiology: "Infection by SARS-CoV-2 causing viral pneumonia and systemic hyperinflammation (Cytokine Storm). Can lead to ARDS, hypercoagulability (microthrombi), and multi-organ failure.",
    
    clinicalFeatures: {
      symptoms: ["Dyspnea (Hypoxia)", "Fever", "Cough", "Fatigue", "Anosmia (Loss of smell)"],
      signs: ["Tachypnea", "SpO2 < 94% on RA", "Crackles", "Increased work of breathing"]
    },

    diagnosticWorkup: [
      { test: "RT-PCR", finding: "Positive SARS-CoV-2", significance: "Gold Standard Confirmation" },
      { test: "HRCT Chest", finding: "Ground Glass Opacities (GGO)", significance: "Assesses severity (CORADS score)" },
      { test: "Inflammatory Markers", finding: "High CRP, Ferritin, D-Dimer, IL-6", significance: "Predicts Cytokine Storm and prognosis" }
    ],

    clinicalPearls: [
      { pearl: "Happy Hypoxia.", explanation: "Patients may have profound hypoxemia without significant dyspnea initially, leading to delayed presentation." },
      { pearl: "Timing of Steroids.", explanation: "Steroids are beneficial ONLY in hypoxic patients (requiring O2). Giving them too early (viral replication phase) may cause harm." }
    ],
    
    redFlags: ["SpO2 < 90%", "Respiratory Rate > 30", "Confusion", "D-Dimer > 1000 (Thrombosis risk)"],
    differentials: ["Influenza", "Bacterial Pneumonia", "Pneumocystis Jiroveci Pneumonia (PJP)", "Heart Failure"],

    managementRationale: [
      { 
        drug: "Dexamethasone", 
        class: "Corticosteroid", 
        dose: "6 mg", 
        freq: "OD x 10 days", 
        indication: "Hypoxia (SpO2 < 94%)", 
        rationale: "Reduces systemic inflammation and mortality in severe disease (RECOVERY Trial)." 
      },
      { 
        drug: "Remdesivir", 
        class: "Antiviral", 
        dose: "200mg Load -> 100mg", 
        freq: "OD x 5 days", 
        indication: "Early Severe Disease", 
        rationale: "Inhibits viral RNA polymerase. Modest benefit in shortening recovery time if given early." 
      },
      { 
        drug: "Enoxaparin", 
        class: "LMWH", 
        dose: "Prophylactic/Therapeutic", 
        freq: "SC OD/BD", 
        indication: "Coagulopathy Prevention", 
        rationale: "Prevents venous thromboembolism and microthrombi associated with COVID-19." 
      }
    ],

    lifestyle: ["Prone Positioning (Awake Proning) to improve oxygenation.", "Isolation.", "Masking."],
    
    diet: {
      eat: ["High Protein (Recovery)", "Hydration"],
      avoid: ["Cold fluids (Subjective)", "Smoking"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "4,000 /cmm (Lymphopenia)", plt: "150,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "4,000 /cmm", plt: "150,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "HRCT Score", result: "15/25", notes: "Moderate-Severe" },
      { name: "CRP", result: "80 mg/L", notes: "High Inflammation" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Dexamethasone 6mg IV", "Inj. Remdesivir", "O2 Therapy"] }
    ]
  },

  "Guillain-Barre Syndrome (GBS)": {
    category: "Neurology",
    pathophysiology: "Acute immune-mediated polyneuropathy. Molecular mimicry (often post-Campylobacter infection) leads to autoantibodies attacking myelin (AIDP) or axons (AMAN), causing ascending paralysis.",
    
    clinicalFeatures: {
      symptoms: ["Ascending weakness (Legs -> Arms)", "Paresthesia", "Back pain", "Dyspnea (late)"],
      signs: ["Areflexia (Absent reflexes)", "Symmetrical weakness", "Facial palsy", "Autonomic instability (BP fluctuations)"]
    },

    diagnosticWorkup: [
      { test: "Lumbar Puncture (CSF)", finding: "Albuminocytologic Dissociation", significance: "High Protein with Normal Cell count (Classic)" },
      { test: "Nerve Conduction Study (NCS)", finding: "Conduction block / Slowing", significance: "Confirms demyelination or axonal loss" },
      { test: "MRI Spine", finding: "Nerve root enhancement", significance: "Supportive (rules out compression)" }
    ],

    clinicalPearls: [
      { pearl: "Respiratory Watch.", explanation: "Monitor Forced Vital Capacity (FVC). FVC < 20ml/kg or 'Single Breath Count' < 20 indicates need for intubation." },
      { pearl: "No Steroids.", explanation: "Corticosteroids have NO benefit in GBS and may even delay recovery." }
    ],
    
    redFlags: ["Respiratory Failure (Diaphragm weakness)", "Bulbar weakness (Dysphagia)", "Autonomic Storm (Arrhythmia)", "Inability to lift head"],
    differentials: ["Transverse Myelitis", "Botulism (Descending)", "Hypokalemic Periodic Paralysis", "Myasthenia Gravis"],

    managementRationale: [
      { 
        drug: "IVIG", 
        class: "Immunoglobulin", 
        dose: "0.4 g/kg/day", 
        freq: "IV x 5 days", 
        indication: "Inability to walk", 
        rationale: "Neutralizes pathogenic autoantibodies. Equally effective as Plasma Exchange." 
      },
      { 
        drug: "Plasmapheresis (PLEX)", 
        class: "Procedure", 
        dose: "5 sessions", 
        freq: "Alternate days", 
        indication: "Alternative to IVIG", 
        rationale: "Removes circulating antibodies and complement. Preferred in severe/rapidly progressive cases if available." 
      },
      { 
        drug: "Gabapentin", 
        class: "Gabapentinoid", 
        dose: "300 mg", 
        freq: "TID", 
        indication: "Neuropathic Pain", 
        rationale: "Symptomatic relief for severe back/limb pain associated with nerve inflammation." 
      }
    ],

    lifestyle: ["DVT Prophylaxis (Immobility).", "Physiotherapy (Rehabilitation is key).", "Bowel/Bladder care."],
    
    diet: {
      eat: ["High fiber (Constipation due to autonomic dysfunction)", "Enteral feeds (if dysphagic)"],
      avoid: ["Choking hazards (if bulbar palsy)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "CSF Protein", result: "150 mg/dL", notes: "High" },
      { name: "CSF Cells", result: "2 cells/uL", notes: "Normal (Dissociation)" }
    ],
    treatment: [
      { day: 1, meds: ["IVIG 2g/kg total dose", "DVT Prophylaxis"] }
    ]
  },

  "Testicular Cancer": {
    category: "Oncology / Urology",
    pathophysiology: "Malignancy arising from germ cells (Seminoma or Non-Seminoma). Most common solid tumor in young men (15-35y). Cryptorchidism is a major risk factor.",
    
    clinicalFeatures: {
      symptoms: ["Painless testicular lump", "Scrotal heaviness", "Back pain (Retroperitoneal nodes)", "Gynecomastia"],
      signs: ["Firm, non-tender mass", "Negative transillumination", "Supraclavicular node (rare)"]
    },

    diagnosticWorkup: [
      { test: "Scrotal Ultrasound", finding: "Hypoechoic intratesticular mass", significance: "Gold Standard Initial Test" },
      { test: "Tumor Markers", finding: "AFP, Beta-HCG, LDH", significance: "Diagnosis, Staging, and Monitoring (AFP never raised in pure Seminoma)" },
      { test: "CT Abdomen/Pelvis", finding: "Retroperitoneal Lymphadenopathy", significance: "Staging" }
    ],

    clinicalPearls: [
      { pearl: "No Biopsy.", explanation: "Trans-scrotal biopsy is CONTRAINDICATED due to risk of seeding the scrotum. Diagnosis is via Radical Inguinal Orchiectomy." },
      { pearl: "High Cure Rate.", explanation: "Even with metastatic disease, cure rates are >95% due to high chemosensitivity (Cisplatin)." }
    ],
    
    redFlags: ["Dyspnea (Lung mets)", "Back pain", "Hemoptysis", "Neurological signs (Brain mets - rare)"],
    differentials: ["Epididymo-orchitis", "Hydrocele", "Spermatocele", "Torsion"],

    managementRationale: [
      { 
        drug: "Cisplatin", 
        class: "Platinum Agent", 
        dose: "20 mg/m2", 
        freq: "Days 1-5", 
        indication: "BEP Regimen", 
        rationale: "Curative backbone. Cross-links DNA. High emetogenic potential and nephrotoxicity." 
      },
      { 
        drug: "Etoposide", 
        class: "Topoisomerase II Inhibitor", 
        dose: "100 mg/m2", 
        freq: "Days 1-5", 
        indication: "BEP Regimen", 
        rationale: "Synergistic with Cisplatin. Risk of secondary leukemia." 
      },
      { 
        drug: "Bleomycin", 
        class: "Antitumor Antibiotic", 
        dose: "30 units", 
        freq: "Days 1, 8, 15", 
        indication: "BEP Regimen", 
        rationale: "Pulmonary fibrosis risk; omitted in patients with lung issues (EP regimen)." 
      }
    ],

    lifestyle: ["Sperm Banking (Pre-chemo).", "Testicular Self-Exam (Contralateral).", "Avoid ototoxic drugs (Cisplatin interaction)."],
    
    diet: {
      eat: ["High calorie (during chemo)", "Hydration (Cisplatin renal protection)"],
      avoid: ["Alcohol", "Raw foods (if neutropenic)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "AFP", result: "Normal", notes: "Seminoma likely" },
      { name: "Beta-HCG", result: "Elevated", notes: "Tumor Marker" }
    ],
    treatment: [
      { day: 1, meds: ["Radical Inguinal Orchiectomy", "Adjuvant Chemo Eval"] }
    ]
  },
  "Snake Bite (Toxicology)": {
    category: "Toxicology / Emergency",
    pathophysiology: "Envenomation by 'Big 4' (Cobra, Krait - Neurotoxic; Russell's Viper, Saw-scaled Viper - Hemotoxic). Toxins cause neuromuscular blockade (paralysis) or consumption coagulopathy (bleeding) and renal failure.",
    
    clinicalFeatures: {
      symptoms: ["Fang marks", "Ptosis/Dysphagia (Neuro)", "Bleeding gums/Hematuria (Hemo)", "Local swelling"],
      signs: ["Broken neck sign (Neuro)", "Non-clotting blood", "Respiratory failure", "Cellulitis/Necrosis"]
    },

    diagnosticWorkup: [
      { test: "20-minute Whole Blood Clotting Test (20WBCT)", finding: "Blood fails to clot", significance: "Bedside Gold Standard for Hemotoxic bite" },
      { test: "Prothrombin Time (PT/INR)", finding: "Prolonged > 1.5", significance: "Coagulopathy severity" },
      { test: "Single Breath Count", finding: "< 30 (adults)", significance: "Assess respiratory muscle paralysis (Neurotoxic)" }
    ],

    clinicalPearls: [
      { pearl: "ASV Dose.", explanation: "Initial dose (usually 10 vials) is the SAME for children and adults, as venom load is independent of body weight." },
      { pearl: "Neostigmine Test.", explanation: "Used in Cobra bites (Post-synaptic blockade) to reverse paralysis; ineffective in Krait bites (Pre-synaptic)." }
    ],
    
    redFlags: ["Respiratory Paralysis", "Active Bleeding", "Acute Kidney Injury (Oliguria)", "Compartment Syndrome"],
    differentials: ["Scorpion Sting", "Myasthenia Gravis (Ptosis mimic)", "Sepsis", "Stroke"],

    managementRationale: [
      { 
        drug: "Polyvalent Anti-Snake Venom (ASV)", 
        class: "Antivenom", 
        dose: "10 Vials", 
        freq: "IV Infusion Stat", 
        indication: "Systemic Envenomation", 
        rationale: "Neutralizes circulating venom. Repeat if coagulation doesn't correct in 6 hours or neuro signs worsen." 
      },
      { 
        drug: "Neostigmine", 
        class: "AChE Inhibitor", 
        dose: "0.04 mg/kg", 
        freq: "IV q30min", 
        indication: "Neurotoxic (Cobra)", 
        rationale: "Increases ACh at NMJ to overcome post-synaptic blockade. Always give with Atropine." 
      },
      { 
        drug: "Atropine", 
        class: "Anticholinergic", 
        dose: "0.6 mg", 
        freq: "With Neostigmine", 
        indication: "Adjunct", 
        rationale: "Prevents bradycardia and secretions caused by Neostigmine." 
      }
    ],

    lifestyle: ["Immobilize limb (splint).", "Do NOT cut/suck the wound.", "Transport to hospital immediately."],
    
    diet: {
      eat: ["NPO initially (risk of aspiration)", "High fluid intake (once stable)"],
      avoid: ["Alcohol", "Herbal remedies", "Tourniquets (causes gangrene)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "15,000 /cmm", plt: "80,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "15,000 /cmm", plt: "80,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "20WBCT", result: "No Clot", notes: "Hemotoxic Envenomation" },
      { name: "Creatinine", result: "1.8 mg/dL", notes: "Early AKI" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. ASV 10 Vials", "Inj. Tetanus Toxoid", "IV Fluids"] }
    ]
  },

  "Sexual Dysfunction (Psychogenic)": {
    category: "Psychiatry / Urology",
    pathophysiology: "Erectile dysfunction or loss of libido primarily due to psychological factors (Performance anxiety, Stress, Depression) rather than organic vascular/neurological causes. Sympathetic overtone inhibits erection.",
    
    clinicalFeatures: {
      symptoms: ["Sudden onset ED", "Situational ED (normal with masturbation/sleep)", "Low libido", "Anxiety"],
      signs: ["Normal genital exam", "Normal cremasteric reflex", "Preserved morning erections"]
    },

    diagnosticWorkup: [
      { test: "Nocturnal Penile Tumescence (NPT)", finding: "Present", significance: "Confirms intact organic mechanism; implies psychogenic cause" },
      { test: "Serum Testosterone", finding: "Normal", significance: "Excludes hypogonadism" },
      { test: "Hormonal Panel (Prolactin)", finding: "Normal", significance: "Excludes hyperprolactinemia" }
    ],

    clinicalPearls: [
      { pearl: "Situational Nature.", explanation: "Ability to maintain erection during masturbation or waking up with an erection ('Morning Glory') rules out organic disease." },
      { pearl: "The Cycle.", explanation: "One failure leads to performance anxiety, which causes subsequent failures via sympathetic vasoconstriction." }
    ],
    
    redFlags: ["Loss of morning erections (Organic)", "Neurological deficits", "Peyronie's plaque", "History of pelvic surgery"],
    differentials: ["Vascular ED (Diabetes/HTN)", "Drug-induced (SSRIs/Beta-blockers)", "Hypogonadism", "Relationship discord"],

    managementRationale: [
      { 
        drug: "Tadalafil", 
        class: "PDE5 Inhibitor", 
        dose: "5-10 mg", 
        freq: "OD / PRN", 
        indication: "Confidence Aid", 
        rationale: "Long half-life (36h) reduces 'timing pressure', breaking the anxiety cycle." 
      },
      { 
        drug: "Sildenafil", 
        class: "PDE5 Inhibitor", 
        dose: "50 mg", 
        freq: "PRN", 
        indication: "Erectile Support", 
        rationale: "Ensures erection occurs despite mild anxiety, restoring confidence." 
      },
      { 
        drug: "Buspirone", 
        class: "Anxiolytic", 
        dose: "5-10 mg", 
        freq: "TID", 
        indication: "Performance Anxiety", 
        rationale: "Reduces anxiety without sexual side effects common to SSRIs." 
      }
    ],

    lifestyle: ["Psychosexual Therapy (Sensate focus).", "Stress management.", "Open communication with partner."],
    
    diet: {
      eat: ["Zinc rich foods (Oysters/Pumpkin seeds)", "Dark Chocolate (Mood)", "Saffron (Traditional aphrodisiac/mood elevator)"],
      avoid: ["Alcohol ('Whiskey dick' - CNS depressant)", "Soy (excess phytoestrogens)", "Smoking"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "NPT Stamp Test", result: "Positive", notes: "Organic mechanism intact" },
      { name: "Testosterone", result: "600 ng/dL", notes: "Normal" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Tadalafil 5mg OD", "Counseling"] }
    ]
  },

  "Rhabdomyolysis": {
    category: "Nephrology / Emergency",
    pathophysiology: "Rapid breakdown of skeletal muscle tissue (Trauma, Statins, Seizures) releasing intracellular contents (Myoglobin, Potassium, CK) into circulation. Myoglobin causes acute tubular necrosis (AKI).",
    
    clinicalFeatures: {
      symptoms: ["Muscle pain (Myalgia)", "Weakness", "Dark urine ('Coca-Cola' colored)"],
      signs: ["Muscle swelling/tenderness", "Oliguria", "Compartment Syndrome (cause or effect)"]
    },

    diagnosticWorkup: [
      { test: "Serum CPK", finding: "> 5x Upper Limit (often >10,000)", significance: "Diagnostic Hallmark" },
      { test: "Urine Myoglobin", finding: "Positive (Dipstick +ve for blood but no RBCs)", significance: "False positive blood on dipstick due to heme pigment" },
      { test: "Serum Potassium", finding: "Elevated", significance: "Life-threatening complication of cell lysis" }
    ],

    clinicalPearls: [
      { pearl: "Dipstick Dissociation.", explanation: "Urine dipstick tests positive for 'Blood' (Heme), but Microscopy shows NO Red Blood Cells." },
      { pearl: "Fluid Goal.", explanation: "Aggressive hydration is key. Aim for urine output > 200-300 mL/hr to wash out myoglobin casts." }
    ],
    
    redFlags: ["Anuria", "Hyperkalemia > 6.5 (Cardiac Arrest)", "Compartment Pressure > 30mmHg", "Disseminated Intravascular Coagulation (DIC)"],
    differentials: ["Hemolysis (Dark urine)", "Porphyria", "Inflammatory Myopathy", "Guillain-Barre Syndrome"],

    managementRationale: [
      { 
        drug: "Normal Saline", 
        class: "Crystalloid", 
        dose: "1-2 L Bolus -> High Rate", 
        freq: "Continuous", 
        indication: "Volume Expansion", 
        rationale: "Increases GFR to flush nephrotoxic myoglobin. Target UO 3ml/kg/hr." 
      },
      { 
        drug: "Sodium Bicarbonate", 
        class: "Alkalinizer", 
        dose: "50-100 mEq/L", 
        freq: "IV Infusion", 
        indication: "Urine Alkalinization", 
        rationale: "Aim Urine pH > 6.5. Prevents dissociation of myoglobin into toxic ferrihemate and cast formation." 
      },
      { 
        drug: "Mannitol", 
        class: "Osmotic Diuretic", 
        dose: "0.5 g/kg", 
        freq: "IV", 
        indication: "Refractory Oliguria", 
        rationale: "Scavenges free radicals and forces diuresis. Use only after volume repletion." 
      }
    ],

    lifestyle: ["Avoid nephrotoxic drugs (NSAIDs).", "Fasciotomy (if Compartment Syndrome).", "Rest."],
    
    diet: {
      eat: ["Low Potassium foods (Apple/Rice)", "High Calorie (Non-protein initially)"],
      avoid: ["Coconut water/Banana (High K+)", "Red meat (Creatine load)", "Star fruit"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "12,000 /cmm", plt: "200,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "12,000 /cmm", plt: "200,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "CPK Total", result: "25,000 IU/L", notes: "Severe Rhabdomyolysis" },
      { name: "Potassium", result: "6.0 mEq/L", notes: "Hyperkalemia" }
    ],
    treatment: [
      { day: 1, meds: ["IV Fluids 400ml/hr", "Inj. Sodium Bicarbonate", "Monitor K+"] }
    ]
  },

  "Vitiligo": {
    category: "Dermatology / Autoimmune",
    pathophysiology: "Acquired depigmenting disorder caused by autoimmune destruction of melanocytes in the skin. CD8+ T-cells target melanocyte antigens.",
    
    clinicalFeatures: {
      symptoms: ["White patches", "Psychosocial distress", "Sunburn in white areas"],
      signs: ["Depigmented macules (Chalk white)", "Poliosis (White hair)", "Koebner Phenomenon (Lesions at trauma sites)"]
    },

    diagnosticWorkup: [
      { test: "Wood's Lamp", finding: "Bright blue-white fluorescence", significance: "Enhances detection of subclinical lesions" },
      { test: "Thyroid Profile / B12", finding: "Abnormal", significance: "Screen for associated autoimmune conditions" },
      { test: "Skin Biopsy", finding: "Absence of melanocytes", significance: "Rarely needed; confirms diagnosis" }
    ],

    clinicalPearls: [
      { pearl: "Koebnerization.", explanation: "Trauma, scratching, or friction (e.g., tight waistbands) induces new lesions. Avoid physical trauma to skin." },
      { pearl: "Face vs Hands.", explanation: "Facial lesions respond well to treatment (follicular reservoir); Acral lesions (fingertips) are resistant." }
    ],
    
    redFlags: ["Rapid progression", "Uveitis (Vogt-Koyanagi-Harada Syndrome)", "Hearing loss"],
    differentials: ["Pityriasis Alba", "Tinea Versicolor", "Post-inflammatory Hypopigmentation", "Leprosy (Hypopigmented with anesthesia)"],

    managementRationale: [
      { 
        drug: "Tacrolimus", 
        class: "Calcineurin Inhibitor", 
        dose: "0.1% Ointment", 
        freq: "BD", 
        indication: "Face/Intertriginous areas", 
        rationale: "Immunomodulator without steroid side effects (atrophy). Safe for long-term use on face." 
      },
      { 
        drug: "Clobetasol", 
        class: "Potent Corticosteroid", 
        dose: "0.05% Cream", 
        freq: "OD (Cycles)", 
        indication: "Body lesions", 
        rationale: "Suppresses T-cell activity. Use cyclically (2 weeks on/off) to prevent atrophy." 
      },
      { 
        drug: "Methoxsalen", 
        class: "Psoralen", 
        dose: "Topical/Oral", 
        freq: "With UVA", 
        indication: "PUVA Therapy", 
        rationale: "Photosensitizer + UV light stimulates melanocyte migration from hair follicles." 
      }
    ],

    lifestyle: ["Sunscreen (prevents tanning of normal skin/burning of white skin).", "Camouflage makeup.", "Psychological support."],
    
    diet: {
      eat: ["Antioxidant rich foods", "Green Tea", "Ginkgo Biloba (some evidence)"],
      avoid: ["Sour foods (Ayurvedic myth - usually harmless but commonly avoided)", "Emotional stress (Trigger)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Wood's Lamp", result: "Accentuated", notes: "Vitiligo" },
      { name: "TSH", result: "4.5 mIU/L", notes: "Screening" }
    ],
    treatment: [
      { day: 1, meds: ["Topical Tacrolimus BD", "Phototherapy"] }
    ]
  },

  "Obstructive Sleep Apnea (OSA)": {
    category: "Respiratory / Sleep Medicine",
    pathophysiology: "Recurrent collapse of the pharyngeal airway during sleep, causing apnea/hypopnea, intermittent hypoxia, and sleep fragmentation. Associated with obesity and retrognathia.",
    
    clinicalFeatures: {
      symptoms: ["Loud snoring", "Daytime sleepiness", "Choking/Gasping at night", "Morning headache"],
      signs: ["Neck circumference > 43cm (M)", "Mallampati Class 3/4", "Hypertension", "Obesity"]
    },

    diagnosticWorkup: [
      { test: "Polysomnography (Sleep Study)", finding: "AHI > 5/hr", significance: "Gold Standard Diagnosis (AHI > 30 = Severe)" },
      { test: "STOP-BANG Score", finding: "> 3", significance: "High sensitivity screening tool" },
      { test: "Epworth Sleepiness Scale", finding: "> 10", significance: "Quantifies daytime somnolence" }
    ],

    clinicalPearls: [
      { pearl: "Resistant Hypertension.", explanation: "OSA is a leading cause of secondary hypertension. Treating OSA often improves BP control." },
      { pearl: "Not just Fat.", explanation: "While obesity is #1 risk, thin patients with retrognathia or large tonsils can also have severe OSA." }
    ],
    
    redFlags: ["Drowsy Driving", "Cor Pulmonale", "Polycythemia", "Type 2 Respiratory Failure (OHS)"],
    differentials: ["Narcolepsy", "Obesity Hypoventilation Syndrome", "Hypothyroidism", "GERD (Choking sensation)"],

    managementRationale: [
      { 
        drug: "CPAP Device", 
        class: "Mechanical", 
        dose: "Titrated Pressure", 
        freq: "Every night", 
        indication: "First-line Treatment", 
        rationale: "Pneumatic splint keeps airway open. Not a drug, but the primary 'prescription'." 
      },
      { 
        drug: "Modafinil", 
        class: "Wakefulness Promoter", 
        dose: "100-200 mg", 
        freq: "Morning", 
        indication: "Residual Sleepiness", 
        rationale: "Used only after CPAP is optimized to treat persisting somnolence." 
      },
      { 
        drug: "Fluticasone (Nasal)", 
        class: "Corticosteroid", 
        dose: "2 sprays", 
        freq: "OD", 
        indication: "Rhinitis", 
        rationale: "Reduces nasal resistance to improve CPAP tolerance." 
      }
    ],

    lifestyle: ["Weight Loss (Curative in mild cases).", "Positional Therapy (Avoid supine sleep).", "Avoid Alcohol/Sedatives (worsens collapse)."],
    
    diet: {
      eat: ["Low Calorie / Low Carb (Weight loss focus)"],
      avoid: ["Alcohol before bed (relaxes airway muscles)", "Heavy dinners"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "16.0 g/dL (Secondary Polycythemia)", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "48%" },
      progression: [{ day: 1, hb: "16.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "48%" }]
    },
    specialTests: [
      { name: "AHI", result: "35 events/hr", notes: "Severe OSA" },
      { name: "SpO2 nadir", result: "82%", notes: "Nocturnal Hypoxia" }
    ],
    treatment: [
      { day: 1, meds: ["Auto-CPAP initiation", "Weight Loss Plan"] }
    ]
  },
  "Rheumatic Fever (Acute)": {
    category: "Cardiology / Infectious Disease",
    pathophysiology: "Autoimmune inflammatory reaction to Group A Beta-hemolytic Streptococcus (GAS) pharyngitis. Molecular mimicry between Strep M-protein and human tissues (heart valve, joints, brain) leads to cross-reactive damage.",
    
    clinicalFeatures: {
      symptoms: ["Migratory Polyarthritis (fleeting joint pain)", "Fever", "Chorea (Sydenham's - jerky movements)", "Rash"],
      signs: ["Erythema Marginatum (Serpiginous rash)", "Subcutaneous Nodules", "New Murmur (Mitral Regurgitation)", "Tachycardia"]
    },

    diagnosticWorkup: [
      { test: "Jones Criteria", finding: "2 Major or 1 Major + 2 Minor", significance: "Diagnostic Standard (+ evidence of antecedent Strep infection)" },
      { test: "ASO Titer", finding: "Rising or Elevated (>200)", significance: "Confirms recent Streptococcal infection" },
      { test: "Echocardiography", finding: "Valvulitis (MR/AR)", significance: "Detects subclinical carditis" }
    ],

    clinicalPearls: [
      { pearl: "Lick the joints, bite the heart.", explanation: "Arthritis is painful but leaves no permanent damage; Carditis can cause permanent valve destruction (Rheumatic Heart Disease)." },
      { pearl: "Secondary Prophylaxis.", explanation: "Crucial to prevent recurrences. Duration depends on carditis severity (min 10 years or until age 21, often lifelong for severe valve disease)." }
    ],
    
    redFlags: ["Heart Failure", "Chorea (Self-limiting but distressing)", "Pancarditis", "Heart Block"],
    differentials: ["Infective Endocarditis", "Juvenile Idiopathic Arthritis", "SLE", "Lyme Disease"],

    managementRationale: [
      { 
        drug: "Benzathine Penicillin G", 
        class: "Antibiotic", 
        dose: "1.2 Million Units", 
        freq: "IM Stat (then q3-4 weeks)", 
        indication: "Eradication / Prophylaxis", 
        rationale: "Eliminates carrier state and prevents recurrent Strep infections." 
      },
      { 
        drug: "Aspirin", 
        class: "NSAID", 
        dose: "50-100 mg/kg/day", 
        freq: "Divided q4-6h", 
        indication: "Arthritis", 
        rationale: "High dose required for anti-inflammatory effect. Dramatic relief of joint pain is typical." 
      },
      { 
        drug: "Prednisolone", 
        class: "Corticosteroid", 
        dose: "1-2 mg/kg", 
        freq: "OD", 
        indication: "Severe Carditis", 
        rationale: "Suppresses inflammation in patients with heart failure or cardiomegaly." 
      }
    ],

    lifestyle: ["Strict adherence to monthly penicillin shots.", "Throat hygiene.", "Dental prophylaxis (if valve damaged)."],
    
    diet: {
      eat: ["High calorie (Hypermetabolic state)", "Soft diet (if heart failure present)"],
      avoid: ["Salt (if steroids/heart failure involved)", "Spicy foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "15,000 /cmm", plt: "350,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "15,000 /cmm", plt: "350,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "ASO Titer", result: "600 IU/mL", notes: "High" },
      { name: "ESR", result: "80 mm/hr", notes: "Elevated" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Benzathine Penicillin 1.2MU IM", "Tab. Aspirin High Dose"] }
    ]
  },

  "Acute Pericarditis": {
    category: "Cardiology",
    pathophysiology: "Inflammation of the pericardial sac, usually viral (Coxsackie) or idiopathic. Can be uremic, post-MI (Dressler's), or autoimmune. Causes chest pain and potential effusion.",
    
    clinicalFeatures: {
      symptoms: ["Pleuritic Chest Pain (Sharp, worse with inspiration)", "Positional Pain (Better sitting forward)", "Fever"],
      signs: ["Pericardial Friction Rub (Velcro sound)", "Tachycardia", "Distant heart sounds (if effusion)"]
    },

    diagnosticWorkup: [
      { test: "ECG", finding: "Diffuse ST Elevation + PR Depression", significance: "Classic diagnostic pattern (avR shows ST depression)" },
      { test: "Echocardiography", finding: "Pericardial Effusion", significance: "Check for tamponade physiology" },
      { test: "CRP/ESR", finding: "Elevated", significance: "Confirms inflammation; used to monitor therapy" }
    ],

    clinicalPearls: [
      { pearl: "Colchicine is Key.", explanation: "Adding Colchicine to NSAIDs reduces the recurrence rate of pericarditis by 50%." },
      { pearl: "Troponin Leak.", explanation: "Mild troponin elevation indicates Myopericarditis (involvement of epicardium); usually benign prognosis." }
    ],
    
    redFlags: ["Cardiac Tamponade (Hypotension, JVD, Muffled sounds)", "Large Effusion (>20mm)", "Refractory Pain", "Fever > 38C"],
    differentials: ["Myocardial Infarction (ST elevation is localized)", "Pulmonary Embolism", "Pneumonia", "Costochondritis"],

    managementRationale: [
      { 
        drug: "Ibuprofen / Aspirin", 
        class: "NSAID", 
        dose: "600-800 mg / 650-1000 mg", 
        freq: "TID", 
        indication: "First-line", 
        rationale: "High doses required for anti-inflammatory effect. Taper slowly after CRP normalizes." 
      },
      { 
        drug: "Colchicine", 
        class: "Anti-inflammatory", 
        dose: "0.5 mg", 
        freq: "BD x 3 months", 
        indication: "Recurrence Prevention", 
        rationale: "Inhibits microtubule assembly and neutrophil function." 
      },
      { 
        drug: "Pantoprazole", 
        class: "PPI", 
        dose: "40 mg", 
        freq: "OD", 
        indication: "Gastroprotection", 
        rationale: "Mandatory with high-dose NSAID therapy." 
      }
    ],

    lifestyle: ["Exercise Restriction (until symptoms/CRP normalize - usually 3 months for athletes).", "Rest."],
    
    diet: {
      eat: ["Anti-inflammatory foods", "Hydration"],
      avoid: ["Alcohol (Gastric irritation with NSAIDs)", "Excess caffeine"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "11,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "11,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "ECG", result: "Diffuse concave ST elevation", notes: "PR depression in II" },
      { name: "Echo", result: "Mild Effusion", notes: "No Tamponade" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Ibuprofen 600mg TID", "Tab. Colchicine 0.5mg BD", "Tab. Pantoprazole 40mg"] }
    ]
  },

  "Delirium (Acute Confusional State)": {
    category: "Neurology / Geriatrics",
    pathophysiology: "Acute, fluctuating disturbance of attention and cognition due to underlying organic cause (Infection, Metabolic, Drug withdrawal). Involves neurotransmitter imbalance (Low Acetylcholine, High Dopamine).",
    
    clinicalFeatures: {
      symptoms: ["Confusion (worse at night)", "Hallucinations", "Restlessness", "Reversal of sleep-wake cycle"],
      signs: ["Inattention (can't spell WORLD backwards)", "Disorientation", "Tremor/Myoclonus"]
    },

    diagnosticWorkup: [
      { test: "CAM (Confusion Assessment Method)", finding: "Positive", significance: "Acute onset + Inattention + Disorganized thinking/LOC change" },
      { test: "Metabolic Panel", finding: "Na/Ca/Glucose abnormality", significance: "Identify reversible cause" },
      { test: "Urinalysis", finding: "UTI", significance: "Common trigger in elderly" }
    ],

    clinicalPearls: [
      { pearl: "Hyperactive vs Hypoactive.", explanation: "Hypoactive delirium (quiet, withdrawn) is more common, often missed, and has higher mortality than Hyperactive (agitated)." },
      { pearl: "Beers Criteria.", explanation: "Avoid Benzodiazepines (worsens delirium) unless treating alcohol/benzo withdrawal." }
    ],
    
    redFlags: ["Focal neuro deficit (Stroke)", "Nuchal rigidity (Meningitis)", "Autonomic Instability", "Wernicke's Encephalopathy"],
    differentials: ["Dementia (Chronic, alert)", "Psychosis (Psychiatric history)", "Depression", "Non-convulsive Status Epilepticus"],

    managementRationale: [
      { 
        drug: "Haloperidol", 
        class: "Antipsychotic (Typical)", 
        dose: "0.5-1 mg", 
        freq: "PO/IM SOS", 
        indication: "Severe Agitation", 
        rationale: "Dopamine antagonist. Use low dose only if patient is a danger to self/others. Watch QTc." 
      },
      { 
        drug: "Quetiapine", 
        class: "Atypical Antipsychotic", 
        dose: "12.5-25 mg", 
        freq: "HS", 
        indication: "Sundowning", 
        rationale: "Lower EPS risk; useful for nocturnal agitation." 
      },
      { 
        drug: "Thiamine", 
        class: "Vitamin", 
        dose: "100 mg", 
        freq: "IV/IM Daily", 
        indication: "Prophylaxis", 
        rationale: "Empiric coverage for Wernicke's in confusing cases." 
      }
    ],

    lifestyle: ["Reorientation (Clock/Calendar).", "Family presence.", "Sleep hygiene (Lights off at night)."],
    
    diet: {
      eat: ["Hydration (Dehydration is a major trigger)", "Fiber (Constipation worsens delirium)"],
      avoid: ["Caffeine", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "14,000 /cmm (UTI)", plt: "200,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "14,000 /cmm", plt: "200,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "CAM Score", result: "Positive", notes: "Acute Delirium" },
      { name: "Urine Culture", result: "E. coli", notes: "Cause identified" }
    ],
    treatment: [
      { day: 1, meds: ["Treat UTI", "Stop anticholinergics", "Reorient"] }
    ]
  },

  "Pheochromocytoma": {
    category: "Endocrine / Oncology",
    pathophysiology: "Catecholamine-secreting tumor derived from chromaffin cells of the adrenal medulla. Excess Epinephrine/Norepinephrine causes paroxysmal hypertension and hypermetabolism.",
    
    clinicalFeatures: {
      symptoms: ["Triad: Headache, Palpitations, Sweating", "Anxiety/Panic attacks", "Tremor"],
      signs: ["Hypertension (Paroxysmal or sustained)", "Orthostatic Hypotension (Volume contraction)", "Pallor"]
    },

    diagnosticWorkup: [
      { test: "Plasma Free Metanephrines", finding: "Elevated (>3x)", significance: "High Sensitivity Screening" },
      { test: "24h Urine Metanephrines", finding: "Elevated", significance: "High Specificity Confirmation" },
      { test: "CT/MRI Abdomen", finding: "Adrenal Mass", significance: "Localization" }
    ],

    clinicalPearls: [
      { pearl: "Rule of 10s.", explanation: "10% bilateral, 10% extra-adrenal, 10% malignant, 10% familial (MEN2, NF1, VHL), 10% pediatric." },
      { pearl: "Alpha Before Beta.", explanation: "Always block Alpha receptors first. Giving Beta-blockers alone leaves alpha-mediated vasoconstriction unopposed, causing hypertensive crisis." }
    ],
    
    redFlags: ["Hypertensive Crisis", "Flash Pulmonary Edema", "Shock (Tumor Hemorrhage)", "Cardiomyopathy"],
    differentials: ["Panic Disorder", "Essential Hypertension", "Thyrotoxicosis", "Carcinoid Syndrome"],

    managementRationale: [
      { 
        drug: "Phenoxybenzamine", 
        class: "Alpha-Blocker (Non-selective)", 
        dose: "10 mg BD titrated", 
        freq: "BD", 
        indication: "Pre-op Preparation", 
        rationale: "Irreversible alpha blockade controls BP and expands blood volume (allow 10-14 days)." 
      },
      { 
        drug: "Propranolol", 
        class: "Beta Blocker", 
        dose: "10-20 mg", 
        freq: "TID", 
        indication: "Tachycardia", 
        rationale: "Started ONLY after adequate alpha blockade to control heart rate." 
      },
      { 
        drug: "Sodium Nitroprusside", 
        class: "Vasodilator", 
        dose: "Infusion", 
        freq: "Continuous", 
        indication: "Intra-op Crisis", 
        rationale: "Rapidly titratable for hypertensive surges during tumor handling." 
      }
    ],

    lifestyle: ["High Salt Diet (Pre-op).", "Avoid triggers (Abdominal palpation, tyramine foods)."],
    
    diet: {
      eat: ["Liberal Salt intake (Counteracts catecholamine-induced volume contraction)", "Hydration"],
      avoid: ["Tyramine (Aged cheese/Wine)", "Caffeine", "Smoking"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "15.0 g/dL (Hemoconcentration)", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "45%" },
      progression: [{ day: 1, hb: "15.0 g/dL", wbc: "9,000 /cmm", plt: "300,000 /cmm", hct: "45%" }]
    },
    specialTests: [
      { name: "Plasma Metanephrines", result: "1500 pg/mL", notes: "Diagnostic" },
      { name: "CT Abdomen", result: "4cm Right Adrenal Mass", notes: "Heterogeneous" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Phenoxybenzamine 10mg BD", "Salt Loading"] }
    ]
  },

  "Celiac Disease": {
    category: "Gastroenterology / Autoimmune",
    pathophysiology: "Autoimmune enteropathy triggered by gluten (gliadin) in genetically predisposed individuals (HLA-DQ2/DQ8). Causes villous atrophy in small intestine, leading to malabsorption.",
    
    clinicalFeatures: {
      symptoms: ["Chronic Diarrhea", "Bloating/Flatulence", "Weight loss", "Fatigue"],
      signs: ["Dermatitis Herpetiformis (Itchy blistery rash)", "Pallor (Anemia)", "Short stature (Kids)"]
    },

    diagnosticWorkup: [
      { test: "Anti-tTG IgA", finding: "Positive", significance: "Best Screening Test (Must be on gluten diet)" },
      { test: "Duodenal Biopsy", finding: "Villous atrophy + Crypt hyperplasia", significance: "Gold Standard Confirmation (Marsh Classification)" },
      { test: "Total IgA", finding: "Normal", significance: "Rule out IgA deficiency (causes false negative tTG)" }
    ],

    clinicalPearls: [
      { pearl: "Iron Deficiency.", explanation: "Refractory iron deficiency anemia is a common sole presentation of Celiac disease due to duodenal malabsorption." },
      { pearl: "Gluten Challenge.", explanation: "Tests are invalid if patient is already on a Gluten-Free Diet. Re-introduction of gluten is needed for diagnosis." }
    ],
    
    redFlags: ["T-cell Lymphoma (EATL)", "Osteoporosis (early)", "Ulcerative Jejunitis", "Refractory Sprue"],
    differentials: ["Non-Celiac Gluten Sensitivity", "Tropical Sprue", "Giardiasis", "IBS"],

    managementRationale: [
      { 
        drug: "Gluten-Free Diet", 
        class: "Dietary", 
        dose: "Lifelong", 
        freq: "Daily", 
        indication: "Primary Treatment", 
        rationale: "Only effective treatment. Reverses mucosal damage and prevents malignancy." 
      },
      { 
        drug: "Iron / Calcium / Vit D", 
        class: "Supplements", 
        dose: "Therapeutic", 
        freq: "Daily", 
        indication: "Deficiencies", 
        rationale: "Corrects malabsorption deficits. Bone density scan recommended." 
      },
      { 
        drug: "Dapsone", 
        class: "Sulfone", 
        dose: "50-100 mg", 
        freq: "OD", 
        indication: "Dermatitis Herpetiformis", 
        rationale: "Treats the skin rash (does not treat the gut; diet still needed)." 
      }
    ],

    lifestyle: ["Label reading (Hidden gluten).", "Avoid cross-contamination.", "Pneumococcal vaccine (Hyposplenism association)."],
    
    diet: {
      eat: ["Rice", "Corn (Makki)", "Bajra/Jowar", "Potato", "Fruits/Veg", "Gluten-free oats"],
      avoid: ["Wheat (Roti/Bread/Naan)", "Barley (Beer)", "Rye", "Semolina (Rava/Suji)", "Maida"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "27%" },
      progression: [{ day: 1, hb: "9.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "27%" }]
    },
    specialTests: [
      { name: "Anti-tTG IgA", result: "120 U/mL", notes: "Strongly Positive" },
      { name: "Biopsy", result: "Marsh 3b", notes: "Villous Atrophy" }
    ],
    treatment: [
      { day: 1, meds: ["Strict Gluten Free Diet", "Hematinics"] }
    ]
  },

  "Severe Malaria (Falciparum)": {
    category: "Infectious Disease",
    pathophysiology: "Infection by Plasmodium falciparum causes infected RBCs to sequester in microvasculature (cytoadherence), causing ischemia, acidosis, and organ failure (Cerebral, Renal, Pulmonary).",
    
    clinicalFeatures: {
      symptoms: ["High Fever with chills", "Headache", "Dark urine (Blackwater fever)", "Confusion"],
      signs: ["Coma (Cerebral)", "Jaundice", "Pallor", "Acidotic breathing"]
    },

    diagnosticWorkup: [
      { test: "Peripheral Smear", finding: "Ring forms / Gametocytes", significance: "Gold Standard (Quantify parasitemia)" },
      { test: "RDT (Rapid Diagnostic Test)", finding: "PfHRP2 Positive", significance: "Rapid confirmation of Falciparum" },
      { test: "Blood Glucose", finding: "Hypoglycemia", significance: "Common complication of disease and Quinine" }
    ],

    clinicalPearls: [
      { pearl: "Artesunate Superiority.", explanation: "IV Artesunate reduces mortality significantly compared to Quinine in severe malaria." },
      { pearl: "Blackwater Fever.", explanation: "Massive intravascular hemolysis leading to hemoglobinuria and acute kidney injury." }
    ],
    
    redFlags: ["Cerebral Malaria (GCS < 11)", "Severe Acidosis (Lactate > 5)", "Hypoglycemia < 40", "Parasitemia > 10%"],
    differentials: ["Meningitis", "Sepsis", "Typhoid Encephalopathy", "Leptospirosis"],

    managementRationale: [
      { 
        drug: "Artesunate", 
        class: "Artemisinin Derivative", 
        dose: "2.4 mg/kg", 
        freq: "IV at 0, 12, 24h", 
        indication: "First-line Severe Malaria", 
        rationale: "Rapidly clears parasitemia. Follow with oral ACT when patient can swallow." 
      },
      { 
        drug: "Clindamycin / Doxycycline", 
        class: "Antibiotic", 
        dose: "Standard", 
        freq: "BD", 
        indication: "Adjunct (ICU)", 
        rationale: "Synergistic antimalarial action; ensures radical cure." 
      },
      { 
        drug: "Dextrose", 
        class: "Carbohydrate", 
        dose: "25% or 50%", 
        freq: "IV Bolus", 
        indication: "Hypoglycemia", 
        rationale: "Critical supportive care; parasites consume glucose rapidly." 
      }
    ],

    lifestyle: ["Mosquito nets (LLIN).", "Indoor residual spraying.", "Chemoprophylaxis for travelers."],
    
    diet: {
      eat: ["Coconut water (Hydration)", "Glucose water", "Soft diet"],
      avoid: ["Fluid overload (Pulmonary edema risk)", "Heavy meals"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "7.0 g/dL", wbc: "12,000 /cmm", plt: "40,000 /cmm", hct: "21%" },
      progression: [{ day: 1, hb: "7.0 g/dL", wbc: "12,000 /cmm", plt: "40,000 /cmm", hct: "21%" }]
    },
    specialTests: [
      { name: "Smear", result: "High Parasitemia 5%", notes: "Falciparum rings" },
      { name: "Lactate", result: "6 mmol/L", notes: "Acidosis" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Artesunate 2.4mg/kg", "IV Fluids (Cautious)"] }
    ]
  },

  "Tetanus": {
    category: "Infectious Disease / Neurology",
    pathophysiology: "Infection by Clostridium tetani (anaerobic). Tetanospasmin toxin travels retrograde via motor neurons to the CNS, blocking inhibitory neurotransmitters (GABA/Glycine), causing unopposed muscle spasm.",
    
    clinicalFeatures: {
      symptoms: ["Trismus (Lockjaw)", "Dysphagia", "Stiffness", "Painful spasms"],
      signs: ["Risus Sardonicus (Grimace)", "Opisthotonus (Arched back)", "Spatula Test Positive", "Autonomic instability"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Trismus + Spasms", significance: "Diagnosis is purely clinical" },
      { test: "Spatula Test", finding: "Biting spasm on touching pharynx", significance: "High specificity" },
      { test: "Wound Culture", finding: "C. tetani (rarely positive)", significance: "Low yield; do not wait for it" }
    ],

    clinicalPearls: [
      { pearl: "Sensorium Intact.", explanation: "Patients remain fully conscious during painful spasms; sedation is humane and mandatory." },
      { pearl: "Entry Port.", explanation: "Can occur from trivial wounds, otitis media (Cephalic tetanus), or septic abortion, not just rusty nails." }
    ],
    
    redFlags: ["Laryngospasm (Airway obstruction)", "Autonomic Storm (HTN/Tachycardia)", "Respiratory Failure (Chest wall rigidity)"],
    differentials: ["Strychnine Poisoning", "Dystonic Reaction (Drug induced)", "Dental Abscess", "Hypocalcemic Tetany"],

    managementRationale: [
      { 
        drug: "Human Tetanus Immunoglobulin (HTIG)", 
        class: "Antitoxin", 
        dose: "3000-6000 IU", 
        freq: "IM Stat", 
        indication: "Neutralization", 
        rationale: "Neutralizes circulating toxin ONLY. Bound toxin cannot be reversed (symptoms persist for weeks)." 
      },
      { 
        drug: "Metronidazole", 
        class: "Antibiotic", 
        dose: "500 mg", 
        freq: "IV Q6H", 
        indication: "Source Control", 
        rationale: "Eradicates vegetative bacteria. Preferred over Penicillin (which acts as GABA antagonist)." 
      },
      { 
        drug: "Diazepam", 
        class: "Benzodiazepine", 
        dose: "10-40 mg/hr", 
        freq: "IV Infusion", 
        indication: "Spasm Control", 
        rationale: "GABA agonist to control rigidity. Very high doses often required." 
      }
    ],

    lifestyle: ["Dark quiet room (prevent stimulus-induced spasms).", "Tetanus Toxoid Vaccine (recovery does not confer immunity)."],
    
    diet: {
      eat: ["Nasogastric feeds (High Calorie)", "Hydration"],
      avoid: ["Oral feeding (Aspiration risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "12,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "Spatula Test", result: "Positive", notes: "Diagnostic" },
      { name: "CK Total", result: "Elevated", notes: "Muscle spasm" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. HTIG IM", "Inj. Metronidazole", "Diazepam Infusion"] }
    ]
  },
  "Down Syndrome (Trisomy 21)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Presence of an extra copy of Chromosome 21 (Non-disjunction during meiosis), leading to overexpression of genes (e.g., APP, DYRK1A) causing intellectual disability, hypotonia, and dysmorphic features.",
    
    clinicalFeatures: {
      symptoms: ["Developmental delay", "Hypotonia (Floppy baby)", "Hearing loss"],
      signs: ["Mongoloid slant (Up-slanting eyes)", "Simian Crease (Single palmar crease)", "Sandal gap toe", "Macroglossia"]
    },

    diagnosticWorkup: [
      { test: "Karyotyping", finding: "47,XX,+21 or 47,XY,+21", significance: "Gold Standard Confirmation" },
      { test: "Echocardiography", finding: "AV Canal Defect / VSD", significance: "Screening for Congenital Heart Disease (40% risk)" },
      { test: "Thyroid Profile", finding: "Elevated TSH", significance: "Annual screening for Hypothyroidism" }
    ],

    clinicalPearls: [
      { pearl: "Alzheimer's Risk.", explanation: "The APP gene is on Chr 21; nearly all patients develop Alzheimer's pathology by age 40." },
      { pearl: "Atlantoaxial Instability.", explanation: "Increased laxity of C1-C2 joint; screen with X-ray before sports or surgery to prevent cord compression." }
    ],
    
    redFlags: ["Infantile Spasms (Seizures)", "Leukemia (ALL/AML risk increased)", "Sleep Apnea", "Gait changes (Cord compression)"],
    differentials: ["Congenital Hypothyroidism", "Beckwith-Wiedemann Syndrome", "Fragile X Syndrome"],

    managementRationale: [
      { 
        drug: "Levothyroxine", 
        class: "Thyroid Hormone", 
        dose: "Age based", 
        freq: "OD", 
        indication: "Hypothyroidism", 
        rationale: "Early treatment prevents further intellectual compromise." 
      },
      { 
        drug: "Donepezil", 
        class: "AChE Inhibitor", 
        dose: "5-10 mg", 
        freq: "OD", 
        indication: "Early Dementia", 
        rationale: "Symptomatic management of cognitive decline in adults." 
      },
      { 
        drug: "Digoxin", 
        class: "Cardiac Glycoside", 
        dose: "Pediatric dosing", 
        freq: "BD", 
        indication: "Heart Failure", 
        rationale: "Management of congenital heart defects prior to surgery." 
      }
    ],

    lifestyle: ["Early Intervention (PT/OT/Speech).", "Regular audiology/vision checks.", "Neck x-rays (Special Olympics protocol)."],
    
    diet: {
      eat: ["High Fiber (Constipation is common)", "Calcium/Vit D", "Ragi (Finger Millet)"],
      avoid: ["High calorie foods (Obesity risk due to low BMR)", "Choking hazards"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "10,000 /cmm", plt: "250,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "10,000 /cmm", plt: "250,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Karyotype", result: "Trisomy 21", notes: "Non-disjunction" },
      { name: "TSH", result: "10 mIU/L", notes: "Hypothyroid" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Levothyroxine", "Early Intervention Therapy"] }
    ]
  },

  "Turner Syndrome (45,X)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Complete or partial absence of one X chromosome in females (45,X). Haploinsufficiency of the SHOX gene leads to short stature and skeletal abnormalities.",
    
    clinicalFeatures: {
      symptoms: ["Primary Amenorrhea", "Short stature", "Infertility", "Hearing loss"],
      signs: ["Webbed neck (Pterygium colli)", "Wide carrying angle (Cubitus valgus)", "Broad chest (widely spaced nipples)", "Lymphedema (at birth)"]
    },

    diagnosticWorkup: [
      { test: "Karyotyping", finding: "45,X", significance: "Gold Standard Diagnosis" },
      { test: "Echocardiography", finding: "Coarctation of Aorta / Bicuspid Aortic Valve", significance: "Critical cardiovascular screening" },
      { test: "FSH/LH", finding: "Elevated (Hypergonadotropic Hypogonadism)", significance: "Indicates ovarian failure (Streak ovaries)" }
    ],

    clinicalPearls: [
      { pearl: "Mosaicism.", explanation: "Some patients (45,X/46,XX) may have a milder phenotype and potential for fertility." },
      { pearl: "Y Chromosome Material.", explanation: "If Y material is present in karyotype, prophylactic gonadectomy is mandatory due to high risk of Gonadoblastoma." }
    ],
    
    redFlags: ["Hypertension (Coarctation)", "Aortic Dissection", "Sensorineural Deafness", "Renal anomalies (Horseshoe kidney)"],
    differentials: ["Noonan Syndrome (Male/Female Turner)", "Constitutional Delay of Growth", "Pure Gonadal Dysgenesis"],

    managementRationale: [
      { 
        drug: "Somatropin", 
        class: "Growth Hormone", 
        dose: "0.045-0.05 mg/kg/day", 
        freq: "SC Daily", 
        indication: "Short Stature", 
        rationale: "Start early (age 4-5) to optimize final adult height." 
      },
      { 
        drug: "Ethinylestradiol", 
        class: "Estrogen", 
        dose: "Low dose", 
        freq: "Daily", 
        indication: "Puberty Induction", 
        rationale: "Induces secondary sexual characteristics. Start around age 12." 
      },
      { 
        drug: "Progesterone", 
        class: "Progestin", 
        dose: "Cyclic", 
        freq: "Monthly", 
        indication: "Menstrual Cycle", 
        rationale: "Added after 2 years of estrogen to prevent endometrial hyperplasia." 
      }
    ],

    lifestyle: ["Blood pressure monitoring.", "Fertility counseling (Oocyte donation).", "Educational support (Math difficulties common)."],
    
    diet: {
      eat: ["Calcium/Vitamin D (High Osteoporosis risk)", "Heart healthy diet"],
      avoid: ["Excess salt (HTN risk)", "High calorie (Obesity risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "37%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "37%" }]
    },
    specialTests: [
      { name: "Karyotype", result: "45,X", notes: "Classic Turner" },
      { name: "ECHO", result: "Bicuspid Aortic Valve", notes: "Monitor" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Somatropin SC", "Tab. Estrogen"] }
    ]
  },

  "Klinefelter Syndrome (47,XXY)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Presence of an extra X chromosome in males (47,XXY). Testicular dysgenesis leads to low testosterone (Hypogonadism) and elevated gonadotropins, causing feminization and infertility.",
    
    clinicalFeatures: {
      symptoms: ["Infertility (Azoospermia)", "Gynecomastia", "Low libido", "Learning difficulties"],
      signs: ["Tall stature (delayed epiphyseal closure)", "Small firm testes (<4ml)", "Sparse body hair", "Female fat distribution"]
    },

    diagnosticWorkup: [
      { test: "Karyotyping", finding: "47,XXY", significance: "Confirmatory" },
      { test: "Hormonal Profile", finding: "High FSH/LH, Low Testosterone, High Estradiol", significance: "Hypergonadotropic Hypogonadism" },
      { test: "Semen Analysis", finding: "Azoospermia", significance: "Universal finding" }
    ],

    clinicalPearls: [
      { pearl: "Cancer Risk.", explanation: "50x increased risk of Breast Cancer compared to XY males; Regular breast exams needed." },
      { pearl: "Delayed Diagnosis.", explanation: "Often undiagnosed until adulthood when presenting for infertility." }
    ],
    
    redFlags: ["Breast Mass", "Osteoporosis", "Metabolic Syndrome", "Autoimmune Disease (SLE risk higher)"],
    differentials: ["Kallmann Syndrome (Low FSH/LH)", "Marfan Syndrome (Tall)", "Fragile X Syndrome"],

    managementRationale: [
      { 
        drug: "Testosterone Enanthate", 
        class: "Androgen", 
        dose: "200 mg", 
        freq: "IM q2-3 weeks", 
        indication: "Hypogonadism", 
        rationale: "Virilization, muscle mass, bone density, and libido improvement." 
      },
      { 
        drug: "Anastrozole", 
        class: "Aromatase Inhibitor", 
        dose: "1 mg", 
        freq: "OD", 
        indication: "Severe Gynecomastia", 
        rationale: "Reduces conversion of testosterone to estrogen (Adjunct, surgery preferred)." 
      },
      { 
        drug: "Calcium / Vit D", 
        class: "Supplement", 
        dose: "Standard", 
        freq: "Daily", 
        indication: "Bone Health", 
        rationale: "Prevents osteoporosis associated with hypogonadism." 
      }
    ],

    lifestyle: ["Weight bearing exercise.", "Fertility preservation (TESE if sperm found).", "Breast self-exam."],
    
    diet: {
      eat: ["Protein rich", "Calcium rich foods"],
      avoid: ["Soy (Phytoestrogens - theoretical concern)", "Excess sugar (Metabolic syndrome risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "220,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "220,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "FSH", result: "45 mIU/mL", notes: "Very High" },
      { name: "Testosterone", result: "150 ng/dL", notes: "Low" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Testosterone Depot", "Lifestyle Mod"] }
    ]
  },

  "Chronic Myeloid Leukemia (CML)": {
    category: "Oncology / Chromosomal",
    pathophysiology: "Reciprocal translocation t(9;22) forming the Philadelphia Chromosome. This creates the BCR-ABL fusion gene, a constitutively active tyrosine kinase driving granulocyte proliferation.",
    
    clinicalFeatures: {
      symptoms: ["Fatigue", "Night sweats", "Abdominal fullness (Early satiety)", "Weight loss"],
      signs: ["Massive Splenomegaly", "Sternal tenderness", "Pallor"]
    },

    diagnosticWorkup: [
      { test: "Cytogenetics (Karyotype)", finding: "t(9;22) Philadelphia Chromosome", significance: "Hallmark of CML" },
      { test: "RT-PCR", finding: "BCR-ABL transcript", significance: "Quantitative diagnosis and monitoring (MMR)" },
      { test: "CBC", finding: "Marked Leukocytosis (>100k) with left shift (all stages seen)", significance: "Basophilia is characteristic" }
    ],

    clinicalPearls: [
      { pearl: "Three Phases.", explanation: "Chronic (manageable), Accelerated (warning), Blast Crisis (acute leukemia behavior). Goal is to keep in Chronic." },
      { pearl: "Tyrosine Kinase Inhibitors.", explanation: "TKIs transformed CML from a fatal disease to a chronic condition with near-normal life expectancy." }
    ],
    
    redFlags: ["Blast Crisis (>20% blasts)", "WBC > 300k (Leukostasis)", "Additional chromosomal abnormalities"],
    differentials: ["Leukemoid Reaction (High LAP score)", "Myelofibrosis", "Polycythemia Vera", "CNL"],

    managementRationale: [
      { 
        drug: "Imatinib", 
        class: "Tyrosine Kinase Inhibitor (1st Gen)", 
        dose: "400 mg", 
        freq: "OD", 
        indication: "Chronic Phase", 
        rationale: "Competitively inhibits ATP binding site of BCR-ABL kinase." 
      },
      { 
        drug: "Dasatinib", 
        class: "TKI (2nd Gen)", 
        dose: "100 mg", 
        freq: "OD", 
        indication: "Imatinib Resistance/Intolerance", 
        rationale: "More potent; effective against many mutations. Risk of pleural effusion." 
      },
      { 
        drug: "Hydroxyurea", 
        class: "Cytoreductive", 
        dose: "1-2 g", 
        freq: "Daily", 
        indication: "Initial Cytoreduction", 
        rationale: "Lowers WBC count rapidly before confirming diagnosis/starting TKI." 
      }
    ],

    lifestyle: ["Compliance is critical (Missed doses -> Resistance).", "Regular PCR monitoring.", "Avoid pregnancy on TKIs."],
    
    diet: {
      eat: ["Cooked foods (if neutropenic)", "Ginger (for TKI nausea)"],
      avoid: ["Grapefruit (CYP3A4 inhibitor - increases Imatinib toxicity)", "St John's Wort"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "150,000 /cmm", plt: "450,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "150,000 /cmm", plt: "450,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "BCR-ABL PCR", result: "55%", notes: "High load" },
      { name: "Bone Marrow", result: "Hypercellular, <5% Blasts", notes: "Chronic Phase" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Imatinib 400mg OD", "Tab. Allopurinol"] }
    ]
  },

  "Prader-Willi Syndrome (PWS)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Loss of expression of paternal genes on Chromosome 15q11-q13 (Deletion 70%, Maternal Uniparental Disomy 25%). Leads to hypothalamic dysfunction, causing hyperphagia and lack of satiety.",
    
    clinicalFeatures: {
      symptoms: ["Insatiable hunger (Hyperphagia)", "Obesity", "Learning disability", "Tantrums"],
      signs: ["Floppy infant (Hypotonia)", "Small hands/feet", "Almond-shaped eyes", "Hypogonadism"]
    },

    diagnosticWorkup: [
      { test: "DNA Methylation Analysis", finding: "Abnormal", significance: "First-line; detects 99% of cases (Deletion/UPD/Imprinting)" },
      { test: "FISH", finding: "Deletion 15q11-q13", significance: "Identifies the specific mechanism" },
      { test: "Sleep Study", finding: "Obstructive Sleep Apnea", significance: "Common complication of obesity/hypotonia" }
    ],

    clinicalPearls: [
      { pearl: "Hyperphagia.", explanation: "Not just 'hungry'. It is a life-threatening compulsion. Patients will eat raw meat, frozen food, or garbage. Locks on kitchen/fridge are mandatory." },
      { pearl: "No Vomiting.", explanation: "High threshold for vomiting; gastric rupture is a silent killer after binge eating." }
    ],
    
    redFlags: ["Sudden weight gain", "Respiratory failure (Pickwickian)", "Gastric Rupture (Acute abdomen)", "Diabetes"],
    differentials: ["Angelman Syndrome (Maternal deletion of same region)", "Bardet-Biedl Syndrome", "Hypothalamic Tumor"],

    managementRationale: [
      { 
        drug: "Somatropin", 
        class: "Growth Hormone", 
        dose: "0.035 mg/kg/day", 
        freq: "SC Daily", 
        indication: "Growth/Body Comp", 
        rationale: "Improves height, increases lean muscle mass, and decreases fat mass. Contraindicated in severe obesity/apnea." 
      },
      { 
        drug: "Topiramate", 
        class: "Anticonvulsant", 
        dose: "25-100 mg", 
        freq: "BD", 
        indication: "Skin Picking / Impulse Control", 
        rationale: "Mood stabilization and mild appetite suppression." 
      },
      { 
        drug: "Testosterone / Estrogen", 
        class: "Hormone", 
        dose: "Replacement", 
        freq: "Cyclic", 
        indication: "Hypogonadism", 
        rationale: "Puberty induction and bone health." 
      }
    ],

    lifestyle: ["Strict Food Security (Locked kitchen).", "Structured routine.", "Exercise program."],
    
    diet: {
      eat: ["Calorie Restricted (60-80% of normal)", "High fiber (satiety attempt)"],
      avoid: ["Unlimited access to ANY food", "Sugary treats", "High calorie density foods"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" },
      progression: [{ day: 1, hb: "13.5 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "40%" }]
    },
    specialTests: [
      { name: "Methylation PCR", result: "Abnormal", notes: "PWS confirmed" },
      { name: "IGF-1", result: "Low", notes: "GH deficiency" }
    ],
    treatment: [
      { day: 1, meds: ["Strict Diet Control", "Inj. Somatropin"] }
    ]
  },
  "Edward's Syndrome (Trisomy 18)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Presence of an extra copy of Chromosome 18 (Nondisjunction). Severe disruption of organogenesis leads to multiple congenital anomalies and high neonatal mortality.",
    
    clinicalFeatures: {
      symptoms: ["Failure to thrive", "Feeding difficulties", "Apneic episodes"],
      signs: ["Rocker-bottom feet", "Clenched fists with overlapping fingers", "Micrognathia", "Low-set ears"]
    },

    diagnosticWorkup: [
      { test: "Karyotyping", finding: "47,XX,+18 or 47,XY,+18", significance: "Gold Standard Confirmation" },
      { test: "Echocardiography", finding: "VSD / ASD / PDA", significance: "Cardiac defects present in >90%" },
      { test: "Prenatal Ultrasound", finding: "Choroid plexus cysts / IUGR", significance: "Screening markers" }
    ],

    clinicalPearls: [
      { pearl: "The Hand Sign.", explanation: "The index finger overlaps the 3rd finger, and the 5th overlaps the 4th; highly specific for Trisomy 18." },
      { pearl: "Survival.", explanation: "Very poor prognosis; only 5-10% survive past the first year. Mosaic forms may have milder phenotype." }
    ],
    
    redFlags: ["Apnea (Central)", "Heart Failure", "Wilms Tumor (Increased risk)", "Esophageal Atresia"],
    differentials: ["Patau Syndrome (Trisomy 13)", "Smith-Lemli-Opitz Syndrome", "Fetal Akinesia Sequence"],

    managementRationale: [
      { 
        drug: "Supportive Care", 
        class: "N/A", 
        dose: "N/A", 
        freq: "N/A", 
        indication: "Palliative", 
        rationale: "Focus on comfort, feeding (NG tube), and family counseling due to life-limiting nature." 
      },
      { 
        drug: "Diuretics (Furosemide)", 
        class: "Loop Diuretic", 
        dose: "1 mg/kg", 
        freq: "BD", 
        indication: "Heart Failure", 
        rationale: "Symptomatic relief of pulmonary congestion if cardiac defects are present." 
      },
      { 
        drug: "Phenobarbital", 
        class: "Anticonvulsant", 
        dose: "3-5 mg/kg", 
        freq: "OD", 
        indication: "Seizures", 
        rationale: "Seizures are common; monotherapy preferred to minimize sedation." 
      }
    ],

    lifestyle: ["Hospice/Palliative care involvement.", "Genetic counseling for future pregnancies."],
    
    diet: {
      eat: ["High calorie formula (if surviving)", "Nasogastric feeding"],
      avoid: ["Oral feeding if aspiration risk is high"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "15.0 g/dL", wbc: "10,000 /cmm", plt: "150,000 /cmm", hct: "45%" },
      progression: [{ day: 1, hb: "15.0 g/dL", wbc: "10,000 /cmm", plt: "150,000 /cmm", hct: "45%" }]
    },
    specialTests: [
      { name: "Karyotype", result: "Trisomy 18", notes: "Full trisomy" },
      { name: "Echo", result: "Large VSD", notes: "Hemodynamically significant" }
    ],
    treatment: [
      { day: 1, meds: ["Comfort Care measures", "NG Tube insertion"] }
    ]
  },

  "Patau Syndrome (Trisomy 13)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Presence of an extra Chromosome 13. Causes severe midline defects due to disruption of prechordal mesoderm development (Holoprosencephaly).",
    
    clinicalFeatures: {
      symptoms: ["Seizures", "Apnea", "Feeding difficulty"],
      signs: ["Cleft Lip/Palate (Midline)", "Polydactyly (Extra fingers)", "Microphthalmia (Small eyes)", "Cutis Aplasia (Scalp skin defect)"]
    },

    diagnosticWorkup: [
      { test: "Karyotyping", finding: "47,XX,+13 or 47,XY,+13", significance: "Confirmatory" },
      { test: "Brain MRI", finding: "Holoprosencephaly (Single ventricle)", significance: "Classic CNS malformation" },
      { test: "Renal Ultrasound", finding: "Polycystic Kidneys", significance: "Common association" }
    ],

    clinicalPearls: [
      { pearl: "Midline Defects.", explanation: "The hallmark is failure of the forebrain to divide (Holoprosencephaly) and midline facial clefts." },
      { pearl: "Prognosis.", explanation: "Median survival is < 7 days. Most severe of the viable trisomies." }
    ],
    
    redFlags: ["Seizures (Intractable)", "Heart Failure", "Aspiration", "Respiratory Failure"],
    differentials: ["Edward's Syndrome", "Meckel-Gruber Syndrome", "Smith-Lemli-Opitz Syndrome"],

    managementRationale: [
      { 
        drug: "Comfort Measures", 
        class: "Palliative", 
        dose: "Titrated", 
        freq: "PRN", 
        indication: "End of Life", 
        rationale: "Opioids/Benzodiazepines for distress/seizures." 
      },
      { 
        drug: "Anticonvulsants", 
        class: "Various", 
        dose: "Standard", 
        freq: "Maintenance", 
        indication: "Seizures", 
        rationale: "Management of structural epilepsy." 
      }
    ],

    lifestyle: ["Genetic counseling.", "Supportive care for parents."],
    
    diet: {
      eat: ["Specialized feeding (Haberman feeder) for clefts"],
      avoid: ["Standard nipples (aspiration risk)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "14.0 g/dL", wbc: "12,000 /cmm", plt: "100,000 /cmm", hct: "42%" },
      progression: [{ day: 1, hb: "14.0 g/dL", wbc: "12,000 /cmm", plt: "100,000 /cmm", hct: "42%" }]
    },
    specialTests: [
      { name: "Karyotype", result: "Trisomy 13", notes: "Non-disjunction" },
      { name: "MRI Brain", result: "Alobar Holoprosencephaly", notes: "Severe" }
    ],
    treatment: [
      { day: 1, meds: ["Palliative Care Protocol"] }
    ]
  },

  "Cri-du-chat Syndrome (5p-)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Partial deletion of the short arm of Chromosome 5 (5p15.2). Haploinsufficiency of genes (e.g., CTNND2) leads to abnormal laryngeal development and intellectual disability.",
    
    clinicalFeatures: {
      symptoms: ["High-pitched cat-like cry (in infancy)", "Severe intellectual disability", "Feeding problems"],
      signs: ["Microcephaly", "Hypertelorism (Wide set eyes)", "Epicanthal folds", "Hypotonia"]
    },

    diagnosticWorkup: [
      { test: "Chromosomal Microarray (CMA)", finding: "Deletion at 5p15", significance: "Higher sensitivity than Karyotype for small deletions" },
      { test: "Karyotype", finding: "46,XX,del(5p)", significance: "Visible if deletion is large enough" },
      { test: "FISH", finding: "Absent signal on 5p", significance: "Targeted confirmation" }
    ],

    clinicalPearls: [
      { pearl: "The Cry.", explanation: "The characteristic cry is due to structural abnormality of the larynx; it usually disappears by age 2." },
      { pearl: "Survival.", explanation: "Unlike Trisomy 13/18, survival to adulthood is common, though with significant disability." }
    ],
    
    redFlags: ["Aspiration pneumonia", "Failure to thrive", "Self-injurious behavior", "Scoliosis"],
    differentials: ["Wolf-Hirschhorn Syndrome (4p-)", "Patau Syndrome", "Mowat-Wilson Syndrome"],

    managementRationale: [
      { 
        drug: "Physiotherapy", 
        class: "Therapy", 
        dose: "Daily", 
        freq: "Ongoing", 
        indication: "Hypotonia", 
        rationale: "Improves motor milestones." 
      },
      { 
        drug: "Speech Therapy", 
        class: "Therapy", 
        dose: "Regular", 
        freq: "Ongoing", 
        indication: "Communication", 
        rationale: "Sign language often needed due to severe speech delay." 
      },
      { 
        drug: "Melatonin", 
        class: "Supplement", 
        dose: "2-5 mg", 
        freq: "HS", 
        indication: "Sleep Disturbance", 
        rationale: "Regulates circadian rhythm issues common in neurodevelopmental disorders." 
      }
    ],

    lifestyle: ["Early intervention is critical.", "Family support groups."],
    
    diet: {
      eat: ["High calorie supplements (if failure to thrive)"],
      avoid: ["Choking hazards (swallow dysfunction)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Microarray", result: "5p15.2 Deletion", notes: "10Mb loss" },
      { name: "Audiometry", result: "Normal", notes: "Rule out deafness" }
    ],
    treatment: [
      { day: 1, meds: ["Early Intervention Referral", "Speech Therapy"] }
    ]
  },

  "Fragile X Syndrome (FMR1)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Expansion of CGG trinucleotide repeats (>200) in the FMR1 gene on the X chromosome. Leads to methylation and silencing of the FMRP protein, crucial for synaptic plasticity.",
    
    clinicalFeatures: {
      symptoms: ["Intellectual disability (Most common inherited cause)", "Hyperactivity/ADHD", "Hand flapping", "Social anxiety"],
      signs: ["Macroorchidism (Large testes - post puberty)", "Long face", "Large prominent ears", "Hyperextensible joints"]
    },

    diagnosticWorkup: [
      { test: "FMR1 DNA Analysis (PCR/Southern Blot)", finding: "> 200 CGG repeats", significance: "Gold Standard (Full Mutation)" },
      { test: "Karyotype", finding: "Fragile site at Xq27.3", significance: "Historical test (Low sensitivity, replaced by DNA testing)" },
      { test: "Echocardiography", finding: "Mitral Valve Prolapse", significance: "Common connective tissue association" }
    ],

    clinicalPearls: [
      { pearl: "Premutation Carriers.", explanation: "55-200 repeats. Risk of FXTAS (Tremor/Ataxia) in older males and FXPOI (Ovarian Insufficiency) in females." },
      { pearl: "Autism Link.", explanation: "The most common known single-gene cause of Autism Spectrum Disorder." }
    ],
    
    redFlags: ["Seizures", "Aggression/Self-injury", "Connective tissue problems (MVP, Scoliosis)", "FXTAS in grandfather"],
    differentials: ["Sotos Syndrome", "Prader-Willi Syndrome", "Autism (Idiopathic)", "Marfan Syndrome"],

    managementRationale: [
      { 
        drug: "Stimulants (Methylphenidate)", 
        class: "CNS Stimulant", 
        dose: "Titrated", 
        freq: "OD/BD", 
        indication: "ADHD Symptoms", 
        rationale: "Improves focus and hyperactivity. Monitor for anxiety worsening." 
      },
      { 
        drug: "Sertraline", 
        class: "SSRI", 
        dose: "25-50 mg", 
        freq: "OD", 
        indication: "Anxiety / Aggression", 
        rationale: "Treats social anxiety and mood instability." 
      },
      { 
        drug: "Risperidone", 
        class: "Atypical Antipsychotic", 
        dose: "0.5-2 mg", 
        freq: "BD", 
        indication: "Severe Irritability", 
        rationale: "FDA approved for irritability associated with Autism/Fragile X." 
      }
    ],

    lifestyle: ["Structured environment.", "Sensory integration therapy.", "Genetic counseling for female relatives."],
    
    diet: {
      eat: ["Balanced diet", "Folic Acid (Historical interest, minimal evidence)"],
      avoid: ["Caffeine (Worsens hyperactivity)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" },
      progression: [{ day: 1, hb: "13.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "39%" }]
    },
    specialTests: [
      { name: "FMR1 PCR", result: ">200 repeats", notes: "Full Mutation" },
      { name: "Methylation Study", result: "Hypermethylated", notes: "Gene Silenced" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Sertraline 25mg OD", "Behavioral Therapy"] }
    ]
  },

  "Angelman Syndrome (15q-)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Loss of function of the maternal UBE3A gene on Chromosome 15q11-q13 (Deletion, Mutation, or Paternal Uniparental Disomy). Loss of ubiquitin pathway affects synaptic development.",
    
    clinicalFeatures: {
      symptoms: ["Severe developmental delay", "Absent speech", "Happy demeanor (Frequent smiling/laughter)", "Sleep problems"],
      signs: ["Ataxic gait ('Puppet-like')", "Microcephaly", "Seizures", "Tongue thrusting"]
    },

    diagnosticWorkup: [
      { test: "DNA Methylation Analysis", finding: "Abnormal", significance: "First-line screening" },
      { test: "FISH", finding: "Deletion 15q11-q13", significance: "Identifies the specific mechanism (70% of cases)" },
      { test: "EEG", finding: "High amplitude slow spikes", significance: "Characteristic pattern even without clinical seizures" }
    ],

    clinicalPearls: [
      { pearl: "Happy Puppet.", explanation: "Historical name due to the jerky, ataxic gait and paroxysms of laughter." },
      { pearl: "Water Fascination.", explanation: "A unique behavioral phenotype where children are intensely fascinated by water/reflections." }
    ],
    
    redFlags: ["Intractable Seizures", "Non-convulsive Status Epilepticus", "Severe Sleep Deprivation", "Aspiration"],
    differentials: ["Prader-Willi Syndrome (Paternal deletion)", "Rett Syndrome", "Cerebral Palsy", "Lennox-Gastaut Syndrome"],

    managementRationale: [
      { 
        drug: "Sodium Valproate", 
        class: "Anticonvulsant", 
        dose: "20-30 mg/kg", 
        freq: "BD", 
        indication: "Seizures", 
        rationale: "Broad spectrum control. Seizures in Angelman are often refractory." 
      },
      { 
        drug: "Clonazepam", 
        class: "Benzodiazepine", 
        dose: "0.05 mg/kg", 
        freq: "HS", 
        indication: "Myoclonus / Sleep", 
        rationale: "Treats myoclonic jerks and aids sleep initiation." 
      },
      { 
        drug: "Melatonin", 
        class: "Supplement", 
        dose: "3-6 mg", 
        freq: "HS", 
        indication: "Sleep Disorder", 
        rationale: "Addresses the severe sleep fragmentation common in AS." 
      }
    ],

    lifestyle: ["Seizure safety precautions.", "Augmentative Communication Devices (AAC).", "Gait training."],
    
    diet: {
      eat: ["Ketogenic Diet (Highly effective for refractory seizures in AS)", "High calorie (due to movement)"],
      avoid: ["Sugary foods (exacerbates hyperactivity)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "37%" },
      progression: [{ day: 1, hb: "12.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "37%" }]
    },
    specialTests: [
      { name: "Methylation", result: "Paternal pattern only", notes: "Maternal allele lost" },
      { name: "EEG", result: "Delta bursts", notes: "Typical AS" }
    ],
    treatment: [
      { day: 1, meds: ["Syr. Valproate", "Ketogenic Diet Initiation"] }
    ]
  },

  "DiGeorge Syndrome (22q11.2)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Microdeletion of 22q11.2 causing defect in 3rd and 4th pharyngeal pouches. Leads to Thymic aplasia (T-cell defect), Parathyroid hypoplasia (Hypocalcemia), and Conotruncal heart defects.",
    
    clinicalFeatures: {
      symptoms: ["Recurrent infections", "Seizures (Hypocalcemia)", "Nasal voice (Palatal insufficiency)", "Learning difficulties"],
      signs: ["Cleft Palate", "Cardiac Murmur (Tetralogy of Fallot)", "Dysmorphic face", "Tetany"]
    },

    diagnosticWorkup: [
      { test: "FISH / Microarray", finding: "22q11.2 Deletion", significance: "Gold Standard Confirmation" },
      { test: "Serum Calcium/PTH", finding: "Low Ca / Low PTH", significance: "Hypoparathyroidism" },
      { test: "Echocardiography", finding: "TOF / Truncus Arteriosus", significance: "Cardiac screening mandatory" }
    ],

    clinicalPearls: [
      { pearl: "CATCH-22.", explanation: "Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia, 22q11." },
      { pearl: "No Live Vaccines.", explanation: "Avoid live vaccines (BCG, MMR) until T-cell immune function is assessed and cleared." }
    ],
    
    redFlags: ["Hypocalcemic Seizures", "Severe Immunodeficiency (SCID-like)", "Heart Failure", "Psychosis (Schizophrenia risk high in adults)"],
    differentials: ["Velocardiofacial Syndrome (same deletion)", "CHARGE Syndrome", "Fetal Alcohol Syndrome"],

    managementRationale: [
      { 
        drug: "Calcium Carbonate", 
        class: "Supplement", 
        dose: "Titrated", 
        freq: "QID", 
        indication: "Hypocalcemia", 
        rationale: "Maintains serum calcium." 
      },
      { 
        drug: "Calcitriol", 
        class: "Active Vitamin D", 
        dose: "0.25 mcg", 
        freq: "OD", 
        indication: "Hypoparathyroidism", 
        rationale: "Required due to lack of PTH-mediated Vit D activation." 
      },
      { 
        drug: "Cotrimoxazole", 
        class: "Antibiotic", 
        dose: "Prophylactic", 
        freq: "MWF", 
        indication: "T-cell Deficiency", 
        rationale: "PCP prophylaxis if CD4 counts are very low." 
      }
    ],

    lifestyle: ["Speech therapy (VPI).", "Psychiatric screening (Adults).", "Genetic counseling."],
    
    diet: {
      eat: ["Calcium rich foods (Dairy)", "Soft foods (if cleft palate)"],
      avoid: ["Phytates with calcium", "Raw foods (if immunocompromised)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "FISH", result: "22q11.2 Deleted", notes: "Positive" },
      { name: "Calcium", result: "7.0 mg/dL", notes: "Low" }
    ],
    treatment: [
      { day: 1, meds: ["Syr. Calcium Carbonate", "Syr. Calcitriol"] }
    ]
  },

  "Williams Syndrome (7q11)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Microdeletion of 7q11.23 including the Elastin (ELN) gene. Results in connective tissue abnormalities (Supravalvular Aortic Stenosis) and distinct neurobehavioral profile.",
    
    clinicalFeatures: {
      symptoms: ["Failure to thrive (infancy)", "Cocktail party personality (Over-friendly)", "Anxiety", "Hypercalcemia (Infantile)"],
      signs: ["Elfin facies (Full cheeks, wide mouth)", "Supravalvular Aortic Stenosis (SVAS)", "Hypertension"]
    },

    diagnosticWorkup: [
      { test: "FISH / Microarray", finding: "7q11.23 Deletion", significance: "Diagnostic" },
      { test: "Echocardiography", finding: "SVAS / Pulmonary Stenosis", significance: "Elastin arteriopathy" },
      { test: "Serum Calcium", finding: "Elevated (Infancy)", significance: "Idiopathic hypercalcemia often resolves in childhood" }
    ],

    clinicalPearls: [
      { pearl: "Elfin Facies.", explanation: "Broad forehead, stellate iris pattern, long philtrum, wide mouth with full lips." },
      { pearl: "Music Ability.", explanation: "Often have absolute pitch and strong affinity for music despite intellectual disability." }
    ],
    
    redFlags: ["Sudden Cardiac Death (Anesthesia risk with SVAS)", "Hypertensive Crisis", "Nephrocalcinosis", "Rectal Prolapse"],
    differentials: ["Noonan Syndrome", "Congenital Rubella", "Smith-Magenis Syndrome"],

    managementRationale: [
      { 
        drug: "Amlodipine", 
        class: "Calcium Channel Blocker", 
        dose: "Age based", 
        freq: "OD", 
        indication: "Hypertension", 
        rationale: "Treats vascular stiffness. Beta-blockers used with caution in SVAS." 
      },
      { 
        drug: "Low Calcium Diet", 
        class: "Dietary", 
        dose: "Restriction", 
        freq: "Daily", 
        indication: "Infantile Hypercalcemia", 
        rationale: "Reduces calcium load; steroids used in severe cases." 
      }
    ],

    lifestyle: ["Avoid Vitamin D supplements (worsens hypercalcemia).", "Music Therapy.", "Anesthesia precaution."],
    
    diet: {
      eat: ["Standard healthy diet (post-infancy)"],
      avoid: ["Vitamin D fortified foods (in infants)", "Excess Calcium"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "8,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "FISH", result: "Elastin Gene Deleted", notes: "7q11.23" },
      { name: "Echo", result: "Supravalvular AS", notes: "Gradient 40mmHg" }
    ],
    treatment: [
      { day: 1, meds: ["BP Monitoring", "Cardiology Follow-up"] }
    ]
  },

  "Wolf-Hirschhorn Syndrome (4p-)": {
    category: "Genetic / Chromosomal",
    pathophysiology: "Partial deletion of the short arm of Chromosome 4 (4p16.3). Haploinsufficiency of genes like WHSC1 and LETM1 leads to severe growth restriction, seizures, and defects.",
    
    clinicalFeatures: {
      symptoms: ["Seizures (resistant)", "Severe failure to thrive", "Developmental delay"],
      signs: ["Greek Warrior Helmet facies (Prominent glabella)", "Microcephaly", "Cleft Lip/Palate", "Hypotonia"]
    },

    diagnosticWorkup: [
      { test: "Chromosomal Microarray", finding: "4p16.3 Deletion", significance: "Diagnostic" },
      { test: "EEG", finding: "High amplitude spikes", significance: "Seizure management" },
      { test: "Renal Ultrasound", finding: "Structural anomalies", significance: "Screening" }
    ],

    clinicalPearls: [
      { pearl: "Greek Warrior Helmet.", explanation: "Broad, prominent bridge of the nose continuing to the forehead, resembling ancient armor." },
      { pearl: "Seizure Course.", explanation: "Seizures are severe in childhood but often improve with age." }
    ],
    
    redFlags: ["Status Epilepticus", "Aspiration", "Recurrent Infections (IgA deficiency)", "Feeding failure"],
    differentials: ["Cri-du-chat", "Angelman Syndrome", "Fetal Alcohol Syndrome"],

    managementRationale: [
      { 
        drug: "Sodium Valproate / Levetiracetam", 
        class: "Anticonvulsant", 
        dose: "Standard", 
        freq: "BD", 
        indication: "Seizures", 
        rationale: "Broad spectrum coverage; often requires polytherapy." 
      },
      { 
        drug: "Gastrostomy (PEG)", 
        class: "Surgical", 
        dose: "N/A", 
        freq: "Continuous", 
        indication: "Feeding Failure", 
        rationale: "Ensures adequate nutrition due to severe hypotonia/clefts." 
      }
    ],

    lifestyle: ["Seizure safety.", "Early intervention.", "Genetic counseling."],
    
    diet: {
      eat: ["High calorie formula", "Thickened feeds"],
      avoid: ["Choking hazards"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Microarray", result: "4p16.3 Loss", notes: "5Mb deletion" },
      { name: "EEG", result: "Multifocal spikes", notes: "Epileptogenic" }
    ],
    treatment: [
      { day: 1, meds: ["Syr. Levetiracetam", "Feeding Therapy"] }
    ]
  },
  "Scurvy (Vitamin C Deficiency)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Deficiency of Ascorbic Acid leads to defective collagen synthesis (impaired hydroxylation of proline/lysine), causing vessel wall fragility, poor wound healing, and connective tissue weakness.",
    
    clinicalFeatures: {
      symptoms: ["Gum bleeding", "Easy bruising", "Fatigue", "Joint pain"],
      signs: ["Perifollicular Hemorrhage (Pathognomonic)", "Corkscrew hairs", "Swollen/Spongy gums", "Hemarthrosis"]
    },

    diagnosticWorkup: [
      { test: "Plasma Ascorbic Acid", finding: "< 0.2 mg/dL", significance: "Diagnostic" },
      { test: "X-ray Knees", finding: "White Line of Frankel / Wimberger's Ring", significance: "Radiological signs in children" },
      { test: "CBC", finding: "Anemia", significance: "Due to bleeding + impaired iron absorption" }
    ],

    clinicalPearls: [
      { pearl: "The 4 H's.", explanation: "Hemorrhage, Hyperkeratosis, Hypochondriasis, Hematologic abnormalities." },
      { pearl: "Iron Absorption.", explanation: "Vitamin C is crucial for absorbing non-heme iron (plant sources); deficiency often co-exists with Iron Deficiency Anemia." }
    ],
    
    redFlags: ["Hemarthrosis", "Intracranial Hemorrhage", "Severe Anemia", "Poor wound healing (Dehiscence)"],
    differentials: ["Vasculitis", "ITP", "Leukemia (Gum hypertrophy mimic)", "Meningococcemia"],

    managementRationale: [
      { 
        drug: "Ascorbic Acid", 
        class: "Vitamin C", 
        dose: "100-300 mg", 
        freq: "Daily x 1 month", 
        indication: "Treatment", 
        rationale: "Rapidly corrects deficiency. Spontaneous bleeding stops within 24h." 
      }
    ],

    lifestyle: ["Smoking cessation (Smokers require higher Vit C).", "Avoid overcooking vegetables (heat destroys Vit C)."],
    
    diet: {
      eat: ["Amla (Indian Gooseberry - Highest source)", "Guava", "Citrus fruits", "Sprouted pulses"],
      avoid: ["Processed foods", "Boiling vegetables too long"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "10.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "30%" },
      progression: [{ day: 1, hb: "10.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "30%" }]
    },
    specialTests: [
      { name: "Vit C Level", result: "0.1 mg/dL", notes: "Severe Deficiency" },
      { name: "Bleeding Time", result: "Prolonged", notes: "Vessel fragility" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Vitamin C 500mg OD", "Dietary changes"] }
    ]
  },

  "Pellagra (Vitamin B3 Deficiency)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Deficiency of Niacin (Vitamin B3) or its precursor Tryptophan. Impairs NAD/NADP synthesis, affecting high-energy tissues (Skin, Gut, Brain).",
    
    clinicalFeatures: {
      symptoms: ["The 4 D's: Dermatitis, Diarrhea, Dementia, Death (if untreated)", "Insomnia", "Glossitis"],
      signs: ["Casal's Necklace (Photosensitive rash around neck)", "Gauntlet Dermatitis (Hands)", "Beefy red tongue"]
    },

    diagnosticWorkup: [
      { test: "Clinical Diagnosis", finding: "Symmetric photosensitive rash + Dementia", significance: "Gold Standard" },
      { test: "Urine N-methylnicotinamide", finding: "Low levels", significance: "Biochemical confirmation" },
      { test: "Serotonin Levels", finding: "Low", significance: "Tryptophan shunted away" }
    ],

    clinicalPearls: [
      { pearl: "Casal's Necklace.", explanation: "Characteristic hyperpigmented rash on the dermatome of C3/C4 (neck) due to sun exposure." },
      { pearl: "Maize Eaters.", explanation: "Common in populations relying on corn/maize (Jowar) as staple, as niacin in corn is bound (niacytin) and unavailable unless treated with lime." }
    ],
    
    redFlags: ["Encephalopathy", "Severe blistering rash", "Intractable Diarrhea"],
    differentials: ["Sunburn", "Lupus (SLE)", "Hartnup Disease", "Carcinoid Syndrome"],

    managementRationale: [
      { 
        drug: "Nicotinamide", 
        class: "Vitamin B3", 
        dose: "100-300 mg", 
        freq: "Divided Doses", 
        indication: "Active Pellagra", 
        rationale: "Preferred over Nicotinic Acid (Niacin) to avoid flushing side effects." 
      },
      { 
        drug: "B-Complex", 
        class: "Multivitamin", 
        dose: "1 tab", 
        freq: "OD", 
        indication: "Co-deficiencies", 
        rationale: "Deficiencies rarely occur in isolation; B2 and B6 are needed for Niacin metabolism." 
      }
    ],

    lifestyle: ["Sun protection during recovery.", "Avoid alcohol (inhibits absorption)."],
    
    diet: {
      eat: ["Groundnuts (Peanuts) - rich source", "Milk/Eggs (Tryptophan source)", "Chicken"],
      avoid: ["Maize/Sorghum as sole staple (unless nixtamalized)", "Alcohol"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Urinary NMN", result: "Low", notes: "Diagnostic" },
      { name: "Mental Status", result: "Confused", notes: "Dementia aspect" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Nicotinamide 100mg TID", "B-Complex"] }
    ]
  },

  "Thiamine Deficiency (Beriberi/Wernicke's)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Vitamin B1 deficiency impairs Pyruvate Dehydrogenase (Aerobic metabolism). Affects high-energy organs: Heart ('Wet' - High output failure) and Nerves ('Dry' - Neuropathy).",
    
    clinicalFeatures: {
      symptoms: ["Wet: Dyspnea, Edema, Palpitations", "Dry: Numbness, Foot drop, Difficulty walking", "Wernicke's: Confusion"],
      signs: ["Wet: Dilated Cardiomyopathy, S3", "Dry: Muscle wasting, Areflexia", "Wernicke's: Ataxia, Ophthalmoplegia"]
    },

    diagnosticWorkup: [
      { test: "Erythrocyte Transketolase Activity", finding: "Reduced (>15% increase with Thiamine)", significance: "Functional assay" },
      { test: "Serum Thiamine", finding: "Low", significance: "Direct measure" },
      { test: "Echocardiography", finding: "Dilated LV + High Output", significance: "Wet Beriberi" }
    ],

    clinicalPearls: [
      { pearl: "Give Thiamine BEFORE Glucose.", explanation: "Glucose load increases thiamine demand. In depleted patients, giving glucose first precipitates Wernicke's Encephalopathy." },
      { pearl: "Polished Rice.", explanation: "Common in populations consuming exclusively polished white rice where the B1-rich husk is removed." }
    ],
    
    redFlags: ["Shoshin Beriberi (Fulminant cardiovascular collapse)", "Wernicke's Encephalopathy (Coma risk)", "Lactic Acidosis"],
    differentials: ["Alcoholic Cardiomyopathy", "Diabetic Neuropathy", "Guillain-Barre Syndrome", "CHF"],

    managementRationale: [
      { 
        drug: "Thiamine (Vit B1)", 
        class: "Vitamin", 
        dose: "100 mg (Wernicke's: 500mg)", 
        freq: "IV/IM -> PO", 
        indication: "Deficiency", 
        rationale: "Parenteral route mandatory for cardiac/neuro symptoms due to poor gut absorption in deficiency." 
      },
      { 
        drug: "Furosemide", 
        class: "Diuretic", 
        dose: "20 mg", 
        freq: "IV", 
        indication: "Wet Beriberi", 
        rationale: "Cautious use for heart failure; Thiamine is the actual cure for the pump failure." 
      }
    ],

    lifestyle: ["Alcohol cessation (Major cause).", "Parboiled rice consumption."],
    
    diet: {
      eat: ["Unpolished/Brown Rice", "Whole wheat", "Pulses/Dal", "Nuts"],
      avoid: ["Alcohol", "Raw fish/fermented tea (contain Thiaminases)", "Refined sugars"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "Echo", result: "High Output Failure", notes: "Wet Beriberi" },
      { name: "Transketolase", result: "Low", notes: "Thiamine Def" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Thiamine 100mg IV TID", "Dietary Correction"] }
    ]
  },

  "Vitamin A Deficiency (Xerophthalmia)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Deficiency of Retinol impairs rhodopsin synthesis (Night Blindness) and causes squamous metaplasia of epithelia (Dry eye/skin), leading to corneal ulceration and blindness.",
    
    clinicalFeatures: {
      symptoms: ["Night Blindness (Nyctalopia - earliest symptom)", "Dry eyes", "Poor growth"],
      signs: ["Bitot's Spots (Foamy white spots on conjunctiva)", "Corneal Xerosis (Hazy/Dry)", "Keratomalacia (Melting cornea)", "Follicular Hyperkeratosis (Toad skin)"]
    },

    diagnosticWorkup: [
      { test: "Serum Retinol", finding: "< 20 mcg/dL", significance: "Confirmation" },
      { test: "Dark Adaptation Test", finding: "Prolonged", significance: "Functional test for night blindness" },
      { test: "Impression Cytology", finding: "Loss of goblet cells", significance: "Conjunctival metaplasia" }
    ],

    clinicalPearls: [
      { pearl: "Bitot's Spots.", explanation: "Triangular, foamy, keratinized lesions on the temporal conjunctiva; specific for Vitamin A deficiency." },
      { pearl: "Measles Mortality.", explanation: "Vit A deficiency increases Measles severity; WHO recommends high dose Vit A for all children with Measles." }
    ],
    
    redFlags: ["Corneal Ulceration", "Keratomalacia (Permanent Blindness)", "Measles Co-infection"],
    differentials: ["Retinitis Pigmentosa (Night blindness)", "Dry Eye Syndrome", "Trachoma"],

    managementRationale: [
      { 
        drug: "Vitamin A (Retinol)", 
        class: "Vitamin", 
        dose: "100,000 - 200,000 IU", 
        freq: "Day 0, 1, and 14", 
        indication: "Active Xerophthalmia", 
        rationale: "WHO Schedule: Massive doses required to replenish liver stores rapidly." 
      },
      { 
        drug: "Artificial Tears", 
        class: "Lubricant", 
        dose: "q2h", 
        freq: "PRN", 
        indication: "Xerosis", 
        rationale: "Symptomatic relief for dry eyes." 
      },
      { 
        drug: "Antibiotic Eye Ointment", 
        class: "Antimicrobial", 
        dose: "Topical", 
        freq: "BD", 
        indication: "Corneal Ulcer", 
        rationale: "Prevents secondary bacterial infection in compromised cornea." 
      }
    ],

    lifestyle: ["National Prophylaxis Program (India: 9 doses from 9 months to 5 years).", "Cooking with oil (Fat soluble)."],
    
    diet: {
      eat: ["Carrots/Papaya (Beta-carotene)", "Drumstick leaves (Moringa)", "Liver/Egg yolk (Retinol)", "Mango"],
      avoid: ["Low fat diet (impedes absorption)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "33,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Serum Retinol", result: "10 mcg/dL", notes: "Deficient" },
      { name: "Eye Exam", result: "Bitot's Spots", notes: "Stage X1B" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Vitamin A 200,000 IU", "Eye Lubricants"] }
    ]
  },

  "Vitamin K Deficiency": {
    category: "Hematology / Nutritional",
    pathophysiology: "Lack of Vitamin K prevents Gamma-Carboxylation of Factors II, VII, IX, X, Protein C, and S. Causes inability to bind calcium and form clots.",
    
    clinicalFeatures: {
      symptoms: ["Easy bruising", "Nose bleeds", "Melena/Hematemesis"],
      signs: ["Ecchymoses", "Hemarthrosis (rare)", "Hemorrhagic Disease of Newborn (Bleeding from umbilical stump)"]
    },

    diagnosticWorkup: [
      { test: "Prothrombin Time (PT/INR)", finding: "Prolonged", significance: "Factor VII has shortest half-life; first to rise" },
      { test: "APTT", finding: "Prolonged (Mild)", significance: "Affects IX and X (Common pathway)" },
      { test: "Mixing Study", finding: "Corrects", significance: "Indicates factor deficiency, not inhibitor" }
    ],

    clinicalPearls: [
      { pearl: "Antibiotic Induced.", explanation: "Gut flora produces Vit K2. Long term broad-spectrum antibiotics (e.g., Cephalosporins) wipe out flora, causing deficiency." },
      { pearl: "Warfarin Reversal.", explanation: "Warfarin works by inducing functional Vit K deficiency. Reversal is achieved by giving Vit K1." }
    ],
    
    redFlags: ["Intracranial Hemorrhage (Newborns)", "GI Bleeding", "INR > 9 (Spontaneous bleed risk)"],
    differentials: ["Liver Failure (Factors not produced)", "DIC (Factors consumed)", "Hemophilia", "Rat Poison (Superwarfarin)"],

    managementRationale: [
      { 
        drug: "Phytomenadione (Vit K1)", 
        class: "Vitamin", 
        dose: "1-10 mg", 
        freq: "PO/SC/IV", 
        indication: "High INR / Bleeding", 
        rationale: "IV acts fastest (6-8h). Oral takes 24h. Anaphylaxis risk with rapid IV push." 
      },
      { 
        drug: "Fresh Frozen Plasma (FFP)", 
        class: "Blood Product", 
        dose: "15 ml/kg", 
        freq: "Stat", 
        indication: "Active Life-Threatening Bleed", 
        rationale: "Immediate replacement of factors (Vit K takes time to work)." 
      }
    ],

    lifestyle: ["Newborn Prophylaxis (1mg IM at birth).", "Monitor INR if on Warfarin."],
    
    diet: {
      eat: ["Green Leafy Vegetables (Spinach, Methi, Sarson)", "Broccoli", "Soybean oil"],
      avoid: ["Inconsistent intake if on Warfarin (Keep K intake stable)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "12.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "36%" },
      progression: [{ day: 1, hb: "12.0 g/dL", wbc: "7,000 /cmm", plt: "250,000 /cmm", hct: "36%" }]
    },
    specialTests: [
      { name: "INR", result: "6.5", notes: "Critical High" },
      { name: "Liver Function", result: "Normal", notes: "Excludes hepatic failure" }
    ],
    treatment: [
      { day: 1, meds: ["Inj. Vitamin K1 10mg IV", "Stop Warfarin"] }
    ]
  },

  "Vitamin E Deficiency": {
    category: "Neurology / Nutritional",
    pathophysiology: "Deficiency of Alpha-Tocopherol (Antioxidant) leads to oxidative damage of axons (posterior column/spinocerebellar) and red blood cell membranes.",
    
    clinicalFeatures: {
      symptoms: ["Unsteadiness (Ataxia)", "Muscle weakness", "Vision changes"],
      signs: ["Areflexia (Absent reflexes)", "Loss of vibration/proprioception", "Ophthalmoplegia", "Hemolytic Anemia (preemies)"]
    },

    diagnosticWorkup: [
      { test: "Serum Alpha-Tocopherol", finding: "Low (<5 mcg/mL)", significance: "Diagnostic" },
      { test: "Peripheral Smear", finding: "Acanthocytes", significance: "RBC membrane damage" },
      { test: "Lipid Profile", finding: "Very Low (Abetalipoproteinemia)", significance: "Cause of malabsorption" }
    ],

    clinicalPearls: [
      { pearl: "Friedreich's Ataxia Mimic.", explanation: "Vitamin E deficiency presents with nearly identical neurological signs (Ataxia + Areflexia + Proprioception loss)." },
      { pearl: "Fat Malabsorption.", explanation: "Almost never dietary. Usually due to Cystic Fibrosis, Cholestasis, or Abetalipoproteinemia." }
    ],
    
    redFlags: ["Retinitis Pigmentosa", "Progressive Ataxia", "Cardiomyopathy"],
    differentials: ["Friedreich's Ataxia", "Vitamin B12 Deficiency (CD + Periph neuropathy)", "Tabes Dorsalis"],

    managementRationale: [
      { 
        drug: "Alpha-Tocopherol", 
        class: "Vitamin E", 
        dose: "800-1200 IU", 
        freq: "Daily", 
        indication: "Neurological Symptoms", 
        rationale: "High doses required to penetrate CNS and arrest progression." 
      },
      { 
        drug: "Water-soluble Vitamin E", 
        class: "Formulation", 
        dose: "Standard", 
        freq: "Daily", 
        indication: "Cholestasis / Fat Malabsorption", 
        rationale: "TPGS form enables absorption without bile salts." 
      }
    ],

    lifestyle: ["Gait training.", "Fall prevention."],
    
    diet: {
      eat: ["Almonds/Walnuts", "Sunflower Seeds", "Wheat Germ Oil", "Vegetable oils"],
      avoid: ["Low fat diet (worsens absorption)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "200,000 /cmm", hct: "33%" },
      progression: [{ day: 1, hb: "11.0 g/dL", wbc: "6,000 /cmm", plt: "200,000 /cmm", hct: "33%" }]
    },
    specialTests: [
      { name: "Vit E Level", result: "2 mcg/mL", notes: "Deficient" },
      { name: "Reflexes", result: "Absent", notes: "Neuropathy" }
    ],
    treatment: [
      { day: 1, meds: ["Cap. Vitamin E 400 IU TID"] }
    ]
  },

  "Riboflavin Deficiency (Ariboflavinosis)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Deficiency of Vitamin B2 (Precursor for FAD/FMN coenzymes). Impairs redox reactions, affecting mucocutaneous tissue and cornea.",
    
    clinicalFeatures: {
      symptoms: ["Sore throat", "Cracks at mouth corners", "Eye irritation"],
      signs: ["Cheilitis/Angular Stomatitis", "Magenta Tongue (Glossitis)", "Corneal Neovascularization", "Seborrheic Dermatitis"]
    },

    diagnosticWorkup: [
      { test: "Erythrocyte Glutathione Reductase", finding: "Activity coefficient > 1.4", significance: "Functional assay" },
      { test: "Clinical Exam", finding: "Angular Stomatitis + Magenta Tongue", significance: "Classic presentation" },
      { test: "Slit Lamp Exam", finding: "Corneal vascularization", significance: "Ocular sign" }
    ],

    clinicalPearls: [
      { pearl: "Magenta Tongue.", explanation: "Distinct from the 'Beefy Red' tongue of B12/Niacin deficiency; B2 deficiency causes a purplish-red hue." },
      { pearl: "Scrotal Dermatitis.", explanation: "Often overlooked sign; 'Oro-Oculo-Genital' syndrome." }
    ],
    
    redFlags: ["Cataracts", "Severe Photophobia", "Anemia (Normocytic - B2 aids iron absorption)"],
    differentials: ["Candidiasis (Angular cheilitis)", "Iron Deficiency", "Syphilis", "Other B-vitamin deficiencies"],

    managementRationale: [
      { 
        drug: "Riboflavin", 
        class: "Vitamin B2", 
        dose: "10-20 mg", 
        freq: "Daily", 
        indication: "Deficiency", 
        rationale: "Rapidly resolves mucocutaneous lesions." 
      },
      { 
        drug: "B-Complex", 
        class: "Multivitamin", 
        dose: "1 tab", 
        freq: "OD", 
        indication: "Co-deficiency", 
        rationale: "Always treat with other B vitamins." 
      }
    ],

    lifestyle: ["Avoid sun exposure to medications (Riboflavin is photosensitive)."],
    
    diet: {
      eat: ["Milk/Dairy (Best source)", "Eggs", "Green leafy vegetables", "Liver"],
      avoid: ["Alcohol (Interferes with absorption)", "Glass bottles for milk (Light destroys B2)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" },
      progression: [{ day: 1, hb: "11.5 g/dL", wbc: "6,000 /cmm", plt: "250,000 /cmm", hct: "35%" }]
    },
    specialTests: [
      { name: "Clinical", result: "Angular Cheilitis", notes: "Bilateral" },
      { name: "Glutathione Reductase", result: "Low Activity", notes: "B2 dependent" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Riboflavin 10mg BD", "Dietary Milk"] }
    ]
  },

  "Pyridoxine Deficiency (Vitamin B6)": {
    category: "Nutritional / Vitamin",
    pathophysiology: "Deficiency of Pyridoxal Phosphate (PLP), a cofactor for >100 enzymes (Transaminases, Neurotransmitter synthesis, Heme synthesis). Causes neuropathy and anemia.",
    
    clinicalFeatures: {
      symptoms: ["Numbness/Tingling", "Depression/Confusion", "Sore tongue"],
      signs: ["Peripheral Neuropathy", "Sideroblastic Anemia", "Glossitis", "Seizures (in infants)"]
    },

    diagnosticWorkup: [
      { test: "Plasma PLP", finding: "Low", significance: "Direct measure" },
      { test: "Peripheral Smear", finding: "Dimorphic anemia + Pappenheimer bodies", significance: "Sideroblastic picture" },
      { test: "Homocysteine", finding: "Elevated", significance: "Metabolic block" }
    ],

    clinicalPearls: [
      { pearl: "Isoniazid (INH).", explanation: "INH binds B6; Peripheral neuropathy is a classic side effect. ALWAYS co-prescribe B6 (10-25mg) with INH therapy." },
      { pearl: "Sideroblastic Anemia.", explanation: "B6 is needed for ALA-Synthase (Heme synthesis). Deficiency leads to iron accumulation in mitochondria (Ring Sideroblasts)." }
    ],
    
    redFlags: ["Intractable Seizures (infants)", "Severe Neuropathy", "Microcytic Anemia refractory to Iron"],
    differentials: ["Iron Deficiency Anemia", "Lead Poisoning", "Diabetic Neuropathy"],

    managementRationale: [
      { 
        drug: "Pyridoxine", 
        class: "Vitamin B6", 
        dose: "50-100 mg", 
        freq: "OD", 
        indication: "Deficiency / INH Toxicity", 
        rationale: "Corrects metabolic defects. High doses (gram quantities) needed for acute INH overdose seizures." 
      },
      { 
        drug: "B-Complex", 
        class: "Multivitamin", 
        dose: "Standard", 
        freq: "OD", 
        indication: "General Health", 
        rationale: "Maintains balance of other B vitamins." 
      }
    ],

    lifestyle: ["Monitor if on Isoniazid, Penicillamine, or Levodopa.", "Avoid mega-doses (>500mg) as B6 itself causes neuropathy."],
    
    diet: {
      eat: ["Chickpeas (Chana)", "Bananas", "Potatoes", "Chicken"],
      avoid: ["Alcohol", "Overcooking (Heat sensitive)"]
    },

    // Legacy Data
    hematology: {
      baseline: { hb: "9.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "28%" },
      progression: [{ day: 1, hb: "9.0 g/dL", wbc: "5,000 /cmm", plt: "200,000 /cmm", hct: "28%" }]
    },
    specialTests: [
      { name: "Bone Marrow", result: "Ring Sideroblasts", notes: "Iron stain positive" },
      { name: "Homocysteine", result: "High", notes: "B6 dependent" }
    ],
    treatment: [
      { day: 1, meds: ["Tab. Pyridoxine 100mg OD", "Review INH dose"] }
    ]
  }
};