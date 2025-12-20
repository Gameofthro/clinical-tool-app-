/**
 * COMPONENT: Drug Dictionary Tool (Final Compact Version)
 * DESCRIPTION: optimized for a 1000+ drug database using a curated initial view.
 * UI: 2-column grid, color-coded pharmacy badges, and blue input text.
 */

import React, { useState, useMemo } from 'react';
import { Search, Pill, AlertTriangle, ChevronRight } from 'lucide-react';
import MonographModal from '../components/MonographModal'; 
// Ensure your database is exported correctly from this path
import { drugDatabase } from '../data/drug_database';

// 1. High-utility curated list for the initial landing screen
const CURATED_LIST_NAMES = [
    "Paracetamol", 
    "Metoprolol",  
    "Hydrocodone", 
    "Methotrexate",
    "Amoxicillin", 
    "Atorvastatin"
];

// 2. Pharmacy-specific color coding for rapid recognition
const getClassColor = (classes) => {
    const cls = classes?.[0]?.toLowerCase() || "";
    if (cls.includes("opioid")) return "bg-rose-100 text-rose-600 border-rose-200";
    if (cls.includes("beta") || cls.includes("blocker")) return "bg-blue-100 text-blue-600 border-blue-200";
    if (cls.includes("analgesic")) return "bg-emerald-100 text-emerald-600 border-emerald-200";
    if (cls.includes("antifolate") || cls.includes("metabolite")) return "bg-purple-100 text-purple-600 border-purple-200";
    return "bg-slate-100 text-slate-600 border-slate-200";
};

export default function DrugDictionaryTool() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDrug, setSelectedDrug] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 3. Filter Logic: Show curated list when empty, full DB when searching
    const displayDrugs = useMemo(() => {
        if (!searchTerm) {
            return drugDatabase.filter(d => CURATED_LIST_NAMES.includes(d.drug_name));
        }
        const lowerSearch = searchTerm.toLowerCase();
        return drugDatabase.filter(d => 
            d.drug_name.toLowerCase().includes(lowerSearch) ||
            (Array.isArray(d.pharmacologic_class) && d.pharmacologic_class.some(c => c.toLowerCase().includes(lowerSearch)))
        );
    }, [searchTerm]);

    const handleSelect = (drug) => {
        setSelectedDrug(drug);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
            
            {/* SEARCH SECTION */}
            <div className="sticky top-0 z-10 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md pb-1">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search 1,000+ Generics..."
                        className="w-full pl-12 pr-4 py-4 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none transition-all shadow-sm text-blue-600 font-bold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {!searchTerm && (
                    <p className="text-[10px] font-black text-slate-400 uppercase mt-3 ml-4 tracking-[0.2em]">
                        Most Common Classes
                    </p>
                )}
            </div>

            {/* COMPACT DRUG GRID */}
            <div className="grid grid-cols-2 gap-3 pb-2">
                {displayDrugs.length > 0 ? (
                    displayDrugs.map(drug => (
                        <button
                            key={drug.id}
                            onClick={() => handleSelect(drug)}
                            className="group flex flex-col items-start p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md active:scale-95 transition-all text-left relative overflow-hidden h-36"
                        >
                            <div className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase border mb-2 ${getClassColor(drug.pharmacologic_class)}`}>
                                {drug.pharmacologic_class?.[0] || "General"}
                            </div>

                            <div className="flex justify-between items-start w-full mb-1">
                                <h3 className="text-sm font-black text-slate-800 dark:text-white leading-tight line-clamp-1 uppercase">
                                    {drug.drug_name}
                                </h3>
                                <ChevronRight size={14} className="text-slate-300 shrink-0" />
                            </div>

                            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-medium line-clamp-2 italic leading-tight mb-2">
                                {drug.indications_and_moa?.[0]?.mechanism_of_action}
                            </p>

                            {/* High Alert / Boxed Warning Detection */}
                            {drug.adverse_drug_events?.some(e => e.includes("Boxed Warning")) && (
                                <div className="mt-auto flex items-center gap-1 text-[8px] font-black text-rose-500 uppercase tracking-tighter">
                                    <AlertTriangle size={10} /> High Alert Item
                                </div>
                            )}
                        </button>
                    ))
                ) : (
                    <div className="col-span-2 py-10 text-center">
                        <Pill size={40} className="mx-auto text-slate-200 mb-2" />
                        <p className="text-slate-400 font-bold italic uppercase tracking-widest text-[10px]">Generic Not Found</p>
                    </div>
                )}
            </div>

            {/* CLEAN AD SPACE - No text included */}
            <div className="mt-auto w-full h-24 bg-slate-100/50 dark:bg-slate-800/40 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden shrink-0">
                {/* Your Static Banner Ad Image goes here */}
            </div>

            {/* Educational Footer */}
            <p className="text-[9px] text-slate-400 text-center uppercase tracking-tighter pb-4">
                Clinical Index • Updated Quarterly
            </p>

            <MonographModal 
                drug={selectedDrug} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}