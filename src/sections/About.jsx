import Section from '../components/Section.jsx'
import profile from '../data/profile.json'

function About() {
  return (
    <Section id="about" labelledBy="about-title" className="about-section" contentClassName="about-layout">
      <h2 id="about-title">{profile.about.heading}</h2>
      <div className="about-copy">
        <p className="lead">{profile.about.lead}</p>
        {profile.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  )
}

export default About
