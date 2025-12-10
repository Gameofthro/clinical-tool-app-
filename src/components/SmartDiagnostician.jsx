import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Activity, Search, X, Trash2, Zap, Info, Stethoscope, 
  AlertTriangle, Pill, Sparkles, Loader2, Utensils, Sun
} from 'lucide-react';

// ✅ FIX: Use '../' to go up from 'components' to 'src', then into 'data'
import { diseaseDatabase } from '../data/diseases';

// --- Helper: Auto-Format Keys to Labels ---
const formatLabel = (key) => {
  if (!key) return '';
  return key
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

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

export default function App() {
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

  // --- 1. Flatten Symptom List for Autocomplete ---
  const availableSymptoms = useMemo(() => {
    const allKeys = new Set();
    if (diseaseDatabase) {
        Object.values(diseaseDatabase).forEach(disease => {
        if (disease.symptoms) { 
            Object.keys(disease.symptoms).forEach(key => allKeys.add(key));
        }
        });
    }
    return Array.from(allKeys).sort();
  }, []);

  // --- 2. Live Local Search (Continuous) ---
  const localSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = searchQuery.toLowerCase().replace(/ /g, '_');
    
    return availableSymptoms
      .filter(key => 
        !selectedSymptoms.find(s => s.id === key) && 
        key.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8) 
      .map(key => ({ id: key, label: formatLabel(key) }));
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
        Map the input to the closest matching symptom keys from this list:
        ${JSON.stringify(availableSymptoms)}
        
        Return ONLY a JSON array of strings. Example: ["abdominal_pain"]. 
        If no match found, return [].
      `;

      const response = await fetch('/api/diagnose', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error("Server API Error");

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        const cleanText = text.replace(/```json|```/g, '').trim();
        const foundKeys = JSON.parse(cleanText);
        const newSymptoms = foundKeys.filter(key => availableSymptoms.includes(key));
        
        if (newSymptoms.length > 0) {
          const currentIds = new Set(selectedSymptoms.map(s => s.id));
          const toAdd = newSymptoms
            .filter(id => !currentIds.has(id))
            .map(id => ({ id, label: formatLabel(id) }));
          setSelectedSymptoms(prev => [...prev, ...toAdd]);
          setSearchQuery('');
        }
      }
    } catch (e) {
      console.warn("AI Search failed", e);
    } finally {
      setIsAiLoading(false);
    }
  };

  // --- 4. Pharmacology AI Engine ---
  const handleDrugClick = async (drugName) => {
    setSelectedDrug(drugName);
    setDrugData(null); 
    setIsDrugLoading(true);

    try {
      const prompt = `
        Act as a Clinical Pharmacologist.
        Provide a concise pharmacological summary for the drug: "${drugName}".
        
        Return a JSON object with exactly these keys:
        {
          "drugClass": "Pharmacological Class",
          "mechanismOfAction": "1-2 sentences on MOA",
          "dosing": "Standard adult dosing range",
          "commonSideEffects": ["Side Effect 1", "Side Effect 2"],
          "seriousAdverseReactions": ["Serious ADR 1", "Serious ADR 2"],
          "contraindications": "Key contraindications"
        }
        Do not include markdown formatting. Just raw JSON.
      `;

      const response = await fetch('/api/diagnose', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error("Drug API Error");

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        const cleanText = text.replace(/```json|```/g, '').trim();
        const parsedData = JSON.parse(cleanText);
        setDrugData(parsedData);
      }
    } catch (e) {
      console.error("Drug Info Fetch Error", e);
      setDrugData({ error: "Failed to load pharmacological data. Check API connection." });
    } finally {
      setIsDrugLoading(false);
    }
  };

  // --- 5. Differential Engine ---
  const results = useMemo(() => {
    if (selectedSymptoms.length === 0 || !diseaseDatabase) return [];

    return Object.entries(diseaseDatabase).map(([key, condition]) => {
      let score = 0;
      let maxScore = 0;
      let matchedSymptoms = [];

      Object.entries(condition.symptoms || {}).forEach(([sId, weight]) => {
        maxScore += weight;
        const found = selectedSymptoms.find(s => s.id === sId);
        if (found) {
          score += weight;
          matchedSymptoms.push(formatLabel(sId));
        }
      });

      const ageNum = parseInt(age);
      if (ageNum > 60 && ["High", "Critical"].includes(condition.urgency)) score += 5;
      
      const probability = maxScore > 0 ? (score / maxScore) * 100 : 0;

      return { 
        ...condition, 
        id: key, 
        score: Math.min(probability, 100).toFixed(0), 
        matchedSymptoms 
      };
    })
    .filter(c => c.score > 15)
    .sort((a, b) => b.score - a.score);
  }, [selectedSymptoms, age]);

  // Click Outside to Close Suggestions
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
      </div>

      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT PANEL: Inputs */}
        <div className="lg:col-span-5 space-y-6">
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
                  placeholder="Type symptoms (e.g. 'black urine')..."
                  className="flex-1 bg-transparent outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                />
                <button 
                  onClick={handleAiSearch}
                  disabled={isAiLoading || !searchQuery}
                  className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors disabled:opacity-50"
                  title="AI Interpret"
                >
                  {isAiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && localSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto z-50">
                  {localSuggestions.map(sym => (
                    <button
                      key={sym.id}
                      onClick={() => {
                        setSelectedSymptoms(prev => [...prev, sym]);
                        setSearchQuery('');
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-b border-slate-50 dark:border-slate-800 last:border-0 text-sm text-slate-700 dark:text-slate-200"
                    >
                      {sym.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <p className="text-[10px] text-slate-400 px-2 flex gap-1">
              <Info className="h-3 w-3" />
              <span>Select from list or click <Sparkles className="h-3 w-3 inline text-indigo-500"/> for AI mapping.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(sym => (
              <span key={sym.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg shadow-sm animate-in zoom-in">
                {sym.label}
                <button onClick={() => setSelectedSymptoms(s => s.filter(i => i.id !== sym.id))} className="hover:text-indigo-200">
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
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 min-h-[500px] flex flex-col">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" /> Differential Diagnosis
              </h2>
              <span className="text-xs font-mono text-slate-400">{results.length} Matches</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {selectedSymptoms.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 gap-4 opacity-50">
                  <Activity className="h-16 w-16" />
                  <p>Waiting for clinical inputs...</p>
                </div>
              ) : results.length === 0 ? (
                <div className="text-center p-8 text-slate-400">No clear pattern found.</div>
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
                          <h3 className="font-bold text-slate-800 dark:text-slate-100">{r.name || r.id}</h3>
                          <Badge type={r.urgency}>{r.urgency || 'Unknown'}</Badge>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">{r.pathophysiology || 'No description available'}</p>
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
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10 flex justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{selectedCondition.name || selectedCondition.id}</h2>
                <span className="text-xs text-slate-400">{selectedCondition.category || 'General'}</span>
              </div>
              <button onClick={() => setSelectedCondition(null)}><X className="h-6 w-6 text-slate-400" /></button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Symptoms */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2"><Stethoscope className="h-4 w-4"/> Matched Symptoms</h3>
                <div className="flex flex-wrap gap-1">
                  {selectedCondition.matchedSymptoms?.map(s => <Badge key={s} type="Low">{s}</Badge>)}
                </div>
              </div>

              {/* Management - CLICKABLE DRUGS */}
              {selectedCondition.managementRationale && selectedCondition.managementRationale.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2"><Pill className="h-4 w-4"/> Management</h3>
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    {selectedCondition.managementRationale.map((m, idx) => (
                      <div key={idx} className="border-b border-slate-200 dark:border-slate-700 last:border-0 pb-2 last:pb-0">
                        <div className="flex justify-between items-center">
                          {/* AI Trigger Button */}
                          <button 
                            onClick={() => handleDrugClick(m.drug)}
                            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline text-left flex items-center gap-1 group"
                          >
                            {m.drug}
                            <Sparkles className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                          <span className="text-xs bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600">{m.class || 'Rx'}</span>
                        </div>
                        <span className="text-xs text-slate-500 block mt-0.5">{m.dose} • {m.freq}</span>
                        <span className="text-xs italic block mt-1 opacity-80">"{m.rationale}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Diet */}
              {selectedCondition.diet && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2"><Utensils className="h-4 w-4"/> Lifestyle & Diet</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-800">
                      <span className="block font-bold text-green-700 dark:text-green-400 mb-1">Eat</span>
                      <ul className="list-disc pl-3 text-green-800 dark:text-green-300">
                        {selectedCondition.diet.eat?.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-800">
                      <span className="block font-bold text-red-700 dark:text-red-400 mb-1">Avoid</span>
                      <ul className="list-disc pl-3 text-red-800 dark:text-red-300">
                        {selectedCondition.diet.avoid?.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                  </div>
                  {selectedCondition.lifestyle && (
                    <div className="text-sm text-slate-600 dark:text-slate-400 flex gap-2 items-start mt-2">
                      <Sun className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>{selectedCondition.lifestyle.join('. ')}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Pearls */}
              {selectedCondition.clinicalPearls && selectedCondition.clinicalPearls.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase text-slate-400 flex gap-2"><AlertTriangle className="h-4 w-4"/> Clinical Pearls</h3>
                  <ul className="list-disc pl-4 text-sm text-slate-600 dark:text-slate-400">
                    {selectedCondition.clinicalPearls.map((p, i) => (
                      <li key={i}><strong>{p.pearl}</strong> {p.explanation}</li>
                    ))}
                  </ul>
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
              {isDrugLoading ? (
                <div className="flex flex-col items-center justify-center py-8 text-slate-400 gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
                  <p className="text-xs">Consulting Pharmacology Database...</p>
                </div>
              ) : drugData ? (
                drugData.error ? (
                  <div className="text-red-500 text-center text-sm">{drugData.error}</div>
                ) : (
                  <div className="space-y-4 text-sm">
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
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Common ADRs</h4>
                        <ul className="list-disc pl-3 text-slate-600 dark:text-slate-400 space-y-0.5">
                          {drugData.commonSideEffects?.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase text-red-400 mb-1 flex items-center gap-1"><AlertTriangle className="h-3 w-3"/> Serious</h4>
                        <ul className="list-disc pl-3 text-red-600 dark:text-red-400 space-y-0.5">
                          {drugData.seriousAdverseReactions?.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}