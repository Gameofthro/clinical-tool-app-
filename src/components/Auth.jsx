import { useState, useEffect } from "react";
import { Activity, Lock, Mail, User } from "lucide-react";
import { auth, googleProvider, signInWithRedirect, getRedirectResult } from "../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added to handle the handshake delay

  useEffect(() => {
    // 1. Check if we just returned from a Google Redirect
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const userData = {
            name: result.user.displayName || "Clinical User",
            email: result.user.email,
            uid: result.user.uid
          };
          localStorage.setItem("clinical_current_user", JSON.stringify(userData));
          onLogin(userData); 
        }
        setIsLoading(false); // Finished checking
      })
      .catch((err) => {
        console.error("Redirect Error:", err.code);
        setIsLoading(false);
      });
  }, [onLogin]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithRedirect(auth, googleProvider); //
    } catch (err) {
      setError("Could not initialize Google login.");
      setIsLoading(false);
    }
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-blue-600 rounded-2xl shadow-lg mb-4">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Clinical<span className="text-blue-600">Assist</span></h1>
          <p className="text-slate-500 text-sm mt-1">{isLogin ? "Medical Reference Access" : "Create Clinical Account"}</p>
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-4 rounded-2xl transition-all mb-6">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Sync with Google
        </button>

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
            <input required type="password" placeholder="Password" className="w-full pl-11 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 text-slate-900"
              value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          {error && <p className="text-red-500 text-xs text-center font-bold bg-red-50 py-2 rounded-lg">{error}</p>}
          <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-lg">
            {isLogin ? "Sign In" : "Register Account"}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="text-slate-500 hover:text-blue-600 font-semibold w-full mt-6 text-center text-sm">
          {isLogin ? "New user? Create account" : "Have account? Sign In"}
        </button>
      </div>
    </div>
  );
}