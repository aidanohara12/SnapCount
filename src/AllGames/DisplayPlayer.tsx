import './DisplayPlayer.css'

type DisplayPlayerProps = {
    name: string
    number: number
    primaryColor: string
    secondaryColor: string
}

function DisplayPlayer({name, number, primaryColor, secondaryColor}: DisplayPlayerProps) {
    return (
        <div className='jersey' style={{backgroundColor: primaryColor, color: secondaryColor}}>
            <div className="leftSleeve" style={{backgroundColor: primaryColor, color: secondaryColor}}>
                <div className="leftTop" style={{backgroundColor: secondaryColor, color: secondaryColor}}></div>
                <div className="leftBottom" style={{backgroundColor: secondaryColor, color: secondaryColor}}></div>
            </div>
            <div className="rightSleeve" style={{backgroundColor: primaryColor, color: secondaryColor}}>
                <div className="rightTop" style={{backgroundColor: secondaryColor, color: secondaryColor}}></div>
                <div className="rightBottom" style={{backgroundColor: secondaryColor, color: secondaryColor}}></div>
            </div>
            <div style={{color: secondaryColor}} className="name">{name}</div>
            <div style={{color: secondaryColor}}className="number">{number}</div>
        </div>
    )
}

export default DisplayPlayer