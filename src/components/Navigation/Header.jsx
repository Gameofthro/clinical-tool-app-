import React from 'react';
import { Stethoscope, Menu, ArrowLeft, Search } from 'lucide-react';

export default function Header({ 
  user, 
  activeTab, 
  onGoHome, 
  onOpenMenu, 
  query, 
  setQuery, 
  setActiveTab 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
      <div className="max-w-3xl mx-auto px-4 py-3">
        
        {/* Branding & Menu Trigger */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">
                Clinical<span className="text-blue-600 dark:text-blue-400">Assist</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                {user?.name || "Clinician"}
              </p>
            </div>
          </div>

          <button 
            onClick={onOpenMenu}
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-800 transition text-slate-600 dark:text-slate-300"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Dynamic Tagline or Back Button */}
        <div className="flex items-center justify-between min-h-[32px] mb-3">
          {activeTab !== "home" ? (
            <button
              onClick={onGoHome}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-200 transition-colors"
            >
              <ArrowLeft size={14} /> Back to Menu
            </button>
          ) : (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic font-medium w-full text-center">
              "Empowering clinicians with precision and speed."
            </p>
          )}
        </div>

        {/* Global Search Bar - Visible on Home and Search tabs */}
        {(activeTab === "home" || activeTab === "search") && (
          <div className="max-w-xl mx-auto relative flex items-center bg-slate-100 dark:bg-slate-800 focus-within:bg-white dark:focus-within:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-blue-400 transition-all shadow-inner">
            <Search className="h-4 w-4 text-slate-400 ml-3.5" />
            <input 
              className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
              placeholder="Search diseases (e.g. Asthma)..." 
              value={query} 
              onChange={e => {
                setQuery(e.target.value); 
                if (activeTab !== "search") setActiveTab("search");
              }} 
            />
          </div>
        )}
      </div>
    </header>
  );
}