import { useEffect, useState } from 'react'

// Animates 0 -> target once `start` becomes true.
export default function useCountUp(target, start, duration = 1400) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setVal(target); return }
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      setVal(target * (1 - Math.pow(1 - p, 3))) // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return val
}
