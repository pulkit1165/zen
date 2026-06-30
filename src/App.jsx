import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SHOW_MARKETING } from './config'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import HeroLab from './pages/HeroLab'
import Solutions from './pages/Solutions'
import About from './pages/About'
import ERP from './pages/ERP'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={SHOW_MARKETING ? <Home /> : <Solutions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/erp" element={<ERP />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={SHOW_MARKETING ? <Services /> : <Navigate to="/solutions" replace />} />
          <Route path="/portfolio" element={SHOW_MARKETING ? <Portfolio /> : <Navigate to="/solutions" replace />} />
          <Route path="/pricing" element={SHOW_MARKETING ? <Pricing /> : <Navigate to="/solutions" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal slug="privacy" />} />
          <Route path="/terms" element={<Legal slug="terms" />} />
          <Route path="/refund" element={<Legal slug="refund" />} />
          <Route path="/cookies" element={<Legal slug="cookies" />} />
          <Route path="/dpa" element={<Legal slug="dpa" />} />
          <Route path="/lab" element={<HeroLab />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
