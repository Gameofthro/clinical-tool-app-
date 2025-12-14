import React from 'react';
import { X, BookOpen, Scale, AlertTriangle } from 'lucide-react';

export default function ReferencesModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl p-6 relative max-h-[90vh] flex flex-col">
                
                <div className="flex justify-between items-center mb-4 border-b pb-3 border-slate-200 dark:border-slate-700 shrink-0">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                        <BookOpen size={20} className="text-emerald-600" /> Clinical References
                    </h2>
                    <button onClick={onClose} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>
                
                <div className="text-slate-700 dark:text-slate-300 space-y-5 overflow-y-auto pb-4">
                    <p className="text-sm">
                        The clinical information presented in ClinicalAssist is synthesized from major institutional guidelines and highly respected medical texts to ensure its educational utility.
                    </p>

                    <section className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-base text-slate-800 dark:text-white flex items-center gap-2"><Scale size={18} className="text-blue-500"/> Core Pharmacological Data</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>FDA DailyMed (Official Drug Labeling)</li>
                            <li>Dipiro's Pharmacotherapy: A Pathophysiologic Approach</li>
                        </ul>
                    </section>

                    <section className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-base text-slate-800 dark:text-white flex items-center gap-2"><AlertTriangle size={18} className="text-yellow-500"/> Disease & Calculation Guidelines</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Harrison’s Principles of Internal Medicine</li>
                            <li>CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration) Guidelines</li>
                            <li>Holliday-Segar Formula (4-2-1 Rule for Maintenance Fluids)</li>
                            <li>GINA (Global Initiative for Asthma) Guidelines</li>
                        </ul>
                    </section>
                    
                    <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        *Note: All data must be cross-referenced with your local institutional formulary and the patient's individual clinical status.
                    </p>
                </div>
            </div>
        </div>
    );
}