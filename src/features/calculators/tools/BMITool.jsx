import React, { useState } from 'react';
import { Scale, Ruler, Activity } from "lucide-react";
import { 
  Input, 
  UnitSelect, 
  CalcButton, 
  AdvancedToggle, 
  MasteryInterpretationCard 
} from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const BMITool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    // Core calculation using the clinical engine
    const res = Logic.calculateBMI(
      calcState.weight, 
      calcState.height, 
      calcState.unit, 
      calcState.hUnit
    );

    if (res) {
      // Package result with advanced data if present
      const masteryRes = {
        ...res,
        waist: showAdvanced ? calcState.waist : null
      };
      setLocalResult(masteryRes);
      onResult('bmi', masteryRes);
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Core Anthropometric Inputs (Mandatory) */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input 
            field="Total Body Weight" 
            value={calcState.weight} 
            onChange={v => update('weight', v)} 
            icon={Scale}
          />
          <UnitSelect 
            value={calcState.unit} 
            onChange={v => update('unit', v)} 
            options={['kg', 'lbs']} 
          />
        </div>

        <div className="flex gap-2">
          <Input 
            field="Height" 
            value={calcState.height} 
            onChange={v => update('height', v)} 
            icon={Ruler}
          />
          <UnitSelect 
            value={calcState.hUnit} 
            onChange={v => update('hUnit', v)} 
            options={['cm', 'ft', 'in']} 
          />
        </div>
      </div>

      {/* 2. Advanced Metabolic Parameters (Optional) */}
      <AdvancedToggle 
        isOpen={showAdvanced} 
        onToggle={() => setShowAdvanced(!showAdvanced)}
      >
        <div className="space-y-3">
          <Input 
            field="Waist Circumference (cm)" 
            value={calcState.waist || ""} 
            onChange={v => update('waist', v)} 
            icon={Activity}
          />
          <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic px-1">
            {/* Note: &gt; is used to prevent JSX 'Unexpected Token' errors */}
            Mastery Note: BMI is a measure of mass, not adiposity distribution. 
            Waist circumference &gt;102cm (men) or &gt;88cm (women) indicates 
            central obesity and significantly increases risk for Metabolic Syndrome.
          </p>
        </div>
      </AdvancedToggle>

      {/* 3. Action Trigger */}
      <CalcButton 
        onClick={handleCalculate} 
        label="Analyze Metabolic Profile" 
        color="bg-orange-600" 
      />

      {/* 4. Mastery Feedback Layer */}
      {localResult && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <MasteryInterpretationCard result={localResult} />
        </div>
      )}
    </div>
  );
};