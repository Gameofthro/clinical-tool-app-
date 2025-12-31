import React, { useState } from "react";
import { 
  Baby, Droplet, Scale, Activity, Heart 
} from "lucide-react";

// 1. Import Foundations
import { HeaderSection, ResultBox } from "./components/SharedUI";
import { useClinicalAlerts } from "./hooks/useClinicalAlerts";

// 2. Import Individual Tools
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState("pediatric");
  const [results, setResults] = useState({});
  const { triggerNotification } = useClinicalAlerts();

  // Shared state for all inputs to maintain persistence when switching tools
  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421"
  });

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  // Centralized handler for calculations and notifications
  const handleResult = (type, data) => {
    setResults(prev => ({ ...prev, [type]: data }));
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
      {/* Tool Navigation Grid */}
      <div className="grid grid-cols-5 gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-2xl shadow-inner shrink-0">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dose', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluid', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'MAP', color: 'bg-rose-600' },
        ].map(t => (
          <button 
            key={t.id} 
            onClick={() => { setActiveTool(t.id); setResults({}); }}
            className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all
            ${activeTool === t.id ? `${t.color} text-white shadow-md` : 'text-slate-500'}`}
          >
            <t.icon size={16} />
            <span className="text-[8px] font-black mt-1 uppercase tracking-tighter">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Main Tool Interface */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-xl border border-slate-100 dark:border-slate-800">
        <HeaderSection title={activeTool.toUpperCase()} />
        
        <div className="mt-4">
          {renderTool()}
        </div>

        {/* Dynamic Result Display */}
        {results[activeTool] && (
          <ResultBox 
            value={results[activeTool].value || results[activeTool].rate} 
            label={results[activeTool].category || results[activeTool].status || "Result"} 
            pearl={results[activeTool].pearl || results[activeTool].basePearl}
          >
            {/* Renal Adjustment Warning */}
            {results[activeTool].adjustment && (
              <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100">
                <p className="text-[9px] font-black text-red-600 uppercase">Adjustment Required:</p>
                <p className="text-[10px] font-bold text-red-800 dark:text-red-300">{results[activeTool].adjustment}</p>
              </div>
            )}
            
            {/* Risk/Rationale Alerts */}
            {results[activeTool].risk && (
              <p className="mt-2 text-[9px] bg-red-50 text-red-700 p-2 rounded-lg font-bold">⚠️ {results[activeTool].risk}</p>
            )}
            {results[activeTool].rationale && (
              <p className="mt-2 text-[9px] bg-blue-50 text-blue-700 p-2 rounded-lg font-bold">ℹ️ {results[activeTool].rationale}</p>
            )}
          </ResultBox>
        )}

        <p className="mt-6 text-[9px] text-slate-400 text-center italic border-t pt-4">
          For educational purposes only. Reconsult with a physician before implementation.
        </p>
      </div>
    </div>
  );
}