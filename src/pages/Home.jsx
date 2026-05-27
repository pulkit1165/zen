import { Link } from 'react-router-dom'
import './Home.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const trustItems = [
  { value: '+312%', label: 'Avg. paid ROAS lift', sub: 'across 40+ accounts' },
  { value: '<1.8s', label: 'Avg. LCP shipped', sub: 'on production sites' },
  { value: '6 mkts', label: 'Markets we ship in', sub: 'AU · CA · US · UK · UAE · IN' },
  { value: '24/7', label: 'Always-on coverage', sub: 'across IST + PST timezones' },
]

const services = [
  {
    tag: 'Build',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web & App Engineering',
    desc: 'Marketing sites, web apps, dashboards and full SaaS platforms. Next.js, React, Node, Postgres — built fast, built right.',
    items: ['Marketing sites & landing pages', 'SaaS dashboards & web apps', 'Headless CMS & e-commerce', 'APIs, integrations & automation'],
  },
  {
    tag: 'Grow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Performance Marketing',
    desc: 'Paid acquisition that pays back. Meta, Google, TikTok and LinkedIn — full-funnel creative, targeting and measurement.',
    items: ['Meta & Google Ads management', 'TikTok & LinkedIn campaigns', 'Creative strategy & UGC briefs', 'Server-side tracking & attribution'],
  },
  {
    tag: 'Convert',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'SEO & Conversion',
    desc: 'Rank, then convert. Technical SEO, content systems, CRO experiments and analytics that turn traffic into pipeline.',
    items: ['Technical & on-page SEO', 'CRO experiments & A/B testing', 'GA4, GTM & dashboarding', 'Lifecycle email & retention'],
  },
]

const capabilities = [
  { name: 'Next.js', svg: '⚡' },
  { name: 'React', svg: '⚛' },
  { name: 'TypeScript', svg: 'TS' },
  { name: 'Node.js', svg: '⬢' },
  { name: 'Postgres', svg: '🐘' },
  { name: 'Meta Ads', svg: 'M' },
  { name: 'Google Ads', svg: 'G' },
  { name: 'TikTok Ads', svg: '♪' },
  { name: 'GA4 + GTM', svg: '📊' },
  { name: 'Shopify', svg: 'S' },
  { name: 'Webflow', svg: 'W' },
  { name: 'HubSpot', svg: 'H' },
]

const steps = [
  { num: '01', title: 'Strategy call', desc: 'A 30-min call to map goals, budget, market and constraints. You leave with a recommended plan — even if you don\'t hire us.' },
  { num: '02', title: 'Design + build sprint', desc: 'We move in 1–4 week sprints. Designs, code and ad creative ship in parallel, reviewed daily on Slack or WhatsApp.' },
  { num: '03', title: 'Launch & instrument', desc: 'Site goes live with full analytics, server-side tracking, attribution and reporting wired up from day one.' },
  { num: '04', title: 'Scale & optimise', desc: 'Weekly experiments on landing pages, ads and funnels. You see what changed, what worked, and what\'s next.' },
]

const results = [
  {
    market: '🇦🇺 Sydney, AU',
    sector: 'D2C beauty brand',
    headline: '4.1× ROAS on Meta in 8 weeks',
    detail: 'New site, new creative system, restructured campaigns. CPA dropped 47% while scaling spend 3×.',
    metrics: [
      { v: '+312%', l: 'Revenue' },
      { v: '4.1×', l: 'ROAS' },
      { v: '-47%', l: 'CPA' },
    ],
  },
  {
    market: '🇨🇦 Toronto, CA',
    sector: 'B2B SaaS platform',
    headline: '3× qualified demos in one quarter',
    detail: 'Rebuilt marketing site in Next.js, launched LinkedIn + Google paid funnels, set up HubSpot scoring.',
    metrics: [
      { v: '3.0×', l: 'SQLs/mo' },
      { v: '1.4s', l: 'LCP' },
      { v: '-38%', l: 'CAC' },
    ],
  },
  {
    market: '🇺🇸 Austin, US',
    sector: 'Local services group',
    headline: '+212% leads from organic + paid',
    detail: 'Programmatic SEO for 60 service-area pages, Google Local Services Ads, conversion-tuned landing system.',
    metrics: [
      { v: '+212%', l: 'Leads' },
      { v: '#1', l: 'Local pack' },
      { v: '8.2×', l: 'ROAS' },
    ],
  },
]

