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
            <input type="search" placeholder="Buscar contactos" onChange={handleChange}/>
            <section className="chats-section">
                {
                    filteredUsers.map((user) => (
                        <div className="chat" key={user.name}>
                            <button>{user.name}</button>
                            <small>{user.status}</small>
                        </div>
                    ))
                }

            </section>
        </aside>
    )
}

export {Aside}