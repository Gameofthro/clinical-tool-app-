import React, { useState, useEffect, useRef } from "react";
import { Baby, Droplet, Scale, Activity, Heart, ArrowLeft, X } from "lucide-react";
import { HeaderSection } from "./components/SharedUI";
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState(null);
  const containerRef = useRef(null);

  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421", indication: "general"
  });

  /**
   * FINAL SCROLL & BODY LOCK FIX
   * 1. Prevents background scrolling (body lock).
   * 2. Forces the tool overlay to the absolute top.
   */
  useEffect(() => {
    if (activeTool) {
      document.body.style.overflow = 'hidden'; // Lock background
      if (containerRef.current) {
        containerRef.current.scrollTop = 0; // Force immediate scroll reset
      }
    } else {
      document.body.style.overflow = 'unset'; // Unlock background
    }
    
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeTool]);

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  const tools = [
    { id: 'pediatric', icon: Baby, label: 'Pediatric Dose', desc: 'Weight-based Protocols', color: 'from-purple-600 to-indigo-600' },
    { id: 'fluid', icon: Droplet, label: 'Fluid Strategy', desc: 'Maintenance & Resuscitation', color: 'from-blue-600 to-cyan-600' },
    { id: 'renal', icon: Activity, label: 'Renal Master', desc: 'eGFR CKD-EPI 2021', color: 'from-red-600 to-rose-600' },
    { id: 'bmi', icon: Scale, label: 'Metabolic BMI', desc: 'Adiposity Distribution', color: 'from-orange-500 to-amber-600' },
    { id: 'map', icon: Heart, label: 'Hemodynamics', desc: 'Perfusion Pressure', color: 'from-rose-600 to-pink-600' },
  ];

  const renderTool = () => {
    const props = { calcState, update };
    switch (activeTool) {
      case 'pediatric': return <PediatricTool {...props} />;
      case 'fluid': return <FluidTool {...props} />;
      case 'renal': return <RenalTool {...props} />;
      case 'bmi': return <BMITool {...props} />;
      case 'map': return <MAPTool {...props} />;
      default: return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {!activeTool ? (
        <div className="w-full px-4 py-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-2 bg-blue-600 rounded-full shrink-0"></div>
            <h2 className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Clinical Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id)}
                className={`relative overflow-hidden p-6 rounded-[2.5rem] bg-gradient-to-br ${t.color} text-white shadow-lg active:scale-95 transition-all text-left group`}
              >
                <t.icon size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black uppercase tracking-wider">{t.label}</h3>
                <p className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-widest">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* THE FIXED SCROLLABLE OVERLAY */
        <div 
          ref={containerRef} 
          className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex flex-col animate-in slide-in-from-right duration-300 overflow-y-scroll"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="w-full px-4 py-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
            <button 
              onClick={() => setActiveTool(null)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-slate-600 dark:text-slate-300" />
            </button>
            <button 
              onClick={() => setActiveTool(null)}
              className="p-2 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="w-full flex-1 max-w-4xl mx-auto px-4 py-8">
            {renderTool()}
            
            <div className="mt-20 border-t border-slate-100 dark:border-slate-800 pt-10 pb-12 text-center">
              <p className="text-[10px] text-slate-400 font-bold tracking-tight uppercase px-6">
                Clinical Master: Professional Medical Education Only.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}