import About from '../../sections/About.jsx'
import Experience from '../../sections/Experience.jsx'
import Section from '../../components/Section.jsx'
import profile from '../../data/profile.json'

function AboutPage() {
  return (
    <>
      <About />
      <Section id="experience" labelledBy="experience-title" className="experience-section">
        <h2 id="experience-title">{profile.experienceHeading}</h2>
        <Experience />
      </Section>
    </>
  )
}

export default AboutPage
