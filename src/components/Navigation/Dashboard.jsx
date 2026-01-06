import React from 'react';
import { Search, Pill, ClipboardList, Calculator, ArrowUpRight, UserCircle } from 'lucide-react';

const tiles = [
  { id: "search", label: "disease Search", icon: Search, desc: "1,000+ Peer-Reviewed Monographs", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { id: "drug-index", label: "Drug Index", icon: Pill, desc: "FDA Monograms & Dosing Guides", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { id: "clinical-index", label: "DIFFERENTIAL REFERENCE", icon: ClipboardList, desc: "Academic Database for Study & Research", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { id: "tools", label: "Calculators", icon: Calculator, desc: "Academic Metric Simulations", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" }
];

export default function Dashboard({ onNavigate, user }) {
  // Fallback for user name if prop is missing or empty
  const displayName = user?.displayName || "Guest";

  return (
    <div className="flex flex-col space-y-6 py-8 animate-in fade-in duration-1000">
      
      {/* 1. PERSONALIZED GREETING: The Psychological Hook */}
      <div className="px-2 mb-2">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/10 rounded-full">
            <UserCircle size={20} className="text-blue-500" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Workspace</p>
            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              Hello, {displayName}
            </h2>
          </div>
        </div>
      </div>

      {/* 2. TILE GRID: High-Density 2x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map((tile) => (
          <button 
            key={tile.id} 
            onClick={() => onNavigate(tile.id)}
            className={`group relative bg-slate-900/60 p-8 rounded-[3rem] border-2 ${tile.border} hover:bg-slate-900 transition-all duration-300 text-left flex flex-col min-h-[190px] shadow-2xl overflow-hidden`}
          >
            {/* Minimal Background Glow */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-20 ${tile.bg}`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${tile.bg} ${tile.color} shadow-lg shadow-black/40`}>
                <tile.icon size={28} />
              </div>
              <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-black text-white uppercase tracking-tight">{tile.label}</h3>
              <p className="text-xs text-slate-500 mt-1.5 font-bold leading-relaxed">{tile.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* 3. AD SPACE: Fixed Adherence */}
      <div className="mt-auto w-full h-28 bg-slate-950 rounded-[3rem] border-2 border-dashed border-slate-800 flex items-center justify-center overflow-hidden">
         <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">Sponsored Placement</span>
      </div>

      <p className="text-[9px] text-slate-400 text-center uppercase tracking-tighter">
        Educational Resource • © 2026 ClinicalAssist
      </p>
    </div>
  );
}