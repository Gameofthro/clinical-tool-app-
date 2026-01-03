import { useState, useEffect } from "react";
import { Activity, Lock, Mail, User } from "lucide-react";
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from "../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // 1. THE CAPTURE: This runs automatically when you return from Google
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const userData = {
            name: result.user.displayName,
            email: result.user.email,
            isProfileComplete: true
          };
          localStorage.setItem("clinical_current_user", JSON.stringify(userData));
          onLogin(userData); 
        }
      })
      .catch((error) => {
        console.error("Redirect Error:", error.message);
        setError("Google session failed to sync. Please try again.");
      });
  }, [onLogin]);
  
  // 2. THE TRIGGER: Only starts the process. No logic after the 'await'
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      setError("Google Sign-In failed to launch.");
    }
  };

  // 3. MANUAL LOGIN: Keep this as is for your email users
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        const res = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        onLogin(res.user);
      } else {
        const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(res.user, { displayName: formData.name });
        onLogin({ ...res.user, displayName: formData.name });
      }
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Clinical<span className="text-blue-600">Assist</span></h1>
          <p className="text-slate-500 text-sm mt-1">{isLogin ? "Welcome back" : "Create your account"}</p>
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-700 font-bold py-4 rounded-2xl transition-all mb-6">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <span className="relative bg-white px-4 text-[10px] text-slate-400 uppercase font-black tracking-widest">Or Email</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
              <input required placeholder="Username" className="w-full pl-12 p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500/20" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input required type="email" placeholder="Email Address" className="w-full pl-12 p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500/20" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input required type="password" placeholder="Password" className="w-full pl-12 p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500/20" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          {error && <p className="text-red-500 text-xs text-center font-bold bg-red-50 py-2 rounded-lg">{error}</p>}
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl transition-transform active:scale-[0.98]">
            {isLogin ? "Sign In" : "Get Started"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-slate-400 hover:text-blue-600 text-sm font-bold transition-colors">
            {isLogin ? "New user? Create account" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}