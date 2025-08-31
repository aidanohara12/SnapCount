import './OnTheClock.css'
import { useEffect, useState } from 'react'
import { onTheClockPlayers } from '../../Models/OnTheClockPlayer'
import type { OnTheClockPlayer } from '../../Models/OnTheClockPlayer'
import DraftCard from './DraftCard/DraftCard'

function OnTheClock() {
    const randomIndex = Math.floor(Math.random() * onTheClockPlayers.length)
    const [onTheClockPlayer, setOnTheClockPlayer] = useState<OnTheClockPlayer>(onTheClockPlayers[randomIndex])
    return (
        <div>
            <h2>OnTheClock</h2>
            <div>
                <DraftCard player={onTheClockPlayer} />
            </div>
        </div>
    )
}

export default OnTheClock