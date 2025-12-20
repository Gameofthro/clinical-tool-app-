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
  onLogout,
  supportEmail 
}) {
  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
      
      {/* Drawer Content */}
      <div 
        className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center pb-6 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <Settings className="text-blue-600" size={20} />
            <h3 className="text-xl font-black text-slate-800 dark:text-white">Settings</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar">
          
          {/* GROUP 1: SYSTEM */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Personalization</p>
            <button onClick={toggleTheme} className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-600'}`}>
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300">{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </div>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${darkMode ? 'right-1' : 'left-1'}`}></div>
              </div>
            </button>
          </div>

          {/* GROUP 2: SUPPORT & INFO */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Support & Knowledge</p>
            <div className="space-y-1">
              <NavButton icon={<Mail size={18}/>} label="Contact Support" onClick={() => window.location.href = `mailto:${supportEmail}`} />
              <NavButton icon={<Info size={18}/>} label="About ClinicalAssist" onClick={onOpenAbout} />
              <NavButton icon={<BookOpen size={18}/>} label="References & Sources" onClick={onOpenReferences} />
            </div>
          </div>

          {/* GROUP 3: LEGAL */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Compliance</p>
            <NavButton icon={<Shield size={18}/>} label="Terms of Service" onClick={onOpenTerms} color="text-emerald-500" />
          </div>

        </div>

        {/* Footer: Logout */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 hover:bg-rose-100 transition-colors font-bold"
          >
            <LogOut size={20} />
            <span>Logout Session</span>
          </button>
          <p className="text-[9px] text-center text-slate-400 mt-4 font-medium uppercase tracking-tighter">
            Version 1.0.4 • ClinicalAssist Build
          </p>
        </div>
      </div>
    </div>
  );
}

// Internal Helper for Nav Items
const NavButton = ({ icon, label, onClick, color = "text-blue-500" }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 group"
  >
    <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 shadow-sm transition-colors ${color}`}>
      {icon}
    </div>
    <span className="font-bold text-sm">{label}</span>
  </button>
);