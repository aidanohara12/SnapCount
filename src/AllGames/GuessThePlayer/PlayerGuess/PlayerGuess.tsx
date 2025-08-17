import type { Player } from "../../../Models/Players"
import './PlayerGuess.css'

type PlayerGuess = {
    player: Player
    correctPlayer: Player
}

export function PlayerGuess({ player, correctPlayer }: PlayerGuess) {
    return (
        <div className="player-guess">
            <div className="player-card">
                <h1>{player.firstName} {player.lastName}</h1>
            </div>
            <div className="player-card">
                <h1>{player.team.split(' ').pop()}</h1>
            </div>
            <div className="player-card">
                <h1>division</h1>
            </div>
            <div className="player-card">
                <h1>{player.position}</h1>
            </div>
            <div className="player-card">
                <h1>{player.height}</h1>
            </div>
            <div className="player-card">
                <h1>{player.age}</h1>
            </div>
            <div className="player-card">
                <h1>{player.jerseyNumber}</h1>
            </div>
        </div>
    )
}

export default PlayerGuess