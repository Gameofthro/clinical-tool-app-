import React from 'react';
import { ChevronRight, Info, Stethoscope } from "lucide-react";

export const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
    <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title} TOOL</h2>
  </div>
);

export const Input = ({ field, value, onChange }) => (
  <input 
    type="number" 
    placeholder={field} 
    value={value} 
    onChange={e => onChange(e.target.value)}
    className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-sm outline-none border border-transparent focus:border-blue-500 shadow-inner text-blue-600 dark:text-blue-400 placeholder:text-slate-400" 
  />
);

export const UnitSelect = ({ value, onChange, options }) => (
  <select 
    value={value} 
    onChange={e => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-800 rounded-xl px-2 font-black text-[10px] uppercase outline-none text-slate-500 shrink-0"
  >
    {options.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);

export const CalcButton = ({ onClick, label, color }) => (
  <button 
    onClick={onClick} 
    className={`w-full py-3.5 ${color} text-white font-black rounded-xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-[10px]`}
  >
    {label} <ChevronRight className="inline ml-1" size={14} />
  </button>
);

export const ResultBox = ({ value, label, pearl, children }) => (
  <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 animate-in zoom-in-95 mt-4">
    <p className="text-4xl font-black text-blue-600">{value}</p>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
    {pearl && (
      <div className="mt-4 flex gap-2 items-start text-[10px] bg-amber-50 dark:bg-amber-900/30 p-2 rounded-lg border border-amber-200 dark:border-amber-800/50 shadow-sm">
        <Info size={14} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-amber-900 dark:text-amber-200 font-medium leading-tight"><b>Pearl:</b> {pearl}</p>
      </div>
    )}
    {children}
  </div>
);