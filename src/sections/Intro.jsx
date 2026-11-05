import ProfileCard from '../components/ProfileCard.jsx'
import Section from '../components/Section.jsx'
import github from '../data/github.json'
import profile from '../data/profile.json'

function Intro() {
  return (
    <Section className="hero-section" contentClassName="hero" labelledBy="intro-title">
      <div>
        <h1 id="intro-title">{profile.name}<span>.</span></h1>
        <p className="hero-role">{profile.intro.role}</p>
      </div>
      {github.profile && <ProfileCard profile={github.profile} />}
    </Section>
  )
}

export default Intro
