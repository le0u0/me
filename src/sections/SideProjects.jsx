import ExternalLink from '../components/ExternalLink.jsx'
import Section from '../components/Section.jsx'
import github from '../data/github.json'
import projects from '../data/projects.json'

function ProfileCard({ profile }) {
  return (
    <ExternalLink className="profile-card" href={profile.url}>
      <img src={profile.avatar} alt="" width="56" height="56" />
      <span><strong>{profile.name ?? profile.login}</strong><span>@{profile.login}</span>{profile.bio && <span>{profile.bio}</span>}</span>
    </ExternalLink>
  )
}

function ProjectLink({ project }) {
  return (
    <ExternalLink className="project-link" href={project.href}>
      <span><strong>{project.name}</strong>{project.description && <span>{project.description}</span>}</span>
      <span aria-hidden="true">↗</span>
    </ExternalLink>
  )
}

function SideProjects() {
  return (
    <Section id="projects" className="projects-section" contentClassName="projects-layout" labelledBy="beyond-title">
      <h2 id="beyond-title">{projects.heading}</h2>
      <div className="beyond">
        <p>{projects.intro}</p>
        {github.profile && <ProfileCard profile={github.profile} />}
        {github.repos.map(project => <ProjectLink key={project.name} project={project} />)}
      </div>
    </Section>
  )
}

export default SideProjects
