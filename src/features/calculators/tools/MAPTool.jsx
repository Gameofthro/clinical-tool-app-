import React from 'react';
import { Stethoscope } from "lucide-react";
import { Input, CalcButton } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const MAPTool = ({ calcState, update, onResult }) => {
  const handleCalculate = () => {
    const res = Logic.calculateMAP(calcState.sbp, calcState.dbp);
    if (res) onResult('map', res);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100">
        <p className="text-[9px] font-black text-blue-600 uppercase mb-2 flex items-center gap-1">
          <Stethoscope size={12}/> Vitals Input
        </p>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input field="Systolic" value={calcState.sbp} onChange={v => update('sbp', v)} />
          <Input field="Diastolic" value={calcState.dbp} onChange={v => update('dbp', v)} />
        </div>
      </div>

      <CalcButton onClick={handleCalculate} label="Calculate MAP" color="bg-rose-600" />
    </div>
  );
};