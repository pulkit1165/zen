import { motion } from 'framer-motion'
import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'Deep analysis of current systems, data flows, acquisition channels, and operational bottlenecks.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Architecture design for scalable growth infrastructure — every system mapped, every metric defined.',
    icon: '◎',
  },
  {
    num: '03',
    title: 'Infrastructure',
    desc: 'Build the core systems: automation pipelines, analytics frameworks, CRM architecture, and conversion engines.',
    icon: '⚙',
  },
  {
    num: '04',
    title: 'Automation',
    desc: 'Deploy AI agents, workflow automation, and intelligent triggers that eliminate manual processes.',
    icon: '⚡',
  },
  {
    num: '05',
    title: 'Scaling',
    desc: 'Activate growth levers: paid media, organic systems, retention loops, and referral engines.',
    icon: '📈',
  },
  {
    num: '06',
    title: 'Optimization',
    desc: 'Continuous iteration through real-time data — A/B testing, model retraining, and system refinement.',
    icon: '∞',
  },
]

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="grid-overlay" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="label-accent">How We Build</span>
          </div>
          <h2 className="display-lg">
            A systems-first approach<br />to growth engineering
          </h2>
        </div>

        <div className="process__timeline">
          <div className="process__line" />
          {steps.map((step, i) => (
            <motion.div
              className="process__step"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              id={`process-step-${step.num}`}
            >
              <div className="process__node">
                <span className="process__node-inner" />
              </div>
              <div className="process__card glass-card">
                <div className="process__card-header">
                  <span className="label" style={{ color: 'var(--accent)' }}>{step.num}</span>
                  <span className="process__icon">{step.icon}</span>
                </div>
                <h3 className="heading">{step.title}</h3>
                <p className="body">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
