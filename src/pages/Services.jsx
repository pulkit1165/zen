import { Link } from 'react-router-dom'
import './Services.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const categories = [
  {
    id: 'engineering',
    eyebrow: 'Engineering',
    title: 'Web & App Engineering',
    blurb: 'We design and ship production-grade websites, web apps and platforms. Senior engineers, modern stacks, no template shortcuts.',
    items: [
      {
        name: 'Marketing Sites',
        desc: 'High-conversion Next.js & Astro sites tuned for Core Web Vitals from the first commit.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="14" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="7" y1="20" x2="17" y2="20" /><line x1="12" y1="18" x2="12" y2="20" />
          </svg>
        ),
      },
      {
        name: 'SaaS Web Apps',
        desc: 'Type-safe full-stack apps in Next.js, TypeScript and Postgres. Auth, billing, dashboards — done right.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        ),
      },
      {
        name: 'E-commerce',
        desc: 'Shopify Hydrogen, headless commerce on Saleor or Medusa, and custom checkout flows that actually convert.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
        ),
      },
      {
        name: 'Backend & APIs',
        desc: 'Node, Bun and serverless backends. Type-safe APIs, payment flows, integrations and background jobs.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
          </svg>
        ),
      },
      {
        name: 'Mobile Apps',
        desc: 'React Native and Expo apps that share business logic with your web product. One team, two platforms.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
      {
        name: 'Integrations & Automation',
        desc: 'Stripe, HubSpot, Salesforce, Klaviyo, custom webhooks. We wire the systems your business actually runs on.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        ),
      },
      {
        name: 'AI Features',
        desc: 'Embeddings, RAG pipelines, LLM-powered search and chat, copilots — shipped responsibly inside real products.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        ),
      },
      {
        name: 'Performance Engineering',
        desc: 'Core Web Vitals audits, edge caching, image pipelines and bundle surgery — sites that load on slow networks.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'paid',
    eyebrow: 'Paid media',
    title: 'Performance Marketing',
    blurb: 'Full-funnel paid acquisition across every channel that matters. Tracked properly. Reported honestly. No commission on spend.',
    items: [
      { name: 'Google Ads Management', desc: 'Search, Performance Max, YouTube and Shopping — built around conversions, not impressions.' },
      { name: 'Meta Ads Management', desc: 'Facebook, Instagram and Reels. Creative-first strategy paired with disciplined media buying.' },
      { name: 'TikTok Ads', desc: 'TikTok-native creative briefs and Spark Ads. Built for the platforms users actually scroll.' },
      { name: 'LinkedIn Ads', desc: 'B2B demand for SaaS and services. Account-based targeting, gated content and lead-gen forms.' },
      { name: 'Pinterest Ads', desc: 'Pin-led acquisition for D2C, home and lifestyle brands looking for cheaper, longer-tail reach.' },
      { name: 'Display & Retargeting', desc: 'Visual remarketing across Google, Meta and Criteo. Frequency-capped, audience-segmented, fatigue-proofed.' },
      { name: 'Google Shopping', desc: 'Merchant Center, feed optimisation and PMax structures that protect your margins.' },
      { name: 'Google Local Services Ads', desc: 'Pay-per-lead campaigns for home services, professional services and clinics across AU/CA/US.' },
      { name: 'Programmatic', desc: 'DV360 and The Trade Desk for brands ready to scale spend beyond the walled gardens.' },
      { name: 'YouTube Ads', desc: 'Video-led acquisition with scripted creative, suppression audiences and incrementality testing.' },
    ],
  },
  {
    id: 'seo',
    eyebrow: 'Organic',
    title: 'SEO & Content',
    blurb: 'Compounding organic traffic — built on technical foundations, scalable content systems and the new layer of AI search.',
    items: [
      { name: 'Technical SEO', desc: 'Crawl, render, schema and Core Web Vitals audits with a 90-day fix roadmap and shipped patches.' },
      { name: 'Programmatic SEO', desc: 'Page templates and content pipelines that scale to thousands of high-intent landing pages.' },
      { name: 'Local SEO & GBP', desc: 'Google Business Profile, citations and review systems for multi-location and service-area brands.' },
      { name: 'International SEO', desc: 'hreflang strategy, geo subfolders, currency and language switching done without breaking equity.' },
      { name: 'Content Production', desc: 'Briefs, outlines and editor-led writing tied to a keyword map you can actually defend in a board meeting.' },
      { name: 'Answer Engine Optimisation', desc: 'Visibility inside ChatGPT, Perplexity, Gemini and Google AI Overviews — the new search layer above search.' },
    ],
  },
  {
    id: 'creative',
    eyebrow: 'Creative & CRO',
    title: 'Landing Pages, Creative & CRO',
    blurb: 'The page and the ad win or lose together. We design, build and test both — then ship the version with the math behind it.',
    items: [
      { name: 'Landing Page Systems', desc: 'Modular landing page libraries so you can ship a new test page in hours, not weeks.' },
      { name: 'A/B Testing', desc: 'Experimentation on PostHog, GrowthBook and VWO with stat-significance you can actually trust.' },
      { name: 'UGC Creative Strategy', desc: 'Concept libraries, briefs and creator sourcing for ad systems that need fresh content every week.' },
      { name: 'Heatmaps & Session Replay', desc: 'Microsoft Clarity, Hotjar and PostHog session replay tied to qualitative interviews.' },
      { name: 'Lifecycle Email', desc: 'Klaviyo, Customer.io and HubSpot flows for retention, winback and lead nurture — written and built.' },
      { name: 'Checkout & Lead-form CRO', desc: 'Friction audits and rebuilds for the highest-leverage page on your entire site.' },
    ],
  },
  {
    id: 'analytics',
    eyebrow: 'Measurement',
    title: 'Analytics, Tracking & Data',
    blurb: 'Trust the numbers. Then make moves with them. GA4, server-side tracking, attribution and dashboards your CFO can read.',
    items: [
      { name: 'GA4 + GTM Implementation', desc: 'Clean, documented event taxonomy. No more "why don\'t the numbers match" Slack threads.' },
      { name: 'Server-side Tracking', desc: 'Server GTM, Meta CAPI and TikTok Events API for accurate reporting in a post-iOS 14 world.' },
      { name: 'Consent Mode v2', desc: 'GDPR, CCPA and AU Privacy-compliant tracking that still gives you usable data.' },
      { name: 'Attribution & MMM', desc: 'First-touch, last-touch, MTA and lightweight MMM — calibrated to incrementality, not vibes.' },
      { name: 'Looker Studio Dashboards', desc: 'Live dashboards that pull from GA4, paid platforms, CRM and revenue in one view.' },
      { name: 'Data Warehouse', desc: 'BigQuery + dbt setups for teams who\'ve outgrown spreadsheets and need a real source of truth.' },
    ],
  },
  {
    id: 'consulting',
    eyebrow: 'Advisory',
    title: 'Consulting & Training',
    blurb: 'You\'ve got an in-house team. You just need senior eyes on the strategy. Audits, training and fractional leadership.',
    items: [
      { name: 'Growth Audits', desc: 'Two-week deep dive across acquisition, CRO and analytics. You get a prioritised 90-day playbook.' },
      { name: 'In-House Team Training', desc: 'Live workshops on paid, SEO and analytics for marketing teams ready to bring work back in-house.' },
      { name: 'Fractional CTO / CMO', desc: 'Senior leadership a few hours a week — interviews, roadmaps, board reporting, vendor reviews.' },
      { name: 'Stack & Vendor Review', desc: 'Independent audits of your martech, ad-tech and agency contracts. We tell you what to cut.' },
    ],
  },
]

