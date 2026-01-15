import React, { useState } from 'react';
import { User, Scale, Ruler, Activity, Info } from "lucide-react";
import { 
  HeaderSection, 
  InputGroup, 
  CalcButton, 
  MasteryCard, 
  KnowledgeModal, 
  AdvancedToggle 
} from "../components/SharedUI";
import { useClinicalAlerts } from "../hooks/useClinicalAlerts";

export const RenalDosingTool = ({ calcState, update }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [result, setResult] = useState(null);
  const { triggerNotification } = useClinicalAlerts();

  const calculateCrCl = () => {
    const { age, weight, creatinine, gender, hUnit } = calcState;
    const heightFt = parseFloat(calcState.heightFt) || 0;
    const heightIn = parseFloat(calcState.heightIn) || 0;
    
    // 1. Convert Height to Inches for IBW
    const totalInches = (heightFt * 12) + heightIn;
    
    // 2. Calculate IBW (Devine Formula)
    const baseIBW = gender === 'male' ? 50 : 45.5;
    const ibw = baseIBW + (2.3 * (totalInches - 60));
    
    // 3. Determine Weight to use (Clinical Logic)
    let weightToUse = parseFloat(weight);
    let weightType = "Actual Body Weight";

    if (weight > (ibw * 1.3)) {
        weightToUse = ibw + 0.4 * (weight - ibw);
        weightType = "Adjusted Body Weight (Obesity Protocol)";
    } else if (weight < ibw) {
        weightToUse = weight; // Use Actual if underweight
        weightType = "Actual Body Weight (Underweight Protocol)";
    } else {
        weightToUse = ibw;
        weightType = "Ideal Body Weight";
    }

    // 4. Cockcroft-Gault Formula
    let crcl = ((140 - age) * weightToUse) / (72 * creatinine);
    if (gender === 'female') crcl *= 0.85;

    const finalValue = crcl.toFixed(1);

    // 5. Clinical Interpretation
    let interpretation = "";
    let actionPlan = "";
    let isCritical = false;

    if (crcl > 90) {
      interpretation = "Normal Renal Function.";
      actionPlan = "Standard dosing protocols apply.";
    } else if (crcl >= 60) {
      interpretation = "Mild Renal Impairment (Stage 2 equivalent).";
      actionPlan = "Monitor NTI drugs (e.g., Aminoglycosides).";
    } else if (crcl >= 30) {
      interpretation = "Moderate Renal Impairment.";
      actionPlan = "Dose reduction required for most renally cleared drugs.";
    } else {
      interpretation = "Severe Renal Impairment / Renal Failure.";
      actionPlan = "Urgent: Significant dose reduction or alternative therapy needed.";
      isCritical = true;
    }

    const resData = {
      value: finalValue,
      unit: "mL/min",
      status: isCritical ? "CRITICAL ADJUSTMENT" : "STABLE",
      interpretation,
      actionPlan,
      isCritical,
      masteryInsight: `Weight selection is key. Using ${weightType} based on patient's BMI and IBW of ${ibw.toFixed(1)}kg.`,
      ibw: ibw.toFixed(1),
      weightUsed: weightToUse.toFixed(1)
    };

    setResult(resData);
    triggerNotification('crcl', resData); // New trigger for your hook
  };

  const modalData = {
    title: "Cockcroft-Gault Mastery",
    subtitle: "The Gold Standard for Drug Dosing",
    description: "The Cockcroft-Gault equation is the most widely used formula for adjusting drug dosages. Unlike eGFR, it provides a direct estimation of Creatinine Clearance (CrCl) used in pharmaceutical labeling.",
    formula: "CrCl = [(140-age) x Weight] / (72 x SCr) {x 0.85 if Female}",
    clinicalPearls: [
      "Always use Ideal Body Weight (IBW) unless the patient is underweight or obese.",
      "In obesity (BMI > 30), Adjusted Body Weight (AjBW) provides the most accurate dosing.",
      "Serum Creatinine should be stable; this formula is not for Acute Kidney Injury (AKI)."
    ],
    references: [
      { name: "FDA Renal Guidance", url: "https://www.fda.gov/media/71120/download" },
      { name: "NEJM Cockcroft-Gault Original", url: "https://pubmed.ncbi.nlm.nih.gov/1245644/" }
    ]
  };

  return (
    <div className="space-y-6">
      <HeaderSection title="Renal Dosing Master" onInfoClick={() => setShowInfo(true)} />
      
      <div className="grid grid-cols-1 gap-4">
        <InputGroup field="Age (Years)" icon={User} value={calcState.age} onChange={v => update('age', v)} />
        
        {/* Gender Toggle */}
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          {['male', 'female'].map(g => (
            <button key={g} onClick={() => update('gender', g)} className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${calcState.gender === g ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500'}`}>
              {g}
            </button>
          ))}
        </div>

        <InputGroup field="Actual Weight" unitValue="kg" icon={Scale} value={calcState.weight} onChange={v => update('weight', v)} />
        <InputGroup field="Height" isSplit icon={Ruler} value={{ft: calcState.heightFt, in: calcState.heightIn}} onChange={v => update(v.type, v.val)} />
        <InputGroup field="Serum Creatinine (mg/dL)" icon={Activity} value={calcState.creatinine} onChange={v => update('creatinine', v)} />
      </div>

      <CalcButton label="Analyze Renal Clearance" color="bg-emerald-600" onClick={calculateCrCl} />
      
      {result && (
        <>
          <MasteryCard result={result} />
          <AdvancedToggle isOpen={showAdvanced} onToggle={() => setShowAdvanced(!showAdvanced)}>
             <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl space-y-4">
                <div className="flex justify-between"><span className="text-xs font-bold text-slate-400">Ideal Body Weight (IBW):</span><span className="font-bold text-blue-500">{result.ibw} kg</span></div>
                <div className="flex justify-between"><span className="text-xs font-bold text-slate-400">Weight used for Calc:</span><span className="font-bold text-blue-500">{result.weightUsed} kg</span></div>
             </div>
          </AdvancedToggle>
        </>
      )}

      <KnowledgeModal isOpen={showInfo} onClose={() => setShowInfo(false)} data={modalData} />
    </div>
  );
};