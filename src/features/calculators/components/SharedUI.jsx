import React from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Info, 
  X, 
  ExternalLink, 
  Activity, 
  ChevronDown 
} from "lucide-react";

export const KnowledgeModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;
  return (
    <div className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl h-[85vh] sm:rounded-[3rem] rounded-t-[3rem] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">{data.title}</h3>
            <p className="text-blue-500 font-bold text-xs uppercase mt-1 tracking-widest">{data.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:bg-red-50 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto space-y-8 no-scrollbar pb-20 text-slate-700 dark:text-slate-200">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold">{data.description}</p>
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl">
            <span className="text-[10px] font-black uppercase opacity-70 tracking-widest">Clinical Formula</span>
            <p className="text-xl font-black mt-2 font-mono tracking-tight">{data.formula}</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-lg flex items-center gap-2">
              <BookOpen size={20} className="text-blue-500" /> Clinical Mastery Pearls
            </h4>
            {data.clinicalPearls.map((p, i) => (
              <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-4 border-blue-500 font-bold text-sm shadow-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// UPDATED: Added isSplit support for Feet/Inches
export const InputGroup = ({ field, value, onChange, unitValue, onUnitChange, unitOptions, icon: Icon, isSplit }) => (
  <div className="flex gap-3 w-full animate-in fade-in duration-500">
    <div className="relative flex items-center flex-1">
      {Icon && <Icon size={20} className="absolute left-4 z-10 text-slate-400" />}
      
      {isSplit ? (
        <div className="flex gap-2 w-full pl-12 pr-2">
           <input 
            type="number" 
            placeholder="Ft" 
            value={value.ft || ''} 
            onChange={e => onChange({type: 'heightFt', val: e.target.value})}
            className="w-1/2 py-5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl font-bold text-center outline-none text-slate-900 dark:text-white" 
          />
          <input 
            type="number" 
            placeholder="In" 
            value={value.in || ''} 
            onChange={e => onChange({type: 'heightIn', val: e.target.value})}
            className="w-1/2 py-5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl font-bold text-center outline-none text-slate-900 dark:text-white" 
          />
        </div>
      ) : (
        <input 
          type="number" 
          placeholder={field} 
          value={value} 
          onChange={e => onChange(e.target.value)}
          className="w-full py-5 pl-12 pr-4 bg-slate-100 dark:bg-slate-800/80 border-2 border-transparent focus:border-blue-500/50 rounded-2xl font-bold text-base outline-none text-slate-900 dark:text-white transition-all placeholder:text-slate-400/60" 
        />
      )}
    </div>
    {unitOptions && (
      <select 
        value={unitValue} 
        onChange={(e) => onUnitChange(e.target.value)}
        className="bg-slate-200 dark:bg-slate-700 rounded-2xl px-4 py-5 font-black text-[11px] text-slate-700 dark:text-slate-200 outline-none shadow-md border-2 border-transparent focus:border-blue-500/50 min-w-[90px]"
      >
        {unitOptions.map(opt => <option key={opt} value={opt}>{opt.toUpperCase()}</option>)}
      </select>
    )}
  </div>
);

export const CalcButton = ({ onClick, label, color }) => (
  <button 
    onClick={onClick} 
    className={`w-full py-6 mt-8 ${color} text-white font-black rounded-2xl shadow-xl active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-[12px] flex items-center justify-between px-10 group`}
  >
    <span className="flex-1 text-center font-black">{label}</span>
    <ChevronRight size={24} strokeWidth={4} />
  </button>
);

export const MasteryCard = ({ result }) => {
  if (!result) return null;
  const val = result.value;
  return (
    <div className="mt-10 rounded-[3rem] bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 w-full animate-in zoom-in-95">
      <div className={`p-10 ${result.isCritical ? 'bg-red-600' : 'bg-blue-600'} text-white text-center`}>
        <span className="inline-block bg-white/20 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest mb-6">{result.status}</span>
        <div className="flex flex-col">
          <span className="text-8xl font-black tracking-tighter leading-none">{val}</span>
          <span className="text-lg font-bold opacity-80 uppercase mt-2">{result.unit}</span>
        </div>
      </div>
      <div className="p-10 space-y-6">
        <div className="border-l-4 border-blue-500 pl-5">
           <p className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-2">Clinical Interpretation</p>
           <p className="text-[16px] font-bold leading-snug">{result.interpretation}</p>
        </div>
        <div className="border-l-4 border-orange-500 pl-5">
           <p className="text-[11px] font-black text-orange-500 uppercase tracking-widest mb-2">Clinical Action Plan</p>
           <p className="text-[16px] font-bold leading-snug">{result.actionPlan}</p>
        </div>
      </div>
    </div>
  );
};

export const HeaderSection = ({ title, onInfoClick }) => (
  <div className="flex items-center justify-between w-full mb-10">
    <div className="flex items-center gap-4">
      <div className="w-10 h-2 bg-blue-600 rounded-full"></div>
      <h2 className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-500">{title}</h2>
    </div>
    <button onClick={onInfoClick} className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full"><Info size={20} /></button>
  </div>
);