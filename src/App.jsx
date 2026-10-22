import SiteHeader from './components/SiteHeader.jsx'
import Welcome from './components/Welcome.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import profile from './data/profile.json'
import './styles/home.css'

const pages = import.meta.glob('./pages/*/index.jsx', { eager: true, import: 'default' })

function App() {
  const pathname = window.location.pathname.replace(/\/?$/, '/')
  const route = profile.navigation.find(({ href }) => href !== '/' && pathname.startsWith(href)) ?? profile.navigation[0]
  const Page = pages[`./pages/${route.page}/index.jsx`]
  return (
    <>
      <title>{profile.metadata.title}</title>
      <meta name="description" content={profile.metadata.description} />
      <Welcome>
        <SiteHeader currentPage={route.href} />
        <main id="main">
          <Page />
        </main>
        <SiteFooter />
      </Welcome>
    </>
  )
}

export default App
