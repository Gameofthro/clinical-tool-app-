/**
 * COMPONENT: LegalModal (Academic Reference Standard)
 * DESCRIPTION: Professional-grade terms of service for medical reference software.
 * UPDATES: Expanded legal definitions, removed DSS references, added strict jurisdictional clauses.
 */

import React from 'react';
import { 
  X, Stethoscope, AlertTriangle, ShieldCheck, 
  FileText, Lock, BookOpen, CheckCircle, Info 
} from 'lucide-react';
import { LAST_REVIEW_DATE } from '../config/version';

export default function LegalModal({ isOpen, onClose, onAccept, isMandatory }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800">
        
        {/* HEADER: BRANDING */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#2563EB] rounded-2xl shadow-xl shadow-blue-500/20">
              <Stethoscope size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-none">
                Clinical<span className="text-[#2563EB]">Assist</span>
              </h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1.5">Legal Terms & Conditions of Use</p>
            </div>
          </div>
          {!isMandatory && (
            <button onClick={onClose} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-all">
              <X size={28} className="text-slate-400" />
            </button>
          )}
        </div>

        {/* BINDING CONTENT: PROFESSIONAL LARGE PARAGRAPH STYLE */}
        <div className="p-8 overflow-y-auto no-scrollbar space-y-10">
          
          {/* SECTION 0: PROMINENT BOLD LEGAL DISCLAIMER */}
          <div className="p-6 bg-rose-50 dark:bg-rose-900/20 rounded-[2.5rem] border-2 border-rose-100 dark:border-rose-900 flex gap-4 items-start">
            <AlertTriangle size={24} className="text-rose-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-black text-rose-800 dark:text-rose-400 uppercase text-xs tracking-wider">MANDATORY NOTICE</h4>
              <p className="text-[11px] text-rose-900 dark:text-rose-200 font-bold leading-relaxed uppercase">
                THIS APPLICATION IS A STATIC MEDICAL REFERENCE AND EDUCATIONAL COMPENDIUM. IT IS NOT A MEDICAL DEVICE, NOR IS IT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE. ALL DATA IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY. USERS ARE PROHIBITED FROM RELYING ON THIS SOFTWARE FOR CLINICAL DECISIONS WITHOUT VERIFICATION FROM OFFICIAL MANUFACTURER SOURCES OR LICENSED MEDICAL PRACTITIONERS.
              </p>
            </div>
          </div>

          <div className="space-y-10 text-slate-700 dark:text-slate-300">
            {/* ARTICLE 1: SCOPE AND DEFINITION */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-blue-500"/> 1. Scope of Educational Service
              </h3>
              <p className="text-xs font-medium leading-relaxed text-justify">
                ClinicalAssist is strictly a digital repository of pharmacological monographs and clinical pathophysiology summaries intended for academic and healthcare students. By accessing this application, you acknowledge that ClinicalAssist does not perform clinical analysis, provide individualized medical advice, or simulate medical professional judgment. The information contained herein is an aggregation of established medical knowledge and does not constitute a doctor-patient, pharmacist-patient, or any other professional-client relationship. You understand that this tool is a reference guide similar to a printed medical textbook and must be used as such.
              </p>
            </section>

            {/* ARTICLE 2: CLINICAL DATA INTEGRITY & UPDATES */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500"/> 2. Accuracy of Clinical Monographs
              </h3>
              <p className="text-xs font-medium leading-relaxed text-justify">
                While the developers of ClinicalAssist strive to maintain the integrity of the data provided, medical protocols, drug dosages, and indications are subject to rapid change based on new clinical trials and regulatory updates from bodies such as the FDA, CDSCO, and EMA. The information is provided on an "AS IS" and "AS AVAILABLE" basis. Users are strictly obligated to cross-reference any drug dosage, interaction, or contraindication with the official manufacturer’s product insert or an institutional formulary. ClinicalAssist disclaims any responsibility for typographical errors or omissions in the clinical data repository.
              </p>
            </section>

            {/* ARTICLE 3: PRIVACY, DATA SAFETY, AND PHI RESTRICTIONS */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <Lock className="w-4 h-4 text-purple-500"/> 3. Privacy Compliance and Data Protection
              </h3>
              <p className="text-xs font-medium leading-relaxed text-justify">
                In compliance with global data protection standards and the Indian Information Technology Act, ClinicalAssist operates as a local-first reference tool. Users are strictly prohibited from inputting Protected Health Information (PHI), including but not limited to, patient names, unique identifiers, or biometric data into any search or text field. ClinicalAssist does not collect, transmit, or share personal user data with external servers. All information processing occurs locally on the user's device. You are solely responsible for ensuring that your use of the application complies with the patient privacy laws applicable in your jurisdiction.
              </p>
            </section>

            {/* ARTICLE 4: INTELLECTUAL PROPERTY & THIRD-PARTY LINKS */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <Info className="w-4 h-4 text-cyan-500"/> 4. Third-Party Content and External Links
              </h3>
              <p className="text-xs font-medium leading-relaxed text-justify">
                This application may contain links to third-party websites, such as regulatory reporting portals or external medical databases. ClinicalAssist does not endorse, warrant, or assume any liability for the content, privacy policies, or practices of any third-party websites. Any reliance on information retrieved via external links is at your own risk. The structure and curation of the ClinicalAssist database are protected by intellectual property laws; unauthorized scraping or commercial redistribution of this database is strictly prohibited.
              </p>
            </section>

            {/* ARTICLE 5: INDEMNIFICATION AND LIMITATION OF LIABILITY */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">
                <FileText className="w-4 h-4 text-orange-500"/> 5. Indemnification & Absolute Waiver
              </h3>
              <p className="text-xs font-bold leading-relaxed italic border-l-4 border-slate-200 dark:border-slate-700 pl-4 text-justify">
                To the maximum extent permitted by applicable law, you agree to indemnify, defend, and hold harmless the developers and affiliates of ClinicalAssist from any and all claims, damages, losses, liabilities, and expenses arising out of or in connection with your use of the application. This includes, but is not limited to, clinical errors, misinterpretations of data, or adverse patient outcomes resulting from reliance on the information provided. By clicking "Accept," you acknowledge that you assume full professional and legal responsibility for any clinical actions taken.
              </p>
            </section>
          </div>
        </div>

        {/* BINDING ACTION */}
        <div className="p-8 bg-slate-50 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4">
          <button 
            onClick={onAccept}
            className="w-full py-5 bg-[#2563EB] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} />
            Agree & Enter Reference Library
          </button>
          
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter text-center">
            Last Clinical Audit: {LAST_REVIEW_DATE} • Regulatory Compliance Office
          </p>
        </div>
      </div>
    </div>
  );
}