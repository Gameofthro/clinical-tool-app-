import { useState, useEffect } from "react";
import { Activity, Lock, Mail, User, Chrome } from "lucide-react";
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from "../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // 1. CAPTURE: Listen for Google returning the user
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        // Log in immediately if Google returns a user
        onLogin(result.user);
      }
    }).catch(err => setError("Auth sync failed. Use manual login."));
  }, [onLogin]);

  // 2. TRIGGER: Use Redirect for Mobile/Play Store stability
  const handleGoogleLogin = () => signInWithRedirect(auth, googleProvider);

  // 3. SECURE MANUAL SUBMIT: Use Firebase Server, NOT localStorage
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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-[2rem] p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-4"><Activity className="h-8 w-8 text-white" /></div>
          <h1 className="text-2xl font-black text-white italic">CLINICAL<span className="text-blue-500">ASSIST</span></h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
            {isLogin ? "Secure Access" : "Create Clinical Profile"}
          </p>
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-bold py-3.5 rounded-xl mb-6 transition-all">
          <Chrome className="w-5 h-5" /> Sync with Google
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input required placeholder="Full Name" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-blue-500"
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          )}
          <input required type="email" placeholder="Email Address" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-blue-500"
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="password" placeholder="Password" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:border-blue-500"
            value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          
          {error && <p className="text-red-400 text-xs text-center font-bold bg-red-500/10 py-2 rounded-lg">{error}</p>}
          
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all">
            {isLogin ? "SIGN IN" : "REGISTER"}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest">
          {isLogin ? "New user? Register" : "Have account? Login"}
        </button>
      </div>
    </div>
  );
}