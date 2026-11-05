import type { Locale } from '../types/portfolio'

export interface UiTranslations {
  seo: {
    title: string
    description: string
  }
  skipLink: string
  language: {
    selectorLabel: string
    englishLabel: string
    spanishLabel: string
  }
  header: {
    homeLabel: string
    navigationLabel: string
    mobileNavigationLabel: string
    openMenuLabel: string
    closeMenuLabel: string
    menuButton: string
    menuTitle: string
    closeButton: string
    menuNote: string
    brandCaptionLead: string
    brandCaptionTail: string
  }
  hero: {
    eyebrow: string
    projectsButton: string
    contactButton: string
    mottoLead: string
    mottoAccent: string
    explore: string
    footnoteLead: string
    footnoteTail: string
  }
  backendVisual: {
    topline: string
    axis: string
    logicTag: string
    structureTag: string
    bottomline: string
  }
  timeline: {
    detailsLabel: (title: string) => string
  }
  tech: {
    categoriesLabel: string
    technologiesLabel: (category: string) => string
  }
  projects: {
    eyebrow: string
    headingLead: string
    headingAccent: string
    description: string
    collectionLabel: string
    projectLabel: (number: string) => string
    technologiesLabel: (project: string) => string
    repository: string
    demo: string
    linkLabel: (label: string, project: string) => string
    artworkCaption: string
  }
  contact: {
    eyebrow: string
    state: string
    headingLead: string
    headingAccent: string
    kicker: string
    description: string
    sendEmail: string
    downloadCv: string
    directoryLabel: string
    locationLabel: string
    specialtyLabel: string
    emailLabel: string
    socialLabel: string
    openExternalLabel: (network: string) => string
  }
  footer: {
    role: string
    socialLinksLabel: string
    backToTop: string
  }
}

