import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Footer({ onOpenTerms }) {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-900 pt-10 pb-10">
      <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
        
        {/* Modern Action Button */}
        <div className="flex justify-center">
          <button 
            onClick={onOpenTerms}
            className="group flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-5 py-2.5 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
          >
            <ShieldAlert className="w-4 h-4 text-blue-400 group-hover:text-blue-500 transition-colors" />
            <span className="font-semibold text-xs text-slate-300 uppercase tracking-wider">
              Terms & Legal Disclaimer
            </span>
          </button>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Designed for <span className="font-bold text-slate-300">educational and informational purposes only</span>. 
            This AI-powered tool assists in synthesizing medical data but does not replace professional medical advice. 
            Always consult a qualified healthcare provider.
          </p>
          
          <div className="flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-900/30 border border-rose-800 text-[10px] font-bold text-rose-400 uppercase tracking-wide">
              Not for life-threatening emergencies
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-800">
          <p className="text-[10px] font-semibold text-slate-500">
            &copy; {new Date().getFullYear()} ClinicalAssist. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
