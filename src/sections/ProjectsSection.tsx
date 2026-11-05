import { ProjectItem } from '../components/ProjectItem'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function ProjectsSection() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="content-section projects-section container" aria-labelledby="projects-heading" tabIndex={-1}>
      <div className="section-label">
        <span className="eyebrow">04 / PROJECTS</span>
        <span className="section-state">2024 — 2025</span>
      </div>
      <div className="work-intro" ref={scope}>
        <h2 id="projects-heading">Selected <span>Work.</span></h2>
        <p>Del backend a las experiencias web y móviles. Tres proyectos, distintas formas de dar estructura a una idea.</p>
      </div>
      <ol className="work-collection" aria-label="Proyectos seleccionados">
        {projects.map((project, index) => (
          <ProjectItem project={project} index={index} key={project.id} />
        ))}
      </ol>
    </section>
  )
}
