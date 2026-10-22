import profile from '../data/profile.json'
import ThemeToggle from './ThemeToggle.jsx'
import ExternalLink from './ExternalLink.jsx'

function SiteHeader({ currentPage }) {
  return (
    <header className="site-header wrap">
      <a className="wordmark" href={profile.homeHref}>{profile.brand}</a>
      <div className="header-actions">
        <nav aria-label={profile.accessibility.mainNavigation}>
          {profile.navigation.map(link => link.href.startsWith('/') ? (
            <a key={link.href} href={link.href} aria-current={link.href === currentPage ? 'page' : undefined}>{link.label}</a>
          ) : (
            <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default SiteHeader
