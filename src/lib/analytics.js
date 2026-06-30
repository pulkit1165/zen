// Google Ads conversion tracking — Zenvora Labs
// Account 8610030492 · Google tag AW-18177939027
//
// The base gtag.js loader + gtag('config', 'AW-18177939027') live in index.html.
// This module fires conversion events and wires them to real user actions
// without having to touch every link / CTA in the app.

export const AW_ID = 'AW-18177939027'

// send_to labels for each conversion action created in Google Ads.
export const CONVERSIONS = {
  contactForm:  'AW-18177939027/LInbCKHho8gcENOs9dtD', // Contact Form Submission (primary)
  bookDemo:     'AW-18177939027/a3MHCKTho8gcENOs9dtD', // Book a Demo (primary)
  requestQuote: 'AW-18177939027/Euu0CKfho8gcENOs9dtD', // Request a Quote (primary)
  whatsapp:     'AW-18177939027/x_rICKrho8gcENOs9dtD', // WhatsApp Click (primary)
  phone:        'AW-18177939027/_ydtCK3ho8gcENOs9dtD', // Phone Call Click (primary)
  email:        'AW-18177939027/pWDnCLDho8gcENOs9dtD', // Email Click (secondary)
  leadCta:      'AW-18177939027/Ns02CLPho8gcENOs9dtD', // Lead CTA Click (secondary)
}

function getGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
    ? window.gtag
    : null
}

// Fire a Google Ads conversion. gtag delivers via sendBeacon, so this is
// safe to call immediately before an outbound navigation.
export function fireConversion(sendTo) {
  const gtag = getGtag()
  if (!gtag || !sendTo) return
  gtag('event', 'conversion', { send_to: sendTo })
}

// Contact form submit. Hands the lead's details to gtag for Enhanced
// Conversions (gtag hashes them with SHA-256 in-browser before sending),
// then fires the conversion.
export function trackContactForm(user) {
  setUserProvidedData(user)
  fireConversion(CONVERSIONS.contactForm)
}

// Normalize + provide first-party data for Enhanced Conversions. Safe to call
// even before customer-data terms are accepted in the Ads UI — Google simply
// ignores the extra data until enhanced conversions is switched on.
function setUserProvidedData(user) {
  const gtag = getGtag()
  if (!gtag || !user) return
  const data = {}
  if (user.email) data.email = String(user.email).trim().toLowerCase()
  if (user.phone) data.phone_number = String(user.phone).replace(/[^\d+]/g, '')
  if (user.name) {
    const parts = String(user.name).trim().split(/\s+/).filter(Boolean)
    data.address = {
      first_name: parts[0] || undefined,
      last_name: parts.length > 1 ? parts.slice(1).join(' ') : undefined,
      country: user.country || undefined,
    }
  }
  gtag('set', 'user_data', data)
}

// Fire a page_view for the Ads tag on SPA route changes (powers remarketing
// across client-side navigations, which a single index.html config would miss).
export function trackPageView(path) {
  const gtag = getGtag()
  if (!gtag) return
  gtag('event', 'page_view', {
    send_to: AW_ID,
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
  })
}

// Classify an internal /contact CTA by its visible text.
function classifyContactCta(text) {
  const t = (text || '').toLowerCase()
  if (t.includes('quote')) return CONVERSIONS.requestQuote
  if (t.includes('demo') || t.includes('map my business')) return CONVERSIONS.bookDemo
  return CONVERSIONS.leadCta
}

let started = false

// One delegated, capture-phase click listener handles every WhatsApp / phone /
// email link and every lead CTA that routes to /contact — so links are tracked
// automatically, with no per-element wiring and nothing to keep in sync.
export function initConversionTracking() {
  if (started || typeof document === 'undefined') return
  started = true

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target
      const anchor = target && target.closest ? target.closest('a') : null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      if (!href) return

      // Outbound contact channels — matched by href (robust to copy changes).
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href)) {
        return fireConversion(CONVERSIONS.whatsapp)
      }
      if (/^tel:/i.test(href)) {
        return fireConversion(CONVERSIONS.phone)
      }
      if (/^mailto:/i.test(href)) {
        return fireConversion(CONVERSIONS.email)
      }

      // Internal lead CTAs that route to the contact page.
      let pathname = href
      try {
        pathname = new URL(href, window.location.origin).pathname
      } catch {
        /* relative / unparseable href — fall back to the raw value */
      }
      if (pathname === '/contact') {
        fireConversion(classifyContactCta(anchor.textContent))
      }
    },
    true, // capture phase: fire before React Router intercepts the click
  )
}
