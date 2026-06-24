import { Link } from 'react-router-dom'
import HeroLab from './HeroLab'
import './Home.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'

const stats = [
  { value: '₹400Cr+', label: 'Ad spend managed' },
  { value: '4.1×', label: 'Median ROAS' },
  { value: '180+', label: 'Brands shipped' },
  { value: '6', label: 'Markets covered' },
]

const services = [
  {
    num: '01',
    name: 'Google Ads',
    desc: 'Search, Performance Max, Shopping and YouTube — managed by senior buyers, not interns.',
  },
  {
    num: '02',
    name: 'Meta Ads',
    desc: 'Facebook, Instagram and Reels campaigns built around creative testing and full-funnel measurement.',
  },
  {
    num: '03',
    name: 'TikTok Ads',
    desc: 'Platform-native creative briefs and Spark Ads for brands ready to actually live on TikTok.',
  },
  {
    num: '04',
    name: 'LinkedIn Ads',
    desc: 'Account-based targeting for SaaS and services teams chasing pipeline, not impressions.',
  },
  {
    num: '05',
    name: 'SEO & Content',
    desc: 'Technical foundations, programmatic content and Answer Engine Optimisation for AI search.',
  },
  {
    num: '06',
    name: 'CRO & Landing',
    desc: 'A/B testing, landing page systems and conversion engineering tied to revenue, not vanity.',
  },
  {
    num: '07',
    name: 'Web & App Engineering',
    desc: 'Next.js, React, Node and Postgres. Marketing sites, SaaS apps and custom platforms — built right.',
  },
  {
    num: '08',
    name: 'AI Workflows',
    desc: 'Custom GPTs, RAG agents and internal copilots that take real work off your team\'s plate.',
  },
]

const industries = [
  { name: 'D2C & E-commerce', flag: '🛍' },
  { name: 'B2B SaaS', flag: '💼' },
  { name: 'Home Services', flag: '🏠' },
  { name: 'Health & Fitness', flag: '🏋' },
  { name: 'Hospitality', flag: '🍽' },
  { name: 'Lead Generation', flag: '📞' },
]

const aiCapabilities = [
  { title: 'Creative at scale', desc: 'Briefs, scripts and storyboards spun up in hours with custom LLM workflows tuned to your brand voice.' },
  { title: 'Real-time bid intelligence', desc: 'In-house tooling reads platform signals every hour and routes budget to whichever creative is actually working today.' },
  { title: 'Ops copilots', desc: 'Internal GPTs that draft client reports, write QBR decks and pull data from Looker before your team is even online.' },
]

const team = [
  { name: 'Ex-IIT founders', role: 'Engineering leadership', desc: 'Two decades shipping production systems for India\'s biggest internet companies.' },
  { name: 'Ex-Brand Croissance buyers', role: 'Paid media', desc: 'Senior buyers who\'ve scaled D2C brands from ₹1 Cr to ₹100 Cr ARR.' },
  { name: 'In-house creative pod', role: 'Brand & video', desc: 'Designers, copywriters and editors producing ad creative weekly for live campaigns.' },
]

const testimonials = [
  {
    quote: 'Six weeks in, our blended ROAS doubled and we finally trust the numbers we report to investors. Zenvora moves like an in-house team.',
    name: 'Eliza M.',
    role: 'Founder · D2C skincare',
    flag: '🇦🇺',
  },
  {
    quote: 'They rebuilt our site in Next.js, wired up server-side tracking and ran our LinkedIn pipeline — all under one team. Painfully rare.',
    name: 'David K.',
    role: 'Head of Growth · B2B SaaS',
    flag: '🇨🇦',
  },
  {
    quote: 'The AI workflows alone saved our ops team about 20 hours a week. The performance side just kept paying for itself.',
    name: 'Priya N.',
    role: 'CMO · Health-tech',
    flag: '🇺🇸',
  },
]

