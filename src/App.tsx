import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
