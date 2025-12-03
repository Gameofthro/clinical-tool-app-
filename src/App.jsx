import { useState, useEffect, useMemo } from "react";
import { 
  Search, Stethoscope, Baby, Activity, Mail, LogOut, User, X, 
  Pill, Thermometer, AlertTriangle, Utensils, Ban, CheckCircle2, 
  Menu, Building2, FileBadge, Save, Moon, Sun, Calculator, Scale 
} from "lucide-react";

// --- CONFIGURATION ---
const LOCAL_STORAGE_KEY = "clinical_prescriptions_v7";
const THEME_KEY = "clinical_theme";

// --- 1. DATABASE (Medical Data) ---
const diseaseDatabase = {
  "common cold": {
    category: "Respiratory",
    color: "blue",
    firstLine: "Symptomatic treatment; no antibiotics.",
    management: [
      "Paracetamol 500 mg TID (e.g., Calpol)",
      "Pseudoephedrine or Phenylephrine SOS",
      "Chlorpheniramine maleate (CPM) HS",
      "Steam inhalation, Warm saline gargles"
    ],
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Mild fever"],
    labs: ["Not routinely required"],
    lifestyle: [
      "Rest is crucial for recovery",
      "Elevate head while sleeping",
      "Hand hygiene to prevent spread"
    ],
    diet: {
      eat: ["Warm soups", "Ginger tea with honey", "Citrus fruits (Vitamin C)"],
      avoid: ["Cold drinks", "Ice cream", "Fried foods", "Alcohol"]
    },
    contraindications: ["Avoid decongestants in Hypertension"],
    specialPopulations: { pregnancy: "Category B (Safe)", renal: "No adjustment" }
  },
  "hypertension": {
    category: "Cardiology",
    color: "red",
    firstLine: "Amlodipine 5mg OD OR Telmisartan 40mg OD.",
    management: [
      "Target BP: <130/80 mmHg",
      "Monitor BP weekly initially",
      "Add Hydrochlorothiazide 12.5mg if uncontrolled"
    ],
    symptoms: ["Asymptomatic", "Occipital headache", "Dizziness", "Palpitations"],
    labs: ["Lipid Profile", "Serum Creatinine", "ECG", "Fundoscopy"],
    lifestyle: [
      "Aerobic exercise 30 min/day",
      "Weight loss (Target BMI < 25)",
      "Stress management (Yoga)"
    ],
    diet: {
      eat: ["DASH Diet", "Leafy greens", "Bananas (Potassium)", "Garlic"],
      avoid: ["Table salt (>5g/day)", "Pickles", "Processed meats", "Canned soups"]
    },
    contraindications: ["ACEi/ARBs in Pregnancy (Absolute)"],
    specialPopulations: { pregnancy: "Labetalol / Methyldopa", renal: "Monitor Potassium" }
  },
  "type 2 diabetes": {
    category: "Endocrinology",
    color: "emerald",
    firstLine: "Metformin 500mg BD after meals.",
    management: [
      "Target HbA1c < 7.0%",
      "Foot examination every visit",
      "Add Glimepiride or Gliptins if uncontrolled"
    ],
    symptoms: ["Polyuria", "Polydipsia", "Weight loss", "Slow healing"],
    labs: ["HbA1c", "FBS/PPBS", "Urine Microalbumin"],
    lifestyle: [
      "150 mins exercise per week",
      "Daily foot inspection",
      "Regular eye checkups"
    ],
    diet: {
      eat: ["Whole grains", "Pulses/Lentils", "Bitter gourd", "Nuts", "Fenugreek"],
      avoid: ["Sugar", "Maida", "Fruit juices", "Mango/Banana", "Deep fried foods"]
    },
    contraindications: ["Metformin if eGFR < 30"],
    specialPopulations: { pregnancy: "Insulin is gold standard", renal: "Reduce Metformin" }
  },
  "acute asthma": {
    category: "Respiratory",
    color: "blue",
    firstLine: "Inhaled Salbutamol + Budesonide.",
    management: [
      "Nebulization: Levolin + Budecort stat",
      "Oral Prednisolone 40mg OD x 5 days",
      "Maintain O2 Sat > 94%"
    ],
    symptoms: ["Wheezing", "Breathlessness", "Chest tightness", "Cough"],
    labs: ["Spirometry (FEV1)", "CXR (rule out pneumonia)"],
    lifestyle: [
      "Identify triggers (Dust, Pollen)",
      "Use spacer with inhalers",
      "Annual flu vaccination"
    ],
    diet: {
      eat: ["Magnesium rich foods", "Omega-3 (Fish)", "Apples", "Ginger"],
      avoid: ["Sulfites (Wine)", "Cold foods (if trigger)", "Dairy (if thickens mucus)"]
    },
    contraindications: ["Non-selective Beta-blockers"],
    specialPopulations: { pregnancy: "Inhalers Safe", renal: "No adjustment" }
  },
  "migraine": {
    category: "Neurology",
    color: "purple",
    firstLine: "Naproxen 500mg + Domperidone 10mg.",
    management: [
      "Rest in dark, quiet room",
      "Prophylaxis: Propranolol 40mg BD",
      "Hydration is key"
    ],
    symptoms: ["Unilateral headache", "Photophobia", "Nausea", "Aura"],
    labs: ["MRI Brain (if atypical)"],
    lifestyle: [
      "Regular sleep schedule",
      "Stress reduction",
      "Keep a headache diary"
    ],
    diet: {
      eat: ["Magnesium rich foods", "Ginger tea", "Water"],
      avoid: ["Aged cheese", "Red wine", "Chocolate", "MSG", "Caffeine"]
    },
    contraindications: ["Triptans in Ischemic Heart Disease"],
    specialPopulations: { pregnancy: "Paracetamol Only", renal: "Adjust NSAIDs" }
  },
  "gerd / gastritis": {
    category: "Gastro",
    color: "orange",
    firstLine: "Pantoprazole 40mg OD (Empty Stomach).",
    management: [
      "Syrup Sucralfate before meals",
      "Domperidone if nausea present",
      "Rule out H. pylori infection"
    ],
    symptoms: ["Heartburn", "Regurgitation", "Epigastric pain", "Bloating"],
    labs: ["Endoscopy (if alarm signs)"],
    lifestyle: [
      "Head end elevation",
      "Do not lie down after food",
      "Weight loss if obese"
    ],
    diet: {
      eat: ["Oatmeal", "Ginger", "Melon", "Egg whites", "Yogurt"],
      avoid: ["Spicy/Oily food", "Coffee", "Chocolate", "Peppermint", "Soda"]
    },
    contraindications: [],
    specialPopulations: { pregnancy: "Pantoprazole Safe", renal: "No adjustment" }
  }
};

