# Bryan-Portfolio

Portfolio profesional de Bryan Quiñones, Software Developer especializado en Backend .NET. Incluye Hero, About Me, Experience & Education, Tech Stack, Selected Work y Contact, con una estética Creative Developer Lab basada en fondo oscuro, acentos verde menta e ilustraciones SVG propias.

## Stack

React, TypeScript, Vite 8, ESLint y Motion para React (`motion`, imports desde `motion/react`). Motion se añade para coordinar entradas, gestos y progreso de scroll. Sin fuentes remotas ni servicios externos.

## Ejecutar en local

Requisitos de la versión de Vite instalada: Node.js 20.19+ de la rama 20, o Node.js 22.12+ (`^20.19.0 || >=22.12.0`), y npm. Esta iteración se verificó con Node 26.13.0.

```bash
npm ci
npm run dev
```

Abre la URL que Vite muestra en la terminal (normalmente `http://localhost:5173`). Si las dependencias ya están instaladas, basta con `npm run dev`.

En Windows, si PowerShell bloquea `npm.ps1`, utiliza `npm.cmd` en los mismos comandos: por ejemplo, `npm.cmd run dev`. No hace falta cambiar la política de ejecución.

## Validación y versión de producción

```bash
npm run build
npm run lint
npm run preview
```

`build` comprueba TypeScript y genera `dist/`, incluyendo el contenido prerenderizado en HTML. `preview` sirve esa compilación localmente; utiliza la URL indicada por Vite. El prerender usa los mismos componentes de React mediante un plugin local de Vite; no requiere un servidor en producción ni otra dependencia. El cliente hidrata ese HTML, que sigue siendo legible y navegable por anclas aunque JavaScript no cargue. La hoja de estilos se enlaza desde `index.html` para que también se cargue sin JavaScript, tanto en desarrollo como en producción.

## Estructura

```text
src/
  components/   Navegación, enlaces, timelines, grupos tecnológicos, ilustración y footer
  sections/     Hero, About, Experience, Tech Stack, Projects y Contact
  data/         Perfil, navegación, trayectoria, tecnologías y proyectos
  hooks/        Sección activa durante el desplazamiento
  types/        Contratos de contenido localizado, perfil, trayectoria, stack y proyectos
  assets/       Ilustraciones SVG del backend y los proyectos
  styles/       Tokens, base, componentes, secciones y movimiento
  App.tsx       Composición de la página
  main.tsx      Entrada de React
  entry-server.tsx  Render del HTML estático para Vite
```

El contenido se edita en `src/data/portfolio.ts`. Los textos principales usan objetos `{ es, en }`; la interfaz muestra español por ahora y queda preparada para conectar un selector de idioma en una iteración futura. Cada proyecto tiene campos `links.repository` y `links.demo`, inicialmente `null`. Añade únicamente URLs HTTPS verificadas: los enlaces se muestran solo cuando tienen una URL. Los colores, fuentes y espaciado base están en `src/styles/tokens.css`; los estilos de About, Experience y Tech Stack están en `src/styles/profile.css`.

## Alcance de esta iteración

- Hero con nombre, rol, descripción y enlaces Projects y Contact.
- Navegación por anclas nativas para Home, About, Experience, Stack, Projects y Contact, indicador de sección activa y enlace para saltar al contenido.
- About Me presenta el enfoque profesional, ubicación y proyectos sin fotografía ni información sensible.
- Experience & Education separa la experiencia de soporte técnico y firmas digitales de la formación en ITLA y UNAPEC mediante dos recorridos visuales.
- Tech Stack organiza 19 tecnologías por Backend, Databases, Frontend & Mobile y Tools & Workflow, sin porcentajes de dominio.
- Selected Work presenta TrackerClean (2024), CineSeat (2025) y Couteau (2025), con sus tecnologías y descripciones. Sus ilustraciones geométricas son conceptuales, no capturas de las aplicaciones.
- Las tarjetas pueden recibir foco con Tab y muestran un estado equivalente al hover. No actúan como botones; los enlaces de repositorio o demo aparecerán cuando se añadan URLs verificadas.
- Contact permanece provisional. No se publican métricas ni canales de contacto.
- Diseño adaptable a móvil, tablet y escritorio. Las animaciones y el desplazamiento suave respetan `prefers-reduced-motion`.

Para revisar el resultado, prueba los enlaces del menú y de la Hero, navega con Tab y comprueba el diseño a 320, 768 y 1440 px de ancho. Activa la preferencia de movimiento reducido en el sistema o en las herramientas del navegador para comprobar que se desactivan las animaciones.

## Comprobar las animaciones

- Recarga al inicio: nombre, especialidad, descripción y botones entran en secuencia, sin separar el texto en letras.
- Observa la ilustración .NET: flota 4 px y deja de animarse fuera del viewport.
- Desplázate a Projects: la introducción y cada tarjeta aparecen una vez por montaje de la página. Al salir y volver a entrar permanecen visibles. Recargar inicia otra visita.
- Pasa el ratón por las tarjetas o enfócalas con Tab: elevación de 3 px, borde resaltado y desplazamiento de 2 px de la ilustración. La cuadrícula conserva su espacio.
- Prueba Projects y Contact con ratón, teclado o pantalla táctil: los enlaces mantienen sus anclas y añaden feedback suave de hover, foco y pulsación.
- Mira el borde superior: la línea menta refleja el scroll directamente, sin suavizado adicional ni bloqueo de clics.
- Activa `prefers-reduced-motion: reduce`, incluso sin recargar: se detienen las entradas, desplazamientos, flotación y transiciones. El progreso sigue reflejando la posición, sin animación automática.
- Para comprobar el modo sin JavaScript, ejecuta `npm run build` y `npm run preview`, desactiva JavaScript en el navegador y recarga. El HTML conserva contenido, ilustraciones y enlaces. Las entradas parten de contenido visible; si no se ejecutan, no hay elementos ocultos esperando una animación.

`useActiveSection` conserva el control de la sección activa. Los observadores de viewport de Motion se usan únicamente para las animaciones y limpian sus suscripciones al desmontar.
