import React, { useState } from 'react';
import { Scale, Ruler } from "lucide-react";
import { InputGroup, CalcButton, MasteryCard } from '../components/SharedUI';
import { calculateBMI } from "../../../utils/calculators";

export const BMITool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <InputGroup 
        field="Weight" value={calcState.weight} onChange={v => update('weight', v)} 
        unitValue={calcState.unit} onUnitChange={v => update('unit', v)}
        unitOptions={['kg', 'lbs']} icon={Scale} 
      />
      <InputGroup 
        field="Height" value={calcState.height} onChange={v => update('height', v)} 
        unitValue={calcState.hUnit} onUnitChange={v => update('hUnit', v)}
        unitOptions={['cm', 'ft', 'in']} icon={Ruler} 
      />

      <CalcButton 
        onClick={() => setResult(calculateBMI(calcState.weight, calcState.height, calcState.unit, calcState.hUnit))} 
        label="Model Metabolic Profile" color="bg-orange-600" 
      />
      {result && <MasteryCard result={result} />}
    </div>
  );
};