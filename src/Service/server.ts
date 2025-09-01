// src/Service/server.ts
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Node 18+ has global fetch; no need for node-fetch.

const app = express();
app.use(express.json());

// Health check
app.get("/healthz", (_req, res) => res.send("ok"));

// Main route
app.post("/api/wavelength", async (req, res) => {
  try {
    const { question, correct } = req.body as { question: string; correct: number };

    const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

    if (!API_BASE) {
      return res.status(500).json({ error: "Missing OPENAI_API_KEY on server" });
    }
    
    if (!question || typeof correct !== "number") {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: buildPrompt(question, correct) }],
        temperature: 0.9,
        top_p: 0.95,
        max_tokens: 20,
      }),
    });

    const bodyText = await r.text(); // read once

    if (!r.ok) {
      return res.status(r.status).json({ error: bodyText });
    }

    const data: any = JSON.parse(bodyText);
    const text = data.choices?.[0]?.message?.content?.trim() ?? "";
    return res.json({ text });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Server error" });
  }
});

// Start server on same port your Vite proxy targets
const PORT = Number(process.env.PORT || process.env.API_PORT || 3001);
app.listen(PORT, () => {
  console.log(`✅ API listening on http://localhost:${PORT}`);
});

// Log crashes
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION", err);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION", err);
});

function buildPrompt(question: string, correct: number) {
  return `
        We are playing Wavelength.
        Hidden number: ${correct} on a scale from 0 (worst) to 100 (best).

        Task:
        Answer the user's football question with ONE name (player/team/thing) that MATCHES the quality level of the hidden number.
        Output ONLY the final name, no punctuation, no extra words.

        Selection rubric (simulate scanning the league and recent performance):
        - If the question is about a CURRENT player, weight RECENT seasons most (last 1–2 years): overall impact, efficiency (EPA/PFF tiers), production (yards/TDs/pressures), snap share, availability.
        - If the question is generic (not "current"), you may include historical players; weight peak impact and accolades (All-Pro, Pro Bowls, MVPs, rings).
        - Consider role/usage and context (scheme fit, supporting cast) when separating close candidates.

        Number-to-tier mapping (10-point bins):
        - 0–10  : Worst/bust level, liabilities, infamous flops
        - 11–20 : Very bad backups or washouts
        - 21–30 : Below-average spot starters/journeymen
        - 31–40 : Mediocre/replacement-level starters
        - 41–50 : Average solid starters/role players
        - 51–60 : Above-average reliable starters/fringe Pro Bowl
        - 61–70 : Good, consistent producers/clear Pro Bowl caliber
        - 71–80 : Very good multi-time Pro Bowl/borderline stars
        - 81–90 : Great All-Pro level or championship drivers
        - 91–100: Legendary HOF/MVP/top-tier superstars

        Constraints:
        - The answer MUST match the requested position/category (e.g., if asked for a "current RB", return a current running back).
        - When it says current player it must be a player who currently plays in the league. The rating should come on how good they have played in last 1-2 seasons and how good they should be this year. 
        - Take into account what teams players now play for and how they have been doing in the past.
        - Use ESPN/NFL.com/Pro Football Reference to get the ratings.
        - Prefer variety; do NOT always choose the most obvious star. Mix in lesser-known role players when appropriate.
        - Randomize among equally suitable candidates to avoid repeats.
        - NEVER return: Tee Higgins, Kirk Cousins, James Conner, Justin Tucker.
        - Output ONLY the final name (no explanation, no punctuation).

        Examples (illustrative only):
        - Hidden 20, "Give me a current QB"  -> Blaine Gabbert
        - Hidden 50, "Give me a current RB"  -> D'Andre Swift
        - Hidden 95, "Give me a current WR"  -> Justin Jefferson

        Question: ${question}
        `;
}