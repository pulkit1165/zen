import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Services.css'

const services = [
  {
    id: 'ai-auto',
    icon: '⬡',
    title: 'AI Automation',
    tagline: 'Eliminate manual operations',
    description: 'Custom AI agents, workflow automation, and intelligent systems that reduce operational overhead by 80%+ while scaling output.',
    outcomes: ['80% reduction in manual tasks', 'AI-powered decision engines', '24/7 autonomous operations'],
    color: '#4f7df5',
  },
  {
    id: 'perf-mktg',
    icon: '◆',
    title: 'Performance Marketing',
    tagline: 'Acquire customers at scale',
    description: 'Data-driven paid media, creative testing frameworks, and attribution infrastructure that consistently delivers 8-12x ROAS.',
    outcomes: ['8-12x average ROAS', 'AI creative optimization', 'Multi-channel attribution'],
    color: '#7c5bf5',
  },
  {
    id: 'creative',
    icon: '○',
    title: 'Creative & Design Systems',
    tagline: 'Systematize brand output',
    description: 'Scalable design systems, brand infrastructure, and creative production pipelines that maintain quality at volume.',
    outcomes: ['3x creative velocity', 'Brand consistency at scale', 'Automated asset generation'],
    color: '#34d399',
  },
  {
    id: 'web-exp',
    icon: '□',
    title: 'Website Experiences',
    tagline: 'Convert at premium levels',
    description: 'High-performance web experiences with conversion-optimized architecture, immersive design, and sub-second load times.',
    outcomes: ['2.5x conversion rates', 'Sub-1s load times', 'Immersive brand experiences'],
    color: '#f59e0b',
  },
  {
    id: 'biz-auto',
    icon: '△',
    title: 'Business Automation',
    tagline: 'Scale without headcount',
    description: 'End-to-end business process automation — from lead capture to fulfillment — integrated across your entire tech stack.',
    outcomes: ['60% cost reduction', 'Zero-touch workflows', 'Full-stack integration'],
    color: '#ef4444',
  },
  {
    id: 'crm-funnel',
    icon: '◇',
    title: 'CRM & Funnel Systems',
    tagline: 'Engineer revenue pipelines',
    description: 'Intelligent CRM architecture, automated nurture sequences, and conversion funnel systems that maximize lifetime value.',
    outcomes: ['40% higher LTV', 'Automated lead scoring', 'Revenue pipeline visibility'],
    color: '#8b5cf6',
  },
]

function ServiceCard({ service, index, isActive, onToggle }) {
  return (
    <motion.div
      className={`service-card ${isActive ? 'service-card--active' : ''}`}
      style={{ '--card-color': service.color }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onToggle}
      id={`service-${service.id}`}
    >
      <div className="service-card__header">
        <div className="service-card__icon-wrap">
          <span className="service-card__icon">{service.icon}</span>
          <span className="service-card__number label">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="service-card__titles">
          <h3 className="heading service-card__title">{service.title}</h3>
          <p className="body service-card__tagline">{service.tagline}</p>
        </div>
        <div className={`service-card__toggle ${isActive ? 'open' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="service-card__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="body-lg">{service.description}</p>
            <div className="service-card__outcomes">
              {service.outcomes.map((o, i) => (
                <div className="service-card__outcome" key={i}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L6 11L12 3" stroke="var(--card-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="service-card__glow" />
    </motion.div>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-accent">What We Build</span>
          </div>
          <h2 className="display-lg">
            Growth infrastructure,<br />not marketing campaigns
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, marginTop: 20 }}>
            We don't run ads. We engineer systems. Every solution is built to compound — 
            delivering exponential returns, not linear effort.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard
              key={s.id}
              service={s}
              index={i}
              isActive={activeId === s.id}
              onToggle={() => setActiveId(activeId === s.id ? null : s.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
