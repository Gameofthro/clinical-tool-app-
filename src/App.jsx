import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, Stethoscope, Baby, Activity, Mail, LogOut, 
  Calculator, Scale, Moon, Sun, BookOpen, Check, ClipboardList, Heart, Droplet, Pill, ArrowLeft
} from "lucide-react";

// --- IMPORTS ---
import { diseaseDatabase } from "./data/diseases";
// Removed drug modal/search dependencies

import DiseaseCard from "./components/DiseaseCard";
import Auth from "./components/Auth";
import DiseaseModal from "./components/DiseaseModal";
import DiagnosisTool from "./components/DiagnosisTool"; 
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import DrugDictionaryTool from "./components/DrugDictionaryTool"; // NEW TOOL IMPORT

import { calculatePediatricDose, calculateBMI, calculateGFR, calculateMAP, calculateMaintenanceFluid } from "./utils/calculators";

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1"; 

const SUPPORT_EMAIL = "clinicalassist.center@gmail.com"; 

export default function ClinicalTool() {
  // --- STATE ---
  const [user, setUser] = useState(null);
  
  // Modals & Selection
  const [selectedDisease, setSelectedDisease] = useState(null);
  
  // Drug Directory State (REMOVED: isDrugModalOpen, selectedDrugInitial)

  // Search - Data Initialization
  const [prescriptions] = useState(diseaseDatabase || {}); 

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home"); // Changed default to 'home'
  const [activeTool, setActiveTool] = useState("pediatric");
  const [darkMode, setDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  
  // Legal
  const [showTerms, setShowTerms] = useState(false);
  const [mandatoryTerms, setMandatoryTerms] = useState(false);

  // Calculator States
  const [doseData, setDoseData] = useState({ weight: "", adultDose: "", unit: "kg" });
  const [bmiData, setBmiData] = useState({ height: "", weight: "", wUnit: "kg", hUnit: "cm" });
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male", unit: "mg/dl" });
  const [mapData, setMapData] = useState({ sbp: "", dbp: "" });
  const [maintData, setMaintData] = useState({ weight: "", unit: "kg" });
  
  const [results, setResults] = useState({ dose: null, bmi: null, gfr: null, map: null, maintenance: null });

  // --- INITIALIZATION ---
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("clinical_current_user");
      if (savedUser) setUser(JSON.parse(savedUser));
      
      const savedTheme = localStorage.getItem(THEME_KEY);
      const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDarkMode(isDark);
      if (isDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (error) {
      console.error("Initialization error:", error);
    }
  }, []);

  // --- MODAL SCROLL LOCK EFFECT ---
  useEffect(() => {
    // Only locks scroll for DiseaseModal and LegalModal
    const isModalOpen = selectedDisease || showTerms;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDisease, showTerms]);

  // --- CRITICAL: WATCH FOR LOGIN TO SHOW TERMS ---
  useEffect(() => {
    if (user) {
        const hasAccepted = localStorage.getItem(TERMS_KEY);
        if (!hasAccepted) {
            setShowTerms(true);
            setMandatoryTerms(true); 
        }
    }
  }, [user]);

  // --- ACTIONS ---
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
    if (newMode) document.documentElement.classList.add("dark");
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

  const handleSupportClick = () => {
    navigator.clipboard.writeText(SUPPORT_EMAIL).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  // --- LEGAL HANDLERS ---
  const handleAcceptTerms = () => {
    localStorage.setItem(TERMS_KEY, "true");
    setShowTerms(false);
    setMandatoryTerms(false);
  };

  const handleOpenTermsReview = () => {
    setMandatoryTerms(false); 
    setShowTerms(true);
  };

  // --- SEARCH LOGIC (Cleaned: Disease Search Only) ---
  const filteredResults = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase().trim();
    
    // Only filters Diseases now
    return Object.entries(prescriptions || {})
      .filter(([key, data]) => {
        const nameMatch = key.toLowerCase().includes(lowerQ);
        const symptomMatch = data.clinicalFeatures?.symptoms?.some(s => 
          s.toLowerCase().includes(lowerQ)
        ) || false; 
        const categoryMatch = data.category?.toLowerCase().includes(lowerQ);

        return nameMatch || symptomMatch || categoryMatch;
      })
      .map(([key, data]) => ({ type: 'disease', name: key, data: data }));
  }, [query, prescriptions]);

  const getCategoryColor = (category) => {
    if (!category) return "blue";
    if (category.includes("Respiratory")) return "blue";
    if (category.includes("Cardiology")) return "red";
    if (category.includes("Gastro")) return "orange";
    if (category.includes("Neuro")) return "purple";
    if (category.includes("Endocrinology")) return "emerald";
    return "blue";
  };

  // --- CALCULATORS (RESTORED LOGIC) ---
  const handleDoseCalc = () => {
    if (!doseData.weight || !doseData.adultDose) return;
    const res = calculatePediatricDose(doseData.weight, doseData.adultDose, doseData.unit);
    setResults(prev => ({...prev, dose: res}));
  };
  const handleBMICalc = () => {
    if (!bmiData.weight || !bmiData.height) return;
    const res = calculateBMI(bmiData.weight, bmiData.height, bmiData.wUnit, bmiData.hUnit);
    if (res) setResults(prev => ({...prev, bmi: res}));
  };
  const handleGFRCalc = () => {
    if (!gfrData.creatinine || !gfrData.age) return;
    const res = calculateGFR(gfrData.creatinine, gfrData.age, gfrData.gender, gfrData.unit);
    setResults(prev => ({...prev, gfr: res}));
  };
  const handleMAPCalc = () => {
    if (!mapData.sbp || !mapData.dbp) return;
    const res = calculateMAP(mapData.sbp, mapData.dbp);
    setResults(prev => ({...prev, map: res}));
  };
  const handleMaintenanceCalc = () => {
    if (!maintData.weight) return;
    const res = calculateMaintenanceFluid(maintData.weight, maintData.unit);
    setResults(prev => ({...prev, maintenance: res}));
  };

  const handleCardClick = (tabId) => {
    // If clicking a card, set the active tab
    setActiveTab(tabId);
  }

  const handleGoHome = () => {
    // Allows returning to the main tile view
    setActiveTab("home");
    setQuery(""); // Clear search query when going home
  }


  if (!user) return <Auth onLogin={handleLogin} />;
  
  // Define tools for the home page tiles
  const toolTiles = [
    { id: "search", label: "Disease Search", description: "Search clinical guidelines and differential diagnoses.", icon: Search },
    { id: "drug-index", label: "Drug Index", description: "View drug monographs, pharmacology, and adverse events.", icon: Pill },
    { id: "diagnosis", label: "AI Diagnosis", description: "Input symptoms for potential diagnoses.", icon: ClipboardList },
    { id: "tools", label: "Calculators", description: "Access pediatric dosing, BMI, and GFR calculators.", icon: Calculator }
  ];


  return (
    // Outer container: full screen height, flex column to stack header, content, and footer
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-300">
      
      {/* --- MODALS --- */}
      <LegalModal 
        isOpen={showTerms} 
        onAccept={handleAcceptTerms} 
        onClose={() => setShowTerms(false)}
        isMandatory={mandatoryTerms}
      />
      
      {/* HEADER (Sticky) */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">Clinical<span className="text-blue-600 dark:text-blue-400">Assist</span></h1>
                <div className="flex items-center gap-1 mt-0.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.name ? `Dr. ${user.name}` : "Clinician"}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={toggleTheme} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition text-slate-600 dark:text-slate-300">
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>
              
              <button 
                onClick={handleSupportClick}
                className={`p-2 rounded-full border transition flex items-center justify-center ${
                  emailCopied 
                    ? "bg-green-100 border-green-200 text-green-600 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400" 
                    : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                title={emailCopied ? "Email Copied!" : "Copy Support Email"}
              >
                {emailCopied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </button>

              <button onClick={handleLogout} className="p-2 bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-full border border-rose-200 dark:border-rose-900 transition">
                <LogOut className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              </button>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">"Empowering clinicians with precision and speed."</p>
          </div>

          {/* Back to Home Button (Appears when not on home screen) */}
          {activeTab !== "home" && (
            <div className="max-w-3xl mx-auto px-4 mb-4">
              <button
                onClick={handleGoHome}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Menu
              </button>
            </div>
          )}

          {/* Search Bar - Only visible on Search Tab or Home (where search field acts as navigation trigger) */}
          {(activeTab === "search" || activeTab === "home") && (
            <div className="max-w-xl mx-auto relative flex items-center bg-slate-100 dark:bg-slate-800 focus-within:bg-white dark:focus-within:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-blue-400 transition-all shadow-inner">
              <Search className="h-4 w-4 text-slate-400 ml-3.5" />
              <input 
                className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-base text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                placeholder="Search diseases (e.g. Asthma)..." 
                value={query} 
                onChange={e => {setQuery(e.target.value); setActiveTab("search");}} 
              />
            </div>
          )}
        </div>
      </div>

      {/* CONTENT AREA (Main Scrollable Body - Uses flex-1 to fill space) */}
      <div className="flex-grow max-w-3xl mx-auto px-4 mt-4 w-full flex flex-col"> {/* Removed space-y-6 */}
        
        {/* Results/Tool View (Uses entire remaining vertical space) */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 w-full h-full">
          
          {/* Default/Home View: Show Tiles */}
          {activeTab === "home" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {toolTiles.map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handleCardClick(tile.id)}
                  // Adjusted padding and min-height for better fit
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all text-left group min-h-[120px]" 
                >
                  <div className="flex items-center justify-between mb-2">
                    {/* Reduced icon size for better fit */}
                    <tile.icon size={24} className={`text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform`} />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{tile.id.toUpperCase()}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tile.label}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2"> 
                    {tile.description}
                  </p>
                </button>
              ))}
            </div>
          )}

          {/* TAB 1: DISEASE SEARCH */}
          {activeTab === "search" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredResults.length > 0 ? filteredResults.map((result) => {
                if (result.type === 'disease') {
                  const data = result.data;
                  return (
                    <DiseaseCard 
                      key={`disease-${result.name}`} 
                      name={result.name} 
                      data={{
                        ...data,
                        color: getCategoryColor(data.category),
                        firstLine: data.pathophysiology 
                      }}
                      onClick={() => setSelectedDisease({ name: result.name, ...data })} 
                    />
                  );
                }
              }) : (
                <div className="col-span-full text-center py-20 opacity-60">
                  <BookOpen className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Start typing to search diseases</p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DIAGNOSIS (AI INTEGRATED) */}
          {activeTab === "diagnosis" && (<DiagnosisTool />)}

          {/* TAB 3: CALCULATORS */}
          {activeTab === "tools" && (
             <div className="space-y-4">
               {/* Tool Navigation Buttons */}
               <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                 {[{id: 'pediatric', label: 'Dose', icon: Baby}, {id: 'bmi', label: 'BMI', icon: Scale}, {id: 'gfr', label: 'eGFR', icon: Activity}, {id: 'map', label: 'MAP', icon: Heart}, {id: 'maintenance', label: 'Maintenance', icon: Droplet}].map(tool => (
                   <button key={tool.id} onClick={() => setActiveTool(tool.id)} className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${activeTool === tool.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                     <tool.icon size={14} /> {tool.label}
                   </button>
                 ))}
               </div>

               <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                  {/* PEDIATRIC DOSE CALCULATOR UI */}
                  {activeTool === 'pediatric' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Baby className="text-purple-500"/> Pediatric Calc</h2>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-blue-500 outline-none" 
                          value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Child Weight" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={doseData.unit} onChange={e => setDoseData({...doseData, unit: e.target.value})}>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>
                      <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-blue-500 outline-none" 
                        value={doseData.adultDose} onChange={e => setDoseData({...doseData, adultDose: e.target.value})} placeholder="Adult Dose (mg)" />
                      <button onClick={handleDoseCalc} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition">Calculate Safe Dose</button>
                      {results.dose && <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-center text-emerald-700 dark:text-emerald-400 font-black text-3xl animate-in zoom-in-95">{results.dose} <span className="text-lg">mg</span></div>}
                    </div>
                  )}

                  {/* BMI CALCULATOR UI */}
                  {activeTool === 'bmi' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Scale className="text-orange-500"/> BMI Calculator</h2>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-orange-500 outline-none" 
                          value={bmiData.weight} onChange={e => setBmiData({...bmiData, weight: e.target.value})} placeholder="Weight" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={bmiData.wUnit} onChange={e => setBmiData({...bmiData, wUnit: e.target.value})}>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-orange-500 outline-none" 
                          value={bmiData.height} onChange={e => setBmiData({...bmiData, height: e.target.value})} placeholder="Height" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={bmiData.hUnit} onChange={e => setBmiData({...bmiData, hUnit: e.target.value})}>
                          <option value="cm">cm</option>
                          <option value="ft">ft</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                      <button onClick={handleBMICalc} className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 transition">Calculate BMI</button>
                      {results.bmi && (
                        <div className="p-5 bg-orange-50 dark:bg-orange-900/30 rounded-2xl text-center animate-in zoom-in-95">
                          <p className="text-orange-700 dark:text-orange-400 font-black text-3xl">{results.bmi.value}</p>
                          <p className="text-orange-600 dark:text-orange-300 font-bold uppercase text-xs mt-1">{results.bmi.category}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* eGFR CALCULATOR UI */}
                  {activeTool === 'gfr' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Activity className="text-red-500"/> eGFR (MDRD)</h2>
                      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                        {['male', 'female'].map(g => (
                          <button key={g} onClick={() => setGfrData({...gfrData, gender: g})} 
                            className={`flex-1 p-3 rounded-lg font-bold capitalize transition-all ${gfrData.gender === g ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-400'}`}>
                            {g}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-500 outline-none" 
                          value={gfrData.creatinine} onChange={e => setGfrData({...gfrData, creatinine: e.target.value})} placeholder="Creatinine" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-2 font-bold text-xs outline-none dark:text-white"
                          value={gfrData.unit} onChange={e => setGfrData({...gfrData, unit: e.target.value})}>
                          <option value="mg/dl">mg/dL</option>
                          <option value="umol/l">µmol/L</option>
                        </select>
                      </div>
                      <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-500 outline-none" 
                        value={gfrData.age} onChange={e => setGfrData({...gfrData, age: e.target.value})} placeholder="Age (Years)" />
                      <button onClick={handleGFRCalc} className="w-full py-4 bg-red-500 text-white font-bold rounded-2xl shadow-lg hover:bg-red-600 transition">Calculate eGFR</button>
                      {results.gfr && (
                        <div className="p-5 bg-red-50 dark:bg-red-900/30 rounded-2xl text-center animate-in zoom-in-95">
                          <p className="text-red-700 dark:text-red-400 font-black text-3xl">{results.gfr}</p>
                          <p className="text-red-600 dark:text-red-300 font-bold uppercase text-[10px] mt-1">mL/min/1.73m²</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* MAP CALCULATOR UI */}
                  {activeTool === 'map' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Heart className="text-red-500"/> Mean Arterial Pressure</h2>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-400 outline-none" 
                          value={mapData.sbp} onChange={e => setMapData({...mapData, sbp: e.target.value})} placeholder="Systolic BP" />
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-400 outline-none" 
                          value={mapData.dbp} onChange={e => setMapData({...mapData, dbp: e.target.value})} placeholder="Diastolic BP" />
                      </div>
                      <button onClick={handleMAPCalc} className="w-full py-4 bg-red-500 text-white font-bold rounded-2xl shadow-lg hover:bg-red-600 transition">Calculate MAP</button>
                      {results.map && (
                        <div className="p-5 bg-red-50 dark:bg-red-900/30 rounded-2xl text-center animate-in zoom-in-95">
                          <p className="text-red-700 dark:text-red-400 font-black text-3xl">{results.map.value}</p>
                          <p className="text-red-600 dark:text-red-300 font-bold uppercase text-xs mt-1">{results.map.status}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* MAINTENANCE FLUID CALCULATOR UI */}
                  {activeTool === 'maintenance' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Droplet className="text-emerald-500"/> Maintenance Fluid (4-2-1)</h2>
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-emerald-400 outline-none" 
                          value={maintData.weight} onChange={e => setMaintData({...maintData, weight: e.target.value})} placeholder="Weight" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={maintData.unit} onChange={e => setMaintData({...maintData, unit: e.target.value})}>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>
                      <button onClick={handleMaintenanceCalc} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition">Calculate Maintenance</button>
                      {results.maintenance && (
                        <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-center animate-in zoom-in-95">
                          <p className="text-emerald-700 dark:text-emerald-400 font-black text-2xl">{results.maintenance.rate} <span className="text-sm">mL/hr</span></p>
                          <p className="text-emerald-600 dark:text-emerald-300 font-bold uppercase text-xs mt-1">{results.maintenance.daily} mL/day</p>
                        </div>
                      )}
                    </div>
                  )}
               </div>
            </div>
          )}

          {/* NEW TAB: DRUG INDEX TOOL */}
          {activeTab === "drug-index" && (
            <DrugDictionaryTool />
          )}

        </div>
      </div>

      {selectedDisease && (
        <DiseaseModal 
          name={selectedDisease.name} 
          data={selectedDisease} 
          onClose={() => setSelectedDisease(null)} 
        />
      )}
      <Footer onOpenTerms={handleOpenTermsReview} />
    </div>
  );
}