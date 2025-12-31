import React from 'react';
import { ChevronRight, BookOpen, Activity, ChevronDown, ChevronUp } from "lucide-react";

export const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-1.5 bg-blue-600 rounded-full shrink-0"></div>
    <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 truncate">
      {title} MASTER
    </h2>
  </div>
);

export const Input = ({ field, value, onChange, icon: Icon }) => (
  <div className="relative flex items-center w-full">
    {Icon && <Icon size={18} className="absolute left-4 text-slate-400" />}
    <input 
      type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
      className="w-full py-5 pl-12 pr-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-transparent focus:border-blue-500/50 rounded-2xl font-bold text-sm outline-none shadow-inner text-slate-900 dark:text-white transition-all placeholder:text-slate-400/60" 
    />
  </div>
);

export const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-700 rounded-xl px-5 py-4 font-black text-[11px] text-slate-700 dark:text-slate-200 outline-none appearance-none min-w-[70px] text-center"
  >
    {options.map(opt => <option key={opt} value={opt} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">{opt.toUpperCase()}</option>)}
  </select>
);

export const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-5.5 mt-6 ${color} text-white font-black rounded-full shadow-lg active:scale-95 transition-all uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3`}>
    {label} <ChevronRight size={20} strokeWidth={3} />
  </button>
);

export const MasteryInterpretationCard = ({ result }) => {
  if (!result) return null;
  const val = result.absoluteGfr || result.advancedRate || result.value;
  const unit = result.absoluteGfr ? "mL/min (Absolute)" : result.unit;

  return (
    <div className="mt-8 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100 dark:border-slate-800">
      <div className={`p-8 ${result.isCritical ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
        <span className="inline-block bg-white/20 text-[9px] font-black px-4 py-1.5 rounded-full border border-white/30 uppercase tracking-widest mb-4">{result.status}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-7xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-sm font-bold opacity-80 uppercase">{unit}</span>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 border-l-2 border-blue-500 pl-3">Interpretation</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-snug">{result.interpretation}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 border-l-2 border-orange-500 pl-3">Theoretical Plan</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-snug">{result.actionPlan}</p>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl relative border border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-2 mb-2 text-blue-500"><BookOpen size={16} /><span className="text-[9px] font-black uppercase">Simulation Insight</span></div>
           <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 italic leading-snug">"{result.masteryInsight}"</p>
        </div>
      </div>
    </div>
  );
};

export const AdvancedToggle = ({ children, isOpen, onToggle }) => (
  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
    <button onClick={onToggle} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500/80">
      <div className={`p-1 rounded-full border border-blue-500/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}><ChevronDown size={12}/></div>
      {isOpen ? "Standard Modeling" : "Advanced mastery Parameters"}
    </button>
    {isOpen && <div className="mt-4 space-y-4 animate-in slide-in-from-top-4">{children}</div>}
  </div>
);