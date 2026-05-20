import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP = 'https://wa.me/919876543210'
const EMAIL = 'hello@zenvoralabs.xyz'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">◆</span>
              Zenvora Labs
            </div>
            <p className="footer__tagline">Website in 48 Hours. AI That Works For You.</p>
            <p className="footer__serving">Serving businesses in Ludhiana, Jaipur & across India</p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Get In Touch</h4>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Zenvora Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
