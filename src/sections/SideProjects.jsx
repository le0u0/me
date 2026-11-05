import ExternalLink from '../components/ExternalLink.jsx'
import Section from '../components/Section.jsx'
import TechIcon, { iconForLanguage } from '../components/TechIcon.jsx'
import github from '../data/github.json'
import projects from '../data/projects.json'

function ProjectLink({ project }) {
  return (
    <ExternalLink className="project-link" href={project.href}>
      <span>
        <span className="project-title">
          <strong>{project.name}</strong>
          <TechIcon className="project-language" icon={iconForLanguage(project.language)} label={project.language} />
        </span>
        {project.description && <span>{project.description}</span>}
      </span>
      <span aria-hidden="true">↗</span>
    </ExternalLink>
  )
}

function SideProjects() {
  return (
    <Section id="projects" className="projects-section" contentClassName="split projects-layout" labelledBy="beyond-title">
      <h2 id="beyond-title">{projects.heading}</h2>
      <div className="beyond">
        <p>{projects.intro}</p>
        {github.repos.map(project => <ProjectLink key={project.name} project={project} />)}
      </div>
    </Section>
  )
}

export default SideProjects
