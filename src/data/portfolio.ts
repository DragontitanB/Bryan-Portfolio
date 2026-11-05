import type { NavigationItem, Profile, Project } from '../types/portfolio'

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

export const projects: readonly Project[] = [
  {
    id: 'trackerclean',
    name: 'TrackerClean',
    category: 'Backend · Proyecto académico',
    year: 2024,
    description:
      'Un proyecto académico de backend construido con arquitectura MVC: controladores, servicios RESTful y validaciones de datos, con persistencia mediante Entity Framework y SQL Server.',
    stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server'],
    artwork: 'architecture',
    artworkLabel: 'MVC / DATA FLOW',
    links: { repository: null, demo: null },
  },
  {
    id: 'cineseat',
    name: 'CineSeat',
    category: 'Aplicación web · Reservas de cine',
    year: 2025,
    description:
      'Una aplicación web de reservas de cine con gestión de usuarios, selección de asientos y almacenamiento en base de datos, desarrollada con C# y ASP.NET MVC.',
    stack: ['C#', 'ASP.NET MVC'],
    artwork: 'cinema',
    artworkLabel: 'CINEMA / SEAT GEOMETRY',
    links: { repository: null, demo: null },
  },
  {
    id: 'couteau',
    name: 'Couteau',
    category: 'Aplicación móvil · Integración de APIs',
    year: 2025,
    description:
      'Una aplicación móvil desarrollada en Flutter que integra APIs para reunir módulos de noticias, clima y búsqueda de universidades.',
    stack: ['Flutter', 'APIs'],
    artwork: 'modules',
    artworkLabel: 'MOBILE / CONNECTED MODULES',
    links: { repository: null, demo: null },
  },
]
