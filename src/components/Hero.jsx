import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import HeroScene from './HeroScene'
import './Hero.css'

const stats = [
  { value: '10x', label: 'Average ROAS' },
  { value: '94%', label: 'Automation Rate' },
  { value: '3.2M+', label: 'Revenue Generated' },
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      containerRef.current.style.setProperty('--mx', `${x}px`)
      containerRef.current.style.setProperty('--my', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="grid-overlay" />
      <HeroScene />

      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          <span className="label-accent">AI-Powered Growth Infrastructure</span>
        </motion.div>

        <motion.h1
          className="display-xl hero__headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Building Systems For
          <br />
          Companies That Intend
          <br />
          <span className="gradient-text">To Dominate</span>
        </motion.h1>

        <motion.p
          className="body-lg hero__sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          We engineer AI automation, performance marketing, and digital
          infrastructure that scales revenue — not headcount.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a href="#contact" className="btn-primary" id="hero-cta-primary">
            Book Strategy Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services" className="btn-secondary" id="hero-cta-secondary">
            Explore Systems
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {stats.map((s, i) => (
            <div className="hero__stat" key={i}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <div className="hero__scroll-line" />
        <span className="label">Scroll</span>
      </motion.div>
    </section>
  )
}
