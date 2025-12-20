/**
 * COMPONENT: SideDrawer (Settings & Navigation)
 * UPDATED: Replaced mailto with onOpenContact modal trigger.
 */

import React from 'react';
import { 
  X, Sun, Moon, Mail, BookOpen, Info, LogOut, Settings, Shield 
} from 'lucide-react';

export default function SideDrawer({ 
  isOpen, 
  onClose, 
  darkMode, 
  toggleTheme, 
  onOpenAbout, 
  onOpenTerms, 
  onOpenReferences, 
  onOpenContact, // <-- 1. Accept the new prop
  onLogout 
}) {
  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
      
      {/* Drawer Content */}
      <div 
        className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl flex flex-col p-8 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-slate-100 dark:border-slate-800`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center pb-8 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <Settings className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">System</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 space-y-10 overflow-y-auto no-scrollbar">
          
          {/* GROUP 1: SYSTEM */}
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Interface</p>
            <button onClick={toggleTheme} className="w-full flex items-center justify-between p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all group">
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-yellow-400/20 text-yellow-500' : 'bg-blue-600/10 text-blue-600'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </div>
                <span className="font-black text-sm text-slate-700 dark:text-slate-200">{darkMode ? "Light Theme" : "Dark Theme"}</span>
              </div>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${darkMode ? 'right-1' : 'left-1'}`}></div>
              </div>
            </button>
          </div>

          {/* GROUP 2: SUPPORT & INFO */}
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Clinical Support</p>
            <div className="space-y-2">
              {/* 2. UPDATED CONTACT BUTTON: Triggers the Modal instead of mailto */}
              <NavButton 
                icon={<Mail size={20}/>} 
                label="Contact Us" 
                onClick={onOpenContact} 
                color="text-blue-500" 
              />
              <NavButton 
                icon={<Info size={20}/>} 
                label="About ClinicalAssist" 
                onClick={onOpenAbout} 
                color="text-indigo-500" 
              />
              <NavButton 
                icon={<BookOpen size={20}/>} 
                label="References & Sources" 
                onClick={onOpenReferences} 
                color="text-emerald-500" 
              />
            </div>
          </div>

          {/* GROUP 3: LEGAL */}
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Compliance</p>
            <NavButton 
                icon={<Shield size={20}/>} 
                label="Terms of Service" 
                onClick={onOpenTerms} 
                color="text-rose-500" 
            />
          </div>

        </div>

        {/* Footer: Logout */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-3xl bg-rose-500 text-white hover:bg-rose-600 transition-all font-black text-xs uppercase tracking-widest shadow-lg shadow-rose-500/20"
          >
            <LogOut size={18} />
            <span>Terminate Session</span>
          </button>
          <p className="text-[9px] text-center text-slate-400 mt-6 font-black uppercase tracking-widest">
            v1.0.4 • 2025 ClinicalAssist Build
          </p>
        </div>
      </div>
    </div>
  );
}

// Internal Helper for Nav Items
const NavButton = ({ icon, label, onClick, color }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center gap-4 p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-200 group border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
  >
    <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors ${color}`}>
      {icon}
    </div>
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);