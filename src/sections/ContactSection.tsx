export function ContactSection() {
  return (
    <section id="contact" className="content-section contact-section container" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="section-label"><span className="eyebrow">02 / CONTACT</span><span className="section-state">PRÓXIMAMENTE</span></div>
      <div className="section-layout">
        <h2 id="contact-heading">Las ideas empiezan<br /><span>con una conversación.</span></h2>
        <div className="section-copy">
          <p>Este será el espacio para conectar y conversar sobre software, ideas y nuevos desafíos.</p>
          <p className="placeholder-note"><span aria-hidden="true">↳</span> Canales de contacto profesional en preparación.</p>
        </div>
      </div>
    </section>
  )
}
