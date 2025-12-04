import React from 'react';
import { Stethoscope, Activity, Brain, Wind, Heart, Utensils } from "lucide-react";

export default function DiseaseCard({ name, data, onClick }) {
  // Helper to get color and icon based on category
  const getTheme = (category) => {
    const cat = category?.toLowerCase() || "";
    if (cat.includes("respiratory")) return { color: "bg-sky-50 text-sky-700 border-sky-200 group-hover:border-sky-300", icon: Wind };
    if (cat.includes("cardiology")) return { color: "bg-rose-50 text-rose-700 border-rose-200 group-hover:border-rose-300", icon: Heart };
    if (cat.includes("gastro")) return { color: "bg-orange-50 text-orange-700 border-orange-200 group-hover:border-orange-300", icon: Utensils };
    if (cat.includes("neuro")) return { color: "bg-violet-50 text-violet-700 border-violet-200 group-hover:border-violet-300", icon: Brain };
    if (cat.includes("endo")) return { color: "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:border-emerald-300", icon: Activity };
    return { color: "bg-slate-50 text-slate-700 border-slate-200 group-hover:border-slate-300", icon: Stethoscope };
  };

  const theme = getTheme(data.category);
  const Icon = theme.icon;

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-slate-800 rounded-[20px] p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          {/* Category Badge */}
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${theme.color}`}>
            {data.category}
          </span>
          
          {/* Disease Name */}
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 capitalize mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {name}
          </h3>
          
          {/* Pathophysiology Snippet */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 font-medium leading-relaxed">
            {data.pathophysiology || "Clinical details available."}
          </p>
        </div>

        {/* Icon */}
        <div className="p-2.5 bg-slate-50 dark:bg-slate-700 rounded-full text-slate-400 dark:text-slate-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-500 transition-colors shrink-0">
           <Icon size={20} />
        </div>
      </div>
    </div>
  );
}