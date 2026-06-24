import { Link } from 'react-router-dom'
import './Services.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const categories = [
  {
    id: 'paid',
    eyebrow: 'Paid media',
    title: 'Performance Marketing',
    blurb: 'Full-funnel paid acquisition across every channel that matters. Tracked properly. Reported honestly. Flat fee — no markup on spend.',
    items: [
      { num: '01', name: 'Google Ads Management', desc: 'Search, Performance Max, YouTube and Shopping — built around conversions, not impressions.' },
      { num: '02', name: 'Meta Ads Management', desc: 'Facebook, Instagram and Reels. Creative-first strategy paired with disciplined media buying.' },
      { num: '03', name: 'TikTok Ads', desc: 'Native creative briefs and Spark Ads for brands ready to actually live on the platform.' },
      { num: '04', name: 'LinkedIn Ads', desc: 'Account-based demand for SaaS and services teams that care about SQLs, not leads.' },
      { num: '05', name: 'Pinterest Ads', desc: 'Pin-led acquisition for D2C, home and lifestyle brands chasing cheaper, longer-tail reach.' },
      { num: '06', name: 'Display & Retargeting', desc: 'Visual remarketing across Google, Meta and Criteo with proper frequency caps and audience hygiene.' },
      { num: '07', name: 'Google Shopping', desc: 'Merchant Center, feed engineering and PMax structures that protect margins, not erode them.' },
      { num: '08', name: 'Local Services Ads', desc: 'Pay-per-lead campaigns for home and professional services across AU, CA and the US.' },
      { num: '09', name: 'Programmatic', desc: 'DV360 and The Trade Desk for brands ready to scale beyond the walled gardens.' },
      { num: '10', name: 'YouTube Ads', desc: 'Video-led acquisition with scripted creative, suppression audiences and incrementality testing.' },
    ],
  },
  {
    id: 'engineering',
    eyebrow: 'Engineering',
    title: 'Web & App Engineering',
    blurb: 'We design and ship production-grade websites, web apps and platforms. Senior engineers, modern stacks, no template shortcuts.',
    items: [
      { num: '01', name: 'Marketing Sites', desc: 'High-conversion Next.js and Astro sites tuned for Core Web Vitals from the first commit.' },
      { num: '02', name: 'SaaS Web Apps', desc: 'Type-safe full-stack apps in Next.js, TypeScript and Postgres. Auth, billing, dashboards — done right.' },
      { num: '03', name: 'E-commerce', desc: 'Shopify Hydrogen, headless on Saleor or Medusa, and custom checkout flows that actually convert.' },
      { num: '04', name: 'Backend & APIs', desc: 'Node, Bun and serverless backends. Type-safe APIs, payment flows, integrations and background jobs.' },
      { num: '05', name: 'Mobile Apps', desc: 'React Native and Expo apps that share business logic with your web product. One team, two platforms.' },
      { num: '06', name: 'AI Features', desc: 'Embeddings, RAG, LLM-powered search and chat, copilots — shipped responsibly inside real products.' },
      { num: '07', name: 'Integrations', desc: 'Stripe, HubSpot, Salesforce, Klaviyo and custom webhooks. The plumbing your business runs on.' },
      { num: '08', name: 'Performance', desc: 'Core Web Vitals audits, edge caching, image pipelines and bundle surgery — sites that load on slow networks.' },
    ],
  },
  {
    id: 'seo',
    eyebrow: 'Organic',
    title: 'SEO & Content',
    blurb: 'Compounding organic traffic — built on technical foundations, scalable content systems and the new layer of AI search.',
    items: [
      { num: '01', name: 'Technical SEO', desc: 'Crawl, render, schema and Core Web Vitals audits with a 90-day fix roadmap and shipped patches.' },
      { num: '02', name: 'Programmatic SEO', desc: 'Page templates and content pipelines that scale to thousands of high-intent landing pages.' },
      { num: '03', name: 'Local SEO & GBP', desc: 'Google Business Profile, citations and review systems for multi-location and service-area brands.' },
      { num: '04', name: 'International SEO', desc: 'hreflang strategy, geo subfolders and language switching done without breaking equity.' },
      { num: '05', name: 'Content Production', desc: 'Briefs, outlines and editor-led writing tied to a keyword map you can defend in a board meeting.' },
      { num: '06', name: 'Answer Engine Optimisation', desc: 'Visibility inside ChatGPT, Perplexity, Gemini and Google AI Overviews — the new layer above search.' },
    ],
  },
  {
    id: 'creative',
    eyebrow: 'Creative & CRO',
    title: 'Landing Pages, Creative & CRO',
    blurb: 'The page and the ad win or lose together. We design, build and test both — then ship the version with the math behind it.',
    items: [
      { num: '01', name: 'Landing Page Systems', desc: 'Modular landing page libraries so you can ship a new test page in hours, not weeks.' },
      { num: '02', name: 'A/B Testing', desc: 'Experimentation on PostHog, GrowthBook and VWO with stat-significance you can actually trust.' },
      { num: '03', name: 'UGC Creative', desc: 'Concept libraries, briefs and creator sourcing for ad systems that need fresh content every week.' },
      { num: '04', name: 'Heatmaps & Replay', desc: 'Microsoft Clarity, Hotjar and PostHog session replay tied to qualitative interviews.' },
      { num: '05', name: 'Lifecycle Email', desc: 'Klaviyo, Customer.io and HubSpot flows for retention, winback and lead nurture — written and built.' },
      { num: '06', name: 'Checkout CRO', desc: 'Friction audits and rebuilds for the single highest-leverage page on your entire site.' },
    ],
  },
  {
    id: 'analytics',
    eyebrow: 'Measurement',
    title: 'Analytics, Tracking & Data',
    blurb: 'Trust the numbers. Then make moves with them. GA4, server-side tracking, attribution and dashboards your CFO can read.',
    items: [
      { num: '01', name: 'GA4 + GTM Implementation', desc: 'Clean, documented event taxonomy. No more "why don\'t the numbers match" Slack threads.' },
      { num: '02', name: 'Server-side Tracking', desc: 'Server GTM, Meta CAPI and TikTok Events API for accurate reporting in a post-iOS 14 world.' },
      { num: '03', name: 'Consent Mode v2', desc: 'GDPR, CCPA and AU Privacy-compliant tracking that still gives you usable data.' },
      { num: '04', name: 'Attribution & MMM', desc: 'First-touch, last-touch, MTA and lightweight MMM — calibrated to incrementality, not vibes.' },
      { num: '05', name: 'Looker Dashboards', desc: 'Live dashboards pulling from GA4, paid platforms, CRM and revenue in a single view.' },
      { num: '06', name: 'Data Warehouse', desc: 'BigQuery and dbt setups for teams who\'ve outgrown spreadsheets and need a real source of truth.' },
    ],
  },
  {
    id: 'consulting',
    eyebrow: 'Advisory',
    title: 'Consulting & Training',
    blurb: 'You have an in-house team — you just need senior eyes on the strategy. Audits, training and fractional leadership.',
    items: [
      { num: '01', name: 'Growth Audits', desc: 'Two-week deep dive across acquisition, CRO and analytics. Output: a prioritised 90-day playbook.' },
      { num: '02', name: 'Team Training', desc: 'Live workshops on paid, SEO and analytics for marketing teams ready to bring work back in-house.' },
      { num: '03', name: 'Fractional CTO / CMO', desc: 'Senior leadership a few hours a week — interviews, roadmaps, board reporting, vendor reviews.' },
      { num: '04', name: 'Stack Review', desc: 'Independent audits of your martech, ad-tech and agency contracts. We tell you what to cut.' },
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

export default function Services() {
  return (
    <>
      <section className="page-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content page-hero__inner">
          <p className="type-eyebrow">Capabilities</p>
          <h1 className="type-h1 page-hero__title">
            Everything we do, <span className="serif-italic">all in one place.</span>
          </h1>
          <p className="type-body page-hero__subtitle">
            Six practices, delivered by one senior team. Pick a single capability or have us own the full stack — from code to campaigns, with the AI workflows that tie them together.
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
        <section className={`section cat-section ${i % 2 === 1 ? 'section--paper' : 'section--cream'}`} key={cat.id} id={cat.id}>
          <div className="container-content">
            <div className="cat-section__header">
              <p className="type-eyebrow">{cat.eyebrow}</p>
              <h2 className="type-h2 cat-section__title">{cat.title}</h2>
              <p className="type-body cat-section__blurb">{cat.blurb}</p>
            </div>

            <div className={`cat-grid ${cat.items.length >= 8 ? 'cat-grid--4col' : 'cat-grid--3col'}`}>
              {cat.items.map(item => (
                <article className="cat-cell" key={item.num}>
                  <div className="cat-cell__num type-label">{item.num} · Service</div>
                  <h3 className="type-h4 cat-cell__name">{item.name}</h3>
                  <p className="cat-cell__desc">{item.desc}</p>
                  <Link to="/contact" className="cat-cell__link">
                    Discuss this
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <section className="section section--soft" id="industries">
        <div className="container-content">
          <div className="industries-section__header">
            <p className="type-eyebrow">Industries we serve</p>
            <h2 className="type-h2 industries-section__title">
              Verticals we already <span className="serif-italic">know cold.</span>
            </h2>
            <p className="type-body industries-section__blurb">
              We&apos;ve shipped builds and growth programs across these spaces — so we know the unit economics, the platforms and the pitfalls before we start.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map(ind => (
              <div className="industry-card" key={ind.name}>
                <span className="industry-card__icon" aria-hidden="true">{ind.icon}</span>
                <h3 className="type-h4 industry-card__name">{ind.name}</h3>
                <p className="industry-card__desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content services-cta__inner">
          <h2 className="type-h2 services-cta__title">
            Want one team for <span className="serif-italic">all of it?</span>
          </h2>
          <p className="type-body services-cta__sub">
            Tell us about your project. We&apos;ll come back with a fixed scope and a fixed price in 48 hours — in INR, USD, AUD, CAD or GBP.
          </p>
          <div className="services-cta__actions">
            <Link to="/contact" className="btn btn--cream btn-lg">Get a proposal</Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--cream-outline btn-lg">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
