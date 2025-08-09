import HigherOrLower from '../Assets/GameLogos/HigherOrLower.png';
import GuessThePlayer from '../Assets/GameLogos/GuessThePlayer.png';
import Matching from '../Assets/GameLogos/Matching.png';
import TheLadder from '../Assets/GameLogos/TheLadder.png';
import Wavelength from '../Assets/GameLogos/Wavelength.png';

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
        name: 'The Ladder',
        image: TheLadder
    },
    {
        id: 3,
        name: 'Wavelength',
        image: Wavelength
    },
    {
        id: 4,
        name: 'Matching',
        image: Matching
    },
    {
        id: 5,
        name: 'Guess the Player',
        image: GuessThePlayer
    },
    {
        id: 6,
        name: 'Grid',
        image: ' '
    },
]