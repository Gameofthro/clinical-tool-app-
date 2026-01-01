import React, { useState } from 'react';
import { Baby, Scale, Activity } from "lucide-react";
import { InputGroup, CalcButton, MasteryCard } from '../components/SharedUI';
import { calculatePediatricDose } from "../../../utils/calculators";

export const PediatricTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <InputGroup 
        field="Patient Weight" value={calcState.weight} onChange={v => update('weight', v)} 
        unitValue={calcState.unit} onUnitChange={v => update('unit', v)}
        unitOptions={['kg', 'lbs']} icon={Scale} 
      />
      <InputGroup field="Age (Years)" value={calcState.age} onChange={v => update('age', v)} icon={Baby} />
      
      <div className="space-y-3">
        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Learning Indication</p>
        <select 
          value={calcState.indication} onChange={e => update('indication', e.target.value)}
          className="w-full py-5 px-6 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-[15px] outline-none text-slate-900 dark:text-white appearance-none shadow-inner"
        >
          <option value="general">General modeling (10mg/kg)</option>
          <option value="critical">Critical care simulation</option>
        </select>
      </div>

      <CalcButton 
        onClick={() => setResult(calculatePediatricDose(calcState.weight, calcState.age, calcState.unit, calcState.indication))} 
        label="Analyze Pediatric Safety Model" color="bg-purple-600" 
      />
      {result && <MasteryCard result={result} />}
    </div>
  );
};