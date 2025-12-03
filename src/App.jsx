import { useState, useEffect, useMemo } from "react";
import { Search, Stethoscope, Star, Baby, Activity, Mail, LogOut, User } from "lucide-react";

// --- IMPORT YOUR LOCAL FILES ---
// Ensure these files exist in your folders exactly as written:
import { diseaseDatabase } from "./data/diseases";
import DiseaseCard from "./components/DiseaseCard";
import Auth from "./components/Auth";
import DiseaseModal from "./components/DiseaseModal";

const FAVORITES_STORAGE_KEY = "clinical_favorites";

export default function ClinicalTool() {
  const [user, setUser] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState(null); // Controls the Modal Popup
  const [prescriptions] = useState(diseaseDatabase);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [favorites, setFavorites] = useState([]);
  const [doseData, setDoseData] = useState({ weight: "", adultDose: "" });
  const [calculatedResult, setCalculatedResult] = useState(null);

  // 1. Check Login Status on Load
  useEffect(() => {
    const savedUser = localStorage.getItem("clinical_current_user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const favs = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  // 2. Logout Function
  const handleLogout = () => {
    localStorage.removeItem("clinical_current_user");
    setUser(null);
  };

  // 3. Login Function
  const handleLogin = (userData) => {
    localStorage.setItem("clinical_current_user", JSON.stringify(userData));
    setUser(userData);
  };

  // 4. Contact Us Function
  const handleContactUs = () => {
    const subject = "Support Request - ClinicalAssist App";
    const body = "Hello Support Team, I need help with...";
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
    const newFavs = favorites.includes(key) ? favorites.filter(k => k !== key) : [...favorites, key];
    setFavorites(newFavs);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavs));
  };

  const calculateDose = () => {
    const w = parseFloat(doseData.weight);
    const d = parseFloat(doseData.adultDose);
    if (w && d) setCalculatedResult(((w / 70) * d).toFixed(1));
  };

  // --- IF NOT LOGGED IN, SHOW LOGIN SCREEN ---
  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  // --- MAIN APP INTERFACE ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-none">Clinical<span className="text-blue-600">Assist</span></h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Hello, Dr. {user.name.split(" ")[0]}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button onClick={handleContactUs} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition" title="Contact Support">
              <Mail className="h-5 w-5 text-slate-600" />
            </button>
            <button onClick={handleLogout} className="p-2 bg-rose-50 hover:bg-rose-100 rounded-full border border-rose-200 transition" title="Logout">
              <LogOut className="h-5 w-5 text-rose-600" />
            </button>
          </div>
        </div>

        {activeTab === "search" && (
          <div className="max-w-3xl mx-auto px-4 pb-3">
            <div className="relative flex items-center bg-slate-100 focus-within:bg-white rounded-xl border border-slate-200 focus-within:border-blue-400 transition-all shadow-inner">
              <Search className="h-4 w-4 text-slate-400 ml-3.5" />
              <input 
                className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-base text-slate-700"
                placeholder="Search disease..." value={query} onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-4 space-y-6">
        
        {/* Tabs */}
        <div className="flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
          {["search", "favorites", "tools"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${activeTab === tab ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:bg-slate-50"}`}>
              {tab === "search" && <Search size={14} />}
              {tab === "favorites" && <Star size={14} />}
              {tab === "tools" && <Baby size={14} />}
              {tab}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-10">
          
          {/* SEARCH RESULTS */}
          {activeTab === "search" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {query ? filteredResults.map(([key, data]) => (
                <DiseaseCard 
                  key={key} 
                  name={key} 
                  data={data} 
                  isFav={favorites.includes(key)} 
                  onToggle={() => toggleFavorite(key)} 
                  onClick={() => setSelectedDisease({ key, data })} // Opens the Modal
                />
              )) : (
                <div className="col-span-full text-center py-20 opacity-60">
                  <Activity className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                  <p className="text-slate-500 font-medium">Search to see clinical guidelines</p>
                </div>
              )}
            </div>
          )}

          {/* FAVORITES */}
          {activeTab === "favorites" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favorites.map(key => prescriptions[key] && (
                <DiseaseCard 
                  key={key} 
                  name={key} 
                  data={prescriptions[key]} 
                  isFav={true} 
                  onToggle={() => toggleFavorite(key)} 
                  onClick={() => setSelectedDisease({ key, data: prescriptions[key] })} 
                />
              ))}
              {favorites.length === 0 && (
                <div className="col-span-full text-center py-20 text-slate-400">
                  <Star className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  No favorites saved.
                </div>
              )}
            </div>
          )}

          {/* TOOLS */}
          {activeTab === "tools" && (
             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl">
               <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Baby className="text-purple-500"/> Pediatric Calc</h2>
               <div className="space-y-4">
                 <input type="number" className="w-full p-4 bg-slate-50 rounded-2xl font-bold" value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Child Weight (kg)" />
                 <input type="number" className="w-full p-4 bg-slate-50 rounded-2xl font-bold" value={doseData.adultDose} onChange={e => setDoseData({...doseData, adultDose: e.target.value})} placeholder="Adult Dose (mg)" />
                 <button onClick={calculateDose} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition">Calculate Safe Dose</button>
                 {calculatedResult && <div className="p-5 bg-emerald-50 rounded-2xl text-center text-emerald-700 font-black text-3xl">{calculatedResult} mg</div>}
               </div>
             </div>
          )}
        </div>
      </div>

      {/* --- POPUP MODAL (Hidden until clicked) --- */}
      {selectedDisease && (
        <DiseaseModal 
          name={selectedDisease.key} 
          data={selectedDisease.data} 
          onClose={() => setSelectedDisease(null)} 
        />
      )}

    </div>
  );
}