import { ArrowIcon } from './ArrowIcon'
import { profile } from '../data/portfolio'

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>{profile.firstName} {profile.lastName}<span className="footer-dot"> / </span>Software Developer</span>
      <a href="#home">Volver al inicio <ArrowIcon /></a>
    </footer>
  )
}
