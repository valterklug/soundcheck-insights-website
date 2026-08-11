'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

export default function ExpansionReport() {
  const t = useTranslations()
  const [openFaq, setOpenFaq] = useState(null)
  const [openSection, setOpenSection] = useState(null)

  const reportSections = t.raw('expansionReport.sections')
  const cveScale = t.raw('expansionReport.cveScale')
  const principles = t.raw('expansionReport.principles')
  const faqs = t.raw('expansionReport.faqs')

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('expansionReport.heroLabel')}</span>
          <h1 className="page-h1">{t('expansionReport.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 640 }}>
            {t('expansionReport.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">{t('expansionReport.briefButton')}</Link>
            <a href="#whats-inside" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('expansionReport.seeInsideButton')}</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {t.raw('expansionReport.heroStats').map(({ num, label, sub }) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.whoLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              {t('expansionReport.whoTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 32 }} className="offer-grid">
            {t.raw('expansionReport.whoCards').map((card) => (
              <StaggerItem key={card.title}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{card.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{card.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      {/* CVE Score */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.cveLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              {t('expansionReport.cveTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 680 }}>
              {t('expansionReport.cveSub')}
            </p>
          </FadeIn>

          {/* CVE Visual */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 2, marginBottom: 32 }} className="cve-grid">
              <div style={{ background: 'rgba(0,196,212,0.04)', border: '1px solid rgba(0,196,212,0.15)', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>{t('expansionReport.cveSampleLabel')}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 48, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{t('expansionReport.cveSampleScore')}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.7)', marginTop: 4 }}>{t('expansionReport.cveSampleOut')}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#2DD4BF', marginTop: 12, padding: '4px 12px', background: 'rgba(0,196,212,0.08)', border: '1px solid rgba(0,196,212,0.2)', borderRadius: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('expansionReport.cveSampleBadge')}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {t.raw('expansionReport.cveDimensions').map((dim) => (
                  <div key={dim.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 180, flexShrink: 0 }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff' }}>{dim.label}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>Weight: {dim.weight}%</div>
                    </div>
                    <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                      <motion.div
                        style={{ height: 6, background: 'var(--teal)', borderRadius: 3 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dim.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', width: 50, textAlign: 'right' }}>{dim.score}/100</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Scale */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', gap: 0, borderRadius: 3, overflow: 'hidden' }} className="cve-scale">
              {cveScale.map(s => (
                <div key={s.label} style={{ flex: 1, padding: '14px 12px', background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: s.color, marginBottom: 4 }}>{s.range}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.cve-grid{grid-template-columns:1fr!important}.cve-scale{flex-direction:column!important}}"}</style>
      </section>

      {/* What's Inside */}
      <section id="whats-inside" style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.insideLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('expansionReport.insideTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('expansionReport.insideSub')}
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
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.principlesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('expansionReport.principlesTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('expansionReport.principlesSub')}
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

      {/* Three Strategic Paths */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.pathsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('expansionReport.pathsTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('expansionReport.pathsSub')}
            </p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {t.raw('expansionReport.paths').map((path) => (
              <FadeIn key={path.label}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${path.color}`, padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: path.color, marginBottom: 8 }}>{path.label}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{path.name}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>{path.desc}</p>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
                    Includes: expected outcome, investment required, key risk, and timeline to first revenue signal.
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <div style={{ marginTop: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '24px 28px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                {t('expansionReport.pathsNote')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.deliverablesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('expansionReport.deliverablesTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            {t.raw('expansionReport.deliverables').map((deliv, idx) => (
              <FadeIn key={deliv.title} delay={idx * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{deliv.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                    {deliv.desc}
                  </p>
                  {deliv.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                      <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.pricingLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('expansionReport.pricingTitle')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.15)', padding: '48px 40px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 4 }}>{t('expansionReport.pricingAmount')}</div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>{t('expansionReport.pricingPer')}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', marginBottom: 28 }}>
                {t.raw('expansionReport.pricingFeatures').map((feature) => (
                  <div key={feature.title} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--teal)' }}>{feature.title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{feature.sub}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>{t('expansionReport.briefButton')}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('expansionReport.faqLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('expansionReport.faqTitle')}
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
          <h2 className="cta-strip-h2">{t('expansionReport.ctaTitle')}</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link href="/contact" className="btn btn-white">{t('expansionReport.ctaButton')}</Link>
          <Link href="/products" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t('expansionReport.ctaLink')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
