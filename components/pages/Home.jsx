'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem, HoverCard } from '@/components/Animate'
import DecisionGrid from '@/components/DecisionGrid'
import Differentiators from '@/components/Differentiators'

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
      {[{x:360,y:115,r:5},{x:390,y:285,r:4},{x:125,y:330,r:4},{x:265,y:370,r:3.5}].map((n,i)=>(
        <motion.circle key={i} cx={n.x} cy={n.y} r={n.r}
          fill="rgba(0,196,212,0.5)" stroke="rgba(0,196,212,0.8)" strokeWidth="1"
          initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{delay:0.6+i*0.1, duration:0.3}}/>
      ))}
      <motion.circle cx="75" cy="235" r="22" fill="rgba(232,71,42,0.08)" stroke="rgba(232,71,42,0.4)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3, type:'spring', stiffness:200}}/>
      <motion.circle cx="75" cy="235" r="10" fill="rgba(232,71,42,0.15)" stroke="rgba(232,71,42,0.5)" strokeWidth="1"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4, type:'spring', stiffness:200}}/>
      <motion.circle cx="75" cy="235" r="5" fill="#E8472A"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}}/>
      <motion.circle cx="240" cy="220" r="36" fill="rgba(0,196,212,0.06)" stroke="rgba(0,196,212,0.3)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2, type:'spring', stiffness:150}}/>
      <motion.circle cx="240" cy="220" r="22" fill="rgba(0,196,212,0.1)" stroke="rgba(0,196,212,0.45)" strokeWidth="1"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3, type:'spring', stiffness:150}}/>
      <motion.circle cx="240" cy="220" r="9" fill="#00C4D4" opacity="0.9"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}}/>
      <motion.circle cx="140" cy="135" r="20" fill="rgba(232,71,42,0.07)" stroke="rgba(232,71,42,0.35)" strokeWidth="1.5"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.35, type:'spring', stiffness:180}}/>
      <motion.circle cx="140" cy="135" r="8" fill="#E8472A" opacity="0.8"
        initial={{scale:0}} animate={{scale:1}} transition={{delay:0.45}}/>
      <motion.rect x="160" y="192" width="120" height="22" rx="3" fill="rgba(0,0,0,0.75)"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}/>
      <motion.text x="220" y="207" fill="#00C4D4" fontSize="9.5" fontFamily="IBM Plex Sans,sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="1.2"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>SOUNDCHECK AI</motion.text>
      <motion.rect x="52" y="107" width="100" height="22" rx="3" fill="rgba(0,0,0,0.75)"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.85}}/>
      <motion.text x="102" y="122" fill="#E8472A" fontSize="9.5" fontFamily="IBM Plex Sans,sans-serif" textAnchor="middle" fontWeight="500" letterSpacing="1.2"
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.95}}>YOUR AGENCY</motion.text>
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
      <motion.circle cx="240" cy="220" r="52" fill="none" stroke="rgba(0,196,212,0.1)" strokeWidth="1" strokeDasharray="6 4"
        initial={{opacity:0}} animate={{opacity:1,rotate:360}} transition={{opacity:{delay:0.5},rotate:{duration:30,repeat:Infinity,ease:'linear'}}}/>
    </svg>
  )
}

