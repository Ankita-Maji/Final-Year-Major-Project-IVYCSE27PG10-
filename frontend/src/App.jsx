import { useState } from 'react'
import LandingPage from './pages/LandingPage'

// Week 1: only the landing page exists. When react-router is added (Week 2+),
// replace these toast handlers with navigate('/login'), navigate('/register'), etc.
export default function App() {
  const [toast, setToast] = useState('')

  const soon = (what) => () => {
    setToast(`${what} — coming in a later week`)
    setTimeout(() => setToast(''), 2200)
  }

  return (
    <>
      <LandingPage onLogin={soon('Login page')} onRegister={soon('Register page')} onDemo={soon('Dashboard demo')} />
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  )
}
