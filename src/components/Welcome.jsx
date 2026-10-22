import { useEffect, useState } from 'react'
import profile from '../data/profile.json'
import HandwrittenText from './HandwrittenText.jsx'

function Welcome({ children }) {
  const [visible, setVisible] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    const navigation = performance.getEntriesByType('navigation')[0]
    if (navigation?.type === 'reload') return true
    if (navigation?.type === 'back_forward') return false
    return !document.referrer || new URL(document.referrer).origin !== window.location.origin
  })

  useEffect(() => {
    if (!visible) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timeout = window.setTimeout(() => setVisible(false), 2000)
    return () => {
      window.clearTimeout(timeout)
      document.body.style.overflow = overflow
    }
  }, [visible])

  return (
    <>
      {visible && <div className="welcome"><HandwrittenText text={profile.welcome.text} /></div>}
      <div hidden={visible} inert={visible}>{children}</div>
    </>
  )
}

export default Welcome
