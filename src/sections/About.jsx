import Section from '../components/Section.jsx'
import profile from '../data/profile.json'

function About() {
  return (
    <Section id="about" labelledBy="about-title" className="about-section" contentClassName="about-layout">
      <h1 id="about-title">{profile.about.heading}</h1>
      <div className="about-copy">
        <p className="lead">{profile.about.lead}</p>
        {profile.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  )
}

export default About
