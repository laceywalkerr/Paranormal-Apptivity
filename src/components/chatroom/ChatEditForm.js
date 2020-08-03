import React, {useState, useEffect } from "react"
import ChatManager from "../../modules/ChatManager"


const ChatEditForm = props => {
  const [chat, setChat] = useState({chat: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = {...chat};
    stateToChange[evt.target.id] = evt.target.value;
    setChat(stateToChange)  
  };

  const UpdateExistingChat = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedChat = {
      id: props.match.params.chatId,
      chat: chat.chat,
    };
    ChatManager.update(editedChat)
    .then(() => props.history.push("/chatroom"))
  }
  useEffect(() => {
    ChatManager.get(props.match.params.chatId)
    .then(chat => {
      setChat(chat);
      setIsLoading(false);
    })
  }, [props.match.params.chatId])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="chat"
              value={chat.chat}
              />
              <label htmlFor="chat">chat</label>
            
              </div>
              <div className="alignRight">
                <button
                 type="button" disabled={isLoading}
                 onClick={UpdateExistingChat}
                 className="btn btn-primary"
                 >Submit</button>
              </div>
        </fieldset>
      </form>
    </>
  )
}

export default ChatEditForm