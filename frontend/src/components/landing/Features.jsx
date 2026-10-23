import { FEATURES } from '../../data/landing'
import useReveal from '../../hooks/useReveal'

export default function Features() {
  const [ref, shown] = useReveal()
  return (
    <section className="section" id="features">
      <div className="section-head">
        <div className="eyebrow" style={{ margin: '0 auto 16px', width: 'fit-content' }}>Platform</div>
        <h2>One system, every decision on the farm</h2>
        <p>From soil to sale — six AI engines working together so you never have to guess.</p>
      </div>
      <div ref={ref} className="feat-grid">
        {FEATURES.map((f, i) => (
          <div key={f.title} className={`feat-card reveal${shown ? ' in' : ''}`} style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="feat-ic" style={{ background: f.tint }}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
