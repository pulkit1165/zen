import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="divider" />
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="navbar__logo" style={{ marginBottom: 12 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="url(#footer-grad)" />
              <defs>
                <linearGradient id="footer-grad" x1="0" y1="0" x2="20" y2="20">
                  <stop stopColor="#4f7df5" />
                  <stop offset="1" stopColor="#7c5bf5" />
                </linearGradient>
              </defs>
            </svg>
            <span className="navbar__logo-text" style={{ fontSize: '1rem' }}>Zenvora Labs</span>
          </div>
          <p className="body" style={{ maxWidth: 300, fontSize: '0.8125rem' }}>
            AI-powered growth infrastructure for companies scaling aggressively.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <span className="label footer__col-title">Company</span>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <span className="label footer__col-title">Systems</span>
            <a href="#services">AI Automation</a>
            <a href="#services">Performance</a>
            <a href="#services">Web Experiences</a>
            <a href="#services">CRM & Funnels</a>
          </div>
          <div className="footer__col">
            <span className="label footer__col-title">Connect</span>
            <a href="tel:+918264449956">📞 +91 82644 49956</a>
            <a href="mailto:growth@zenvoralabs.xyz">✉️ growth@zenvoralabs.xyz</a>
            <a href="https://twitter.com" target="_blank" rel="noopener">Twitter / X</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="divider" style={{ marginTop: 48 }} />
        <div className="footer__bottom">
          <span className="body" style={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Zenvora Labs. All rights reserved.
          </span>
          <span className="body" style={{ fontSize: '0.75rem' }}>
            Engineered with precision.
          </span>
        </div>
      </div>
    </footer>
  )
}
