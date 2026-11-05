import type { Project } from '../types/portfolio'
import { useReveal } from '../hooks/useReveal'
import { ProjectCard } from './ProjectCard'

export function ProjectItem({ project, index }: { project: Project; index: number }) {
  const scope = useReveal<HTMLLIElement>({ delay: index === 2 ? 0.09 : 0 })

  return (
    <li ref={scope} className={`work-item work-item--${project.artwork}`}>
      <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} />
    </li>
  )
}
