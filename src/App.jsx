/**
 * MAIN ENTRY: ClinicalAssist App
 * REFINEMENT: Integrated Psychological Contact Modal and Balanced Header Logic.
 */

import React, { useState, useEffect } from "react";

// --- SYSTEM LOGIC & STATE ---
import { useClinicalApp } from "./hooks/useClinicalApp";
import Auth from "./components/Auth";
import Footer from "./components/footer";
import LegalModal from "./components/legalModal";
import AboutModal from "./components/AboutModal";
import ReferencesModal from "./components/ReferencesModal";
import ContactModal from "./components/ContactModal"; // <-- Added Contact Modal

// --- NAVIGATION LAYOUT ---
import Header from "./components/Navigation/Header";
import SideDrawer from "./components/Navigation/SideDrawer";
import Dashboard from "./components/Navigation/Dashboard";

// --- FEATURE MODULES ---
import DiseaseSearch from "./features/DiseaseSearch";
import CalculatorFeature from "./features/Calculators";
import DiagnosisTool from "./features/SymptomReviewTool"; 
import DrugDictionaryTool from "./features/DrugDictionaryTool";
import DiseaseModal from "./features/DiseaseModal";

export default function ClinicalTool() {
  const app = useClinicalApp();
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showContact, setShowContact] = useState(false); // <-- New State for Contact

  // Hardware Back Button & Overlay Interceptor
  useEffect(() => {
    const closeOverlays = () => {
      if (selectedDisease) { setSelectedDisease(null); return true; }
      if (isDrawerOpen) { setIsDrawerOpen(false); return true; }
      if (showAbout) { setShowAbout(false); return true; }
      if (showReferences) { setShowReferences(false); return true; }
      if (showContact) { setShowContact(false); return true; } // <-- Intercept Contact Modal
      if (app.showTerms && !app.mandatoryTerms) { app.setShowTerms(false); return true; }
      return false;
    };
    return app.setupBackButton(closeOverlays, activeTab, setActiveTab);
  }, [selectedDisease, isDrawerOpen, showAbout, showReferences, showContact, activeTab, app]);

  // Auth Guard
  if (!app.user) return <Auth onLogin={app.handleLogin} />;
  
  // Legal Guard
  if (app.showTerms && app.mandatoryTerms) {
    return <LegalModal isOpen={true} onAccept={app.handleAcceptTerms} isMandatory={true} />;
  }

  // Navigation Handler: Reset state when returning to Dashboard
  const handleGoHome = () => {
    setActiveTab("home");
    setQuery("");
    setSelectedDisease(null);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* 1. STICKY HEADER: Branding (Home) or Back Arrow (Tools) */}
      <Header 
        user={app.user} 
        activeTab={activeTab} 
        query={query} 
        setQuery={setQuery} 
        setActiveTab={setActiveTab} 
        onGoHome={handleGoHome}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      {/* 2. DYNAMIC CONTENT VIEWPORT */}
      <main className="flex-1 overflow-y-auto px-4 w-full no-scrollbar">
        <div className="max-w-6xl mx-auto h-full py-4">
          {activeTab === "home" && (
            <Dashboard onNavigate={setActiveTab} user={app.user} />
          )}
          
          {activeTab === "search" && (
            <DiseaseSearch query={query} onSelectDisease={setSelectedDisease} />
          )}
          
          {activeTab === "drug-index" && (
            <DrugDictionaryTool />
          )}
          
          {activeTab === "diagnosis" && (
            <DiagnosisTool />
          )}
          
          {activeTab === "tools" && (
            <CalculatorFeature />
          )}
        </div>
      </main>

      {/* 3. NAVIGATION & MODAL OVERLAYS */}
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        darkMode={app.darkMode} 
        toggleTheme={app.toggleTheme}
        onOpenAbout={() => { setShowAbout(true); setIsDrawerOpen(false); }}
        onOpenTerms={() => { app.setShowTerms(true); setIsDrawerOpen(false); }}
        onOpenReferences={() => { setShowReferences(true); setIsDrawerOpen(false); }}
        onOpenContact={() => { setShowContact(true); setIsDrawerOpen(false); }} // <-- Link to SideDrawer
        onLogout={app.handleLogout} 
        supportEmail="clinicalassist.center@gmail.com"
      />

      {/* Psychological Contact Modal */}
      <ContactModal 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
        email="clinicalassist.center@gmail.com" 
      />

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      
      <ReferencesModal isOpen={showReferences} onClose={() => setShowReferences(false)} />

      <LegalModal 
        isOpen={app.showTerms} 
        onClose={() => app.setShowTerms(false)} 
        onAccept={app.handleAcceptTerms} 
        isMandatory={app.mandatoryTerms} 
      />
      
      {selectedDisease && (
        <DiseaseModal 
          name={selectedDisease.name} 
          data={selectedDisease} 
          onClose={() => setSelectedDisease(null)} 
        />
      )}
      
      <Footer onOpenTerms={() => app.setShowTerms(true)} />
    </div>
  );
}