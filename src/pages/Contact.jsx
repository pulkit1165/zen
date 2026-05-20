import { useState } from 'react'
import './Contact.css'

const WHATSAPP = 'https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project.'
const EMAIL = 'hello@zenvoralabs.xyz'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', business: '', city: '', phone: '', whatsapp: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, integrate with email service (EmailJS, Formspree, etc.)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="page-hero__title">Let's Get Started</h1>
          <p className="page-hero__subtitle">Tell us about your project and we'll get back to you within 2 hours.</p>
        </div>
      </section>

      <section className="section" id="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 2 hours during business hours (9am–8pm IST).</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                    Or Chat on WhatsApp Now
                  </a>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Rajinder Singh" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="business">Business Name</label>
                      <input type="text" id="business" name="business" value={form.business} onChange={handleChange} placeholder="Singh Textiles" />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="city">City</label>
                      <input type="text" id="city" name="city" value={form.city} onChange={handleChange} placeholder="Ludhiana" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="whatsapp">WhatsApp Number <span className="optional">(if different)</span></label>
                      <input type="tel" id="whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="service">Service You Need</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="website">Website</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">Tell Us About Your Business</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Brief description of your business and what you need..." />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg" id="contact-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <aside className="contact-sidebar">
              <div className="contact-sidebar__card">
                <div className="contact-sidebar__icon">💬</div>
                <h3>Prefer WhatsApp?</h3>
                <p>Skip the form and message us directly. We respond in minutes.</p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{width: '100%'}}>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-sidebar__card">
                <div className="contact-sidebar__icon">📧</div>
                <h3>Email Us</h3>
                <a href={`mailto:${EMAIL}`} className="contact-sidebar__link">{EMAIL}</a>
              </div>

              <div className="contact-sidebar__card">
                <div className="contact-sidebar__icon">📞</div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210" className="contact-sidebar__link">+91 98765 43210</a>
              </div>

              <div className="contact-sidebar__note">
                <p>⏰ We typically respond within <strong>2 hours</strong> during business hours (9am–8pm IST)</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
