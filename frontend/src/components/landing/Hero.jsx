import { useEffect, useMemo, useState } from 'react'
import { HERO_STATS, SAMPLE_RECOMMENDATIONS as RECS } from '../../data/landing'

const CIRCUMFERENCE = 326.7

export default function Hero({ onRegister, onDemo }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const rec = RECS[idx]

  // random pulsing cells for the background field grid (stable across re-renders)
  const cells = useMemo(
    () => Array.from({ length: 14 }, () => ({
      left: `${20 + Math.random() * 70}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
    })),
    []
  )

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % RECS.length), 4500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <header className="hero" id="top">
      <div className="hero-field-grid" aria-hidden="true">
        {cells.map((c, i) => (
          <div key={i} className="field-cell" style={{ left: c.left, top: c.top, animationDelay: c.delay }} />
        ))}
      </div>

      <div className="hero-copy">
        <div className="eyebrow"><span className="dot" /> AI model live on 40,000+ fields</div>
        <h1>Farming decisions,<br />backed by <em>data</em>,<br />not guesswork.</h1>
        <p>Kisaan.AI reads your soil, sky and market in real time — then tells you exactly what to grow, when to water, and where to sell for the best price.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onRegister}>Start free trial</button>
          <button className="btn btn-outline" onClick={onDemo}>View live demo</button>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((s) => (
            <div key={s.lbl}><div className="num">{s.num}</div><div className="lbl">{s.lbl}</div></div>
          ))}
        </div>
      </div>

      <div className="hero-visual" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="ai-card">
          <div className="ai-card-head">
            <span className="tag">AI Recommendation</span>
            <span className="live"><span className="dot" />Live · Field #A-104</span>
          </div>

          <div className="ring-wrap">
            <svg className="ring pring" viewBox="0 0 120 120">
              <circle className="bg" cx="60" cy="60" r="52" />
              <circle className="fg" cx="60" cy="60" r="52" strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - rec.confidence / 100)} />
            </svg>
            <div className="ring-info">
              <div className="crop">{rec.crop}</div>
              <div className="conf">Confidence <b>{rec.confidence}%</b></div>
            </div>
          </div>

          <div className="mini-grid">
            <div className="mini-stat"><div className="v">{rec.yield}</div><div className="k">Exp. yield/acre</div></div>
            <div className="mini-stat"><div className="v">{rec.profit}</div><div className="k">Est. profit</div></div>
            <div className="mini-stat"><div className="v">{rec.ph}</div><div className="k">Soil pH</div></div>
          </div>

          <div className="rec-dots">
            {RECS.map((r, i) => (
              <button key={r.crop} className={i === idx ? 'on' : ''} aria-label={`Show ${r.crop}`} onClick={() => setIdx(i)} />
            ))}
          </div>

          <div className="float-card f1">
            <div className="ic" style={{ background: 'rgba(58,175,224,.15)' }}>☀️</div>
            <div className="txt"><div className="t1">{rec.weather}</div><div className="t2">{rec.weatherNote}</div></div>
          </div>
          <div className="float-card f2">
            <div className="ic" style={{ background: 'rgba(29,184,118,.15)' }}>📈</div>
            <div className="txt"><div className="t1">{rec.price}</div><div className="t2">{rec.priceNote}</div></div>
          </div>
        </div>
      </div>
    </header>
  )
}
