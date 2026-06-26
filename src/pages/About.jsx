import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import useReveal from '../lib/useReveal'
import './About.css'

const values = [
  { title: 'Intelligent by design', desc: 'AI is woven through everything we ship — not an afterthought.' },
  { title: 'Built to evolve', desc: 'Software that grows with your business, never against it.' },
  { title: 'Partners, not vendors', desc: 'We measure success by your outcomes, long after launch.' },
]

export default function About() {
  const reveal = useReveal()

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'About Us | Zenvora Labs — AI, ERP & Custom Software'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    meta?.setAttribute(
      'content',
      'Zenvora Labs is a technology company helping businesses digitally transform with AI-powered ERP, AI solutions and custom software. Meet our leadership, vision and mission.'
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
          <p className="type-eyebrow">About us</p>
          <h1 className="type-h1 page-hero__title" data-reveal>
            A technology partner, <span className="serif-italic">not just a vendor.</span>
          </h1>
          <p className="type-body page-hero__subtitle" data-reveal>
            We help businesses digitally transform through intelligent software — simplifying operations,
            automating workflows and turning data into decisions.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section section--paper">
        <div className="container-content about-story">
          <div className="about-story__head" data-reveal>
            <p className="type-eyebrow">Our story</p>
          </div>
          <div className="about-story__body">
            <p className="about-story__lead" data-reveal>
              We are a technology company focused on helping businesses digitally transform through
              intelligent software solutions.
            </p>
            <p data-reveal>
              Our mission is to simplify operations, automate workflows, and empower organizations with
              AI-driven technology that improves efficiency, reduces costs, and accelerates growth.
            </p>
            <p data-reveal>
              We specialize in developing scalable software that evolves alongside our clients — delivering
              solutions tailored to their unique business processes, not forced into someone else&apos;s template.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="section section--soft">
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">Leadership</p>
            <h2 className="type-h2 sol-head__title">The people <span className="serif-italic">behind the platform.</span></h2>
          </div>
          <div className="leader" data-reveal>
            <div className="leader__avatar" aria-hidden="true">RS</div>
            <div>
              <h3 className="leader__name">Raghav Sharma</h3>
              <span className="leader__role"><Icon name="globe" size={15} /> CEO · Canada Office</span>
              <p className="leader__bio">
                Raghav Sharma leads our Canadian operations and oversees global business strategy, client
                relationships and international expansion. With a vision centered on innovation and customer
                success, he drives the company&apos;s mission of delivering world-class ERP systems, AI solutions
                and custom software that help businesses operate smarter and grow faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION ── */}
      <section className="section section--paper">
        <div className="container-content">
          <div className="vm-grid">
            <div className="vm-card" data-reveal>
              <span className="vm-card__icon"><Icon name="target" size={24} /></span>
              <h3 className="vm-card__title">Our Vision</h3>
              <p className="vm-card__body">
                To become a global leader in AI-powered business software — enabling organizations of every size
                to automate operations, make data-driven decisions and achieve sustainable growth through
                innovative technology.
              </p>
            </div>
            <div className="vm-card" data-reveal style={{ transitionDelay: '80ms' }}>
              <span className="vm-card__icon"><Icon name="rocket" size={24} /></span>
              <h3 className="vm-card__title">Our Mission</h3>
              <p className="vm-card__body">
                To deliver reliable, scalable and intelligent software solutions that solve real-world business
                challenges — while providing exceptional customer service and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES (dark) ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="sol-head" data-reveal>
            <p className="type-eyebrow">What we stand for</p>
            <h2 className="type-h2 sol-head__title">Principles that <span className="serif-italic">shape every build.</span></h2>
          </div>
          <div className="about-values">
            {values.map((v, i) => (
              <div className="about-value" key={v.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="about-value__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="about-value__title">{v.title}</div>
                <div className="about-value__desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--cream">
        <div className="container-content">
          <div className="sol-cta" data-reveal>
            <p className="type-eyebrow" style={{ justifyContent: 'center' }}>Work with us</p>
            <h2 className="type-h2 sol-cta__title">Let&apos;s build something <span className="serif-italic">worth scaling.</span></h2>
            <p className="type-body">See how our ERP, AI and custom software can transform the way you operate.</p>
            <div className="sol-cta__actions">
              <Link to="/solutions" className="btn btn-outline btn-lg">Explore solutions</Link>
              <Link to="/contact" className="btn btn-cta btn-lg btn--arrow">
                Get in touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
