import React from 'react';
import { Stethoscope, Menu, ShieldCheck } from 'lucide-react';

export default function Header({ 
  user, 
  onOpenMenu 
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shrink-0">
      <div className="max-w-6xl mx-auto px-6 py-6">
        
        <div className="flex justify-between items-center">
          {/* LEFT: BRANDING & USER */}
          <div className="flex items-center gap-4 animate-in slide-in-from-left duration-700">
             <div className="bg-blue-600 p-3.5 rounded-2xl shadow-xl shadow-blue-500/20">
                <Stethoscope className="h-7 w-7 text-white" />
             </div>
             <div>
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
                  Clinical<span className="text-blue-600">Assist</span>
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      {user?.name || "Vaidik Gautam"}
                   </p>
                </div>
             </div>
          </div>

          {/* RIGHT: VERSION & SYNC STATUS (Fills the previous empty space) */}
          <div className="flex items-center gap-4 md:gap-8">
             <div className="hidden sm:flex flex-col items-end">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">System Build</p>
                <p className="text-xs font-bold text-blue-500 flex items-center gap-1.5 mt-0.5">
                   v1.0.4 • Stable
                </p>
             </div>
             <div className="hidden sm:flex flex-col items-end">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Library Sync</p>
                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1.5 mt-0.5">
                   Online
                </p>
             </div>
             <button onClick={onOpenMenu} className="p-3.5 bg-slate-900 rounded-2xl text-slate-400 border border-slate-800 hover:border-blue-500 transition-all active:scale-90 shadow-lg">
                <Menu size={24} />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
}