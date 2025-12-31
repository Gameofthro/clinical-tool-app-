import React from 'react';
import { ChevronRight, BookOpen, Activity, ChevronDown, ChevronUp } from "lucide-react";

/** Clean Learning Header */
export const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-1.5 bg-blue-600 rounded-full"></div>
    <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
      {title}
    </h2>
  </div>
);

/** Organized Input: High-Contrast, Balanced Padding */
export const Input = ({ field, value, onChange, icon: Icon }) => (
  <div className="relative flex items-center w-full">
    {Icon && <Icon size={18} className="absolute left-4 text-slate-400" />}
    <input 
      type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
      className="w-full py-4.5 pl-12 pr-4 bg-slate-50 dark:bg-slate-800/60 border-2 border-transparent focus:border-blue-500/50 rounded-2xl font-bold text-sm outline-none shadow-inner text-slate-900 dark:text-white transition-all placeholder:text-slate-400/60" 
    />
  </div>
);

/** Consistent Dropdown */
export const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-700 rounded-xl px-4 py-4 font-black text-[11px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer appearance-none shadow-sm min-w-[80px] text-center"
  >
    {options.map(opt => <option key={opt} value={opt} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">{opt.toUpperCase()}</option>)}
  </select>
);

/** Restored Bold Button */
export const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-5 mt-6 ${color} text-white font-black rounded-2xl shadow-lg active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3`}>
    {label} <ChevronRight size={20} strokeWidth={3} />
  </button>
);

/** Perfectly Organized Interpretation Card */
export const MasteryInterpretationCard = ({ result }) => {
  if (!result) return null;
  const val = result.absoluteGfr || result.advancedRate || result.value;
  const unit = result.absoluteGfr ? "mL/min (Absolute)" : result.unit;

  return (
    <div className="mt-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100 dark:border-slate-800">
      {/* Result Header */}
      <div className={`p-8 ${result.isCritical ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white/20 text-[9px] font-black px-4 py-1.5 rounded-full border border-white/30 uppercase tracking-widest">{result.status}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-sm font-bold opacity-80 uppercase">{unit}</span>
        </div>
      </div>
      
      {/* Organized Content */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 border-l-2 border-blue-500 pl-3">Interpretation</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{result.interpretation}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 border-l-2 border-orange-500 pl-3">Study Plan</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{result.actionPlan}</p>
          </div>
        </div>
        
        {/* Concise Educational Pearl */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl relative">
          <div className="flex items-center gap-2 mb-2 text-blue-500"><BookOpen size={16} /><span className="text-[9px] font-black uppercase">Study Pearl</span></div>
          <p className="text-[12px] font-bold text-slate-500 dark:text-slate-400 italic leading-snug">"{result.masteryInsight}"</p>
        </div>
      </div>
    </div>
  );
};

export const AdvancedToggle = ({ children, isOpen, onToggle }) => (
  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
    <button onClick={onToggle} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500/80 transition-all">
      <div className={`p-1 rounded-full border border-blue-500/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}><ChevronDown size={12}/></div>
      {isOpen ? "Standard Simulation" : "Advanced mastery Parameters"}
    </button>
    {isOpen && <div className="mt-4 space-y-4 animate-in slide-in-from-top-4 duration-300">{children}</div>}
  </div>
);