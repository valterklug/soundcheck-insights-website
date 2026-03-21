import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'For Agencies', to: '/for-agencies' },
  { label: 'For Investors', to: '/for-investors' },
  { label: 'Products', to: '/products' },
  { label: 'Resources', to: '/resources' },
  { label: 'Partner with Us', to: '/partner' },
  { label: 'Our Partners', to: '/our-partners' },
]

const navStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
  height: 68,
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0 60px',
  transition: 'background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
  borderBottom: '1px solid rgba(0,196,212,0.12)',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const bg = scrolled
    ? 'rgba(6,15,30,0.97)'
    : 'rgba(6,15,30,0.85)'

  return (
    <nav style={{ ...navStyle, background: bg, backdropFilter: 'blur(20px)', boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.4)' : 'none' }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <img
          src="/logo-neg.png"
          alt="Soundcheck Insights"
          style={{ height: 34, width: 'auto' }}
        />
      </Link>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none',
        marginLeft: 'auto', marginRight: 16,
      }}
        className="nav-desktop-links"
      >
        {links.map(({ label, to }) => {
          const active = location.pathname === to
          return (
            <li key={to}>
              <Link to={to} style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
                color: active ? '#4DDDE8' : 'rgba(255,255,255,0.5)',
                padding: '6px 13px', borderRadius: 4, display: 'block',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { if (!active) e.target.style.color = '#fff' }}
                onMouseLeave={e => { if (!active) e.target.style.color = 'rgba(255,255,255,0.5)' }}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      <Link to="/contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 13, flexShrink: 0 }}
        data-desktop="true"
      >
        Get Started →
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        style={{
          display: 'none', background: 'none', border: 'none', padding: 8,
          color: '#fff', cursor: 'pointer', marginLeft: 'auto',
        }}
        className="nav-hamburger"
      >
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.g key="x" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <line x1="2" y1="2" x2="20" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="2" x2="2" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </motion.g>
            ) : (
              <motion.g key="bars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <line x1="0" y1="3" x2="22" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="9" x2="22" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0,
              background: 'rgba(6,15,30,0.98)', backdropFilter: 'blur(20px)',
              padding: '24px 24px 32px',
              borderBottom: '1px solid rgba(0,196,212,0.12)',
              zIndex: 999,
            }}
          >
            {links.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link to={to} style={{
                  display: 'block', padding: '14px 0',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 400,
                  color: location.pathname === to ? '#4DDDE8' : 'rgba(255,255,255,0.7)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
              style={{ marginTop: 20 }}
            >
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get Started →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav a[data-desktop="true"] { display: none !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  )
}
