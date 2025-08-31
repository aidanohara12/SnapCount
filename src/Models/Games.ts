import HigherOrLower from '../Assets/GameLogos/HigherOrLower.png';
import GuessThePlayer from '../Assets/GameLogos/GuessThePlayer.png';
import OnTheClock from '../Assets/GameLogos/OnTheClock.png';
import StatLine from '../Assets/GameLogos/StatLine.png';
import Wavelength from '../Assets/GameLogos/Wavelength.png';
import GuessTheCollege from '../Assets/GameLogos/GuessTheCollege.png';

export interface Game {
    id: number
    name: string
    image: string

}

export const games: Game[] = [
    {
        id: 1,
        name: 'Guess the Player',
        image: GuessThePlayer
    },
    {
        id: 2,
        name: 'Wavelength',
        image: Wavelength
    },
    {
        id: 3,
        name: 'Guess The College',
        image: GuessTheCollege
    },
    {
        id: 4,
        name: 'StatLine',
        image: StatLine
    },
    {
        id: 5,
        name: 'On The Clock',
        image: OnTheClock
    },
    {
        id: 6,
        name: 'Higher or Lower',
        image: HigherOrLower
    },
]