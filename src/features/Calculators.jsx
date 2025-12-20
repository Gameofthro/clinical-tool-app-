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
    unit: "kg", hUnit: "cm", wUnit: "kg", gender: "male", fluidType: "421"
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
  const requiresGlucose = ['D5NS'].includes(calcState.fluidType);

  return (
    <div className="space-y-4 pb-10">
      {/* 1. COMPACT NAVIGATION STRIP */}
      <div className="grid grid-cols-5 gap-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-2xl shadow-inner">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dosing', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluids', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'Vitals', color: 'bg-rose-600' },
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
            {/* SHARED INPUTS */}
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
                    <button key={g} onClick={() => update('gender', g)} className={`py-2 rounded-xl font-bold capitalize text-xs ${calcState.gender === g ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-400'}`}>{g}</button>
                  ))}
                </div>
              </>
            )}

            {/* MAP TOOL: FIXED GRID TO PREVENT OVERFLOW */}
            {(activeTool === 'map' || (activeTool === 'fluid' && requiresBP)) && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100">
                <p className="text-[9px] font-black text-blue-600 uppercase mb-2 flex items-center gap-1"><Stethoscope size={12}/> Hemodynamics</p>
                <div className="grid grid-cols-2 gap-2">
                  <Input field="Systolic" value={calcState.sbp} onChange={v => update('sbp', v)} />
                  <Input field="Diastolic" value={calcState.dbp} onChange={v => update('dbp', v)} />
                </div>
              </div>
            )}

            {activeTool === 'fluid' && (
              <div className="space-y-3">
                <select className="w-full p-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-xs" value={calcState.fluidType} onChange={e => update('fluidType', e.target.value)}>
                  <option value="421">4-2-1 Maintenance</option>
                  <option value="NS">Normal Saline (NS)</option>
                  <option value="RL">Lactated Ringer's (RL)</option>
                  <option value="D5NS">D5 / 0.9% NS</option>
                </select>
                {requiresGlucose && (
                   <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100">
                     <p className="text-[9px] font-black text-orange-600 uppercase mb-2">Glucose Status</p>
                     <Input field="Glucose (mg/dL)" value={calcState.glucose} onChange={v => update('glucose', v)} />
                   </div>
                )}
              </div>
            )}
          </div>

          <CalcButton onClick={handleCalculate} label="Calculate Strategy" color="bg-blue-600" />

          {/* RESULTS */}
          <div className="mt-4">
            {activeTool === 'pediatric' && results.dose && (
              <ResultBox value={`${results.dose.value} mg`} label="Dose" pearl={results.dose.pearl} alert={Logic.NARROW_THERAPEUTIC_INDEX_WARNINGS} />
            )}
            {activeTool === 'bmi' && results.bmi && (
              <ResultBox value={results.bmi.value} label={results.bmi.category} pearl={results.bmi.pearl}>
                <p className={`text-[9px] font-black mt-1 uppercase ${results.bmi.color}`}>Risk: {results.bmi.risk}</p>
              </ResultBox>
            )}
            {activeTool === 'gfr' && results.gfr && (
              <ResultBox value={results.gfr.value} label={results.gfr.stage} pearl={results.gfr.pearl}>
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100">
                  <p className="text-[9px] font-black text-red-600 uppercase">Adjustment:</p>
                  <p className="text-[10px] font-bold text-red-800 dark:text-red-300">{results.gfr.adjustment}</p>
                </div>
              </ResultBox>
            )}
            {activeTool === 'map' && results.map && (
              <ResultBox value={`${results.map.value} mmHg`} label={results.map.status} pearl={results.map.pearl} />
            )}
            {activeTool === 'fluid' && results.fluid && (
              <ResultBox value={`${results.fluid.rate} mL/hr`} label={`Rate (${calcState.fluidType})`} pearl={results.fluid.basePearl}>
                <div className="mt-2 border-t pt-2">
                  <p className="text-[10px] text-blue-600 font-bold">Rationale: <span className="text-slate-500 font-medium">{results.fluid.rationale}</span></p>
                </div>
              </ResultBox>
            )}
          </div>
        </div>
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
    className="w-full min-w-0 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-sm outline-none border border-transparent focus:border-blue-500/20 shadow-inner" />
);

const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-800 rounded-xl px-2 font-black text-[10px] uppercase outline-none shrink-0">
    {options.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);

const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-3 ${color} text-white font-black rounded-xl shadow-lg active:scale-95 transition-all uppercase tracking-widest text-[10px]`}>
    {label} <ChevronRight className="inline" size={14} />
  </button>
);

const ResultBox = ({ value, label, pearl, alert, children }) => (
  <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 animate-in zoom-in-95">
    <p className="text-3xl font-black text-blue-600">{value}</p>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
    {pearl && (
      <div className="mt-3 flex gap-2 items-start text-[10px] text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded-lg border">
        <Info size={14} className="text-blue-500 shrink-0" />
        <p><b>Pearl:</b> {pearl}</p>
      </div>
    )}
    {children}
  </div>
);