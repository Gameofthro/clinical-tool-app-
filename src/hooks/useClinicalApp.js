/**
 * HOOK: Clinical App Controller
 * * DESCRIPTION: 
 * Manages core system states: Authentication, Theme (Dark/Light), 
 * Legal Compliance, and Hardware Intercepts (Back Button).
 * * TECHNICAL NOTE: 
 * Uses Capacitor's App plugin to handle native Android 'Back' events.
 */

import { useState, useEffect, useCallback } from "react";
import { App } from '@capacitor/app';

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1";

export function useClinicalApp() {
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [mandatoryTerms, setMandatoryTerms] = useState(false);

    // --- 1. INITIALIZATION (Auth & Theme) ---
    useEffect(() => {
        // Load User
        const savedUser = localStorage.getItem("clinical_current_user");
        if (savedUser) setUser(JSON.parse(savedUser));

        // Load Theme
        const savedTheme = localStorage.getItem(THEME_KEY);
        const isDark = savedTheme === "dark" || 
                      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    // --- 2. LEGAL COMPLIANCE CHECK ---
    useEffect(() => {
        if (user) {
            const hasAccepted = localStorage.getItem(TERMS_KEY);
            if (!hasAccepted) {
                setShowTerms(true);
                setMandatoryTerms(true);
            }
        }
    }, [user]);

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