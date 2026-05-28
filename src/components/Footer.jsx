import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP = 'https://wa.me/918264449956'
const EMAIL = 'growth@zenvoralabs.xyz'
const PHONE = '+91 82644 49956'

const services = [
  { to: '/services#engineering', label: 'Web & App Engineering' },
  { to: '/services#paid', label: 'Performance Marketing' },
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

const learn = [
  { href: '#', label: 'Growth Playbook' },
  { href: '#', label: 'Engineering Notes' },
  { href: '#', label: 'Free Growth Audit' },
  { href: '#', label: 'CRO Cheat Sheet' },
  { href: '#', label: 'Newsletter' },
]

const offices = [
  { city: 'Mohali', country: 'India', detail: 'Studio HQ · UTC+5:30' },
  { city: 'Sydney', country: 'Australia', detail: 'Partner desk · UTC+10' },
  { city: 'London', country: 'United Kingdom', detail: 'Partner desk · UTC+0' },
]

const markets = [
  { flag: '🇦🇺', name: 'AU' },
  { flag: '🇨🇦', name: 'CA' },
  { flag: '🇺🇸', name: 'US' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇬', name: 'SG' },
  { flag: '🇮🇳', name: 'IN' },
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

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* CTA strip */}
        <div className="footer__cta">
          <div className="footer__cta-text">
            <h3>Let's build the thing — and then make it grow.</h3>
            <p>Book a free 30-minute discovery call. We'll come back with a fixed scope and price in 48 hours.</p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn--gradient btn--lg">Book a discovery call</Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--dark-outline btn--lg">WhatsApp us</a>
          </div>
        </div>

        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="30" height="30">
                  <defs>
                    <linearGradient id="zlg-foot" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="60%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#zlg-foot)" />
                  <path d="M10 11h12l-9 10h9" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Zenvora Labs</span>
            </Link>
            <p className="footer__tagline">
              Engineering and performance marketing for ambitious global brands. We build the products and run the campaigns that grow them.
            </p>

            <div className="footer__contact">
              <a href={`mailto:${EMAIL}`} className="footer__contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="footer__contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="footer__contact-row footer__contact-row--whatsapp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
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
              <h4 className="footer__col-title">Company</h4>
              {company.map(link => (
                <Link key={link.label} to={link.to}>{link.label}</Link>
              ))}
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Learn</h4>
              {learn.map(link => (
                <a key={link.label} href={link.href}>{link.label}</a>
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

        <div className="footer__markets-strip">
          <span className="footer__markets-label">Markets we serve</span>
          <div className="footer__markets-list">
            {markets.map(m => (
              <span key={m.name} className="footer__market-chip">
                <span className="footer__market-flag">{m.flag}</span>
                {m.name}
              </span>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Zenvora Labs. Built with care for global teams.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#">Cookies</a>
            <span>·</span>
            <a href="#">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
