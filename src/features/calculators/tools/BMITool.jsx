import React from 'react';
import { Input, UnitSelect, CalcButton } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const BMITool = ({ calcState, update, onResult }) => {
  const handleCalculate = () => {
    const res = Logic.calculateBMI(
      calcState.weight, 
      calcState.height, 
      calcState.unit, 
      calcState.hUnit
    );
    if (res) onResult('bmi', res);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input field="Weight" value={calcState.weight} onChange={v => update('weight', v)} />
        <UnitSelect value={calcState.unit} onChange={v => update('unit', v)} options={['kg', 'lbs']} />
      </div>

      <div className="flex gap-2">
        <Input field="Height" value={calcState.height} onChange={v => update('height', v)} />
        <UnitSelect value={calcState.hUnit} onChange={v => update('hUnit', v)} options={['cm', 'ft', 'in']} />
      </div>

      <CalcButton onClick={handleCalculate} label="Calculate BMI Risk" color="bg-orange-600" />
    </div>
  );
};