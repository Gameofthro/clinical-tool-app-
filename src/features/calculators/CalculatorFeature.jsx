import React, { useState } from "react";
import { Baby, Droplet, Scale, Activity, Heart } from "lucide-react";
import { HeaderSection } from "./components/SharedUI";
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState("pediatric");
  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421", indication: "general"
  });
  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));
  
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
    <div className="space-y-10 pb-20 max-w-6xl mx-auto px-4">
      {/* Premium Tab Navigation */}
      <div className="flex bg-slate-100 dark:bg-slate-800/50 p-3 rounded-full shadow-inner gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dose', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluid', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'MAP', color: 'bg-rose-600' },
        ].map(t => (
          <button key={t.id} onClick={() => setActiveTool(t.id)} className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all ${activeTool === t.id ? `${t.color} text-white shadow-xl scale-105` : 'text-slate-400 hover:text-slate-600'}`}>
            <t.icon size={18} /><span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Main Feature Container */}
      <div className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 transition-all">
        <HeaderSection title={activeTool} subtitle="Advanced Clinical Decision Support System (CDSS)" />
        <div className="mt-12">{renderTool()}</div>
      </div>
    </div>
  );
}