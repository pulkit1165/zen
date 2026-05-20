import './Portfolio.css'

const projects = [
  {
    title: 'Gupta Textiles',
    city: 'Ludhiana',
    type: 'Business Website',
    desc: 'Complete 5-page business website for a textile exporter with product catalog and inquiry form.',
    color: '#185FA5',
  },
  {
    title: 'Jaipur Spice Kitchen',
    city: 'Jaipur',
    type: 'Landing Page',
    desc: 'Single-page restaurant site with menu, location, and WhatsApp ordering integration.',
    color: '#D97706',
  },
  {
    title: 'Singh Auto Parts',
    city: 'Ludhiana',
    type: 'Website + AI Bot',
    desc: 'Business website with an AI-powered WhatsApp bot for instant part availability and pricing.',
    color: '#059669',
  },
  {
    title: 'Rajasthan Handicrafts',
    city: 'Jaipur',
    type: 'Business Website',
    desc: 'E-commerce ready showcase website for handcrafted goods with international buyer inquiry system.',
    color: '#DC2626',
  },
  {
    title: 'Dr. Mehta Clinic',
    city: 'Ludhiana',
    type: 'Website + AI Bot',
    desc: 'Clinic website with appointment booking automation and WhatsApp patient reminder system.',
    color: '#7C3AED',
  },
  {
    title: 'Royal Events Co.',
    city: 'Jaipur',
    type: 'Landing Page',
    desc: 'Wedding and event planning landing page with gallery showcase and lead capture form.',
    color: '#DB2777',
  },
]

export default function Portfolio() {
  return (
    <>
      <section className="page-hero" id="portfolio-hero">
        <div className="container">
          <p className="section-label">Our Work</p>
          <h1 className="page-hero__title">Projects That Speak for Themselves</h1>
          <p className="page-hero__subtitle">Real websites built for real businesses in Ludhiana, Jaipur, and across India. Fast delivery, great results.</p>
        </div>
      </section>

      <section className="section" id="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-card__preview" style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)` }}>
                  <div className="portfolio-card__mockup" style={{ borderColor: project.color + '40' }}>
                    <div className="portfolio-card__mockup-bar">
                      <span style={{ background: '#EF4444' }} />
                      <span style={{ background: '#F59E0B' }} />
                      <span style={{ background: '#10B981' }} />
                    </div>
                    <div className="portfolio-card__mockup-content" style={{ background: project.color + '10' }}>
                      <div className="portfolio-card__mockup-nav" style={{ background: project.color + '20' }} />
                      <div className="portfolio-card__mockup-hero" style={{ background: project.color + '15' }} />
                      <div className="portfolio-card__mockup-cols">
                        <div style={{ background: project.color + '12' }} />
                        <div style={{ background: project.color + '12' }} />
                        <div style={{ background: project.color + '12' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__meta">
                    <span className="portfolio-card__type" style={{ background: project.color + '15', color: project.color }}>{project.type}</span>
                    <span className="portfolio-card__city">📍 {project.city}</span>
                  </div>
                  <h3 className="portfolio-card__title">{project.title}</h3>
                  <p className="portfolio-card__desc">{project.desc}</p>
                  <button className="btn btn--outline portfolio-card__btn" style={{ borderColor: project.color, color: project.color }}>
                    View Site →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta" id="portfolio-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Want a Website Like These?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px', fontSize: '17px' }}>
            Tell us about your business and we'll have you live in 48 hours.
          </p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn--white btn--lg">
            Start Your Project →
          </a>
        </div>
      </section>
    </>
  )
}
