import { motion } from 'framer-motion'
import './Showcase.css'

const panels = [
  {
    title: 'Growth Analytics Dashboard',
    label: 'Real-time Intelligence',
    items: ['Revenue tracking', 'Channel attribution', 'Predictive models', 'KPI monitoring'],
    accent: '#4f7df5',
  },
  {
    title: 'Automation Pipeline',
    label: 'Zero-touch Systems',
    items: ['Lead routing', 'Workflow triggers', 'AI agents', 'Process automation'],
    accent: '#7c5bf5',
  },
  {
    title: 'Conversion Engine',
    label: 'Revenue Infrastructure',
    items: ['Funnel optimization', 'A/B testing', 'Personalization', 'Dynamic content'],
    accent: '#34d399',
  },
]

export default function Showcase() {
  return (
    <section className="section showcase" id="showcase">
      <div className="grid-overlay" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="label-accent">What We Deploy</span>
          </div>
          <h2 className="display-lg">
            Intelligent systems.<br />Engineered for scale.
          </h2>
        </div>

        <div className="showcase__panels">
          {panels.map((panel, i) => (
            <motion.div
              className="showcase__panel glass-card"
              key={i}
              style={{ '--panel-accent': panel.accent }}
              initial={{ opacity: 0, y: 60, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              id={`showcase-${i}`}
            >
              <div className="showcase__panel-header">
                <span className="label-accent">{panel.label}</span>
                <div className="showcase__panel-dots">
                  <span /><span /><span />
                </div>
              </div>
              <h3 className="display-md showcase__panel-title">{panel.title}</h3>
              <div className="showcase__panel-grid">
                {panel.items.map((item, j) => (
                  <div className="showcase__panel-item" key={j}>
                    <div className="showcase__panel-item-bar" style={{ width: `${65 + Math.random() * 30}%` }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="showcase__panel-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
