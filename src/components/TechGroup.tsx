import type { TechCategory } from '../types/portfolio'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../hooks/useLanguage'

export function TechGroup({ category, index }: { category: TechCategory; index: number }) {
  const scope = useReveal<HTMLLIElement>({ delay: index * 0.05 })
  const number = String(index + 1).padStart(2, '0')
  const { localize, t } = useLanguage()
  const label = localize(category.label)

  return (
    <li ref={scope} className={`tech-group tech-group--${category.id}`}>
      <article tabIndex={0} aria-labelledby={`tech-${category.id}`}>
        <header>
          <span aria-hidden="true">{number}</span>
          <h3 id={`tech-${category.id}`}>{label}</h3>
          <span aria-hidden="true">+{category.technologies.length}</span>
        </header>
        <ul aria-label={t.tech.technologiesLabel(label)}>
          {category.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </article>
    </li>
  )
}
