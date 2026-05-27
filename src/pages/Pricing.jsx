import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20pricing.'

const currencies = [
  { code: 'USD', symbol: '$', flag: '🇺🇸' },
  { code: 'AUD', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  { code: 'GBP', symbol: '£', flag: '🇬🇧' },
  { code: 'INR', symbol: '₹', flag: '🇮🇳' },
]

// USD-anchored pricing. Other currencies are approximate.
const fx = { USD: 1, AUD: 1.55, CAD: 1.4, GBP: 0.8, INR: 85 }

const formatPrice = (usd, code) => {
  const cur = currencies.find(c => c.code === code) ?? currencies[0]
  const rate = fx[code] ?? 1
  const value = usd * rate
  if (code === 'INR') {
    const rounded = Math.round(value / 1000) * 1000
    return `${cur.symbol}${rounded.toLocaleString('en-IN')}`
  }
  const rounded = Math.round(value / 50) * 50
  return `${cur.symbol}${rounded.toLocaleString('en-US')}`
}

const buildPlans = [
  {
    name: 'Launch',
    label: 'For new sites',
    usd: 2400,
    period: 'one-time',
    desc: 'A high-converting marketing site for a focused launch — perfect for SaaS, agencies, and D2C brands.',
    features: [
      '4–6 page custom site',
      'Designed in Figma, built in Next.js',
      'Headless CMS for content edits',
      'GA4 + GTM analytics setup',
      'Sub-2s LCP guarantee',
      'Multi-region deploy (Vercel/Cloudflare)',
      '2 rounds of revisions',
    ],
    timeline: '2–3 weeks',
    popular: false,
  },
  {
    name: 'Scale',
    label: 'For growing brands',
    usd: 6400,
    period: 'one-time',
    desc: 'Full marketing site or web app with custom design system, integrations, and conversion optimisation baked in.',
    features: [
      'Up to 15 pages + design system',
      'Custom components in Storybook',
      'Headless commerce / CRM integrations',
      'Server-side analytics + CAPI',
      'A/B testing framework wired in',
      '30 days of post-launch support',
      'Unlimited revisions during build',
    ],
    timeline: '4–6 weeks',
    popular: true,
  },
  {
    name: 'Platform',
    label: 'For full products',
    usd: 14000,
    period: 'starting',
    desc: 'SaaS dashboards, web apps and internal tools. Type-safe end-to-end, with auth, payments and ops included.',
    features: [
      'Full-stack app (Next.js + Postgres)',
      'Auth, payments & roles',
      'Admin dashboards & reporting',
      'AI features (LLMs, RAG, embeddings)',
      'Background jobs & integrations',
      'Observability + uptime monitoring',
      'Quarterly architecture reviews',
    ],
    timeline: '6–12 weeks',
    popular: false,
  },
]

const retainerPlans = [
  {
    name: 'Growth',
    label: 'Performance Marketing',
    usd: 1800,
    period: '/ month',
    desc: 'Dedicated paid acquisition across 1–2 channels with creative strategy, weekly experiments and reporting.',
    features: [
      'Meta or Google Ads management',
      'Creative briefs + UGC sourcing',
      '4 paid experiments / month',
      'Landing page CRO tests',
      'Server-side tracking (sGTM, CAPI)',
      'Weekly Looker Studio dashboards',
      'Monthly strategy call',
    ],
    timeline: 'Live in 7–14 days',
    popular: false,
    note: 'Plus ad spend (managed in your account)',
  },
  {
    name: 'Full-funnel',
    label: 'Marketing + CRO',
    usd: 3600,
    period: '/ month',
    desc: 'Multi-channel paid + SEO + CRO. The most popular retainer for D2C and B2B teams scaling past $30k/mo spend.',
    features: [
      '2–3 channels (Meta, Google, TikTok, LinkedIn)',
      'SEO + content production',
      '8 CRO experiments / month',
      'Lifecycle email & retention',
      'Custom MMM / attribution modelling',
      'Slack channel + bi-weekly calls',
      'Quarterly business reviews',
    ],
    timeline: 'Live in 14 days',
    popular: true,
    note: 'Plus ad spend (managed in your account)',
  },
  {
    name: 'Embedded',
    label: 'Engineering retainer',
    usd: 4800,
    period: '/ month',
    desc: 'A senior engineer dedicated to your product, shipping weekly with full code ownership and on-call coverage.',
    features: [
      '60–80 hours of senior engineering / month',
      'Weekly sprints + roadmap',
      'Code reviews, CI/CD & DevOps',
      'On-call coverage in your timezone',
      'Slack channel + daily standups',
      'Quarterly roadmap planning',
      'Pauseable month-to-month',
    ],
    timeline: 'Start within 14 days',
    popular: false,
  },
]

const includedAll = [
  'Dedicated Slack / WhatsApp channel',
  'Weekly progress updates',
  'Senior team only — no junior staffing',
  'Source code & full asset ownership',
  'Transparent reporting & docs',
  'No commission on ad spend',
]

const faqs = [
  {
    q: 'What currencies do you bill in?',
    a: 'We bill primarily in USD, but happily invoice in AUD, CAD, GBP, EUR, AED or INR. We accept wire, card and Wise transfers.',
  },
  {
    q: 'Do you take commission on ad spend?',
    a: 'No. Retainers are flat fees — your media spend stays in your account and is never marked up. We win when you grow, not when you spend more.',
  },
  {
    q: 'Can we start with a project and move to a retainer?',
    a: 'Yes — that\'s the most common path. We typically launch with a Scale or Platform build, then move into a Growth or Full-funnel retainer once you\'re live.',
  },
  {
    q: 'What if we need something not listed here?',
    a: 'Custom scopes are normal. Tell us what you need on a discovery call and we\'ll come back with a fixed scope and fixed price within 48 hours.',
  },
  {
    q: 'Do you sign NDAs and DPAs?',
    a: 'Yes. We routinely sign NDAs, MSAs and DPAs (GDPR / CCPA compliant). Reach out and we\'ll send our standard templates.',
  },
]

function FAQItem({ faq }) {
  return (
    <details className="faq-item">
      <summary>
        {faq.q}
        <span className="faq-item__icon" aria-hidden="true" />
      </summary>
      <p>{faq.a}</p>
    </details>
  )
}

export default function Pricing() {
  const [currency, setCurrency] = useState('USD')
  const cur = useMemo(() => currencies.find(c => c.code === currency), [currency])

  return (
    <>
      <section className="page-hero" id="pricing-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__inner">
          <p className="section-label">Pricing</p>
          <h1 className="page-hero__title">
            Clear, fixed pricing.<br />
            <span className="gradient-text">No agency surprises.</span>
          </h1>
          <p className="page-hero__subtitle">
            Build projects are fixed-scope. Marketing retainers are flat monthly fees. Pick your currency — we'll invoice in it.
          </p>

          <div className="currency-switch" role="tablist" aria-label="Select currency">
            {currencies.map(c => (
              <button
                key={c.code}
                type="button"
                role="tab"
                aria-selected={currency === c.code}
                className={`currency-switch__btn ${currency === c.code ? 'currency-switch__btn--active' : ''}`}
                onClick={() => setCurrency(c.code)}
              >
                <span className="currency-switch__flag">{c.flag}</span>
                {c.code}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="build-plans">
        <div className="container">
          <div className="section-header pricing-section-header">
            <p className="section-label">Build engagements</p>
            <h2 className="section-title">Web &amp; product builds</h2>
            <p className="section-subtitle">Fixed-scope, fixed-price projects. From a focused launch site to a full SaaS platform.</p>
          </div>

          <div className="pricing-grid">
            {buildPlans.map(plan => (
              <article className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`} key={plan.name}>
                {plan.popular && <div className="pricing-card__badge">Most popular</div>}
                <div className="pricing-card__label">{plan.label}</div>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">
                  {formatPrice(plan.usd, currency)} <span className="pricing-card__period">{plan.period}</span>
                </div>
                <p className="pricing-card__timeline">Timeline · {plan.timeline}</p>
                <p className="pricing-card__desc">{plan.desc}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 11 8 15 16 6" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${plan.popular ? 'btn--gradient' : 'btn--outline'}`}
                  style={{ width: '100%' }}
                >
                  Start a project
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="retainer-plans">
        <div className="container">
          <div className="section-header pricing-section-header">
            <p className="section-label">Retainers</p>
            <h2 className="section-title">Growth &amp; engineering retainers</h2>
            <p className="section-subtitle">Pay-monthly, pause anytime. Built for teams scaling steadily across multiple markets.</p>
          </div>

          <div className="pricing-grid">
            {retainerPlans.map(plan => (
              <article className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`} key={plan.name}>
                {plan.popular && <div className="pricing-card__badge">Most popular</div>}
                <div className="pricing-card__label">{plan.label}</div>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">
                  {formatPrice(plan.usd, currency)} <span className="pricing-card__period">{plan.period}</span>
                </div>
                <p className="pricing-card__timeline">Timeline · {plan.timeline}</p>
                <p className="pricing-card__desc">{plan.desc}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 11 8 15 16 6" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.note && <p className="pricing-card__note">* {plan.note}</p>}
                <Link
                  to="/contact"
                  className={`btn ${plan.popular ? 'btn--gradient' : 'btn--outline'}`}
                  style={{ width: '100%' }}
                >
                  Start a retainer
                </Link>
              </article>
            ))}
          </div>

          <div className="pricing-included">
            <div className="pricing-included__title">
              <span className="section-label" style={{ marginBottom: 0 }}>Included in every engagement</span>
            </div>
            <div className="pricing-included__grid">
              {includedAll.map(item => (
                <div className="pricing-included__item" key={item}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 11 8 15 16 6" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Pricing FAQ</p>
            <h2 className="section-title">Quick answers.</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: 760, margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-cta">
        <div className="container">
          <div className="pricing-cta__inner">
            <h2 className="pricing-cta__title">Not sure which plan fits?</h2>
            <p className="pricing-cta__subtitle">
              Tell us about your project in 5 minutes. We'll come back with a fixed quote in {cur?.code} within 48 hours.
            </p>
            <div className="pricing-cta__actions">
              <Link to="/contact" className="btn btn--gradient btn--lg btn--arrow">
                Get a custom quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
                Or chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
