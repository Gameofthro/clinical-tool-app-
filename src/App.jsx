/**
 * MAIN ENTRY: ClinicalAssist App
 * MASTER FIX: Unified Theme Injection & High-Contrast Light Mode UI.
 * UPDATE: Web-Safe Integrated Interactive Clinical Notifications.
 */

import React, { useState, useEffect } from "react";
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

// --- SYSTEM LOGIC & STATE ---
import { useClinicalApp } from "./hooks/useClinicalApp";
import Auth from "./components/Auth";
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import AboutModal from "./components/AboutModal";
import ReferencesModal from "./components/ReferencesModal";
import ContactModal from "./components/ContactModal";

// --- NAVIGATION LAYOUT ---
import Header from "./components/Navigation/Header";
import SideDrawer from "./components/Navigation/SideDrawer";
import Dashboard from "./components/Navigation/Dashboard";

// --- FEATURE MODULES ---
import DiseaseSearch from "./features/DiseaseSearch";
import CalculatorFeature from "./features/Calculators";
import DiagnosisTool from "./features/symptoms/SymptomReviewTool"; 
import DrugDictionaryTool from "./features/DrugDictionaryTool";
import DiseaseModal from "./components/ui/DiseaseModal";

export default function ClinicalTool() {
  const app = useClinicalApp();
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showContact, setShowContact] = useState(false);

  /**
   * NOTIFICATION ENGINE (Native-First)
   * Registers actions only on mobile to prevent web-runtime exceptions.
   */
  useEffect(() => {
    const initNotifications = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          // Register Action Buttons (Dose Taken / Snooze)
          await LocalNotifications.registerActionTypes({
            types: [
              {
                id: 'CLINICAL_CARE',
                actions: [
                  { id: 'thanks', title: '❤️ Got it, thank you', foreground: true },
                  { id: 'remind', title: '⏰ Remind me later', foreground: false }
                ]
              }
            ]
          });
        } catch (e) {
          console.warn("Notification registration skipped: Environment non-native.");
        }
      }
    };

    let actionListener;
    if (Capacitor.isNativePlatform()) {
      actionListener = LocalNotifications.addListener('localNotificationActionPerformed', (action) => {
        console.log('Care message acknowledged:', action.actionId);
      });
    }

    initNotifications();

    return () => {
      if (actionListener) actionListener.remove(); 
    };
  }, []);

  /**
   * GLOBAL THEME ENGINE
   */
  useEffect(() => {
    const root = document.documentElement;
    if (app.darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [app.darkMode]);

  /**
   * HARDWARE BACK BUTTON INTERCEPTOR
   */
  useEffect(() => {
    const closeOverlays = () => {
      if (selectedDisease) { setSelectedDisease(null); return true; }
      if (isDrawerOpen) { setIsDrawerOpen(false); return true; }
      if (showAbout) { setShowAbout(false); return true; }
      if (showReferences) { setShowReferences(false); return true; }
      if (showContact) { setShowContact(false); return true; }
      if (app.showTerms && !app.mandatoryTerms) { app.setShowTerms(false); return true; }
      return false;
    };
    return app.setupBackButton(closeOverlays, activeTab, setActiveTab);
  }, [selectedDisease, isDrawerOpen, showAbout, showReferences, showContact, activeTab, app]);

  if (!app.user) return <Auth onLogin={app.handleLogin} />;
  
  if (app.showTerms && app.mandatoryTerms) {
    return <LegalModal isOpen={true} onAccept={app.handleAcceptTerms} isMandatory={true} />;
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* MASTER MEDICS THEME INJECTION */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .light .bg-slate-900\\/50, 
        .light [class*="bg-slate-"],
        .light .group { 
          background-color: #ffffff !important; 
          border: 1px solid #e2e8f0 !important; 
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.05) !important;
        }
        
        .light h1, .light h2, .light h3 { color: #0f172a !important; }
        .light p, .light span { color: #475569 !important; }
        
        /* Dropdown Visibility Fix */
        .light select, .light select option {
          background-color: #ffffff !important;
          color: #0f172a !important;
        }
        
        /* Master Input Focus */
        .light input {
          color: #0f172a !important;
          background-color: #ffffff !important;
        }
        
        .light .text-blue-500, .light .text-blue-600 { color: #2563eb !important; }
      `}} />

      <Header 
        user={app.user} 
        activeTab={activeTab} 
        query={query} 
        setQuery={setQuery} 
        setActiveTab={setActiveTab} 
        onGoHome={() => { setActiveTab("home"); setQuery(""); }}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      <main className="flex-1 overflow-y-auto px-4 w-full no-scrollbar">
        <div className="max-w-6xl mx-auto h-full py-4">
          {activeTab === "home" && <Dashboard onNavigate={setActiveTab} user={app.user} />}
          {activeTab === "search" && <DiseaseSearch query={query} onSelectDisease={setSelectedDisease} />}
          {activeTab === "drug-index" && <DrugDictionaryTool />}
          {activeTab === "diagnosis" && <DiagnosisTool />}
          {activeTab === "tools" && <CalculatorFeature />}
        </div>
      </main>

      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        darkMode={app.darkMode} 
        toggleTheme={app.toggleTheme}
        onOpenAbout={() => { setShowAbout(true); setIsDrawerOpen(false); }}
        onOpenTerms={() => { app.setShowTerms(true); setIsDrawerOpen(false); }}
        onOpenReferences={() => { setShowReferences(true); setIsDrawerOpen(false); }}
        onOpenContact={() => { setShowContact(true); setIsDrawerOpen(false); }} 
        onLogout={app.handleLogout} 
        supportEmail="clinicalassist.center@gmail.com"
      />

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} email="clinicalassist.center@gmail.com" />
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <ReferencesModal isOpen={showReferences} onClose={() => setShowReferences(false)} />
      <LegalModal isOpen={app.showTerms} onClose={() => app.setShowTerms(false)} onAccept={app.handleAcceptTerms} isMandatory={app.mandatoryTerms} />
      
      {selectedDisease && <DiseaseModal name={selectedDisease.name} data={selectedDisease} onClose={() => setSelectedDisease(null)} />}
      
      {activeTab === "home" && (
        <Footer onOpenTerms={() => app.setShowTerms(true)} />
      )}
    </div>
  );
}