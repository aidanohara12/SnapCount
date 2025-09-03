import higherLogo       from '@/assets/GameLogos/HigherOrLower.png'
import GuessThePlayer   from '@/assets/GameLogos/GuessThePlayer.png'
import OnTheClock       from '@/assets/GameLogos/OnTheClock.png'
import StatLine         from '@/assets/GameLogos/StatLine.png'
import Wavelength       from '@/assets/GameLogos/Wavelength.png'
import GuessTheCollege  from '@/assets/GameLogos/GuessTheCollege.png'
import ContactUs        from '@/assets/ContactUs.png'
import WheredHePlay     from '@/assets/GameLogos/WhereHePlay.png'

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
        image: higherLogo
    },
    {
        id: 7, 
        name: 'Where\'d He Play',
        image: WheredHePlay
    },
    {
        id: 8,
        name: 'Contact Us',
        image: ContactUs
    }
]