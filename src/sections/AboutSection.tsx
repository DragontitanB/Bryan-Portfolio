import { about } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../hooks/useLanguage'

export function AboutSection() {
  const scope = useReveal<HTMLDivElement>({ selector: '[data-about-reveal]' })
  const { language, localize } = useLanguage()
  const heading = about.heading[language]

  return (
    <section id="about" className="profile-section about-section container" aria-labelledby="about-heading" tabIndex={-1}>
      <div className="about-layout" ref={scope}>
        <span className="eyebrow about-eyebrow" data-about-reveal>{localize(about.eyebrow)}</span>
        <h2 id="about-heading" data-about-reveal>
          {heading.lead}<span>{heading.accent}</span>{heading.tail}
        </h2>
        <div className="about-copy" data-about-reveal>
          <span className="about-mark" aria-hidden="true">BQ / 01</span>
          <p>{localize(about.description)}</p>
        </div>
        <dl className="about-facts" data-about-reveal>
          <div>
            <dt>{localize(about.locationLabel)}</dt>
            <dd>{localize(about.location)}</dd>
          </div>
          <div>
            <dt>{localize(about.focusLabel)}</dt>
            <dd>{localize(about.focus)}</dd>
          </div>
          <div>
            <dt>{localize(about.projectsLabel)}</dt>
            <dd>{about.projects.join(' · ')}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
