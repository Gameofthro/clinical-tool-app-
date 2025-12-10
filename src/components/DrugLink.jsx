import React, { useState } from 'react';

const DrugLink = ({ drugName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drugData, setDrugData] = useState(null);
  const [error, setError] = useState(null);

  // Logic: Fetch only if we haven't fetched before (Caching)
  const handleClick = async (e) => {
    e.preventDefault(); // Prevent bubbling if inside another clickable element
    e.stopPropagation();
    setIsOpen(true);
    
    if (drugData) return; // Use cached data if available

    setLoading(true);
    setError(null);

    try {
      // Call the API endpoint you just created
      const res = await fetch('/api/drug-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ drugName }),
      });

      if (!res.ok) throw new Error('Failed to fetch data');
      
      const data = await res.json();
      setDrugData(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load drug information. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      {/* The Trigger Button */}
      <button 
        onClick={handleClick}
        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-dotted ml-1 text-left inline-flex items-center gap-1"
        title="View Pharmacology"
      >
        {drugName}
        <span className="text-xs text-gray-400 dark:text-gray-500">ⓘ</span>
      </button>

      {/* The Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Click backdrop to close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto relative z-10 border border-slate-200 dark:border-slate-700 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-slate-700 bg-slate-50 dark:bg-slate-900 sticky top-0 z-20">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white truncate pr-4">{drugName}</h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-2xl text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium animate-pulse">Consulting AI Pharmacist...</p>
                </div>
              ) : error ? (
                 <div className="text-center py-8">
                    <p className="text-red-500 mb-2">{error}</p>
                    <button onClick={handleClick} className="text-sm text-blue-600 underline">Try Again</button>
                 </div>
              ) : drugData ? (
                <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300">
                  
                  {/* Class & MOA */}
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-1">Class & Mechanism</div>
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">{drugData.class}</div>
                    <div className="italic text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                      "{drugData.moa}"
                    </div>
                  </div>
                  
                  {/* Dosing & Risks Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-800/30">
                        <div className="text-xs font-bold text-green-700 dark:text-green-400 mb-1 uppercase">Standard Dosing</div>
                        <div className="font-medium text-green-900 dark:text-green-300">{drugData.dosing}</div>
                     </div>
                     <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-800/30">
                        <div className="text-xs font-bold text-red-700 dark:text-red-400 mb-1 uppercase">Contraindications</div>
                        <div className="font-medium text-red-900 dark:text-red-300">{drugData.contraindications?.[0] || "None listed"}</div>
                     </div>
                  </div>

                  {/* Clinical Pearl */}
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl">💡</div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-1 uppercase">Clinical Pearl</span>
                    <p className="text-blue-900 dark:text-blue-200 font-medium leading-relaxed relative z-10">
                      {drugData.pearl}
                    </p>
                  </div>
                  
                  <div className="text-[10px] text-center text-slate-400 mt-4">
                    AI-generated content. Verify with standard references.
                  </div>
                </div>
              ) : null}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default DrugLink;