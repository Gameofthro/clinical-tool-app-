import React, { useState, useEffect } from 'react';
import { UserCircle, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function OnboardingModal({ isOpen, onSave, onSkip }) {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const cleanName = inputValue.trim();
    if (cleanName) {
      onSave(cleanName);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onSkip}></div>

      {/* Modal Container */}
      <div className={`relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-8 transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12'}`}>
        
        {/* Visual Identity */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-600/10 dark:bg-blue-600/20 rounded-3xl">
            <UserCircle size={48} className="text-blue-600 dark:text-blue-500" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Personalize Workspace
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
            How should ClinicalAssist address you? <br/>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-60">(Stored locally • Private)</span>
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <input 
              autoFocus
              type="text"
              enterKeyHint="done" // Optimization for mobile keyboards to show 'Done'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your name..."
              className="w-full h-16 px-6 pr-14 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 rounded-2xl outline-none focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-white font-bold transition-all placeholder:text-slate-400"
            />
            
            {/* FIXED: The Icon is now a Button for mobile users */}
            {inputValue.trim().length > 0 && (
              <button 
                type="button"
                onClick={handleSubmit}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl transition-all animate-in zoom-in"
              >
                <CheckCircle2 size={24} />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className={`w-full h-16 flex items-center justify-center gap-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl ${
                inputValue.trim() 
                ? 'bg-blue-600 text-white active:scale-95 shadow-blue-500/20' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Initialize Identity</span>
              <ArrowRight size={18} />
            </button>

            <button 
              type="button"
              onClick={onSkip}
              className="w-full h-14 flex items-center justify-center gap-2 rounded-2xl bg-transparent text-slate-500 dark:text-slate-400 active:text-rose-500 font-bold text-[10px] uppercase tracking-widest transition-colors"
            >
              <XCircle size={16} />
              <span>Continue as Guest</span>
            </button>
          </div>
        </form>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[9px] text-center text-slate-400 dark:text-slate-500 font-bold leading-relaxed px-4">
            Identity data is stored only on your physical hardware. 
            No information is transmitted to external servers.
          </p>
        </div>
      </div>
    </div>
  );
}