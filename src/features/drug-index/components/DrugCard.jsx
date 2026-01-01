import React from 'react';
import { ChevronRight, AlertTriangle } from 'lucide-react';

const getClassColor = (classes) => {
    const cls = classes?.[0]?.toLowerCase() || "";
    if (cls.includes("opioid")) return "bg-rose-500/10 text-rose-500 border-rose-500/20";
    if (cls.includes("beta") || cls.includes("blocker")) return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    if (cls.includes("analgesic")) return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    return "bg-slate-500/10 text-slate-400 border-slate-500/20";
};

export const DrugCard = ({ drug, onSelect }) => {
    // Automatic High Alert Detection
    const isHighAlert = drug.adverse_drug_events?.some(e => 
        e.toLowerCase().includes("boxed warning") || e.toLowerCase().includes("respiratory depression")
    );

    return (
        <button
            onClick={() => onSelect(drug)}
            className="group flex flex-col items-start p-4 bg-white dark:bg-[#1e293b] rounded-[2rem] border-2 border-slate-50 dark:border-slate-800 shadow-sm hover:border-blue-500/50 active:scale-95 transition-all text-left relative h-40 overflow-hidden"
        >
            <div className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase border mb-2 ${getClassColor(drug.pharmacologic_class)}`}>
                {drug.pharmacologic_class?.[0] || "General"}
            </div>

            <div className="flex justify-between items-start w-full mb-1">
                <h3 className="text-[13px] font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-blue-600 transition-colors">
                    {drug.drug_name}
                </h3>
                <ChevronRight size={14} className="text-slate-300 shrink-0" />
            </div>

            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium line-clamp-2 italic leading-tight mt-1">
                {drug.indications_and_moa?.[0]?.indication || "Educational overview pending."}
            </p>

            {isHighAlert && (
                <div className="mt-auto flex items-center gap-1 text-[8px] font-black text-rose-500 uppercase">
                    <AlertTriangle size={10} /> High Alert
                </div>
            )}
        </button>
    );
};