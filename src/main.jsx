import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style/main.css"
import { Aside } from './assets/components/Aside'
import { Chat } from './assets/components/Chat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='app'>
    <Aside />
      <Chat />
      </main>
  </StrictMode>,
)
