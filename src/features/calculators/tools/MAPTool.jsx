import React, { useState } from 'react';
import { Heart, Activity } from "lucide-react";
import { InputGroup, CalcButton, MasteryCard } from '../components/SharedUI';
import { calculateMAP } from "../../../utils/calculators";

export const MAPTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);

  return (
    <div className="space-y-6 w-full animate-in slide-in-from-right duration-500">
      <div className="grid grid-cols-1 gap-4">
        <InputGroup field="Systolic BP" value={calcState.sbp} onChange={v => update('sbp', v)} icon={Heart} />
        <InputGroup field="Diastolic BP" value={calcState.dbp} onChange={v => update('dbp', v)} icon={Activity} />
      </div>

      <CalcButton 
        onClick={() => setResult(calculateMAP(calcState.sbp, calcState.dbp))} 
        label="Model Perfusion Pressure" color="bg-rose-600" 
      />
      {result && <MasteryCard result={result} />}
    </div>
  );
};