const testimonials = [
  {
    quote: 'Zenvora rebuilt our site and our paid stack in six weeks. We hit our annual revenue target by month four. They feel like an in-house team you can actually trust.',
    name: 'Eliza M.',
    role: 'Founder, D2C skincare',
    flag: '🇦🇺',
  },
  {
    quote: 'We had three agencies before them — none could ship and report at the same time. This team designs, codes, runs ads and explains the numbers in plain English.',
    name: 'David K.',
    role: 'Head of Growth, B2B SaaS',
    flag: '🇨🇦',
  },
  {
    quote: 'They obsess over LCP, CPA and pipeline at the same time. Rare combination of engineering quality and marketing instinct.',
    name: 'Priya N.',
    role: 'CMO, Health-tech',
    flag: '🇺🇸',
  },
]

const markets = [
  { flag: '🇦🇺', name: 'Australia', city: 'Sydney · Melbourne' },
  { flag: '🇨🇦', name: 'Canada', city: 'Toronto · Vancouver' },
  { flag: '🇺🇸', name: 'United States', city: 'NYC · Austin · LA' },
  { flag: '🇬🇧', name: 'United Kingdom', city: 'London · Manchester' },
  { flag: '🇦🇪', name: 'UAE', city: 'Dubai · Abu Dhabi' },
  { flag: '🇸🇬', name: 'Singapore', city: 'SG' },
  { flag: '🇮🇳', name: 'India', city: 'Delhi · Mumbai · Mohali' },
]

