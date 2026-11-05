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
