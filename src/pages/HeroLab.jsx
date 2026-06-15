import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroLab.css'

/*
 * EXPERIMENT v2 — DRAMATIC cinematic hero (/lab).
 * StringTune-inspired, dialed up: dark cinema palette, mask-wipe headline,
 * cycling accent word, drifting ghost type, inverting cursor ring,
 * aurora + grain + vignette, kinetic ticker, scroll-driven depth zoom.
 * Still JS-light: ONE scroll handler + ONE pointer handler, both rAF-throttled.
 * Fully gated behind prefers-reduced-motion.
 * Local playground only — the real Home page is untouched.
 */

const HEADLINE = [
  ['Performance', 'marketing'],
  ['&', 'AI', 'engineering,'],
]
const LEAD = ['built', 'for']
const CYCLE = ['growth.', 'scale.', 'revenue.', 'results.']
const TICKER = ['Performance marketing', 'AI workflows', 'Paid media at scale', 'Conversion optimisation', 'Predictive bidding', 'Programmatic SEO', 'Creative testing', 'Full-funnel growth', 'RAG agents', 'Server-side tracking']

export default function HeroLab() {
  const rootRef = useRef(null)
  const ctaRef = useRef(null)
  const ringRef = useRef(null)
  const [word, setWord] = useState(0)

  // cycling accent word
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setWord((w) => (w + 1) % CYCLE.length), 2200)
    return () => clearInterval(id)
  }, [])

  // scroll + pointer motion
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let raf = 0
    let pending = false
    const onScroll = () => {
      if (pending) return
      pending = true
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / window.innerHeight, 1)
        root.style.setProperty('--scroll', String(p))
        pending = false
      })
    }

    let rafP = 0
    const onPointer = (e) => {
      cancelAnimationFrame(rafP)
      rafP = requestAnimationFrame(() => {
        const r = root.getBoundingClientRect()
        root.style.setProperty('--mx', ((e.clientX - r.left) / r.width).toFixed(4))
        root.style.setProperty('--my', ((e.clientY - r.top) / r.height).toFixed(4))

        const ring = ringRef.current
        if (ring) ring.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0) translate(-50%, -50%)`

        const cta = ctaRef.current
        if (cta) {
          const cr = cta.getBoundingClientRect()
          const dx = e.clientX - (cr.left + cr.width / 2)
          const dy = e.clientY - (cr.top + cr.height / 2)
          const near = Math.hypot(dx, dy) < 180
          cta.style.transform = near ? `translate(${dx * 0.22}px, ${dy * 0.22}px)` : ''
          if (ring) ring.style.setProperty('--ring-scale', near ? '2.6' : '1')
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer)
    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(rafP)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  let wi = 0
  const renderWords = (line, extra = '') =>
    line.map((w) => (
      <span className={`lab-hero__word${extra}`} style={{ '--i': wi++ }} key={w + wi}>
        {w}
      </span>
    ))

  return (
    <section className="lab-hero" ref={rootRef}>
      {/* inverting cursor ring */}
      <div className="lab-hero__ring" ref={ringRef} aria-hidden="true" />

      {/* parallax background stack */}
      <div className="lab-hero__bg" aria-hidden="true">
        <div className="lab-hero__aurora lab-hero__aurora--a" />
        <div className="lab-hero__aurora lab-hero__aurora--b" />
        <div className="lab-hero__aurora lab-hero__aurora--c" />
        <div className="lab-hero__ghost">STRINGTUNE</div>
        <div className="lab-hero__grain" />
        <div className="lab-hero__vignette" />
      </div>

      <div className="container-content lab-hero__inner">
        <span className="lab-hero__eyebrow">
          <span className="lab-hero__eyebrow-dot" />
          Top-rated AI marketing agency
        </span>

        <h1 className="lab-hero__headline">
          {HEADLINE.map((line, li) => (
            <span className="lab-hero__line" key={li}>
              <span className="lab-hero__line-inner">{renderWords(line)}</span>
            </span>
          ))}
          <span className="lab-hero__line">
            <span className="lab-hero__line-inner">
              {renderWords(LEAD)}
              <span className="lab-hero__cycle" style={{ '--i': wi++ }}>
                {CYCLE.map((c, ci) => (
                  <span
                    key={c}
                    className={`lab-hero__cycle-word${ci === word ? ' is-active' : ''}`}
                  >
                    {c}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </h1>

        <p className="lab-hero__sub">
          We pair senior strategists with custom AI workflows and full-stack engineering to
          ship growth other agencies can&apos;t — across Google, Meta, TikTok and LinkedIn,
          for ambitious brands at home and abroad.
        </p>

        <div className="lab-hero__actions">
          <Link to="/contact" className="lab-hero__cta" ref={ctaRef}>
            Contact now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/services" className="lab-hero__ghost-btn">Explore services</Link>
        </div>
      </div>

      {/* kinetic ticker */}
      <div className="lab-hero__ticker" aria-hidden="true">
        <div className="lab-hero__ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span className="lab-hero__ticker-item" key={i}>
              {t}<span className="lab-hero__ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
