import './DraftCard.css'
import type { OnTheClockPlayer } from '../../../Models/OnTheClockPlayer'
import DraftLogo from '../../../Assets/DraftLogo.png'

type DraftCardProps = {
    player: OnTheClockPlayer
}

function DraftCard({ player }: DraftCardProps) {
    return (
        <div className='draft-card'>
            <div className='draft-card-background'>
                <img src={DraftLogo} alt="DraftLogo" />
                <div className='draft-card-info'>
                    <div className='round'>
                        <h3>Round #:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.round}</h3>
                        </div>
                    </div>
                    <div className='team'>
                        <h3>Choice From:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.team}</h3>
                        </div>
                    </div>
                    <div className='name'>
                        <h3>Name:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.firstName} {player.lastName}</h3>
                        </div>
                    </div>
                    <div className='position'>
                        <h3>Position:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.position}</h3>
                        </div>
                    </div>
                    <div className='college'>
                        <h3>School:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.college}</h3>
                        </div>
                    </div>
                    <div className='pick'>
                        <h3>Overall:</h3>
                        <div className='underline'>
                            <h3 className='text'>{player.pick}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DraftCard