import { useState, useEffect } from "react";
import { Activity, Lock, Mail, User, ArrowRight, Chrome } from "lucide-react";
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from "../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isGoogleProcessing, setIsGoogleProcessing] = useState(false);

  // --- 1. CAPTURE GOOGLE DATA (The "Pre-fill" Logic) ---
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        // Instead of logging in, we switch to Register mode and pre-fill data
        setIsLogin(false);
        setFormData({
          name: result.user.displayName || "",
          email: result.user.email || "",
          password: "" // User must now set a password
        });
      }
    }).catch(err => setError("Google sync failed. Try manual entry."));
  }, []);

  // --- 2. GOOGLE REDIRECT TRIGGER ---
  const handleGoogleLogin = () => signInWithRedirect(auth, googleProvider);

  // --- 3. UNIFIED SUBMIT (Handles Login & Registration) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        // Manual Login via Firebase
        const res = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        onLogin(res.user);
      } else {
        // Manual Registration (even if pre-filled by Google)
        const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(res.user, { displayName: formData.name });
        onLogin({ ...res.user, displayName: formData.name });
      }
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-[440px] rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
        {/* Design Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"></div>
        
        <div className="text-center mb-10 relative">
          <div className="inline-flex p-4 bg-blue-600 rounded-3xl shadow-xl shadow-blue-500/20 mb-6">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter italic">
            CLINICAL<span className="text-blue-500">ASSIST</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
            {isLogin ? "Medical Reference Access" : "Create Clinical Profile"}
          </p>
        </div>

        {/* --- GOOGLE PRE-FILL BUTTON --- */}
        {isLogin && (
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-4 bg-white hover:bg-slate-100 text-slate-900 font-black py-4 rounded-2xl transition-all duration-300 transform active:scale-95 mb-8 shadow-lg shadow-white/5"
          >
            <Chrome className="w-5 h-5" />
            Sync with Google
          </button>
        )}

        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
          <span className="relative bg-slate-900 px-4 text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">
            {isLogin ? "Or Use Credentials" : "Complete Your Account"}
          </span>
        </div>

        {/* --- FORM --- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="group relative">
              <User className="absolute left-4 top-4 h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input 
                required 
                placeholder="Full Name / Username" 
                className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
              />
            </div>
          )}
          
          <div className="group relative">
            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              required 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />
          </div>

          <div className="group relative">
            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              required 
              type="password" 
              placeholder={isLogin ? "Password" : "Set New Password"} 
              className="w-full pl-12 p-4 bg-slate-950 border border-slate-800 rounded-2xl text-white outline-none focus:border-blue-500 transition-all font-medium"
              value={formData.password} 
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
          </div>

          {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs font-bold text-center">{error}</div>}

          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 transition-all">
            {isLogin ? "SIGN IN" : "FINALIZE ACCOUNT"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
          >
            {isLogin ? "New user? Register" : "Have account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}