import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import useReveal from '../lib/useReveal'
import './Solutions.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20a%20demo%20of%20your%20ERP%20%2F%20AI%20solutions.'

const anchors = [
  { to: '#erp', label: 'ERP' },
  { to: '#ai', label: 'AI Solutions' },
  { to: '#custom-software', label: 'Custom Software' },
  { to: '#industries', label: 'Industries' },
  { to: '#why-us', label: 'Why us' },
  { to: '#reviews', label: 'Reviews' },
]

const erpModules = [
  { name: 'Inventory Management', icon: 'box' },
  { name: 'Purchase Management', icon: 'cart' },
  { name: 'Sales Management', icon: 'tag' },
  { name: 'CRM', icon: 'users' },
  { name: 'Accounts & Finance', icon: 'card' },
  { name: 'Warehouse Management', icon: 'warehouse' },
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'HR & Payroll', icon: 'hr' },
  { name: 'Vendor Management', icon: 'truck' },
  { name: 'Customer Management', icon: 'userCheck' },
  { name: 'Reports & Analytics', icon: 'barChart' },
  { name: 'BI Dashboards', icon: 'pieChart' },
  { name: 'AI Automation', icon: 'cpu' },
  { name: 'Workflow Automation', icon: 'zap' },
  { name: 'Role Management', icon: 'shield' },
  { name: 'Mobile Access', icon: 'smartphone' },
  { name: 'Cloud & On-Premise', icon: 'cloud' },
]

const aiServices = [
  { name: 'AI Chatbots', icon: 'message', desc: 'On-brand assistants trained on your business.' },
  { name: 'AI Support Agents', icon: 'headphones', desc: 'Resolve customer queries around the clock.' },
  { name: 'AI Sales Assistants', icon: 'tag', desc: 'Qualify, recommend and convert, automatically.' },
  { name: 'AI Voice Agents', icon: 'mic', desc: 'Natural voice that books, answers and routes.' },
  { name: 'AI Workflow Automation', icon: 'zap', desc: 'Trigger actions across your stack, hands-free.' },
  { name: 'AI Business Analytics', icon: 'trending', desc: 'Turn raw operational data into direction.' },
  { name: 'AI Report Generation', icon: 'fileText', desc: 'Board-ready reports written in seconds.' },
  { name: 'AI Data Analysis', icon: 'database', desc: 'Find the signal across every system you run.' },
  { name: 'AI Decision Support', icon: 'target', desc: 'Recommendations leadership can act on.' },
  { name: 'Custom AI Integrations', icon: 'link', desc: 'Drop AI into the tools you already use.' },
  { name: 'AI API Development', icon: 'code', desc: 'Production AI endpoints, built to scale.' },
]

const chatbotCaps = [
  'Understands your business structure',
  'Analyzes sales and operational data',
  'Surfaces real-time business insights',
  'Answers questions about performance',
  'Suggests concrete improvements',
  'Generates reports on demand',
  'Helps management decide faster',
]

const softwareTypes = [
  { name: 'ERP Systems', icon: 'layers' },
  { name: 'CRM Platforms', icon: 'users' },
  { name: 'Inventory Software', icon: 'box' },
  { name: 'Accounting Software', icon: 'card' },
  { name: 'POS Systems', icon: 'grid' },
  { name: 'HRMS', icon: 'hr' },
  { name: 'Mobile Applications', icon: 'smartphone' },
  { name: 'Web Applications', icon: 'monitor' },
  { name: 'Customer Portals', icon: 'userCheck' },
  { name: 'Vendor Portals', icon: 'truck' },
  { name: 'Dealer Management', icon: 'handshake' },
  { name: 'Warehouse Management', icon: 'warehouse' },
  { name: 'Logistics Software', icon: 'send' },
  { name: 'Manufacturing Software', icon: 'factory' },
  { name: 'Custom Dashboards', icon: 'pieChart' },
  { name: 'API Development', icon: 'code' },
  { name: 'SaaS Platforms', icon: 'cloud' },
]

const industries = [
  { name: 'E-commerce', icon: 'bag' },
  { name: 'Manufacturing', icon: 'factory' },
  { name: 'Retail', icon: 'tag' },
  { name: 'Healthcare', icon: 'activity' },
  { name: 'Education', icon: 'book' },
  { name: 'Logistics', icon: 'truck' },
  { name: 'Warehousing', icon: 'warehouse' },
  { name: 'Distribution', icon: 'box' },
  { name: 'FMCG', icon: 'cart' },
  { name: 'Fashion & Apparel', icon: 'shirt' },
  { name: 'Finance', icon: 'dollar' },
  { name: 'Hospitality', icon: 'coffee' },
  { name: 'Real Estate', icon: 'building' },
  { name: 'Automotive', icon: 'truck' },
  { name: 'Pharmaceuticals', icon: 'pill' },
  { name: 'Service Businesses', icon: 'briefcase' },
]

