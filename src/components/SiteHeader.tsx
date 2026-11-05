import { useCallback, useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useMediaQuery } from '../hooks/useMediaQuery'
import type { SectionId } from '../types/portfolio'

export function SiteHeader() {
  const activeSection = useActiveSection()
  const isMobileNavigation = useMediaQuery('(max-width: 900px)')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  const closeMenu = useCallback((restoreFocus = false) => {
    document.documentElement.classList.remove('mobile-menu-open')
    if (dialogRef.current?.open) dialogRef.current.close()
    setMenuOpen(false)

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
  }, [])

  useEffect(() => {
    if (!menuOpen || !isMobileNavigation) return

    const dialog = dialogRef.current
    if (!dialog) return

    document.documentElement.classList.add('mobile-menu-open')
    if (!dialog.open) dialog.showModal()
    const focusFrame = window.requestAnimationFrame(() => firstLinkRef.current?.focus())

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.documentElement.classList.remove('mobile-menu-open')
    }
  }, [isMobileNavigation, menuOpen])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 900px)')
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) closeMenu()
    }

    mobileQuery.addEventListener('change', closeAtDesktop)
    return () => mobileQuery.removeEventListener('change', closeAtDesktop)
  }, [closeMenu])

  const handleNavigation = (sectionId: SectionId) => {
    closeMenu()
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.focus({ preventScroll: true })
    })
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={`${profile.firstName} ${profile.lastName} — Inicio`}>
          <span className="brand-mark" aria-hidden="true">bq<span>.</span></span>
          <span className="brand-caption" aria-hidden="true">SOFTWARE<br />DEVELOPER</span>
        </a>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          <ul className="navigation">
            {navigation.map(({ id, label, index }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
                  <span className="nav-index" aria-hidden="true">{index}</span>
                  {label.es}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-dialog"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setMenuOpen(true)}
        >
          <span>MENÚ</span>
          <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <dialog
          ref={dialogRef}
          id="mobile-navigation-dialog"
          className="mobile-menu"
          aria-labelledby="mobile-menu-title"
          onCancel={(event) => {
            event.preventDefault()
            closeMenu(true)
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu(true)
          }}
        >
          <div className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <p id="mobile-menu-title"><span aria-hidden="true">●</span> NAVEGACIÓN</p>
              <button type="button" className="mobile-menu-close" onClick={() => closeMenu(true)}>
                <span>CERRAR</span><span aria-hidden="true">×</span>
              </button>
            </div>
            <nav aria-label="Navegación móvil">
              <ul className="mobile-navigation">
                {navigation.map(({ id, label, index }, itemIndex) => (
                  <li key={id}>
                    <a
                      ref={itemIndex === 0 ? firstLinkRef : undefined}
                      href={`#${id}`}
                      aria-current={activeSection === id ? 'location' : undefined}
                      onClick={() => handleNavigation(id)}
                    >
                      <span className="mobile-nav-index" aria-hidden="true">{index}</span>
                      <span>{label.es}</span>
                      <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mobile-menu-note">BRYAN QUIÑONES / SOFTWARE DEVELOPER</p>
          </div>
        </dialog>
      </div>
    </header>
  )
}
