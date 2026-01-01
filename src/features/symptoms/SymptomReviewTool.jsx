import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Stethoscope, Activity, Check, ShieldAlert, Trash2, Filter, Zap, Microscope } from 'lucide-react';
import { diseaseDatabase } from '../../data/diseases';
import { ResultGroup } from './components/ResultGroup';
import { SymptomChips } from './components/SymptomChips';
import DiseaseModal from '../../components/ui/DiseaseModal';

// Normalization must be consistent across search and engine
const normalize = (text) => text?.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim() || '';

export default function SymptomReviewTool() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [filterUrgency, setFilterUrgency] = useState('all');
    const searchRef = useRef(null);

    // 1. Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 2. Extract unique root symptoms
    const availableSymptoms = useMemo(() => {
        const rootMap = new Map();
        if (diseaseDatabase) {
            Object.values(diseaseDatabase).forEach(disease => {
                const rawFeatures = [
                    ...(disease?.clinicalFeatures?.symptoms || []), 
                    ...(disease?.clinicalFeatures?.signs || [])
                ];
                rawFeatures.forEach(variant => {
                    let root = variant.split('(')[0].trim();
                    // Standardizing clinical roots
                    if (root.toLowerCase().includes('chest pain')) root = 'Chest Pain';
                    if (root.toLowerCase().includes('fever')) root = 'Fever';
                    if (root.toLowerCase().includes('headache')) root = 'Headache';
                    if (root.toLowerCase().includes('cough')) root = 'Cough';
                    if (root.toLowerCase().includes('shortness of breath')) root = 'Dyspnea';
                    rootMap.set(root, true);
                });
            });
        }
        return Array.from(rootMap.keys()).sort();
    }, []);

    // 3. FIXED: Search filtering logic
    const localSuggestions = useMemo(() => {
        const query = normalize(searchQuery);
        if (!query) return [];
        
        return availableSymptoms.filter(sym => {
            const isSelected = selectedSymptoms.includes(sym);
            const matchesQuery = normalize(sym).includes(query);
            return !isSelected && matchesQuery;
        }).slice(0, 8);
    }, [searchQuery, availableSymptoms, selectedSymptoms]);

    // 4. THE ENGINE
    const results = useMemo(() => {
        if (selectedSymptoms.length === 0) return [];
        const selectedNorms = selectedSymptoms.map(normalize);

        const correlated = Object.entries(diseaseDatabase).map(([key, condition]) => {
            const diseaseFeatures = [
                ...(condition?.clinicalFeatures?.symptoms || []), 
                ...(condition?.clinicalFeatures?.signs || [])
            ];
            
            const matchedFeatures = diseaseFeatures.filter(f => {
                const fNorm = normalize(f);
                return selectedNorms.some(selNorm => fNorm.includes(selNorm) || selNorm.includes(fNorm));
            });

            let tier = "atypical";
            if (matchedFeatures.length >= 4) tier = "strong";
            else if (matchedFeatures.length >= 2) tier = "moderate";

            return { 
                ...condition, 
                id: key, 
                name: condition?.name || key, 
                tier, 
                matchedFeatures: Array.from(new Set(matchedFeatures)), 
                matchCount: matchedFeatures.length, 
                isCritical: condition.urgency === 'Critical' || condition.urgency === 'High' 
            };
        }).filter(c => c.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount);

        return filterUrgency === 'critical' ? correlated.filter(c => c.isCritical) : correlated;
    }, [selectedSymptoms, filterUrgency]);

    const triageGroups = useMemo(() => ({
        strong: results.filter(r => r.tier === 'strong'),
        moderate: results.filter(r => r.tier === 'moderate'),
        atypical: results.filter(r => r.tier === 'atypical')
    }), [results]);

    return (
        /* Removed flex-col and overflow-hidden to allow natural scrolling */
        <div className="w-full h-full overflow-y-auto no-scrollbar animate-in fade-in duration-700 pb-20">
            
            {/* 1. SCROLLABLE INPUT PANEL */}
            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-6 transition-colors">
                <div className="flex justify-between items-center mb-6 px-1">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-1.5 bg-blue-500 rounded-full"></div>
                        <h2 className="text-[11px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em]">Diagnostic Triage</h2>
                    </div>
                    {/* Urgent Filter Button */}
                    <button 
                        onClick={() => setFilterUrgency(p => p === 'critical' ? 'all' : 'critical')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all active:scale-95 ${filterUrgency === 'critical' ? 'bg-rose-500 border-rose-400 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400'}`}
                    >
                        <Filter size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">Urgent Only</span>
                    </button>
                </div>

                <div className="relative" ref={searchRef}>
                    <div className="relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            value={searchQuery}
                            onFocus={() => setShowSuggestions(true)}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Identify cardinal symptoms..."
                            className="w-full pl-14 pr-6 py-5 rounded-[1.75rem] bg-slate-50 dark:bg-[#0f172a] border-2 border-transparent dark:border-slate-800 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-slate-900 dark:text-white font-bold text-base placeholder:text-slate-400"
                        />
                    </div>

                    {/* Suggestion Dropdown */}
                    {showSuggestions && localSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-[1.5rem] shadow-2xl z-[100] overflow-hidden">
                            {localSuggestions.map((sym, idx) => (
                                <button key={idx} onClick={() => { setSelectedSymptoms(p => [...p, sym]); setSearchQuery(''); setShowSuggestions(false); }}
                                    className="w-full text-left px-6 py-4 hover:bg-blue-50 dark:hover:bg-blue-600/10 border-b border-slate-50 dark:border-slate-800/50 last:border-0 text-sm text-slate-700 dark:text-slate-300 flex justify-between items-center transition-all">
                                    <span className="capitalize font-semibold">{sym}</span>
                                    <Check className="text-blue-500" size={16}/>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <SymptomChips items={selectedSymptoms} onRemove={(s) => setSelectedSymptoms(p => p.filter(i => i !== s))} onClear={() => setSelectedSymptoms([])} />
            </div>

            {/* 2. RESULTS SECTION - Follows the search panel in scroll flow */}
            <div className="space-y-8">
                {results.length > 0 ? (
                    <>
                        <ResultGroup title="Primary Differentials" icon={Zap} results={triageGroups.strong} onSelect={setSelectedDisease} />
                        <ResultGroup title="Secondary Considerations" icon={Microscope} results={triageGroups.moderate} onSelect={setSelectedDisease} />
                        <ResultGroup title="Low Correlation" icon={Activity} results={triageGroups.atypical} onSelect={setSelectedDisease} />
                    </>
                ) : (
                    <div className="py-20 flex flex-col items-center justify-center opacity-10">
                        <Stethoscope size={80} strokeWidth={1} className="dark:text-white" />
                    </div>
                )}
            </div>

            {/* Disease Modal */}
            {selectedDisease && (
                <DiseaseModal 
                    name={selectedDisease.name || "Disease Profile"} 
                    data={selectedDisease} 
                    onClose={() => setSelectedDisease(null)} 
                />
            )}
        </div>
    );
}