export default function HomePage() {
  const t = useTranslations('home')

  const products = t.raw('products')
  const problemCards = t.raw('problemCards')
  const howSteps = t.raw('howSteps')
  const stats = t.raw('stats')
  const economicsRows = t.raw('economicsRows')

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
                {t('heroBadge')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.0, marginBottom: 22 }}
            >
              {t('heroTitle1')}<br />
              <span style={{ color: 'var(--teal-2)' }}>{t('heroTitle2')}</span> {t('heroTitle3')}<br />{t('heroTitle4')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 1.5vw, 1.07rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}
            >
              {t('heroDesc')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <Link href="/founding-cohort" className="btn btn-primary">{t('requestAccess')}</Link>
              <Link href="/how-it-works" className="btn btn-secondary">{t('seeHowItWorks')}</Link>
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
            <span className="sc-label">{t('problemLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('problemTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
              {t('problemDesc1')}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              {t('problemDesc2')}
            </p>
          </FadeIn>
          <StaggerContainer>
            {problemCards.map(({icon, title, text})=>(
              <StaggerItem key={title}>
                <HoverCard>
                  <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, alignItems: 'start', background: 'rgba(255,255,255,0.03)', padding: '16px 18px', marginBottom: 2, borderLeft: '3px solid var(--orange)', border: '1px solid rgba(255,255,255,0.05)', borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor: 'var(--orange)' }}>
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
            <span className="sc-label">{t('howLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('howTitle1')}<br />{t('howTitle2')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 16 }}>
              {t('howDesc')}
            </p>
            <Link href="/how-it-works" className="text-link" style={{ marginTop: 8 }}>{t('howLink')}</Link>
          </FadeIn>
          <StaggerContainer>
            {howSteps.map(({num, title, tag}, i)=>(
              <StaggerItem key={num}>
                <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, padding: '18px 22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: `3px solid ${['var(--teal)', 'var(--gray)', 'var(--orange)', 'var(--teal-2)'][i]}`, marginBottom: 2, alignItems: 'start' }}>
                  <div style={{ width: 32, height: 32, background: ['rgba(0,196,212,0.15)', 'rgba(128,128,128,0.15)', 'rgba(232,71,42,0.15)', 'rgba(0,196,212,0.15)'][i], border: `1px solid ${['rgba(0,196,212,0.33)', 'rgba(128,128,128,0.33)', 'rgba(232,71,42,0.33)', 'rgba(0,196,212,0.33)'][i]}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: ['var(--teal)', 'var(--gray)', 'var(--orange)', 'var(--teal-2)'][i], flexShrink: 0 }}>{num}</div>
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
            <span className="sc-label">{t('productsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 48, maxWidth: 640 }}>
              {t('productsTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="prod-grid">
            {products.map(p=>(
              <StaggerItem key={p.num}>
                <HoverCard>
                  <Link href={p.link || '/products'} style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
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
              <Link href="/products" className="text-link">{t('viewAllProducts')}</Link>
            </div>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.prod-grid,.prod-grid-2{grid-template-columns:1fr!important}}@media(min-width:901px) and (max-width:1100px){.prod-grid-2{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* ── PRODUCTS - FOUNDATION + ADD-ONS ──────────────────────── */}
      {(() => {
        const modules = t.raw('modules') || []
        const foundation = modules[0]
        const addOns = modules.slice(1)
        return (
          <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.12)' }} className="section-pad">
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <FadeIn>
                <span className="sc-label">{t('modulesLabel')}</span>
                <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 48 }}>
                  {t('modulesTitle')}
                </h2>
              </FadeIn>

              {foundation && (
                <FadeIn>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>
                    {t('modulesFoundation')}
                  </div>
                  <Link href={foundation.link || '/market-research'} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.2)', borderTop: '3px solid var(--teal)', padding: '32px 28px', marginBottom: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', transition: 'border-color 0.2s' }} className="foundation-card">
                      <div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.1em', marginBottom: 10 }}>PRODUCT {foundation.num}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{foundation.name}</div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{foundation.desc}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: 'var(--teal)', marginBottom: 8 }}>{foundation.price}</div>
                        <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'var(--teal)', opacity: 0.7 }}>See full details →</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )}

              {addOns.length > 0 && (
                <>
                  <FadeIn>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
                      {t('modulesAddOns')}
                    </div>
                  </FadeIn>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="addons-grid">
                    {addOns.map((m, i) => (
                      <FadeIn key={i} delay={i * 0.06}>
                        <Link href={m.link || '/products'} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid rgba(255,255,255,0.08)', padding: '24px 20px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
                            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: 8 }}>PRODUCT {m.num}</div>
                            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{m.name}</div>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{m.desc}</p>
                            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--teal)' }}>{m.price}</div>
                          </div>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                </>
              )}

              <FadeIn>
                <div style={{ marginTop: 32 }}>
                  <Link href="/products" className="text-link">{t('modulesCta')}</Link>
                </div>
              </FadeIn>
            </div>
            <style>{`@media(max-width:900px){.foundation-card{grid-template-columns:1fr!important;text-align:left!important}.foundation-card>div:last-child{text-align:left!important}.addons-grid{grid-template-columns:1fr!important}}@media(min-width:901px) and (max-width:1100px){.addons-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
          </section>
        )
      })()}

      {/* ── DECISION GRID ──────────────────────────────────────────── */}
      <DecisionGrid />

      {/* ── DIFFERENTIATORS ─────────────────────────────────────────── */}
      <Differentiators />

      {/* ── ECONOMICS ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(232,71,42,0.15)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('economicsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 18 }}>
              {t('economicsTitle1')}<br />{t('economicsTitle2')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              {t('economicsDesc')}
            </p>
            <Link href="/for-agencies" className="text-link">{t('economicsLink')}</Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}>{t('economicsHeader')}</div>
            <div>
              {economicsRows.map(([l, v])=>(
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 2 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{l}</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>{v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 18px', background: 'var(--orange)', marginTop: 2 }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>{t('marginLabel')}</span>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: '#fff' }}>{t('marginValue')}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/founding-cohort" className="btn btn-white">{t('ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
