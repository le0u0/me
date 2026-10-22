const letters = {
  h: { width: 38, path: 'M4 58 C15 40 30 2 21 4 C10 6 7 58 10 58 C15 41 25 30 30 37 C34 42 23 60 32 58 L38 53' },
  i: { width: 22, path: 'M7 37 C5 46 0 61 10 58 L22 51 M12 22 l1 -1' },
  ',': { width: 18, path: 'M8 60 Q8 67 3 70' },
  "'": { width: 14, path: 'M9 18 Q9 25 5 29' },
  t: { width: 29, path: 'M17 13 C12 32 1 62 13 58 L29 51 M3 34 L28 32' },
  s: { width: 28, path: 'M25 37 C16 29 8 37 13 44 C29 56 13 65 5 57 L28 51' },
  m: { width: 52, path: 'M1 54 L10 36 L5 58 C15 38 22 30 24 38 L18 58 C30 36 37 31 39 39 C41 44 30 61 42 58 L52 51' },
  e: { width: 30, path: 'M1 53 C13 50 28 37 20 35 C9 31 2 53 10 58 C17 63 26 56 30 52' },
  ' ': { width: 20 },
}

function HandwrittenText({ text }) {
  const width = [...text].reduce((sum, letter) => sum + letters[letter].width, 20)
  let x = 10
  let stroke = 0
  return (
    <svg className="handwritten" viewBox={`0 0 ${width} 85`} role="img" aria-label={text}>
      {[...text].map((letter, index) => {
        const glyph = letters[letter]
        const left = x
        x += glyph.width
        return glyph.path && <path key={index} d={glyph.path} transform={`translate(${left} 0)`} pathLength="1" style={{ '--stroke': stroke++ }} />
      })}
    </svg>
  )
}

export default HandwrittenText
