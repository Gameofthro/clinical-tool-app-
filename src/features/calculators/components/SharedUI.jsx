import React, { useState } from 'react';
import { 
  ChevronRight, Info, AlertOctagon, BookOpen, 
  ChevronDown, ChevronUp, Activity 
} from "lucide-react";

/** 1. Master Header with Tooltip support */
export const HeaderSection = ({ title, subtitle }) => (
  <div className="flex flex-col gap-1 mb-6">
    <div className="flex items-center gap-2">
      <div className="w-8 h-1.5 bg-blue-600 rounded-full"></div>
      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {title} MASTER TOOL
      </h2>
    </div>
    {subtitle && <p className="text-[10px] text-slate-400 italic ml-10">{subtitle}</p>}
  </div>
);

/** 2. Advanced Parameters Toggle (The "Expert Mode" Switch) */
export const AdvancedToggle = ({ children, isOpen, onToggle }) => (
  <div className="mt-2 border-t border-slate-100 dark:border-slate-800 pt-2">
    <button 
      onClick={onToggle}
      className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-600 transition-colors"
    >
      {isOpen ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
      {isOpen ? "Hide Advanced Parameters" : "Show Advanced Parameters (Increases Precision)"}
    </button>
    {isOpen && <div className="mt-3 grid grid-cols-1 gap-3 animate-in slide-in-from-top-2 duration-300">{children}</div>}
  </div>
);

/** 3. Master Interpretation Card (The "Learning" Panel) */
export const MasteryInterpretationCard = ({ result }) => {
  if (!result) return null;

  const isCritical = result.isCritical;
  
  return (
    <div className={`mt-6 overflow-hidden rounded-[1.5rem] border-2 transition-all ${
      isCritical ? 'border-red-500/20 bg-red-50/30' : 'border-blue-500/10 bg-slate-50/50'
    }`}>
      {/* Result Value Header */}
      <div className={`p-5 ${isCritical ? 'bg-red-500' : 'bg-blue-600'}`}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black text-white/70 uppercase tracking-widest">Calculated Result</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">{result.value}</span>
              <span className="text-sm font-bold text-white/80">{result.unit}</span>
            </div>
          </div>
          {isCritical && <AlertOctagon className="text-white animate-pulse" size={24} />}
        </div>
        <p className="mt-2 text-xs font-black text-white uppercase tracking-wider bg-white/20 inline-block px-2 py-1 rounded">
          {result.status}
        </p>
      </div>

      {/* Clinical Intelligence Sections */}
      <div className="p-5 space-y-4">
        {/* Interpretation */}
        <div className="flex gap-3">
          <Activity size={16} className="text-blue-500 shrink-0 mt-1" />
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Clinical Interpretation</p>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed">{result.interpretation}</p>
          </div>
        </div>

        {/* Action Plan */}
        <div className="flex gap-3">
          <AlertOctagon size={16} className="text-orange-500 shrink-0 mt-1" />
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Immediate Action Plan</p>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-relaxed">{result.actionPlan}</p>
          </div>
        </div>

        {/* Mastery Insight (The "Educational" Part) */}
        <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={14} className="text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 uppercase">Mastery Insight</span>
          </div>
          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed italic">
            "{result.masteryInsight}"
          </p>
        </div>
      </div>
    </div>
  );
};

// Re-exporting basic components for backward compatibility/simple usage
export const Input = ({ field, value, onChange, icon: Icon }) => (
  <div className="relative flex items-center">
    {Icon && <Icon size={14} className="absolute left-3 text-slate-400" />}
    <input 
      type="number" 
      placeholder={field} 
      value={value} 
      onChange={e => onChange(e.target.value)}
      className={`w-full p-3 ${Icon ? 'pl-10' : 'pl-4'} bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-blue-500/50 shadow-inner text-blue-600 dark:text-blue-400 placeholder:text-slate-400 transition-all`} 
    />
  </div>
);

export const CalcButton = ({ onClick, label, color }) => (
  <button 
    onClick={onClick} 
    className={`w-full py-4 mt-4 ${color} text-white font-black rounded-2xl shadow-lg active:scale-95 transition-all uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-2`}
  >
    {label} <ChevronRight size={16} />
  </button>
);