export default async function handler(req, res) {
  // 1. Handling CORS (Cross-Origin Resource Sharing)
  // This allows your frontend to talk to this backend function
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;
    
    // 3. Get the Key securely from Server Environment
    // Make sure you add GEMINI_API_KEY to your Vercel Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Server Config Error: API Key not found' });
    }

    // 4. Call Google Gemini via standard fetch (No extra packages needed)
    const googleResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    if (!googleResponse.ok) {
        throw new Error(`Google API Error: ${googleResponse.statusText}`);
    }

    const data = await googleResponse.json();

    // 5. Send result back to your Frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server API Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}