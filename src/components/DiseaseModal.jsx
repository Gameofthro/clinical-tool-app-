import { X, Pill, Thermometer, Activity, AlertTriangle, Baby, Utensils, Ban, CheckCircle2 } from "lucide-react";

export default function DiseaseModal({ name, data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* The White Dialog Box */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-slate-100 p-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 capitalize">{name}</h2>
            <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-wide">
              {data.category}
            </span>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition">
            <X className="h-6 w-6 text-slate-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6">
          
          {/* Treatment Chart Section */}
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
               <Pill className="h-5 w-5 text-blue-600" />
               <h3 className="font-bold text-blue-900 uppercase text-xs tracking-wider">Treatment Protocol</h3>
            </div>
            <p className="text-xl font-bold text-slate-900 mb-4">{data.firstLine}</p>
            
            {/* Drug Treatment List */}
            <div className="bg-white/60 rounded-xl p-4 border border-blue-100/50">
              <h4 className="text-xs font-bold text-blue-400 uppercase mb-2">Management Steps</h4>
              <ul className="space-y-3">
                {data.management.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700 font-medium border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600 flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Hematological / Lab Data */}
             <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
               <h4 className="flex gap-2 font-bold text-slate-500 text-xs uppercase mb-3"><Activity size={16}/> Hematological / Labs</h4>
               <ul className="space-y-2 text-sm text-slate-700 font-medium pl-2">
                 {data.labs.map(l => (
                   <li key={l} className="flex gap-2 items-start">
                     <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5"></span>
                     {l}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Symptoms */}
             <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
               <h4 className="flex gap-2 font-bold text-slate-500 text-xs uppercase mb-3"><Thermometer size={16}/> Clinical Features</h4>
               <div className="flex flex-wrap gap-2">
                 {data.symptoms.map(s => <span key={s} className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm">{s}</span>)}
               </div>
             </div>
          </div>

          {/* Diet & Lifestyle Section */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
              <Utensils className="h-4 w-4 text-orange-500" />
              <h4 className="font-bold text-slate-800 text-sm uppercase">Dietary & Lifestyle Guidelines</h4>
            </div>
            
            <div className="grid grid-cols-2 divide-x divide-slate-100">
               <div className="p-4 bg-emerald-50/30">
                  <p className="text-emerald-700 font-bold text-xs uppercase mb-3 flex gap-1"><CheckCircle2 size={14} /> Recommended</p>
                  <ul className="text-xs space-y-2 text-emerald-900 font-medium">{data.diet?.eat.map(e => <li key={e}>• {e}</li>)}</ul>
               </div>
               <div className="p-4 bg-rose-50/30">
                  <p className="text-rose-700 font-bold text-xs uppercase mb-3 flex gap-1"><Ban size={14} /> Avoid</p>
                  <ul className="text-xs space-y-2 text-rose-900 font-medium">{data.diet?.avoid.map(e => <li key={e}>• {e}</li>)}</ul>
               </div>
            </div>
            {data.lifestyle && (
              <div className="p-4 border-t border-slate-100">
                 <p className="text-xs font-bold text-slate-400 uppercase mb-2">Lifestyle Modifications</p>
                 <ul className="text-sm text-slate-700 space-y-1 pl-1">
                   {data.lifestyle.map(l => <li key={l} className="flex gap-2"><span className="text-orange-400">→</span> {l}</li>)}
                 </ul>
              </div>
            )}
          </div>

          {/* Warnings Footer */}
          <div className="grid gap-3">
             {data.contraindications?.length > 0 && (
               <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl flex gap-3">
                 <AlertTriangle className="text-rose-500 h-5 w-5 flex-shrink-0" />
                 <div className="text-xs text-rose-800"><span className="font-bold">Contraindications:</span> {data.contraindications.join(", ")}</div>
               </div>
             )}
             <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex gap-3">
               <Baby className="text-indigo-500 h-5 w-5 flex-shrink-0" />
               <div className="text-xs text-indigo-800"><span className="font-bold">Special Populations:</span> Pregnancy: {data.specialPopulations.pregnancy} | Renal: {data.specialPopulations.renal}</div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}