// --- 2. COMPONENTS ---

function Onboarding({ user, onComplete }) {
  const [formData, setFormData] = useState({
    fullName: user.name || "",
    specialty: "",
    hospitalName: "",
    licenseNumber: "",
    phone: "",
    address: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { ...user, ...formData, isProfileComplete: true };
    localStorage.setItem("clinical_current_user", JSON.stringify(profileData));
    const allUsers = JSON.parse(localStorage.getItem("clinical_users") || "[]");
    const updatedUsers = allUsers.map(u => u.email === user.email ? profileData : u);
    localStorage.setItem("clinical_users", JSON.stringify(updatedUsers));
    onComplete(profileData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-blue-600 p-8 text-white text-center">
          <div className="mx-auto bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
            <Stethoscope size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold">Doctor Profile Setup</h2>
          <p className="text-blue-100 mt-2 text-sm">This information will verify your professional status.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Doctor Name</label>
              <div className="relative"><User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="text" placeholder="Dr. John Doe" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-800" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} /></div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Specialty</label>
              <div className="relative"><FileBadge className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="text" placeholder="MD, Cardiologist" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-800" value={formData.specialty} onChange={e => setFormData({...formData, specialty: e.target.value})} /></div>
            </div>
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Hospital / Clinic Name</label>
              <div className="relative"><Building2 className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="text" placeholder="City General Hospital" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-800" value={formData.hospitalName} onChange={e => setFormData({...formData, hospitalName: e.target.value})} /></div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">License Number</label>
              <input required type="text" placeholder="MCI-123456" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-800" value={formData.licenseNumber} onChange={e => setFormData({...formData, licenseNumber: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Clinic Address</label>
              <input type="text" placeholder="123 Medical Lane" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-800" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>
          </div>
          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"><Save size={20} /> Save & Enter Dashboard</button>
        </form>
      </div>
    </div>
  );
}

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const users = JSON.parse(localStorage.getItem("clinical_users") || "[]");
    if (isLogin) {
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      if (user) onLogin(user); else setError("Invalid credentials. Try creating an account.");
    } else {
      if (users.find(u => u.email === formData.email)) { setError("User already exists"); return; }
      const newUser = { name: formData.name, email: formData.email, password: formData.password };
      users.push(newUser);
      localStorage.setItem("clinical_users", JSON.stringify(users));
      onLogin(newUser);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 mb-4"><Activity className="h-8 w-8 text-white" /></div>
          <h1 className="text-2xl font-bold text-slate-800">Clinical<span className="text-blue-600">Assist</span></h1>
          <p className="text-slate-500 text-sm mt-1">{isLogin ? "Welcome back, Doctor" : "Create your account"}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && <div className="relative"><User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="text" placeholder="Full Name" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></div>}
          <div className="relative"><Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="email" placeholder="Email Address" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
          <div className="relative"><Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" /><input required type="password" placeholder="Password" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} /></div>
          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg">{isLogin ? "Sign In" : "Create Account"}</button>
        </form>
        <div className="mt-6 text-center text-sm"><button onClick={() => setIsLogin(!isLogin)} className="text-slate-500 hover:text-blue-600 font-semibold">{isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}</button></div>
      </div>
    </div>
  );
}

