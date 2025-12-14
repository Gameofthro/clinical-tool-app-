import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, Pill, AlertTriangle, Activity, ExternalLink, Sun, Moon } from 'lucide-react';
import { drugDatabase } from '../data/drug_database';

const DrugDirectory = ({ isOpen, onClose, initialDrugName = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState(null);
  
  // Initialize state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchTerm(initialDrugName);
      if (initialDrugName) {
        const lowerInitialName = initialDrugName.toLowerCase();
        // Safety check for drug data structure consistency
        const safeDrugDatabase = Array.isArray(drugDatabase) ? drugDatabase : [];
        const found = safeDrugDatabase.find(d => 
          d.drug_name && d.drug_name.toLowerCase() === lowerInitialName
        );
        if (found) {
          setSelectedDrug(found);
        } else {
          setSelectedDrug(null);
        }
      } else {
        setSelectedDrug(null);
      }
    }
  }, [isOpen, initialDrugName]);

  // Filter Logic
  const filteredDrugs = useMemo(() => {
    // Safety check for drugDatabase being available/array
    const safeDrugDatabase = Array.isArray(drugDatabase) ? drugDatabase : [];
    if (!searchTerm) return safeDrugDatabase;
    return safeDrugDatabase.filter(drug => 
      drug.drug_name && drug.drug_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    // Outer fixed container: z-[200] ensures it is always on top.
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity">
      
      {/* Main Card Container: Fixed height, using flex-col/md:flex-row to manage space */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-6xl h-[95vh] sm:h-[85vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-700 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
        
        {/* --- LEFT PANEL: Search & List (flex-col container for header + scrollable list) --- */}
        <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 flex flex-col shrink-0 md:h-full">
          
          {/* Header & Search (Fixed height: shrink-0) */}
          <div className="p-4 border-b border-slate-200 dark:bg-slate-800 shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Pill className="text-blue-600 dark:text-blue-400" />
                Drug Index
              </h2>
              <div className="flex gap-2">
                {/* Close Button */}
                <button onClick={onClose} className="p-2 text-slate-500 hover:text-red-500 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search generics..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Scrollable List (FIX: flex-1 ensures it takes remaining vertical space for scrolling) */}
          <div className="flex-1 overflow-y-auto">
            {filteredDrugs.map(drug => (
              <div
                key={drug.id}
                onClick={() => setSelectedDrug(drug)}
                className={`p-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer transition-all hover:pl-5 
                  ${selectedDrug?.id === drug.id 
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-l-blue-600 dark:border-l-blue-400 pl-5' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 border-l-4 border-l-transparent'
                  }`}
              >
                <h3 className={`font-bold text-sm ${selectedDrug?.id === drug.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-800 dark:text-slate-200'}`}>
                  {drug.drug_name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1 font-medium">
                  {drug.pharmacologic_class.join(', ')}
                </p>
              </div>
            ))}
            {filteredDrugs.length === 0 && (
              <div className="p-8 text-center text-slate-400 italic">No drugs found matching "{searchTerm}"</div>
            )}
          </div>
        </div>

        {/* --- RIGHT PANEL: Detailed Monograph --- */}
        <div className="w-full md:w-2/3 bg-white dark:bg-slate-900 flex flex-col relative flex-1">
          
          {/* Desktop Close Button (Positioned absolutely over the content) */}
          <button 
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:text-slate-400 transition-colors z-20 shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <X size={20} />
          </button>

          {selectedDrug ? (
            /* Scrollable Monograph Content (FIX: flex-1 ensures it takes vertical space, overflow-y-auto makes it scroll) */
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              {/* Header Title Area */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-text-white tracking-tight">
                    {selectedDrug.drug_name}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDrug.pharmacologic_class.map((cls, index) => (
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
                  {selectedDrug.indications_and_moa.map((item, idx) => (
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
                    {selectedDrug.common_side_effects.map((effect, idx) => (
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
                    {selectedDrug.adverse_drug_events.map((event, idx) => (
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
                  href={selectedDrug.adr_reporting_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                >
                  <ExternalLink size={16} /> FDA Reporting Site
                </a>
              </div>

            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600 p-8 text-center bg-slate-50/50 dark:bg-slate-900/50">
              <Pill size={80} className="mb-6 opacity-10" />
              <p className="text-2xl font-bold text-slate-500 dark:text-slate-400">Select a drug</p>
              <p className="text-sm mt-2 max-w-xs font-medium opacity-70">
                Browse the list on the left to view detailed pharmacology, mechanism of action, and safety data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrugDirectory;