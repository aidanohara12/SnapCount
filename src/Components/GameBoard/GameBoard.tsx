import './GameBoard.css'
import type { Game } from '../../Models/Games'
import HigherOrLower from '../../AllGames/HigherOrLower/HigherOrLower'
import StatLine from '../../AllGames/StatLine/StatLine'
import Wavelength from '../../AllGames/Wavelength/Wavelenth'
import Matching from '../../AllGames/Matching/Matching'
import GuessThePlayer from '../../AllGames/GuessThePlayer/GuessThePlayer'
import GuessTheCollege from '../../AllGames/GuessTheCollege/GuessTheCollege'

type gameBoardProps = {
    game: Game
}

function GameBoard({game}: gameBoardProps) {
    if(game.id === 1) {
        return <HigherOrLower />
    }
    else if(game.id === 2) {
        return <GuessThePlayer />
    }
    else if(game.id === 3) {
        return <Wavelength />
    }
    else if(game.id === 4) {
        return <GuessTheCollege />
    }
    else if(game.id === 5) {
        return <StatLine />
    }
    else if(game.id === 6) {
        return <Matching />
    }
}

export default GameBoard