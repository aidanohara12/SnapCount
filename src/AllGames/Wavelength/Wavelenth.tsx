import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import ChatBox from "./ChatBox/ChatBox";
import Scale from "./Scale/Scale";
import "./Wavelength.css";

type option = { value: string; label: string };

function Wavelength() {
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



    const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

    async function callOpenAIAPI(question: string, correct: number) {
        const res = await fetch(`${API_BASE}/api/wavelength`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, correct }),
        });

        // read ONCE
        const bodyText = await res.text();

        if (!res.ok) {
            try {
                const { error } = JSON.parse(bodyText);
                throw new Error(error || bodyText);
            } catch {
                throw new Error(bodyText);
            }
        }

        const { text } = JSON.parse(bodyText);
        setAiResponse(prev => [...prev, text]);
        return text;
    }

    async function questionSelected(option: option | null) {
        if (!option) return;

        const idx = asked.length;
        setAsked(prev => [...prev, option]);
        setSelectedOption(null);
        setAnswers(prev => [...prev, "Hmmm… thinking"]);

        try {
            const text = await callOpenAIAPI(option.value, correct); // make sure you pass `correct`
            setAnswers(prev => {
                const copy = [...prev];
                copy[idx] = text || "…";
                return copy;
            });
        } catch (e: any) {
            setAnswers(prev => {
                const copy = [...prev];
                copy[idx] = `Error getting answer: ${e?.message ?? ""}`;
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
                    Ask 3 questions and the AI will respond based on the hidden number!
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
                <Scale value={value} setValue={setValue} totalGuesses={asked.length} setIsGameOver={setIsGameOver} checkGuess={checkGuess} />
            </div>

        </div>
    );
}

export default Wavelength;