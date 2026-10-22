import profile from '../data/profile.json'

function ExperienceItem({ experience }) {
  return (
    <article className="job">
      <p className="job-date">{experience.date}</p>
      <h3>{experience.company}</h3>
      <p className="job-role">{experience.role}</p>
      <p>{experience.description}</p>
    </article>
  )
}

function Experience() {
  return (
    <div className="experience-column">
      {profile.experience.map(experience => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </div>
  )
}

export default Experience
