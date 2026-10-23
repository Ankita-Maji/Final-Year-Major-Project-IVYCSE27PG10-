import { TESTIMONIALS } from '../../data/landing'
import useReveal from '../../hooks/useReveal'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

export default function Testimonials() {
  const [ref, shown] = useReveal()
  return (
    <section className="section" id="testimonials">
      <div className="section-head">
        <div className="eyebrow" style={{ margin: '0 auto 16px', width: 'fit-content' }}>Farmers</div>
        <h2>Trusted across 14 states</h2>
      </div>
      <div ref={ref} className="test-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className={`test-card reveal${shown ? ' in' : ''}`} style={{ transitionDelay: `${i * 90}ms` }}>
            <div className="test-stars">★★★★★</div>
            <p>“{t.quote}”</p>
            <div className="test-person">
              <div className="avatar initials">{initials(t.name)}</div>
              <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
