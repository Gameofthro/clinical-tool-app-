import React, { useState, useLayoutEffect, useRef } from "react";
import { Baby, Droplet, Scale, Activity, Heart, ArrowLeft, X } from "lucide-react";
import { HeaderSection } from "./components/SharedUI";
import { PediatricTool } from "./tools/PediatricTool";
import { FluidTool } from "./tools/FluidTool";
import { RenalTool } from "./tools/RenalTool";
import { RenalDosingTool } from "./tools/CrClTool";
import { InfusionTool } from "./tools/InfusionTool";
import { BMITool } from "./tools/BMITool";
import { MAPTool } from "./tools/MAPTool";

export default function CalculatorFeature({ user }) { // Fixed: added { user }
  const [activeTool, setActiveTool] = useState(null);
  const containerRef = useRef(null);

const [calcState, setCalcState] = useState({
  weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "",
  heightFt: "", heightIn: "", totalVolume: "", timeMinutes: "", dropFactor: "20",
  unit: "kg", hUnit: "cm", gender: "male", fluidType: "421", indication: "general"
});

useLayoutEffect(() => {
    if (activeTool) {
      // 1. Lock body scroll immediately
      document.body.style.overflow = 'hidden'; 
      
      // 2. Immediate reset of the overlay container
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }

      // 3. Fallback for mobile browsers/Capacitor lag
      const frame = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.scrollTo(0, 0);
        }
      });

      return () => cancelAnimationFrame(frame);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeTool]);

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

const tools = [
  { id: 'bmi', icon: Scale, label: 'BMI', desc: 'Metabolic', color: 'from-slate-700 to-slate-900' },
  { id: 'infusion', icon: Droplet, label: 'Infusion', desc: 'Drip/Pump', color: 'from-blue-600 to-indigo-900' },
  { id: 'crcl', icon: Activity, label: 'CrCl', desc: 'Clearance', color: 'from-emerald-500 to-teal-800' },
  { id: 'map', icon: Heart, label: 'MAP', desc: 'Perfusion', color: 'from-rose-500 to-pink-900' },
  { id: 'pediatric', icon: Baby, label: 'Pediatric', desc: 'Dosing', color: 'from-purple-500 to-violet-900' },
  { id: 'fluid', icon: Droplet, label: 'Fluids', desc: 'Strategy', color: 'from-cyan-500 to-blue-800' },
  { id: 'renal', icon: Activity, label: 'eGFR', desc: 'Function', color: 'from-red-600 to-red-950' },
];
const renderTool = () => {
  const props = { 
    calcState: { ...calcState, user: user }, 
    update 
  };

  switch (activeTool) {
    case 'bmi': 
      return <BMITool {...props} />;
    case 'infusion': 
      return <InfusionTool {...props} />;
    case 'crcl': 
      return <RenalDosingTool {...props} />;
    case 'map': 
      return <MAPTool {...props} />;
    case 'pediatric': 
      return <PediatricTool {...props} />;
    case 'fluid': 
      return <FluidTool {...props} />;
    case 'renal': 
      return <RenalTool {...props} />;
    default: 
      return null;
  }
};

return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {!activeTool ? (
        <div className="w-full px-4 py-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-2 bg-blue-600 rounded-full shrink-0"></div>
            <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Clinical Calculators
            </h2>
          </div>

{/* PREMIUM SQUARE GRID */}
<div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500">
  {tools.map((t) => (
    <button
      key={t.id}
      onClick={() => setActiveTool(t.id)}
      className={`relative aspect-square flex flex-col items-center justify-center p-4 rounded-[1.8rem] bg-gradient-to-br ${t.color} text-white shadow-xl shadow-slate-200 dark:shadow-none active:scale-95 transition-all group`}
    >
      {/* Symbolic Icon with Glow Effect */}
      <t.icon size={30} className="mb-3 opacity-90 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
      
      {/* Short Symbolic Label */}
      <h3 className="text-[14px] font-black uppercase tracking-[0.15em] text-center drop-shadow-sm">
        {t.label}
      </h3>
      
      {/* Micro-Desc for context */}
      <p className="text-[8px] font-bold opacity-60 uppercase tracking-widest text-center mt-0.5">
        {t.desc}
      </p>

      {/* Aesthetic Highlight - Subtle shine overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[1.8rem]" />
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