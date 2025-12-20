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
  const app = useClinicalApp();
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const closeOverlays = () => {
      if (selectedDisease) { setSelectedDisease(null); return true; }
      if (isDrawerOpen) { setIsDrawerOpen(false); return true; }
      if (showAbout) { setShowAbout(false); return true; }
      if (app.showTerms && !app.mandatoryTerms) { app.setShowTerms(false); return true; }
      return false;
    };
    return app.setupBackButton(closeOverlays, activeTab, setActiveTab);
  }, [selectedDisease, isDrawerOpen, showAbout, activeTab, app]);

  if (!app.user) return <Auth onLogin={app.handleLogin} />;
  
  if (app.showTerms && app.mandatoryTerms) {
    return <LegalModal isOpen={true} onAccept={app.handleAcceptTerms} isMandatory={true} />;
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
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
        <div className="max-w-3xl mx-auto py-4">
          {activeTab === "home" && <Dashboard onNavigate={setActiveTab} />}
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
        onLogout={app.handleLogout} 
        supportEmail="clinicalassist.center@gmail.com"
      />

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <LegalModal isOpen={app.showTerms} onClose={() => app.setShowTerms(false)} onAccept={app.handleAcceptTerms} isMandatory={app.mandatoryTerms} />
      
      {selectedDisease && (
        <DiseaseModal name={selectedDisease.name} data={selectedDisease} onClose={() => setSelectedDisease(null)} />
      )}
      
      <Footer onOpenTerms={() => app.setShowTerms(true)} />
    </div>
  );
}