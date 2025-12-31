import React, { useState } from 'react';
import { Stethoscope, Droplet, Activity, Zap } from "lucide-react";
import { 
  Input, 
  UnitSelect, 
  CalcButton, 
  AdvancedToggle, 
  MasteryInterpretationCard 
} from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const FluidTool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    // Advanced Mastery: The logic now integrates SBP and Glucose for a strategic rate
    const res = Logic.calculateIVFluidStrategy(
      calcState.weight,
      calcState.fluidType,
      calcState.glucose,
      calcState.sbp
    );

    if (res) {
      setLocalResult(res);
      onResult('fluid', res);
    }
  };

  const isIsotonic = ['NS', 'RL'].includes(calcState.fluidType);
  const isDextrose = calcState.fluidType === 'D5NS';

  return (
    <div className="space-y-4">
      {/* 1. Core Maintenance Parameters */}
      <div className="flex gap-2">
        <Input 
          field="Patient Weight" 
          value={calcState.weight} 
          onChange={v => update('weight', v)} 
          icon={Droplet}
        />
        <UnitSelect 
          value={calcState.unit} 
          onChange={v => update('unit', v)} 
          options={['kg', 'lbs']} 
        />
      </div>

      {/* 2. Fluid Selection Matrix */}
      <div className="space-y-2">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
          Crystalloid Selection
        </p>
        <select 
          className="w-full p-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-xs outline-none border-2 border-transparent focus:border-blue-500/50 transition-all cursor-pointer" 
          value={calcState.fluidType} 
          onChange={e => update('fluidType', e.target.value)}
        >
          <option value="421">Maintenance Only (4-2-1 Rule)</option>
          <option value="NS">0.9% Normal Saline (Isotonic)</option>
          <option value="RL">Lactated Ringer's (Balanced)</option>
          <option value="D5NS">D5 + 0.9% NS (Hypertonic/Caloric)</option>
        </select>
      </div>

      {/* 3. Dynamic Clinical Inputs (Resuscitation & Glycemia) */}
      {(isIsotonic || isDextrose) && (
        <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-top-2">
          {isIsotonic && (
            <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-[1.5rem] border border-blue-100 dark:border-blue-800">
              <p className="text-[9px] font-black text-blue-600 uppercase mb-3 flex items-center gap-1">
                <Stethoscope size={12}/> Vitals Check (SBP)
              </p>
              <Input 
                field="Systolic BP (mmHg)" 
                value={calcState.sbp} 
                onChange={v => update('sbp', v)} 
                icon={Activity}
              />
            </div>
          )}

          {isDextrose && (
            <div className="p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-[1.5rem] border border-orange-100 dark:border-orange-800">
              <p className="text-[9px] font-black text-orange-600 uppercase mb-3 flex items-center gap-1">
                <Zap size={12}/> Metabolic Check
              </p>
              <Input 
                field="Blood Glucose (mg/dL)" 
                value={calcState.glucose} 
                onChange={v => update('glucose', v)} 
                icon={Zap}
              />
            </div>
          )}
        </div>
      )}

      {/* 4. Advanced Mastery Parameters (Optional) */}
      <AdvancedToggle 
        isOpen={showAdvanced} 
        onToggle={() => setShowAdvanced(!showAdvanced)}
      >
        <div className="space-y-3">
          <Input 
            field="Urine Output (mL/kg/hr)" 
            value={calcState.uop || ""} 
            onChange={v => update('uop', v)} 
            icon={Droplet}
          />
          <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic px-1">
            Mastery Note: Maintenance fluids only replace insensible losses. If Urine Output is &lt;0.5 mL/kg/hr, evaluate for Prerenal AKI or inadequate volume resuscitation.
          </p>
        </div>
      </AdvancedToggle>

      <CalcButton 
        onClick={handleCalculate} 
        label="Analyze Fluid Strategy" 
        color="bg-blue-600" 
      />

      {/* 5. Result & Interpretation Display */}
      {localResult && <MasteryInterpretationCard result={localResult} />}
    </div>
  );
};