import './MainPage.css'
import Header from '../Components/Header/Header'
import GameOptions from '../Components/GameOptions/GameOptions'
import { useState } from 'react'
import type { Game } from '../Models/Games'
import { games } from '../Models/Games'
import GameBoard from '../Components/GameBoard/GameBoard'

function MainPage() {
    const [currentGame, setCurrentGame] = useState<Game>(games[0])
    return (
        <div className="parent">
            <div className="header">
                <Header />
            </div>
            <div className="game-options">
                <GameOptions setCurrentGame={setCurrentGame} />
            </div>
            <div className="game-board">
                <GameBoard game={currentGame} />
            </div>
        </div>
    )
}

export default MainPage