import React from 'react';
import { ChevronRight, ShieldAlert, Zap, Activity } from 'lucide-react';

export const ResultGroup = ({ title, results, onSelect }) => {
    if (!results || results.length === 0) return null;

    return (
        <section className="mb-10">
            <div className="flex items-center gap-3 mb-5 px-6">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <h4 className="text-[11px] font-black uppercase text-slate-500 tracking-[0.25em]">{title}</h4>
            </div>
            
            <div className="space-y-5 px-4">
                {results.map((r) => (
                    <div 
                        key={r.id} 
                        onClick={() => onSelect(r)}
                        className={`w-full text-left bg-[#1e293b] rounded-[2rem] border-2 transition-all active:scale-[0.97] cursor-pointer shadow-xl flex flex-col group overflow-hidden ${r.isCritical ? 'border-rose-500/20' : 'border-slate-800'}`}
                    >
                        <div className="p-7 flex items-start justify-between">
                            <div className="flex-1 pr-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/20">
                                        {r.category || 'General Clinical'}
                                    </span>
                                    {r.isCritical && (
                                        <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1.5 rounded-xl border border-rose-500/20 flex items-center gap-1.5">
                                            <ShieldAlert size={10} /> Urgent
                                        </span>
                                    )}
                                </div>
                                
                                <h3 className="font-black text-xl text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                                    {r.name}
                                </h3>

                                <p className="text-[13px] font-medium text-slate-400 mt-3 line-clamp-2 leading-relaxed opacity-80">
                                    {r.pathophysiology || "Clinical analysis based on identified feature clusters."}
                                </p>
                            </div>

                            <div className="w-14 h-14 rounded-[1.5rem] bg-slate-900 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-blue-600 transition-all duration-300">
                                <ChevronRight className="text-slate-400 group-hover:text-white" size={28} />
                            </div>
                        </div>

                        <div className="px-7 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Zap size={14} className="text-amber-500 fill-amber-500/20" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">
                                        {r.matchedFeatures.length} Markers
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
                                    <Activity size={14} className="text-blue-500" />
                                    <span className={`text-[10px] font-black uppercase tracking-tight ${r.colorClass}`}>
                                        {r.correlationLevel}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                View Protocol
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};