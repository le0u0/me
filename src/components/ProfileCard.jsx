import ExternalLink from './ExternalLink.jsx'

function ProfileCard({ profile }) {
  return (
    <ExternalLink className="profile-card" href={profile.url}>
      <img src={profile.avatar} alt="" width="88" height="88" />
      <span><strong>{profile.name ?? profile.login}</strong><span>@{profile.login}</span>{profile.bio && <span>{profile.bio}</span>}</span>
    </ExternalLink>
  )
}

export default ProfileCard
