import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Zap, AlertTriangle, Search, X, Trash2, Stethoscope, ChevronRight, Activity, Check } from 'lucide-react';

import { diseaseDatabase } from '../data/diseases';
import DiseaseModal from './DiseaseModal'; // We import the existing modal to show details

// --- Helper: Clean Text for Matching (Defined outside for stability) ---
const normalize = (text) => text?.toLowerCase().trim() || '';

// --- COMPLIANCE FIX: Helper to map score (0-100) to qualitative badge (Defined outside for stability) ---
const getMatchBadge = (score, isTopResult) => {
    const p = parseFloat(score);
    
    // Custom label for the highest scoring, high confidence match (Compliance Requirement)
    if (isTopResult && p >= 80) return { label: "Symptomatic High Match", color: "bg-indigo-600", text: "text-white" };
    
    if (p >= 80) return { label: "High Match", color: "bg-red-500", text: "text-white" };
    if (p >= 50) return { label: "Medium Match", color: "bg-orange-400", text: "text-white" };
    if (p >= 20) return { label: "Low Match", color: "bg-yellow-300", text: "text-slate-900" };
    return { label: "Very Low", color: "bg-slate-200", text: "text-slate-600" };
};


// Mock function for AI API (kept for future feature integration)
const mockGenerateContent = async (prompt, systemInstruction, enableSearch) => {
    console.log("LLM Call: (Disabled in local symptom mode)");
    return { candidates: [] };
};


