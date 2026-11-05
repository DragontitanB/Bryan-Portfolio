import { useLanguage } from '../hooks/useLanguage'
import type { LocalizedEditorialText, LocalizedText } from '../types/portfolio'

interface EditorialHeadingProps {
  eyebrow: LocalizedText
  heading: LocalizedEditorialText
  description: LocalizedText
  headingId: string
}

export function EditorialHeading({
  eyebrow,
  heading,
  description,
  headingId,
}: EditorialHeadingProps) {
  const { language, localize } = useLanguage()
  const localizedHeading = heading[language]

  return (
    <div className="editorial-heading">
      <span className="eyebrow">{localize(eyebrow)}</span>
      <h2 id={headingId}>
        {localizedHeading.lead}<span>{localizedHeading.accent}</span>{localizedHeading.tail}
      </h2>
      <p>{localize(description)}</p>
    </div>
  )
}
