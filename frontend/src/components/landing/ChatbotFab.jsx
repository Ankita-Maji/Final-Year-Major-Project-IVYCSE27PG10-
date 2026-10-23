import { useState } from 'react'
import { CHAT_QUICK_REPLIES } from '../../data/landing'

// UI-only for now. In a later week, replace `send` with a call to the backend chatbot API.
export default function ChatbotFab() {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [msgs, setMsgs] = useState([
    { from: 'bot', text: "Namaste! 🌾 I'm Kisaan.AI. Ask me about crops, weather or mandi prices." },
  ])

  const send = (t) => {
    const q = t.trim()
    if (!q) return
    setMsgs((m) => [
      ...m,
      { from: 'me', text: q },
      { from: 'bot', text: 'The AI assistant will be connected once the backend is ready. This is a UI preview.' },
    ])
    setText('')
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Kisaan.AI assistant">
          <div className="chat-head">
            <div><b>Kisaan Assistant</b><small>UI preview · replies are placeholders</small></div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chat-body">
            {msgs.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}
          </div>
          <div className="chat-chips">
            {CHAT_QUICK_REPLIES.map((q) => <button key={q} onClick={() => send(q)}>{q}</button>)}
          </div>
          <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(text) }}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a question…" />
            <button className="btn btn-primary btn-sm" type="submit">Send</button>
          </form>
        </div>
      )}
      <button className="chatbot-fab" aria-label="Open chat assistant" onClick={() => setOpen((o) => !o)}>
        <div className="pulse" />
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </button>
    </>
  )
}
