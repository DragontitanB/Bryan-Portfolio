import { MotionConfig } from 'motion/react'
import { ScrollProgress } from './components/ScrollProgress'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { TechStackSection } from './sections/TechStackSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ContactSection } from './sections/ContactSection'
import { LanguageProvider } from './i18n/LanguageProvider'
import { useLanguage } from './hooks/useLanguage'

function Portfolio() {
  const { t } = useLanguage()

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
      <ScrollProgress />
      <a className="skip-link" href="#main">{t.skipLink}</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </MotionConfig>
  )
}

function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>
}

export default App
