import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 py-3 transition-colors duration-300 shrink-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3">
        
        {/* Centered Psychological Medical Quote - Typewriter Style */}
        <div className="w-full text-center">
          <p className="text-[10px] sm:text-[12px] text-slate-500 dark:text-slate-400 italic font-mono tracking-tight leading-relaxed">
            "The eyes see only what the mind is prepared to comprehend."
          </p>
        </div>
        
        {/* Compact Clinical Metadata - Centered for Mobile Balance */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] font-black text-rose-500/80 uppercase tracking-[0.15em] mb-0.5">
            Not for life-threatening emergencies
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} ClinicalAssist System
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <span className="text-[8px] font-black text-blue-500/60 uppercase tracking-widest">
              v1.0.0 Stable
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}