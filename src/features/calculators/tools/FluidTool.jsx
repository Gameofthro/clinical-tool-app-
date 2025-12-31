import React from 'react';
import { Stethoscope, Droplet } from "lucide-react";
import { Input, UnitSelect, CalcButton } from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const FluidTool = ({ calcState, update, onResult }) => {
  const handleCalculate = () => {
    // 1. Calculate Base Maintenance Rate (Holliday-Segar)
    const base = Logic.calculateMaintenanceFluid(calcState.weight, calcState.unit);
    
    // 2. Calculate Advanced Strategy based on Vitals/Type
    const strategy = Logic.calculateIVFluidRate({ 
      baseRate: base.rate, 
      fluidType: calcState.fluidType, 
      glucoseMgDl: calcState.glucose, 
      sbp: calcState.sbp 
    });

    if (base && strategy) {
      onResult('fluid', { ...strategy, basePearl: base.pearl });
    }
  };

  const requiresBP = ['NS', 'RL'].includes(calcState.fluidType);

  return (
    <div className="space-y-4">
      {/* Weight Input */}
      <div className="flex gap-2">
        <Input field="Weight" value={calcState.weight} onChange={v => update('weight', v)} />
        <UnitSelect value={calcState.unit} onChange={v => update('unit', v)} options={['kg', 'lbs']} />
      </div>

      {/* Fluid Type Selection */}
      <div className="space-y-2">
        <p className="text-[9px] font-black text-slate-400 uppercase ml-1">Fluid Selection</p>
        <select 
          className="w-full p-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-xs outline-none focus:ring-2 focus:ring-blue-500" 
          value={calcState.fluidType} 
          onChange={e => update('fluidType', e.target.value)}
        >
          <option value="421">Maintenance Only (4-2-1 Rule)</option>
          <option value="NS">Normal Saline (NS)</option>
          <option value="RL">Lactated Ringer's (RL)</option>
          <option value="D5NS">D5 / 0.9% NS</option>
        </select>
      </div>

      {/* Conditional Vital Input (Hypotension Check) */}
      {requiresBP && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-top-1">
          <p className="text-[9px] font-black text-blue-600 uppercase mb-2 flex items-center gap-1">
            <Stethoscope size={12}/> Resuscitation Check
          </p>
          <Input field="Systolic BP" value={calcState.sbp} onChange={v => update('sbp', v)} />
        </div>
      )}

      {/* Conditional Glycemic Input */}
      {calcState.fluidType === 'D5NS' && (
        <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 animate-in fade-in slide-in-from-top-1">
          <p className="text-[9px] font-black text-orange-600 uppercase mb-2">Glycemic Status</p>
          <Input field="Blood Glucose (mg/dL)" value={calcState.glucose} onChange={v => update('glucose', v)} />
        </div>
      )}

      <CalcButton onClick={handleCalculate} label="Generate Fluid Strategy" color="bg-blue-600" />
    </div>
  );
};