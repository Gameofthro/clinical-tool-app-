/**
 * FEATURE: Advanced Symptom Review Tool
 * SOLUTION: Redundant symptoms are grouped; search matches both base and detailed terms.
 */

import React, { useState, useMemo, useRef } from 'react';
import { Search, X, Trash2, Stethoscope, ChevronRight, Activity, Check, Info, ShieldAlert } from 'lucide-react';
import { diseaseDatabase } from '../data/diseases';
import DiseaseModal from './DiseaseModal'; 

const normalize = (text) => text?.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim() || '';

export default function SymptomReviewTool() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [filterUrgency, setFilterUrgency] = useState('all'); 
    const searchContainerRef = useRef(null);

    // 1. SMART SYMPTOM NORMALIZER
    // Instead of raw extraction, we group variants into a "Root Symptom"
    const availableSymptoms = useMemo(() => {
        const rootMap = new Map(); // Standard Name -> Set of Database Variants

        if (diseaseDatabase) {
            Object.values(diseaseDatabase).forEach(disease => {
                const rawFeatures = [
                    ...(disease?.clinicalFeatures?.symptoms || []),
                    ...(disease?.clinicalFeatures?.signs || [])
                ];

                rawFeatures.forEach(variant => {
                    // Logic: Extract the "Root" before any parentheses or specific descriptors
                    // e.g., "Pleuritic Chest Pain (Dull Ache)" becomes "Chest Pain" or "Pleuritic Chest Pain"
                    let root = variant.split('(')[0].trim();
                    
                    // Further cleaning to standardize common roots
                    if (root.toLowerCase().includes('chest pain')) root = 'Chest Pain';
                    if (root.toLowerCase().includes('fever')) root = 'Fever';
                    if (root.toLowerCase().includes('headache')) root = 'Headache';
                    if (root.toLowerCase().includes('cough')) root = 'Cough';
                    if (root.toLowerCase().includes('shortness of breath')) root = 'Dyspnea';

                    if (!rootMap.has(root)) rootMap.set(root, new Set());
                    rootMap.get(root).add(variant);
                });
            });
        }
        // Return only the standardized unique Root symptoms
        return Array.from(rootMap.keys()).sort();
    }, []);

    // 2. FILTERED SUGGESTIONS
    const localSuggestions = useMemo(() => {
        if (!searchQuery) return [];
        const lowerQuery = normalize(searchQuery);
        const selectedSet = new Set(selectedSymptoms);

        return availableSymptoms
            .filter(sym => !selectedSet.has(sym) && normalize(sym).includes(lowerQuery))
            .slice(0, 8);
    }, [searchQuery, availableSymptoms, selectedSymptoms]);

    // 3. ENHANCED CORRELATION ENGINE
    const results = useMemo(() => {
        if (selectedSymptoms.length === 0) return [];
        const selectedNorms = selectedSymptoms.map(normalize);

        const correlated = Object.entries(diseaseDatabase).map(([key, condition]) => {
            const diseaseFeatures = [
                ...(condition?.clinicalFeatures?.symptoms || []), 
                ...(condition?.clinicalFeatures?.signs || [])
            ];
            
            // Match if the disease feature contains the root OR vice versa
            const matchedFeatures = diseaseFeatures.filter(f => {
                const fNorm = normalize(f);
                return selectedNorms.some(selNorm => fNorm.includes(selNorm) || selNorm.includes(fNorm));
            });

            // QUALITATIVE TIERS (Legal Compliance)
            let correlationLevel = "Feature Match";
            let colorClass = "text-slate-500";
            if (matchedFeatures.length >= 4) {
                correlationLevel = "Evidence Correlation";
                colorClass = "text-blue-600";
            } else if (matchedFeatures.length >= 2) {
                correlationLevel = "Strong Correlation";
                colorClass = "text-indigo-500";
            }
            
            return { 
                ...condition, 
                id: key, 
                name: condition?.name || key, 
                correlationLevel,
                colorClass,
                matchedFeatures: Array.from(new Set(matchedFeatures)), // Deduplicate
                matchCount: matchedFeatures.length,
                isCritical: condition.urgency === 'Critical' || condition.urgency === 'High'
            };
        })
        .filter(c => c.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount);

        return filterUrgency === 'critical' ? correlated.filter(c => c.isCritical) : correlated;
    }, [selectedSymptoms, filterUrgency]);

    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500 overflow-hidden pb-6">
            
            {/* INPUT SECTION */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 shrink-0">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
                        <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Symptom Input</h2>
                    </div>
                    <button onClick={() => setFilterUrgency(prev => prev === 'critical' ? 'all' : 'critical')}
                        title="Filter Critical/High Urgency Only"
                        className={`p-1.5 rounded-lg border transition-all ${filterUrgency === 'critical' ? 'bg-rose-500 border-rose-500 text-white' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 text-slate-400'}`}>
                        <ShieldAlert size={14} />
                    </button>
                </div>

                <div className="relative" ref={searchContainerRef}>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onFocus={() => setShowSuggestions(true)}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Type root symptom (e.g. Chest Pain)..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 outline-none transition-all shadow-inner text-blue-600 font-bold text-sm"
                        />
                    </div>

                    {showSuggestions && localSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                            {localSuggestions.map((sym, idx) => (
                                <button key={idx} onClick={() => { setSelectedSymptoms(p => [...p, sym]); setSearchQuery(''); setShowSuggestions(false); }}
                                    className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-b last:border-0 text-xs text-slate-700 dark:text-slate-200 flex justify-between items-center transition-colors">
                                    <span className="capitalize">{sym}</span>
                                    <Check className="text-blue-500 h-4 w-4"/>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mt-4 min-h-[32px]">
                    {selectedSymptoms.map((sym, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase rounded-xl shadow-sm">
                            {sym}
                            <button onClick={() => setSelectedSymptoms(s => s.filter(i => i !== sym))} className="hover:bg-white/20 rounded-full p-0.5"><X size={10}/></button>
                        </span>
                    ))}
                    {selectedSymptoms.length > 0 && (
                        <button onClick={() => setSelectedSymptoms([])} className="text-[9px] font-bold text-rose-500 uppercase flex items-center gap-1 ml-1">
                            <Trash2 size={12} /> Clear All
                        </button>
                    )}
                </div>
            </div>

            {/* RESULTS LIST */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pr-1">
                {results.length > 0 ? (
                    results.map((r) => (
                        <button key={r.id} onClick={() => setSelectedDisease(r)}
                            className={`w-full text-left bg-white dark:bg-slate-900 p-5 rounded-[2rem] border transition-all group flex items-center justify-between relative overflow-hidden ${r.isCritical ? 'border-rose-100 dark:border-rose-900' : 'border-slate-100 dark:border-slate-800 shadow-sm'}`}>
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600/10 group-hover:bg-blue-600 transition-colors"></div>
                            <div className="flex-1 pl-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-black text-sm text-slate-800 dark:text-white uppercase">{r.name}</h3>
                                    {r.isCritical && <span className="bg-rose-50 text-rose-600 text-[8px] font-black px-2 py-0.5 rounded-lg border border-rose-100">URGENT</span>}
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {r.matchedFeatures.map((f, idx) => (
                                        <span key={idx} className="text-[8px] bg-slate-50 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-md border border-slate-100 dark:border-slate-700 uppercase font-black">{f}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-right shrink-0 ml-4">
                                <div className={`text-[9px] font-black uppercase tracking-tighter ${r.colorClass}`}>{r.correlationLevel}</div>
                                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors ml-auto mt-1" size={16} />
                            </div>
                        </button>
                    ))
                ) : selectedSymptoms.length > 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100">
                        <Activity className="h-10 w-10 mx-auto mb-2 text-slate-200" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No Direct Correlation</p>
                    </div>
                ) : (
                   <div className="p-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/40 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <Stethoscope className="text-slate-200 dark:text-slate-700 mb-3" size={48} />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Correlate Patterns</p>
                   </div>
                )}
            </div>

            {/* EDUCATIONAL FOOTER */}
            {results.length > 0 && (
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-3xl border border-amber-200 dark:border-amber-800/50 flex gap-3 items-start shrink-0">
                    <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-amber-900 dark:text-amber-200 font-medium leading-tight">
                        <b className="font-black uppercase text-[8px] block mb-1">Learning Note:</b> 
                        Correlation is based on feature overlap within this educational database. This is for pattern recognition study only.
                    </p>
                </div>
            )}

            {selectedDisease && (
                <DiseaseModal name={selectedDisease.name} data={selectedDisease} onClose={() => setSelectedDisease(null)} />
            )}
        </div>
    );
}