import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const WHATSAPP = 'https://wa.me/919876543210'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-icon">◆</span>
          Zenvora Labs
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
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp navbar__cta-mobile" onClick={() => setOpen(false)}>
            WhatsApp Us
          </a>
        </div>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--primary navbar__cta">
          WhatsApp Us
        </a>

        <button
          className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          id="navbar-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
