/**
 * COMPONENT: Header (Navigation & System Status)
 * UPDATED: Integrated local identity logic and removed Auth dependencies.
 */

import React from 'react';
import { Stethoscope, Menu, ArrowLeft, Search, Cpu, Globe } from 'lucide-react';
// Import your centralized version config
import { APP_VERSION } from '../../config/version'; 

export default function Header({ 
  user, // Receives { displayName: userName } from App.jsx
  activeTab, 
  onGoHome, 
  onOpenMenu, 
  query, 
  setQuery 
}) {
  // Use the local name passed down, fallback to Guest
  const currentIdentity = user?.displayName || "Guest";

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shrink-0 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-6">
        
        <div className="flex justify-between items-center">
          
          {/* LEFT: CONTEXTUAL BRANDING/NAVIGATION */}
          <div className="flex items-center gap-4 animate-in slide-in-from-left duration-500">
             {activeTab === "home" ? (
               <div className="bg-blue-600 p-3.5 rounded-2xl shadow-xl shadow-blue-500/20 transform hover:scale-105 transition-transform">
                  <Stethoscope className="h-7 w-7 text-white" />
               </div>
             ) : (
               <button 
                 onClick={onGoHome}
                 className="group bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90"
                 title="Back to Dashboard"
               >
                  <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
               </button>
             )}
             
             <div className="flex flex-col">
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
                  Clinical<span className="text-blue-600">Assist</span>
                </h1>
                <div className="flex items-center gap-2 mt-1.5">
                   <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${activeTab === 'home' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      {/* Dynamically show name on Home, or module name on sub-pages */}
                      {activeTab === "home" ? currentIdentity : activeTab.replace('-', ' ')}
                   </p>
                </div>
             </div>
          </div>

          {/* RIGHT: DYNAMIC SYSTEM METRICS & MENU */}
          <div className="flex items-center gap-4 md:gap-8">
             {/* Build Status Info */}
             <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-1.5 mb-1">
                   <Cpu size={12} className="text-slate-500" />
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Build Status</p>
                </div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-tighter">
                   v{APP_VERSION} • Stable
                </p>
             </div>

             {/* Library Status */}
             <div className="hidden md:flex flex-col items-end border-l border-slate-800 pl-8">
                <div className="flex items-center gap-1.5 mb-1">
                   <Globe size={12} className="text-slate-500" />
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Library Sync</p>
                </div>
                <p className="text-xs font-bold text-emerald-500">Online</p>
             </div>

             <button 
               onClick={onOpenMenu} 
               className="p-3.5 bg-slate-900 rounded-2xl text-slate-400 border border-slate-800 hover:border-blue-500 hover:text-white transition-all active:scale-90 shadow-lg"
             >
                <Menu size={24} />
             </button>
          </div>
        </div>

        {/* 2. CONTEXTUAL SEARCH: Activated only in Search Module */}
        {activeTab === "search" && (
          <div className="max-w-xl mx-auto mt-6 relative flex items-center bg-slate-900 rounded-[2rem] border-2 border-slate-800 focus-within:border-blue-500 focus-within:bg-slate-900/50 transition-all shadow-inner animate-in slide-in-from-top-4 duration-300">
            <Search className="h-5 w-5 text-slate-500 ml-5" />
            <input 
              autoFocus
              className="w-full h-14 pl-4 pr-6 bg-transparent outline-none text-sm text-blue-500 font-bold placeholder:text-slate-600"
              placeholder="Search 1,000+ evidence-based protocols..." 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
            />
          </div>
        )}
      </div>
    </header>
  );
}