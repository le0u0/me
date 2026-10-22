import ExternalLink from '../components/ExternalLink.jsx'
import Section from '../components/Section.jsx'
import projects from '../data/projects.json'

function ProjectLink({ project }) {
  return (
    <ExternalLink className="project-link" href={project.href}>
      <span><strong>{project.name}</strong><span>{project.description}</span></span>
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
        {projects.items.map(project => <ProjectLink key={project.name} project={project} />)}
      </div>
    </Section>
  )
}

export default SideProjects
