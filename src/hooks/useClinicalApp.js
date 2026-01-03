
import { useState, useEffect, useCallback } from "react";
import { App } from '@capacitor/app';
import { auth, getRedirectResult } from "../firebase";

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1";

export function useClinicalApp() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [mandatoryTerms, setMandatoryTerms] = useState(false);

   // --- 1. INITIALIZATION (Auth, Redirect Handshake & Theme) ---
  useEffect(() => {
    // A. The "Catcher" - This stays active to catch the user after the redirect reload
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      try {
        // First check: Did we just come back from a Google Redirect?
        const result = await getRedirectResult(auth);
        
        let finalUser = null;

        if (result?.user) {
          // Case 1: Just finished the redirect
          finalUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            isProfileComplete: true
          };
        } else if (firebaseUser) {
          // Case 2: Already logged in from a previous session
          finalUser = {
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            photo: firebaseUser.photoURL,
            isProfileComplete: true
          };
        }

        if (finalUser) {
          localStorage.setItem("clinical_current_user", JSON.stringify(finalUser));
          setUser(finalUser);
        } else {
          // Case 3: No user found at all
          setUser(null);
        }
      } catch (error) {
        console.error("Auth Handshake Error:", error);
      } finally {
        setLoading(false); // Only stop the spinner AFTER we are 100% sure
      }
    });

    // B. Load Theme (Static)
    const savedTheme = localStorage.getItem(THEME_KEY);
    const isDark = savedTheme === "dark" || 
                  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

    // --- 3. HARDWARE BACK BUTTON INTERFACE ---
    /**
     * @param {Function} closeOverlays - A function from UI that returns true if it closed a modal.
     * @param {String} activeTab - Current active navigation tab.
     * @param {Function} setActiveTab - Function to change tabs.
     */
    const setupBackButton = useCallback((closeOverlays, activeTab, setActiveTab) => {
        const backListener = App.addListener('backButton', () => {
            // Priority 1: Close open UI Overlays (Modals, Drawers, About)
            if (closeOverlays()) return;

            // Priority 2: If in a sub-feature, return to Dashboard
            if (activeTab !== "home") {
                setActiveTab("home");
            } 
            // Priority 3: Exit App
            else {
                App.exitApp();
            }
        });

        return () => {
            backListener.then(l => l.remove());
        };
    }, []);

    // --- 4. SYSTEM ACTIONS ---
    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
    };

    const handleLogin = (userData) => {
        localStorage.setItem("clinical_current_user", JSON.stringify(userData));
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem("clinical_current_user");
        // Reset terms on logout to ensure next user accepts fresh
        localStorage.removeItem(TERMS_KEY); 
        setUser(null);
    };

    const handleAcceptTerms = () => {
        localStorage.setItem(TERMS_KEY, "true");
        setShowTerms(false);
        setMandatoryTerms(false);
    };

    return {
        user,
        loading,
        darkMode,
        toggleTheme,
        showTerms,
        setShowTerms,
        mandatoryTerms,
        handleLogin,
        handleLogout,
        handleAcceptTerms,
        setupBackButton 
    };
}