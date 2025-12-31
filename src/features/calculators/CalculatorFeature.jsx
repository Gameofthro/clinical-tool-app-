import React, { useState } from "react";
import { Baby, Droplet, Scale, Activity, Heart } from "lucide-react";

// 1. Import Foundations
import { HeaderSection } from "./components/SharedUI";
import { useClinicalAlerts } from "./hooks/useClinicalAlerts";

// 2. Import Individual Tools
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState("pediatric");
  const { triggerNotification } = useClinicalAlerts();

  // Unified state: persists data when switching tools (Master Medics consistency)
  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421", indication: "general"
  });

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  // Centralized handler for notifications
  const handleResult = (type, data) => {
    // Notification triggered here; Tool handles its own UI display
    triggerNotification(type, data);
  };

  // Tool Switcher Logic
  const renderTool = () => {
    const commonProps = { calcState, update, onResult: handleResult };
    
    switch (activeTool) {
      case 'pediatric': return <PediatricTool {...commonProps} />;
      case 'fluid':     return <FluidTool {...commonProps} />;
      case 'gfr':       return <RenalTool {...commonProps} />;
      case 'bmi':       return <BMITool {...commonProps} />;
      case 'map':       return <MAPTool {...commonProps} />;
      default:          return <PediatricTool {...commonProps} />;
    }
  };

  return (
    <div className="space-y-4 pb-10">
      {/* 1. Navigation Grid */}
      <div className="grid grid-cols-5 gap-1 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-[1.5rem] shadow-inner shrink-0">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dose', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluid', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'MAP', color: 'bg-rose-600' },
        ].map(t => (
          <button 
            key={t.id} 
            onClick={() => setActiveTool(t.id)}
            className={`flex flex-col items-center justify-center py-3 rounded-2xl transition-all duration-300
            ${activeTool === t.id ? `${t.color} text-white shadow-lg scale-105` : 'text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
          >
            <t.icon size={18} strokeWidth={2.5} />
            <span className="text-[9px] font-black mt-1.5 uppercase tracking-tighter">{t.label}</span>
          </button>
        ))}
      </div>

      {/* 2. Main Tool Interface */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
        <HeaderSection 
          title={activeTool.toUpperCase()} 
          subtitle="Clinical Decision Support System (CDSS)" 
        />
        
        <div className="mt-4 min-h-[300px]">
          {renderTool()}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[10px] text-slate-400 text-center font-medium leading-relaxed">
            <b>Disclaimer:</b> This tool is for educational use. Clinical mastery requires correlation with physical assessment and institutional protocols.
          </p>
        </div>
      </div>
    </div>
  );
}