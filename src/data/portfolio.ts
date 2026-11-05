import type {
  AboutContent,
  NavigationItem,
  Profile,
  Project,
  TechStackContent,
  TimelineContent,
  TimelineEntry,
} from '../types/portfolio'

export const profile: Profile = {
  firstName: 'Bryan',
  lastName: 'Quiñones',
  role: { es: 'Backend .NET Developer', en: 'Backend .NET Developer' },
  description: {
    es: 'Soy Software Developer especializado en Backend .NET. Mi enfoque está en lo que sucede detrás de la interfaz: transformar ideas en lógica y dar estructura al software.',
    en: 'I am a Software Developer specializing in Backend .NET. I focus on what happens behind the interface: turning ideas into logic and giving software a solid structure.',
  },
}

export const navigation: readonly NavigationItem[] = [
  { id: 'home', label: { es: 'Inicio', en: 'Home' }, index: '00' },
  { id: 'about', label: { es: 'Sobre mí', en: 'About' }, index: '01' },
  { id: 'experience', label: { es: 'Experiencia', en: 'Experience' }, index: '02' },
  { id: 'stack', label: { es: 'Tecnologías', en: 'Stack' }, index: '03' },
  { id: 'projects', label: { es: 'Proyectos', en: 'Projects' }, index: '04' },
  { id: 'contact', label: { es: 'Contacto', en: 'Contact' }, index: '05' },
]

export const about: AboutContent = {
  eyebrow: { es: '01 / SOBRE MÍ', en: '01 / ABOUT ME' },
  heading: {
    es: { lead: 'Construyo la ', accent: 'lógica', tail: ' que sostiene la experiencia.' },
    en: { lead: 'I build the ', accent: 'logic', tail: ' behind the experience.' },
  },
  description: {
    es: 'Desarrollador enfocado en Backend .NET, arquitectura MVC, APIs REST, integración de bases de datos y soluciones prácticas. Combino conocimientos técnicos con resolución de problemas y experiencia trabajando con usuarios y sistemas de autenticación.',
    en: 'Developer focused on Backend .NET, MVC architecture, REST APIs, database integration, and practical solutions. I combine technical knowledge with problem solving and experience working with users and authentication systems.',
  },
  locationLabel: { es: 'UBICACIÓN', en: 'LOCATION' },
  location: { es: 'Santo Domingo, República Dominicana', en: 'Santo Domingo, Dominican Republic' },
  focusLabel: { es: 'ENFOQUE', en: 'FOCUS' },
  focus: { es: 'Backend .NET · Software Development', en: 'Backend .NET · Software Development' },
  projectsLabel: { es: 'PROYECTOS', en: 'PROJECTS' },
  projects: ['TrackerClean', 'CineSeat', 'Couteau'],
}

export const timelineContent: TimelineContent = {
  eyebrow: { es: '02 / EXPERIENCIA Y EDUCACIÓN', en: '02 / EXPERIENCE & EDUCATION' },
  heading: {
    es: { lead: 'Experiencia que conecta sistemas y ', accent: 'personas.', tail: '' },
    en: { lead: 'Experience connecting systems and ', accent: 'people.', tail: '' },
  },
  description: {
    es: 'Una trayectoria que combina soporte técnico, procesos de identidad digital y formación continua en desarrollo de software.',
    en: 'A path combining technical support, digital identity processes, and continuous education in software development.',
  },
  workLabel: { es: 'EXPERIENCIA LABORAL', en: 'WORK EXPERIENCE' },
  educationLabel: { es: 'FORMACIÓN ACADÉMICA', en: 'EDUCATION' },
}

