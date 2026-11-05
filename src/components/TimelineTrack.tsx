import type { LocalizedText, TimelineEntry, TimelineKind } from '../types/portfolio'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../hooks/useLanguage'

interface TimelineTrackProps {
  kind: TimelineKind
  label: LocalizedText
  entries: readonly TimelineEntry[]
}

function TimelineMilestone({ entry, index }: { entry: TimelineEntry; index: number }) {
  const scope = useReveal<HTMLLIElement>({ delay: index * 0.07 })
  const { localize, t } = useLanguage()
  const title = localize(entry.title)

  return (
    <li className="timeline-milestone" ref={scope}>
      <span className="timeline-node" aria-hidden="true" />
      <article>
        <div className="timeline-meta">
          <span>{localize(entry.period)}</span>
          {entry.institution && <strong>{entry.institution}</strong>}
        </div>
        <h3>{title}</h3>
        <p>{localize(entry.description)}</p>
        {entry.details.length > 0 && (
          <ul className="timeline-details" aria-label={t.timeline.detailsLabel(title)}>
            {entry.details.map((detail, detailIndex) => <li key={`${entry.id}-${detailIndex}`}>{localize(detail)}</li>)}
          </ul>
        )}
      </article>
    </li>
  )
}

export function TimelineTrack({ kind, label, entries }: TimelineTrackProps) {
  const { localize } = useLanguage()

  return (
    <div className={`timeline-track timeline-track--${kind}`}>
      <div className="timeline-track-label">
        <span className="timeline-track-icon" aria-hidden="true">{kind === 'work' ? '↳' : '+'}</span>
        <h3>{localize(label)}</h3>
        <span>{String(entries.length).padStart(2, '0')}</span>
      </div>
      <ol>
        {entries.map((entry, index) => (
          <TimelineMilestone entry={entry} index={index} key={entry.id} />
        ))}
      </ol>
    </div>
  )
}
