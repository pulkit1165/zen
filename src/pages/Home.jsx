import { Link } from 'react-router-dom'
import './Home.css'

const WHATSAPP = 'https://wa.me/919876543210?text=Hi!%20I%27m%20interested%20in%20getting%20a%20website.'

const trustItems = [
  { icon: '⚡', text: '48 Hour Delivery Guarantee' },
  { icon: '✓', text: '100+ Projects Delivered' },
  { icon: '📍', text: 'Ludhiana & Jaipur Based Clients' },
  { icon: '🤖', text: 'AI Automation Experts' },
]

const services = [
  {
    icon: '⚡',
    title: 'Website in 48 Hours',
    desc: 'A fast, mobile-friendly, professional website delivered in 48 hours flat. Perfect for exporters, shops, clinics, restaurants, and any business that needs to look credible online — fast.',
    price: '₹5,000',
  },
  {
    icon: '🤖',
    title: 'AI Automations',
    desc: 'WhatsApp auto-reply bots, lead capture automation, AI chatbots for your website, and workflow automation. Stop doing manually what a bot can do for you 24/7.',
    price: '₹8,000',
  },
  {
    icon: '📈',
    title: 'Maintenance & Growth',
    desc: 'Monthly website maintenance, Google My Business management, performance updates, and ongoing support so your site never goes stale.',
    price: '₹2,000/month',
  },
]

const steps = [
  { num: '01', title: 'You Share Your Brief', desc: 'Tell us your business, what you need, your logo and photos. Takes 10 minutes on WhatsApp.' },
  { num: '02', title: 'We Start Same Day', desc: 'Our team begins designing and building immediately. No waiting in queues.' },
  { num: '03', title: 'You Review at 24 Hours', desc: 'We send you a live preview link. You give feedback. We make changes.' },
  { num: '04', title: 'Go Live at 48 Hours', desc: 'Your site is published, hosted, and ready for customers. We hand over everything.' },
]

const pricing = [
  {
    name: 'Landing Page',
    label: 'Starter',
    price: '₹5,000',
    period: 'one-time',
    desc: 'For freelancers and small businesses who need a professional online presence fast.',
    features: ['1-page website', 'Mobile responsive', 'WhatsApp contact button', 'Google Maps embed', '48-hour delivery', '1 round of revisions'],
    popular: false,
  },
  {
    name: 'Business Website',
    label: 'Business',
    price: '₹12,000',
    period: 'one-time',
    desc: 'For growing businesses, exporters, and shops who need a complete online presence.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact & inquiry form', 'SEO basics setup', 'Google Analytics', '48-hour delivery', '2 rounds of revisions'],
    popular: true,
  },
  {
    name: 'Website + AI Bot',
    label: 'Pro',
    price: '₹20,000',
    period: 'one-time',
    desc: 'Website plus a WhatsApp AI bot that handles inquiries, qualifies leads, and replies 24/7.',
    features: ['Up to 5 pages', 'WhatsApp AI chatbot', 'Lead capture automation', 'CRM integration', '48-hour website delivery', '3 rounds of revisions', '30 days free support'],
    popular: false,
  },
]

const testimonials = [
  {
    quote: 'We needed a website urgently before a trade fair in Delhi. These guys delivered in less than 48 hours. Our foreign buyers were impressed.',
    name: 'Rajinder S.',
    role: 'Garment Exporter, Ludhiana',
  },
  {
    quote: 'The WhatsApp bot they set up handles 80% of our customer inquiries automatically. Saved us hours every day.',
    name: 'Priya M.',
    role: 'Boutique Owner, Jaipur',
  },
  {
    quote: "Affordable, fast, and they actually pick up the phone. Rare to find that combination.",
    name: 'Amit K.',
    role: 'Restaurant Owner, Ludhiana',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">🚀 Trusted by 100+ Indian Businesses</span>
            <h1 className="hero__title">
              Your Business Website — <br />
              <span className="hero__title-accent">Live in 48 Hours.</span> Guaranteed.
            </h1>
            <p className="hero__subtitle">
              Professional websites + AI automations for Ludhiana & Jaipur businesses. Starting at just ₹5,000. No delays, no excuses.
            </p>
            <div className="hero__actions">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg" id="hero-whatsapp-cta">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us Now
              </a>
              <Link to="/portfolio" className="btn btn--outline btn--lg" id="hero-portfolio-cta">
                See Our Work
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__graphic">
              <div className="hero__graphic-circle" />
              <div className="hero__graphic-icon">⚡</div>
              <div className="hero__graphic-text">48<span>hrs</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-bar" id="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            {trustItems.map((item, i) => (
              <div className="trust-bar__item" key={i}>
                <span className="trust-bar__icon">{item.icon}</span>
                <span className="trust-bar__text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Our Services</p>
            <h2 className="section-title">What We Build For You</h2>
            <p className="section-subtitle">Fast, affordable, and built to make your business look professional online.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="card service-card" key={i}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__price">Starting at <strong>{s.price}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section--alt" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">From Zero to Live in 48 Hours</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-card__num">{step.num}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="step-card__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section" id="pricing-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Simple Pricing. No Surprises.</h2>
            <p className="section-subtitle">Pick a plan, tell us about your business, and we start building today.</p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan, i) => (
              <div className={`card pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`} key={i}>
                {plan.popular && <div className="pricing-card__badge">Most Popular</div>}
                <div className="pricing-card__label">{plan.label}</div>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">
                  {plan.price} <span className="pricing-card__period">{plan.period}</span>
                </div>
                <p className="pricing-card__desc">{plan.desc}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--primary)"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`btn ${plan.popular ? 'btn--primary' : 'btn--outline'}`} style={{width: '100%'}}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section--alt" id="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="card testimonial-card" key={i}>
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta" id="final-cta">
        <div className="container">
          <div className="final-cta__inner">
            <h2 className="final-cta__title">Ready to Go Live in 48 Hours?</h2>
            <p className="final-cta__subtitle">WhatsApp us right now and we'll get started today. No lengthy forms. No waiting.</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--white btn--lg" id="final-cta-whatsapp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--primary)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp Now
            </a>
            <p className="final-cta__phone">Or call us: <a href="tel:+919876543210">+91 98765 43210</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
