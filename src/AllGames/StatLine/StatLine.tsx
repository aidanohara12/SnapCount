import './StatLine.css'
import { statLinePlayers } from '../../Models/StatLine'
import type { StatLinePlayer } from '../../Models/StatLine'
import StatLineTable from './StatLineTable/StatLineTable';
import { use, useEffect, useMemo, useState } from 'react';
import Select from 'react-select';

type Option = { value: StatLinePlayer; label: string };

function StatLine() {
    const players = statLinePlayers
    const allPlayers: StatLinePlayer[] = [];
    const [player, setPlayer] = useState<StatLinePlayer>(players[0]);
    const [selectedOption, setSelectedOption] = useState<{ value: StatLinePlayer; label: string } | null>(null);
    const [guessedPlayer, setGuessedPlayer] = useState<StatLinePlayer | null>(null);
    const [wonGame, setWonGame] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [guesses, setGuesses] = useState(0)

    const uniquePlayers = useMemo<StatLinePlayer[]>(() => {
        // pick your uniqueness key; here we use full name + position
        const seen = new Set<string>();
        const out: StatLinePlayer[] = [];
        for (const p of players) {
            const key = `${p.firstName}|${p.lastName}|${p.position}`;
            if (!seen.has(key)) {
                seen.add(key);
                out.push(p);
            }
        }
        return out;
    }, [players]);

    function getRandomPlayer() {
        const randomIndex = Math.floor(Math.random() * players.length);
        setPlayer(players[randomIndex]);
        return players[randomIndex];
    }

    function shuffle<T>(array: T[]): T[] {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function selectChanged(option: Option | null) {
        if (!option) return;
        setSelectedOption(null);
        setGuessedPlayer(option.value);
        checkGuess(option.value);
    }

    function checkGuess(picked: StatLinePlayer) {
        setGuesses(prev => {
            const next = prev + 1;

            const correct =
                picked.firstName === player.firstName &&
                picked.lastName === player.lastName;

            if (correct) {
                setWonGame(true);
                setIsGameOver(true);
            } else if (next >= 3) {
                setWonGame(false);
                setIsGameOver(true);
            } else {
                setWonGame(false);
                setIsGameOver(false);
            }

            return next;
        });
    }


    useEffect(() => {
        getRandomPlayer();
    }, []);

    function checkPosition(a: StatLinePlayer) {
        if (player.position === 'WR' || player.position === 'TE') {
            return a.position === 'WR' || a.position === 'TE';
        } else {
            return a.position === player.position;
        }
    }

    const options = useMemo(
        () =>
            shuffle(
                [...uniquePlayers]
                    .filter((a) => checkPosition(a))
                    .map(p => ({ value: p, label: `${p.firstName} ${p.lastName}` }))
            ),
        [uniquePlayers, player]
    );

    
    function resetGame() {
        setGuesses(0);
        setWonGame(false);
        setIsGameOver(false);
        setSelectedOption(null);
        getRandomPlayer();
    }


    return (
        <div className="statline">
            <h2>StatLine</h2>
            <h4>Try and guess the player based on their stat line!</h4>

            <div className='statline-table-container'>
                <StatLineTable player={player} guesses={guesses} isGameOver={isGameOver} />
            </div>

            <div className='statline-search'>
                <Select
                    options={options}
                    value={selectedOption}
                    placeholder="Search a player..."
                    onChange={selectChanged}
                    isClearable
                    isDisabled={(guesses >= 3) || isGameOver}
                />
            </div>

            <div className='statline-guesses'>
                {!isGameOver && <div className='statline-guesses'>
                    <h4>You have {3 - guesses} guesses left</h4>
                </div>}

                {isGameOver && <div className='statline-game-over'>
                    {wonGame && <div className='statline-game-over'>
                        <h3>Game Over! You Win!</h3>
                        <h5 style={{color: "black", textAlign:"center"}}>The correct player was {player.firstName} {player.lastName}</h5>
                        <button onClick={resetGame}>Play Again</button>
                    </div>}
                    {!wonGame && <div className='statline-game-over'>
                        <h3>Game Over - You Lose :(</h3>
                        <h4 style={{color: "black", textAlign:"center"}}>The correct player was {player.firstName} {player.lastName}</h4>
                        <button onClick={resetGame}>Play Again</button>
                    </div>}
                </div>}
            </div>

        </div>
    )
}

export default StatLine