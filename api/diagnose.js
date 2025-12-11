export default async function handler(req, res) {
  // 1. CORS Headers (Allows frontend access)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle pre-flight check
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 2. Parse Body Safely
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { console.error("Parse error", e); }
    }
    const { prompt } = body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt in request body" });
    }

    // 3. Verify API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL: GEMINI_API_KEY is missing in Vercel Environment Variables.");
      return res.status(500).json({ error: 'Server Configuration Error: Missing API Key' });
    }

    // 4. Call Google Gemini (Stable 1.5 Flash Model)
    // Note: 1.5 Flash is faster and more stable than Pro for this use case
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const googleResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    if (!googleResponse.ok) {
        const errText = await googleResponse.text();
        console.error("Google API Error Response:", errText);
        throw new Error(`Gemini API Failed: ${googleResponse.statusText}`);
    }

    const data = await googleResponse.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Serverless Function Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}