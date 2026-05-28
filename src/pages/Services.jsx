import { Link } from 'react-router-dom'
import './Services.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const services = [
  {
    id: 'web',
    tag: 'Frontend',
    title: 'Web Development',
    tagline: 'Marketing sites and SaaS UIs that look the part — and load like it.',
    description: 'We design and build production-grade websites in React, Next.js and Astro. Component-driven, accessible, SEO-ready, and tuned for Core Web Vitals from the first commit.',
    includes: [
      'Brand-led design systems (Figma → code)',
      'Next.js / React / Astro builds',
      'Sub-2s LCP and 95+ Lighthouse scores',
      'Headless CMS (Sanity, Contentful, Storyblok)',
      'Component libraries with Storybook',
      'Animation & motion design (Framer Motion)',
      'Responsive across every device & locale',
      'Multi-region deploys on Vercel / Cloudflare',
    ],
    whoFor: 'Founders launching new products, marketing teams replatforming from WordPress / Wix, and brands that need their site to be a real growth engine.',
    timeline: 'Landing pages 1–2 weeks · Full sites 3–6 weeks',
    starting: 'from $2,400 USD',
  },
  {
    id: 'backend',
    tag: 'Backend',
    title: 'Backend & API Engineering',
    tagline: 'The systems that quietly run the business.',
    description: 'Type-safe APIs, integrations, payment flows, dashboards and AI features — built on Node, Postgres and modern serverless. We treat reliability, observability and cost as first-class concerns.',
    includes: [
      'Node / TypeScript / Bun services',
      'Postgres, Prisma, Drizzle & Supabase',
      'Stripe, Razorpay, Paddle integrations',
      'Auth (Clerk, Auth0, NextAuth, custom)',
      'CRM & marketing automation integrations',
      'AI features (LLMs, RAG, embeddings)',
      'Background jobs, queues & cron',
      'Logging, alerting & uptime monitoring',
    ],
    whoFor: 'Teams shipping internal tools, MVPs and SaaS products who need senior engineering without the cost of a full-time hire.',
    timeline: 'MVPs 4–8 weeks · ongoing sprints retainer-based',
    starting: 'from $4,800 USD',
  },
  {
    id: 'marketing',
    tag: 'Paid growth',
    title: 'Performance Marketing',
    tagline: 'Spend that compounds — not spend that disappears.',
    description: 'We run full-funnel acquisition on Meta, Google, TikTok and LinkedIn. Every dollar tracked. Every test documented. Every report explained — no agency hand-waving.',
    includes: [
      'Meta Ads (Facebook, Instagram, Reels)',
      'Google Ads (Search, PMax, YouTube, Shopping)',
      'TikTok, LinkedIn & Reddit campaigns',
      'Creative strategy + UGC brief library',
      'Landing page CRO experiments',
      'Server-side tracking (CAPI, GA4)',
      'Attribution & MMM modelling',
      'Weekly reporting + live Looker dashboards',
    ],
    whoFor: 'D2C brands scaling beyond $20k/mo spend, B2B SaaS teams running paid demand, and local services groups expanding into new markets.',
    timeline: 'Live in 7–14 days · monthly retainer',
    starting: 'from $1,800 USD / month',
  },
  {
    id: 'seo',
    tag: 'Search + CRO',
    title: 'SEO & Conversion Optimisation',
    tagline: 'Rank for what matters. Convert what arrives.',
    description: 'Technical SEO foundations, programmatic content systems, and continuous CRO testing on what you already have. We treat your site like a product, not a brochure.',
    includes: [
      'Technical SEO audits & fixes',
      'Programmatic content at scale',
      'International SEO (hreflang, geo)',
      'Local SEO & Google Business Profile',
      'A/B testing (PostHog, GrowthBook, VWO)',
      'Heatmaps & session replay analysis',
      'Lead-form & checkout optimisation',
      'Quarterly content & ranking roadmap',
    ],
    whoFor: 'Brands that already rank for branded terms but want compounding organic traffic + a higher conversion rate on every paid visit.',
    timeline: 'Audit in 10 days · ongoing monthly retainer',
    starting: 'from $1,200 USD / month',
  },
  {
    id: 'analytics',
    tag: 'Data',
    title: 'Analytics & Tracking',
    tagline: 'Trust the numbers. Then make moves with them.',
    description: 'GA4, GTM, server-side tracking, CAPI, dashboards and lifecycle email. You\'ll know exactly what every channel, page and campaign actually earns.',
    includes: [
      'GA4 + GTM implementation (clean)',
      'Server-side tracking (sGTM, CAPI)',
      'Consent mode v2 / GDPR / CCPA',
      'Looker Studio dashboards',
      'CRM + revenue attribution',
      'Klaviyo / Customer.io lifecycle setup',
      'Marketing data warehouse (BigQuery)',
      'Slack alerts for KPIs that matter',
    ],
    whoFor: 'Teams whose data is technically working but no one trusts the numbers — or who want a single source of truth across paid, organic and product.',
    timeline: 'Implementation 2–4 weeks',
    starting: 'from $1,800 USD project',
  },
]

