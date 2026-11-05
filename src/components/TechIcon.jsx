const icons = import.meta.glob('../assets/tech/*.svg', { eager: true, query: '?raw', import: 'default' })

// GitHub language names that differ from their icon file
const languageIcons = {
  'Python': 'python',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'GDScript': 'godotengine',
  'Shell': 'gnubash',
  'Dart': 'dart',
  'HTML': 'html5',
  'CSS': 'css3',
}

export const iconForLanguage = language => languageIcons[language]

function TechIcon({ icon, label, className }) {
  const svg = icons[`../assets/tech/${icon}.svg`]
  if (!svg) return null
  return (
    <span
      className={className}
      {...(label ? { role: 'img', 'aria-label': label, title: label } : { 'aria-hidden': true })}
      dangerouslySetInnerHTML={{ __html: svg.replace(/<title>.*?<\/title>/, '') }}
    />
  )
}

export default TechIcon
