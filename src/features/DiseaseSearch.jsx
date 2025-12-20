import React, { useMemo, useState } from "react";
import { Search, AlertCircle, ChevronRight, LayoutGrid } from "lucide-react";
import { diseaseDatabase } from "../data/diseases";

const CATEGORIES = ["All", "Respiratory", "Cardiology", "Gastroenterology", "Neurology", "Infectious"];

export default function DiseaseSearch({ query, onSelectDisease }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults = useMemo(() => {
    const lowerQ = query.toLowerCase().trim();
    return Object.entries(diseaseDatabase || {})
      .filter(([key, data]) => {
        const matchesQuery = !query || key.toLowerCase().includes(lowerQ) || data.category?.toLowerCase().includes(lowerQ);
        const matchesCategory = selectedCategory === "All" || data.category === selectedCategory;
        return matchesQuery && matchesCategory;
      })
      .map(([key, data]) => ({ name: key, ...data }))
      .slice(0, 15);
  }, [query, selectedCategory]);

  return (
    <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
      {/* Specialty Filter Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0
            ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-400'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Protocol Results List */}
      <div className="flex-1 overflow-y-auto no-scrollbar pr-1 max-h-[50vh]">
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {filteredResults.map((disease) => (
              <button key={disease.name} onClick={() => onSelectDisease(disease)}
                className="w-full text-left bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-center justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/10 group-hover:bg-blue-600 transition-colors"></div>
                <div className="pl-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-sm text-slate-800 dark:text-white uppercase tracking-tight">{disease.name}</h3>
                    <span className="text-[8px] font-black px-2 py-0.5 rounded-lg uppercase bg-blue-50 text-blue-600 border border-blue-100">
                      {disease.category}
                    </span>
                  </div>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" size={18} />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 opacity-40">
            <Search size={48} className="text-slate-300 mb-2" />
            <p className="text-[10px] font-black uppercase">No protocols found</p>
          </div>
        )}
      </div>

      {/* Ad Space Placement */}
      <div className="mt-auto w-full h-24 bg-slate-100 dark:bg-slate-800 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center justify-center shrink-0"></div>
    </div>
  );
}