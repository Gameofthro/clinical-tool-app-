import React, { useState } from 'react';
import { Activity, User, Ruler, Scale } from "lucide-react";
// Precision UI components optimized for high-density mobile viewing
import { 
  HeaderSection, 
  InputGroup, 
  CalcButton, 
  MasteryCard, 
  KnowledgeModal, 
  AdvancedToggle 
} from '../components/SharedUI';
// Centralized clinical educational repository
import { CalculatorLibrary } from '../../../data/CalculatorLibrary';
// Clinical engine implementing 2021 CKD-EPI standards
import { calculateGFR } from "../../../utils/calculators";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";

/**
 * RENAL CLEARANCE MASTER
 * Optimized for geriatric staging and pharmaceutical interval adjustments.
 */
export const RenalTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { triggerNotification } = useClinicalAlerts(calcState.user);

  /**
   * Orchestrates the GFR algorithm.
   * If advanced parameters are active, it computes Absolute GFR (mL/min).
   */
  const handleCalculation = () => {
    const res = calculateGFR(
      calcState.creatinine, 
      calcState.age, 
      calcState.gender, 
      showAdvanced ? calcState.weight : null, 
      showAdvanced ? calcState.height : null,
      calcState.unit
    );
    setResult(res);
    triggerNotification('renal', res);
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      {/* Professional Header with direct Knowledge Center access */}
      <HeaderSection 
        title="Renal Master" 
        onInfoClick={() => setShowInfo(true)} 
      />
      
      <div className="space-y-6">
        {/* Serum Creatinine: Supports mg/dL and μmol/L scaling */}
        <InputGroup 
          field="Serum Creatinine" 
          value={calcState.creatinine} 
          onChange={(v) => update('creatinine', v)} 
          unitValue={calcState.unit} 
          onUnitChange={(v) => update('unit', v)} 
          unitOptions={['mg/dl', 'umol/l']} 
          icon={Activity} 
        />

        {/* Age: Critical for CKD-EPI coefficient application */}
        <InputGroup 
          field="Age" 
          value={calcState.age} 
          onChange={(v) => update('age', v)} 
          icon={User} 
        />

        {/* Professional Gender Selection */}
        <div className="grid grid-cols-2 gap-4">
          {['male', 'female'].map(g => (
            <button 
              key={g} 
              onClick={() => update('gender', g)}
              className={`py-5 rounded-2xl font-black uppercase text-[12px] tracking-widest transition-all ${
                calcState.gender === g 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Advanced Mastery: Used for BSA-adjusted Absolute GFR */}
        <AdvancedToggle 
          isOpen={showAdvanced} 
          onToggle={() => setShowAdvanced(!showAdvanced)}
        >
          <div className="space-y-4">
            <InputGroup 
              field="Height (cm)" 
              value={calcState.height} 
              onChange={(v) => update('height', v)} 
              icon={Ruler} 
            />
            <InputGroup 
              field="Weight (kg)" 
              value={calcState.weight} 
              onChange={(v) => update('weight', v)} 
              icon={Scale} 
            />
          </div>
        </AdvancedToggle>

        {/* High-Impact Clinical Action Bar */}
        <CalcButton 
          onClick={handleCalculation} 
          label="Analyze Renal Clearance" 
          color="bg-red-600" 
        />
      </div>

      {/* Full-Scale Clinical Result Display */}
      {result && <MasteryCard result={result} />}

      {/* Deep-Dive Educational Knowledge Modal */}
      <KnowledgeModal 
        isOpen={showInfo} 
        onClose={() => setShowInfo(false)} 
        data={CalculatorLibrary.renal} 
      />
    </div>
  );
};