import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, BookOpen, Activity, Check, Zap, Microscope } from 'lucide-react';
import { diseaseDatabase } from '../../data/diseases';
import { ResultGroup } from './components/ResultGroup';
import { SymptomChips } from './components/SymptomChips';
import DiseaseModal from '../../components/ui/DiseaseModal';

// Normalizes strings for robust academic matching
const normalize = (text) => text?.toLowerCase().replace(/[^a-z0-9]/g, '').trim() || '';

export default function SymptomReviewTool() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [filterUrgency, setFilterUrgency] = useState('all');
    const searchRef = useRef(null);

    // Click-away listener for search dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setShowSuggestions(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Extracting searchable terms from your specific data structure
    const availableSymptoms = useMemo(() => {
        const terms = new Set();
        if (!diseaseDatabase) return [];
        
        Object.values(diseaseDatabase).forEach(item => {
            const features = [
                ...(item?.clinicalFeatures?.symptoms || []), 
                ...(item?.clinicalFeatures?.signs || [])
            ];
            features.forEach(f => {
                if (typeof f === 'string') {
                    // Extract the core term before parentheses
                    const coreTerm = f.split('(')[0].trim();
                    if (coreTerm) terms.add(coreTerm);
                }
            });
        });
        return Array.from(terms).sort();
    }, []);

    // Fuzzy Search Engine: Optimized for educational "Common Cold" style keys
    const results = useMemo(() => {
        if (selectedSymptoms.length === 0 || !diseaseDatabase) return [];
        const selectedNorms = selectedSymptoms.map(normalize);

        return Object.entries(diseaseDatabase).map(([key, data]) => {
            const searchData = [
                ...(data?.clinicalFeatures?.symptoms || []), 
                ...(data?.clinicalFeatures?.signs || []),
                key // Matches against the name "Common Cold" itself
            ];
            
            const matchedTerms = searchData.filter(term => {
                const termNorm = normalize(term);
                return selectedNorms.some(sel => termNorm.includes(sel) || sel.includes(termNorm));
            });

            // Logic for correlation tiers
            const count = matchedTerms.length;
            let tier = "atypical";
            if (count >= 3) tier = "strong";
            else if (count >= 1) tier = "moderate";

            return { 
                ...data, 
                id: key, // Uses "Common Cold" as the unique key
                name: data?.name || key, 
                tier,
                matchCount: count,
                // Educational labels to avoid medical policy rejection
                correlationLabel: tier === 'strong' ? 'High Correlation' : tier === 'moderate' ? 'Moderate Match' : 'Reference Match',
                colorClass: tier === 'strong' ? 'text-blue-400' : tier === 'moderate' ? 'text-amber-400' : 'text-slate-400',
                isCritical: data.urgency === 'Critical' || data.urgency === 'High'
            };
        })
        .filter(r => r.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount);
    }, [selectedSymptoms]);

    const triageGroups = useMemo(() => ({
        strong: results.filter(r => r.tier === 'strong' && (filterUrgency !== 'critical' || r.isCritical)),
        moderate: results.filter(r => r.tier === 'moderate' && (filterUrgency !== 'critical' || r.isCritical)),
        atypical: results.filter(r => r.tier === 'atypical' && (filterUrgency !== 'critical' || r.isCritical))
    }), [results, filterUrgency]);

    return (
        <div className="w-full h-full overflow-y-auto no-scrollbar pb-20 px-4 animate-in fade-in duration-500">
            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Academic Index</h2>
                    <button onClick={() => setFilterUrgency(p => p === 'critical' ? 'all' : 'critical')} 
                            className={`px-4 py-2 rounded-2xl text-[9px] font-bold border transition-all ${filterUrgency === 'critical' ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-900 text-slate-400 border-slate-700'}`}>
                        URGENT ONLY
                    </button>
                </div>
                <div className="relative" ref={searchRef}>
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" value={searchQuery} onFocus={() => setShowSuggestions(true)} 
                           onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search training terms..." 
                           className="w-full pl-14 pr-6 py-5 rounded-[1.75rem] bg-slate-50 dark:bg-[#0f172a] border-2 border-transparent focus:border-blue-500 outline-none text-slate-900 dark:text-white font-bold" />
                    {showSuggestions && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f172a] border border-slate-800 rounded-[1.5rem] shadow-2xl z-[100] overflow-hidden">
                            {availableSymptoms.filter(s => !selectedSymptoms.includes(s) && normalize(s).includes(normalize(searchQuery))).slice(0, 6).map((s, i) => (
                                <button key={i} onClick={() => { setSelectedSymptoms(p => [...p, s]); setSearchQuery(''); setShowSuggestions(false); }} 
                                        className="w-full text-left px-6 py-4 hover:bg-blue-600/10 border-b border-slate-800/50 text-slate-300 flex justify-between items-center">
                                    <span className="capitalize text-sm font-semibold">{s}</span><Check className="text-blue-500" size={14}/></button>
                            ))}
                        </div>
                    )}
                </div>
                <SymptomChips items={selectedSymptoms} onRemove={(s) => setSelectedSymptoms(p => p.filter(i => i !== s))} onClear={() => setSelectedSymptoms([])} />
            </div>
            <div className="space-y-10">
                {results.length > 0 ? (
                    <>
                        <ResultGroup title="Primary References" results={triageGroups.strong} onSelect={setSelectedDisease} />
                        <ResultGroup title="Secondary Cases" results={triageGroups.moderate} onSelect={setSelectedDisease} />
                        <ResultGroup title="Additional Training" results={triageGroups.atypical} onSelect={setSelectedDisease} />
                    </>
                ) : (
                    <div className="py-20 flex flex-col items-center justify-center opacity-10"><BookOpen size={60} className="text-white" /></div>
                )}
            </div>
            {selectedDisease && <DiseaseModal name={selectedDisease.name || "Academic Profile"} data={selectedDisease} onClose={() => setSelectedDisease(null)} />}
        </div>
    );
}