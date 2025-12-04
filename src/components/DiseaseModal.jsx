import React from 'react';
import { X, Pill, Thermometer, Activity, AlertTriangle, Scale, Lightbulb, Microscope, Utensils, Ban, CheckCircle2, HeartPulse, Stethoscope, BookOpen } from "lucide-react";

export default function DiseaseModal({ name, data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10 border-b border-slate-100 dark:border-slate-800 p-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white capitalize flex items-center gap-3">
              {name}
              <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full uppercase tracking-wide">
                {data.category}
              </span>
            </h2>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition">
            <X className="h-6 w-6 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Symptoms */}
             <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5 bg-white dark:bg-slate-800">
                <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase">
                  <Thermometer size={18} className="text-rose-500" /> Symptoms (Patient Reports)
                </h3>
                <ul className="space-y-2">
                  {data.clinicalFeatures?.symptoms?.map((sym, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span> {sym}
                    </li>
                  ))}
                </ul>
             </div>

             {/* Signs */}
             <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5 bg-white dark:bg-slate-800">
                <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4 text-sm uppercase">
                  <Stethoscope size={18} className="text-blue-500" /> Signs (Doctor Finds)
                </h3>
                <ul className="space-y-2">
                  {data.clinicalFeatures?.signs?.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span> {sign}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* 3. Diagnostic Workup (Grid/Table Layout) */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-4">
              <Microscope size={20} className="text-emerald-500" /> Diagnostic Criteria & Workup
            </h3>
            <div className="overflow-hidden bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3 font-semibold text-slate-600 dark:text-slate-300 w-1/3">Investigation</th>
                    <th className="p-3 font-semibold text-slate-600 dark:text-slate-300 w-1/3">Expected Finding</th>
                    <th className="p-3 font-semibold text-slate-600 dark:text-slate-300 hidden sm:table-cell w-1/3">Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {data.diagnosticWorkup?.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-slate-800 dark:text-slate-200 align-top">{item.test}</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400 align-top">{item.finding}</td>
                      <td className="p-3 text-slate-500 dark:text-slate-500 text-xs italic hidden sm:table-cell align-top">{item.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Clinical Context (Pearls, Red Flags, Differentials) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pearls */}
            <div className="md:col-span-2 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold uppercase text-xs tracking-wider">
                <Lightbulb size={16} /> Clinical Pearls
              </div>
              <ul className="space-y-2">
                {data.clinicalPearls?.map((pearl, i) => (
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
                {data.differentials?.map((diff, i) => (
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
                {data.redFlags?.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-rose-500 font-bold">!</span> {flag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Management & Lifestyle */}
          <div className="space-y-6">
             {/* Pharmacotherapy */}
             <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100 mb-4">
                   <Pill size={20} /> Management Rationale
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {data.managementRationale?.map((item, i) => (
                     <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-sm flex flex-col h-full">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-bold text-slate-800 dark:text-white text-sm">{item.drug}</div>
                            <div className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400">{item.class}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.dose}</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-500">{item.freq}</div>
                          </div>
                        </div>
                        <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                          <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">Indication: {item.indication}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 leading-snug">{item.rationale}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Lifestyle & Diet */}
             <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-100 dark:border-slate-600 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-indigo-500" />
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase">Comprehensive Care Plan</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
                   {/* Diet Column */}
                   <div className="p-5">
                      <p className="text-slate-400 font-bold text-xs uppercase mb-3 flex items-center gap-1">
                        Dietary Focus
                      </p>
                      <div className="space-y-4">
                        <div>
                          <p className="text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center gap-1 mb-1"><CheckCircle2 size={12}/> Recommend</p>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{data.diet?.eat.join(", ")}</p>
                        </div>
                        <div>
                          <p className="text-rose-700 dark:text-rose-400 font-bold text-xs flex items-center gap-1 mb-1"><Ban size={12}/> Avoid</p>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{data.diet?.avoid.join(", ")}</p>
                        </div>
                      </div>
                   </div>

                   {/* Lifestyle Column */}
                   <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50">
                      <p className="text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase mb-3 flex items-center gap-1">
                        <HeartPulse size={14} /> Lifestyle Modifications
                      </p>
                      <ul className="space-y-2">
                        {data.lifestyle?.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-indigo-400">•</span> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}