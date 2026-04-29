import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem, HoverCard } from '../components/Animate'
import { getLangFromPath, getLocalizedPath } from '../i18n'

/* ── Network SVG Visualization ─────────────────────────────────────── */
function NetworkViz() {
  return (
    <svg viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 500 }}>
      <defs>
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(0,196,212,0.07)" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8472A" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#E8472A" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00C4D4" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="#00C4D4" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="440" fill="url(#g)"/>
      <ellipse cx="240" cy="220" rx="170" ry="155" fill="url(#glow2)" opacity="0.7"/>
      <ellipse cx="140" cy="135" rx="90" ry="82" fill="url(#glow1)" opacity="0.5"/>
      {/* Lines */}
      <motion.line x1="240" y1="220" x2="140" y2="135" stroke="rgba(0,196,212,0.3)" strokeWidth="1.5"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.3}}/>
      <motion.line x1="240" y1="220" x2="360" y2="115" stroke="rgba(0,196,212,0.18)" strokeWidth="1"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.5}}/>
      <motion.line x1="240" y1="220" x2="390" y2="285" stroke="rgba(0,196,212,0.18)" strokeWidth="1"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.6}}/>
      <motion.line x1="240" y1="220" x2="125" y2="330" stroke="rgba(0,196,212,0.14)" strokeWidth="1"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.7}}/>
      <motion.line x1="240" y1="220" x2="75" y2="235" stroke="rgba(232,71,42,0.35)" strokeWidth="1.5"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.4}}/>
      <motion.line x1="240" y1="220" x2="265" y2="370" stroke="rgba(0,196,212,0.14)" strokeWidth="1"
        initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:1.2, delay:0.8}}/>
      {/* Secondary nodes */}
      {[{x:360,y:115,r:5},{x:390,y:285,r:4},{x:125,y:330,r:4},{x:265,y:370,r:3.5}].map((n,i)=>(
        <motion.circle key={i} cx={n.x} cy={n.y} r={n.r}
          fill="rgba(0,196,212,0.5)" stroke="rgba(0,196,212,0.8)" strokeWidth="1"
          initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{delay:0.6+i*0.1, duration:0.3}}/>
      ))}
      {/* Agency node */}
      <motion.circle cx="75" cy="235" r="22" fill="rgba(232,71,42,0.08)" stroke="rgba(232,71,42,0.4)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3, type:'spring', stiffness:200}}/>
      <motion.circle cx="75" cy="235" r="10" fill="rgba(232,71,42,0.15)" stroke="rgba(232,71,42,0.5)" strokeWidth="1"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4, type:'spring', stiffness:200}}/>
      <motion.circle cx="75" cy="235" r="5" fill="#E8472A"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}}/>
      {/* Central node */}
      <motion.circle cx="240" cy="220" r="36" fill="rgba(0,196,212,0.06)" stroke="rgba(0,196,212,0.3)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2, type:'spring', stiffness:150}}/>
      <motion.circle cx="240" cy="220" r="22" fill="rgba(0,196,212,0.1)" stroke="rgba(0,196,212,0.45)" strokeWidth="1"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3, type:'spring', stiffness:150}}/>
      <motion.circle cx="240" cy="220" r="9" fill="#00C4D4" opacity="0.9"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}}/>
      {/* Agency node */}
      <motion.circle cx="140" cy="135" r="20" fill="rgba(232,71,42,0.07)" stroke="rgba(232,71,42,0.35)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.35, type:'spring', stiffness:180}}/>
      <motion.circle cx="140" cy="135" r="8" fill="#E8472A" opacity="0.8"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.45}}/>
      {/* Labels */}
      <motion.rect x="160" y="192" width="120" height="22" rx="3" fill="rgba(0,0,0,0.75)"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}/>
      <motion.text x="220" y="207" fill="#00C4D4" fontSize="9.5" fontFamily="IBM Plex Sans,sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="1.2"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>SOUNDCHECK AI</motion.text>
      <motion.rect x="52" y="107" width="100" height="22" rx="3" fill="rgba(0,0,0,0.75)"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.85}}/>
      <motion.text x="102" y="122" fill="#E8472A" fontSize="9.5" fontFamily="IBM Plex Sans,sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="1.2"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.95}}>YOUR AGENCY</motion.text>
      {/* Data cards */}
      <motion.rect x="295" y="50" width="140" height="58" rx="4" fill="rgba(10,22,40,0.92)" stroke="rgba(0,196,212,0.2)" strokeWidth="1"
        initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.0}}/>
      <motion.text x="311" y="69" fill="rgba(0,196,212,0.7)" fontSize="8" fontFamily="IBM Plex Sans,sans-serif" letterSpacing="1.5"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}>EVC SCORE</motion.text>
      <motion.text x="311" y="93" fill="white" fontSize="20" fontFamily="IBM Plex Sans,sans-serif" fontWeight="300"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.15}}>72%</motion.text>
      <motion.rect x="311" y="97" width="80" height="3" rx="1" fill="rgba(255,255,255,0.1)"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}/>
      <motion.rect x="311" y="97" width="57" height="3" rx="1" fill="#00C4D4"
        initial={{scaleX:0,originX:'left'}} animate={{scaleX:1}} transition={{delay:1.3, duration:0.5}}/>
      <motion.rect x="30" y="300" width="140" height="68" rx="4" fill="rgba(10,22,40,0.92)" stroke="rgba(232,71,42,0.2)" strokeWidth="1"
        initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:1.05}}/>
      <motion.text x="46" y="318" fill="rgba(232,71,42,0.8)" fontSize="8" fontFamily="IBM Plex Sans,sans-serif" letterSpacing="1.5"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.15}}>REPORT READY</motion.text>
      <motion.text x="46" y="340" fill="white" fontSize="13" fontFamily="IBM Plex Sans,sans-serif" fontWeight="400"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}>14 days</motion.text>
      <motion.text x="46" y="357" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="IBM Plex Sans,sans-serif"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.25}}>100+ page analysis</motion.text>
      {/* Orbit ring */}
      <motion.circle cx="240" cy="220" r="52" fill="none" stroke="rgba(0,196,212,0.1)" strokeWidth="1" strokeDasharray="6 4"
        initial={{opacity:0}} animate={{opacity:1,rotate:360}} transition={{opacity:{delay:0.5},rotate:{duration:30,repeat:Infinity,ease:'linear'}}}/>
    </svg>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const products = t('home.products', { returnObjects: true })
  const problemCards = t('home.problemCards', { returnObjects: true })
  const howSteps = t('home.howSteps', { returnObjects: true })
  const stats = t('home.stats', { returnObjects: true })
  const economicsRows = t('home.economicsRows', { returnObjects: true })

  return (
    <PageWrapper>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '90px 60px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(0,196,212,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }} className="hero-grid">
          <div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', display: 'block', animation: 'pulse 2s infinite' }}/>
              <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal)' }}>
                {t('home.heroBadge')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.0, marginBottom: 22 }}
            >
              {t('home.heroTitle1')}<br />
              <span style={{ color: 'var(--teal-2)' }}>{t('home.heroTitle2')}</span> {t('home.heroTitle3')}<br />{t('home.heroTitle4')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 1.5vw, 1.07rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}
            >
              {t('home.heroDesc')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link to={getLocalizedPath('/partner', lang)} className="btn btn-primary">{t('home.requestAccess')}</Link>
              <Link to={getLocalizedPath('/how-it-works', lang)} className="btn btn-secondary">{t('home.seeHowItWorks')}</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: 0, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {stats.map(({value, label})=>(
                <div key={label} style={{ paddingRight: 28, borderRight: '1px solid rgba(255,255,255,0.08)', marginRight: 28 }}
                  className="hero-stat">
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.4rem,3vw,1.8rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <NetworkViz />
          </motion.div>
        </div>
        <style>{`
          @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
          @media(max-width:900px){ .hero-grid{grid-template-columns:1fr!important;gap:48px!important} .hero-grid>div:last-child{max-width:360px;margin:0 auto} }
          @media(max-width:600px){ section[style*="90px 60px"]{padding:70px 24px 60px!important} .hero-stat{padding-right:18px!important;margin-right:18px!important} }
        `}</style>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="grid-2">
          <FadeIn>
            <span className="sc-label">{t('home.problemLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('home.problemTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
              {t('home.problemDesc1')}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              {t('home.problemDesc2')}
            </p>
          </FadeIn>
          <StaggerContainer>
            {problemCards.map(({icon, title, text})=>(
              <StaggerItem key={title}>
                <HoverCard>
                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, alignItems: 'start', background: 'rgba(255,255,255,0.03)', padding: '16px 18px', marginBottom: 2, borderLeft: '3px solid var(--orange)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: '3px solid var(--orange)' }}>
                    <div style={{ width: 32, height: 32, background: 'rgba(232,71,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, borderRadius: 4 }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 3 }}>{title}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{text}</div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:900px){.section-pad{padding:60px 24px!important}}`}</style>
      </section>

      {/* ── HOW IT WORKS STRIP ───────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.1)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="grid-2">
          <FadeIn>
            <span className="sc-label">{t('home.howLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('home.howTitle1')}<br />{t('home.howTitle2')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
              {t('home.howDesc')}
            </p>
            <Link to={getLocalizedPath('/how-it-works', lang)} className="text-link" style={{ marginTop: 8 }}>{t('home.howLink')}</Link>
          </FadeIn>
          <StaggerContainer>
            {howSteps.map(({num, title, tag}, i)=>(
              <StaggerItem key={num}>
                <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, padding: '18px 22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: `3px solid ${[['var(--teal)', 'var(--gray)', 'var(--orange)', 'var(--teal-2)'][i]]}`, marginBottom: 2, alignItems: 'start' }}>
                  <div style={{ width: 32, height: 32, background: `${[['rgba(0,196,212,0.15)', 'rgba(128,128,128,0.15)', 'rgba(232,71,42,0.15)', 'rgba(0,196,212,0.15)'][i]]}`, border: `1px solid ${[['rgba(0,196,212,0.33)', 'rgba(128,128,128,0.33)', 'rgba(232,71,42,0.33)', 'rgba(0,196,212,0.33)'][i]]}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: [['var(--teal)', 'var(--gray)', 'var(--orange)', 'var(--teal-2)'][i]], flexShrink: 0 }}>{num}</div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 3 }}>{title}</div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{tag}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('home.productsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 48, maxWidth: 640 }}>
              {t('home.productsTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="prod-grid">
            {products.map(p=>(
              <StaggerItem key={p.num}>
                <HoverCard>
                  <Link to={p.link ? getLocalizedPath(p.link, lang) : getLocalizedPath('/products', lang)} style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid transparent', padding: '32px 28px', height: '100%', minHeight: 220, transition: 'border-color 0.2s' }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 8 }}>{p.num}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{p.for}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 10, lineHeight: 1.25 }}>{p.name}</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>{p.delivery}</div>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn>
            <div style={{ marginTop: 36 }}>
              <Link to={getLocalizedPath('/products', lang)} className="text-link">{t('home.viewAllProducts')}</Link>
            </div>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.prod-grid,.prod-grid-2{grid-template-columns:1fr!important}}@media(min-width:901px) and (max-width:1100px){.prod-grid-2{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* ── MODULES CONNECT ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('home.modulesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 48 }}>
              {t('home.modulesTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="modules-grid">
            {(t('home.modules', { returnObjects: true }) || []).map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.1em', marginBottom: 8 }}>MODULE {m.num}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{m.name}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{m.desc}</p>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--teal)' }}>{m.price}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ marginTop: 32 }}>
              <Link to={getLocalizedPath('/research-platform', lang)} className="text-link">{t('home.modulesCta')}</Link>
            </div>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.modules-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── ECONOMICS ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(232,71,42,0.15)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('home.economicsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('home.economicsTitle1')}<br />{t('home.economicsTitle2')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              {t('home.economicsDesc')}
            </p>
            <Link to={getLocalizedPath('/for-agencies', lang)} className="text-link">{t('home.economicsLink')}</Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}>{t('home.economicsHeader')}</div>
            <div>
              {economicsRows.map(([l, v])=>(
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 2 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{l}</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 18px', background: 'var(--orange)', marginTop: 2 }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>{t('home.marginLabel')}</span>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: '#fff' }}>{t('home.marginValue')}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('home.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('home.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to={getLocalizedPath('/partner', lang)} className="btn btn-white">{t('home.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
