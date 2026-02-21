import { useState } from "react"

const Chat = () => {
    const [messages, SetMessages] = useState([])
    return (
        <section className="panel-chat">
            <header>
                <h2>Karina</h2>
                <p>última conexión: hace 1 minuto</p>
            </header>
            <div className="chat-body">

            </div>
            <div className="chat-input">
                <textarea type="text" placeholder="Escribe un mensaje..."></textarea>
                <button>Enviar</button>
            </div>
        </section>
    )
}

export { Chat }