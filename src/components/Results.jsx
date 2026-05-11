import { motion } from 'framer-motion'
import './Results.css'

const caseStudies = [
  {
    client: 'E-Commerce Brand',
    industry: 'DTC Fashion',
    metrics: [
      { label: 'ROAS', before: '2.1x', after: '11.4x', change: '+443%' },
      { label: 'Revenue', before: '$42K/mo', after: '$380K/mo', change: '+805%' },
      { label: 'CAC', before: '$68', after: '$19', change: '-72%' },
    ],
    summary: 'Full-stack growth system: AI creative testing, automated bidding, conversion-optimized landing architecture, and retention automation.',
    timeline: '90 days',
  },
  {
    client: 'SaaS Platform',
    industry: 'B2B Technology',
    metrics: [
      { label: 'Pipeline', before: '$120K/mo', after: '$890K/mo', change: '+642%' },
      { label: 'Demo Rate', before: '3.2%', after: '14.8%', change: '+363%' },
      { label: 'Ops Hours', before: '180hrs/wk', after: '32hrs/wk', change: '-82%' },
    ],
    summary: 'CRM architecture overhaul, AI lead scoring, automated nurture sequences, and performance marketing infrastructure.',
    timeline: '120 days',
  },
  {
    client: 'Service Company',
    industry: 'Professional Services',
    metrics: [
      { label: 'Leads', before: '45/mo', after: '320/mo', change: '+611%' },
      { label: 'Close Rate', before: '8%', after: '24%', change: '+200%' },
      { label: 'Manual Tasks', before: '60%', after: '8%', change: '-87%' },
    ],
    summary: 'Business automation suite, funnel optimization, AI-powered scheduling, and multi-channel acquisition system.',
    timeline: '60 days',
  },
]

export default function Results() {
  return (
    <section className="section results" id="results">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-accent">Proof of Impact</span>
          </div>
          <h2 className="display-lg">
            Systems generate results.<br />Results speak.
          </h2>
        </div>

        <div className="results__grid">
          {caseStudies.map((cs, i) => (
            <motion.div
              className="result-card glass-card"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              id={`result-${i}`}
            >
              <div className="result-card__header">
                <div>
                  <h3 className="heading">{cs.client}</h3>
                  <span className="label">{cs.industry}</span>
                </div>
                <span className="result-card__timeline label-accent">{cs.timeline}</span>
              </div>

              <div className="result-card__metrics">
                {cs.metrics.map((m, j) => (
                  <div className="result-metric" key={j}>
                    <span className="result-metric__label label">{m.label}</span>
                    <div className="result-metric__values">
                      <span className="result-metric__before">{m.before}</span>
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M0 4H14M14 4L10 0.5M14 4L10 7.5" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="result-metric__after">{m.after}</span>
                    </div>
                    <span className="result-metric__change">{m.change}</span>
                  </div>
                ))}
              </div>

              <p className="body result-card__summary">{cs.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
