import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Stethoscope, Activity, Check, Zap, Microscope } from 'lucide-react';
import { diseaseDatabase } from '../../data/diseases';
import { ResultGroup } from './components/ResultGroup';
import { SymptomChips } from './components/SymptomChips';
import DiseaseModal from '../../components/ui/DiseaseModal';

const normalize = (text) => text?.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim() || '';

export default function SymptomReviewTool() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [filterUrgency, setFilterUrgency] = useState('all');
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setShowSuggestions(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const availableSymptoms = useMemo(() => {
        const rootMap = new Map();
        if (!diseaseDatabase) return [];
        const dbEntries = Object.values(diseaseDatabase);
        
        dbEntries.forEach(disease => {
            const rawFeatures = [...(disease?.clinicalFeatures?.symptoms || []), ...(disease?.clinicalFeatures?.signs || [])];
            rawFeatures.forEach(variant => {
                if (typeof variant !== 'string') return;
                let root = variant.split('(')[0].trim();
                // Standardizing common clinical roots for better indexing
                if (root.toLowerCase().includes('chest pain')) root = 'Chest Pain';
                if (root.toLowerCase().includes('fever')) root = 'Fever';
                rootMap.set(root, true);
            });
        });
        return Array.from(rootMap.keys()).sort();
    }, []);

    const localSuggestions = useMemo(() => {
        const query = normalize(searchQuery);
        if (!query) return [];
        return availableSymptoms.filter(sym => !selectedSymptoms.includes(sym) && normalize(sym).includes(query)).slice(0, 8);
    }, [searchQuery, availableSymptoms, selectedSymptoms]);

    // THE ENGINE: Optimized for 2026 Personal Account Compliance
    const results = useMemo(() => {
        if (selectedSymptoms.length === 0 || !diseaseDatabase) return [];
        const selectedNorms = selectedSymptoms.map(normalize);
        const dbEntries = Object.entries(diseaseDatabase);

        return dbEntries.map(([key, condition]) => {
            const clinicalData = [
                ...(condition?.clinicalFeatures?.symptoms || []), 
                ...(condition?.clinicalFeatures?.signs || []), 
                ...(condition?.keywords || [])
            ];
            
            // FUZZY MATCH: Ensuring high sensitivity for clinical rotations
            const matchedFeatures = clinicalData.filter(f => {
                if (!f) return false;
                const fNorm = normalize(f);
                return selectedNorms.some(sel => fNorm.includes(sel) || sel.includes(fNorm));
            });

            let tier = "atypical";
            if (matchedFeatures.length >= 4) tier = "strong";
            else if (matchedFeatures.length >= 2) tier = "moderate";

            return { 
                ...condition, id: key, name: condition?.name || key, tier,
                correlationLevel: tier === 'strong' ? 'High Correlation' : tier === 'moderate' ? 'Moderate Match' : 'Reference Match',
                colorClass: tier === 'strong' ? 'text-blue-400' : tier === 'moderate' ? 'text-amber-400' : 'text-slate-400',
                matchedFeatures: Array.from(new Set(matchedFeatures)), 
                matchCount: matchedFeatures.length, 
                isCritical: condition.urgency === 'Critical' || condition.urgency === 'High',
                pathophysiology: condition.pathophysiology || "Educational clinical reference data."
            };
        }).filter(c => c.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount);
    }, [selectedSymptoms]);

    const triageGroups = useMemo(() => ({
        strong: results.filter(r => r.tier === 'strong' && (filterUrgency !== 'critical' || r.isCritical)),
        moderate: results.filter(r => r.tier === 'moderate' && (filterUrgency !== 'critical' || r.isCritical)),
        atypical: results.filter(r => r.tier === 'atypical' && (filterUrgency !== 'critical' || r.isCritical))
    }), [results, filterUrgency]);

    return (
        <div className="w-full h-full overflow-y-auto no-scrollbar pb-20 px-2 animate-in fade-in duration-500">
            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-6">
                <div className="flex justify-between items-center mb-6 px-1">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-1.5 bg-blue-500 rounded-full"></div>
                        <h2 className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em]">Clinical Index Correlations</h2>
                    </div>
                    <button onClick={() => setFilterUrgency(p => p === 'critical' ? 'all' : 'critical')} className={`px-4 py-2 rounded-2xl text-[10px] font-bold border transition-all ${filterUrgency === 'critical' ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-50 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-700'}`}>URGENT ONLY</button>
                </div>
                <div className="relative" ref={searchRef}>
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="text" value={searchQuery} onFocus={() => setShowSuggestions(true)} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search clinical features..." className="w-full pl-14 pr-6 py-5 rounded-[1.75rem] bg-slate-50 dark:bg-[#0f172a] border-2 border-transparent focus:border-blue-500 outline-none text-slate-900 dark:text-white font-bold" />
                    {showSuggestions && localSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-[#0f172a] border border-slate-800 rounded-[1.5rem] shadow-2xl z-[100] overflow-hidden">
                            {localSuggestions.map((sym, idx) => (
                                <button key={idx} onClick={() => { setSelectedSymptoms(p => [...p, sym]); setSearchQuery(''); setShowSuggestions(false); }} className="w-full text-left px-6 py-4 hover:bg-blue-600/10 border-b border-slate-800/50 text-slate-700 dark:text-slate-300 flex justify-between items-center"><span className="capitalize font-semibold">{sym}</span><Check className="text-blue-500" size={16}/></button>
                            ))}
                        </div>
                    )}
                </div>
                <SymptomChips items={selectedSymptoms} onRemove={(s) => setSelectedSymptoms(p => p.filter(i => i !== s))} onClear={() => setSelectedSymptoms([])} />
            </div>
            <div className="space-y-8">
                {results.length > 0 ? (
                    <>
                        <ResultGroup title="Primary Correlations" results={triageGroups.strong} onSelect={setSelectedDisease} />
                        <ResultGroup title="Secondary Matches" results={triageGroups.moderate} onSelect={setSelectedDisease} />
                        <ResultGroup title="Reference Only" results={triageGroups.atypical} onSelect={setSelectedDisease} />
                    </>
                ) : (
                    <div className="py-20 flex flex-col items-center justify-center opacity-10"><Stethoscope size={80} className="dark:text-white" /></div>
                )}
            </div>
            {selectedDisease && <DiseaseModal name={selectedDisease.name || "Profile"} data={selectedDisease} onClose={() => setSelectedDisease(null)} />}
        </div>
    );
}