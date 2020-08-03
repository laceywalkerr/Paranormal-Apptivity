import React, {useState} from 'react';
import ChatManager from "../../modules/ChatManager";
import "./ChatForm.css"

const ChatForm = props => {
    const[chat, setChat] = useState({chat: ""});
    const[isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...chat};
        stateToChange[evt.target.id] = evt.target.value;
        setChat(stateToChange);
        
    };
    const constructNewChat = evt => {
        evt.preventDefault();
        if(chat.chat === "") {
           window.alert("Please fill out input field");
    } else {
        setIsLoading(true);

        ChatManager.post(chat)
        
        .then(() => props.history.push("/chatroom"));
    }
};
return (
    <>
        <form>
            <fieldset>
                <div className="formgrid">
                    < input
                     type="text"
                     required
                     onChange={handleFieldChange}
                     id="chat"
                     placeholder="Chat"
                     />
                     <label htmlFor="chat">Enter Message</label>
                
                    </div>
                    <div className="alignRight">
                        <button 
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewChat}
                        >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
)
}

export default ChatForm