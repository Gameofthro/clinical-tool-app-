import React, { useState } from "react";
import { Baby, Droplet, Scale, Activity, Heart, X, ArrowLeft } from "lucide-react";
import { HeaderSection } from "./components/SharedUI";
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState(null);
  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421", indication: "general"
  });

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  const tools = [
    { id: 'pediatric', icon: Baby, label: 'Pediatric Dose', desc: 'Weight-based modeling', color: 'from-purple-600 to-indigo-600' },
    { id: 'fluid', icon: Droplet, label: 'Fluid Strategy', desc: 'Maintenance & Resuscitation', color: 'from-blue-600 to-cyan-600' },
    { id: 'gfr', icon: Activity, label: 'Renal Staging', desc: 'CKD-EPI 2021 Calculations', color: 'from-red-600 to-rose-600' },
    { id: 'bmi', icon: Scale, label: 'Metabolic BMI', desc: 'Staging & Risk Analysis', color: 'from-orange-500 to-amber-600' },
    { id: 'map', icon: Heart, label: 'Hemodynamics', desc: 'Perfusion & MAP Profile', color: 'from-rose-600 to-pink-600' },
  ];

  const renderTool = () => {
    const props = { calcState, update, onResult: () => {} };
    switch (activeTool) {
      case 'pediatric': return <PediatricTool {...props} />;
      case 'fluid': return <FluidTool {...props} />;
      case 'gfr': return <RenalTool {...props} />;
      case 'bmi': return <BMITool {...props} />;
      case 'map': return <MAPTool {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {!activeTool ? (
        /* DASHBOARD TILES */
        <div className="px-4 py-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <HeaderSection title="Learning Tools" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id)}
                className={`relative overflow-hidden p-6 rounded-[2rem] bg-gradient-to-br ${t.color} text-white shadow-lg active:scale-95 transition-all text-left`}
              >
                <t.icon size={28} className="mb-4" />
                <h3 className="text-lg font-black uppercase tracking-wider">{t.label}</h3>
                <p className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-widest">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* FULL-SCREEN TOOL VIEW */
        <div className="animate-in slide-in-from-right duration-300 min-h-screen flex flex-col">
          {/* Mobile Sticky Header */}
          <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <button 
              onClick={() => setActiveTool(null)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-slate-600 dark:text-slate-300" />
            </button>
            <HeaderSection title={activeTool} />
          </div>
          
          {/* Content Area - Covers whole width on mobile */}
          <div className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
              {renderTool()}
            </div>
            
            <p className="mt-8 text-[10px] text-slate-400 text-center font-bold tracking-tight uppercase px-6">
              Educational simulation only. Verify with official learning protocols.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}