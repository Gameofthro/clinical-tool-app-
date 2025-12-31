import React from 'react';
import { ChevronRight, BookOpen, Activity, ChevronDown, ChevronUp } from "lucide-react";

/** RESTORED: Professional Master Header with Learning focus */
export const HeaderSection = ({ title }) => (
  <div className="mb-10 animate-in fade-in slide-in-from-left duration-700">
    <div className="flex items-center gap-4">
      <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
      <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
        {title} LEARNING TOOL
      </h2>
    </div>
    {/* Subtitle subtitle/CDSS line removed */}
  </div>
);
export const Input = ({ field, value, onChange, icon: Icon }) => (
  <div className="relative flex items-center w-full group">
    {Icon && <Icon size={18} className="absolute left-5 text-slate-400 group-focus-within:text-blue-500 transition-all" />}
    <input 
      type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
      className="w-full py-5 pl-14 pr-5 bg-slate-50 dark:bg-slate-800/40 border-2 border-transparent focus:border-blue-500/40 rounded-[2rem] font-bold text-base outline-none shadow-inner text-slate-900 dark:text-white transition-all placeholder:text-slate-400/60" 
    />
  </div>
);

export const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-700/60 border-none rounded-[1.5rem] px-6 py-4 font-black text-[12px] text-slate-700 dark:text-slate-200 outline-none cursor-pointer appearance-none shadow-sm"
  >
    {options.map(opt => <option key={opt} value={opt} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">{opt.toUpperCase()}</option>)}
  </select>
);

export const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-6 mt-8 ${color} text-white font-black rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)] active:scale-[0.97] transition-all uppercase tracking-[0.3em] text-[13px] flex items-center justify-center gap-4`}>
    {label} <ChevronRight size={22} strokeWidth={3} />
  </button>
);

export const MasteryInterpretationCard = ({ result }) => {
  if (!result) return null;
  const val = result.absoluteGfr || result.advancedRate || result.value;
  const unit = result.absoluteGfr ? "mL/min (Absolute)" : result.unit;

  return (
    <div className="mt-12 rounded-[3.5rem] bg-white dark:bg-slate-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.2)] overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100 dark:border-slate-800">
      <div className={`p-10 ${result.isCritical ? 'bg-gradient-to-br from-red-600 to-rose-700' : 'bg-gradient-to-br from-blue-600 to-indigo-700'} text-white`}>
        <div className="flex justify-between items-center mb-8">
          <span className="bg-white/20 backdrop-blur-md text-[10px] font-black px-6 py-2 rounded-full border border-white/30 uppercase tracking-[0.2em]">{result.status}</span>
          <Activity size={28} className="opacity-40" />
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-8xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-lg font-bold opacity-80 uppercase tracking-widest">{unit}</span>
        </div>
      </div>
      <div className="p-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div><p className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-3 border-l-4 border-blue-500 pl-4">Clinical Interpretation</p><p className="text-[16px] font-bold text-slate-700 dark:text-slate-200 leading-relaxed">{result.interpretation}</p></div>
          <div><p className="text-[11px] font-black text-orange-500 uppercase tracking-widest mb-3 border-l-4 border-orange-500 pl-4">Action Plan</p><p className="text-[16px] font-bold text-slate-700 dark:text-slate-200 leading-relaxed">{result.actionPlan}</p></div>
        </div>
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-[2.5rem] relative">
            <div className="absolute -top-5 left-10 bg-blue-600 text-white p-3 rounded-full shadow-lg"><BookOpen size={20} /></div>
            <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 italic leading-loose">"{result.masteryInsight}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdvancedToggle = ({ children, isOpen, onToggle }) => (
  <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
    <button onClick={onToggle} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-blue-500/80 hover:text-blue-600 transition-all">
      <div className={`p-1.5 rounded-full border-2 border-blue-500/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}><ChevronDown size={14}/></div>
      {isOpen ? "Standard Precision" : "Advanced Mastery Parameters"}
    </button>
    {isOpen && <div className="mt-8 space-y-6 animate-in slide-in-from-top-6 duration-500">{children}</div>}
  </div>
);