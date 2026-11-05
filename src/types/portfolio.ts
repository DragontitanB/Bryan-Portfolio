export type SectionId = 'home' | 'projects' | 'contact'

export interface NavigationItem {
  id: SectionId
  label: string
  index: string
}

export interface Profile {
  firstName: string
  lastName: string
  role: string
  description: string
}

export type ProjectArtworkKind = 'architecture' | 'cinema' | 'modules'

export interface Project {
  id: string
  name: string
  category: string
  year: number
  description: string
  stack: readonly string[]
  artwork: ProjectArtworkKind
  artworkLabel: string
  // Populate only after verifying the destination belongs to this project.
  links: {
    repository: `https://${string}` | null
    demo: `https://${string}` | null
  }
}
