import React from 'react';
import { X, Pill, AlertTriangle, Activity, BookOpen, ListChecks, ShieldAlert } from 'lucide-react';

export default function MonographModal({ drug, isOpen, onClose }) {
    if (!isOpen || !drug) return null;

    // Logic: Scans the MOA for safety keywords to create educational pearls
    const pearls = drug.indications_and_moa?.[0]?.mechanism_of_action
        .split('.')
        .filter(s => s.toLowerCase().includes('avoid') || s.toLowerCase().includes('monitor') || s.toLowerCase().includes('caution'))
        .slice(0, 3);

    return (
        <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center bg-slate-900/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-[#0f172a] w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-[3rem] max-h-[94vh] overflow-hidden flex flex-col shadow-2xl border-t sm:border border-slate-200 dark:border-slate-800">
                
                {/* 1. FIXED HEADER: Identity & Class */}
                <div className="p-8 pb-6 border-b border-slate-100 dark:border-slate-800 shrink-0 relative">
                    <button onClick={onClose} className="absolute right-6 top-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-rose-500 transition-colors">
                        <X size={20}/>
                    </button>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                        {drug.pharmacologic_class?.map((cls, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-black rounded-lg uppercase border border-blue-500/20 tracking-widest">
                                {cls}
                            </span>
                        ))}
                    </div>
                    
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-1">
                        {drug.drug_name}
                    </h2>
                </div>

                {/* 2. SCROLLABLE BODY: Full Database Details */}
                <div className="flex-1 overflow-y-auto p-8 pt-6 space-y-10 no-scrollbar pb-24">
                    
                    {/* EDUCATIONAL PEARLS SECTION */}
                    {pearls.length > 0 && (
                        <section className="bg-amber-500/5 border-l-4 border-amber-500 p-5 rounded-r-3xl">
                            <h4 className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-500 flex items-center gap-2 mb-3 tracking-widest">
                                <BookOpen size={14}/> Clinical Pearls
                            </h4>
                            <ul className="space-y-3">
                                {pearls.map((p, i) => (
                                    <li key={i} className="text-xs font-semibold text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                        • {p.trim()}.
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* FULL PHARMACOLOGY */}
                    <section>
                        <h4 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 mb-4 tracking-widest">
                            <Activity size={14} className="text-blue-500" /> Indications & Mechanism
                        </h4>
                        <div className="space-y-4">
                            {drug.indications_and_moa?.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-inner">
                                    <div className="mb-4">
                                        <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">Clinical Indication</span>
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.indication}</p>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-1">Pharmacodynamics</span>
                                        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">{item.mechanism_of_action}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SAFETY PROFILE: SIDE EFFECTS & ADVERSE EVENTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Common Side Effects */}
                        <section>
                            <h4 className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 mb-4 tracking-widest">
                                <ListChecks size={14} className="text-emerald-500" /> Common Side Effects
                            </h4>
                            <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-3xl">
                                <ul className="space-y-2">
                                    {drug.common_side_effects?.map((effect, idx) => (
                                        <li key={idx} className="text-[12px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">•</span> {effect}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Adverse Drug Events */}
                        <section>
                            <h4 className="text-[10px] font-black uppercase text-rose-500 flex items-center gap-2 mb-4 tracking-widest">
                                <ShieldAlert size={14} /> Adverse Events
                            </h4>
                            <div className="bg-rose-500/5 border border-rose-500/10 p-5 rounded-3xl">
                                <ul className="space-y-2">
                                    {drug.adverse_drug_events?.map((event, idx) => (
                                        <li key={idx} className="text-[12px] font-bold text-rose-700 dark:text-rose-400 flex items-start gap-2">
                                            <span className="mt-1">!</span> {event}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}