const faqs = [
  {
    q: 'Where are you based and who do you work with?',
    a: 'Studio in Mohali, India. We work with founders and growth leads across India, Australia, Canada, the US, the UK and the UAE — async-first on Slack and WhatsApp, with weekly calls in your timezone.',
  },
  {
    q: 'Are you a dev agency or a marketing agency?',
    a: 'Both, intentionally. Most teams have to choose between a developer who can\'t do marketing or a marketer who can\'t change a button. We run engineering and paid growth as one team so the site, ads and tracking line up.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Build projects are fixed-scope, fixed-price (in INR, USD, AUD, CAD or GBP). Retainers are flat monthly fees — no commission on ad spend. Full pricing on the pricing page.',
  },
  {
    q: 'How fast can we start?',
    a: 'Discovery call within 48 hours. Most engagements kick off within a week. Landing pages and campaign launches can be live in 7–14 days from contract.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroLab />

      {/* ── STATS STRIP ── */}
      <section className="stats">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div className="stats__cell" key={i}>
              <div className="type-stat">{s.value}</div>
              <div className="type-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO / WHO WE ARE ── */}
      <section className="section section--paper" id="intro">
        <div className="container-content intro__layout">
          <div className="intro__col-left">
            <p className="type-eyebrow">Who we are</p>
          </div>
          <div className="intro__col-right">
            <h2 className="type-h2 intro__headline">
              A senior, in-house growth team — <span className="serif-italic">without the in-house overhead.</span>
            </h2>
            <p className="type-body intro__body">
              Zenvora Labs is a small, deliberately senior studio. We run paid media, ship engineering and build the AI workflows that make both move faster. No account managers, no junior staffing models, no ad-spend kickbacks. Just operators who&apos;ve done this at scale.
            </p>
            <div className="intro__signals">
              <span className="pill pill-dot">India HQ · Global delivery</span>
              <span className="pill pill-dot">Senior team · No juniors</span>
              <span className="pill pill-dot">Flat fees · No spend markup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES EXPLORER ── */}
      <section className="section services-explorer" data-testid="section-services-explorer">
        <div className="container-content">
          <div className="explorer__header">
            <p className="type-eyebrow">What we do</p>
            <h2 className="type-h2 explorer__headline">
              Eight things, done well — <span className="serif-italic">stitched into one engine.</span>
            </h2>
          </div>

          <div className="explorer__grid">
            {services.map(s => (
              <article className="explorer__cell" key={s.num}>
                <div className="explorer__cell-num type-label">{s.num} · Service</div>
                <h3 className="type-h4 explorer__cell-name">{s.name}</h3>
                <p className="type-body-sm explorer__cell-desc">{s.desc}</p>
                <Link to="/services" className="explorer__cell-link">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="explorer__cta">
            <Link to="/services" className="btn btn-outline">See full capability map</Link>
          </div>
        </div>
      </section>

      {/* ── AI / METHODOLOGY ── */}
      <section className="section section--ink" data-testid="section-ai-take">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content ai__layout">
          <div className="ai__col-left">
            <p className="type-eyebrow">The AI layer</p>
            <h2 className="type-h2 ai__headline">
              We use AI like a senior team — <span className="serif-italic">not like a chatbot.</span>
            </h2>
            <p className="type-body ai__body">
              Every Zenvora engagement comes with a custom AI workspace — purpose-built LLM workflows that draft creative briefs, write reports, fan out landing-page variants and watch your platforms for anomalies. The team gets faster. You get the upside.
            </p>
            <div className="ai__actions">
              <Link to="/contact" className="btn btn--cream btn-lg">Tour the AI workspace</Link>
            </div>
          </div>
          <div className="ai__col-right">
            {aiCapabilities.map((cap, i) => (
              <div className="ai__capability" key={i}>
                <div className="ai__capability-num type-label">0{i + 1}</div>
                <h3 className="type-h4 ai__capability-title">{cap.title}</h3>
                <p className="ai__capability-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section section--soft" id="industries-strip">
        <div className="container-content">
          <div className="industries__header">
            <p className="type-eyebrow">Industries</p>
            <h2 className="type-h2 industries__headline">
              Verticals we already <span className="serif-italic">know cold.</span>
            </h2>
          </div>
          <div className="industries__grid">
            {industries.map(ind => (
              <Link to="/services#industries" className="industry-cell" key={ind.name}>
                <span className="industry-cell__icon" aria-hidden="true">{ind.flag}</span>
                <span className="type-h4 industry-cell__name">{ind.name}</span>
                <span className="industry-cell__arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="section" data-testid="section-team">
        <div className="container-content team__layout">
          <div className="team__col-left">
            <p className="type-eyebrow">The team</p>
            <h2 className="type-h2 team__headline">
              People who&apos;ve been the <span className="serif-italic">in-house team.</span>
            </h2>
            <p className="type-body team__body">
              No outsourced creative shops. No offshored campaign management. Every engagement is run by operators who&apos;ve shipped, scaled and reported the numbers themselves.
            </p>
          </div>
          <div className="team__col-right">
            {team.map(member => (
              <div className="team__row" key={member.name}>
                <div className="team__row-head">
                  <span className="type-h4">{member.name}</span>
                  <span className="type-label">{member.role}</span>
                </div>
                <p className="type-body-sm team__row-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section--paper">
        <div className="container-content">
          <div className="testimonials__header">
            <p className="type-eyebrow">Said about us</p>
            <h2 className="type-h2">What our partners are <span className="serif-italic">actually saying.</span></h2>
          </div>
          <div className="testimonials__grid">
            {testimonials.map(t => (
              <figure className="testimonial-quote" key={t.name}>
                <blockquote className="testimonial-quote__body">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="testimonial-quote__cite">
                  <div className="testimonial-quote__name">{t.name} <span>{t.flag}</span></div>
                  <div className="testimonial-quote__role">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--cream">
        <div className="container-content faq__layout">
          <div className="faq__intro">
            <p className="type-eyebrow">Common questions</p>
            <h2 className="type-h2 faq__headline">Quick answers <span className="serif-italic">before we talk.</span></h2>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ marginTop: 28 }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="faq__list">
            {faqs.map(f => (
              <details className="faq-item" key={f.q}>
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

      {/* ── ASK AI ── */}
      <section className="section section--ink ask-ai" data-testid="section-ask-ai">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content ask-ai__inner">
          <p className="type-eyebrow">Ask the AI</p>
          <h2 className="type-h2 ask-ai__headline" data-testid="text-ask-ai-headline">
            Try our growth GPT — <span className="serif-italic">on the house.</span>
          </h2>
          <p className="type-body ask-ai__body">
            Type any growth or build question. Our public assistant will draft a real answer, suggest a stack and tell you whether you actually need an agency for it.
          </p>
          <form className="ask-ai__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="ask-ai__input"
              placeholder="e.g. how do I lower my Meta CPA for a fitness app launching in Australia?"
              aria-label="Ask a growth question"
            />
            <button type="submit" className="btn btn--cream">
              Ask
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
          <p className="ask-ai__note type-label">Beta · No login · No follow-up emails unless you ask</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section section--cream final-cta">
        <div className="container-content final-cta__inner">
          <h2 className="type-h2 final-cta__title">
            Ready to <span className="serif-italic">actually move the numbers?</span>
          </h2>
          <p className="type-body final-cta__sub">
            Book a free 30-minute call. We&apos;ll review your goals, your stack and your spend, and come back with a fixed proposal in 48 hours. No deck, no fluff.
          </p>
          <div className="final-cta__actions">
            <Link to="/contact" className="btn btn-cta btn-lg btn--arrow">
              Get a proposal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
              Or chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
