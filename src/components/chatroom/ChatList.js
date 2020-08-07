import React, { useState, useEffect } from 'react';
import ChatCard from "./ChatCard"
import ChatManager from "../../modules/ChatManager"
import "./ChatList.css"

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
        <h2>Welcome to the Chatroom</h2>
        <h4>Chat with other users here!</h4>

      </section>
        <div className="container-card">
          {chat.map(chat => <ChatCard
          key={chat.id}
          chat={chat}
          {...props} 
          />)}
        </div>

        <button type="button"
          className="btn"
        onClick={() => {props.history.push("/chatroom/new")}}>
          Add Message
        </button>
        </>
    )
}
export default ChatList