import About from '../../sections/About.jsx'
import Experience from '../../sections/Experience.jsx'
import Contact from '../../sections/Contact.jsx'
import Section from '../../components/Section.jsx'
import profile from '../../data/profile.json'
import TechMarquee from '../../components/TechMarquee.jsx'
import '../../styles/about.css'

function AboutPage() {
  return (
    <>
      <About />
      <TechMarquee label={profile.equipment.label} items={profile.equipment.items} />
      <Section id="experience" labelledBy="experience-title" className="split experience-section">
        <h2 id="experience-title">{profile.experienceHeading}</h2>
        <Experience />
      </Section>
      <Contact />
    </>
  )
}

export default AboutPage