const whyUs = [
  { title: 'AI-first approach', desc: 'Intelligence built into every workflow, not bolted on after.', icon: 'sparkles' },
  { title: 'Custom-built solutions', desc: 'Shaped around your processes — never a forced template.', icon: 'sliders' },
  { title: 'Fast implementation', desc: 'Live in weeks, with momentum from day one.', icon: 'rocket' },
  { title: 'Enterprise-grade security', desc: 'Hardened, audited and compliant by default.', icon: 'lock' },
  { title: 'Scalable architecture', desc: 'Built to carry you from first user to millions.', icon: 'layers' },
  { title: 'Dedicated support', desc: 'A real team on your timezone, not a ticket queue.', icon: 'headphones' },
  { title: 'Cloud-ready infrastructure', desc: 'Deploy to cloud or on-premise — your call.', icon: 'cloud' },
  { title: 'Seamless integrations', desc: 'Connects cleanly with the tools you already run.', icon: 'link' },
  { title: 'Affordable pricing', desc: 'Enterprise capability without the enterprise invoice.', icon: 'dollar' },
  { title: 'End-to-end under one roof', desc: 'Strategy, build, AI and support from a single team.', icon: 'check' },
]

const reviews = [
  {
    quote: 'The ERP put inventory, purchase and production on one screen. We finally see true stock and margins in real time — month-end is no longer a guessing game.',
    company: 'SILVERUP Industries',
    meta: 'Founder · Ludhiana, India',
    initials: 'SU',
  },
  {
    quote: 'They understood how a factory actually runs. Our purchase and sales cycles are tighter, and the dashboards tell us exactly where to act.',
    company: 'Star Industries',
    meta: 'Founder · India',
    initials: 'SI',
  },
  {
    quote: 'From raw material to dispatch, everything is tracked. The manufacturing and warehouse modules were shaped around our process — not the other way around.',
    company: 'Ashoka Multimentals Pvt Ltd',
    meta: 'Founder · India',
    initials: 'AM',
  },
  {
    quote: 'They built our booking and operations platform end to end — fast, reliable and as premium as the service we deliver. Exactly what we needed to scale across Melbourne.',
    company: 'TransfersX',
    meta: "Founder · Melbourne's premium chauffeur service",
    initials: 'TX',
  },
  {
    quote: 'The AI reporting changed our weekly reviews. We ask a question and get the answer with the report attached — no more digging through spreadsheets.',
    company: 'Skysun Industries',
    meta: 'Founder · India',
    initials: 'SK',
  },
  {
    quote: 'Custom software built around our workflow. Bookings, inventory and customer records finally live in one place — it just works.',
    company: 'Naarm Auto Haus',
    meta: 'Founder · Melbourne, Australia',
    initials: 'NA',
  },
  {
    quote: 'A genuine technology partner — sharp, responsive, and they ship. The AI workflows we added save our team hours every week.',
    company: 'Digital Sauce',
    meta: 'Founder · Melbourne, Australia',
    initials: 'DS',
  },
]

const Stars = () => (
  <span className="review-card__stars" aria-label="Rated 5 out of 5">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
)

