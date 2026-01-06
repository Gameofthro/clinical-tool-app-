import React, { useState, useEffect } from 'react';
import { 
  X, Sun, Moon, Mail, BookOpen, Info, Trash2, Settings, Shield, UserCircle, Edit3, Check
} from 'lucide-react';
import { APP_VERSION } from '../../config/version';

export default function SideDrawer({ 
  isOpen, 
  onClose, 
  darkMode, 
  toggleTheme, 
  onOpenAbout, 
  onOpenTerms, 
  onOpenReferences, 
  onOpenContact,
  userName,       
  onUpdateName   
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName || "");

  // Sync tempName when userName prop changes
  useEffect(() => {
    setTempName(userName || "");
  }, [userName]);

  const handleSaveName = () => {
    // Only update if there is actual content, otherwise fallback to Guest
    const cleanName = tempName.trim();
    onUpdateName(cleanName);
    setIsEditing(false);
  };

  const handleResetIdentity = () => {
    const confirmed = window.confirm("This will remove your personalized name and return you to Guest mode. Continue?");
    if (confirmed) {
      onUpdateName(""); 
      setIsEditing(false);
      onClose();
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
      
      <div 
        className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl flex flex-col transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-slate-100 dark:border-slate-800`}
        style={{ 
          paddingTop: 'env(safe-area-inset-top)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '2rem'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-6 mb-2 mt-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <Settings className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">App Settings</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar pr-1">
          
          {/* IDENTITY SECTION */}
          <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Current Identity</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <UserCircle className="text-blue-500 shrink-0" size={32} />
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <input 
                      autoFocus
                      type="text"
                      enterKeyHint="done"
                      className="w-full bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-xl px-3 py-2 text-sm font-bold text-slate-800 dark:text-white outline-none shadow-inner"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                      // Removed onBlur to prevent accidental saves when tapping the check button
                    />
                  ) : (
                    <div className="truncate">
                      <h4 className="font-black text-slate-800 dark:text-white leading-none truncate">
                        {userName || "Guest"}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Local Profile</p>
                    </div>
                  )}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button 
                onClick={() => isEditing ? handleSaveName() : setIsEditing(true)} 
                className={`p-3 rounded-xl border transition-all active:scale-90 shadow-sm shrink-0 ${
                    isEditing 
                    ? 'bg-emerald-500 border-emerald-600 text-white' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-blue-500'
                }`}
              >
                {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
              </button>
            </div>
          </div>

          {/* INTERFACE & OTHER SECTIONS (Unchanged logic, kept for structure) */}
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Interface</p>
            <button onClick={toggleTheme} className="w-full flex items-center justify-between p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all active:opacity-80">
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

          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Clinical Support</p>
            <div className="space-y-2">
              <NavButton icon={<Mail size={20}/>} label="Contact Us" onClick={onOpenContact} color="text-blue-500" />
              <NavButton icon={<Info size={20}/>} label="About ClinicalAssist" onClick={onOpenAbout} color="text-indigo-500" />
              <NavButton icon={<BookOpen size={20}/>} label="References & Sources" onClick={onOpenReferences} color="text-emerald-500" />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Compliance</p>
            <NavButton icon={<Shield size={20}/>} label="Terms of Service" onClick={onOpenTerms} color="text-rose-500" />
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <button 
            onClick={handleResetIdentity}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-3xl bg-slate-100 dark:bg-slate-800 text-slate-500 active:text-rose-500 transition-all font-black text-[10px] uppercase tracking-widest border border-transparent active:border-rose-500/20"
          >
            <Trash2 size={16} />
            <span>Clear Identity Data</span>
          </button>
          <p className="text-[9px] text-center text-slate-400 mt-6 font-black uppercase tracking-widest leading-relaxed">
            v{APP_VERSION} • 2026 Build<br/>
            Local Data Only • Privacy Secured
          </p>
        </div>
      </div>
    </div>
  );
}

const NavButton = ({ icon, label, onClick, color }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center gap-4 p-4 rounded-3xl active:bg-slate-50 dark:active:bg-slate-800 transition-all text-slate-700 dark:text-slate-200 group border border-transparent active:border-slate-100 dark:active:border-slate-800"
  >
    <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors ${color}`}>
      {icon}
    </div>
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </button>
);