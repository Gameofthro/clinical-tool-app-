import React from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft 
} from "lucide-react";

/** 1. MASTER HEADER: Clean and Educational */
export const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-2 bg-blue-600 rounded-full shrink-0"></div>
    <h2 className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 truncate">
      {title} MASTER
    </h2>
  </div>
);

/** 2. INPUT GROUP: Organizes Value and Unit on one row */
export const InputGroup = ({ field, value, onChange, unitValue, onUnitChange, unitOptions, icon: Icon }) => (
  <div className="flex gap-3 w-full animate-in fade-in duration-500">
    <div className="relative flex items-center flex-1">
      {Icon && <Icon size={20} className="absolute left-4 text-slate-400" />}
      <input 
        type="number" 
        placeholder={field} 
        value={value} 
        onChange={e => onChange(e.target.value)}
        className="w-full py-5 pl-12 pr-4 bg-slate-100 dark:bg-slate-800/80 border-2 border-transparent focus:border-blue-500/50 rounded-2xl font-bold text-base outline-none shadow-inner text-slate-900 dark:text-white transition-all placeholder:text-slate-400/60" 
      />
    </div>
    {unitOptions && (
      <select 
        value={unitValue} 
        onChange={(e) => onUnitChange(e.target.value)}
        className="bg-slate-200 dark:bg-slate-700 rounded-2xl px-5 py-5 font-black text-[13px] text-slate-700 dark:text-slate-200 outline-none shadow-md border-2 border-transparent focus:border-blue-500/50 min-w-[85px]"
      >
        {unitOptions.map(opt => <option key={opt} value={opt}>{opt.toUpperCase()}</option>)}
      </select>
    )}
  </div>
);

/** 3. CALC BUTTON: Wide, high-density clinical bar */
export const CalcButton = ({ onClick, label, color }) => (
  <button 
    onClick={onClick} 
    className={`w-full py-6 mt-8 ${color} text-white font-black rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-all uppercase tracking-[0.25em] text-[13px] flex items-center justify-between px-10 group`}
  >
    <span className="flex-1 text-center font-black">{label}</span>
    <ChevronRight size={24} strokeWidth={4} className="group-active:translate-x-1 transition-transform" />
  </button>
);

/** 4. MASTERY CARD: Edge-to-edge results for mobile */
export const MasteryCard = ({ result }) => {
  if (!result) return null;
  const val = result.absoluteGfr || result.advancedRate || result.value;
  const unit = result.absoluteGfr ? "mL/min (Absolute)" : result.unit;

  return (
    <div className="mt-10 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-100 dark:border-slate-800 w-full">
      <div className={`p-10 ${result.isCritical ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
        <span className="inline-block bg-white/20 text-[10px] font-black px-6 py-2 rounded-full border border-white/30 uppercase tracking-widest mb-6">
          {result.status}
        </span>
        <div className="flex flex-col">
          <span className="text-8xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-lg font-bold opacity-80 uppercase tracking-widest mt-2">{unit}</span>
        </div>
      </div>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-2">Theoretical Staging</p>
            <p className="text-[16px] font-bold text-slate-700 dark:text-slate-100 leading-snug">{result.interpretation}</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <p className="text-[11px] font-black text-orange-500 uppercase tracking-widest mb-2">Simulated Action Plan</p>
            <p className="text-[16px] font-bold text-slate-700 dark:text-slate-100 leading-snug">{result.actionPlan}</p>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-2 mb-3 text-blue-500">
             <BookOpen size={20} />
             <span className="text-[10px] font-black uppercase tracking-wider">Simulation Pearl</span>
           </div>
           <p className="text-[14px] font-bold text-slate-500 dark:text-slate-400 italic leading-loose">
             "{result.masteryInsight}"
           </p>
        </div>
      </div>
    </div>
  );
};

/** 5. ADVANCED TOGGLE: Expandable educational parameters */
export const AdvancedToggle = ({ children, isOpen, onToggle }) => (
  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
    <button 
      onClick={onToggle} 
      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500/80 hover:text-blue-600 transition-all"
    >
      <div className={`p-1.5 rounded-full border-2 border-blue-500/30 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown size={14}/>
      </div>
      {isOpen ? "Standard Simulation" : "Advanced Mastery Parameters"}
    </button>
    {isOpen && <div className="mt-4 space-y-4 animate-in slide-in-from-top-4 duration-500">{children}</div>}
  </div>
);