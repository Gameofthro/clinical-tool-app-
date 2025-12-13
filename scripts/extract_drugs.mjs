import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// IMPORTANT: This script assumes 'src/data/diseases.js' contains only data and no React/Image imports.
import { diseaseDatabase } from '../src/data/diseases.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = 'drug_tracker.md';

function generateDrugTracker() {
  console.log("Starting Drug Data Extraction...");

  let content = "# Clinical Pharmacology Tracker\n\n";
  content += `**Generated:** ${new Date().toLocaleString()}\n`;
  content += `**Source:** ClinicalAssist Disease Database\n\n`;
  content += `--- \n\n`;

  let count = 1;

  Object.values(diseaseDatabase).forEach(disease => {
    if (disease.managementRationale && Array.isArray(disease.managementRationale)) {
      disease.managementRationale.forEach(drug => {
        const drugName = drug.drug || 'Unknown Drug';
        const drugClass = drug.class || 'N/A';
        const dosing = `${drug.dose || ''} ${drug.freq || ''}`.trim();
        const rationale = drug.rationale || 'N/A';
        
        content += `### ${count}. ${drugName} (${disease.name})\n`;
        content += `- **Class:** ${drugClass}\n`;
        content += `- **Dosing:** ${dosing || 'See specific protocols'}\n`;
        content += `- **Rationale:** ${rationale}\n\n`;
        
        count++;
      });
    }
  });

  const outputPath = path.join(__dirname, '..', OUTPUT_FILE);
  fs.writeFileSync(outputPath, content, 'utf8');

  console.log(`\n✅ Success! Extracted ${count - 1} drug entries.`);
  console.log(`📄 File created: ${outputPath}`);
}

generateDrugTracker();