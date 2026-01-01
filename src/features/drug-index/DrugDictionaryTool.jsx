import React, { useState } from 'react';
import { Search, Pill } from 'lucide-react';

// Hooks & Modular Components
import { useDrugSearch } from './hooks/useDrugSearch';
import { DrugCard } from './components/DrugCard';
import { FilterChips } from './components/FilterChips';
import MonographModal from './components/MonographModal';

export default function DrugDictionaryTool() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeClass, setActiveClass] = useState('All');
    const [selectedDrug, setSelectedDrug] = useState(null);

    // Using the custom hook for search logic
    const displayDrugs = useDrugSearch(searchTerm, activeClass);

    return (
        /* Standard flow layout to allow search bar to scroll up for more space */
        <div className="w-full h-full overflow-y-auto no-scrollbar animate-in fade-in duration-700 pb-20">
            
            {/* 1. SEARCH & FILTER PANEL */}
            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-6 transition-colors">
                <div className="relative group mb-4">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search 1,000+ Generics..."
                        className="w-full pl-14 pr-6 py-5 rounded-[1.75rem] bg-slate-50 dark:bg-[#0f172a] border-2 border-transparent dark:border-slate-800 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all text-slate-900 dark:text-white font-bold text-base placeholder:text-slate-400"
                    />
                </div>
                
                {/* Quick Filters for Pharmacologic Classes */}
                <FilterChips activeClass={activeClass} onSelect={setActiveClass} />
                
                {!searchTerm && activeClass === 'All' && (
                    <p className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-[0.2em]">Curated Clinical Essentials</p>
                )}
            </div>

            {/* 2. DRUG GRID SECTION */}
            <div className="grid grid-cols-2 gap-4 px-1">
                {displayDrugs.length > 0 ? (
                    displayDrugs.map(drug => (
                        <DrugCard 
                            key={drug.id} 
                            drug={drug} 
                            onSelect={setSelectedDrug} 
                        />
                    ))
                ) : (
                    <div className="col-span-2 py-20 text-center opacity-10">
                        <Pill size={80} strokeWidth={1} className="mx-auto dark:text-white" />
                        <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-500">No matches found</p>
                    </div>
                )}
            </div>

            {/* 3. MODAL OVERLAY */}
            <MonographModal 
                drug={selectedDrug} 
                isOpen={!!selectedDrug} 
                onClose={() => setSelectedDrug(null)} 
            />
        </div>
    );
}