import { useState, useEffect, useMemo } from "react";
import { Search, Stethoscope, Star, Baby, Activity, Mail, LogOut, Calculator, Scale } from "lucide-react";

// --- IMPORTS (Connecting to your files) ---
// This uses the files you created in src/components/ and src/data/
import { diseaseDatabase } from "./data/diseases";
import DiseaseCard from "./components/DiseaseCard";
import Auth from "./components/Auth";
import DiseaseModal from "./components/DiseaseModal";

const FAVORITES_STORAGE_KEY = "clinical_favorites";
const THEME_KEY = "clinical_theme";

export default function ClinicalTool() {
  // --- STATE ---
  const [user, setUser] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [prescriptions] = useState(diseaseDatabase);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [activeTool, setActiveTool] = useState("pediatric");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  // Calculators
  const [doseData, setDoseData] = useState({ weight: "", adultDose: "" });
  const [bmiData, setBmiData] = useState({ height: "", weight: "" });
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male" });
  const [results, setResults] = useState({ dose: null, bmi: null, gfr: null });

  // --- INITIALIZATION ---
  useEffect(() => {
    // 1. Check if user is logged in
    const savedUser = localStorage.getItem("clinical_current_user");
    if (savedUser) setUser(JSON.parse(savedUser));

    // 2. Load favorites
    const favs = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (favs) setFavorites(JSON.parse(favs));
    
    // 3. Load Dark Mode
    const isDark = localStorage.getItem(THEME_KEY) === "dark";
    setDarkMode(isDark);
    if(isDark) document.documentElement.classList.add("dark");
  }, []);

  // --- ACTIONS ---
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
    if(newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("clinical_current_user");
    setUser(null);
  };

  const handleLogin = (userData) => {
    localStorage.setItem("clinical_current_user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleContactUs = () => {
    window.location.href = "mailto:your-email@example.com?subject=Support Request";
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

  // --- CALCULATORS ---
  const calculateDose = () => {
    const w = parseFloat(doseData.weight); const d = parseFloat(doseData.adultDose);
    if (w && d) setResults({...results, dose: ((w / 70) * d).toFixed(1)});
  };
  const calculateBMI = () => {
    const h = parseFloat(bmiData.height)/100; const w = parseFloat(bmiData.weight);
    if (h && w) setResults({...results, bmi: (w / (h * h)).toFixed(1)});
  };
  const calculateGFR = () => {
    const cr = parseFloat(gfrData.creatinine); const age = parseFloat(gfrData.age);
    if (cr && age) {
      let gfr = 175 * Math.pow(cr, -1.154) * Math.pow(age, -0.203);
      if (gfrData.gender === "female") gfr *= 0.742;
      setResults({...results, gfr: gfr.toFixed(1)});
    }
  };

  // --- RENDER ---
  
  // 1. Show Login Screen if no user
  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  // 2. Show Main App
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-24 transition-colors duration-300">
      
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">Clinical<span className="text-blue-600 dark:text-blue-400">Assist</span></h1>
                <div className="flex items-center gap-1 mt-0.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {user.name ? `Dr. ${user.name}` : "Clinician"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* <button onClick={toggleTheme} className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition">
                {darkMode ? "☀️" : "🌙"}
              </button> */}
              <button onClick={handleContactUs} className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition">
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </button>
              <button onClick={handleLogout} className="p-2 bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-full border border-rose-200 dark:border-rose-900 transition">
                <LogOut className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          {activeTab === "search" && (
            <div className="relative flex items-center bg-slate-100 dark:bg-slate-800 focus-within:bg-white dark:focus-within:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-blue-400 transition-all shadow-inner">
              <Search className="h-4 w-4 text-slate-400 ml-3.5" />
              <input 
                className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-base text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                placeholder="Search disease (e.g. Asthma)..." 
                value={query} 
                onChange={e => {setQuery(e.target.value); setActiveTab("search");}} 
              />
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-4 space-y-6">
        
        {/* Tabs */}
        <div className="flex p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
          {["search", "tools"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} 
              className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${activeTab === tab ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
              {tab === "search" && <Search size={14} />}
              {tab === "tools" && <Calculator size={14} />}
              {tab}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-10">
          
          {activeTab === "search" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {query ? filteredResults.map(([key, data]) => (
                <DiseaseCard 
                  key={key} 
                  name={key} 
                  data={data} 
                  isFav={favorites.includes(key)} 
                  onToggle={() => toggleFavorite(key)} 
                  onClick={() => setSelectedDisease({ key, data })} 
                />
              )) : (
                <div className="col-span-full text-center py-20 opacity-60">
                  <Activity className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Search to see clinical guidelines</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "tools" && (
             <div className="space-y-4">
                {/* Tool Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[{id: 'pediatric', label: 'Dose', icon: Baby}, {id: 'bmi', label: 'BMI', icon: Scale}, {id: 'gfr', label: 'eGFR', icon: Activity}].map(tool => (
                    <button key={tool.id} onClick={() => setActiveTool(tool.id)} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${activeTool === tool.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                      <tool.icon size={14} /> {tool.label}
                    </button>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                   {activeTool === 'pediatric' && (
                     <div className="space-y-4">
                       <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Baby className="text-purple-500"/> Pediatric Calc</h2>
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Child Weight (kg)" />
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={doseData.adultDose} onChange={e => setDoseData({...doseData, adultDose: e.target.value})} placeholder="Adult Dose (mg)" />
                       <button onClick={calculateDose} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg">Calculate</button>
                       {results.dose && <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-center text-emerald-700 dark:text-emerald-400 font-black text-3xl">{results.dose} mg</div>}
                     </div>
                   )}
                   {/* Add other tools logic here if needed */}
                </div>
             </div>
          )}
        </div>
      </div>

      {/* MODAL */}
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
