import { STATS } from '../../data/landing'
import useReveal from '../../hooks/useReveal'
import useCountUp from '../../hooks/useCountUp'

function StatItem({ value, decimals = 0, prefix = '', suffix = '', label, start }) {
  const v = useCountUp(value, start)
  const text = v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  return (
    <div className="stat-item">
      <div className="n">{prefix}{text}{suffix}</div>
      <div className="l">{label}</div>
    </div>
  )
}

export default function Stats() {
  const [ref, shown] = useReveal(0.3)
  return (
    <section className="section" id="stats">
      <div ref={ref} className="stats-band">
        {STATS.map((s) => <StatItem key={s.label} {...s} start={shown} />)}
      </div>
    </section>
  )
}
