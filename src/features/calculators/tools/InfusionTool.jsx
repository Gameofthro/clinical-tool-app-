import React, { useState } from 'react';
import { Droplet, Clock, Beaker, Activity, Info } from "lucide-react";
import { 
  HeaderSection, 
  InputGroup, 
  CalcButton, 
  MasteryCard, 
  KnowledgeModal, 
  AdvancedToggle 
} from "../components/SharedUI";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";

export const InfusionTool = ({ calcState, update }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [result, setResult] = useState(null);
  const { triggerNotification } = useClinicalAlerts();

  const calculateInfusion = () => {
    const volume = parseFloat(calcState.totalVolume) || 0;
    const time = parseFloat(calcState.timeMinutes) || 0;
    const dropFactor = parseFloat(calcState.dropFactor) || 20;

    if (volume <= 0 || time <= 0) return;

    // 1. Calculate mL/hr (Pump Rate)
    const mlPerHour = (volume / time) * 60;

    // 2. Calculate Drops/min (Gravity Rate)
    const gttsPerMin = (volume * dropFactor) / time;

    const resData = {
      value: mlPerHour.toFixed(1),
      unit: "mL / hr",
      status: "CALCULATION COMPLETE",
      interpretation: `Pump Setting: Set electronic pump to ${mlPerHour.toFixed(1)} mL/hr.`,
      actionPlan: `Manual Drip: If using gravity, set rate to ${Math.round(gttsPerMin)} drops/min (using ${dropFactor} gtt/mL set).`,
      isCritical: false,
      masteryInsight: `Time-volume accuracy is vital. Total volume: ${volume}mL over ${time} mins.`,
      gtts: Math.round(gttsPerMin)
    };

    setResult(resData);
    // Note: You should add 'infusion' logic to your useClinicalAlerts hook
    triggerNotification('infusion', resData); 
  };

  const modalData = {
    title: "Infusion Master Reference",
    subtitle: "Precision IV Delivery",
    description: "Accurate infusion rates prevent fluid overload and ensure therapeutic drug levels. This tool calculates both automated pump rates and manual drip rates.",
    formula: "Drops/min = (Total Vol x Drop Factor) / Time (min)",
    clinicalPearls: [
      "Microdrip sets are always 60 gtt/mL; Standard Macrodrip sets are 10, 15, or 20 gtt/mL.",
      "Always verify the patency of the IV site before starting high-alert infusions.",
      "For critical care, weight-based dosing (mcg/kg/min) is the safest protocol."
    ],
    references: [
      { name: "ISMP Safe IV Guidelines", url: "https://www.ismp.org" },
      { name: "CDC IV Fluid Safety", url: "https://www.cdc.gov" }
    ]
  };

  return (
    <div className="space-y-6">
      <HeaderSection title="Infusion Master" onInfoClick={() => setShowInfo(true)} />
      
      <div className="grid grid-cols-1 gap-4">
        <InputGroup 
          field="Total Volume (mL)" 
          icon={Beaker} 
          value={calcState.totalVolume} 
          onChange={v => update('totalVolume', v)} 
        />
        
        <InputGroup 
          field="Delivery Time (Minutes)" 
          icon={Clock} 
          value={calcState.timeMinutes} 
          onChange={v => update('timeMinutes', v)} 
        />

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-700">
          <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Select Tubing Drop Factor (gtt/mL)</p>
          <div className="flex gap-2">
            {[10, 15, 20, 60].map(factor => (
              <button 
                key={factor}
                onClick={() => update('dropFactor', factor)}
                className={`flex-1 py-3 rounded-xl font-black transition-all ${calcState.dropFactor == factor ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-700 text-slate-400'}`}
              >
                {factor}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CalcButton label="Calculate Flow Rate" color="bg-blue-700" onClick={calculateInfusion} />
      
      {result && (
        <>
          <MasteryCard result={result} />
          <AdvancedToggle isOpen={showAdvanced} onToggle={() => setShowAdvanced(!showAdvanced)}>
             <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-slate-400">Manual Drip Rate:</span>
                  <span className="font-bold text-blue-500">{result.gtts} gtt / min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-bold text-slate-400">Drops per Second:</span>
                  <span className="font-bold text-blue-500">{(result.gtts / 60).toFixed(2)} gtt / sec</span>
                </div>
             </div>
          </AdvancedToggle>
        </>
      )}

      <KnowledgeModal isOpen={showInfo} onClose={() => setShowInfo(false)} data={modalData} />
    </div>
  );
};