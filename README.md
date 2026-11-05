# Bryan-Portfolio

Portfolio profesional de Bryan Quiñones, Software Developer especializado en Backend .NET. Hero y Selected Work responsive con estética Creative Developer Lab: fondo oscuro, acentos verde menta e ilustraciones SVG propias.

## Stack

React, TypeScript, Vite 8 y ESLint. Sin librerías adicionales, fuentes remotas ni servicios externos.

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

`build` comprueba TypeScript y genera `dist/`. `preview` sirve esa compilación localmente; utiliza la URL indicada por Vite.

## Estructura

```text
src/
  components/   Navegación, enlaces, iconos, ilustración y footer
  sections/     Hero, Projects y Contact
  data/         Perfil, navegación y proyectos
  hooks/        Sección activa durante el desplazamiento
  types/        Contratos del perfil, navegación y proyectos
  assets/       Ilustraciones SVG del backend y los proyectos
  styles/       Tokens, base, componentes, secciones y movimiento
  App.tsx       Composición de la página
  main.tsx      Entrada de React
```

El perfil y los proyectos se editan en `src/data/portfolio.ts`. Cada proyecto tiene campos `links.repository` y `links.demo`, inicialmente `null`. Añade únicamente URLs HTTPS verificadas: los enlaces se muestran solo cuando tienen una URL. Los colores, fuentes y espaciado base están en `src/styles/tokens.css`; los estilos de Selected Work están en `src/styles/projects.css`.

## Alcance de esta iteración

- Hero con nombre, rol, descripción y enlaces Projects y Contact.
- Navegación por anclas nativas, indicador de sección activa y enlace para saltar al contenido.
- Selected Work presenta TrackerClean (2024), CineSeat (2025) y Couteau (2025), con sus tecnologías y descripciones. Sus ilustraciones geométricas son conceptuales, no capturas de las aplicaciones.
- Las tarjetas pueden recibir foco con Tab y muestran un estado equivalente al hover. No actúan como botones; los enlaces de repositorio o demo aparecerán cuando se añadan URLs verificadas.
- Contact permanece provisional. No se publican métricas ni canales de contacto.
- Diseño adaptable a móvil, tablet y escritorio. Las animaciones y el desplazamiento suave respetan `prefers-reduced-motion`.

Para revisar el resultado, prueba los enlaces del menú y de la Hero, navega con Tab y comprueba el diseño a 320, 768 y 1440 px de ancho. Activa la preferencia de movimiento reducido en el sistema o en las herramientas del navegador para comprobar que se desactivan las animaciones.
