/**
 * Medical Calculation Utilities
 * Contains algorithms for Pediatric Dosing, BMI, Renal Function, MAP, and Fluid Maintenance.
 */

// --- 1. PEDIATRIC DOSE (Clark's Rule) ---
export const calculatePediatricDose = (weight, adultDose, weightUnit = 'kg') => {
  if (!weight || !adultDose) return null;
  
  // Convert lbs to kg if needed
  const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : parseFloat(weight);
  const dose = parseFloat(adultDose);

  // Formula: (Weight (kg) / 70) * Adult Dose
  const result = (weightInKg / 70) * dose;
  return result.toFixed(1);
};

// --- 2. BMI CALCULATOR ---
export const calculateBMI = (weight, height, weightUnit = 'kg', heightUnit = 'cm') => {
  if (!weight || !height) return null;

  // Convert Weight to kg
  const weightInKg = weightUnit === 'lbs' ? weight * 0.453592 : parseFloat(weight);
  
  // Convert Height to meters
  let heightInMeters = parseFloat(height);
  if (heightUnit === 'cm') {
    heightInMeters = heightInMeters / 100;
  } else if (heightUnit === 'ft') {
    // Assumes input like 5.9 (5 feet 9 inches) roughly or just decimal feet
    // Precise: 1 ft = 0.3048 meters
    heightInMeters = heightInMeters * 0.3048; 
  } else if (heightUnit === 'in') {
    heightInMeters = heightInMeters * 0.0254;
  }

  // Formula: kg / m^2
  const bmi = weightInKg / (heightInMeters * heightInMeters);
  
  // Categorize
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  return { value: bmi.toFixed(1), category };
};

// --- 3. eGFR (MDRD Equation) ---
export const calculateGFR = (creatinine, age, gender, unit = 'mg/dl') => {
  if (!creatinine || !age) return null;

  // Convert µmol/L to mg/dL (Standard factor: 88.4)
  // Formula works best with mg/dL
  const crMgDl = unit === 'umol/l' ? parseFloat(creatinine) / 88.4 : parseFloat(creatinine);
  const ageVal = parseFloat(age);

  // MDRD Formula: 175 × (Scr)^-1.154 × (Age)^-0.203 × (0.742 if female)
  let gfr = 175 * Math.pow(crMgDl, -1.154) * Math.pow(ageVal, -0.203);
  
  if (gender === 'female') {
    gfr = gfr * 0.742;
  }

  return gfr.toFixed(1);
};

// --- 4. MEAN ARTERIAL PRESSURE (MAP) ---
export const calculateMAP = (sbp, dbp) => {
  if (!sbp || !dbp) return null;
  const s = parseFloat(sbp);
  const d = parseFloat(dbp);
  
  // Formula: (SBP + 2*DBP) / 3
  const map = (s + (2 * d)) / 3;
  
  let status = "Normal";
  if (map < 65) status = "Low Perfusion (Shock Risk)";
  if (map > 100) status = "High Afterload";

  return { value: map.toFixed(0), status };
};

// --- 5. MAINTENANCE FLUID (4-2-1 Rule) ---
export const calculateMaintenanceFluid = (weight, unit = 'kg') => {
  if (!weight) return null;
  
  const w = unit === 'lbs' ? weight * 0.453592 : parseFloat(weight);
  let rate = 0;

  // 4-2-1 Rule
  if (w <= 10) {
    rate = w * 4;
  } else if (w <= 20) {
    rate = (10 * 4) + ((w - 10) * 2);
  } else {
    rate = (10 * 4) + (10 * 2) + ((w - 20) * 1);
  }

  return { 
    rate: rate.toFixed(0), // mL/hr
    daily: (rate * 24).toFixed(0) // Total mL/day
  };
};