function DiseaseCard({ name, data, onClick }) {
  const colors = { red: "bg-rose-50 text-rose-700 border-rose-200", blue: "bg-sky-50 text-sky-700 border-sky-200", emerald: "bg-emerald-50 text-emerald-700 border-emerald-200", purple: "bg-violet-50 text-violet-700 border-violet-200", orange: "bg-amber-50 text-amber-700 border-amber-200" };
  const theme = colors[data.color] || colors.blue;
  return (
    <div onClick={onClick} className="bg-white dark:bg-slate-800 rounded-[20px] p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="flex justify-between items-start">
        <div>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${theme}`}>{data.category}</span>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 capitalize mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 font-medium">{data.firstLine}</p>
        </div>
      </div>
    </div>
  );
}

function DiseaseModal({ name, data, onClose }) {
  if (!data) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10 border-b border-slate-100 dark:border-slate-800 p-5 flex justify-between items-center">
          <div><h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 capitalize">{name}</h2><span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full uppercase tracking-wide">{data.category}</span></div>
          <button onClick={onClose} className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition"><X className="h-6 w-6 text-slate-500 dark:text-slate-400" /></button>
        </div>
        <div className="p-6 space-y-6 dark:text-slate-200">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-900">
            <div className="flex items-center gap-2 mb-3"><Pill className="h-5 w-5 text-blue-600 dark:text-blue-400" /><h3 className="font-bold text-blue-900 dark:text-blue-200 uppercase text-xs tracking-wider">Treatment Protocol</h3></div>
            <p className="text-xl font-bold text-slate-900 dark:text-white mb-4">{data.firstLine}</p>
            <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 border border-blue-100/50 dark:border-blue-900/50">
              <ul className="space-y-3">{data.management.map((step, i) => (<li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium border-b border-blue-100 dark:border-blue-900 pb-2 last:border-0 last:pb-0"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-[10px] font-bold text-blue-600 dark:text-blue-300 flex-shrink-0">{i + 1}</span>{step}</li>))}</ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
               <h4 className="flex gap-2 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-3"><Activity size={16}/> Hematological / Labs</h4>
               <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium pl-2">{data.labs.map(l => <li key={l} className="flex gap-2 items-start"><span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5"></span>{l}</li>)}</ul>
             </div>
             <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
               <h4 className="flex gap-2 font-bold text-slate-500 dark:text-slate-400 text-xs uppercase mb-3"><Thermometer size={16}/> Clinical Features</h4>
               <div className="flex flex-wrap gap-2">{data.symptoms.map(s => <span key={s} className="px-2.5 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm">{s}</span>)}</div>
             </div>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 flex items-center gap-2"><Utensils className="h-4 w-4 text-orange-500" /><h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase">Dietary & Lifestyle</h4></div>
            <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-700">
               <div className="p-4 bg-emerald-50/30 dark:bg-emerald-900/20"><p className="text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase mb-3 flex gap-1"><CheckCircle2 size={14} /> Recommended</p><ul className="text-xs space-y-2 text-emerald-900 dark:text-emerald-300 font-medium">{data.diet?.eat.map(e => <li key={e}>• {e}</li>)}</ul></div>
               <div className="p-4 bg-rose-50/30 dark:bg-rose-900/20"><p className="text-rose-700 dark:text-rose-400 font-bold text-xs uppercase mb-3 flex gap-1"><Ban size={14} /> Avoid</p><ul className="text-xs space-y-2 text-rose-900 dark:text-rose-300 font-medium">{data.diet?.avoid.map(e => <li key={e}>• {e}</li>)}</ul></div>
            </div>
            {data.lifestyle && <div className="p-4 border-t border-slate-100 dark:border-slate-700"><p className="text-xs font-bold text-slate-400 uppercase mb-2">Lifestyle</p><ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 pl-1">{data.lifestyle.map(l => <li key={l} className="flex gap-2"><span className="text-orange-400">→</span> {l}</li>)}</ul></div>}
          </div>
          <div className="grid gap-3">
             {data.contraindications?.length > 0 && <div className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900 rounded-xl flex gap-3"><AlertTriangle className="text-rose-500 h-5 w-5 flex-shrink-0" /><div className="text-xs text-rose-800 dark:text-rose-300"><span className="font-bold">Contraindications:</span> {data.contraindications.join(", ")}</div></div>}
             <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900 rounded-xl flex gap-3"><Baby className="text-indigo-500 h-5 w-5 flex-shrink-0" /><div className="text-xs text-indigo-800 dark:text-indigo-300"><span className="font-bold">Special Populations:</span> Pregnancy: {data.specialPopulations.pregnancy}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 3. MAIN APP CONTROLLER ---
export default function ClinicalTool() {
  const [user, setUser] = useState(null);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [prescriptions] = useState(diseaseDatabase);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("search");
  const [activeTool, setActiveTool] = useState("pediatric");
  const [darkMode, setDarkMode] = useState(false);
  
  // Calculators
  const [doseData, setDoseData] = useState({ weight: "", adultDose: "" });
  const [bmiData, setBmiData] = useState({ height: "", weight: "" });
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male" });
  const [results, setResults] = useState({ dose: null, bmi: null, gfr: null });

  useEffect(() => {
    const savedUser = localStorage.getItem("clinical_current_user");
    if (savedUser) setUser(JSON.parse(savedUser));
    const isDark = localStorage.getItem(THEME_KEY) === "dark";
    setDarkMode(isDark);
    if(isDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
    if(newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const handleLogout = () => { localStorage.removeItem("clinical_current_user"); setUser(null); };

  const handleLogin = (userData) => {
    const allUsers = JSON.parse(localStorage.getItem("clinical_users") || "[]");
    const existing = allUsers.find(u => u.email === userData.email);
    if (existing && existing.isProfileComplete) {
      localStorage.setItem("clinical_current_user", JSON.stringify(existing));
      setUser(existing);
    } else {
      const tempUser = { ...userData, isProfileComplete: false };
      localStorage.setItem("clinical_current_user", JSON.stringify(tempUser));
      setUser(tempUser);
    }
  };

  const handleOnboardingComplete = (profileData) => {
    localStorage.setItem("clinical_current_user", JSON.stringify(profileData));
    setUser(profileData);
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

  if (!user) return <Auth onLogin={handleLogin} />;
  if (!user.isProfileComplete) return <Onboarding user={user} onComplete={handleOnboardingComplete} />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-24 transition-colors duration-300">
      
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-blue-600/20"><Stethoscope className="h-5 w-5 text-white" /></div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">Clinical<span className="text-blue-600 dark:text-blue-400">Assist</span></h1>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={toggleTheme} className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition">
                {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
              </button>
              <button onClick={handleLogout} className="p-2 bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/40 rounded-full border border-rose-200 dark:border-rose-900 transition"><LogOut className="h-5 w-5 text-rose-600 dark:text-rose-400" /></button>
            </div>
          </div>
          
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 italic mb-4 font-medium">"Empowering clinicians with precision and speed. Diagnose, Treat, Succeed."</p>

          <div className="max-w-xl mx-auto relative flex items-center bg-slate-100 dark:bg-slate-800 focus-within:bg-white dark:focus-within:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-blue-400 transition-all shadow-inner">
            <Search className="h-4 w-4 text-slate-400 ml-3.5" /><input className="w-full h-11 pl-3 pr-4 bg-transparent outline-none text-base text-slate-700 dark:text-slate-200 placeholder:text-slate-400" placeholder="Search disease or symptom..." value={query} onChange={e => {setQuery(e.target.value); setActiveTab("search");}} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-4 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
          {["search", "tools"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all capitalize flex justify-center items-center gap-2 ${activeTab === tab ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
              {tab === "search" && <Search size={14} />}{tab === "tools" && <Calculator size={14} />}{tab}
            </button>
          ))}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 pb-10">
          {activeTab === "search" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {query ? filteredResults.map(([key, data]) => (
                <DiseaseCard key={key} name={key} data={data} onClick={() => setSelectedDisease({ key, data })} />
              )) : (
                <div className="col-span-full text-center py-20 opacity-60"><Activity className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-2" /><p className="text-slate-500 dark:text-slate-400 font-medium">Search to see clinical guidelines</p></div>
              )}
            </div>
          )}

          {activeTab === "tools" && (
             <div className="space-y-4">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[
                    {id: 'pediatric', label: 'Pediatric Dose', icon: Baby},
                    {id: 'bmi', label: 'BMI Calc', icon: Scale},
                    {id: 'gfr', label: 'eGFR (Kidney)', icon: Activity}
                  ].map(tool => (
                    <button key={tool.id} onClick={() => setActiveTool(tool.id)} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${activeTool === tool.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                      <tool.icon size={14} /> {tool.label}
                    </button>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                   {activeTool === 'pediatric' && (
                     <div className="space-y-4">
                       <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Baby className="text-purple-500"/> Pediatric Calc (Clark's)</h2>
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={doseData.weight} onChange={e => setDoseData({...doseData, weight: e.target.value})} placeholder="Child Weight (kg)" />
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={doseData.adultDose} onChange={e => setDoseData({...doseData, adultDose: e.target.value})} placeholder="Adult Dose (mg)" />
                       <button onClick={calculateDose} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg">Calculate</button>
                       {results.dose && <div className="p-5 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-center text-emerald-700 dark:text-emerald-400 font-black text-3xl">{results.dose} mg</div>}
                     </div>
                   )}

                   {activeTool === 'bmi' && (
                     <div className="space-y-4">
                       <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Scale className="text-orange-500"/> BMI Calculator</h2>
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={bmiData.weight} onChange={e => setBmiData({...bmiData, weight: e.target.value})} placeholder="Weight (kg)" />
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={bmiData.height} onChange={e => setBmiData({...bmiData, height: e.target.value})} placeholder="Height (cm)" />
                       <button onClick={calculateBMI} className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg">Calculate BMI</button>
                       {results.bmi && <div className="p-5 bg-orange-50 dark:bg-orange-900/30 rounded-2xl text-center text-orange-700 dark:text-orange-400 font-black text-3xl">{results.bmi}</div>}
                     </div>
                   )}

                   {activeTool === 'gfr' && (
                     <div className="space-y-4">
                       <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Activity className="text-red-500"/> eGFR (MDRD)</h2>
                       <div className="flex gap-2">
                         <button onClick={() => setGfrData({...gfrData, gender: 'male'})} className={`flex-1 p-3 rounded-xl font-bold ${gfrData.gender === 'male' ? 'bg-slate-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>Male</button>
                         <button onClick={() => setGfrData({...gfrData, gender: 'female'})} className={`flex-1 p-3 rounded-xl font-bold ${gfrData.gender === 'female' ? 'bg-slate-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>Female</button>
                       </div>
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={gfrData.creatinine} onChange={e => setGfrData({...gfrData, creatinine: e.target.value})} placeholder="Serum Creatinine (mg/dL)" />
                       <input type="number" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl font-bold dark:text-white" value={gfrData.age} onChange={e => setGfrData({...gfrData, age: e.target.value})} placeholder="Age (Years)" />
                       <button onClick={calculateGFR} className="w-full py-4 bg-red-500 text-white font-bold rounded-2xl shadow-lg">Calculate eGFR</button>
                       {results.gfr && <div className="p-5 bg-red-50 dark:bg-red-900/30 rounded-2xl text-center text-red-700 dark:text-red-400 font-black text-3xl">{results.gfr}</div>}
                     </div>
                   )}
                </div>
             </div>
          )}
        </div>
      </div>
      {selectedDisease && <DiseaseModal name={selectedDisease.key} data={selectedDisease.data} onClose={() => setSelectedDisease(null)} />}
    </div>
  );
}