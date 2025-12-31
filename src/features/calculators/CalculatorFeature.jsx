import React, { useState } from "react";
import { Baby, Droplet, Scale, Activity, Heart, X } from "lucide-react";
import { HeaderSection } from "./components/SharedUI";
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState(null); // Null = Show Tiles
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
    <div className="pb-24 px-4 max-w-4xl mx-auto">
      {/* 1. DASHBOARD VIEW (Grid of Tiles) */}
      {!activeTool ? (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
          <HeaderSection title="Calculators" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id)}
                className={`relative overflow-hidden p-6 rounded-[2.5rem] bg-gradient-to-br ${t.color} text-white shadow-xl active:scale-95 transition-all text-left group`}
              >
                <div className="absolute top-[-10%] right-[-5%] opacity-10 group-hover:scale-110 transition-transform">
                  <t.icon size={120} />
                </div>
                <t.icon size={28} className="mb-4" />
                <h3 className="text-lg font-black uppercase tracking-wider">{t.label}</h3>
                <p className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-widest">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* 2. TOOL VIEW (Full Page Style) */
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <div className="flex items-center justify-between mb-8">
             <HeaderSection title={activeTool} />
             <button 
               onClick={() => setActiveTool(null)}
               className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 shadow-md active:scale-90 transition-all"
             >
               <X size={20} />
             </button>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-8 md:p-14 shadow-2xl border border-slate-100 dark:border-slate-800">
            {renderTool()}
          </div>
        </div>
      )}
    </div>
  );
}