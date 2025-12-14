import React from 'react';
import { X, Pill, AlertTriangle, Activity, ExternalLink } from 'lucide-react';

// This modal handles the display and scrolling of a single drug's details.
export default function MonographModal({ drug, isOpen, onClose }) {
    if (!isOpen || !drug) return null;

    return (
        // Outer fixed container (Black/Gray Backdrop)
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            
            {/* Modal Body: Uses flex-col for stacking, max-h-[90vh] for non-stretching size */}
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl relative max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-700">
                
                {/* Header (Fixed height: shrink-0) */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <Pill size={20} className="text-blue-600 dark:text-blue-400"/> Drug Monograph
                        </h2>
                        <button onClick={onClose} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition">
                            <X size={24} />
                        </button>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                        {drug.drug_name}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {drug.pharmacologic_class && Array.isArray(drug.pharmacologic_class) && drug.pharmacologic_class.map((cls, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                          {cls}
                        </span>
                      ))}
                    </div>
                </div>

                {/* Scrollable Content Area (FIX: flex-1 and overflow-y-auto ensures scrolling works reliably) */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                  
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
        </div>
    );
}