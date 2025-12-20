/**
 * COMPONENT: LegalModal (Formal Compliance & Risk Mitigation)
 * DESCRIPTION: High-authority terms of service for clinical educational software.
 * LEGAL GUARD: Categorizes tool as a Decision Support Aid to avoid medical device classification.
 */

import React from 'react';
import { 
  X, Stethoscope, AlertTriangle, ShieldCheck, 
  FileText, Lock, BookOpen, CheckCircle 
} from 'lucide-react';
// Integrated dynamic versioning
import { LAST_REVIEW_DATE } from '../config/version';

export default function LegalModal({ isOpen, onClose, onAccept, isMandatory }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800">
        
        {/* FORMAL HEADER: BRAND LOGO */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#2563EB] rounded-2xl shadow-xl shadow-blue-500/20">
              <Stethoscope size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-none">
                Clinical<span className="text-[#2563EB]">Assist</span>
              </h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1.5">Legal Compliance Audit</p>
            </div>
          </div>
          {!isMandatory && (
            <button onClick={onClose} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-all">
              <X size={28} className="text-slate-400" />
            </button>
          )}
        </div>

        {/* BINDING CONTENT: FULL ORIGINAL TEXT PRESERVED */}
        <div className="p-8 overflow-y-auto no-scrollbar space-y-10">
          
          {/* SECTION 0: BOLD LEGAL NOTICE */}
          <div className="p-6 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border-2 border-rose-100 dark:border-rose-900 flex gap-4 items-start">
            <AlertTriangle size={24} className="text-rose-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-black text-rose-800 dark:text-rose-400 uppercase text-xs tracking-wider">Formal Disclaimer</h4>
              <p className="text-xs text-rose-900 dark:text-rose-200 font-bold leading-relaxed uppercase">
                THIS SOFTWARE IS AN EDUCATIONAL AID ONLY. IT IS NOT A MEDICAL DEVICE. ALL DATA IS PROVIDED "AS IS" WITHOUT WARRANTY. USERS MUST INDEPENDENTLY VERIFY ALL CLINICAL OUTCOMES WITH A LICENSED HEALTHCARE PROVIDER.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            {/* ARTICLE 1: NON-DIAGNOSTIC STATUS */}
            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-blue-500"/> 1. Scope of Service
              </h3>
              <p className="text-xs font-medium leading-relaxed">
                The "ClinicalAssist" platform is a <span className="font-black text-slate-950 dark:text-white underline">Decision Support System (DSS)</span> designed for educational synthesis. It does not provide medical advice, diagnosis, or treatment. Use of this software does not establish a provider-patient relationship.
              </p>
            </section>

            {/* ARTICLE 2: CLINICAL DATA INTEGRITY */}
            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500"/> 2. Data Accuracy & Verification
              </h3>
              <p className="text-xs font-medium leading-relaxed">
                Clinical protocols and drug monographs are derived from public regulatory records and established medical textbooks. Users are <span className="font-black text-slate-950 dark:text-white uppercase underline">obligated</span> to cross-reference all information with the <span className="font-black text-slate-950 dark:text-white uppercase">Official Product Monograph</span> or the <span className="font-black text-slate-950 dark:text-white uppercase">Institutional Formulary</span> before any clinical intervention.
              </p>
            </section>

            {/* ARTICLE 3: DATA PRIVACY & PHI */}
            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <Lock className="w-4 h-4 text-purple-500"/> 3. Privacy Compliance (PHI)
              </h3>
              <p className="text-xs font-medium leading-relaxed">
                Users are strictly prohibited from inputting <span className="font-black text-rose-600 uppercase">Protected Health Information (PHI)</span> into this tool. This includes real patient names, identifiers, or biometric data. All input queries are handled via third-party secure processing and are not permanently stored by ClinicalAssist.
              </p>
            </section>

            {/* ARTICLE 4: LIMITATION OF LIABILITY */}
            <section className="space-y-3">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <FileText className="w-4 h-4 text-orange-500"/> 4. Indemnification
              </h3>
              <p className="text-xs font-medium leading-relaxed italic">
                By accepting these terms, you agree to indemnify and hold harmless the developers from any claims, losses, or clinical errors resulting from the use of this educational aid. You assume full responsibility for the clinical outcomes of your patients.
              </p>
            </section>
          </div>
        </div>

        {/* BINDING ACTION */}
        <div className="p-8 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4">
          {isMandatory ? (
            <button 
              onClick={onAccept}
              className="w-full py-5 bg-[#2563EB] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              Acknowledge & Accept Terms
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="w-full py-5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all"
            >
              Dismiss
            </button>
          )}
          {/* AUTOMATED REVISION DATE */}
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter text-center">
            Revision: {LAST_REVIEW_DATE} • ClinicalAssist Regulatory Compliance Office
          </p>
        </div>
      </div>
    </div>
  );
}