export const translations: Record<Locale, UiTranslations> = {
  en: {
    seo: {
      title: 'Bryan Quiñones — Backend .NET Developer',
      description: 'Professional portfolio of Bryan Quiñones, a Software Developer specializing in Backend .NET, MVC architecture, REST APIs, and database integration.',
    },
    skipLink: 'Skip to content',
    language: {
      selectorLabel: 'Select language',
      englishLabel: 'English',
      spanishLabel: 'Spanish',
    },
    header: {
      homeLabel: 'Bryan Quiñones — Home',
      navigationLabel: 'Primary navigation',
      mobileNavigationLabel: 'Mobile navigation',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      menuButton: 'MENU',
      menuTitle: 'NAVIGATION',
      closeButton: 'CLOSE',
      menuNote: 'BRYAN QUIÑONES / SOFTWARE DEVELOPER',
      brandCaptionLead: 'SOFTWARE',
      brandCaptionTail: 'DEVELOPER',
    },
    hero: {
      eyebrow: 'CREATIVE DEVELOPER LAB',
      projectsButton: 'Projects',
      contactButton: 'Contact',
      mottoLead: 'Ideas with structure.',
      mottoAccent: 'Software with purpose.',
      explore: 'EXPLORE THE LAB',
      footnoteLead: 'PERSONAL PORTFOLIO',
      footnoteTail: 'BACKEND DEVELOPMENT',
    },
    backendVisual: {
      topline: 'THE BACKEND LAB',
      axis: 'LOGIC MEETS STRUCTURE',
      logicTag: '{ logic }',
      structureTag: '< structure />',
      bottomline: 'BEHIND THE INTERFACE ↗',
    },
    timeline: {
      detailsLabel: (title) => `Areas related to ${title}`,
    },
    tech: {
      categoriesLabel: 'Technologies by category',
      technologiesLabel: (category) => `${category} technologies`,
    },
    projects: {
      eyebrow: '04 / PROJECTS',
      headingLead: 'Selected ',
      headingAccent: 'Work.',
      description: 'From backend systems to web and mobile experiences. Three projects, each offering a different way to give structure to an idea.',
      collectionLabel: 'Selected projects',
      projectLabel: (number) => `Project ${number}`,
      technologiesLabel: (project) => `Technologies used in ${project}`,
      repository: 'Repository',
      demo: 'Demo',
      linkLabel: (label, project) => `${label} for ${project}`,
      artworkCaption: 'CONCEPTUAL ILLUSTRATION',
    },
    contact: {
      eyebrow: '05 / CONTACT',
      state: 'DIRECT CHANNELS',
      headingLead: 'Let’s build what happens',
      headingAccent: 'behind the interface.',
      kicker: 'START A CONVERSATION',
      description: 'Connect with me to discuss Backend .NET, software development, and practical systems built with clear structure.',
      sendEmail: 'Send an email',
      downloadCv: 'Download CV',
      directoryLabel: 'PROFESSIONAL DIRECTORY',
      locationLabel: 'Location',
      specialtyLabel: 'Specialty',
      emailLabel: 'Email',
      socialLabel: 'PROFILES',
      openExternalLabel: (network) => `Open ${network} in a new tab`,
    },
    footer: {
      role: 'Software Developer',
      socialLinksLabel: 'Professional profiles',
      backToTop: 'Back to top',
    },
  },
  es: {
    seo: {
      title: 'Bryan Quiñones — Desarrollador Backend .NET',
      description: 'Portfolio profesional de Bryan Quiñones, Software Developer especializado en Backend .NET, arquitectura MVC, APIs REST e integración de bases de datos.',
    },
    skipLink: 'Saltar al contenido',
    language: {
      selectorLabel: 'Seleccionar idioma',
      englishLabel: 'Inglés',
      spanishLabel: 'Español',
    },
    header: {
      homeLabel: 'Bryan Quiñones — Inicio',
      navigationLabel: 'Navegación principal',
      mobileNavigationLabel: 'Navegación móvil',
      openMenuLabel: 'Abrir menú de navegación',
      closeMenuLabel: 'Cerrar menú de navegación',
      menuButton: 'MENÚ',
      menuTitle: 'NAVEGACIÓN',
      closeButton: 'CERRAR',
      menuNote: 'BRYAN QUIÑONES / DESARROLLADOR DE SOFTWARE',
      brandCaptionLead: 'DESARROLLADOR',
      brandCaptionTail: 'DE SOFTWARE',
    },
    hero: {
      eyebrow: 'CREATIVE DEVELOPER LAB',
      projectsButton: 'Proyectos',
      contactButton: 'Contacto',
      mottoLead: 'Ideas con estructura.',
      mottoAccent: 'Software con intención.',
      explore: 'EXPLORA EL LAB',
      footnoteLead: 'PORTFOLIO PERSONAL',
      footnoteTail: 'DESARROLLO BACKEND',
    },
    backendVisual: {
      topline: 'EL LABORATORIO BACKEND',
      axis: 'LÓGICA Y ESTRUCTURA',
      logicTag: '{ lógica }',
      structureTag: '< estructura />',
      bottomline: 'DETRÁS DE LA INTERFAZ ↗',
    },
    timeline: {
      detailsLabel: (title) => `Áreas de ${title}`,
    },
    tech: {
      categoriesLabel: 'Tecnologías por categoría',
      technologiesLabel: (category) => `Tecnologías de ${category}`,
    },
    projects: {
      eyebrow: '04 / PROYECTOS',
      headingLead: 'Trabajo ',
      headingAccent: 'seleccionado.',
      description: 'Del backend a las experiencias web y móviles. Tres proyectos, distintas formas de dar estructura a una idea.',
      collectionLabel: 'Proyectos seleccionados',
      projectLabel: (number) => `Proyecto ${number}`,
      technologiesLabel: (project) => `Tecnologías de ${project}`,
      repository: 'Repositorio',
      demo: 'Demo',
      linkLabel: (label, project) => `${label} de ${project}`,
      artworkCaption: 'ILUSTRACIÓN CONCEPTUAL',
    },
    contact: {
      eyebrow: '05 / CONTACTO',
      state: 'CANALES DIRECTOS',
      headingLead: 'Construyamos lo que sucede',
      headingAccent: 'detrás de la interfaz.',
      kicker: 'INICIEMOS UNA CONVERSACIÓN',
      description: 'Conversemos sobre Backend .NET, desarrollo de software y sistemas prácticos construidos con una estructura clara.',
      sendEmail: 'Enviar correo',
      downloadCv: 'Descargar CV',
      directoryLabel: 'DIRECTORIO PROFESIONAL',
      locationLabel: 'Ubicación',
      specialtyLabel: 'Especialidad',
      emailLabel: 'Correo',
      socialLabel: 'PERFILES',
      openExternalLabel: (network) => `Abrir ${network} en una pestaña nueva`,
    },
    footer: {
      role: 'Desarrollador de Software',
      socialLinksLabel: 'Perfiles profesionales',
      backToTop: 'Volver al inicio',
    },
  },
}
