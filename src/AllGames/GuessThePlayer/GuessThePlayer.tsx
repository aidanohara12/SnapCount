import { useEffect, useState, useRef, use } from 'react';
import './GuessThePlayer.css'
import type { Player } from '../../Models/Players'
import { players} from '../../Models/Players'
import Select from 'react-select'

function GuessThePlayer() {
    const [failed, setFailed] = useState(false)
    const guessedPlayers: Player[] = []
    const randomNumber = Math.floor(Math.random() * players.length)
    const [correctPlayer, setcorrectPlayer] = useState(players[randomNumber])
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);

    return (
        <div>
            <h1>Guess the Player</h1>
            <h5>Try and Guess the Player!</h5>
            <div>
                <Select options={players.map((player: Player) => ({ value: player.lastName, label: `${player.firstName} ${player.lastName}` }))} />
            </div>
        </div>
    )
}

export default GuessThePlayer