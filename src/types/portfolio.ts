export type Locale = 'es' | 'en'

export type LocalizedText = Record<Locale, string>

export interface EditorialText {
  lead: string
  accent: string
  tail: string
}

export type LocalizedEditorialText = Record<Locale, EditorialText>

export type SectionId = 'home' | 'about' | 'experience' | 'stack' | 'projects' | 'contact'

export interface NavigationItem {
  id: SectionId
  label: LocalizedText
  index: string
}

export interface Profile {
  firstName: string
  lastName: string
  role: LocalizedText
  description: LocalizedText
}

export type ProjectArtworkKind = 'architecture' | 'cinema' | 'modules'

export interface Project {
  id: string
  name: string
  category: LocalizedText
  year: number
  description: LocalizedText
  stack: readonly string[]
  artwork: ProjectArtworkKind
  artworkLabel: LocalizedText
  // Populate only after verifying the destination belongs to this project.
  links: {
    repository: `https://${string}` | null
    demo: `https://${string}` | null
  }
}

export interface AboutContent {
  eyebrow: LocalizedText
  heading: LocalizedEditorialText
  description: LocalizedText
  locationLabel: LocalizedText
  location: LocalizedText
  focusLabel: LocalizedText
  focus: LocalizedText
  projectsLabel: LocalizedText
  projects: readonly string[]
}

export type TimelineKind = 'work' | 'education'

export interface TimelineEntry {
  id: string
  kind: TimelineKind
  period: LocalizedText
  title: LocalizedText
  institution?: string
  description: LocalizedText
  details: readonly LocalizedText[]
}

export interface TimelineContent {
  eyebrow: LocalizedText
  heading: LocalizedEditorialText
  description: LocalizedText
  workLabel: LocalizedText
  educationLabel: LocalizedText
}

export interface TechCategory {
  id: string
  label: LocalizedText
  technologies: readonly string[]
}

export interface TechStackContent {
  eyebrow: LocalizedText
  heading: LocalizedEditorialText
  description: LocalizedText
  categories: readonly TechCategory[]
}

export interface ProfessionalLink {
  name: 'GitHub' | 'LinkedIn'
  href: `https://${string}`
  display: string
}

export interface ContactDetails {
  email: string
  mailto: `mailto:${string}`
  location: LocalizedText
  specialty: LocalizedText
  cv: Record<Locale, `/${string}.pdf`>
  socialLinks: readonly ProfessionalLink[]
}
