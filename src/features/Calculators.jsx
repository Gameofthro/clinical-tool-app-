import React, { useState } from "react";
import { 
  Baby, Droplet, Scale, Activity, Heart, BookOpen, AlertTriangle, Info, ChevronDown, ChevronRight, Stethoscope 
} from "lucide-react";
import * as Logic from "../utils/calculators";

export default function CalculatorFeature() {
  const [activeTool, setActiveTool] = useState("pediatric");
  const [results, setResults] = useState({});

  // Unified State Management
  const [calcState, setCalcState] = useState({
    weight: "", age: "", height: "", creatinine: "", sbp: "", dbp: "", glucose: "",
    unit: "kg", hUnit: "cm", wUnit: "kg", gender: "male", fluidType: "421"
  });

  const update = (key, val) => setCalcState(prev => ({ ...prev, [key]: val }));

  // Dynamic Handlers
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
    <div className="space-y-6 pb-20">
      {/* 1. NAVIGATION STRIP */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {[
          { id: 'pediatric', icon: Baby, label: 'Dosing', color: 'bg-purple-600' },
          { id: 'fluid', icon: Droplet, label: 'Fluids', color: 'bg-blue-600' },
          { id: 'gfr', icon: Activity, label: 'Renal', color: 'bg-red-600' },
          { id: 'bmi', icon: Scale, label: 'BMI', color: 'bg-orange-600' },
          { id: 'map', icon: Heart, label: 'Vitals', color: 'bg-rose-600' },
        ].map(t => (
          <button key={t.id} onClick={() => { setActiveTool(t.id); setResults({}); }}
            className={`flex-shrink-0 px-5 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 border-2 
            ${activeTool === t.id ? `${t.color} text-white border-transparent shadow-lg scale-105` : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-800'}`}>
            <t.icon size={18} /> {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
        <HeaderSection title={activeTool.toUpperCase()} />

        <div className="space-y-6 mt-6">
          {/* INPUT DISPATCHER */}
          <div className="grid grid-cols-1 gap-4">
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
                    <button key={g} onClick={() => update('gender', g)} className={`py-2 rounded-xl font-bold capitalize ${calcState.gender === g ? 'bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-400'}`}>{g}</button>
                  ))}
                </div>
              </>
            )}

            {(activeTool === 'map' || (activeTool === 'fluid' && requiresBP)) && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100">
                <p className="text-[10px] font-black text-blue-600 uppercase mb-3 flex items-center gap-1"><Stethoscope size={12}/> Hemodynamic Parameter</p>
                <div className="flex gap-2">
                  <Input field="Systolic BP" value={calcState.sbp} onChange={v => update('sbp', v)} />
                  {activeTool === 'map' && <Input field="Diastolic BP" value={calcState.dbp} onChange={v => update('dbp', v)} />}
                </div>
              </div>
            )}

            {activeTool === 'fluid' && (
              <div className="space-y-4">
                <select className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold" value={calcState.fluidType} onChange={e => update('fluidType', e.target.value)}>
                  <option value="421">Maintenance (4-2-1 Only)</option>
                  <option value="NS">Normal Saline (NS)</option>
                  <option value="RL">Lactated Ringer's (RL)</option>
                  <option value="D5NS">D5 / 0.9% NS</option>
                </select>
                {requiresGlucose && (
                   <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-100">
                     <p className="text-[10px] font-black text-orange-600 uppercase mb-3">Glycemic Status</p>
                     <Input field="Blood Glucose (mg/dL)" value={calcState.glucose} onChange={v => update('glucose', v)} />
                   </div>
                )}
              </div>
            )}
          </div>

          <CalcButton onClick={handleCalculate} label="Generate Clinical Strategy" color="bg-blue-600" />

          {/* RESULT DISPATCHER */}
          <div className="mt-6">
            {activeTool === 'pediatric' && results.dose && (
              <ResultBox value={`${results.dose.value} mg`} label="Estimated Pediatric Dose" pearl={results.dose.pearl} alert={Logic.NARROW_THERAPEUTIC_INDEX_WARNINGS} />
            )}
            {activeTool === 'bmi' && results.bmi && (
              <ResultBox value={results.bmi.value} label={results.bmi.category} pearl={results.bmi.pearl}>
                <p className={`text-[10px] font-black mt-2 uppercase tracking-widest ${results.bmi.color}`}>Risk: {results.bmi.risk}</p>
              </ResultBox>
            )}
            {activeTool === 'gfr' && results.gfr && (
              <ResultBox value={results.gfr.value} label={results.gfr.stage} pearl={results.gfr.pearl}>
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-900/30">
                  <p className="text-[10px] font-black text-red-600 uppercase">Renal Dose Adjustment:</p>
                  <p className="text-xs font-bold text-red-800 dark:text-red-300">{results.gfr.adjustment}</p>
                </div>
              </ResultBox>
            )}
            {activeTool === 'map' && results.map && (
              <ResultBox value={`${results.map.value} mmHg`} label={results.map.status} pearl={results.map.pearl} />
            )}
            {activeTool === 'fluid' && results.fluid && (
              <ResultBox value={`${results.fluid.rate} mL/hr`} label={`IV Rate: ${calcState.fluidType}`} pearl={results.fluid.basePearl}>
                <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <p className="text-xs text-blue-600 font-bold">Rationale: <span className="text-slate-500 font-medium">{results.fluid.rationale}</span></p>
                  {results.fluid.risk && <p className="mt-2 text-[10px] bg-red-50 text-red-700 p-2 rounded-lg font-bold">⚠️ {results.fluid.risk}</p>}
                </div>
              </ResultBox>
            )}
          </div>
        </div>

        <p className="mt-10 text-[9px] text-slate-400 text-center italic leading-relaxed border-t pt-4">
          This information is for educational purposes only. Reconsult with a physician before implementation.
        </p>
      </div>
    </div>
  );
}

// UI Sub-components
const HeaderSection = ({ title }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{title} TOOL</h2>
  </div>
);

const Input = ({ field, value, onChange }) => (
  <input type="number" placeholder={field} value={value} onChange={e => onChange(e.target.value)}
    className="flex-1 p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl font-bold text-lg outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-300" />
);

const UnitSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    className="bg-slate-100 dark:bg-slate-800 rounded-3xl px-4 font-black text-[10px] uppercase outline-none">
    {options.map(o => <option key={o} value={o}>{o}</option>)}
  </select>
);

const CalcButton = ({ onClick, label, color }) => (
  <button onClick={onClick} className={`w-full py-5 ${color} text-white font-black rounded-3xl shadow-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs`}>
    {label} <ChevronRight size={18} />
  </button>
);

const ResultBox = ({ value, label, pearl, alert, children }) => (
  <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-700 animate-in zoom-in-95 duration-300">
    <p className="text-5xl font-black text-blue-600 tracking-tighter">{value}</p>
    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    {pearl && (
      <div className="mt-5 flex gap-3 items-start text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-4 rounded-3xl border shadow-sm">
        <Info size={18} className="text-blue-500 shrink-0" />
        <p><b>Clinical Pearl:</b> {pearl}</p>
      </div>
    )}
    {alert && (
      <div className="mt-4 grid gap-1">
        {alert.map(w => <div key={w.drug} className="text-[10px] p-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-800 font-bold">⚠️ {w.drug}: {w.caution}</div>)}
      </div>
    )}
    {children}
  </div>
);