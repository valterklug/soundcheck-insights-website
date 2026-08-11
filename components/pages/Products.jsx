'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

function EvcSample({ data }) {
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Score
      </span>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{data.score}</div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.8)', marginBottom: 12 }}>{data.verdict}</div>
      {data.bars.map(([label, pct]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 130, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: 'var(--teal)', borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 28, textAlign: 'right' }}>{pct}%</div>
        </div>
      ))}
    </div>
  )
}

function SignalSample({ data }) {
  const colors = { Strong: 'var(--teal)', Flagged: '#D97706', Weak: 'var(--orange)' }
  const icons = { Strong: '●', Flagged: '◐', Weak: '○' }
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Signal Brief
      </span>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.8)', marginBottom: 4 }}>VERDICT:</div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 14 }}>{data.verdict}</div>
      {data.signals.map(([label, rating]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: colors[rating] || 'var(--teal)', flexShrink: 0 }}>{icons[rating] || '●'}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', flex: 1 }}>{label}</div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, color: colors[rating] || 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{rating}</div>
        </div>
      ))}
      <Link href="/samples/signal-brief-advance" target="_blank" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--teal)', marginTop: 12, display: 'inline-block', textDecoration: 'none', borderBottom: '1px solid rgba(0,196,212,0.3)' }}>
        View Full Sample →
      </Link>
    </div>
  )
}

function IvsSample({ data }) {
  const barColor = (pct) => pct >= 70 ? 'var(--teal)' : pct >= 40 ? '#D97706' : 'var(--orange)'
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Idea Validation Analysis
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{data.score}</div>
        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.25)' }}>/ 100</div>
      </div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: 'var(--teal)', marginBottom: 2 }}>{data.tier}</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>{data.sub}</div>
      {data.bars.map(([label, pct]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 150, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: barColor(pct), borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 28, textAlign: 'right' }}>{pct}%</div>
        </div>
      ))}
      <Link href="/idea-validation#sample" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--teal)', marginTop: 12, display: 'inline-block', textDecoration: 'none', borderBottom: '1px solid rgba(0,196,212,0.3)' }}>
        View Full Sample Report →
      </Link>
    </div>
  )
}

function GrowthSample() {
  const levers = [
    ['Channel Optimization', 85, 'High'],
    ['Competitive Repositioning', 70, 'High'],
    ['Pricing Architecture', 65, 'Medium'],
    ['New Segment Penetration', 55, 'Medium'],
  ]
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Growth Levers (Ranked)
      </span>
      {levers.map(([label, impact, priority]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 150, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: priority === 'High' ? 'var(--teal)' : '#D97706', borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${impact}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, color: priority === 'High' ? 'var(--teal)' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.07em', width: 50, textAlign: 'right' }}>{priority}</div>
        </div>
      ))}
    </div>
  )
}

function PersonaSample({ data }) {
  return (
    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {data.personas.map(p => (
        <div key={p.label} style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid var(--orange)', padding: '12px 16px' }}>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>{p.label}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', lineHeight: 1.5 }}>{p.quote}</div>
        </div>
      ))}
    </div>
  )
}

