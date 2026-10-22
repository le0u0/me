import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Section from './components/Section.jsx'
import Intro from './sections/Intro.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import SideProjects from './sections/SideProjects.jsx'
import Contact from './sections/Contact.jsx'
import profile from './data/profile.json'
import './styles/home.css'

function App() {
  return (
    <>
      <title>{profile.metadata.title}</title>
      <meta name="description" content={profile.metadata.description} />
      <SiteHeader />
      <main id="main">
        <Intro />
        <About />
        <Section id="experience" labelledBy="experience-title" className="experience-section">
          <Experience />
          <SideProjects />
        </Section>
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
