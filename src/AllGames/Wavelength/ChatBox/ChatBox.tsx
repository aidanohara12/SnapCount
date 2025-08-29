import './ChatBox.css'

type ChatBoxProps = {
    message: string
}

function ChatBox({message}: ChatBoxProps) {
    return (
        <div className='chat-box'>
            <h3>{message}</h3>
        </div>
    )
}

export default ChatBox