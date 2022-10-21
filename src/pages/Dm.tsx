import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Dm({ currentUser, dmCounter }) {
  const [messages, setMessages] = useState([]);


  window.messages=messages

const params= useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/messages/pupil/${params.itemId}/?user=${currentUser.id}`)
    .then(resp=>resp.json())
    .then(data=> setMessages(data))
  }, [dmCounter]);

  const chat= currentUser.class.pupils.find(pupil=> pupil.id===Number(params.itemId))

  return (
    <section className="dm">
      <div className="display-messages">
        <div className="dm-profile">
          <img src={chat.image} className="profile-pic"></img>
          <h3>{chat.name}</h3>
        </div>
        <div className="message-area">
            {messages.map(item=> (
                <p className={ currentUser.id===item.senderId ? "message user": "message other"}>{item.message}</p>
            ))}
          
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input placeholder="Type a message..."></input>
        </form>
      </div>
    </section>
  );
}
