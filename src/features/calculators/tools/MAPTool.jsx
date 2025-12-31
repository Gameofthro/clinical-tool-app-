import React, { useState } from 'react';
import { Stethoscope, Activity, Heart, Info } from "lucide-react";
import { 
  Input, 
  CalcButton, 
  AdvancedToggle, 
  MasteryInterpretationCard 
} from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const MAPTool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    // Logic calculates MAP and automatically derives Pulse Pressure
    const res = Logic.calculateMAP(calcState.sbp, calcState.dbp);

    if (res) {
      // If heart rate is provided in advanced mode, we can further analyze 
      // the hemodynamic status in the future.
      const masteryRes = {
        ...res,
        hr: showAdvanced ? calcState.hr : null
      };
      setLocalResult(masteryRes);
      onResult('map', masteryRes);
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Primary Hemodynamic Inputs */}
      <div className="p-5 bg-blue-50/50 dark:bg-blue-900/10 rounded-[2rem] border-2 border-blue-100 dark:border-blue-800/50">
        <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase mb-4 flex items-center gap-2 tracking-widest">
          <Stethoscope size={14}/> Core Vitals (BP)
        </p>
        <div className="grid grid-cols-2 gap-3 w-full">
          <Input 
            field="Systolic" 
            value={calcState.sbp} 
            onChange={v => update('sbp', v)} 
            icon={Activity}
          />
          <Input 
            field="Diastolic" 
            value={calcState.dbp} 
            onChange={v => update('dbp', v)} 
            icon={Activity}
          />
        </div>
      </div>

      {/* 2. Advanced Hemodynamic Parameters */}
      <AdvancedToggle 
        isOpen={showAdvanced} 
        onToggle={() => setShowAdvanced(!showAdvanced)}
      >
        <div className="space-y-3">
          <Input 
            field="Heart Rate (BPM)" 
            value={calcState.hr || ""} 
            onChange={v => update('hr', v)} 
            icon={Heart}
          />
          <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Info size={12} className="text-blue-500" />
              <p className="text-[9px] font-black text-slate-500 uppercase">Mastery Insight</p>
            </div>
            <p className="text-[9px] text-slate-400 font-medium leading-relaxed italic">
              Clinician Note: MAP &gt;65 mmHg is the minimum for organ perfusion. However, a wide Pulse Pressure (SBP-DBP &gt;60) may indicate aortic regurgitation or severe atherosclerosis, while a narrow Pulse Pressure (&lt;25) suggests low stroke volume or tamponade.
            </p>
          </div>
        </div>
      </AdvancedToggle>

      {/* 3. Action Trigger */}
      <CalcButton 
        onClick={handleCalculate} 
        label="Analyze Hemodynamics" 
        color="bg-rose-600" 
      />

      {/* 4. Mastery Feedback Layer */}
      {localResult && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <MasteryInterpretationCard result={localResult} />
        </div>
      )}
    </div>
  );
};