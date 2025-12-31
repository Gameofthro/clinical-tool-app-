import React, { useState } from 'react';
import { Activity, Ruler, Scale } from "lucide-react";
import { 
  Input, 
  CalcButton, 
  AdvancedToggle, 
  MasteryInterpretationCard 
} from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const RenalTool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    // Advanced Mastery: Passing weight and height for BSA-Normalized GFR
    // if 'showAdvanced' is false, these pass as null, maintaining standard logic.
    const res = Logic.calculateGFR(
      calcState.creatinine, 
      calcState.age, 
      calcState.gender,
      showAdvanced ? calcState.weight : null,
      showAdvanced ? calcState.height : null,
      'mg/dl'
    );

    if (res) {
      setLocalResult(res);
      onResult('gfr', res); // Syncs with global state for notification triggers
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Primary Clinical Parameters */}
      <div className="grid grid-cols-1 gap-3">
        <Input 
          field="Age (Years)" 
          value={calcState.age} 
          onChange={v => update('age', v)} 
          icon={Activity}
        />
        <Input 
          field="Serum Creatinine (mg/dL)" 
          value={calcState.creatinine} 
          onChange={v => update('creatinine', v)} 
          icon={Activity}
        />
      </div>

      {/* 2. Biological Sex (Physiological Constant) */}
      <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
        {['male', 'female'].map(g => (
          <button 
            key={g} 
            onClick={() => update('gender', g)} 
            className={`py-2.5 rounded-xl font-black capitalize text-[10px] tracking-widest transition-all duration-200 ${
              calcState.gender === g 
                ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600 scale-[1.02]' 
                : 'text-slate-400 hover:text-slate-500'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* 3. Advanced Parameters Toggle (Expert Precision) */}
      <AdvancedToggle 
        isOpen={showAdvanced} 
        onToggle={() => setShowAdvanced(!showAdvanced)}
      >
        <div className="flex gap-2">
          <Input 
            field="Weight (kg)" 
            value={calcState.weight} 
            onChange={v => update('weight', v)} 
            icon={Scale}
          />
          <Input 
            field="Height (cm)" 
            value={calcState.height} 
            onChange={v => update('height', v)} 
            icon={Ruler}
          />
        </div>
        <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic px-1 mt-1">
          Expert Note: BSA-normalized GFR is critical for dosing drugs with narrow therapeutic windows in patients with Obesity or Cachexia.
        </p>
      </AdvancedToggle>

      {/* 4. Action Trigger */}
      <CalcButton 
        onClick={handleCalculate} 
        label="Run Renal Analysis" 
        color="bg-red-600" 
      />

      {/* 5. Mastery Feedback Layer */}
      {localResult && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <MasteryInterpretationCard result={localResult} />
        </div>
      )}
    </div>
  );
};