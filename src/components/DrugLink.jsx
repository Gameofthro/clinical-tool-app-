import React from 'react';
import { drugDatabase } from '../data/drug_database';

// SAFE INITIALIZATION: Ensure drugDatabase is an array before processing
const safeDrugList = Array.isArray(drugDatabase) ? drugDatabase : [];
const drugNamesSet = new Set(
  safeDrugList
    .filter(d => d && d.drug_name)
    .map(d => d.drug_name.toLowerCase())
);

const DrugLink = ({ text, onDrugClick }) => {
  if (!text || typeof text !== 'string') return <span>{text}</span>;

  // Split text by spaces and common punctuation marks (to isolate the drug name like "Amlodipine" from ", 5mg")
  const parts = text.split(/(\s+|[.,;()])/);

  return (
    <span>
      {parts.map((part, index) => {
        const cleanWord = part.trim().toLowerCase();
        
        // Check if the cleaned word exists in our database
        if (cleanWord && drugNamesSet.has(cleanWord)) {
          return (
            <span
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicks from closing parent modals
                if (onDrugClick) onDrugClick(cleanWord); // Pass the raw drug name (e.g., "amlodipine")
              }}
              className="text-blue-600 dark:text-blue-400 font-bold cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              title={`View Monograph for ${part}`}
            >
              {part}
            </span>
          );
        }
        // Otherwise return plain text
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default DrugLink;