/**
 * FEATURE: Disease Search & Clinical Index
 * * DESCRIPTION:
 * This component serves as the central engine for filtering and displaying 
 * clinical guidelines from the disease database. It is optimized for speed 
 * using React's useMemo hook to prevent UI lag during real-time typing.
 * * FUNCTIONS:
 * 1. filteredResults: Computes matches based on Name, Symptoms, and Category.
 * 2. getCategoryColor: Maps clinical categories to specific UI themes.
 * 3. Empty State Rendering: Provides feedback when no matches are found.
 */

import React, { useMemo } from "react";
import { BookOpen, Search, AlertCircle } from "lucide-react";
import DiseaseCard from "../components/DiseaseCard";
import { diseaseDatabase } from "../data/diseases";

export default function DiseaseSearch({ query, onSelectDisease }) {
  
  /**
   * FILTERING LOGIC
   * Executed every time the 'query' prop changes.
   * Searches across three data points: disease name, symptom array, and category.
   */
  const filteredResults = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase().trim();
    
    // Convert object database to array and filter
    return Object.entries(diseaseDatabase || {})
      .filter(([key, data]) => {
        const nameMatch = key.toLowerCase().includes(lowerQ);
        const symptomMatch = data.clinicalFeatures?.symptoms?.some(s => 
          s.toLowerCase().includes(lowerQ)
        ) || false; 
        const categoryMatch = data.category?.toLowerCase().includes(lowerQ);

        return nameMatch || symptomMatch || categoryMatch;
      })
      .map(([key, data]) => ({ name: key, ...data }));
  }, [query]);

  /**
   * UI THEMING
   * Returns a Tailwind color string based on the medical specialty.
   */
  const getCategoryColor = (category) => {
    const map = {
      "Respiratory": "blue",
      "Cardiology": "red",
      "Gastroenterology": "orange",
      "Neurology": "purple",
      "Endocrinology": "emerald",
      "Infectious": "amber",
      "Hematology": "rose"
    };
    return map[category] || "blue"; // Fallback to blue
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-10">
      
      {/* 1. RESULTS GRID */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredResults.map((disease) => (
            <DiseaseCard 
              key={`disease-${disease.name}`} 
              name={disease.name} 
              data={{
                ...disease,
                color: getCategoryColor(disease.category),
                // Pathophysiology serves as the 'firstLine' summary on the card
                firstLine: disease.pathophysiology 
              }}
              onClick={() => onSelectDisease(disease)} 
            />
          ))}
        </div>
      ) : (
        
        /* 2. EMPTY STATE / EDUCATIONAL ONBOARDING */
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6 border-4 border-white dark:border-slate-900 shadow-inner">
            <Search className="h-10 w-10 text-slate-300 dark:text-slate-600" />
          </div>
          
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-2">
            {query ? "No Clinical Matches" : "Clinical Database Ready"}
          </h3>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-medium">
            {query 
              ? `We couldn't find protocols for "${query}". Try searching for specific symptoms like "Dyspnea" or categories like "Cardiology".` 
              : "Search the validated clinical index for pathophysiology, symptoms, and evidence-based treatment protocols."}
          </p>

          {/* QUICK SEARCH SUGGESTIONS (Psychological Prompting) */}
          {!query && (
            <div className="mt-10 w-full max-w-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Commonly Referenced</p>
              <div className="grid grid-cols-2 gap-3">
                {['Asthma', 'Hypertension', 'Diabetes', 'Pneumonia'].map(item => (
                  <div key={item} className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* LEGAL DISCLAIMER REMINDER */}
          <div className="mt-12 flex items-center gap-2 text-slate-400 dark:text-slate-600">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-tight">Educational Reference Only</span>
          </div>
        </div>
      )}
    </div>
  );
}