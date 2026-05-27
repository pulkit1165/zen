import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP = 'https://wa.me/918264449956'
const EMAIL = 'growth@zenvoralabs.xyz'
const PHONE = '+91 82644 49956'

const services = [
  { to: '/services#web', label: 'Web Development' },
  { to: '/services#backend', label: 'Backend & APIs' },
  { to: '/services#marketing', label: 'Performance Marketing' },
  { to: '/services#seo', label: 'SEO & CRO' },
  { to: '/services#analytics', label: 'Analytics & Tracking' },
]

const company = [
  { to: '/portfolio', label: 'Case Studies' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

const markets = [
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇮🇳', name: 'India' },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
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
            </div>
            <p className="footer__tagline">
              Engineering and performance marketing for ambitious brands. We build the products and run the campaigns that grow them.
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
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              {services.map(link => (
                <Link key={link.to} to={link.to}>{link.label}</Link>
              ))}
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              {company.map(link => (
                <Link key={link.to} to={link.to}>{link.label}</Link>
              ))}
            </div>

            <div className="footer__col footer__col--markets">
              <h4 className="footer__col-title">Markets we serve</h4>
              <div className="footer__markets">
                {markets.map(m => (
                  <span key={m.name} className="footer__market">
                    <span className="footer__market-flag">{m.flag}</span>
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Zenvora Labs. Built with care for global teams.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <span>Studio: Mohali, IN</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
