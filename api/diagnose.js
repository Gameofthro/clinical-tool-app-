// api/diagnose.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ error: "No symptoms provided" });
    }

    // Upgrade to 1.5-flash for speed/cost or 1.5-pro for reasoning
    // Using 1.5-flash here as it is significantly faster for API responses
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json" // Force JSON output
      }
    });

    const prompt = `
      Act as a clinical pharmacist and diagnostician. 
      Patient symptoms: ${Array.isArray(symptoms) ? symptoms.join(", ") : symptoms}.
      
      Provide a JSON response with:
      1. Differential Diagnosis (list of objects with condition, likelihood, reasoning)
      2. Suggested Clinical Tests
      3. Home Remedies / OTC recommendations
      
      Schema:
      {
        "diagnosis": [{"condition": "str", "likelihood": "str", "reasoning": "str"}],
        "tests": ["str"],
        "remedies": ["str"]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // With responseMimeType, we can safely parse, but good to wrap in try/catch just in case
    return res.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}