import { useLanguage } from '../hooks/useLanguage'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="content-section contact-section container" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="section-label"><span className="eyebrow">{t.contact.eyebrow}</span><span className="section-state">{t.contact.state}</span></div>
      <div className="section-layout">
        <h2 id="contact-heading">{t.contact.headingLead}<br /> <span>{t.contact.headingAccent}</span></h2>
        <div className="section-copy">
          <p>{t.contact.description}</p>
          <p className="placeholder-note"><span aria-hidden="true">↳</span> {t.contact.note}</p>
        </div>
      </div>
    </section>
  )
}
