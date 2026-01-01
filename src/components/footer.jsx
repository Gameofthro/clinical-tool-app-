import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-2 transition-colors duration-300 shrink-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Psychological Medical Quote - Typewriter Style */}
        <div className="flex-1">
          <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 italic font-mono tracking-tight animate-pulse">
            "The eyes see only what the mind is prepared to comprehend."
          </p>
        </div>
        
        {/* Compact Clinical Metadata */}
        <div className="flex flex-col sm:items-end items-center">
          <span className="text-[9px] font-black text-rose-500/80 uppercase tracking-tighter">
            Not for life-threatening emergencies
          </span>
          <span className="text-[8px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ClinicalAssist System
          </span>
        </div>

      </div>
    </footer>
  );
}