import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import ChatBox from "./ChatBox/ChatBox";
import Scale from "./Scale/Scale";
import "./Wavelength.css";

type option = { value: string; label: string };

function Wavelength() {
    const API_KEY = import.meta.env.VITE_SNAPCOUNT_API_KEY

    useEffect(() => {
        console.log('Wavelength mounted');
        return () => console.log('Wavelength unmounted');
    }, []);

    const allQuestions: string[] = [
        "Give me a current quarterback",
        "Give me a current running back",
        "Give me a current wide receiver",
        "Give me a current tight end",
        "Give me an current offensive lineman",
        "Give me a current defensive lineman",
        "Give me a current linebacker",
        "Give me a current cornerback",
        "Give me a current safety",
        "Give me a current kicker or punter",
        "Give me an NFL stadium",
        "Give me an NFL team",
        "Give me an NFL coach",
        "Give me a college football program",
        "Give me a team's fanbase",
        "Give me a team's uniform",
        "Give me a rivalry game",
        "Give me a tailgating tradition",
        "Give me a Super Bowl host city",
        "Give me a college stadium",
        "Give me a Super Bowl moment",
        "Give me a historic NFL player",
        "Give me a Hall of Famer",
        "Give me a bust or overhyped player",
        "Give me an MVP winner",
        "Give me a current coach",
        "Give me a draft class",
        "Give me an NFL mascot",
        "Give me a team logo",
        "Give me a commentator or analyst",
        "Give me a fantasy football pick",
        "Give me a touchdown celebration",
        "Give me a rule in football",
        "Give me a piece of football equipment",
        "Give me a sports video game",
        "Give me a sports movie",
    ];

    const options: option[] = useMemo(
        () => allQuestions.map(q => ({ value: q, label: q })),
        []
    );

    const [selectedOption, setSelectedOption] = useState<option | null>(null);
    const [asked, setAsked] = useState<option[]>([]);
    const [value, setValue] = useState<number>(50);
    const [correct, setCorrect] = useState(() => Math.floor(Math.random() * 100));
    const [aiReponse, setAiResponse] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [guessText, setGuessText] = useState('');
    const [answers, setAnswers] = useState<string[]>([]);


    async function callOpenAIAPI(question: string) {
        const prompt = `
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

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [
                    { role: "system", content: prompt },
                ],
                temperature: 0.9,
                top_p: 0.95,
                max_tokens: 20,
            }),
        });

        const data = await res.json();
        const text: string = data.choices?.[0]?.message?.content?.trim() ?? "";
        setAiResponse(prev => [...prev, text]);  // now type checks
        return text;
    }

    async function questionSelected(option: option | null) {
        if (!option) return;

        const idx = asked.length;

        setAsked(prev => [...prev, option]);
        setSelectedOption(null);

        setAnswers(prev => [...prev, "Hmmm… thinking"]);

        try {
            const text = await callOpenAIAPI(option.value);
            setAnswers(prev => {
                const copy = [...prev];
                copy[idx] = text || "…";
                return copy;
            });
        } catch {
            setAnswers(prev => {
                const copy = [...prev];
                copy[idx] = "Error getting answer";
                return copy;
            });
        }
        checkGuess();
    }

    function checkGuess() {
        const diff = Math.abs(value - correct);
        if (diff === 0) {
            setGuessText('Wow! You got it right on the dot! Great work!');
        } else if (diff <= 5) {
            setGuessText('Spot on! You almost got it!');
        } else if (diff <= 10) {
            setGuessText('Almost there! Keep trying!');
        } else if (diff <= 20) {
            setGuessText('Not quite there, but close! Keep trying!');
        } else {
            setGuessText('No where near it! Try again!');
        }
    }

    function resetGame() {
        setIsGameOver(false);
        setAnswers([]);
        setSelectedOption(null);
        setAiResponse([]);
        setAsked([]);
        let randomIndex = Math.floor(Math.random() * 100);
        setCorrect(randomIndex);
        setValue(50);
    }

    return (
        <div className="wavelength">
            <div>
                <h1 style={{ color: "white" }}>Wavelength</h1>
                <h3 style={{ color: "white", width: "600px", marginTop: "-20px" }}>
                    Ask a question and the AI will respond based on the hidden number!
                </h3>

                <div style={{ maxWidth: 520 }}>
                    <Select
                        options={options}
                        value={selectedOption}
                        onChange={async (option) => await questionSelected(option)}
                        placeholder="Ask a question!"
                        isClearable
                        isDisabled={asked.length >= 3}
                    />
                </div>

                {asked.length > 0 && (
                    <div className="wavelength-answers">
                        {asked.map((q, i) => (
                            <ChatBox
                                key={i}
                                message={`Answer ${i + 1} for ${q.label} is: ${answers[i] ?? "Hmmm… thinking"}`}
                            />
                        ))}
                        {asked.length === 3 && (
                            <div>
                                <h4 style={{ color: "white" }}>Thats all your questions! Lock in a guess now!</h4>
                            </div>
                        )}
                    </div>
                )}

                {isGameOver && <div className="wavelength-game-over">
                    <h3>{guessText}</h3>
                    <h5>The correct number was {correct}</h5>
                    <button onClick={resetGame}>Play Again</button>
                </div>}
            </div>

            <div className="scale">
                <Scale value={value} setValue={setValue} totalGuesses={asked.length} setIsGameOver={setIsGameOver} checkGuess={checkGuess}/>
            </div>

        </div>
    );
}

export default Wavelength;