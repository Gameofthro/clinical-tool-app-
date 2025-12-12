// api/diagnose.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  // 1. CORS Headers - Allow requests from your frontend
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Handle Preflight Options
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Ensure Method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    // 4. Input Validation (Supports both 'symptoms' and 'query' based on mode)
    const { mode = 'diagnose', symptoms, query } = req.body;
    
    // Model Config: Using 1.5 Flash for speed and consistent JSON structure
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.2 // Lower temperature for more factual/consistent medical data
      }
    });

    let prompt = "";

    // 5. Mode Selection Logic
    if (mode === 'search') {
      if (!query) return res.status(400).json({ error: "No search query provided" });
      
      prompt = `
        Act as a strict medical database. Provide details for the condition: "${query}".
        Output strictly valid JSON.
        Schema:
        {
          "name": "Disease Name",
          "summary": "Brief medical summary",
          "symptoms": ["List of common symptoms"],
          "tests": ["Key diagnostic tests"],
          "remedies": ["Home/OTC remedies"],
          "warning": "When to see a doctor immediately"
        }
      `;
    } else {
      // Default to 'diagnose' mode
      if (!symptoms || symptoms.length === 0) {
        return res.status(400).json({ error: "No symptoms provided for diagnosis" });
      }

      const symptomStr = Array.isArray(symptoms) ? symptoms.join(", ") : symptoms;
      prompt = `
        Act as a clinical diagnostician. Patient symptoms: ${symptomStr}.
        Provide a differential diagnosis.
        Output strictly valid JSON.
        Schema:
        {
          "differential_diagnosis": [
            {"condition": "Condition Name", "likelihood": "High/Moderate/Low", "reasoning": "Why this matches"}
          ],
          "suggested_tests": ["List of relevant labs/imaging"],
          "home_remedies": ["Immediate supportive care actions"],
          "urgent_warning": "Emergency warning if applicable (or null)"
        }
      `;
    }

    // 6. Execution
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 7. Parse and Return
    const jsonResponse = JSON.parse(text);
    return res.status(200).json(jsonResponse);

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ 
      error: "Analysis Failed", 
      details: error.message 
    });
  }
}