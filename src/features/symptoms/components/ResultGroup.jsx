import React from 'react';
import { ChevronRight, BookOpen, GraduationCap } from 'lucide-react';

export const ResultGroup = ({ title, results, onSelect }) => {
    if (!results || results.length === 0) return null;

    return (
        <section className="mb-6">
            {/* Header with High-Contrast Accent */}
            <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-1.5 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/20"></div>
                <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{title}</h4>
            </div>

            {/* High-Density Grid Layout */}
            <div className="grid grid-cols-1 gap-3">
                {results.map((r) => (
                    <div 
                        key={r.id} 
                        onClick={() => onSelect(r)} 
                        className={`group relative mx-1 bg-white dark:bg-[#1e293b] rounded-2xl border-2 transition-all active:scale-[0.96] hover:border-blue-500/50 cursor-pointer flex flex-col overflow-hidden shadow-sm hover:shadow-xl ${r.isCritical ? 'border-rose-500/10' : 'border-slate-100 dark:border-slate-800'}`}
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>

                        <div className="p-4 flex items-center justify-between">
                            <div className="flex-1 flex items-center gap-3">
                                {/* Compact Category Icon */}
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 shadow-inner group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                                    <GraduationCap className="text-slate-400 group-hover:text-white transition-colors" size={20} />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[7px] font-black text-blue-500 uppercase tracking-tighter mb-0.5">
                                        {r.category || 'Clinical Module'}
                                    </span>
                                    <h3 className="font-black text-sm text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors leading-none">
                                        {r.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Status Badge for Critical Cases */}
                                {r.isCritical && (
                                    <div className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20">
                                        <span className="text-[7px] font-bold text-rose-500 uppercase">Priority</span>
                                    </div>
                                )}
                                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-all group-hover:translate-x-1" size={18} />
                            </div>
                        </div>

                        {/* Subtle Academic Footer */}
                        <div className="px-4 py-2 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <BookOpen size={10} className="text-blue-500 opacity-70" />
                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">
                                    Study Reference Available
                                </span>
                            </div>
                            <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                Explore Case
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};