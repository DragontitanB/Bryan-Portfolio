import type { NavigationItem, Profile } from '../types/portfolio'

export const profile: Profile = {
  firstName: 'Bryan',
  lastName: 'Quiñones',
  role: 'Backend .NET Developer',
  description:
    'Soy Software Developer especializado en Backend .NET. Mi enfoque está en lo que sucede detrás de la interfaz: transformar ideas en lógica y dar estructura al software.',
}

export const navigation: readonly NavigationItem[] = [
  { id: 'home', label: 'Inicio', index: '00' },
  { id: 'projects', label: 'Projects', index: '01' },
  { id: 'contact', label: 'Contact', index: '02' },
]
