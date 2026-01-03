import { useState, useEffect } from "react";
import { Activity, Lock, Mail, User } from "lucide-react";
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from "../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // --- 1. THE "PRE-FILL" LOGIC (Fixes the Google Flow) ---
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        // Switch to registration mode and pre-fill the name/email from Google
        setIsLogin(false);
        setFormData({
          name: result.user.displayName || "",
          email: result.user.email || "",
          password: "" 
        });
      }
    }).catch(err => {
        console.error("Sync error:", err);
        setError("Google sync failed. Please enter details manually.");
    });
  }, []);

  // --- 2. THE HANDLERS ---
  const handleGoogleLogin = () => signInWithRedirect(auth, googleProvider);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        // Direct Firebase Login
        const res = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        onLogin(res.user);
      } else {
        // Firebase Registration + Profile Update
        const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(res.user, { displayName: formData.name });
        onLogin({ ...res.user, displayName: formData.name });
      }
    } catch (err) {
      // Direct error message from Firebase
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Clinical<span className="text-blue-600">Assist</span></h1>
          <p className="text-slate-500 text-sm mt-1">{isLogin ? "Medical Reference Access" : "Create Clinical Account"}</p>
        </div>

        {/* --- GOOGLE SYNC BUTTON --- */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-4 rounded-2xl transition-all mb-6"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Sync with Google
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <span className="relative bg-white px-4 text-[10px] text-slate-400 uppercase font-black tracking-widest">Or Use Credentials</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input required placeholder="Username / Full Name" className="w-full pl-11 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 text-slate-900"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input required type="email" placeholder="Email Address" className="w-full pl-11 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 text-slate-900"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input required type="password" placeholder={isLogin ? "Password" : "Set Account Password"} className="w-full pl-11 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 text-slate-900"
              value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>

          {error && <p className="text-red-500 text-xs text-center font-bold bg-red-50 py-2 rounded-lg">{error}</p>}

          <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-lg">
            {isLogin ? "Sign In" : "Complete Registration"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <button onClick={() => setIsLogin(!isLogin)} className="text-slate-500 hover:text-blue-600 font-semibold tracking-tight">
            {isLogin ? "New user? Create account" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}