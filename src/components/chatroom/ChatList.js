import React, { useState, useEffect } from 'react';
import ChatCard from "./ChatCard"
import ChatManager from "../../modules/ChatManager"

const ChatList = (props) => {
    const [chat, setChat] = useState([]);
    const getChat = () => {
        return ChatManager.getAll().then(chatFromAPI => {
          setChat(chatFromAPI)
        });
    };

    useEffect(() => {
        getChat();

    }, [])

    return (
      <>
      <section className="section-content">
        <button type="button"
          className="btn"
        onClick={() => {props.history.push("/chatroom/new")}}>
          Add Message
        </button>
      </section>
        <div className="container-card">
          {chat.map(chat => <ChatCard
          key={chat.id}
          chat={chat}
          {...props} 
          />)}
        </div>
        </>
    )
}
export default ChatList