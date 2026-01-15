import React, { useState } from 'react';
import { Scale, Ruler } from "lucide-react";
import { HeaderSection, InputGroup, CalcButton, MasteryCard, KnowledgeModal } from '../components/SharedUI';
import { CalculatorLibrary } from '../../../data/CalculatorLibrary';
import { calculateBMI } from "../../../utils/calculators";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";
export const BMITool = ({ calcState, update }) => {
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const { triggerNotification } = useClinicalAlerts(calcState.user);
  const handleCalculation = () => {
    // 1. NORMALIZE HEIGHT: If user is using ft/in, convert to CM first
    let heightInCm = parseFloat(calcState.height);
    
    if (calcState.hUnit === 'ft/in') {
      const ft = parseFloat(calcState.heightFt) || 0;
      const inVal = parseFloat(calcState.heightIn) || 0;
      heightInCm = (ft * 30.48) + (inVal * 2.54); 
    }

    // 2. RUN CALCULATOR
    const res = calculateBMI(
      calcState.weight, 
      heightInCm, 
      calcState.unit // weight unit (kg/lbs)
    );
    setResult(res);
    triggerNotification('bmi', res);
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      <HeaderSection title="BMI Master" onInfoClick={() => setShowInfo(true)} />
      
      <div className="space-y-6">
        <InputGroup 
          field="Weight" 
          value={calcState.weight} 
          onChange={(v) => update('weight', v)} 
          unitValue={calcState.unit} 
          onUnitChange={(v) => update('unit', v)} 
          unitOptions={['kg', 'lbs']} 
          icon={Scale} 
        />

        <InputGroup 
          field="Height"
          isSplit={calcState.hUnit === 'ft/in'}
          value={calcState.hUnit === 'cm' ? calcState.height : { ft: calcState.heightFt, in: calcState.heightIn }}
          onChange={(v) => calcState.hUnit === 'cm' ? update('height', v) : update(v.type, v.val)} 
          unitValue={calcState.hUnit || 'cm'}
          onUnitChange={(v) => update('hUnit', v)} 
          unitOptions={['cm', 'ft/in']} 
          icon={Ruler} 
        />

        <CalcButton onClick={handleCalculation} label="Analyze Metabolic Profile" color="bg-orange-600" />
      </div>

      {result && <MasteryCard result={result} />}

      <KnowledgeModal isOpen={showInfo} onClose={() => setShowInfo(false)} data={CalculatorLibrary.bmi} />
    </div>
  );
};