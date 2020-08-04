import React from "react"
import "./Chat.css"

const ChatCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Message: <span className="card-chat">{props.chat.chat}</span>
                </h3>
                <button type="button"
                    onClick={() => props.history.push(`/chatroom/${props.chat.id}/edit`)}>
                    Edit Message
                </button>
            </div>
        </div>
    )
}

export default ChatCard;