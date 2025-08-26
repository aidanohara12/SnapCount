import './GuessTheCollege.css'
import { useEffect, useRef, useState } from 'react'
import { players } from '../../Models/Players'
import DisplayPlayer from '../DisplayPlayer'

function GuessTheCollege() {
    const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
    const [collegeOptions, setCollegeOptions] = useState<string[]>([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    let textToCopy = useRef('');

    // Fisher–Yates
    function shuffle<T>(arr: T[]): T[] {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function pickRandomPlayer() {
        return players[Math.floor(Math.random() * players.length)];
    }

    function uniqueOptionsFor(playerCollege: string, n = 4): string[] {
        const opts = new Set<string>([playerCollege]);
        while (opts.size < n) {
            opts.add(players[Math.floor(Math.random() * players.length)].college);
        }
        return shuffle([...opts]);
    }

    function startRound(restart: boolean) {
        if (restart) {
            setCurrentStreak(0);
        }
        const p = pickRandomPlayer();
        setSelectedPlayer(p);
        setCollegeOptions(uniqueOptionsFor(p.college, 4));
        setIsGameOver(false);
    }

    useEffect(() => {
        startRound(false);
    }, []);

    function checkGuess(college: string) {
        if (college !== selectedPlayer.college) {
            setIsGameOver(true);
            textToCopy.current = `SNAPCOUNT\nGuess The College\nI got a streak of: ${currentStreak}!\n\nPlay Here at ${window.location.href}!`
            return;
        }
        setCurrentStreak(s => s + 1);
        startRound(false);
    }

    function copyText() {
        navigator.clipboard.writeText(textToCopy.current)
    }

    return (
        <div className='guess-the-college'>
            <h1>Guess the College</h1>
            <h3>Try and guess the player's college!</h3>
            <h3>Streak: {currentStreak}</h3>

            <div className='guess-the-college-display'>
                <DisplayPlayer
                    name={selectedPlayer.lastName}
                    number={selectedPlayer.jerseyNumber}
                    primaryColor={selectedPlayer.teamPrimaryColor}
                    secondaryColor={selectedPlayer.teamSecondaryColor}
                />

                {!isGameOver && <div className='guess-the-college-options'>
                    <h3>What college did {selectedPlayer.firstName} {selectedPlayer.lastName} play for?</h3>
                    <div className='guess-the-college-buttons'>
                        {collegeOptions.map((option, i) => (
                            <button key={i} onClick={() => checkGuess(option as string)} disabled={isGameOver}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>}
                {isGameOver && <div className='guess-the-college-game-over'>
                    <h3>Game Over - You Lose :(</h3>
                    <h5>The correct college was {selectedPlayer.college}</h5>
                    <div className='guess-the-college-buttons'>
                        <button onClick={() => startRound(true)}>Play Again</button>
                        <button onClick={() => copyText()}>Copy Score!</button>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default GuessTheCollege;