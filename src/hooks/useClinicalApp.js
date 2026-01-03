
import { useState, useEffect, useCallback } from "react";
import { App } from '@capacitor/app';

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1";

export function useClinicalApp() {
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [mandatoryTerms, setMandatoryTerms] = useState(false);

   // --- 1. INITIALIZATION (Auth, Redirect Handshake & Theme) ---
    useEffect(() => {
        const initializeApp = async () => {
            // A. Catch Google Redirect Result
            try {
                const result = await getRedirectResult(auth);
                if (result?.user) {
                    const userData = {
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL
                    };
                    localStorage.setItem("clinical_current_user", JSON.stringify(userData));
                    setUser(userData);
                }
            } catch (error) {
                console.error("Redirect check failed:", error);
            }

            // B. Load Saved User if no redirect found
            const savedUser = localStorage.getItem("clinical_current_user");
            if (savedUser && !user) setUser(JSON.parse(savedUser));

            // C. Load Theme
            const savedTheme = localStorage.getItem(THEME_KEY);
            const isDark = savedTheme === "dark" || 
                          (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
            setDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);

            setLoading(false); // --- FINISHED BOOTING ---
        };

        initializeApp();
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
        darkMode,
        toggleTheme,
        showTerms,
        setShowTerms,
        mandatoryTerms,
        handleLogin,
        handleLogout,
        handleAcceptTerms,
        setupBackButton // Exported for use in App.jsx
    };
}