const industries = [
  { name: 'D2C & E-commerce', desc: 'Beauty, fashion, home, supplements. Build the site, run the ads, retain the buyer.', icon: '🛍️' },
  { name: 'B2B SaaS', desc: 'Marketing sites, programmatic SEO, LinkedIn + Google demand and HubSpot scoring.', icon: '💼' },
  { name: 'Home Services', desc: 'Plumbers, electricians, roofers — local SEO, Google LSA and conversion-tuned booking flows.', icon: '🏠' },
  { name: 'Health & Fitness', desc: 'Studios, apps and supplements. TikTok-led acquisition, retention email and trial CRO.', icon: '🏋️' },
  { name: 'Hospitality', desc: 'Restaurant groups, hotels and travel brands. Multilingual booking funnels and lifecycle.', icon: '🍽️' },
  { name: 'Lead Generation', desc: 'Insurance, legal, finance, mortgages. Compliant, attributable lead funnels.', icon: '📞' },
  { name: 'Automotive', desc: 'Dealer groups and aftermarket brands. Local + national paid and inventory feeds.', icon: '🚗' },
  { name: 'Education', desc: 'Bootcamps, K-12 platforms and universities. Cohort funnels and lifecycle nurture.', icon: '🎓' },
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
            Everything you need<br />
            to <span className="gradient-text">build and grow</span> online.
          </h1>
          <p className="page-hero__subtitle">
            Engineering, paid media, SEO, creative and analytics — delivered by one senior team. Pick a single capability or have us own the full stack from code to campaigns.
          </p>
          <div className="page-hero__chips">
            {categories.map(c => (
              <a key={c.id} href={`#${c.id}`} className="page-hero__chip">{c.title}</a>
            ))}
            <a href="#industries" className="page-hero__chip">Industries</a>
          </div>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section className={`section cat-section ${i % 2 === 1 ? 'section--alt' : ''}`} key={cat.id} id={cat.id}>
          <div className="container">
            <div className="cat-section__header">
              <p className="section-label">{cat.eyebrow}</p>
              <h2 className="cat-section__title">{cat.title}</h2>
              <p className="cat-section__blurb">{cat.blurb}</p>
            </div>

            <div className={`cat-grid ${cat.items.length >= 8 ? 'cat-grid--4col' : ''}`}>
              {cat.items.map(item => (
                <article className="cat-card" key={item.name}>
                  {item.icon && <div className="cat-card__icon">{item.icon}</div>}
                  <h3 className="cat-card__name">{item.name}</h3>
                  <p className="cat-card__desc">{item.desc}</p>
                  <Link to="/contact" className="cat-card__link">
                    Discuss this
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Industries */}
      <section className="section section--tint" id="industries">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Industries we serve</p>
            <h2 className="section-title">Verticals we understand deeply.</h2>
            <p className="section-subtitle">We've shipped builds and growth programs across these spaces — so we already know the unit economics, the platforms and the pitfalls.</p>
          </div>

          <div className="industries-grid">
            {industries.map(ind => (
              <div className="industry-card" key={ind.name}>
                <span className="industry-card__icon" aria-hidden="true">{ind.icon}</span>
                <h3 className="industry-card__name">{ind.name}</h3>
                <p className="industry-card__desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--dark-outline btn--lg">
              Or message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
