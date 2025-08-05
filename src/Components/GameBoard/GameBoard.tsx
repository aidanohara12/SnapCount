import './GameBoard.css'
import type { Game } from '../../Models/Games'
import HigherOrLower from '../../AllGames/HigherOrLower/HigherOrLower'
import TheLadder from '../../AllGames/TheLadder/TheLadder'
import Wavelength from '../../AllGames/Wavelength/Wavelenth'
import Matching from '../../AllGames/Matching/Matching'
import GuessThePlayer from '../../AllGames/GuessThePlayer/GuessThePlayer'
import Grid from '../../AllGames/Grid/Grid'

type gameBoardProps = {
    game: Game
}

function GameBoard({game}: gameBoardProps) {
    if(game.id === 1) {
        return <HigherOrLower />
    }
    else if(game.id === 2) {
        return <TheLadder />
    }
    else if(game.id === 3) {
        return <Wavelength />
    }
    else if(game.id === 4) {
        return <Matching />
    }
    else if(game.id === 5) {
        return <GuessThePlayer />
    }
    else if(game.id === 6) {
        return <Grid />
    }
}

export default GameBoard