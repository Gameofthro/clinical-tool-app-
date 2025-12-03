import { useState } from "react";
import { Activity, Lock, Mail, User } from "lucide-react";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 1. Load the list of existing users from the browser's memory
    const users = JSON.parse(localStorage.getItem("clinical_users") || "[]");

    if (isLogin) {
      // LOGIN: Check if the email/password matches a saved user
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      if (user) {
        onLogin(user); // Log them in
      } else {
        setError("Invalid email or password. Have you signed up?");
      }
    } else {
      // SIGNUP: Create a new user
      if (users.find(u => u.email === formData.email)) {
        setError("User already exists. Please Sign In.");
        return;
      }
      
      const newUser = { name: formData.name, email: formData.email, password: formData.password };
      
      // Save the new user to the list
      users.push(newUser);
      localStorage.setItem("clinical_users", JSON.stringify(users));
      
      // Log them in immediately
      onLogin(newUser);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 mb-4">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Clinical<span className="text-blue-600">Assist</span></h1>
          <p className="text-slate-500 text-sm mt-1">{isLogin ? "Welcome back, Doctor" : "Create your account"}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
              <input 
                required type="text" placeholder="Full Name"
                className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input 
              required type="email" placeholder="Email Address"
              className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input 
              required type="password" placeholder="Password"
              className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-slate-900 placeholder:text-slate-400"
              value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium animate-pulse">{error}</p>}

          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-600/20 active:scale-95">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <button onClick={() => {setIsLogin(!isLogin); setError("");}} className="text-slate-500 hover:text-blue-600 font-semibold">
            {isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}