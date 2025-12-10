import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  // 1. CORS Headers (Required for Vercel/Vite communication)
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle browser pre-flight check
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  try {
    // 2. Parse the requested drug name
    const { drugName } = JSON.parse(request.body);
    
    // 3. Verify API Key
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY environment variable");
    }

    // 4. Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 5. Clinical Pharmacist Prompt
    const prompt = `
      Act as a senior clinical pharmacist. 
      Provide a concise monograph for the drug "${drugName}".
      Return ONLY raw JSON. Do not use Markdown formatting or code blocks.
      Strict JSON Schema:
      {
        "class": "Pharmacological Class",
        "moa": "Mechanism of Action (1 sentence)",
        "dosing": "Standard adult dosing",
        "contraindications": ["Major contraindication 1"],
        "pearl": "One high-yield clinical pearl"
      }
    `;

    // 6. Generate and Clean Response
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
    
    response.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error("Drug Info API Error:", error);
    response.status(500).json({ error: "Failed to fetch drug info" });
  }
}