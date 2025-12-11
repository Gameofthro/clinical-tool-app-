export default async function handler(req, res) {
  // 1. CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // 2. Safe Body Parsing
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { console.error("Body parse failed", e); }
    }
    const { prompt } = body;

    // 3. Check API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Server Error: Missing API Key' });

    // 4. Call Google Gemini (Using Stable Model 1.5 Flash)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const googleResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    if (!googleResponse.ok) {
        const errText = await googleResponse.text();
        console.error("Google API Error:", errText);
        throw new Error(`Gemini API Error: ${googleResponse.status} ${googleResponse.statusText}`);
    }

    const data = await googleResponse.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Diagnosis Function Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}