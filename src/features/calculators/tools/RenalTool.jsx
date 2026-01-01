import React, { useState } from 'react';
import { Activity, User, Ruler, Scale } from "lucide-react";
import { InputGroup, CalcButton, MasteryCard, AdvancedToggle } from '../components/SharedUI';
import { calculateGFR } from "../../../utils/calculators";

export const RenalTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <InputGroup 
        field="Serum Creatinine" value={calcState.creatinine} onChange={v => update('creatinine', v)} 
        unitValue={calcState.unit} onUnitChange={v => update('unit', v)}
        unitOptions={['mg/dl', 'umol/l']} icon={Activity} 
      />
      <InputGroup field="Age" value={calcState.age} onChange={v => update('age', v)} icon={User} />

      <div className="grid grid-cols-2 gap-4">
        {['male', 'female'].map(g => (
          <button key={g} onClick={() => update('gender', g)}
            className={`py-5 rounded-2xl font-black uppercase text-[12px] transition-all ${calcState.gender === g ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
          >
            {g}
          </button>
        ))}
      </div>

      <AdvancedToggle isOpen={showAdvanced} onToggle={() => setShowAdvanced(!showAdvanced)}>
        <InputGroup field="Height (cm)" value={calcState.height} onChange={v => update('height', v)} icon={Ruler} />
        <InputGroup field="Weight (kg)" value={calcState.weight} onChange={v => update('weight', v)} icon={Scale} />
      </AdvancedToggle>

      <CalcButton 
        onClick={() => setResult(calculateGFR(calcState.creatinine, calcState.age, calcState.gender, showAdvanced ? calcState.weight : null, showAdvanced ? calcState.height : null))} 
        label="Analyze Clearance Model" color="bg-red-600" 
      />
      {result && <MasteryCard result={result} />}
    </div>
  );
};