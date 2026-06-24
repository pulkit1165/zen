import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP = 'https://wa.me/919517744959'
const EMAIL = 'growth@zenvoralabs.xyz'
const PHONE = '+91 95177 44959'

const services = [
  { to: '/services#paid', label: 'Performance Marketing' },
  { to: '/services#engineering', label: 'Web & App Engineering' },
  { to: '/services#seo', label: 'SEO & Content' },
  { to: '/services#creative', label: 'Landing Pages & CRO' },
  { to: '/services#analytics', label: 'Analytics & Tracking' },
  { to: '/services#consulting', label: 'Consulting & Training' },
]

const industries = [
  { to: '/services#industries', label: 'D2C & E-commerce' },
  { to: '/services#industries', label: 'B2B SaaS' },
  { to: '/services#industries', label: 'Home Services' },
  { to: '/services#industries', label: 'Health & Fitness' },
  { to: '/services#industries', label: 'Hospitality' },
  { to: '/services#industries', label: 'Lead Generation' },
]

const company = [
  { to: '/portfolio', label: 'Case Studies' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Careers' },
]

const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 13.02h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
]

const offices = [
  { city: 'Mohali', country: 'India', detail: 'Studio HQ · UTC+5:30' },
  { city: 'Sydney', country: 'Australia', detail: 'Partner desk · UTC+10' },
  { city: 'London', country: 'United Kingdom', detail: 'Partner desk · UTC+0' },
]

const markets = ['🇮🇳 IN', '🇦🇺 AU', '🇨🇦 CA', '🇺🇸 US', '🇬🇧 UK', '🇦🇪 UAE', '🇸🇬 SG']

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="grid-bg grid-bg--full" aria-hidden="true" />
      <div className="container-content footer__container">

        {/* CTA strip */}
        <div className="footer__cta">
          <div>
            <p className="type-eyebrow">Ready when you are</p>
            <h3 className="type-h2 footer__cta-title">
              Let&apos;s build the thing — <span className="serif-italic">and then make it grow.</span>
            </h3>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn--cream btn-lg">Get a proposal</Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--cream-outline btn-lg">WhatsApp us</a>
          </div>
        </div>

        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="28" height="28">
                  <rect x="2" y="2" width="28" height="28" rx="6" fill="#F1ECDF" />
                  <path d="M10 11h12l-9 10h9" stroke="#14130F" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Zenvora <span className="footer__logo-italic">Labs</span></span>
            </Link>
            <p className="footer__tagline">
              Performance marketing and AI engineering for ambitious brands. Built in India, shipped worldwide.
            </p>

            <div className="footer__contact">
              <a href={`mailto:${EMAIL}`} className="footer__contact-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="footer__contact-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
            </div>

            <div className="footer__social">
              {socials.map(s => (
                <a key={s.name} href={s.href} className="footer__social-link" aria-label={s.name} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              {services.map(link => (
                <Link key={link.label} to={link.to}>{link.label}</Link>
              ))}
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Industries</h4>
              {industries.map(link => (
                <Link key={link.label} to={link.to}>{link.label}</Link>
              ))}
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Studio</h4>
              {company.map(link => (
                <Link key={link.label} to={link.to}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__offices">
          <h4 className="footer__col-title">Where we work</h4>
          <div className="footer__offices-grid">
            {offices.map(o => (
              <div className="footer__office" key={o.city}>
                <div className="footer__office-city">{o.city}, {o.country}</div>
                <div className="footer__office-detail">{o.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__markets">
          <span className="type-label">Markets we serve</span>
          <div className="footer__markets-list">
            {markets.map(m => (
              <span key={m} className="footer__market">{m}</span>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Zenvora Labs. Built with care.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy</Link>
            <span>·</span>
            <Link to="/terms">Terms</Link>
            <span>·</span>
            <Link to="/cookies">Cookies</Link>
            <span>·</span>
            <Link to="/dpa">DPA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
