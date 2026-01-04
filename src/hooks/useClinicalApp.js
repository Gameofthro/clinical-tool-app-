import { useState, useEffect, useCallback } from "react";
import { App } from '@capacitor/app';
import { 
    auth, 
    getRedirectResult 
} from "../firebase";
import { 
    onAuthStateChanged, 
    setPersistence, 
    browserLocalPersistence, 
    signOut 
} from "firebase/auth";

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
        // Force Persistence to Local so it survives app closure
        setPersistence(auth, browserLocalPersistence).catch(err => console.error("Persistence Error:", err));

        const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
            try {
                // A. Check for Redirect Result (Crucial for Google Login return)
                const result = await getRedirectResult(auth);
                
                let finalUser = null;

                if (result?.user) {
                    finalUser = {
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL,
                        isProfileComplete: true,
                        uid: result.user.uid // Keep UID for internal mapping
                    };
                } else if (firebaseUser) {
                    finalUser = {
                        name: firebaseUser.displayName,
                        email: firebaseUser.email,
                        photo: firebaseUser.photoURL,
                        isProfileComplete: true,
                        uid: firebaseUser.uid
                    };
                }

                if (finalUser) {
                    localStorage.setItem("clinical_current_user", JSON.stringify(finalUser));
                    setUser(finalUser);

                    // Check for mandatory terms on successful session recovery
                    const hasAccepted = localStorage.getItem(TERMS_KEY);
                    if (!hasAccepted) {
                        setShowTerms(true);
                        setMandatoryTerms(true);
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Auth Handshake Error:", error);
            } finally {
                // Ensure loading is false ONLY after we checked redirect and existing session
                setLoading(false);
            }
        });

        // B. Load Theme (Static)
        const savedTheme = localStorage.getItem(THEME_KEY);
        const isDark = savedTheme === "dark" || 
                      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);

        return () => unsubscribe();
    }, []);

    // --- 3. HARDWARE BACK BUTTON INTERFACE ---
    const setupBackButton = useCallback((closeOverlays, activeTab, setActiveTab) => {
        const backListener = App.addListener('backButton', () => {
            if (closeOverlays()) return;
            if (activeTab !== "home") {
                setActiveTab("home");
            } else {
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

    const handleLogout = async () => {
        try {
            await signOut(auth); // Destroy native token session
            localStorage.removeItem("clinical_current_user");
            localStorage.removeItem(TERMS_KEY); 
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
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