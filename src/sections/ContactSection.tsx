import { ArrowIcon } from '../components/ArrowIcon'
import { contactDetails } from '../data/contact'
import { useLanguage } from '../hooks/useLanguage'
import { useReveal } from '../hooks/useReveal'

export function ContactSection() {
  const { language, localize, t } = useLanguage()
  const scope = useReveal<HTMLDivElement>({ selector: '[data-contact-reveal]' })

  return (
    <section id="contact" className="content-section contact-section container" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="section-label">
        <span className="eyebrow">{t.contact.eyebrow}</span>
        <span className="section-state"><i aria-hidden="true" />{t.contact.state}</span>
      </div>

      <div className="contact-layout" ref={scope}>
        <div className="contact-intro" data-contact-reveal>
          <p className="contact-kicker">{t.contact.kicker}</p>
          <h2 id="contact-heading">{t.contact.headingLead}<br /> <span>{t.contact.headingAccent}</span></h2>
          <p className="contact-description">{t.contact.description}</p>

          <div className="contact-actions">
            <a className="contact-action contact-action--primary" href={contactDetails.mailto}>
              <span>{t.contact.sendEmail}</span><ArrowIcon />
            </a>
            <a className="contact-action contact-action--secondary" href={contactDetails.cv[language]} download>
              <span>{t.contact.downloadCv}</span><span className="download-icon" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="contact-directory" aria-label={t.contact.directoryLabel} data-contact-reveal>
          <div className="contact-directory-heading">
            <span>{t.contact.directoryLabel}</span><span aria-hidden="true">BQ / 05</span>
          </div>

          <dl className="contact-details">
            <div>
              <dt>{t.contact.locationLabel}</dt>
              <dd>{localize(contactDetails.location)}</dd>
            </div>
            <div>
              <dt>{t.contact.specialtyLabel}</dt>
              <dd>{localize(contactDetails.specialty)}</dd>
            </div>
            <div>
              <dt>{t.contact.emailLabel}</dt>
              <dd><a href={contactDetails.mailto}>{contactDetails.email}</a></dd>
            </div>
          </dl>

          <div className="contact-socials">
            <p>{t.contact.socialLabel}</p>
            <ul>
              {contactDetails.socialLinks.map((social, index) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.contact.openExternalLabel(social.name)}
                  >
                    <span className="contact-social-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span><strong>{social.name}</strong><small>{social.display}</small></span>
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
