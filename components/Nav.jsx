'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageToggle from './LanguageToggle'

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
  const pathname = usePathname()
  const t = useTranslations('nav')
  const locale = useLocale()

  const links = [
    { label: t('products'), to: '/products' },
    { label: t('forConsultants'), to: '/for-consultants' },
    { label: t('forBrands'), to: '/for-brands' },
    { label: t('partnerWithUs'), to: '/partner' },
    { label: t('partnerships'), to: '/partnerships' },
    { label: t('ourPartners'), to: '/our-partners' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Determine if a link is active
  const isActive = (to) => {
    const stripLocale = pathname.replace(/^\/(es|pt)(\/|$)/, '/')
    return stripLocale === to || stripLocale === `${to}/`
  }

  const bg = scrolled
    ? 'rgba(6,15,30,0.97)'
    : 'rgba(6,15,30,0.85)'

  return (
    <nav style={{ ...navStyle, background: bg, backdropFilter: 'blur(20px)', boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.4)' : 'none' }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <img
          src="/logo-neg.png"
          alt="Soundcheck Insights"
          style={{ height: 34, width: 'auto' }}
        />
      </Link>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none',
        marginLeft: 'auto', marginRight: 16, position: 'relative',
      }}
        className="nav-desktop-links"
      >
        {links.map(({ label, to }) => {
          const active = isActive(to)
          return (
            <li key={to}>
              <Link href={to} style={{
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

      <div className="nav-lang-desktop">
        <LanguageToggle />
      </div>

      <a href="https://www.soundcheck.report/sign-in" target="_blank" rel="noopener noreferrer"
        style={{
          fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
          color: 'rgba(255,255,255,0.45)', padding: '9px 16px', flexShrink: 0, marginLeft: 8,
          textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.target.style.color = '#fff'}
        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
        data-desktop="true"
      >
        {t('signIn')}
      </a>

      <Link href="/contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 13, flexShrink: 0, marginLeft: 4 }}
        data-desktop="true"
      >
        {t('getStarted')}
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
              maxHeight: 'calc(100vh - 68px)',
              overflowY: 'auto',
            }}
          >
            {links.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={to} style={{
                  display: 'block', padding: '14px 0',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 400,
                  color: isActive(to) ? '#4DDDE8' : 'rgba(255,255,255,0.7)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: links.length * 0.04 }}
              style={{ marginTop: 14 }}
            >
              <LanguageToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (links.length + 0.5) * 0.04 }}
              style={{ marginTop: 16, display: 'flex', gap: 10 }}
            >
              <a href="https://www.soundcheck.report/sign-in" target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '12px 16px',
                }}
              >
                {t('signIn')}
              </a>
              <Link href="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                {t('getStarted')}
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
          .nav-lang-desktop { display: none !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  )
}
