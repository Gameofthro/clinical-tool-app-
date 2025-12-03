import { Activity } from "lucide-react";
import { auth, googleProvider, signInWithPopup } from "../firebase"; // Import from the file we just made

export default function Auth({ onLogin }) {
  
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Extract useful info from Google profile
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      };

      // Save locally to keep them logged in on refresh
      localStorage.setItem("clinical_current_user", JSON.stringify(userData));
      
      // Log them into your app
      onLogin(userData);
      
    } catch (error) {
      console.error("Login Failed:", error.message);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl text-center">
        
        {/* Logo Section */}
        <div className="mb-8">
          <div className="inline-flex p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
            <Activity className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            Clinical<span className="text-blue-600">Assist</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Professional Medical Guide</p>
        </div>

        {/* Google Button */}
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <p className="text-sm text-slate-500 mb-4">Sign in to access clinical protocols</p>
            
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-6 h-6"
              />
              Continue with Google
            </button>
          </div>

          <p className="text-xs text-slate-400">
            By continuing, you verify that you are a medical professional authorized to use this tool.
          </p>
        </div>

      </div>
    </div>
  );
}