import logo from '@/assets/SnapCountLogo.png'
import './Header.css'
import { useEffect, useState } from 'react'

function Header() {
    // const [showUpdate, setShowUpdate] = useState(false)
    // setTimeout(function () {
    //       if (!showUpdate) {
    //         setShowUpdate(true)
    //         alert("There is a brand new version of SnapCount! Go play the game 'Where'd He Play'!");
    //     }
    // }, 3000);

    return (
        <div className='header-div'>
            <img className="logo" src={logo} alt="SnapCount Logo" />
        </div>
    )
}

export default Header
