import React, { useState, useEffect } from 'react';
import ChatCard from "./ChatCard"
import ChatroomManager from "../../modules/ChatManager"

const ChatList = (props) => {
    const [messages, setMessages] = useState([]);
    const getMessages = () => {
        return MessageManager.getAll().then(messagesFromAPI => {
          setMessages(messagesFromAPI)
        });
    };

    useEffect(() => {
        getMessages();

    }, [])

    return (
      <>
      <section className="section-content">
        <button type="button"
          className="btn"
        onClick={() => {props.history.push("/messages/new")}}>
          Add Message
        </button>
      </section>
        <div className="container-card">
          {messages.map(message => <MessageCard
          key={message.id}
          message={message}
          {...props} 
          />)}
        </div>
        </>
    )
}
export default MessageList