import React from 'react';
import { X, Trash2 } from 'lucide-react';

export const SymptomChips = ({ items, onRemove, onClear }) => {
    if (items.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-4 min-h-[32px]">
            {items.map((sym, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase rounded-xl shadow-sm">
                    {sym}
                    <button onClick={() => onRemove(sym)} className="hover:bg-white/20 rounded-full p-0.5">
                        <X size={10}/>
                    </button>
                </span>
            ))}
            <button onClick={onClear} className="text-[9px] font-bold text-rose-500 uppercase flex items-center gap-1 ml-1">
                <Trash2 size={12} /> Clear All
            </button>
        </div>
    );
};