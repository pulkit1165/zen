import { motion } from 'framer-motion'
import './About.css'

const values = [
  { title: 'Systems Over Tactics', desc: 'We build compounding infrastructure, not one-off campaigns.' },
  { title: 'Data Over Assumptions', desc: 'Every decision backed by real-time analytics and validated frameworks.' },
  { title: 'Speed Over Perfection', desc: 'Ship fast, measure, iterate. Velocity compounds faster than polish.' },
  { title: 'Outcomes Over Activity', desc: 'We measure revenue impact, not hours logged or tasks completed.' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__layout">
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <span className="label-accent">About Zenvora</span>
            </div>
            <h2 className="display-lg">
              A small elite team<br />engineering scalable growth
            </h2>
            <p className="body-lg" style={{ marginTop: 24, maxWidth: 480 }}>
              We partner with ambitious companies to build the digital infrastructure
              that separates market leaders from everyone else. No bloated teams.
              No unnecessary meetings. Just systems that work.
            </p>
            <div className="about__team-badge">
              <div className="about__avatars">
                {[0,1,2,3].map(i => (
                  <div className="about__avatar" key={i} style={{
                    background: `hsl(${220 + i * 30}, 60%, ${35 + i * 5}%)`,
                    zIndex: 4 - i,
                    marginLeft: i > 0 ? -10 : 0
                  }} />
                ))}
              </div>
              <span className="body">Core team of operators, engineers & strategists</span>
            </div>
          </motion.div>

          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {values.map((v, i) => (
              <motion.div
                className="about__value"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="label" style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="heading" style={{ fontSize: '1.05rem', marginBottom: 4 }}>{v.title}</h4>
                  <p className="body">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
