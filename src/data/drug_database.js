export const drugDatabase = [
  // --- Batch 1 A (1-50) ---
  {
    "id": 1,
    "drug_name": "Abacavir",
    "pharmacologic_class": [
      "Nucleoside Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Intracellularly converted to carbovir triphosphate; inhibits HIV-1 reverse transcriptase by competing with dGTP and causing DNA chain termination."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Malaise",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reaction (HLA-B*5701 associated; fever, rash, respiratory symptoms)",
      "Lactic Acidosis",
      "Severe Hepatomegaly with Steatosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 2,
    "drug_name": "Abiraterone Acetate",
    "pharmacologic_class": [
      "CYP17 Inhibitor",
      "Antiandrogen"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Castration-Resistant Prostate Cancer (mCRPC)",
        "mechanism_of_action": "Irreversibly inhibits CYP17 enzyme in adrenal, testicular, and tumor tissues; blocks androgen biosynthesis."
      },
      {
        "indication": "Metastatic High-Risk Castration-Sensitive Prostate Cancer (mCSPC)",
        "mechanism_of_action": "Inhibits androgen production in adrenal glands and tumor tissues, suppressing tumor growth."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Arthralgia",
      "Edema",
      "Hot flushes"
    ],
    "adverse_drug_events": [
      "Mineralocorticoid Excess (Hypertension, Hypokalemia, Fluid Retention)",
      "Adrenocortical Insufficiency",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 3,
    "drug_name": "Acarbose",
    "pharmacologic_class": [
      "Alpha-Glucosidase Inhibitor",
      "Antidiabetic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Competitively inhibits pancreatic alpha-amylase and intestinal alpha-glucosidase; delays hydrolysis of complex carbohydrates; reduces postprandial hyperglycemia."
      }
    ],
    "common_side_effects": [
      "Flatulence",
      "Diarrhea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Elevated Serum Transaminases (reversible)",
      "Pneumatosis Cystoides Intestinalis",
      "Ileus"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 4,
    "drug_name": "Acebutolol",
    "pharmacologic_class": [
      "Beta-1 Selective Adrenergic Antagonist",
      "Class II Antiarrhythmic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Blocks beta-1 receptors; decreases heart rate and cardiac output. Possesses Intrinsic Sympathomimetic Activity (ISA)."
      },
      {
        "indication": "Ventricular Arrhythmias",
        "mechanism_of_action": "Reduces sympathetic stimulation; slows AV node conduction; stabilizes cardiac membrane."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Dizziness",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Bradycardia/Heart Block",
      "Bronchospasm",
      "Lupus-like Syndrome (ANA positive)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 5,
    "drug_name": "Acetaminophen (Paracetamol)",
    "pharmacologic_class": [
      "Non-Opioid Analgesic",
      "Antipyretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Analgesia / Antipyresis",
        "mechanism_of_action": "Inhibits CNS prostaglandin synthesis (COX inhibition); elevates pain threshold; acts on hypothalamic heat-regulating center."
      }
    ],
    "common_side_effects": [
      "Nausea (rare)",
      "Headache (rare)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Acute liver failure with overdose due to NAPQI metabolite)",
      "Severe Skin Reactions (SJS/TEN/AGEP)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 6,
    "drug_name": "Acetazolamide",
    "pharmacologic_class": [
      "Carbonic Anhydrase Inhibitor",
      "Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma",
        "mechanism_of_action": "Inhibits carbonic anhydrase in ciliary body; reduces aqueous humor secretion; lowers intraocular pressure."
      },
      {
        "indication": "Acute Mountain Sickness",
        "mechanism_of_action": "Increases renal excretion of bicarbonate; causes metabolic acidosis; stimulates respiratory drive."
      }
    ],
    "common_side_effects": [
      "Paresthesia (tingling in extremities)",
      "Taste alteration (metallic taste)",
      "Polyuria"
    ],
    "adverse_drug_events": [
      "Metabolic Acidosis",
      "Hypokalemia",
      "Stevens-Johnson Syndrome (Sulfonamide derivative)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 7,
    "drug_name": "Acetylcysteine",
    "pharmacologic_class": [
      "Mucolytic",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Acetaminophen Overdose",
        "mechanism_of_action": "Restores hepatic glutathione; inactivates toxic metabolite NAPQI."
      },
      {
        "indication": "Pulmonary Disorders (Mucolytic)",
        "mechanism_of_action": "Splits disulfide linkages in mucoproteins; reduces viscosity of pulmonary secretions."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (Oral)",
      "Bronchospasm (Inhaled)",
      "Rotten egg odor"
    ],
    "adverse_drug_events": [
      "Anaphylactoid Reactions (IV)",
      "Severe Bronchospasm (Asthmatics)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 8,
    "drug_name": "Acitretin",
    "pharmacologic_class": [
      "Retinoid",
      "Systemic Psoriasis Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Psoriasis",
        "mechanism_of_action": "Activates nuclear receptors (RAR/RXR); regulates gene transcription controlling keratinocyte differentiation and proliferation."
      }
    ],
    "common_side_effects": [
      "Cheilitis (dry lips)",
      "Alopecia",
      "Skin peeling",
      "Dry eyes"
    ],
    "adverse_drug_events": [
      "Teratogenicity (Do Your Part Program - strict pregnancy prevention)",
      "Hepatotoxicity",
      "Hypertriglyceridemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 9,
    "drug_name": "Aclidinium",
    "pharmacologic_class": [
      "Long-Acting Muscarinic Antagonist (LAMA)",
      "Anticholinergic"
    ],
    "indications_and_moa": [
      {
        "indication": "COPD Maintenance",
        "mechanism_of_action": "Competitively inhibits M3 muscarinic receptors in bronchial smooth muscle; causes bronchodilation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nasopharyngitis",
      "Cough"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Worsening of Narrow-Angle Glaucoma",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 10,
    "drug_name": "Actinomycin-D (Dactinomycin)",
    "pharmacologic_class": [
      "Antineoplastic Antibiotic",
      "RNA Synthesis Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Wilms Tumor / Rhabdomyosarcoma / Ewing Sarcoma",
        "mechanism_of_action": "Intercalates between DNA base pairs; inhibits DNA-dependent RNA polymerase; prevents mRNA transcription."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (highly emetogenic)",
      "Alopecia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Myelosuppression)",
      "Veno-occlusive Disease (VOD) / Hepatotoxicity",
      "Extravasation Necrosis (Vesicant)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 11,
    "drug_name": "Acyclovir",
    "pharmacologic_class": [
      "Synthetic Nucleoside Analogue",
      "Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "Herpes Simplex / Varicella Zoster",
        "mechanism_of_action": "Phosphorylated by viral thymidine kinase; inhibits viral DNA polymerase; terminates viral DNA chain."
      }
    ],
    "common_side_effects": [
      "Malaise",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Acute Renal Failure (Crystal nephropathy - hydration essential)",
      "Neurotoxicity (Confusion, Hallucinations)",
      "Thrombotic Thrombocytopenic Purpura (TTP)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 12,
    "drug_name": "Adalimumab",
    "pharmacologic_class": [
      "TNF-alpha Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Crohn's / Psoriasis",
        "mechanism_of_action": "Binds specifically to TNF-alpha; blocks interaction with p55 and p75 cell surface TNF receptors; neutralizes cytokine-driven inflammation."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Upper respiratory infection",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB, Fungal, Opportunistic)",
      "Malignancy (Lymphoma/HSTCL)",
      "Demyelinating Disease",
      "New onset/worsening Heart Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 13,
    "drug_name": "Adapalene",
    "pharmacologic_class": [
      "Retinoid-like Compound",
      "Topical Acne Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne Vulgaris",
        "mechanism_of_action": "Binds to specific retinoic acid nuclear receptors; modulates cellular differentiation and keratinization; possesses anti-inflammatory properties."
      }
    ],
    "common_side_effects": [
      "Dry skin",
      "Erythema",
      "Scaling",
      "Burning sensation"
    ],
    "adverse_drug_events": [
      "Photosensitivity",
      "Severe Allergic Contact Dermatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 14,
    "drug_name": "Adefovir",
    "pharmacologic_class": [
      "Nucleotide Analog Reverse Transcriptase Inhibitor",
      "Antiviral (Hep B)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis B",
        "mechanism_of_action": "Inhibits HBV DNA polymerase (reverse transcriptase) by competing with natural substrate dATP; causes DNA chain termination."
      }
    ],
    "common_side_effects": [
      "Asthenia",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Renal tubular dysfunction)",
      "Lactic Acidosis / Severe Hepatomegaly with Steatosis",
      "Severe Acute Exacerbation of Hepatitis upon discontinuation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 15,
    "drug_name": "Adenosine",
    "pharmacologic_class": [
      "Antiarrhythmic Agent",
      "Nucleoside"
    ],
    "indications_and_moa": [
      {
        "indication": "Paroxysmal Supraventricular Tachycardia (PSVT)",
        "mechanism_of_action": "Slows conduction time through the AV node; interrupts AV nodal re-entry pathways; restores normal sinus rhythm."
      },
      {
        "indication": "Pharmacologic Stress Testing",
        "mechanism_of_action": "Causes potent coronary vasodilation via A2a receptors; creates flow disparity between normal and stenotic arteries."
      }
    ],
    "common_side_effects": [
      "Flushing",
      "Chest discomfort/pressure",
      "Dyspnea",
      "Lightheadedness"
    ],
    "adverse_drug_events": [
      "Prolonged Asystole / Cardiac Arrest",
      "Heart Block (Transient)",
      "Bronchoconstriction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 16,
    "drug_name": "Afatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (TKI)",
      "EGFR Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Non-Small Cell Lung Cancer (NSCLC) with EGFR mutations",
        "mechanism_of_action": "Covalently binds to and irreversibly inhibits EGFR (ErbB1), HER2 (ErbB2), and HER4 (ErbB4); blocks downstream signaling pathways inhibiting cell proliferation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Rash/Acneiform Dermatitis",
      "Stomatitis",
      "Paronychia"
    ],
    "adverse_drug_events": [
      "Interstitial Lung Disease (ILD)",
      "Severe Hepatotoxicity",
      "Gastrointestinal Perforation",
      "Bullous and Exfoliative Skin Disorders"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 17,
    "drug_name": "Aflibercept",
    "pharmacologic_class": [
      "VEGF Inhibitor",
      "Recombinant Fusion Protein"
    ],
    "indications_and_moa": [
      {
        "indication": "Neovascular (Wet) AMD / Diabetic Macular Edema",
        "mechanism_of_action": "Acts as a soluble decoy receptor; binds VEGF-A, VEGF-B, and PlGF; prevents binding to endogenous receptors; suppresses neovascularization and vascular permeability."
      },
      {
        "indication": "Metastatic Colorectal Cancer (Zaltrap)",
        "mechanism_of_action": "Inhibits tumor angiogenesis."
      }
    ],
    "common_side_effects": [
      "Conjunctival hemorrhage (Intravitreal)",
      "Eye pain",
      "Increased intraocular pressure"
    ],
    "adverse_drug_events": [
      "Endophthalmitis / Retinal Detachment",
      "Arterial Thromboembolic Events (Stroke/MI)",
      "Gastrointestinal Perforation (Systemic use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 18,
    "drug_name": "Albendazole",
    "pharmacologic_class": [
      "Benzimidazole Anthelmintic"
    ],
    "indications_and_moa": [
      {
        "indication": "Neurocysticercosis / Hydatid Disease",
        "mechanism_of_action": "Binds to colchicine-sensitive site of tubulin; inhibits microtubule polymerization in parasites; impairs glucose uptake and depletes glycogen stores; leads to parasite death."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Abdominal pain",
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Aplastic Anemia, Agranulocytosis)",
      "Elevated Liver Enzymes (Hepatotoxicity)",
      "Rare retinal damage (in Neurocysticercosis with retinal lesions)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 19,
    "drug_name": "Albumin",
    "pharmacologic_class": [
      "Colloid",
      "Plasma Volume Expander"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypovolemia / Hypoalbuminemia",
        "mechanism_of_action": "Increases intravascular oncotic pressure; mobilizes fluids from interstitial space into intravascular space."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Fever/Chills"
    ],
    "adverse_drug_events": [
      "Circulatory Overload (Pulmonary Edema)",
      "Hypersensitivity / Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 20,
    "drug_name": "Thalidomide",
    "pharmacologic_class": [
      "Immunomodulator",
      "Antineoplastic",
      "Antileprosy"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma",
        "mechanism_of_action": "Immunomodulatory properties, including inhibition of angiogenesis (blood vessel growth) and direct cytotoxicity. Also suppresses pro-inflammatory cytokines like TNF-alpha."
      },
      {
        "indication": "Erythema Nodosum Leprosum (ENL)",
        "mechanism_of_action": "Suppresses excess TNF-alpha production, which is key to the inflammatory pathogenesis of ENL."
      }
    ],
    "common_side_effects": [
      "Somnolence (Drowsiness)",
      "Peripheral Neuropathy",
      "Constipation",
      "Rash"
    ],
    "adverse_drug_events": [
      "Teratogenicity (Severe Phocomelia - Boxed Warning - REMS Program)",
      "Venous Thromboembolism (DVT/PE - Boxed Warning)",
      "Severe Peripheral Neuropathy (Cumulative and potentially irreversible)",
      "Myelosuppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 21,
    "drug_name": "Alclometasone",
    "pharmacologic_class": [
      "Topical Corticosteroid (Low Potency)"
    ],
    "indications_and_moa": [
      {
        "indication": "Corticosteroid-responsive Dermatoses",
        "mechanism_of_action": "Anti-inflammatory, antipruritic, and vasoconstrictive properties; inhibits multiple inflammatory cytokines and mediators."
      }
    ],
    "common_side_effects": [
      "Local burning",
      "Itching",
      "Dryness"
    ],
    "adverse_drug_events": [
      "Skin Atrophy / Striae",
      "HPA Axis Suppression (with extensive use)",
      "Secondary Infection"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 22,
    "drug_name": "Alectinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (TKI)",
      "ALK Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "ALK-positive Metastatic NSCLC / Adjuvant treatment for ALK-positive NSCLC",
        "mechanism_of_action": "Selectively inhibits Anaplastic Lymphoma Kinase (ALK) and RET tyrosine kinase activity; blocks downstream signaling to inhibit tumor growth and survival."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Constipation",
      "Edema",
      "Myalgia"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "Interstitial Lung Disease (ILD) / Pneumonitis",
      "Severe Myalgia / CPK Elevation",
      "Bradycardia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 23,
    "drug_name": "Alendronate",
    "pharmacologic_class": [
      "Bisphosphonate",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis / Paget's Disease",
        "mechanism_of_action": "Localizes to bone resorption sites; inhibits osteoclast activity; induces osteoclast apoptosis; increases bone mineral density."
      }
    ],
    "common_side_effects": [
      "Abdominal pain",
      "Dyspepsia",
      "Acid regurgitation"
    ],
    "adverse_drug_events": [
      "Esophageal Erosions/Ulcers (Must remain upright for 30 mins)",
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 24,
    "drug_name": "Alfuzosin",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Antagonist",
      "BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Benign Prostatic Hyperplasia (BPH)",
        "mechanism_of_action": "Selectively blocks alpha-1 adrenergic receptors in the prostate, bladder neck, and prostatic urethra; relaxes smooth muscle; improves urine flow."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Upper respiratory infection",
      "Headache",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Orthostatic Hypotension / Syncope",
      "Intraoperative Floppy Iris Syndrome (during cataract surgery)",
      "Priapism (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 25,
    "drug_name": "Aliskiren",
    "pharmacologic_class": [
      "Direct Renin Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Directly inhibits renin at the point of activation; prevents conversion of angiotensinogen to angiotensin I; suppresses the entire RAAS system."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Cough (less than ACE inhibitors)",
      "Rash"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Impairment (Avoid with ACE/ARB in diabetics)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 26,
    "drug_name": "Allopurinol",
    "pharmacologic_class": [
      "Xanthine Oxidase Inhibitor",
      "Antigout Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Gout / Hyperuricemia",
        "mechanism_of_action": "Inhibits xanthine oxidase; blocks conversion of hypoxanthine to xanthine and xanthine to uric acid."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Nausea",
      "Acute Gout Flare"
    ],
    "adverse_drug_events": [
      "Allopurinol Hypersensitivity Syndrome (SJS/TEN/DRESS - HLA-B*5801 associated)",
      "Hepatotoxicity",
      "Bone Marrow Suppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 27,
    "drug_name": "Almotriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Receptor Agonist",
      "Antimigraine Agent (Triptan)"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine Treatment",
        "mechanism_of_action": "Stimulates 5-HT1B/1D receptors on intracranial blood vessels and sensory nerves; causes vasoconstriction and inhibits pro-inflammatory neuropeptide release."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dry mouth",
      "Paresthesia"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / Myocardial Ischemia",
      "Serotonin Syndrome",
      "Cerebrovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 28,
    "drug_name": "Alogliptin",
    "pharmacologic_class": [
      "DPP-4 Inhibitor",
      "Antidiabetic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Inhibits Dipeptidyl Peptidase-4 (DPP-4); slows inactivation of incretin hormones (GLP-1 and GIP); increases insulin release and decreases glucagon secretion."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Acute Pancreatitis",
      "Heart Failure (Risk warning)",
      "Severe Arthralgia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 29,
    "drug_name": "Alosetron",
    "pharmacologic_class": [
      "Selective 5-HT3 Receptor Antagonist",
      "IBS Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe IBS with Diarrhea (Women)",
        "mechanism_of_action": "Potent and selective antagonist of 5-HT3 receptors; reduces visceral pain sensation, prolongs colonic transit time, and increases fluid absorption."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Ischemic Colitis (Serious/Fatal)",
      "Serious Complications of Constipation (Obstruction/Perforation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 30,
    "drug_name": "Alpha-Tocopherol (Vitamin E)",
    "pharmacologic_class": [
      "Fat-Soluble Vitamin",
      "Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin E Deficiency",
        "mechanism_of_action": "Acts as an antioxidant; protects cell membranes (polyunsaturated fatty acids) from oxidation by free radicals; stabilizes cell membranes."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea (High doses)",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Increased Bleeding Risk (High doses interfere with Vitamin K)",
      "Necrotizing Enterocolitis (in premature infants)",
      "Hemorrhagic Stroke (Risk with high dose supplement)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 31,
    "drug_name": "Alprazolam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Panic Disorder",
        "mechanism_of_action": "Enhances GABA effects at GABA-A receptors; increases chloride channel opening frequency; produces CNS depression."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Memory impairment"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Dependence/Withdrawal Seizures",
      "Paradoxical Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 32,
    "drug_name": "Alprostadil",
    "pharmacologic_class": [
      "Prostaglandin E1 (PGE1) Analog",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Erectile Dysfunction",
        "mechanism_of_action": "Relaxes trabecular smooth muscle and dilates cavernosal arteries via increased cAMP; allows blood entrapment in lacunar spaces."
      },
      {
        "indication": "Patent Ductus Arteriosus (PDA) maintenance",
        "mechanism_of_action": "Relaxes smooth muscle of the ductus arteriosus to maintain patency in neonates with congenital heart defects."
      }
    ],
    "common_side_effects": [
      "Penile pain",
      "Urethral burning",
      "Flushing (IV)"
    ],
    "adverse_drug_events": [
      "Priapism / Prolonged Erection",
      "Penile Fibrosis",
      "Apnea (in neonates)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 33,
    "drug_name": "Alteplase (tPA)",
    "pharmacologic_class": [
      "Thrombolytic Agent",
      "Tissue Plasminogen Activator"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Ischemic Stroke / STEMI / PE",
        "mechanism_of_action": "Binds to fibrin in a thrombus and converts entrapped plasminogen to plasmin; plasmin degrades fibrin matrix; dissolves clot."
      }
    ],
    "common_side_effects": [
      "Bleeding (minor)",
      "Nausea",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (Intracranial, GI, Retroperitoneal)",
      "Orolingual Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 34,
    "drug_name": "Amantadine",
    "pharmacologic_class": [
      "Dopamine Promoter / NMDA Antagonist",
      "Antiviral (Influenza A - historically)"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Drug-Induced EPS",
        "mechanism_of_action": "Weak NMDA receptor antagonist; promotes dopamine release and blocks reuptake; anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Insomnia",
      "Nausea",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Livedo Reticularis",
      "Psychosis / Hallucinations",
      "Suicidality"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 35,
    "drug_name": "Ambrisentan",
    "pharmacologic_class": [
      "Endothelin Receptor Antagonist (ERA)",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension (PAH)",
        "mechanism_of_action": "Selective antagonist of Endothelin type A (ET-A) receptors; prevents vasoconstriction and cell proliferation mediated by endothelin-1."
      }
    ],
    "common_side_effects": [
      "Peripheral Edema",
      "Nasal Congestion",
      "Flushing",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Teratogenicity (REMS Program)",
      "Fluid Retention / Heart Failure",
      "Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 36,
    "drug_name": "Amifampridine",
    "pharmacologic_class": [
      "Potassium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Lambert-Eaton Myasthenic Syndrome (LEMS)",
        "mechanism_of_action": "Blocks voltage-dependent potassium channels; prolongs presynaptic cell membrane depolarization; enhances calcium influx; increases acetylcholine release."
      }
    ],
    "common_side_effects": [
      "Paresthesia",
      "Upper respiratory infection",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Seizures (Dose-dependent)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 37,
    "drug_name": "Amikacin",
    "pharmacologic_class": [
      "Aminoglycoside Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Gram-negative Infections",
        "mechanism_of_action": "Binds irreversibly to 30S ribosomal subunit; interferes with initiation complex and causes mRNA misreading; inhibits protein synthesis (bactericidal)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Rash"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Acute Tubular Necrosis)",
      "Ototoxicity (Auditory and Vestibular - permanent)",
      "Neuromuscular Blockade"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 38,
    "drug_name": "Amiloride",
    "pharmacologic_class": [
      "Potassium-Sparing Diuretic",
      "ENaC Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure (Adjunct)",
        "mechanism_of_action": "Blocks Epithelial Sodium Channels (ENaC) in distal tubule and collecting duct; inhibits sodium reabsorption and potassium excretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hyperkalemia (Fatal arrhythmias)",
      "Hyponatremia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 39,
    "drug_name": "Aminophylline",
    "pharmacologic_class": [
      "Methylxanthine",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / COPD (Acute exacerbation)",
        "mechanism_of_action": "Complex of theophylline and ethylenediamine; inhibits phosphodiesterase (PDE); increases cAMP; causes bronchodilation and diaphragm stimulation."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Tremor",
      "Headache",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Theophylline Toxicity (Seizures, Life-threatening Arrhythmias)",
      "Severe Hypotension (Rapid IV)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 40,
    "drug_name": "Amiodarone",
    "pharmacologic_class": [
      "Class III Antiarrhythmic",
      "Broad Spectrum Antiarrhythmic"
    ],
    "indications_and_moa": [
      {
        "indication": "Ventricular Arrhythmias / Atrial Fibrillation",
        "mechanism_of_action": "Blocks potassium channels (prolongs repolarization/QT); also blocks sodium, calcium, and beta-adrenergic channels."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Fatigue",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "Pulmonary Toxicity (Fibrosis)",
      "Thyroid Dysfunction",
      "Hepatotoxicity",
      "Blue-gray skin discoloration",
      "Corneal microdeposits"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 41,
    "drug_name": "Amisulpride",
    "pharmacologic_class": [
      "Atypical Antipsychotic",
      "Dopamine Antagonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Postoperative Nausea and Vomiting (PONV) (US Indication)",
        "mechanism_of_action": "Selective antagonist of dopamine D2 and D3 receptors; blocks dopaminergic signaling in the chemoreceptor trigger zone."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Abdominal distension",
      "Increased prolactin (less common in PONV dose)"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Extrapyramidal Symptoms (EPS)",
      "Neuroleptic Malignant Syndrome (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 42,
    "drug_name": "Amitriptyline",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (TCA)"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Inhibits reuptake of norepinephrine and serotonin; blocks histamine H1, alpha-adrenergic, and muscarinic receptors (causing side effects)."
      },
      {
        "indication": "Neuropathic Pain (Off-label)",
        "mechanism_of_action": "Modulates descending pain pathways."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Sedation",
      "Constipation",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Arrhythmias",
      "Suicidality",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 43,
    "drug_name": "Amlodipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle; causes peripheral and coronary vasodilation."
      }
    ],
    "common_side_effects": [
      "Peripheral Edema",
      "Dizziness",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Severe Hypotension",
      "Worsening Angina (Initial)",
      "Gingival Hyperplasia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 44,
    "drug_name": "Amoxapine",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (Secondary Amine)",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression",
        "mechanism_of_action": "Inhibits reuptake of norepinephrine and serotonin; active metabolite blocks dopamine receptors (antipsychotic-like properties)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia / EPS (due to dopamine blockade)",
      "Neuroleptic Malignant Syndrome",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 45,
    "drug_name": "Amoxicillin",
    "pharmacologic_class": [
      "Aminopenicillin",
      "Beta-lactam Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bacterial Infections",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Clostridioides difficile-associated diarrhea",
      "Severe Cutaneous Adverse Reactions (SCAR)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 46,
    "drug_name": "Amoxicillin-Clavulanate",
    "pharmacologic_class": [
      "Aminopenicillin + Beta-lactamase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Resistant Bacterial Infections",
        "mechanism_of_action": "Amoxicillin inhibits cell wall synthesis; Clavulanate irreversibly inhibits beta-lactamase enzymes, preventing amoxicillin degradation."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Higher incidence than Amoxicillin alone)",
      "Nausea",
      "Candida superinfection"
    ],
    "adverse_drug_events": [
      "Cholestatic Jaundice / Hepatotoxicity (Associated with Clavulanate)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 47,
    "drug_name": "Amphotericin B",
    "pharmacologic_class": [
      "Polyene Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Systemic Fungal Infections",
        "mechanism_of_action": "Binds to ergosterol in fungal cell membranes; forms pores; causes leakage of intracellular ions and cell death."
      }
    ],
    "common_side_effects": [
      "Infusion reactions (Fever, Chills, Rigors)",
      "Nausea/Vomiting",
      "Hypokalemia/Hypomagnesemia"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Dose-limiting)",
      "Bone Marrow Suppression",
      "Cardiotoxicity (Arrhythmias with rapid infusion)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 48,
    "drug_name": "Ampicillin",
    "pharmacologic_class": [
      "Aminopenicillin"
    ],
    "indications_and_moa": [
      {
        "indication": "Bacterial Infections (Meningitis, GI, GU)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis via PBP binding."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Rash",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Ampicillin Rash (Non-allergic maculopapular rash, esp. with Mono)",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 49,
    "drug_name": "Anagrelide",
    "pharmacologic_class": [
      "Phosphodiesterase III Inhibitor",
      "Platelet-Reducing Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Essential Thrombocythemia",
        "mechanism_of_action": "Inhibits cyclic AMP phosphodiesterase and phospholipase A2; inhibits megakaryocyte maturation; reduces platelet production."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Palpitations",
      "Diarrhea",
      "Fluid retention"
    ],
    "adverse_drug_events": [
      "Tachycardia / Heart Failure (Inotropic effect)",
      "Ventricular Arrhythmias",
      "Interstitial Lung Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 50,
    "drug_name": "Anastrozole",
    "pharmacologic_class": [
      "Aromatase Inhibitor (Non-steroidal)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (Hormone Receptor Positive, Postmenopausal)",
        "mechanism_of_action": "Inhibits aromatase enzyme; prevents conversion of androgens to estrogens in peripheral tissues; lowers serum estradiol."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Arthritis/Arthralgia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Decreased Bone Mineral Density / Fractures",
      "Ischemic Cardiovascular Events",
      "Hypercholesterolemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  // --- Batch 1 B (51-100) ---
  {
    "id": 51,
    "drug_name": "Anti-D Immunoglobulin",
    "pharmacologic_class": [
      "Immune Globulin",
      "Prophylactic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Prevention of Rh Isoimmunization (Pregnancy)",
        "mechanism_of_action": "Suppresses the immune response of Rh-negative individuals to Rh-positive red blood cells; binds to Rho(D) antigens on fetal RBCs entering maternal circulation, preventing sensitization."
      },
      {
        "indication": "Immune Thrombocytopenic Purpura (ITP)",
        "mechanism_of_action": "Binds to Rh-positive RBCs, forming antibody-coated complexes that saturate Fc receptors in the spleen; spares antibody-coated platelets from destruction (RES blockade)."
      }
    ],
    "common_side_effects": [
      "Injection site tenderness",
      "Fever",
      "Headache"
    ],
    "adverse_drug_events": [
      "Intravascular Hemolysis (Serious complication in ITP)",
      "Anaphylaxis",
      "Renal Failure (Rare, hemoglobinuria-associated)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 52,
    "drug_name": "Anti-Thymocyte Globulin (ATG)",
    "pharmacologic_class": [
      "Immunosuppressant",
      "Polyclonal Antibody (Rabbit/Equine)"
    ],
    "indications_and_moa": [
      {
        "indication": "Renal Transplant Rejection (Rabbit - Thymoglobulin)",
        "mechanism_of_action": "Depletes T-lymphocytes via complement-dependent lysis and antibody-dependent cell-mediated cytotoxicity; modulates immune effector function."
      },
      {
        "indication": "Aplastic Anemia (Equine - Atgam)",
        "mechanism_of_action": "Eliminates cytotoxic T-lymphocytes that suppress bone marrow production."
      }
    ],
    "common_side_effects": [
      "Fever/Chills (Cytokine release)",
      "Leukopenia",
      "Thrombocytopenia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Serum Sickness",
      "Cytokine Release Syndrome (CRS)",
      "Infection Susceptibility"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 53,
    "drug_name": "Apixaban",
    "pharmacologic_class": [
      "Factor Xa Inhibitor",
      "Direct Oral Anticoagulant (DOAC)"
    ],
    "indications_and_moa": [
      {
        "indication": "Stroke Prevention in Nonvalvular Atrial Fibrillation",
        "mechanism_of_action": "Selectively and reversibly inhibits free and clot-bound Factor Xa; prevents conversion of prothrombin to thrombin; inhibits fibrin clot formation."
      },
      {
        "indication": "DVT/PE Treatment and Prophylaxis",
        "mechanism_of_action": "Inhibits Factor Xa to prevent thrombus expansion and new clot formation."
      }
    ],
    "common_side_effects": [
      "Minor bleeding (epistaxis, gingival bleeding)",
      "Nausea",
      "Contusion"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (Intracranial, GI)",
      "Spinal/Epidural Hematoma (Boxed Warning)",
      "Thrombotic events upon premature discontinuation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 54,
    "drug_name": "Apremilast",
    "pharmacologic_class": [
      "Phosphodiesterase-4 (PDE4) Inhibitor",
      "DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Psoriatic Arthritis / Plaque Psoriasis / Oral Ulcers (Behcet's)",
        "mechanism_of_action": "Inhibits PDE4, increasing intracellular cAMP levels; downregulates expression of pro-inflammatory mediators (TNF-alpha, IL-23, IL-17) and upregulates anti-inflammatory cytokines (IL-10)."
      }
    ],
    "common_side_effects": [
      "Diarrhea (severe at initiation)",
      "Nausea",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Depression / Suicidal Ideation",
      "Significant Weight Loss",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 55,
    "drug_name": "Aprepitant",
    "pharmacologic_class": [
      "Substance P/Neurokinin-1 (NK1) Receptor Antagonist",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Chemotherapy-Induced Nausea and Vomiting (CINV)",
        "mechanism_of_action": "Selectively blocks NK1 receptors in the brainstem (nucleus tractus solitarius); inhibits substance P binding; prevents delayed-phase emesis."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Constipation",
      "Hiccups"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Stevens-Johnson Syndrome (SJS)",
      "Drug Interactions (CYP3A4 inhibitor/inducer effects)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 56,
    "drug_name": "Argatroban",
    "pharmacologic_class": [
      "Direct Thrombin Inhibitor",
      "Anticoagulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Heparin-Induced Thrombocytopenia (HIT)",
        "mechanism_of_action": "Reversibly binds to the thrombin active site; inhibits fibrin formation and platelet aggregation. Does not cross-react with HIT antibodies."
      }
    ],
    "common_side_effects": [
      "Bleeding",
      "Hypotension",
      "Dyspnea"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage",
      "Allergic Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 57,
    "drug_name": "Aripiprazole",
    "pharmacologic_class": [
      "Atypical Antipsychotic",
      "Partial Dopamine Agonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar I / MDD Adjunct",
        "mechanism_of_action": "Partial agonist at D2 and 5-HT1A receptors; antagonist at 5-HT2A receptors. Stabilizes dopamine output (reduces high levels, boosts low levels)."
      }
    ],
    "common_side_effects": [
      "Akathisia (Restlessness)",
      "Nausea",
      "Insomnia",
      "Anxiety"
    ],
    "adverse_drug_events": [
      "Neuroleptic Malignant Syndrome (NMS)",
      "Tardive Dyskinesia",
      "Pathological Gambling / Impulse Control Disorders",
      "Metabolic Changes (mild compared to others)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 58,
    "drug_name": "Armodafinil",
    "pharmacologic_class": [
      "Wakefulness-Promoting Agent",
      "CNS Stimulant (R-enantiomer)"
    ],
    "indications_and_moa": [
      {
        "indication": "Narcolepsy / OSA / Shift Work Disorder",
        "mechanism_of_action": "Binds to dopamine transporter (DAT) and inhibits dopamine reuptake. Exact wakefulness mechanism unclear."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Insomnia",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Serious Skin Rashes (SJS/TEN/DRESS)",
      "Psychiatric Symptoms (Mania, Delusions)",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 59,
    "drug_name": "Arsenic Trioxide",
    "pharmacologic_class": [
      "Antineoplastic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Promyelocytic Leukemia (APL)",
        "mechanism_of_action": "Causes degradation of the fusion protein PML-RAR alpha; induces differentiation and apoptosis of leukemic cells."
      }
    ],
    "common_side_effects": [
      "Leukocytosis",
      "Nausea/Vomiting",
      "Fatigue",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "APL Differentiation Syndrome (Fever, dyspnea, weight gain - Fatal if untreated)",
      "QT Prolongation / Torsades de Pointes",
      "Encephalopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 60,
    "drug_name": "Artemether-Lumefantrine",
    "pharmacologic_class": [
      "Antimalarial",
      "ACT (Artemisinin-based Combination Therapy)"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Uncomplicated Malaria (P. falciparum)",
        "mechanism_of_action": "Artemether: Rapidly reduces parasite biomass via endoperoxide radical formation. Lumefantrine: Prevents heme detoxification by inhibiting polymerization."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Anorexia",
      "Dizziness",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 61,
    "drug_name": "Artesunate",
    "pharmacologic_class": [
      "Artemisinin Derivative",
      "Antimalarial"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Malaria",
        "mechanism_of_action": "Hydrolyzed to dihydroartemisinin (DHA); produces free radicals within the parasite vacuole; damages parasite membranes."
      }
    ],
    "common_side_effects": [
      "Slow heart rate (Bradycardia)",
      "Dizziness",
      "Elevated liver enzymes"
    ],
    "adverse_drug_events": [
      "Post-Artesunate Delayed Hemolysis (PADH)",
      "Hypersensitivity (Anaphylaxis)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 62,
    "drug_name": "Artificial Tears (CMC)",
    "pharmacologic_class": [
      "Ophthalmic Lubricant",
      "Viscosity Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Dry Eye Syndrome",
        "mechanism_of_action": "Increases tear viscosity; stabilizes tear film; reduces evaporation; lubricates ocular surface."
      }
    ],
    "common_side_effects": [
      "Blurred vision (transient)",
      "Eye irritation",
      "Crusting on eyelids"
    ],
    "adverse_drug_events": [
      "Eye Pain / Persistent Redness (Discontinue)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 63,
    "drug_name": "Ascorbic Acid (Vitamin C)",
    "pharmacologic_class": [
      "Water-Soluble Vitamin",
      "Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "Scurvy / Vitamin C Deficiency",
        "mechanism_of_action": "Cofactor for collagen synthesis (proline/lysine hydroxylation); antioxidant protection; enhances iron absorption."
      }
    ],
    "common_side_effects": [
      "Diarrhea (High doses)",
      "Nausea",
      "Abdominal cramps"
    ],
    "adverse_drug_events": [
      "Kidney Stones (Oxalate nephropathy)",
      "Hemolysis (in G6PD Deficiency with high IV doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 64,
    "drug_name": "Asenapine",
    "pharmacologic_class": [
      "Atypical Antipsychotic",
      "Dibenzo-oxipino pyrrole"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar I (Acute Mania)",
        "mechanism_of_action": "Antagonist at 5-HT2A, D2, and alpha-2 adrenergic receptors; high affinity blockade."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Oral hypoesthesia (numbness)",
      "Dizziness",
      "Akathisia"
    ],
    "adverse_drug_events": [
      "Severe Allergic Reactions (Anaphylaxis, Angioedema)",
      "QT Prolongation",
      "Hyperprolactinemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 65,
    "drug_name": "Aspirin",
    "pharmacologic_class": [
      "Salicylate",
      "Antiplatelet",
      "NSAID"
    ],
    "indications_and_moa": [
      {
        "indication": "Analgesia / Anti-inflammatory",
        "mechanism_of_action": "Irreversibly inhibits COX-1 and COX-2; reduces prostaglandin synthesis."
      },
      {
        "indication": "Cardiovascular/Stroke Prevention",
        "mechanism_of_action": "Irreversibly acetylates platelet COX-1; blocks Thromboxane A2 production; inhibits platelet aggregation for 7-10 days."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Epigastric pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Peptic Ulceration",
      "Tinnitus (Salicylism)",
      "Reye's Syndrome (Children)",
      "Bronchospasm (Aspirin-sensitive asthma)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 66,
    "drug_name": "Atazanavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 protease; prevents cleavage of viral polyproteins; results in immature, non-infectious viral particles."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Jaundice (Scleral icterus - benign hyperbilirubinemia)",
      "Rash"
    ],
    "adverse_drug_events": [
      "Hyperbilirubinemia",
      "Nephrolithiasis / Cholelithiasis",
      "PR Interval Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 67,
    "drug_name": "Atenolol",
    "pharmacologic_class": [
      "Beta-1 Selective Adrenergic Antagonist",
      "Beta-blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina / Post-MI",
        "mechanism_of_action": "Cardioselective beta-1 blockade; decreases heart rate, contractility, and myocardial oxygen demand."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Fatigue",
      "Cold extremities"
    ],
    "adverse_drug_events": [
      "Heart Block",
      "Bronchospasm (High doses)",
      "Masking of Hypoglycemia",
      "Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 68,
    "drug_name": "Atomoxetine",
    "pharmacologic_class": [
      "Selective Norepinephrine Reuptake Inhibitor (SNRI)",
      "ADHD Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "ADHD",
        "mechanism_of_action": "Selectively inhibits presynaptic norepinephrine transporter; increases NE in prefrontal cortex; improves attention/impulse control."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Decreased appetite",
      "Dry mouth",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Suicidal Ideation (Boxed Warning)",
      "Severe Hepatotoxicity",
      "Cardiovascular Events (HTN, Tachycardia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 69,
    "drug_name": "Atorvastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / ASCVD Prevention",
        "mechanism_of_action": "Inhibits HMG-CoA reductase; reduces hepatic cholesterol synthesis; upregulates LDL receptors; increases clearance of LDL."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Diarrhea",
      "Arthralgia",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis",
      "Hepatotoxicity",
      "Immune-Mediated Necrotizing Myopathy (IMNM)",
      "New Onset Diabetes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 70,
    "drug_name": "Atovaquone",
    "pharmacologic_class": [
      "Naphthoquinone Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumocystis Pneumonia (PCP) / Malaria (with Proguanil)",
        "mechanism_of_action": "Inhibits mitochondrial electron transport (cytochrome bc1 complex); collapses mitochondrial membrane potential; stops ATP synthesis."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Nausea",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Elevated Liver Enzymes",
      "Hypersensitivity Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 71,
    "drug_name": "Atracurium",
    "pharmacologic_class": [
      "Nondepolarizing Neuromuscular Blocker",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / Intubation",
        "mechanism_of_action": "Competes with Acetylcholine for receptors at the motor end plate; prevents depolarization; causes flaccid paralysis. Eliminated by Hofmann elimination."
      }
    ],
    "common_side_effects": [
      "Flushing (Histamine release)",
      "Hypotension",
      "Skin Redness"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Seizures (Laudanosine metabolite accumulation)",
      "Prolonged Blockade"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 72,
    "drug_name": "Atropine",
    "pharmacologic_class": [
      "Anticholinergic",
      "Muscarinic Antagonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Bradycardia / Organophosphate Poisoning",
        "mechanism_of_action": "Competitively blocks acetylcholine at muscarinic receptors; increases heart rate; reduces secretions; relaxes smooth muscle."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Blurred vision",
      "Tachycardia",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Anticholinergic Delirium",
      "Acute Glaucoma",
      "Hyperthermia (Heat stroke)",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 73,
    "drug_name": "Azacitidine",
    "pharmacologic_class": [
      "DNA Methyltransferase Inhibitor",
      "Hypomethylating Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "MDS / AML",
        "mechanism_of_action": "Incorporated into RNA/DNA; inhibits DNA methyltransferase; causes hypomethylation; restores function of tumor suppressor genes; direct cytotoxicity."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Injection site reactions",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Neutropenia, Thrombocytopenia)",
      "Hepatotoxicity",
      "Renal Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 74,
    "drug_name": "Azathioprine",
    "pharmacologic_class": [
      "Immunosuppressant",
      "Purine Antimetabolite"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Transplant Rejection",
        "mechanism_of_action": "Prodrug of 6-mercaptopurine; inhibits purine synthesis; suppresses T and B cell proliferation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Infection susceptibility"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (TPMT dependent)",
      "Hepatotoxicity",
      "Malignancy (Lymphoma/Skin Cancer)",
      "Pancreatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 75,
    "drug_name": "Azelaic Acid",
    "pharmacologic_class": [
      "Dicarboxylic Acid",
      "Topical Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne Vulgaris / Rosacea",
        "mechanism_of_action": "Antibacterial against P. acnes (inhibits protein synthesis); normalizes keratinization; inhibits tyrosinase (anti-pigment)."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging",
      "Pruritus",
      "Dryness"
    ],
    "adverse_drug_events": [
      "Hypopigmentation",
      "Severe Contact Dermatitis",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 76,
    "drug_name": "Azelastine",
    "pharmacologic_class": [
      "H1 Receptor Antagonist",
      "Nasal Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis",
        "mechanism_of_action": "Competitively blocks histamine H1 receptors; reduces synthesis of leukotrienes and kinins; relieves nasal congestion."
      }
    ],
    "common_side_effects": [
      "Bitter Taste (Dysgeusia)",
      "Nasal burning",
      "Somnolence",
      "Headache"
    ],
    "adverse_drug_events": [
      "Epistaxis",
      "Nasal Septal Perforation (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 77,
    "drug_name": "Azilsartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Selectively blocks angiotensin II binding to AT1 receptors; prevents vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Dizziness",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Renal Failure",
      "Hyperkalemia",
      "Angioedema",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 78,
    "drug_name": "Azithromycin",
    "pharmacologic_class": [
      "Macrolide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Respiratory Infections / Chlamydia",
        "mechanism_of_action": "Binds to 50S ribosomal subunit; inhibits protein synthesis; concentrates in tissues and phagocytes."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Arrhythmias",
      "Hepatotoxicity",
      "Pyloric Stenosis (Infants)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 79,
    "drug_name": "Aztreonam",
    "pharmacologic_class": [
      "Monobactam Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Gram-Negative Infections",
        "mechanism_of_action": "Binds to PBP3; inhibits bacterial cell wall synthesis; safe in penicillin allergy (no cross-reactivity except with Ceftazidime)."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Rash",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Clostridioides difficile-associated diarrhea (CDAD)",
      "Bronchospasm (Inhaled form)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 80,
    "drug_name": "Bacitracin",
    "pharmacologic_class": [
      "Polypeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Skin Infections (Topical)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by preventing dephosphorylation of lipid carrier (bactoprenol)."
      }
    ],
    "common_side_effects": [
      "Rash (Topical)",
      "Itching"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Severe if systemic - IM)",
      "Allergic Contact Dermatitis",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 81,
    "drug_name": "Baclofen",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant",
      "GABA-B Agonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Spasticity",
        "mechanism_of_action": "Stimulates GABA-B receptors in spinal cord; inhibits mono- and polysynaptic reflexes; hyperpolarizes afferent terminals."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dizziness",
      "Weakness"
    ],
    "adverse_drug_events": [
      "Withdrawal Syndrome (Seizures, Hallucinations - intrathecal/oral)",
      "Respiratory Depression",
      "Coma (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 82,
    "drug_name": "Baloxavir Marboxil",
    "pharmacologic_class": [
      "Cap-dependent Endonuclease Inhibitor",
      "Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "Influenza A and B",
        "mechanism_of_action": "Inhibits polymerase acidic (PA) protein; blocks viral mRNA transcription (cap-snatching) and replication."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Bronchitis",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity (Anaphylaxis/Angioedema)",
      "Neuropsychiatric Events (Delirium - rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 83,
    "drug_name": "Balsalazide",
    "pharmacologic_class": [
      "5-Aminosalicylate (5-ASA)",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Ulcerative Colitis",
        "mechanism_of_action": "Prodrug; cleaved by colonic bacteria to release mesalamine; locally inhibits cyclooxygenase and prostaglandin production in the colon."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Abdominal pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Mesalamine-induced Acute Intolerance Syndrome",
      "Renal Impairment (Interstitial nephritis)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 84,
    "drug_name": "Baricitinib",
    "pharmacologic_class": [
      "JAK Inhibitor",
      "DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Alopecia Areata",
        "mechanism_of_action": "Inhibits Janus Kinase (JAK1/JAK2); blocks cytokine signaling pathways involved in inflammation and immune response."
      }
    ],
    "common_side_effects": [
      "Respiratory infections",
      "Nausea",
      "Herpes Zoster (Shingles)"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB, Opportunistic)",
      "Thrombosis (DVT/PE - Boxed Warning)",
      "Malignancy",
      "MACE (Cardiovascular events)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 85,
    "drug_name": "Basiliximab",
    "pharmacologic_class": [
      "IL-2 Receptor Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Renal Transplant Rejection Prophylaxis",
        "mechanism_of_action": "Binds to CD25 (alpha chain of IL-2 receptor) on activated T-cells; competitively inhibits IL-2 binding; prevents T-cell proliferation."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Severe Hypersensitivity (Anaphylaxis)",
      "Cytokine Release Syndrome",
      "Increased Infection Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 86,
    "drug_name": "BCG (Bacillus Calmette-Guerin)",
    "pharmacologic_class": [
      "Live Attenuated Bacteria",
      "Immunotherapy"
    ],
    "indications_and_moa": [
      {
        "indication": "Bladder Cancer (Intravesical)",
        "mechanism_of_action": "Induces local inflammatory response; activates macrophages/T-cells; destroys urothelial tumor cells."
      },
      {
        "indication": "TB Vaccination",
        "mechanism_of_action": "Induces active immunity against M. tuberculosis."
      }
    ],
    "common_side_effects": [
      "Dysuria / Frequency",
      "Hematuria",
      "Flu-like symptoms"
    ],
    "adverse_drug_events": [
      "Systemic BCG Sepsis",
      "BCG Pneumonia/Hepatitis",
      "Bladder Contracture"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 87,
    "drug_name": "Beclomethasone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Inhaled) / Rhinitis (Nasal)",
        "mechanism_of_action": "Potent glucocorticoid; inhibits multiple inflammatory cell types and mediators; reduces airway/nasal inflammation and hyperreactivity."
      }
    ],
    "common_side_effects": [
      "Oral Candidiasis (Thrush)",
      "Dysphonia",
      "Nasal irritation"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression (High dose)",
      "Nasal Septal Perforation",
      "Glaucoma / Cataracts"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 88,
    "drug_name": "Bedaquiline",
    "pharmacologic_class": [
      "Diarylquinoline",
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "MDR-TB (Pulmonary)",
        "mechanism_of_action": "Inhibits mycobacterial ATP synthase (proton pump); depletes cellular energy (ATP); bactericidal."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Arthralgia",
      "Headache"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Boxed Warning)",
      "Increased Mortality (Boxed Warning)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 89,
    "drug_name": "Belimumab",
    "pharmacologic_class": [
      "BLyS Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "SLE / Lupus Nephritis",
        "mechanism_of_action": "Binds to soluble B-lymphocyte Stimulator (BLyS); prevents binding to B-cells; inhibits B-cell survival and differentiation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Serious Infections",
      "Depression / Suicidality",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 90,
    "drug_name": "Benazepril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Inhibits Angiotensin-Converting Enzyme (ACE); prevents formation of Angiotensin II; reduces vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Impairment",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 91,
    "drug_name": "Bendamustine",
    "pharmacologic_class": [
      "Alkylating Agent",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / Non-Hodgkin Lymphoma",
        "mechanism_of_action": "Bifunctional alkylating agent; forms covalent bonds with DNA (cross-linking); causes DNA strand breaks and apoptosis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fatigue",
      "Pyrexia"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression",
      "Infusion Reactions (Anaphylaxis)",
      "Severe Skin Reactions (SJS/TEN)",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 92,
    "drug_name": "Benzonatate",
    "pharmacologic_class": [
      "Antitussive",
      "Local Anesthetic (Tetracaine congener)"
    ],
    "indications_and_moa": [
      {
        "indication": "Symptomatic relief of cough",
        "mechanism_of_action": "Anesthetizes stretch receptors in respiratory passages, lungs, and pleura; dampens cough reflex."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Oropharyngeal Anesthesia (Choking hazard if chewed)",
      "Severe Hypersensitivity (Bronchospasm)",
      "Psychiatric Effects (Confusion/Hallucinations)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 93,
    "drug_name": "Benzoyl Peroxide",
    "pharmacologic_class": [
      "Topical Acne Agent",
      "Oxidizing Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne Vulgaris",
        "mechanism_of_action": "Releases free-radical oxygen which oxidizes bacterial proteins in sebaceous follicles; bactericidal against P. acnes; mild keratolytic effect."
      }
    ],
    "common_side_effects": [
      "Dry skin",
      "Erythema",
      "Peeling",
      "Stinging"
    ],
    "adverse_drug_events": [
      "Allergic Contact Dermatitis",
      "Severe Skin Irritation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 94,
    "drug_name": "Benztropine",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antiparkinsonian Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinsonism / Drug-Induced EPS",
        "mechanism_of_action": "Blocks muscarinic receptors in the CNS; restores balance between dopamine and acetylcholine in the corpus striatum."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Blurred vision",
      "Constipation",
      "Sedation"
    ],
    "adverse_drug_events": [
      "Paralytic Ileus",
      "Heat Stroke (Anhidrosis)",
      "Psychosis / Confusion (Toxic Psychosis)",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 95,
    "drug_name": "Betahistine",
    "pharmacologic_class": [
      "Histamine H1 Agonist / H3 Antagonist",
      "Antivertigo Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Meniere's Disease (Not FDA Approved - Investigational/Compounded in US)",
        "mechanism_of_action": "Weak H1 agonist and potent H3 antagonist; improves microcirculation in the inner ear (stria vascularis); reduces endolymphatic pressure."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Peptic Ulcer Exacerbation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 96,
    "drug_name": "Betamethasone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Conditions / Fetal Lung Maturation",
        "mechanism_of_action": "Long-acting corticosteroid with potent glucocorticoid activity; inhibits inflammation via suppression of migration of polymorphonuclear leukocytes and reversal of increased capillary permeability."
      }
    ],
    "common_side_effects": [
      "Fluid retention",
      "Increased appetite",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "HPA Axis Suppression",
      "Hyperglycemia / Diabetes",
      "Osteoporosis / Fractures",
      "Psychiatric Disturbances"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 97,
    "drug_name": "Betaxolol",
    "pharmacologic_class": [
      "Beta-1 Selective Adrenergic Antagonist",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma (Ophthalmic)",
        "mechanism_of_action": "Reduces production of aqueous humor; lowers intraocular pressure."
      },
      {
        "indication": "Hypertension (Oral)",
        "mechanism_of_action": "Cardioselective beta-1 blockade; reduces heart rate and cardiac output."
      }
    ],
    "common_side_effects": [
      "Eye discomfort (stinging)",
      "Bradycardia (Oral)",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Bronchospasm (High doses)",
      "Heart Failure",
      "Heart Block"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 98,
    "drug_name": "Bethanechol",
    "pharmacologic_class": [
      "Cholinergic Agonist",
      "Parasympathomimetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Urinary Retention (Non-obstructive)",
        "mechanism_of_action": "Stimulates muscarinic receptors (M3) in the bladder detrusor muscle; increases bladder tone and contraction; initiates micturition."
      }
    ],
    "common_side_effects": [
      "Abdominal cramps",
      "Flushing",
      "Sweating",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Bronchoconstriction / Asthma Attack",
      "Bradycardia / Hypotension",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 99,
    "drug_name": "Bevacizumab",
    "pharmacologic_class": [
      "VEGF Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Colorectal Cancer / NSCLC / Glioblastoma",
        "mechanism_of_action": "Binds to VEGF-A; prevents interaction with VEGFR-1 and VEGFR-2 on endothelial cells; inhibits angiogenesis and tumor growth."
      }
    ],
    "common_side_effects": [
      "Epistaxis",
      "Hypertension",
      "Fatigue",
      "Proteinuria"
    ],
    "adverse_drug_events": [
      "Gastrointestinal Perforation (Boxed Warning)",
      "Wound Healing Complications (Boxed Warning)",
      "Hemorrhage (Boxed Warning)",
      "Arterial Thromboembolic Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 100,
    "drug_name": "Bicalutamide",
    "pharmacologic_class": [
      "Non-steroidal Antiandrogen",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer (Metastatic)",
        "mechanism_of_action": "Competitively binds to androgen receptors in target tissues; prevents testosterone stimulation of prostate tumor cell growth. Used with LHRH agonist."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Gynecomastia",
      "Breast pain",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe liver injury)",
      "Teratogenicity",
      "Cardiovascular Toxicity (when not used with LHRH agonist)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  // --- Batch 2 A (101-150) ---
  {
    "id": 101,
    "drug_name": "Bimatoprost",
    "pharmacologic_class": [
      "Prostaglandin Analog",
      "Ophthalmic Glaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Open-Angle Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Synthetic prostamide analog; increases outflow of aqueous humor via both the trabecular meshwork and uveoscleral pathways, lowering intraocular pressure."
      },
      {
        "indication": "Hypotrichosis of Eyelashes",
        "mechanism_of_action": "Prolongs the anagen (growth) phase of the hair follicle cycle."
      }
    ],
    "common_side_effects": [
      "Conjunctival hyperemia (redness)",
      "Growth of eyelashes",
      "Ocular pruritus",
      "Iris pigmentation (permanent)"
    ],
    "adverse_drug_events": [
      "Macular Edema (in aphakic/pseudophakic patients)",
      "Iritis / Uveitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 102,
    "drug_name": "Biperiden",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antiparkinsonian Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinsonism / Drug-Induced EPS",
        "mechanism_of_action": "Weak peripheral anticholinergic with strong central effects; blocks muscarinic receptors in the corpus striatum to restore dopamine-acetylcholine balance."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Blurred vision",
      "Drowsiness",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Paralytic Ileus",
      "Toxic Psychosis (Confusion/Hallucinations)",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 103,
    "drug_name": "Bisacodyl",
    "pharmacologic_class": [
      "Stimulant Laxative"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation / Bowel Cleansing",
        "mechanism_of_action": "Stimulates enteric nerves to cause peristalsis; alters fluid and electrolyte transport producing net intestinal fluid accumulation."
      }
    ],
    "common_side_effects": [
      "Abdominal cramping",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Electrolyte Imbalance (Hypokalemia with chronic use)",
      "Protein-Losing Enteropathy (Chronic use)",
      "Ischemic Colitis (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 104,
    "drug_name": "Bismuth Subsalicylate",
    "pharmacologic_class": [
      "Antidiarrheal",
      "Antacid"
    ],
    "indications_and_moa": [
      {
        "indication": "Diarrhea / H. pylori Eradication",
        "mechanism_of_action": "Exhibits antisecretory effects (salicylate moiety); antimicrobial activity against bacterial and viral pathogens (bismuth moiety); binds bacterial toxins."
      }
    ],
    "common_side_effects": [
      "Black tongue (harmless)",
      "Black stools (harmless)",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Neurotoxicity (Encephalopathy with chronic high doses)",
      "Salicylism (Tinnitus)",
      "Reye's Syndrome (in children with viral illness)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 105,
    "drug_name": "Bisoprolol",
    "pharmacologic_class": [
      "Beta-1 Selective Adrenergic Antagonist",
      "Beta-blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Selectively blocks beta-1 adrenergic receptors; decreases cardiac output and inhibits renin release."
      },
      {
        "indication": "Heart Failure (HFrEF)",
        "mechanism_of_action": "Protects the heart from chronic sympathetic stimulation; reduces mortality and hospitalization."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Fatigue",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Heart Block",
      "Bronchospasm (High doses)",
      "Worsening Heart Failure (Initial)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 106,
    "drug_name": "Bleomycin",
    "pharmacologic_class": [
      "Antineoplastic Antibiotic",
      "Glycopeptide"
    ],
    "indications_and_moa": [
      {
        "indication": "Hodgkin's Lymphoma / Testicular Cancer / Squamous Cell Carcinoma",
        "mechanism_of_action": "Binds to DNA and chelates iron, producing free radicals that cause single- and double-strand DNA breaks (Scission); cell cycle specific (G2 phase)."
      },
      {
        "indication": "Malignant Pleural Effusion (Sclerosing Agent)",
        "mechanism_of_action": "Induces chemical pleuritis and fibrosis."
      }
    ],
    "common_side_effects": [
      "Hyperpigmentation",
      "Skin erythema/Striae",
      "Fever/Chills",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "Pulmonary Fibrosis (Dose-limiting toxicity)",
      "Idiosyncratic Reaction (Hypotension, Confusion, Fever)",
      "Raynaud's Phenomenon"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 107,
    "drug_name": "Bortezomib",
    "pharmacologic_class": [
      "Proteasome Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma / Mantle Cell Lymphoma",
        "mechanism_of_action": "Reversibly inhibits the 26S proteasome; prevents degradation of pro-apoptotic factors; disrupts cell signaling pathways (NF-kappaB); induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Peripheral Neuropathy",
      "Fatigue",
      "Nausea/Diarrhea",
      "Thrombocytopenia"
    ],
    "adverse_drug_events": [
      "Severe Neuropathy",
      "Pulmonary Toxicity (ARDS/Pneumonitis)",
      "Reactivation of Herpes Zoster",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 108,
    "drug_name": "Bosentan",
    "pharmacologic_class": [
      "Endothelin Receptor Antagonist (ERA)",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension (PAH)",
        "mechanism_of_action": "Competitive antagonist at both Endothelin-A (ET-A) and Endothelin-B (ET-B) receptors; reduces pulmonary vascular resistance."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nasopharyngitis",
      "Flushing",
      "Edema"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning - Requires monthly LFTs)",
      "Teratogenicity (Boxed Warning - REMS)",
      "Decrease in Sperm Count"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 109,
    "drug_name": "Botulinum Toxin A",
    "pharmacologic_class": [
      "Neuromuscular Blocker",
      "Neurotoxin"
    ],
    "indications_and_moa": [
      {
        "indication": "Muscle Spasticity / Chronic Migraine / Cosmetic / Hyperhidrosis",
        "mechanism_of_action": "Cleaves SNAP-25 protein; prevents docking and release of acetylcholine vesicles at the neuromuscular junction; causes temporary chemical denervation and muscle paralysis."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Muscle weakness (local)",
      "Eyelid ptosis (facial use)"
    ],
    "adverse_drug_events": [
      "Spread of Toxin Effect (Boxed Warning - Swallowing/Breathing difficulties)",
      "Hypersensitivity / Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 110,
    "drug_name": "Brexpiprazole",
    "pharmacologic_class": [
      "Atypical Antipsychotic",
      "Serotonin-Dopamine Activity Modulator (SDAM)"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / MDD Adjunct",
        "mechanism_of_action": "Partial agonist at 5-HT1A and D2 receptors; antagonist at 5-HT2A receptors; modulates neurotransmission with less intrinsic activity at D2 than aripiprazole."
      }
    ],
    "common_side_effects": [
      "Akathisia",
      "Weight gain",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Neuroleptic Malignant Syndrome",
      "Tardive Dyskinesia",
      "Metabolic Changes (Hyperglycemia/Dyslipidemia)",
      "Suicidal Thoughts (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 111,
    "drug_name": "Brimonidine",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Open-Angle Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Highly selective alpha-2 agonist; decreases aqueous humor production and increases uveoscleral outflow."
      },
      {
        "indication": "Rosacea (Topical Gel)",
        "mechanism_of_action": "Causes direct vasoconstriction of facial cutaneous microvessels."
      }
    ],
    "common_side_effects": [
      "Oral dryness",
      "Ocular hyperemia",
      "Burning/Stinging",
      "Fatigue/Drowsiness"
    ],
    "adverse_drug_events": [
      "Allergic Conjunctivitis",
      "Hypotension / Bradycardia (Systemic absorption)",
      "Apnea (in infants/young children - Contraindicated)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 112,
    "drug_name": "Brinzolamide",
    "pharmacologic_class": [
      "Carbonic Anhydrase Inhibitor",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Inhibits carbonic anhydrase II in ciliary processes; slows formation of bicarbonate ions; reduces sodium and fluid transport; decreases aqueous humor secretion."
      }
    ],
    "common_side_effects": [
      "Blurred vision",
      "Dysgeusia (Bitter taste)",
      "Eye discomfort"
    ],
    "adverse_drug_events": [
      "Sulfonamide Hypersensitivity (Systemic absorption)",
      "Corneal Edema (in compromised corneas)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 113,
    "drug_name": "Bromfenac",
    "pharmacologic_class": [
      "NSAID",
      "Ophthalmic Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Postoperative Inflammation (Cataract Surgery)",
        "mechanism_of_action": "Inhibits cyclooxygenase (COX-1 and COX-2); blocks prostaglandin synthesis; reduces ocular inflammation and pain."
      }
    ],
    "common_side_effects": [
      "Foreign body sensation",
      "Eye pain",
      "Photophobia"
    ],
    "adverse_drug_events": [
      "Corneal Melt / Perforation (with prolonged use)",
      "Delayed Wound Healing",
      "Keratitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 114,
    "drug_name": "Bromocriptine",
    "pharmacologic_class": [
      "Dopamine Agonist (Ergot Derivative)"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperprolactinemia / Parkinson's Disease / Acromegaly",
        "mechanism_of_action": "Directly stimulates dopamine D2 receptors in the corpus striatum and pituitary; inhibits prolactin and growth hormone secretion."
      },
      {
        "indication": "Type 2 Diabetes (Cycloset)",
        "mechanism_of_action": "Resets hypothalamic circadian rhythm of dopaminergic and noradrenergic tone; improves insulin sensitivity (exact mechanism undefined)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Orthostatic hypotension",
      "Headache"
    ],
    "adverse_drug_events": [
      "Pleural/Retroperitoneal Fibrosis (Long-term use)",
      "Cardiac Valvulopathy",
      "Psychosis / Hallucinations"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 115,
    "drug_name": "Budesonide",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Inhaled) / Crohn's Disease (Oral) / Allergic Rhinitis (Nasal)",
        "mechanism_of_action": "Potent anti-inflammatory activity; inhibits multiple inflammatory mediators; high first-pass metabolism reduces systemic side effects (Oral)."
      }
    ],
    "common_side_effects": [
      "Oral Candidiasis",
      "Headache",
      "Nasal irritation"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Decreased Bone Mineral Density",
      "Glaucoma / Cataracts"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 116,
    "drug_name": "Bumetanide",
    "pharmacologic_class": [
      "Loop Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema (Heart Failure, Renal/Hepatic Disease)",
        "mechanism_of_action": "Inhibits Na+/K+/2Cl- co-transporter in the ascending limb of the Loop of Henle; prevents reabsorption of sodium and chloride; potent diuresis."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Muscle cramps",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Severe Electrolyte Depletion (Hypokalemia, Hypomagnesemia)",
      "Ototoxicity (High IV doses)",
      "Renal Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 117,
    "drug_name": "Bupivacaine",
    "pharmacologic_class": [
      "Local Anesthetic (Amide)"
    ],
    "indications_and_moa": [
      {
        "indication": "Local / Regional Anesthesia / Analgesia",
        "mechanism_of_action": "Blocks voltage-gated sodium channels in neuronal membranes; prevents initiation and conduction of nerve impulses."
      }
    ],
    "common_side_effects": [
      "Hypotension (Epidural)",
      "Nausea",
      "Bradycardia"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (Cardiac Arrest - resistant to resuscitation)",
      "Central Nervous System Toxicity (Seizures)",
      "Chondrolysis (Continuous infusion)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 118,
    "drug_name": "Buprenorphine",
    "pharmacologic_class": [
      "Opioid Partial Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Opioid Use Disorder / Chronic Pain",
        "mechanism_of_action": "Partial agonist at mu-opioid receptors (high affinity, low intrinsic activity); antagonist at kappa receptors. Reduces cravings/withdrawal with ceiling effect on respiratory depression."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea",
      "Headache",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Rare alone, risk with benzodiazepines)",
      "Precipitated Withdrawal",
      "QT Prolongation",
      "Dental decay (Sublingual films/tabs)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 119,
    "drug_name": "Bupropion",
    "pharmacologic_class": [
      "Aminoketone Antidepressant",
      "Dopamine/Norepinephrine Reuptake Inhibitor (NDRI)"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder / Smoking Cessation",
        "mechanism_of_action": "Weakly inhibits neuronal reuptake of dopamine and norepinephrine; does not inhibit MAO or serotonin reuptake."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Insomnia",
      "Tremor",
      "Agitation"
    ],
    "adverse_drug_events": [
      "Seizures (Dose-dependent risk; contraindication in seizure disorder/eating disorders)",
      "Hypertension",
      "Neuropsychiatric symptoms (Suicidality Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 120,
    "drug_name": "Buspirone",
    "pharmacologic_class": [
      "Azapirone Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Generalized Anxiety Disorder (GAD)",
        "mechanism_of_action": "High affinity partial agonist at 5-HT1A receptors; moderate affinity for D2 receptors. No GABA activity (non-sedating, non-addictive)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Nausea",
      "Headache",
      "Nervousness"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "Akathisia (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 121,
    "drug_name": "Busulfan",
    "pharmacologic_class": [
      "Alkylating Agent",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CML / Conditioning for Bone Marrow Transplant",
        "mechanism_of_action": "Bifunctional alkylating agent; forms DNA cross-links (guanine-adenine); inhibits DNA replication."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Myelosuppression",
      "Mucositis"
    ],
    "adverse_drug_events": [
      "Pulmonary Fibrosis (Busulfan lung)",
      "Hepatic Veno-Occlusive Disease (VOD)",
      "Seizures (High dose - requires prophylaxis)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 122,
    "drug_name": "Butorphanol",
    "pharmacologic_class": [
      "Opioid Agonist-Antagonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain Management / Migraine (Nasal)",
        "mechanism_of_action": "Partial agonist at kappa-opioid receptors; antagonist at mu-opioid receptors."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Dysphoria / Hallucinations (Kappa effect)",
      "Precipitated Withdrawal (in opioid-dependent patients)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 123,
    "drug_name": "Cabazitaxel",
    "pharmacologic_class": [
      "Taxane",
      "Microtubule Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Castration-Resistant Prostate Cancer",
        "mechanism_of_action": "Stabilizes microtubules; prevents depolymerization; inhibits cell division (mitotic arrest); active in docetaxel-resistant tumors."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Fatigue",
      "Nausea",
      "Vomiting"
    ],
    "adverse_drug_events": [
      "Neutropenia (Boxed Warning)",
      "Severe Hypersensitivity (Boxed Warning)",
      "Gastrointestinal Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 124,
    "drug_name": "Cabergoline",
    "pharmacologic_class": [
      "Dopamine Agonist (Ergot Derivative)"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperprolactinemia",
        "mechanism_of_action": "Potent, long-acting agonist at D2 dopamine receptors in the pituitary; inhibits prolactin secretion."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Cardiac Valve Fibrosis (High cumulative doses)",
      "Pleural/Retroperitoneal Fibrosis",
      "Impulse Control Disorders"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 125,
    "drug_name": "Caffeine Citrate",
    "pharmacologic_class": [
      "Methylxanthine",
      "Respiratory Stimulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Apnea of Prematurity",
        "mechanism_of_action": "Blocks adenosine receptors; stimulates respiratory center; increases sensitivity to CO2; increases diaphragmatic contractility."
      }
    ],
    "common_side_effects": [
      "Feeding intolerance",
      "Restlessness",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Necrotizing Enterocolitis (Association debated)",
      "Seizures (Overdose)",
      "Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 126,
    "drug_name": "Calcipotriol (Calcipotriene)",
    "pharmacologic_class": [
      "Vitamin D Analog",
      "Antipsoriatic"
    ],
    "indications_and_moa": [
      {
        "indication": "Plaque Psoriasis",
        "mechanism_of_action": "Binds to Vitamin D receptors in skin cells; inhibits keratinocyte proliferation; enhances differentiation."
      }
    ],
    "common_side_effects": [
      "Skin irritation",
      "Burning",
      "Erythema"
    ],
    "adverse_drug_events": [
      "Hypercalcemia / Hypercalciuria (if max dose exceeded)",
      "Allergic Dermatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 127,
    "drug_name": "Calcitonin (Salmon)",
    "pharmacologic_class": [
      "Hormone",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Postmenopausal Osteoporosis / Hypercalcemia / Paget's Disease",
        "mechanism_of_action": "Directly inhibits osteoclast activity; promotes renal excretion of calcium."
      }
    ],
    "common_side_effects": [
      "Rhinitis (Nasal spray)",
      "Nausea (Injection)",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Hypocalcemia",
      "Potential Increased Malignancy Risk (Long-term use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 128,
    "drug_name": "Calcitriol",
    "pharmacologic_class": [
      "Vitamin D Analog",
      "Active Vitamin D3"
    ],
    "indications_and_moa": [
      {
        "indication": "Secondary Hyperparathyroidism (CKD) / Hypocalcemia",
        "mechanism_of_action": "Active form of Vitamin D (1,25-dihydroxycholecalciferol); increases intestinal calcium absorption; suppresses PTH secretion."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hypercalcemia",
      "Hyperphosphatemia",
      "Vascular Calcification"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 129,
    "drug_name": "Calcium Acetate",
    "pharmacologic_class": [
      "Phosphate Binder"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperphosphatemia (ESRD)",
        "mechanism_of_action": "Combines with dietary phosphate in the GI tract to form insoluble calcium phosphate; excreted in feces."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Constipation",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hypercalcemia",
      "Vascular Calcification"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 130,
    "drug_name": "Calcium Carbonate",
    "pharmacologic_class": [
      "Antacid",
      "Calcium Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypocalcemia / Dyspepsia",
        "mechanism_of_action": "Neutralizes gastric acid; provides supplemental calcium."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Gas/Bloating"
    ],
    "adverse_drug_events": [
      "Hypercalcemia",
      "Milk-Alkali Syndrome (Hypercalcemia + Alkalosis + Renal Failure)",
      "Nephrolithiasis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 131,
    "drug_name": "Calcium Dobesilate",
    "pharmacologic_class": [
      "Vasoprotective Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetic Retinopathy / Chronic Venous Insufficiency (Not FDA Approved)",
        "mechanism_of_action": "Reduces capillary permeability and fragility; reduces blood viscosity; inhibits platelet hyperaggregation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Skin rash"
    ],
    "adverse_drug_events": [
      "Agranulocytosis (Rare)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 132,
    "drug_name": "Calcium Gluconate",
    "pharmacologic_class": [
      "Calcium Salt",
      "Electrolyte"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Hypocalcemia / Hyperkalemia (Cardiac protection)",
        "mechanism_of_action": "Restores serum calcium levels; stabilizes cardiac cell membrane threshold potential (antagonizes potassium cardiotoxicity)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Constipation",
      "Vasodilation (Hot flashes with rapid IV)"
    ],
    "adverse_drug_events": [
      "Tissue Necrosis (Extravasation)",
      "Hypercalcemia",
      "Arrhythmias / Cardiac Arrest (Rapid IV)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 133,
    "drug_name": "Canagliflozin",
    "pharmacologic_class": [
      "SGLT2 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Diabetic Kidney Disease",
        "mechanism_of_action": "Inhibits Sodium-Glucose Co-Transporter 2 (SGLT2) in proximal renal tubules; reduces reabsorption of filtered glucose; lowers renal threshold for glucose."
      }
    ],
    "common_side_effects": [
      "Genital Mycotic Infections",
      "Urinary Tract Infections",
      "Increased Urination"
    ],
    "adverse_drug_events": [
      "Diabetic Ketoacidosis (Euglycemic DKA)",
      "Fournier's Gangrene",
      "Lower Limb Amputation (Risk Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 134,
    "drug_name": "Candesartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure",
        "mechanism_of_action": "Selectively blocks binding of angiotensin II to AT1 receptors; prevents vasoconstriction and aldosterone release."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Back pain",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Renal Impairment",
      "Hyperkalemia",
      "Angioedema",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 135,
    "drug_name": "Capecitabine",
    "pharmacologic_class": [
      "Antimetabolite",
      "Antineoplastic (Oral 5-FU prodrug)"
    ],
    "indications_and_moa": [
      {
        "indication": "Colorectal Cancer / Breast Cancer",
        "mechanism_of_action": "Converted to 5-fluorouracil (5-FU) by thymidine phosphorylase (higher in tumors); inhibits thymidylate synthase; interferes with DNA synthesis."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Hand-Foot Syndrome (Palmar-Plantar Erythrodysesthesia)",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Diarrhea / Dehydration",
      "Cardiotoxicity (Ischemia/MI)",
      "Hyperbilirubinemia",
      "Severe Toxicity in DPD Deficiency"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 136,
    "drug_name": "Captopril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure / Diabetic Nephropathy",
        "mechanism_of_action": "Inhibits Angiotensin-Converting Enzyme (ACE); blocks formation of Angiotensin II; reduces vasoconstriction; short half-life (requires frequent dosing)."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Taste alteration (Dysgeusia)",
      "Rash"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Neutropenia / Agranulocytosis",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 137,
    "drug_name": "Carbamazepine",
    "pharmacologic_class": [
      "Anticonvulsant",
      "Voltage-Gated Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Epilepsy (Partial/Generalized) / Trigeminal Neuralgia / Bipolar Disorder",
        "mechanism_of_action": "Stabilizes hyperexcited nerve membranes; inhibits repetitive neuronal firing by blocking sodium channels; reduces synaptic propagation."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Drowsiness",
      "Ataxia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Serious Skin Reactions (SJS/TEN - HLA-B*1502 screening required)",
      "Aplastic Anemia / Agranulocytosis (Boxed Warning)",
      "Hyponatremia (SIADH)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 138,
    "drug_name": "Carbidopa-Levodopa",
    "pharmacologic_class": [
      "Dopamine Precursor + Decarboxylase Inhibitor",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease",
        "mechanism_of_action": "Levodopa crosses BBB and converts to dopamine; Carbidopa inhibits peripheral DOPA decarboxylase, preventing peripheral conversion and side effects, increasing CNS availability."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Orthostatic hypotension",
      "Dyskinesia (Long-term)"
    ],
    "adverse_drug_events": [
      "Hallucinations / Psychosis",
      "Impulse Control Disorders",
      "Melanoma activation (Theoretical)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 139,
    "drug_name": "Carboplatin",
    "pharmacologic_class": [
      "Platinum Coordination Complex",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Ovarian Cancer / Lung Cancer",
        "mechanism_of_action": "Forms reactive platinum complexes that bind to DNA (cross-linking); inhibits DNA replication and transcription; cell cycle non-specific."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (Less than Cisplatin)",
      "Fatigue",
      "Electrolyte abnormalities"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Thrombocytopenia is dose-limiting)",
      "Hypersensitivity / Anaphylaxis",
      "Nephrotoxicity / Ototoxicity (Less than Cisplatin)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 140,
    "drug_name": "Carboprost Tromethamine",
    "pharmacologic_class": [
      "Prostaglandin F2 alpha Analog",
      "Oxytocic"
    ],
    "indications_and_moa": [
      {
        "indication": "Postpartum Hemorrhage / Abortion",
        "mechanism_of_action": "Stimulates myometrial contractions of the gravid uterus; induces hemostasis at the placental site."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Very common)",
      "Nausea/Vomiting",
      "Fever"
    ],
    "adverse_drug_events": [
      "Bronchospasm (Contraindicated in Asthma)",
      "Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 141,
    "drug_name": "Carfilzomib",
    "pharmacologic_class": [
      "Proteasome Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma",
        "mechanism_of_action": "Irreversibly binds to and inhibits the 20S proteasome; causes accumulation of polyubiquitinated proteins; induces cell cycle arrest and apoptosis."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Anemia",
      "Nausea",
      "Dyspnea"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (Heart Failure/Ischemia)",
      "Pulmonary Toxicity (ARDS)",
      "Acute Renal Failure",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 142,
    "drug_name": "Carisoprodol",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant",
      "Centrally Acting"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Musculoskeletal Pain",
        "mechanism_of_action": "Blocks interneuronal activity in the descending reticular formation and spinal cord; metabolized to meprobamate (anxiolytic/sedative effect)."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Dependence / Withdrawal / Abuse (Schedule IV)",
      "Seizures",
      "Respiratory Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 143,
    "drug_name": "Carmustine (BCNU)",
    "pharmacologic_class": [
      "Alkylating Agent (Nitrosourea)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Brain Tumors (Glioblastoma) / Lymphoma",
        "mechanism_of_action": "Alkylates DNA and RNA; cross-links DNA; inhibits DNA repair. Highly lipid-soluble, crosses Blood-Brain Barrier."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "Delayed Myelosuppression (Nadir 4-6 weeks)",
      "Pulmonary Fibrosis (Dose-related)",
      "Renal Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 144,
    "drug_name": "Carvedilol",
    "pharmacologic_class": [
      "Non-selective Beta/Alpha-1 Blocker",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure / Hypertension / Post-MI",
        "mechanism_of_action": "Blocks alpha-1, beta-1, and beta-2 receptors; causes vasodilation (alpha-1 blockade) and reduces heart rate/contractility (beta blockade); antioxidant properties."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Hypotension",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Bradycardia / Heart Block",
      "Bronchospasm",
      "Worsening Heart Failure (during titration)",
      "Intraoperative Floppy Iris Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 145,
    "drug_name": "Caspofungin",
    "pharmacologic_class": [
      "Echinocandin",
      "Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Invasive Candidiasis / Aspergillosis",
        "mechanism_of_action": "Inhibits synthesis of beta(1,3)-D-glucan, an essential component of the fungal cell wall; leads to osmotic instability and cell lysis."
      }
    ],
    "common_side_effects": [
      "Fever",
      "Phlebitis",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatic Effects (Elevated LFTs)",
      "Hypersensitivity / Anaphylaxis (Histamine release)",
      "Drug Interactions (Cyclosporine/Tacrolimus)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 146,
    "drug_name": "Cefaclor",
    "pharmacologic_class": [
      "Cephalosporin (2nd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bacterial Infections (Respiratory, Skin, OM)",
        "mechanism_of_action": "Binds to PBPs; inhibits bacterial cell wall synthesis. Covers Gram-positives and some Gram-negatives (H. flu, M. cat)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Serum Sickness-like Reaction (more common in children)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 147,
    "drug_name": "Cefadroxil",
    "pharmacologic_class": [
      "Cephalosporin (1st Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Skin Infections / Pharyngitis / UTI",
        "mechanism_of_action": "Inhibits cell wall synthesis. Excellent Gram-positive coverage (Staph/Strep); limited Gram-negative."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 148,
    "drug_name": "Cefazolin",
    "pharmacologic_class": [
      "Cephalosporin (1st Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Surgical Prophylaxis / Severe Skin Infections",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis. Drug of choice for MSSA infections and surgical prophylaxis."
      }
    ],
    "common_side_effects": [
      "Phlebitis",
      "Diarrhea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Seizures (Renal impairment/High dose)",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 149,
    "drug_name": "Cefdinir",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Otitis Media / Sinusitis / Pneumonia",
        "mechanism_of_action": "Inhibits cell wall synthesis. Broad Gram-negative coverage; good Gram-positive coverage."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Red Stools (Interaction with iron)",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 150,
    "drug_name": "Cefditoren",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bronchitis / Pharyngitis / Skin Infections",
        "mechanism_of_action": "Inhibits cell wall synthesis. High affinity for PBP2."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Carnitine Deficiency (due to pivalate metabolism - avoid in carnitine deficiency)",
      "Hypersensitivity",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 151,
    "drug_name": "Cefepime",
    "pharmacologic_class": [
      "Cephalosporin (4th Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumonia / Febrile Neutropenia / UTI",
        "mechanism_of_action": "Binds to PBPs; inhibits bacterial cell wall synthesis. Zwitterionic structure allows rapid penetration of Gram-negative outer membrane; resistant to many beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Diarrhea",
      "Injection site reactions"
    ],
    "adverse_drug_events": [
      "Neurotoxicity (Encephalopathy/Seizures - especially in renal impairment)",
      "CDAD",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 152,
    "drug_name": "Cefixime",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Gonorrhea / UTI / Otitis Media",
        "mechanism_of_action": "Inhibits cell wall synthesis. Stable against many beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Acute Renal Failure (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 153,
    "drug_name": "Cefoperazone",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Intra-abdominal Infections / Septicemia",
        "mechanism_of_action": "Inhibits cell wall synthesis. Note: NMTT side chain associated with bleeding risk (hypoprothrombinemia) and disulfiram-like reaction."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Rash",
      "Phlebitis"
    ],
    "adverse_drug_events": [
      "Coagulopathy (Vitamin K deficiency due to NMTT side chain)",
      "Disulfiram-like Reaction (with alcohol)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 154,
    "drug_name": "Cefotaxime",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Meningitis / Pneumonia / Gonorrhea",
        "mechanism_of_action": "Inhibits cell wall synthesis. Excellent CNS penetration."
      }
    ],
    "common_side_effects": [
      "Injection site inflammation",
      "Rash",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Arrhythmias (Rapid IV bolus)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 155,
    "drug_name": "Cefotetan",
    "pharmacologic_class": [
      "Cephamycin (2nd Generation Cephalosporin)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Surgical Prophylaxis (Colorectal/GYN) / Intra-abdominal Infections",
        "mechanism_of_action": "Inhibits cell wall synthesis. Active against anaerobes (Bacteroides). Contains NMTT side chain."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Hypoprothrombinemia (Bleeding risk - NMTT side chain inhibits Vit K epoxide reductase)",
      "Disulfiram-like Reaction",
      "Hemolytic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 156,
    "drug_name": "Cefoxitin",
    "pharmacologic_class": [
      "Cephamycin (2nd Generation Cephalosporin)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Surgical Prophylaxis / Intra-abdominal Infections",
        "mechanism_of_action": "Inhibits cell wall synthesis. Stable against beta-lactamases; active against anaerobes."
      }
    ],
    "common_side_effects": [
      "Thrombophlebitis",
      "Diarrhea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Renal Impairment (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 157,
    "drug_name": "Cefpodoxime",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumonia / Skin Infections / UTI",
        "mechanism_of_action": "Inhibits cell wall synthesis. Prodrug (proxetil ester) hydrolyzed in intestinal wall."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Vaginal fungal infection"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 158,
    "drug_name": "Cefprozil",
    "pharmacologic_class": [
      "Cephalosporin (2nd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pharyngitis / Otitis Media / Skin Infections",
        "mechanism_of_action": "Inhibits cell wall synthesis."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Elevated Liver Enzymes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 159,
    "drug_name": "Ceftaroline",
    "pharmacologic_class": [
      "Cephalosporin (5th Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "ABSSSI (MRSA) / Community-Acquired Pneumonia",
        "mechanism_of_action": "Inhibits cell wall synthesis. Unique high affinity binding to PBP2a (MRSA) and PBP2x (resistant Pneumococcus)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Agranulocytosis (Prolonged use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 160,
    "drug_name": "Ceftazidime",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pseudomonas Infections / Meningitis / Neutropenic Fever",
        "mechanism_of_action": "Inhibits cell wall synthesis. Strong anti-pseudomonal activity."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Injection site reactions",
      "Rash"
    ],
    "adverse_drug_events": [
      "Neurotoxicity (Seizures/Encephalopathy in renal failure)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 161,
    "drug_name": "Ceftibuten",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Bronchitis Exacerbation / Otitis Media",
        "mechanism_of_action": "Inhibits cell wall synthesis. Highly stable against beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Seizures (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 162,
    "drug_name": "Ceftobiprole",
    "pharmacologic_class": [
      "Cephalosporin (5th Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Staph. aureus Bacteremia / ABSSSI / Pneumonia",
        "mechanism_of_action": "Inhibits cell wall synthesis. Binds tightly to PBP2a (MRSA) and PBP2x (Strep)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dysgeusia (Taste disturbance)",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 163,
    "drug_name": "Ceftolozane-Tazobactam",
    "pharmacologic_class": [
      "Cephalosporin + Beta-lactamase Inhibitor",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Complicated UTI / Intra-abdominal Infections / Pneumonia",
        "mechanism_of_action": "Ceftolozane inhibits cell wall synthesis (potent against Pseudomonas). Tazobactam inhibits beta-lactamases (ESBLs) protecting ceftolozane."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Renal Impairment (Worsening)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 164,
    "drug_name": "Ceftriaxone",
    "pharmacologic_class": [
      "Cephalosporin (3rd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Meningitis / Gonorrhea / Pneumonia / Lyme Disease",
        "mechanism_of_action": "Inhibits cell wall synthesis. Long half-life allows once-daily dosing. High biliary excretion."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Diarrhea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Biliary Sludge / Pseudolithiasis",
      "Kernicterus (Displaces bilirubin - Contraindicated in neonates)",
      "Hemolytic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 165,
    "drug_name": "Cefuroxime",
    "pharmacologic_class": [
      "Cephalosporin (2nd Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Lyme Disease (Early) / Respiratory Infections / Surgical Prophylaxis",
        "mechanism_of_action": "Inhibits cell wall synthesis. Crosses BBB when inflamed."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Thrombophlebitis"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Jarisch-Herxheimer Reaction (Lyme treatment)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 166,
    "drug_name": "Celecoxib",
    "pharmacologic_class": [
      "COX-2 Inhibitor",
      "NSAID"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis / Pain",
        "mechanism_of_action": "Selectively inhibits Cyclooxygenase-2 (COX-2); reduces prostaglandin synthesis involved in inflammation/pain; spares COX-1 (gastric protection/platelet function)."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Headache",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Cardiovascular Thrombotic Events (MI/Stroke - Boxed Warning)",
      "GI Bleeding (Lower risk than non-selective NSAIDs)",
      "Sulfonamide Allergy Cross-reactivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 167,
    "drug_name": "Cemiplimab",
    "pharmacologic_class": [
      "PD-1 Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Cutaneous Squamous Cell Carcinoma / Basal Cell Carcinoma / NSCLC",
        "mechanism_of_action": "Binds to PD-1 receptor on T-cells; blocks interaction with PD-L1 and PD-L2; restores T-cell anti-tumor immune response."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Rash",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Immune-Mediated Adverse Reactions (Pneumonitis, Colitis, Hepatitis, Endocrinopathies)",
      "Infusion Reactions",
      "Severe Cutaneous Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 168,
    "drug_name": "Cephalexin",
    "pharmacologic_class": [
      "Cephalosporin (1st Generation)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Skin Infections / UTI / Pharyngitis",
        "mechanism_of_action": "Inhibits cell wall synthesis. Excellent activity against MSSA and Strep."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "CDAD",
      "Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 169,
    "drug_name": "Ceritinib",
    "pharmacologic_class": [
      "ALK Inhibitor",
      "Tyrosine Kinase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "ALK-positive Metastatic NSCLC",
        "mechanism_of_action": "Inhibits Anaplastic Lymphoma Kinase (ALK); blocks downstream signaling pathways; inhibits proliferation of ALK-dependent tumor cells."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Very common)",
      "Nausea/Vomiting",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Severe Gastrointestinal Toxicity",
      "Hepatotoxicity",
      "QT Prolongation / Bradycardia",
      "Interstitial Lung Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 170,
    "drug_name": "Certolizumab Pegol",
    "pharmacologic_class": [
      "TNF Inhibitor",
      "Monoclonal Antibody Fragment (Pegylated)"
    ],
    "indications_and_moa": [
      {
        "indication": "Crohn's Disease / Rheumatoid Arthritis / Psoriasis",
        "mechanism_of_action": "Binds to and neutralizes TNF-alpha. Pegylation extends half-life. Lacks Fc region (no complement activation/ADCC)."
      }
    ],
    "common_side_effects": [
      "Upper respiratory infection",
      "Injection site pain",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB/Fungal - Boxed Warning)",
      "Malignancy (Lymphoma)",
      "Heart Failure Exacerbation",
      "Demyelinating Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 171,
    "drug_name": "Cetirizine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Urticaria",
        "mechanism_of_action": "Selectively inhibits peripheral H1 receptors. Minimally crosses BBB (less sedating than 1st gen, but more than other 2nd gens)."
      }
    ],
    "common_side_effects": [
      "Somnolence (Dose-related)",
      "Dry mouth",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Oculogyric Crisis (Rare)",
      "Aggressive reaction/Hallucinations (Rare - Pediatric)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 172,
    "drug_name": "Cetuximab",
    "pharmacologic_class": [
      "EGFR Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Head & Neck Cancer / Colorectal Cancer (KRAS wild-type)",
        "mechanism_of_action": "Binds to EGFR (HER1); blocks ligand binding; inhibits downstream signaling (RAS/RAF/MAPK); induces ADCC."
      }
    ],
    "common_side_effects": [
      "Acneiform Rash (Correlates with efficacy)",
      "Fatigue",
      "Hypomagnesemia"
    ],
    "adverse_drug_events": [
      "Infusion Reactions (Serious - Boxed Warning)",
      "Cardiopulmonary Arrest (Boxed Warning)",
      "Interstitial Lung Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 173,
    "drug_name": "Chlorambucil",
    "pharmacologic_class": [
      "Alkylating Agent (Nitrogen Mustard)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / Lymphoma",
        "mechanism_of_action": "Bifunctional alkylating agent; cross-links DNA; interferes with DNA replication and induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Bone marrow suppression",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Secondary Malignancies (Leukemia - Boxed Warning)",
      "Infertility (Azoospermia/Amenorrhea)",
      "Pulmonary Fibrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 174,
    "drug_name": "Chloramphenicol",
    "pharmacologic_class": [
      "Phenicol",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Infections (Meningitis/Typhoid - Reserve agent)",
        "mechanism_of_action": "Binds reversibly to 50S ribosomal subunit; inhibits peptidyl transferase; blocks protein synthesis (bacteriostatic)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Taste alteration"
    ],
    "adverse_drug_events": [
      "Aplastic Anemia (Idiosyncratic, Irreversible - Boxed Warning)",
      "Gray Baby Syndrome (in neonates - Circulatory collapse)",
      "Bone Marrow Suppression (Dose-related, Reversible)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 175,
    "drug_name": "Chlordiazepoxide",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic/Sedative"
    ],
    "indications_and_moa": [
      {
        "indication": "Alcohol Withdrawal / Anxiety",
        "mechanism_of_action": "Enhances GABA effects at GABA-A receptors; increases chloride influx; causes CNS depression. Long half-life active metabolites."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Ataxia",
      "Confusion"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence/Withdrawal Seizures",
      "Paradoxical Excitement"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 176,
    "drug_name": "Chloroquine",
    "pharmacologic_class": [
      "4-Aminoquinoline",
      "Antimalarial / DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Malaria Treatment/Prophylaxis / Amebiasis",
        "mechanism_of_action": "Concentrates in parasite food vacuole; inhibits polymerization of toxic heme into hemozoin; heme accumulation lyses parasite."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Pruritus (Severe in dark skin)",
      "Headache"
    ],
    "adverse_drug_events": [
      "Retinopathy (Irreversible vision loss)",
      "QT Prolongation / Cardiomyopathy",
      "Hemolysis (G6PD deficiency)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 177,
    "drug_name": "Chlorpheniramine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Urticaria",
        "mechanism_of_action": "Non-selective H1 receptor antagonist; blocks histamine effects. Significant anticholinergic activity."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Paradoxical Excitation (Children)",
      "Urinary Retention",
      "Confusion (Elderly)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 178,
    "drug_name": "Chlorpromazine",
    "pharmacologic_class": [
      "Phenothiazine (Typical Antipsychotic)",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Psychosis / Nausea / Intractable Hiccups",
        "mechanism_of_action": "Blocks dopamine D2 receptors in mesolimbic pathway and CTZ. Also blocks alpha-adrenergic, cholinergic, and histamine receptors."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Orthostatic hypotension",
      "Dry mouth",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Cholestatic Jaundice",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 179,
    "drug_name": "Chlorthalidone",
    "pharmacologic_class": [
      "Thiazide-like Diuretic",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Edema",
        "mechanism_of_action": "Inhibits Na+/Cl- reabsorption in distal convoluted tubule; increases excretion of sodium, chloride, and water. Longer duration than HCTZ."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Hypokalemia",
      "Hyperuricemia"
    ],
    "adverse_drug_events": [
      "Severe Electrolyte Imbalance (Hyponatremia, Hypokalemia)",
      "Hyperglycemia",
      "Photosensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 180,
    "drug_name": "Chlorzoxazone",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant",
      "Centrally Acting"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Musculoskeletal Pain",
        "mechanism_of_action": "Acts at spinal cord and subcortical levels; inhibits multisynaptic reflex arcs; causes sedation which contributes to muscle relaxation."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Drowsiness",
      "Red/Orange urine"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Rare but serious)",
      "GI Bleeding",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 181,
    "drug_name": "Cholecalciferol (Vitamin D3)",
    "pharmacologic_class": [
      "Vitamin D Analog",
      "Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin D Deficiency / Osteoporosis",
        "mechanism_of_action": "Converted in liver then kidney to active calcitriol; increases intestinal absorption of calcium and phosphorus; essential for bone mineralization."
      }
    ],
    "common_side_effects": [
      "None at physiologic doses",
      "Constipation (high dose)"
    ],
    "adverse_drug_events": [
      "Hypercalcemia / Hypercalciuria (Toxicity)",
      "Renal Calculi",
      "Soft Tissue Calcification"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 182,
    "drug_name": "Cholestyramine",
    "pharmacologic_class": [
      "Bile Acid Sequestrant",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Pruritus (Biliary stasis)",
        "mechanism_of_action": "Binds bile acids in the intestine forming insoluble complex; prevents enterohepatic recirculation; forces liver to consume cholesterol to make more bile acids."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Abdominal pain",
      "Bloating/Gas"
    ],
    "adverse_drug_events": [
      "Bowel Obstruction",
      "Vitamin Deficiency (A, D, E, K Malabsorption)",
      "Hyperchloremic Acidosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 183,
    "drug_name": "Ciclesonide",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Inhaled) / Allergic Rhinitis (Nasal)",
        "mechanism_of_action": "Prodrug activated by esterases in the lung/nasal mucosa to des-ciclesonide; potent glucocorticoid activity with low systemic bioavailability."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nasopharyngitis",
      "Nasal discomfort"
    ],
    "adverse_drug_events": [
      "Candida Infection",
      "Nasal Septal Perforation",
      "Adrenal Suppression (Low risk)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 184,
    "drug_name": "Ciclopirox",
    "pharmacologic_class": [
      "Antifungal",
      "Hydroxypyridone"
    ],
    "indications_and_moa": [
      {
        "indication": "Onychomycosis / Dermatomycosis",
        "mechanism_of_action": "Chelates polyvalent cations (Fe3+, Al3+); inhibits metal-dependent enzymes; disrupts cell membrane transport and energy production."
      }
    ],
    "common_side_effects": [
      "Pruritus",
      "Burning at site",
      "Erythema"
    ],
    "adverse_drug_events": [
      "Severe Contact Dermatitis",
      "Blistering"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 185,
    "drug_name": "Cidofovir",
    "pharmacologic_class": [
      "Nucleotide Analog",
      "Antiviral (CMV)"
    ],
    "indications_and_moa": [
      {
        "indication": "CMV Retinitis (AIDS)",
        "mechanism_of_action": "Incorporated into viral DNA chain; inhibits viral DNA polymerase; suppresses viral replication. Does not require viral phosphorylation."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Proteinuria",
      "Neutropenia"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Boxed Warning - Must give with Probenecid + Hydration)",
      "Neutropenia (Boxed Warning)",
      "Metabolic Acidosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 186,
    "drug_name": "Cilostazol",
    "pharmacologic_class": [
      "PDE3 Inhibitor",
      "Antiplatelet / Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Intermittent Claudication",
        "mechanism_of_action": "Inhibits Phosphodiesterase III; increases cAMP in platelets and vascular smooth muscle; causes vasodilation and inhibition of platelet aggregation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Diarrhea",
      "Palpitations",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Heart Failure Exacerbation (Boxed Warning - Contraindicated in CHF)",
      "Tachycardia",
      "Bleeding (Mild)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 187,
    "drug_name": "Cimetidine",
    "pharmacologic_class": [
      "H2 Receptor Antagonist",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Peptic Ulcer Disease",
        "mechanism_of_action": "Competitively inhibits histamine H2 receptors on gastric parietal cells; suppresses basal and meal-stimulated acid secretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dizziness",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Gynecomastia / Impotence (Anti-androgenic effect)",
      "CNS Effects (Confusion - especially elderly/renal failure)",
      "Potent CYP450 Inhibition (Many drug interactions)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 188,
    "drug_name": "Cinacalcet",
    "pharmacologic_class": [
      "Calcimimetic",
      "Parathyroid Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Secondary Hyperparathyroidism (CKD) / Parathyroid Carcinoma",
        "mechanism_of_action": "Increases sensitivity of calcium-sensing receptors on the parathyroid gland to extracellular calcium; lowers PTH secretion."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Myalgia"
    ],
    "adverse_drug_events": [
      "Hypocalcemia (Seizures, Arrhythmias)",
      "Upper GI Bleeding",
      "Adynamic Bone Disease (if PTH suppressed too low)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 189,
    "drug_name": "Ciprofloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "UTI / Pneumonia / Intra-abdominal Infections",
        "mechanism_of_action": "Inhibits DNA gyrase (Topoisomerase II) and Topoisomerase IV; prevents bacterial DNA replication and transcription."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Tendinitis / Tendon Rupture (Boxed Warning)",
      "Peripheral Neuropathy (Boxed Warning)",
      "CNS Effects (Seizures/Psychosis)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 190,
    "drug_name": "Cisatracurium",
    "pharmacologic_class": [
      "Nondepolarizing Neuromuscular Blocker",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / ICU Paralysis",
        "mechanism_of_action": "Competes with Acetylcholine for receptors at motor end plate; Hofmann elimination (organ-independent); potent isomer of atracurium with less histamine release."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Prolonged Paralysis (Myopathy)",
      "Anaphylaxis",
      "Bronchospasm (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 191,
    "drug_name": "Cisplatin",
    "pharmacologic_class": [
      "Platinum Coordination Complex",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Testicular / Ovarian / Bladder Cancer",
        "mechanism_of_action": "Forms inter- and intrastrand DNA cross-links; inhibits DNA replication/transcription; cell cycle non-specific."
      }
    ],
    "common_side_effects": [
      "Severe Nausea/Vomiting (Highly emetogenic)",
      "Alopecia",
      "Electrolyte Loss (Mg, K)"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Dose-limiting)",
      "Ototoxicity (Cumulative/Permanent)",
      "Peripheral Neuropathy",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 192,
    "drug_name": "Citalopram",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression",
        "mechanism_of_action": "Selectively inhibits serotonin reuptake in the synaptic cleft; increases serotonin availability; minimal effect on NE/DA."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dry mouth",
      "Somnolence",
      "Sexual Dysfunction"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Dose-dependent - Max 40mg/day generally, 20mg for elderly)",
      "Serotonin Syndrome",
      "Suicidality (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 193,
    "drug_name": "Clarithromycin",
    "pharmacologic_class": [
      "Macrolide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "H. pylori / Respiratory Infections / MAC prophylaxis",
        "mechanism_of_action": "Binds to 50S ribosomal subunit; inhibits protein synthesis. Potent CYP3A4 inhibitor."
      }
    ],
    "common_side_effects": [
      "Dysgeusia (Metallic taste)",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes",
      "Hepatotoxicity",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 194,
    "drug_name": "Clindamycin",
    "pharmacologic_class": [
      "Lincosamide",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Skin Infections / Anaerobic Infections",
        "mechanism_of_action": "Binds to 50S ribosomal subunit; inhibits protein synthesis. Active against Gram-positives (MRSA) and Anaerobes."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea (Highest risk antibiotic - Boxed Warning)",
      "Severe Skin Reactions (SJS)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 195,
    "drug_name": "Clobazam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Lennox-Gastaut Syndrome (Seizures)",
        "mechanism_of_action": "Potentiates GABAergic neurotransmission at GABA-A receptor; 1,5-benzodiazepine structure (less sedative than 1,4-benzodiazepines)."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Drooling",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Serious Skin Reactions (SJS/TEN)",
      "Respiratory Depression",
      "Dependence/Withdrawal"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 196,
    "drug_name": "Clobetasol Propionate",
    "pharmacologic_class": [
      "Super-High Potency Corticosteroid",
      "Topical Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Psoriasis / Dermatoses",
        "mechanism_of_action": "Potent vasoconstrictive and anti-inflammatory activity; inhibits leukocyte migration and mediator synthesis. Class I (Strongest) topical steroid."
      }
    ],
    "common_side_effects": [
      "Skin atrophy",
      "Stinging",
      "Telangiectasia"
    ],
    "adverse_drug_events": [
      "HPA Axis Suppression (Systemic absorption)",
      "Cushing's Syndrome",
      "Pustular Psoriasis (Rebound)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 197,
    "drug_name": "Clofarabine",
    "pharmacologic_class": [
      "Purine Nucleoside Analog",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Lymphoblastic Leukemia (Pediatric relapsed/refractory)",
        "mechanism_of_action": "Inhibits ribonucleotide reductase and DNA polymerase; depletes dNTP pools; inhibits DNA synthesis/repair; induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Febrile Neutropenia",
      "Palmar-Plantar Erythrodysesthesia"
    ],
    "adverse_drug_events": [
      "Capillary Leak Syndrome / SIRS",
      "Severe Hepatotoxicity",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 198,
    "drug_name": "Clofazimine",
    "pharmacologic_class": [
      "Riminophenazine Dye",
      "Antimycobacterial / Antileprosy"
    ],
    "indications_and_moa": [
      {
        "indication": "Leprosy (Hansen's Disease) / MDR-TB",
        "mechanism_of_action": "Binds to mycobacterial DNA; generates reactive oxygen species; disrupts membrane function. Anti-inflammatory properties."
      }
    ],
    "common_side_effects": [
      "Skin Discoloration (Red-brown pigmentation - reversible but slow)",
      "Dry skin",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Crystal Deposition in GI Tract (Enteropathy/Obstruction)",
      "QT Prolongation",
      "Splenic Infarction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 199,
    "drug_name": "Clomiphene Citrate",
    "pharmacologic_class": [
      "Selective Estrogen Receptor Modulator (SERM)",
      "Ovulation Stimulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Ovulatory Dysfunction / Infertility",
        "mechanism_of_action": "Blocks estrogen receptors in the hypothalamus; inhibits negative feedback; increases GnRH, FSH, and LH secretion; induces ovulation."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Ovarian enlargement",
      "Abdominal bloating"
    ],
    "adverse_drug_events": [
      "Ovarian Hyperstimulation Syndrome (OHSS)",
      "Multiple Pregnancies",
      "Visual Disturbances (Blurring/Spots)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 200,
    "drug_name": "Clomipramine",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (TCA)",
      "Anti-obsessional Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Obsessive-Compulsive Disorder (OCD)",
        "mechanism_of_action": "Potent inhibitor of serotonin reuptake (stronger than other TCAs); also inhibits norepinephrine reuptake and blocks H1, alpha-1, and muscarinic receptors."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Somnolence",
      "Sexual Dysfunction"
    ],
    "adverse_drug_events": [
      "Seizures (Dose-dependent - relatively high risk among TCAs)",
      "QT Prolongation / Arrhythmias",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 201,
    "drug_name": "Clonazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Seizure Disorders (Lennox-Gastaut, Akinetic, Myoclonic)",
        "mechanism_of_action": "Enhances the inhibitory effect of GABA by binding to the benzodiazepine site on the GABA-A receptor; increases chloride influx; suppresses the spread of seizure activity."
      },
      {
        "indication": "Panic Disorder",
        "mechanism_of_action": "Potentiates GABAergic inhibition in the CNS to reduce anxiety and panic attacks."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Ataxia",
      "Dizziness",
      "Depression"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence / Withdrawal Seizures",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 202,
    "drug_name": "Clonidine",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Central Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Stimulates alpha-2 adrenergic receptors in the brainstem (nucleus tractus solitarius); reduces sympathetic outflow from the CNS; decreases peripheral resistance and heart rate."
      },
      {
        "indication": "ADHD (Extended Release)",
        "mechanism_of_action": "Modulates norepinephrine release in the prefrontal cortex; improves attention and impulse control."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Sedation",
      "Dizziness",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Rebound Hypertension (upon abrupt cessation)",
      "AV Block / Bradycardia",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 203,
    "drug_name": "Clopidogrel",
    "pharmacologic_class": [
      "P2Y12 Inhibitor",
      "Antiplatelet Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Coronary Syndrome / MI / Stroke Prevention",
        "mechanism_of_action": "Prodrug activated by CYP2C19; irreversibly inhibits the binding of ADP to the P2Y12 receptor on platelets; prevents activation of the GPIIb/IIIa complex and platelet aggregation."
      }
    ],
    "common_side_effects": [
      "Bleeding (minor)",
      "Bruising",
      "Rash"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage",
      "Thrombotic Thrombocytopenic Purpura (TTP)",
      "Diminished efficacy in CYP2C19 poor metabolizers (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 204,
    "drug_name": "Clorazepate",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Alcohol Withdrawal / Seizures",
        "mechanism_of_action": "Prodrug decarboxylated in the stomach to desmethyldiazepam (active); enhances GABA-A receptor activity; produces CNS depression."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dizziness",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Dependence / Withdrawal",
      "Paradoxical Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 205,
    "drug_name": "Clotrimazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Fungal Skin Infections / Candidiasis",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; prevents conversion of lanosterol to ergosterol; disrupts fungal cell membrane integrity."
      }
    ],
    "common_side_effects": [
      "Erythema",
      "Stinging",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Allergic Contact Dermatitis",
      "Elevated Liver Enzymes (Oral lozenge use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 206,
    "drug_name": "Clozapine",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Treatment-Resistant Schizophrenia",
        "mechanism_of_action": "Antagonist at D1, D4, 5-HT2A, alpha-adrenergic, cholinergic, and histaminergic receptors. Weak D2 antagonism reduces EPS risk."
      }
    ],
    "common_side_effects": [
      "Sialorrhea (Drooling)",
      "Sedation",
      "Weight gain",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Severe Neutropenia (Boxed Warning - REMS Program)",
      "Myocarditis / Cardiomyopathy (Boxed Warning)",
      "Seizures (Dose-dependent - Boxed Warning)",
      "Orthostatic Hypotension (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 207,
    "drug_name": "Codeine",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Antitussive / Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Mild to Moderate Pain / Cough Suppression",
        "mechanism_of_action": "Prodrug converted to morphine by CYP2D6; binds to mu-opioid receptors in CNS to alter pain perception and suppress cough reflex."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Drowsiness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Risk in Ultra-Rapid Metabolizers - Boxed Warning)",
      "Addiction / Misuse",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 208,
    "drug_name": "Coenzyme Q10 (Ubiquinone)",
    "pharmacologic_class": [
      "Dietary Supplement",
      "Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "CoQ10 Deficiency / Statin-Induced Myopathy (Off-label)",
        "mechanism_of_action": "Essential cofactor in the mitochondrial electron transport chain (ATP production); potent antioxidant and membrane stabilizer."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Appetite loss"
    ],
    "adverse_drug_events": [
      "Decreased Warfarin Efficacy (Structurally similar to Vit K)",
      "Hypotension (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 209,
    "drug_name": "Colchicine",
    "pharmacologic_class": [
      "Anti-inflammatory (Microtubule Inhibitor)",
      "Antigout Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Gout Flares / Familial Mediterranean Fever",
        "mechanism_of_action": "Binds to tubulin and prevents microtubule polymerization; inhibits neutrophil chemotaxis, adhesion, and activation at sites of inflammation."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Dose-limiting)",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Aplastic anemia)",
      "Neuromyopathy",
      "Multi-organ Failure (Overdose is often fatal)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 210,
    "drug_name": "Colesevelam",
    "pharmacologic_class": [
      "Bile Acid Sequestrant",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Type 2 Diabetes",
        "mechanism_of_action": "Non-absorbed polymer that binds bile acids in the intestine; increases hepatic clearance of LDL cholesterol; mechanism in diabetes unknown."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Dyspepsia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Bowel Obstruction",
      "Hypertriglyceridemia (Contraindicated if TG >500)",
      "Pancreatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 211,
    "drug_name": "Colestipol",
    "pharmacologic_class": [
      "Bile Acid Sequestrant",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia",
        "mechanism_of_action": "Binds bile acids in the intestine to form an insoluble complex; prevents reabsorption; lowers LDL cholesterol."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Abdominal pain",
      "Flatulence"
    ],
    "adverse_drug_events": [
      "Fecal Impaction",
      "Vitamin Malabsorption (A, D, E, K)",
      "Hyperchloremic Acidosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 212,
    "drug_name": "Colistin (Colistimethate)",
    "pharmacologic_class": [
      "Polymyxin Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Multi-Drug Resistant Gram-Negative Infections",
        "mechanism_of_action": "Acts as a cationic detergent; disrupts the bacterial outer membrane by interacting with lipopolysaccharides; increases permeability and causes cell death."
      }
    ],
    "common_side_effects": [
      "Paresthesia",
      "Dizziness",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Acute Tubular Necrosis - Dose-dependent)",
      "Neurotoxicity (Neuromuscular blockade / Apnea)",
      "Bronchoconstriction (Inhaled form)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 213,
    "drug_name": "Combined Oral Contraceptive",
    "pharmacologic_class": [
      "Estrogen + Progestin",
      "Contraceptive"
    ],
    "indications_and_moa": [
      {
        "indication": "Prevention of Pregnancy",
        "mechanism_of_action": "Suppresses gonadotropins (FSH/LH); inhibits ovulation; thickens cervical mucus; alters endometrium to prevent implantation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Breast tenderness",
      "Breakthrough bleeding"
    ],
    "adverse_drug_events": [
      "Thromboembolism (DVT/PE/Stroke - Boxed Warning for smokers >35)",
      "Hypertension",
      "Hepatic Adenoma"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 214,
    "drug_name": "Cotrimoxazole (TMP-SMX)",
    "pharmacologic_class": [
      "Sulfonamide + Trimethoprim",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "UTI / PCP Pneumonia / MRSA Skin Infections",
        "mechanism_of_action": "Sequential blockade of bacterial folate synthesis: Sulfamethoxazole inhibits dihydropteroate synthase; Trimethoprim inhibits dihydrofolate reductase."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Rash",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "Stevens-Johnson Syndrome / TEN",
      "Hyperkalemia (High dose)",
      "Bone Marrow Suppression / Hemolysis (G6PD deficiency)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 215,
    "drug_name": "Crizotinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (TKI)",
      "ALK/ROS1 Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "ALK or ROS1-positive Metastatic NSCLC",
        "mechanism_of_action": "Inhibits receptor tyrosine kinases including ALK, HGFR (c-Met), and ROS1; blocks downstream signaling and inhibits tumor cell proliferation."
      }
    ],
    "common_side_effects": [
      "Visual Disturbances (Trails of light)",
      "Nausea/Vomiting",
      "Diarrhea",
      "Edema"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe/Fatal)",
      "Interstitial Lung Disease / Pneumonitis",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 216,
    "drug_name": "Cromolyn Sodium",
    "pharmacologic_class": [
      "Mast Cell Stabilizer"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / Allergic Rhinitis / Mastocytosis",
        "mechanism_of_action": "Inhibits degranulation of sensitized mast cells; prevents release of histamine and leukotrienes after antigen exposure."
      }
    ],
    "common_side_effects": [
      "Transient bronchospasm (Inhaled)",
      "Nasal stinging",
      "Unpleasant taste"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Eosinophilic Pneumonia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 217,
    "drug_name": "Cryoprecipitate",
    "pharmacologic_class": [
      "Blood Product",
      "Coagulation Factor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypofibrinogenemia / von Willebrand Disease / Hemophilia A",
        "mechanism_of_action": "Provides concentrated Fibrinogen, Factor VIII, von Willebrand Factor, Factor XIII, and Fibronectin to restore hemostasis."
      }
    ],
    "common_side_effects": [
      "Fever",
      "Chills",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Transfusion-Transmitted Infections",
      "Transfusion-Related Acute Lung Injury (TRALI)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 218,
    "drug_name": "Cyanocobalamin (Vitamin B12)",
    "pharmacologic_class": [
      "Vitamin",
      "Hematopoietic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin B12 Deficiency / Pernicious Anemia",
        "mechanism_of_action": "Essential coenzyme for DNA synthesis and myelin maintenance; converts homocysteine to methionine and methylmalonyl-CoA to succinyl-CoA."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypokalemia (severe upon treatment initiation for megaloblastic anemia)",
      "Anaphylaxis (rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 219,
    "drug_name": "Cyclobenzaprine",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant",
      "Centrally Acting"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Musculoskeletal Spasm",
        "mechanism_of_action": "Acts at the brainstem level to reduce tonic somatic motor activity; structurally similar to tricyclic antidepressants."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dry mouth",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "Arrhythmias / Heart Block",
      "Anticholinergic Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 220,
    "drug_name": "Cyclophosphamide",
    "pharmacologic_class": [
      "Alkylating Agent (Nitrogen Mustard)",
      "Antineoplastic / Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Lymphoma / Breast Cancer / Autoimmune Diseases",
        "mechanism_of_action": "Activated by CYP450 to phosphoramide mustard; cross-links DNA; inhibits DNA replication and induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Nausea/Vomiting",
      "Leukopenia"
    ],
    "adverse_drug_events": [
      "Hemorrhagic Cystitis (due to acrolein metabolite)",
      "Myelosuppression",
      "Secondary Malignancies (Bladder cancer/Leukemia)",
      "Infertility"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 221,
    "drug_name": "Cycloserine",
    "pharmacologic_class": [
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "Active Pulmonary Tuberculosis (Second-line)",
        "mechanism_of_action": "Inhibits cell wall synthesis by competing with D-alanine for incorporation into peptidoglycan (inhibits alanine racemase and D-alanyl-D-alanine ligase)."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Headache",
      "Tremor"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Toxicity (Psychosis, Depression, Seizures - Dose-related)",
      "Suicidal Tendencies"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 222,
    "drug_name": "Cyclosporine",
    "pharmacologic_class": [
      "Calcineurin Inhibitor",
      "Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Transplant Rejection Prophylaxis / Psoriasis / RA",
        "mechanism_of_action": "Binds to cyclophilin; inhibits calcineurin; prevents dephosphorylation of NF-AT; blocks IL-2 transcription and T-cell activation."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Hirsutism",
      "Gingival Hyperplasia",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Dose-dependent)",
      "Neurotoxicity (Seizures/PRES)",
      "Increased Malignancy Risk (Lymphoma/Skin)",
      "Infection Susceptibility"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 223,
    "drug_name": "Cyproheptadine",
    "pharmacologic_class": [
      "H1 Antagonist / Serotonin Antagonist",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Conditions / Serotonin Syndrome (Off-label)",
        "mechanism_of_action": "Potent H1 receptor and 5-HT2A receptor antagonist; blocks histamine and serotonin activity; also has anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Weight gain (Appetite stimulant)",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "CNS Depression",
      "Urinary Retention",
      "Excitation (in children)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 224,
    "drug_name": "Cytarabine",
    "pharmacologic_class": [
      "Antimetabolite (Pyrimidine Analog)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "AML / ALL / CML",
        "mechanism_of_action": "Converted to Ara-CTP; inhibits DNA polymerase; incorporated into DNA causing chain termination; S-phase specific."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Mucositis",
      "Rash (Cytarabine syndrome)"
    ],
    "adverse_drug_events": [
      "Cerebellar Toxicity (High dose - Ataxia/Slurred speech)",
      "Severe Myelosuppression",
      "Chemical Conjunctivitis (High dose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 225,
    "drug_name": "Dabigatran",
    "pharmacologic_class": [
      "Direct Thrombin Inhibitor",
      "Direct Oral Anticoagulant (DOAC)"
    ],
    "indications_and_moa": [
      {
        "indication": "Stroke Prevention in AF / DVT/PE Treatment",
        "mechanism_of_action": "Directly and reversibly inhibits free and clot-bound thrombin (Factor IIa); prevents conversion of fibrinogen to fibrin."
      }
    ],
    "common_side_effects": [
      "Dyspepsia / Gastritis",
      "Bleeding (minor)",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (GI/Intracranial)",
      "Spinal/Epidural Hematoma (Boxed Warning)",
      "Thrombosis upon premature discontinuation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 226,
    "drug_name": "Dabrafenib",
    "pharmacologic_class": [
      "BRAF Inhibitor",
      "Kinase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Melanoma (BRAF V600E mutation)",
        "mechanism_of_action": "Inhibits mutated BRAF kinase; blocks the MAPK signaling pathway; inhibits tumor cell proliferation."
      }
    ],
    "common_side_effects": [
      "Pyrexia (Fever)",
      "Hyperkeratosis",
      "Fatigue",
      "Headache"
    ],
    "adverse_drug_events": [
      "New Primary Malignancies (Cutaneous Squamous Cell Carcinoma)",
      "Serious Febrile Reactions",
      "Hemorrhage"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 227,
    "drug_name": "Dacarbazine",
    "pharmacologic_class": [
      "Alkylating Agent (Triazene)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Melanoma / Hodgkin's Lymphoma",
        "mechanism_of_action": "Activated by liver microsomes to MTIC; acts as an alkylating agent; cross-links DNA; inhibits RNA and protein synthesis."
      }
    ],
    "common_side_effects": [
      "Severe Nausea/Vomiting",
      "Anorexia",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Leukopenia/Thrombocytopenia)",
      "Hepatic Necrosis / Veno-occlusive Disease",
      "Photosensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 228,
    "drug_name": "Daclatasvir",
    "pharmacologic_class": [
      "HCV NS5A Inhibitor",
      "Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis C (Genotypes 1, 3)",
        "mechanism_of_action": "Inhibits the NS5A protein essential for viral replication and virion assembly."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fatigue",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation (Boxed Warning)",
      "Bradycardia (when used with Sofosbuvir + Amiodarone)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 229,
    "drug_name": "Dactinomycin (Actinomycin-D)",
    "pharmacologic_class": [
      "Antineoplastic Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Wilms Tumor / Rhabdomyosarcoma",
        "mechanism_of_action": "Intercalates DNA; inhibits DNA-dependent RNA polymerase. (Note: Same as ID 10, listed for completeness of BATCH 3 list)"
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Alopecia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Veno-occlusive Disease (VOD)",
      "Myelosuppression",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 230,
    "drug_name": "Dalbavancin",
    "pharmacologic_class": [
      "Lipoglycopeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Bacterial Skin and Skin Structure Infections (ABSSSI)",
        "mechanism_of_action": "Interferes with cell wall synthesis by binding to D-alanyl-D-alanine; prevents cross-linking. Long half-life allows single or two-dose regimen."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Red Man Syndrome (Rapid infusion)",
      "ALT Elevation",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 231,
    "drug_name": "Danazol",
    "pharmacologic_class": [
      "Synthetic Androgen",
      "Gonadotropin Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Endometriosis / Hereditary Angioedema",
        "mechanism_of_action": "Suppresses pituitary-ovarian axis; inhibits FSH/LH output; inhibits enzymes of steroidogenesis; increases C1 esterase inhibitor levels."
      }
    ],
    "common_side_effects": [
      "Weight gain",
      "Acne",
      "Hirsutism",
      "Voice deepening"
    ],
    "adverse_drug_events": [
      "Hepatic Adenoma / Peliosis Hepatis",
      "Androgenic Effects (Virilization - irreversible)",
      "Thromboembolism"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 232,
    "drug_name": "Dantrolene",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant (Direct Acting)"
    ],
    "indications_and_moa": [
      {
        "indication": "Malignant Hyperthermia / Spasticity",
        "mechanism_of_action": "Dissociates excitation-contraction coupling by inhibiting calcium release from the sarcoplasmic reticulum (Ryanodine receptor antagonist)."
      }
    ],
    "common_side_effects": [
      "Muscle weakness",
      "Drowsiness",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Fatal Hepatotoxicity (Boxed Warning)",
      "Respiratory Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 233,
    "drug_name": "Dapagliflozin",
    "pharmacologic_class": [
      "SGLT2 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Heart Failure (HFrEF) / CKD",
        "mechanism_of_action": "Inhibits SGLT2 in the proximal renal tubule; reduces glucose reabsorption; promotes glucosuria and natriuresis."
      }
    ],
    "common_side_effects": [
      "Genital Mycotic Infections",
      "UTI",
      "Increased Urination"
    ],
    "adverse_drug_events": [
      "Diabetic Ketoacidosis (DKA)",
      "Fournier's Gangrene",
      "Volume Depletion / Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 234,
    "drug_name": "Dapsone",
    "pharmacologic_class": [
      "Sulfone Antibiotic",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Leprosy / Dermatitis Herpetiformis",
        "mechanism_of_action": "Inhibits bacterial synthesis of dihydrofolic acid (similar to sulfonamides). Anti-inflammatory mechanism involves inhibition of neutrophil migration/function."
      }
    ],
    "common_side_effects": [
      "Hemolysis (Dose-related)",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Methemoglobinemia",
      "Agranulocytosis",
      "Dapsone Hypersensitivity Syndrome (DRESS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 235,
    "drug_name": "Daptomycin",
    "pharmacologic_class": [
      "Cyclic Lipopeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Staph. aureus Bacteremia / ABSSSI (MRSA)",
        "mechanism_of_action": "Binds to bacterial cell membranes in the presence of calcium; causes rapid depolarization; inhibits DNA/RNA/protein synthesis. Not active in lungs (inactivated by surfactant)."
      }
    ],
    "common_side_effects": [
      "Injection site reaction",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis (Monitor CPK)",
      "Eosinophilic Pneumonia",
      "Peripheral Neuropathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 236,
    "drug_name": "Darifenacin",
    "pharmacologic_class": [
      "Anticholinergic (M3 Selective)",
      "Urinary Antispasmodic"
    ],
    "indications_and_moa": [
      {
        "indication": "Overactive Bladder (OAB)",
        "mechanism_of_action": "Selectively blocks M3 muscarinic receptors in the bladder; reduces detrusor muscle contractions; increases bladder capacity."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Dry eyes"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Angioedema",
      "CNS Effects (Low risk due to selectivity)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 237,
    "drug_name": "Darunavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 protease; prevents cleavage of Gag-Pol polyproteins; results in formation of immature, non-infectious viral particles. Must be boosted (Ritonavir/Cobicistat)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Headache",
      "Rash"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions (SJS/TEN - Sulfonamide moiety)",
      "Hepatotoxicity",
      "Hyperglycemia / Lipid abnormalities"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 238,
    "drug_name": "Dasatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (TKI)",
      "BCR-ABL Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "CML / Ph+ ALL",
        "mechanism_of_action": "Inhibits BCR-ABL kinase, SRC family kinases, and others; inhibits proliferation of leukemic cells."
      }
    ],
    "common_side_effects": [
      "Fluid retention",
      "Diarrhea",
      "Headache",
      "Rash"
    ],
    "adverse_drug_events": [
      "Pleural Effusion (Common)",
      "Pulmonary Arterial Hypertension (PAH)",
      "QT Prolongation",
      "Myelosuppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 239,
    "drug_name": "Daunorubicin",
    "pharmacologic_class": [
      "Anthracycline",
      "Antineoplastic Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "AML / ALL",
        "mechanism_of_action": "Intercalates DNA; inhibits topoisomerase II; generates free radicals causing DNA damage."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Nausea/Vomiting",
      "Red urine (harmless)"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (Dose-dependent, Irreversible HF)",
      "Severe Myelosuppression",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 240,
    "drug_name": "Decitabine",
    "pharmacologic_class": [
      "DNA Methyltransferase Inhibitor",
      "Hypomethylating Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "MDS",
        "mechanism_of_action": "Incorporated into DNA; inhibits DNA methyltransferase; causes hypomethylation; restores suppressor gene function; induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Fever",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Neutropenia/Thrombocytopenia)",
      "Pneumonia / Sepsis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 241,
    "drug_name": "Deferasirox",
    "pharmacologic_class": [
      "Iron Chelator (Oral)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Iron Overload",
        "mechanism_of_action": "Tridentate ligand that binds iron with high affinity (2:1 ratio); promotes excretion of iron in feces."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Abdominal pain",
      "Rash"
    ],
    "adverse_drug_events": [
      "Renal Failure (Boxed Warning)",
      "Hepatic Failure (Boxed Warning)",
      "GI Hemorrhage (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 242,
    "drug_name": "Deferiprone",
    "pharmacologic_class": [
      "Iron Chelator (Oral)"
    ],
    "indications_and_moa": [
      {
        "indication": "Transfusional Iron Overload (Thalassemia)",
        "mechanism_of_action": "Bidentate ligand that binds iron (3:1 ratio); excreted in urine."
      }
    ],
    "common_side_effects": [
      "Chromaturia (Red-brown urine)",
      "Nausea",
      "Arthralgia"
    ],
    "adverse_drug_events": [
      "Agranulocytosis / Neutropenia (Boxed Warning)",
      "Hepatic Enzyme Elevation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 243,
    "drug_name": "Deferoxamine",
    "pharmacologic_class": [
      "Iron Chelator (Parenteral)"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Iron Toxicity / Chronic Iron Overload",
        "mechanism_of_action": "Chelates iron to form ferrioxamine; excreted renally."
      }
    ],
    "common_side_effects": [
      "Injection site reaction",
      "Vin rose urine",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Ocular/Auditory Toxicity",
      "Yersinia Infection Susceptibility",
      "ARDS (High dose/Rapid infusion)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 244,
    "drug_name": "Deflazacort",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Duchenne Muscular Dystrophy (DMD)",
        "mechanism_of_action": "Prodrug converted to 21-desacetyldeflazacort; anti-inflammatory and immunosuppressive effects; preserves muscle strength/function."
      }
    ],
    "common_side_effects": [
      "Cushingoid appearance",
      "Weight gain",
      "Increased appetite"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Cataracts",
      "Osteoporosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 245,
    "drug_name": "Degarelix",
    "pharmacologic_class": [
      "GnRH Antagonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Advanced Prostate Cancer",
        "mechanism_of_action": "Reversibly binds to GnRH receptors in the pituitary; blocks LH/FSH release; rapidly lowers testosterone (no initial flare)."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Hot flashes",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 246,
    "drug_name": "Delamanid",
    "pharmacologic_class": [
      "Nitroimidazole",
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "MDR-TB (Pulmonary)",
        "mechanism_of_action": "Inhibits synthesis of mycolic acid (cell wall component); activated by bacterial nitroreductase (Ddn); generates reactive intermediates."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Paresthesia"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 247,
    "drug_name": "Denosumab",
    "pharmacologic_class": [
      "RANK Ligand Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis / Bone Metastases",
        "mechanism_of_action": "Binds to RANKL; prevents interaction with RANK on osteoclasts; inhibits osteoclast formation, function, and survival; decreases bone resorption."
      }
    ],
    "common_side_effects": [
      "Back pain",
      "Musculoskeletal pain",
      "Cystitis"
    ],
    "adverse_drug_events": [
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures",
      "Severe Hypocalcemia",
      "Rebound Vertebral Fractures (after discontinuation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 248,
    "drug_name": "Desflurane",
    "pharmacologic_class": [
      "Inhalation Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia (Maintenance)",
        "mechanism_of_action": "Potentiates inhibitory GABA-A and Glycine channels; inhibits excitatory NMDA channels. Rapid onset/offset due to low solubility."
      }
    ],
    "common_side_effects": [
      "Coughing / Airway irritation (Pungent)",
      "Nausea/Vomiting",
      "Tachycardia (during induction)"
    ],
    "adverse_drug_events": [
      "Malignant Hyperthermia",
      "Respiratory Depression",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 249,
    "drug_name": "Desipramine",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (Secondary Amine)"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression",
        "mechanism_of_action": "Potent inhibitor of norepinephrine reuptake; weak serotonin reuptake inhibition. Less anticholinergic than tertiary amines."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Arrhythmias / QT Prolongation",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 250,
    "drug_name": "Desloratadine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Urticaria",
        "mechanism_of_action": "Selective peripheral H1 receptor antagonist; active metabolite of loratadine; minimal CNS penetration."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Fatigue",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Seizures (Very rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 251,
    "drug_name": "Desmopressin",
    "pharmacologic_class": [
      "Vasopressin Analog",
      "Antidiuretic Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Central Diabetes Insipidus / Nocturnal Enuresis",
        "mechanism_of_action": "Selective agonist at V2 receptors in renal collecting ducts; increases water reabsorption; reduces urine volume and increases osmolality."
      },
      {
        "indication": "Hemophilia A / von Willebrand Disease (Type 1)",
        "mechanism_of_action": "Stimulates release of Factor VIII and von Willebrand Factor from endothelial cells."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Hyponatremia",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Water Intoxication / Severe Hyponatremia (Seizures)",
      "Thrombosis (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 252,
    "drug_name": "Desvenlafaxine",
    "pharmacologic_class": [
      "SNRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Active metabolite of venlafaxine; inhibits neuronal reuptake of serotonin and norepinephrine; potentiates neurotransmitter activity in the CNS."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Insomnia",
      "Hyperhidrosis"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Hypertension / Bleeding Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 253,
    "drug_name": "Dexamethasone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Conditions / Cerebral Edema / Oncology",
        "mechanism_of_action": "Potent long-acting glucocorticoid; inhibits multiple inflammatory cytokines; suppresses neutrophil migration; stabilizes cell membranes."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Fluid retention",
      "Increased appetite",
      "Mood changes"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Hyperglycemia / Diabetes",
      "Peptic Ulceration",
      "Psychosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 254,
    "drug_name": "Dexlansoprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Erosive Esophagitis",
        "mechanism_of_action": "Irreversibly inhibits H+/K+ ATPase (proton pump) in gastric parietal cells; blocks final step of acid secretion. Dual delayed-release formulation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Abdominal pain",
      "Nausea",
      "Flatulence"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Bone Fractures (Long-term use)",
      "Hypomagnesemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 255,
    "drug_name": "Dexmedetomidine",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Sedative"
    ],
    "indications_and_moa": [
      {
        "indication": "ICU Sedation / Procedural Sedation",
        "mechanism_of_action": "Selective alpha-2 agonist in the locus coeruleus; inhibits norepinephrine release; produces sedation resembling natural sleep (arousable)."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Hypotension",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Severe Bradycardia / Sinus Arrest",
      "Transient Hypertension (Loading dose)",
      "Respiratory Depression (Minimal compared to other sedatives)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 256,
    "drug_name": "Dexmethylphenidate",
    "pharmacologic_class": [
      "CNS Stimulant",
      "ADHD Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "ADHD",
        "mechanism_of_action": "d-threo-enantiomer of methylphenidate; blocks reuptake of norepinephrine and dopamine into presynaptic neurons; increases extraneuronal catecholamines."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Decreased appetite",
      "Abdominal pain",
      "Anxiety"
    ],
    "adverse_drug_events": [
      "Abuse / Dependence (Boxed Warning)",
      "Psychosis / Mania",
      "Cardiovascular Events (HTN, Tachycardia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 257,
    "drug_name": "Dextromethorphan",
    "pharmacologic_class": [
      "Antitussive",
      "NMDA Antagonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Cough Suppression",
        "mechanism_of_action": "Acts on the cough center in the medulla; elevates threshold for coughing. NMDA receptor antagonist (high doses)."
      },
      {
        "indication": "Pseudobulbar Affect (with Quinidine)",
        "mechanism_of_action": "Modulates glutamate signaling via sigma-1 and NMDA receptors."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "Abuse / Dissociative Effects (High doses)",
      "Respiratory Depression (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 258,
    "drug_name": "Dextrose",
    "pharmacologic_class": [
      "Carbohydrate",
      "Fluid/Nutrient Replenisher"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypoglycemia / Fluid Replacement",
        "mechanism_of_action": "Provides calories; restores blood glucose levels; minimizes glycogen depletion; acts as an osmotic diuretic (concentrated solutions)."
      }
    ],
    "common_side_effects": [
      "Hyperglycemia",
      "Injection site phlebitis"
    ],
    "adverse_drug_events": [
      "Hyperosmolar Syndrome",
      "Fluid Overload / Pulmonary Edema",
      "Hypokalemia (due to intracellular shift)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 259,
    "drug_name": "Diazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic/Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Muscle Spasm / Seizures / Alcohol Withdrawal",
        "mechanism_of_action": "Enhances GABAergic inhibition by binding to GABA-A receptors; increases chloride channel opening frequency. Long-acting metabolites."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Ataxia",
      "Fatigue",
      "Muscle weakness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence / Withdrawal",
      "Paradoxical Excitement"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 260,
    "drug_name": "Diclofenac",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain / Arthritis / Migraine",
        "mechanism_of_action": "Inhibits COX-1 and COX-2; reduces prostaglandin synthesis. Potent anti-inflammatory and analgesic effects."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Nausea",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Hepatotoxicity (Elevated transaminases)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 261,
    "drug_name": "Dicloxacillin",
    "pharmacologic_class": [
      "Penicillinase-Resistant Penicillin",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Staphylococcal Infections (MSSA)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis; resistant to hydrolysis by Staphylococcal penicillinase."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Clostridioides difficile-associated Diarrhea",
      "Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 262,
    "drug_name": "Dicyclomine",
    "pharmacologic_class": [
      "Anticholinergic / Antispasmodic",
      "GI Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Irritable Bowel Syndrome (IBS)",
        "mechanism_of_action": "Blocks muscarinic receptors on smooth muscle; reduces GI motility and spasms. Also has direct smooth muscle relaxant effect."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Dizziness",
      "Blurred vision",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Paralytic Ileus",
      "Heat Stroke (Anhidrosis)",
      "Psychosis / Confusion"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 263,
    "drug_name": "Dienogest",
    "pharmacologic_class": [
      "Progestin",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Endometriosis / Contraception (with Estradiol)",
        "mechanism_of_action": "Binds to progesterone receptors; induces endometrial atrophy; inhibits ovulation (anti-gonadotropic). Possesses anti-androgenic activity."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Breast tenderness",
      "Acne",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Depression",
      "Thromboembolism (when combined with estrogen)",
      "Bone Mineral Density Loss (Long-term)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 264,
    "drug_name": "Diethylcarbamazine",
    "pharmacologic_class": [
      "Anthelmintic"
    ],
    "indications_and_moa": [
      {
        "indication": "Lymphatic Filariasis / Loiasis / Tropical Eosinophilia",
        "mechanism_of_action": "Sensitizes microfilariae to phagocytosis; inhibits arachidonic acid metabolism in filaria; causes immobilization."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Dizziness",
      "Fever (Mazzotti reaction)"
    ],
    "adverse_drug_events": [
      "Mazzotti Reaction (Severe allergic reaction to dying parasites)",
      "Encephalopathy (in Loa loa heavy infection)",
      "Visual changes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 265,
    "drug_name": "Digoxin",
    "pharmacologic_class": [
      "Cardiac Glycoside",
      "Antiarrhythmic"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure (HFrEF) / Atrial Fibrillation",
        "mechanism_of_action": "Inhibits Na+/K+ ATPase pump; increases intracellular calcium (positive inotropy); increases vagal tone (decreases HR and AV conduction)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Digoxin Toxicity (Visual halos, Confusion, Arrhythmias)",
      "Heart Block",
      "Hyperkalemia (in acute toxicity)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 266,
    "drug_name": "Dihydroergotamine",
    "pharmacologic_class": [
      "Ergot Alkaloid",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine / Cluster Headache",
        "mechanism_of_action": "Agonist at serotonin 5-HT1D receptors; causes vasoconstriction of intracranial blood vessels; inhibits pro-inflammatory neuropeptide release."
      }
    ],
    "common_side_effects": [
      "Rhinitis (Nasal spray)",
      "Nausea/Vomiting",
      "Taste alteration"
    ],
    "adverse_drug_events": [
      "Peripheral Ischemia / Ergotism (Boxed Warning with CYP3A4 inhibitors)",
      "Coronary Vasospasm",
      "Fibrosis (Retroperitoneal/Pleural - Long-term)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 267,
    "drug_name": "Diloxanide Furoate",
    "pharmacologic_class": [
      "Luminal Amebicide",
      "Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Intestinal Amebiasis (Asymptomatic cyst passers)",
        "mechanism_of_action": "Directly amebicidal; interferes with protein synthesis in the cyst form of Entamoeba histolytica in the gut lumen."
      }
    ],
    "common_side_effects": [
      "Flatulence",
      "Nausea",
      "Abdominal cramps"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Vomiting"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 268,
    "drug_name": "Diltiazem",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Non-Dihydropyridine)",
      "Antiarrhythmic (Class IV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina / Atrial Fibrillation (Rate control)",
        "mechanism_of_action": "Inhibits calcium influx in cardiac and vascular smooth muscle; slows AV node conduction; reduces heart rate and contractility; causes vasodilation."
      }
    ],
    "common_side_effects": [
      "Edema",
      "Headache",
      "Dizziness",
      "Bradycardia"
    ],
    "adverse_drug_events": [
      "Heart Block / AV Dissociation",
      "Heart Failure Exacerbation",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 269,
    "drug_name": "Dimercaprol (BAL)",
    "pharmacologic_class": [
      "Chelating Agent",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Arsenic / Gold / Mercury / Lead Poisoning",
        "mechanism_of_action": "Sulfhydryl-containing agent; forms stable complexes with heavy metals; prevents metal binding to cellular enzymes; promotes renal excretion."
      }
    ],
    "common_side_effects": [
      "Hypertension (Transient)",
      "Tachycardia",
      "Nausea/Vomiting",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (in alkaline urine)",
      "Hypertensive Crisis",
      "Hemolysis (in G6PD deficiency)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 270,
    "drug_name": "Dimethyl Fumarate",
    "pharmacologic_class": [
      "Nrf2 Activator",
      "Immunomodulator"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Sclerosis (Relapsing forms)",
        "mechanism_of_action": "Activates the Nrf2 pathway (Nuclear factor-like 2); induces antioxidant and cytoprotective responses; reduces oxidative stress and inflammation."
      }
    ],
    "common_side_effects": [
      "Flushing",
      "Abdominal pain",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Lymphopenia",
      "Progressive Multifocal Leukoencephalopathy (PML)",
      "Liver Injury"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 271,
    "drug_name": "Dinoprostone",
    "pharmacologic_class": [
      "Prostaglandin E2 (PGE2)",
      "Oxytocic"
    ],
    "indications_and_moa": [
      {
        "indication": "Cervical Ripening / Abortion",
        "mechanism_of_action": "Stimulates uterine contractions similar to labor; causes enzymatic dissolution of collagen fibrils in the cervix (softening/dilation)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Fever",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Uterine Hyperstimulation / Rupture",
      "Fetal Distress",
      "Disseminated Intravascular Coagulation (DIC - Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 272,
    "drug_name": "Diosmin",
    "pharmacologic_class": [
      "Flavonoid",
      "Phlebotonic"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Venous Insufficiency / Hemorrhoids (Not FDA Approved)",
        "mechanism_of_action": "Increases venous tone; reduces venous distensibility; improves lymphatic drainage; inhibits inflammation and protects microcirculation."
      }
    ],
    "common_side_effects": [
      "Gastric discomfort",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Dizziness"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 273,
    "drug_name": "Diphenhydramine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergy / Insomnia / Motion Sickness",
        "mechanism_of_action": "Non-selective H1 receptor antagonist; potent anticholinergic and sedative effects (crosses BBB)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Dizziness",
      "Thickened bronchial secretions"
    ],
    "adverse_drug_events": [
      "Paradoxical Excitation (Children/Elderly)",
      "Confusion / Delirium",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 274,
    "drug_name": "Diphenoxylate-Atropine",
    "pharmacologic_class": [
      "Opioid Agonist (Diphenoxylate) / Anticholinergic (Atropine)",
      "Antidiarrheal"
    ],
    "indications_and_moa": [
      {
        "indication": "Diarrhea",
        "mechanism_of_action": "Diphenoxylate binds gut mu-opioid receptors, slowing motility. Atropine is present at sub-therapeutic doses to discourage abuse via unpleasant anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dry mouth",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Toxic Megacolon (in infectious diarrhea/UC)",
      "Respiratory Depression (Overdose)",
      "Anticholinergic Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 275,
    "drug_name": "Diphtheria Toxoid",
    "pharmacologic_class": [
      "Vaccine",
      "Toxoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Diphtheria Prevention (DTaP, Tdap)",
        "mechanism_of_action": "Induces production of neutralizing antibodies (antitoxin) against Corynebacterium diphtheriae toxin."
      }
    ],
    "common_side_effects": [
      "Injection site pain/swelling",
      "Fever",
      "Irritability"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Brachial Neuritis",
      "Guillain-Barre Syndrome (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 276,
    "drug_name": "Dipyridamole",
    "pharmacologic_class": [
      "Phosphodiesterase Inhibitor",
      "Antiplatelet / Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Stroke Prevention (with Aspirin) / Valve Replacement (with Warfarin)",
        "mechanism_of_action": "Inhibits adenosine uptake and phosphodiesterase; increases cAMP/cGMP in platelets (inhibits aggregation) and smooth muscle (vasodilation)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dizziness",
      "GI Upset",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Coronary Steal Phenomenon (Worsening Angina)",
      "Hypotension",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 277,
    "drug_name": "Disopyramide",
    "pharmacologic_class": [
      "Class Ia Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Ventricular Arrhythmias",
        "mechanism_of_action": "Blocks sodium channels (Phase 0); prolongs action potential duration (Phase 3); decreases conduction velocity. Potent anticholinergic and negative inotropic effects."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Urinary retention",
      "Constipation",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Heart Failure (Boxed Warning - Negative Inotropy)",
      "Torsades de Pointes / QT Prolongation",
      "Anticholinergic Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 278,
    "drug_name": "Disulfiram",
    "pharmacologic_class": [
      "Aldehyde Dehydrogenase Inhibitor",
      "Alcohol Deterrent"
    ],
    "indications_and_moa": [
      {
        "indication": "Alcohol Dependence",
        "mechanism_of_action": "Irreversibly inhibits aldehyde dehydrogenase; accumulation of acetaldehyde after alcohol intake causes unpleasant reaction (flushing, nausea, tachycardia)."
      }
    ],
    "common_side_effects": [
      "Metallic taste",
      "Drowsiness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe/Fatal)",
      "Optic Neuritis / Peripheral Neuropathy",
      "Psychosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 279,
    "drug_name": "Divalproex Sodium",
    "pharmacologic_class": [
      "Anticonvulsant / Mood Stabilizer",
      "Valproate"
    ],
    "indications_and_moa": [
      {
        "indication": "Epilepsy / Bipolar Disorder / Migraine Prophylaxis",
        "mechanism_of_action": "Increases GABA levels (inhibits catabolism/reuptake); blocks voltage-gated sodium channels and T-type calcium channels. Prodrug of valproic acid."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Tremor",
      "Weight gain",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Pancreatitis (Boxed Warning)",
      "Teratogenicity (Neural Tube Defects - Boxed Warning)",
      "Hyperammonemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 280,
    "drug_name": "Dobutamine",
    "pharmacologic_class": [
      "Beta-1 Adrenergic Agonist",
      "Inotrope"
    ],
    "indications_and_moa": [
      {
        "indication": "Cardiac Decompensation (Heart Failure / Shock)",
        "mechanism_of_action": "Direct agonist at beta-1 receptors; increases myocardial contractility and stroke volume with modest effect on heart rate (positive inotrope)."
      }
    ],
    "common_side_effects": [
      "Tachycardia",
      "Hypertension",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Ventricular Arrhythmias",
      "Hypokalemia",
      "Myocardial Ischemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 281,
    "drug_name": "Docetaxel",
    "pharmacologic_class": [
      "Taxane",
      "Antineoplastic (Microtubule Stabilizer)"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast / Lung / Prostate / Gastric Cancer",
        "mechanism_of_action": "Promotes assembly of microtubules and prevents depolymerization; arrests cells in G2/M phase; inhibits cell division."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Fatigue",
      "Fluid retention",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Neutropenia (Boxed Warning)",
      "Hypersensitivity (Boxed Warning - Premedicate)",
      "Fluid Retention Syndrome (Boxed Warning)",
      "Neurotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 282,
    "drug_name": "Docusate",
    "pharmacologic_class": [
      "Stool Softener",
      "Surfactant"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation",
        "mechanism_of_action": "Anionic surfactant; lowers surface tension of stool to allow water and lipids to penetrate; softens stool."
      }
    ],
    "common_side_effects": [
      "Abdominal cramping",
      "Diarrhea",
      "Bitter taste"
    ],
    "adverse_drug_events": [
      "Throat Irritation (Liquid)",
      "Hepatotoxicity (Rare with chronic overuse)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 283,
    "drug_name": "Dofetilide",
    "pharmacologic_class": [
      "Class III Antiarrhythmic",
      "Potassium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation / Flutter (Conversion and Maintenance)",
        "mechanism_of_action": "Selectively blocks the rapid component of the delayed rectifier potassium current (Ikr); prolongs action potential duration and effective refractory period."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Chest pain",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Torsades de Pointes / QT Prolongation (Boxed Warning - Initiate in hospital)",
      "Ventricular Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 284,
    "drug_name": "Dolutegravir",
    "pharmacologic_class": [
      "Integrase Strand Transfer Inhibitor (INSTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV integrase by binding to the integrase active site; blocks the strand transfer step of retroviral DNA integration into the host genome."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Headache",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions (Rash/Organ dysfunction)",
      "Hepatotoxicity",
      "Neural Tube Defects (Risk debated, caution in pregnancy)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 285,
    "drug_name": "Domperidone",
    "pharmacologic_class": [
      "Dopamine Antagonist",
      "Prokinetic / Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Gastroparesis / Nausea (Not FDA Approved - Investigational in US)",
        "mechanism_of_action": "Peripheral dopamine D2 receptor antagonist; increases esophageal peristalsis and gastric emptying; blocks dopamine receptors in the CTZ (antiemetic)."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Headache",
      "Galactorrhea (Hyperprolactinemia)"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Sudden Cardiac Death (Serious risk)",
      "Extrapyramidal Symptoms (Rare - poor BBB penetration)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 286,
    "drug_name": "Donepezil",
    "pharmacologic_class": [
      "Acetylcholinesterase Inhibitor",
      "Anti-Alzheimer's Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Alzheimer's Disease",
        "mechanism_of_action": "Reversibly inhibits acetylcholinesterase; increases acetylcholine concentrations at cholinergic synapses; improves cognitive function."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Insomnia",
      "Muscle cramps"
    ],
    "adverse_drug_events": [
      "Bradycardia / Heart Block",
      "GI Hemorrhage (Increased acid)",
      "Rhabdomyolysis / NMS (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 287,
    "drug_name": "Dopamine",
    "pharmacologic_class": [
      "Adrenergic Agonist / Inotrope / Vasopressor"
    ],
    "indications_and_moa": [
      {
        "indication": "Shock / Hemodynamic Support",
        "mechanism_of_action": "Dose-dependent: Low (Renal dose - questionable) - D1 agonist; Moderate - Beta-1 agonist (Inotropy); High - Alpha-1 agonist (Vasoconstriction)."
      }
    ],
    "common_side_effects": [
      "Tachycardia",
      "Palpitations",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Arrhythmias (Ventricular)",
      "Tissue Necrosis (Extravasation - Phentolamine antidote)",
      "Gangrene (Peripheral ischemia at high doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 288,
    "drug_name": "Doripenem",
    "pharmacologic_class": [
      "Carbapenem",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Intra-abdominal Infections / UTI",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by binding to PBPs. Broad spectrum including Pseudomonas and anaerobes. Stable against many beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Diarrhea",
      "Phlebitis"
    ],
    "adverse_drug_events": [
      "Seizures (Lower risk than imipenem)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 289,
    "drug_name": "Dornase Alfa",
    "pharmacologic_class": [
      "Mucolytic",
      "Recombinant Human DNase"
    ],
    "indications_and_moa": [
      {
        "indication": "Cystic Fibrosis",
        "mechanism_of_action": "Hydrolyzes extracellular DNA in purulent mucus (from degenerating neutrophils); reduces sputum viscosity and improves clearance."
      }
    ],
    "common_side_effects": [
      "Voice alteration (Hoarseness)",
      "Pharyngitis",
      "Rash"
    ],
    "adverse_drug_events": [
      "Dyspnea",
      "Chest pain",
      "Conjunctivitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 290,
    "drug_name": "Dorzolamide",
    "pharmacologic_class": [
      "Carbonic Anhydrase Inhibitor",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Inhibits carbonic anhydrase II in the ciliary body; decreases aqueous humor secretion; lowers intraocular pressure."
      }
    ],
    "common_side_effects": [
      "Bitter taste",
      "Stinging/Burning",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Sulfonamide Hypersensitivity",
      "Corneal Edema / Decomposition",
      "Urolithiasis (Systemic absorption)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 291,
    "drug_name": "Doxazosin",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Antagonist",
      "Antihypertensive / BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "BPH / Hypertension",
        "mechanism_of_action": "Selectively blocks alpha-1 adrenergic receptors; relaxes smooth muscle in the prostate/bladder neck (BPH) and peripheral vasculature (HTN)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Headache",
      "Edema"
    ],
    "adverse_drug_events": [
      "Orthostatic Hypotension / Syncope (First-dose effect)",
      "Priapism",
      "Intraoperative Floppy Iris Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 292,
    "drug_name": "Doxepin",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (TCA)",
      "Hypnotic / Antipruritic"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Anxiety / Insomnia / Pruritus (Topical)",
        "mechanism_of_action": "Inhibits reuptake of NE and serotonin (Antidepressant). Potent H1 antagonist (Sedative/Antipruritic). Anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Constipation",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "QT Prolongation",
      "Anticholinergic Delirium"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 293,
    "drug_name": "Doxorubicin",
    "pharmacologic_class": [
      "Anthracycline",
      "Antineoplastic Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer / Lymphoma / Sarcoma",
        "mechanism_of_action": "Intercalates DNA; inhibits topoisomerase II; generates free radicals. Cell cycle non-specific."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Nausea/Vomiting",
      "Red urine",
      "Stomatitis"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (Cumulative dose-dependent CHF - Boxed Warning)",
      "Severe Myelosuppression",
      "Secondary Malignancies (AML)",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 294,
    "drug_name": "Doxycycline",
    "pharmacologic_class": [
      "Tetracycline Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne / Lyme Disease / Pneumonia / Malaria Prophylaxis",
        "mechanism_of_action": "Binds to 30S ribosomal subunit; inhibits protein synthesis (bacteriostatic). Anti-inflammatory properties (Acne/Rosacea)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Photosensitivity",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Esophageal Ulceration (Take with water/upright)",
      "Tooth Discoloration / Enamel Hypoplasia (Children <8 - Boxed Warning historically, recently relaxed for short courses)",
      "Intracranial Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 295,
    "drug_name": "Doxylamine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Sedative / Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia / Nausea of Pregnancy (with Pyridoxine)",
        "mechanism_of_action": "Blocks H1 receptors; penetrates CNS causing sedation. Antiemetic effect likely via vestibular/CTZ inhibition."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dry mouth",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Anticholinergic Toxicity",
      "Paradoxical Excitation",
      "Respiratory Depression (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 296,
    "drug_name": "Drotaverine",
    "pharmacologic_class": [
      "Phosphodiesterase Inhibitor (PDE4)",
      "Antispasmodic"
    ],
    "indications_and_moa": [
      {
        "indication": "Smooth Muscle Spasm (Biliary/Renal/GI) - Not FDA Approved",
        "mechanism_of_action": "Inhibits PDE4; increases cAMP; reduces calcium uptake in smooth muscle cells; causes relaxation. No anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Dizziness",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Allergic Dermatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 297,
    "drug_name": "Dulaglutide",
    "pharmacologic_class": [
      "GLP-1 Receptor Agonist",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Cardiovascular Risk Reduction",
        "mechanism_of_action": "Long-acting GLP-1 analog; stimulates glucose-dependent insulin secretion; suppresses glucagon; slows gastric emptying."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Vomiting",
      "Decreased appetite"
    ],
    "adverse_drug_events": [
      "Thyroid C-Cell Tumors (Boxed Warning)",
      "Pancreatitis",
      "Renal Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 298,
    "drug_name": "Duloxetine",
    "pharmacologic_class": [
      "SNRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Anxiety / Neuropathic Pain / Fibromyalgia",
        "mechanism_of_action": "Potent inhibitor of serotonin and norepinephrine reuptake; enhances descending inhibitory pain pathways."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dry mouth",
      "Somnolence",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Contraindicated in liver disease)",
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 299,
    "drug_name": "Dutasteride",
    "pharmacologic_class": [
      "5-Alpha Reductase Inhibitor",
      "BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Benign Prostatic Hyperplasia (BPH)",
        "mechanism_of_action": "Inhibits both Type 1 and Type 2 isoenzymes of 5-alpha reductase; prevents conversion of testosterone to dihydrotestosterone (DHT); shrinks prostate."
      }
    ],
    "common_side_effects": [
      "Erectile Dysfunction",
      "Decreased Libido",
      "Ejaculation disorders",
      "Gynecomastia"
    ],
    "adverse_drug_events": [
      "High-Grade Prostate Cancer (Risk warning)",
      "Teratogenicity (Pregnancy Category X - Women should not handle)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 300,
    "drug_name": "Dydrogesterone",
    "pharmacologic_class": [
      "Retroprogesterone",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Progesterone Deficiency / Habitual Abortion (Not FDA Approved)",
        "mechanism_of_action": "Potent oral progestogen; selective for progesterone receptor; induces secretory endometrium. Lacks androgenic or estrogenic effects."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Breast tenderness"
    ],
    "adverse_drug_events": [
      "Liver Dysfunction",
      "Breakthrough Bleeding",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 301,
    "drug_name": "Ebastine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Urticaria",
        "mechanism_of_action": "Long-acting, selective peripheral H1 receptor antagonist; inhibits histamine-induced effects without significant CNS penetration or anticholinergic activity."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dry mouth",
      "Drowsiness (Rare)"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Tachycardia (Rare)",
      "QT Prolongation (Very rare/High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 302,
    "drug_name": "Econazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Tinea Pedis / Cutaneous Candidiasis / Tinea Versicolor",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; prevents conversion of lanosterol to ergosterol; disrupts fungal cell membrane integrity."
      }
    ],
    "common_side_effects": [
      "Erythema",
      "Burning/Stinging",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Allergic Contact Dermatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 303,
    "drug_name": "Eculizumab",
    "pharmacologic_class": [
      "Complement Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Paroxysmal Nocturnal Hemoglobinuria (PNH) / aHUS / Myasthenia Gravis",
        "mechanism_of_action": "Binds to complement protein C5; prevents cleavage into C5a and C5b; inhibits formation of the terminal complement complex (C5b-9) causing hemolysis."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nasopharyngitis",
      "Back pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Serious Meningococcal Infections (Boxed Warning - REMS)",
      "Infusion Reactions",
      "Infection Susceptibility"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 304,
    "drug_name": "Edaravone",
    "pharmacologic_class": [
      "Free Radical Scavenger",
      "Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "Amyotrophic Lateral Sclerosis (ALS)",
        "mechanism_of_action": "Scavenges free radicals; reduces oxidative stress which is thought to contribute to motor neuron death in ALS."
      }
    ],
    "common_side_effects": [
      "Contusion ( bruising)",
      "Gait disturbance",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions (Anaphylaxis)",
      "Sulfite Allergic Reaction (contains sodium bisulfite)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 305,
    "drug_name": "Edoxaban",
    "pharmacologic_class": [
      "Factor Xa Inhibitor",
      "Direct Oral Anticoagulant (DOAC)"
    ],
    "indications_and_moa": [
      {
        "indication": "Stroke Prevention in AF / DVT/PE Treatment",
        "mechanism_of_action": "Selectively and directly inhibits Factor Xa; prevents conversion of prothrombin to thrombin; inhibits fibrin clot formation."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Rash",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (Boxed Warning: Spinal/Epidural Hematoma)",
      "Reduced Efficacy in CrCl > 95 mL/min (Boxed Warning in AF)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 306,
    "drug_name": "Efavirenz",
    "pharmacologic_class": [
      "NNRTI (Non-Nucleoside Reverse Transcriptase Inhibitor)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Binds directly to HIV-1 reverse transcriptase (non-competitive inhibition); blocks RNA-dependent and DNA-dependent DNA polymerase activities."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Vivid dreams / Insomnia",
      "Rash"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Symptoms (Severe Depression/Suicidality)",
      "Hepatotoxicity",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 307,
    "drug_name": "Eletriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Agonist",
      "Antimigraine Agent (Triptan)"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine",
        "mechanism_of_action": "Agonist at 5-HT1B/1D receptors on intracranial blood vessels and sensory nerve endings; causes vasoconstriction and inhibits pro-inflammatory neuropeptide release."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Nausea",
      "Chest tightness/pressure"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / Myocardial Ischemia",
      "Serotonin Syndrome",
      "Cerebrovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 308,
    "drug_name": "Eliglustat",
    "pharmacologic_class": [
      "Glucosylceramide Synthase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Gaucher Disease Type 1",
        "mechanism_of_action": "Inhibits glucosylceramide synthase; reduces production of glucosylceramide (substrate reduction therapy) to prevent accumulation."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Headache",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Cardiac Arrhythmias (PR, QTc prolongation - CYP2D6 metabolizer dependent)",
      "Syncope"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 309,
    "drug_name": "Eltrombopag",
    "pharmacologic_class": [
      "Thrombopoietin Receptor Agonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic ITP / Severe Aplastic Anemia / Hepatitis C Thrombocytopenia",
        "mechanism_of_action": "Interacts with the transmembrane domain of the human TPO receptor; initiates signaling cascades inducing proliferation and differentiation of megakaryocytes."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Upper respiratory infection",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Thromboembolism",
      "Cataracts"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 310,
    "drug_name": "Elvitegravir",
    "pharmacologic_class": [
      "Integrase Strand Transfer Inhibitor (INSTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 integrase; prevents integration of viral DNA into host genome. Must be boosted (with Cobicistat or Ritonavir)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "New Onset Renal Impairment",
      "Lactic Acidosis",
      "Immune Reconstitution Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 311,
    "drug_name": "Empagliflozin",
    "pharmacologic_class": [
      "SGLT2 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Heart Failure / CKD",
        "mechanism_of_action": "Inhibits SGLT2 in proximal renal tubules; blocks glucose reabsorption; increases urinary glucose excretion; reduces preload/afterload."
      }
    ],
    "common_side_effects": [
      "Urinary Tract Infections",
      "Genital Mycotic Infections",
      "Increased Urination"
    ],
    "adverse_drug_events": [
      "Diabetic Ketoacidosis (DKA)",
      "Fournier's Gangrene",
      "Volume Depletion / Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 312,
    "drug_name": "Emtricitabine",
    "pharmacologic_class": [
      "Nucleoside Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection / PrEP",
        "mechanism_of_action": "Phosphorylated intracellularly; inhibits HIV-1 reverse transcriptase by competing with deoxycytidine triphosphate; causes chain termination."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Diarrhea",
      "Nausea",
      "Skin discoloration (Hyperpigmentation on palms/soles)"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis / Severe Hepatomegaly (Boxed Warning)",
      "Acute Exacerbation of Hepatitis B (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 313,
    "drug_name": "Enalapril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure / Asymptomatic LVD",
        "mechanism_of_action": "Prodrug converted to enalaprilat; inhibits ACE; blocks conversion of Angiotensin I to II; reduces vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 314,
    "drug_name": "Enfuvirtide",
    "pharmacologic_class": [
      "Fusion Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection (Salvage Therapy)",
        "mechanism_of_action": "Binds to the gp41 subunit of the viral envelope glycoprotein; prevents fusion of viral and cellular membranes and viral entry."
      }
    ],
    "common_side_effects": [
      "Injection Site Reactions (Pain, Induration, Erythema - nearly 100%)",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions",
      "Increased risk of bacterial pneumonia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 315,
    "drug_name": "Enoxaparin",
    "pharmacologic_class": [
      "Low Molecular Weight Heparin (LMWH)",
      "Anticoagulant"
    ],
    "indications_and_moa": [
      {
        "indication": "DVT Prophylaxis / DVT/PE Treatment / ACS",
        "mechanism_of_action": "Potentiates antithrombin III; preferentially inhibits Factor Xa over Factor IIa (Thrombin) (Ratio ~4:1)."
      }
    ],
    "common_side_effects": [
      "Injection site hematoma",
      "Minor bleeding",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Spinal/Epidural Hematoma (Boxed Warning)",
      "Major Hemorrhage",
      "Heparin-Induced Thrombocytopenia (HIT)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 316,
    "drug_name": "Entacapone",
    "pharmacologic_class": [
      "COMT Inhibitor",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease (Adjunct to Levodopa)",
        "mechanism_of_action": "Selectively and reversibly inhibits peripheral COMT; prevents degradation of levodopa to 3-O-methyldopa; increases levodopa bioavailability."
      }
    ],
    "common_side_effects": [
      "Dyskinesia (worsened)",
      "Urine discoloration (orange/brown)",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Severe Diarrhea / Colitis",
      "Rhabdomyolysis",
      "Impulse Control Disorders"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 317,
    "drug_name": "Entecavir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (HBV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis B",
        "mechanism_of_action": "Guanosine nucleoside analogue; inhibits HBV polymerase (reverse transcriptase); blocks priming, reverse transcription, and DNA synthesis."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fatigue",
      "Dizziness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis / Severe Hepatomegaly (Boxed Warning)",
      "Severe Acute Exacerbation of Hepatitis B (upon discontinuation - Boxed Warning)",
      "HIV Resistance (if untreated HIV coinfection)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 318,
    "drug_name": "Enzalutamide",
    "pharmacologic_class": [
      "Non-steroidal Antiandrogen",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Castration-Resistant Prostate Cancer / Metastatic Castration-Sensitive Prostate Cancer",
        "mechanism_of_action": "Competitively inhibits androgen binding to androgen receptors; inhibits AR nuclear translocation and DNA binding; induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Hot flashes",
      "Hypertension",
      "Falls / Fractures"
    ],
    "adverse_drug_events": [
      "Seizures (Dose-dependent)",
      "Posterior Reversible Encephalopathy Syndrome (PRES)",
      "Ischemic Heart Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 319,
    "drug_name": "Ephedrine",
    "pharmacologic_class": [
      "Sympathomimetic Amine",
      "Vasopressor / Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypotension (Anesthesia-induced)",
        "mechanism_of_action": "Directly stimulates alpha and beta adrenergic receptors; indirectly releases norepinephrine; increases blood pressure, heart rate, and cardiac output."
      }
    ],
    "common_side_effects": [
      "Palpitations",
      "Tachycardia",
      "Anxiety",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis",
      "Arrhythmias",
      "Myocardial Ischemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 320,
    "drug_name": "Epinephrine",
    "pharmacologic_class": [
      "Sympathomimetic Catecholamine",
      "Vasopressor / Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Anaphylaxis / Cardiac Arrest / Severe Asthma",
        "mechanism_of_action": "Non-selective alpha and beta agonist. Alpha-1: vasoconstriction (BP support, decreased edema). Beta-1: increased contractility/HR. Beta-2: bronchodilation."
      }
    ],
    "common_side_effects": [
      "Palpitations",
      "Tachycardia",
      "Anxiety",
      "Tremor"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis",
      "Arrhythmias (Ventricular Fibrillation)",
      "Tissue Necrosis (Extravasation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 321,
    "drug_name": "Epirubicin",
    "pharmacologic_class": [
      "Anthracycline",
      "Antineoplastic Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (Adjuvant)",
        "mechanism_of_action": "Intercalates DNA; inhibits topoisomerase II; generates free radicals. Epimer of doxorubicin (potentially less cardiotoxic)."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Nausea/Vomiting",
      "Red urine",
      "Mucositis"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (CHF - Boxed Warning)",
      "Severe Myelosuppression (Boxed Warning)",
      "Secondary Leukemia (AML/MDS)",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 322,
    "drug_name": "Eplerenone",
    "pharmacologic_class": [
      "Aldosterone Antagonist (Selective)",
      "Diuretic (Potassium-Sparing)"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure Post-MI / Hypertension",
        "mechanism_of_action": "Selectively binds to the mineralocorticoid receptor; blocks aldosterone binding; increases sodium/water excretion and potassium retention. Less endocrine side effects than spironolactone."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Flu-like symptoms"
    ],
    "adverse_drug_events": [
      "Hyperkalemia (Fatal arrhythmias)",
      "Renal Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 323,
    "drug_name": "Epoetin Alfa",
    "pharmacologic_class": [
      "Erythropoiesis-Stimulating Agent (ESA)",
      "Hematopoietic Growth Factor"
    ],
    "indications_and_moa": [
      {
        "indication": "Anemia (CKD / Chemotherapy / HIV)",
        "mechanism_of_action": "Stimulates erythroid progenitor cells in the bone marrow; induces erythropoiesis and release of reticulocytes."
      }
    ],
    "common_side_effects": [
      "Hypertension",
      "Headache",
      "Arthralgia",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "Cardiovascular Events (MI/Stroke/VTE - Boxed Warning)",
      "Tumor Progression / Recurrence (Boxed Warning)",
      "Pure Red Cell Aplasia (PRCA)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 324,
    "drug_name": "Epoprostenol",
    "pharmacologic_class": [
      "Prostacyclin (PGI2)",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension (PAH)",
        "mechanism_of_action": "Potent direct vasodilator of pulmonary and systemic arterial vascular beds; inhibits platelet aggregation."
      }
    ],
    "common_side_effects": [
      "Flushing",
      "Jaw pain",
      "Headache",
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Rebound Pulmonary Hypertension (Abrupt withdrawal - Fatal)",
      "Sepsis (Catheter-related)",
      "Bleeding"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 325,
    "drug_name": "Eptifibatide",
    "pharmacologic_class": [
      "Glycoprotein IIb/IIIa Inhibitor",
      "Antiplatelet Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Coronary Syndrome / PCI",
        "mechanism_of_action": "Reversibly inhibits platelet aggregation by preventing the binding of fibrinogen, von Willebrand factor, and other adhesive ligands to GP IIb/IIIa receptors."
      }
    ],
    "common_side_effects": [
      "Minor bleeding",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Major Bleeding",
      "Thrombocytopenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 326,
    "drug_name": "Ergotamine",
    "pharmacologic_class": [
      "Ergot Alkaloid",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine / Cluster Headache",
        "mechanism_of_action": "Partial agonist at 5-HT1B/1D and alpha-adrenergic receptors; causes vasoconstriction of intracranial blood vessels."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Dizziness",
      "Paresthesia"
    ],
    "adverse_drug_events": [
      "Ergotism / Peripheral Ischemia (Boxed Warning with CYP3A4 inhibitors)",
      "Coronary Vasospasm / MI",
      "Fibrotic Complications"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 327,
    "drug_name": "Erlotinib",
    "pharmacologic_class": [
      "EGFR Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "NSCLC / Pancreatic Cancer",
        "mechanism_of_action": "Reversibly inhibits the kinase activity of EGFR (HER1); blocks downstream signaling pathways; inhibits tumor cell proliferation and survival."
      }
    ],
    "common_side_effects": [
      "Rash (Acneiform)",
      "Diarrhea",
      "Fatigue",
      "Anorexia"
    ],
    "adverse_drug_events": [
      "Interstitial Lung Disease (ILD)",
      "Gastrointestinal Perforation",
      "Severe Bullous Skin Reactions (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 328,
    "drug_name": "Ertapenem",
    "pharmacologic_class": [
      "Carbapenem",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Intra-abdominal Infections / Pneumonia / Skin Infections",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis. Broad spectrum but lacks activity against Pseudomonas and Acinetobacter (unlike other carbapenems)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Infusion site reactions"
    ],
    "adverse_drug_events": [
      "Seizures (Risk in renal impairment/CNS disorders)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 329,
    "drug_name": "Erythromycin",
    "pharmacologic_class": [
      "Macrolide Antibiotic",
      "Prokinetic (Off-label)"
    ],
    "indications_and_moa": [
      {
        "indication": "Respiratory Infections / Skin Infections",
        "mechanism_of_action": "Binds to 50S ribosomal subunit; inhibits protein synthesis. Potent CYP3A4 inhibitor."
      },
      {
        "indication": "Gastroparesis (Off-label)",
        "mechanism_of_action": "Motilin receptor agonist; stimulates gastric motility."
      }
    ],
    "common_side_effects": [
      "GI Upset (Nausea/Vomiting/Cramps - very common)",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes",
      "Hepatotoxicity (Cholestatic Hepatitis)",
      "Infantile Hypertrophic Pyloric Stenosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 330,
    "drug_name": "Erythropoietin (EPO)",
    "pharmacologic_class": [
      "ESA",
      "Hematopoietic Growth Factor"
    ],
    "indications_and_moa": [
      {
        "indication": "Anemia (CKD/Chemo)",
        "mechanism_of_action": "Same as Epoetin Alfa; stimulates RBC production."
      }
    ],
    "common_side_effects": [
      "Hypertension",
      "Injection site pain",
      "Arthralgia"
    ],
    "adverse_drug_events": [
      "Thromboembolism (Boxed Warning)",
      "Tumor Progression (Boxed Warning)",
      "Pure Red Cell Aplasia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 331,
    "drug_name": "Escitalopram",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Generalized Anxiety Disorder",
        "mechanism_of_action": "S-enantiomer of citalopram; highly selective inhibitor of serotonin reuptake; increases synaptic serotonin levels."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Insomnia/Somnolence",
      "Sexual Dysfunction",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "QT Prolongation (Dose-dependent, less than citalopram)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 332,
    "drug_name": "Esmolol",
    "pharmacologic_class": [
      "Beta-1 Selective Blocker",
      "Antiarrhythmic (Class II)"
    ],
    "indications_and_moa": [
      {
        "indication": "Supraventricular Tachycardia / Intraoperative Tachycardia/HTN",
        "mechanism_of_action": "Ultra-short-acting cardioselective beta-1 blocker; blocks catecholamine effects; rapid onset/offset (metabolized by RBC esterases)."
      }
    ],
    "common_side_effects": [
      "Hypotension (Dose-related)",
      "Dizziness",
      "Injection site reaction"
    ],
    "adverse_drug_events": [
      "Severe Bradycardia / Heart Block",
      "Heart Failure",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 333,
    "drug_name": "Esomeprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Erosive Esophagitis / H. pylori",
        "mechanism_of_action": "S-isomer of omeprazole; irreversibly inhibits H+/K+ ATPase in parietal cells; blocks final step of acid secretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Diarrhea",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Fractures (Long-term use)",
      "Hypomagnesemia",
      "Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 334,
    "drug_name": "Estazolam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Short-term)",
        "mechanism_of_action": "Enhances GABAergic inhibition via GABA-A receptors; reduces sleep latency and number of awakenings."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Hypokinesia"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Complex Sleep Behaviors",
      "Dependence/Withdrawal"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 335,
    "drug_name": "Estradiol",
    "pharmacologic_class": [
      "Estrogen",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Menopausal Symptoms / Hypogonadism / Prostate Cancer",
        "mechanism_of_action": "Binds to nuclear estrogen receptors; regulates gene transcription; develops secondary sexual characteristics; reduces bone resorption."
      }
    ],
    "common_side_effects": [
      "Breast tenderness",
      "Nausea",
      "Headache",
      "Fluid retention"
    ],
    "adverse_drug_events": [
      "Endometrial Cancer (Unopposed use - Boxed Warning)",
      "Thromboembolism (DVT/PE/Stroke - Boxed Warning)",
      "Breast Cancer (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 336,
    "drug_name": "Estriol",
    "pharmacologic_class": [
      "Weak Estrogen",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Menopausal Symptoms (Not FDA Approved - Compounded)",
        "mechanism_of_action": "Weak agonist at estrogen receptors; short receptor occupancy time compared to estradiol."
      }
    ],
    "common_side_effects": [
      "Breast tenderness",
      "Spotting",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Endometrial Hyperplasia (if unopposed)",
      "Thromboembolism risk (Lower than estradiol but present)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 337,
    "drug_name": "Etanercept",
    "pharmacologic_class": [
      "TNF Inhibitor",
      "Biologic DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Psoriasis / Ankylosing Spondylitis",
        "mechanism_of_action": "Soluble TNF receptor fusion protein; binds to TNF-alpha and TNF-beta; competitively inhibits binding to cell surface receptors."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Upper respiratory infection",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB/Fungal - Boxed Warning)",
      "Malignancy (Lymphoma/Skin - Boxed Warning)",
      "Demyelinating Disease",
      "Heart Failure Exacerbation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 338,
    "drug_name": "Ethacrynic Acid",
    "pharmacologic_class": [
      "Loop Diuretic",
      "Phenoxyacetic Acid Derivative"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema (in Sulfa Allergy)",
        "mechanism_of_action": "Inhibits Na+/K+/2Cl- co-transport in Loop of Henle. Only loop diuretic without a sulfonamide group (safe in sulfa allergy)."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Watery)",
      "Nausea",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Ototoxicity (Highest risk among loop diuretics - Boxed Warning)",
      "Severe Electrolyte Depletion",
      "GI Bleeding"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 339,
    "drug_name": "Ethambutol",
    "pharmacologic_class": [
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis",
        "mechanism_of_action": "Inhibits arabinosyl transferase; interferes with mycobacterial cell wall (arabinogalactan) synthesis; bacteriostatic."
      }
    ],
    "common_side_effects": [
      "Hyperuricemia",
      "GI Upset",
      "Confusion"
    ],
    "adverse_drug_events": [
      "Optic Neuritis (Retrobulbar - Decreased acuity/Color blindness)",
      "Peripheral Neuropathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 340,
    "drug_name": "Ethinylestradiol",
    "pharmacologic_class": [
      "Synthetic Estrogen",
      "Contraceptive Component"
    ],
    "indications_and_moa": [
      {
        "indication": "Contraception / Hormone Replacement",
        "mechanism_of_action": "Potent estrogen; suppresses FSH; prevents follicular development; stabilizes endometrium."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Breast tenderness",
      "Headache",
      "Fluid retention"
    ],
    "adverse_drug_events": [
      "Thromboembolism (Boxed Warning - especially smokers >35)",
      "Hypertension",
      "Hepatic Adenoma"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 341,
    "drug_name": "Ethionamide",
    "pharmacologic_class": [
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis (Second-line)",
        "mechanism_of_action": "Inhibits mycolic acid synthesis (similar to Isoniazid); disrupts cell wall."
      }
    ],
    "common_side_effects": [
      "Severe GI Upset (Nausea/Vomiting/Metallic taste)",
      "Orthostatic hypotension",
      "Drowsiness"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "Neurotoxicity (Peripheral neuropathy - give Pyridoxine)",
      "Psychosis / Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 342,
    "drug_name": "Ethosuximide",
    "pharmacologic_class": [
      "Succinimide Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Absence Seizures (Petit Mal)",
        "mechanism_of_action": "Inhibits T-type calcium channels in thalamic neurons; suppresses paroxysmal spike-and-wave patterns."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Abdominal pain",
      "Drowsiness",
      "Hiccups"
    ],
    "adverse_drug_events": [
      "Blood Dyscrasias (Agranulocytosis/Pancytopenia)",
      "SLE-like Syndrome",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 343,
    "drug_name": "Etidronate",
    "pharmacologic_class": [
      "Bisphosphonate (First Generation)",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Paget's Disease / Heterotopic Ossification",
        "mechanism_of_action": "Adsorbs to hydroxyapatite crystals; inhibits crystal growth and dissolution; reduces osteoclastic bone resorption."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Osteomalacia (Inhibits bone mineralization at high doses/prolonged use)",
      "Esophagitis",
      "Fractures (Femoral)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 344,
    "drug_name": "Etodolac",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis / Pain",
        "mechanism_of_action": "Inhibits COX-1 and COX-2 (preferential for COX-2); reduces prostaglandin synthesis."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Perforation (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 345,
    "drug_name": "Etomidate",
    "pharmacologic_class": [
      "General Anesthetic",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Induction of General Anesthesia",
        "mechanism_of_action": "Modulates GABA-A receptors; enhances inhibitory transmission. Hemodynamically stable (minimal CV depression)."
      }
    ],
    "common_side_effects": [
      "Myoclonus (Involuntary muscle movements)",
      "Injection site pain",
      "Nausea/Vomiting (Post-op)"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression (Inhibits 11-beta-hydroxylase - dose dependent)",
      "Respiratory Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 346,
    "drug_name": "Etoposide",
    "pharmacologic_class": [
      "Podophyllotoxin Derivative",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Lung Cancer / Testicular Cancer",
        "mechanism_of_action": "Inhibits Topoisomerase II; prevents religation of DNA strands causing double-strand breaks; arrests cells in Late S / G2 phase."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Alopecia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Dose-limiting)",
      "Hypotension (Rapid infusion)",
      "Secondary Leukemia (AML)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 347,
    "drug_name": "Etoricoxib",
    "pharmacologic_class": [
      "COX-2 Inhibitor",
      "NSAID"
    ],
    "indications_and_moa": [
      {
        "indication": "Arthritis / Acute Pain (Not FDA Approved)",
        "mechanism_of_action": "Highly selective COX-2 inhibitor; reduces inflammation and pain with reduced GI toxicity risk compared to non-selective NSAIDs."
      }
    ],
    "common_side_effects": [
      "Edema",
      "Hypertension",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Cardiovascular Thrombotic Events (Increased risk)",
      "GI Bleeding (Low risk)",
      "Renal Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 348,
    "drug_name": "Etravirine",
    "pharmacologic_class": [
      "NNRTI (Second Generation)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection (Treatment-experienced)",
        "mechanism_of_action": "Binds directly to HIV-1 reverse transcriptase; blocks DNA synthesis. Flexible molecule effective against NNRTI-resistant strains."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Nausea",
      "Peripheral neuropathy"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions (SJS/TEN/DRESS)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 349,
    "drug_name": "Everolimus",
    "pharmacologic_class": [
      "mTOR Inhibitor",
      "Immunosuppressant / Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Transplant Rejection / Renal Cell Carcinoma / Breast Cancer",
        "mechanism_of_action": "Binds to FKBP-12; inhibits mTOR kinase; blocks signal transduction pathways (PI3K/AKT); inhibits cell proliferation and angiogenesis."
      }
    ],
    "common_side_effects": [
      "Stomatitis",
      "Fatigue",
      "Rash",
      "Edema"
    ],
    "adverse_drug_events": [
      "Non-infectious Pneumonitis",
      "Immunosuppression / Infections",
      "Metabolic Abnormalities (Hyperlipidemia/Hyperglycemia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 350,
    "drug_name": "Evolocumab",
    "pharmacologic_class": [
      "PCSK9 Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Cardiovascular Risk Reduction",
        "mechanism_of_action": "Binds to PCSK9; prevents degradation of LDL receptors; increases LDL receptor recycling to hepatocyte surface; dramatically lowers LDL-C."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Nasopharyngitis",
      "Flu-like symptoms"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions",
      "Potential Neurocognitive Effects (Debated)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 351,
    "drug_name": "Exemestane",
    "pharmacologic_class": [
      "Aromatase Inhibitor (Steroidal)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (Hormone Receptor Positive, Postmenopausal)",
        "mechanism_of_action": "Irreversible steroidal aromatase inactivator; acts as a false substrate for the aromatase enzyme, binding irreversibly to its active site (suicide inhibition), preventing estrogen synthesis."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Fatigue",
      "Arthralgia",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Decreased Bone Mineral Density / Fractures",
      "Ischemic Cardiovascular Events",
      "Hypercholesterolemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 352,
    "drug_name": "Exenatide",
    "pharmacologic_class": [
      "GLP-1 Receptor Agonist",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Incretin mimetic; binds to GLP-1 receptors; enhances glucose-dependent insulin secretion; suppresses glucagon secretion; slows gastric emptying."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Injection site nodules"
    ],
    "adverse_drug_events": [
      "Acute Pancreatitis (Necrotizing/Hemorrhagic)",
      "Thyroid C-cell Tumors (Boxed Warning - Extended Release)",
      "Renal Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 353,
    "drug_name": "Ezetimibe",
    "pharmacologic_class": [
      "Cholesterol Absorption Inhibitor",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Homozygous Sitosterolemia",
        "mechanism_of_action": "Inhibits the Niemann-Pick C1-Like 1 (NPC1L1) transporter at the brush border of the small intestine; blocks absorption of cholesterol and phytosterols."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Arthralgia",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (when used with statins)",
      "Myopathy (Rare monotherapy, increased risk with statins)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 354,
    "drug_name": "Factor VIII Concentrate",
    "pharmacologic_class": [
      "Antihemophilic Factor",
      "Coagulation Factor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hemophilia A (Factor VIII Deficiency)",
        "mechanism_of_action": "Replaces missing clotting Factor VIII; acts as a cofactor for Factor IXa to activate Factor X in the intrinsic coagulation pathway."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fever",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Development of Factor VIII Inhibitors (Neutralizing antibodies)",
      "Anaphylaxis",
      "Thromboembolic Events (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 355,
    "drug_name": "Famciclovir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (Herpes)"
    ],
    "indications_and_moa": [
      {
        "indication": "Herpes Zoster / Genital Herpes / Herpes Labialis",
        "mechanism_of_action": "Prodrug of penciclovir; phosphorylated by viral thymidine kinase; inhibits viral DNA polymerase; prevents viral DNA replication."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Acute Renal Failure (Dose adjustment required)",
      "Neutropenia (Rare)",
      "Confusional State (Elderly)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 356,
    "drug_name": "Famotidine",
    "pharmacologic_class": [
      "H2 Receptor Antagonist",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Peptic Ulcer Disease / Hypersecretory Conditions",
        "mechanism_of_action": "Competitively inhibits histamine H2 receptors on gastric parietal cells; suppresses basal and meal-stimulated gastric acid secretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dizziness",
      "Constipation/Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Renal impairment)",
      "CNS Effects (Confusion/Delirium - especially in elderly/renal failure)",
      "Blood Dyscrasias (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 357,
    "drug_name": "Febuxostat",
    "pharmacologic_class": [
      "Xanthine Oxidase Inhibitor",
      "Antigout Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperuricemia (Gout)",
        "mechanism_of_action": "Non-purine selective inhibitor of xanthine oxidase; blocks conversion of hypoxanthine to xanthine and xanthine to uric acid."
      }
    ],
    "common_side_effects": [
      "Liver enzyme elevation",
      "Nausea",
      "Arthralgia (Gout flare)"
    ],
    "adverse_drug_events": [
      "Cardiovascular Death (Boxed Warning - higher risk than allopurinol)",
      "Severe Cutaneous Reactions (SJS/TEN)",
      "Hepatic Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 358,
    "drug_name": "Felodipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle; potent peripheral vasodilator; reduces systemic vascular resistance."
      }
    ],
    "common_side_effects": [
      "Peripheral Edema",
      "Flushing",
      "Headache"
    ],
    "adverse_drug_events": [
      "Reflex Tachycardia",
      "Gingival Hyperplasia",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 359,
    "drug_name": "Fenofibrate",
    "pharmacologic_class": [
      "Fibrate",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertriglyceridemia / Mixed Dyslipidemia",
        "mechanism_of_action": "Activates Peroxisome Proliferator-Activated Receptor alpha (PPAR-alpha); increases lipolysis and elimination of triglyceride-rich particles; increases HDL."
      }
    ],
    "common_side_effects": [
      "Abdominal pain",
      "Back pain",
      "Headache"
    ],
    "adverse_drug_events": [
      "Rhabdomyolysis (Risk increased with statins)",
      "Cholelithiasis / Cholecystitis",
      "Paradoxical HDL Decrease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 360,
    "drug_name": "Fentanyl",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic / Anesthetic Adjunct"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Pain / Anesthesia Adjunct",
        "mechanism_of_action": "Potent mu-opioid receptor agonist; inhibits ascending pain pathways; alters pain perception; produces generalized CNS depression."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Nausea/Vomiting",
      "Constipation",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Chest Wall Rigidity (Rapid IV)",
      "Serotonin Syndrome (with serotonergic drugs)",
      "Addiction / Misuse (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 361,
    "drug_name": "Ferrous Ascorbate",
    "pharmacologic_class": [
      "Iron Supplement",
      "Hematinic"
    ],
    "indications_and_moa": [
      {
        "indication": "Iron Deficiency Anemia",
        "mechanism_of_action": "Provides elemental iron essential for hemoglobin synthesis; ascorbic acid maintains iron in ferrous state and enhances absorption."
      }
    ],
    "common_side_effects": [
      "GI irritation",
      "Nausea",
      "Black stools"
    ],
    "adverse_drug_events": [
      "Iron Overload (Hemosiderosis)",
      "GI Ulceration (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 362,
    "drug_name": "Ferrous Sulfate",
    "pharmacologic_class": [
      "Iron Supplement",
      "Hematinic"
    ],
    "indications_and_moa": [
      {
        "indication": "Iron Deficiency Anemia",
        "mechanism_of_action": "Replaces iron stores; essential component of hemoglobin, myoglobin, and oxidative enzymes."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Black stools",
      "Nausea",
      "Epigastric pain"
    ],
    "adverse_drug_events": [
      "Acute Iron Toxicity (Fatal in children - corrosive GI damage)",
      "Hemosiderosis (Chronic overload)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 363,
    "drug_name": "Fexofenadine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Chronic Idiopathic Urticaria",
        "mechanism_of_action": "Selective peripheral H1 receptor antagonist; active metabolite of terfenadine; does not cross BBB (non-sedating)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Decreased absorption with fruit juices (OATP inhibition)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 364,
    "drug_name": "Fidaxomicin",
    "pharmacologic_class": [
      "Macrolide Antibiotic (Macrocyclic)",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Clostridioides difficile-associated Diarrhea (CDAD)",
        "mechanism_of_action": "Inhibits bacterial RNA polymerase; prevents RNA synthesis. Bactericidal against C. difficile with minimal systemic absorption."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions (Angioedema)",
      "GI Hemorrhage"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 365,
    "drug_name": "Filgrastim",
    "pharmacologic_class": [
      "G-CSF (Granulocyte Colony-Stimulating Factor)",
      "Hematopoietic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Neutropenia (Chemotherapy-induced / Chronic)",
        "mechanism_of_action": "Binds to G-CSF receptors on hematopoietic cells; stimulates proliferation, differentiation, and activation of neutrophils."
      }
    ],
    "common_side_effects": [
      "Bone pain",
      "Nausea",
      "Fever"
    ],
    "adverse_drug_events": [
      "Splenic Rupture (Rare but fatal)",
      "ARDS",
      "Capillary Leak Syndrome",
      "Glomerulonephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 366,
    "drug_name": "Finasteride",
    "pharmacologic_class": [
      "5-Alpha Reductase Inhibitor",
      "BPH / Alopecia Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "BPH / Androgenetic Alopecia (Male)",
        "mechanism_of_action": "Inhibits Type II 5-alpha reductase; prevents conversion of testosterone to dihydrotestosterone (DHT); reduces prostate volume and hair loss."
      }
    ],
    "common_side_effects": [
      "Erectile Dysfunction",
      "Decreased Libido",
      "Ejaculation Disorder"
    ],
    "adverse_drug_events": [
      "High-Grade Prostate Cancer (Risk warning)",
      "Male Breast Cancer",
      "Teratogenicity (Women should not handle crushed tabs)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 367,
    "drug_name": "Fingolimod",
    "pharmacologic_class": [
      "Sphingosine 1-Phosphate Receptor Modulator",
      "Immunomodulator"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Sclerosis (Relapsing forms)",
        "mechanism_of_action": "Metabolized to active phosphate; binds to S1P receptors on lymphocytes; induces receptor internalization; sequesters lymphocytes in lymph nodes; reduces CNS inflammation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flu-like symptoms",
      "Diarrhea",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Bradyarrhythmia / AV Block (First-dose observation required)",
      "Macular Edema",
      "PML (Progressive Multifocal Leukoencephalopathy)",
      "Infections"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 368,
    "drug_name": "Flecainide",
    "pharmacologic_class": [
      "Class Ic Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation / Ventricular Tachycardia (Life-threatening)",
        "mechanism_of_action": "Potent sodium channel blocker; significantly slows conduction velocity (Phase 0) in His-Purkinje system and ventricles; minimal effect on action potential duration."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Visual disturbances",
      "Dyspnea"
    ],
    "adverse_drug_events": [
      "Proarrhythmic Effects (1:1 AV conduction in atrial flutter)",
      "Increased Mortality in Structural Heart Disease (Boxed Warning - CAST trial)",
      "Heart Failure Exacerbation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 369,
    "drug_name": "Fluconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Candidiasis (Systemic/Mucosal) / Cryptococcal Meningitis",
        "mechanism_of_action": "Highly selective inhibitor of fungal cytochrome P450 sterol C-14 alpha-demethylation; disrupts fungal membrane structure."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Abdominal pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hepatotoxicity (Rare)",
      "Severe Skin Reactions (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 370,
    "drug_name": "Flucytosine",
    "pharmacologic_class": [
      "Pyrimidine Antimetabolite",
      "Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Cryptococcosis / Candidiasis (Severe)",
        "mechanism_of_action": "Converted to 5-fluorouracil inside fungal cells; inhibits DNA and RNA synthesis. Synergistic with Amphotericin B."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Bone Marrow Depression (Boxed Warning)",
      "Hepatotoxicity",
      "Enterocolitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 371,
    "drug_name": "Fludarabine",
    "pharmacologic_class": [
      "Purine Analog",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / NHL",
        "mechanism_of_action": "Inhibits DNA polymerase, primase, and ligase; inhibits ribonucleotide reductase; incorporated into DNA/RNA; induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fever",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Boxed Warning)",
      "Autoimmune Hemolytic Anemia (Boxed Warning)",
      "Neurotoxicity (Blindness/Coma - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 372,
    "drug_name": "Fludrocortisone",
    "pharmacologic_class": [
      "Mineralocorticoid",
      "Corticosteroid"
    ],
    "indications_and_moa": [
      {
        "indication": "Addison's Disease / Orthostatic Hypotension (Off-label)",
        "mechanism_of_action": "Potent mineralocorticoid activity; acts on distal tubules to increase sodium reabsorption and potassium excretion; maintains blood pressure."
      }
    ],
    "common_side_effects": [
      "Hypertension",
      "Edema",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypokalemia",
      "Heart Failure",
      "Cardiomegaly"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 373,
    "drug_name": "Flumazenil",
    "pharmacologic_class": [
      "Benzodiazepine Antagonist",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Benzodiazepine Reversal (Sedation/Overdose)",
        "mechanism_of_action": "Competitively inhibits the activity of benzodiazepines at the GABA-A receptor complex."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Agitation",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Seizures (Boxed Warning - especially in chronic benzo users or TCA overdose)",
      "Cardiac Arrhythmias",
      "Resedation (Short half-life)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 374,
    "drug_name": "Flunarizine",
    "pharmacologic_class": [
      "Calcium Channel Blocker",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Migraine Prophylaxis / Vertigo (Not FDA Approved)",
        "mechanism_of_action": "Non-selective calcium channel blocker with H1 blocking activity; inhibits vasoconstriction; protects against brain hypoxia."
      }
    ],
    "common_side_effects": [
      "Weight gain",
      "Drowsiness",
      "Depression"
    ],
    "adverse_drug_events": [
      "Extrapyramidal Symptoms (Parkinsonism)",
      "Severe Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 375,
    "drug_name": "Flunisolide",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Inhaled) / Allergic Rhinitis (Nasal)",
        "mechanism_of_action": "Potent glucocorticoid; inhibits inflammatory cell migration and mediator synthesis; reduces airway responsiveness."
      }
    ],
    "common_side_effects": [
      "Throat irritation",
      "Bad taste",
      "Nasal burning"
    ],
    "adverse_drug_events": [
      "Oropharyngeal Candidiasis",
      "Adrenal Suppression (High dose)",
      "Nasal Septal Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 376,
    "drug_name": "Fluocinolone Acetonide",
    "pharmacologic_class": [
      "Corticosteroid (Medium-High Potency)",
      "Topical Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Dermatoses / Psoriasis",
        "mechanism_of_action": "Anti-inflammatory, antipruritic, and vasoconstrictive properties."
      },
      {
        "indication": "Diabetic Macular Edema (Implant)",
        "mechanism_of_action": "Reduces edema and inflammation in the eye."
      }
    ],
    "common_side_effects": [
      "Burning",
      "Itching",
      "Dry skin"
    ],
    "adverse_drug_events": [
      "Skin Atrophy",
      "Cataracts / Glaucoma (Ocular use)",
      "HPA Axis Suppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 377,
    "drug_name": "Fluocinonide",
    "pharmacologic_class": [
      "Corticosteroid (High Potency)",
      "Topical Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Dermatoses / Psoriasis",
        "mechanism_of_action": "High potency corticosteroid; suppresses inflammation and immune response."
      }
    ],
    "common_side_effects": [
      "Burning",
      "Itching",
      "Headache"
    ],
    "adverse_drug_events": [
      "Skin Atrophy / Striae",
      "HPA Axis Suppression",
      "Secondary Infections"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 378,
    "drug_name": "Fluorometholone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Ophthalmic Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Ocular Inflammation",
        "mechanism_of_action": "Suppresses inflammatory response in the eye; less likely to raise intraocular pressure than dexamethasone."
      }
    ],
    "common_side_effects": [
      "Blurred vision",
      "Eye irritation",
      "Stinging"
    ],
    "adverse_drug_events": [
      "Increased Intraocular Pressure / Glaucoma",
      "Cataracts",
      "Secondary Eye Infection"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 379,
    "drug_name": "Fluorouracil (5-FU)",
    "pharmacologic_class": [
      "Antimetabolite (Pyrimidine Analog)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Colorectal / Breast / Gastric Cancer / Actinic Keratosis",
        "mechanism_of_action": "Converted to FdUMP; inhibits thymidylate synthase; blocks DNA synthesis (S-phase specific); incorporated into RNA."
      }
    ],
    "common_side_effects": [
      "Stomatitis",
      "Diarrhea",
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Severe Mucositis / Diarrhea",
      "Myelosuppression",
      "Hand-Foot Syndrome",
      "Cardiotoxicity (Coronary Vasospasm)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 380,
    "drug_name": "Fluoxetine",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / OCD / Bulimia / Panic Disorder",
        "mechanism_of_action": "Selectively inhibits serotonin reuptake; long half-life active metabolite (norfluoxetine)."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Nausea",
      "Sexual Dysfunction",
      "Anxiety"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 381,
    "drug_name": "Fluphenazine",
    "pharmacologic_class": [
      "Phenothiazine (High Potency)",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia",
        "mechanism_of_action": "Potent antagonist at dopamine D2 receptors in the mesolimbic system; high risk of EPS due to strong D2 blockade in nigrostriatal pathway."
      }
    ],
    "common_side_effects": [
      "Extrapyramidal Symptoms (Parkinsonism, Dystonia)",
      "Drowsiness",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 382,
    "drug_name": "Flurazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia",
        "mechanism_of_action": "Enhances GABAergic inhibition via GABA-A receptors. Long-acting metabolite causes hangover effect."
      }
    ],
    "common_side_effects": [
      "Daytime drowsiness",
      "Dizziness",
      "Ataxia"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence / Abuse",
      "Complex Sleep Behaviors"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 383,
    "drug_name": "Flurbiprofen",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Arthritis / Ocular Inflammation (Drops)",
        "mechanism_of_action": "Non-selective COX inhibitor; reduces prostaglandin synthesis. Ophthalmic form prevents intraoperative miosis."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Stinging (Ophthalmic)",
      "Headache"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 384,
    "drug_name": "Flutamide",
    "pharmacologic_class": [
      "Non-steroidal Antiandrogen",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer",
        "mechanism_of_action": "Competitively blocks androgen receptors; inhibits androgen uptake and nuclear binding in target tissues."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Galactorrhea/Gynecomastia",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning - Fatal liver failure)",
      "Methemoglobinemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 385,
    "drug_name": "Fluticasone Propionate",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / Allergic Rhinitis / Dermatoses",
        "mechanism_of_action": "High-potency glucocorticoid; potent anti-inflammatory effects; low systemic bioavailability."
      }
    ],
    "common_side_effects": [
      "Nasal irritation (Spray)",
      "Oral candidiasis (Inhaler)",
      "Hoarseness"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression (High dose)",
      "Nasal Septal Perforation",
      "Glaucoma / Cataracts"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 386,
    "drug_name": "Fluvastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / ASCVD Prevention",
        "mechanism_of_action": "Inhibits HMG-CoA reductase; reduces hepatic cholesterol synthesis; increases LDL receptor expression."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis",
      "Hepatotoxicity",
      "Immune-Mediated Necrotizing Myopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 387,
    "drug_name": "Fluvoxamine",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Obsessive-Compulsive Disorder (OCD)",
        "mechanism_of_action": "Selectively inhibits serotonin reuptake. Potent CYP1A2 inhibitor."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Somnolence",
      "Insomnia",
      "Sexual Dysfunction"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Significant Drug Interactions (CYP inhibition)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 388,
    "drug_name": "Folic Acid",
    "pharmacologic_class": [
      "Vitamin (B9)",
      "Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Megaloblastic Anemia / Pregnancy (NTD Prevention)",
        "mechanism_of_action": "Essential for nucleoprotein synthesis and erythropoiesis; prevents neural tube defects."
      }
    ],
    "common_side_effects": [
      "Well tolerated",
      "Bad taste (High doses)"
    ],
    "adverse_drug_events": [
      "Masking of Vitamin B12 Deficiency (Neurologic damage progresses)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 389,
    "drug_name": "Fondaparinux",
    "pharmacologic_class": [
      "Factor Xa Inhibitor (Indirect)",
      "Anticoagulant"
    ],
    "indications_and_moa": [
      {
        "indication": "DVT/PE Prophylaxis and Treatment",
        "mechanism_of_action": "Synthetic pentasaccharide; binds to Antithrombin III causing a conformational change that selectively inhibits Factor Xa. No effect on Thrombin."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Injection site reactions",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Spinal/Epidural Hematoma (Boxed Warning)",
      "Major Hemorrhage",
      "Thrombocytopenia (Rarely HIT)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 390,
    "drug_name": "Formoterol",
    "pharmacologic_class": [
      "LABA (Long-Acting Beta Agonist)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Maintenance) / COPD",
        "mechanism_of_action": "Selectively stimulates beta-2 adrenergic receptors; increases cAMP; relaxes bronchial smooth muscle. Rapid onset but long duration."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Palpitations",
      "Headache"
    ],
    "adverse_drug_events": [
      "Asthma-related Death (Boxed Warning for LABA monotherapy in Asthma)",
      "Paradoxical Bronchospasm",
      "Hypokalemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 391,
    "drug_name": "Fosamprenavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Prodrug of amprenavir; inhibits HIV-1 protease; prevents cleavage of viral polyproteins. Contains sulfonamide moiety."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions (SJS)",
      "Nephrolithiasis",
      "Hemolytic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 392,
    "drug_name": "Fosaprepitant",
    "pharmacologic_class": [
      "NK1 Receptor Antagonist",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "CINV Prevention",
        "mechanism_of_action": "IV prodrug of aprepitant; selectively blocks substance P binding to NK1 receptors in the CNS."
      }
    ],
    "common_side_effects": [
      "Infusion site reactions",
      "Fatigue",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 393,
    "drug_name": "Foscarnet",
    "pharmacologic_class": [
      "Pyrophosphate Analog",
      "Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "CMV Retinitis / Acyclovir-resistant HSV",
        "mechanism_of_action": "Directly inhibits viral DNA polymerase and reverse transcriptase by binding to the pyrophosphate exchange site. Does not require phosphorylation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Fever",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Renal Impairment (Boxed Warning)",
      "Seizures (Boxed Warning - Electrolyte imbalances)",
      "Severe Electrolyte Disturbances (Hypocalcemia, Hypomagnesemia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 394,
    "drug_name": "Fosfomycin",
    "pharmacologic_class": [
      "Phosphonic Acid Derivative",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Uncomplicated UTI (Cystitis)",
        "mechanism_of_action": "Inhibits enolpyruvyl transferase (MurA); blocks the first step of bacterial cell wall synthesis (peptidoglycan formation)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 395,
    "drug_name": "Fosinopril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure",
        "mechanism_of_action": "Phosphinic acid ACE inhibitor; prevents Angiotensin II formation. Unique dual hepatic/renal elimination (safer in renal impairment)."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 396,
    "drug_name": "Fosphenytoin",
    "pharmacologic_class": [
      "Hydantoin Anticonvulsant",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Status Epilepticus / Seizure Prevention",
        "mechanism_of_action": "Water-soluble prodrug of phenytoin; stabilizes neuronal membranes by blocking voltage-gated sodium channels."
      }
    ],
    "common_side_effects": [
      "Pruritus/Paresthesia (during infusion)",
      "Nystagmus",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Cardiovascular Collapse / Arrhythmias (Rapid infusion - Boxed Warning)",
      "Severe Skin Reactions (SJS/TEN)",
      "Purple Glove Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 397,
    "drug_name": "Fresh Frozen Plasma (FFP)",
    "pharmacologic_class": [
      "Blood Product",
      "Volume/Coagulation Replacer"
    ],
    "indications_and_moa": [
      {
        "indication": "Coagulopathy / Warfarin Reversal",
        "mechanism_of_action": "Replaces all coagulation factors (II, V, VII, IX, X, XI) and plasma proteins."
      }
    ],
    "common_side_effects": [
      "Fever",
      "Urticaria"
    ],
    "adverse_drug_events": [
      "TRALI (Transfusion-Related Acute Lung Injury)",
      "TACO (Transfusion-Associated Circulatory Overload)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 398,
    "drug_name": "Fulvestrant",
    "pharmacologic_class": [
      "Estrogen Receptor Downregulator",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (HR+)",
        "mechanism_of_action": "Competitively binds to estrogen receptors; induces receptor degradation (downregulation); pure anti-estrogen (no agonist activity)."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Nausea",
      "Bone pain",
      "Hot flashes"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Bleeding (Injection site)",
      "Hepatic Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 399,
    "drug_name": "Furosemide",
    "pharmacologic_class": [
      "Loop Diuretic",
      "Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema / Hypertension",
        "mechanism_of_action": "Inhibits Na+/K+/2Cl- co-transporter in the ascending Loop of Henle; potent natriuresis and diuresis."
      }
    ],
    "common_side_effects": [
      "Polyuria",
      "Dizziness",
      "Muscle cramps"
    ],
    "adverse_drug_events": [
      "Severe Electrolyte Imbalance (Hypokalemia)",
      "Ototoxicity (High doses)",
      "Sulfonamide Allergy Cross-reactivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 400,
    "drug_name": "Fusidic Acid",
    "pharmacologic_class": [
      "Fusidane Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Skin Infections (Staph) / Osteomyelitis (Not FDA Approved)",
        "mechanism_of_action": "Inhibits bacterial protein synthesis by interfering with elongation factor G (EF-G); prevents translocation on the ribosome. Bacteriostatic."
      }
    ],
    "common_side_effects": [
      "GI Upset",
      "Skin rash",
      "Jaundice (Oral)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Reversible)",
      "Rhabdomyolysis (with statins)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 401,
    "drug_name": "Gabapentin",
    "pharmacologic_class": [
      "Anticonvulsant",
      "GABA Analog"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial Seizures / Postherpetic Neuralgia",
        "mechanism_of_action": "Binds to the alpha-2-delta subunit of voltage-gated calcium channels; reduces calcium influx and release of excitatory neurotransmitters (glutamate, substance P, norepinephrine). Does NOT bind GABA receptors."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Ataxia",
      "Peripheral Edema"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Suicidal Ideation",
      "Anaphylaxis / Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 402,
    "drug_name": "Galantamine",
    "pharmacologic_class": [
      "Acetylcholinesterase Inhibitor",
      "Anti-Alzheimer's Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Alzheimer's Disease (Mild to Moderate)",
        "mechanism_of_action": "Dual mechanism: 1) Reversibly inhibits acetylcholinesterase; 2) Allosterically modulates nicotinic acetylcholine receptors to enhance cholinergic transmission."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Decreased appetite"
    ],
    "adverse_drug_events": [
      "Bradycardia / Heart Block",
      "Serious Skin Reactions (SJS/AGEP)",
      "GI Bleeding (Increased acid)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 403,
    "drug_name": "Ganciclovir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (CMV)"
    ],
    "indications_and_moa": [
      {
        "indication": "CMV Retinitis (Immunocompromised) / CMV Prevention (Transplant)",
        "mechanism_of_action": "Phosphorylated by viral kinase (UL97) then cellular kinases to triphosphate; competitively inhibits viral DNA polymerase and terminates DNA elongation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Fever",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Neutropenia/Anemia/Thrombocytopenia - Boxed Warning)",
      "Impairment of Fertility (Boxed Warning)",
      "Carcinogenicity/Teratogenicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 404,
    "drug_name": "Gatifloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bacterial Conjunctivitis (Ophthalmic)",
        "mechanism_of_action": "Inhibits bacterial DNA gyrase and Topoisomerase IV; blocks DNA replication and transcription."
      }
    ],
    "common_side_effects": [
      "Eye irritation",
      "Dysgeusia",
      "Eye pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Superinfection"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 405,
    "drug_name": "Gefitinib",
    "pharmacologic_class": [
      "EGFR Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic NSCLC (EGFR exon 19 deletions or exon 21 L858R mutations)",
        "mechanism_of_action": "Reversibly inhibits the kinase activity of EGFR; blocks downstream signaling; inhibits proliferation of cells dependent on EGFR signaling."
      }
    ],
    "common_side_effects": [
      "Rash (Acneiform)",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Interstitial Lung Disease (ILD)",
      "Hepatotoxicity",
      "Gastrointestinal Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 406,
    "drug_name": "Gemcitabine",
    "pharmacologic_class": [
      "Nucleoside Metabolic Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pancreatic / Lung / Breast / Ovarian Cancer",
        "mechanism_of_action": "Converted to diphosphate and triphosphate nucleosides; inhibits ribonucleotide reductase (diphosphate); incorporated into DNA causing chain termination (triphosphate)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Flu-like symptoms",
      "Rash"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Dose-limiting)",
      "Pulmonary Toxicity (ARDS/Pneumonitis)",
      "Hemolytic Uremic Syndrome (HUS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 407,
    "drug_name": "Gemfibrozil",
    "pharmacologic_class": [
      "Fibrate",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertriglyceridemia (Type IV/V) / CHD Risk Reduction (Type IIb)",
        "mechanism_of_action": "Activates PPAR-alpha; increases lipoprotein lipase activity; reduces VLDL production; increases HDL."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Abdominal pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Rhabdomyolysis (Contraindicated with statins - higher risk than fenofibrate)",
      "Cholelithiasis",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 408,
    "drug_name": "Gemifloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Community-Acquired Pneumonia / Chronic Bronchitis Exacerbation",
        "mechanism_of_action": "Dual inhibition of DNA gyrase and Topoisomerase IV. Enhanced activity against Strep. pneumoniae."
      }
    ],
    "common_side_effects": [
      "Rash (High incidence, esp. in women <40)",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Tendinitis / Rupture (Boxed Warning)",
      "Peripheral Neuropathy (Boxed Warning)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 409,
    "drug_name": "Gentamicin",
    "pharmacologic_class": [
      "Aminoglycoside",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Gram-Negative Infections",
        "mechanism_of_action": "Binds irreversibly to 30S ribosomal subunit; inhibits protein synthesis; bactericidal (concentration-dependent)."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Nausea",
      "Vomiting"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Boxed Warning)",
      "Ototoxicity (Vestibular/Auditory - Boxed Warning)",
      "Neuromuscular Blockade (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 410,
    "drug_name": "Gliclazide",
    "pharmacologic_class": [
      "Sulfonylurea (2nd Generation)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Stimulates insulin secretion by closing ATP-sensitive K+ channels on pancreatic beta cells; restores first-phase insulin release. (Not FDA approved - widely used globally)."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Weight gain",
      "GI upset"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hematologic Abnormalities",
      "Cholestatic Jaundice"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 411,
    "drug_name": "Glimepiride",
    "pharmacologic_class": [
      "Sulfonylurea (3rd Generation)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Stimulates insulin release from pancreatic beta cells via K-ATP channel blockade; may increase peripheral insulin sensitivity."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Weight gain",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hemolytic Anemia (G6PD deficiency)",
      "Hypersensitivity / SJS"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 412,
    "drug_name": "Glipizide",
    "pharmacologic_class": [
      "Sulfonylurea (2nd Generation)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Stimulates pancreatic insulin secretion. Short half-life reduces risk of prolonged hypoglycemia compared to glyburide."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Nausea",
      "Diarrhea",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Cholestatic Jaundice",
      "Disulfiram-like reaction (rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 413,
    "drug_name": "Glucagon",
    "pharmacologic_class": [
      "Antihypoglycemic Agent",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Hypoglycemia / Beta-blocker Overdose",
        "mechanism_of_action": "Stimulates adenylate cyclase; increases cAMP; promotes hepatic glycogenolysis and gluconeogenesis; relaxes smooth muscle (GI diagnostic aid)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Hypotension (Transient)",
      "Injection site reaction"
    ],
    "adverse_drug_events": [
      "Necrolytic Migratory Erythema (Chronic use)",
      "Hyperglycemia",
      "Hypokalemia (Overdose treatment)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 414,
    "drug_name": "Glyburide (Glibenclamide)",
    "pharmacologic_class": [
      "Sulfonylurea (2nd Generation)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Stimulates pancreatic insulin secretion. Long-acting active metabolites increase hypoglycemia risk (avoid in elderly/renal failure)."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Weight gain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Prolonged Hypoglycemia",
      "SIADH / Hyponatremia",
      "Disulfiram-like reaction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 415,
    "drug_name": "Glycerin",
    "pharmacologic_class": [
      "Osmotic Laxative / Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation (Suppository) / Glaucoma (Oral)",
        "mechanism_of_action": "Rectal: Hyperosmotic effect draws water into colon; local irritant. Oral: Increases plasma osmolality; draws fluid from eye/brain into plasma."
      }
    ],
    "common_side_effects": [
      "Rectal discomfort",
      "Nausea (Oral)",
      "Headache (Oral)"
    ],
    "adverse_drug_events": [
      "Hyperosmolar Coma (Oral high dose)",
      "Dehydration",
      "Rectal bleeding"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 416,
    "drug_name": "Glycopyrrolate",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antisecretory"
    ],
    "indications_and_moa": [
      {
        "indication": "Drooling / Pre-operative Secretion Reduction / COPD",
        "mechanism_of_action": "Quaternary ammonium compound; competitively inhibits muscarinic receptors; reduces secretions; minimal CNS penetration."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Urinary retention",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Heat Stroke (Anhidrosis)",
      "Paradoxical Bronchospasm",
      "Intestinal Obstruction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 417,
    "drug_name": "Golimumab",
    "pharmacologic_class": [
      "TNF Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "RA / Psoriatic Arthritis / Ankylosing Spondylitis / Ulcerative Colitis",
        "mechanism_of_action": "Human monoclonal antibody; binds to TNF-alpha; prevents binding to receptors; neutralizes inflammatory activity."
      }
    ],
    "common_side_effects": [
      "Upper respiratory infection",
      "Injection site reaction",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB/Fungal - Boxed Warning)",
      "Malignancy (Boxed Warning)",
      "Heart Failure Exacerbation",
      "Lupus-like Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 418,
    "drug_name": "Goserelin",
    "pharmacologic_class": [
      "GnRH Agonist",
      "Antineoplastic / Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer / Breast Cancer / Endometriosis",
        "mechanism_of_action": "Potent LHRH agonist; chronic administration desensitizes pituitary receptors; downregulates LH/FSH secretion; leads to medical castration."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Sexual dysfunction",
      "Bone pain (Tumor flare)",
      "Vaginal dryness"
    ],
    "adverse_drug_events": [
      "Tumor Flare (Spinal cord compression/ureteral obstruction - initial)",
      "Osteoporosis / Fractures",
      "Cardiovascular Disease Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 419,
    "drug_name": "Granisetron",
    "pharmacologic_class": [
      "5-HT3 Receptor Antagonist",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Chemotherapy/Radiation-Induced Nausea and Vomiting",
        "mechanism_of_action": "Selectively blocks serotonin 5-HT3 receptors centrally (CTZ) and peripherally (vagal nerve terminals); prevents emetic reflex."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Constipation",
      "Asthenia"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "QT Prolongation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 420,
    "drug_name": "Griseofulvin",
    "pharmacologic_class": [
      "Antifungal (Mitotic Inhibitor)"
    ],
    "indications_and_moa": [
      {
        "indication": "Tinea Infections (Skin/Hair/Nails)",
        "mechanism_of_action": "Deposited in keratin precursor cells; binds to tubulin; disrupts mitotic spindle formation; arrests fungal cell division in metaphase."
      }
    ],
    "common_side_effects": [
      "Photosensitivity",
      "Headache",
      "GI upset"
    ],
    "adverse_drug_events": [
      "Serious Skin Reactions (SJS/TEN)",
      "Hepatotoxicity",
      "Porphyria Exacerbation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 421,
    "drug_name": "Guaifenesin",
    "pharmacologic_class": [
      "Expectorant"
    ],
    "indications_and_moa": [
      {
        "indication": "Chest Congestion",
        "mechanism_of_action": "Increases volume and reduces viscosity of respiratory tract secretions; stimulates vagal pathway to increase bronchial secretions."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Nephrolithiasis (High doses)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 422,
    "drug_name": "Guanfacine",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Antihypertensive / ADHD Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / ADHD",
        "mechanism_of_action": "Selectively stimulates alpha-2A adrenergic receptors in the brainstem (reduces sympathetic outflow) and prefrontal cortex (improves working memory/attention)."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Fatigue",
      "Dry mouth",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Bradycardia / Heart Block",
      "Rebound Hypertension (Abrupt withdrawal)",
      "Syncope"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 423,
    "drug_name": "Halobetasol Propionate",
    "pharmacologic_class": [
      "Corticosteroid (Super-High Potency)",
      "Topical Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Plaque Psoriasis / Dermatoses",
        "mechanism_of_action": "Class I corticosteroid; induces lipocortins; inhibits arachidonic acid release; potent vasoconstriction and anti-inflammatory activity."
      }
    ],
    "common_side_effects": [
      "Stinging",
      "Burning",
      "Itching"
    ],
    "adverse_drug_events": [
      "HPA Axis Suppression",
      "Skin Atrophy / Striae",
      "Cushing's Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 424,
    "drug_name": "Haloperidol",
    "pharmacologic_class": [
      "Butyrophenone",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Acute Psychosis / Tourette's",
        "mechanism_of_action": "Strong antagonist at dopamine D2 receptors in mesolimbic and nigrostriatal pathways. High potency typical antipsychotic."
      }
    ],
    "common_side_effects": [
      "Extrapyramidal Symptoms (Parkinsonism, Dystonia, Akathisia)",
      "Sedation"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "QT Prolongation / Torsades de Pointes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 425,
    "drug_name": "Halothane",
    "pharmacologic_class": [
      "Inhalation Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia (Maintenance)",
        "mechanism_of_action": "Modulates GABA-A, glycine, and NMDA receptors; alters neuronal membrane fluidity. Potent anesthetic, weak analgesic."
      }
    ],
    "common_side_effects": [
      "Shivering",
      "Nausea/Vomiting",
      "Bradycardia",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Halothane Hepatitis (Immune-mediated liver necrosis)",
      "Malignant Hyperthermia",
      "Cardiac Arrhythmias (Sensitizes myocardium to catecholamines)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 426,
    "drug_name": "Heparin (Unfractionated)",
    "pharmacologic_class": [
      "Anticoagulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Thrombosis Prophylaxis/Treatment",
        "mechanism_of_action": "Binds to Antithrombin III; accelerates inactivation of Thrombin (IIa) and Factor Xa. Prevents fibrin formation."
      }
    ],
    "common_side_effects": [
      "Bleeding",
      "Injection site bruising",
      "Transient thrombocytopenia"
    ],
    "adverse_drug_events": [
      "Heparin-Induced Thrombocytopenia (HIT) with Thrombosis",
      "Major Hemorrhage",
      "Osteoporosis (Long-term use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 427,
    "drug_name": "Hydralazine",
    "pharmacologic_class": [
      "Direct Vasodilator",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure (with Isosorbide Dinitrate)",
        "mechanism_of_action": "Directly relaxes arteriolar smooth muscle; reduces peripheral vascular resistance. Mechanism may involve inhibition of IP3-induced calcium release."
      }
    ],
    "common_side_effects": [
      "Reflex Tachycardia",
      "Headache",
      "Palpitations",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Drug-Induced Lupus Erythematosus",
      "Angina Pectoris (due to tachycardia)",
      "Peripheral Neuritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 428,
    "drug_name": "Hydrochlorothiazide (HCTZ)",
    "pharmacologic_class": [
      "Thiazide Diuretic",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Edema",
        "mechanism_of_action": "Inhibits Na+/Cl- symporter in the distal convoluted tubule; increases excretion of sodium, water, and potassium; decreases calcium excretion."
      }
    ],
    "common_side_effects": [
      "Frequent urination",
      "Photosensitivity",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Electrolyte Imbalance (Hypokalemia, Hyponatremia)",
      "Hyperuricemia / Gout",
      "Hyperglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 429,
    "drug_name": "Hydrocodone",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic / Antitussive"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Pain / Cough",
        "mechanism_of_action": "Binds to mu-opioid receptors in the CNS; alters pain perception and reaction; suppresses cough reflex."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea",
      "Sedation",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Adrenal Insufficiency"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 430,
    "drug_name": "Hydrocortisone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Adrenal Insufficiency / Inflammatory Conditions",
        "mechanism_of_action": "Short-acting corticosteroid with both glucocorticoid (anti-inflammatory) and mineralocorticoid (salt-retaining) activity. Identical to endogenous cortisol."
      }
    ],
    "common_side_effects": [
      "Fluid retention",
      "Insomnia",
      "Increased appetite"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Cushing's Syndrome",
      "Hyperglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 431,
    "drug_name": "Hydromorphone",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Pain",
        "mechanism_of_action": "Potent mu-opioid receptor agonist; inhibits ascending pain pathways; CNS depression. More potent than morphine."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Constipation",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 432,
    "drug_name": "Hydroxychloroquine",
    "pharmacologic_class": [
      "Aminoquinoline",
      "Antimalarial / DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Malaria / RA / SLE",
        "mechanism_of_action": "Inhibits lysosomal function and antigen presentation; interferes with parasitic vesicle function (heme polymerization). Anti-inflammatory/Immunomodulatory."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Stomach pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Retinopathy (Macular damage - Permanent)",
      "Cardiomyopathy / QT Prolongation",
      "Hemolysis (G6PD deficiency)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 433,
    "drug_name": "Hydroxyprogesterone Caproate",
    "pharmacologic_class": [
      "Progestin",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Preterm Birth Prevention",
        "mechanism_of_action": "Synthetic progestin; relaxes uterine smooth muscle; maintains pregnancy; inhibits secretion of pituitary gonadotropins."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Hives",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Thromboembolism",
      "Allergic Reactions",
      "Glucose Intolerance"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 434,
    "drug_name": "Hydroxyurea",
    "pharmacologic_class": [
      "Antimetabolite",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CML / Sickle Cell Anemia / Polycythemia Vera",
        "mechanism_of_action": "Inhibits ribonucleotide reductase; blocks conversion of ribonucleotides to deoxyribonucleotides; halts DNA synthesis (S-phase specific). Increases fetal hemoglobin (HbF)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Hyperpigmentation",
      "Nail changes"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Boxed Warning)",
      "Secondary Malignancies (Leukemia/Skin cancer - Boxed Warning)",
      "Cutaneous Vasculitic Ulcers"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 435,
    "drug_name": "Hydroxyzine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Antihistamine / Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Pruritus / Sedation",
        "mechanism_of_action": "Blocks H1 receptors; suppresses activity in subcortical CNS areas. Skeletal muscle relaxing, bronchodilator, and antiemetic properties."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes",
      "Tissue Necrosis (if injected SC or Intra-arterially)",
      "Acute Generalized Exanthematous Pustulosis (AGEP)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 436,
    "drug_name": "Hyoscine (Scopolamine)",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Motion Sickness / PONV",
        "mechanism_of_action": "Competitively inhibits muscarinic receptors in the vestibular system and vomiting center; blocks cholinergic transmission from vestibular nuclei to CNS."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Drowsiness",
      "Blurred vision",
      "Dilated pupils"
    ],
    "adverse_drug_events": [
      "Anticholinergic Delirium",
      "Acute Glaucoma (Narrow angle)",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 437,
    "drug_name": "Ibandronate",
    "pharmacologic_class": [
      "Bisphosphonate",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis (Postmenopausal)",
        "mechanism_of_action": "Inhibits farnesyl pyrophosphate synthase in osteoclasts; prevents protein prenylation; inhibits osteoclast activity and induces apoptosis."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Back pain",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Esophagitis / Esophageal Ulcers",
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 438,
    "drug_name": "Ibuprofen",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Antipyretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain / Inflammation / Fever / PDA Closure",
        "mechanism_of_action": "Reversibly inhibits COX-1 and COX-2 enzymes; decreases prostaglandin precursors."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Nausea",
      "Epigastric pain"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity / Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 439,
    "drug_name": "Ibutilide",
    "pharmacologic_class": [
      "Class III Antiarrhythmic",
      "Potassium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation/Flutter Conversion",
        "mechanism_of_action": "Prolongs action potential duration and effective refractory period by activating a slow inward sodium current (late INa) and blocking delayed rectifier potassium current."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Torsades de Pointes / Sustained VT (Boxed Warning)",
      "Heart Block"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 440,
    "drug_name": "Idarubicin",
    "pharmacologic_class": [
      "Anthracycline",
      "Antineoplastic Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "AML",
        "mechanism_of_action": "Intercalates DNA; inhibits topoisomerase II; highly lipophilic analog of daunorubicin with greater cellular uptake."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Alopecia",
      "Mucositis",
      "Red urine"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (CHF - Boxed Warning)",
      "Severe Myelosuppression (Boxed Warning)",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 441,
    "drug_name": "Idelalisib",
    "pharmacologic_class": [
      "PI3K Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / Follicular Lymphoma",
        "mechanism_of_action": "Inhibits Phosphoinositide 3-kinase delta (PI3K-delta); blocks signaling pathways (B-cell receptor); induces apoptosis in malignant B-cells."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Pyrexia",
      "Fatigue",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Fatal Hepatotoxicity (Boxed Warning)",
      "Severe Diarrhea / Colitis (Boxed Warning)",
      "Pneumonitis (Boxed Warning)",
      "Intestinal Perforation (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 442,
    "drug_name": "Ifosfamide",
    "pharmacologic_class": [
      "Alkylating Agent (Nitrogen Mustard)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Testicular Cancer / Sarcoma / Lymphoma",
        "mechanism_of_action": "Prodrug activated by CYP450; cross-links DNA strands; inhibits DNA synthesis. Structural analog of cyclophosphamide."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Alopecia",
      "Hematuria"
    ],
    "adverse_drug_events": [
      "Hemorrhagic Cystitis (Dose-limiting - Urotoxicity due to acrolein; Mesna required)",
      "CNS Toxicity (Encephalopathy/Coma - Boxed Warning)",
      "Myelosuppression (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 443,
    "drug_name": "Iloperidone",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia",
        "mechanism_of_action": "Antagonist at dopamine D2 and serotonin 5-HT2A receptors. High affinity for alpha-1 receptors (risk of hypotension)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Dry mouth",
      "Fatigue",
      "Nasal congestion"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Significant risk)",
      "Orthostatic Hypotension",
      "Priapism",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 444,
    "drug_name": "Iloprost",
    "pharmacologic_class": [
      "Prostacyclin Analog",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension (Inhaled)",
        "mechanism_of_action": "Dilates pulmonary arterial vascular beds; inhibits platelet aggregation; improves symptoms and exercise capacity."
      }
    ],
    "common_side_effects": [
      "Flushing",
      "Cough",
      "Headache",
      "Jaw pain"
    ],
    "adverse_drug_events": [
      "Hypotension / Syncope",
      "Bronchospasm",
      "Bleeding events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 445,
    "drug_name": "Imatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (TKI)",
      "BCR-ABL Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "CML / GIST / Ph+ ALL",
        "mechanism_of_action": "Inhibits BCR-ABL tyrosine kinase (constitutive in Ph+ CML); also inhibits c-KIT and PDGFR. Induces apoptosis in positive cells."
      }
    ],
    "common_side_effects": [
      "Edema (Periorbital/Peripheral)",
      "Nausea",
      "Muscle cramps",
      "Rash"
    ],
    "adverse_drug_events": [
      "Severe Fluid Retention / Pleural Effusion",
      "Hepatotoxicity",
      "Cardiac Dysfunction (CHF)",
      "GI Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 446,
    "drug_name": "Imipenem-Cilastatin",
    "pharmacologic_class": [
      "Carbapenem + Dehydropeptidase Inhibitor",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Infections (Polymicrobial/Resistant)",
        "mechanism_of_action": "Imipenem inhibits cell wall synthesis (broadest spectrum beta-lactam). Cilastatin inhibits renal dehydropeptidase I, preventing imipenem degradation and nephrotoxicity."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Phlebitis"
    ],
    "adverse_drug_events": [
      "Seizures (Risk factors: CNS lesions, renal failure)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 447,
    "drug_name": "Imipramine",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (Tertiary Amine)"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Nocturnal Enuresis",
        "mechanism_of_action": "Inhibits reuptake of serotonin and norepinephrine. Significant anticholinergic, antihistaminic, and alpha-blocking effects."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Blurred vision",
      "Orthostatic hypotension"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Cardiotoxicity (Arrhythmias/Heart Block - Overdose fatal)",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 448,
    "drug_name": "Imiquimod",
    "pharmacologic_class": [
      "Immune Response Modifier",
      "Topical Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Genital Warts / Actinic Keratosis / Basal Cell Carcinoma",
        "mechanism_of_action": "Toll-like receptor 7 (TLR7) agonist; induces cytokines (Interferon-alpha, TNF-alpha, IL-12); stimulates innate and acquired immune response against virus/tumor."
      }
    ],
    "common_side_effects": [
      "Erythema",
      "Scabbing/Flaking",
      "Edema at site",
      "Burning"
    ],
    "adverse_drug_events": [
      "Flu-like Symptoms (Systemic absorption)",
      "Severe Skin Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 449,
    "drug_name": "Indapamide",
    "pharmacologic_class": [
      "Thiazide-like Diuretic",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Edema",
        "mechanism_of_action": "Inhibits Na+/Cl- reabsorption in distal tubule; direct vasodilatory effect via calcium channel blockade/prostacyclin stimulation."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Muscle cramps"
    ],
    "adverse_drug_events": [
      "Electrolyte Imbalance (Hypokalemia)",
      "Hyperuricemia",
      "Severe Dermatological Reactions (SJS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 450,
    "drug_name": "Indinavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV protease; prevents cleavage of viral polyproteins; results in immature, non-infectious viral particles. Requires acidic environment for absorption."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Abdominal pain",
      "Headache",
      "Metallic taste"
    ],
    "adverse_drug_events": [
      "Nephrolithiasis (Crystal-induced)",
      "Hyperbilirubinemia (Indirect)",
      "Hemolytic Anemia",
      "Diabetes / Hyperglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 451,
    "drug_name": "Indomethacin",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Gout / PDA Closure",
        "mechanism_of_action": "Potent non-selective COX inhibitor; inhibits prostaglandin synthesis. High potency and efficacy in acute gout and closing patent ductus arteriosus (PDA)."
      }
    ],
    "common_side_effects": [
      "Headache (Frontal - severe)",
      "Dyspepsia",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning - High risk)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 452,
    "drug_name": "Infliximab",
    "pharmacologic_class": [
      "TNF Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Crohn's Disease / Ulcerative Colitis / RA / Psoriasis",
        "mechanism_of_action": "Chimeric monoclonal antibody; binds to soluble and transmembrane TNF-alpha; neutralizes biological activity of TNF-alpha; induces apoptosis of TNF-producing cells."
      }
    ],
    "common_side_effects": [
      "Infusion reactions",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB/Fungal - Boxed Warning)",
      "Malignancy (Lymphoma/HSTCL - Boxed Warning)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 453,
    "drug_name": "Insulin Aspart",
    "pharmacologic_class": [
      "Rapid-Acting Insulin Analog",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus",
        "mechanism_of_action": "Regulates glucose metabolism; binds to insulin receptors to facilitate glucose uptake. Proline at B28 replaced by Aspartic acid to reduce hexamer formation and speed absorption."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Lipodystrophy",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 454,
    "drug_name": "Insulin Detemir",
    "pharmacologic_class": [
      "Long-Acting Insulin Analog",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus (Basal)",
        "mechanism_of_action": "Fatty acid side chain (myristic acid) allows albumin binding, prolonging absorption and duration of action. Soluble at neutral pH."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Injection site reactions",
      "Weight gain (often less than NPH/Glargine)"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Allergic Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 455,
    "drug_name": "Insulin Glargine",
    "pharmacologic_class": [
      "Long-Acting Insulin Analog",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus (Basal)",
        "mechanism_of_action": "Precipitates at physiological pH (injected as acidic solution) forming a depot that slowly releases insulin. Provides relatively peakless 24-hour coverage."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Injection site pain (acidic pH)",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Lipodystrophy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 456,
    "drug_name": "Insulin Glulisine",
    "pharmacologic_class": [
      "Rapid-Acting Insulin Analog",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus",
        "mechanism_of_action": "Replaces Asparagine at B3 with Lysine and Lysine at B29 with Glutamic acid; rapid onset/offset similar to Aspart/Lispro."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Injection site reactions",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 457,
    "drug_name": "Insulin Lispro",
    "pharmacologic_class": [
      "Rapid-Acting Insulin Analog",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus",
        "mechanism_of_action": "Reverses Proline at B28 and Lysine at B29; prevents hexamer formation; allows very rapid absorption and onset of action."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Lipodystrophy",
      "Pruritus at site"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 458,
    "drug_name": "Insulin NPH (Isophane)",
    "pharmacologic_class": [
      "Intermediate-Acting Insulin",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus (Basal)",
        "mechanism_of_action": "Suspension of insulin complexed with protamine; protamine delays absorption. Cloudy appearance. Peak effect at 4-12 hours."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia (Risk of nocturnal hypoglycemia)",
      "Weight gain",
      "Injection site reactions"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Protamine Allergy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 459,
    "drug_name": "Insulin Regular",
    "pharmacologic_class": [
      "Short-Acting Insulin",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Diabetes Mellitus / DKA / Hyperkalemia",
        "mechanism_of_action": "Unmodified human insulin. Forms hexamers which delays absorption slightly compared to analogs. Only insulin suitable for IV use."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Weight gain",
      "Lipohypertrophy"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Hypokalemia",
      "Generalized Allergy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 460,
    "drug_name": "Interferon Alpha-2b",
    "pharmacologic_class": [
      "Interferon",
      "Immunomodulator / Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hepatitis B / C / Melanoma / Hairy Cell Leukemia",
        "mechanism_of_action": "Binds to cell surface receptors; induces enzymes that inhibit viral replication; enhances phagocytic activity of macrophages and cytotoxicity of lymphocytes."
      }
    ],
    "common_side_effects": [
      "Flu-like symptoms (Fever, Chills, Myalgia)",
      "Fatigue",
      "Depression"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Disorders (Severe Depression/Suicidality - Boxed Warning)",
      "Autoimmune Disease Exacerbation",
      "Bone Marrow Suppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 461,
    "drug_name": "Interferon Beta-1a",
    "pharmacologic_class": [
      "Interferon",
      "Immunomodulator"
    ],
    "indications_and_moa": [
      {
        "indication": "Relapsing Multiple Sclerosis",
        "mechanism_of_action": "Reduces T-cell migration across BBB; suppresses T-helper 1 cell activity; increases anti-inflammatory cytokines. Exact mechanism in MS unknown."
      }
    ],
    "common_side_effects": [
      "Flu-like symptoms",
      "Injection site reactions",
      "Headache"
    ],
    "adverse_drug_events": [
      "Depression / Suicide",
      "Hepatic Injury",
      "Thrombotic Microangiopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 462,
    "drug_name": "Ipratropium Bromide",
    "pharmacologic_class": [
      "SAMA (Short-Acting Muscarinic Antagonist)",
      "Anticholinergic"
    ],
    "indications_and_moa": [
      {
        "indication": "COPD / Asthma (Adjunct) / Rhinorrhea",
        "mechanism_of_action": "Blocks muscarinic receptors in bronchial smooth muscle; causes bronchodilation. Quaternary ammonium (poor systemic absorption)."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Taste alteration",
      "Nasal dryness (Spray)"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Urinary Retention (in susceptible patients)",
      "Worsening Glaucoma (if sprayed in eyes)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 463,
    "drug_name": "Irbesartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Diabetic Nephropathy",
        "mechanism_of_action": "Selectively blocks Angiotensin II binding to AT1 receptors; prevents vasoconstriction and aldosterone secretion; renoprotective effects."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Hyperkalemia"
    ],
    "adverse_drug_events": [
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 464,
    "drug_name": "Irinotecan",
    "pharmacologic_class": [
      "Topoisomerase I Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Colorectal Cancer",
        "mechanism_of_action": "Prodrug converted to SN-38; binds to Topoisomerase I-DNA complex; prevents religation of single-strand breaks; causes double-strand DNA breakage and cell death."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Early and Late)",
      "Nausea/Vomiting",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "Severe Diarrhea (Late onset - life threatening - Boxed Warning)",
      "Severe Myelosuppression (Boxed Warning)",
      "Cholinergic Syndrome (Early diarrhea)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 465,
    "drug_name": "Iron Dextran",
    "pharmacologic_class": [
      "Parenteral Iron",
      "Hematinic"
    ],
    "indications_and_moa": [
      {
        "indication": "Iron Deficiency Anemia (Oral intolerance)",
        "mechanism_of_action": "Replenishes iron stores; iron is released from dextran complex by reticuloendothelial system and incorporated into ferritin/hemoglobin."
      }
    ],
    "common_side_effects": [
      "Injection site pain/staining",
      "Flushing",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Anaphylactic Reactions (Boxed Warning - Test dose required)",
      "Delayed Serum Sickness-like reaction",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 466,
    "drug_name": "Iron Sucrose",
    "pharmacologic_class": [
      "Parenteral Iron",
      "Hematinic"
    ],
    "indications_and_moa": [
      {
        "indication": "Iron Deficiency Anemia (CKD)",
        "mechanism_of_action": "Polynuclear iron (III)-hydroxide in sucrose complex; releases iron to transferrin/ferritin; lower risk of anaphylaxis than dextran."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Muscle cramps",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylactoid Reactions",
      "Iron Overload"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 467,
    "drug_name": "Isoniazid",
    "pharmacologic_class": [
      "Antimycobacterial",
      "Antitubercular"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis (Active/Latent)",
        "mechanism_of_action": "Inhibits mycolic acid synthesis (cell wall component); activated by bacterial catalase-peroxidase (KatG); bactericidal to dividing organisms."
      }
    ],
    "common_side_effects": [
      "Peripheral Neuropathy (prevent with B6)",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe/Fatal - Boxed Warning)",
      "Neurotoxicity (Seizures/Psychosis)",
      "Lupus-like Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 468,
    "drug_name": "Isosorbide Dinitrate",
    "pharmacologic_class": [
      "Nitrate",
      "Vasodilator / Antianginal"
    ],
    "indications_and_moa": [
      {
        "indication": "Angina Pectoris / Heart Failure",
        "mechanism_of_action": "Converted to nitric oxide (NO); stimulates guanylate cyclase; increases cGMP; relaxes vascular smooth muscle (venodilation > arteriolar)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Severe Hypotension / Syncope",
      "Reflex Tachycardia",
      "Methemoglobinemia (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 469,
    "drug_name": "Isosorbide Mononitrate",
    "pharmacologic_class": [
      "Nitrate",
      "Vasodilator / Antianginal"
    ],
    "indications_and_moa": [
      {
        "indication": "Angina Pectoris (Prophylaxis)",
        "mechanism_of_action": "Active metabolite of isosorbide dinitrate; generates NO; causes vasodilation. High bioavailability, longer half-life."
      }
    ],
    "common_side_effects": [
      "Headache (Tolerance develops)",
      "Dizziness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Paradoxical Bradycardia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 470,
    "drug_name": "Isotretinoin",
    "pharmacologic_class": [
      "Retinoid",
      "Acne Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Recalcitrant Nodular Acne",
        "mechanism_of_action": "Reduces sebaceous gland size and sebum production; inhibits P. acnes growth; normalizes follicular keratinization; anti-inflammatory."
      }
    ],
    "common_side_effects": [
      "Dry lips/skin (Cheilitis)",
      "Dry eyes",
      "Epistaxis",
      "Arthralgia"
    ],
    "adverse_drug_events": [
      "Teratogenicity (Severe Birth Defects - Boxed Warning - iPLEDGE)",
      "Psychiatric Disorders (Depression/Suicidality)",
      "Benign Intracranial Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 471,
    "drug_name": "Isoxsuprine",
    "pharmacologic_class": [
      "Beta-Adrenergic Agonist / Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Peripheral Vascular Disease / Premature Labor (Off-label)",
        "mechanism_of_action": "Stimulates beta-adrenergic receptors; causes direct relaxation of vascular and uterine smooth muscle; decreases peripheral resistance."
      }
    ],
    "common_side_effects": [
      "Tachycardia",
      "Palpitations",
      "Flushing",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Severe Rash"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 472,
    "drug_name": "Isradipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle; potent peripheral vasodilator; negligible effect on cardiac conduction."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Edema",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Severe Hypotension",
      "Angina Exacerbation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 473,
    "drug_name": "Itraconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Onychomycosis / Systemic Fungal Infections (Histo/Blasto/Aspergillosis)",
        "mechanism_of_action": "Inhibits fungal cytochrome P450 14-alpha-demethylase; disrupts ergosterol synthesis. Broad spectrum."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Heart Failure (Negative Inotrope - Boxed Warning)",
      "Hepatotoxicity",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 474,
    "drug_name": "Ivabradine",
    "pharmacologic_class": [
      "HCN Channel Blocker",
      "Antianginal / Heart Failure Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure (HFrEF)",
        "mechanism_of_action": "Selectively inhibits the funny current (If) in the SA node; reduces heart rate without affecting contractility or conduction."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Luminous phenomena (Phosphenes)",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Atrial Fibrillation",
      "Severe Bradycardia / Heart Block"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 475,
    "drug_name": "Ivacaftor",
    "pharmacologic_class": [
      "CFTR Potentiator",
      "Cystic Fibrosis Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Cystic Fibrosis (Specific gating mutations e.g., G551D)",
        "mechanism_of_action": "Potentiates the CFTR channel protein; increases the time the channel stays open; improves chloride transport."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Upper respiratory infection",
      "Nasal congestion"
    ],
    "adverse_drug_events": [
      "Elevated Liver Enzymes",
      "Cataracts (in pediatric patients)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 476,
    "drug_name": "Ivermectin",
    "pharmacologic_class": [
      "Antihelmintic",
      "Antiparasitic"
    ],
    "indications_and_moa": [
      {
        "indication": "Strongyloidiasis / Onchocerciasis / Scabies / Rosacea",
        "mechanism_of_action": "Binds to glutamate-gated chloride channels in invertebrate nerve/muscle cells; causes hyperpolarization, paralysis, and death of parasite."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Pruritus",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Mazzotti Reaction (in Onchocerciasis)",
      "Seizures",
      "Severe Cutaneous Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 477,
    "drug_name": "Ixazomib",
    "pharmacologic_class": [
      "Proteasome Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma",
        "mechanism_of_action": "Oral proteasome inhibitor; reversibly binds to the 20S proteasome; induces apoptosis in myeloma cells."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Constipation",
      "Thrombocytopenia",
      "Peripheral neuropathy"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "Severe Cutaneous Reactions",
      "Thrombotic Microangiopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 478,
    "drug_name": "Kanamycin",
    "pharmacologic_class": [
      "Aminoglycoside Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Gram-Negative Infections / MDR-TB (Second-line)",
        "mechanism_of_action": "Binds irreversibly to the 30S ribosomal subunit; causes misreading of mRNA; inhibits protein synthesis; bactericidal."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Nausea",
      "Vomiting"
    ],
    "adverse_drug_events": [
      "Ototoxicity (Auditory/Vestibular - Boxed Warning)",
      "Nephrotoxicity (Boxed Warning)",
      "Neuromuscular Blockade (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 479,
    "drug_name": "Ketamine",
    "pharmacologic_class": [
      "NMDA Receptor Antagonist",
      "General Anesthetic / Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anesthesia Induction / Pain Management / Depression (Esketamine)",
        "mechanism_of_action": "Non-competitive antagonist at NMDA receptors; blocks glutamate signaling; produces dissociative anesthesia (functional dissociation between thalamocortical and limbic systems)."
      }
    ],
    "common_side_effects": [
      "Dissociation / Hallucinations (Emergence reactions)",
      "Nausea/Vomiting",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Emergence Delirium",
      "Cystitis (Ulcerative - associated with abuse)",
      "Respiratory Depression (Rapid IV)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 480,
    "drug_name": "Ketoconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Fungal Infections (Topical) / Systemic (Rarely used due to toxicity)",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; blocks ergosterol synthesis. Also inhibits adrenal steroidogenesis (used off-label for Cushing's)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Abdominal pain",
      "Pruritus (Topical)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Fatal - Boxed Warning)",
      "QT Prolongation (Boxed Warning - Drug Interactions)",
      "Adrenal Insufficiency"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 481,
    "drug_name": "Ketoprofen",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain / Arthritis",
        "mechanism_of_action": "Non-selective COX inhibitor; reduces prostaglandin synthesis. Also inhibits lipoxygenase and stabilizes lysosomal membranes."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 482,
    "drug_name": "Ketorolac",
    "pharmacologic_class": [
      "NSAID (Potent Analgesic)"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Acute Pain (Short-term <= 5 days)",
        "mechanism_of_action": "Potent inhibition of COX-1 and COX-2; strong analgesic efficacy comparable to opioids but without CNS depression."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Perforation (Boxed Warning)",
      "Renal Failure (Boxed Warning)",
      "Bleeding Risk (Inhibits platelet function - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 483,
    "drug_name": "Ketotifen",
    "pharmacologic_class": [
      "Mast Cell Stabilizer / H1 Antagonist",
      "Antiallergic"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Conjunctivitis (Ophthalmic) / Asthma (Oral - outside US)",
        "mechanism_of_action": "Inhibits mast cell degranulation; blocks histamine H1 receptors; prevents release of inflammatory mediators."
      }
    ],
    "common_side_effects": [
      "Eye irritation",
      "Headache",
      "Rhinitis"
    ],
    "adverse_drug_events": [
      "Sedation (Systemic)",
      "Dry Eye"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 484,
    "drug_name": "Labetalol",
    "pharmacologic_class": [
      "Non-selective Beta + Alpha-1 Blocker",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Hypertensive Crisis",
        "mechanism_of_action": "Blocks alpha-1, beta-1, and beta-2 receptors; alpha blockade causes vasodilation (lowers SVR); beta blockade prevents reflex tachycardia. Ratio alpha:beta is 1:3 (oral) to 1:7 (IV)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Nausea",
      "Scalp tingling (Paresthesia)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe/Fatal)",
      "Orthostatic Hypotension",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 485,
    "drug_name": "Lacosamide",
    "pharmacologic_class": [
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial-Onset Seizures",
        "mechanism_of_action": "Selectively enhances slow inactivation of voltage-gated sodium channels; stabilizes hyperexcitable neuronal membranes; binds to CRMP-2 (significance unclear)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Nausea",
      "Diplopia"
    ],
    "adverse_drug_events": [
      "PR Interval Prolongation / AV Block",
      "Syncope",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 486,
    "drug_name": "Lactulose",
    "pharmacologic_class": [
      "Osmotic Laxative / Ammonium Detoxicant"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation / Hepatic Encephalopathy",
        "mechanism_of_action": "Synthetic disaccharide degraded by colonic bacteria to acids; draws water into colon (laxative); acidifies gut contents trapping ammonia as ammonium (NH4+) which is excreted."
      }
    ],
    "common_side_effects": [
      "Flatulence",
      "Abdominal cramping",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Severe Dehydration / Electrolyte Imbalance (Hypernatremia/Hypokalemia)",
      "Hyperglycemia (in diabetics - contains sugar)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 487,
    "drug_name": "Lamivudine (3TC)",
    "pharmacologic_class": [
      "Nucleoside Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection / Chronic Hepatitis B",
        "mechanism_of_action": "Cytidine analogue; phosphorylated to triphosphate; inhibits reverse transcriptase by chain termination."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Fatigue",
      "Nasal signs"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis / Severe Hepatomegaly (Boxed Warning)",
      "Exacerbation of Hepatitis B (upon withdrawal - Boxed Warning)",
      "Pancreatitis (Pediatric)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 488,
    "drug_name": "Lamotrigine",
    "pharmacologic_class": [
      "Anticonvulsant / Mood Stabilizer"
    ],
    "indications_and_moa": [
      {
        "indication": "Seizures / Bipolar I Disorder (Maintenance)",
        "mechanism_of_action": "Blocks voltage-sensitive sodium channels; inhibits release of glutamate and aspartate; stabilizes neuronal membranes."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Diplopia",
      "Rash (Benign)"
    ],
    "adverse_drug_events": [
      "Serious Skin Rashes (SJS/TEN - Boxed Warning)",
      "Aseptic Meningitis",
      "HLH (Hemophagocytic Lymphohistiocytosis)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 489,
    "drug_name": "Lansoprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Ulcers / H. pylori",
        "mechanism_of_action": "Irreversibly inhibits H+/K+ ATPase (proton pump) in parietal cells; blocks final step of acid secretion."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Abdominal pain",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Fractures (Long-term)",
      "Hypomagnesemia",
      "Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 490,
    "drug_name": "Lanthanum Carbonate",
    "pharmacologic_class": [
      "Phosphate Binder"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperphosphatemia (ESRD)",
        "mechanism_of_action": "Dissociates in acid environment to release lanthanum ions; binds dietary phosphate forming insoluble complexes; excreted in feces."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Bowel Obstruction / Perforation",
      "Lanthanum Deposition (Bone/Liver - significance unclear)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 491,
    "drug_name": "Lapatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "HER2+ Breast Cancer",
        "mechanism_of_action": "Reversible inhibitor of intracellular EGFR (ErbB1) and HER2 (ErbB2) tyrosine kinases; blocks downstream signaling; inhibits tumor growth."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Severe)",
      "Rash (Palmar-plantar erythrodysesthesia)",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Decreased LVEF / Heart Failure",
      "Interstitial Lung Disease",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 492,
    "drug_name": "Latanoprost",
    "pharmacologic_class": [
      "Prostaglandin Analog",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Open-Angle Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Prostaglandin F2-alpha analog; increases uveoscleral outflow of aqueous humor; lowers intraocular pressure."
      }
    ],
    "common_side_effects": [
      "Conjunctival hyperemia",
      "Eyelash changes (growth/darkening)",
      "Eye irritation"
    ],
    "adverse_drug_events": [
      "Iris Pigmentation (Permanent darkening)",
      "Macular Edema",
      "Uveitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 493,
    "drug_name": "Ledipasvir-Sofosbuvir",
    "pharmacologic_class": [
      "NS5A Inhibitor + Nucleotide Polymerase Inhibitor",
      "Antiviral (HCV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis C (Genotypes 1, 4, 5, 6)",
        "mechanism_of_action": "Ledipasvir inhibits NS5A (viral replication/assembly). Sofosbuvir inhibits NS5B RNA-dependent RNA polymerase (chain termination)."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation (Boxed Warning)",
      "Serious Bradycardia (with Amiodarone - Avoid)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 494,
    "drug_name": "Leflunomide",
    "pharmacologic_class": [
      "DMARD",
      "Pyrimidine Synthesis Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis",
        "mechanism_of_action": "Inhibits dihydroorotate dehydrogenase; blocks de novo pyrimidine synthesis; inhibits T-cell proliferation and antibody production."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Alopecia",
      "Rash",
      "Elevated LFTs"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Teratogenicity (Boxed Warning)",
      "Severe Skin Reactions (SJS)",
      "Interstitial Lung Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 495,
    "drug_name": "Lenalidomide",
    "pharmacologic_class": [
      "Immunomodulator",
      "Antineoplastic (Thalidomide Analog)"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma / MDS / Mantle Cell Lymphoma",
        "mechanism_of_action": "Direct cytotoxicity; inhibits angiogenesis; immunomodulation (enhances NK/T-cell activity); inhibits proinflammatory cytokines (TNF-alpha)."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Diarrhea",
      "Rash",
      "Muscle cramps"
    ],
    "adverse_drug_events": [
      "Embryo-Fetal Toxicity (Boxed Warning - REMS)",
      "Hematologic Toxicity (Neutropenia/Thrombocytopenia - Boxed Warning)",
      "Venous/Arterial Thromboembolism (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 496,
    "drug_name": "Lenvatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (Multi-Kinase)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Thyroid Cancer / RCC / HCC",
        "mechanism_of_action": "Inhibits VEGFR 1-3, FGFR 1-4, PDGFR-alpha, KIT, and RET; blocks angiogenesis and tumor cell proliferation."
      }
    ],
    "common_side_effects": [
      "Hypertension",
      "Fatigue",
      "Diarrhea",
      "Proteinuria"
    ],
    "adverse_drug_events": [
      "Severe Hypertension",
      "Cardiac Dysfunction",
      "Arterial Thromboembolic Events",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 497,
    "drug_name": "Letrozole",
    "pharmacologic_class": [
      "Aromatase Inhibitor (Non-steroidal)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (HR+ Postmenopausal) / Ovulation Induction (Off-label)",
        "mechanism_of_action": "Reversibly inhibits aromatase; prevents conversion of androgens to estrogens; lowers serum estradiol."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Arthralgia",
      "Fatigue",
      "Edema"
    ],
    "adverse_drug_events": [
      "Decreased Bone Density / Fractures",
      "Hypercholesterolemia",
      "Cardiovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 498,
    "drug_name": "Leucovorin",
    "pharmacologic_class": [
      "Folic Acid Analog",
      "Antidote / Chemotherapy Modulator"
    ],
    "indications_and_moa": [
      {
        "indication": "Methotrexate Rescue / Colorectal Cancer (with 5-FU)",
        "mechanism_of_action": "Reduced folate; bypasses DHFR inhibition by Methotrexate. Enhances 5-FU binding to thymidylate synthase (increasing cytotoxicity)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Stomatitis (with 5-FU)"
    ],
    "adverse_drug_events": [
      "Allergic Reactions",
      "Seizures (rare - counteracts anticonvulsants)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 499,
    "drug_name": "Leuprolide",
    "pharmacologic_class": [
      "GnRH Agonist",
      "Antineoplastic / Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer / Endometriosis / Fibroids / Precocious Puberty",
        "mechanism_of_action": "Continuous stimulation of pituitary GnRH receptors leads to desensitization; suppresses LH/FSH and gonadal steroid production (chemical castration)."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Injection site pain",
      "Weight gain",
      "Mood changes"
    ],
    "adverse_drug_events": [
      "Tumor Flare (Initial rise in testosterone)",
      "Osteoporosis",
      "Increased CV Risk / Diabetes",
      "Pituitary Apoplexy (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 500,
    "drug_name": "Levalbuterol",
    "pharmacologic_class": [
      "Short-Acting Beta-2 Agonist (SABA)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Bronchospasm (Asthma/COPD)",
        "mechanism_of_action": "R-enantiomer of albuterol; selectively stimulates beta-2 receptors; relaxes bronchial smooth muscle. Theoretically fewer side effects than racemic albuterol."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Nervousness",
      "Palpitations",
      "Rhinitis"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Hypokalemia",
      "Cardiac Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 501,
    "drug_name": "Levetiracetam",
    "pharmacologic_class": [
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial / Myoclonic / Tonic-Clonic Seizures",
        "mechanism_of_action": "Binds to SV2A (synaptic vesicle protein 2A); inhibits neurotransmitter release. Exact mechanism unknown but distinct from other AEDs."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Asthenia",
      "Irritability"
    ],
    "adverse_drug_events": [
      "Psychiatric/Behavioral Symptoms (Aggression/Depression)",
      "Severe Skin Reactions (SJS/TEN)",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 502,
    "drug_name": "Levobunolol",
    "pharmacologic_class": [
      "Non-selective Beta Blocker",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma / Ocular Hypertension",
        "mechanism_of_action": "Reduces aqueous humor production; lowers intraocular pressure."
      }
    ],
    "common_side_effects": [
      "Eye stinging/burning",
      "Blepharitis",
      "Bradycardia (systemic)"
    ],
    "adverse_drug_events": [
      "Bronchospasm (in Asthma/COPD)",
      "Heart Block / Heart Failure",
      "Masking of Hypoglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 503,
    "drug_name": "Levocetirizine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Chronic Urticaria",
        "mechanism_of_action": "Active enantiomer of cetirizine; potent and selective peripheral H1 receptor antagonist."
      }
    ],
    "common_side_effects": [
      "Somnolence (Low risk)",
      "Nasopharyngitis",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 504,
    "drug_name": "Levofloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumonia / UTI / Skin Infections",
        "mechanism_of_action": "L-isomer of ofloxacin; inhibits DNA gyrase and Topoisomerase IV; blocks bacterial DNA replication. Broad spectrum."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Diarrhea",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Tendinitis / Rupture (Boxed Warning)",
      "Peripheral Neuropathy (Boxed Warning)",
      "CNS Effects (Boxed Warning)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 505,
    "drug_name": "Levomilnacipran",
    "pharmacologic_class": [
      "SNRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Enantiomer of milnacipran; potent inhibitor of norepinephrine reuptake (more potent than serotonin reuptake)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Constipation",
      "Hyperhidrosis",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Hypertension / Tachycardia",
      "Serotonin Syndrome",
      "Urinary Hesitancy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 506,
    "drug_name": "Levonorgestrel",
    "pharmacologic_class": [
      "Progestin",
      "Contraceptive"
    ],
    "indications_and_moa": [
      {
        "indication": "Emergency Contraception / Oral Contraception / IUD",
        "mechanism_of_action": "Thickens cervical mucus; inhibits ovulation (suppresses LH surge); alters endometrium preventing implantation."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Abdominal pain",
      "Fatigue",
      "Menstrual irregularities"
    ],
    "adverse_drug_events": [
      "Ectopic Pregnancy (IUD)",
      "Pelvic Inflammatory Disease (IUD)",
      "Device Migration/Embedment (IUD)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 507,
    "drug_name": "Levothyroxine",
    "pharmacologic_class": [
      "Thyroid Hormone (T4)",
      "Hormone Replacement"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypothyroidism / TSH Suppression (Thyroid Cancer)",
        "mechanism_of_action": "Synthetic T4; converted to T3 (active) in peripheral tissues; binds to nuclear receptors regulating gene expression for metabolism and growth."
      }
    ],
    "common_side_effects": [
      "Palpitations",
      "Insomnia",
      "Weight loss",
      "Heat intolerance (Hyperthyroidism symptoms)"
    ],
    "adverse_drug_events": [
      "Cardiovascular Events (Arrhythmias/MI - especially in elderly)",
      "Decreased Bone Mineral Density",
      "Thyrotoxicosis (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 508,
    "drug_name": "Lidocaine",
    "pharmacologic_class": [
      "Local Anesthetic (Amide) / Antiarrhythmic (Class Ib)",
      "Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Local Anesthesia / Ventricular Arrhythmias",
        "mechanism_of_action": "Blocks voltage-gated sodium channels; prevents depolarization and nerve impulse conduction. In heart, shortens action potential duration."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Drowsiness",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "CNS Toxicity (Seizures/Confusion)",
      "Cardiotoxicity (Bradycardia/Arrest)",
      "Methemoglobinemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 509,
    "drug_name": "Linagliptin",
    "pharmacologic_class": [
      "DPP-4 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Inhibits Dipeptidyl Peptidase-4 (DPP-4); prolongs activity of incretin hormones (GLP-1/GIP); increases insulin release and decreases glucagon. Renally safe (biliary excretion)."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Hypoglycemia (with sulfonylureas)",
      "Cough"
    ],
    "adverse_drug_events": [
      "Acute Pancreatitis",
      "Severe Arthralgia",
      "Bullous Pemphigoid"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 510,
    "drug_name": "Linezolid",
    "pharmacologic_class": [
      "Oxazolidinone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "VRE / MRSA Pneumonia / Skin Infections",
        "mechanism_of_action": "Binds to 50S ribosomal subunit (23S rRNA); prevents formation of the 70S initiation complex; inhibits protein synthesis. Bacteriostatic (cidal for Strep)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Thrombocytopenia - prolonged use)",
      "Serotonin Syndrome (Weak MAO inhibitor)",
      "Peripheral/Optic Neuropathy (Long-term)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 511,
    "drug_name": "Liothyronine",
    "pharmacologic_class": [
      "Thyroid Hormone (T3)",
      "Hormone Replacement"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypothyroidism / Myxedema Coma",
        "mechanism_of_action": "Synthetic T3; biologically active thyroid hormone; rapid onset and short duration. Binds to nuclear receptors regulating metabolism."
      }
    ],
    "common_side_effects": [
      "Palpitations",
      "Tachycardia",
      "Nervousness"
    ],
    "adverse_drug_events": [
      "Cardiovascular Toxicity (Arrhythmias/Angina)",
      "Adrenal Insufficiency (if uncorrected)",
      "Bone Density Loss"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 512,
    "drug_name": "Liraglutide",
    "pharmacologic_class": [
      "GLP-1 Receptor Agonist",
      "Antidiabetic / Weight Loss"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Obesity (Saxenda)",
        "mechanism_of_action": "GLP-1 analog; stimulates glucose-dependent insulin secretion; suppresses glucagon; slows gastric emptying; increases satiety."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Vomiting",
      "Decreased appetite"
    ],
    "adverse_drug_events": [
      "Thyroid C-cell Tumors (Boxed Warning)",
      "Acute Pancreatitis",
      "Gallbladder Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 513,
    "drug_name": "Lisdexamfetamine",
    "pharmacologic_class": [
      "CNS Stimulant",
      "ADHD Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "ADHD / Binge Eating Disorder",
        "mechanism_of_action": "Prodrug converted to dextroamphetamine by RBCs; blocks reuptake of NE and DA; promotes release of monoamines. Less abuse potential than immediate release amphetamine."
      }
    ],
    "common_side_effects": [
      "Decreased appetite",
      "Insomnia",
      "Dry mouth",
      "Anxiety"
    ],
    "adverse_drug_events": [
      "Abuse / Dependence (Boxed Warning)",
      "Cardiovascular Events (HTN/Tachycardia)",
      "Psychosis / Mania"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 514,
    "drug_name": "Lisinopril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure / Acute MI",
        "mechanism_of_action": "Inhibits Angiotensin-Converting Enzyme; blocks formation of Angiotensin II; reduces vasoconstriction and aldosterone secretion. Not a prodrug."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Impairment",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 515,
    "drug_name": "Lithium Carbonate",
    "pharmacologic_class": [
      "Mood Stabilizer",
      "Antimanic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bipolar Disorder (Manic/Maintenance)",
        "mechanism_of_action": "Alters ion transport; inhibits IP3 signaling pathway (inositol depletion); modulates neurotransmitter (NE/Serotonin) release and uptake."
      }
    ],
    "common_side_effects": [
      "Tremor (Fine)",
      "Polyuria / Polydipsia",
      "Weight gain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Lithium Toxicity (Coarse tremor, ataxia, seizures - Boxed Warning)",
      "Hypothyroidism",
      "Nephrogenic Diabetes Insipidus / Chronic Kidney Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 516,
    "drug_name": "Lixisenatide",
    "pharmacologic_class": [
      "GLP-1 Receptor Agonist",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "GLP-1 receptor agonist; increases glucose-dependent insulin secretion; decreases glucagon; slows gastric emptying (Short-acting GLP-1)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Headache",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Pancreatitis",
      "Immunogenicity (Antibody formation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 517,
    "drug_name": "Loperamide",
    "pharmacologic_class": [
      "Opioid Agonist (Peripheral)",
      "Antidiarrheal"
    ],
    "indications_and_moa": [
      {
        "indication": "Diarrhea (Acute/Chronic)",
        "mechanism_of_action": "Binds to gut wall mu-opioid receptors; inhibits peristalsis; increases anal sphincter tone. Does not cross BBB significantly (P-gp substrate)."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Abdominal cramps",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Torsades de Pointes / Cardiac Arrest (High doses - Boxed Warning)",
      "Toxic Megacolon",
      "Paralytic Ileus"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 518,
    "drug_name": "Lopinavir-Ritonavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Lopinavir inhibits HIV protease; blocks viral maturation. Ritonavir inhibits CYP3A4, boosting lopinavir levels."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Vomiting",
      "Hyperlipidemia"
    ],
    "adverse_drug_events": [
      "Pancreatitis",
      "Hepatotoxicity",
      "QT / PR Prolongation",
      "Hyperglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 519,
    "drug_name": "Loratadine",
    "pharmacologic_class": [
      "H1 Antagonist (2nd Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Urticaria",
        "mechanism_of_action": "Selectively blocks peripheral H1 receptors; does not readily cross BBB (non-sedating)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dry mouth",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Seizures (Very rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 520,
    "drug_name": "Lorazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Status Epilepticus / Premedication",
        "mechanism_of_action": "Enhances GABAergic inhibition via GABA-A receptors. Intermediate onset and duration; no active metabolites (safe in liver disease)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Weakness",
      "Unsteadiness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence / Withdrawal",
      "Paradoxical Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 521,
    "drug_name": "Losartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Diabetic Nephropathy / Stroke Prevention",
        "mechanism_of_action": "Selectively blocks Angiotensin II binding to AT1 receptors; prevents vasoconstriction and aldosterone secretion. Active metabolite contributes to effect."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Renal Failure",
      "Hyperkalemia",
      "Angioedema",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 522,
    "drug_name": "Loteprednol Etabonate",
    "pharmacologic_class": [
      "Corticosteroid (Soft Steroid)",
      "Ophthalmic Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Ocular Inflammation / Post-op Eye Pain",
        "mechanism_of_action": "Site-active corticosteroid; inhibits inflammatory response. Rapidly metabolized to inactive metabolites, reducing risk of IOP elevation."
      }
    ],
    "common_side_effects": [
      "Eye irritation",
      "Foreign body sensation",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Increased Intraocular Pressure / Glaucoma",
      "Cataracts",
      "Secondary Infections"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 523,
    "drug_name": "Lovastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Coronary Heart Disease",
        "mechanism_of_action": "Inhibits HMG-CoA reductase; reduces cholesterol synthesis; upregulates LDL receptors."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Flatulence",
      "Constipation",
      "Headache"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis",
      "Hepatotoxicity",
      "New Onset Diabetes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 524,
    "drug_name": "Loxapine",
    "pharmacologic_class": [
      "Dibenzoxazepine",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Agitation (Inhaled)",
        "mechanism_of_action": "Blocks dopamine D2 and serotonin 5-HT2A receptors. Metabolized to amoxapine (antidepressant activity)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "EPS",
      "Dry mouth",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Bronchospasm (Inhaled - Boxed Warning)",
      "Neuroleptic Malignant Syndrome",
      "Tardive Dyskinesia",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 525,
    "drug_name": "Lubiprostone",
    "pharmacologic_class": [
      "Chloride Channel Activator",
      "GI Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Idiopathic Constipation / IBS-C / Opioid-Induced Constipation",
        "mechanism_of_action": "Activates ClC-2 chloride channels in intestinal epithelium; increases fluid secretion into the lumen; softens stool and accelerates transit."
      }
    ],
    "common_side_effects": [
      "Nausea (Dose-dependent)",
      "Diarrhea",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Dyspnea (Transient - upon first dose)",
      "Syncope / Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 526,
    "drug_name": "Lurasidone",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar Depression",
        "mechanism_of_action": "Antagonist at D2 and 5-HT2A receptors; partial agonist at 5-HT1A receptors; antagonist at 5-HT7. Low affinity for histaminergic/muscarinic receptors."
      }
    ],
    "common_side_effects": [
      "Akathisia",
      "Somnolence",
      "Nausea",
      "Parkinsonism"
    ],
    "adverse_drug_events": [
      "Neuroleptic Malignant Syndrome",
      "Tardive Dyskinesia",
      "Metabolic Changes (Lower risk than others)",
      "Suicidal Thoughts (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 527,
    "drug_name": "Magnesium Sulfate",
    "pharmacologic_class": [
      "Electrolyte / Anticonvulsant",
      "Mineral"
    ],
    "indications_and_moa": [
      {
        "indication": "Eclampsia / Pre-eclampsia / Torsades de Pointes / Hypomagnesemia / Asthma Exacerbation",
        "mechanism_of_action": "Blocks neuromuscular transmission; vasodilation; membrane stabilization; bronchial smooth muscle relaxation (calcium antagonist)."
      }
    ],
    "common_side_effects": [
      "Flushing",
      "Hypotension",
      "Muscle weakness",
      "Diarrhea (Oral)"
    ],
    "adverse_drug_events": [
      "Magnesium Toxicity (Respiratory paralysis, Cardiac arrest, Loss of DTRs)",
      "Pulmonary Edema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 528,
    "drug_name": "Mannitol",
    "pharmacologic_class": [
      "Osmotic Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Cerebral Edema / Intraocular Pressure",
        "mechanism_of_action": "Increases plasma osmolality; draws water from tissues (brain/eye) into the plasma; inhibits tubular reabsorption of water and electrolytes causing diuresis."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Thirst",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Pulmonary Edema / Heart Failure (Initial fluid expansion)",
      "Severe Dehydration / Electrolyte Imbalance",
      "Renal Failure (Osmotic nephrosis)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 529,
    "drug_name": "Maprotiline",
    "pharmacologic_class": [
      "Tetracyclic Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Anxiety",
        "mechanism_of_action": "Potent inhibitor of norepinephrine reuptake; weak effect on serotonin. Strong antihistaminic and anticholinergic activity."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Somnolence",
      "Constipation",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Seizures (Dose-dependent - higher risk than TCAs)",
      "Suicidality (Boxed Warning)",
      "Arrhythmias"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 530,
    "drug_name": "Maraviroc",
    "pharmacologic_class": [
      "CCR5 Antagonist",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection (CCR5-tropic only)",
        "mechanism_of_action": "Selectively binds to the human chemokine receptor CCR5; prevents interaction with gp120; inhibits viral entry into cells."
      }
    ],
    "common_side_effects": [
      "Cough",
      "Fever",
      "Upper respiratory infection",
      "Rash"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Severe Hypersensitivity Reactions (SJS/TEN)",
      "Cardiovascular Events (Ischemia)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 531,
    "drug_name": "Mebendazole",
    "pharmacologic_class": [
      "Benzimidazole Anthelmintic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pinworm / Roundworm / Hookworm / Whipworm",
        "mechanism_of_action": "Inhibits microtubule formation in worms; blocks glucose uptake; depletes glycogen stores leading to parasite death."
      }
    ],
    "common_side_effects": [
      "Abdominal pain",
      "Diarrhea",
      "Flatulence"
    ],
    "adverse_drug_events": [
      "Convulsions (Infants)",
      "Neutropenia (High dose)",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 532,
    "drug_name": "Mebeverine",
    "pharmacologic_class": [
      "Antispasmodic",
      "Musculotropic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Irritable Bowel Syndrome (IBS) - Not FDA Approved",
        "mechanism_of_action": "Directly relaxes gastrointestinal smooth muscle by blocking voltage-gated sodium channels and inhibiting calcium depot replenishment. No anticholinergic side effects."
      }
    ],
    "common_side_effects": [
      "Skin rash",
      "Urticaria",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 533,
    "drug_name": "Mecamylamine",
    "pharmacologic_class": [
      "Ganglionic Blocker",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Hypertension (Rarely used) / Tourette's (Orphan)",
        "mechanism_of_action": "Non-competitive antagonist at nicotinic acetylcholine receptors in autonomic ganglia; blocks both sympathetic and parasympathetic transmission. Crosses BBB."
      }
    ],
    "common_side_effects": [
      "Orthostatic hypotension",
      "Dry mouth",
      "Constipation",
      "Urinary retention"
    ],
    "adverse_drug_events": [
      "Paralytic Ileus",
      "Tremor / Convulsions",
      "Respiratory Arrest"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 534,
    "drug_name": "Mecasermin",
    "pharmacologic_class": [
      "Recombinant Human IGF-1",
      "Growth Hormone Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Primary IGF-1 Deficiency",
        "mechanism_of_action": "Replaces Insulin-like Growth Factor-1 (IGF-1); promotes linear growth."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Injection site hypertrophy",
      "Tonsillar hypertrophy"
    ],
    "adverse_drug_events": [
      "Intracranial Hypertension",
      "Slipped Capital Femoral Epiphysis",
      "Severe Hypoglycemia"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 535,
    "drug_name": "Mechlorethamine",
    "pharmacologic_class": [
      "Nitrogen Mustard Alkylating Agent",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hodgkin's Lymphoma / CML / Mycosis Fungoides (Topical Gel)",
        "mechanism_of_action": "Bifunctional alkylating agent; forms cross-links between DNA strands; inhibits DNA synthesis and cell division."
      }
    ],
    "common_side_effects": [
      "Severe Nausea/Vomiting",
      "Alopecia",
      "Skin irritation (Topical)"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression",
      "Secondary Malignancies",
      "Extravasation Necrosis (Vesicant)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 536,
    "drug_name": "Meclizine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Antiemetic / Antivertigo"
    ],
    "indications_and_moa": [
      {
        "indication": "Motion Sickness / Vertigo",
        "mechanism_of_action": "Blocks H1 receptors and muscarinic receptors in the vestibular system; reduces vestibular stimulation of the vomiting center."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dry mouth",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Blurred Vision",
      "Urinary Retention (Anticholinergic effects in elderly)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 537,
    "drug_name": "Medroxyprogesterone Acetate",
    "pharmacologic_class": [
      "Progestin",
      "Hormone / Contraceptive"
    ],
    "indications_and_moa": [
      {
        "indication": "Contraception (Depo) / Abnormal Uterine Bleeding / Endometrial Hyperplasia Prevention",
        "mechanism_of_action": "Inhibits gonadotropin secretion (FSH/LH); prevents follicular maturation and ovulation; thins endometrium."
      }
    ],
    "common_side_effects": [
      "Weight gain",
      "Menstrual irregularities",
      "Headache"
    ],
    "adverse_drug_events": [
      "Bone Mineral Density Loss (Boxed Warning - Injection)",
      "Thromboembolism",
      "Breast Cancer Risk"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 538,
    "drug_name": "Mefenamic Acid",
    "pharmacologic_class": [
      "NSAID (Fenamate)",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Mild to Moderate Pain / Dysmenorrhea",
        "mechanism_of_action": "Inhibits COX-1 and COX-2; reduces prostaglandin synthesis. Also antagonizes prostaglandin receptors."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Dose-limiting)",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 539,
    "drug_name": "Mefloquine",
    "pharmacologic_class": [
      "4-Methanolquinoline",
      "Antimalarial"
    ],
    "indications_and_moa": [
      {
        "indication": "Malaria Prophylaxis and Treatment",
        "mechanism_of_action": "Destroys asexual blood forms of malarial pathogens; mechanism likely involves inhibition of heme polymerization."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Dizziness",
      "Insomnia / Vivid dreams"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Effects (Anxiety/Paranoia/Hallucinations - Boxed Warning)",
      "Seizures",
      "Cardiac Arrhythmias"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 540,
    "drug_name": "Megestrol Acetate",
    "pharmacologic_class": [
      "Progestin",
      "Appetite Stimulant / Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Appetite Stimulation (Cachexia) / Breast or Endometrial Cancer",
        "mechanism_of_action": "Synthetic progestin; stimulates appetite via hypothalamic NPY; anti-tumor effect via pituitary-gonadal suppression and direct cytotoxic effect."
      }
    ],
    "common_side_effects": [
      "Weight gain",
      "Edema",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Thromboembolism",
      "Adrenal Insufficiency (Glucocorticoid activity)",
      "New Onset Diabetes"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 541,
    "drug_name": "Melatonin",
    "pharmacologic_class": [
      "Hormone",
      "Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia / Jet Lag / Circadian Rhythm Disorders",
        "mechanism_of_action": "Agonist at MT1 and MT2 receptors in the suprachiasmatic nucleus; regulates circadian rhythm and sleep-wake cycle."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Depression worsening",
      "Seizure threshold reduction (Theoretical)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 542,
    "drug_name": "Meloxicam",
    "pharmacologic_class": [
      "NSAID (Preferential COX-2)",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis",
        "mechanism_of_action": "Inhibits COX-1 and COX-2; preferential inhibition of COX-2 at lower doses reduces GI risk compared to non-selective NSAIDs."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Upper respiratory infection",
      "Headache"
    ],
    "adverse_drug_events": [
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 543,
    "drug_name": "Melphalan",
    "pharmacologic_class": [
      "Alkylating Agent (Nitrogen Mustard)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma / Ovarian Cancer",
        "mechanism_of_action": "Bifunctional alkylating agent; forms DNA cross-links; inhibits DNA/RNA synthesis; cell cycle non-specific."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Bone marrow suppression",
      "Oral ulcers"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Boxed Warning)",
      "Secondary Malignancies (AML/MDS - Boxed Warning)",
      "Pulmonary Fibrosis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 544,
    "drug_name": "Memantine",
    "pharmacologic_class": [
      "NMDA Receptor Antagonist",
      "Anti-Alzheimer's Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Alzheimer's Disease",
        "mechanism_of_action": "Uncompetitive antagonist at NMDA receptors; blocks pathological tonic glutamatergic activation (excitotoxicity) while allowing physiological signals."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Confusion",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Seizures (Rare)",
      "Heart Failure",
      "Psychosis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 545,
    "drug_name": "Mepolizumab",
    "pharmacologic_class": [
      "IL-5 Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Eosinophilic Asthma / EGPA / HES",
        "mechanism_of_action": "Binds to IL-5; prevents binding to IL-5 receptor on eosinophils; inhibits eosinophil production and survival."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Injection site reaction",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Herpes Zoster Infection (Opportunistic)",
      "Helminth Infection Susceptibility"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 546,
    "drug_name": "Mercaptopurine (6-MP)",
    "pharmacologic_class": [
      "Purine Antimetabolite",
      "Antineoplastic / Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "ALL / Crohn's Disease / Ulcerative Colitis",
        "mechanism_of_action": "Converted to thio-IMP and thioguanine nucleotides; inhibits purine synthesis and interconversion; incorporated into DNA/RNA causing cell death."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Anorexia",
      "Rash"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (TPMT/NUDT15 dependent)",
      "Hepatotoxicity",
      "Secondary Malignancy (Lymphoma)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 547,
    "drug_name": "Meropenem",
    "pharmacologic_class": [
      "Carbapenem",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Intra-abdominal Infections / Meningitis / Skin Infections",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis; stable against most beta-lactamases (including ESBLs). Broad spectrum."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea/Vomiting",
      "Headache",
      "Rash"
    ],
    "adverse_drug_events": [
      "Seizures (Lower risk than imipenem)",
      "Anaphylaxis",
      "CDAD"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 548,
    "drug_name": "Mesalamine (5-ASA)",
    "pharmacologic_class": [
      "Aminosalicylate",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Ulcerative Colitis",
        "mechanism_of_action": "Locally acts on colonic mucosa; inhibits COX and lipoxygenase; reduces production of prostaglandins and leukotrienes; scavenges free radicals."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flatulence",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Mesalamine-induced Acute Intolerance Syndrome (Cramps, bloody diarrhea)",
      "Renal Impairment (Interstitial Nephritis)",
      "Myocarditis / Pericarditis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 549,
    "drug_name": "Mesna",
    "pharmacologic_class": [
      "Cytoprotective Agent",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Hemorrhagic Cystitis Prevention (with Ifosfamide/Cyclophosphamide)",
        "mechanism_of_action": "In kidney, oxidized to free thiol mesna; reacts with toxic metabolite acrolein forming stable non-toxic compounds; detoxifies bladder urine."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Bad taste",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Dermatologic Reactions (DRESS)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 550,
    "drug_name": "Metformin",
    "pharmacologic_class": [
      "Biguanide",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus / PCOS",
        "mechanism_of_action": "Decreases hepatic glucose production (gluconeogenesis); decreases intestinal glucose absorption; improves insulin sensitivity (increases peripheral glucose uptake)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Abdominal bloating",
      "Metallic taste"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis (Boxed Warning - especially in renal impairment)",
      "Vitamin B12 Deficiency (Malabsorption)",
      "Hypoglycemia (Rare alone)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 551,
    "drug_name": "Methadone",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic / Detoxification Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Pain / Opioid Detoxification",
        "mechanism_of_action": "Mu-opioid receptor agonist; NMDA receptor antagonist (contributes to efficacy in neuropathic pain). Long variable half-life prevents withdrawal."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Constipation",
      "Sweating",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "QT Prolongation / Torsades de Pointes (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 552,
    "drug_name": "Methazolamide",
    "pharmacologic_class": [
      "Carbonic Anhydrase Inhibitor",
      "Antiglaucoma Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma",
        "mechanism_of_action": "Inhibits carbonic anhydrase in ciliary body; reduces aqueous humor secretion; lowers intraocular pressure."
      }
    ],
    "common_side_effects": [
      "Paresthesia",
      "Taste alteration",
      "Fatigue",
      "Polyuria"
    ],
    "adverse_drug_events": [
      "Metabolic Acidosis",
      "Electrolyte Imbalance (Hypokalemia)",
      "Stevens-Johnson Syndrome (Sulfonamide derivative)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 553,
    "drug_name": "Methenamine",
    "pharmacologic_class": [
      "Urinary Tract Antiseptic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "UTI Prophylaxis",
        "mechanism_of_action": "Hydrolyzed in acidic urine (pH < 5.5) to formaldehyde and ammonia; formaldehyde is bactericidal and nonspecific."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dysuria",
      "Gastric upset"
    ],
    "adverse_drug_events": [
      "Chemical Cystitis (Formaldehyde induced)",
      "Metabolic Acidosis (with high doses)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 554,
    "drug_name": "Methimazole",
    "pharmacologic_class": [
      "Thionamide",
      "Antithyroid Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperthyroidism (Graves' Disease)",
        "mechanism_of_action": "Inhibits thyroid peroxidase; blocks oxidation of iodine and coupling of iodotyrosines; inhibits synthesis of thyroid hormones."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Arthralgia",
      "GI upset",
      "Taste loss"
    ],
    "adverse_drug_events": [
      "Agranulocytosis (Reversible upon discontinuation)",
      "Hepatotoxicity (Cholestatic)",
      "Teratogenicity (Aplasia cutis)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 555,
    "drug_name": "Methocarbamol",
    "pharmacologic_class": [
      "Skeletal Muscle Relaxant",
      "Centrally Acting"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Musculoskeletal Pain",
        "mechanism_of_action": "General CNS depressant; no direct action on muscle/nerve; muscle relaxation likely secondary to sedation."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dizziness",
      "Lightheadedness"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Seizures (IV administration)",
      "Bradycardia / Hypotension (IV)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 556,
    "drug_name": "Methotrexate",
    "pharmacologic_class": [
      "Antifolate / Antimetabolite",
      "Antineoplastic / DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Psoriasis / Cancer (ALL/Trophoblastic)",
        "mechanism_of_action": "Inhibits dihydrofolate reductase (DHFR); interferes with DNA synthesis, repair, and cellular replication. In RA, likely increases adenosine release (anti-inflammatory)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Stomatitis",
      "Fatigue",
      "Elevated LFTs"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Boxed Warning)",
      "Hepatotoxicity / Fibrosis (Boxed Warning)",
      "Pneumonitis (Boxed Warning)",
      "Teratogenicity (Boxed Warning)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 557,
    "drug_name": "Methoxsalen",
    "pharmacologic_class": [
      "Psoralen",
      "Photosensitizer"
    ],
    "indications_and_moa": [
      {
        "indication": "Psoriasis / Vitiligo / CTCL (PUVA Therapy)",
        "mechanism_of_action": "Activated by UV light; cross-links DNA strands; inhibits DNA synthesis and cell division in epidermal cells."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Pruritus",
      "Erythema (Burn)"
    ],
    "adverse_drug_events": [
      "Severe Burns (Overexposure to UVA)",
      "Skin Cancer (Squamous Cell Carcinoma)",
      "Cataracts"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 558,
    "drug_name": "Methyldopa",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Central Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension (Pregnancy)",
        "mechanism_of_action": "Metabolized to alpha-methylnorepinephrine; stimulates central alpha-2 receptors; decreases sympathetic outflow."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Headache",
      "Fluid retention"
    ],
    "adverse_drug_events": [
      "Hemolytic Anemia (Coombs positive)",
      "Hepatotoxicity",
      "Drug-Induced Lupus"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 559,
    "drug_name": "Methylergometrine (Methylergonovine)",
    "pharmacologic_class": [
      "Ergot Alkaloid",
      "Oxytocic"
    ],
    "indications_and_moa": [
      {
        "indication": "Postpartum Hemorrhage",
        "mechanism_of_action": "Directly stimulates uterine smooth muscle; increases tone, rate, and amplitude of contractions; causes tetanic contraction to stop bleeding."
      }
    ],
    "common_side_effects": [
      "Hypertension",
      "Nausea/Vomiting",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis / Stroke",
      "Coronary Artery Spasm / MI",
      "Ergotism"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 560,
    "drug_name": "Methylphenidate",
    "pharmacologic_class": [
      "CNS Stimulant",
      "ADHD Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "ADHD / Narcolepsy",
        "mechanism_of_action": "Blocks reuptake of norepinephrine and dopamine into presynaptic neurons; increases extracellular levels of NE and DA."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Decreased appetite",
      "Anxiety",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Abuse / Dependence (Boxed Warning)",
      "Psychosis / Mania",
      "Cardiovascular Events (Sudden Death in structural heart disease)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 561,
    "drug_name": "Methylprednisolone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Conditions / Acute Spinal Cord Injury / MS Flare",
        "mechanism_of_action": "Intermediate-acting glucocorticoid; potent anti-inflammatory; suppresses immune response; minimal mineralocorticoid activity."
      }
    ],
    "common_side_effects": [
      "Hyperglycemia",
      "Insomnia",
      "Fluid retention",
      "Mood swings"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Peptic Ulceration",
      "Osteonecrosis",
      "Psychosis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 562,
    "drug_name": "Metoclopramide",
    "pharmacologic_class": [
      "Dopamine Antagonist / Prokinetic",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Gastroparesis / GERD / Nausea",
        "mechanism_of_action": "Blocks dopamine D2 receptors in CTZ (antiemetic) and GI tract; sensitizes tissues to acetylcholine; increases upper GI motility and lower esophageal sphincter tone."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Restlessness",
      "Fatigue",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia (Boxed Warning - Avoid use >12 weeks)",
      "Extrapyramidal Symptoms (Dystonia)",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 563,
    "drug_name": "Metolazone",
    "pharmacologic_class": [
      "Thiazide-like Diuretic",
      "Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema (HF/Renal Disease) / Hypertension",
        "mechanism_of_action": "Inhibits Na+/Cl- reabsorption in distal tubule and proximal tubule; effective even at low GFR (unlike regular thiazides)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Muscle cramps",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Electrolyte Imbalance (Hypokalemia, Hyponatremia)",
      "Hyperuricemia / Gout",
      "Hyperglycemia"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 564,
    "drug_name": "Metoprolol",
    "pharmacologic_class": [
      "Beta-1 Selective Blocker",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure / Angina / MI",
        "mechanism_of_action": "Cardioselective beta-1 blocker; decreases heart rate, contractility, and cardiac output. Succinate is long-acting (HF); Tartrate is short-acting."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Dizziness",
      "Bradycardia",
      "Depression"
    ],
    "adverse_drug_events": [
      "Heart Block",
      "Bronchospasm (High doses)",
      "Masking of Hypoglycemia",
      "Heart Failure Worsening (Initial)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 565,
    "drug_name": "Metronidazole",
    "pharmacologic_class": [
      "Nitroimidazole",
      "Antibiotic / Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Anaerobic Infections / Trichomoniasis / Amebiasis / Bacterial Vaginosis",
        "mechanism_of_action": "Reduced by anaerobes to reactive nitro radicals; damages DNA structure; inhibits protein synthesis; causes cell death."
      }
    ],
    "common_side_effects": [
      "Metallic taste",
      "Nausea",
      "Headache",
      "Dark urine"
    ],
    "adverse_drug_events": [
      "Disulfiram-like Reaction (with alcohol)",
      "Peripheral Neuropathy (Long-term)",
      "Seizures / Encephalopathy",
      "Carcinogenicity (Animal data - Boxed Warning)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 566,
    "drug_name": "Mexiletine",
    "pharmacologic_class": [
      "Class Ib Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Ventricular Arrhythmias",
        "mechanism_of_action": "Blocks fast sodium channels; shortens action potential duration. Structurally similar to lidocaine but oral."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Tremor",
      "Dizziness",
      "Heartburn"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Proarrhythmic Effects",
      "Seizures"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 567,
    "drug_name": "Micafungin",
    "pharmacologic_class": [
      "Echinocandin",
      "Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Candidemia / Esophageal Candidiasis / Prophylaxis in HSCT",
        "mechanism_of_action": "Inhibits synthesis of beta(1,3)-D-glucan; disrupts fungal cell wall integrity; leads to lysis."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Headache",
      "Fever"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Rarely fatal)",
      "Hemolysis / Hemoglobinuria",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 568,
    "drug_name": "Miconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Cutaneous/Vaginal Candidiasis",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; blocks ergosterol synthesis; disrupts fungal membrane."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging",
      "Irritation",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Contact Dermatitis",
      "Increased INR (Intravaginal absorption - warfarin interaction)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 569,
    "drug_name": "Midazolam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Sedative/Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Preoperative Sedation / Anesthesia Induction / Seizures",
        "mechanism_of_action": "Potentiates GABAergic inhibition; increases chloride influx; rapid onset and short duration; marked amnesic effect."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Hiccups",
      "Nausea/Vomiting",
      "Injection site pain"
    ],
    "adverse_drug_events": [
      "Respiratory Depression / Arrest (Boxed Warning)",
      "Agitation / Paradoxical Reaction",
      "Hypotension"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 570,
    "drug_name": "Midodrine",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Agonist",
      "Vasopressor"
    ],
    "indications_and_moa": [
      {
        "indication": "Orthostatic Hypotension",
        "mechanism_of_action": "Prodrug converted to desglymidodrine; activates alpha-1 receptors in arterioles and veins; increases vascular tone and blood pressure."
      }
    ],
    "common_side_effects": [
      "Paresthesia (Scalp tingling)",
      "Pilomotor reaction (Goosebumps)",
      "Urinary urgency"
    ],
    "adverse_drug_events": [
      "Supine Hypertension (Boxed Warning)",
      "Urinary Retention",
      "Bradycardia (Reflex)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 571,
    "drug_name": "Mifepristone",
    "pharmacologic_class": [
      "Antiprogestin / Antiglucocorticoid",
      "Abortifacient / Endocrine-Metabolic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Termination of Pregnancy / Cushing's Syndrome (Korlym)",
        "mechanism_of_action": "Competitive antagonist at progesterone receptors (pregnancy termination) and glucocorticoid receptors (Cushing's)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Abdominal pain",
      "Vaginal bleeding",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Serious Infection / Sepsis (Boxed Warning)",
      "Heavy Bleeding",
      "Hypokalemia (Korlym)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 572,
    "drug_name": "Miglitol",
    "pharmacologic_class": [
      "Alpha-Glucosidase Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Reversibly inhibits alpha-glucosidase enzymes in small intestine brush border; delays carbohydrate digestion and absorption; reduces postprandial hyperglycemia."
      }
    ],
    "common_side_effects": [
      "Flatulence",
      "Diarrhea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Pneumatosis Cystoides Intestinalis",
      "Ileus",
      "Hypoglycemia (if combined with other agents - treat with glucose not sucrose)"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 573,
    "drug_name": "Milnacipran",
    "pharmacologic_class": [
      "SNRI",
      "Antidepressant / Fibromyalgia Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Fibromyalgia",
        "mechanism_of_action": "Potent inhibitor of norepinephrine and serotonin reuptake (NE > 5-HT inhibition); augments descending inhibitory pain pathways."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Constipation",
      "Hot flushes"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Hepatotoxicity",
      "Serotonin Syndrome",
      "Hypertension"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 574,
    "drug_name": "Milrinone",
    "pharmacologic_class": [
      "PDE3 Inhibitor",
      "Inotrope"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Decompensated Heart Failure",
        "mechanism_of_action": "Inhibits phosphodiesterase III; increases cAMP in myocardium (positive inotropy) and vascular smooth muscle (vasodilation)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Hypotension",
      "Tremor"
    ],
    "adverse_drug_events": [
      "Ventricular Arrhythmias (Torsades/VT)",
      "Thrombocytopenia",
      "Hypokalemia"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 575,
    "drug_name": "Minocycline",
    "pharmacologic_class": [
      "Tetracycline Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne Vulgaris / Bacterial Infections",
        "mechanism_of_action": "Binds to 30S ribosomal subunit; inhibits protein synthesis. Lipophilic; penetrates tissues/sebum well. Anti-inflammatory effects."
      }
    ],
    "common_side_effects": [
      "Dizziness/Vertigo (Vestibular toxicity)",
      "Nausea",
      "Discoloration of skin/teeth"
    ],
    "adverse_drug_events": [
      "Drug-Induced Lupus",
      "Benign Intracranial Hypertension",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 576,
    "drug_name": "Minoxidil",
    "pharmacologic_class": [
      "Potassium Channel Opener",
      "Vasodilator / Hair Growth Stimulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Hypertension (Oral) / Alopecia (Topical)",
        "mechanism_of_action": "Opens K+ channels in smooth muscle; causes hyperpolarization and relaxation (vasodilation). Hair growth mechanism unclear (increases cutaneous blood flow/stimulates resting follicles)."
      }
    ],
    "common_side_effects": [
      "Hypertrichosis (Excess hair growth)",
      "Edema",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Pericardial Effusion / Tamponade (Boxed Warning - Oral)",
      "Angina Exacerbation",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 577,
    "drug_name": "Mirtazapine",
    "pharmacologic_class": [
      "Tetracyclic Antidepressant",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Antagonizes central alpha-2 adrenergic auto/heteroreceptors (increases NE/Serotonin release); blocks 5-HT2 and 5-HT3 receptors; blocks H1 receptors."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Increased appetite",
      "Weight gain",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Agranulocytosis (Rare)",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "[https://www.accessdata.fda.gov/scripts/medwatch/index.cfm](https://www.accessdata.fda.gov/scripts/medwatch/index.cfm)"
  },
  {
    "id": 578,
    "drug_name": "Misoprostol",
    "pharmacologic_class": [
      "Prostaglandin E1 Analog",
      "Cytoprotective Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "NSAID-Induced Ulcer Prevention / Pregnancy Termination",
        "mechanism_of_action": "Synthetic PGE1 analog; binds to EP3 receptors on parietal cells decreasing acid secretion; stimulates mucus/bicarbonate secretion. Induces uterine contractions."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Uterine Rupture (Boxed Warning)",
      "Abortifacient (Boxed Warning)",
      "Severe Diarrhea"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 579,
    "drug_name": "Mitomycin",
    "pharmacologic_class": [
      "Antineoplastic Antibiotic",
      "Alkylating Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Gastric / Pancreatic Cancer / Bladder Cancer (Intravesical)",
        "mechanism_of_action": "Bioreductive alkylating agent; activated in hypoxic cells; cross-links DNA; inhibits DNA synthesis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Anorexia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Delayed/Cumulative - Boxed Warning)",
      "Hemolytic Uremic Syndrome (HUS - Boxed Warning)",
      "Extravasation Necrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 580,
    "drug_name": "Mitoxantrone",
    "pharmacologic_class": [
      "Anthracenedione",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer / AML / Multiple Sclerosis",
        "mechanism_of_action": "Intercalates into DNA; inhibits Topoisomerase II; causes DNA strand breaks. Also suppresses B-cell and T-cell immunity (MS)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Alopecia",
      "Blue-green urine/sclera",
      "Menstrual irregularities"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (CHF - Boxed Warning - Cumulative dose limit)",
      "Secondary Leukemia (AML - Boxed Warning)",
      "Myelosuppression (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 581,
    "drug_name": "Modafinil",
    "pharmacologic_class": [
      "Wakefulness-Promoting Agent",
      "CNS Stimulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Narcolepsy / OSA / Shift Work Disorder",
        "mechanism_of_action": "Inhibits dopamine reuptake (DAT); increases synaptic dopamine; activates glutamatergic circuits; inhibits GABA."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Nervousness",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Serious Rash (SJS/TEN)",
      "Psychiatric Symptoms (Mania/Hallucinations)",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 582,
    "drug_name": "Moexipril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Prodrug converted to moexiprilat; inhibits ACE; blocks Angiotensin II formation; reduces vasoconstriction and aldosterone."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 583,
    "drug_name": "Molnupiravir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (COVID-19)"
    ],
    "indications_and_moa": [
      {
        "indication": "Mild-to-Moderate COVID-19",
        "mechanism_of_action": "Prodrug metabolized to NHC-triphosphate; incorporated into SARS-CoV-2 RNA by viral RNA polymerase; causes viral error catastrophe (lethal mutagenesis)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Embryo-Fetal Toxicity (Not recommended in pregnancy)",
      "Bone/Cartilage Toxicity (Animal studies)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 584,
    "drug_name": "Mometasone Furoate",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Inhaled) / Allergic Rhinitis (Nasal) / Dermatoses (Topical)",
        "mechanism_of_action": "High potency glucocorticoid; binds to glucocorticoid receptor; inhibits inflammatory gene expression; suppresses immune response."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Viral infection",
      "Pharyngitis",
      "Epistaxis (Nasal)"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Candida Infection",
      "Nasal Septal Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 585,
    "drug_name": "Montelukast",
    "pharmacologic_class": [
      "Leukotriene Receptor Antagonist (LTRA)",
      "Antiasthmatic"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / Allergic Rhinitis / Exercise-Induced Bronchoconstriction",
        "mechanism_of_action": "Selectively blocks CysLT1 receptor; inhibits physiologic actions of leukotriene D4 (bronchoconstriction, edema, inflammation)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Upper respiratory infection",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Events (Suicidal thoughts/Aggression - Boxed Warning)",
      "Systemic Eosinophilia (Churg-Strauss-like syndrome)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 586,
    "drug_name": "Morphine",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Pain / Pulmonary Edema / MI",
        "mechanism_of_action": "Binds primarily to mu-opioid receptors in the CNS; inhibits ascending pain pathways; produces analgesia, sedation, and euphoria."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea/Vomiting",
      "Sedation",
      "Pruritus (Histamine release)"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 587,
    "drug_name": "Moxifloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumonia / Intra-abdominal Infections / Skin Infections",
        "mechanism_of_action": "Inhibits DNA gyrase and Topoisomerase IV. Broad spectrum with enhanced activity against anaerobes and Gram-positives."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Tendinitis / Rupture (Boxed Warning)",
      "QT Prolongation (Highest among quinolones)",
      "Peripheral Neuropathy (Boxed Warning)",
      "CNS Effects (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 588,
    "drug_name": "Mupirocin",
    "pharmacologic_class": [
      "Topical Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Impetigo / MRSA Nasal Decolonization",
        "mechanism_of_action": "Reversibly binds to bacterial isoleucyl-tRNA synthetase; inhibits protein synthesis. Unique mechanism with no cross-resistance."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging",
      "Pruritus",
      "Erythema"
    ],
    "adverse_drug_events": [
      "Systemic Allergic Reactions",
      "C. difficile Diarrhea (rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 589,
    "drug_name": "Mycophenolate Mofetil",
    "pharmacologic_class": [
      "Immunosuppressant",
      "Antimetabolite"
    ],
    "indications_and_moa": [
      {
        "indication": "Transplant Rejection Prophylaxis",
        "mechanism_of_action": "Prodrug of mycophenolic acid (MPA); reversibly inhibits inosine monophosphate dehydrogenase (IMPDH); blocks de novo guanosine synthesis (crucial for T/B cells)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea/Vomiting",
      "Leukopenia",
      "Infection"
    ],
    "adverse_drug_events": [
      "Embryofetal Toxicity (Boxed Warning - REMS)",
      "Infections (Viral/Fungal - Boxed Warning)",
      "Lymphoma / Malignancy (Boxed Warning)",
      "Pure Red Cell Aplasia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 590,
    "drug_name": "Nabumetone",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis",
        "mechanism_of_action": "Prodrug converted to 6-MNA (active metabolite); inhibits COX-1 and COX-2 (preferential COX-2 inhibition). Non-acidic prodrug causes less direct gastric irritation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Dyspepsia",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 591,
    "drug_name": "Nadolol",
    "pharmacologic_class": [
      "Non-selective Beta Blocker",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina / Migraine Prophylaxis",
        "mechanism_of_action": "Blocks beta-1 and beta-2 receptors; decreases heart rate and cardiac output. Long half-life (once daily dosing)."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Fatigue",
      "Cold extremities"
    ],
    "adverse_drug_events": [
      "Bronchospasm (in Asthma/COPD)",
      "Heart Block",
      "Masking of Hypoglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 592,
    "drug_name": "Nafcillin",
    "pharmacologic_class": [
      "Penicillinase-Resistant Penicillin",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Staphylococcal Infections (MSSA)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis; resistant to Staphylococcal beta-lactamase."
      }
    ],
    "common_side_effects": [
      "Phlebitis",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Interstitial Nephritis",
      "Neutropenia (High dose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 593,
    "drug_name": "Nalbuphine",
    "pharmacologic_class": [
      "Opioid Agonist-Antagonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain / Obstetric Analgesia",
        "mechanism_of_action": "Agonist at kappa receptors (analgesia/sedation); antagonist at mu receptors (respiratory depression ceiling)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Precipitated Withdrawal (in opioid-dependent patients)",
      "Dysphoria"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 594,
    "drug_name": "Naloxone",
    "pharmacologic_class": [
      "Opioid Antagonist",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Opioid Overdose Reversal",
        "mechanism_of_action": "Competitive antagonist at mu, kappa, and delta opioid receptors; displaces opioids and reverses respiratory depression/sedation."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Tremor",
      "Sweating"
    ],
    "adverse_drug_events": [
      "Acute Opioid Withdrawal Syndrome (Agitation, tachycardia, seizures)",
      "Pulmonary Edema",
      "Cardiac Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 595,
    "drug_name": "Naltrexone",
    "pharmacologic_class": [
      "Opioid Antagonist",
      "Addiction Treatment"
    ],
    "indications_and_moa": [
      {
        "indication": "Alcohol Dependence / Opioid Dependence",
        "mechanism_of_action": "Competitive opioid receptor antagonist; blocks euphoric effects of opioids and alcohol (via endogenous opioid system); reduces cravings."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Insomnia",
      "Anxiety"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Dose-dependent)",
      "Injection Site Reactions (Vivitrol)",
      "Precipitated Withdrawal"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 596,
    "drug_name": "Naproxen",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain / Inflammation / Dysmenorrhea / Gout",
        "mechanism_of_action": "Non-selective COX inhibitor; reduces prostaglandin synthesis. Lower cardiovascular risk compared to other NSAIDs."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Heartburn",
      "Nausea"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Renal Toxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 597,
    "drug_name": "Naratriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Agonist",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine",
        "mechanism_of_action": "Agonist at 5-HT1B/1D receptors; vasoconstriction of intracranial blood vessels; inhibition of neuropeptide release. Slower onset but longer duration than other triptans."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Fatigue",
      "Paresthesia"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / Myocardial Ischemia",
      "Cerebrovascular Events",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 598,
    "drug_name": "Natalizumab",
    "pharmacologic_class": [
      "Integrin Receptor Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Sclerosis / Crohn's Disease",
        "mechanism_of_action": "Binds to alpha-4 subunit of integrins; blocks interaction with VCAM-1; prevents leukocyte adhesion and migration across the blood-brain barrier and gut mucosa."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fatigue",
      "Arthralgia",
      "Infusion reactions"
    ],
    "adverse_drug_events": [
      "PML (Progressive Multifocal Leukoencephalopathy - Boxed Warning - REMS)",
      "Hepatotoxicity",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 599,
    "drug_name": "Nateglinide",
    "pharmacologic_class": [
      "Meglitinide",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Blocks ATP-dependent potassium channels on pancreatic beta cells; stimulates rapid, short-acting insulin secretion (targets postprandial glucose)."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Upper respiratory infection",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Weight Gain"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 600,
    "drug_name": "Nebivolol",
    "pharmacologic_class": [
      "Beta-1 Selective Blocker / Vasodilator",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Highly selective beta-1 blocker; also stimulates endothelial nitric oxide synthase (eNOS) causing nitric oxide-mediated vasodilation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fatigue",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Bradycardia",
      "Heart Block",
      "Bronchospasm (High doses)",
      "Masking of Hypoglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 601,
    "drug_name": "Nedocromil",
    "pharmacologic_class": [
      "Mast Cell Stabilizer",
      "Ophthalmic Antiallergic"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Conjunctivitis",
        "mechanism_of_action": "Inhibits activation and degranulation of mast cells, eosinophils, and neutrophils; prevents release of histamine and leukotrienes."
      }
    ],
    "common_side_effects": [
      "Unpleasant taste",
      "Eye burning/stinging",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 602,
    "drug_name": "Nefazodone",
    "pharmacologic_class": [
      "Phenylpiperazine Antidepressant",
      "Serotonin Modulator"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression",
        "mechanism_of_action": "Antagonizes 5-HT2A receptors; inhibits serotonin and norepinephrine reuptake. Minimal anticholinergic/sexual side effects."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dry mouth",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe/Fatal - Boxed Warning)",
      "Suicidality (Boxed Warning)",
      "Priapism"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 603,
    "drug_name": "Nelarabine",
    "pharmacologic_class": [
      "Purine Nucleoside Analog",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "T-cell ALL / T-cell Lymphoblastic Lymphoma",
        "mechanism_of_action": "Prodrug converted to ara-GTP; incorporates into DNA; inhibits DNA synthesis; induces apoptosis. Selective for T-cells."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Nausea",
      "Somnolence",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Severe Neurotoxicity (Boxed Warning - Somnolence, Confusion, Coma, Neuropathy)",
      "Myelosuppression",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 604,
    "drug_name": "Nelfinavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 protease; prevents cleavage of viral polyproteins; produces immature, non-infectious virions. Take with food."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Very common)",
      "Flatulence",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hyperglycemia / Diabetes",
      "Fat Redistribution (Lipodystrophy)",
      "Hemolytic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 605,
    "drug_name": "Neomycin",
    "pharmacologic_class": [
      "Aminoglycoside",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bowel Prep / Hepatic Coma (Oral); Skin Infections (Topical)",
        "mechanism_of_action": "Binds to 30S ribosomal subunit; inhibits protein synthesis. Not absorbed orally (local GI effect)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (Oral)",
      "Diarrhea",
      "Contact Dermatitis (Topical)"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity / Ototoxicity (Systemic absorption - Boxed Warning)",
      "Neuromuscular Blockade",
      "Malabsorption Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 606,
    "drug_name": "Neostigmine",
    "pharmacologic_class": [
      "Acetylcholinesterase Inhibitor",
      "Cholinergic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Myasthenia Gravis / Neuromuscular Blockade Reversal",
        "mechanism_of_action": "Inhibits acetylcholinesterase; prevents breakdown of acetylcholine; increases ACh at neuromuscular junction and autonomic synapses."
      }
    ],
    "common_side_effects": [
      "Salivation",
      "Bradycardia",
      "Abdominal cramps",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Cholinergic Crisis (Muscle paralysis, Respiratory failure)",
      "Severe Bradycardia / Asystole",
      "Bronchoconstriction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 607,
    "drug_name": "Nepafenac",
    "pharmacologic_class": [
      "NSAID",
      "Ophthalmic Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Post-Cataract Inflammation and Pain",
        "mechanism_of_action": "Prodrug converted to amfenac; inhibits COX-1 and COX-2; blocks prostaglandin synthesis in the eye."
      }
    ],
    "common_side_effects": [
      "Capsular opacity",
      "Decreased visual acuity",
      "Foreign body sensation"
    ],
    "adverse_drug_events": [
      "Keratitis / Corneal Melt",
      "Increased Bleeding (Ocular tissue)",
      "Delayed Wound Healing"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 608,
    "drug_name": "Nevirapine",
    "pharmacologic_class": [
      "NNRTI",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Non-competitive inhibitor of HIV-1 reverse transcriptase; binds to a hydrophobic pocket near the active site; blocks DNA polymerization."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Nausea",
      "Fatigue",
      "Headache"
    ],
    "adverse_drug_events": [
      "Severe Hepatotoxicity (Boxed Warning)",
      "Severe Skin Reactions (SJS/TEN - Boxed Warning)",
      "Immune Reconstitution Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 609,
    "drug_name": "Niacin (Nicotinic Acid)",
    "pharmacologic_class": [
      "Vitamin B3",
      "Antilipemic"
    ],
    "indications_and_moa": [
      {
        "indication": "Dyslipidemia / Pellagra",
        "mechanism_of_action": "Inhibits release of free fatty acids from adipose tissue; decreases hepatic VLDL and LDL synthesis; increases HDL (mechanism unclear)."
      }
    ],
    "common_side_effects": [
      "Flushing (Prostaglandin-mediated)",
      "Pruritus",
      "GI Upset"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Sustained release)",
      "Hyperglycemia",
      "Hyperuricemia / Gout"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 610,
    "drug_name": "Nicardipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle and cardiac muscle; potent vasodilator (cerebral and coronary selectivity)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Edema",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Reflex Tachycardia",
      "Angina Exacerbation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 611,
    "drug_name": "Nicorandil",
    "pharmacologic_class": [
      "Potassium Channel Opener / Nitrate",
      "Antianginal"
    ],
    "indications_and_moa": [
      {
        "indication": "Angina Pectoris (Not FDA Approved - used globally)",
        "mechanism_of_action": "Dual action: 1) Opens ATP-sensitive K+ channels (vasodilation); 2) Nitrate-like nitric oxide donor (venodilation)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Ulceration (Oral/Anal/GI - Serious)",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 612,
    "drug_name": "Nicotine",
    "pharmacologic_class": [
      "Smoking Cessation Aid",
      "N-Cholinergic Agonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Smoking Cessation",
        "mechanism_of_action": "Agonist at nicotinic acetylcholine receptors; reduces withdrawal symptoms and cravings by providing lower/slower nicotine levels than cigarettes."
      }
    ],
    "common_side_effects": [
      "Skin irritation (Patch)",
      "Mouth/Throat irritation (Gum/Lozenge)",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Palpitations / Tachycardia",
      "Hypertension",
      "Nicotine Toxicity (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 613,
    "drug_name": "Nifedipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle; potent peripheral vasodilator; reduces afterload and coronary vascular resistance."
      }
    ],
    "common_side_effects": [
      "Peripheral Edema",
      "Flushing",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Reflex Tachycardia",
      "Severe Hypotension",
      "Gingival Hyperplasia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 614,
    "drug_name": "Nilotinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "BCR-ABL Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "CML (Chronic Myeloid Leukemia)",
        "mechanism_of_action": "Selectively inhibits BCR-ABL tyrosine kinase (higher potency than imatinib); inhibits proliferation of leukemic cells."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Headache",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Boxed Warning)",
      "Vascular Occlusive Events (PAOD/Stroke)",
      "Myelosuppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 615,
    "drug_name": "Nilutamide",
    "pharmacologic_class": [
      "Non-steroidal Antiandrogen",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer (Metastatic)",
        "mechanism_of_action": "Competitively blocks androgen receptors; prevents testosterone action. Used in combination with surgical castration."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Visual disturbances (Delayed dark adaptation)",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Interstitial Pneumonitis (Boxed Warning)",
      "Hepatotoxicity",
      "Alcohol Intolerance (Disulfiram-like)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 616,
    "drug_name": "Nimodipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Neuroprotective Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Subarachnoid Hemorrhage (SAH)",
        "mechanism_of_action": "Lipophilic CCB; crosses BBB; preferentially dilates cerebral vessels; prevents vasospasm and ischemic deficits following SAH."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Headache",
      "Nausea",
      "Bradycardia"
    ],
    "adverse_drug_events": [
      "Severe Hypotension",
      "Cardiac Failure",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 617,
    "drug_name": "Nintedanib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antifibrotic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Idiopathic Pulmonary Fibrosis (IPF)",
        "mechanism_of_action": "Inhibits multiple receptor tyrosine kinases (PDGFR, FGFR, VEGFR); blocks fibroblast proliferation, migration, and transformation."
      }
    ],
    "common_side_effects": [
      "Diarrhea (Very common)",
      "Nausea",
      "Abdominal pain",
      "Weight loss"
    ],
    "adverse_drug_events": [
      "Liver Enzyme Elevation / Drug-Induced Liver Injury",
      "Bleeding Events",
      "Gastrointestinal Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 618,
    "drug_name": "Nirmatrelvir-Ritonavir (Paxlovid)",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiviral (COVID-19)"
    ],
    "indications_and_moa": [
      {
        "indication": "Mild-to-Moderate COVID-19 (High risk)",
        "mechanism_of_action": "Nirmatrelvir inhibits SARS-CoV-2 main protease (Mpro); prevents viral replication. Ritonavir inhibits CYP3A4 to boost Nirmatrelvir levels."
      }
    ],
    "common_side_effects": [
      "Dysgeusia (Metallic taste)",
      "Diarrhea",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Significant Drug Interactions (CYP3A4 inhibition - Boxed Warning)",
      "Hepatotoxicity",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 619,
    "drug_name": "Nisoldipine",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Dihydropyridine)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Inhibits calcium influx in vascular smooth muscle; potent peripheral vasodilator; high vascular selectivity."
      }
    ],
    "common_side_effects": [
      "Peripheral Edema",
      "Headache",
      "Dizziness",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Hypotension",
      "Angina Exacerbation",
      "Reflex Tachycardia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 620,
    "drug_name": "Nitazoxanide",
    "pharmacologic_class": [
      "Thiazolide",
      "Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Cryptosporidiosis / Giardiasis",
        "mechanism_of_action": "Interferes with pyruvate:ferredoxin oxidoreductase (PFOR) enzyme-dependent electron transfer reaction; essential for anaerobic energy metabolism."
      }
    ],
    "common_side_effects": [
      "Abdominal pain",
      "Diarrhea",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Urine Discoloration (Greenish-yellow)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 621,
    "drug_name": "Nitisinone",
    "pharmacologic_class": [
      "4-Hydroxyphenylpyruvate Dioxygenase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hereditary Tyrosinemia Type 1 (HT-1)",
        "mechanism_of_action": "Inhibits 4-hydroxyphenylpyruvate dioxygenase; prevents formation of toxic metabolites (fumarylacetoacetate) responsible for liver/kidney damage."
      }
    ],
    "common_side_effects": [
      "Elevated Tyrosine levels",
      "Corneal Opacities (Tyrosine crystals)",
      "Photophobia"
    ],
    "adverse_drug_events": [
      "Ocular Symptoms (if dietary tyrosine restriction is poor)",
      "Thrombocytopenia",
      "Leukopenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 622,
    "drug_name": "Nitrofurantoin",
    "pharmacologic_class": [
      "Nitrofuran Antibiotic",
      "Urinary Tract Antiseptic"
    ],
    "indications_and_moa": [
      {
        "indication": "Uncomplicated UTI (Cystitis)",
        "mechanism_of_action": "Reduced by bacterial flavoproteins to reactive intermediates; damages bacterial DNA, RNA, and proteins. Bactericidal in urine."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Brown urine",
      "Headache"
    ],
    "adverse_drug_events": [
      "Pulmonary Fibrosis (Chronic use)",
      "Peripheral Neuropathy",
      "Hemolytic Anemia (G6PD deficiency)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 623,
    "drug_name": "Nitroglycerin",
    "pharmacologic_class": [
      "Nitrate",
      "Vasodilator / Antianginal"
    ],
    "indications_and_moa": [
      {
        "indication": "Angina Pectoris / Acute Coronary Syndrome / Heart Failure",
        "mechanism_of_action": "Converted to nitric oxide (NO); stimulates guanylate cyclase; increases cGMP; relaxes vascular smooth muscle (venodilation > arteriolar)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Dizziness",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Severe Hypotension / Syncope",
      "Reflex Tachycardia",
      "Methemoglobinemia",
      "Tolerance (with continuous use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 624,
    "drug_name": "Nitroprusside",
    "pharmacologic_class": [
      "Direct Vasodilator",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertensive Crisis / Acute Heart Failure",
        "mechanism_of_action": "Releases nitric oxide (NO) directly; causes potent and rapid dilation of both arterioles and venules; reduces preload and afterload."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Palpitations",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Cyanide Toxicity (Boxed Warning - Metabolic Acidosis)",
      "Thiocyanate Toxicity (Tinnitus/Confusion)",
      "Excessive Hypotension (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 625,
    "drug_name": "Nivolumab",
    "pharmacologic_class": [
      "PD-1 Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Melanoma / NSCLC / RCC / Hodgkin Lymphoma",
        "mechanism_of_action": "Binds to PD-1 receptor on T-cells; blocks interaction with PD-L1 and PD-L2; restores anti-tumor immune response."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Rash",
      "Musculoskeletal pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Immune-Mediated Adverse Reactions (Pneumonitis, Colitis, Hepatitis, Endocrinopathies)",
      "Infusion Reactions",
      "Encephalitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 626,
    "drug_name": "Norepinephrine",
    "pharmacologic_class": [
      "Catecholamine",
      "Vasopressor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypotension / Shock (Septic)",
        "mechanism_of_action": "Potent alpha-1 agonist (vasoconstriction); moderate beta-1 agonist (inotropy). Increases blood pressure and systemic vascular resistance."
      }
    ],
    "common_side_effects": [
      "Bradycardia (Reflex)",
      "Hypertension",
      "Arrhythmias"
    ],
    "adverse_drug_events": [
      "Tissue Necrosis (Extravasation - Boxed Warning)",
      "Peripheral Ischemia / Gangrene",
      "Severe Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 627,
    "drug_name": "Norethindrone",
    "pharmacologic_class": [
      "Progestin",
      "Contraceptive / Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Contraception / Endometriosis / Amenorrhea",
        "mechanism_of_action": "Inhibits gonadotropin secretion; prevents ovulation; thickens cervical mucus; alters endometrium."
      }
    ],
    "common_side_effects": [
      "Breakthrough bleeding",
      "Nausea",
      "Breast tenderness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Thromboembolism",
      "Hepatic Adenoma",
      "Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 628,
    "drug_name": "Norfloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Uncomplicated UTI / Prostatitis / Gonorrhea",
        "mechanism_of_action": "Inhibits bacterial DNA gyrase and Topoisomerase IV; blocks DNA replication. Poor systemic absorption compared to other fluoroquinolones (primarily for urinary tract)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Dizziness",
      "Crystalluria"
    ],
    "adverse_drug_events": [
      "Tendinitis / Rupture (Boxed Warning)",
      "Peripheral Neuropathy (Boxed Warning)",
      "CNS Effects (Boxed Warning)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 629,
    "drug_name": "Nortriptyline",
    "pharmacologic_class": [
      "Tricyclic Antidepressant (Secondary Amine)"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Neuropathic Pain (Off-label)",
        "mechanism_of_action": "Inhibits reuptake of norepinephrine (primary) and serotonin; blocks H1, alpha-1, and muscarinic receptors (less anticholinergic than amitriptyline)."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Sedation",
      "Constipation",
      "Orthostatic hypotension"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Arrhythmias / Heart Block",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 630,
    "drug_name": "Nystatin",
    "pharmacologic_class": [
      "Polyene Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Candidiasis (Cutaneous / Mucocutaneous / Intestinal)",
        "mechanism_of_action": "Binds to sterols in fungal cell membrane; alters permeability; causes leakage of cell contents. Not absorbed systemically (oral/topical only)."
      }
    ],
    "common_side_effects": [
      "Nausea (Oral)",
      "Diarrhea (Oral)",
      "Skin irritation (Topical)"
    ],
    "adverse_drug_events": [
      "Hypersensitivity Reactions (Rare)",
      "Stevens-Johnson Syndrome (Very rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 631,
    "drug_name": "Obeticholic Acid",
    "pharmacologic_class": [
      "Farnesoid X Receptor (FXR) Agonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Primary Biliary Cholangitis (PBC)",
        "mechanism_of_action": "Selectively binds to and activates FXR (nuclear receptor); inhibits bile acid synthesis (downregulates CYP7A1); increases bile acid transport out of hepatocytes."
      }
    ],
    "common_side_effects": [
      "Pruritus (Severe)",
      "Fatigue",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hepatic Decompensation / Failure (Boxed Warning - in Child-Pugh B/C)",
      "Severe Pruritus"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 632,
    "drug_name": "Obinutuzumab",
    "pharmacologic_class": [
      "CD20-Directed Cytolytic Antibody",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / Follicular Lymphoma",
        "mechanism_of_action": "Glycoengineered Type II anti-CD20 antibody; binds to CD20 on B-cells; induces direct cell death and potent ADCC (greater than rituximab); less CDC."
      }
    ],
    "common_side_effects": [
      "Infusion reactions",
      "Neutropenia",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation (Boxed Warning)",
      "PML (Progressive Multifocal Leukoencephalopathy - Boxed Warning)",
      "Tumor Lysis Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 633,
    "drug_name": "Ocrelizumab",
    "pharmacologic_class": [
      "CD20-Directed Cytolytic Antibody",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Sclerosis (Relapsing / Primary Progressive)",
        "mechanism_of_action": "Humanized anti-CD20 antibody; selectively depletes CD20-expressing B-cells through ADCC and CDC; preserves capacity for B-cell reconstitution (spares stem cells/plasma cells)."
      }
    ],
    "common_side_effects": [
      "Infusion reactions",
      "Upper respiratory infection",
      "Skin infection"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation",
      "PML (Rare)",
      "Breast Cancer Risk (Increased in trials)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 634,
    "drug_name": "Octreotide",
    "pharmacologic_class": [
      "Somatostatin Analog"
    ],
    "indications_and_moa": [
      {
        "indication": "Acromegaly / Carcinoid Tumors / VIPomas / Esophageal Varices (Off-label)",
        "mechanism_of_action": "Mimics natural somatostatin; inhibits secretion of Growth Hormone, IGF-1, insulin, glucagon, gastrin, VIP, and serotonin. Reduces splanchnic blood flow."
      }
    ],
    "common_side_effects": [
      "Diarrhea / Steatorrhea",
      "Cholelithiasis (Gallstones)",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Bradycardia / Conduction Abnormalities",
      "Pancreatitis",
      "Hypoglycemia / Hyperglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 635,
    "drug_name": "Ofloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Urinary Tract Infections / Prostatitis / Skin Infections / PID",
        "mechanism_of_action": "Inhibits bacterial DNA gyrase and Topoisomerase IV; prevents DNA replication. Racemic mixture (Levofloxacin is the active L-isomer)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Insomnia",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Tendinitis / Rupture (Boxed Warning)",
      "Peripheral Neuropathy (Boxed Warning)",
      "CNS Effects (Boxed Warning)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 636,
    "drug_name": "Olanzapine",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar I Disorder / Treatment-Resistant Depression",
        "mechanism_of_action": "Antagonizes dopamine D2 and serotonin 5-HT2A receptors; also blocks muscarinic, histaminic, and alpha-1 adrenergic receptors."
      }
    ],
    "common_side_effects": [
      "Weight gain (Significant)",
      "Somnolence",
      "Dry mouth",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Metabolic Syndrome (Hyperglycemia/Dyslipidemia - High risk)",
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "DRESS Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 637,
    "drug_name": "Olaparib",
    "pharmacologic_class": [
      "PARP Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Ovarian / Breast / Pancreatic / Prostate Cancer (BRCA-mutated)",
        "mechanism_of_action": "Inhibits Poly (ADP-ribose) Polymerase (PARP) enzymes; prevents DNA repair in cells with homologous recombination deficiency (BRCA mutations); causes synthetic lethality."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fatigue",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Myelodysplastic Syndrome / AML",
      "Pneumonitis",
      "Bone Marrow Suppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 638,
    "drug_name": "Olmesartan Medoxomil",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Prodrug; selectively blocks AT1 receptors; prevents vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Sprue-like Enteropathy (Severe chronic diarrhea/weight loss - Unique to Olmesartan)",
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 639,
    "drug_name": "Olopatadine",
    "pharmacologic_class": [
      "Mast Cell Stabilizer / H1 Antagonist",
      "Ophthalmic/Nasal Antiallergic"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Conjunctivitis / Seasonal Allergic Rhinitis",
        "mechanism_of_action": "Selective H1 receptor antagonist; inhibits mast cell degranulation; prevents release of histamine and inflammatory mediators."
      }
    ],
    "common_side_effects": [
      "Bitter taste (Dysgeusia)",
      "Headache",
      "Eye burning/stinging"
    ],
    "adverse_drug_events": [
      "Nasal Septal Perforation (Spray - Rare)",
      "Somnolence (Nasal spray)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 640,
    "drug_name": "Omalizumab",
    "pharmacologic_class": [
      "Anti-IgE Antibody",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Asthma / Chronic Idiopathic Urticaria",
        "mechanism_of_action": "Binds to free IgE; prevents binding of IgE to high-affinity receptors on mast cells and basophils; downregulates receptor expression."
      }
    ],
    "common_side_effects": [
      "Injection site reactions",
      "Headache",
      "Arthralgia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis (Boxed Warning - can be delayed)",
      "Serum Sickness",
      "Eosinophilic Conditions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 641,
    "drug_name": "Omeprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Ulcers / H. pylori / Zollinger-Ellison Syndrome",
        "mechanism_of_action": "Prodrug activated in acid environment; irreversibly inhibits H+/K+ ATPase in parietal cells; blocks final step of acid secretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Abdominal pain",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Fractures (Hip/Spine - Long-term use)",
      "Hypomagnesemia",
      "Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 642,
    "drug_name": "Ondansetron",
    "pharmacologic_class": [
      "5-HT3 Receptor Antagonist",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "CINV / PONV / Radiation-Induced Nausea",
        "mechanism_of_action": "Selectively blocks serotonin 5-HT3 receptors centrally (CTZ) and peripherally (vagal nerve terminals); prevents vomiting reflex."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Constipation",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Dose-dependent)",
      "Serotonin Syndrome",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 643,
    "drug_name": "Oseltamivir",
    "pharmacologic_class": [
      "Neuraminidase Inhibitor",
      "Antiviral (Influenza)"
    ],
    "indications_and_moa": [
      {
        "indication": "Influenza A and B (Treatment/Prophylaxis)",
        "mechanism_of_action": "Inhibits viral neuraminidase enzyme; prevents release of new viral particles from infected cells; stops viral spread."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Headache"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Events (Self-injury/Delirium - especially in children)",
      "Severe Skin Reactions (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 644,
    "drug_name": "Oxacillin",
    "pharmacologic_class": [
      "Penicillinase-Resistant Penicillin",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Staphylococcal Infections (MSSA)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis; stable against Staphylococcal beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Phlebitis",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Cholestatic)",
      "Interstitial Nephritis",
      "Neutropenia (High dose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 645,
    "drug_name": "Oxaliplatin",
    "pharmacologic_class": [
      "Platinum Coordination Complex",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Colorectal Cancer (Stage III Adjuvant / Metastatic)",
        "mechanism_of_action": "Forms inter- and intrastrand DNA cross-links; inhibits DNA replication and transcription. Synergistic with 5-FU."
      }
    ],
    "common_side_effects": [
      "Neuropathy (Acute cold-induced)",
      "Nausea/Vomiting",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Peripheral Sensory Neuropathy (Chronic/Cumulative - Dose-limiting)",
      "Anaphylaxis (Boxed Warning)",
      "Pulmonary Fibrosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 646,
    "drug_name": "Oxandrolone",
    "pharmacologic_class": [
      "Anabolic Steroid",
      "Androgen"
    ],
    "indications_and_moa": [
      {
        "indication": "Weight Gain (after surgery/trauma) / Bone Pain (Osteoporosis)",
        "mechanism_of_action": "Synthetic testosterone derivative; promotes anabolism (protein synthesis); increases muscle mass; antagonizes catabolic effects of corticosteroids."
      }
    ],
    "common_side_effects": [
      "Virilization (in women)",
      "Acne",
      "Edema"
    ],
    "adverse_drug_events": [
      "Peliosis Hepatis (Blood-filled liver cysts)",
      "Liver Tumors / Hepatotoxicity",
      "Lipid Abnormalities"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 647,
    "drug_name": "Oxaprozin",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis",
        "mechanism_of_action": "Non-selective COX inhibitor; reduces prostaglandin synthesis. Long half-life (once daily dosing)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dyspepsia",
      "Constipation"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Photosensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 648,
    "drug_name": "Oxazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Anxiolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anxiety / Alcohol Withdrawal",
        "mechanism_of_action": "Enhances GABAergic inhibition via GABA-A receptors. No active metabolites; conjugated directly to glucuronide (safe in liver disease)."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Weakness"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Dependence / Withdrawal",
      "Paradoxical Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 649,
    "drug_name": "Oxcarbazepine",
    "pharmacologic_class": [
      "Anticonvulsant",
      "Voltage-Gated Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial Seizures",
        "mechanism_of_action": "Prodrug converted to MHD (active metabolite); blocks voltage-sensitive sodium channels; stabilizes hyperexcited neuronal membranes."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Diplopia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hyponatremia (More common than with carbamazepine)",
      "Serious Skin Reactions (SJS/TEN)",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 650,
    "drug_name": "Oxybutynin",
    "pharmacologic_class": [
      "Anticholinergic / Antispasmodic",
      "Urinary Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Overactive Bladder (OAB)",
        "mechanism_of_action": "Competitively antagonizes muscarinic receptors (M1/M3) on the bladder detrusor muscle; reduces bladder contractions and urgency. Direct antispasmodic effect."
      }
    ],
    "common_side_effects": [
      "Dry mouth (Very common)",
      "Constipation",
      "Blurred vision",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "CNS Effects (Confusion/Cognitive Impairment - especially elderly)",
      "Urinary Retention",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 651,
    "drug_name": "Oxycodone",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain",
        "mechanism_of_action": "Pure mu-opioid receptor agonist; inhibits ascending pain pathways; alters pain perception; produces generalized CNS depression."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Nausea",
      "Somnolence",
      "Pruritus"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 652,
    "drug_name": "Oxymetazoline",
    "pharmacologic_class": [
      "Alpha-Adrenergic Agonist",
      "Decongestant"
    ],
    "indications_and_moa": [
      {
        "indication": "Nasal Congestion / Rosacea (Topical)",
        "mechanism_of_action": "Stimulates alpha-1 and alpha-2 adrenergic receptors; constricts arterioles in nasal mucosa reducing edema and congestion."
      }
    ],
    "common_side_effects": [
      "Nasal burning/stinging",
      "Dryness",
      "Sneezing"
    ],
    "adverse_drug_events": [
      "Rhinitis Medicamentosa (Rebound congestion > 3 days use)",
      "Hypertension / Tachycardia (Systemic absorption)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 653,
    "drug_name": "Oxymetholone",
    "pharmacologic_class": [
      "Anabolic Steroid",
      "Androgen"
    ],
    "indications_and_moa": [
      {
        "indication": "Anemia (caused by deficient RBC production)",
        "mechanism_of_action": "Synthetic androgen; stimulates erythropoietin production; enhances erythropoiesis; promotes anabolism."
      }
    ],
    "common_side_effects": [
      "Acne",
      "Edema",
      "Virilization (Women)"
    ],
    "adverse_drug_events": [
      "Peliosis Hepatis (Boxed Warning)",
      "Liver Cell Tumors (Boxed Warning)",
      "Lipid Abnormalities"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 654,
    "drug_name": "Oxymorphone",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain",
        "mechanism_of_action": "Potent mu-opioid agonist; inhibits pain pathways; active metabolite of oxycodone (but more potent)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Pyrexia",
      "Constipation",
      "Somnolence"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Interactions with Alcohol (Boxed Warning - Increases plasma levels)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 655,
    "drug_name": "Oxytocin",
    "pharmacologic_class": [
      "Oxytocic Hormone",
      "Uterine Stimulant"
    ],
    "indications_and_moa": [
      {
        "indication": "Labor Induction / Postpartum Hemorrhage",
        "mechanism_of_action": "Stimulates oxytocin receptors on uterine smooth muscle; increases intracellular calcium; triggers rhythmic uterine contractions."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Uterine Rupture / Hyperstimulation",
      "Water Intoxication (ADH-like effect at high doses)",
      "Fetal Distress"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 656,
    "drug_name": "Paclitaxel",
    "pharmacologic_class": [
      "Taxane",
      "Antineoplastic (Microtubule Stabilizer)"
    ],
    "indications_and_moa": [
      {
        "indication": "Ovarian / Breast / Lung Cancer / Kaposi's Sarcoma",
        "mechanism_of_action": "Promotes microtubule assembly and stabilizes them against depolymerization; inhibits cell replication (G2/M arrest)."
      }
    ],
    "common_side_effects": [
      "Alopecia (Total)",
      "Peripheral Neuropathy",
      "Myalgia/Arthralgia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis / Hypersensitivity (Boxed Warning - Premedication required)",
      "Bone Marrow Suppression (Boxed Warning)",
      "Bradycardia / Heart Block"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 657,
    "drug_name": "Palbociclib",
    "pharmacologic_class": [
      "CDK4/6 Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "HR+/HER2- Breast Cancer",
        "mechanism_of_action": "Inhibits Cyclin-Dependent Kinases 4 and 6; blocks progression from G1 to S phase of cell cycle; arrests tumor growth."
      }
    ],
    "common_side_effects": [
      "Neutropenia (Very common)",
      "Fatigue",
      "Nausea",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "Severe Neutropenia / Febrile Neutropenia",
      "Interstitial Lung Disease / Pneumonitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 658,
    "drug_name": "Paliperidone",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Schizoaffective Disorder",
        "mechanism_of_action": "Active metabolite of risperidone (9-hydroxyrisperidone); antagonizes D2 and 5-HT2A receptors."
      }
    ],
    "common_side_effects": [
      "Extrapyramidal Symptoms (Akathisia)",
      "Hyperprolactinemia",
      "Weight gain",
      "Sedation"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "QT Prolongation",
      "Metabolic Changes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 659,
    "drug_name": "Palonosetron",
    "pharmacologic_class": [
      "5-HT3 Receptor Antagonist",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "CINV / PONV",
        "mechanism_of_action": "Highly selective 5-HT3 receptor antagonist with high binding affinity and long half-life (40 hours); prevents acute and delayed nausea/vomiting."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Constipation",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "Hypersensitivity",
      "QT Prolongation (Low risk compared to others)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 660,
    "drug_name": "Pamidronate",
    "pharmacologic_class": [
      "Bisphosphonate",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypercalcemia of Malignancy / Osteolytic Bone Mets / Paget's Disease",
        "mechanism_of_action": "Adsorbs to bone hydroxyapatite; inhibits osteoclast activity; induces osteoclast apoptosis."
      }
    ],
    "common_side_effects": [
      "Flu-like symptoms (Fever/Myalgia/Arthralgia)",
      "Hypocalcemia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Renal Toxicity (Dose/Infusion rate dependent)",
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 661,
    "drug_name": "Pancrelipase",
    "pharmacologic_class": [
      "Pancreatic Enzyme",
      "Digestive Aid"
    ],
    "indications_and_moa": [
      {
        "indication": "Exocrine Pancreatic Insufficiency (CF / Pancreatitis)",
        "mechanism_of_action": "Contains lipase, amylase, and protease; hydrolyzes fats, starches, and proteins in the duodenum to allow absorption."
      }
    ],
    "common_side_effects": [
      "Abdominal pain",
      "Flatulence",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Fibrosing Colonopathy (High doses in CF)",
      "Hyperuricemia (Purine content)",
      "Mucosal Irritation (if chewed)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 662,
    "drug_name": "Pancuronium",
    "pharmacologic_class": [
      "Nondepolarizing Neuromuscular Blocker",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / Intubation / ICU Paralysis",
        "mechanism_of_action": "Long-acting competitive antagonist at nicotinic acetylcholine receptors at the motor end plate; causes flaccid paralysis. Vagolytic effect increases heart rate."
      }
    ],
    "common_side_effects": [
      "Tachycardia",
      "Hypertension",
      "Salivation"
    ],
    "adverse_drug_events": [
      "Prolonged Neuromuscular Blockade",
      "Anaphylaxis",
      "Myopathy (Long-term use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 663,
    "drug_name": "Pantoprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Erosive Esophagitis / Zollinger-Ellison Syndrome",
        "mechanism_of_action": "Irreversibly inhibits H+/K+ ATPase in parietal cells; blocks final step of gastric acid secretion."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Diarrhea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Bone Fractures (Long-term)",
      "Hypomagnesemia",
      "Acute Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 664,
    "drug_name": "Paracetamol (Acetaminophen)",
    "pharmacologic_class": [
      "Analgesic / Antipyretic",
      "Non-Opioid"
    ],
    "indications_and_moa": [
      {
        "indication": "Pain / Fever",
        "mechanism_of_action": "Inhibits CNS prostaglandin synthesis (COX inhibition); elevates pain threshold. Weak anti-inflammatory effect."
      }
    ],
    "common_side_effects": [
      "Nausea (rare)",
      "Rash (rare)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Acute liver failure in overdose due to NAPQI)",
      "Serious Skin Reactions (SJS/TEN/AGEP)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 665,
    "drug_name": "Paroxetine",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / Anxiety / OCD / PTSD / Hot Flashes",
        "mechanism_of_action": "Selectively inhibits serotonin reuptake. Has mild anticholinergic properties."
      }
    ],
    "common_side_effects": [
      "Sexual Dysfunction",
      "Nausea",
      "Somnolence/Insomnia",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Discontinuation Syndrome (Severe due to short half-life)",
      "Increased Bleeding Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 666,
    "drug_name": "Pasireotide",
    "pharmacologic_class": [
      "Somatostatin Analog",
      "Endocrine-Metabolic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Cushing's Disease / Acromegaly",
        "mechanism_of_action": "Binds to somatostatin receptors (sst1, 2, 3, 5); inhibits ACTH secretion (Cushing's) and GH/IGF-1 secretion (Acromegaly). Higher affinity for sst5 than octreotide."
      }
    ],
    "common_side_effects": [
      "Hyperglycemia / Diabetes",
      "Diarrhea",
      "Nausea",
      "Cholelithiasis"
    ],
    "adverse_drug_events": [
      "Severe Hyperglycemia / Ketoacidosis",
      "Bradycardia / QT Prolongation",
      "Liver Enzyme Elevations"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 667,
    "drug_name": "Pazopanib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Renal Cell Carcinoma (RCC) / Soft Tissue Sarcoma",
        "mechanism_of_action": "Multi-kinase inhibitor (VEGFR, PDGFR, c-KIT); inhibits angiogenesis and tumor cell proliferation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Hypertension",
      "Hair color changes (Depigmentation)",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Cardiac Dysfunction",
      "Hemorrhagic Events",
      "Thrombotic Microangiopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 668,
    "drug_name": "Pegaspargase",
    "pharmacologic_class": [
      "Asparagine Specific Enzyme",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Lymphoblastic Leukemia (ALL)",
        "mechanism_of_action": "Pegylated L-asparaginase; hydrolyzes asparagine to aspartic acid and ammonia; depletes asparagine causing leukemic cell death (leukemic cells cannot synthesize asparagine)."
      }
    ],
    "common_side_effects": [
      "Hypersensitivity",
      "Hyperglycemia",
      "Hypoalbuminemia"
    ],
    "adverse_drug_events": [
      "Pancreatitis (Severe/Fatal)",
      "Thrombosis / Coagulopathy",
      "Hepatotoxicity",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 669,
    "drug_name": "Pegfilgrastim",
    "pharmacologic_class": [
      "G-CSF (Pegylated)",
      "Hematopoietic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Neutropenia Prevention (Chemotherapy-induced)",
        "mechanism_of_action": "Pegylated Filgrastim; binds G-CSF receptors; stimulates neutrophil production. Long-acting due to decreased renal clearance (once per cycle dosing)."
      }
    ],
    "common_side_effects": [
      "Bone pain"
    ],
    "adverse_drug_events": [
      "Splenic Rupture",
      "ARDS",
      "Capillary Leak Syndrome",
      "Aortitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 670,
    "drug_name": "Pegvisomant",
    "pharmacologic_class": [
      "Growth Hormone Receptor Antagonist"
    ],
    "indications_and_moa": [
      {
        "indication": "Acromegaly",
        "mechanism_of_action": "Competitively binds to GH receptors; blocks GH signaling and IGF-1 production. Genetically modified GH analog."
      }
    ],
    "common_side_effects": [
      "Injection site reaction",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "GH-Secreting Tumor Growth (due to loss of feedback inhibition - monitor MRI)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 671,
    "drug_name": "Pembrolizumab",
    "pharmacologic_class": [
      "PD-1 Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Melanoma / NSCLC / Head & Neck Cancer / Hodgkin Lymphoma / MSI-H Tumors",
        "mechanism_of_action": "Binds to PD-1 receptor on T-cells; blocks interaction with PD-L1 and PD-L2 ligands; releases PD-1 pathway-mediated inhibition of the immune response."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Pruritus",
      "Rash",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Immune-Mediated Adverse Reactions (Pneumonitis, Colitis, Hepatitis, Endocrinopathies, Nephritis)",
      "Infusion Reactions",
      "Type 1 Diabetes Mellitus"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 672,
    "drug_name": "Pemetrexed",
    "pharmacologic_class": [
      "Antifolate / Antimetabolite",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "NSCLC (Non-squamous) / Mesothelioma",
        "mechanism_of_action": "Inhibits thymidylate synthase (TS), dihydrofolate reductase (DHFR), and GARFT; disrupts folate-dependent metabolic processes essential for cell replication."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Nausea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Dose-limiting - Supplement with B12/Folic Acid)",
      "Renal Failure",
      "Severe Cutaneous Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 673,
    "drug_name": "Penicillamine",
    "pharmacologic_class": [
      "Chelating Agent / DMARD",
      "Antirheumatic"
    ],
    "indications_and_moa": [
      {
        "indication": "Wilson's Disease / Cystinuria / Rheumatoid Arthritis",
        "mechanism_of_action": "Chelates copper (Wilson's); forms soluble complex with cystine (Cystinuria); depresses T-cell activity (RA)."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Nausea",
      "Taste alteration",
      "Proteinuria"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Boxed Warning)",
      "Autoimmune Syndromes (Myasthenia gravis, Pemphigus, Goodpasture's)",
      "Nephrotic Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 674,
    "drug_name": "Penicillin G (Benzylpenicillin)",
    "pharmacologic_class": [
      "Natural Penicillin",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Syphilis / Streptococcal Infections / Meningococcal Meningitis",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by binding to PBPs. Parenteral use only (unstable in acid)."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Jarisch-Herxheimer Reaction (Syphilis treatment)",
      "Seizures (High doses/Renal failure)",
      "Hemolytic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 675,
    "drug_name": "Penicillin V (Phenoxymethylpenicillin)",
    "pharmacologic_class": [
      "Natural Penicillin",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Streptococcal Pharyngitis / Mild Skin Infections",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis. Acid-stable analog of Penicillin G suitable for oral use."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Black hairy tongue"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Severe Skin Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 676,
    "drug_name": "Pentamidine",
    "pharmacologic_class": [
      "Antiprotozoal",
      "Diamidine"
    ],
    "indications_and_moa": [
      {
        "indication": "Pneumocystis Pneumonia (Treatment/Prophylaxis)",
        "mechanism_of_action": "Inhibits DNA, RNA, phospholipid and protein synthesis in protozoa. Precise mechanism unknown."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Rash",
      "Metallic taste"
    ],
    "adverse_drug_events": [
      "Severe Hypotension (IV)",
      "Hypoglycemia (followed by Hyperglycemia/Diabetes - pancreatic toxicity)",
      "Nephrotoxicity",
      "Leukopenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 677,
    "drug_name": "Pentazocine",
    "pharmacologic_class": [
      "Opioid Agonist-Antagonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain",
        "mechanism_of_action": "Agonist at kappa receptors; weak antagonist/partial agonist at mu receptors. Increases cardiac workload."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Sedation",
      "Euphoria"
    ],
    "adverse_drug_events": [
      "Psychotomimetic Effects (Hallucinations/Dysphoria)",
      "Respiratory Depression",
      "Injection Site Tissue Damage",
      "Precipitated Withdrawal"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 678,
    "drug_name": "Pentobarbital",
    "pharmacologic_class": [
      "Barbiturate",
      "Sedative-Hypnotic / Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Seizures / Status Epilepticus (Refractory) / Preoperative Sedation",
        "mechanism_of_action": "Binds to GABA-A receptors; prolongs the duration of chloride channel opening; depresses sensory cortex; decreases motor activity; produces sedation and hypnosis."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Bradycardia",
      "Hypotension",
      "Respiratory depression"
    ],
    "adverse_drug_events": [
      "Respiratory Arrest (High doses)",
      "Laryngospasm",
      "Dependence / Withdrawal"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 679,
    "drug_name": "Pentosan Polysulfate",
    "pharmacologic_class": [
      "Low Molecular Weight Heparin-like Compound",
      "Urinary Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Interstitial Cystitis (IC) Pain",
        "mechanism_of_action": "Restores the glycosaminoglycan (GAG) layer of the bladder mucosa; reduces permeability to urinary irritants; exhibits weak anticoagulant activity."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Diarrhea",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Pigmentary Maculopathy (Vision loss - Long-term use warning)",
      "Rectal Hemorrhage",
      "Ecchymosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 680,
    "drug_name": "Pentoxifylline",
    "pharmacologic_class": [
      "Xanthine Derivative",
      "Hemorrheologic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Intermittent Claudication",
        "mechanism_of_action": "Improves RBC deformability; reduces blood viscosity; decreases platelet aggregation and fibrinogen levels; improves microcirculatory flow."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Headache",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Arrhythmias",
      "Bleeding",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 681,
    "drug_name": "Perampanel",
    "pharmacologic_class": [
      "AMPA Receptor Antagonist",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial-Onset Seizures / GTCS",
        "mechanism_of_action": "Non-competitive antagonist of AMPA glutamate receptors on post-synaptic neurons; inhibits excitatory neurotransmission."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Fatigue",
      "Irritability"
    ],
    "adverse_drug_events": [
      "Serious Psychiatric/Behavioral Reactions (Aggression/Hostility - Boxed Warning)",
      "Homicidal Ideation (Boxed Warning)",
      "Falls"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 682,
    "drug_name": "Perindopril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Stable Coronary Artery Disease",
        "mechanism_of_action": "Prodrug converted to perindoprilat; inhibits ACE; blocks Angiotensin II formation; reduces vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Cough",
      "Dizziness",
      "Headache",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Impairment",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 683,
    "drug_name": "Permethrin",
    "pharmacologic_class": [
      "Pyrethroid",
      "Scabicide / Pediculicide"
    ],
    "indications_and_moa": [
      {
        "indication": "Scabies / Lice Infestation",
        "mechanism_of_action": "Disrupts sodium channel current in nerve cell membranes of parasites; causes delayed repolarization and paralysis of the pest."
      }
    ],
    "common_side_effects": [
      "Pruritus (Transient worsening)",
      "Burning/Stinging",
      "Erythema"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Contact Dermatitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 684,
    "drug_name": "Perphenazine",
    "pharmacologic_class": [
      "Phenothiazine",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Severe Nausea/Vomiting",
        "mechanism_of_action": "Blocks dopamine D2 receptors in the mesolimbic system (antipsychotic) and CTZ (antiemetic); also blocks alpha-1 and histamine receptors."
      }
    ],
    "common_side_effects": [
      "Extrapyramidal Symptoms (EPS)",
      "Sedation",
      "Dry mouth",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Blood Dyscrasias (Agranulocytosis)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 685,
    "drug_name": "Pertuzumab",
    "pharmacologic_class": [
      "HER2 Dimerization Inhibitor",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "HER2+ Breast Cancer (Metastatic/Neoadjuvant)",
        "mechanism_of_action": "Targets extracellular dimerization domain (Subdomain II) of HER2; blocks ligand-dependent heterodimerization of HER2 with other HER family members; inhibits signaling."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Alopecia",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Cardiomyopathy / LVEF Decline (Boxed Warning)",
      "Embryo-Fetal Toxicity (Boxed Warning)",
      "Infusion Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 686,
    "drug_name": "Pethidine (Meperidine)",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain / Preoperative Sedation / Obstetric Analgesia",
        "mechanism_of_action": "Mu-opioid receptor agonist; inhibits pain pathways. Toxic metabolite normeperidine accumulates (neurotoxic - seizures). Anticholinergic effects."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Nausea/Vomiting",
      "Dry mouth",
      "Tachycardia (Anticholinergic)"
    ],
    "adverse_drug_events": [
      "Seizures (Normeperidine accumulation - especially renal failure)",
      "Serotonin Syndrome (Contraindicated with MAOIs)",
      "Respiratory Depression (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 687,
    "drug_name": "Phenazopyridine",
    "pharmacologic_class": [
      "Urinary Analgesic",
      "Azo Dye"
    ],
    "indications_and_moa": [
      {
        "indication": "Dysuria (Symptomatic relief)",
        "mechanism_of_action": "Exerts topical analgesic effect on the urinary tract mucosa (mechanism unclear). Does not treat infection."
      }
    ],
    "common_side_effects": [
      "Orange/Red Urine (Staining)",
      "Headache",
      "GI Upset"
    ],
    "adverse_drug_events": [
      "Methemoglobinemia (Overdose)",
      "Hemolytic Anemia (G6PD deficiency)",
      "Renal Toxicity (Yellow sclera indicating accumulation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 688,
    "drug_name": "Phenelzine",
    "pharmacologic_class": [
      "MAOI (Non-selective, Irreversible)",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression (Atypical/Treatment-Resistant)",
        "mechanism_of_action": "Irreversibly inhibits monoamine oxidase (MAO-A and MAO-B); increases levels of NE, serotonin, and dopamine in the CNS."
      }
    ],
    "common_side_effects": [
      "Orthostatic hypotension",
      "Dizziness",
      "Insomnia",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis (Tyramine interaction - Cheese effect)",
      "Serotonin Syndrome (Drug interactions)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 689,
    "drug_name": "Pheniramine",
    "pharmacologic_class": [
      "H1 Antagonist (1st Generation)",
      "Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Allergic Rhinitis / Conjunctivitis (OTC combinations)",
        "mechanism_of_action": "Competitively blocks H1 receptors; significant anticholinergic activity (drying secretions)."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dry mouth",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Confusion (Elderly)",
      "Paradoxical Excitation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 690,
    "drug_name": "Phenobarbital",
    "pharmacologic_class": [
      "Barbiturate",
      "Anticonvulsant / Sedative"
    ],
    "indications_and_moa": [
      {
        "indication": "Seizures / Status Epilepticus / Sedation",
        "mechanism_of_action": "Increases the duration of GABA-A chloride channel opening; depresses sensory cortex; decreases motor activity; produces sedation."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Cognitive impairment"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Stevens-Johnson Syndrome",
      "Paradoxical Hyperactivity (Children)",
      "Dependence"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 691,
    "drug_name": "Phenoxybenzamine",
    "pharmacologic_class": [
      "Alpha-Adrenergic Antagonist (Non-selective)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Pheochromocytoma (Pre-operative)",
        "mechanism_of_action": "Irreversibly blocks alpha-1 and alpha-2 adrenergic receptors; prevents catecholamine-induced vasoconstriction (chemical sympathectomy)."
      }
    ],
    "common_side_effects": [
      "Postural Hypotension",
      "Reflex Tachycardia",
      "Nasal congestion",
      "Inhibition of ejaculation"
    ],
    "adverse_drug_events": [
      "Shock (Hypotensive)",
      "Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 692,
    "drug_name": "Phentermine",
    "pharmacologic_class": [
      "Sympathomimetic Amine",
      "Anorectic"
    ],
    "indications_and_moa": [
      {
        "indication": "Obesity (Short-term adjunct)",
        "mechanism_of_action": "Stimulates hypothalamus to release norepinephrine; reduces appetite (anorexiant). Structurally similar to amphetamine."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Dry mouth",
      "Tachycardia",
      "Restlessness"
    ],
    "adverse_drug_events": [
      "Pulmonary Hypertension (Rare)",
      "Valvular Heart Disease (Historical association with Fen-Phen)",
      "Abuse Potential / Dependence"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 693,
    "drug_name": "Phentolamine",
    "pharmacologic_class": [
      "Alpha-Adrenergic Antagonist (Non-selective)",
      "Vasodilator / Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Pheochromocytoma Diagnosis / Extravasation Antidote / Dental Anesthesia Reversal",
        "mechanism_of_action": "Competitively blocks alpha-1 and alpha-2 receptors; causes vasodilation; reverses vasoconstriction from catecholamine extravasation."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Reflex Tachycardia",
      "Nasal congestion"
    ],
    "adverse_drug_events": [
      "Myocardial Infarction / Arrhythmias (Severe tachycardia)",
      "Cerebrovascular Spasm",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 694,
    "drug_name": "Phenylephrine",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Agonist",
      "Vasopressor / Decongestant"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypotension / Shock / Nasal Congestion / Mydriasis",
        "mechanism_of_action": "Potent direct-acting alpha-1 agonist; causes vasoconstriction (increases SVR/BP); dilates pupil (mydriasis) without cycloplegia; constricts nasal mucosa."
      }
    ],
    "common_side_effects": [
      "Reflex Bradycardia",
      "Hypertension",
      "Headache"
    ],
    "adverse_drug_events": [
      "Severe Hypertension",
      "Tissue Necrosis (Extravasation)",
      "Rebound Congestion (Nasal overuse)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 695,
    "drug_name": "Phenytoin",
    "pharmacologic_class": [
      "Hydantoin",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Generalized Tonic-Clonic Seizures / Complex Partial Seizures",
        "mechanism_of_action": "Blocks voltage-gated sodium channels; stabilizes neuronal membranes; inhibits repetitive firing. Zero-order kinetics (saturation) at therapeutic doses."
      }
    ],
    "common_side_effects": [
      "Gingival Hyperplasia",
      "Nystagmus",
      "Ataxia",
      "Confusion"
    ],
    "adverse_drug_events": [
      "Cardiovascular Collapse (Rapid IV - Boxed Warning)",
      "Severe Skin Reactions (SJS/TEN/DRESS)",
      "Purple Glove Syndrome",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 696,
    "drug_name": "Pilocarpine",
    "pharmacologic_class": [
      "Cholinergic Agonist",
      "Miotic / Sialagogue"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma (Ophthalmic) / Xerostomia (Oral)",
        "mechanism_of_action": "Direct muscarinic agonist; contracts ciliary muscle (opens trabecular meshwork to lower IOP) and iris sphincter (miosis); stimulates salivary/sweat glands."
      }
    ],
    "common_side_effects": [
      "Sweating (Diaphoresis)",
      "Salivation",
      "Blurred vision (Brow ache)",
      "Frequent urination"
    ],
    "adverse_drug_events": [
      "Retinal Detachment",
      "Pulmonary Edema / Bronchospasm (Systemic)",
      "Cardiovascular Effects (Bradycardia/Hypotension)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 697,
    "drug_name": "Pimecrolimus",
    "pharmacologic_class": [
      "Calcineurin Inhibitor",
      "Topical Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Atopic Dermatitis (Eczema)",
        "mechanism_of_action": "Binds to macrophilin-12; inhibits calcineurin; blocks T-cell activation and cytokine release (IL-2, IL-4). No skin atrophy."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging at site",
      "Headache",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Malignancy Risk (Skin/Lymphoma - Boxed Warning - Theoretical)",
      "Viral Skin Infections (Herpes/Warts)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 698,
    "drug_name": "Pimozide",
    "pharmacologic_class": [
      "Diphenylbutylpiperidine",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Tourette's Disorder (Severe)",
        "mechanism_of_action": "Strong dopamine D2 receptor antagonist; suppresses motor and phonic tics."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Extrapyramidal Symptoms (EPS)",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Arrhythmias (Boxed Warning - CYP inhibitor interaction)",
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 699,
    "drug_name": "Pindolol",
    "pharmacologic_class": [
      "Non-selective Beta Blocker with ISA",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension",
        "mechanism_of_action": "Blocks beta-1 and beta-2 receptors; possesses Intrinsic Sympathomimetic Activity (ISA) (partial agonist) - causes less bradycardia at rest."
      }
    ],
    "common_side_effects": [
      "Insomnia / Vivid dreams",
      "Fatigue",
      "Dizziness",
      "Edema"
    ],
    "adverse_drug_events": [
      "Bronchospasm",
      "Heart Failure",
      "Masking of Hypoglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 700,
    "drug_name": "Pioglitazone",
    "pharmacologic_class": [
      "Thiazolidinedione (TZD)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Agonist at PPAR-gamma nuclear receptors; increases insulin sensitivity in muscle and adipose tissue; decreases hepatic glucose output."
      }
    ],
    "common_side_effects": [
      "Edema",
      "Weight gain",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Congestive Heart Failure (Boxed Warning)",
      "Bladder Cancer (Long-term use)",
      "Fractures (Females)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 701,
    "drug_name": "Piperacillin-Tazobactam",
    "pharmacologic_class": [
      "Penicillin + Beta-lactamase Inhibitor",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Intra-abdominal Infections / Pneumonia / Sepsis",
        "mechanism_of_action": "Piperacillin inhibits cell wall synthesis (extended spectrum including Pseudomonas). Tazobactam inhibits beta-lactamases."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Headache",
      "Constipation",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis / Hypersensitivity",
      "Clostridioides difficile-associated Diarrhea",
      "Renal Failure / Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 702,
    "drug_name": "Piracetam",
    "pharmacologic_class": [
      "Nootropic (GABA Derivative)",
      "Neurologic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Myoclonus (Cortical) / Cognitive Impairment (Not FDA Approved)",
        "mechanism_of_action": "Modulates neurotransmission (cholinergic/glutamatergic); improves neuronal membrane fluidity; neuroprotective properties."
      }
    ],
    "common_side_effects": [
      "Hyperkinesia",
      "Nervousness",
      "Weight gain",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Hemorrhagic Disorders (Inhibits platelet aggregation)",
      "Agitation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 703,
    "drug_name": "Pirfenidone",
    "pharmacologic_class": [
      "Antifibrotic Agent",
      "Pyridone"
    ],
    "indications_and_moa": [
      {
        "indication": "Idiopathic Pulmonary Fibrosis (IPF)",
        "mechanism_of_action": "Downregulates production of growth factors (TGF-beta) and pro-collagen; inhibits fibroblast proliferation and collagen synthesis."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Rash",
      "Photosensitivity",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Elevated LFTs)",
      "Severe Photosensitivity Reaction",
      "GI Perforation (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 704,
    "drug_name": "Piroxicam",
    "pharmacologic_class": [
      "NSAID (Oxicam)",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoarthritis / Rheumatoid Arthritis",
        "mechanism_of_action": "Non-selective COX inhibitor; reduces prostaglandin synthesis. Very long half-life (50 hours); high GI toxicity risk."
      }
    ],
    "common_side_effects": [
      "Dyspepsia",
      "Nausea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning - High risk)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Severe Skin Reactions (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 705,
    "drug_name": "Pitavastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia",
        "mechanism_of_action": "Inhibits HMG-CoA reductase; reduces cholesterol synthesis; upregulates LDL receptors. Minimally metabolized by CYP450 (less drug interactions)."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Back pain",
      "Constipation",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis",
      "Immune-Mediated Necrotizing Myopathy",
      "New Onset Diabetes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 706,
    "drug_name": "Podophyllotoxin (Podofilox)",
    "pharmacologic_class": [
      "Mitotic Inhibitor",
      "Keratolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "External Genital Warts (Condyloma Acuminata)",
        "mechanism_of_action": "Binds to tubulin; inhibits microtubule formation; arrests mitosis in metaphase; causes tissue necrosis of warts."
      }
    ],
    "common_side_effects": [
      "Local inflammation",
      "Burning/Pain",
      "Erosion"
    ],
    "adverse_drug_events": [
      "Severe Ulceration",
      "Systemic Toxicity (if applied to large areas - neuropathy/bone marrow suppression)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 707,
    "drug_name": "Polidocanol",
    "pharmacologic_class": [
      "Sclerosing Agent",
      "Local Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Varicose Veins / Spider Veins (Sclerotherapy)",
        "mechanism_of_action": "Induces endothelial damage; promotes platelet aggregation and fibrosis (sclerosis) of the vessel lumen. Also has local anesthetic effect."
      }
    ],
    "common_side_effects": [
      "Injection site pain/irritation",
      "Hyperpigmentation",
      "Hematoma"
    ],
    "adverse_drug_events": [
      "Deep Vein Thrombosis / PE",
      "Tissue Necrosis (Extravasation)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 708,
    "drug_name": "Polyethylene Glycol (PEG 3350)",
    "pharmacologic_class": [
      "Osmotic Laxative"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation / Bowel Prep",
        "mechanism_of_action": "Osmotic agent; binds water; retains fluid in the colon; softens stool and increases frequency of bowel movements."
      }
    ],
    "common_side_effects": [
      "Bloating",
      "Flatulence",
      "Nausea",
      "Abdominal cramping"
    ],
    "adverse_drug_events": [
      "Diarrhea / Dehydration",
      "Electrolyte Imbalance",
      "Anaphylaxis (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 709,
    "drug_name": "Polymyxin B",
    "pharmacologic_class": [
      "Polymyxin Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "MDR Gram-Negative Infections",
        "mechanism_of_action": "Cationic detergent; binds to LPS in outer membrane; disrupts membrane integrity; causes leakage of cell contents."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Flushing",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Boxed Warning - Dose-dependent)",
      "Neurotoxicity (Boxed Warning - Paresthesia/Respiratory paralysis)",
      "Neuromuscular Blockade"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 710,
    "drug_name": "Pomalidomide",
    "pharmacologic_class": [
      "Immunomodulator",
      "Antineoplastic (Thalidomide Analog)"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma (Relapsed/Refractory)",
        "mechanism_of_action": "Binds to cereblon; inhibits proliferation of myeloma cells; induces apoptosis; enhances T-cell and NK cell immunity; inhibits angiogenesis."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Constipation",
      "Nausea",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Embryo-Fetal Toxicity (Boxed Warning - REMS)",
      "Venous Thromboembolism (Boxed Warning)",
      "Severe Neutropenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 711,
    "drug_name": "Ponatinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "BCR-ABL Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "CML / Ph+ ALL (T315I mutation)",
        "mechanism_of_action": "Pan-BCR-ABL inhibitor; effective against T315I gatekeeper mutation resistant to other TKIs; also inhibits VEGFR/PDGFR."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Abdominal pain",
      "Headache",
      "Dry skin"
    ],
    "adverse_drug_events": [
      "Arterial Occlusion / Thrombosis (Boxed Warning)",
      "Hepatotoxicity (Boxed Warning)",
      "Heart Failure (Boxed Warning)",
      "Venous Thromboembolism"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 712,
    "drug_name": "Posaconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Prophylaxis of Invasive Aspergillus/Candida",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; blocks ergosterol synthesis. Broad spectrum activity against molds (Mucorales)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Fever",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hepatotoxicity",
      "Drug Interactions (CYP3A4 inhibitor)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 713,
    "drug_name": "Potassium Chloride",
    "pharmacologic_class": [
      "Electrolyte"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypokalemia",
        "mechanism_of_action": "Replenishes intracellular potassium; essential for nerve impulse conduction, cardiac contraction, and renal function."
      }
    ],
    "common_side_effects": [
      "GI irritation",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hyperkalemia (Arrhythmias/Arrest)",
      "GI Ulceration / Bleeding (Oral solids)",
      "Phlebitis (IV)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 714,
    "drug_name": "Potassium Citrate",
    "pharmacologic_class": [
      "Urinary Alkalinizer",
      "Electrolyte"
    ],
    "indications_and_moa": [
      {
        "indication": "Renal Calculi (Prevention)",
        "mechanism_of_action": "Metabolized to bicarbonate; alkalinizes urine; increases urinary citrate (complexes calcium); prevents calcium stone formation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hyperkalemia",
      "GI Ulceration (if not taken with food/water)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 715,
    "drug_name": "Pralidoxime (2-PAM)",
    "pharmacologic_class": [
      "Cholinesterase Reactivator",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Organophosphate Poisoning",
        "mechanism_of_action": "Reactivates acetylcholinesterase by removing the phosphoryl group inhibited by organophosphates; restores neuromuscular transmission. Effective on nicotinic effects."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Blurred vision",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Laryngospasm",
      "Muscle Rigidity",
      "Tachycardia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 716,
    "drug_name": "Pramipexole",
    "pharmacologic_class": [
      "Dopamine Agonist (Non-Ergot)",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Restless Legs Syndrome",
        "mechanism_of_action": "Direct agonist at dopamine D2 and D3 receptors in the striatum; high affinity for D3. Improves motor function."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Somnolence",
      "Postural hypotension"
    ],
    "adverse_drug_events": [
      "Sleep Attacks (Sudden onset of sleep)",
      "Impulse Control Disorders (Gambling/Shopping)",
      "Hallucinations"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 717,
    "drug_name": "Prasugrel",
    "pharmacologic_class": [
      "P2Y12 Inhibitor",
      "Antiplatelet Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Coronary Syndrome (managed with PCI)",
        "mechanism_of_action": "Prodrug; irreversibly inhibits P2Y12 ADP receptors on platelets; prevents activation of GPIIb/IIIa complex. More potent and consistent inhibition than clopidogrel."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Bruising",
      "Headache"
    ],
    "adverse_drug_events": [
      "Significant/Fatal Bleeding (Boxed Warning)",
      "Thrombotic Thrombocytopenic Purpura (TTP)",
      "Contraindicated in history of Stroke/TIA (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 718,
    "drug_name": "Pravastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Cardiovascular Prevention",
        "mechanism_of_action": "Inhibits HMG-CoA reductase; reduces cholesterol synthesis; upregulates LDL receptors. Hydrophilic statin (less muscle penetration/CYP interactions)."
      }
    ],
    "common_side_effects": [
      "Musculoskeletal pain",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis",
      "Hepatotoxicity",
      "Immune-Mediated Necrotizing Myopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 719,
    "drug_name": "Praziquantel",
    "pharmacologic_class": [
      "Anthelmintic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schistosomiasis / Liver Flukes / Tapeworms",
        "mechanism_of_action": "Increases cell membrane permeability to calcium; causes titanic contraction and paralysis of worm musculature; leads to detachment and death."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Seizures (in Neurocysticercosis - inflammatory reaction)",
      "Arrhythmias",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 720,
    "drug_name": "Prazosin",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Antagonist",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / PTSD Nightmares (Off-label)",
        "mechanism_of_action": "Selectively blocks alpha-1 adrenergic receptors; causes vasodilation (decreases SVR); reduces CNS sympathetic outflow (nightmares)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Drowsiness",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "First-Dose Syncope / Orthostatic Hypotension",
      "Priapism",
      "Intraoperative Floppy Iris Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 721,
    "drug_name": "Prednisolone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Conditions / Asthma / Autoimmune Disorders",
        "mechanism_of_action": "Active metabolite of prednisone; potent anti-inflammatory; suppresses immune system; stabilizes membranes. Intermediate duration."
      }
    ],
    "common_side_effects": [
      "Fluid retention",
      "Increased appetite",
      "Insomnia",
      "Mood changes"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Cushing's Syndrome",
      "Osteoporosis",
      "Peptic Ulcer"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 722,
    "drug_name": "Prednisone",
    "pharmacologic_class": [
      "Corticosteroid",
      "Glucocorticoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Conditions / Immunosuppression",
        "mechanism_of_action": "Prodrug converted to prednisolone in the liver; inhibits inflammatory cytokines; suppresses leukocyte migration; gluconeogenic."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Weight gain",
      "Fluid retention",
      "Hyperglycemia"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression",
      "Osteonecrosis",
      "Psychosis",
      "Infection Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 723,
    "drug_name": "Pregabalin",
    "pharmacologic_class": [
      "Anticonvulsant / Analgesic",
      "Gabapentinoid"
    ],
    "indications_and_moa": [
      {
        "indication": "Neuropathic Pain / Fibromyalgia / Partial Seizures",
        "mechanism_of_action": "Binds to alpha-2-delta subunit of voltage-gated calcium channels in CNS; reduces calcium influx and release of excitatory neurotransmitters. No GABA activity."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Peripheral Edema",
      "Weight gain"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (with Opioids)",
      "Suicidal Ideation",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 724,
    "drug_name": "Primaquine",
    "pharmacologic_class": [
      "8-Aminoquinoline",
      "Antimalarial"
    ],
    "indications_and_moa": [
      {
        "indication": "Malaria (Radical Cure of P. vivax/ovale)",
        "mechanism_of_action": "Active against hepatic hypnozoites (dormant forms) preventing relapse; interferes with parasite mitochondrial function; generates reactive oxygen species."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Abdominal pain",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hemolytic Anemia (G6PD Deficiency - Contraindicated)",
      "Methemoglobinemia",
      "Leukopenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 725,
    "drug_name": "Primidone",
    "pharmacologic_class": [
      "Barbiturate",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Generalized Tonic-Clonic / Partial Seizures / Essential Tremor",
        "mechanism_of_action": "Metabolized to phenobarbital and PEMA; enhances GABA-mediated inhibition; decreases neuronal excitability."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Vertigo",
      "Ataxia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Suicidal Ideation",
      "Megaloblastic Anemia (Folate deficiency)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 726,
    "drug_name": "Probenecid",
    "pharmacologic_class": [
      "Uricosuric Agent",
      "Renal Tubular Blocking Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Gout / Prolongation of Penicillin levels",
        "mechanism_of_action": "Inhibits renal tubular reabsorption of urate (increases excretion); inhibits tubular secretion of weak organic acids (e.g., penicillin/cephalosporins)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Vomiting",
      "Rash"
    ],
    "adverse_drug_events": [
      "Uric Acid Kidney Stones",
      "Hemolytic Anemia (G6PD deficiency)",
      "Severe Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 727,
    "drug_name": "Procainamide",
    "pharmacologic_class": [
      "Class Ia Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Ventricular Arrhythmias (Life-threatening)",
        "mechanism_of_action": "Blocks fast sodium channels (Phase 0); slows conduction; prolongs action potential duration (Phase 3). Ganglionic blocking properties."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Drug-Induced Lupus Erythematosus (Boxed Warning - ANA positive)",
      "Agranulocytosis (Boxed Warning)",
      "Torsades de Pointes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 728,
    "drug_name": "Procarbazine",
    "pharmacologic_class": [
      "Alkylating Agent",
      "Antineoplastic / MAO Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hodgkin's Lymphoma",
        "mechanism_of_action": "Metabolized to active alkylating species (azoprocarbazine); inhibits DNA, RNA, and protein synthesis; auto-oxidizes to form free radicals causing DNA damage."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Myelosuppression",
      "Neurotoxicity"
    ],
    "adverse_drug_events": [
      "Secondary Malignancies (AML)",
      "Disulfiram-like Reaction (with alcohol)",
      "Hypertensive Crisis (Tyramine interaction - MAOI effect)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 729,
    "drug_name": "Prochlorperazine",
    "pharmacologic_class": [
      "Phenothiazine",
      "Antiemetic / Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Severe Nausea/Vomiting / Schizophrenia",
        "mechanism_of_action": "Blocks dopamine D2 receptors in the CTZ (antiemetic) and mesolimbic pathway (antipsychotic). Significant anticholinergic activity."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dizziness",
      "Dry mouth",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Extrapyramidal Symptoms (Dystonia/Akathisia)",
      "Increased Mortality in Elderly with Dementia (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 730,
    "drug_name": "Progesterone",
    "pharmacologic_class": [
      "Progestin",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Amenorrhea / Endometrial Hyperplasia Prevention",
        "mechanism_of_action": "Natural hormone; induces secretory changes in endometrium; suppresses pituitary gonadotropins; relaxes uterine smooth muscle."
      }
    ],
    "common_side_effects": [
      "Dizziness (Oral)",
      "Breast tenderness",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Thromboembolism",
      "Breast Cancer Risk",
      "Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 731,
    "drug_name": "Proguanil",
    "pharmacologic_class": [
      "Biguanide Derivative",
      "Antimalarial"
    ],
    "indications_and_moa": [
      {
        "indication": "Malaria Prophylaxis (with Atovaquone)",
        "mechanism_of_action": "Metabolized to cycloguanil; inhibits dihydrofolate reductase (DHFR); disrupts folate synthesis and DNA replication in parasites."
      }
    ],
    "common_side_effects": [
      "Mouth ulcers",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Hematologic Abnormalities (rare)",
      "Elevated Liver Enzymes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 732,
    "drug_name": "Promethazine",
    "pharmacologic_class": [
      "Phenothiazine",
      "Antiemetic / Antihistamine"
    ],
    "indications_and_moa": [
      {
        "indication": "Nausea/Vomiting / Allergic Reactions / Sedation",
        "mechanism_of_action": "Blocks H1 receptors; has strong anticholinergic and antiemetic (D2 blockade) effects. CNS depressant."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Blurred vision",
      "Confusion"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Fatal in children <2 years - Boxed Warning)",
      "Severe Tissue Injury/Gangrene (Injection - Boxed Warning)",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 733,
    "drug_name": "Propafenone",
    "pharmacologic_class": [
      "Class Ic Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation / Paroxysmal SVT",
        "mechanism_of_action": "Blocks fast sodium channels (Phase 0); slows conduction velocity. Also has weak beta-blocking activity."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Taste alteration (Metallic)",
      "Nausea",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Proarrhythmia (New or worsened arrhythmia)",
      "Heart Failure Exacerbation",
      "Agranulocytosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 734,
    "drug_name": "Propofol",
    "pharmacologic_class": [
      "General Anesthetic",
      "Sedative-Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Induction/Maintenance of Anesthesia / ICU Sedation",
        "mechanism_of_action": "Potentiates GABA-A receptor activity; decreases dissociation of GABA from the receptor; increases chloride conductance causing hyperpolarization."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Hypotension",
      "Apnea (Induction)"
    ],
    "adverse_drug_events": [
      "Propofol Infusion Syndrome (PRIS - Fatal metabolic acidosis/rhabdomyolysis)",
      "Respiratory Depression",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 735,
    "drug_name": "Propranolol",
    "pharmacologic_class": [
      "Non-selective Beta Blocker",
      "Antihypertensive / Antiarrhythmic"
    ],
    "indications_and_moa": [
      {
        "indication": "HTN / Angina / Migraine / Essential Tremor",
        "mechanism_of_action": "Non-selective beta-adrenergic antagonist (beta-1 and beta-2); decreases heart rate, contractility, and cardiac output. Lipophilic (crosses BBB)."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Bradycardia",
      "Cold extremities",
      "Insomnia/Nightmares"
    ],
    "adverse_drug_events": [
      "Bronchospasm (Contraindicated in asthma)",
      "Heart Block",
      "Masking of Hypoglycemia",
      "Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 736,
    "drug_name": "Propylthiouracil (PTU)",
    "pharmacologic_class": [
      "Thionamide",
      "Antithyroid Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperthyroidism (Graves' Disease)",
        "mechanism_of_action": "Inhibits thyroid peroxidase (TPO); blocks synthesis of T3/T4. Also inhibits peripheral conversion of T4 to T3."
      }
    ],
    "common_side_effects": [
      "Rash",
      "GI upset",
      "Arthralgia",
      "Taste loss"
    ],
    "adverse_drug_events": [
      "Severe Hepatotoxicity / Liver Failure (Boxed Warning)",
      "Agranulocytosis",
      "ANCA-positive Vasculitis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 737,
    "drug_name": "Protamine Sulfate",
    "pharmacologic_class": [
      "Heparin Antagonist",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Heparin Overdose Reversal",
        "mechanism_of_action": "Strongly basic protein; binds to acidic heparin forming a stable salt complex; neutralizes anticoagulant effect of heparin."
      }
    ],
    "common_side_effects": [
      "Hypotension (Rapid infusion)",
      "Bradycardia",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Severe Anaphylaxis (Boxed Warning - Higher risk with fish allergy/vasectomy)",
      "Noncardiogenic Pulmonary Edema",
      "Paradoxical Anticoagulation (Overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 738,
    "drug_name": "Prucalopride",
    "pharmacologic_class": [
      "5-HT4 Receptor Agonist",
      "GI Prokinetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Idiopathic Constipation",
        "mechanism_of_action": "Selective high-affinity 5-HT4 receptor agonist; stimulates colonic peristalsis (high-amplitude propagating contractions); increases bowel motility."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Abdominal pain",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Suicidal Ideation / Behavior",
      "Severe Diarrhea"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 739,
    "drug_name": "Pseudoephedrine",
    "pharmacologic_class": [
      "Alpha/Beta Adrenergic Agonist",
      "Decongestant"
    ],
    "indications_and_moa": [
      {
        "indication": "Nasal Congestion",
        "mechanism_of_action": "Stimulates alpha-adrenergic receptors causing vasoconstriction in nasal mucosa; stimulates beta-receptors causing bronchial relaxation and increased heart rate."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Nervousness",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Severe Hypertension",
      "Arrhythmias",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 740,
    "drug_name": "Psyllium",
    "pharmacologic_class": [
      "Bulk-Forming Laxative",
      "Fiber Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Constipation / Hypercholesterolemia (Adjunct)",
        "mechanism_of_action": "Absorbs water in the intestine forming a viscous gel; increases stool bulk and moisture; stimulates peristalsis."
      }
    ],
    "common_side_effects": [
      "Bloating",
      "Flatulence",
      "Abdominal cramps"
    ],
    "adverse_drug_events": [
      "Esophageal/Intestinal Obstruction (if insufficient fluid intake)",
      "Hypersensitivity (Inhalation of dust)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 741,
    "drug_name": "Pyrantel Pamoate",
    "pharmacologic_class": [
      "Anthelmintic"
    ],
    "indications_and_moa": [
      {
        "indication": "Pinworm / Roundworm / Hookworm",
        "mechanism_of_action": "Depolarizing neuromuscular blocker; induces persistent activation of nicotinic receptors; causes spastic paralysis of the worm."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Abdominal cramps",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Transient LFT Elevation",
      "Dizziness / Headache"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 742,
    "drug_name": "Pyrazinamide",
    "pharmacologic_class": [
      "Antimycobacterial",
      "Antitubercular"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis (Active)",
        "mechanism_of_action": "Converted to pyrazinoic acid by M. tuberculosis pyrazinamidase; disrupts membrane potential and energy metabolism. Effective against intracellular organisms in acidic environments."
      }
    ],
    "common_side_effects": [
      "Hyperuricemia",
      "Arthralgia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Dose-dependent)",
      "Gouty Arthritis",
      "Sideroblastic Anemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 743,
    "drug_name": "Pyridostigmine",
    "pharmacologic_class": [
      "Acetylcholinesterase Inhibitor",
      "Cholinergic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Myasthenia Gravis",
        "mechanism_of_action": "Reversibly inhibits acetylcholinesterase; prevents hydrolysis of acetylcholine; facilitates transmission at the neuromuscular junction."
      }
    ],
    "common_side_effects": [
      "Abdominal cramps",
      "Diarrhea",
      "Salivation",
      "Muscle twitching"
    ],
    "adverse_drug_events": [
      "Cholinergic Crisis",
      "Severe Bradycardia",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 744,
    "drug_name": "Pyridoxine (Vitamin B6)",
    "pharmacologic_class": [
      "Vitamin",
      "Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin B6 Deficiency / Isoniazid Neuropathy Prevention",
        "mechanism_of_action": "Precursor to pyridoxal phosphate; coenzyme for amino acid metabolism, neurotransmitter synthesis, and heme production."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Somnolence"
    ],
    "adverse_drug_events": [
      "Sensory Neuropathy (High chronic doses > 200mg/day)",
      "Dependency (Pyridoxine-dependent seizures)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 745,
    "drug_name": "Pyrimethamine",
    "pharmacologic_class": [
      "Folic Acid Antagonist",
      "Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Toxoplasmosis / Malaria",
        "mechanism_of_action": "Inhibits dihydrofolate reductase (DHFR); blocks conversion of dihydrofolic acid to tetrahydrofolic acid; essential for DNA synthesis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Anorexia"
    ],
    "adverse_drug_events": [
      "Megaloblastic Anemia (Folate deficiency)",
      "Leukopenia / Thrombocytopenia",
      "Severe Skin Rash (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 746,
    "drug_name": "Quetiapine",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar Disorder / Major Depressive Disorder (Adjunct)",
        "mechanism_of_action": "Antagonizes dopamine D2 and serotonin 5-HT2A receptors; also blocks H1 and alpha-1 receptors. Low affinity for D2 reduces EPS risk."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dry mouth",
      "Weight gain",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Metabolic Changes (Hyperglycemia/Lipids)",
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Suicidality (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 747,
    "drug_name": "Quinapril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure",
        "mechanism_of_action": "Prodrug converted to quinaprilat; inhibits ACE; prevents formation of Angiotensin II; reduces vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Fetal Toxicity (Boxed Warning)",
      "Renal Impairment"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 748,
    "drug_name": "Quinidine",
    "pharmacologic_class": [
      "Class Ia Antiarrhythmic",
      "Sodium Channel Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation / Malaria",
        "mechanism_of_action": "Blocks fast sodium channels; prolongs action potential duration; vagolytic effect (increases AV conduction)."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Cinchonism (Tinnitus/Headache/Vision changes)"
    ],
    "adverse_drug_events": [
      "Torsades de Pointes / QT Prolongation",
      "Immune Thrombocytopenia",
      "Increased Mortality (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 749,
    "drug_name": "Quinine",
    "pharmacologic_class": [
      "Cinchona Alkaloid",
      "Antimalarial"
    ],
    "indications_and_moa": [
      {
        "indication": "Uncomplicated Malaria (Plasmodium falciparum)",
        "mechanism_of_action": "Interferes with parasite's ability to digest hemoglobin; inhibits heme polymerization; heme accumulation is toxic to parasite."
      }
    ],
    "common_side_effects": [
      "Cinchonism (Tinnitus, Headache, Nausea, Visual disturbance)",
      "Hypoglycemia"
    ],
    "adverse_drug_events": [
      "Hematologic Toxicity (Severe Thrombocytopenia - Boxed Warning)",
      "QT Prolongation",
      "Hemolytic Uremic Syndrome (HUS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 750,
    "drug_name": "Rabeprazole",
    "pharmacologic_class": [
      "Proton Pump Inhibitor (PPI)",
      "Acid Reducer"
    ],
    "indications_and_moa": [
      {
        "indication": "GERD / Duodenal Ulcers / Zollinger-Ellison Syndrome",
        "mechanism_of_action": "Irreversibly inhibits H+/K+ ATPase in parietal cells; blocks gastric acid secretion. Fast onset of action."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Diarrhea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Bone Fractures (Long-term)",
      "Hypomagnesemia",
      "Acute Interstitial Nephritis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 751,
    "drug_name": "Raloxifene",
    "pharmacologic_class": [
      "SERM (Selective Estrogen Receptor Modulator)",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis Prevention/Treatment / Breast Cancer Prevention",
        "mechanism_of_action": "Estrogen agonist in bone (decreases resorption); estrogen antagonist in breast and uterus (reduces cancer risk, no endometrial hyperplasia)."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Leg cramps",
      "Peripheral edema"
    ],
    "adverse_drug_events": [
      "Venous Thromboembolism (Boxed Warning)",
      "Stroke Risk (in women with CHD risk - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 752,
    "drug_name": "Raltegravir",
    "pharmacologic_class": [
      "Integrase Strand Transfer Inhibitor (INSTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 integrase enzyme; prevents insertion of viral DNA into host genome; blocks viral replication."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Fatigue",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions (SJS/TEN)",
      "Creatine Kinase Elevation / Myopathy",
      "Immune Reconstitution Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 753,
    "drug_name": "Ramelteon",
    "pharmacologic_class": [
      "Melatonin Receptor Agonist",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Sleep Onset)",
        "mechanism_of_action": "Highly selective agonist at MT1 and MT2 receptors in the suprachiasmatic nucleus; regulates sleep-wake cycle. No affinity for GABA receptors (non-addictive)."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Fatigue",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Complex Sleep Behaviors",
      "Severe Anaphylaxis",
      "Depression worsening"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 754,
    "drug_name": "Ramipril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure Post-MI / CV Risk Reduction",
        "mechanism_of_action": "Prodrug converted to ramiprilat; inhibits ACE; prevents formation of Angiotensin II; reduces vasoconstriction and aldosterone secretion; high tissue affinity."
      }
    ],
    "common_side_effects": [
      "Dry Cough",
      "Dizziness",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 755,
    "drug_name": "Ranibizumab",
    "pharmacologic_class": [
      "VEGF Inhibitor",
      "Monoclonal Antibody Fragment"
    ],
    "indications_and_moa": [
      {
        "indication": "Neovascular (Wet) AMD / Diabetic Macular Edema",
        "mechanism_of_action": "Binds to VEGF-A; prevents interaction with VEGFR-1 and VEGFR-2; inhibits angiogenesis and vascular permeability."
      }
    ],
    "common_side_effects": [
      "Conjunctival hemorrhage",
      "Eye pain",
      "Vitreous floaters",
      "Increased IOP"
    ],
    "adverse_drug_events": [
      "Endophthalmitis",
      "Retinal Detachment",
      "Arterial Thromboembolic Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 756,
    "drug_name": "Ranolazine",
    "pharmacologic_class": [
      "Antianginal Agent",
      "Late Sodium Current Blocker"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Angina",
        "mechanism_of_action": "Inhibits the late phase of the inward sodium current (late INa) in ischemic cardiac cells; reduces intracellular calcium overload; improves diastolic relaxation without affecting HR/BP."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Constipation",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Syncope",
      "Renal Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 757,
    "drug_name": "Rasagiline",
    "pharmacologic_class": [
      "MAO-B Inhibitor",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease",
        "mechanism_of_action": "Irreversible inhibitor of monoamine oxidase B (MAO-B); increases dopamine levels in the striatum."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dizziness",
      "Nausea",
      "Joint pain"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis (Tyramine interaction - rare at rec doses)",
      "Serotonin Syndrome",
      "Orthostatic Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 758,
    "drug_name": "Rasburicase",
    "pharmacologic_class": [
      "Recombinant Urate Oxidase",
      "Enzyme"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperuricemia (Tumor Lysis Syndrome)",
        "mechanism_of_action": "Catalyzes oxidation of uric acid into allantoin (highly soluble); dramatically lowers plasma uric acid levels."
      }
    ],
    "common_side_effects": [
      "Vomiting",
      "Nausea",
      "Fever",
      "Headache"
    ],
    "adverse_drug_events": [
      "Anaphylaxis (Boxed Warning)",
      "Hemolysis (G6PD Deficiency - Boxed Warning)",
      "Methemoglobinemia (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 759,
    "drug_name": "Regorafenib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor (Multi-Kinase)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Colorectal Cancer / GIST / HCC",
        "mechanism_of_action": "Inhibits multiple angiogenic (VEGFR), stromal (PDGFR), and oncogenic (KIT/RET/BRAF) kinases; blocks tumor angiogenesis and proliferation."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Hand-Foot Skin Reaction",
      "Diarrhea",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Severe - Boxed Warning)",
      "Hemorrhage",
      "GI Perforation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 760,
    "drug_name": "Repaglinide",
    "pharmacologic_class": [
      "Meglitinide",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Closes ATP-dependent potassium channels on beta cells; stimulates rapid, short-acting insulin release (prandial glucose control)."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia (especially with Gemfibrozil - Contraindicated)",
      "Serious Cardiovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 761,
    "drug_name": "Reserpine",
    "pharmacologic_class": [
      "Rauwolfia Alkaloid",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension (Rarely used)",
        "mechanism_of_action": "Irreversibly binds VMAT2; prevents storage of catecholamines (NE, DA, 5-HT) in vesicles; depletes monoamines in CNS and periphery."
      }
    ],
    "common_side_effects": [
      "Nasal congestion",
      "Lethargy",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Severe Depression / Suicide (Boxed Warning)",
      "Peptic Ulceration (Increases gastric acid)",
      "Parkinsonian symptoms"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 762,
    "drug_name": "Ribavirin",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "Hepatitis C (with other agents) / RSV (Inhaled)",
        "mechanism_of_action": "Inhibits viral RNA polymerase; depletes intracellular GTP pools; induces lethal mutagenesis. Multiple mechanisms."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Headache",
      "Nausea",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Hemolytic Anemia (Boxed Warning)",
      "Teratogenicity (Boxed Warning - Significant risk)",
      "Respiratory deterioration (Inhaled)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 763,
    "drug_name": "Ribociclib",
    "pharmacologic_class": [
      "CDK4/6 Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "HR+/HER2- Breast Cancer",
        "mechanism_of_action": "Selectively inhibits Cyclin-Dependent Kinases 4 and 6; blocks G1 to S phase transition; arrests cell cycle."
      }
    ],
    "common_side_effects": [
      "Neutropenia",
      "Nausea",
      "Fatigue",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Specific monitoring required)",
      "Hepatobiliary Toxicity",
      "Severe Neutropenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 764,
    "drug_name": "Rifabutin",
    "pharmacologic_class": [
      "Rifamycin",
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "MAC Prophylaxis / Tuberculosis (HIV patients)",
        "mechanism_of_action": "Inhibits DNA-dependent RNA polymerase; prevents transcription. Less potent CYP450 inducer than Rifampin (preferred in HIV on HAART)."
      }
    ],
    "common_side_effects": [
      "Discolored urine (Orange-red)",
      "GI upset",
      "Rash"
    ],
    "adverse_drug_events": [
      "Uveitis",
      "Leukopenia / Neutropenia",
      "Clostridioides difficile-associated Diarrhea"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 765,
    "drug_name": "Rifampin",
    "pharmacologic_class": [
      "Rifamycin",
      "Antimycobacterial"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis / Meningococcal Prophylaxis",
        "mechanism_of_action": "Inhibits bacterial DNA-dependent RNA polymerase; blocks RNA synthesis. Potent CYP450 inducer."
      }
    ],
    "common_side_effects": [
      "Red-orange discoloration of body fluids",
      "GI upset",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "Severe Hypersensitivity / Flu-like Syndrome",
      "Significant Drug Interactions (Reduces efficacy of OCPs, warfarin, etc.)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 766,
    "drug_name": "Rifaximin",
    "pharmacologic_class": [
      "Rifamycin",
      "Antibiotic (Non-absorbable)"
    ],
    "indications_and_moa": [
      {
        "indication": "Traveler's Diarrhea / Hepatic Encephalopathy / IBS-D",
        "mechanism_of_action": "Inhibits bacterial RNA synthesis by binding to RNA polymerase. Minimally absorbed (<0.4%); acts locally in the gut."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Flatulence",
      "Headache",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Clostridioides difficile-associated Diarrhea",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 767,
    "drug_name": "Rilpivirine",
    "pharmacologic_class": [
      "NNRTI",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Non-nucleoside reverse transcriptase inhibitor; binds directly to RT; blocks DNA polymerization. Flexible molecule (activity against some resistant strains)."
      }
    ],
    "common_side_effects": [
      "Depression",
      "Insomnia",
      "Headache",
      "Rash"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions",
      "Depressive Disorders / Suicidality",
      "QT Prolongation (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 768,
    "drug_name": "Riluzole",
    "pharmacologic_class": [
      "Glutamate Antagonist",
      "ALS Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Amyotrophic Lateral Sclerosis (ALS)",
        "mechanism_of_action": "Inhibits glutamate release; blocks voltage-gated sodium channels; interferes with intracellular events following transmitter binding. Slows disease progression."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Asthenia",
      "Dizziness",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Monitor LFTs)",
      "Neutropenia",
      "Interstitial Lung Disease"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 769,
    "drug_name": "Rimantadine",
    "pharmacologic_class": [
      "Adamantane",
      "Antiviral (Influenza A)"
    ],
    "indications_and_moa": [
      {
        "indication": "Influenza A (Prophylaxis/Treatment) - High resistance",
        "mechanism_of_action": "Inhibits viral M2 ion channel; prevents uncoating of the virus. Only effective against Influenza A (resistance is widespread)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Insomnia",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Seizures",
      "CNS Toxicity (Less than Amantadine)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 770,
    "drug_name": "Riociguat",
    "pharmacologic_class": [
      "Soluble Guanylate Cyclase (sGC) Stimulator",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension / CTEPH",
        "mechanism_of_action": "Directly stimulates sGC and sensitizes it to endogenous nitric oxide; increases cGMP; causes vasodilation and antiproliferative effects."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dyspepsia",
      "Dizziness",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Embryo-Fetal Toxicity (Boxed Warning - REMS)",
      "Serious Bleeding",
      "Hypotension (Contraindicated with nitrates/PDE5 inhibitors)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 771,
    "drug_name": "Risdiplam",
    "pharmacologic_class": [
      "SMN2 Splicing Modifier",
      "SMA Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Spinal Muscular Atrophy (SMA)",
        "mechanism_of_action": "Modifies splicing of SMN2 pre-mRNA; increases production of functional Survival Motor Neuron (SMN) protein."
      }
    ],
    "common_side_effects": [
      "Fever",
      "Diarrhea",
      "Rash",
      "Mouth ulcers"
    ],
    "adverse_drug_events": [
      "Male Fertility Impairment (Animal studies)",
      "Retinal Toxicity (Theoretical)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 772,
    "drug_name": "Risedronate",
    "pharmacologic_class": [
      "Bisphosphonate",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis / Paget's Disease",
        "mechanism_of_action": "Inhibits farnesyl pyrophosphate synthase in osteoclasts; reduces osteoclast activity and survival; increases bone mass."
      }
    ],
    "common_side_effects": [
      "Back pain",
      "Arthralgia",
      "Abdominal pain",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Esophagitis / Esophageal Ulcers",
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 773,
    "drug_name": "Risperidone",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar Mania / Autism Irritability",
        "mechanism_of_action": "Potent antagonist at serotonin 5-HT2A and dopamine D2 receptors; high affinity for D2 causes higher EPS risk at high doses."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Increased appetite",
      "Fatigue",
      "Rhinitis"
    ],
    "adverse_drug_events": [
      "Hyperprolactinemia (Highest among atypicals)",
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Increased Mortality in Elderly Dementia (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 774,
    "drug_name": "Ritonavir",
    "pharmacologic_class": [
      "Protease Inhibitor / Pharmacokinetic Enhancer",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection (Booster)",
        "mechanism_of_action": "Potent CYP3A4 inhibitor; used primarily to boost levels of other protease inhibitors. Also inhibits HIV protease (less potent alone)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Abdominal pain",
      "Taste perversion"
    ],
    "adverse_drug_events": [
      "Significant Drug Interactions (Boxed Warning)",
      "Pancreatitis",
      "Hepatotoxicity",
      "PR Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 775,
    "drug_name": "Rituximab",
    "pharmacologic_class": [
      "CD20-Directed Cytolytic Antibody",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "NHL / CLL / RA / GPA / MPA",
        "mechanism_of_action": "Binds to CD20 antigen on B-cells; causes cell lysis via CDC, ADCC, and apoptosis."
      }
    ],
    "common_side_effects": [
      "Infusion reactions",
      "Fever",
      "Lymphopenia",
      "Chills"
    ],
    "adverse_drug_events": [
      "Fatal Infusion Reactions (Boxed Warning)",
      "Severe Mucocutaneous Reactions (Boxed Warning)",
      "Hepatitis B Reactivation (Boxed Warning)",
      "PML (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 776,
    "drug_name": "Rivaroxaban",
    "pharmacologic_class": [
      "Factor Xa Inhibitor",
      "Direct Oral Anticoagulant (DOAC)"
    ],
    "indications_and_moa": [
      {
        "indication": "Stroke Prevention in AF / DVT/PE Treatment",
        "mechanism_of_action": "Selectively blocks the active site of Factor Xa; inhibits platelet activation and fibrin clot formation. Bioavailability increases with food."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Pruritus",
      "Back pain"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage",
      "Spinal/Epidural Hematoma (Boxed Warning)",
      "Thrombosis upon premature discontinuation (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 777,
    "drug_name": "Rivastigmine",
    "pharmacologic_class": [
      "Acetylcholinesterase Inhibitor",
      "Anti-Alzheimer's Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Alzheimer's Disease / Parkinson's Dementia",
        "mechanism_of_action": "Pseudo-irreversible inhibition of both acetylcholinesterase and butyrylcholinesterase; increases cholinergic transmission."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (Severe with oral)",
      "Anorexia",
      "Dizziness",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Severe GI Distress (Esophageal rupture reported)",
      "Bradycardia / Syncope",
      "Worsening of Parkinsonian symptoms"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 778,
    "drug_name": "Rizatriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Agonist",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine",
        "mechanism_of_action": "Selective agonist at 5-HT1B and 5-HT1D receptors; causes vasoconstriction of intracranial blood vessels; inhibits pro-inflammatory neuropeptide release; reduces transmission in trigeminal pain pathways."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Paresthesia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / Myocardial Ischemia",
      "Serotonin Syndrome",
      "Cerebrovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 779,
    "drug_name": "Rocuronium",
    "pharmacologic_class": [
      "Nondepolarizing Neuromuscular Blocker",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / Intubation",
        "mechanism_of_action": "Competes with Acetylcholine for nicotinic receptors at the motor end plate; prevents depolarization; causes flaccid paralysis. Rapid onset."
      }
    ],
    "common_side_effects": [
      "Transient Hypotension",
      "Hypertension",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Prolonged Neuromuscular Blockade",
      "Residual Paralysis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 780,
    "drug_name": "Roflumilast",
    "pharmacologic_class": [
      "Phosphodiesterase-4 (PDE4) Inhibitor",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "COPD (Severe) / Psoriasis (Topical)",
        "mechanism_of_action": "Selectively inhibits PDE4; increases intracellular cAMP; reduces inflammation (suppresses cytokine release and neutrophil infiltration). Not a bronchodilator."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Weight loss",
      "Nausea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Psychiatric Events (Depression/Suicidality)",
      "Severe Weight Loss"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 781,
    "drug_name": "Romosozumab",
    "pharmacologic_class": [
      "Sclerostin Inhibitor",
      "Bone Anabolic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis (Postmenopausal Women at High Risk)",
        "mechanism_of_action": "Binds to and inhibits sclerostin; increases bone formation and, to a lesser extent, decreases bone resorption (dual effect)."
      }
    ],
    "common_side_effects": [
      "Arthralgia",
      "Headache",
      "Injection site reactions"
    ],
    "adverse_drug_events": [
      "Myocardial Infarction / Stroke (Boxed Warning)",
      "Osteonecrosis of the Jaw",
      "Atypical Femur Fractures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 782,
    "drug_name": "Ropinirole",
    "pharmacologic_class": [
      "Dopamine Agonist (Non-Ergot)",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Restless Legs Syndrome",
        "mechanism_of_action": "Direct agonist at dopamine D2 and D3 receptors in the striatum; high affinity for D2-like receptors."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Somnolence",
      "Dizziness",
      "Syncope"
    ],
    "adverse_drug_events": [
      "Sudden Sleep Attacks",
      "Impulse Control Disorders",
      "Hallucinations"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 783,
    "drug_name": "Ropivacaine",
    "pharmacologic_class": [
      "Local Anesthetic (Amide)",
      "Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Local / Regional Anesthesia / Acute Pain Management",
        "mechanism_of_action": "Reversibly blocks voltage-gated sodium channels; prevents nerve impulse conduction. Pure S-enantiomer (less cardiotoxic than bupivacaine)."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Bradycardia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "CNS Toxicity (Seizures)",
      "Cardiotoxicity (Cardiac Arrest - lower risk than bupivacaine)",
      "Methemoglobinemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 784,
    "drug_name": "Rosuvastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Cardiovascular Prevention",
        "mechanism_of_action": "Potent inhibitor of HMG-CoA reductase; reduces hepatic cholesterol synthesis; strongly upregulates LDL receptors. Hydrophilic (less muscle penetration)."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Headache",
      "Abdominal pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Rhabdomyolysis",
      "Hepatotoxicity",
      "New Onset Diabetes",
      "Proteinuria (High doses)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 785,
    "drug_name": "Rotigotine",
    "pharmacologic_class": [
      "Dopamine Agonist (Non-Ergot)",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Restless Legs Syndrome",
        "mechanism_of_action": "Non-ergoline dopamine agonist; stimulates D3, D2, and D1 receptors. Transdermal delivery provides continuous dopaminergic stimulation."
      }
    ],
    "common_side_effects": [
      "Application site reactions",
      "Nausea",
      "Somnolence",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Sudden Sleep Onset",
      "Impulse Control Disorders",
      "Hallucinations",
      "Weight Gain/Fluid Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 786,
    "drug_name": "Roxithromycin",
    "pharmacologic_class": [
      "Macrolide Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Respiratory Tract Infections (Not FDA Approved)",
        "mechanism_of_action": "Binds to 50S ribosomal subunit; inhibits protein synthesis. Semi-synthetic derivative of erythromycin with better bioavailability."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Abdominal pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hepatotoxicity",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 787,
    "drug_name": "Ruxolitinib",
    "pharmacologic_class": [
      "JAK Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Myelofibrosis / Polycythemia Vera / GVHD",
        "mechanism_of_action": "Inhibits Janus Kinase 1 and 2 (JAK1/JAK2); blocks signaling of cytokines and growth factors involved in hematopoiesis and immune function."
      }
    ],
    "common_side_effects": [
      "Bruising",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Anemia / Thrombocytopenia",
      "Serious Infections (Herpes Zoster/TB)",
      "Non-Melanoma Skin Cancer"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 788,
    "drug_name": "Sacubitril-Valsartan",
    "pharmacologic_class": [
      "ARNI (Angiotensin Receptor-Neprilysin Inhibitor)",
      "Heart Failure Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure (HFrEF)",
        "mechanism_of_action": "Sacubitril inhibits neprilysin (increases natriuretic peptides causing vasodilation/natriuresis); Valsartan blocks Angiotensin II type-1 receptor."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Hyperkalemia",
      "Cough",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Angioedema (Increased risk compared to ACEi/ARB alone - Contraindicated with ACEi)",
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 789,
    "drug_name": "Salbutamol (Albuterol)",
    "pharmacologic_class": [
      "Short-Acting Beta-2 Agonist (SABA)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Bronchospasm (Asthma/COPD) / Hyperkalemia",
        "mechanism_of_action": "Selectively stimulates beta-2 adrenergic receptors in bronchial smooth muscle; increases cAMP; causes rapid bronchodilation."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Palpitations",
      "Nervousness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Hypokalemia (High dose)",
      "Cardiac Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 790,
    "drug_name": "Salicylic Acid",
    "pharmacologic_class": [
      "Keratolytic",
      "Topical Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne / Warts / Psoriasis / Seborrheic Dermatitis",
        "mechanism_of_action": "Desquamates hyperkeratotic epithelium via dissolution of intercellular cement; reduces corneocyte adhesion; solubilizes stratum corneum."
      }
    ],
    "common_side_effects": [
      "Skin irritation",
      "Peeling",
      "Burning"
    ],
    "adverse_drug_events": [
      "Salicylism (Systemic toxicity with extensive use)",
      "Severe Skin Irritation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 791,
    "drug_name": "Salmeterol",
    "pharmacologic_class": [
      "Long-Acting Beta Agonist (LABA)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma (Maintenance - with steroid) / COPD",
        "mechanism_of_action": "Selective long-acting beta-2 agonist; lipophilic side chain allows prolonged receptor activation (12 hours); causes sustained bronchodilation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Throat irritation",
      "Tremor",
      "Palpitations"
    ],
    "adverse_drug_events": [
      "Asthma-related Death (Boxed Warning - Monotherapy in Asthma)",
      "Paradoxical Bronchospasm",
      "Hypokalemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 792,
    "drug_name": "Saquinavir",
    "pharmacologic_class": [
      "Protease Inhibitor",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Inhibits HIV-1 protease; prevents cleavage of viral polyproteins; produces immature, non-infectious virions. Must be boosted with Ritonavir."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Abdominal pain",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "QT / PR Prolongation (Boxed Warning)",
      "Severe Drug Interactions (Boxed Warning)",
      "Hyperlipidemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 793,
    "drug_name": "Sarilumab",
    "pharmacologic_class": [
      "IL-6 Receptor Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Polymyalgia Rheumatica",
        "mechanism_of_action": "Binds to IL-6 receptors (soluble and membrane-bound); inhibits IL-6 mediated signaling; reduces inflammation."
      }
    ],
    "common_side_effects": [
      "Neutropenia",
      "Injection site erythema",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Serious Infections (Boxed Warning)",
      "GI Perforation",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 794,
    "drug_name": "Saxagliptin",
    "pharmacologic_class": [
      "DPP-4 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Inhibits Dipeptidyl Peptidase-4 (DPP-4); prolongs activity of incretins (GLP-1); increases insulin release and decreases glucagon."
      }
    ],
    "common_side_effects": [
      "Upper respiratory infection",
      "UTI",
      "Headache"
    ],
    "adverse_drug_events": [
      "Heart Failure Hospitalization (Risk Warning)",
      "Acute Pancreatitis",
      "Severe Arthralgia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 795,
    "drug_name": "Scopolamine (Hyoscine)",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antiemetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Motion Sickness / PONV",
        "mechanism_of_action": "Competitively inhibits muscarinic receptors in the CNS and vestibular system; blocks cholinergic transmission from vestibular nuclei to vomiting center."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Drowsiness",
      "Blurred vision",
      "Dilated pupils"
    ],
    "adverse_drug_events": [
      "Anticholinergic Delirium",
      "Acute Glaucoma",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 796,
    "drug_name": "Secobarbital",
    "pharmacologic_class": [
      "Barbiturate",
      "Sedative-Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Short-term) / Preoperative Sedation",
        "mechanism_of_action": "Short-acting barbiturate; potentiates GABA-A receptor activity; depresses sensory cortex; decreases motor activity; produces sedation/hypnosis."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Confusion"
    ],
    "adverse_drug_events": [
      "Respiratory Depression",
      "Dependence / Abuse",
      "Complex Sleep Behaviors"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 797,
    "drug_name": "Secukinumab",
    "pharmacologic_class": [
      "IL-17A Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Plaque Psoriasis / Psoriatic Arthritis / Ankylosing Spondylitis",
        "mechanism_of_action": "Selectively binds to and neutralizes Interleukin-17A; inhibits release of pro-inflammatory cytokines and chemokines."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Diarrhea",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Serious Infections",
      "Inflammatory Bowel Disease (Exacerbation/New Onset)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 798,
    "drug_name": "Selegiline",
    "pharmacologic_class": [
      "MAO-B Inhibitor",
      "Antiparkinsonian / Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Major Depressive Disorder (Transdermal)",
        "mechanism_of_action": "Irreversible inhibitor of monoamine oxidase B (MAO-B); increases dopamine levels in the CNS. At high doses (transdermal), inhibits MAO-A as well (antidepressant)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Insomnia (Metabolized to amphetamine derivatives)",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serotonin Syndrome",
      "Hypertensive Crisis (Tyramine interaction - dose dependent)",
      "Impulse Control Disorders"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 799,
    "drug_name": "Selenium Sulfide",
    "pharmacologic_class": [
      "Antiseborrheic / Antifungal",
      "Topical Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Dandruff / Seborrheic Dermatitis / Tinea Versicolor",
        "mechanism_of_action": "Cytostatic effect on epidermal cells and follicular epithelium; reduces corneocyte production. Antifungal activity against Malassezia."
      }
    ],
    "common_side_effects": [
      "Skin irritation",
      "Dry skin",
      "Oily scalp"
    ],
    "adverse_drug_events": [
      "Alopecia (Rare)",
      "Hair Discoloration"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 800,
    "drug_name": "Semaglutide",
    "pharmacologic_class": [
      "GLP-1 Receptor Agonist",
      "Antidiabetic / Weight Loss"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes / Obesity (Wegovy) / CV Risk Reduction",
        "mechanism_of_action": "GLP-1 analog; stimulates insulin secretion; suppresses glucagon; slows gastric emptying; acts on hypothalamus to increase satiety."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Thyroid C-cell Tumors (Boxed Warning)",
      "Pancreatitis",
      "Gallbladder Disease",
      "Gastroparesis / Ileus"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 801,
    "drug_name": "Sertaconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Tinea Pedis (Interdigital)",
        "mechanism_of_action": "Inhibits 14-alpha-demethylase; blocks ergosterol synthesis. Also has anti-inflammatory and antipruritic properties."
      }
    ],
    "common_side_effects": [
      "Contact dermatitis",
      "Dry skin",
      "Burning at site"
    ],
    "adverse_drug_events": [
      "Severe Skin Irritation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 802,
    "drug_name": "Sertraline",
    "pharmacologic_class": [
      "SSRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / OCD / Panic / PTSD / Social Anxiety",
        "mechanism_of_action": "Selectively inhibits serotonin reuptake in the CNS; potentiates serotonergic activity. Also weakly inhibits dopamine reuptake."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Insomnia",
      "Sexual Dysfunction"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Hyponatremia (SIADH)",
      "Bleeding Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 803,
    "drug_name": "Sevelamer Carbonate",
    "pharmacologic_class": [
      "Phosphate Binder",
      "Polymer"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperphosphatemia (CKD on Dialysis)",
        "mechanism_of_action": "Non-absorbed polymer; binds phosphate in the GI tract via ion exchange; decreases serum phosphate levels. Calcium-free."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Bowel Obstruction / Perforation",
      "Dysphagia / Esophageal Tablet Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 804,
    "drug_name": "Sevoflurane",
    "pharmacologic_class": [
      "Inhalation Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia (Induction/Maintenance)",
        "mechanism_of_action": "Modulates GABA-A, Glycine, and NMDA receptors; alters neuronal membrane fluidity. Rapid onset/offset; non-pungent (good for mask induction)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Agitation (Emergence delirium)",
      "Cough",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Malignant Hyperthermia",
      "Compound A Toxicity (Renal injury - with low flow/CO2 absorbents)",
      "Respiratory Depression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 805,
    "drug_name": "Sildenafil",
    "pharmacologic_class": [
      "PDE5 Inhibitor",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Erectile Dysfunction / Pulmonary Arterial Hypertension (Revatio)",
        "mechanism_of_action": "Inhibits phosphodiesterase type 5 (PDE5); increases cGMP levels; enhances nitric oxide-mediated vasodilation in corpus cavernosum and pulmonary vasculature."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Dyspepsia",
      "Visual disturbances (Blue tinge)"
    ],
    "adverse_drug_events": [
      "Severe Hypotension (Contraindicated with Nitrates)",
      "Priapism",
      "Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)",
      "Sudden Hearing Loss"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 806,
    "drug_name": "Silodosin",
    "pharmacologic_class": [
      "Alpha-1A Adrenergic Antagonist",
      "BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Benign Prostatic Hyperplasia (BPH)",
        "mechanism_of_action": "Highly selective antagonist for alpha-1A receptors in the prostate, bladder base, and prostatic urethra; relaxes smooth muscle; improves urine flow."
      }
    ],
    "common_side_effects": [
      "Retrograde Ejaculation (Very common)",
      "Dizziness",
      "Diarrhea",
      "Orthostatic hypotension"
    ],
    "adverse_drug_events": [
      "Intraoperative Floppy Iris Syndrome",
      "Syncope"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 807,
    "drug_name": "Silver Sulfadiazine",
    "pharmacologic_class": [
      "Sulfonamide Antibiotic",
      "Topical Anti-infective"
    ],
    "indications_and_moa": [
      {
        "indication": "Burn Wound Infections (Prevention/Treatment)",
        "mechanism_of_action": "Acts on cell membrane and cell wall; silver ion is bactericidal; sulfadiazine inhibits folate synthesis. Broad spectrum."
      }
    ],
    "common_side_effects": [
      "Burning",
      "Itching",
      "Skin discoloration (Gray)"
    ],
    "adverse_drug_events": [
      "Leukopenia (Transient)",
      "Argyria (Silver absorption)",
      "Kernicterus (Contraindicated in neonates/near term)",
      "Sulfonamide Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 808,
    "drug_name": "Simethicone",
    "pharmacologic_class": [
      "Antiflatulent",
      "Surfactant"
    ],
    "indications_and_moa": [
      {
        "indication": "Gas / Bloating",
        "mechanism_of_action": "Lowers surface tension of gas bubbles in the GI tract; allows bubbles to coalesce and be expelled more easily (eructation/flatus)."
      }
    ],
    "common_side_effects": [
      "None significant",
      "Loose stools"
    ],
    "adverse_drug_events": [
      "Hypersensitivity (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 809,
    "drug_name": "Simvastatin",
    "pharmacologic_class": [
      "HMG-CoA Reductase Inhibitor",
      "Statin"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyperlipidemia / Cardiovascular Prevention",
        "mechanism_of_action": "Prodrug converted to active acid; inhibits HMG-CoA reductase; reduces cholesterol synthesis; upregulates LDL receptors."
      }
    ],
    "common_side_effects": [
      "Myalgia",
      "Constipation",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Myopathy / Rhabdomyolysis (Highest risk with 80mg dose - Restricted)",
      "Hepatotoxicity",
      "Immune-Mediated Necrotizing Myopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 810,
    "drug_name": "Sirolimus (Rapamycin)",
    "pharmacologic_class": [
      "mTOR Inhibitor",
      "Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Kidney Transplant Rejection Prophylaxis / Lymphangioleiomyomatosis (LAM)",
        "mechanism_of_action": "Binds to FKBP-12; inhibits mTOR (mammalian target of rapamycin); blocks T-cell activation and proliferation responding to IL-2; inhibits smooth muscle proliferation."
      }
    ],
    "common_side_effects": [
      "Peripheral edema",
      "Hypertriglyceridemia",
      "Hypertension",
      "Mouth ulcers"
    ],
    "adverse_drug_events": [
      "Impaired Wound Healing",
      "Interstitial Lung Disease",
      "Increased Infection / Malignancy Risk (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 811,
    "drug_name": "Sitagliptin",
    "pharmacologic_class": [
      "DPP-4 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Inhibits Dipeptidyl Peptidase-4 (DPP-4); increases levels of active incretin hormones (GLP-1/GIP); enhances insulin secretion; decreases glucagon."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Headache",
      "Upper respiratory infection"
    ],
    "adverse_drug_events": [
      "Acute Pancreatitis",
      "Severe Joint Pain (Arthralgia)",
      "Bullous Pemphigoid",
      "Heart Failure (Potential risk)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 812,
    "drug_name": "Sodium Bicarbonate",
    "pharmacologic_class": [
      "Alkalinizing Agent",
      "Electrolyte"
    ],
    "indications_and_moa": [
      {
        "indication": "Metabolic Acidosis / Urinary Alkalinization / Hyperkalemia / TCA Overdose",
        "mechanism_of_action": "Increases plasma bicarbonate; buffers excess hydrogen ions; raises blood/urinary pH. Shifts potassium intracellularly."
      }
    ],
    "common_side_effects": [
      "Metabolic alkalosis",
      "Hypernatremia",
      "Bloating (Oral)"
    ],
    "adverse_drug_events": [
      "Tissue Necrosis (Extravasation)",
      "Fluid Overload / Pulmonary Edema",
      "Tetany (Hypocalcemia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 813,
    "drug_name": "Sodium Nitroprusside",
    "pharmacologic_class": [
      "Direct Vasodilator",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertensive Crisis / Acute Decompensated Heart Failure",
        "mechanism_of_action": "Releases nitric oxide (NO) directly; causes immediate and potent vasodilation of both arterioles and venules; reduces preload and afterload."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Palpitations",
      "Headache"
    ],
    "adverse_drug_events": [
      "Cyanide Toxicity (Boxed Warning - accumulation of metabolite)",
      "Thiocyanate Toxicity",
      "Excessive Hypotension (Boxed Warning)",
      "Methemoglobinemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 814,
    "drug_name": "Sodium Picosulfate",
    "pharmacologic_class": [
      "Stimulant Laxative"
    ],
    "indications_and_moa": [
      {
        "indication": "Bowel Cleansing (Colonoscopy Prep)",
        "mechanism_of_action": "Prodrug hydrolyzed by colonic bacteria; stimulates peristalsis; increases water retention in the colon. Often combined with magnesium oxide."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Vomiting",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "Severe Dehydration",
      "Electrolyte Abnormalities (Hyponatremia/Hypokalemia)",
      "Seizures (due to hyponatremia)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 815,
    "drug_name": "Sodium Stibogluconate",
    "pharmacologic_class": [
      "Antimonial",
      "Antiprotozoal"
    ],
    "indications_and_moa": [
      {
        "indication": "Leishmaniasis",
        "mechanism_of_action": "Inhibits glycolytic enzymes and fatty acid oxidation in Leishmania parasites; reduces ATP and GTP production."
      }
    ],
    "common_side_effects": [
      "Myalgia/Arthralgia",
      "Nausea/Vomiting",
      "Elevated Pancreatic/Liver Enzymes"
    ],
    "adverse_drug_events": [
      "Cardiotoxicity (QT Prolongation / Arrhythmias)",
      "Pancreatitis",
      "Bone Marrow Suppression"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 816,
    "drug_name": "Sodium Thiosulfate",
    "pharmacologic_class": [
      "Antidote / Chelating Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Cyanide Poisoning / Calciphylaxis / Cisplatin Extravasation",
        "mechanism_of_action": "Provides sulfur donor for rhodanese enzyme to convert toxic cyanide to non-toxic thiocyanate. Forms soluble calcium thiosulfate complexes (Calciphylaxis)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Headache",
      "Disorientation"
    ],
    "adverse_drug_events": [
      "Metabolic Acidosis",
      "Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 817,
    "drug_name": "Sodium Valproate",
    "pharmacologic_class": [
      "Anticonvulsant / Mood Stabilizer"
    ],
    "indications_and_moa": [
      {
        "indication": "Epilepsy / Bipolar Disorder",
        "mechanism_of_action": "Increases GABA levels; blocks voltage-gated sodium channels; inhibits histone deacetylase. (See Divalproex - Same active moiety)."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Weight gain",
      "Nausea",
      "Alopecia"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Pancreatitis (Boxed Warning)",
      "Teratogenicity (Neural Tube Defects - Boxed Warning)",
      "Hyperammonemia / Encephalopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 818,
    "drug_name": "Sofosbuvir",
    "pharmacologic_class": [
      "Nucleotide Polymerase Inhibitor",
      "Antiviral (HCV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis C (Pan-genotypic combinations)",
        "mechanism_of_action": "Prodrug converted to uridine analog triphosphate; inhibits HCV NS5B RNA-dependent RNA polymerase; acts as chain terminator."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation (Boxed Warning)",
      "Serious Bradycardia (with Amiodarone - Avoid)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 819,
    "drug_name": "Solifenacin",
    "pharmacologic_class": [
      "Anticholinergic (M3 Selective)",
      "Urinary Antispasmodic"
    ],
    "indications_and_moa": [
      {
        "indication": "Overactive Bladder (OAB)",
        "mechanism_of_action": "Competitive muscarinic receptor antagonist with selectivity for M3 receptors in the bladder; reduces detrusor contraction and urinary urgency."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Angioedema",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 820,
    "drug_name": "Somatropin",
    "pharmacologic_class": [
      "Growth Hormone",
      "Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Growth Failure / GH Deficiency / AIDS Wasting",
        "mechanism_of_action": "Recombinant human growth hormone; stimulates skeletal/somatic growth; increases IGF-1; promotes protein anabolism and lipolysis."
      }
    ],
    "common_side_effects": [
      "Injection site reaction",
      "Edema",
      "Arthralgia/Myalgia",
      "Headache"
    ],
    "adverse_drug_events": [
      "Intracranial Hypertension",
      "Slipped Capital Femoral Epiphysis",
      "Hyperglycemia / Diabetes",
      "Increased Mortality in Acute Critical Illness (Contraindicated)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 821,
    "drug_name": "Sorafenib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "HCC / RCC / Thyroid Cancer",
        "mechanism_of_action": "Multi-kinase inhibitor (VEGFR, PDGFR, RAF, KIT); inhibits tumor angiogenesis and cell proliferation (RAF/MEK/ERK pathway)."
      }
    ],
    "common_side_effects": [
      "Hand-Foot Skin Reaction",
      "Diarrhea",
      "Fatigue",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Cardiac Ischemia / Infarction",
      "Hemorrhage",
      "GI Perforation",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 822,
    "drug_name": "Sotalol",
    "pharmacologic_class": [
      "Class III Antiarrhythmic / Beta Blocker",
      "Antiarrhythmic"
    ],
    "indications_and_moa": [
      {
        "indication": "Atrial Fibrillation / Ventricular Arrhythmias",
        "mechanism_of_action": "Non-selective beta-blocker (Class II) and potassium channel blocker (Class III); prolongs action potential duration and refractoriness."
      }
    ],
    "common_side_effects": [
      "Bradycardia",
      "Fatigue",
      "Dyspnea",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Torsades de Pointes / QT Prolongation (Boxed Warning - Initiate in hospital)",
      "Heart Failure",
      "Bronchospasm"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 823,
    "drug_name": "Sparfloxacin",
    "pharmacologic_class": [
      "Fluoroquinolone",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Community-Acquired Pneumonia (Discontinued in many markets)",
        "mechanism_of_action": "Inhibits DNA gyrase and Topoisomerase IV. (Note: High risk of phototoxicity and QT prolongation led to restricted use)."
      }
    ],
    "common_side_effects": [
      "Photosensitivity (Severe)",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes",
      "Tendinitis",
      "Phototoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 824,
    "drug_name": "Spiramycin",
    "pharmacologic_class": [
      "Macrolide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Toxoplasmosis (Pregnancy) / Bacterial Infections",
        "mechanism_of_action": "Inhibits protein synthesis by binding to 50S ribosomal subunit. Does not cross placenta well (protects fetus from transmission but does not treat fetal infection)."
      }
    ],
    "common_side_effects": [
      "GI Upset",
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "QT Prolongation",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 825,
    "drug_name": "Spironolactone",
    "pharmacologic_class": [
      "Aldosterone Antagonist",
      "Diuretic (Potassium-Sparing)"
    ],
    "indications_and_moa": [
      {
        "indication": "Heart Failure / Edema / Hypertension / Hyperaldosteronism",
        "mechanism_of_action": "Competitively antagonizes aldosterone receptors in the distal tubule; increases sodium/water excretion; retains potassium. Anti-androgenic effects."
      }
    ],
    "common_side_effects": [
      "Gynecomastia (Anti-androgen effect)",
      "Hyperkalemia",
      "Dizziness",
      "Menstrual irregularities"
    ],
    "adverse_drug_events": [
      "Severe Hyperkalemia (Fatal arrhythmias)",
      "Renal Failure",
      "Tumorigenic in animals (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 826,
    "drug_name": "Stavudine (d4T)",
    "pharmacologic_class": [
      "Nucleoside Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection",
        "mechanism_of_action": "Thymidine analogue; inhibits HIV-1 reverse transcriptase by chain termination. High affinity for mitochondrial DNA polymerase gamma (toxicity)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis / Severe Hepatomegaly (Boxed Warning)",
      "Pancreatitis (Boxed Warning)",
      "Peripheral Neuropathy",
      "Lipoatrophy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 827,
    "drug_name": "Streptokinase",
    "pharmacologic_class": [
      "Thrombolytic Agent",
      "Fibrinolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute MI / PE / DVT",
        "mechanism_of_action": "Forms complex with plasminogen which converts other plasminogen molecules into plasmin; plasmin degrades fibrin clots. Non-fibrin specific (systemic lytic state)."
      }
    ],
    "common_side_effects": [
      "Bleeding",
      "Hypotension",
      "Fever"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (Intracranial/GI)",
      "Anaphylaxis / Allergic Reactions (Bacterial origin - Antigenic)",
      "Reperfusion Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 828,
    "drug_name": "Streptomycin",
    "pharmacologic_class": [
      "Aminoglycoside Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Tuberculosis / Plague / Tularemia",
        "mechanism_of_action": "Binds to the 30S ribosomal subunit; interferes with protein synthesis. First-line agent for plague/tularemia; second-line for TB."
      }
    ],
    "common_side_effects": [
      "Vestibular toxicity (Vertigo/Balance issues)",
      "Injection site pain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Ototoxicity (Permanent hearing loss - Boxed Warning)",
      "Nephrotoxicity (Boxed Warning)",
      "Neuromuscular Blockade (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 829,
    "drug_name": "Sucralfate",
    "pharmacologic_class": [
      "Mucosal Protectant",
      "Antiulcer Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Duodenal Ulcer",
        "mechanism_of_action": "Forms a viscous, adhesive paste in acidic environment; binds selectively to necrotic ulcer tissue; acts as a barrier to acid, pepsin, and bile salts."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Bezoar Formation",
      "Aluminum Toxicity (in renal failure)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 830,
    "drug_name": "Sufentanil",
    "pharmacologic_class": [
      "Opioid Agonist",
      "Anesthetic Adjunct"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / Analgesia",
        "mechanism_of_action": "Potent mu-opioid receptor agonist (5-10x more potent than fentanyl); rapid onset and short duration; high lipid solubility."
      }
    ],
    "common_side_effects": [
      "Hypotension",
      "Bradycardia",
      "Nausea/Vomiting"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Skeletal Muscle Rigidity (Chest wall rigidity)",
      "Addiction / Misuse (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 831,
    "drug_name": "Sugammadex",
    "pharmacologic_class": [
      "Selective Relaxant Binding Agent",
      "Reversal Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Reversal of Neuromuscular Blockade (Rocuronium/Vecuronium)",
        "mechanism_of_action": "Modified gamma-cyclodextrin; encapsulates rocuronium/vecuronium in plasma; creates concentration gradient favoring movement of drug from NMJ into plasma."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Headache",
      "Dysgeusia"
    ],
    "adverse_drug_events": [
      "Marked Bradycardia / Cardiac Arrest",
      "Hypersensitivity / Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 832,
    "drug_name": "Sulfacetamide",
    "pharmacologic_class": [
      "Sulfonamide Antibiotic",
      "Ophthalmic/Topical Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Conjunctivitis / Acne Vulgaris / Seborrheic Dermatitis",
        "mechanism_of_action": "Competitively inhibits dihydropteroate synthase; blocks folic acid synthesis in bacteria."
      }
    ],
    "common_side_effects": [
      "Local irritation",
      "Burning/Stinging",
      "Redness"
    ],
    "adverse_drug_events": [
      "Stevens-Johnson Syndrome (Rare with topical use)",
      "Hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 833,
    "drug_name": "Sulfadiazine",
    "pharmacologic_class": [
      "Sulfonamide Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Toxoplasmosis / Rheumatic Fever Prophylaxis",
        "mechanism_of_action": "Inhibits bacterial folic acid synthesis by competing with PABA. Often used with pyrimethamine for toxoplasmosis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Diarrhea",
      "Rash"
    ],
    "adverse_drug_events": [
      "Stevens-Johnson Syndrome / TEN",
      "Crystalluria / Renal Failure",
      "Agranulocytosis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 834,
    "drug_name": "Sulfamethoxazole",
    "pharmacologic_class": [
      "Sulfonamide Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "UTI / Respiratory Infections (component of TMP-SMX)",
        "mechanism_of_action": "Inhibits dihydropteroate synthase; blocks folate synthesis. Usually combined with Trimethoprim for synergistic effect."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Vomiting",
      "Rash",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "Severe Skin Reactions (SJS/TEN)",
      "Blood Dyscrasias",
      "Hyperkalemia (in combination with TMP)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 835,
    "drug_name": "Sulfasalazine",
    "pharmacologic_class": [
      "Aminosalicylate / DMARD",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Ulcerative Colitis / Rheumatoid Arthritis",
        "mechanism_of_action": "Cleaved by colonic bacteria into 5-ASA (local anti-inflammatory) and sulfapyridine (systemic absorption). 5-ASA inhibits prostaglandins/leukotrienes."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Headache",
      "Rash",
      "Orange urine/skin"
    ],
    "adverse_drug_events": [
      "Severe Hypersensitivity (DRESS)",
      "Bone Marrow Suppression",
      "Oligospermia (Reversible)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 836,
    "drug_name": "Sulindac",
    "pharmacologic_class": [
      "NSAID",
      "Analgesic/Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Arthritis / Bursitis",
        "mechanism_of_action": "Prodrug converted to active sulfide metabolite; inhibits COX-1 and COX-2; reduces prostaglandin synthesis. Sometimes considered 'renal-sparing'."
      }
    ],
    "common_side_effects": [
      "GI pain",
      "Nausea",
      "Constipation"
    ],
    "adverse_drug_events": [
      "GI Bleeding / Ulceration (Boxed Warning)",
      "Cardiovascular Thrombotic Events (Boxed Warning)",
      "Pancreatitis",
      "Severe Skin Reactions (SJS/TEN)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 837,
    "drug_name": "Sumatriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Agonist",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine / Cluster Headache",
        "mechanism_of_action": "Selective agonist at 5-HT1B and 5-HT1D receptors; causes vasoconstriction of cranial arteries; inhibits release of inflammatory neuropeptides."
      }
    ],
    "common_side_effects": [
      "Injection site reaction",
      "Tingling/Paresthesia",
      "Warm/Hot sensation",
      "Chest tightness"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / MI",
      "Arrhythmias",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 838,
    "drug_name": "Sunitinib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "RCC / GIST / Pancreatic Neuroendocrine Tumors",
        "mechanism_of_action": "Multi-targeted TKI; inhibits VEGFR, PDGFR, KIT, FLT3, and RET; blocks angiogenesis and tumor cell proliferation."
      }
    ],
    "common_side_effects": [
      "Fatigue",
      "Diarrhea",
      "Hypertension",
      "Skin discoloration (Yellow)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Cardiotoxicity (Heart Failure)",
      "Hemorrhage"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 839,
    "drug_name": "Tacrolimus",
    "pharmacologic_class": [
      "Calcineurin Inhibitor",
      "Immunosuppressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Transplant Rejection Prophylaxis / Atopic Dermatitis (Topical)",
        "mechanism_of_action": "Binds to FKBP-12; inhibits calcineurin; blocks NF-AT dephosphorylation; prevents IL-2 transcription and T-cell activation."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Headache",
      "Diarrhea",
      "Hypertension"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Acute/Chronic - Dose-dependent)",
      "Neurotoxicity (Seizures/PRES)",
      "Increased Risk of Infection / Malignancy (Boxed Warning)",
      "New Onset Diabetes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 840,
    "drug_name": "Tadalafil",
    "pharmacologic_class": [
      "PDE5 Inhibitor",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Erectile Dysfunction / BPH / PAH (Adcirca)",
        "mechanism_of_action": "Inhibits PDE5; increases cGMP; enhances NO-mediated vasodilation in corpus cavernosum, prostate, and pulmonary vasculature. Long half-life (17.5 hours)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dyspepsia",
      "Back pain / Myalgia",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Severe Hypotension (Contraindicated with Nitrates)",
      "Priapism",
      "Sudden Hearing/Vision Loss (NAION)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 841,
    "drug_name": "Tafamidis",
    "pharmacologic_class": [
      "Transthyretin Stabilizer",
      "Amyloidosis Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Transthyretin Amyloid Cardiomyopathy (ATTR-CM)",
        "mechanism_of_action": "Binds to transthyretin (TTR) tetramer; prevents dissociation into monomers (rate-limiting step in amyloidogenesis); slows progression."
      }
    ],
    "common_side_effects": [
      "Generally well tolerated",
      "UTI (rare)",
      "Vaginal infection (rare)"
    ],
    "adverse_drug_events": [
      "None significantly listed in labeling compared to placebo"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 842,
    "drug_name": "Tamoxifen",
    "pharmacologic_class": [
      "SERM (Selective Estrogen Receptor Modulator)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Breast Cancer (Treatment/Prevention)",
        "mechanism_of_action": "Estrogen antagonist in breast tissue (inhibits tumor growth); estrogen agonist in bone (preserves density) and uterus (endometrial stimulation)."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Vaginal discharge",
      "Fluid retention",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Uterine Malignancies (Endometrial Cancer - Boxed Warning)",
      "Thromboembolism (DVT/PE/Stroke - Boxed Warning)",
      "Cataracts"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 843,
    "drug_name": "Tamsulosin",
    "pharmacologic_class": [
      "Alpha-1A Adrenergic Antagonist",
      "BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Benign Prostatic Hyperplasia (BPH)",
        "mechanism_of_action": "Selectively blocks alpha-1A receptors in the prostate and bladder neck; relaxes smooth muscle; improves urine flow. Less effect on blood pressure than non-selective agents."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Retrograde ejaculation",
      "Rhinitis",
      "Headache"
    ],
    "adverse_drug_events": [
      "Orthostatic Hypotension",
      "Intraoperative Floppy Iris Syndrome (IFIS)",
      "Priapism"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 844,
    "drug_name": "Tapentadol",
    "pharmacologic_class": [
      "Opioid Agonist / NRI",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain / Neuropathic Pain",
        "mechanism_of_action": "Dual mechanism: Mu-opioid receptor agonist and Norepinephrine Reuptake Inhibitor (NRI). Synergistic analgesic effect."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Vomiting",
      "Somnolence"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse (Boxed Warning)",
      "Serotonin Syndrome (due to NRI activity)",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 845,
    "drug_name": "Tazobactam",
    "pharmacologic_class": [
      "Beta-lactamase Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Combined with Piperacillin or Ceftolozane",
        "mechanism_of_action": "Irreversibly inhibits beta-lactamase enzymes; prevents hydrolysis of the partner antibiotic (Piperacillin/Ceftolozane); restores activity against resistant bacteria."
      }
    ],
    "common_side_effects": [
      "See combination drug effects (e.g., Diarrhea)",
      "Injection site reaction"
    ],
    "adverse_drug_events": [
      "See combination drug events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 846,
    "drug_name": "Teicoplanin",
    "pharmacologic_class": [
      "Glycopeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Gram-Positive Infections (Not FDA Approved - used in Europe/Asia)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by binding to D-alanyl-D-alanine terminus; bactericidal. Similar to Vancomycin but longer half-life."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Pain at injection site",
      "Fever"
    ],
    "adverse_drug_events": [
      "Hypersensitivity",
      "Ototoxicity / Nephrotoxicity (Lower risk than Vancomycin)",
      "Red Man Syndrome (Rare compared to Vancomycin)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 847,
    "drug_name": "Telavancin",
    "pharmacologic_class": [
      "Lipoglycopeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "cSSSI / Hospital-Acquired Pneumonia (MRSA)",
        "mechanism_of_action": "Dual mechanism: Inhibits cell wall synthesis (binds D-ala-D-ala) and disrupts bacterial cell membrane potential (depolarization)."
      }
    ],
    "common_side_effects": [
      "Taste disturbance (Metallic/Soapy)",
      "Nausea",
      "Vomiting",
      "Foamy urine"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Boxed Warning)",
      "Increased Mortality in Pre-existing Renal Impairment (Boxed Warning - Pneumonia)",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 848,
    "drug_name": "Telmisartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Cardiovascular Risk Reduction",
        "mechanism_of_action": "Selectively blocks AT1 receptors; prevents vasoconstriction and aldosterone release. Longest half-life among ARBs (24 hours)."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Back pain",
      "Sinusitis"
    ],
    "adverse_drug_events": [
      "Renal Failure",
      "Hyperkalemia",
      "Angioedema",
      "Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 849,
    "drug_name": "Temazepam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Short-term)",
        "mechanism_of_action": "Enhances GABAergic inhibition via GABA-A receptors. Intermediate acting; no active metabolites."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Respiratory Depression (Boxed Warning with Opioids)",
      "Complex Sleep Behaviors",
      "Dependence / Abuse"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 850,
    "drug_name": "Temozolomide",
    "pharmacologic_class": [
      "Alkylating Agent (Imidazotetrazine)",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Glioblastoma Multiforme / Anaplastic Astrocytoma",
        "mechanism_of_action": "Prodrug converted to MTIC; methylates DNA (O6-guanine position); causes DNA mismatch repair failure and apoptosis. Crosses BBB."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fatigue",
      "Constipation",
      "Headache"
    ],
    "adverse_drug_events": [
      "Myelosuppression (Dose-limiting)",
      "Pneumocystis Pneumonia (PCP - Prophylaxis required with radiation)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 851,
    "drug_name": "Tenecteplase",
    "pharmacologic_class": [
      "Thrombolytic Agent",
      "Tissue Plasminogen Activator"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute MI / Acute Ischemic Stroke (Off-label/Guidelines)",
        "mechanism_of_action": "Modified tPA; binds to fibrin; converts plasminogen to plasmin; dissolves clots. Higher fibrin specificity and longer half-life than Alteplase (single bolus)."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)"
    ],
    "adverse_drug_events": [
      "Major Hemorrhage (Intracranial/GI)",
      "Anaphylaxis (Rare)",
      "Reperfusion Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 852,
    "drug_name": "Tenofovir Alafenamide (TAF)",
    "pharmacologic_class": [
      "Nucleotide Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection / Chronic Hepatitis B",
        "mechanism_of_action": "Prodrug of tenofovir; hydrolyzed intracellularly to active diphosphate; inhibits HIV-1 RT and HBV polymerase. Higher intracellular concentration and lower plasma levels than TDF (less renal/bone toxicity)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Lactic Acidosis / Severe Hepatomegaly (Boxed Warning)",
      "Exacerbation of Hepatitis B (upon withdrawal - Boxed Warning)",
      "Renal Impairment (Lower risk than TDF)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 853,
    "drug_name": "Tenofovir Disoproxil Fumarate (TDF)",
    "pharmacologic_class": [
      "Nucleotide Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection / Chronic Hepatitis B",
        "mechanism_of_action": "Prodrug of tenofovir; inhibits viral reverse transcriptase/polymerase by chain termination. Higher plasma levels associated with toxicity."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Vomiting",
      "Flatulence"
    ],
    "adverse_drug_events": [
      "Renal Toxicity (Fanconi Syndrome/AKI)",
      "Decreased Bone Mineral Density / Osteomalacia",
      "Exacerbation of Hepatitis B (upon withdrawal - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 854,
    "drug_name": "Terazosin",
    "pharmacologic_class": [
      "Alpha-1 Adrenergic Antagonist",
      "Antihypertensive / BPH Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "BPH / Hypertension",
        "mechanism_of_action": "Non-selective alpha-1 blocker; relaxes smooth muscle in bladder neck/prostate and peripheral vasculature. Long-acting."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Asthenia",
      "Nasal congestion",
      "Peripheral edema"
    ],
    "adverse_drug_events": [
      "Orthostatic Hypotension / Syncope (First-dose effect)",
      "Priapism",
      "Intraoperative Floppy Iris Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 855,
    "drug_name": "Terbinafine",
    "pharmacologic_class": [
      "Allylamine Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Onychomycosis / Tinea Infections",
        "mechanism_of_action": "Inhibits squalene epoxidase; blocks ergosterol synthesis; accumulation of toxic squalene kills fungal cells. Fungicidal."
      }
    ],
    "common_side_effects": [
      "Headache",
      "GI upset",
      "Rash",
      "Taste disturbance (Dysgeusia)"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Rarely fatal)",
      "Stevens-Johnson Syndrome / TEN",
      "Neutropenia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 856,
    "drug_name": "Terbutaline",
    "pharmacologic_class": [
      "Beta-2 Adrenergic Agonist",
      "Bronchodilator / Tocolytic"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / COPD / Preterm Labor (Injection - Off-label/Restricted)",
        "mechanism_of_action": "Stimulates beta-2 receptors; relaxes bronchial and uterine smooth muscle."
      }
    ],
    "common_side_effects": [
      "Tremor",
      "Nervousness",
      "Palpitations",
      "Tachycardia"
    ],
    "adverse_drug_events": [
      "Prolonged Tocolysis Risks (Maternal cardiac events/Death - Boxed Warning)",
      "Hypokalemia",
      "Arrhythmias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 857,
    "drug_name": "Terconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Vulvovaginal Candidiasis",
        "mechanism_of_action": "Inhibits fungal cytochrome P450; disrupts cell membrane permeability."
      }
    ],
    "common_side_effects": [
      "Vaginal burning/irritation",
      "Headache",
      "Body pain"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 858,
    "drug_name": "Teriparatide",
    "pharmacologic_class": [
      "Parathyroid Hormone Analog (Recombinant)",
      "Bone Anabolic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis (High risk of fracture)",
        "mechanism_of_action": "Recombinant human PTH (1-34); intermittent administration stimulates osteoblast activity more than osteoclast activity; increases new bone formation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Arthralgia",
      "Leg cramps",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Osteosarcoma (Boxed Warning removed but risk noted in animals)",
      "Hypercalcemia",
      "Orthostatic Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 859,
    "drug_name": "Terlipressin",
    "pharmacologic_class": [
      "Vasopressin Analog",
      "Vasoconstrictor"
    ],
    "indications_and_moa": [
      {
        "indication": "Hepatorenal Syndrome / Esophageal Varices (Not FDA Approved - used globally)",
        "mechanism_of_action": "Prodrug of lysine-vasopressin; stimulates V1 receptors; causes splanchnic vasoconstriction; increases effective arterial blood volume and renal perfusion."
      }
    ],
    "common_side_effects": [
      "Abdominal cramps",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Ischemia (Cardiac/Peripheral/Intestinal)",
      "Respiratory Failure (Fluid overload)",
      "Hyponatremia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 860,
    "drug_name": "Testosterone",
    "pharmacologic_class": [
      "Androgen",
      "Hormone Replacement"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypogonadism / Delayed Puberty",
        "mechanism_of_action": "Endogenous androgen; binds to androgen receptors; responsible for normal growth and development of male sex organs and secondary sex characteristics."
      }
    ],
    "common_side_effects": [
      "Acne",
      "Injection site pain",
      "Edema",
      "Gynecomastia"
    ],
    "adverse_drug_events": [
      "Polycythemia",
      "Cardiovascular Risk (MI/Stroke - Warning)",
      "Prostate Cancer (Contraindicated)",
      "Secondary Exposure to Children/Women (Topical - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 861,
    "drug_name": "Tetrabenazine",
    "pharmacologic_class": [
      "VMAT2 Inhibitor",
      "Hyperkinetic Movement Disorder Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Huntington's Chorea",
        "mechanism_of_action": "Reversibly inhibits Vesicular Monoamine Transporter 2 (VMAT2); depletes monoamines (dopamine, serotonin, norepinephrine) from nerve terminals."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Fatigue",
      "Insomnia",
      "Akathisia"
    ],
    "adverse_drug_events": [
      "Depression / Suicidality (Boxed Warning)",
      "Parkinsonism",
      "Neuroleptic Malignant Syndrome",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 862,
    "drug_name": "Tetracaine",
    "pharmacologic_class": [
      "Local Anesthetic (Ester)",
      "Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Local Anesthesia (Topical/Ophthalmic/Spinal)",
        "mechanism_of_action": "Blocks voltage-gated sodium channels; prevents nerve impulse generation. Long-acting ester anesthetic."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging (Topical)",
      "Erythema"
    ],
    "adverse_drug_events": [
      "Methemoglobinemia",
      "Anaphylaxis (PABA metabolite)",
      "CNS Toxicity (Seizures - high systemic absorption)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 863,
    "drug_name": "Tetracycline",
    "pharmacologic_class": [
      "Tetracycline Antibiotic",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne / Bacterial Infections / H. pylori",
        "mechanism_of_action": "Binds to 30S ribosomal subunit; inhibits protein synthesis. Bacteriostatic."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Photosensitivity",
      "Discoloration of teeth (children)"
    ],
    "adverse_drug_events": [
      "Permanent Tooth Discoloration (Children <8)",
      "Hepatotoxicity",
      "Intracranial Hypertension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 864,
    "drug_name": "Thalidomide",
    "pharmacologic_class": [
      "Immunomodulator",
      "Antineoplastic / Antileprosy"
    ],
    "indications_and_moa": [
      {
        "indication": "Multiple Myeloma / Erythema Nodosum Leprosum (ENL)",
        "mechanism_of_action": "Immunomodulatory, anti-inflammatory, and anti-angiogenic properties; mechanism involves suppression of TNF-alpha production and modulation of T-cell subsets."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Peripheral Neuropathy",
      "Constipation",
      "Rash"
    ],
    "adverse_drug_events": [
      "Teratogenicity (Severe Phocomelia - Boxed Warning - REMS)",
      "Venous Thromboembolism (Boxed Warning)",
      "Severe Neuropathy (can be irreversible)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 865,
    "drug_name": "Theophylline",
    "pharmacologic_class": [
      "Methylxanthine",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma / COPD",
        "mechanism_of_action": "Non-selective phosphodiesterase inhibitor; increases cAMP; relaxes bronchial smooth muscle. Also antagonizes adenosine receptors."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Insomnia",
      "Tremor"
    ],
    "adverse_drug_events": [
      "Theophylline Toxicity (Seizures/Arrhythmias - Narrow therapeutic index)",
      "Severe Vomiting",
      "Hypokalemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 866,
    "drug_name": "Thiamine (Vitamin B1)",
    "pharmacologic_class": [
      "Vitamin",
      "Supplement"
    ],
    "indications_and_moa": [
      {
        "indication": "Thiamine Deficiency / Wernicke-Korsakoff Syndrome",
        "mechanism_of_action": "Converted to thiamine pyrophosphate; essential coenzyme for carbohydrate metabolism (transketolase, pyruvate dehydrogenase)."
      }
    ],
    "common_side_effects": [
      "Rarely nausea",
      "Injection site tenderness"
    ],
    "adverse_drug_events": [
      "Anaphylaxis (Rare - IV administration)",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 867,
    "drug_name": "Thiopental Sodium",
    "pharmacologic_class": [
      "Barbiturate",
      "General Anesthetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Anesthesia Induction / Increased ICP",
        "mechanism_of_action": "Ultra-short-acting barbiturate; potentiates GABA-A receptor activity; rapid onset due to high lipid solubility and rapid redistribution."
      }
    ],
    "common_side_effects": [
      "Shivering",
      "Somnolence",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Respiratory Depression / Apnea",
      "Cardiovascular Collapse (Hypotension)",
      "Tissue Necrosis (Intra-arterial injection)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 868,
    "drug_name": "Thioridazine",
    "pharmacologic_class": [
      "Phenothiazine",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia (Refractory only)",
        "mechanism_of_action": "Blocks dopamine D2 receptors. Low potency; high anticholinergic and alpha-blocking activity."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "Dry mouth",
      "Orthostatic hypotension",
      "Blurred vision"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes (Boxed Warning - Dose-related)",
      "Pigmentary Retinopathy (High doses)",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 869,
    "drug_name": "Thiotepa",
    "pharmacologic_class": [
      "Alkylating Agent",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Bladder Cancer / Breast Cancer / Ovarian Cancer",
        "mechanism_of_action": "Polyfunctional alkylating agent (aziridine); cross-links DNA; inhibits DNA/RNA/protein synthesis."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Alopecia",
      "Headache"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Boxed Warning)",
      "Secondary Malignancies",
      "Hemorrhagic Cystitis (Intravesical)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 870,
    "drug_name": "Thiothixene",
    "pharmacologic_class": [
      "Thioxanthene",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia",
        "mechanism_of_action": "Potent antagonist at dopamine D2 receptors. High potency; similar profile to haloperidol/fluphenazine."
      }
    ],
    "common_side_effects": [
      "EPS (Parkinsonism/Akathisia)",
      "Drowsiness",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Seizures"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 871,
    "drug_name": "Tiagabine",
    "pharmacologic_class": [
      "Anticonvulsant",
      "GABA Reuptake Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial Seizures (Adjunct)",
        "mechanism_of_action": "Potent and selective inhibitor of GABA uptake into presynaptic neurons and glia (inhibits GAT-1 transporter); increases synaptic GABA levels."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Somnolence",
      "Nervousness",
      "Tremor"
    ],
    "adverse_drug_events": [
      "New Onset Seizures (Non-epileptic patients - Warning)",
      "Status Epilepticus",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 872,
    "drug_name": "Ticagrelor",
    "pharmacologic_class": [
      "P2Y12 Inhibitor (Reversible)",
      "Antiplatelet Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Coronary Syndrome / Stroke Prevention",
        "mechanism_of_action": "Reversibly binds to the P2Y12 ADP receptor (non-competitive antagonist); prevents signal transduction and platelet aggregation. Direct-acting (not a prodrug)."
      }
    ],
    "common_side_effects": [
      "Dyspnea (Common - mechanism unclear)",
      "Bleeding",
      "Headache"
    ],
    "adverse_drug_events": [
      "Significant Bleeding (Boxed Warning)",
      "Bradycardia / Ventricular Pauses",
      "Reduced efficacy with high-dose Aspirin (>100mg - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 873,
    "drug_name": "Tigecycline",
    "pharmacologic_class": [
      "Glycylcycline",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Complicated Skin/Intra-abdominal Infections / Pneumonia",
        "mechanism_of_action": "Binds to 30S ribosomal subunit; inhibits protein synthesis. Structural modification of minocycline overcomes tetracycline resistance mechanisms."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting (Very common)",
      "Diarrhea",
      "Headache"
    ],
    "adverse_drug_events": [
      "Increased All-Cause Mortality (Boxed Warning - Reserve for situations with no alternatives)",
      "Pancreatitis",
      "Hepatic Dysfunction"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 874,
    "drug_name": "Timolol",
    "pharmacologic_class": [
      "Non-selective Beta Blocker",
      "Antiglaucoma / Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Glaucoma (Ophthalmic) / Hypertension / Migraine (Oral)",
        "mechanism_of_action": "Reduces aqueous humor production (Ophthalmic). Blocks beta-1 and beta-2 receptors; reduces cardiac output and renin release (Systemic)."
      }
    ],
    "common_side_effects": [
      "Eye stinging (Drops)",
      "Bradycardia",
      "Fatigue",
      "Dyspnea"
    ],
    "adverse_drug_events": [
      "Bronchospasm (Contraindicated in Asthma - even eye drops)",
      "Heart Block / Heart Failure",
      "Masking of Hypoglycemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 875,
    "drug_name": "Tinidazole",
    "pharmacologic_class": [
      "Nitroimidazole",
      "Antiprotozoal / Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Trichomoniasis / Giardiasis / Amebiasis / Bacterial Vaginosis",
        "mechanism_of_action": "Reduced by anaerobes/protozoa to reactive intermediates; damages DNA; inhibits synthesis. Longer half-life than metronidazole."
      }
    ],
    "common_side_effects": [
      "Metallic taste",
      "Nausea",
      "Fatigue",
      "Headache"
    ],
    "adverse_drug_events": [
      "Disulfiram-like Reaction (with alcohol)",
      "Neuropathy / Seizures",
      "Carcinogenicity (Animal data - Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 876,
    "drug_name": "Tiotropium",
    "pharmacologic_class": [
      "LAMA (Long-Acting Muscarinic Antagonist)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "COPD / Asthma (Maintenance)",
        "mechanism_of_action": "Long-acting antimuscarinic; binds to M3 receptors in bronchial smooth muscle; prevents acetylcholine-induced bronchoconstriction. Kinetic selectivity for M3 over M2."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Pharyngitis",
      "Sinusitis"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Urinary Retention",
      "Worsening of Glaucoma (if eye contact)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 877,
    "drug_name": "Tirofiban",
    "pharmacologic_class": [
      "Glycoprotein IIb/IIIa Inhibitor",
      "Antiplatelet Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Coronary Syndrome (NSTEMI/UA)",
        "mechanism_of_action": "Reversible antagonist of fibrinogen binding to the GP IIb/IIIa receptor on platelets; inhibits the final common pathway of platelet aggregation."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Headache",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Major Bleeding",
      "Thrombocytopenia (Immune-mediated)",
      "Anaphylaxis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 878,
    "drug_name": "Tizanidine",
    "pharmacologic_class": [
      "Alpha-2 Adrenergic Agonist",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "Muscle Spasticity (MS / Spinal Cord Injury)",
        "mechanism_of_action": "Agonist at central alpha-2 adrenergic receptors; increases presynaptic inhibition of motor neurons; reduces facilitation of spinal motor neurons."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Somnolence",
      "Hypotension",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "Severe Hypotension / Syncope",
      "Hallucinations"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 879,
    "drug_name": "Tobramycin",
    "pharmacologic_class": [
      "Aminoglycoside",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Serious Gram-Negative Infections / Cystic Fibrosis (Inhaled)",
        "mechanism_of_action": "Binds irreversibly to 30S ribosomal subunit; inhibits protein synthesis. Bactericidal. Active against Pseudomonas aeruginosa."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Voice alteration (Inhaled)",
      "Tinnitus"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Boxed Warning)",
      "Ototoxicity (Auditory/Vestibular - Boxed Warning)",
      "Neuromuscular Blockade (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 880,
    "drug_name": "Tofacitinib",
    "pharmacologic_class": [
      "JAK Inhibitor",
      "DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Psoriatic Arthritis / Ulcerative Colitis",
        "mechanism_of_action": "Inhibits Janus Kinases (JAK1/JAK3); blocks signaling of cytokines integral to immune cell function and inflammation."
      }
    ],
    "common_side_effects": [
      "Upper respiratory infection",
      "Nasopharyngitis",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Infections (Boxed Warning)",
      "Malignancy (Boxed Warning)",
      "Thrombosis (DVT/PE - Boxed Warning)",
      "MACE (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 881,
    "drug_name": "Tolbutamide",
    "pharmacologic_class": [
      "Sulfonylurea (1st Generation)",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus",
        "mechanism_of_action": "Stimulates insulin secretion from pancreatic beta cells; blocks ATP-sensitive K+ channels. Short duration of action."
      }
    ],
    "common_side_effects": [
      "Hypoglycemia",
      "Weight gain",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Severe Hypoglycemia",
      "Cardiovascular Mortality (Increased risk controversial - UGDP study)",
      "Hyponatremia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 882,
    "drug_name": "Tolcapone",
    "pharmacologic_class": [
      "COMT Inhibitor",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease (Adjunct to Levodopa)",
        "mechanism_of_action": "Potent, reversible inhibitor of COMT (Central and Peripheral); prevents degradation of levodopa; extends its plasma half-life."
      }
    ],
    "common_side_effects": [
      "Dyskinesia",
      "Urine discoloration",
      "Diarrhea",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Fatal Hepatotoxicity (Boxed Warning - Reserve for refractory cases)",
      "Rhabdomyolysis",
      "Neuroleptic Malignant Syndrome (upon withdrawal)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 883,
    "drug_name": "Tolterodine",
    "pharmacologic_class": [
      "Anticholinergic",
      "Urinary Antispasmodic"
    ],
    "indications_and_moa": [
      {
        "indication": "Overactive Bladder (OAB)",
        "mechanism_of_action": "Competitive muscarinic receptor antagonist; inhibits bladder contraction; increases residual urine volume; decreases detrusor pressure."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Headache",
      "Constipation",
      "Dry eyes"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Angioedema",
      "QT Prolongation (High doses / CYP2D6 poor metabolizers)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 884,
    "drug_name": "Tolvaptan",
    "pharmacologic_class": [
      "Vasopressin V2 Receptor Antagonist",
      "Aquaretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hyponatremia (Euvolemic/Hypervolemic) / ADPKD (Jynarque)",
        "mechanism_of_action": "Selectively blocks V2 receptors in renal collecting ducts; promotes excretion of free water (aquaresis) without significant electrolyte loss; raises serum sodium."
      }
    ],
    "common_side_effects": [
      "Thirst",
      "Dry mouth",
      "Polyuria",
      "Pollakiuria"
    ],
    "adverse_drug_events": [
      "Osmotic Demyelination Syndrome (Rapid correction - Boxed Warning)",
      "Hepatotoxicity (Boxed Warning - Jynarque/Samsca restricted duration)",
      "Dehydration"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 885,
    "drug_name": "Topiramate",
    "pharmacologic_class": [
      "Anticonvulsant",
      "Sulfamate"
    ],
    "indications_and_moa": [
      {
        "indication": "Epilepsy / Migraine Prophylaxis",
        "mechanism_of_action": "Blocks voltage-dependent sodium channels; enhances GABA-A activity; antagonizes AMPA/kainate glutamate receptors; weak carbonic anhydrase inhibitor."
      }
    ],
    "common_side_effects": [
      "Paresthesia",
      "Cognitive dysfunction (Word-finding difficulty)",
      "Weight loss",
      "Taste alteration"
    ],
    "adverse_drug_events": [
      "Metabolic Acidosis",
      "Acute Myopia / Secondary Angle-Closure Glaucoma",
      "Oligohidrosis / Hyperthermia",
      "Kidney Stones"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 886,
    "drug_name": "Topotecan",
    "pharmacologic_class": [
      "Topoisomerase I Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Ovarian Cancer / Small Cell Lung Cancer / Cervical Cancer",
        "mechanism_of_action": "Binds to Topoisomerase I-DNA complex; prevents religation of single-strand breaks; causes double-strand DNA breakage and cell death (S-phase specific)."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fatigue",
      "Alopecia",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Severe Myelosuppression (Neutropenia - Boxed Warning)",
      "Interstitial Lung Disease",
      "Extravasation (Irritant)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 887,
    "drug_name": "Torsemide",
    "pharmacologic_class": [
      "Loop Diuretic",
      "Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema (HF/Renal/Hepatic) / Hypertension",
        "mechanism_of_action": "Inhibits Na+/K+/2Cl- co-transporter in the ascending Loop of Henle. Longer duration of action and higher bioavailability than furosemide."
      }
    ],
    "common_side_effects": [
      "Polyuria",
      "Headache",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "Electrolyte Imbalance (Hypokalemia)",
      "Ototoxicity (Rare)",
      "Sulfonamide Allergy Cross-reactivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 888,
    "drug_name": "Tramadol",
    "pharmacologic_class": [
      "Opioid Agonist / SNRI",
      "Analgesic"
    ],
    "indications_and_moa": [
      {
        "indication": "Moderate to Severe Pain",
        "mechanism_of_action": "Weak mu-opioid receptor agonist; inhibits reuptake of norepinephrine and serotonin. Dual mechanism contributes to analgesia."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Constipation",
      "Somnolence"
    ],
    "adverse_drug_events": [
      "Seizures (Risk increased with SSRIs/TCA)",
      "Serotonin Syndrome",
      "Respiratory Depression (Boxed Warning)",
      "Addiction / Misuse"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 889,
    "drug_name": "Trametinib",
    "pharmacologic_class": [
      "MEK Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Melanoma (BRAF V600E/K) / NSCLC / Thyroid Cancer",
        "mechanism_of_action": "Reversible inhibitor of MEK1 and MEK2 kinases; blocks the MAPK signaling pathway downstream of BRAF; inhibits cell proliferation."
      }
    ],
    "common_side_effects": [
      "Rash (Acneiform)",
      "Diarrhea",
      "Lymphedema / Peripheral edema"
    ],
    "adverse_drug_events": [
      "Cardiomyopathy (Decreased LVEF)",
      "Retinal Vein Occlusion / Retinal Detachment",
      "Interstitial Lung Disease",
      "Hemorrhage"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 890,
    "drug_name": "Trandolapril",
    "pharmacologic_class": [
      "ACE Inhibitor",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure Post-MI",
        "mechanism_of_action": "Prodrug converted to trandolaprilat; inhibits ACE; blocks Angiotensin II formation; reduces vasoconstriction and aldosterone. Long half-life."
      }
    ],
    "common_side_effects": [
      "Cough",
      "Dizziness",
      "Hypotension"
    ],
    "adverse_drug_events": [
      "Angioedema",
      "Hyperkalemia",
      "Fetal Toxicity (Boxed Warning)",
      "Hepatic Failure"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 891,
    "drug_name": "Tranexamic Acid",
    "pharmacologic_class": [
      "Antifibrinolytic",
      "Hemostatic Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Heavy Menstrual Bleeding / Hemorrhage / Hereditary Angioedema",
        "mechanism_of_action": "Competitively inhibits activation of plasminogen to plasmin; prevents degradation of fibrin clots."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea",
      "Back pain",
      "Headache"
    ],
    "adverse_drug_events": [
      "Thromboembolism (DVT/PE - Rare but serious)",
      "Seizures (High doses)",
      "Visual Disturbances"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 892,
    "drug_name": "Tranylcypromine",
    "pharmacologic_class": [
      "MAOI (Non-selective)",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder (Treatment-Resistant)",
        "mechanism_of_action": "Irreversibly inhibits monoamine oxidase (A and B); increases levels of NE, serotonin, and dopamine. Non-hydrazine structure (related to amphetamine)."
      }
    ],
    "common_side_effects": [
      "Insomnia",
      "Dizziness",
      "Orthostatic hypotension",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Hypertensive Crisis (Tyramine interaction)",
      "Serotonin Syndrome",
      "Suicidality (Boxed Warning)",
      "Hepatotoxicity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 893,
    "drug_name": "Trastuzumab",
    "pharmacologic_class": [
      "HER2/neu Receptor Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "HER2+ Breast Cancer / HER2+ Gastric Cancer",
        "mechanism_of_action": "Binds to extracellular domain of HER2 receptor; inhibits cell proliferation; mediates antibody-dependent cellular cytotoxicity (ADCC)."
      }
    ],
    "common_side_effects": [
      "Fever/Chills (Infusion reaction)",
      "Nausea",
      "Headache",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Cardiomyopathy / Heart Failure (Boxed Warning)",
      "Infusion Reactions / Pulmonary Toxicity (Boxed Warning)",
      "Embryo-Fetal Toxicity (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 894,
    "drug_name": "Trazodone",
    "pharmacologic_class": [
      "Serotonin Modulator",
      "Antidepressant / Sedative"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder / Insomnia (Off-label)",
        "mechanism_of_action": "Antagonizes 5-HT2A receptors; inhibits serotonin reuptake (weakly). Also blocks H1 and alpha-1 receptors (sedation/hypotension)."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Dry mouth",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Priapism (Rare but serious surgical emergency)",
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Orthostatic Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 895,
    "drug_name": "Treprostinil",
    "pharmacologic_class": [
      "Prostacyclin Analog",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Pulmonary Arterial Hypertension (PAH)",
        "mechanism_of_action": "Directly vasodilates pulmonary and systemic arterial vascular beds; inhibits platelet aggregation. Available as IV, SQ, Inhaled, and Oral."
      }
    ],
    "common_side_effects": [
      "Infusion site pain (SQ)",
      "Cough (Inhaled)",
      "Headache",
      "Flushing",
      "Jaw pain"
    ],
    "adverse_drug_events": [
      "Sepsis (IV line infection)",
      "Systemic Hypotension",
      "Bleeding"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 896,
    "drug_name": "Tretinoin (Topical)",
    "pharmacologic_class": [
      "Retinoid",
      "Acne Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acne Vulgaris / Photoaging",
        "mechanism_of_action": "Binds to nuclear retinoic acid receptors; modifies gene expression; normalizes keratinization; promotes turnover of follicular epithelial cells; reduces cohesiveness."
      }
    ],
    "common_side_effects": [
      "Erythema",
      "Peeling/Scaling",
      "Dryness",
      "Burning"
    ],
    "adverse_drug_events": [
      "Photosensitivity (Severe sunburn)",
      "Hyper- or Hypopigmentation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 897,
    "drug_name": "Triamcinolone Acetonide",
    "pharmacologic_class": [
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    "indications_and_moa": [
      {
        "indication": "Inflammatory Dermatoses / Joint Inflammation / Allergic Rhinitis",
        "mechanism_of_action": "Intermediate-potency glucocorticoid; inhibits inflammatory response; suppresses migration of PMN leukocytes; reverses capillary permeability."
      }
    ],
    "common_side_effects": [
      "Burning/Itching (Topical)",
      "Nasal irritation (Spray)",
      "Skin atrophy"
    ],
    "adverse_drug_events": [
      "Adrenal Suppression (Systemic absorption)",
      "Nasal Septal Perforation",
      "Cataracts / Glaucoma"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 898,
    "drug_name": "Triamterene",
    "pharmacologic_class": [
      "Potassium-Sparing Diuretic",
      "Diuretic"
    ],
    "indications_and_moa": [
      {
        "indication": "Edema (with Thiazides to prevent hypokalemia)",
        "mechanism_of_action": "Directly blocks epithelial sodium channels (ENaC) in the distal tubule and collecting duct; inhibits Na+ reabsorption and K+ secretion independent of aldosterone."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Hyperkalemia (Boxed Warning)",
      "Renal Stones (Triamterene stones)",
      "Megaloblastic Anemia (Weak folic acid antagonist)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 899,
    "drug_name": "Triazolam",
    "pharmacologic_class": [
      "Benzodiazepine",
      "Hypnotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Short-term)",
        "mechanism_of_action": "Potentiates GABA-A receptor activity. Short acting; rapid onset and elimination."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Dizziness",
      "Coordination problems"
    ],
    "adverse_drug_events": [
      "Complex Sleep Behaviors (Boxed Warning)",
      "Anterograde Amnesia",
      "Rebound Insomnia / Anxiety",
      "Respiratory Depression (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 900,
    "drug_name": "Trientine",
    "pharmacologic_class": [
      "Chelating Agent",
      "Antidote"
    ],
    "indications_and_moa": [
      {
        "indication": "Wilson's Disease (Intolerant to Penicillamine)",
        "mechanism_of_action": "Chelates copper; promotes urinary excretion of copper. Polyamine-like structure."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Gastritis",
      "Rash"
    ],
    "adverse_drug_events": [
      "Iron Deficiency Anemia (Chelates iron)",
      "Lupus-like Reactions (Rare compared to penicillamine)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 901,
    "drug_name": "Trifluoperazine",
    "pharmacologic_class": [
      "Phenothiazine",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Anxiety (Short-term)",
        "mechanism_of_action": "Blocks dopamine D2 receptors. High potency; low sedative/autonomic effects but high EPS risk."
      }
    ],
    "common_side_effects": [
      "EPS (Parkinsonism/Akathisia)",
      "Drowsiness",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome",
      "Blood Dyscrasias"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 902,
    "drug_name": "Trifluridine",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Ophthalmic Antiviral"
    ],
    "indications_and_moa": [
      {
        "indication": "Herpes Simplex Keratitis",
        "mechanism_of_action": "Incorporated into viral DNA; inhibits viral DNA polymerase; produces defective proteins. Structural analog of thymidine."
      }
    ],
    "common_side_effects": [
      "Burning/Stinging",
      "Palpebral edema"
    ],
    "adverse_drug_events": [
      "Corneal Punctate Keratopathy",
      "Viral Resistance"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 903,
    "drug_name": "Trihexyphenidyl",
    "pharmacologic_class": [
      "Anticholinergic",
      "Antiparkinsonian"
    ],
    "indications_and_moa": [
      {
        "indication": "Parkinson's Disease / Drug-Induced EPS",
        "mechanism_of_action": "Blocks central muscarinic receptors; restores dopamine/acetylcholine balance in the corpus striatum."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Blurred vision",
      "Constipation",
      "Urinary retention"
    ],
    "adverse_drug_events": [
      "Anticholinergic Delirium / Psychosis",
      "Paralytic Ileus",
      "Heat Stroke"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 904,
    "drug_name": "Trimethoprim",
    "pharmacologic_class": [
      "Dihydrofolate Reductase Inhibitor",
      "Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Uncomplicated UTI",
        "mechanism_of_action": "Selectively inhibits bacterial dihydrofolate reductase; blocks production of tetrahydrofolic acid; bacteriostatic."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Pruritus",
      "GI upset"
    ],
    "adverse_drug_events": [
      "Hyperkalemia (Similar to Amiloride on ENaC)",
      "Megaloblastic Anemia (Folate deficiency - prolonged use)",
      "Stevens-Johnson Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 905,
    "drug_name": "Triptorelin",
    "pharmacologic_class": [
      "GnRH Agonist",
      "Antineoplastic / Hormone"
    ],
    "indications_and_moa": [
      {
        "indication": "Prostate Cancer / Precocious Puberty",
        "mechanism_of_action": "Potent GnRH agonist; continuous stimulation desensitizes pituitary receptors; decreases LH/FSH and gonadal steroids."
      }
    ],
    "common_side_effects": [
      "Hot flashes",
      "Decreased libido",
      "Injection site pain",
      "Headache"
    ],
    "adverse_drug_events": [
      "Tumor Flare (Initial T surge - Spinal cord compression)",
      "Pituitary Apoplexy",
      "Hyperglycemia / Diabetes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 906,
    "drug_name": "Tropicamide",
    "pharmacologic_class": [
      "Anticholinergic",
      "Mydriatic / Cycloplegic"
    ],
    "indications_and_moa": [
      {
        "indication": "Mydriasis / Cycloplegia (Diagnostic)",
        "mechanism_of_action": "Blocks muscarinic receptors in the iris sphincter (pupil dilation) and ciliary muscle (paralysis of accommodation). Short duration."
      }
    ],
    "common_side_effects": [
      "Blurred vision",
      "Photophobia",
      "Stinging"
    ],
    "adverse_drug_events": [
      "Acute Angle-Closure Glaucoma",
      "CNS Disturbances (Psychotic reactions - rare in children)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 907,
    "drug_name": "Trospium",
    "pharmacologic_class": [
      "Anticholinergic",
      "Urinary Antispasmodic"
    ],
    "indications_and_moa": [
      {
        "indication": "Overactive Bladder",
        "mechanism_of_action": "Quaternary ammonium muscarinic antagonist; blocks detrusor contraction. Does not cross BBB (fewer CNS effects)."
      }
    ],
    "common_side_effects": [
      "Dry mouth",
      "Constipation",
      "Headache"
    ],
    "adverse_drug_events": [
      "Urinary Retention",
      "Angioedema",
      "Heat Stroke"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 908,
    "drug_name": "Umeclidinium",
    "pharmacologic_class": [
      "LAMA (Long-Acting Muscarinic Antagonist)",
      "Bronchodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "COPD (Maintenance)",
        "mechanism_of_action": "Long-acting antagonist at M3 muscarinic receptors in bronchial smooth muscle; inhibits bronchoconstriction."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Upper respiratory infection",
      "Cough"
    ],
    "adverse_drug_events": [
      "Paradoxical Bronchospasm",
      "Worsening Glaucoma",
      "Urinary Retention"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 909,
    "drug_name": "Upadacitinib",
    "pharmacologic_class": [
      "JAK Inhibitor",
      "DMARD"
    ],
    "indications_and_moa": [
      {
        "indication": "Rheumatoid Arthritis / Psoriatic Arthritis / Atopic Dermatitis",
        "mechanism_of_action": "Selective JAK1 inhibitor; blocks cytokine signaling involved in inflammation and immune response."
      }
    ],
    "common_side_effects": [
      "Upper respiratory infection",
      "Nausea",
      "Acne",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Infections (Boxed Warning)",
      "Malignancy (Boxed Warning)",
      "Thrombosis (Boxed Warning)",
      "MACE (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 910,
    "drug_name": "Ursodeoxycholic Acid (Ursodiol)",
    "pharmacologic_class": [
      "Bile Acid",
      "Gallstone Dissolution Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Gallstone Dissolution / Primary Biliary Cholangitis (PBC)",
        "mechanism_of_action": "Decreases cholesterol content of bile (suppresses hepatic synthesis/secretion); permits dissolution of cholesterol stones. Cytoprotective in PBC."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Back pain",
      "Dizziness"
    ],
    "adverse_drug_events": [
      "None significantly serious; rare hypersensitivity"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 911,
    "drug_name": "Ustekinumab",
    "pharmacologic_class": [
      "IL-12/IL-23 Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Psoriasis / Psoriatic Arthritis / Crohn's / Ulcerative Colitis",
        "mechanism_of_action": "Binds to p40 protein subunit common to IL-12 and IL-23; prevents interaction with cell surface receptor IL-12R-beta1; blocks NK/T-cell activation."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Headache",
      "Fatigue",
      "Injection site erythema"
    ],
    "adverse_drug_events": [
      "Serious Infections (TB/Fungal)",
      "Malignancy (Skin Cancer)",
      "Reversible Posterior Leukoencephalopathy Syndrome (RPLS - Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 912,
    "drug_name": "Valacyclovir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (Herpes)"
    ],
    "indications_and_moa": [
      {
        "indication": "Herpes Zoster / Genital Herpes / Cold Sores",
        "mechanism_of_action": "Prodrug of acyclovir; better bioavailability. Phosphorylated by viral thymidine kinase; inhibits viral DNA polymerase."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Abdominal pain"
    ],
    "adverse_drug_events": [
      "TTP / HUS (in immunocompromised)",
      "Acute Renal Failure (Precipitation)",
      "Neurotoxicity (Confusion/Hallucinations)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 913,
    "drug_name": "Valganciclovir",
    "pharmacologic_class": [
      "Nucleoside Analog",
      "Antiviral (CMV)"
    ],
    "indications_and_moa": [
      {
        "indication": "CMV Retinitis / CMV Prophylaxis",
        "mechanism_of_action": "Prodrug of ganciclovir; high oral bioavailability. Inhibits CMV DNA polymerase."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Fever",
      "Headache"
    ],
    "adverse_drug_events": [
      "Severe Hematologic Toxicity (Boxed Warning)",
      "Carcinogenicity / Teratogenicity (Boxed Warning)",
      "Impairment of Fertility (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 914,
    "drug_name": "Valproic Acid",
    "pharmacologic_class": [
      "Anticonvulsant",
      "Valproate"
    ],
    "indications_and_moa": [
      {
        "indication": "Epilepsy / Bipolar Disorder / Migraine",
        "mechanism_of_action": "Increases GABA levels; blocks voltage-gated sodium channels. (See Divalproex/Sodium Valproate)."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Tremor",
      "Weight gain",
      "Hair loss"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Boxed Warning)",
      "Pancreatitis (Boxed Warning)",
      "Teratogenicity (Boxed Warning)",
      "Hyperammonemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 915,
    "drug_name": "Valsartan",
    "pharmacologic_class": [
      "Angiotensin II Receptor Blocker (ARB)",
      "Antihypertensive"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Heart Failure / Post-MI",
        "mechanism_of_action": "Selectively blocks AT1 receptors; prevents vasoconstriction and aldosterone secretion."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Fatigue",
      "Hyperkalemia"
    ],
    "adverse_drug_events": [
      "Renal Failure",
      "Fetal Toxicity (Boxed Warning)",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 916,
    "drug_name": "Vancomycin",
    "pharmacologic_class": [
      "Glycopeptide Antibiotic"
    ],
    "indications_and_moa": [
      {
        "indication": "MRSA Infections / C. difficile (Oral)",
        "mechanism_of_action": "Inhibits bacterial cell wall synthesis by binding to D-alanyl-D-alanine portion of cell wall precursors. Bactericidal."
      }
    ],
    "common_side_effects": [
      "Red Man Syndrome (Histamine release - Infusion rate related)",
      "Phlebitis"
    ],
    "adverse_drug_events": [
      "Nephrotoxicity (Dose-dependent)",
      "Ototoxicity (High levels)",
      "Neutropenia (Prolonged use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 917,
    "drug_name": "Vandetanib",
    "pharmacologic_class": [
      "Tyrosine Kinase Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Medullary Thyroid Cancer",
        "mechanism_of_action": "Inhibits EGFR, VEGFR, RET, BRK, TIE2, and EPH receptors; blocks angiogenesis and cell proliferation."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Rash",
      "Nausea",
      "HTN"
    ],
    "adverse_drug_events": [
      "QT Prolongation / Torsades de Pointes (Boxed Warning - REMS)",
      "Sudden Death (Boxed Warning)",
      "Severe Skin Reactions (SJS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 918,
    "drug_name": "Vardenafil",
    "pharmacologic_class": [
      "PDE5 Inhibitor",
      "Vasodilator"
    ],
    "indications_and_moa": [
      {
        "indication": "Erectile Dysfunction",
        "mechanism_of_action": "Inhibits PDE5; increases cGMP; enhances nitric oxide-mediated vasodilation in corpus cavernosum."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Flushing",
      "Rhinitis",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Severe Hypotension (Contraindicated with Nitrates)",
      "Priapism",
      "QT Prolongation",
      "NAION (Vision Loss)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 919,
    "drug_name": "Varenicline",
    "pharmacologic_class": [
      "Nicotinic Receptor Partial Agonist",
      "Smoking Cessation Aid"
    ],
    "indications_and_moa": [
      {
        "indication": "Smoking Cessation",
        "mechanism_of_action": "Partial agonist at alpha-4-beta-2 nicotinic acetylcholine receptors; stimulates low-level dopamine release (reduces craving) and blocks nicotine binding (reduces reward)."
      }
    ],
    "common_side_effects": [
      "Nausea (Dose-dependent)",
      "Insomnia",
      "Abnormal dreams",
      "Headache"
    ],
    "adverse_drug_events": [
      "Neuropsychiatric Events (Suicidality/Depression - Boxed Warning removed but risk remains)",
      "Seizures",
      "Cardiovascular Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 920,
    "drug_name": "Vasopressin",
    "pharmacologic_class": [
      "Antidiuretic Hormone",
      "Vasopressor"
    ],
    "indications_and_moa": [
      {
        "indication": "Vasodilatory Shock / Diabetes Insipidus",
        "mechanism_of_action": "Stimulates V1 receptors (vascular smooth muscle contraction) and V2 receptors (renal water reabsorption). Increases SVR."
      }
    ],
    "common_side_effects": [
      "Hyponatremia",
      "Ischemia (Peripheral)",
      "Abdominal cramps"
    ],
    "adverse_drug_events": [
      "Water Intoxication",
      "Myocardial Ischemia",
      "Tissue Necrosis (Extravasation)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 921,
    "drug_name": "Vecuronium",
    "pharmacologic_class": [
      "Nondepolarizing Neuromuscular Blocker",
      "Skeletal Muscle Relaxant"
    ],
    "indications_and_moa": [
      {
        "indication": "General Anesthesia / Intubation / ICU Paralysis",
        "mechanism_of_action": "Intermediate-acting competitive antagonist at nicotinic acetylcholine receptors at the motor end plate. No significant cardiovascular effects."
      }
    ],
    "common_side_effects": [
      "Prolonged block",
      "Bradycardia (Rare)"
    ],
    "adverse_drug_events": [
      "Anaphylaxis",
      "Prolonged Paralysis / Myopathy"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 922,
    "drug_name": "Vedolizumab",
    "pharmacologic_class": [
      "Integrin Receptor Antagonist",
      "Monoclonal Antibody"
    ],
    "indications_and_moa": [
      {
        "indication": "Ulcerative Colitis / Crohn's Disease",
        "mechanism_of_action": "Gut-selective; binds to alpha-4-beta-7 integrin; inhibits leukocyte adhesion to MAdCAM-1 in gut mucosa; reduces gut inflammation without systemic immunosuppression."
      }
    ],
    "common_side_effects": [
      "Nasopharyngitis",
      "Headache",
      "Arthralgia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hypersensitivity / Anaphylaxis",
      "Infections",
      "Liver Injury (Rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 923,
    "drug_name": "Velpatasvir",
    "pharmacologic_class": [
      "NS5A Inhibitor",
      "Antiviral (HCV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Chronic Hepatitis C (Pan-genotypic - with Sofosbuvir)",
        "mechanism_of_action": "Inhibits NS5A protein; blocks viral replication and assembly. High barrier to resistance."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Fatigue",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Hepatitis B Reactivation (Boxed Warning)",
      "Bradycardia (with Amiodarone)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 924,
    "drug_name": "Vemurafenib",
    "pharmacologic_class": [
      "BRAF Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Metastatic Melanoma (BRAF V600E)",
        "mechanism_of_action": "Inhibits mutated BRAF kinase; blocks MAPK signaling pathway; inhibits tumor cell proliferation in BRAF V600E mutated cells."
      }
    ],
    "common_side_effects": [
      "Rash",
      "Arthralgia",
      "Fatigue",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "New Primary Cutaneous Malignancies (CuSCC)",
      "QT Prolongation",
      "Serious Hypersensitivity (SJS/TEN/DRESS)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 925,
    "drug_name": "Venetoclax",
    "pharmacologic_class": [
      "BCL-2 Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "CLL / SLL / AML",
        "mechanism_of_action": "Selectively inhibits BCL-2 (anti-apoptotic protein); restores apoptotic process (programmed cell death) in cancer cells."
      }
    ],
    "common_side_effects": [
      "Neutropenia",
      "Diarrhea",
      "Nausea",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Tumor Lysis Syndrome (TLS - Rapid onset - Boxed Warning)",
      "Severe Neutropenia / Infections"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 926,
    "drug_name": "Venlafaxine",
    "pharmacologic_class": [
      "SNRI",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Depression / GAD / Panic Disorder / Social Anxiety",
        "mechanism_of_action": "Potent inhibitor of serotonin and norepinephrine reuptake; weakly inhibits dopamine reuptake."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Somnolence/Insomnia",
      "Dry mouth",
      "Sweating"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Sustained Hypertension (Dose-related)",
      "Serotonin Syndrome",
      "Discontinuation Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 927,
    "drug_name": "Verapamil",
    "pharmacologic_class": [
      "Calcium Channel Blocker (Non-Dihydropyridine)",
      "Antiarrhythmic (Class IV)"
    ],
    "indications_and_moa": [
      {
        "indication": "Hypertension / Angina / PSVT / Atrial Fibrillation (Rate control)",
        "mechanism_of_action": "Blocks L-type calcium channels; slows SA/AV node conduction; negative inotrope; vasodilator. Greater cardiac depression than diltiazem."
      }
    ],
    "common_side_effects": [
      "Constipation (Very common)",
      "Dizziness",
      "Headache",
      "Edema"
    ],
    "adverse_drug_events": [
      "Heart Block / AV Dissociation",
      "Heart Failure Exacerbation",
      "Severe Hypotension"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 928,
    "drug_name": "Vigabatrin",
    "pharmacologic_class": [
      "GABA Transaminase Inhibitor",
      "Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Infantile Spasms / Refractory Complex Partial Seizures",
        "mechanism_of_action": "Irreversibly inhibits GABA transaminase (GABA-T); increases levels of the inhibitory neurotransmitter GABA in the CNS."
      }
    ],
    "common_side_effects": [
      "Vision loss (Permanent)",
      "Somnolence",
      "Fatigue",
      "Headache"
    ],
    "adverse_drug_events": [
      "Permanent Visual Field Constriction (Boxed Warning - REMS)",
      "MRI Abnormalities (Intramyelinic Edema)",
      "Suicidal Ideation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 929,
    "drug_name": "Vilazodone",
    "pharmacologic_class": [
      "Serotonin Modulator",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Dual mechanism: Selective Serotonin Reuptake Inhibitor (SSRI) and 5-HT1A Receptor Partial Agonist."
      }
    ],
    "common_side_effects": [
      "Diarrhea",
      "Nausea",
      "Insomnia"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Pancreatitis",
      "Bleeding Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 930,
    "drug_name": "Vildagliptin",
    "pharmacologic_class": [
      "DPP-4 Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus (Not FDA Approved - used globally)",
        "mechanism_of_action": "Inhibits Dipeptidyl Peptidase-4 (DPP-4); increases endogenous GLP-1 and GIP levels; enhances glucose-dependent insulin secretion."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Headache",
      "Nasopharyngitis"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Monitor LFTs)",
      "Pancreatitis",
      "Angioedema"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 931,
    "drug_name": "Vinblastine",
    "pharmacologic_class": [
      "Vinca Alkaloid",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Hodgkin's Lymphoma / Testicular Cancer",
        "mechanism_of_action": "Binds to tubulin; inhibits microtubule formation; arrests cell division in Metaphase (M-phase specific)."
      }
    ],
    "common_side_effects": [
      "Constipation",
      "Alopecia",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Bone Marrow Suppression (Dose-limiting - Leukopenia)",
      "Extravasation Necrosis (Vesicant)",
      "Neurotoxicity (Less than Vincristine)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 932,
    "drug_name": "Vincristine",
    "pharmacologic_class": [
      "Vinca Alkaloid",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "ALL / Hodgkin's & Non-Hodgkin's Lymphoma / Wilms Tumor",
        "mechanism_of_action": "Binds to tubulin; inhibits microtubule formation; arrests mitosis in Metaphase. Sparing of bone marrow relative to other chemo."
      }
    ],
    "common_side_effects": [
      "Alopecia",
      "Constipation",
      "Jaw pain"
    ],
    "adverse_drug_events": [
      "Peripheral Neuropathy (Dose-limiting - Boxed Warning)",
      "Extravasation Necrosis (Vesicant - Boxed Warning)",
      "Fatal if given Intrathecally (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 933,
    "drug_name": "Vinorelbine",
    "pharmacologic_class": [
      "Vinca Alkaloid",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "NSCLC",
        "mechanism_of_action": "Semi-synthetic vinca alkaloid; interferes with microtubule assembly; arrests mitosis at Metaphase."
      }
    ],
    "common_side_effects": [
      "Nausea/Vomiting",
      "Fatigue",
      "Constipation"
    ],
    "adverse_drug_events": [
      "Severe Granulocytopenia (Boxed Warning)",
      "Extravasation Necrosis",
      "Interstitial Pulmonary Changes"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 934,
    "drug_name": "Vismodegib",
    "pharmacologic_class": [
      "Hedgehog Pathway Inhibitor",
      "Antineoplastic"
    ],
    "indications_and_moa": [
      {
        "indication": "Basal Cell Carcinoma (Advanced/Metastatic)",
        "mechanism_of_action": "Binds to Smoothened (SMO) receptor; inhibits Hedgehog pathway signaling; prevents tumor growth."
      }
    ],
    "common_side_effects": [
      "Muscle spasms",
      "Alopecia",
      "Dysgeusia (Taste loss)",
      "Weight loss"
    ],
    "adverse_drug_events": [
      "Embryo-Fetal Toxicity (Boxed Warning)",
      "Severe Cutaneous Adverse Reactions"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 935,
    "drug_name": "Vitamin A (Retinol)",
    "pharmacologic_class": [
      "Vitamin (Fat Soluble)",
      "Nutrient"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin A Deficiency / Measles (Off-label)",
        "mechanism_of_action": "Essential for vision (rhodopsin formation), immune function, cell differentiation, and epithelial integrity."
      }
    ],
    "common_side_effects": [
      "Dry skin",
      "Headache (High dose)"
    ],
    "adverse_drug_events": [
      "Hypervitaminosis A (Acute toxicity - ICP elevation/Vomiting)",
      "Teratogenicity (High doses)",
      "Hepatotoxicity (Chronic overdose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 936,
    "drug_name": "Vitamin B12 (Cyanocobalamin)",
    "pharmacologic_class": [
      "Vitamin (Water Soluble)",
      "Nutrient"
    ],
    "indications_and_moa": [
      {
        "indication": "Pernicious Anemia / B12 Deficiency",
        "mechanism_of_action": "Coenzyme for methionine synthase and methylmalonyl-CoA mutase; essential for DNA synthesis and myelin maintenance."
      }
    ],
    "common_side_effects": [
      "Injection site pain",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hypokalemia (during rapid treatment of severe anemia)",
      "Anaphylaxis (rare)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 937,
    "drug_name": "Vitamin C (Ascorbic Acid)",
    "pharmacologic_class": [
      "Vitamin (Water Soluble)",
      "Nutrient / Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "Scurvy",
        "mechanism_of_action": "Cofactor for collagen hydroxylation; antioxidant; enhances iron absorption."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Kidney Stones (Oxalate)",
      "Hemolysis (G6PD deficiency - high IV dose)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 938,
    "drug_name": "Vitamin D3 (Cholecalciferol)",
    "pharmacologic_class": [
      "Vitamin (Fat Soluble)",
      "Nutrient"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin D Deficiency / Osteoporosis Prevention",
        "mechanism_of_action": "Metabolized to calcitriol; increases intestinal calcium and phosphate absorption; regulates bone mineralization."
      }
    ],
    "common_side_effects": [
      "Nausea (High dose)"
    ],
    "adverse_drug_events": [
      "Hypercalcemia / Hypercalciuria (Toxicity)",
      "Renal Calculi",
      "Vascular Calcification"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 939,
    "drug_name": "Vitamin E (Tocopherol)",
    "pharmacologic_class": [
      "Vitamin (Fat Soluble)",
      "Antioxidant"
    ],
    "indications_and_moa": [
      {
        "indication": "Vitamin E Deficiency",
        "mechanism_of_action": "Prevents oxidation of polyunsaturated fatty acids in cell membranes; stabilizes cell membranes."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Bleeding Risk (Antiplatelet effect at high doses)",
      "Necrotizing Enterocolitis (Premature infants)",
      "Hemorrhagic Stroke"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 940,
    "drug_name": "Vitamin K (Phytonadione)",
    "pharmacologic_class": [
      "Vitamin (Fat Soluble)",
      "Antidote / Nutrient"
    ],
    "indications_and_moa": [
      {
        "indication": "Warfarin Reversal / Vit K Deficiency Bleeding",
        "mechanism_of_action": "Cofactor for hepatic carboxylation of clotting factors II, VII, IX, and X."
      }
    ],
    "common_side_effects": [
      "Taste perversion",
      "Flushing"
    ],
    "adverse_drug_events": [
      "Severe Hypersensitivity / Anaphylaxis (Boxed Warning - IV/IM route)",
      "Hyperbilirubinemia (Neonates)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 941,
    "drug_name": "Voglibose",
    "pharmacologic_class": [
      "Alpha-Glucosidase Inhibitor",
      "Antidiabetic"
    ],
    "indications_and_moa": [
      {
        "indication": "Type 2 Diabetes Mellitus (Not FDA Approved)",
        "mechanism_of_action": "Inhibits alpha-glucosidase in the intestine; delays carbohydrate digestion and absorption; reduces postprandial hyperglycemia."
      }
    ],
    "common_side_effects": [
      "Flatulence",
      "Abdominal distension",
      "Diarrhea"
    ],
    "adverse_drug_events": [
      "Hypoglycemia (if combined with other agents)",
      "Ileus / Pneumatosis Cystoides Intestinalis"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 942,
    "drug_name": "Voriconazole",
    "pharmacologic_class": [
      "Azole Antifungal"
    ],
    "indications_and_moa": [
      {
        "indication": "Invasive Aspergillosis / Candidemia",
        "mechanism_of_action": "Inhibits fungal CYP450 14-alpha-demethylase; disrupts ergosterol synthesis."
      }
    ],
    "common_side_effects": [
      "Visual disturbances (Photopsia)",
      "Nausea",
      "Rash",
      "Photosensitivity"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity",
      "QT Prolongation",
      "Visual Hallucinations",
      "Squamous Cell Carcinoma (Long-term use)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 943,
    "drug_name": "Vortioxetine",
    "pharmacologic_class": [
      "Serotonin Modulator",
      "Antidepressant"
    ],
    "indications_and_moa": [
      {
        "indication": "Major Depressive Disorder",
        "mechanism_of_action": "Multimodal: Inhibits serotonin reuptake; 5-HT1A agonist; 5-HT1B partial agonist; 5-HT3, 5-HT1D, 5-HT7 antagonist."
      }
    ],
    "common_side_effects": [
      "Nausea (Very common)",
      "Constipation",
      "Vomiting"
    ],
    "adverse_drug_events": [
      "Suicidality (Boxed Warning)",
      "Serotonin Syndrome",
      "Hyponatremia",
      "Bleeding Risk"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 944,
    "drug_name": "Warfarin",
    "pharmacologic_class": [
      "Vitamin K Antagonist",
      "Anticoagulant"
    ],
    "indications_and_moa": [
      {
        "indication": "VTE Treatment / AF Stroke Prevention / Valve Replacement",
        "mechanism_of_action": "Inhibits Vitamin K Epoxide Reductase (VKORC1); depletes functional Vitamin K; reduces synthesis of clotting factors II, VII, IX, X."
      }
    ],
    "common_side_effects": [
      "Bleeding (Minor)",
      "Bruising"
    ],
    "adverse_drug_events": [
      "Major/Fatal Bleeding (Boxed Warning)",
      "Skin Necrosis / Gangrene (Protein C depletion)",
      "Calciphylaxis",
      "Teratogenicity (Warfarin Embryopathy)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 945,
    "drug_name": "Xylometazoline",
    "pharmacologic_class": [
      "Alpha-Adrenergic Agonist",
      "Decongestant"
    ],
    "indications_and_moa": [
      {
        "indication": "Nasal Congestion",
        "mechanism_of_action": "Directly stimulates alpha-adrenergic receptors in nasal arterioles; causes vasoconstriction; reduces mucosal edema."
      }
    ],
    "common_side_effects": [
      "Nasal burning",
      "Dryness",
      "Sneezing"
    ],
    "adverse_drug_events": [
      "Rhinitis Medicamentosa (Rebound congestion)",
      "Systemic Hypertension / Tachycardia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 946,
    "drug_name": "Zaleplon",
    "pharmacologic_class": [
      "Non-benzodiazepine Hypnotic",
      "Z-Drug"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia (Sleep Onset)",
        "mechanism_of_action": "Selectively binds to the benzodiazepine type 1 (BZ1/omega-1) receptor on the GABA-A complex. Ultra-short half-life (1 hour)."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Dizziness",
      "Somnolence"
    ],
    "adverse_drug_events": [
      "Complex Sleep Behaviors (Boxed Warning)",
      "Anaphylaxis",
      "Rebound Insomnia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 947,
    "drug_name": "Zanamivir",
    "pharmacologic_class": [
      "Neuraminidase Inhibitor",
      "Antiviral (Influenza)"
    ],
    "indications_and_moa": [
      {
        "indication": "Influenza A and B (Treatment/Prophylaxis)",
        "mechanism_of_action": "Inhibits viral neuraminidase; prevents release of viral particles from infected cells. Administered via inhalation."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Throat irritation"
    ],
    "adverse_drug_events": [
      "Bronchospasm (Not recommended in asthma/COPD)",
      "Allergic Reactions",
      "Neuropsychiatric Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 948,
    "drug_name": "Zidovudine (AZT)",
    "pharmacologic_class": [
      "Nucleoside Reverse Transcriptase Inhibitor (NRTI)",
      "Antiretroviral"
    ],
    "indications_and_moa": [
      {
        "indication": "HIV-1 Infection / Perinatal Transmission Prevention",
        "mechanism_of_action": "Thymidine analogue; inhibits HIV reverse transcriptase; terminates viral DNA chain elongation."
      }
    ],
    "common_side_effects": [
      "Nausea",
      "Headache",
      "Anemia"
    ],
    "adverse_drug_events": [
      "Hematologic Toxicity (Neutropenia/Severe Anemia - Boxed Warning)",
      "Myopathy (Boxed Warning)",
      "Lactic Acidosis / Hepatomegaly (Boxed Warning)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 949,
    "drug_name": "Zileuton",
    "pharmacologic_class": [
      "5-Lipoxygenase Inhibitor",
      "Antiasthmatic"
    ],
    "indications_and_moa": [
      {
        "indication": "Asthma Prophylaxis",
        "mechanism_of_action": "Inhibits 5-lipoxygenase enzyme; prevents formation of leukotrienes (LTB4, LTC4, LTD4, LTE4); reduces airway inflammation and bronchoconstriction."
      }
    ],
    "common_side_effects": [
      "Headache",
      "Nausea",
      "Dyspepsia"
    ],
    "adverse_drug_events": [
      "Hepatotoxicity (Elevated ALT - Monitor LFTs)",
      "Neuropsychiatric Events"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 950,
    "drug_name": "Ziprasidone",
    "pharmacologic_class": [
      "Atypical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Bipolar I Disorder",
        "mechanism_of_action": "Antagonist at dopamine D2 and serotonin 5-HT2A receptors; also inhibits reuptake of serotonin and norepinephrine."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Nausea",
      "Dizziness",
      "EPS"
    ],
    "adverse_drug_events": [
      "QT Prolongation (Warning)",
      "DRESS Syndrome (Warning)",
      "Tardive Dyskinesia",
      "Neuroleptic Malignant Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 951,
    "drug_name": "Zoledronic Acid",
    "pharmacologic_class": [
      "Bisphosphonate",
      "Bone Resorption Inhibitor"
    ],
    "indications_and_moa": [
      {
        "indication": "Osteoporosis / Hypercalcemia of Malignancy / Bone Metastases",
        "mechanism_of_action": "Potent inhibitor of osteoclast-mediated bone resorption; inhibits farnesyl pyrophosphate synthase."
      }
    ],
    "common_side_effects": [
      "Flu-like symptoms (Acute phase reaction)",
      "Bone pain",
      "Fatigue"
    ],
    "adverse_drug_events": [
      "Renal Toxicity / Failure",
      "Osteonecrosis of the Jaw (ONJ)",
      "Atypical Femur Fractures",
      "Hypocalcemia"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 952,
    "drug_name": "Zolmitriptan",
    "pharmacologic_class": [
      "Serotonin 5-HT1B/1D Agonist",
      "Antimigraine Agent"
    ],
    "indications_and_moa": [
      {
        "indication": "Acute Migraine",
        "mechanism_of_action": "Selective agonist at 5-HT1B and 5-HT1D receptors on intracranial blood vessels and sensory nerves; causes vasoconstriction and inhibits pro-inflammatory neuropeptide release."
      }
    ],
    "common_side_effects": [
      "Dizziness",
      "Paresthesia",
      "Neck/Throat tightness",
      "Nausea"
    ],
    "adverse_drug_events": [
      "Coronary Vasospasm / Myocardial Ischemia",
      "Cerebrovascular Events",
      "Serotonin Syndrome"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 953,
    "drug_name": "Zolpidem",
    "pharmacologic_class": [
      "Non-benzodiazepine Hypnotic",
      "Z-Drug"
    ],
    "indications_and_moa": [
      {
        "indication": "Insomnia",
        "mechanism_of_action": "Selectively binds to the benzodiazepine type 1 (BZ1/omega-1) receptor on the GABA-A complex; facilitates GABAergic inhibition. Rapid onset."
      }
    ],
    "common_side_effects": [
      "Drowsiness",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Complex Sleep Behaviors (Sleep-walking/driving - Boxed Warning)",
      "CNS Depression / Next-day impairment",
      "Abuse / Dependence"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 954,
    "drug_name": "Zonisamide",
    "pharmacologic_class": [
      "Sulfonamide Anticonvulsant"
    ],
    "indications_and_moa": [
      {
        "indication": "Partial Seizures (Adjunct)",
        "mechanism_of_action": "Blocks sodium and T-type calcium channels; weak carbonic anhydrase inhibitor; scavenges free radicals."
      }
    ],
    "common_side_effects": [
      "Somnolence",
      "Anorexia",
      "Dizziness",
      "Headache"
    ],
    "adverse_drug_events": [
      "Serious Skin Reactions (SJS/TEN - Sulfonamide)",
      "Metabolic Acidosis",
      "Kidney Stones",
      "Oligohidrosis / Hyperthermia (Pediatric)"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  },
  {
    "id": 955,
    "drug_name": "Zuclopenthixol",
    "pharmacologic_class": [
      "Thioxanthene",
      "Typical Antipsychotic"
    ],
    "indications_and_moa": [
      {
        "indication": "Schizophrenia / Acute Psychosis (Acuphase) / Maintenance (Depot)",
        "mechanism_of_action": "High potency antagonist at dopamine D2 receptors; also blocks alpha-1 and 5-HT2 receptors. Available in acetate (short-acting depot), decanoate (long-acting), and oral forms."
      }
    ],
    "common_side_effects": [
      "Sedation",
      "EPS (Rigidity/Tremor)",
      "Dry mouth"
    ],
    "adverse_drug_events": [
      "Neuroleptic Malignant Syndrome",
      "Tardive Dyskinesia",
      "QT Prolongation"
    ],
    "adr_reporting_link": "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm"
  }
];