export default function Solutions() {
  const reveal = useReveal()

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'AI ERP, AI Solutions & Custom Software | Zenvora Labs'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    meta?.setAttribute(
      'content',
      'Zenvora Labs builds AI-powered ERP, AI assistants and custom software — ERP, CRM, POS, HRMS, web & mobile apps — for businesses of every size. Fully customizable, cloud or on-premise.'
    )
    return () => {
      document.title = prevTitle
      if (meta && prevDesc) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div ref={reveal}>
      {/* ── HERO ── */}
      <section className="page-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content page-hero__inner">
          <p className="type-eyebrow">Complete technology solutions</p>
          <h1 className="type-h1 page-hero__title" data-reveal>
            Everything your business runs on — <span className="serif-italic">built and run under one roof.</span>
          </h1>
          <p className="type-body page-hero__subtitle" data-reveal>
            We&apos;re a complete technology partner: a fully AI-powered ERP, intelligent AI assistants,
            and custom software tailored to exactly how your business works — from startups and SMEs to
            large enterprises.
          </p>
          <div className="hero__actions" data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
            <Link to="/contact" className="btn btn-cta btn-lg btn--arrow">
              Book a demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Talk to us</a>
          </div>
          <nav className="sol-anchors" aria-label="Jump to section" data-reveal>
            {anchors.map(a => (
              <a key={a.to} href={a.to} className="sol-anchor">{a.label}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── ERP ── */}
      <section className="section section--paper" id="erp">
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">AI-powered ERP</p>
            <h2 className="type-h2 sol-head__title">One ERP for your <span className="serif-italic">entire operation.</span></h2>
            <p className="type-body">
              A complete, AI-powered ERP for businesses of every size — startups, SMEs and large enterprises alike.
              Every module talks to every other, so your inventory, sales, finance and people move as one system.
            </p>
          </div>

          <div className="feature-grid">
            {erpModules.map((m, i) => (
              <article className="feature-card" key={m.name} data-reveal style={{ transitionDelay: `${(i % 8) * 45}ms` }}>
                <span className="feature-card__icon"><Icon name={m.icon} /></span>
                <span className="feature-card__name">{m.name}</span>
              </article>
            ))}
          </div>

          <div className="sol-note" data-reveal>
            <span className="sol-note__icon"><Icon name="sliders" size={20} /></span>
            <p><strong>Fully customizable.</strong> Every module is tailored to your business requirements — add, remove or reshape workflows to match exactly how you operate.</p>
          </div>
        </div>
      </section>

      {/* ── AI SOLUTIONS ── */}
      <section className="section section--soft" id="ai">
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">AI Solutions</p>
            <h2 className="type-h2 sol-head__title">AI that becomes a <span className="serif-italic">member of your team.</span></h2>
            <p className="type-body">
              We build AI assistants that understand your business and act on it — automating the busywork and
              giving leadership a sharper view of what&apos;s really happening.
            </p>
          </div>

          <div className="feature-grid">
            {aiServices.map((s, i) => (
              <article className="feature-card" key={s.name} data-reveal style={{ transitionDelay: `${(i % 8) * 45}ms` }}>
                <span className="feature-card__icon"><Icon name={s.icon} /></span>
                <span className="feature-card__name">{s.name}</span>
                <span className="feature-card__desc">{s.desc}</span>
              </article>
            ))}
          </div>

          <div className="ai-partner">
            <div className="ai-partner__card ai-partner__card--dark" data-reveal>
              <span className="ai-partner__eyebrow"><Icon name="sparkles" size={15} /> Your AI business partner</span>
              <h3 className="ai-partner__title">Not just a chatbot — an intelligent partner that knows your business.</h3>
              <p className="ai-partner__lead">
                Our AI connects to your ERP and data, so it doesn&apos;t just chat — it reasons about your numbers and
                helps you run the company.
              </p>
            </div>
            <div className="ai-partner__card ai-partner__card--light" data-reveal style={{ transitionDelay: '80ms' }}>
              <ul className="ai-caps">
                {chatbotCaps.map(c => (
                  <li key={c}><Icon name="check" size={18} />{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM SOFTWARE ── */}
      <section className="section section--paper" id="custom-software">
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">Custom Software Development</p>
            <h2 className="type-h2 sol-head__title">If your business has a process, <span className="serif-italic">we can build the software to run it.</span></h2>
            <p className="type-body">
              Complete, production-grade software — designed, engineered and supported end to end. From internal
              tools to customer-facing platforms, built for your exact workflow.
            </p>
          </div>

          <div className="feature-grid">
            {softwareTypes.map((s, i) => (
              <article className="feature-card" key={s.name} data-reveal style={{ transitionDelay: `${(i % 8) * 45}ms` }}>
                <span className="feature-card__icon"><Icon name={s.icon} /></span>
                <span className="feature-card__name">{s.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section section--soft" id="industries">
        <div className="container-content">
          <div className="sol-head sol-head--center" data-reveal>
            <p className="type-eyebrow">Industries we serve</p>
            <h2 className="type-h2 sol-head__title">Built for the way <span className="serif-italic">your industry works.</span></h2>
            <p className="type-body">Deep, sector-specific solutions across the businesses that keep economies moving.</p>
          </div>

          <div className="industry-grid">
            {industries.map((ind, i) => (
              <div className="industry-chip" key={ind.name} data-reveal style={{ transitionDelay: `${(i % 8) * 40}ms` }}>
                <Icon name={ind.icon} size={20} />{ind.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section section--ink" id="why-us">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">Why choose us</p>
            <h2 className="type-h2 sol-head__title">A trusted technology partner — <span className="serif-italic">not just another vendor.</span></h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-item" key={w.title} data-reveal style={{ transitionDelay: `${(i % 6) * 45}ms` }}>
                <span className="why-item__icon"><Icon name={w.icon} size={20} /></span>
                <div>
                  <div className="why-item__title">{w.title}</div>
                  <div className="why-item__desc">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER REVIEWS ── */}
      <section className="section section--paper" id="reviews">
        <div className="container-content">
          <div className="sol-head sol-head--center" data-reveal>
            <p className="type-eyebrow">Trusted by founders</p>
            <h2 className="type-h2 sol-head__title">Results founders <span className="serif-italic">vouch for.</span></h2>
            <p className="type-body">From manufacturing floors in India to premium service brands in Melbourne.</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <article className="review-card" key={r.company} data-reveal style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                <Stars />
                <p className="review-card__quote">{r.quote}</p>
                <div className="review-card__author">
                  <span className="review-card__avatar" aria-hidden="true">{r.initials}</span>
                  <div>
                    <div className="review-card__name">{r.company}</div>
                    <div className="review-card__meta">{r.meta}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cream">
        <div className="container-content">
          <div className="sol-cta" data-reveal>
            <p className="type-eyebrow" style={{ justifyContent: 'center' }}>Let&apos;s build it</p>
            <h2 className="type-h2 sol-cta__title">Tell us your process. <span className="serif-italic">We&apos;ll build the system.</span></h2>
            <p className="type-body">
              Book a free demo and we&apos;ll show you how an AI-powered ERP, AI assistants and custom software fit
              your business — with a clear scope and price within 48 hours.
            </p>
            <div className="sol-cta__actions">
              <Link to="/contact" className="btn btn-cta btn-lg btn--arrow">
                Book a demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
