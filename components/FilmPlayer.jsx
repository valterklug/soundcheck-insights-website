'use client'

import { useRef, useState } from 'react'

export default function FilmPlayer({ src, poster, playLabel, duration }) {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)

  // The films have sound and run a few minutes, so nothing loads until the visitor presses play.
  const play = () => {
    setStarted(true)
    videoRef.current?.play()
  }

  return (
    <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#000', border: '1px solid var(--border)', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={started}
        preload="none"
        playsInline
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      {!started && (
        <button type="button" onClick={play} aria-label={playLabel} className="film-cover">
          <span className="film-play">
            <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M0 0L14 8L0 16Z" fill="currentColor"/></svg>
            {playLabel}
            {duration && <span style={{ opacity: 0.7, fontWeight: 400 }}>{duration}</span>}
          </span>
        </button>
      )}
      <style>{`
        .film-cover { position: absolute; inset: 0; width: 100%; background: transparent; border: none; padding: 0; cursor: pointer; display: flex; align-items: flex-end; justify-content: flex-start; }
        .film-play { margin: 24px; display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px; background: var(--orange); color: #fff; border-radius: var(--radius); font-family: var(--font-display); font-size: 0.875rem; font-weight: 600; transition: transform 0.2s, box-shadow 0.2s; }
        .film-cover:hover .film-play, .film-cover:focus-visible .film-play { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,71,42,0.35); }
        @media(max-width:600px){ .film-play { margin: 10px; padding: 7px 12px; gap: 8px; font-size: 0.75rem; } .film-play svg { width: 10px; height: 12px; } }
      `}</style>
    </div>
  )
}
