import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, Stethoscope, Baby, Activity, Mail, LogOut, 
  Calculator, Scale, Moon, Sun, BookOpen, Check, ClipboardList, Heart, Droplet, Pill, ArrowLeft, Menu, Info, X
} from "lucide-react";

// --- IMPORTS ---
import { diseaseDatabase } from "./data/diseases";
// Removed drug modal/search dependencies

import DiseaseCard from "./components/DiseaseCard";
import Auth from "./components/Auth";
import DiseaseModal from "./components/DiseaseModal";
import DiagnosisTool from "./components/SymptomReviewTool.jsx"; 
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import DrugDictionaryTool from "./components/DrugDictionaryTool"; // NEW TOOL IMPORT
import ReferencesModal from "./components/ReferencesModal"; // NEW REFERENCE MODAL (Assumed existence)

import { 
    calculatePediatricDose, 
    calculateBMI, 
    calculateGFR, 
    calculateMAP, 
    calculateMaintenanceFluid,
    calculateIVFluidRate, // NEW IMPORT
    NARROW_THERAPEUTIC_INDEX_WARNINGS // NEW IMPORT
} from "./utils/calculators";

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1"; 

const SUPPORT_EMAIL = "clinicalassist.center@gmail.com"; 

export default function ClinicalTool() {
  // --- STATE ---
  const [user, setUser] = useState(null);
  
  // Modals & Selection
  const [selectedDisease, setSelectedDisease] = useState(null);
  
  // NEW DRAWER STATE & ABOUT STATE
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showReferencesModal, setShowReferencesModal] = useState(false); 

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
  const [doseData, setDoseData] = useState({ weight: "", unit: "kg" }); // Removed adultDose field for compliance
  const [bmiData, setBmiData] = useState({ height: "", weight: "", wUnit: "kg", hUnit: "cm" });
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male", unit: "mg/dl" });
  const [mapData, setMapData] = useState({ sbp: "", dbp: "" });
  const [maintData, setMaintData] = useState({ weight: "", unit: "kg", fluidType: '421', glucoseMgDl: '', sbp: '' }); // ADDED FLUID/CLINICAL STATES (Default to 421)
  
  const [results, setResults] = useState({ dose: null, bmi: null, gfr: null, map: null, maintenance: null, ivFluid: null }); // ADDED ivFluid

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
    // Locks scrolling for any major overlay
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

  // --- CRITICAL: WATCH FOR LOGIN TO SHOW TERMS (FIXED LOGIC) ---
  useEffect(() => {
    if (user) {
        const hasAccepted = localStorage.getItem(TERMS_KEY);
        // FIX: Ensure terms are shown if no acceptance key exists
        if (!hasAccepted) {
            setShowTerms(true);
            setMandatoryTerms(true); 
        } else {
            // Ensure if key exists, terms are hidden
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
    // FIX: Clear acceptance key on logout so new login forces terms review
    localStorage.removeItem(TERMS_KEY); 
    setUser(null);
    setIsDrawerOpen(false); 
  };

  const handleLogin = (userData) => {
    localStorage.setItem("clinical_current_user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleSupportClick = () => {
    window.location.href = `mailto:${SUPPORT_EMAIL}`;
    setIsDrawerOpen(false);
  };

  // --- LEGAL HANDLERS ---
  const handleAcceptTerms = () => {
    // FIX: This handler must set the local storage and close the modal
    localStorage.setItem(TERMS_KEY, "true");
    setShowTerms(false);
    setMandatoryTerms(false);
  };

  const handleOpenTermsReview = () => {
    setMandatoryTerms(false); 
    setShowTerms(true);
    setIsDrawerOpen(false); 
  };
  
  // --- ABOUT HANDLERS ---
  const handleOpenAbout = () => {
      setShowAboutModal(true);
      setIsDrawerOpen(false);
  };
  const handleCloseAbout = () => {
      setShowAboutModal(false);
  }

  // --- REFERENCES HANDLERS ---
  const handleOpenReferences = () => {
      setShowReferencesModal(true);
      setIsDrawerOpen(false);
  };
  const handleCloseReferences = () => {
      setShowReferencesModal(false);
  }


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
    if (!doseData.weight) return;
    // FIX: Only passing weight, target dose is hardcoded in utility for safety
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

  // NEW: Calculate dynamic IV Fluid rate
  const handleIVFluidCalc = () => {
      // 1. Calculate base maintenance rate first (4-2-1 Rule)
      if (!maintData.weight) {
          setResults(prev => ({...prev, ivFluid: { error: "Please enter patient weight." }}));
          return;
      }

      const baseMaint = calculateMaintenanceFluid(maintData.weight, maintData.unit);
      const baseRate = parseFloat(baseMaint.rate);
      
      let res;
      
      if (maintData.fluidType === '421') {
          // If only 4-2-1 is selected, just show the maintenance output
          res = { 
              rate: baseMaint.rate, 
              rationale: "Standard maintenance rate calculated by Holliday-Segar (4-2-1) formula.", 
              risk: "" 
          };
      } else {
          // 2. Pass base rate and clinical parameters to the dynamic calculator
          res = calculateIVFluidRate({
              baseRate: baseRate,
              fluidType: maintData.fluidType,
              glucoseMgDl: parseFloat(maintData.glucoseMgDl) || null,
              sbp: parseFloat(maintData.sbp) || null
          });
      }
      
      setResults(prev => ({...prev, ivFluid: res, maintenance: baseMaint}));
  };


  const handleCardClick = (tabId) => {
    setActiveTab(tabId);
  }

  const handleGoHome = () => {
    setActiveTab("home");
    setQuery(""); 
  }


  if (!user) return <Auth onLogin={handleLogin} />;
  
  // FIX: BLOCK APP CONTENT IF TERMS ARE MANDATORY AND NOT ACCEPTED
  if (showTerms && mandatoryTerms) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <LegalModal 
                isOpen={true} 
                onAccept={handleAcceptTerms}
                onClose={() => { /* intentionally disabled when mandatory */ }}
                isMandatory={true}
            />
        </div>
      );
  }


  // Define tools for the home page tiles
  const toolTiles = [
    { id: "search", label: "Disease Search", description: "Search clinical guidelines and differential diagnoses.", icon: Search },
    { id: "drug-index", label: "Drug Index", description: "View drug monographs, pharmacology, and adverse events.", icon: Pill },
    { id: "diagnosis", label: "Symptom Checker", description: "Input patient symptoms for potential diagnoses.", icon: ClipboardList }, // FIX: Renamed
    { id: "tools", label: "Calculators", description: "Access pediatric dosing, BMI, and GFR calculators.", icon: Calculator }
  ];
  
  // Helper to determine conditional inputs for Fluid Management
  const requiresGlucose = ['D5NS', 'D10W'].includes(maintData.fluidType);
  const requiresBP = ['NS', 'RL', 'D5W', 'D10W'].includes(maintData.fluidType); // Added D5W/D10W for safety checks

  // --- ABOUT US MODAL COMPONENT (Defined inline for single file) ---
  const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity">
            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl p-6 relative max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-3 border-slate-200 dark:border-slate-700 shrink-0">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                        <Info size={20} className="text-blue-600" /> About ClinicalAssist
                    </h2>
                    <button onClick={onClose} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition">
                        <X size={24} />
                    </button>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4 overflow-y-auto pb-4">
                    <p className="font-bold text-lg text-blue-700 dark:text-blue-400">Mission Driven by Clinical Experience</p>
                    <p>
                        This platform is the dedicated work of a team rooted in clinical pharmacy practice: <span className="font-semibold text-slate-900 dark:text-white">Dr. Vaidik Gautam (Senior Developer/Pharm.D Candidate)</span> and <span className="font-semibold text-slate-900 dark:text-white">Dr. Raxit Varun (Support/Pharm.D)</span>. We created ClinicalAssist out of a necessity felt during our own demanding clinical rotations—the need for a single, reliable, and hyper-efficient educational tool to assist rapid synthesis of medical knowledge.
                    </p>
                    <p>
                        <span className="font-bold text-slate-900 dark:text-white">Our Objective:</span> To empower fellow healthcare professionals and students by reducing the time spent searching complex sources, allowing more focus on patient care and advanced learning. We put immense hard work into translating scientific data into the concise, actionable formats you see here.
                    </p>
                    
                    <h3 className="font-bold text-base text-slate-800 dark:text-white pt-4 border-t border-slate-100 dark:border-slate-700">Educational Use & Data Sourcing</h3>
                    <p className="text-sm">
                        This tool is strictly for educational and learning purposes. All scientific data (e.g., indications, MOAs, drug events) is synthesized from <span className="font-semibold text-slate-900 dark:text-white">scientifically approved platforms</span> and definitive medical texts, including <span className="font-semibold text-slate-900 dark:text-white">FDA guidelines, Dipiro, and Harrison’s</span>.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                        While the underlying scientific information remains the sole intellectual property of the original researchers and external source platforms, the proprietary application design, UI/UX, logic, and code are the <span className="font-bold text-blue-600 dark:text-blue-400">copyright of the ClinicalAssist team: Dr. Vaidik Gautam and Dr. Raxit Varun.</span>
                    </p>
                </div>
            </div>
        </div>
    );
  };
  // --- END ABOUT US MODAL ---


  return (
    // Outer container: full screen height, flex column to stack header, content, and footer
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col transition-colors duration-300">
      
      {/* --- MODALS --- */}
      {/* Renders LegalModal for both mandatory block and optional review */}
      <LegalModal 
          isOpen={showTerms} 
          onClose={() => setShowTerms(false)}
          onAccept={handleAcceptTerms}
          isMandatory={mandatoryTerms}
      />
      <AboutModal 
        isOpen={showAboutModal}
        onClose={handleCloseAbout}
      />
      <ReferencesModal // NEW MODAL RENDER
        isOpen={showReferencesModal}
        onClose={handleCloseReferences}
      />
      
      {/* --- SIDE DRAWER / NAVIGATION PANEL (z-index 50) --- */}
      <div 
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        // Backdrop overlay
        onClick={() => setIsDrawerOpen(false)}
      >
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={e => e.stopPropagation()}></div>
        
        {/* Drawer Content */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-white dark:bg-slate-800 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out`} onClick={e => e.stopPropagation()}>
            
            {/* Header / Close Button */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700 mb-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Settings</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="p-1 text-slate-500 hover:text-red-500 rounded-full transition">
                    <X size={24} />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3 flex-1">
                {/* 1. Theme Toggle */}
                <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300">
                    {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                    <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>

                {/* 2. Contact Us / Support Email (Now opens mailto) */}
                <a 
                    href={`mailto:${SUPPORT_EMAIL}`}
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300"
                >
                    <Mail size={20} />
                    <span>Contact Support</span>
                </a>

                {/* 3. Terms and Conditions */}
                <button onClick={handleOpenTermsReview} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300">
                    <BookOpen size={20} />
                    <span>Terms & Compliance</span>
                </button>
                
                {/* 4. References */}
                <button onClick={handleOpenReferences} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300">
                    <BookOpen size={20} />
                    <span>References & Sources</span>
                </button>

                {/* 5. About Us (Opens new Modal) */}
                <button onClick={handleOpenAbout} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300">
                    <Info size={20} />
                    <span>About ClinicalAssist</span>
                </button>
            </nav>

            {/* Logout Button (Fixed to Bottom) */}
            <button onClick={handleLogout} className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900 transition mt-6">
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </div>
      </div>
      
      {/* HEADER (Sticky) */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            
            {/* Logo and Title */}
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <div>
                {/* FIX 1: Removed 'Dr.' from header */}
                <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">Clinical<span className="text-blue-600 dark:text-blue-400">Assist</span></h1>
                <div className="flex items-center gap-1 mt-0.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {/* FIX 1: Displaying user role/status without unauthorized title */}
                    {user.name ? `${user.name} (Clinician)` : "Clinician"}
                  </p>
                </div>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button 
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition text-slate-600 dark:text-slate-300"
            >
                <Menu size={20} />
            </button>

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
      <div className="flex-grow max-w-3xl mx-auto px-4 mt-4 w-full flex flex-col">
        
        {/* Results/Tool View (Uses entire remaining vertical space) */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 w-full h-full">
          
          {/* Default/Home View: Show Tiles */}
          {activeTab === "home" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {toolTiles.map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handleCardClick(tile.id)}
                  // Optimized Tile Design: smaller icon, reduced padding, constrained height
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all text-left group min-h-[100px]" 
                >
                  <div className="flex items-center justify-between mb-2">
                    <tile.icon size={22} className={`text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform`} />
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
                 {[
                    {id: 'pediatric', label: 'Pediatric Dose', icon: Baby}, 
                    {id: 'fluid', label: 'IV Fluids', icon: Droplet}, // NEW FLUID MANAGEMENT
                    {id: 'bmi', label: 'BMI', icon: Scale}, 
                    {id: 'gfr', label: 'eGFR', icon: Activity}, 
                    {id: 'map', label: 'MAP', icon: Heart}, 
                  ].map(tool => (
                   <button key={tool.id} onClick={() => setActiveTool(tool.id)} className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${activeTool === tool.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                     <tool.icon size={14} /> {tool.label}
                   </button>
                 ))}
               </div>

               <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                  
                  {/* PEDIATRIC DOSE CALCULATOR UI (FIXED INPUTS & SAFETY) */}
                  {activeTool === 'pediatric' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Baby className="text-purple-500"/> Pediatric Dosing</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                          NOTE: This calculator uses the <strong className="font-bold text-red-500">mg/kg method</strong> with a standard factor (<span className="font-semibold italic">10 mg/kg for demonstration</span>) for educational compliance. **Do not use the result for actual patient care.**
                      </p>
                      
                      {/* Weight Input */}
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-blue-500 outline-none" 
                          value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Child Weight" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={doseData.unit} onChange={e => setDoseData({...doseData, unit: e.target.value})}>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>
                      
                      {/* REMOVED: Adult Dose input field for safety and compliance */}
                      <button onClick={handleDoseCalc} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition">Calculate Estimated Dose</button>
                      
                      {results.dose && (
                        <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-emerald-700 dark:text-emerald-400">
                            <p className="font-black text-3xl animate-in zoom-in-95">{results.dose}</p>
                            <p className="text-xs mt-1">Total Dose (mg)</p>
                            <div className="mt-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-xs text-yellow-800 dark:text-yellow-300 font-semibold text-left">
                                <p className="font-bold">CLINICAL ALERT (Narrow Therapeutic Index):</p>
                                {NARROW_THERAPEUTIC_INDEX_WARNINGS.map(item => (
                                    <p key={item.drug} className="mt-1">
                                        <span className="font-extrabold">{item.drug}:</span> {item.caution}
                                    </p>
                                ))}
                            </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* IV FLUID MANAGEMENT UI (NEW) */}
                  {activeTool === 'fluid' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Droplet className="text-blue-500"/> IV Fluid Management</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                          Calculates the base Maintenance Rate (using 4-2-1 rule) and provides clinical context for fluid selection.
                      </p>
                      
                      {/* Weight Input */}
                      <div className="flex gap-2">
                        <input type="number" className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-blue-500 outline-none" 
                          value={maintData.weight} onChange={e => setMaintData({...maintData, weight: e.target.value})} placeholder="Patient Weight (kg/lbs)" />
                        <select className="bg-slate-100 dark:bg-slate-700 rounded-xl px-3 font-bold text-sm outline-none dark:text-white"
                          value={maintData.unit} onChange={e => setMaintData({...maintData, unit: e.target.value})}>
                          <option value="kg">kg</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>

                      {/* Fluid Type Selection */}
                      <select className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                          value={maintData.fluidType} onChange={e => setMaintData({...maintData, fluidType: e.target.value, glucoseMgDl: '', sbp: ''})}>
                          <option value="421">1. Base Rate (4-2-1 Rule only)</option>
                          <option value="NS">2. 0.9% Normal Saline (NS)</option>
                          <option value="RL">3. Lactated Ringer's (RL)</option>
                          <option value="D5NS">4. D5/NS (Dextrose 5% + NS)</option>
                          <option value="D5W">5. Dextrose 5% in Water (D5W)</option>
                          <option value="D10W">6. Dextrose 10% (D10W)</option>
                      </select>
                      
                      {/* Conditional Inputs: Glucose and BP */}
                      {(requiresGlucose || requiresBP) && maintData.fluidType !== '421' && (
                        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                           {requiresGlucose && (
                               <input type="number" 
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-500 outline-none" 
                                    value={maintData.glucoseMgDl} 
                                    onChange={e => setMaintData({...maintData, glucoseMgDl: e.target.value})} 
                                    placeholder="Recent Blood Glucose (mg/dL)" 
                                />
                           )}
                           {requiresBP && (
                               <input type="number" 
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white border-0 focus:ring-2 focus:ring-red-500 outline-none" 
                                    value={maintData.sbp} 
                                    onChange={e => setMaintData({...maintData, sbp: e.target.value})} 
                                    placeholder="Systolic BP (mmHg)" 
                                />
                           )}
                        </div>
                      )}

                      <button onClick={handleIVFluidCalc} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition">Calculate Fluid Strategy</button>
                      
                      {results.ivFluid && (
                        <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-emerald-700 dark:text-emerald-400 font-medium space-y-2">
                            {results.ivFluid.error ? (
                                <p className="font-black text-lg text-red-500">{results.ivFluid.error}</p>
                            ) : (
                                <>
                                    <p className="text-sm font-bold uppercase tracking-wider">Maintenance Rate (4-2-1): {results.maintenance.rate} mL/hr</p>
                                    <p className="font-black text-3xl">Strategy Rate: {results.ivFluid.rate} mL/hr</p>
                                    
                                    {results.ivFluid.rationale && (
                                        <p className="text-xs pt-2 border-t border-emerald-200 dark:border-emerald-700/50">
                                            <span className="font-bold">Rationale ({maintData.fluidType}):</span> {results.ivFluid.rationale}
                                        </p>
                                    )}
                                    {results.ivFluid.risk && (
                                        <div className="text-xs p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg font-semibold text-left">
                                            <span className="font-bold">RISK WARNING:</span> {results.ivFluid.risk}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                      )}
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
                      <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white"><Activity className="text-red-500"/> eGFR (CKD-EPI)</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                          NOTE: Calculations are based on the race-free CKD-EPI (2021) approximation.
                      </p>
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