export default function Products() {
  const t = useTranslations()

  const [expanded, setExpanded] = useState(null)

  // Get translated products array and process links
  const productsData = t.raw('products.items')
  const products = productsData.map(p => ({
    ...p,
    link: p.link || '/products'
  }))

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">{t('products.heroLabel')}</span>
          <h1 className="page-h1">{t('products.heroTitle')}</h1>
          <p className="page-sub">{t('products.heroSub')}</p>
        </div>
      </section>

      {/* ── Operator Notice Banner ── */}
      <div style={{
        background: 'rgba(0,196,212,0.06)',
        borderBottom: '1px solid rgba(0,196,212,0.12)',
        padding: '14px 60px',
      }} className="section-pad-x">
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)' }}>
              For Operators
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
              {t('products.operatorNotice')}
            </span>
          </div>
          {t('products.clientNote') && (
            <Link href="/contact" style={{
              fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'var(--teal)',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              {t('products.clientNoteLink')}
            </Link>
          )}
        </div>
      </div>

      {/* ── MARKET RESEARCH — THE FOUNDATION ──────────────────────── */}
      {products.length > 0 && (() => {
        const mr = products[0]
        return (
          <section style={{ background: 'var(--navy)', padding: '80px 60px', borderBottom: '1px solid rgba(0,196,212,0.12)' }} className="prod-section">
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <FadeIn>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>
                  {t('products.foundationLabel') || 'The Foundation · Every Engagement Starts Here'}
                </div>
              </FadeIn>
              <FadeIn delay={0.06}>
                <div style={{
                  background: 'rgba(0,196,212,0.03)',
                  border: '1px solid rgba(0,196,212,0.2)',
                  borderTop: '3px solid var(--teal)',
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: 120 }} className="prod-row">
                    {/* Left */}
                    <div style={{ padding: '36px 28px', borderRight: '1px solid rgba(0,196,212,0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: 6 }}>{mr.num}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{mr.for}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 500, color: '#fff', lineHeight: 1.25, marginBottom: mr.tagline ? 8 : 18 }}>{mr.name}</div>
                        {mr.tagline && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, marginBottom: 18 }}>{mr.tagline}</div>}
                      </div>
                      <div>
                        <div style={{ background: 'rgba(0,196,212,0.06)', border: '1px solid rgba(0,196,212,0.1)', padding: '14px 16px', marginBottom: 10 }}>
                          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 19, fontWeight: 400, color: '#fff', marginBottom: 3 }}>{mr.price}</div>
                          {mr.clientPrice && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(45,212,191,0.6)', marginBottom: 6 }}>{mr.clientPrice}</div>}
                          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{mr.delivery}</div>
                        </div>
                        <Link href={mr.link} className="btn btn-primary" style={{ fontSize: 12, padding: '10px 18px', display: 'inline-flex' }}>
                          {mr.ctaLabel || t('products.briefProduct')}
                        </Link>
                      </div>
                    </div>

                    {/* Right */}
                    <div style={{ padding: '36px 40px' }}>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>{mr.desc}</p>

                      <button
                        onClick={() => setExpanded(expanded === 0 ? null : 0)}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1px solid rgba(0,196,212,0.2)', color: 'var(--teal)', padding: '8px 14px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 3, transition: 'all 0.2s' }}
                      >
                        <motion.span animate={{ rotate: expanded === 0 ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 12 }}>›</motion.span>
                        {expanded === 0 ? t('products.hideDeliverables') : t('products.viewDeliverables')}
                      </button>

                      <AnimatePresence>
                        {expanded === 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ marginTop: 16 }}>
                              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 10 }}>{t('products.whatsDelivered')}</div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {mr.deliverables.map(d => (
                                  <div key={d} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 12px', background: 'rgba(255,255,255,0.025)' }}>
                                    <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{d}</div>
                                  </div>
                                ))}
                              </div>
                              {mr.sample?.type === 'evc' && <EvcSample data={mr.sample} />}
                              {mr.sample?.type === 'personas' && <PersonaSample data={mr.sample} />}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )
      })()}

      {/* ── ADD-ON PRODUCTS ────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px' }} className="prod-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>
              {t('products.addOnsLabel') || 'Requires Market Research'}
            </div>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: 48 }}>
              {t('products.addOnsTitle') || 'Build on top of your research.'}
            </h2>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }} className="addon-grid">
            {products.slice(1).map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.06}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderTop: '3px solid rgba(255,255,255,0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s',
                }}>
                  <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: 6 }}>{p.num}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{p.for}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', lineHeight: 1.25, marginBottom: p.tagline ? 6 : 12 }}>{p.name}</div>
                      {p.tagline && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, marginBottom: 12 }}>{p.tagline}</div>}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.desc}</p>

                    <div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 14px', marginBottom: 10 }}>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', marginBottom: 3 }}>{p.price}</div>
                        {p.clientPrice && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(45,212,191,0.6)', marginBottom: 6 }}>{p.clientPrice}</div>}
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>{p.delivery}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link href={p.link} className="btn btn-primary" style={{ fontSize: 12, padding: '10px 18px', display: 'inline-flex' }}>
                          {p.ctaLabel || t('products.briefProduct')}
                        </Link>
                        <button
                          onClick={() => setExpanded(expanded === (i + 1) ? null : (i + 1))}
                          style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', padding: '8px 0', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                          <motion.span animate={{ rotate: expanded === (i + 1) ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 12 }}>›</motion.span>
                          {expanded === (i + 1) ? t('products.hideDeliverables') : t('products.viewDeliverables')}
                        </button>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded === (i + 1) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 10, marginTop: 20 }}>{t('products.whatsDelivered')}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {p.deliverables.map(d => (
                              <div key={d} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 12px', background: 'rgba(255,255,255,0.025)' }}>
                                <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{d}</div>
                              </div>
                            ))}
                          </div>
                          {p.sample?.type === 'evc' && <EvcSample data={p.sample} />}
                          {p.sample?.type === 'ivs' && <IvsSample data={p.sample} />}
                          {p.sample?.type === 'signal' && <SignalSample data={p.sample} />}
                          {p.sample?.type === 'personas' && <PersonaSample data={p.sample} />}
                          {p.sample?.type === 'growth' && <GrowthSample />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) {
            .prod-row { grid-template-columns: 1fr !important; }
            .prod-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .prod-section { padding: 60px 24px !important; }
            .addon-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('products.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('products.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-white">{t('products.ctaButton')}</Link>
        </div>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)',
          marginTop: 20, maxWidth: 600, lineHeight: 1.6,
        }}>
          {t('products.clientNote')}
        </p>
      </section>
    </PageWrapper>
  )
}
