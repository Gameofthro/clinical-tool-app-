import React, { useState } from 'react';
import { Droplet, Scale, Activity } from "lucide-react";
// Importing perfected UI components from SharedUI
import { 
  HeaderSection, 
  InputGroup, 
  CalcButton, 
  MasteryCard, 
  KnowledgeModal 
} from '../components/SharedUI';
// Importing the educational vault
import { CalculatorLibrary } from '../../../data/CalculatorLibrary';
// Importing the precision clinical engine
import { calculateIVFluid } from "../../../utils/calculators";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";

/**
 * INTRAVENOUS FLUID MASTER
 * Professionally handles Holliday-Segar 4-2-1 Maintenance and Hemodynamic Resuscitation.
 */
export const FluidTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const { triggerNotification } = useClinicalAlerts(calcState.user);
  // Logic to determine if hemodynamic monitoring (SBP) is required for the protocol
  const isResuscitationFluid = calcState.fluidType === 'NS' || calcState.fluidType === 'RL';

  /**
   * Triggers the precision fluid algorithm.
   * Passes weight, fluid type, and SBP to the clinical engine.
   */
  const handleCalculation = () => {
    const res = calculateIVFluid(
      calcState.weight, 
      calcState.fluidType, 
      calcState.sbp
    );
    setResult(res);
    triggerNotification('fluid', { indication: calcState.indication });
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      {/* Professional Header with Knowledge Center Trigger */}
      <HeaderSection 
        title="Fluid Master" 
        onInfoClick={() => setShowInfo(true)} 
      />
      
      <div className="space-y-6">
        {/* Weight Input: Essential for the 4-2-1 Holliday-Segar calculation */}
        <InputGroup 
          field="Weight" 
          value={calcState.weight} 
          onChange={(v) => update('weight', v)} 
          unitValue={calcState.unit} 
          onUnitChange={(v) => update('unit', v)} 
          unitOptions={['kg', 'lbs']} 
          icon={Scale} 
        />

        {/* Fluid Selection: Determines whether maintenance or resuscitation logic is applied */}
        <div className="space-y-3">
          <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">
            Clinical Fluid Selection
          </p>
          <select 
            value={calcState.fluidType || "421"} 
            onChange={(e) => update('fluidType', e.target.value)}
            className="w-full py-5 px-6 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-[15px] outline-none text-slate-900 dark:text-white appearance-none shadow-inner border-2 border-transparent focus:border-blue-500/50 transition-all"
          >
            <option value="421">Maintenance Protocol (Standard 4-2-1)</option>
            <option value="NS">Normal Saline (0.9% NS) - Resuscitation Potential</option>
            <option value="RL">Lactated Ringer's (RL) - Resuscitation Potential</option>
          </select>
        </div>

        {/* Hemodynamic Input: Only visible when resuscitation fluids are selected */}
        {isResuscitationFluid && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <InputGroup 
              field="Systolic BP (Required for Resuscitation Logic)" 
              value={calcState.sbp} 
              onChange={(v) => update('sbp', v)} 
              icon={Activity} 
            />
          </div>
        )}

        {/* High-Impact Clinical Action Bar */}
        <CalcButton 
          onClick={handleCalculation} 
          label="Analyze Fluid Protocol" 
          color="bg-blue-600" 
        />
      </div>

      {/* Edge-to-Edge Clinical Result Display */}
      {result && <MasteryCard result={result} />}

      {/* Professional Knowledge Center Modal */}
      <KnowledgeModal 
        isOpen={showInfo} 
        onClose={() => setShowInfo(false)} 
        data={CalculatorLibrary.fluid} 
      />
    </div>
  );
};