import { useState, useEffect, useCallback } from "react";
import { App } from '@capacitor/app';
import { UserService } from "../services/UserService";

const THEME_KEY = "clinical_theme";
const TERMS_KEY = "clinical_terms_accepted_v1";

export function useClinicalApp() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [mandatoryTerms, setMandatoryTerms] = useState(false);

    useEffect(() => {
        const initApp = async () => {
            try {
                const name = await UserService.getName();
                const asked = await UserService.hasBeenAsked();
                
                setUser({
                    name: name,
                    isGuest: name === 'Guest',
                    hasBeenOnboarded: asked
                });

                const hasAccepted = localStorage.getItem(TERMS_KEY);
                if (!hasAccepted) {
                    setShowTerms(true);
                    setMandatoryTerms(true);
                }

                const savedTheme = localStorage.getItem(THEME_KEY);
                const isDark = savedTheme === "dark" || 
                              (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
                
                setDarkMode(isDark);
                document.documentElement.classList.toggle("dark", isDark);
            } catch (error) {
                console.error("Init Error:", error);
            } finally {
                setLoading(false);
            }
        };
        initApp();
    }, []);

    const setupBackButton = useCallback((closeOverlays, activeTab, setActiveTab) => {
        const backListener = App.addListener('backButton', () => {
            if (closeOverlays()) return;
            if (activeTab !== "home") {
                setActiveTab("home");
            } else {
                App.exitApp();
            }
        });
        return () => { backListener.then(l => l.remove()); };
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem(THEME_KEY, newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
    };

    // FIXED: Correctly updates state and persistence
    const handleUpdateName = async (newName) => {
        if (!newName || newName.trim() === "") {
            await handleLogout(); // Use logout logic if name is empty
            return;
        }

        const success = await UserService.setName(newName);
        if (success) {
            await UserService.setAsAsked();
            setUser({
                name: newName.trim(),
                isGuest: false,
                hasBeenOnboarded: true
            });
        }
    };

    // FIXED: This now properly resets the onboarding trigger
    const handleLogout = async () => {
        const success = await UserService.removeName();
        if (success) {
            setUser({
                name: "Guest",
                isGuest: true,
                hasBeenOnboarded: false // Modal will pop up now
            });
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
        handleUpdateName,
        handleLogout,
        handleAcceptTerms,
        setupBackButton 
    };
}