import React from "react";
import CalculatorFeature from "./calculators/CalculatorFeature";

/**
 * ENTRY POINT: CALCULATORS
 * This file points to the modularized feature directory.
 */
export default function Calculators() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <CalculatorFeature />
    </div>
  );
}