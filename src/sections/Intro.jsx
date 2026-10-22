import Section from '../components/Section.jsx'
import profile from '../data/profile.json'

function Intro() {
  return (
    <Section className="hero-section" contentClassName="hero" labelledBy="intro-title">
      <div className="hero-name">
        <h1 id="intro-title">{profile.intro.greeting}<br />{profile.intro.namePrefix} {profile.name}<span>.</span></h1>
        <p className="role">{profile.title}</p>
      </div>
      <div className="hero-intro">
        <h2>{profile.intro.headline}</h2>
        <p>{profile.intro.description}</p>
        <a className="button" href={profile.links.github}>{profile.intro.githubLabel}</a>
      </div>
    </Section>
  )
}

export default Intro
