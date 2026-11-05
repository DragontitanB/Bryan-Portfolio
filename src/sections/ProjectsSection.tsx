import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projects" className="content-section projects-section container" aria-labelledby="projects-heading" tabIndex={-1}>
      <div className="section-label">
        <span className="eyebrow">01 / PROJECTS</span>
        <span className="section-state">2024 — 2025</span>
      </div>
      <div className="work-intro">
        <h2 id="projects-heading">Selected <span>Work.</span></h2>
        <p>Del backend a las experiencias web y móviles. Tres proyectos, distintas formas de dar estructura a una idea.</p>
      </div>
      <ol className="work-collection" aria-label="Proyectos seleccionados">
        {projects.map((project, index) => (
          <li className={`work-item work-item--${project.artwork}`} key={project.id}>
            <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} />
          </li>
        ))}
      </ol>
    </section>
  )
}
