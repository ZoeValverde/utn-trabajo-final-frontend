import {users} from "../services/mockApi.js"
const Aside = () => {
    return (
        <aside>
            <h1>Aside</h1>
            <input type="search" placeholder="Buscar contactos" />
            <section className="chats-section">
                {
                    users.map((user) => (
                        <div className="chat">
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