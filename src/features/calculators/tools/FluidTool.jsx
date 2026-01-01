import React, { useState } from 'react';
import { Droplet, Scale } from "lucide-react";
import { InputGroup, CalcButton, MasteryCard } from '../components/SharedUI';
import { calculateIVFluid } from "../../../utils/calculators";

export const FluidTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <InputGroup 
        field="Patient Weight" value={calcState.weight} onChange={v => update('weight', v)} 
        unitValue={calcState.unit} onUnitChange={v => update('unit', v)}
        unitOptions={['kg', 'lbs']} icon={Scale} 
      />
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-800">
        <p className="text-[12px] font-bold text-blue-600 dark:text-blue-400 leading-relaxed">
          Concept: Maintenance fluid modeling estimates the hourly volume required to replace insensible losses and maintain euvolemia.
        </p>
      </div>

      <CalcButton 
        onClick={() => setResult(calculateIVFluid(calcState.weight))} 
        label="Model Maintenance Strategy" color="bg-blue-600" 
      />
      {result && <MasteryCard result={result} />}
    </div>
  );
};