export const timeline: readonly TimelineEntry[] = [
  {
    id: 'digital-signatures-support',
    kind: 'work',
    period: { es: 'Enero 2024 — Actualidad', en: 'January 2024 — Present' },
    title: {
      es: 'Asistente de firmas digitales y soporte técnico',
      en: 'Digital signatures assistant and technical support',
    },
    description: {
      es: 'Soporte a usuarios y procesos relacionados con certificados digitales, autenticación, instalación, configuración y resolución de incidencias.',
      en: 'User support and processes related to digital certificates, authentication, installation, configuration, and incident resolution.',
    },
    details: [
      { es: 'Certificados digitales', en: 'Digital certificates' },
      { es: 'Autenticación', en: 'Authentication' },
      { es: 'Instalación y configuración', en: 'Installation and configuration' },
      { es: 'Resolución de incidencias', en: 'Incident resolution' },
    ],
  },
  {
    id: 'itla-software-development',
    kind: 'education',
    period: { es: 'Formación técnica', en: 'Technical education' },
    title: { es: 'Desarrollo de Software', en: 'Software Development' },
    institution: 'ITLA',
    description: {
      es: 'Formación técnica orientada al desarrollo de software y a la construcción de soluciones tecnológicas.',
      en: 'Technical education focused on software development and building technology solutions.',
    },
    details: [],
  },
  {
    id: 'unapec-software-engineering',
    kind: 'education',
    period: { es: 'En curso', en: 'In progress' },
    title: { es: 'Ingeniería de Software', en: 'Software Engineering' },
    institution: 'UNAPEC',
    description: {
      es: 'Formación universitaria actual en Ingeniería de Software.',
      en: 'Current university education in Software Engineering.',
    },
    details: [],
  },
]

export const techStack: TechStackContent = {
  eyebrow: { es: '03 / TECNOLOGÍAS', en: '03 / TECH STACK' },
  heading: {
    es: { lead: 'Herramientas para convertir lógica en ', accent: 'software.', tail: '' },
    en: { lead: 'Tools for turning logic into ', accent: 'software.', tail: '' },
  },
  description: {
    es: 'Tecnologías organizadas por el papel que cumplen dentro del proceso de desarrollo.',
    en: 'Technologies organized by the role they play in the development process.',
  },
  categories: [
    {
      id: 'backend',
      label: { es: 'Backend', en: 'Backend' },
      technologies: ['C#', '.NET', 'ASP.NET MVC', 'Entity Framework', 'REST APIs'],
    },
    {
      id: 'databases',
      label: { es: 'Bases de datos', en: 'Databases' },
      technologies: ['SQL Server', 'MySQL', 'MongoDB'],
    },
    {
      id: 'frontend-mobile',
      label: { es: 'Frontend y Mobile', en: 'Frontend & Mobile' },
      technologies: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Flutter'],
    },
    {
      id: 'tools',
      label: { es: 'Herramientas y flujo', en: 'Tools & Workflow' },
      technologies: ['Git', 'GitHub', 'Azure DevOps', 'Postman', 'Scrum'],
    },
  ],
}

export const projects: readonly Project[] = [
  {
    id: 'trackerclean',
    name: 'TrackerClean',
    category: { es: 'Backend · Proyecto académico', en: 'Backend · Academic project' },
    year: 2024,
    description: {
      es: 'Un proyecto académico de backend construido con arquitectura MVC: controladores, servicios RESTful y validaciones de datos, con persistencia mediante Entity Framework y SQL Server.',
      en: 'An academic backend project built with MVC architecture: controllers, RESTful services, and data validation, with persistence through Entity Framework and SQL Server.',
    },
    stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server'],
    artwork: 'architecture',
    artworkLabel: { es: 'MVC / FLUJO DE DATOS', en: 'MVC / DATA FLOW' },
    links: { repository: null, demo: null },
  },
  {
    id: 'cineseat',
    name: 'CineSeat',
    category: { es: 'Aplicación web · Reservas de cine', en: 'Web application · Cinema booking' },
    year: 2025,
    description: {
      es: 'Una aplicación web de reservas de cine con gestión de usuarios, selección de asientos y almacenamiento en base de datos, desarrollada con C# y ASP.NET MVC.',
      en: 'A cinema booking web application with user management, seat selection, and database storage, developed with C# and ASP.NET MVC.',
    },
    stack: ['C#', 'ASP.NET MVC'],
    artwork: 'cinema',
    artworkLabel: { es: 'CINE / GEOMETRÍA DE ASIENTOS', en: 'CINEMA / SEAT GEOMETRY' },
    links: { repository: null, demo: null },
  },
  {
    id: 'couteau',
    name: 'Couteau',
    category: { es: 'Aplicación móvil · Integración de APIs', en: 'Mobile application · API integration' },
    year: 2025,
    description: {
      es: 'Una aplicación móvil desarrollada en Flutter que integra APIs para reunir módulos de noticias, clima y búsqueda de universidades.',
      en: 'A Flutter mobile application integrating APIs for news, weather, and university search modules.',
    },
    stack: ['Flutter', 'APIs'],
    artwork: 'modules',
    artworkLabel: { es: 'MOBILE / MÓDULOS CONECTADOS', en: 'MOBILE / CONNECTED MODULES' },
    links: { repository: null, demo: null },
  },
]
