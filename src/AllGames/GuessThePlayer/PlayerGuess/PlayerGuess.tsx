import type { Player } from "../../../Models/Players"
import './PlayerGuess.css'

type PlayerGuess = {
    player: Player
    correctPlayer: Player
}

export function PlayerGuess({ player, correctPlayer }: PlayerGuess) {
    const offesne = ["QB", "RB", "WR", "TE", "T", "G", "C"];
    const defesne = ["LB", "CB", "S", "DT", "DE", "FS", "SS"];

    function checkPosition(position: string) {
        if (offesne.includes(correctPlayer.position)) {
            return offesne.includes(position);
        }
        else if (defesne.includes(correctPlayer.position)) {
            return defesne.includes(position);
        }
    }

    function inchesFromHeight(h: string): number {
        const m = h.trim().match(/^(\d+)\s*'\s*(\d+)\s*"?$/);
        if (!m) throw new Error(`Invalid height format: "${h}"`); // or return NaN
        const feet = Number(m[1]);
        const inches = Number(m[2]);
        return feet * 12 + inches;
    }

    function checkHeight(player: string, correct: string): number {
        const hp = inchesFromHeight(player);
        const hc = inchesFromHeight(correct);
        const diff = Math.abs(hp - hc);

        if (diff === 0) return 0;      // exact match
        if (diff <= 2) return 1;       // within 2 inches
        return 2;                      // otherwise
    }

    function checkOverUnderHeight(player: string, correct: string): number {
        const hp = inchesFromHeight(player);
        const hc = inchesFromHeight(correct);
        const diff = hp - hc

        if (diff > 0) return 0;      
        if (diff < 0) return 1;
        return 2;           
    }

    function checkNumber(player: number, correct: number): number {
        const diff = Math.abs(player - correct);
        if (diff === 0) return 0;      // exact match
        if (diff <= 2) return 1;       // within 2 years
        return 2;                      // otherwise
    }



    return (
        <div className="player-guess">
            <div className="player-card" style={{ backgroundColor: player.firstName + " " + player.lastName === correctPlayer.firstName + " " + correctPlayer.lastName ? "green" : "#f8f8f8" }}>
                <h1>{player.firstName} {player.lastName}</h1>
            </div>
            <div className="player-card" style={{ backgroundColor: player.team === correctPlayer.team ? "green" : "#f8f8f8" }}>
                <h1>{player.team.split(' ').pop()}</h1>
            </div>
            <div className="player-card" style={{ backgroundColor: player.division === correctPlayer.division ? "green" : player.division.split(' ')[0] === correctPlayer.division.split(' ')[0] ? "yellow" : "f8f8f8" }}>
                <h1>{player.division}</h1>
            </div>
            <div className="player-card" style={{ backgroundColor: player.position === correctPlayer.position ? "green" : checkPosition(player.position) ? "yellow" : "f8f8f8" }}>
                <h1>{player.position}</h1>
            </div>
            <div className="player-card" style={{ backgroundColor: checkHeight(player.height, correctPlayer.height) === 0 ? "green" : checkHeight(player.height, correctPlayer.height) === 1 ? "yellow" : "f8f8f8" }}>
                <h1>{player.height} {checkOverUnderHeight(player.height, correctPlayer.height) === 0 ? "⬇️" : checkOverUnderHeight(player.height, correctPlayer.height) === 1 ? "⬆️" : ""}</h1>
            </div>
            <div className="player-card" style={{ backgroundColor: checkNumber(player.age, correctPlayer.age) === 0 ? "green" : checkNumber(player.age, correctPlayer.age) === 1 ? "yellow" : "f8f8f8" }}>
                <h1>{player.age} {(player.age > correctPlayer.age ? "⬇️" : player.age < correctPlayer.age ? "⬆️" : "")}</h1>
            </div>
            <div className="player-card"style={{ backgroundColor: checkNumber(player.jerseyNumber, correctPlayer.jerseyNumber) === 0 ? "green" : checkNumber(player.jerseyNumber, correctPlayer.jerseyNumber) === 1 ? "yellow" : "f8f8f8" }}>
                <h1>{player.jerseyNumber} {(player.jerseyNumber > correctPlayer.jerseyNumber ? "⬇️" : player.jerseyNumber < correctPlayer.jerseyNumber ? "⬆️" : "")}</h1>
            </div>
        </div>
    )
}

export default PlayerGuess