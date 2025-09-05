import './GameBoard.css'
import type { Game } from '../../Models/Games'
import HigherOrLower from '../../AllGames/HigherOrLower/HigherOrLower'
import StatLine from '../../AllGames/StatLine/StatLine'
import Wavelength from '../../AllGames/Wavelength/Wavelenth'
import OnTheClock from '../../AllGames/OnTheClock/OnTheClock'
import GuessThePlayer from '../../AllGames/GuessThePlayer/GuessThePlayer'
import GuessTheCollege from '../../AllGames/GuessTheCollege/GuessTheCollege'
import ContactUs from '../../Components/ContactUs/ContactUs'
import WhereHePlay from '../../AllGames/WhereHePlay/WhereHePlay'

type gameBoardProps = {
    game: Game
}

function GameBoard({ game }: gameBoardProps) {
    if (game.id === 1) {
        return <GuessThePlayer />
    }
    else if (game.id === 2) {
        return <Wavelength />
    }
    else if (game.id === 3) {
        return <GuessTheCollege />
    }
    else if (game.id === 4) {
        return <StatLine />
    }
    else if (game.id === 5) {
        return <OnTheClock />
    }
    else if (game.id === 6) {
        return <HigherOrLower />
    }  else if (game.id === 7) {
        return <WhereHePlay />
    } else if (game.id === 8) {
        return <ContactUs />
    }
}

export default GameBoard