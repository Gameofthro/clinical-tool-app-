import React from 'react';
import { ShieldAlert, CheckCircle, X, Scale, FileText, Lock, AlertTriangle, Server, BookOpen, UserCheck, Info } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, onAccept, isMandatory }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-slate-200 dark:border-slate-700">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 rounded-t-2xl flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white leading-none">
                Terms of Service & Compliance
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Last Updated: December 12/12/2025</p>
            </div>
          </div>
          {/* Only show close button if NOT mandatory (View Only Mode) */}
          {!isMandatory && (
            <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-slate-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
          
          {/* Emergency Warning */}
          <div className="p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-slate-800 rounded-xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5"/>
            <div>
              <h3 className="font-bold text-rose-800 dark:text-rose-400 text-sm uppercase tracking-wide mb-1">
                Medical Emergency Warning
              </h3>
              <p className="text-rose-700 dark:text-rose-300 text-xs leading-relaxed">
                THIS APPLICATION IS NOT FOR EMERGENCY USE. If you or a person you are assisting is experiencing a medical emergency, life-threatening condition, or severe distress, call emergency services immediately. Do not rely on this application for acute triage or critical care decisions.
              </p>
            </div>
          </div>

          <section>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
              <BookOpen className="w-4 h-4 text-blue-500"/> 1. Educational & Reference Use Only
            </h3>
            <p>
              The "ClinicalAssist" application is designed strictly as an educational reference and decision support tool. It is intended to assist users in retrieving and synthesizing medical information. <strong>It does not constitute medical advice, diagnosis, or treatment.</strong> The information provided should never replace professional clinical judgment, standard operating procedures, or consultation with qualified specialists.
            </p>
          </section>

          <section>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
              <Server className="w-4 h-4 text-purple-500"/> 2. Artificial Intelligence Limitations
            </h3>
            <p>
               This tool utilizes Large Language Models (LLM) and Artificial Intelligence to generate responses. While trained on high-quality medical data, AI models are prone to "hallucinations" (confident but incorrect answers), biases, and outdated information.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
              <li>Users must independently verify all drug dosages, interactions, and protocols against primary literature or official formularies (e.g., FDA labels, Lexicomp, BNF).</li>
              <li>The developers do not guarantee the accuracy, completeness, or timeliness of any AI-generated content.</li>
            </ul>
          </section>

          <section>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
              <Lock className="w-4 h-4 text-emerald-500"/> 3. Data Privacy & Compliance
            </h3>
            <p>
              To ensure compliance with privacy regulations (including HIPAA and GDPR), <strong>users are strictly prohibited from entering Protected Health Information (PHI)</strong> into this application.
            </p>
            <p className="mt-2">
              <strong>Prohibited Data:</strong> Do not input real patient names, dates of birth, medical record numbers (MRN), exact addresses, or biometric identifiers.
            </p>
            <p className="mt-2 text-xs">
              <strong>Data Transmission:</strong> Queries entered into this tool are transmitted to third-party AI providers for processing. While we do not permanently store your query history on our servers, data transmission is necessary for the tool to function. By using this tool, you consent to this transmission.
            </p>
          </section>

          <section>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
              <FileText className="w-4 h-4 text-orange-500"/> 4. Intellectual Property & Data Sourcing
            </h3>
            <p>
                <span className="font-bold">The core application (code, UI/UX, logic, and design) is the sole intellectual property of the ClinicalAssist development team.</span> This is covered by copyright.
            </p>
            {/* CLEANED UP AESTHETIC FOR THE DISCLAIMER */}
            <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
                However, all synthesized scientific reference data (e.g., drug mechanisms, indications, adverse events) is compiled from recognized external sources (FDA, Dipiro, Harrison's, etc.). 
                <span className="font-bold text-slate-800 dark:text-slate-200 block mt-1">This fundamental medical knowledge is the intellectual property of the original researchers and source platforms, not ClinicalAssist.</span> We provide a platform for educational synthesis and retrieval.
            </div>
          </section>


          <section>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base mb-2">
              <UserCheck className="w-4 h-4 text-indigo-500"/> 5. Indemnification & Limitation of Liability
            </h3>
            <p>
              By using this application, you explicitly acknowledge and agree that the developers, contributors, and hosting providers shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this service. 
            </p>
            <p className="mt-2">
              You agree to indemnify and hold harmless the developers from any claims, damages, losses, or expenses arising from your use of the application, including any medical decisions made based on its output. The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
            </p>
          </section>

          <p className="text-xs text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
            By clicking "I Read and Agree", you confirm that you have read, understood, and accept these Terms and Conditions.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex justify-end gap-3 flex-shrink-0">
          {isMandatory ? (
            <button 
              onClick={onAccept} // FIX: Now correctly calls the onAccept handler
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              I Read and Agree
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold rounded-xl transition"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}