import { BackendVisual } from '../components/BackendVisual'
import { SectionLink } from '../components/SectionLink'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../hooks/useLanguage'

export function HeroSection() {
  const scope = useReveal<HTMLDivElement>({ trigger: 'load', selector: '[data-hero-entrance]' })
  const { localize, t } = useLanguage()

  return (
    <section id="home" className="hero-section container" aria-labelledby="hero-heading" tabIndex={-1}>
      <div className="hero-layout">
        <div className="hero-copy" ref={scope}>
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> {t.hero.eyebrow}</p>
          <h1 id="hero-heading" data-hero-entrance>{profile.firstName}<br /><span>{profile.lastName}</span><span className="name-period">.</span></h1>
          <p className="hero-role" data-hero-entrance><span aria-hidden="true">↳</span> {localize(profile.role)}</p>
          <p className="hero-description" data-hero-entrance>{localize(profile.description)}</p>
          <div className="hero-actions" data-hero-entrance>
            <SectionLink to="projects">{t.hero.projectsButton}</SectionLink>
            <SectionLink to="contact" variant="secondary">{t.hero.contactButton}</SectionLink>
          </div>
        </div>
        <BackendVisual />
      </div>
      <div className="hero-bottom">
        <p>{t.hero.mottoLead}<br /><span>{t.hero.mottoAccent}</span></p>
        <a className="explore-link" href="#projects"><span>{t.hero.explore}</span><span className="scroll-arrow" aria-hidden="true">↓</span></a>
        <span className="hero-footnote">{t.hero.footnoteLead}<br />{t.hero.footnoteTail}</span>
      </div>
    </section>
  )
}
