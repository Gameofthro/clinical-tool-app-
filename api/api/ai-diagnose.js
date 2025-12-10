import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') return response.status(200).end();

  try {
    const { symptoms } = JSON.parse(request.body);
    
    if (!process.env.GEMINI_API_KEY) throw new Error("Missing API Key");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Strict Diagnostic Prompt
    const prompt = `
      Act as an expert diagnostician (Internist).
      Patient presents with: "${symptoms}"
      
      Task:
      1. Identify top 3-5 provisional diagnoses based on clinical likelihood.
      2. Rank them (High/Medium/Low probability).
      3. Provide brief reasoning for the top match.
      4. List "Red Flags" to check for immediately.

      Return ONLY raw JSON. No Markdown.
      Schema:
      [
        {
          "disease": "Disease Name",
          "probability": "High" | "Medium" | "Low",
          "reasoning": "Brief clinical logic...",
          "redFlags": ["Flag 1", "Flag 2"]
        }
      ]
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
    
    response.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error("Diagnosis Error:", error);
    response.status(500).json({ error: "Diagnosis failed" });
  }
}