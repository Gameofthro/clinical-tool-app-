// src/App.jsx
import { useState, useEffect, useMemo } from "react";
import { Search, Stethoscope, Menu, Star, Baby, Activity } from "lucide-react";
import CryptoJS from "crypto-js";

// IMPORT YOUR NEW FILES HERE
import { diseaseDatabase } from "./data/diseases";
import DiseaseCard from "./components/DiseaseCard";

const LOCAL_STORAGE_KEY = "clinical_prescriptions_v5";
const FAVORITES_STORAGE_KEY = "clinical_favorites";
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY || "dev_key"; 

export default function ClinicalTool() {
  const [prescriptions, setPrescriptions] = useState(diseaseDatabase); // Use the imported database
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [favorites, setFavorites] = useState([]);
  const [doseData, setDoseData] = useState({ weight: "", adultDose: "" });
  const [calculatedResult, setCalculatedResult] = useState(null);

  // Load Favorites from Storage
  useEffect(() => {
    const favs = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  // Search Logic
  const filteredResults = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase();
    return Object.entries(prescriptions).filter(([key, data]) => {
      return key.includes(lowerQ) || 
             data.symptoms.some(s => s.toLowerCase().includes(lowerQ)) ||
             data.category.toLowerCase().startsWith(lowerQ);
    });
  }, [query, prescriptions]);

  const toggleFavorite = (key) => {
    const newFavs = favorites.includes(key) 
      ? favorites.filter(k => k !== key) 
      : [...favorites, key];
    setFavorites(newFavs);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavs));
  };

  const calculateDose = () => {
    const w = parseFloat(doseData.weight);
    const d = parseFloat(doseData.adultDose);
    if (w && d) setCalculatedResult(((w / 70) * d).toFixed(1));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* 1. GLASS HEADER */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-none tracking-tight">Clinical<span className="text-blue-600">Assist</span></h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Therapy Guide</p>
            </div>
          </div>
          <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition border border-slate-200">
            <Menu className="h-5 w-5 text-slate-600" />
          </button>
        </div>
        
        {/* Search Bar */}
        {activeTab === "search" && (
          <div className="max-w-3xl mx-auto px-4 pb-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-slate-100 group-focus-within:bg-white rounded-xl border border-slate-200 group-focus-within:border-blue-400 transition-all shadow-inner group-focus-within:shadow-md">
                <Search className="h-4 w-4 text-slate-400 ml-3.5" />
                <input 
                  className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-base text-slate-700 placeholder:text-slate-400"
                  placeholder="Search disease (e.g., Asthma)..." 
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4 space-y-6">
        {/* 2. NAVIGATION PILLS */}
        <div className="flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          {["search", "favorites", "tools"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${
                activeTab === tab 
                ? "bg-slate-900 text-white shadow-md transform scale-[1.02]" 
                : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {tab === "search" && <Search size={14} />}
              {tab === "favorites" && <Star size={14} />}
              {tab === "tools" && <Baby size={14} />}
              {tab}
            </button>
          ))}
        </div>

        {/* 3. MAIN CONTENT */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          
          {/* SEARCH TAB */}
          {activeTab === "search" && (
            <div className="space-y-4">
              {query ? (
                filteredResults.length > 0 ? (
                  filteredResults.map(([key, data]) => (
                    <DiseaseCard 
                      key={key} 
                      name={key} 
                      data={data} 
                      isFav={favorites.includes(key)} 
                      onToggle={() => toggleFavorite(key)} 
                    />
                  ))
                ) : (
                  <div className="text-center py-16 opacity-60">
                    <Search className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-500 font-medium">No matches found for "{query}"</p>
                  </div>
                )
              ) : (
                <div className="text-center py-20">
                   <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4 animate-pulse">
                     <Activity className="h-8 w-8 text-blue-500" />
                   </div>
                   <h3 className="text-slate-900 font-bold text-lg">Ready to Help</h3>
                   <p className="text-slate-500 text-sm mt-1">Search for symptoms, diseases, or drugs.</p>
                </div>
              )}
            </div>
          )}

          {/* FAVORITES TAB */}
          {activeTab === "favorites" && (
            <div className="space-y-4">
              {favorites.length > 0 ? (
                favorites.map(key => prescriptions[key] && (
                  <DiseaseCard 
                    key={key} 
                    name={key} 
                    data={prescriptions[key]} 
                    isFav={true} 
                    onToggle={() => toggleFavorite(key)} 
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Star className="h-12 w-12 mb-3 stroke-1" />
                  <p className="text-sm">Tap the star icon to save diseases here.</p>
                </div>
              )}
            </div>
          )}

          {/* TOOLS TAB */}
          {activeTab === "tools" && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-3 bg-purple-100 rounded-2xl text-purple-600"><Baby className="h-6 w-6" /></div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Pediatric Dose Calc</h2>
                  <p className="text-xs text-slate-500">Based on Clark's Rule</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Child Weight (kg)</label>
                    <input type="number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 transition font-bold text-lg text-slate-700" 
                      value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Adult Dose (mg)</label>
                    <input type="number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 transition font-bold text-lg text-slate-700" 
                      value={doseData.adultDose} onChange={e => setDoseData({...doseData, adultDose: e.target.value})} placeholder="0" />
                  </div>
                </div>
                
                <button onClick={calculateDose} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition active:scale-[0.98]">
                  Calculate Safe Dose
                </button>

                {calculatedResult && (
                  <div className="mt-4 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl text-center">
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Recommended Dose</p>
                    <p className="text-4xl font-black text-emerald-700 mt-2">{calculatedResult} <span className="text-lg font-bold">mg</span></p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}