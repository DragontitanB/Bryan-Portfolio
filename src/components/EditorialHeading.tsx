import type { LocalizedText } from '../types/portfolio'

interface EditorialHeadingProps {
  eyebrow: LocalizedText
  heading: LocalizedText
  description: LocalizedText
  headingId: string
  accentWord?: string
}

export function EditorialHeading({
  eyebrow,
  heading,
  description,
  headingId,
  accentWord,
}: EditorialHeadingProps) {
  const [lead, tail] = accentWord ? heading.es.split(accentWord) : [heading.es, '']

  return (
    <div className="editorial-heading">
      <span className="eyebrow">{eyebrow.es}</span>
      <h2 id={headingId}>
        {lead}{accentWord && <span>{accentWord}</span>}{tail}
      </h2>
      <p>{description.es}</p>
    </div>
  )
}
