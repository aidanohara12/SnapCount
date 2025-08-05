import logo from '../../Assets/SnapCountLogo.png'
import './Header.css'

function Header() {
    return (
        <div className='header-div'>
            <img className="logo" src={logo} alt="SnapCount Logo" />
        </div>
    )
}

export default Header