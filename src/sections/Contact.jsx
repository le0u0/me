import ExternalLink from '../components/ExternalLink.jsx'
import Section from '../components/Section.jsx'
import profile from '../data/profile.json'

function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="contact-section" contentClassName="split contact-layout">
      <h2 id="contact-title">{profile.contact.heading}</h2>
      <div className="contact-links">
        {profile.contact.links.map(link => (
          <ExternalLink key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></ExternalLink>
        ))}
      </div>
    </Section>
  )
}

export default Contact
