import { useState } from 'react'
import profile from '../data/profile.json'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme)
  const isDark = theme === 'dark'
  const label = isDark ? profile.theme.switchToLight : profile.theme.switchToDark

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    document.querySelector('meta[name="theme-color"]').content = nextTheme === 'dark' ? '#151820' : '#F7F8FA'
    setTheme(nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label} aria-pressed={isDark}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? (
          <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>
        ) : (
          <path d="M20.5 13.2A8.5 8.5 0 0 1 10.8 3.5a8.5 8.5 0 1 0 9.7 9.7Z" />
        )}
      </svg>
    </button>
  )
}

export default ThemeToggle
