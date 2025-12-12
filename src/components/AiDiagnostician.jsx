import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Activity, Search, X, Trash2, Zap, Info, Stethoscope, 
  AlertTriangle, Pill, Sparkles, Loader2, Utensils, Sun,
  BookOpen, AlertOctagon, Microscope, ClipboardList
} from 'lucide-react';

import { diseaseDatabase } from '../data/diseases';

// --- Helper: Clean Text for Matching ---
const normalize = (text) => text?.toLowerCase().trim() || '';

// --- Components ---
const Badge = ({ children, type }) => {
  const colors = {
    Low: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    Moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    High: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    Critical: 'bg-red-100 text-red-800 font-bold dark:bg-red-900/30 dark:text-red-300',
  };
  return (
    <span className={`px-2 py-0.5 rounded border border-transparent text-xs ${colors[type] || 'bg-gray-100 dark:bg-slate-700'}`}>
      {children}
    </span>
  );
};

// Main Component Definition (Defined first, then exported)
function AiDiagnostician() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  // Drug Info State
  const [selectedDrug, setSelectedDrug] = useState(null); 
  const [drugData, setDrugData] = useState(null); 
  const [isDrugLoading, setIsDrugLoading] = useState(false);

  const [age, setAge] = useState('');
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  // --- 1. Universal Symptom Extractor (Handles Arrays & Objects) ---
  const availableSymptoms = useMemo(() => {
    const allKeys = new Set();
    if (diseaseDatabase) {
      Object.values(diseaseDatabase).forEach(disease => {
        // Detailed Schema (Arrays inside clinicalFeatures)
        if (disease.clinicalFeatures) {
            const syms = disease.clinicalFeatures.symptoms || [];
            const signs = disease.clinicalFeatures.signs || [];
            [...syms, ...signs].forEach(s => allKeys.add(s));
        } 
        // Simple Schema (Object keys in symptoms)
        else if (disease.symptoms && typeof disease.symptoms === 'object') {
             Object.keys(disease.symptoms).forEach(key => {
                 allKeys.add(key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
             });
        }
      });
    }
    return Array.from(allKeys).sort();
  }, []);

  // --- 2. Live Local Search (Continuous) ---
  const localSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = normalize(searchQuery);
    return availableSymptoms
      .filter(sym => !selectedSymptoms.includes(sym) && normalize(sym).includes(lowerQuery))
      .slice(0, 10);
  }, [searchQuery, availableSymptoms, selectedSymptoms]);

  // --- 3. AI Symptom Mapper ---
  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsAiLoading(true);
    setShowSuggestions(false);

    try {
      const prompt = `
        Act as a medical terminology mapper.
        User Input: "${searchQuery}"
        Map the user's input to the closest matching symptom strings from this list:
        ${JSON.stringify(availableSymptoms.slice(0, 300))} 
        Return ONLY a JSON array of strings. Example: ["Nausea", "Headache"].
      `;

      // Updated for Step 3: Fetching from the single API route
      const response = await fetch('/api/diagnose', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      
      // Updated parsing logic: Access 'diagnosis' key directly
      // This matches the { diagnosis: text } structure from the updated API
      const text = data.diagnosis; 
      
      if (text) {
        const cleanText = text.replace(/```json|```/g, '').trim();
        const foundKeys = JSON.parse(cleanText);
        const newSymptoms = foundKeys.filter(key => availableSymptoms.includes(key));
        if (newSymptoms.length > 0) {
          setSelectedSymptoms(prev => [...new Set([...prev, ...newSymptoms])]);
          setSearchQuery('');
        }
      }
    } catch (e) {
      console.warn("AI Search failed, using local match", e);
      if (localSuggestions.length > 0) {
         setSelectedSymptoms(prev => [...prev, localSuggestions[0]]);
         setSearchQuery('');
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  // --- 4. Pharmacology Engine ---
  const handleDrugClick = async (drugName, existingData) => {
    setSelectedDrug(drugName);
    
    // Immediate Fallback (Prevents "Unable to load" error)
    const fallbackData = {
        drugClass: existingData?.class || "Pharmacological Agent",
        dosing: `${existingData?.dose || 'See Rx'} • ${existingData?.freq || ''}`,
        mechanismOfAction: existingData?.rationale || "Consult local formulary for details.",
        commonSideEffects: ["Consult BNF/MIMS"],
        seriousAdverseReactions: [],
        isFallback: true
    };
    
    setDrugData(fallbackData);
    setIsDrugLoading(true);

    try {
      const prompt = `
        Act as a Clinical Pharmacologist. Drug: "${drugName}".
        Return JSON (no markdown):
        {
          "drugClass": "Class",
          "mechanismOfAction": "MOA (2 sentences)",
          "dosing": "Adult dosing range",
          "commonSideEffects": ["SE1", "SE2"],
          "seriousAdverseReactions": ["ADR1", "ADR2"]
        }
      `;

      const response = await fetch('/api/diagnose', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      
      // Updated parsing logic here as well
      const text = data.diagnosis;
      
      if (text) {
        const cleanText = text.replace(/```json|```/g, '').trim();
        const parsedData = JSON.parse(cleanText);
        setDrugData({ ...parsedData, isFallback: false }); 
      }
    } catch (e) {
      console.error("Drug fetch error", e);
      // We purposefully don't show an error UI, we just stick to the fallback data
    } finally {
      setIsDrugLoading(false);
    }
  };

  // --- 5. Differential Engine (Handles Arrays & Objects) ---
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
      const coverage = (matchCount / totalFeatures) * 100;
      let score = coverage;

      const ageNum = parseInt(age);
      if (ageNum > 60 && ["High", "Critical"].includes(condition.urgency)) score += 10;

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
  }, [selectedSymptoms, age]);

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
      
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <Activity className="h-6 w-6" />
          <span className="font-bold text-lg tracking-tight">SmartDiagnostician</span>
        </div>
        <div className="text-xs font-medium text-slate-400 hidden sm:block">Pharm.D Clinical Decision Support</div>
      </div>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT PANEL: Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Patient Age</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Yrs"
              className="w-20 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-center font-bold outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-2 relative z-30" ref={searchContainerRef}>
            <div className="bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
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
                  onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
                  placeholder="Type symptoms (e.g. 'Fever')..."
                  className="flex-1 bg-transparent outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                />
                <button 
                  onClick={handleAiSearch}
                  disabled={isAiLoading || !searchQuery}
                  className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors disabled:opacity-50"
                >
                  {isAiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                </button>
              </div>

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
                      className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-b border-slate-50 dark:border-slate-800 last:border-0 text-sm text-slate-700 dark:text-slate-200"
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((sym, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg shadow-sm animate-in zoom-in">
                {sym}
                <button onClick={() => setSelectedSymptoms(s => s.filter(i => i !== sym))} className="hover:text-indigo-200">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {selectedSymptoms.length > 0 && (
              <button onClick={() => setSelectedSymptoms([])} className="px-3 py-1.5 text-sm text-slate-500 hover:text-red-500 flex items-center gap-1">
                <Trash2 className="h-3 w-3" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Results */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 min-h-[500px] flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" /> Differential Diagnosis
              </h2>
              <span className="text-xs font-mono text-slate-400">{results.length} Matches</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {results.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 gap-4 opacity-50 p-8 text-center">
                  <Activity className="h-16 w-16" />
                  <p>Enter symptoms to see differentials.</p>
                </div>
              ) : (
                results.map((r, i) => (
                  <button 
                    key={r.id || i}
                    onClick={() => setSelectedCondition(r)}
                    className="w-full text-left group p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all bg-white dark:bg-slate-900 relative overflow-hidden"
                  >
                    <div className="absolute left-0 bottom-0 top-0 bg-indigo-50 dark:bg-indigo-900/10 transition-all duration-500" style={{ width: `${r.score}%` }} />
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-800 dark:text-slate-100">{r.name}</h3>
                          {r.redFlags && r.redFlags.length > 0 && <Badge type="Critical">Red Flags</Badge>}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">{r.pathophysiology}</p>
                      </div>
                      <span className={`text-2xl font-black ${i === 0 ? 'text-indigo-600' : 'text-slate-300'}`}>{r.score}%</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Disease Detail Modal */}
      {selectedCondition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{selectedCondition.name}</h2>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{selectedCondition.category}</span>
              </div>
              <button onClick={() => setSelectedCondition(null)}><X className="h-6 w-6 text-slate-400 hover:text-red-500" /></button>
            </div>
            
            <div className="p-6 space-y-8">
              
              {/* 1. Pathophysiology */}
              <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-indigo-500 pl-4">
                {selectedCondition.pathophysiology}
              </div>

              {/* 2. Clinical Features & Red Flags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2 mb-2"><Stethoscope className="h-4 w-4"/> Clinical Features</h3>
                  <div className="flex flex-wrap gap-1">
                    {selectedCondition.clinicalFeatures?.symptoms?.map((s,i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded border ${selectedSymptoms.includes(s) ? 'bg-green-100 border-green-200 text-green-800' : 'bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedCondition.redFlags && (
                  <div>
                    <h3 className="text-xs font-bold uppercase text-red-400 flex gap-2 mb-2"><AlertOctagon className="h-4 w-4"/> Red Flags</h3>
                    <ul className="list-disc pl-4 text-xs text-red-600 dark:text-red-400 space-y-1">
                      {selectedCondition.redFlags.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {/* 3. Diagnostics */}
              {selectedCondition.diagnosticWorkup && (
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2 mb-3"><Microscope className="h-4 w-4"/> Diagnostic Workup</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedCondition.diagnosticWorkup.map((d, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                        <div className="font-bold text-slate-700 dark:text-slate-200 text-sm">{d.test}</div>
                        <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">{d.finding}</div>
                        <div className="text-[10px] text-slate-400 mt-1">{d.significance}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Management (Clickable Drugs) */}
              {selectedCondition.managementRationale && (
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2 mb-3"><Pill className="h-4 w-4"/> Management Rationale</h3>
                  <div className="space-y-3">
                    {selectedCondition.managementRationale.map((m, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-indigo-300 transition-colors">
                        <div className="flex-1">
                          <button 
                            onClick={() => handleDrugClick(m.drug, m)}
                            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline text-left flex items-center gap-2 group"
                          >
                            {m.drug}
                            <Sparkles className="h-3 w-3 opacity-0 group-hover:opacity-100 text-amber-500 transition-opacity" />
                          </button>
                          <div className="text-xs text-slate-500 mt-1">{m.dose} • {m.freq}</div>
                        </div>
                        <div className="md:w-1/2 text-xs text-slate-600 dark:text-slate-400 italic mt-2 md:mt-0 pl-0 md:pl-4 border-l-0 md:border-l border-slate-200 dark:border-slate-700">
                          {m.rationale}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Lifestyle & Diet */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCondition.diet && (
                  <div>
                    <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2 mb-2"><Utensils className="h-4 w-4"/> Diet</h3>
                    <div className="text-xs space-y-2">
                      <div className="flex gap-2"><span className="font-bold text-green-600">Eat:</span> <span className="text-slate-600 dark:text-slate-400">{selectedCondition.diet.eat?.join(', ')}</span></div>
                      <div className="flex gap-2"><span className="font-bold text-red-600">Avoid:</span> <span className="text-slate-600 dark:text-slate-400">{selectedCondition.diet.avoid?.join(', ')}</span></div>
                    </div>
                  </div>
                )}
                {selectedCondition.lifestyle && (
                  <div>
                    <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2 mb-2"><Sun className="h-4 w-4"/> Lifestyle</h3>
                    <ul className="list-disc pl-4 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      {selectedCondition.lifestyle.map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {/* 6. Pearls */}
              {selectedCondition.clinicalPearls && (
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800">
                  <h3 className="text-xs font-bold uppercase text-amber-600 dark:text-amber-500 flex gap-2 mb-2"><AlertTriangle className="h-4 w-4"/> Clinical Pearls</h3>
                  <div className="grid gap-2">
                    {selectedCondition.clinicalPearls.map((p, i) => (
                      <div key={i} className="text-xs text-amber-900 dark:text-amber-100">
                        <span className="font-bold">{p.pearl}:</span> {p.explanation}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Drug Pharmacology Modal */}
      {selectedDrug && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
              <h3 className="font-bold text-lg flex items-center gap-2"><Pill className="h-5 w-5"/> {selectedDrug}</h3>
              <button onClick={() => setSelectedDrug(null)}><X className="h-5 w-5 text-white/80 hover:text-white"/></button>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {isDrugLoading && !drugData ? (
                <div className="flex flex-col items-center justify-center py-8 text-slate-400 gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
                  <p className="text-xs">Consulting Pharmacology Database...</p>
                </div>
              ) : drugData ? (
                <div className="space-y-4 text-sm animate-in fade-in">
                  {drugData.isFallback && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 p-2 rounded text-xs text-center border border-amber-200 dark:border-amber-800">
                      Live AI Unavailable. Showing standard database info.
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Class</h4>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{drugData.drugClass}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Mechanism</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{drugData.mechanismOfAction}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Standard Dosing</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-mono text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">{drugData.dosing}</p>
                  </div>
                  
                  {drugData.commonSideEffects && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Common ADRs</h4>
                        <ul className="list-disc pl-3 text-slate-600 dark:text-slate-400 space-y-0.5">
                          {drugData.commonSideEffects?.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-red-400 mb-1 flex items-center gap-1"><AlertOctagon className="h-3 w-3"/> Serious</h4>
                        <ul className="list-disc pl-3 text-red-600 dark:text-red-400 space-y-0.5">
                          {drugData.seriousAdverseReactions?.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Explicit export at the end to prevent build system confusion
export default AiDiagnostician;


