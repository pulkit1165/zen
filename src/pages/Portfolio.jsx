import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    title: 'Lumera Skincare',
    market: '🇦🇺 Sydney',
    sector: 'D2C beauty',
    services: ['Web', 'Meta Ads', 'CRO'],
    summary: 'Replatformed from Shopify Liquid to a custom headless build. Restructured Meta campaigns around new UGC creative system.',
    metrics: [
      { v: '4.1×', l: 'ROAS' },
      { v: '+312%', l: 'Revenue' },
      { v: '-47%', l: 'CPA' },
    ],
    gradient: 'linear-gradient(135deg, #FB7185, #F472B6, #C084FC)',
  },
  {
    title: 'Northbound SaaS',
    market: '🇨🇦 Toronto',
    sector: 'B2B SaaS',
    services: ['Web', 'LinkedIn Ads', 'HubSpot'],
    summary: 'New Next.js marketing site with programmatic comparison pages. LinkedIn + Google paid demand built around SQL targets.',
    metrics: [
      { v: '3.0×', l: 'SQLs / mo' },
      { v: '1.4s', l: 'LCP' },
      { v: '-38%', l: 'CAC' },
    ],
    gradient: 'linear-gradient(135deg, #60A5FA, #3B82F6, #6366F1)',
  },
  {
    title: 'Sunset Home Services',
    market: '🇺🇸 Austin',
    sector: 'Local services',
    services: ['SEO', 'Google Ads', 'LSA'],
    summary: 'Programmatic SEO for 60 service-area pages, Google Local Services Ads, and a conversion-tuned landing system.',
    metrics: [
      { v: '+212%', l: 'Leads' },
      { v: '#1', l: 'Local pack' },
      { v: '8.2×', l: 'ROAS' },
    ],
    gradient: 'linear-gradient(135deg, #FB923C, #F59E0B, #FBBF24)',
  },
  {
    title: 'Pier 27 Hospitality',
    market: '🇬🇧 London',
    sector: 'Restaurant group',
    services: ['Web', 'SEO', 'Lifecycle'],
    summary: 'Group site for 7 venues with multilingual booking flow. Klaviyo lifecycle for repeat reservations.',
    metrics: [
      { v: '+184%', l: 'Bookings' },
      { v: '4×', l: 'Email RPR' },
      { v: '99', l: 'Lighthouse' },
    ],
    gradient: 'linear-gradient(135deg, #34D399, #10B981, #059669)',
  },
  {
    title: 'Mira Logistics',
    market: '🇦🇪 Dubai',
    sector: 'Logistics tech',
    services: ['Backend', 'Web', 'Analytics'],
    summary: 'Internal ops dashboard, customer portal, API integrations with five carriers. Realtime tracking + SLA alerts.',
    metrics: [
      { v: '12h', l: 'Manual ops/wk saved' },
      { v: '99.97%', l: 'Uptime' },
      { v: '2.3×', l: 'Throughput' },
    ],
    gradient: 'linear-gradient(135deg, #A78BFA, #8B5CF6, #6D28D9)',
  },
  {
    title: 'Helio Fitness',
    market: '🇸🇬 Singapore',
    sector: 'Health & fitness',
    services: ['Web', 'TikTok Ads', 'CRO'],
    summary: 'Membership site + TikTok-led acquisition funnel. New CRO program lifted free-trial → paid conversion 36%.',
    metrics: [
      { v: '+36%', l: 'Trial → paid' },
      { v: '5.7×', l: 'TikTok ROAS' },
      { v: '+89%', l: 'New members' },
    ],
    gradient: 'linear-gradient(135deg, #22D3EE, #06B6D4, #0891B2)',
  },
]

const logos = ['LUMERA', 'NORTHBOUND', 'SUNSET', 'PIER 27', 'MIRA', 'HELIO', 'AURORA', 'BRIGHT']

export default function Portfolio() {
  return (
    <>
      <section className="page-hero" id="portfolio-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__inner">
          <p className="section-label">Selected work</p>
          <h1 className="page-hero__title">
            Real brands.<br />
            <span className="gradient-text">Real numbers.</span>
          </h1>
          <p className="page-hero__subtitle">
            A snapshot of recent engagements across Australia, Canada, the US, the UK, the UAE and Asia-Pacific. Every metric is from an actual client. Names anonymised on request.
          </p>
        </div>
      </section>

      <section className="logos-strip">
        <div className="container">
          <p className="logos-strip__label">Brands that trust us with their build &amp; growth</p>
          <div className="logos-strip__row">
            {logos.map(name => (
              <span className="logos-strip__logo" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((p) => (
              <article className="portfolio-card" key={p.title}>
                <div className="portfolio-card__preview" style={{ background: p.gradient }}>
                  <div className="portfolio-card__browser">
                    <div className="portfolio-card__browser-bar">
                      <span /><span /><span />
                      <div className="portfolio-card__url">{p.title.toLowerCase().replace(/\s+/g, '')}.com</div>
                    </div>
                    <div className="portfolio-card__browser-body">
                      <div className="portfolio-card__line portfolio-card__line--lg" />
                      <div className="portfolio-card__line" />
                      <div className="portfolio-card__line" style={{ width: '70%' }} />
                      <div className="portfolio-card__cols">
                        <div /><div /><div />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__meta">
                    <span className="portfolio-card__market">{p.market}</span>
                    <span className="portfolio-card__sector">{p.sector}</span>
                  </div>
                  <h3 className="portfolio-card__title">{p.title}</h3>
                  <p className="portfolio-card__summary">{p.summary}</p>
                  <div className="portfolio-card__services">
                    {p.services.map(s => (
                      <span className="portfolio-card__pill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="portfolio-card__metrics">
                    {p.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="portfolio-card__metric-v">{m.v}</div>
                        <div className="portfolio-card__metric-l">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta" id="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta__card">
            <div className="portfolio-cta__bg" aria-hidden="true" />
            <div className="portfolio-cta__inner">
              <h2 className="portfolio-cta__title">Want this kind of report in your inbox each Monday?</h2>
              <p className="portfolio-cta__subtitle">
                We treat every engagement like a partnership — clear scope, weekly progress, and metrics you can defend in front of a board.
              </p>
              <div className="portfolio-cta__actions">
                <Link to="/contact" className="btn btn--white btn--lg btn--arrow">
                  Start your project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/pricing" className="btn btn--dark-outline btn--lg">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
