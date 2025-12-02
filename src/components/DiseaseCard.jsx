// src/components/DiseaseCard.jsx
import { useState } from "react";
import { 
  Star, ChevronDown, ChevronUp, Pill, Thermometer, Activity, 
  AlertTriangle, Baby, Zap, Utensils, Ban, CheckCircle2 
} from "lucide-react";

export default function DiseaseCard({ name, data, isFav, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const colors = {
    red: "bg-rose-50 text-rose-700 border-rose-200",
    blue: "bg-sky-50 text-sky-700 border-sky-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    purple: "bg-violet-50 text-violet-700 border-violet-200",
    orange: "bg-amber-50 text-amber-700 border-amber-200",
  };
  const theme = colors[data.color] || colors.blue;

  return (
    <div className={`bg-white rounded-[20px] border transition-all duration-300 overflow-hidden group ${isOpen ? 'shadow-2xl shadow-slate-200/50 border-blue-200 ring-2 ring-blue-500/10' : 'shadow-sm border-slate-200 hover:border-slate-300'}`}>
      
      {/* CARD HEADER */}
      <div onClick={() => setIsOpen(!isOpen)} className="p-5 cursor-pointer flex justify-between items-start relative">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${theme}`}>
              {data.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 capitalize leading-tight group-hover:text-blue-600 transition-colors">{name}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-1 font-medium">{data.firstLine}</p>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <button onClick={(e) => { e.stopPropagation(); onToggle(); }} className="transition active:scale-90 p-2 hover:bg-slate-50 rounded-full">
            <Star className={`h-6 w-6 ${isFav ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" : "text-slate-300"}`} />
          </button>
          <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* EXPANDABLE BODY */}
      {isOpen && (
        <div className="px-5 pb-6 animate-in slide-in-from-top-4 duration-300">
          <div className="h-px w-full bg-slate-100 mb-6"></div>
          
          {/* Rx Section */}
          <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-5 rounded-2xl border border-blue-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Pill size={64} /></div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-blue-600 rounded-lg shadow-md shadow-blue-500/20"><Pill className="h-4 w-4 text-white" /></div>
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Clinical Management</h4>
            </div>
            <p className="text-xl font-bold text-slate-900 leading-snug">{data.firstLine}</p>
            <ul className="mt-4 space-y-2">
              {data.management.map((step, i) => (
                <li key={i} className="text-sm text-slate-700 flex items-start gap-3 font-medium">
                  <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Symptoms */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-3">
                <Thermometer className="h-4 w-4" /> Symptoms
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.symptoms.map(s => (
                  <span key={s} className="px-2.5 py-1.5 bg-white text-slate-600 text-xs font-bold rounded-lg border border-slate-200 shadow-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-3">
                <Activity className="h-4 w-4" /> Labs / Investigations
              </h4>
              <ul className="space-y-1">
                {data.labs.map(l => (
                  <li key={l} className="text-sm text-slate-600 font-medium flex gap-2">
                    <span className="text-slate-300">•</span> {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LIFESTYLE & DIET SECTION */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase mb-3 ml-1">
               <Zap className="h-4 w-4 text-orange-500" /> Lifestyle & Diet
            </h4>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
               {/* Lifestyle */}
               <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                 <p className="text-xs font-bold text-slate-400 uppercase mb-2">Lifestyle Modifications</p>
                 <ul className="space-y-1">
                   {data.lifestyle?.map((tip, i) => (
                     <li key={i} className="text-sm text-slate-700 font-medium flex gap-2">
                       <span className="text-orange-400">→</span> {tip}
                     </li>
                   ))}
                 </ul>
               </div>
               
               {/* Diet Grid */}
               <div className="grid grid-cols-2 divide-x divide-slate-100">
                 {/* Eat */}
                 <div className="p-4 bg-emerald-50/30">
                    <div className="flex items-center gap-2 mb-2">
                       <Utensils className="h-4 w-4 text-emerald-600" />
                       <span className="text-xs font-bold text-emerald-700 uppercase">Eat / Do</span>
                    </div>
                    <ul className="space-y-1">
                      {data.diet?.eat.map((item, i) => (
                        <li key={i} className="text-xs font-semibold text-emerald-800">• {item}</li>
                      ))}
                    </ul>
                 </div>
                 {/* Avoid */}
                 <div className="p-4 bg-rose-50/30">
                    <div className="flex items-center gap-2 mb-2">
                       <Ban className="h-4 w-4 text-rose-600" />
                       <span className="text-xs font-bold text-rose-700 uppercase">Avoid</span>
                    </div>
                    <ul className="space-y-1">
                      {data.diet?.avoid.map((item, i) => (
                        <li key={i} className="text-xs font-semibold text-rose-800">• {item}</li>
                      ))}
                    </ul>
                 </div>
               </div>
            </div>
          </div>

          {/* Contraindications & Special Pops */}
          <div className="flex flex-col gap-3">
             {data.contraindications?.length > 0 && (
              <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl border border-rose-100">
                <AlertTriangle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-rose-800">
                  <span className="font-bold block text-xs uppercase mb-1 opacity-75">Contraindications</span>
                  {data.contraindications.join(", ")}
                </div>
              </div>
            )}
            
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <Baby className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-indigo-800">
                <span className="font-bold block text-xs uppercase mb-1 opacity-75">Special Populations</span>
                <div className="grid grid-cols-2 gap-4">
                  <div><span className="font-semibold text-indigo-900">Pregnancy:</span> {data.specialPopulations.pregnancy}</div>
                  <div><span className="font-semibold text-indigo-900">Renal:</span> {data.specialPopulations.renal}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}