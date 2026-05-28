import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    title: 'Lumera Skincare',
    market: '🇦🇺 Sydney',
    sector: 'D2C beauty',
    services: ['Web', 'Meta Ads', 'CRO'],
    summary: 'Replatformed from Shopify Liquid to a custom headless build. Restructured Meta campaigns around a new UGC creative system.',
    metrics: [
      { v: '4.1×', l: 'ROAS' },
      { v: '+312%', l: 'Revenue' },
      { v: '−47%', l: 'CPA' },
    ],
  },
  {
    title: 'Northbound SaaS',
    market: '🇨🇦 Toronto',
    sector: 'B2B SaaS',
    services: ['Web', 'LinkedIn Ads', 'HubSpot'],
    summary: 'New Next.js marketing site with programmatic comparison pages. LinkedIn and Google paid demand built around SQL targets.',
    metrics: [
      { v: '3.0×', l: 'SQLs / mo' },
      { v: '1.4s', l: 'LCP' },
      { v: '−38%', l: 'CAC' },
    ],
  },
  {
    title: 'Sunset Home Services',
    market: '🇺🇸 Austin',
    sector: 'Local services',
    services: ['SEO', 'Google Ads', 'LSA'],
    summary: 'Programmatic SEO for 60 service-area pages, Google Local Services Ads and a conversion-tuned landing system.',
    metrics: [
      { v: '+212%', l: 'Leads' },
      { v: '#1', l: 'Local pack' },
      { v: '8.2×', l: 'ROAS' },
    ],
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
  },
  {
    title: 'Mira Logistics',
    market: '🇦🇪 Dubai',
    sector: 'Logistics tech',
    services: ['Backend', 'Web', 'Analytics'],
    summary: 'Internal ops dashboard, customer portal and API integrations with five carriers. Realtime tracking plus SLA alerts.',
    metrics: [
      { v: '12h', l: 'Ops / wk saved' },
      { v: '99.97%', l: 'Uptime' },
      { v: '2.3×', l: 'Throughput' },
    ],
  },
  {
    title: 'Helio Fitness',
    market: '🇸🇬 Singapore',
    sector: 'Health & fitness',
    services: ['Web', 'TikTok Ads', 'CRO'],
    summary: 'Membership site plus a TikTok-led acquisition funnel. New CRO program lifted free-trial to paid conversion 36%.',
    metrics: [
      { v: '+36%', l: 'Trial → paid' },
      { v: '5.7×', l: 'TikTok ROAS' },
      { v: '+89%', l: 'New members' },
    ],
  },
]

const logos = ['LUMERA', 'NORTHBOUND', 'SUNSET', 'PIER 27', 'MIRA', 'HELIO', 'AURORA', 'BRIGHT']

export default function Portfolio() {
  return (
    <>
      <section className="page-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content page-hero__inner">
          <p className="type-eyebrow">Selected work</p>
          <h1 className="type-h1 page-hero__title">
            Real brands. <span className="serif-italic">Real numbers.</span>
          </h1>
          <p className="type-body page-hero__subtitle">
            A snapshot of recent engagements across India, Australia, Canada, the US, the UK, the UAE and South-East Asia. Every metric is from an actual client. Names anonymised on request.
          </p>
        </div>
      </section>

      <section className="logos-strip">
        <div className="container-content">
          <p className="type-label logos-strip__label">Brands trusting us with their build &amp; growth</p>
          <div className="logos-strip__row">
            {logos.map(name => (
              <span className="logos-strip__logo" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container-content">
          <div className="portfolio-grid">
            {projects.map(p => (
              <article className="project-card" key={p.title}>
                <div className="project-card__head">
                  <div className="project-card__meta">
                    <span className="project-card__market">{p.market}</span>
                    <span className="project-card__sector">{p.sector}</span>
                  </div>
                  <h3 className="type-h3 project-card__title">{p.title}</h3>
                  <p className="project-card__summary">{p.summary}</p>
                </div>

                <div className="project-card__pills">
                  {p.services.map(s => (
                    <span className="project-card__pill" key={s}>{s}</span>
                  ))}
                </div>

                <div className="project-card__metrics">
                  {p.metrics.map((m, j) => (
                    <div key={j} className="project-card__metric">
                      <div className="project-card__metric-v">{m.v}</div>
                      <div className="project-card__metric-l type-label">{m.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content portfolio-cta">
          <h2 className="type-h2 portfolio-cta__title">
            Want this kind of report <span className="serif-italic">in your inbox each Monday?</span>
          </h2>
          <p className="type-body portfolio-cta__sub">
            We treat every engagement like a partnership — clear scope, weekly progress, and metrics you can defend in front of a board.
          </p>
          <div className="portfolio-cta__actions">
            <Link to="/contact" className="btn btn--cream btn-lg">Start your project</Link>
            <Link to="/pricing" className="btn btn--cream-outline btn-lg">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
