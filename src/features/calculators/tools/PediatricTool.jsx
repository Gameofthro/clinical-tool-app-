import React, { useState } from 'react';
import { Baby, Scale } from "lucide-react";
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
import { calculatePediatricDose } from "../../../utils/calculators";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";

/**
 * PEDIATRIC DOSING MASTER
 * Optimized for professional pharmaceutical modeling and weight-based safety assessment.
 */
export const PediatricTool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const { triggerNotification } = useClinicalAlerts(calcState.user);

  /**
   * Triggers the precision pediatric algorithm.
   * Logic handles weight conversion and neonatal factor shifting.
   */
  const handleCalculation = () => {
    const res = calculatePediatricDose(
      calcState.weight, 
      calcState.age, 
      calcState.unit
    );
    setResult(res);
    triggerNotification('pediatric', res);
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      {/* Professional Header with Knowledge Center Trigger */}
      <HeaderSection 
        title="Pediatric Master" 
        onInfoClick={() => setShowInfo(true)} 
      />
      
      <div className="space-y-6">
        {/* Weight Input: Essential for primary mg/kg calculation */}
        <InputGroup 
          field="Weight" 
          value={calcState.weight} 
          onChange={(v) => update('weight', v)} 
          unitValue={calcState.unit} 
          onUnitChange={(v) => update('unit', v)} 
          unitOptions={['kg', 'lbs']} 
          icon={Scale} 
        />

        {/* Age Input: Used to determine Neonatal Protocol eligibility (<= 28 days) */}
        <InputGroup 
          field="Age (Years - e.g., 0.08 for 1 month)" 
          value={calcState.age} 
          onChange={(v) => update('age', v)} 
          icon={Baby} 
        />

        {/* High-Impact Clinical Action Bar */}
        <CalcButton 
          onClick={handleCalculation} 
          label="Analyze Safety Protocol" 
          color="bg-purple-600" 
        />
      </div>

      {/* Edge-to-Edge Clinical Result Display */}
      {result && <MasteryCard result={result} />}

      {/* Professional Knowledge Center Modal */}
      <KnowledgeModal 
        isOpen={showInfo} 
        onClose={() => setShowInfo(false)} 
        data={CalculatorLibrary.pediatric} 
      />
    </div>
  );
};