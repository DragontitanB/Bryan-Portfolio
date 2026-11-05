import { BackendVisual } from '../components/BackendVisual'
import { SectionLink } from '../components/SectionLink'
import { profile } from '../data/portfolio'

export function HeroSection() {
  return (
    <section id="home" className="hero-section container" aria-labelledby="hero-heading" tabIndex={-1}>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> CREATIVE DEVELOPER LAB</p>
          <h1 id="hero-heading">{profile.firstName}<br /><span>{profile.lastName}</span><span className="name-period">.</span></h1>
          <p className="hero-role"><span aria-hidden="true">↳</span> {profile.role}</p>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <SectionLink to="projects">Projects</SectionLink>
            <SectionLink to="contact" variant="secondary">Contact</SectionLink>
          </div>
        </div>
        <BackendVisual />
      </div>
      <div className="hero-bottom">
        <p>Ideas con estructura.<br /><span>Software con intención.</span></p>
        <a className="explore-link" href="#projects"><span>EXPLORA EL LAB</span><span className="scroll-arrow" aria-hidden="true">↓</span></a>
        <span className="hero-footnote">PORTFOLIO PERSONAL<br />BACKEND DEVELOPMENT</span>
      </div>
    </section>
  )
}
