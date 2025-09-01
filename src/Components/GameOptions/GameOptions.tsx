import './GameOptions.css'
import { games, type Game } from '../../Models/Games'
import GameCard from '../GameCard/GameCard'


type gameOptionsProps = {
    setCurrentGame: (game: Game) => void
}

function GameOptions({setCurrentGame}: gameOptionsProps) {
    return (
        <div className='container'>
            <h2 className='title'>Game Options</h2>
            <ul className="gameOptions">
                <li>
                    <button onClick={() => setCurrentGame(games[0])}>
                        <GameCard name={games[0].name} image={games[0].image}/>
                    </button>
                </li>
                <li>
                     <button onClick={() => setCurrentGame(games[1])}>
                        <GameCard name={games[1].name} image={games[1].image}/>
                     </button>
                </li>
                <li>
                    <button onClick={() => setCurrentGame(games[2])}>
                        <GameCard name={games[2].name} image={games[2].image}/>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentGame(games[3])}>
                        <GameCard name={games[3].name} image={games[3].image}/>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentGame(games[4])}>
                        <GameCard name={games[4].name} image={games[4].image}/>
                    </button>
                </li>                
                <li>
                    <button onClick={() => setCurrentGame(games[5])}>
                        <GameCard name={games[5].name} image={games[5].image}/>
                    </button>
                </li>   
                 <li>
                    <button onClick={() => setCurrentGame(games[6])}>
                        <GameCard name={games[6].name} image={games[6].image}/>
                    </button>
                </li> 
            </ul>
        </div>
    )
}

export default GameOptions