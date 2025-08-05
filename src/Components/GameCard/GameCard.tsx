import './GameCard.css'

type gameCardProps = {
    name: string
    image: string
}

function GameCard({ name, image }: gameCardProps) {

    return (
        <div className="gameCard">
            <img className="gameCardImage" src={image} alt={name} />
            <h3 className='gameCardName'>{name}</h3>
        </div>
    )
}

export default GameCard