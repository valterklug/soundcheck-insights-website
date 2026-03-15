import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LeadGate({ pdfUrl, title, children }) {
  const [unlocked, setUnlocked] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email) return
    setStatus('submitting')
    try {
      await fetch('https://formsubmit.co/ajax/info@soundcheckinsights.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Soundcheck] Download: ${title}`,
          _template: 'table',
          resource: title,
        }),
      })
      setUnlocked(true)
      setStatus('success')
    } catch {
      setUnlocked(true)
      setStatus('success')
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <motion.div
          key="gate"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          style={{ background: 'rgba(0,196,212,0.05)', border: '1px solid rgba(0,196,212,0.15)', padding: '24px 28px' }}
        >
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>
            Free Download
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 400, color: '#fff', marginBottom: 4 }}>
            {title}
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16, lineHeight: 1.55 }}>
            Enter your name and email to download. We'll also send you a copy.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                required
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 13, padding: '10px 12px',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@agency.com"
                required
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 13, padding: '10px 12px',
                  outline: 'none',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary"
              style={{ fontSize: 12, padding: '10px 18px', width: 'fit-content' }}
            >
              {status === 'submitting' ? 'Unlocking…' : 'Download →'}
            </button>
          </form>
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="download"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'rgba(0,196,212,0.08)', border: '1px solid rgba(0,196,212,0.2)', padding: '24px 28px' }}
        >
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 400, color: '#fff', marginBottom: 8 }}>
            ✓ Your download is ready
          </div>
          <a
            href={pdfUrl}
            download
            className="btn btn-primary"
            style={{ fontSize: 12, padding: '10px 18px', display: 'inline-flex', textDecoration: 'none' }}
          >
            Download PDF →
          </a>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 10 }}>
            Thank you! Check your inbox for a copy as well.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
