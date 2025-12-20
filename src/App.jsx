/**
 * MAIN ENTRY: ClinicalAssist App
 * DESCRIPTION: Final assembled entry point for the ClinicalAssist mobile tool.
 * ARCHITECTURE: Container-Component pattern. Logic is decoupled into hooks/features.
 * COMPLIANCE: Includes mandatory legal guards and educational reference headers.
 */

import React, { useState, useEffect } from "react";

// --- SYSTEM LOGIC & STATE (The Brain) ---
import { useClinicalApp } from "./hooks/useClinicalApp";
import Auth from "./components/Auth";
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import AboutModal from "./components/AboutModal";

// --- NAVIGATION LAYOUT (The Skeleton) ---
import Header from "./components/Navigation/Header";
import SideDrawer from "./components/Navigation/SideDrawer";
import Dashboard from "./components/Navigation/Dashboard";

// --- FEATURE MODULES (The Muscle) ---
import DiseaseSearch from "./features/DiseaseSearch";
import CalculatorFeature from "./features/Calculators";
import DiagnosisTool from "./components/SymptomReviewTool"; 
import DrugDictionaryTool from "./components/DrugDictionaryTool";
import DiseaseModal from "./components/DiseaseModal";

export default function ClinicalTool() {
  // 1. Initialize Global System Hook
  const app = useClinicalApp();
  
  // 2. Navigation & UI State
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  // 3. Hardware Intercept (Capacitor/Android Back Button Logic)
  // This effect ensures the hardware button closes open UI layers before exiting.
  useEffect(() => {
    const closeOverlays = () => {
      if (selectedDisease) { setSelectedDisease(null); return true; }
      if (isDrawerOpen) { setIsDrawerOpen(false); return true; }
      if (showAbout) { setShowAbout(false); return true; }
      // Close terms only if they aren't the mandatory login block
      if (app.showTerms && !app.mandatoryTerms) { app.setShowTerms(false); return true; }
      return false;
    };
    return app.setupBackButton(closeOverlays, activeTab, setActiveTab);
  }, [selectedDisease, isDrawerOpen, showAbout, activeTab, app]);

  // --- RENDER GUARD: AUTHENTICATION ---
  if (!app.user) return <Auth onLogin={app.handleLogin} />;
  
  // --- RENDER GUARD: MANDATORY LEGAL COMPLIANCE ---
  if (app.showTerms && app.mandatoryTerms) {
    return <LegalModal isOpen={true} onAccept={app.handleAcceptTerms} isMandatory={true} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. STICKY HEADER (Search & Navigation) */}
      <Header 
        user={app.user} 
        activeTab={activeTab} 
        query={query} 
        setQuery={setQuery} 
        setActiveTab={setActiveTab} 
        onGoHome={() => { setActiveTab("home"); setQuery(""); }}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* 2. DYNAMIC CONTENT VIEWPORT */}
      {/* Note: Safe Area padding is handled globally in index.css on the #root container */}
      <main className="flex-grow max-w-3xl mx-auto px-4 w-full overflow-y-auto no-scrollbar">
        
        {/* VIEW: HOME DASHBOARD (Feature Tiles) */}
        {activeTab === "home" && (
          <Dashboard onNavigate={setActiveTab} />
        )}

        {/* VIEW: DISEASE SEARCH & INDEX */}
        {activeTab === "search" && (
          <DiseaseSearch query={query} onSelectDisease={setSelectedDisease} />
        )}
        
        {/* VIEW: DRUG MONOGRAPHS */}
        {activeTab === "drug-index" && <DrugDictionaryTool />}
        
        {/* VIEW: SYMPTOM REVIEW / DIAGNOSIS TOOL */}
        {activeTab === "diagnosis" && <DiagnosisTool />}
        
        {/* VIEW: CLINICAL CALCULATORS */}
        {activeTab === "tools" && <CalculatorFeature />}
        
      </main>

      {/* 3. GLOBAL OVERLAYS (Z-INDEX 50+) */}
      
      {/* Settings & Info Drawer */}
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        darkMode={app.darkMode} 
        toggleTheme={app.toggleTheme}
        onOpenAbout={() => { setShowAbout(true); setIsDrawerOpen(false); }}
        onOpenTerms={() => { app.setShowTerms(true); setIsDrawerOpen(false); }}
        onLogout={app.handleLogout} 
        supportEmail="clinicalassist.center@gmail.com"
      />

      {/* Educational About Modal */}
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      
      {/* Terms & Conditions Modal */}
      <LegalModal 
        isOpen={app.showTerms} 
        onClose={() => app.setShowTerms(false)} 
        onAccept={app.handleAcceptTerms} 
        isMandatory={app.mandatoryTerms} 
      />
      
      {/* Full-Screen Disease Detail View */}
      {selectedDisease && (
        <DiseaseModal 
          name={selectedDisease.name} 
          data={selectedDisease} 
          onClose={() => setSelectedDisease(null)} 
        />
      )}
      
      {/* App Footer (Privacy & Acceptance Status) */}
      <Footer onOpenTerms={() => app.setShowTerms(true)} />
    </div>
  );
}