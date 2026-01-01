import React, { useState } from 'react';
import { Baby, Activity, Scale, ShieldAlert } from "lucide-react";
// FIXED: Importing InputGroup and AdvancedToggle exactly as exported in SharedUI
import { InputGroup, CalcButton, MasteryCard, AdvancedToggle } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const PediatricTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleCalc = () => {
    const res = Logic.calculatePediatricDose(
      calcState.weight, 
      calcState.age, 
      calcState.unit, 
      calcState.indication
    );
    setResult(res);
  };

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <InputGroup 
        field="Patient Weight" 
        value={calcState.weight} 
        onChange={v => update('weight', v)} 
        unitValue={calcState.unit}
        onUnitChange={v => update('unit', v)}
        unitOptions={['kg', 'lbs']}
        icon={Scale} 
      />

      <InputGroup 
        field="Age (Years)" 
        value={calcState.age} 
        onChange={v => update('age', v)} 
        icon={Baby} 
      />

      {/* FIXED: Integrated AdvancedToggle for learning parameters */}
      <AdvancedToggle isOpen={showAdvanced} onToggle={() => setShowAdvanced(!showAdvanced)}>
        <div className="space-y-3">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 text-center">
            Theoretical Indication Modeling
          </p>
          <select 
            value={calcState.indication} 
            onChange={e => update('indication', e.target.value)}
            className="w-full py-5 px-6 bg-slate-100 dark:bg-slate-800/80 rounded-2xl font-bold text-[15px] outline-none border-2 border-transparent focus:border-blue-500/50 text-slate-900 dark:text-white appearance-none shadow-inner"
          >
            <option value="general">General Simulation (10mg/kg)</option>
            <option value="critical">Maintenance Modeling (Simulation)</option>
          </select>
        </div>
      </AdvancedToggle>

      <CalcButton 
        onClick={handleCalc} 
        label="Analyze Pediatric Safety Model" 
        color="bg-purple-600" 
      />

      {result && <MasteryCard result={result} />}
    </div>
  );
};