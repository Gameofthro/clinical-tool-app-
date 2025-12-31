import React from 'react';
import { Baby } from "lucide-react";
import { Input, UnitSelect, CalcButton } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const PediatricTool = ({ calcState, update, onResult }) => {
  const handleCalculate = () => {
    const res = Logic.calculatePediatricDose(calcState.weight, calcState.age, calcState.unit);
    if (res) onResult('pediatric', res);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input field="Weight" value={calcState.weight} onChange={v => update('weight', v)} />
        <UnitSelect value={calcState.unit} onChange={v => update('unit', v)} options={['kg', 'lbs']} />
      </div>
      
      <Input field="Age (Years)" value={calcState.age} onChange={v => update('age', v)} />

      <CalcButton onClick={handleCalculate} label="Calculate Pediatric Dose" color="bg-purple-600" />

      {/* NTI Warnings specific to this tool */}
      <div className="mt-3 grid gap-1">
        <p className="text-[9px] font-black text-slate-400 uppercase ml-1">NTI Watchlist</p>
        {Logic.NARROW_THERAPEUTIC_INDEX_WARNINGS.map(w => (
          <div key={w.drug} className="text-[9px] p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 border-l-2 border-purple-400">
            <b>{w.drug}:</b> {w.caution}
          </div>
        ))}
      </div>
    </div>
  );
};