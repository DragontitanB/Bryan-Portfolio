import { useEffect, useState } from 'react'
import type { SectionId } from '../types/portfolio'

const sectionIds: readonly SectionId[] = ['home', 'projects', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    let frame = 0

    const updateSection = () => {
      frame = 0
      const atBottom = window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2

      // Also recognize the final section when it is shorter than the viewport.
      const current = atBottom ? 'contact' : sectionIds.reduce<SectionId>((active, id) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= 150 ? id : active
      }, 'home')

      setActiveSection(current)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return activeSection
}
