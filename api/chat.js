export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 400,
        system: "You are a travel assistant for Atlantic Wave, a tourism platform for Puerto Plata, Dominican Republic. Be friendly, concise, practical. Under 120 words per response.",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    return res.status(200).json({ reply: data.content?.[0]?.text ?? "" });

  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}