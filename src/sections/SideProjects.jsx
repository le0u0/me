import projects from '../data/projects.json'

function ProjectLink({ project }) {
  return (
    <a className="project-link" href={project.href}>
      <span><strong>{project.name}</strong><span>{project.description}</span></span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

function SideProjects() {
  return (
    <aside className="beyond" aria-labelledby="beyond-title">
      <h2 id="beyond-title">{projects.heading}</h2>
      <p>{projects.intro}</p>
      {projects.items.map(project => <ProjectLink key={project.name} project={project} />)}
    </aside>
  )
}

export default SideProjects
