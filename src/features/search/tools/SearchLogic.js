/**
 * src/features/search/tools/IndexingLogic.js
 * Optimized Search Engine for Large-Scale Nested Data
 */

// 1. FAST DISTANCE CALC: Avoids full matrix allocation for memory efficiency
const getFastMatchScore = (s1, s2) => {
    let longer = s1.length > s2.length ? s1 : s2;
    let shorter = s1.length > s2.length ? s2 : s1;
    if (longer.length === 0) return 1.0;
    
    // Simple index-based similarity for performance
    return (longer.length - editDistance(longer, shorter)) / parseFloat(longer.length);
};

// Standard Levenshtein optimized for Build 6
const editDistance = (a, b) => {
    const row = Array(a.length + 1).fill(0).map((_, i) => i);
    for (let i = 1; i <= b.length; i++) {
        let prev = i;
        for (let j = 1; j <= a.length; j++) {
            let val = b[i - 1] === a[j - 1] ? row[j - 1] : Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
};

export const performClinicalSearch = (query, dataset, config = {}) => {
    const { nameKey = 'name', categoryKey = 'category', secondaryFields = [] } = config; 
    const term = (query || '').toLowerCase().trim();
    if (!term) return [];

    // Optimization: Pre-filter array to avoid expensive loops on empty objects
    const dataArray = Array.isArray(dataset) ? dataset : Object.values(dataset || {});

    return dataArray.map(item => {
        if (!item) return { searchScore: 0 };
        
        let score = 0;
        const name = String(item[nameKey] || '').toLowerCase();
        
        // A. PRIMARY MATCHING (Highest Weight)
        if (name === term) score += 100;
        else if (name.startsWith(term)) score += 60;
        else if (name.includes(term)) score += 30;

        // B. NESTED SCANNING (Fixed for nested mechanism objects)
        secondaryFields.forEach(field => {
            const val = item[field];
            if (!val) return;

            let content = "";
            if (Array.isArray(val)) {
                content = val.map(e => (typeof e === 'object' ? Object.values(e).join(" ") : e)).join(" ");
            } else if (typeof val === 'object') {
                content = Object.values(val).join(" ");
            } else {
                content = String(val);
            }

            if (content.toLowerCase().includes(term)) score += 50; 
        });

        // C. PERFORMANCE GUARDED FUZZY MATCH
        // Only run fuzzy check if no strong match found and term is significant
        if (score < 30 && term.length > 3 && name.length > 0) {
            const similarity = getFastMatchScore(term, name.substring(0, term.length + 2));
            if (similarity > 0.7) score += 20; 
        }

        return { ...item, searchScore: score };
    })
    .filter(i => i.searchScore > 10)
    .sort((a, b) => b.searchScore - a.searchScore)
    .slice(0, 40); // LIMIT: Prevents DOM lag with 25k entries
};