const faqs = [
  { q: 'Do you work with brands outside India?', a: 'Yes — most of our work is for brands in Australia, Canada, the US, the UK and the UAE. We operate across timezones with daily async standups and live calls scheduled in your timezone.' },
  { q: 'Are you a dev shop or a marketing agency?', a: 'Both — that\'s the point. Most teams hire a developer who can\'t do marketing or a marketer who can\'t change a button. We do engineering and paid growth as one team, so the site, the ads and the analytics all line up.' },
  { q: 'How do you charge?', a: 'Web projects are fixed-scope and fixed-price (USD/AUD/CAD/GBP/INR). Performance marketing is a flat monthly retainer plus ad spend. No commission on spend, no surprises.' },
  { q: 'How fast can you start?', a: 'Discovery call within 48 hours, kickoff usually within a week. For straightforward landing pages and campaign launches we can be live in 7–14 days.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__pill">
              <span className="hero__pill-dot" />
              Now booking Q3 — AU · CA · US · UK
            </span>
            <h1 className="hero__title">
              We engineer websites
              <br />
              and <span className="gradient-text">run the campaigns</span>
              <br />
              that grow global brands.
            </h1>
            <p className="hero__subtitle">
              Zenvora Labs is a full-stack studio for ambitious teams. We design and build high-performance web products, then run the paid acquisition, SEO and analytics that turn them into pipeline. One team. End to end.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--gradient btn--lg btn--arrow" id="hero-cta-primary">
                Book a discovery call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn btn--outline btn--lg" id="hero-cta-secondary">
                See case studies
              </Link>
            </div>
            <div className="hero__trust">
              <div className="hero__avatars" aria-hidden="true">
                <span style={{ background: 'linear-gradient(135deg,#fda4af,#fb7185)' }}>E</span>
                <span style={{ background: 'linear-gradient(135deg,#93c5fd,#3b82f6)' }}>D</span>
                <span style={{ background: 'linear-gradient(135deg,#fcd34d,#f59e0b)' }}>P</span>
                <span style={{ background: 'linear-gradient(135deg,#86efac,#10b981)' }}>+</span>
              </div>
              <div>
                <div className="hero__trust-stars">★★★★★ <span>5.0 · 40+ engagements</span></div>
                <div className="hero__trust-sub">From founders in Sydney, Toronto, Austin, London &amp; Dubai</div>
              </div>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--ads">
              <div className="hero__card-head">
                <span className="hero__card-title">Meta Ads · Last 30d</span>
                <span className="hero__card-tag hero__card-tag--green">+312%</span>
              </div>
              <div className="hero__chart">
                <svg viewBox="0 0 200 70" preserveAspectRatio="none" width="100%" height="70">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,60 L20,55 L40,50 L60,52 L80,45 L100,38 L120,30 L140,28 L160,18 L180,12 L200,6 L200,70 L0,70 Z" fill="url(#chart-grad)" />
                  <path d="M0,60 L20,55 L40,50 L60,52 L80,45 L100,38 L120,30 L140,28 L160,18 L180,12 L200,6" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hero__card-row">
                <div><div className="hero__metric-label">ROAS</div><div className="hero__metric-value">4.1×</div></div>
                <div><div className="hero__metric-label">CPA</div><div className="hero__metric-value">$18</div></div>
                <div><div className="hero__metric-label">Spend</div><div className="hero__metric-value">$84k</div></div>
              </div>
            </div>

            <div className="hero__card hero__card--web">
              <div className="hero__card-head">
                <span className="hero__card-title">Lighthouse</span>
                <span className="hero__card-tag hero__card-tag--purple">Build</span>
              </div>
              <div className="hero__scores">
                <div className="hero__score"><div className="hero__score-circle hero__score-circle--green">99</div><span>Perf</span></div>
                <div className="hero__score"><div className="hero__score-circle hero__score-circle--green">100</div><span>SEO</span></div>
                <div className="hero__score"><div className="hero__score-circle hero__score-circle--green">98</div><span>Best</span></div>
                <div className="hero__score"><div className="hero__score-circle hero__score-circle--green">100</div><span>A11y</span></div>
              </div>
            </div>

            <div className="hero__card hero__card--ping">
              <span className="hero__ping" />
              <div>
                <div className="hero__ping-title">Deployed to production</div>
                <div className="hero__ping-sub">syd-1 · 142ms · just now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-strip__grid">
            {trustItems.map((item, i) => (
              <div className="trust-strip__item" key={i}>
                <div className="trust-strip__value">{item.value}</div>
                <div className="trust-strip__label">{item.label}</div>
                <div className="trust-strip__sub">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What we do</p>
            <h2 className="section-title">Build the product. Run the growth.<br /> Own the numbers.</h2>
            <p className="section-subtitle">Three connected practices, delivered by one team. You don't manage agencies — you ship.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__head">
                  <span className="service-card__tag">{s.tag}</span>
                  <span className="service-card__icon">{s.icon}</span>
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <ul className="service-card__list">
                  {s.items.map((item, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 11 8 15 16 6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="service-card__link">
                  Explore service
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES MARQUEE ── */}
      <section className="capabilities">
        <div className="container">
          <p className="capabilities__label">Our stack</p>
          <div className="capabilities__marquee">
            <div className="capabilities__track">
              {[...capabilities, ...capabilities].map((c, i) => (
                <span className="capabilities__chip" key={i}>
                  <span className="capabilities__chip-icon">{c.svg}</span>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section section--alt" id="process">
        <div className="container">
          <div className="section-header">
            <p className="section-label">How we work</p>
            <h2 className="section-title">A senior team. Weekly shipping. Honest reporting.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.num}>
                <div className="step-card__num">{step.num}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section section--dark" id="results">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Recent results</p>
            <h2 className="section-title">Outcomes, not deliverables.</h2>
            <p className="section-subtitle">A handful of recent engagements across our core markets.</p>
          </div>
          <div className="results-grid">
            {results.map((r, i) => (
              <article className="result-card" key={i}>
                <div className="result-card__top">
                  <span className="result-card__market">{r.market}</span>
                  <span className="result-card__sector">{r.sector}</span>
                </div>
                <h3 className="result-card__headline">{r.headline}</h3>
                <p className="result-card__detail">{r.detail}</p>
                <div className="result-card__metrics">
                  {r.metrics.map((m, j) => (
                    <div className="result-card__metric" key={j}>
                      <div className="result-card__metric-value">{m.v}</div>
                      <div className="result-card__metric-label">{m.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="results-cta">
            <Link to="/portfolio" className="btn btn--white btn--lg btn--arrow">
              See all case studies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Trusted by operators</p>
            <h2 className="section-title">What founders &amp; growth leads say.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <figure className="testimonial-card" key={i}>
                <div className="testimonial-card__stars">★★★★★</div>
                <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
                <figcaption className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name} <span>{t.flag}</span></div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ── */}
      <section className="section section--alt" id="markets">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Where we work</p>
            <h2 className="section-title">Built in India. Shipping worldwide.</h2>
            <p className="section-subtitle">We operate across timezones and currencies, with clients across seven core markets.</p>
          </div>
          <div className="markets-grid">
            {markets.map((m, i) => (
              <div className="market-card" key={i}>
                <span className="market-card__flag">{m.flag}</span>
                <div>
                  <div className="market-card__name">{m.name}</div>
                  <div className="market-card__city">{m.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="container faq-container">
          <div className="faq-intro">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common questions, answered.</h2>
            <p className="section-subtitle">Still unclear on something? WhatsApp us — we usually reply within an hour.</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ marginTop: 24 }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details className="faq-item" key={i}>
                <summary>
                  {f.q}
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta" id="final-cta">
        <div className="container">
          <div className="final-cta__card">
            <div className="final-cta__bg" aria-hidden="true" />
            <div className="final-cta__inner">
              <p className="final-cta__label">Ready when you are</p>
              <h2 className="final-cta__title">Let's build the thing — and then make it grow.</h2>
              <p className="final-cta__subtitle">
                Book a free 30-minute discovery call. We'll review your goals, current setup and recommend the fastest path to results — no sales pressure, no fluff.
              </p>
              <div className="final-cta__actions">
                <Link to="/contact" className="btn btn--white btn--lg btn--arrow">
                  Book a discovery call
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--dark-outline btn--lg">
                  Or message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
