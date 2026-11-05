import { EditorialHeading } from '../components/EditorialHeading'
import { TimelineTrack } from '../components/TimelineTrack'
import { timeline, timelineContent } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export function ExperienceSection() {
  const scope = useReveal<HTMLDivElement>()
  const work = timeline.filter((entry) => entry.kind === 'work')
  const education = timeline.filter((entry) => entry.kind === 'education')

  return (
    <section id="experience" className="profile-section experience-section container" aria-labelledby="experience-heading" tabIndex={-1}>
      <div ref={scope}>
        <EditorialHeading
          eyebrow={timelineContent.eyebrow}
          heading={timelineContent.heading}
          description={timelineContent.description}
          headingId="experience-heading"
        />
      </div>
      <div className="timeline-lanes">
        <TimelineTrack kind="work" label={timelineContent.workLabel} entries={work} />
        <TimelineTrack kind="education" label={timelineContent.educationLabel} entries={education} />
      </div>
    </section>
  )
}
