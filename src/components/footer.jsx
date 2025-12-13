import React from 'react';
import { ShieldAlert, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenTerms }) {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 py-3 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Professional Legal Tile - Compact & Horizontal */}
        <button 
          onClick={onOpenTerms}
          className="group flex items-center gap-3 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-600/50 hover:bg-slate-800 transition-all duration-200"
        >
          <div className="p-1 bg-slate-800 rounded group-hover:bg-blue-900/20 transition-colors">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
          </div>
          <div className="text-left flex flex-col">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide leading-none">Legal & Compliance</span>
            <span className="text-[9px] text-slate-500 leading-none mt-0.5">Terms, Privacy & Disclaimer</span>
          </div>
          <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-500 transition-colors ml-1" />
        </button>
        
        {/* Compact Info Line */}
        <div className="flex flex-col sm:items-end items-center gap-0.5">
          <span className="text-[10px] font-medium text-rose-500/90">Not for life-threatening emergencies.</span>
          <span className="text-[10px] text-slate-600">&copy; {new Date().getFullYear()} ClinicalAssist. All Rights Reserved.</span>
        </div>

      </div>
    </footer>
  );
}