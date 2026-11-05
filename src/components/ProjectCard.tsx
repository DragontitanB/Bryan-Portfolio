import architectureArtwork from '../assets/project-architecture.svg'
import cinemaArtwork from '../assets/project-cinema.svg'
import modulesArtwork from '../assets/project-modules.svg'
import type { Project, ProjectArtworkKind } from '../types/portfolio'
import { ArrowIcon } from './ArrowIcon'

const artworks: Record<ProjectArtworkKind, string> = {
  architecture: architectureArtwork,
  cinema: cinemaArtwork,
  modules: modulesArtwork,
}

interface ProjectCardProps {
  project: Project
  number: string
}

export function ProjectCard({ project, number }: ProjectCardProps) {
  const headingId = `project-${project.id}`
  const links = [
    { label: 'Repositorio', url: project.links.repository },
    { label: 'Demo', url: project.links.demo },
  ]

  return (
    <article className={`project-card project-card--${project.artwork}`} aria-labelledby={headingId} tabIndex={0}>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number" aria-label={`Proyecto ${number}`}>{number}</span>
          <span className="project-category">{project.category}</span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3 id={headingId}>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label={`Tecnologías de ${project.name}`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {links.some(({ url }) => url !== null) && (
          <div className="project-links">
            {links.map(({ label, url }) => url && (
              <a href={url} key={label} aria-label={`${label} de ${project.name}`}>
                {label}<ArrowIcon />
              </a>
            ))}
          </div>
        )}
      </div>
      <figure className="project-artwork" aria-hidden="true">
        <span className="project-art-label">{project.artworkLabel}</span>
        <img src={artworks[project.artwork]} alt="" width="640" height="440" loading="lazy" decoding="async" />
        <figcaption>ILUSTRACIÓN CONCEPTUAL <span>/{number}</span></figcaption>
      </figure>
    </article>
  )
}
