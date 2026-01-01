import React, { useState } from 'react';
import { Scale, Ruler } from "lucide-react";
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
import { calculateBMI } from "../../../utils/calculators";

/**
 * METABOLIC BMI MASTER
 * Optimized for professional clinical staging and pharmaceutical distribution modeling.
 */
export const BMITool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  /**
   * Triggers the precision BMI algorithm.
   * Logic handles CM to Meter conversion and unit scaling.
   */
  const handleCalculation = () => {
    const res = calculateBMI(
      calcState.weight, 
      calcState.height, 
      calcState.unit
    );
    setResult(res);
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      {/* Professional Header with Knowledge Center Trigger */}
      <HeaderSection 
        title="BMI Master" 
        onInfoClick={() => setShowInfo(true)} 
      />
      
      <div className="space-y-6">
        {/* Weight Input: Synchronized with unit selection (kg/lbs) */}
        <InputGroup 
          field="Patient Weight" 
          value={calcState.weight} 
          onChange={(v) => update('weight', v)} 
          unitValue={calcState.unit} 
          onUnitChange={(v) => update('unit', v)} 
          unitOptions={['kg', 'lbs']} 
          icon={Scale} 
        />

        {/* Height Input: Fixed to CM for clinical precision */}
        <InputGroup 
          field="Patient Height (cm)" 
          value={calcState.height} 
          onChange={(v) => update('height', v)} 
          icon={Ruler} 
        />

        {/* High-Impact Clinical Action Bar */}
        <CalcButton 
          onClick={handleCalculation} 
          label="Analyze Metabolic Profile" 
          color="bg-orange-600" 
        />
      </div>

      {/* Edge-to-Edge Clinical Result Display */}
      {result && <MasteryCard result={result} />}

      {/* Professional Knowledge Center Modal */}
      <KnowledgeModal 
        isOpen={showInfo} 
        onClose={() => setShowInfo(false)} 
        data={CalculatorLibrary.bmi} 
      />
    </div>
  );
};