import { useEffect, useState } from 'react'
import BrandMark from './BrandMark'
import { NAV_LINKS } from '../../data/landing'

export default function Navbar({ onLogin, onRegister }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the nav link of the section currently in view
  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" onClick={close}><BrandMark /></a>

      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={l.href} className={active === l.id ? 'active' : ''}>{l.label}</a>
        ))}
      </div>

      <div className="nav-cta">
        <button className="btn btn-ghost" onClick={onLogin}>Log in</button>
        <button className="btn btn-primary" onClick={onRegister}>Get started →</button>
      </div>

      <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <button className="btn btn-outline" onClick={() => { close(); onLogin() }}>Log in</button>
          <button className="btn btn-primary" onClick={() => { close(); onRegister() }}>Get started →</button>
        </div>
      )}
    </nav>
  )
}
