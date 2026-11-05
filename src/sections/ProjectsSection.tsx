import { ProjectItem } from '../components/ProjectItem'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../hooks/useLanguage'

export function ProjectsSection() {
  const scope = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="projects" className="content-section projects-section container" aria-labelledby="projects-heading" tabIndex={-1}>
      <div className="section-label">
        <span className="eyebrow">{t.projects.eyebrow}</span>
        <span className="section-state">2024 — 2025</span>
      </div>
      <div className="work-intro" ref={scope}>
        <h2 id="projects-heading">{t.projects.headingLead}<span>{t.projects.headingAccent}</span></h2>
        <p>{t.projects.description}</p>
      </div>
      <ol className="work-collection" aria-label={t.projects.collectionLabel}>
        {projects.map((project, index) => (
          <ProjectItem project={project} index={index} key={project.id} />
        ))}
      </ol>
    </section>
  )
}
