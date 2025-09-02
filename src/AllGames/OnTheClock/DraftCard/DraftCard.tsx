import './DraftCard.css'
import type { OnTheClockPlayer } from '../../../Models/OnTheClockPlayer'
import DraftLogo from '@/assets/DraftLogo.png';

type DraftCardProps = {
    player: OnTheClockPlayer
    isGameOver: boolean
    guesses: number
}

function DraftCard({ player, isGameOver, guesses }: DraftCardProps) {

    function displayName(name: string) {
        if(isGameOver) {
            return name;
        } else if(guesses >= 2) {
            return name[0] + '?????';
        } else {
          return '????';
        }
    }

    return (
        <div className='draft-card'>
            <div className='draft-card-background'>
                <img src={DraftLogo} alt="DraftLogo" />
                <h3>{player.year} Draft</h3>
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
                            <h3 className='text-team'>{player.team}</h3>
                        </div>
                    </div>
                    <div className='playerName'>
                        <h3>Name:</h3>
                        <div className='underline'>
                            <h3 className='text-name'>{displayName(player.firstName)} {displayName(player.lastName)}</h3>
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