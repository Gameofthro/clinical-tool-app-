/**
 * COMPONENT: References Modal (Legal & Evidence Audit)
 * UPDATED: Replaced asterisks with professional bold/uppercase styling.
 */

import React from 'react';
import { X, BookOpen, Scale, AlertTriangle, Pill, Activity, Stethoscope, ShieldCheck } from 'lucide-react';

export default function ReferencesModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const dataSources = [
        { 
            title: "Regulatory Authority Data", 
            icon: Pill, 
            color: "text-blue-500",
            items: [
                "U.S. Food and Drug Administration (FDA) Drug Monograph Database.",
                "FDA MedWatch Safety Reporting System (Post-marketing Surveillance).",
                "EMA (European Medicines Agency) Summary of Product Characteristics."
            ]
        },
        { 
            title: "Core Pharmacology & Medicine", 
            icon: Stethoscope, 
            color: "text-indigo-500",
            items: [
                "Goodman & Gilman's The Pharmacological Basis of Therapeutics (14th Ed).",
                "Dipiro's Pharmacotherapy: A Pathophysiologic Approach.",
                "Harrison’s Principles of Internal Medicine (21st Ed)."
            ]
        },
        { 
            title: "International Clinical Guidelines", 
            icon: Scale, 
            color: "text-emerald-500",
            items: [
                "ACC/AHA Task Force on Clinical Practice Guidelines.",
                "KDIGO Clinical Practice Guidelines for Kidney Disease.",
                "GINA Global Strategy for Asthma Management.",
                "GOLD Global Strategy for Chronic Obstructive Lung Disease.",
                "CDC Pink Book & WHO Immunization Standards."
            ]
        },
        { 
            title: "Standardized Medical Logic", 
            icon: Activity, 
            color: "text-orange-500",
            items: [
                "CKD-EPI 2021 Equation for Glomerular Filtration Rate.",
                "Holliday-Segar Pediatric Fluid Calculation Standards.",
                "CURB-65 and Wells' Criteria Clinical Prediction Rules."
            ]
        },
    ];

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-slate-200 dark:border-slate-800">
                
                {/* Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/20">
                            <BookOpen size={20} className="text-white" />
                        </div>
                        <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Clinical Evidence Base</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-all">
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>
                
                {/* Content */}
                <div className="p-8 overflow-y-auto no-scrollbar space-y-6">
                    
                    {/* Legal Guard - Asterisks Removed and Replaced with Bold styling */}
                    <div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-3xl border border-amber-100 dark:border-amber-800/50 flex gap-3 items-start">
                        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-amber-800 dark:text-amber-400 uppercase tracking-widest">Evidence Disclaimer</p>
                            <p className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                                Content is synthesized from peer-reviewed literature and regulatory labels. This tool provides <span className="font-black text-amber-700 dark:text-amber-300 uppercase tracking-tight">clinical decision support</span> and does not constitute a replacement for professional diagnostic judgment or institutional protocols.
                            </p>
                        </div>
                    </div>

                    {/* Source Iteration */}
                    <div className="space-y-4">
                        {dataSources.map((section, index) => (
                            <section key={index} className="p-5 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-black text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
                                    <section.icon size={16} className={section.color}/> {section.title}
                                </h4>
                                <ul className="space-y-2.5">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-start gap-3">
                                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>

                    {/* Review Timestamp */}
                    <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-blue-500" />
                            <span className="text-[10px] font-black text-slate-500 uppercase">Library Status</span>
                        </div>
                        <span className="text-[10px] font-black text-blue-600 uppercase">Last Review: Dec 2025</span>
                    </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 text-center border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">
                        ClinicalAssist • Evidence-Based Decision Support
                    </p>
                </div>
            </div>
        </div>
    );
}