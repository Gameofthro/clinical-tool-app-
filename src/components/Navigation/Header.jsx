import React from 'react';
import { Stethoscope, Menu, ArrowLeft, Search } from 'lucide-react';

export default function Header({ 
  user, 
  activeTab, 
  onGoHome, 
  onOpenMenu, 
  query, 
  setQuery 
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shrink-0">
      <div className="max-w-6xl mx-auto px-6 py-6">
        
        <div className="flex justify-between items-center">
          {/* LEFT: BRANDING OR BACK BUTTON */}
          <div className="flex items-center gap-4 animate-in slide-in-from-left duration-500">
             {activeTab === "home" ? (
               <div className="bg-blue-600 p-3.5 rounded-2xl shadow-xl shadow-blue-500/20">
                  <Stethoscope className="h-7 w-7 text-white" />
               </div>
             ) : (
               <button 
                 onClick={onGoHome}
                 className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90"
               >
                  <ArrowLeft size={24} />
               </button>
             )}
             
             <div>
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
                  Clinical<span className="text-blue-600">Assist</span>
                </h1>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-0.5">
                   {activeTab === "home" ? (user?.name || "Vaidik Gautam") : activeTab.replace('-', ' ')}
                </p>
             </div>
          </div>

          {/* RIGHT: SYSTEM STATUS & MENU */}
          <div className="flex items-center gap-4 md:gap-8">
             <div className="hidden sm:flex flex-col items-end">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Library Sync</p>
                <p className="text-xs font-bold text-emerald-500 mt-0.5">Online</p>
             </div>
             <button onClick={onOpenMenu} className="p-3.5 bg-slate-900 rounded-2xl text-slate-400 border border-slate-800 hover:border-blue-500 transition-all active:scale-90 shadow-lg">
                <Menu size={24} />
             </button>
          </div>
        </div>

        {/* 2. RE-ACTIVATED SEARCH BAR: Only shows when Global Search tab is active */}
        {activeTab === "search" && (
          <div className="max-w-xl mx-auto mt-6 relative flex items-center bg-slate-900 rounded-2xl border-2 border-slate-800 focus-within:border-blue-500 focus-within:bg-slate-900/50 transition-all shadow-inner animate-in slide-in-from-top-2">
            <Search className="h-5 w-5 text-slate-500 ml-4" />
            <input 
              autoFocus
              className="w-full h-12 pl-3 pr-4 bg-transparent outline-none text-sm text-blue-500 font-bold"
              placeholder="Search 1,000+ clinical protocols..." 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
            />
          </div>
        )}
      </div>
    </header>
  );
}