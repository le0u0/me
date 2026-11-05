import { useEffect, useRef } from 'react'
import TechIcon from './TechIcon.jsx'

const SPEED = 40 // px per second
const COPIES = 4

function TechList({ items, hidden }) {
  return (
    <ul className="marquee-list" aria-hidden={hidden || undefined}>
      {items.map(item => (
        <li key={item.name}>
          <TechIcon className="marquee-icon" icon={item.icon} />
          {item.name}
        </li>
      ))}
    </ul>
  )
}

function TechMarquee({ label, items }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let offset = 0
    let last = performance.now()
    let drag = null
    let hovered = false
    let frame

    const tick = now => {
      const loop = track.firstElementChild.offsetWidth
      if (!drag && !hovered && !reduceMotion) offset -= SPEED * (now - last) / 1000
      offset %= loop
      if (offset > 0) offset -= loop
      track.style.transform = `translateX(${offset}px)`
      last = now
      frame = requestAnimationFrame(tick)
    }

    const down = event => {
      drag = { x: event.clientX, start: offset }
      viewport.setPointerCapture(event.pointerId)
      viewport.classList.add('is-dragging')
    }
    const move = event => {
      if (drag) offset = drag.start + event.clientX - drag.x
    }
    const up = () => {
      drag = null
      viewport.classList.remove('is-dragging')
    }
    const enter = event => { hovered = event.pointerType === 'mouse' }
    const leave = () => { hovered = false }

    viewport.addEventListener('pointerdown', down)
    viewport.addEventListener('pointermove', move)
    viewport.addEventListener('pointerup', up)
    viewport.addEventListener('pointercancel', up)
    viewport.addEventListener('pointerenter', enter)
    viewport.addEventListener('pointerleave', leave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener('pointerdown', down)
      viewport.removeEventListener('pointermove', move)
      viewport.removeEventListener('pointerup', up)
      viewport.removeEventListener('pointercancel', up)
      viewport.removeEventListener('pointerenter', enter)
      viewport.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <section className="marquee" aria-label={label} ref={viewportRef}>
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <TechList key={copy} items={items} hidden={copy > 0} />
        ))}
      </div>
    </section>
  )
}

export default TechMarquee
