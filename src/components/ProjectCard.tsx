import { motion } from 'motion/react'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'
import architectureArtwork from '../assets/project-architecture.svg'
import cinemaArtwork from '../assets/project-cinema.svg'
import modulesArtwork from '../assets/project-modules.svg'
import type { Project, ProjectArtworkKind } from '../types/portfolio'
import { ArrowIcon } from './ArrowIcon'
import { useLanguage } from '../hooks/useLanguage'

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
  const reducedMotion = useReducedMotionPreference()
  const { localize, t } = useLanguage()
  const lift = reducedMotion === false ? -3 : 0
  const headingId = `project-${project.id}`
  const links = [
    { label: t.projects.repository, url: project.links.repository },
    { label: t.projects.demo, url: project.links.demo },
  ]

  return (
    <motion.article
      className={`project-card project-card--${project.artwork}`} aria-labelledby={headingId} tabIndex={0}
      initial={false} animate="rest" whileHover="engaged" whileFocus="engaged"
      variants={{ rest: { y: 0 }, engaged: { y: lift } }}
      transition={{ duration: reducedMotion ? 0 : 0.22 }}
    >
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number" aria-label={t.projects.projectLabel(number)}>{number}</span>
          <span className="project-category">{localize(project.category)}</span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3 id={headingId}>{project.name}</h3>
        <p className="project-description">{localize(project.description)}</p>
        <ul className="project-stack" aria-label={t.projects.technologiesLabel(project.name)}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {links.some(({ url }) => url !== null) && (
          <div className="project-links">
            {links.map(({ label, url }) => url && (
              <a href={url} key={label} aria-label={t.projects.linkLabel(label, project.name)}>
                {label}<ArrowIcon />
              </a>
            ))}
          </div>
        )}
      </div>
      <figure className="project-artwork" aria-hidden="true">
        <span className="project-art-label">{localize(project.artworkLabel)}</span>
        <motion.img
          src={artworks[project.artwork]} alt="" width="640" height="440" loading="lazy" decoding="async"
          variants={{ rest: { y: 0 }, engaged: { y: reducedMotion === false ? -2 : 0 } }}
          transition={{ duration: reducedMotion ? 0 : 0.3 }}
        />
        <figcaption>{t.projects.artworkCaption} <span>/{number}</span></figcaption>
      </figure>
    </motion.article>
  )
}
