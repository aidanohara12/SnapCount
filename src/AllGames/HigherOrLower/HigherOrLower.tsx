import { useEffect, useState, useRef, use } from 'react';
import './HigherOrLower.css'
import DisplayPlayer from '../DisplayPlayer';
import { players } from '../../Models/Players'

function HigherOrLower() {
    const [failed, setFailed] = useState(false)
    const [score, setScore] = useState(0)
    const randomNumber = Math.floor(Math.random() * players.length)
    const [currentPlayer, setCurrentPlayer] = useState(players[randomNumber])
    let textToCopy = useRef('');


    function checkGuess(over: boolean) {
        const newPlayer = players[Math.floor(Math.random() * players.length)];
        if (over) {
            if (newPlayer.jerseyNumber >= currentPlayer.jerseyNumber) {
                setCurrentPlayer(newPlayer)
                setScore(score + 1);
                setFailed(false);
            } else {
                setCurrentPlayer(newPlayer)
                setFailed(true);
                textToCopy.current = `SNAPCOUNT\nHigher or Lower\nScore: ${score}\n\nPlay Here at ${window.location.href}!`
            }
        } else {
            if (newPlayer.jerseyNumber <= currentPlayer.jerseyNumber) {
                setCurrentPlayer(newPlayer)
                setScore(score + 1);
                setFailed(false);
            }
            else {
                setCurrentPlayer(newPlayer)
                setFailed(true);
                textToCopy.current = `SNAPCOUNT\nHigher or Lower\nScore: ${score}\n\nPlay Here at ${window.location.href}!`
            }
        }
    }

    function playAgain() {
        setFailed(false)
        setScore(0)
        setCurrentPlayer(players[Math.floor(Math.random() * players.length)])
    }

    function copyText() {
        navigator.clipboard.writeText(textToCopy.current)
    }

    return (
        <div>
            <h1 className='higher-or-lower-title'>Higher Or Lower</h1>
            <h5 className='higher-or-lower-subtitle'>Try and Guess To See if the Next Player is Higher or Lower</h5>
            {!failed ? (
                <div className='outer-container'>
                    <div className='uparrow'>
                        <button onClick={() => checkGuess(true)}>
                            <h1>⬆️</h1>
                        </button>
                    </div>
                    <div className='higher-or-lower'>
                        <DisplayPlayer name={currentPlayer.lastName} number={currentPlayer.jerseyNumber} primaryColor={currentPlayer.teamPrimaryColor} secondaryColor={currentPlayer.teamSecondaryColor} />
                    </div>
                    <div className='downarrow'>
                        <button onClick={() => checkGuess(false)}>
                            <h1>⬇️</h1>
                        </button>
                    </div>
                </div>
            ) : (
                <div className='you-lost'>
                    <h1>You Lost!</h1>
                    <h3>The next player was {currentPlayer.firstName} {currentPlayer.lastName} with the number {currentPlayer.jerseyNumber}</h3>
                    <div>
                        <button onClick={() => playAgain()}>Click Here to Play Again!</button>
                        <button onClick={() => copyText()}>Click Here to Copy Score!</button>
                    </div>
                </div>
            )}

            <div className='score'>
                <h6>Current Score: {score}</h6>
            </div>
        </div>
    )
}

export default HigherOrLower