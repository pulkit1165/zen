import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <defs>
                <linearGradient id="zlg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="60%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#zlg)" />
              <path d="M10 11h12l-9 10h9" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="navbar__logo-text">
            Zenvora <span className="navbar__logo-light">Labs</span>
          </span>
        </Link>

        <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar__link ${pathname === link.to ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gradient navbar__cta-mobile"
            onClick={() => setOpen(false)}
          >
            Book a Discovery Call
          </a>
        </div>

        <div className="navbar__right">
          <span className="navbar__region" aria-label="Serving global markets">
            <span className="navbar__region-dot" /> AU · CA · US · UK · UAE · IN
          </span>
          <Link to="/contact" className="btn btn--gradient navbar__cta">
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          id="navbar-toggle"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
