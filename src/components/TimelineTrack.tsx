import type { LocalizedText, TimelineEntry, TimelineKind } from '../types/portfolio'
import { useReveal } from '../hooks/useReveal'

interface TimelineTrackProps {
  kind: TimelineKind
  label: LocalizedText
  entries: readonly TimelineEntry[]
}

function TimelineMilestone({ entry, index }: { entry: TimelineEntry; index: number }) {
  const scope = useReveal<HTMLLIElement>({ delay: index * 0.07 })

  return (
    <li className="timeline-milestone" ref={scope}>
      <span className="timeline-node" aria-hidden="true" />
      <article>
        <div className="timeline-meta">
          <span>{entry.period.es}</span>
          {entry.institution && <strong>{entry.institution}</strong>}
        </div>
        <h3>{entry.title.es}</h3>
        <p>{entry.description.es}</p>
        {entry.details.length > 0 && (
          <ul className="timeline-details" aria-label={`Áreas de ${entry.title.es}`}>
            {entry.details.map((detail) => <li key={detail.es}>{detail.es}</li>)}
          </ul>
        )}
      </article>
    </li>
  )
}

export function TimelineTrack({ kind, label, entries }: TimelineTrackProps) {
  return (
    <div className={`timeline-track timeline-track--${kind}`}>
      <div className="timeline-track-label">
        <span className="timeline-track-icon" aria-hidden="true">{kind === 'work' ? '↳' : '+'}</span>
        <h3>{label.es}</h3>
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