const engagements = [
  {
    name: 'Sprint',
    desc: 'A defined-scope build or launch — landing page, campaign overhaul, analytics implementation.',
    bullets: ['Fixed scope & fixed price', 'Typical 1–4 weeks', 'Daily updates'],
  },
  {
    name: 'Retainer',
    desc: 'Embedded engineering or marketing partner shipping continuously, week after week.',
    bullets: ['Senior team, dedicated hours', 'Weekly sprints + roadmap', 'Slack / WhatsApp channel'],
  },
  {
    name: 'Build → Grow',
    desc: 'We build the site, launch the funnel, run the ads and scale revenue — under one engagement.',
    bullets: ['One team, one P&L', 'Aligned incentives', 'Best for D2C & SaaS launches'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero" id="services-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__inner">
          <p className="section-label">Capabilities</p>
          <h1 className="page-hero__title">
            One team. End-to-end.<br />
            <span className="gradient-text">Engineering and growth.</span>
          </h1>
          <p className="page-hero__subtitle">
            We build the digital products and run the marketing that grows them. Pick one capability, or have us own the full stack from code to campaigns.
          </p>
          <div className="page-hero__chips">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="page-hero__chip">{s.title}</a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, i) => (
        <section className={`section service-section ${i % 2 === 1 ? 'section--alt' : ''}`} key={service.id} id={service.id}>
          <div className="container">
            <div className="service-detail">
              <div className="service-detail__main">
                <span className="service-detail__tag">{service.tag}</span>
                <h2 className="service-detail__title">{service.title}</h2>
                <p className="service-detail__tagline">{service.tagline}</p>
                <p className="service-detail__desc">{service.description}</p>

                <h3 className="service-detail__subtitle">What's included</h3>
                <ul className="service-detail__list">
                  {service.includes.map((item, j) => (
                    <li key={j}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 11 8 15 16 6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="service-detail__side">
                <div className="service-detail__card">
                  <h4>Who it's for</h4>
                  <p>{service.whoFor}</p>
                </div>
                <div className="service-detail__card">
                  <h4>Timeline</h4>
                  <p>{service.timeline}</p>
                </div>
                <div className="service-detail__card service-detail__card--price">
                  <h4>Starting at</h4>
                  <p className="service-detail__price">{service.starting}</p>
                  <span className="service-detail__price-note">USD · billed in AUD, CAD, GBP or INR on request</span>
                </div>
                <div className="service-detail__cta">
                  <Link to="/contact" className="btn btn--gradient" style={{ width: '100%' }}>
                    Book a discovery call
                  </Link>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ width: '100%' }}>
                    Chat on WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      ))}

      {/* Engagement models */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <p className="section-label">How we engage</p>
            <h2 className="section-title">Three ways to work with us.</h2>
            <p className="section-subtitle">Pick the shape that fits where you are — we'll suggest the right one on our discovery call.</p>
          </div>
          <div className="engagements-grid">
            {engagements.map((e, i) => (
              <div className="engagement-card" key={i}>
                <div className="engagement-card__num">0{i + 1}</div>
                <h3 className="engagement-card__name">{e.name}</h3>
                <p className="engagement-card__desc">{e.desc}</p>
                <ul className="engagement-card__list">
                  {e.bullets.map((b, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 11 8 15 16 6" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="engagements-cta">
            <Link to="/contact" className="btn btn--white btn--lg btn--arrow">
              Tell us about your project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
