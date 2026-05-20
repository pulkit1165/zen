import './Services.css'

const WHATSAPP = 'https://wa.me/919876543210?text=Hi!%20I%27m%20interested%20in%20your%20services.'

const services = [
  {
    icon: '⚡',
    title: 'Website in 48 Hours',
    tagline: 'Your online presence, built faster than you think.',
    description: 'We design and build professional, mobile-first websites in just 48 hours. No templates, no page builders — clean, custom code that loads fast and looks great on every device.',
    includes: [
      'Custom responsive design',
      'Mobile-optimized layout',
      'WhatsApp contact integration',
      'Google Maps embed',
      'SEO basics (title, meta, headings)',
      'Google Analytics setup',
      'Contact/inquiry form',
      'Social media links',
      'Free SSL certificate',
      'Domain & hosting assistance',
    ],
    whoFor: 'Exporters, retailers, restaurants, clinics, consultants, manufacturers, freelancers — any business that needs a professional online presence quickly.',
    timeline: '48 hours from brief to live site',
    price: '₹5,000',
  },
  {
    icon: '🤖',
    title: 'AI Automations',
    tagline: 'Let bots do the work, so you don\'t have to.',
    description: 'We build intelligent automation systems that handle customer inquiries, capture leads, qualify prospects, and respond to messages — 24/7, even when you\'re asleep. From WhatsApp chatbots to full workflow automation.',
    includes: [
      'WhatsApp auto-reply bot',
      'AI chatbot for your website',
      'Lead capture & form automation',
      'Automatic lead qualification',
      'CRM integration (Google Sheets, HubSpot, etc.)',
      'Email notification triggers',
      'Appointment booking automation',
      'Follow-up message sequences',
      'Analytics & reporting dashboard',
      'Custom workflow design',
    ],
    whoFor: 'Businesses receiving 10+ daily inquiries, e-commerce stores, service providers, clinics, and any company wasting time on repetitive tasks.',
    timeline: '3–5 business days for setup and testing',
    price: '₹8,000',
  },
  {
    icon: '📈',
    title: 'Maintenance & Growth',
    tagline: 'Your website stays fresh, secure, and growing.',
    description: 'Websites aren\'t "set and forget." We provide monthly maintenance, content updates, performance monitoring, and Google My Business management to keep your site ranking and converting.',
    includes: [
      'Monthly content & design updates',
      'Performance & speed monitoring',
      'Security updates & backups',
      'Google My Business optimization',
      'Monthly analytics report',
      'Uptime monitoring (99.9%)',
      'Bug fixes & troubleshooting',
      'SEO health checks',
      'Priority WhatsApp support',
      'Hosting management',
    ],
    whoFor: 'Any business with a live website that wants to keep it updated, secure, and ranking well on Google — without hiring a full-time developer.',
    timeline: 'Monthly ongoing service',
    price: '₹2,000/month',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero" id="services-hero">
        <div className="container">
          <p className="section-label">Our Services</p>
          <h1 className="page-hero__title">Everything You Need to Grow Online</h1>
          <p className="page-hero__subtitle">From a professional website to intelligent AI automation — we build the systems that make your business run better.</p>
        </div>
      </section>

      {services.map((service, i) => (
        <section className={`section ${i % 2 === 1 ? 'section--alt' : ''}`} key={i} id={`service-${i}`}>
          <div className="container">
            <div className="service-detail">
              <div className="service-detail__header">
                <div className="service-detail__icon">{service.icon}</div>
                <div>
                  <h2 className="service-detail__title">{service.title}</h2>
                  <p className="service-detail__tagline">{service.tagline}</p>
                </div>
              </div>

              <p className="service-detail__desc">{service.description}</p>

              <div className="service-detail__grid">
                <div className="service-detail__block">
                  <h3 className="service-detail__block-title">What's Included</h3>
                  <ul className="service-detail__list">
                    {service.includes.map((item, j) => (
                      <li key={j}>
                        <svg viewBox="0 0 20 20" width="16" height="16" fill="var(--primary)"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail__meta">
                  <div className="service-detail__meta-card">
                    <h4>Who It's For</h4>
                    <p>{service.whoFor}</p>
                  </div>
                  <div className="service-detail__meta-card">
                    <h4>Delivery Timeline</h4>
                    <p>{service.timeline}</p>
                  </div>
                  <div className="service-detail__meta-card service-detail__meta-card--price">
                    <h4>Starting At</h4>
                    <p className="service-detail__price">{service.price}</p>
                  </div>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{width: '100%'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Get Started on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
