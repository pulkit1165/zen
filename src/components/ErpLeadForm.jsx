import { useState } from 'react'
import { ERP_FORM_ENDPOINT } from '../config'
import { trackContactForm } from '../lib/analytics'
import './ErpLeadForm.css'

const WHATSAPP =
  'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20map%20my%20business%20system.'

const INDUSTRIES = [
  'Retail / D2C', 'Manufacturing', 'Wholesale / Distribution', 'Services / Agency',
  'Healthcare', 'Hospitality / F&B', 'Logistics & transport',
  'Real estate / construction', 'Other',
]
const TEAM_SIZES = ['1–10', '11–50', '51–200', '200+']
const SYSTEMS = [
  'Spreadsheets / WhatsApp', 'Tally / Zoho / Vyapar', 'Existing ERP (SAP, Oracle…)',
  'Custom in-house software', 'Nothing structured yet',
]

const EMPTY = {
  name: '', business: '', email: '', phone: '',
  industry: '', teamSize: '', currentSystem: '', message: '', _gotcha: '',
}

// Only POST when a real Apps Script Web App URL is configured.
const isConfigured = (url) => typeof url === 'string' && /^https:\/\/script\.google\.com\//.test(url)

export default function ErpLeadForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const payload = { ...form, source: 'ERP page' }
    try {
      if (isConfigured(ERP_FORM_ENDPOINT)) {
        // no-cors: Apps Script web apps don't return CORS headers, so we fire
        // and forget — the sheet + email are the source of truth.
        await fetch(ERP_FORM_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
        })
      }
      // Google Ads conversion + Enhanced Conversions data (hashed by gtag).
      trackContactForm({ name: form.name, email: form.email, phone: form.phone })
      setForm(EMPTY)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="erp-form-card erp-form-card--done" data-reveal>
        <div className="erp-form__check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="type-h3">Request received.</h3>
        <p className="type-body">
          We’ll study your operations and come back within one working day with a custom ERP map.
          Want to talk sooner?
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form className="erp-form-card erp-form" onSubmit={handleSubmit} id="map-form-el">
      <div className="erp-form__row">
        <div className="erp-form__field">
          <label htmlFor="ef-name">Your name <span className="req">*</span></label>
          <input id="ef-name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
        </div>
        <div className="erp-form__field">
          <label htmlFor="ef-business">Business name <span className="req">*</span></label>
          <input id="ef-business" name="business" type="text" required autoComplete="organization" value={form.business} onChange={handleChange} placeholder="Acme Pvt Ltd" />
        </div>
      </div>

      <div className="erp-form__row">
        <div className="erp-form__field">
          <label htmlFor="ef-email">Work email <span className="req">*</span></label>
          <input id="ef-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="jane@acme.com" />
        </div>
        <div className="erp-form__field">
          <label htmlFor="ef-phone">Phone / WhatsApp <span className="req">*</span></label>
          <input id="ef-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="erp-form__row">
        <div className="erp-form__field">
          <label htmlFor="ef-industry">Industry</label>
          <select id="ef-industry" name="industry" value={form.industry} onChange={handleChange}>
            <option value="">Select…</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div className="erp-form__field">
          <label htmlFor="ef-team">Team size</label>
          <select id="ef-team" name="teamSize" value={form.teamSize} onChange={handleChange}>
            <option value="">Select…</option>
            {TEAM_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="erp-form__field">
        <label htmlFor="ef-system">What runs your operations today?</label>
        <select id="ef-system" name="currentSystem" value={form.currentSystem} onChange={handleChange}>
          <option value="">Select…</option>
          {SYSTEMS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="erp-form__field">
        <label htmlFor="ef-message">What do you want to automate or control?</label>
        <textarea id="ef-message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="e.g. inventory across 3 branches, approvals, daily revenue reporting, WhatsApp updates to the owner…" />
      </div>

      {/* honeypot — hidden from people, catches bots */}
      <input className="erp-form__hp" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" value={form._gotcha} onChange={handleChange} aria-hidden="true" />

      <button type="submit" className="btn btn-cta btn-lg btn--arrow erp-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Map my business system'}
        {status !== 'sending' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        )}
      </button>

      {status === 'error' && (
        <p className="erp-form__error" role="alert">
          Something glitched on our side. Please WhatsApp us or email growth@zenvoralabs.xyz and we’ll jump on it.
        </p>
      )}

      <p className="erp-form__legal">
        We study your operations first — no spam, no marketing list. Your details stay private.
      </p>
    </form>
  )
}
