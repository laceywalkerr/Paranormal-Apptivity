import React from "react"
import "./Chat.css"

const ChatCard = (props) => {
    return (

        <div className="card">
            <div className="card-content">

                <button type="button"
                    onClick={() => props.history.push(`/chatroom/${props.chat.id}/edit`)}>
                    Edit Message
                </button>
                <h3>
                    Message: <span className="card-chat">{props.chat.chat}</span>
                </h3>
            </div>
        </div>
    )
}

export default ChatCard;