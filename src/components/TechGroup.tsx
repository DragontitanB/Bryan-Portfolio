import type { TechCategory } from '../types/portfolio'
import { useReveal } from '../hooks/useReveal'

export function TechGroup({ category, index }: { category: TechCategory; index: number }) {
  const scope = useReveal<HTMLLIElement>({ delay: index * 0.05 })
  const number = String(index + 1).padStart(2, '0')

  return (
    <li ref={scope} className={`tech-group tech-group--${category.id}`}>
      <article tabIndex={0} aria-labelledby={`tech-${category.id}`}>
        <header>
          <span aria-hidden="true">{number}</span>
          <h3 id={`tech-${category.id}`}>{category.label.es}</h3>
          <span aria-hidden="true">+{category.technologies.length}</span>
        </header>
        <ul aria-label={`Tecnologías de ${category.label.es}`}>
          {category.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </article>
    </li>
  )
}
