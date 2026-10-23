import BrandMark from './BrandMark'
import { FOOTER_COLUMNS } from '../../data/landing'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <BrandMark />
          <p>An intelligent farming and market platform helping every farmer decide with data, not guesswork.</p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => <li key={l}><a href="#" onClick={(e) => e.preventDefault()}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Kisaan.AI — Final Year B.Tech CSE Major Project</span>
        <span>Made for Indian agriculture 🌾</span>
      </div>
    </footer>
  )
}
