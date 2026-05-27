import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="announcement-bar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="announcement-bar__inner">
            <div className="announcement-bar__content">
              <span className="announcement-bar__badge">NEW</span>
              <span className="announcement-bar__text">
                Now booking Q3 engagements — free 30-min growth audit for AU, CA, US &amp; UK brands
              </span>
              <span className="announcement-bar__divider" />
              <a href="tel:+918264449956" className="announcement-bar__link" id="announcement-phone">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 82644 49956
              </a>
              <span className="announcement-bar__divider" />
              <a href="mailto:growth@zenvoralabs.xyz" className="announcement-bar__link" id="announcement-email">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                growth@zenvoralabs.xyz
              </a>
            </div>

            <button
              className="announcement-bar__close"
              onClick={() => setVisible(false)}
              aria-label="Close announcement"
              id="announcement-close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
