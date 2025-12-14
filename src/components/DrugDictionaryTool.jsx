import React, { useState, useMemo, useEffect } from 'react';
import { Search, Pill, AlertTriangle, Activity, ExternalLink, ChevronDown, ChevronUp, Droplet } from 'lucide-react';
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

// Fallback Data Structure (Only includes the 6 curated drugs for guaranteed display if external import fails)
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
    const [selectedDrug, setSelectedDrug] = useState(null);
    const [initialList, setInitialList] = useState([]);
    // Removed monographContentKey as programmatic scrolling is more reliable than key change

    // Step 1: Build the curated initial list and set the first drug
    useEffect(() => {
        // FIX: Ensure this effect only runs once for initialization
        const lowerCuratedNames = new Set(CURATED_DRUG_NAMES.map(n => n.toLowerCase()));
        
        const matchedCuratedDrugs = DRUG_DATA_SOURCE.filter(d => 
            d && d.drug_name && lowerCuratedNames.has(d.drug_name.toLowerCase())
        );

        setInitialList(matchedCuratedDrugs);
        
        // Set the first curated drug as selected on load
        if (matchedCuratedDrugs.length > 0) {
            setSelectedDrug(matchedCuratedDrugs[0]);
        }
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

    const handleSelectDrug = (drug) => {
        setSelectedDrug(drug);
        
        // FIX 3 (Scrolling): Programmatically scroll the monograph content to the top
        const monographElement = document.getElementById('monographContent');
        if (monographElement) {
            // Use a short timeout to ensure the DOM has updated before scrolling
            setTimeout(() => {
                monographElement.scrollTop = 0;
            }, 0);
        }
    };
    
    // Monograph rendering component
    const MonographContent = () => {
        const drug = selectedDrug;
        
        if (!drug) return (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600 p-8 text-center">
                <Pill size={80} className="mb-6 opacity-30 text-blue-500" />
                <p className="text-xl font-bold text-slate-500 dark:text-slate-400">Select a drug to view details</p>
                <p className="text-sm mt-2 max-w-xs font-medium opacity-70">
                    Browse the list on the left to view detailed pharmacology, mechanism of action, and safety data.
                </p>
            </div>
        );

        // FIX: The outer MonographContent div is now flex-col, and the content below the header scrolls.
        return (
            <div className="flex flex-col h-full"> 
                {/* Header/Title/Class (Shrink-0 to keep it fixed at the top) */}
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                        {drug.drug_name}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      {drug.pharmacologic_class && Array.isArray(drug.pharmacologic_class) && drug.pharmacologic_class.map((cls, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                          {cls}
                        </span>
                      ))}
                    </div>
                </div>

                {/* SCROLLABLE BODY CONTENT (Monograph Details) */}
                {/* FIX 3: ID added for programmatic scrolling */}
                <div id="monographContent" className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                  
                  {/* Indications & Mechanism Section */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Activity size={20} className="text-emerald-500" />
                      Clinical Pharmacology
                    </h3>
                    <div className="grid gap-4">
                      {drug.indications_and_moa && Array.isArray(drug.indications_and_moa) && drug.indications_and_moa.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-sm transition-shadow">
                          <div className="mb-3">
                            <span className="text-[10px] font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Indication</span>
                            <p className="font-bold text-slate-800 dark:text-slate-200 text-base mt-1">{item.indication}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold uppercase text-purple-600 dark:text-purple-400 tracking-wider">Mechanism of Action</span>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-1">{item.mechanism_of_action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Safety Profile Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Side Effects */}
                    <div className="bg-yellow-50/50 dark:bg-yellow-900/10 rounded-xl p-6 border border-yellow-200 dark:border-yellow-700/30">
                      <h3 className="text-sm font-bold text-yellow-800 dark:text-yellow-200 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <AlertTriangle size={16} /> Common Side Effects
                      </h3>
                      <ul className="space-y-3">
                        {drug.common_side_effects && Array.isArray(drug.common_side_effects) && drug.common_side_effects.map((effect, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <span className="mr-2 text-yellow-500 text-lg leading-none">•</span> {effect}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Adverse Events */}
                    <div className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-6 border border-red-200 dark:border-red-700/30">
                      <h3 className="text-sm font-bold text-red-800 dark:text-red-200 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <AlertTriangle size={16} /> Adverse Drug Events
                      </h3>
                      <ul className="space-y-3">
                        {drug.adverse_drug_events && Array.isArray(drug.adverse_drug_events) && drug.adverse_drug_events.map((event, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <span className="mr-2 text-red-500 font-bold">!</span> {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer / FDA Link */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                    <a 
                      href={drug.adr_reporting_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                    >
                      <ExternalLink size={16} /> FDA Reporting Site
                    </a>
                  </div>

                </div>
            </div>
        );
    }

    return (
        // Component rendered directly into the app tab
        // Ensures the container takes up the max available space within the App's content area
        <div className="w-full h-full max-h-[85vh] flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl bg-white dark:bg-slate-900">
            
            {/* --- LEFT PANEL: Search & List (Scrollable) --- */}
            <div className="w-full md:w-1/3 flex flex-col shrink-0 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-full">
                
                {/* Header & Search */}
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

                {/* Drug List (FIX: List is now based on initialList/filteredDrugs, ensuring clickability) */}
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
                                onClick={() => handleSelectDrug(drug)}
                                className={`p-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer transition-all hover:pl-5 
                                    ${selectedDrug?.id === drug.id 
                                        ? 'bg-blue-100/50 dark:bg-blue-900/30 border-l-4 border-l-blue-600 dark:border-l-blue-400 pl-5' 
                                        : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 border-l-4 border-l-transparent'
                                    }`}
                            >
                                <h3 className={`font-bold text-sm ${selectedDrug?.id === drug.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-800 dark:text-slate-200'}`}>
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

            {/* --- RIGHT PANEL: Detailed Monograph --- */}
            <div className="w-full md:w-2/3 bg-white dark:bg-slate-900 flex flex-col relative flex-1">
                <MonographContent />
            </div>
        </div>
    );
};

export default DrugDictionaryTool;