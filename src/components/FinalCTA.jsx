import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section final-cta" id="contact">
      <div className="grid-overlay" />
      <div className="container final-cta__inner">
        <motion.div
          className="final-cta__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="label-accent">Ready to Scale</span>
          </div>

          <h2 className="display-xl final-cta__headline">
            Most Businesses Operate.<br />
            <span className="gradient-text">Few Build Systems.</span>
          </h2>

          <p className="body-lg final-cta__sub">
            The companies that dominate don't work harder — they engineer infrastructure
            that compounds. Let's build yours.
          </p>

          <div className="final-cta__actions">
            <a href="https://calendly.com" target="_blank" rel="noopener" className="btn-primary final-cta__btn" id="final-cta-book">
              Book Strategy Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@zenvoralabs.com" className="btn-secondary" id="final-cta-email">
              hello@zenvoralabs.com
            </a>
          </div>
        </motion.div>

        <div className="final-cta__orbs">
          <div className="final-cta__orb final-cta__orb--1" />
          <div className="final-cta__orb final-cta__orb--2" />
        </div>
      </div>
    </section>
  )
}
