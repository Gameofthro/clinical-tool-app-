/**
 * COMPONENT: Clinical Dashboard
 * * DESCRIPTION: 
 * The primary entry point for all app features. Displays large, high-contrast 
 * tiles for Search, Drugs, Diagnosis, and Calculators.
 * * ENHANCEMENTS: 
 * Added "Micro-interactions" (scaling on hover) and "Visual Cues" (distinct 
 * brand colors per feature) to improve user recognition speed.
 */

import React from 'react';
import { Search, Pill, ClipboardList, Calculator, ChevronRight } from 'lucide-react';

// Data configuration for the dashboard tiles
const tiles = [
  { 
    id: "search", 
    label: "Disease Search", 
    icon: Search, 
    desc: "Guidelines, Pathophysiology & Evidence-based Protocols.", 
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20"
  },
  { 
    id: "drug-index", 
    label: "Drug Index", 
    icon: Pill, 
    desc: "Pharmacology, FDA Labels & Adverse Event Monitoring.", 
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  { 
    id: "diagnosis", 
    label: "Symptom Checker", 
    icon: ClipboardList, 
    desc: "Differential Diagnosis & Clinical Presentation Review.", 
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20"
  },
  { 
    id: "tools", 
    label: "Calculators", 
    icon: Calculator, 
    desc: "Pediatric Dosing, eGFR, BMI & IV Fluid Dynamics.", 
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20"
  }
];

export default function Dashboard({ onNavigate }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-6 animate-in fade-in zoom-in-95 duration-500">
      {tiles.map((tile) => (
        <button 
          key={tile.id} 
          onClick={() => onNavigate(tile.id)}
          className="group relative bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex flex-col h-full overflow-hidden"
        >
          {/* Background Decoration for Premium Feel */}
          <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150 ${tile.bg}`}></div>

          <div className="flex justify-between items-start mb-6">
            <div className={`p-4 rounded-2xl ${tile.bg} ${tile.color} shadow-sm group-hover:rotate-3 transition-transform`}>
              <tile.icon size={28} />
            </div>
            <div className="flex items-center gap-1 text-slate-300 dark:text-slate-700">
               <span className="text-[9px] font-black uppercase tracking-[0.25em]">{tile.id}</span>
               <ChevronRight size={12} />
            </div>
          </div>

          <div className="mt-auto">
            <h3 className="text-xl font-black text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tile.label}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
              {tile.desc}
            </p>
          </div>
          
          {/* Interaction Indicator */}
          <div className="mt-6 w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full w-0 group-hover:w-full transition-all duration-500 ${tile.color.replace('text', 'bg')}`}></div>
          </div>
        </button>
      ))}
    </div>
  );
}