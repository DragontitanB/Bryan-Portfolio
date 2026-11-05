import { about } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function AboutSection() {
  const scope = useReveal<HTMLDivElement>({ selector: '[data-about-reveal]' })
  const [headingLead, headingTail] = about.heading.es.split('lógica')

  return (
    <section id="about" className="profile-section about-section container" aria-labelledby="about-heading" tabIndex={-1}>
      <div className="about-layout" ref={scope}>
        <span className="eyebrow about-eyebrow" data-about-reveal>{about.eyebrow.es}</span>
        <h2 id="about-heading" data-about-reveal>
          {headingLead}<span>lógica</span>{headingTail}
        </h2>
        <div className="about-copy" data-about-reveal>
          <span className="about-mark" aria-hidden="true">BQ / 01</span>
          <p>{about.description.es}</p>
        </div>
        <dl className="about-facts" data-about-reveal>
          <div>
            <dt>{about.locationLabel.es}</dt>
            <dd>{about.location.es}</dd>
          </div>
          <div>
            <dt>{about.focusLabel.es}</dt>
            <dd>{about.focus.es}</dd>
          </div>
          <div>
            <dt>{about.projectsLabel.es}</dt>
            <dd>{about.projects.join(' · ')}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
