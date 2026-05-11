import SmoothScroll from './components/SmoothScroll'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import Showcase from './components/Showcase'
import About from './components/About'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <SmoothScroll>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Process />
        <div className="divider" />
        <Results />
        <div className="divider" />
        <Showcase />
        <div className="divider" />
        <About />
        <div className="divider" />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
