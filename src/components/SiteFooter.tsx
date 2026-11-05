import { ArrowIcon } from './ArrowIcon'
import { profile } from '../data/portfolio'
import { useLanguage } from '../hooks/useLanguage'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer container">
      <span>{profile.firstName} {profile.lastName}<span className="footer-dot"> / </span>{t.footer.role}</span>
      <a href="#home">{t.footer.backToTop} <ArrowIcon /></a>
    </footer>
  )
}
