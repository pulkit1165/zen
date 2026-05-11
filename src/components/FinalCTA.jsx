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
            <a href="tel:+918264449956" className="btn-primary final-cta__btn" id="final-cta-call">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>
            <a href="mailto:growth@zenvoralabs.xyz" className="btn-secondary" id="final-cta-email">
              growth@zenvoralabs.xyz
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
