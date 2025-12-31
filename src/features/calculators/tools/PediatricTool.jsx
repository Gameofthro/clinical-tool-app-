import React, { useState } from 'react';
import { Baby, AlertCircle, BookOpen, ShieldCheck } from "lucide-react";
import { 
  Input, 
  UnitSelect, 
  CalcButton, 
  AdvancedToggle, 
  MasteryInterpretationCard 
} from '../components/SharedUI';
import * as Logic from "../../../utils/calculators";

export const PediatricTool = ({ calcState, update, onResult }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [localResult, setLocalResult] = useState(null);

  const handleCalculate = () => {
    // Logic automatically detects neonatal status based on age <= 0.08 years
    const res = Logic.calculatePediatricDose(
      calcState.weight, 
      calcState.age, 
      calcState.unit,
      calcState.indication || 'General'
    );

    if (res) {
      setLocalResult(res);
      onResult('pediatric', res);
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Core Growth Parameters */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input 
            field="Patient Weight" 
            value={calcState.weight} 
            onChange={v => update('weight', v)} 
            icon={Baby}
          />
          <UnitSelect 
            value={calcState.unit} 
            onChange={v => update('unit', v)} 
            options={['kg', 'lbs']} 
          />
        </div>

        <Input 
          field="Age (Years - use 0.08 for 1 month)" 
          value={calcState.age} 
          onChange={v => update('age', v)} 
          icon={Baby}
        />
      </div>

      {/* 2. Clinical Context (Indication) */}
      <div className="space-y-2">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
          Therapeutic Indication
        </p>
        <select 
          className="w-full p-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-xs outline-none border-2 border-transparent focus:border-purple-500/50 transition-all cursor-pointer" 
          value={calcState.indication || "general"} 
          onChange={e => update('indication', e.target.value)}
        >
          <option value="general">General Dosing (10mg/kg)</option>
          <option value="antipyretic">Antipyretic / Analgesic</option>
          <option value="antibiotic">Antibiotic Protocol</option>
          <option value="critical">Critical Care / Emergency</option>
        </select>
      </div>

      {/* 3. Advanced Safety Parameters (Optional) */}
      <AdvancedToggle 
        isOpen={showAdvanced} 
        onToggle={() => setShowAdvanced(!showAdvanced)}
      >
        <div className="space-y-3">
          <div className="p-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-[1.5rem] border border-purple-100 dark:border-purple-800">
            <p className="text-[9px] font-black text-purple-600 uppercase mb-3 flex items-center gap-1">
              <ShieldCheck size={12}/> Adult Maximum Limit
            </p>
            <Input 
              field="Absolute Max Dose (mg)" 
              value={calcState.maxDose || ""} 
              onChange={v => update('maxDose', v)} 
              icon={AlertCircle}
            />
          </div>
          <p className="text-[9px] text-slate-500 font-medium leading-relaxed italic px-1">
            Mastery Note: In pediatric medicine, the weight-based dose should &lt;never&gt; exceed the standard adult maximum dose. For example, if a 60kg child requires a drug with a 500mg adult max, the weight-based calculation must be capped.
          </p>
        </div>
      </AdvancedToggle>

      {/* 4. Action Trigger */}
      <CalcButton 
        onClick={handleCalculate} 
        label="Analyze Pediatric Safety" 
        color="bg-purple-600" 
      />

      {/* 5. Mastery Feedback Layer */}
      {localResult && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <MasteryInterpretationCard result={localResult} />
        </div>
      )}

      {/* 6. NTI Educational Watchlist */}
      <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={16} className="text-purple-600" />
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
            NTI mastery Watchlist
          </p>
        </div>
        <div className="grid gap-2">
          {Logic.CLINICAL_CONSTANTS.NTI_DRUGS.map(w => (
            <div key={w.drug} className="text-[10px] p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-purple-500">
              <div className="flex justify-between mb-1">
                <span className="font-black text-purple-700 dark:text-purple-400">{w.drug}</span>
                <span className="text-[8px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold uppercase">High Alert</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-tight"><b>Caution:</b> {w.caution}</p>
              <p className="text-[9px] text-red-500 font-bold mt-1">Signs of Toxicity: {w.toxicity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};