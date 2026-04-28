import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import { getLangFromPath, getLocalizedPath } from '../i18n'

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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const lang = getLangFromPath(location.pathname)

  const links = [
    { label: t('nav.howItWorks'), to: getLocalizedPath('/how-it-works', lang) },
    { label: t('nav.forAgencies'), to: getLocalizedPath('/for-agencies', lang) },
    { label: t('nav.forInvestors'), to: getLocalizedPath('/for-investors', lang) },
    { label: t('nav.partnerWithUs'), to: getLocalizedPath('/partner', lang) },
    { label: t('nav.ourPartners'), to: getLocalizedPath('/our-partners', lang) },
  ]

  const platformModules = [
    { label: t('nav.marketResearch'), to: getLocalizedPath('/market-research', lang) },
    { label: t('nav.consumerJourneys'), to: getLocalizedPath('/consumer-journeys', lang) },
    { label: t('nav.virtualFocusGroups'), to: getLocalizedPath('/virtual-focus-groups', lang) },
  ]

  const standaloneProducts = [
    { label: t('nav.internationalViabilityAnalysis'), to: getLocalizedPath('/expansion-report', lang) },
    { label: t('nav.scaleAssessment'), to: getLocalizedPath('/scale-assessment', lang) },
    { label: t('nav.investorVetting'), to: getLocalizedPath('/investor-vetting', lang) },
    { label: t('nav.businessPlan'), to: getLocalizedPath('/business-plan', lang) },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setProductsDropdownOpen(false)
    setMobileProductsOpen(false)
  }, [location])

  const bg = scrolled
    ? 'rgba(6,15,30,0.97)'
    : 'rgba(6,15,30,0.85)'

  return (
    <nav style={{ ...navStyle, background: bg, backdropFilter: 'blur(20px)', boxShadow: scrolled ? '0 1px 30px rgba(0,0,0,0.4)' : 'none' }}>
      {/* Logo */}
      <Link to={getLocalizedPath('/', lang)} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
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

        {/* Products dropdown */}
        <li
          onMouseEnter={() => setProductsDropdownOpen(true)}
          onMouseLeave={() => setProductsDropdownOpen(false)}
          style={{ position: 'relative' }}
        >
          <div style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
            color: 'rgba(255,255,255,0.5)',
            padding: '6px 13px', borderRadius: 4, display: 'block',
            transition: 'color 0.2s', cursor: 'pointer',
          }}
            onMouseEnter={e => { e.target.style.color = '#fff' }}
            onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.5)' }}
          >
            {t('nav.products')}
          </div>

          {/* Desktop dropdown panel */}
          <AnimatePresence>
            {productsDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute', top: '100%', left: '-40px', marginTop: 8,
                  background: 'rgba(6,15,30,0.98)', backdropFilter: 'blur(20px)',
                  borderRadius: 8, padding: '24px', minWidth: 520,
                  border: '1px solid rgba(0,196,212,0.12)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px',
                  zIndex: 1001,
                }}
              >
                {/* Platform Modules */}
                <div>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600,
                    color: '#4DDDE8', letterSpacing: '0.5px', marginBottom: 8,
                    textTransform: 'uppercase',
                  }}>
                    {t('nav.platformModules')}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 12,
                    color: 'rgba(255,255,255,0.5)', marginBottom: 16, lineHeight: 1.5,
                  }}>
                    {t('nav.platformModulesDesc')}
                  </p>
                  <ul style={{ listStyle: 'none' }}>
                    {platformModules.map(({ label, to }) => (
                      <li key={to} style={{ marginBottom: 12 }}>
                        <Link to={to} style={{
                          fontFamily: 'Inter, sans-serif', fontSize: 13,
                          color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                          onMouseEnter={e => { e.target.style.color = '#4DDDE8' }}
                          onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standalone Products */}
                <div>
                  <h3 style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600,
                    color: '#4DDDE8', letterSpacing: '0.5px', marginBottom: 8,
                    textTransform: 'uppercase',
                  }}>
                    {t('nav.standaloneProducts')}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 12,
                    color: 'rgba(255,255,255,0.5)', marginBottom: 16, lineHeight: 1.5,
                  }}>
                    {t('nav.standaloneProductsDesc')}
                  </p>
                  <ul style={{ listStyle: 'none' }}>
                    {standaloneProducts.map(({ label, to }) => (
                      <li key={to} style={{ marginBottom: 12 }}>
                        <Link to={to} style={{
                          fontFamily: 'Inter, sans-serif', fontSize: 13,
                          color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                          onMouseEnter={e => { e.target.style.color = '#4DDDE8' }}
                          onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>

      <div className="nav-lang-desktop">
        <LanguageToggle />
      </div>

      <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 13, flexShrink: 0, marginLeft: 12 }}
        data-desktop="true"
      >
        {t('nav.getStarted')}
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

            {/* Mobile Products accordion */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.04 }}
            >
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  display: 'block', width: '100%', padding: '14px 0',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 400,
                  color: 'rgba(255,255,255,0.7)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  background: 'none', border: 'none', textAlign: 'left',
                  cursor: 'pointer', transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.target.style.color = '#fff' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
              >
                {t('nav.products')}
                <span style={{ marginLeft: 8, fontSize: 12 }}>
                  {mobileProductsOpen ? '−' : '+'}
                </span>
              </button>

              {/* Mobile products content */}
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Platform Modules */}
                    <div style={{ padding: '16px 0' }}>
                      <h4 style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600,
                        color: '#4DDDE8', letterSpacing: '0.5px', marginBottom: 8,
                        textTransform: 'uppercase',
                      }}>
                        {t('nav.platformModules')}
                      </h4>
                      <ul style={{ listStyle: 'none', marginLeft: 12 }}>
                        {platformModules.map(({ label, to }, idx) => (
                          <motion.li
                            key={to}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.06 }}
                            style={{ marginBottom: 10 }}
                          >
                            <Link to={to} style={{
                              fontFamily: 'Inter, sans-serif', fontSize: 14,
                              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                              transition: 'color 0.2s',
                            }}
                              onMouseEnter={e => { e.target.style.color = '#4DDDE8' }}
                              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
                            >
                              {label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Standalone Products */}
                    <div style={{ padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <h4 style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600,
                        color: '#4DDDE8', letterSpacing: '0.5px', marginBottom: 8,
                        textTransform: 'uppercase',
                      }}>
                        {t('nav.standaloneProducts')}
                      </h4>
                      <ul style={{ listStyle: 'none', marginLeft: 12 }}>
                        {standaloneProducts.map(({ label, to }, idx) => (
                          <motion.li
                            key={to}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (platformModules.length + idx) * 0.06 }}
                            style={{ marginBottom: 10 }}
                          >
                            <Link to={to} style={{
                              fontFamily: 'Inter, sans-serif', fontSize: 14,
                              color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                              transition: 'color 0.2s',
                            }}
                              onMouseEnter={e => { e.target.style.color = '#4DDDE8' }}
                              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
                            >
                              {label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (links.length + 1) * 0.04 }}
              style={{ marginTop: 14 }}
            >
              <LanguageToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (links.length + 1.5) * 0.04 }}
              style={{ marginTop: 16 }}
            >
              <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {t('nav.getStarted')}
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
