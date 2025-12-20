import React, { useState } from "react";
import { 
  Baby, Droplet, Scale, Activity, Heart, BookOpen, AlertTriangle, Info, ChevronRight, Stethoscope 
} from "lucide-react";
import * as Logic from "../utils/calculators";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState("pediatric");
  const [results, setResults] = useState({});

  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", gender: "male", fluidType: "421"
  });

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  const handleCalculate = () => {
    let res = {};
    if (activeTool === 'pediatric') res.dose = Logic.calculatePediatricDose(calcState.weight, calcState.age, calcState.unit);
    if (activeTool === 'bmi') res.bmi = Logic.calculateBMI(calcState.weight, calcState.height, calcState.unit, calcState.hUnit);
    if (activeTool === 'gfr') res.gfr = Logic.calculateGFR(calcState.creatinine, calcState.age, calcState.gender);
    if (activeTool === 'map') res.map = Logic.calculateMAP(calcState.sbp, calcState.dbp);
    if (activeTool === 'fluid') {
      const base = Logic.calculateMaintenanceFluid(calcState.weight, calcState.unit);
      const strategy = Logic.calculateIVFluidRate({ baseRate: base.rate, fluidType: calcState.fluidType, glucoseMgDl: calcState.glucose, sbp: calcState.sbp });
      res.fluid = { ...strategy, basePearl: base.pearl };
    }
    setResults(res);
  };

  const requiresBP = ['NS', 'RL'].includes(calcState.fluidType);

  return (
    <div className="space-y-4 pb-10">
      {/* 1. COMPACT 5-COLUMN NAVIGATION */}
      <div className="grid grid-cols-5 gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-2xl shadow-inner shrink-0">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dose', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluid', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'MAP', color: 'bg-rose-600' },
        ].map(t => (
          <button key={t.id} onClick={() => { setActiveTool(t.id); setResults({}); }}
            className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all
            ${activeTool === t.id ? `${t.color} text-white shadow-md` : 'text-slate-500'}`}>
            <t.icon size={16} />
            <span className="text-[8px] font-black mt-1 uppercase tracking-tighter">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-xl border border-slate-100 dark:border-slate-800">
        <HeaderSection title={activeTool.toUpperCase()} />

        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-3">
            {['pediatric', 'bmi', 'fluid'].includes(activeTool) && (
              <div className="flex gap-2">
                <Input field="Weight" value={calcState.weight} onChange={v => update('weight', v)} />
                <UnitSelect value={calcState.unit} onChange={v => update('unit', v)} options={['kg', 'lbs']} />
              </div>
            )}

            {['pediatric', 'gfr'].includes(activeTool) && (
              <Input field="Age (Years)" value={calcState.age} onChange={v => update('age', v)} />
            )}

            {activeTool === 'bmi' && (
              <div className="flex gap-2">
                <Input field="Height" value={calcState.height} onChange={v => update('height', v)} />
                <UnitSelect value={calcState.hUnit} onChange={v => update('hUnit', v)} options={['cm', 'ft', 'in']} />
              </div>
            )}

            {activeTool === 'gfr' && (
              <>
                <Input field="Creatinine" value={calcState.creatinine} onChange={v => update('creatinine', v)} />
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  {['male', 'female'].map(g => (
                    <button key={g} onClick={() => update('gender', g)} className={`py-2 rounded-xl font-black capitalize text-[10px] ${calcState.gender === g ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-400'}`}>{g}</button>
                  ))}
                </div>
              </>
            )}

            {(activeTool === 'map' || (activeTool === 'fluid' && requiresBP)) && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100">
                <p className="text-[9px] font-black text-blue-600 uppercase mb-2 flex items-center gap-1"><Stethoscope size={12}/> Vitals Input</p>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Input field="Systolic" value={calcState.sbp} onChange={v => update('sbp', v)} />
                  <Input field="Diastolic" value={calcState.dbp} onChange={v => update('dbp', v)} />
                </div>
              </div>
            )}

            {activeTool === 'fluid' && (
              <div className="space-y-3">
                <select className="w-full p-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-xs" value={calcState.fluidType} onChange={e => update('fluidType', e.target.value)}>
                  <option value="421">Maintenance Only</option>
                  <option value="NS">Normal Saline (NS)</option>
                  <option value="RL">Lactated Ringer's (RL)</option>
                  <option value="D5NS">D5 / 0.9% NS</option>
                </select>
                {calcState.fluidType === 'D5NS' && (
                   <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100">
                     <p className="text-[9px] font-black text-orange-600 uppercase mb-2">Glycemic Status</p>
                     <Input field="Blood Glucose" value={calcState.glucose} onChange={v => update('glucose', v)} />
                   </div>
                )}
              </div>
            )}
          </div>

          <CalcButton onClick={handleCalculate} label="Calculate Strategy" color="bg-blue-600" />

          {/* RESULTS AREA */}
          <div className="mt-4">
            {results[activeTool] && (
              <ResultBox value={results[activeTool].value || results[activeTool].rate} label={results[activeTool].category || results[activeTool].status || "Result"} pearl={results[activeTool].pearl || results[activeTool].basePearl}>
                {results[activeTool].adjustment && (
                  <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100">
                    <p className="text-[9px] font-black text-red-600 uppercase">Adjustment Required:</p>
                    <p className="text-[10px] font-bold text-red-800 dark:text-red-300">{results[activeTool].adjustment}</p>
                  </div>
                )}
                {results[activeTool].risk && <p className="mt-2 text-[9px] bg-red-50 text-red-700 p-2 rounded-lg font-bold">⚠️ {results[activeTool].risk}</p>}
                {activeTool === 'pediatric' && <div className="mt-3 grid gap-1">
                  {Logic.NARROW_THERAPEUTIC_INDEX_WARNINGS.map(w => <div key={w.drug} className="text-[9px] p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600"><b>{w.drug}:</b> {w.caution}</div>)}
                </div>}
              </ResultBox>
            )}
          </div>
        </div>

        <p className="mt-6 text-[9px] text-slate-400 text-center italic border-t pt-4">
          For educational purposes only. Reconsult with a physician before implementation.
        </p>
      </div>
    </div>
  );
}

const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
    <h2 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{title} TOOL</h2>
  </div>
);

const Input = ({ field, value, onChange }) => (
  <input type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
    className="w-full min-w-0 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-sm outline-none border border-transparent focus:border-blue-500 shadow-inner text-blue-600 dark:text-blue-400 placeholder:text-slate-400" />
);

const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-800 rounded-xl px-2 font-black text-[10px] uppercase outline-none text-slate-500 shrink-0">
    {options.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);

const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-3.5 ${color} text-white font-black rounded-xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-[10px]`}>
    {label} <ChevronRight className="inline" size={14} />
  </button>
);

const ResultBox = ({ value, label, pearl, children }) => (
  <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 animate-in zoom-in-95">
    <p className="text-4xl font-black text-blue-600">{value}</p>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
    {pearl && (
      <div className="mt-4 flex gap-2 items-start text-[10px] bg-amber-50 dark:bg-amber-900/30 p-2 rounded-lg border border-amber-200 dark:border-amber-800/50 shadow-sm">
        <Info size={14} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p className="text-amber-900 dark:text-amber-200 font-medium leading-tight"><b>Pearl:</b> {pearl}</p>
      </div>
    )}
    {children}
  </div>
);