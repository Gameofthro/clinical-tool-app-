import React from 'react';
import { X, BookOpen, Scale, AlertTriangle, Pill, Activity, FlaskConical, Stethoscope } from 'lucide-react';

export default function ReferencesModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    // Data compiled directly from privacy_policy.md Section III
    const dataSources = [
        { 
            title: "Official Regulatory Data & Reporting", 
            icon: Pill, 
            items: [
                "U.S. Food and Drug Administration (FDA) Official Drug Labels.",
                "FDA MedWatch Safety Reporting Database (referenced in every drug entry)."
            ]
        },
        { 
            title: "Pharmacology & Internal Medicine", 
            icon: Stethoscope, 
            items: [
                "Goodman & Gilman's The Pharmacological Basis of Therapeutics.",
                "Dipiro's Pharmacotherapy: A Pathophysiologic Approach.",
                "Harrison’s Principles of Internal Medicine.",
                "Cecil Medicine."
            ]
        },
        { 
            title: "Clinical Guidelines & Diagnostic Criteria", 
            icon: Scale, 
            items: [
                "ACC/AHA (American College of Cardiology/American Heart Association) Guidelines.",
                "KDIGO (Kidney Disease: Improving Global Outcomes) Guidelines.",
                "GINA (Global Initiative for Asthma) Guidelines.",
                "WHO/RNTCP (Tuberculosis Treatment Guidelines).",
                "Rome IV Criteria (Functional GI Disorders).",
                "ICHD-3 (International Classification of Headache Disorders).",
                "CDC/WHO Infectious Disease Protocols."
            ]
        },
        { 
            title: "Calculation Standards & Utility", 
            icon: Activity, 
            items: [
                "CKD-EPI (eGFR) Formula.",
                "Holliday-Segar Formula (IV Fluid Maintenance).",
                "Mean Arterial Pressure (MAP) Formula."
            ]
        },
    ];

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
                    <p className="text-sm font-medium">
                        The clinical information presented in ClinicalAssist is synthesized from the following authoritative regulatory, textbook, and guideline sources.
                    </p>

                    {dataSources.map((section, index) => (
                        <section key={index} className="space-y-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h4 className="font-bold text-base text-slate-800 dark:text-white flex items-center gap-2">
                                <section.icon size={18} className="text-blue-500"/> {section.title}
                            </h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                    
                    <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        *Note: All data must be cross-referenced with your local institutional formulary and the patient's individual clinical status.
                    </p>
                </div>
            </div>
        </div>
    );
}