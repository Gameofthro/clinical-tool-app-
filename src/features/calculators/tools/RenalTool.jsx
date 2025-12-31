import React, { useState } from 'react';
import { Activity, Ruler, Scale } from "lucide-react";
import { Input, CalcButton, AdvancedToggle, MasteryInterpretationCard } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const RenalTool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    const res = Logic.calculateGFR(
      calcState.creatinine, calcState.age, calcState.gender,
      showAdvanced ? calcState.weight : null,
      showAdvanced ? calcState.height : null
    );
    if (res) {
      setLocalResult(res);
      onResult('gfr', res);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <Input field="Patient Age" value={calcState.age} onChange={v => update('age', v)} icon={Activity} />
        <Input field="Serum Creatinine (mg/dL)" value={calcState.creatinine} onChange={v => update('creatinine', v)} icon={Activity} />
      </div>

      <div className="grid grid-cols-2 gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-[2rem]">
        {['male', 'female'].map(g => (
          <button key={g} onClick={() => update('gender', g)}
            className={`py-3.5 rounded-[1.5rem] font-black capitalize text-[11px] tracking-widest transition-all ${
              calcState.gender === g ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-400'
            }`}>
            {g}
          </button>
        ))}
      </div>

      <AdvancedToggle isOpen={showAdvanced} onToggle={() => setShowAdvanced(!showAdvanced)}>
        <div className="flex gap-4">
          <Input field="Weight (kg)" value={calcState.weight} onChange={v => update('weight', v)} icon={Scale} />
          <Input field="Height (cm)" value={calcState.height} onChange={v => update('height', v)} icon={Ruler} />
        </div>
      </AdvancedToggle>

      <CalcButton onClick={handleCalculate} label="Run Mastery Analysis" color="bg-red-600" />
      {localResult && <MasteryInterpretationCard result={localResult} />}
    </div>
  );
};