import React, { useState } from 'react';
import { Heart, Activity } from "lucide-react";
// Importing perfected UI components from SharedUI
import { 
  HeaderSection, 
  InputGroup, 
  CalcButton, 
  MasteryCard, 
  KnowledgeModal 
} from '../components/SharedUI';
// Importing the professional educational vault
import { CalculatorLibrary } from '../../../data/CalculatorLibrary';
// Importing the precision clinical engine
import { calculateMAP } from "../../../utils/calculators";

/**
 * HEMODYNAMIC MAP MASTER
 * Evaluates Mean Arterial Pressure as a primary indicator of tissue and organ perfusion.
 */
export const MAPTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  /**
   * Triggers the precision hemodynamic algorithm.
   * Logic utilizes the 1/3 Systolic + 2/3 Diastolic weighted formula.
   */
  const handleCalculation = () => {
    const res = calculateMAP(
      calcState.sbp, 
      calcState.dbp
    );
    setResult(res);
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      {/* Professional Header with Knowledge Center Trigger */}
      <HeaderSection 
        title="MAP Master" 
        onInfoClick={() => setShowInfo(true)} 
      />
      
      <div className="space-y-6">
        {/* Systolic BP Input */}
        <InputGroup 
          field="Systolic BP (mmHg)" 
          value={calcState.sbp} 
          onChange={(v) => update('sbp', v)} 
          icon={Heart} 
        />

        {/* Diastolic BP Input */}
        <InputGroup 
          field="Diastolic BP (mmHg)" 
          value={calcState.dbp} 
          onChange={(v) => update('dbp', v)} 
          icon={Activity} 
        />

        {/* High-Impact Clinical Action Bar */}
        <CalcButton 
          onClick={handleCalculation} 
          label="Analyze Perfusion Pressure" 
          color="bg-rose-600" 
        />
      </div>

      {/* Edge-to-Edge Clinical Result Display */}
      {result && <MasteryCard result={result} />}

      {/* Professional Knowledge Center Modal */}
      <KnowledgeModal 
        isOpen={showInfo} 
        onClose={() => setShowInfo(false)} 
        data={CalculatorLibrary.map} 
      />
    </div>
  );
};