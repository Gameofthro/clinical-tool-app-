import { useMemo } from 'react';
import { drugDatabase } from '../../../data/drug_database';

export const useDrugSearch = (searchTerm, activeClass = 'All') => {
    return useMemo(() => {
        const query = searchTerm.toLowerCase().trim();
        let results = drugDatabase;

        // 1. ADVANCED CATEGORY MATCHING
        if (activeClass !== 'All') {
            results = results.filter(d => {
                const drugClasses = d.pharmacologic_class?.map(c => c.toLowerCase()) || [];
                const filter = activeClass.toLowerCase();
                
                // Logic: Mapping simple chip names to complex database strings
                if (filter === 'beta-blocker') return drugClasses.some(c => c.includes('beta') && c.includes('blocker'));
                if (filter === 'statin') return drugClasses.some(c => c.includes('statin') || c.includes('hmg-coa'));
                if (filter === 'diuretic') return drugClasses.some(c => c.includes('diuretic'));
                if (filter === 'benzodiazepine') return drugClasses.some(c => c.includes('benzodiazepine'));
                if (filter === 'anticoagulant') return drugClasses.some(c => c.includes('anticoagulant') || c.includes('thrombin'));
                
                // Default partial match for NSAID, Opioid, Antibiotic, etc.
                return drugClasses.some(cls => cls.includes(filter));
            });
        }

        // 2. SEARCH OVERRIDE
        if (query) {
            results = results.filter(d => 
                d.drug_name.toLowerCase().includes(query) ||
                d.pharmacologic_class?.some(c => c.toLowerCase().includes(query))
            );
        }

        return results.slice(0, 50); 
    }, [searchTerm, activeClass]);
};