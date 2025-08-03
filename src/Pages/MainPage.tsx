import './MainPage.css'
import Header from '../Components/Header/Header'
import GameOptions from '../Components/GameOptions/GameOptions'

function MainPage() {
    return (
        <div className="parent">
            <div className="header">
                <Header />
            </div>
            <div className="game-options">
                <GameOptions />
            </div>
            <div className="game-board">3</div>
            <div className="footer">7</div>
        </div>
    )
}

export default MainPage