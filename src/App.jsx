/**
 * MAIN ENTRY: ClinicalAssist App
 * MASTER FIX: Unified Theme Injection, Persistence Logic, and Safe-Area UI.
 * INTEGRATED: Local Identity & Onboarding (Firebase-Free).
 */

import React, { useState, useEffect } from "react";
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

// --- SYSTEM LOGIC & STATE ---
import { useClinicalApp } from "./hooks/useClinicalApp";
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import AboutModal from "./components/AboutModal";
import ReferencesModal from "./components/ReferencesModal";
import ContactModal from "./components/ContactModal";
import OnboardingModal from "./components/ui/OnboardingModal"; // Added

// --- NAVIGATION LAYOUT ---
import Header from "./components/Navigation/Header";
import SideDrawer from "./components/Navigation/SideDrawer";
import Dashboard from "./components/Navigation/Dashboard";

// --- FEATURE MODULES ---
import DiseaseSearch from "./features/DiseaseSearch";
import CalculatorFeature from "./features/Calculators";
import DiagnosisTool from "./features/symptoms/SymptomReviewTool"; 
import DrugDictionaryTool from "./features/drug-index/DrugDictionaryTool";
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
  const [showOnboarding, setShowOnboarding] = useState(false); // New state

  /**
   * 1. ONBOARDING TRIGGER
   */
  useEffect(() => {
    if (!app.loading && app.user && !app.user.hasBeenOnboarded) {
      setShowOnboarding(true);
    }
  }, [app.loading, app.user]);

  /**
   * 2. SYSTEM UI & NOTIFICATION ENGINE
   */
  useEffect(() => {
    const initHardwareSystems = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          await StatusBar.setOverlaysWebView({ overlay: false });
          await StatusBar.setStyle({ style: app.darkMode ? Style.Dark : Style.Light });
          await StatusBar.setBackgroundColor({ color: app.darkMode ? '#020617' : '#f8fafc' });

          await LocalNotifications.registerActionTypes({
            types: [{
              id: 'CLINICAL_CARE',
              actions: [
                { id: 'thanks', title: '❤️ Got it, thank you', foreground: true },
                { id: 'remind', title: '⏰ Remind me later', foreground: false }
              ]
            }]
          });
        } catch (e) {
          console.warn("Hardware initialization skipped.");
        }
      }
    };

    initHardwareSystems();
  }, [app.darkMode]);

  /**
   * 3. GLOBAL THEME ENGINE
   */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', app.darkMode);
    root.classList.toggle('light', !app.darkMode);
  }, [app.darkMode]);

  /**
   * 4. HARDWARE BACK BUTTON INTERCEPTOR
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

  // Loading State
  if (app.loading) {
    return (
      <div className="h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  // Mandatory Compliance Guard
  if (app.showTerms && app.mandatoryTerms) {
    return <LegalModal isOpen={true} onAccept={app.handleAcceptTerms} isMandatory={true} />;
  }

  return (
    <div className={`flex flex-col h-screen transition-colors duration-300 overflow-hidden ${app.darkMode ? 'dark bg-slate-950' : 'light bg-slate-50'}`}>
      
      {/* GLOBAL CSS - Kept exactly as you requested */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .safe-top { padding-top: env(safe-area-inset-top); }

        .light .bg-slate-900\\/50, .light [class*="bg-slate-"], .light .group { 
          background-color: #ffffff !important; 
          border: 1px solid #e2e8f0 !important; 
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.05) !important;
        }
        
        .light h1, .light h2, .light h3 { color: #0f172a !important; }
        .light p, .light span { color: #475569 !important; }
        .light input { color: #0f172a !important; background-color: #ffffff !important; }
        .light .text-blue-500, .light .text-blue-600 { color: #2563eb !important; }
      `}} />

      {/* Header */}
      <div className="safe-top bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <Header 
          user={{ displayName: app.user?.name }} 
          activeTab={activeTab} 
          query={query} 
          setQuery={setQuery} 
          setActiveTab={setActiveTab} 
          onGoHome={() => { setActiveTab("home"); setQuery(""); }}
          onOpenMenu={() => setIsDrawerOpen(true)}
        />
      </div>

      <main className="flex-1 overflow-y-auto px-4 w-full no-scrollbar">
        <div className="max-w-6xl mx-auto h-full py-4">
          {activeTab === "home" && <Dashboard onNavigate={setActiveTab} user={{ displayName: app.user?.name }} />}
          {activeTab === "search" && <DiseaseSearch query={query} onSelectDisease={setSelectedDisease} />}
          {activeTab === "drug-index" && <DrugDictionaryTool />}
          {activeTab === "clinical-index" && <DiagnosisTool />}
          {activeTab === "tools" && <CalculatorFeature />}
        </div>
      </main>

      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        darkMode={app.darkMode} 
        toggleTheme={app.toggleTheme}
        userName={app.user?.name} 
        onUpdateName={app.handleUpdateName}
        onOpenAbout={() => { setShowAbout(true); setIsDrawerOpen(false); }}
        onOpenTerms={() => { app.setShowTerms(true); setIsDrawerOpen(false); }}
        onOpenReferences={() => { setShowReferences(true); setIsDrawerOpen(false); }}
        onOpenContact={() => { setShowContact(true); setIsDrawerOpen(false); }} 
        supportEmail="clinicalassist.center@gmail.com"
      />

      {/* Onboarding Modal - Replaces Auth Screen */}
      <OnboardingModal 
        isOpen={showOnboarding} 
        onSave={(name) => { app.handleUpdateName(name); setShowOnboarding(false); }} 
        onSkip={() => { app.handleUpdateName("Guest"); setShowOnboarding(false); }} 
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