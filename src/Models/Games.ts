import HigherOrLower from '../Assets/GameLogos/HigherOrLower.png';
import GuessThePlayer from '../Assets/GameLogos/GuessThePlayer.png';
import Matching from '../Assets/GameLogos/Matching.png';
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
        name: 'Higher or Lower',
        image: HigherOrLower
    },
    {
        id: 2,
        name: 'Guess the Player',
        image: GuessThePlayer
    },
    {
        id: 3,
        name: 'Wavelength',
        image: Wavelength
    },
    {
        id: 4,
        name: 'Guess The College',
        image: GuessTheCollege
    },
    {
        id: 5,
        name: 'StatLine',
        image: StatLine
    },
    {
        id: 6,
        name: 'Matching',
        image: Matching
    },
]