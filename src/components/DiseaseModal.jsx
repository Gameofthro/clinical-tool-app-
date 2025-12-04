import { X, Pill, Thermometer, Activity, AlertTriangle, Stethoscope, Scale, Lightbulb, FileText, Microscope, Calendar } from "lucide-react";

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
        <div className="p-6 space-y-6">
          
          {/* Section 1: Clinical Pearls & Red Flags (High Yield) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pearls */}
            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold uppercase text-xs tracking-wider">
                <Lightbulb size={16} /> Clinical Pearls
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {data.clinicalPearls}
              </p>
            </div>

            {/* Red Flags */}
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30">
              <div className="flex items-center gap-2 mb-2 text-rose-700 dark:text-rose-400 font-bold uppercase text-xs tracking-wider">
                <AlertTriangle size={16} /> Red Flags (Alarm Signs)
              </div>
              <ul className="space-y-1">
                {data.redFlags?.map((flag, i) => (
                  <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span> {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2: Clinical Presentation */}
          <div className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-5 border border-slate-100 dark:border-slate-800">
            <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4">
              <Stethoscope size={20} className="text-indigo-500" /> Clinical Presentation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* History */}
              <div className="md:col-span-2">
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
                    <FileText size={14} /> History
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 italic bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                   "{data.history}"
                 </p>
              </div>

              {/* Vitals */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
                    <Activity size={14} /> Vitals
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                   {Object.entries(data.vitals).map(([key, val]) => (
                     <div key={key} className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">{key}</span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{val}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Symptoms Tags */}
            <div className="mt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
                 <Thermometer size={14} /> Symptoms
              </div>
              <div className="flex flex-wrap gap-2">
                {data.symptoms.map(s => (
                  <span key={s} className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Diagnostics & Differentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Special Tests */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
              <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4">
                <Microscope size={20} className="text-emerald-500" /> Diagnostic Profile
              </h3>
              <div className="space-y-3">
                {data.specialTests?.map((test, i) => (
                  <div key={i} className="flex flex-col text-sm border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                    <div className="flex justify-between font-medium text-slate-800 dark:text-white">
                      <span>{test.name}</span>
                      <span className={test.result.toLowerCase().includes('negative') || test.result.toLowerCase().includes('normal') ? "text-emerald-600" : "text-amber-600"}>
                        {test.result}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-0.5">{test.notes}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentials */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5 bg-slate-50 dark:bg-slate-800/30">
              <h3 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4">
                <Scale size={20} className="text-indigo-500" /> Differentials (Rule Out)
              </h3>
              <ul className="space-y-2">
                {data.differentials?.map((diff, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                     <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                     {diff}
                   </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 4: Management & Rationale */}
          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
            <h3 className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100 mb-4">
               <Pill size={20} /> Management Strategy
            </h3>

            {/* Rationale Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
               {data.managementRationale?.map((item, i) => (
                 <div key={i} className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-sm">
                    <div className="font-bold text-slate-800 dark:text-white text-sm mb-1">{item.drug}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{item.rationale}</div>
                 </div>
               ))}
            </div>

            {/* Daily Protocol (Timeline) */}
            {data.treatment && (
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/50">
                 <h4 className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300 uppercase mb-3">
                   <Calendar size={14} /> In-Patient Protocol
                 </h4>
                 <div className="space-y-3">
                   {data.treatment.map((day, i) => (
                     <div key={i} className="flex gap-4 items-start text-sm">
                        <span className="font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap min-w-[3.5rem] pt-1">Day {day.day}</span>
                        <div className="flex flex-wrap gap-2">
                           {day.meds.map((med, mIdx) => (
                             <span key={mIdx} className="px-2 py-1 bg-white/60 dark:bg-slate-800/60 rounded text-slate-700 dark:text-slate-300 border border-blue-100 dark:border-blue-900/30">
                               {med}
                             </span>
                           ))}
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}