import React, { useState, useEffect, useMemo } from "react";
import { App as CapacitorApp } from '@capacitor/app'; // CAPACITOR INTEGRATION
import { 
  Search, Stethoscope, Baby, Activity, Mail, LogOut, 
  Calculator, Scale, Moon, Sun, BookOpen, Check, ClipboardList, Heart, Droplet, Pill, ArrowLeft, Menu, Info, X
} from "lucide-react";

// --- IMPORTS ---
import { diseaseDatabase } from "./data/diseases";
import DiseaseCard from "./components/DiseaseCard";
import Auth from "./components/Auth";
import DiseaseModal from "./components/DiseaseModal";
import DiagnosisTool from "./components/SymptomReviewTool.jsx"; 
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import DrugDictionaryTool from "./components/DrugDictionaryTool"; 
import ReferencesModal from "./components/ReferencesModal"; 

import { 
    calculatePediatricDose, 
    calculateBMI, 
    calculateGFR, 
    calculateMAP, 
    calculateMaintenanceFluid,
    calculateIVFluidRate, 
    NARROW_THERAPEUTIC_INDEX_WARNINGS 
} from "./utils/calculators";

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1"; 

const SUPPORT_EMAIL = "clinicalassist.center@gmail.com"; 

export default function App() {
  // --- STATE ---
  const [user, setUser] = useState(null);
  
  // Modals & Selection
  const [selectedDisease, setSelectedDisease] = useState(null);
  
  // DRAWER STATE & ABOUT STATE
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showReferencesModal, setShowReferencesModal] = useState(false); 

  // Search - Data Initialization
  const [prescriptions] = useState(diseaseDatabase || {}); 

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home"); 
  const [activeTool, setActiveTool] = useState("pediatric");
  const [darkMode, setDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  
  // Legal
  const [showTerms, setShowTerms] = useState(false);
  const [mandatoryTerms, setMandatoryTerms] = useState(false);

  // Calculator States 
  const [doseData, setDoseData] = useState({ weight: "", unit: "kg" }); 
  const [bmiData, setBmiData] = useState({ height: "", weight: "", wUnit: "kg", hUnit: "cm" });
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male", unit: "mg/dl" });
  const [mapData, setMapData] = useState({ sbp: "", dbp: "" });
  const [maintData, setMaintData] = useState({ weight: "", unit: "kg", fluidType: '421', glucoseMgDl: '', sbp: '' }); 
  
  const [results, setResults] = useState({ dose: null, bmi: null, gfr: null, map: null, maintenance: null, ivFluid: null });

  // --- HARDWARE BACK BUTTON LOGIC ---
  useEffect(() => {
    const backListener = CapacitorApp.addListener('backButton', () => {
      if (selectedDisease) {
        setSelectedDisease(null);
      } else if (isDrawerOpen) {
        setIsDrawerOpen(false);
      } else if (showAboutModal) {
        setShowAboutModal(false);
      } else if (showReferencesModal) {
        setShowReferencesModal(false);
      } else if (showTerms && !mandatoryTerms) {
        setShowTerms(false);
      } else if (activeTab !== "home") {
        setActiveTab("home");
        setQuery("");
      } else {
        CapacitorApp.exitApp();
      }
    });

    return () => {
      backListener.then(l => l.remove());
    };
  }, [selectedDisease, isDrawerOpen, showAboutModal, showReferencesModal, showTerms, activeTab, mandatoryTerms]);

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

  // --- MODAL / DRAWER SCROLL LOCK EFFECT ---
  useEffect(() => {
    const isOverlayOpen = selectedDisease || showTerms || isDrawerOpen || showAboutModal || showReferencesModal;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDisease, showTerms, isDrawerOpen, showAboutModal, showReferencesModal]); 

  // --- WATCH FOR LOGIN TO SHOW TERMS ---
  useEffect(() => {
    if (user) {
        const hasAccepted = localStorage.getItem(TERMS_KEY);
        if (!hasAccepted) {
            setShowTerms(true);
            setMandatoryTerms(true); 
        } else {
            setShowTerms(false);
            setMandatoryTerms(false);
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
    localStorage.removeItem(TERMS_KEY); 
    setUser(null);
    setIsDrawerOpen(false); 
  };

  const handleLogin = (userData) => {
    localStorage.setItem("clinical_current_user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleAcceptTerms = () => {
    localStorage.setItem(TERMS_KEY, "true");
    setShowTerms(false);
    setMandatoryTerms(false);
  };

  const handleOpenTermsReview = () => {
    setMandatoryTerms(false); 
    setShowTerms(true);
    setIsDrawerOpen(false); 
  };
  
  const handleOpenAbout = () => {
      setShowAboutModal(true);
      setIsDrawerOpen(false);
  };

  const handleOpenReferences = () => {
      setShowReferencesModal(true);
      setIsDrawerOpen(false);
  };

  // --- SEARCH LOGIC ---
  const filteredResults = useMemo(() => {
    if (!query) return [];
    const lowerQ = query.toLowerCase().trim();
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

  // --- CALCULATORS ---
  const handleDoseCalc = () => {
    if (!doseData.weight) return;
    const res = calculatePediatricDose(doseData.weight, null, doseData.unit); 
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

  const handleIVFluidCalc = () => {
      if (!maintData.weight) {
          setResults(prev => ({...prev, ivFluid: { error: "Please enter patient weight." }}));
          return;
      }
      const baseMaint = calculateMaintenanceFluid(maintData.weight, maintData.unit);
      const baseRate = parseFloat(baseMaint.rate);
      let res;
      if (maintData.fluidType === '421') {
          res = { rate: baseMaint.rate, rationale: "Standard maintenance rate calculated by Holliday-Segar (4-2-1) formula.", risk: "" };
      } else {
          res = calculateIVFluidRate({
              baseRate: baseRate,
              fluidType: maintData.fluidType,
              glucoseMgDl: parseFloat(maintData.glucoseMgDl) || null,
              sbp: parseFloat(maintData.sbp) || null
          });
      }
      setResults(prev => ({...prev, ivFluid: res, maintenance: baseMaint}));
  };

  const handleCardClick = (tabId) => { setActiveTab(tabId); }
  const handleGoHome = () => { setActiveTab("home"); setQuery(""); }

  if (!user) return <Auth onLogin={handleLogin} />;
  
  if (showTerms && mandatoryTerms) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex justify-center items-center p-4">
            <LegalModal isOpen={true} onAccept={handleAcceptTerms} onClose={() => {}} isMandatory={true} />
        </div>
      );
  }

  const toolTiles = [
    { id: "search", label: "Disease Search", description: "Search clinical guidelines and differential diagnoses.", icon: Search },
    { id: "drug-index", label: "Drug Index", description: "View drug monographs, pharmacology, and adverse events.", icon: Pill },
    { id: "diagnosis", label: "Symptom Checker", description: "Input patient symptoms for potential diagnoses.", icon: ClipboardList }, 
    { id: "tools", label: "Calculators", description: "Access pediatric dosing, BMI, and GFR calculators.", icon: Calculator }
  ];
  
  const requiresGlucose = ['D5NS', 'D10W'].includes(maintData.fluidType);
  const requiresBP = ['NS', 'RL', 'D5W', 'D10W'].includes(maintData.fluidType);

  const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl p-6 relative max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-3 border-slate-200 dark:border-slate-700 shrink-0">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                        <Info size={20} className="text-blue-600" /> About ClinicalAssist
                    </h2>
                    <button onClick={onClose} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition"><X size={24} /></button>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4 overflow-y-auto pb-4 scrollbar-hide">
                    <p className="font-bold text-lg text-blue-700 dark:text-blue-400">Mission Driven by Clinical Experience</p>
                    <p>
                        This platform is the dedicated work of a team rooted in clinical pharmacy practice: <span className="font-semibold text-slate-900 dark:text-white">Dr. Vaidik Gautam (Senior Developer/Pharm.D Candidate)</span> and <span className="font-semibold text-slate-900 dark:text-white">Dr. Raxit Varun (Support/Pharm.D)</span>. We created ClinicalAssist out of a necessity felt during our own demanding clinical rotations.
                    </p>
                    <p>
                        <span className="font-bold text-slate-900 dark:text-white">Our Objective:</span> To empower fellow healthcare professionals and students by reducing the time spent searching complex sources, allowing more focus on patient care.
                    </p>
                    <h3 className="font-bold text-base text-slate-800 dark:text-white pt-4 border-t border-slate-100 dark:border-slate-700">Educational Use & Data Sourcing</h3>
                    <p className="text-sm">
                        This tool is strictly for educational and learning purposes. All scientific data is synthesized from FDA guidelines, Dipiro, and Harrison’s.
                    </p>
                </div>
            </div>
        </div>
    );
  };

  // Reusable input class for theme consistency
  const inputClass = "w-full p-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center transition-colors duration-300 select-none touch-manipulation overflow-x-hidden">
      
      {/* MOBILE CONTAINER WRAPPER: Centers app and stops width spillover */}
      <div className="w-full max-w-md flex flex-col min-h-screen bg-white dark:bg-slate-900 relative shadow-2xl overflow-hidden">
        
        <LegalModal isOpen={showTerms} onClose={() => setShowTerms(false)} onAccept={handleAcceptTerms} isMandatory={mandatoryTerms} />
        <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
        <ReferencesModal isOpen={showReferencesModal} onClose={() => setShowReferencesModal(false)} />
        
        <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={() => setIsDrawerOpen(false)}>
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={e => e.stopPropagation()}></div>
          <div className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-slate-900 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out`} onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">Settings</h3>
                  <button onClick={() => setIsDrawerOpen(false)} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition active:scale-90"><X size={24} /></button>
              </div>
              <nav className="flex flex-col space-y-3 flex-1">
                  <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95 text-slate-700 dark:text-slate-300">
                      {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                      <span className="font-semibold">Mode</span>
                  </button>
                  <a href={`mailto:${SUPPORT_EMAIL}`} onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300"><Mail size={20} /><span className="font-semibold">Support</span></a>
                  <button onClick={handleOpenTermsReview} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300"><BookOpen size={20} /><span className="font-semibold">Compliance</span></button>
                  <button onClick={handleOpenAbout} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300"><Info size={20} /><span className="font-semibold">About</span></button>
              </nav>
              <button onClick={handleLogout} className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 active:scale-95 transition mt-6"><LogOut size={20} /><span className="font-bold">Logout</span></button>
          </div>
        </div>
        
        <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
          <div className="w-full px-4 py-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2.5">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2 rounded-xl shadow-lg shadow-blue-600/20"><Stethoscope className="h-5 w-5 text-white" /></div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none tracking-tight">ClinicalAssist</h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{user.name || "Clinician"}</p>
                </div>
              </div>
              <button onClick={() => setIsDrawerOpen(true)} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-full transition text-slate-600 dark:text-slate-300 active:scale-90"><Menu size={24} /></button>
            </div>

            {activeTab !== "home" && (
              <button onClick={handleGoHome} className="flex items-center gap-2 py-1.5 text-blue-600 dark:text-blue-400 text-sm font-bold active:opacity-50 mt-1"><ArrowLeft size={16} /> Back to Menu</button>
            )}

            {(activeTab === "search" || activeTab === "home") && (
              <div className="relative mt-2">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input className="w-full h-11 pl-10 pr-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Search signs or diseases..." value={query} onChange={e => {setQuery(e.target.value); setActiveTab("search");}} />
              </div>
            )}
          </div>
        </div>

        <div className="flex-grow w-full flex flex-col h-full overflow-y-auto scrollbar-hide">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 w-full pb-24 px-4 mt-2">
            
            {activeTab === "home" && (
              <div className="grid grid-cols-1 gap-3 py-2">
                {toolTiles.map(tile => (
                  <button key={tile.id} onClick={() => handleCardClick(tile.id)} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg active:scale-[0.98] transition-all text-left flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl"><tile.icon size={26} className="text-blue-600 dark:text-blue-400" /></div>
                    <div><h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">{tile.label}</h3><p className="text-xs text-slate-500 mt-1 leading-snug">{tile.description}</p></div>
                  </button>
                ))}
              </div>
            )}

            {activeTab === "search" && (
              <div className="space-y-3">
                {filteredResults.length > 0 ? filteredResults.map((result) => (
                  <DiseaseCard key={`disease-${result.name}`} name={result.name} data={{...result.data, color: getCategoryColor(result.data.category), firstLine: result.data.pathophysiology }} onClick={() => setSelectedDisease({ name: result.name, ...result.data })} />
                )) : <div className="text-center py-20 opacity-40"><BookOpen size={48} className="mx-auto mb-2 text-slate-400"/><p className="text-sm font-bold dark:text-white">No results found.</p></div>}
              </div>
            )}

            {activeTab === "diagnosis" && (<DiagnosisTool />)}
            {activeTab === "drug-index" && (<DrugDictionaryTool />)}

            {activeTab === "tools" && (
               <div className="space-y-4 pt-2">
                 <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b dark:border-slate-800">
                   {[
                      {id: 'pediatric', icon: Baby}, 
                      {id: 'fluid', icon: Droplet}, 
                      {id: 'bmi', icon: Scale}, 
                      {id: 'gfr', icon: Activity}, 
                      {id: 'map', icon: Heart}, 
                    ].map(tool => (
                     <button key={tool.id} onClick={() => setActiveTool(tool.id)} className={`p-4 rounded-xl transition-all flex items-center justify-center shrink-0 active:scale-90 ${activeTool === tool.id ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}><tool.icon size={22} /></button>
                   ))}
                 </div>

                 <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
                    {activeTool === 'pediatric' && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white"><Baby className="text-purple-500"/> Pediatric Dose</h2>
                        <input type="number" className={inputClass} value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Weight (kg)" />
                        <button onClick={handleDoseCalc} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition">Calculate</button>
                        {results.dose && <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-center font-black text-2xl text-emerald-600">{results.dose} mg</div>}
                      </div>
                    )}
                    {activeTool === 'fluid' && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white"><Droplet className="text-blue-500"/> IV Fluid</h2>
                        <input type="number" className={inputClass} value={maintData.weight} onChange={e => setMaintData({...maintData, weight: e.target.value})} placeholder="Weight (kg)" />
                        <select className={inputClass} value={maintData.fluidType} onChange={e => setMaintData({...maintData, fluidType: e.target.value})}><option value="421">4-2-1 Maintenance</option><option value="NS">0.9% NS</option><option value="RL">RL</option></select>
                        <button onClick={handleIVFluidCalc} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl active:scale-95 transition">Calculate</button>
                        {results.ivFluid && <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-center font-black text-2xl text-emerald-600">{results.ivFluid.rate} mL/hr</div>}
                      </div>
                    )}
                    {activeTool === 'bmi' && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white"><Scale className="text-orange-500"/> BMI</h2>
                        <input type="number" className={inputClass} value={bmiData.weight} onChange={e => setBmiData({...bmiData, weight: e.target.value})} placeholder="Weight (kg)" />
                        <input type="number" className={inputClass} value={bmiData.height} onChange={e => setBmiData({...bmiData, height: e.target.value})} placeholder="Height (cm)" />
                        <button onClick={handleBMICalc} className="w-full py-4 bg-orange-50 text-white font-bold rounded-xl active:scale-95 transition">Calculate</button>
                        {results.bmi && <div className="p-4 bg-orange-50 rounded-xl text-center font-black text-xl text-orange-600">{results.bmi.value} ({results.bmi.category})</div>}
                      </div>
                    )}
                    {activeTool === 'gfr' && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white"><Activity className="text-red-500"/> eGFR</h2>
                        <input type="number" className={inputClass} value={gfrData.creatinine} onChange={e => setGfrData({...gfrData, creatinine: e.target.value})} placeholder="Creatinine (mg/dL)" />
                        <input type="number" className={inputClass} value={gfrData.age} onChange={e => setGfrData({...gfrData, age: e.target.value})} placeholder="Age" />
                        <button onClick={handleGFRCalc} className="w-full py-4 bg-red-600 text-white font-bold rounded-xl">Calculate</button>
                        {results.gfr && <div className="p-4 bg-red-50 rounded-xl text-center font-black text-xl text-red-600">{results.gfr} mL/min</div>}
                      </div>
                    )}
                    {activeTool === 'map' && (
                      <div className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white"><Heart className="text-rose-500"/> MAP</h2>
                        <div className="flex gap-2">
                          <input type="number" className={inputClass} value={mapData.sbp} onChange={e => setMapData({...mapData, sbp: e.target.value})} placeholder="SBP" />
                          <input type="number" className={inputClass} value={mapData.dbp} onChange={e => setMapData({...mapData, dbp: e.target.value})} placeholder="DBP" />
                        </div>
                        <button onClick={handleMAPCalc} className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl">Calculate</button>
                        {results.map && <div className="p-4 bg-rose-50 rounded-xl text-center font-black text-xl text-rose-700">{results.map.value} mmHg</div>}
                      </div>
                    )}
                 </div>
               </div>
            )}
          </div>
        </div>

        {selectedDisease && (<DiseaseModal name={selectedDisease.name} data={selectedDisease.data || selectedDisease} onClose={() => setSelectedDisease(null)} />)}
        <div className="shrink-0 z-30 bg-white dark:bg-slate-900 border-t dark:border-slate-800"><Footer onOpenTerms={handleOpenTermsReview} /></div>
      </div>
    </div>
  );
}