import { useEffect, useRef, useState } from 'react'

/* Counts from 0 → end when it scrolls into view. Reduced-motion safe. */
export default function CountUp({ end, duration = 1500, format, className }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  const fmt = format || ((n) => Math.round(n).toLocaleString('en-IN'))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(end); return }

    let raf = 0
    let start = 0
    let done = false
    const step = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      setV(end * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done) { done = true; raf = requestAnimationFrame(step); io.disconnect() }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [end, duration])

  return <span ref={ref} className={className}>{fmt(v)}</span>
}
