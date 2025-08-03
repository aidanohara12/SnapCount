export interface Game {
    id: number
    name: string
    image?: string

}

export const games: Game[] = [
    {
        id: 1,
        name: 'Higher or Lower',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
    {
        id: 2,
        name: 'The Ladder',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
    {
        id: 3,
        name: 'Wavelength',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
    {
        id: 4,
        name: 'Matching',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
    {
        id: 5,
        name: 'Guess the Player',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
    {
        id: 6,
        name: 'Grid',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chess.svg/1200px-Chess.svg.png'
    },
]