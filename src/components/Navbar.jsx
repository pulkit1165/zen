import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" id="nav-logo">
          <div className="navbar__logo-mark">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="url(#logo-grad)" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="20" y2="20">
                  <stop stopColor="#4f7df5" />
                  <stop offset="1" stopColor="#7c5bf5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">Zenvora</span>
        </a>

        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link" id={`nav-${link.label.toLowerCase()}`}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="tel:+918264449956" className="navbar__phone" id="nav-phone" aria-label="Call us">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
        <a href="#contact" className="btn-primary navbar__cta" id="nav-cta">
          Book a Call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle navigation"
        >
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="tel:+918264449956" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
              📞 Call Now
            </a>
            <a href="mailto:growth@zenvoralabs.xyz" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
              ✉️ growth@zenvoralabs.xyz
            </a>
            <a href="#contact" className="btn-primary" style={{ marginTop: 16 }} onClick={() => setMobileOpen(false)}>
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
