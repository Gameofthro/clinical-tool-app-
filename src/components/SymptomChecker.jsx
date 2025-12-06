import React, { useState, useEffect } from 'react';
import { Search, X, Stethoscope, AlertTriangle, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import { extractAllSymptoms, generateDDx } from "../utils/symptomUtils";

export default function SymptomChecker({ onSelectDisease }) {
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 1. Load all unique symptoms from database on mount
  useEffect(() => {
    const symptoms = extractAllSymptoms();
    setAllSymptoms(symptoms);
  }, []);

  // 2. Handle Symptom Selection
  const handleSelect = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
    setQuery(""); // Clear search after selection
  };

  // 3. Remove Symptom
  const handleRemove = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    // Reset results if user modifies inputs (forces re-analysis)
    setResults(null); 
  };

  // 4. Run Diagnosis Engine
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate thinking time for better UX
    setTimeout(() => {
      const diagnosis = generateDDx(selectedSymptoms);
      setResults(diagnosis);
      setIsAnalyzing(false);
    }, 600);
  };

  // Filter dropdown based on query
  const filteredSuggestions = query 
    ? allSymptoms.filter(s => s.toLowerCase().includes(query.toLowerCase()) && !selectedSymptoms.includes(s))
    : [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* INPUT SECTION */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
          <Activity className="text-blue-600" /> Symptom Analysis
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
          Add patient complaints to generate a differential diagnosis.
        </p>

        {/* Search Bar */}
        <div className="relative mb-4">
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <Search className="ml-3 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              className="w-full bg-transparent p-3 outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
              placeholder="Type a symptom (e.g., fever, chest pain)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Autocomplete Dropdown */}
          {query && filteredSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
              {filteredSuggestions.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSelect(s)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Tags */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[40px]">
          {selectedSymptoms.length === 0 && (
            <span className="text-sm text-slate-400 italic py-2">No symptoms selected yet.</span>
          )}
          {selectedSymptoms.map(s => (
            <span key={s} className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-100 dark:border-blue-800">
              {s}
              <button onClick={() => handleRemove(s)} className="hover:text-blue-900 dark:hover:text-white"><X size={14}/></button>
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAnalyze}
          disabled={selectedSymptoms.length === 0 || isAnalyzing}
          className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
            ${selectedSymptoms.length === 0 
              ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500' 
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/20'}`}
        >
          {isAnalyzing ? (
            <span className="animate-pulse">Analyzing Clinical Patterns...</span>
          ) : (
            <>
              <Stethoscope size={18} /> Generate Differential Diagnosis
            </>
          )}
        </button>
      </div>

      {/* RESULTS SECTION */}
      {results && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Top Provisionals</h3>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
              {results.length} Matches Found
            </span>
          </div>

          {results.length === 0 ? (
             <div className="p-8 text-center bg-slate-100 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
               <p className="text-slate-500 dark:text-slate-400 font-medium">No matching diseases found.</p>
               <p className="text-xs text-slate-400 mt-1">Try adding more specific symptoms or using standard clinical terms.</p>
             </div>
          ) : (
            results.map((res, index) => (
              <div 
                key={res.key}
                onClick={() => onSelectDisease({ name: res.key, ...res.data })}
                className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer group shadow-sm hover:shadow-md relative overflow-hidden"
              >
                {/* Confidence Bar (Background) */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-1000" 
                  style={{ width: `${res.confidence}%` }}
                />

                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {res.key}
                      </h4>
                      {index === 0 && (
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                          Most Likely
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">
                      {res.data.category} • {res.confidence}% Match Confidence
                    </p>
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>

                {/* Match Logic Display */}
                <div className="flex flex-wrap gap-2">
                  {/* Critical Matches (Red Flags) */}
                  {res.redFlags.map(rf => (
                    <span key={rf} className="inline-flex items-center gap-1 px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 text-xs font-bold rounded border border-rose-100 dark:border-rose-900">
                      <AlertTriangle size={10} /> {rf}
                    </span>
                  ))}
                  
                  {/* Standard Matches */}
                  {res.matchedSymptoms.map(ms => (
                    <span key={ms} className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded border border-emerald-100 dark:border-emerald-900">
                      <CheckCircle2 size={10} /> {ms}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}