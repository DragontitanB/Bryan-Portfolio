import { EditorialHeading } from '../components/EditorialHeading'
import { TechGroup } from '../components/TechGroup'
import { techStack } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function TechStackSection() {
  const scope = useReveal<HTMLDivElement>()

  return (
    <section id="stack" className="profile-section tech-section container" aria-labelledby="stack-heading" tabIndex={-1}>
      <div ref={scope}>
        <EditorialHeading
          eyebrow={techStack.eyebrow}
          heading={techStack.heading}
          description={techStack.description}
          headingId="stack-heading"
          accentWord="software"
        />
      </div>
      <ol className="tech-grid" aria-label="Tecnologías por categoría">
        {techStack.categories.map((category, index) => (
          <TechGroup category={category} index={index} key={category.id} />
        ))}
      </ol>
    </section>
  )
}
