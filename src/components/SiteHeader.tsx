import { navigation, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function SiteHeader() {
  const activeSection = useActiveSection()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={`${profile.firstName} ${profile.lastName} — Inicio`}>
          <span className="brand-mark" aria-hidden="true">bq<span>.</span></span>
          <span className="brand-caption" aria-hidden="true">SOFTWARE<br />DEVELOPER</span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className="navigation">
            {navigation.map(({ id, label, index }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
                  <span className="nav-index" aria-hidden="true">{index}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
