import React from 'react';
import { ChevronRight, BookOpen, Activity, ChevronDown, ChevronUp } from "lucide-react";

/** RESTORED: Professional Master Header */
export const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-2 bg-blue-600 rounded-full shrink-0"></div>
    <h2 className="text-[13px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 truncate">
      {title} MASTER
    </h2>
  </div>
);

/** ORGANIZED INPUT: Combined Value + Unit select for Mobile */
export const InputGroup = ({ field, value, onChange, unitValue, onUnitChange, unitOptions, icon: Icon }) => (
  <div className="flex gap-2 w-full">
    <div className="relative flex items-center flex-1">
      {Icon && <Icon size={18} className="absolute left-4 text-slate-400" />}
      <input 
        type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
        className="w-full py-5 pl-12 pr-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-transparent focus:border-blue-500/50 rounded-2xl font-bold text-base outline-none shadow-inner text-slate-900 dark:text-white transition-all" 
      />
    </div>
    {unitOptions && (
      <select 
        value={unitValue} onChange={(e) => onUnitChange(e.target.value)}
        className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-4 py-5 font-black text-[12px] text-slate-700 dark:text-slate-200 outline-none shadow-md border-2 border-transparent focus:border-blue-500/50"
      >
        {unitOptions.map(opt => <option key={opt} value={opt}>{opt.toUpperCase()}</option>)}
      </select>
    )}
  </div>
);

/** FIXED ANALYZE BAR: Wide, High-Density, Full Sentence */
export const CalcButton = ({ onClick, label, color }) => (
  <button 
    onClick={onClick} 
    className={`w-full py-6 mt-8 ${color} text-white font-black rounded-[1.5rem] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[13px] flex items-center justify-between px-8 group`}
  >
    <span className="flex-1 text-center">{label}</span>
    <ChevronRight size={22} strokeWidth={3} className="group-active:translate-x-1 transition-transform" />
  </button>
);

/** FULL SCREEN INTERPRETATION CARD */
export const MasteryInterpretationCard = ({ result }) => {
  if (!result) return null;
  const val = result.absoluteGfr || result.advancedRate || result.value;
  const unit = result.absoluteGfr ? "mL/min (Absolute)" : result.unit;

  return (
    <div className="mt-10 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100 dark:border-slate-800 w-full">
      <div className={`p-10 ${result.isCritical ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
        <span className="inline-block bg-white/20 text-[10px] font-black px-5 py-2 rounded-full border border-white/30 uppercase tracking-widest mb-6">{result.status}</span>
        <div className="flex flex-col">
          <span className="text-7xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-base font-bold opacity-80 uppercase tracking-widest mt-2">{unit}</span>
        </div>
      </div>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-1">Theoretical Interpretation</p>
            <p className="text-[15px] font-bold text-slate-700 dark:text-slate-200 leading-snug">{result.interpretation}</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <p className="text-[11px] font-black text-orange-500 uppercase tracking-widest mb-1">Learning Simulation Plan</p>
            <p className="text-[15px] font-bold text-slate-700 dark:text-slate-200 leading-snug">{result.actionPlan}</p>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-[2rem] relative border border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-2 mb-3 text-blue-500"><BookOpen size={18} /><span className="text-[10px] font-black uppercase tracking-wider">Simulation Insight</span></div>
           <p className="text-[13px] font-bold text-slate-600 dark:text-slate-400 italic leading-loose">"{result.masteryInsight}"</p>
        </div>
      </div>
    </div>
  );
};