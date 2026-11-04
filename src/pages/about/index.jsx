import About from '../../sections/About.jsx'
import Experience from '../../sections/Experience.jsx'
import Section from '../../components/Section.jsx'
import profile from '../../data/profile.json'

function AboutPage() {
  return (
    <>
      <About />
      <Section id="equipment" labelledBy="equipment-title" className="equipment-section">
        <h2 id="equipment-title">{profile.equipment.heading}</h2>
        <ul className="equipment-list">
          {profile.equipment.items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </Section>
      <Section id="experience" labelledBy="experience-title" className="experience-section">
        <h2 id="experience-title">{profile.experienceHeading}</h2>
        <Experience />
      </Section>
    </>
  )
}

export default AboutPage
