import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SHOW_MARKETING } from '../config'
import './Navbar.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const allLinks = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/erp', label: 'ERP' },
  { to: '/services', label: 'Services', marketing: true },
  { to: '/portfolio', label: 'Work', marketing: true },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing', marketing: true },
  { to: '/contact', label: 'Contact' },
]
const links = allLinks.filter(l => SHOW_MARKETING || !l.marketing)

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
      <div className="container-content navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="22" height="22">
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#14130F" />
              <path d="M10 11h12l-9 10h9" stroke="#F1ECDF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="navbar__name">Zenvora <span className="navbar__name-italic">Labs</span></span>
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
          <Link to="/contact" className="btn btn-cta navbar__cta-mobile" onClick={() => setOpen(false)}>
            Get a proposal
          </Link>
        </div>

        <div className="navbar__right">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar__phone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 95177 44959
          </a>
          <Link to="/contact" className="btn btn-cta navbar__cta">Get a proposal</Link>
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