// Component Definition
export default function SymptomReviewTool() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDisease, setSelectedDisease] = useState(null); // State for the modal
    const searchContainerRef = useRef(null);
    const primaryDatabase = diseaseDatabase; 

    // 1. Universal Symptom Extractor (Optimized)
    const availableSymptoms = useMemo(() => {
        const allKeys = new Set();
        if (primaryDatabase) {
            Object.values(primaryDatabase).forEach(disease => {
                const features = [
                    ...(disease?.clinicalFeatures?.symptoms || []),
                    ...(disease?.clinicalFeatures?.signs || [])
                ];
                features.forEach(s => allKeys.add(s));
                
                if (disease?.symptoms && typeof disease.symptoms === 'object' && !Array.isArray(disease.symptoms)) {
                    Object.keys(disease.symptoms).forEach(key => {
                        const readable = key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                        allKeys.add(readable);
                    });
                }
            });
        }
        return Array.from(allKeys).sort();
    }, [primaryDatabase]);

    // 2. Live Local Search (Stabilized Filtering)
    const localSuggestions = useMemo(() => {
        if (!searchQuery) return [];
        const lowerQuery = normalize(searchQuery);
        
        const selectedSet = new Set(selectedSymptoms);

        return availableSymptoms
            .filter(sym => !selectedSet.has(sym) && normalize(sym).includes(lowerQuery))
            .slice(0, 10);
    }, [searchQuery, availableSymptoms, selectedSymptoms]); 

    // 3. Simple Lookup: Finds diseases that contain AT LEAST ONE selected symptom.
    // Score is calculated internally but ONLY used for sorting, NEVER displayed.
    const results = useMemo(() => {
        if (selectedSymptoms.length === 0 || !primaryDatabase) return [];

        const selectedNorms = selectedSymptoms.map(normalize);
        const allDiseases = Object.entries(primaryDatabase);

        return allDiseases.map(([key, condition]) => {
            let matchCount = 0;
            let diseaseFeatures = [];

            if (condition?.clinicalFeatures) {
                diseaseFeatures = [
                    ...(condition.clinicalFeatures.symptoms || []), 
                    ...(condition.clinicalFeatures.signs || [])
                ];
            } else if (condition?.symptoms) {
                diseaseFeatures = Object.keys(condition.symptoms).map(k => k.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
            }

            const matchedSymptoms = [];
            diseaseFeatures.forEach(f => {
                const fNorm = normalize(f);
                const isMatched = selectedNorms.some(selNorm => fNorm.includes(selNorm) || selNorm.includes(fNorm));
                
                if (isMatched) {
                    matchCount++;
                    matchedSymptoms.push(f);
                }
            });

            // Score calculation for sorting only
            const totalFeatures = diseaseFeatures.length || 1;
            const score = (matchCount / (selectedSymptoms.length || 1)) * 100;
            
            return { 
                ...condition, 
                id: key, 
                name: condition?.name || key, 
                score: Math.min(score, 100).toFixed(0), 
                matchedSymptoms: matchedSymptoms
            };
        })
        .filter(c => c.matchedSymptoms.length > 0) // Only show if at least one symptom matches
        .sort((a, b) => b.score - a.score); // Sort highest match count first
    }, [selectedSymptoms, primaryDatabase]);

    // Click Outside Listener for Search Dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // --- Render Fallback if Database is Missing ---
    if (!primaryDatabase) {
        return (
            <div className="flex items-center justify-center min-h-[400px] text-slate-400">
                <div className="text-center">
                    <AlertTriangle className="h-10 w-10 mx-auto mb-2 text-amber-500" />
                    <p>Medical Database Unavailable</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
            
            {/* Disease Detail Modal - Opens when a tile is clicked */}
            {selectedDisease && (
                <DiseaseModal 
                    name={selectedDisease.name} 
                    data={selectedDisease} 
                    onClose={() => setSelectedDisease(null)} 
                />
            )}
            
            {/* Header Area */}
            <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
                        <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        Symptom Review Tool
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                        Enter patient signs/symptoms to quickly filter and review related diseases and their management protocols.
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
                            placeholder="Type a symptom (e.g. 'Fever', 'Chest Pain')..."
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
                                    className="w-full text-left px-4 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-b border-slate-50 dark:border-slate-800 last:border-0 text-sm text-slate-700 dark:text-slate-200 flex items-center justify-between group transition-colors"
                                >
                                    <span className="capitalize">{sym}</span>
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
                
                {/* COMPLIANCE NOTE: Mandatory Disclaimer - FIX: Use consistent inline flow */}
                {results.length > 0 && (
                    <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                        <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold flex items-start gap-2">
                            <AlertTriangle size={16} className="mt-0.5 shrink-0"/>
                            {/* Consolidated text into one span for proper rendering flow */}
                            <span className='leading-snug'>
                                The results below are sorted by symptom correlation only. They do 
                                <strong className='font-bold'> NOT depict the disease probability or a formal provisional diagnosis. </strong>
                                Clinical judgment is essential.
                            </span>
                        </p>
                    </div>
                )}
                
                <div className="space-y-4">
                    {results.length === 0 ? (
                        <div className="text-center py-20 opacity-40">
                            <Zap className="h-16 w-16 mx-auto mb-4 text-slate-300 dark:text-slate-700" />
                            <p className="text-slate-500 dark:text-slate-400">Select symptoms above to filter the disease database by matching features.</p>
                        </div>
                    ) : (
                        results.map((r, i) => {
                            // Determine if this is the highest match (for visual accent)
                            const isTopResult = i === 0;
                            const isHighMatch = isTopResult && parseInt(r.score) >= 80;
                            const matchCount = r.matchedSymptoms.length;
                            
                            // Determine the base badge color based on compliance rules (no explicit calculation helper needed)
                            let badgeLabel = `${matchCount} Feature Match`;
                            let badgeColor = 'bg-slate-200';
                            let badgeTextColor = 'text-slate-600';

                            if (matchCount > 3) {
                                badgeLabel = 'Strong Feature Correlation';
                                badgeColor = 'bg-yellow-300';
                                badgeTextColor = 'text-slate-900';
                            }
                            if (matchCount >= 5) {
                                badgeLabel = 'High Feature Count';
                                badgeColor = 'bg-orange-400';
                                badgeTextColor = 'text-white';
                            }
                            // Custom label for the highest scoring, high count match
                            if (isTopResult && matchCount > 0) {
                                badgeLabel = `Top Result: ${matchCount} Features`;
                                badgeColor = 'bg-indigo-600';
                                badgeTextColor = 'text-white';
                            }

                            return (
                                <button 
                                    key={r.id || i}
                                    onClick={() => setSelectedDisease(r)} // CLICK HANDLER -> OPENS MODAL
                                    className={`w-full text-left bg-white dark:bg-slate-900 rounded-xl p-5 border shadow-sm flex items-center justify-between hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all group ${
                                        isHighMatch ? 'border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-300 dark:ring-indigo-700' : 'border-slate-100 dark:border-slate-800'
                                    }`}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {r.name}
                                            </h3>
                                            {r.urgency === 'Critical' && (
                                                <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800 animate-pulse">CRITICAL</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 max-w-lg mb-2">{r.pathophysiology}</p>
                                        
                                        {/* Matched Tags */}
                                        <div className="flex flex-wrap gap-1">
                                            <span className="text-[10px] text-slate-400 flex items-center gap-1"><Stethoscope className="h-3 w-3"/> Matched Symptoms:</span>
                                            {r.matchedSymptoms.length > 0 ? (
                                                r.matchedSymptoms.slice(0, 3).map((m, idx) => (
                                                    <span key={idx} className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded dark:bg-green-900/20 dark:text-green-300 font-medium">
                                                        {m}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-[10px] text-slate-400 italic">Partial match based on category</span>
                                            )}
                                            {r.matchedSymptoms.length > 3 && (
                                                <span className="text-[10px] text-slate-400">+{r.matchedSymptoms.length - 3} more</span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800 ml-4 shrink-0">
                                        {/* FIX: Use the compliant badge */}
                                        <span className={`block text-xs font-bold uppercase px-3 py-1 rounded-full ${badgeColor} ${badgeTextColor} mb-2`}>
                                            {badgeLabel}
                                        </span>
                                        {/* Compliance label change */}
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Feature Count</span>
                                        <ChevronRight className="h-5 w-5 text-slate-300 mt-2 mx-auto group-hover:text-indigo-500 transition-colors"/>
                                    </div>
                                </button>
                            );
                        })
                    )}
                </div>
            </div>

        </div>
    );
}