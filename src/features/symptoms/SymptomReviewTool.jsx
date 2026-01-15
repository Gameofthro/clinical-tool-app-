import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, BookOpen, Activity, Check, Zap, Microscope, AlertCircle } from 'lucide-react';
import { diseaseDatabase } from '../../data/diseases';
import { ResultGroup } from './components/ResultGroup';
import { SymptomChips } from './components/SymptomChips';
import DiseaseModal from '../../components/ui/DiseaseModal';
// Authority list for automatic high-acuity flagging
const EMERGENCY_CATEGORIES = [
    'Cardiology', 
    'Emergency', 
    'Toxicology', 
    'Critical Care', 
    'Trauma', 
    'Pulmonology'
];

const CRITICAL_DISEASES = [
    'Myocardial Infarction',
    'Anaphylaxis',
    'Pulmonary Embolism',
    'Sepsis',
    'Meningitis',
    'Aortic Dissection',
    'Pneumothorax',
    'Acute Heart Failure',
    'Stroke',
    'Hypertensive Emergency',
    'Cardiac Tamponade',
    'Diabetic Ketoacidosis'
];

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

 const results = useMemo(() => {
    if (selectedSymptoms.length === 0 || !diseaseDatabase) return [];
    const selectedNorms = selectedSymptoms.map(normalize);

    return Object.entries(diseaseDatabase).map(([key, data]) => {
        // 1. Standard Matching Logic
        const searchData = [
            ...(data?.clinicalFeatures?.symptoms || []), 
            ...(data?.clinicalFeatures?.signs || []),
            key 
        ];
        
        const matchedTerms = searchData.filter(term => {
            const termNorm = normalize(term);
            return selectedNorms.some(sel => termNorm.includes(sel) || sel.includes(termNorm));
        });

        const count = matchedTerms.length;

        // 2. CLINICAL LOGIC: Flag as Critical based on Authority Lists
        const isCritical = 
            EMERGENCY_CATEGORIES.includes(data.category) || 
            CRITICAL_DISEASES.includes(key) ||
            (data.redFlags && data.redFlags.length > 5);

        // 3. TIER PROMOTION: Fix for "Secondary Cases" logic error
        // If it's a critical disease, it only needs 1 symptom match to be "Strong/Primary"
        let tier = "atypical";
        if (count >= 3 || (isCritical && count >= 1)) {
            tier = "strong"; 
        } else if (count >= 1) {
            tier = "moderate";
        }

        return { 
            ...data, 
            id: key, 
            name: data?.name || key, 
            tier,
            matchCount: count,
            isCritical,
            // Senior Dev Polish: Clearer labels for clinical review
            correlationLabel: tier === 'strong' ? 'Primary Reference' : tier === 'moderate' ? 'Secondary Match' : 'Additional Training',
            colorClass: tier === 'strong' ? 'text-blue-400' : tier === 'moderate' ? 'text-amber-400' : 'text-slate-400'
        };
    })
    .filter(r => r.matchCount > 0)
    .sort((a, b) => {
        // Sort by Match Count, then prioritize Critical cases within the same count
        if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount;
        return (b.isCritical ? 1 : 0) - (a.isCritical ? 1 : 0);
    });
}, [selectedSymptoms]);

const triageGroups = useMemo(() => {
    const isUrgentFilterActive = filterUrgency === 'critical';

    // 1. FILTER: If Acuity is ON, ONLY show true critical cases
    const filteredResults = isUrgentFilterActive 
        ? results.filter(r => r.isCritical === true) 
        : results;

    // 2. GROUPING: Group the filtered list into tiers
    return {
        strong: filteredResults.filter(r => r.tier === 'strong'),
        moderate: filteredResults.filter(r => r.tier === 'moderate'),
        atypical: filteredResults.filter(r => r.tier === 'atypical')
    };
}, [results, filterUrgency]);
return (
        <div className="w-full h-full overflow-y-auto no-scrollbar pb-20 px-4 animate-in fade-in duration-500">
            {/* 1. SEARCH & TRIAGE HEADER */}
            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-6 transition-colors">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Clinical Triage Index</h2>
                    
                    {/* UPGRADED: Compact High Acuity Toggle */}
                    <button 
                        onClick={() => setFilterUrgency(p => p === 'critical' ? 'all' : 'critical')} 
                        className={`relative p-2 rounded-xl transition-all duration-300 border flex items-center gap-2
                        ${filterUrgency === 'critical' 
                            ? 'bg-rose-500/10 border-rose-500 text-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.1)]' 
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-400'}`}
                    >
                        <AlertCircle size={14} className={filterUrgency === 'critical' ? 'animate-pulse' : ''} />
                        <span className="text-[9px] font-black uppercase tracking-tight">
                            {filterUrgency === 'critical' ? 'Acuity Active' : 'All Cases'}
                        </span>
                        
                        {filterUrgency === 'critical' && (
                            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                            </span>
                        )}
                    </button>
                </div>

                <div className="relative" ref={searchRef}>
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                        type="text" 
                        value={searchQuery} 
                        onFocus={() => setShowSuggestions(true)} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        placeholder="Search training terms..." 
                        className="w-full pl-14 pr-6 py-5 rounded-[1.75rem] bg-slate-50 dark:bg-[#0f172a] border-2 border-transparent focus:border-blue-500 outline-none text-slate-900 dark:text-white font-bold transition-all" 
                    />
                    
                    {showSuggestions && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-2xl z-[100] overflow-hidden">
                            {availableSymptoms
                                .filter(s => !selectedSymptoms.includes(s) && normalize(s).includes(normalize(searchQuery)))
                                .slice(0, 6)
                                .map((s, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => { setSelectedSymptoms(p => [...p, s]); setSearchQuery(''); setShowSuggestions(false); }} 
                                        className="w-full text-left px-6 py-4 hover:bg-blue-600/10 border-b border-slate-100 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 flex justify-between items-center transition-colors"
                                    >
                                        <span className="capitalize text-sm font-semibold">{s}</span>
                                        <Check className="text-blue-500" size={14}/>
                                    </button>
                                ))
                            }
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