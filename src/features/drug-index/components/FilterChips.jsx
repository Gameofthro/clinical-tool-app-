import React from 'react';

// Expanded to cover major drug classes for medical/pharmacy education
const CLASSES = [
    'All', 
    'Analgesic', 
    'Antibiotic', 
    'Anticoagulant',
    'Antidepressant',
    'Beta-Blocker', 
    'Benzodiazepine',
    'Diuretic',
    'NSAID',
    'Opioid', 
    'Statin'
];

export const FilterChips = ({ activeClass, onSelect }) => {
    return (
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 px-1 mb-4 snap-x">
            {CLASSES.map((cls) => (
                <button
                    key={cls}
                    onClick={() => onSelect(cls)}
                    className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.12em] whitespace-nowrap transition-all border-2 active:scale-90 snap-align-start ${
                        activeClass === cls 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/40' 
                        : 'bg-white dark:bg-[#1e293b] border-slate-100 dark:border-slate-800 text-slate-400'
                    }`}
                >
                    {cls}
                </button>
            ))}
        </div>
    );
};