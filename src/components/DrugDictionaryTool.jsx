import React, { useState, useMemo, useEffect } from 'react';
import { Search, Pill, AlertTriangle, Activity, ExternalLink } from 'lucide-react';
// Attempt to import the external database (reverts to placeholder if broken)
import { drugDatabase as importedDrugDatabase } from '../data/drug_database';

// Consolidated Placeholder Data for guaranteed functionality if import fails
const FALLBACK_DRUGS = [
    { id: 9901, drug_name: "Budesonide", pharmacologic_class: ["Corticosteroid", "Inhaled"], indications_and_moa: [{indication: "Asthma Maintenance", mechanism_of_action: "Potent anti-inflammatory."}], common_side_effects: ["Oral Candidiasis", "Headache"], adverse_drug_events: ["Adrenal Suppression", "Glaucoma"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 9902, drug_name: "Metformin", pharmacologic_class: ["Biguanide", "Antidiabetic"], indications_and_moa: [{indication: "Type 2 Diabetes", mechanism_of_action: "Decreases hepatic glucose production."}], common_side_effects: ["Diarrhea", "Nausea", "Metallic taste"], adverse_drug_events: ["Lactic Acidosis (Boxed Warning)", "Vitamin B12 Deficiency"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 9903, drug_name: "Amlodipine", pharmacologic_class: ["Calcium Channel Blocker"], indications_and_moa: [{indication: "Hypertension", mechanism_of_action: "Inhibits calcium influx; causes vasodilation."}], common_side_effects: ["Peripheral Edema", "Headache", "Flushing"], adverse_drug_events: ["Severe Hypotension", "Gingival Hyperplasia"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
    { id: 9904, drug_name: "Thalidomide", pharmacologic_class: ["Immunomodulator", "Antineoplastic"], indications_and_moa: [{indication: "Multiple Myeloma", mechanism_of_action: "Anti-angiogenic; TNF-alpha suppression."}], common_side_effects: ["Somnolence", "Peripheral Neuropathy"], adverse_drug_events: ["Teratogenicity (Boxed Warning)", "Thromboembolism"], adr_reporting_link: "https://www.accessdata.fda.gov/scripts/medwatch/index.cfm" },
];

// Determine the primary database source for the component
const DRUG_DATA_SOURCE = Array.isArray(importedDrugDatabase) && importedDrugDatabase.length > 0
    ? importedDrugDatabase
    : FALLBACK_DRUGS;


const DrugDictionaryTool = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Initialize selected drug to the first available entry
    const [selectedDrug, setSelectedDrug] = useState(DRUG_DATA_SOURCE[0] || null);
    
    // Filter Logic
    const filteredDrugs = useMemo(() => {
        const cleanedDatabase = DRUG_DATA_SOURCE.filter(d => d && d.drug_name);

        if (!searchTerm) return cleanedDatabase;
        
        const lowerSearchTerm = searchTerm.toLowerCase();
        
        return cleanedDatabase.filter(drug => 
            drug.drug_name.toLowerCase().includes(lowerSearchTerm) ||
            (Array.isArray(drug.pharmacologic_class) && drug.pharmacologic_class.some(cls => cls.toLowerCase().includes(lowerSearchTerm)))
        );
    }, [searchTerm]);

    const handleSelectDrug = (drug) => {
        setSelectedDrug(drug);
    };
    
    const MonographContent = () => {
        const drug = selectedDrug;
        if (!drug) return (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600 p-8 text-center bg-slate-50/50 dark:bg-slate-900/50">
                <Pill size={80} className="mb-6 opacity-30 text-blue-500" />
                <p className="text-xl font-bold text-slate-500 dark:text-slate-400">Select a drug to view details</p>
                <p className="text-sm mt-2 max-w-xs font-medium opacity-70">
                    Browse the list on the left to view detailed pharmacology, mechanism of action, and safety data.
                </p>
            </div>
        );

        return (
            // Monograph Content: Ensures internal scrolling via flex-1 and overflow-y-auto
            <div id="monographContent" className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {drug.drug_name}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  {drug.pharmacologic_class && Array.isArray(drug.pharmacologic_class) && drug.pharmacologic_class.map((cls, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

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
        );
    }

    return (
        // Component rendered directly into the app tab
        <div className="w-full h-[70vh] flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl bg-white dark:bg-slate-900">
            
            {/* --- LEFT PANEL: Search & List (Scrollable) --- */}
            <div className="w-full md:w-1/3 flex flex-col shrink-0 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                
                {/* Header & Search */}
                <div className="p-4 shrink-0 border-b border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2"><Pill size={20} className="text-blue-600"/> Drug Index</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search drug names or classes..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Drug List (FIXED SCROLL) */}
                <div className="flex-1 overflow-y-auto">
                    {DRUG_DATA_SOURCE.length === 0 && (
                         <div className="p-4 bg-red-100 text-red-800 text-sm font-bold border-l-4 border-red-500">
                            CRITICAL ERROR: Database failed to load. Showing fallback data.
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