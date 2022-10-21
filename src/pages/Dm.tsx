import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Dm({ currentUser, dmCounter, setDmCounter }) {
  const [messages, setMessages] = useState([]);

  window.messages = messages;

  const params = useParams();

  useEffect(() => {
    fetch(
      `http://localhost:5000/messages/pupil/${params.itemId}/?user=${currentUser.id}`
    )
      .then((resp) => resp.json())
      .then((data) => setMessages(data));
  }, [dmCounter]);

  const chat = currentUser.class.pupils.find(
    (pupil) => pupil.id === Number(params.itemId)
  );

  return (
    <section className="dm">
      <div className="display-messages">
        <div className="dm-profile">
          <img src={chat.image} className="profile-pic"></img>
          <h3>{chat.name}</h3>
        </div>
        <div className="message-area">
          {messages.map((item) => (
            <p
              className={
                currentUser.id === item.senderId
                  ? "message user"
                  : "message other"
              }
            >
              {item.message}
            </p>
          ))}
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetch("http://localhost:5000/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: event.target.message.value,
                recieverId: chat.id,
                senderId: currentUser.id,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                setDmCounter(dmCounter + 1);
              });
            event.target.reset();
          }}
        >
          <input name="message" placeholder="Type a message..."></input>
        </form>
      </div>
    </section>
  );
}
