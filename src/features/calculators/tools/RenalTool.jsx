import React from 'react';
import { Input, CalcButton } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const RenalTool = ({ calcState, update, onResult }) => {
  const handleCalculate = () => {
    const res = Logic.calculateGFR(calcState.creatinine, calcState.age, calcState.gender);
    if (res) onResult('gfr', res);
  };

  return (
    <div className="space-y-4">
      <Input field="Age (Years)" value={calcState.age} onChange={v => update('age', v)} />
      <Input field="Serum Creatinine (mg/dL)" value={calcState.creatinine} onChange={v => update('creatinine', v)} />
      
      <div className="grid grid-cols-2 gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
        {['male', 'female'].map(g => (
          <button 
            key={g} 
            onClick={() => update('gender', g)} 
            className={`py-2 rounded-xl font-black capitalize text-[10px] ${
              calcState.gender === g ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-400'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <CalcButton onClick={handleCalculate} label="Calculate GFR & Adjustment" color="bg-red-600" />
    </div>
  );
};