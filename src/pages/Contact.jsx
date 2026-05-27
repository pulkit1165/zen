import { useState } from 'react'
import './Contact.css'

const WHATSAPP = 'https://wa.me/918264449956?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project.'
const EMAIL = 'growth@zenvoralabs.xyz'
const PHONE = '+91 82644 49956'

const services = [
  'New website / replatform',
  'Web app or SaaS build',
  'Performance marketing (Meta / Google / TikTok)',
  'SEO & conversion optimisation',
  'Analytics & tracking',
  'Build → grow (end-to-end)',
  'Not sure yet — let\'s talk',
]

const budgets = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k – $150k', '$150k+', 'Monthly retainer']
const countries = ['Australia', 'Canada', 'United States', 'United Kingdom', 'UAE', 'Singapore', 'India', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '', phone: '', service: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to Formspree, Resend, or your backend.
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__inner">
          <p className="section-label">Get in touch</p>
          <h1 className="page-hero__title">
            Let's talk.<br />
            <span className="gradient-text">No deck. No sales pitch.</span>
          </h1>
          <p className="page-hero__subtitle">
            Tell us about your project below or pick whichever channel suits you. We reply within 2 working hours during AU, US and EU business days.
          </p>
        </div>
      </section>

      <section className="section" id="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Message received.</h3>
                  <p>One of our partners will reply within 2 working hours. Need us sooner?</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                    Chat on WhatsApp now
                  </a>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__head">
                    <p className="section-label" style={{ marginBottom: 8 }}>Project brief</p>
                    <h2 className="contact-form__title">Tell us a bit about what you're building.</h2>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">Your name</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Pty Ltd" />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="email">Work email <span className="required">*</span></label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@acme.com" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="country">Country / market</label>
                      <select id="country" name="country" value={form.country} onChange={handleChange}>
                        <option value="">Select…</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="service">What do you need?</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select…</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="budget">Approx. budget</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select…</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">Project details</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5" placeholder="What are you building, what's the timeline, what does success look like?" />
                  </div>

                  <div className="contact-form__field contact-form__field--phone">
                    <label htmlFor="phone">Phone / WhatsApp <span className="optional">(optional)</span></label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 415 555 0102" />
                  </div>

                  <button type="submit" className="btn btn--gradient btn--lg btn--arrow" id="contact-submit">
                    Send project brief
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="contact-form__legal">
                    By submitting, you agree to our friendly privacy policy. We never share your details, and we don't add you to a marketing list.
                  </p>
                </form>
              )}
            </div>

            <aside className="contact-sidebar">
              <div className="contact-sidebar__card contact-sidebar__card--featured">
                <div className="contact-sidebar__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3>Fastest way in</h3>
                <p>Most clients message us on WhatsApp. We typically reply within an hour.</p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ width: '100%' }}>
                  WhatsApp us
                </a>
              </div>

              <div className="contact-sidebar__card">
                <h4 className="contact-sidebar__label">Email</h4>
                <a href={`mailto:${EMAIL}`} className="contact-sidebar__link">{EMAIL}</a>
              </div>

              <div className="contact-sidebar__card">
                <h4 className="contact-sidebar__label">Phone</h4>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="contact-sidebar__link">{PHONE}</a>
                <p className="contact-sidebar__note">Mon–Fri · 9am–8pm IST (covers AU / SG / IN business hours)</p>
              </div>

              <div className="contact-sidebar__card contact-sidebar__card--timezones">
                <h4 className="contact-sidebar__label">We work across</h4>
                <div className="contact-sidebar__timezones">
                  <div><strong>Sydney</strong><span>UTC+10</span></div>
                  <div><strong>Dubai</strong><span>UTC+4</span></div>
                  <div><strong>London</strong><span>UTC+0</span></div>
                  <div><strong>New York</strong><span>UTC−5</span></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
