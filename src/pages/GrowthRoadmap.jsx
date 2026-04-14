import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { faqSchema } from '../seoConfig'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function GrowthRoadmap() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const [openFaq, setOpenFaq] = useState(null)
  const [openSection, setOpenSection] = useState(null)
  const [activeSegment, setActiveSegment] = useState('b2b')

  const reportSections = t('growthRoadmap.sections', { returnObjects: true })
  const segments = t('growthRoadmap.segments', { returnObjects: true })
  const principles = t('growthRoadmap.principles', { returnObjects: true })
  const faqs = t('growthRoadmap.faqs', { returnObjects: true })

  return (
    <PageWrapper>
      <SEO
        title="US Growth Roadmap"
        description="For B2B service companies and CPG brands that have stalled. GPS Score (0-100), ranked growth levers with investment estimates, and a 90-day action plan. US$5,000+."
        path="/growth-roadmap"
        image="/og/og-growth-roadmap.png"
        schema={faqSchema(faqs)}
      />
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('growthRoadmap.heroLabel')}</span>
          <h1 className="page-h1">{t('growthRoadmap.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 660 }}>
            {t('growthRoadmap.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('growthRoadmap.briefButton')}</Link>
            <a href="#segments" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('growthRoadmap.seeSegments')}</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {t('growthRoadmap.heroStats', { returnObjects: true }).map(({ num, label, sub }) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Segments */}
      <section id="segments" style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.segmentsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              {t('growthRoadmap.segmentsTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 36, maxWidth: 680 }}>
              {t('growthRoadmap.segmentsSub')}
            </p>
          </FadeIn>

          {/* Segment toggle */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
              {segments.map(seg => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    background: activeSegment === seg.id ? `${seg.color}12` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${activeSegment === seg.id ? `${seg.color}44` : 'rgba(255,255,255,0.06)'}`,
                    borderTop: `3px solid ${activeSegment === seg.id ? seg.color : 'transparent'}`,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 18 }}>{seg.icon}</span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: activeSegment === seg.id ? '#fff' : 'rgba(255,255,255,0.5)' }}>{seg.label}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{seg.tagline}</div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active segment detail */}
          {segments.filter(s => s.id === activeSegment).map(seg => (
            <FadeIn key={seg.id}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
                {/* Pain points */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: seg.color, marginBottom: 16 }}>{t('growthRoadmap.theProblem')}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>{t('growthRoadmap.builtForYouIf')}</div>
                  {seg.painPoints.map(p => (
                    <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 4, height: 4, background: seg.color, borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{p}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 20, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', lineHeight: 1.5 }}>
                    <strong style={{ color: 'rgba(255,255,255,0.4)' }}>{t('growthRoadmap.examples')}</strong> {seg.examples}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: seg.color, marginBottom: 16 }}>{t('growthRoadmap.whatYouGet')}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>{t('growthRoadmap.keyDeliverables')}</div>
                  {seg.deliverables.map((d, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < seg.deliverables.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: seg.color, flexShrink: 0, marginTop: 2 }}>0{i + 1}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* What's Inside */}
      <section id="whats-inside" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.insideLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('growthRoadmap.insideTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('growthRoadmap.insideSub')}
            </p>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {reportSections.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <button
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '22px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 18,
                    }}
                  >
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'var(--teal)', width: 36, flexShrink: 0, textAlign: 'center' }}>{s.num}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff' }}>{s.title}</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 12 }}>{s.sub}</span>
                    </div>
                    <motion.span animate={{ rotate: openSection === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 16, color: 'var(--teal)', flexShrink: 0 }}>›</motion.span>
                  </button>
                  <AnimatePresence>
                    {openSection === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 28px 24px 82px' }}>
                          {s.items.map((item, j) => (
                            <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: j < s.items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                              <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.principlesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('growthRoadmap.principlesTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('growthRoadmap.principlesSub')}
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {principles.map((p, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{p.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.delivLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('growthRoadmap.delivTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{t('growthRoadmap.reportTitle')}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  {t('growthRoadmap.reportDesc')}
                </p>
                {t('growthRoadmap.reportItems', { returnObjects: true }).map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{t('growthRoadmap.presTitle')}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  {t('growthRoadmap.presDesc')}
                </p>
                {t('growthRoadmap.presItems', { returnObjects: true }).map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.pricingLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('growthRoadmap.pricingTitle')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.15)', padding: '48px 40px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 4 }}>{t('growthRoadmap.price')}</div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>{t('growthRoadmap.perReport')}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', marginBottom: 28 }}>
                {t('growthRoadmap.pricingDetails', { returnObjects: true }).map(({ title, sub }) => (
                  <div key={title} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--teal)' }}>{title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>
              <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary" style={{ fontSize: 14 }}>{t('growthRoadmap.briefButton')}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('growthRoadmap.faqLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('growthRoadmap.faqTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '20px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14,
                    }}
                  >
                    <motion.span animate={{ rotate: openFaq === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 14, color: 'var(--teal)', flexShrink: 0 }}>›</motion.span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>{f.q}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 24px 20px 48px' }}>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('growthRoadmap.ctaTitle')}</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('growthRoadmap.ctaButton')}</Link>
          <Link to={getLocalizedPath('/products', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t('growthRoadmap.ctaLink')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
