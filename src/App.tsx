import { MotionConfig } from 'motion/react'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
      <ScrollProgress />
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </MotionConfig>
  )
}

export default App
