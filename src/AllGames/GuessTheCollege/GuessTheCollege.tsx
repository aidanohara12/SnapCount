import './GuessTheCollege.css'
import { useState } from 'react'
import { players } from '../../Models/Players'
import DisplayPlayer from '../DisplayPlayer'

function GuessTheCollege() {
    const [allPlayers, setAllPlayers] = useState(players)
    let randomNumber = Math.floor(Math.random() * players.length)
    const [selectedPlayer, setSelectedPlayer] = useState(players[randomNumber])
    const [isGameOver, setIsGameOver] = useState(false)
    const [wonGame, setWonGame] = useState(false)

    function createOptions() {
        let options: String[] = []
        options.push(selectedPlayer.college)
        while (options.length < 4) {
            let randomPlayer = players[Math.floor(Math.random() * players.length)]
            if (!options.includes(randomPlayer.college)) {
                options.push(randomPlayer.college)
            }
        }

        return shuffle(options);
    }

    function shuffle<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className='guess-the-college'>
            <h1>Guess the College</h1>
            <h3>Try and guess the players college!</h3>
            <div className='guess-the-college-display'>
                <DisplayPlayer name={selectedPlayer.lastName} number={selectedPlayer.jerseyNumber} primaryColor={selectedPlayer.teamPrimaryColor} secondaryColor={selectedPlayer.teamSecondaryColor} />
                <h3>What College did {selectedPlayer.firstName + ' ' + selectedPlayer.lastName} play for?</h3>
                <div>
                    {createOptions().map((option, index) => (
                        <button key={index}>{option}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GuessTheCollege