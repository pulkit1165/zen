import { useState } from 'react'
import './Pricing.css'

const WHATSAPP = 'https://wa.me/919876543210?text=Hi!%20I%27m%20interested%20in%20your%20services.'

const plans = [
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

const faqs = [
  {
    q: 'What do I need to provide to get started?',
    a: 'Just your business name, logo (or we can suggest one), photos if you have them, and a brief description of what your business does. We handle everything else.',
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Every package includes revision rounds. If you're still not satisfied, we offer a full refund — no questions asked.",
  },
  {
    q: 'Do you work with businesses outside Ludhiana and Jaipur?',
    a: 'Yes — we work with businesses across India and internationally. Our 48-hour guarantee applies everywhere.',
  },
  {
    q: 'What happens after the website goes live?',
    a: 'We hand over all login credentials and files. You own everything. We also offer monthly maintenance packages if you want ongoing support.',
  },
  {
    q: 'Can you build an eCommerce store?',
    a: 'Yes. eCommerce projects start at ₹25,000 and take 5–7 days depending on the number of products.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-item__question">
        <span>{faq.q}</span>
        <span className="faq-item__toggle">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-item__answer">{faq.a}</div>}
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      <section className="page-hero" id="pricing-hero">
        <div className="container">
          <p className="section-label">Pricing</p>
          <h1 className="page-hero__title">Simple Pricing. No Surprises.</h1>
          <p className="page-hero__subtitle">Pick a plan, tell us about your business, and we start building today. All prices in INR.</p>
        </div>
      </section>

      <section className="section" id="pricing-plans">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, i) => (
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

      <section className="section section--alt" id="faq">
        <div className="container">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
