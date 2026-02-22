import { useState, useRef, useEffect } from "react";
import { messages as mockMessages } from "../services/mockApi.js";

const Chat = () => {
    const [messages, setMessages] = useState(mockMessages);
  const [text, setText] = useState("")
  
  const chatBodyRef= useRef(null)
    
    const handleChangeText = (event) => {
        setText(event.target.value)
  }
  
  const handleKeyDown = (event) => {
    
    if (event.key === "Enter") { sendMessage() }
  
}

    const sendMessage = () => {
        const currentTime= new Date()
        const newMessage = {
            id: messages.length + 1,
            author: "Me",
            time: currentTime.getHours() + ":" + currentTime.getMinutes(),
            text: text,
        }

        setMessages([...messages, newMessage])
        setText("")
    }

  useEffect(() => {
    if(chatBodyRef.current){chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight}
  },[messages])
  return (
    <section className="panel-chat">
      <header>
        <h2>Karina</h2>
        <p>Online</p>
      </header>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((message) => (
          <div key={message.id}
            className={`message ${message.author === "Me" ? "me" : "recieved"}`}>
            <p>
              {message.text}
            </p>
            <p className="timestamp">{message.time}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Escribe un mensaje..." onChange={handleChangeText} value={text} onKeyDown={handleKeyDown} />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </section>
  );
};

export { Chat };
