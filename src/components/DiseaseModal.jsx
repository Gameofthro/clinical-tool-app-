import React from 'react';
import { X, Pill, Thermometer, AlertTriangle, Scale, Lightbulb, Microscope, Utensils, Ban, CheckCircle2, HeartPulse, Stethoscope, BookOpen } from "lucide-react";
import DrugLink from './DrugLink';

export default function DiseaseModal({ name, data, onClose, onDrugClick }) {
  // CRASH FIX: Ensure data is present before rendering
  if (!data || !name) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  // Safe wrapper for drug click (passed down to DrugLink)
  const handleLinkClick = (drugName) => {
    if (onDrugClick) onDrugClick(drugName);
  };

  // Helper to extract clean drug name from complex string (e.g., "Salbutamol 2 puffs")
  const getCleanDrugName = (drugString) => {
    if (!drugString || typeof drugString !== 'string') return null;
    // Tries to find the first word that resembles a drug name (starts with a capital, excludes punctuation)
    const match = drugString.match(/([A-Z][a-z]+)/);
    return match ? match[0] : null;
  };

  // --- DATA ADAPTERS (Robust access with fallbacks) ---
  const symptoms = data.clinicalFeatures?.symptoms || data.symptoms || [];
  const signs = data.clinicalFeatures?.signs || data.signs || [];
  const diagnostics = data.diagnosticWorkup || data.specialTests || [];
  const management = data.managementRationale || data.treatment || []; 
  
  // Determine structure based on contents
  const isManagementRationale = management.length > 0 && management.every(item => item.rationale);
  const isTreatmentProtocol = management.length > 0 && management.every(item => item.meds);

  const pearls = data.clinicalPearls || [];
  const differentials = data.differentials || [];
  const redFlags = data.redFlags || [];
  const dietEat = data.diet?.eat || [];
  const dietAvoid = data.diet?.avoid || [];
  const lifestyle = data.lifestyle || [];

  return (
    // z-index 100 for the Disease Modal
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={handleClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10 border-b border-slate-100 dark:border-slate-800 p-5 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white capitalize flex items-center gap-3">
              {name || 'Disease Entry'}
              <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full uppercase tracking-wide">
                {data.category || 'General'}
              </span>
            </h2>
          </div>
          <button onClick={handleClose} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition" aria-label="Close">
            <X className="h-6 w-6 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 overflow-y-auto">
          
          {/* 1. Pathophysiology (Educational Banner) */}
          {data.pathophysiology && (
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
              <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-400 font-bold uppercase text-xs tracking-wider">
                <BookOpen size={16} /> Pathophysiology
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {data.pathophysiology}
              </p>
            </div>
          )}

          {/* 2. Clinical Presentation (Symptoms & Signs) */}
          {(symptoms.length > 0 || signs.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {symptoms.length > 0 && (
                <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5 bg-white dark:bg-slate-800">
                    <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase">
                      <Thermometer size={18} className="text-rose-500" /> Symptoms (Patient Reports)
                    </h3>
                    <ul className="space-y-2">
                      {symptoms.map((sym, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span> {sym}
                        </li>
                      ))}
                    </ul>
                </div>
              )}
              {signs.length > 0 && (
                <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5 bg-white dark:bg-slate-800">
                    <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase">
                      <Stethoscope size={18} className="text-blue-500" /> Signs (Doctor Finds)
                    </h3>
                    <ul className="space-y-2">
                      {signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span> {sign}
                        </li>
                      ))}
                    </ul>
                </div>
              )}
            </div>
          )}

          {/* 3. Diagnostic Workup (Grid/Table Layout) */}
          {diagnostics.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-4">
                <Microscope size={20} className="text-emerald-500" /> Diagnostic Criteria & Workup
              </h3>
              <div className="overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="p-3 font-semibold text-slate-600 dark:text-slate-300">Test</th>
                      <th className="p-3 font-semibold text-slate-600 dark:text-slate-300">Finding/Result</th>
                      <th className="p-3 font-semibold text-slate-600 dark:text-slate-300 hidden sm:table-cell">Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {diagnostics.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 font-medium text-slate-800 dark:text-slate-200 align-top">
                          {item.test || item.name || 'Unknown Test'}
                        </td>
                        <td className="p-3 text-slate-600 dark:text-slate-400 align-top">
                          {item.finding || item.result || item.notes || '-'}
                        </td>
                        <td className="p-3 text-slate-500 dark:text-slate-500 text-xs italic hidden sm:table-cell align-top">
                          {item.significance || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. Clinical Context */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pearls */}
            <div className="md:col-span-2 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold uppercase text-xs tracking-wider">
                <Lightbulb size={16} /> Clinical Pearls
              </div>
              <ul className="space-y-2">
                {pearls.map((pearl, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-amber-800 dark:text-amber-200">{pearl.pearl}</span> 
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">{pearl.explanation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Differentials */}
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
               <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">
                <Scale size={16} /> Differentials
              </div>
              <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                {differentials.map((diff, i) => (
                  <li key={i}>• {diff}</li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="md:col-span-3 bg-rose-50 dark:bg-rose-900/10 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <div className="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold uppercase text-xs tracking-wider">
                <AlertTriangle size={16} /> Red Flags (When to Refer/Admit)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {redFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-rose-500 font-bold">!</span> {flag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- MANAGEMENT SECTION --- */}
          {(management.length > 0) && (
            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
              <h3 className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100 mb-4">
                  <Pill size={20} /> Management
              </h3>

              {(isManagementRationale || isTreatmentProtocol) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {management.map((item, i) => {
                    // Determine the drug name based on structure
                    const primaryDrugName = item.drug || getCleanDrugName(item.meds?.[0]);
                    
                    return (
                      // FIX: Make the entire tile clickable
                      <div 
                        key={i} 
                        className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-sm flex flex-col h-full cursor-pointer transition-shadow hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400"
                        onClick={() => {
                          if (primaryDrugName) handleLinkClick(primaryDrugName);
                        }}
                      >
                        {isManagementRationale && (
                          <>
                            <div className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 flex justify-between items-start">
                              {/* Display drug name simply, rely on tile click */}
                              <span className="text-blue-600 dark:text-blue-400 font-bold">
                                  {item.drug} 
                              </span>
                              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.dose} {item.freq}</div>
                            </div>
                            <div className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 mt-1">{item.class || 'N/A'}</div>
                            <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                              <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Indication: {item.indication}</div>
                              <div className="text-xs text-slate-600 dark:text-slate-400 leading-snug">{item.rationale}</div>
                            </div>
                          </>
                        )}
                        {isTreatmentProtocol && (
                          <>
                            <div className="font-bold text-blue-700 dark:text-blue-400 text-sm uppercase tracking-wide mb-3">
                              {item.day ? `Day ${item.day} Protocol` : 'Protocol'}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {Array.isArray(item.meds) ? item.meds.map((med, idx) => (
                                <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200">
                                   {/* Display text, rely on tile click */}
                                   {med}
                                </span>
                              )) : (
                                <span className="text-sm text-slate-600 dark:text-slate-400">{item.meds}</span>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Lifestyle/Diet */}
          {(dietEat.length > 0 || dietAvoid.length > 0 || lifestyle.length > 0) && (
             <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-100 dark:border-slate-600 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-indigo-500" />
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase">Lifestyle & Diet</h4>
                </div>
                <div className="p-5 grid gap-4">
                  {dietEat.length > 0 && <p className="text-sm text-slate-600 dark:text-slate-300"><strong>Eat:</strong> {dietEat.join(", ")}</p>}
                  {dietAvoid.length > 0 && <p className="text-sm text-slate-600 dark:text-slate-300"><strong>Avoid:</strong> {dietAvoid.join(", ")}</p>}
                  {lifestyle.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {lifestyle.map((l, i) => <li key={i} className="text-sm text-slate-700 dark:text-slate-300">{l}</li>)}
                    </ul>
                  )}
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}