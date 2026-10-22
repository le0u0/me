import Section from '../../components/Section.jsx'
import ExternalLink from '../../components/ExternalLink.jsx'
import profile from '../../data/profile.json'

function DownloadsPage() {
  const cv = profile.downloads
  return (
    <Section id="downloads" labelledBy="downloads-title" className="about-section" contentClassName="about-layout">
      <h1 id="downloads-title">{cv.heading}</h1>
      <div className="about-copy">
        <p className="lead">{cv.description}</p>
        <p>{cv.format}</p>
        {cv.href ? <ExternalLink className="button" href={cv.href}>{cv.label}</ExternalLink> : <p>{cv.unavailable}</p>}
      </div>
    </Section>
  )
}

export default DownloadsPage
