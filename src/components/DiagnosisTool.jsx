import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Activity, Search, X, Trash2, Zap, AlertTriangle, Check
} from 'lucide-react';

import { diseaseDatabase } from '../data/diseases';

// --- Helper: Clean Text for Matching ---
const normalize = (text) => text?.toLowerCase().trim() || '';

// Main Component Definition
function DiagnosisTool() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  // --- SAFETY CHECK: Prevent Crash if DB is Missing ---
  if (!diseaseDatabase) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-slate-400">
        <div className="text-center">
          <AlertTriangle className="h-10 w-10 mx-auto mb-2 text-amber-500" />
          <p>Medical Database Unavailable</p>
        </div>
      </div>
    );
  }

  // --- 1. Universal Symptom Extractor ---
  const availableSymptoms = useMemo(() => {
    const allKeys = new Set();
    if (diseaseDatabase) {
      Object.values(diseaseDatabase).forEach(disease => {
        if (disease.clinicalFeatures) {
            const syms = disease.clinicalFeatures.symptoms || [];
            const signs = disease.clinicalFeatures.signs || [];
            [...syms, ...signs].forEach(s => allKeys.add(s));
        } else if (disease.symptoms && typeof disease.symptoms === 'object') {
             Object.keys(disease.symptoms).forEach(key => {
                 allKeys.add(key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
             });
        }
      });
    }
    return Array.from(allKeys).sort();
  }, []);

  // --- 2. Live Local Search ---
  const localSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = normalize(searchQuery);
    return availableSymptoms
      .filter(sym => !selectedSymptoms.includes(sym) && normalize(sym).includes(lowerQuery))
      .slice(0, 10);
  }, [searchQuery, availableSymptoms, selectedSymptoms]);

  // --- 3. Differential Engine (Calculates Chances) ---
  const results = useMemo(() => {
    if (selectedSymptoms.length === 0 || !diseaseDatabase) return [];

    return Object.entries(diseaseDatabase).map(([key, condition]) => {
      let matchCount = 0;
      let matchedSymptoms = [];

      let diseaseFeatures = [];
      if (condition.clinicalFeatures) {
          diseaseFeatures = [...(condition.clinicalFeatures.symptoms || []), ...(condition.clinicalFeatures.signs || [])];
      } else if (condition.symptoms) {
          diseaseFeatures = Object.keys(condition.symptoms).map(k => k.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
      }

      selectedSymptoms.forEach(sel => {
        const selNorm = normalize(sel);
        const hasMatch = diseaseFeatures.some(f => normalize(f).includes(selNorm) || selNorm.includes(normalize(f)));
        if (hasMatch) {
          matchCount++;
          matchedSymptoms.push(sel);
        }
      });

      const totalFeatures = diseaseFeatures.length || 1;
      // Simple logic: % of disease symptoms matched by user input
      const score = (matchCount / totalFeatures) * 100;

      return { 
        ...condition, 
        id: key,
        name: condition.name || key, 
        score: Math.min(score, 100).toFixed(0), 
        matchedSymptoms 
      };
    })
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score);
  }, [selectedSymptoms]);

  // Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Header Area */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            Differential Generator
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            Enter patient symptoms to see potential conditions based on matching features.
          </p>
        </div>

        {/* INPUT AREA */}
        <div className="bg-white dark:bg-slate-900 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 relative z-30" ref={searchContainerRef}>
          <div className="flex items-center px-4 py-3">
            <Search className="h-5 w-5 text-slate-400 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setShowSuggestions(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              placeholder="Type a symptom (e.g. 'Fever', 'Cough')..."
              className="flex-1 bg-transparent outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 text-lg"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && localSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50">
              {localSuggestions.map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSymptoms(prev => [...prev, sym]);
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-b border-slate-50 dark:border-slate-800 last:border-0 text-sm text-slate-700 dark:text-slate-200 flex items-center justify-between group"
                >
                  {sym}
                  <span className="opacity-0 group-hover:opacity-100 text-indigo-500"><Check className="h-4 w-4"/></span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Chips */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {selectedSymptoms.map((sym, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-full shadow-sm animate-in zoom-in">
              {sym}
              <button onClick={() => setSelectedSymptoms(s => s.filter(i => i !== sym))} className="hover:text-indigo-200 p-0.5 rounded-full hover:bg-white/20 transition">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {selectedSymptoms.length > 0 && (
            <button onClick={() => setSelectedSymptoms([])} className="px-3 py-1.5 text-sm text-slate-500 hover:text-red-500 flex items-center gap-1">
              <Trash2 className="h-3 w-3" /> Clear All
            </button>
          )}
        </div>
      </div>

      {/* RESULTS LIST */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-4">
          {results.length === 0 ? (
            <div className="text-center py-20 opacity-40">
              <Zap className="h-16 w-16 mx-auto mb-4 text-slate-300 dark:text-slate-700" />
              <p className="text-slate-500 dark:text-slate-400">Add symptoms to generate a differential diagnosis.</p>
            </div>
          ) : (
            results.map((r, i) => (
              <div 
                key={r.id || i}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{r.name}</h3>
                    {r.urgency === 'Critical' && (
                        <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">CRITICAL</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 max-w-lg">{r.pathophysiology}</p>
                  <div className="mt-2 flex gap-1">
                     <span className="text-[10px] text-slate-400">Matched:</span>
                     {r.matchedSymptoms.map(m => (
                         <span key={m} className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 rounded dark:bg-indigo-900/30 dark:text-indigo-300">{m}</span>
                     ))}
                  </div>
                </div>
                
                <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                  <span className={`block text-3xl font-black ${i === 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-300 dark:text-slate-600'}`}>
                    {r.score}%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Chance</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}

// Explicit export
export default DiagnosisTool;