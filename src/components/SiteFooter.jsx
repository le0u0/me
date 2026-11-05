import profile from '../data/profile.json'

function SiteFooter() {
  return (
    <footer className="wrap site-footer">
      <span>{profile.name}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  )
}

export default SiteFooter
