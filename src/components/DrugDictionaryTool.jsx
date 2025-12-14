import React, { useState, useMemo, useEffect } from 'react';
import { Search, Pill, AlertTriangle, Activity, ExternalLink, ChevronDown, ChevronUp, Droplet } from 'lucide-react';
// Import the new Monograph Modal
import MonographModal from './MonographModal'; 
// Attempt to import the external database (reverts to placeholder if broken)
import { drugDatabase as importedDrugDatabase } from '../data/drug_database';

// Consolidated Curated List (Used for initial display)
const CURATED_DRUG_NAMES = [
    "Methotrexate", 
    "Metoprolol", 
    "Hydroxyurea", 
    "Adenosine", 
    "Imatinib", 
    "Paracetamol"
];

// Fallback Data Structure (Ensures display if external import fails)
const FALLBACK_DRUGS = [
    { id: 556, drug_name: "Methotrexate", pharmacologic_class: ["Antifolate", "DMARD"], indications_and_moa: [{indication: "Rheumatoid Arthritis", mechanism_of_action: "Inhibits DHFR (Dihydrofolate Reductase), increasing adenosine release for anti-inflammatory effect."}], common_side_effects: ["Nausea", "Stomatitis", "Fatigue"], adverse_drug_events: ["Bone Marrow Suppression", "Hepatotoxicity (Fibrosis)", "Pneumonitis"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 564, drug_name: "Metoprolol", pharmacologic_class: ["Beta-1 Selective Blocker", "Antihypertensive"], indications_and_moa: [{indication: "Heart Failure / Hypertension", mechanism_of_action: "Cardioselective beta-1 blockade; decreases heart rate, contractility, and oxygen demand."}], common_side_effects: ["Fatigue", "Bradycardia", "Dizziness"], adverse_drug_events: ["Heart Block", "Bronchospasm (at high doses)", "Masking of Hypoglycemia"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 434, drug_name: "Hydroxyurea", pharmacologic_class: ["Antimetabolite", "DNA Synthesis Inhibitor"], indications_and_moa: [{indication: "Sickle Cell Anemia", mechanism_of_action: "Inhibits ribonucleotide reductase; halts DNA synthesis. Increases fetal hemoglobin (HbF) production."}], common_side_effects: ["Nausea", "Myelosuppression", "Skin darkening"], adverse_drug_events: ["Severe Myelosuppression", "Cutaneous Vasculitic Ulcers", "Secondary Malignancy"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 15, drug_name: "Adenosine", pharmacologic_class: ["Antiarrhythmic", "Nucleoside"], indications_and_moa: [{indication: "Paroxysmal Supraventricular Tachycardia (PSVT)", mechanism_of_action: "Slows conduction time through the AV node; interrupts AV nodal re-entry pathways."}], common_side_effects: ["Flushing", "Chest pressure", "Dyspnea"], adverse_drug_events: ["Prolonged Asystole (Transient)", "Bronchoconstriction"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 445, drug_name: "Imatinib", pharmacologic_class: ["Tyrosine Kinase Inhibitor (TKI)", "BCR-ABL Inhibitor"], indications_and_moa: [{indication: "Chronic Myeloid Leukemia (CML)", mechanism_of_action: "Inhibits BCR-ABL tyrosine kinase (constitutive in Ph+ CML), c-KIT, and PDGFR."}], common_side_effects: ["Edema (Periorbital)", "Nausea", "Muscle cramps"], adverse_drug_events: ["Hepatotoxicity", "Severe Fluid Retention / Pleural Effusion", "Cardiac Dysfunction (CHF)"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 664, drug_name: "Paracetamol", pharmacologic_class: ["Analgesic", "Antipyretic"], indications_and_moa: [{indication: "Pain / Fever", mechanism_of_action: "Inhibits CNS prostaglandin synthesis (COX inhibition); acts on hypothalamic heat-regulating center."}], common_side_effects: ["Nausea (rare)", "Rash (rare)"], adverse_drug_events: ["Hepatotoxicity (Acute liver failure in overdose)", "Severe Skin Reactions (SJS/TEN)"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" }
];

// Determine the primary database source for the component
const DRUG_DATA_SOURCE = Array.isArray(importedDrugDatabase) && importedDrugDatabase.length > 0
    ? importedDrugDatabase
    : FALLBACK_DRUGS;


const DrugDictionaryTool = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // State now holds the selected drug's data ONLY for passing to the modal
    const [selectedDrugData, setSelectedDrugData] = useState(null); 
    const [isMonographOpen, setIsMonographOpen] = useState(false); // Modal state
    const [initialList, setInitialList] = useState([]);

    // Step 1: Build the curated initial list and set the first drug
    useEffect(() => {
        // FIX: Ensure this effect only runs once for initialization
        const lowerCuratedNames = new Set(CURATED_DRUG_NAMES.map(n => n.toLowerCase()));
        
        const matchedCuratedDrugs = DRUG_DATA_SOURCE.filter(d => 
            d && d.drug_name && lowerCuratedNames.has(d.drug_name.toLowerCase())
        );

        setInitialList(matchedCuratedDrugs);
        
        // We do NOT set selectedDrugData here, wait for click to open modal
        // This resolves the issue where the first drug was selected but not clickable.
        
    }, []); 

    // Filter Logic (Show initialList unless searching)
    const filteredDrugs = useMemo(() => {
        const databaseToFilter = searchTerm ? DRUG_DATA_SOURCE : initialList;

        const cleanedDatabase = databaseToFilter.filter(d => d && d.drug_name);

        if (!searchTerm) return cleanedDatabase; // Return curated list if search is empty
        
        const lowerSearchTerm = searchTerm.toLowerCase();
        
        return cleanedDatabase.filter(drug => 
            drug.drug_name.toLowerCase().includes(lowerSearchTerm) ||
            (Array.isArray(drug.pharmacologic_class) && drug.pharmacologic_class.some(cls => cls.toLowerCase().includes(lowerSearchTerm)))
        );
    }, [searchTerm, initialList]);

    // FIX 2: Handler now opens the Monograph Modal
    const handleSelectDrug = (drug) => {
        setSelectedDrugData(drug);
        setIsMonographOpen(true);
    };

    return (
        // Component rendered directly into the app tab
        <div className="w-full h-full max-h-[85vh] flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl bg-white dark:bg-slate-900">
            
            {/* 1. RENDER MODAL (This is now external to the main view) */}
            {/* The Modal handles its own scrolling and display logic */}
            <MonographModal 
                drug={selectedDrugData} 
                isOpen={isMonographOpen} 
                onClose={() => setIsMonographOpen(false)} 
            />

            {/* --- LEFT PANEL: Search & List (Scrollable) --- */}
            <div className="w-full md:w-1/3 flex flex-col shrink-0 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-full">
                
                {/* Header & Search (Shrink-0) */}
                <div className="p-4 shrink-0 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2"><Pill size={20} className="text-blue-600"/> Drug Index</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder={"Search generics..."}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Drug List (Scrollable List Area) */}
                <div className="flex-1 overflow-y-auto">
                    {DRUG_DATA_SOURCE.length === 0 && (
                         <div className="p-4 bg-red-100 text-red-800 text-sm font-bold border-l-4 border-red-500">
                            CRITICAL ERROR: Database is empty.
                         </div>
                    )}
                    
                    {filteredDrugs.length > 0 ? (
                        filteredDrugs.map(drug => (
                            <div
                                key={drug.id}
                                // FIX: Click handler sets modal data and opens modal
                                onClick={() => handleSelectDrug(drug)} 
                                className={`p-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer transition-all hover:pl-5 
                                    ${selectedDrugData?.id === drug.id 
                                        ? 'bg-blue-100/50 dark:bg-blue-900/30 border-l-4 border-l-blue-600 dark:border-l-blue-400 pl-5' 
                                        : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 border-l-4 border-l-transparent'
                                    }`}
                            >
                                <h3 className={`font-bold text-sm ${selectedDrugData?.id === drug.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-800 dark:text-slate-200'}`}>
                                    {drug.drug_name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1 font-medium">
                                    {drug.pharmacologic_class && Array.isArray(drug.pharmacologic_class) ? drug.pharmacologic_class.join(', ') : ''}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-slate-400 italic">No drugs found matching "{searchTerm}"</div>
                    )}
                </div>
            </div>

            {/* --- RIGHT PANEL: PREVIEW/INSTRUCTIONS --- */}
            {/* This pane is now only used for instructions since the monograph is in the modal. */}
            <div className="w-full md:w-2/3 bg-white dark:bg-slate-900 flex flex-col relative flex-1">
                <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600 p-8 text-center">
                    <Pill size={80} className="mb-6 opacity-10" />
                    <p className="text-xl font-bold text-slate-500 dark:text-slate-400">Drug Monographs</p>
                    <p className="text-sm mt-2 max-w-xs font-medium opacity-70">
                        Click any drug on the left to open the detailed, scrollable monograph and clinical safety profile in a new window.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DrugDictionaryTool;