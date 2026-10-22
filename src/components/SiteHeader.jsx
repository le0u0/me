import profile from '../data/profile.json'
import ThemeToggle from './ThemeToggle.jsx'

function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">{profile.accessibility.skipToContent}</a>
      <header className="site-header wrap">
        <span className="wordmark">{profile.name}</span>
        <div className="header-actions">
          <nav aria-label={profile.accessibility.mainNavigation}>
            {profile.navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  )
}

export default SiteHeader
