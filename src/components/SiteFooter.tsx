import { ArrowIcon } from './ArrowIcon'
import { profile } from '../data/portfolio'
import { useLanguage } from '../hooks/useLanguage'
import { contactDetails } from '../data/contact'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer container">
      <span>{profile.firstName} {profile.lastName}<span className="footer-dot"> / </span>{t.footer.role}</span>
      <nav className="footer-socials" aria-label={t.footer.socialLinksLabel}>
        {contactDetails.socialLinks.map((social) => (
          <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.name}>{social.name}</a>
        ))}
      </nav>
      <a href="#home">{t.footer.backToTop} <ArrowIcon /></a>
    </footer>
  )
}
