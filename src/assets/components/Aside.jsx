import { useState } from "react"
import { users } from "../services/mockApi.js"

const Aside = () => {
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <aside>
            <h1>Aside</h1>
            <input type="search" placeholder="Buscar contactos" onChange={handleChange} />
            <section className="chats-section">
                {
                    filteredUsers.length===0? <p>no hay contactos</p>: 
                    filteredUsers.map((user) => (
                        <button className="chat" key={user.id}>
                            <h3>{user.name}</h3>
                            <h3>{user.status}</h3>
                        </button>
                    ))
                }
            </section>
        </aside>
    )
}

export {Aside}