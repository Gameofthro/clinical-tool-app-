import { useMemo } from 'react';
import { drugDatabase } from '../../../data/drug_database';
import { performClinicalSearch } from '../../search/tools/SearchLogic'; //

export const useDrugSearch = (searchTerm, activeClass = 'All') => {
    return useMemo(() => {
        let results = drugDatabase;

        if (activeClass !== 'All') {
            const filter = activeClass.toLowerCase();
            results = results.filter(d => {
                const classes = d.pharmacologic_class?.map(c => c.toLowerCase()) || [];
                // Handle complex mappings (Beta-blockers, Statins, etc.)
                if (filter === 'beta-blocker') return classes.some(c => c.includes('beta') && c.includes('blocker'));
                if (filter === 'statin') return classes.some(c => c.includes('statin') || c.includes('hmg-coa'));
                return classes.some(cls => cls.includes(filter));
            });
        }

        if (!searchTerm.trim()) return results.slice(0, 50);

        return performClinicalSearch(searchTerm, results, {
            nameKey: 'drug_name',
            categoryKey: 'pharmacologic_class',
            secondaryFields: ['indications_and_moa'] 
        }).slice(0, 50);
    }, [searchTerm, activeClass]);
};