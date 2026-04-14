import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { faqSchema } from '../seoConfig'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function ForInvestors() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const [openFaq, setOpenFaq] = useState(null)

  const signals = t('forInvestors.signals', { returnObjects: true })
  const steps = t('forInvestors.steps', { returnObjects: true })
  const faqs = t('forInvestors.faqs', { returnObjects: true })

  const samples = [
    {
      verdict: 'ADVANCE',
      color: 'var(--teal)',
      bg: 'rgba(0,196,212,0.04)',
      border: 'rgba(0,196,212,0.15)',
      company: 'Vero Analytics',
      investor: 'Evaluated for Meridian Ventures',
      sector: 'B2B SaaS · Supply Chain Intelligence',
      href: '/samples/signal-brief-advance.html',
    },
    {
      verdict: 'CONDITIONAL',
      color: '#FBBF24',
      bg: 'rgba(217,119,6,0.04)',
      border: 'rgba(217,119,6,0.15)',
      company: 'Fieldwire Health',
      investor: 'Evaluated for Calloway Health Ventures',
      sector: 'Healthcare SaaS · Clinical Workflow Automation',
      href: '/samples/signal-brief-conditional.html',
    },
    {
      verdict: 'STOP',
      color: '#F87171',
      bg: 'rgba(232,71,42,0.04)',
      border: 'rgba(232,71,42,0.15)',
      company: 'Nexpath Commerce',
      investor: 'Evaluated for Irongate Capital',
      sector: 'E-Commerce SaaS · Checkout Optimization',
      href: '/samples/signal-brief-stop.html',
    },
  ]

  return (
    <PageWrapper>
      <SEO
        title={t('forInvestors.heroTitle')}
        description={t('forInvestors.heroSub')}
        path="/for-investors"
        image="/og/og-for-investors.png"
        schema={faqSchema(faqs)}
      />
      {/* Section 1 — Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('forInvestors.heroLabel')}</span>
          <h1 className="page-h1">{t('forInvestors.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 600 }}>
            {t('forInvestors.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('forInvestors.requestEngagement')}</Link>
            <a href="#samples" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('forInvestors.viewSamples')}</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {t('forInvestors.heroStats', { returnObjects: true }).map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 2 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.problemLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              {t('forInvestors.problemTitle')}
            </h2>
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
                {t('forInvestors.problemDesc1')}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                {t('forInvestors.problemDesc2')}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 48 }} className="offer-grid">
            {t('forInvestors.problemCards', { returnObjects: true }).map(([title, text]) => (
              <StaggerItem key={title}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      {/* Section 3 — How It Works */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.stepsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('forInvestors.stepsTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }} className="step-row">
                  <div style={{ padding: '28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28, fontWeight: 300, color: 'var(--teal)' }}>{s.num}</span>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{s.title}</div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 12 }}>{s.body}</p>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>{s.meta}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:720px){.step-row{grid-template-columns:60px 1fr!important}}"}</style>
      </section>

      {/* Section 4 — The 6 Signals */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.signalsLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('forInvestors.signalsTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('forInvestors.signalsSub')}
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {signals.map(s => (
              <StaggerItem key={s.num}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'var(--teal)' }}>{s.num}</span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>{s.name}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Verdict Logic Strip */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: 32, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '28px 32px' }}>
              {t('forInvestors.verdicts', { returnObjects: true }).map(([label, color, text]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: label !== 'STOP' ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, color: color === 'var(--teal)' ? 'var(--teal)' : color === '#FBBF24' ? '#FBBF24' : 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, width: 110, paddingTop: 2 }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5 — Sample Signal Briefs */}
      <section id="samples" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.samplesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              {t('forInvestors.samplesTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48 }}>
              {t('forInvestors.samplesSub')}
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {samples.map(s => (
              <StaggerItem key={s.verdict}>
                <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderTop: `3px solid ${s.color}`, padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.color, marginBottom: 16 }}>{s.verdict}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{s.company}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginBottom: 10 }}>{s.investor}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{s.sector}</div>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: s.color, textDecoration: 'none', borderBottom: `1px solid ${s.border}`, paddingBottom: 2, marginTop: 'auto', display: 'inline-block', width: 'fit-content' }}>
                    {t('forInvestors.viewSample')}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 6 — Where Soundcheck Fits */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.fitLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('forInvestors.fitTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{t('forInvestors.earlyStage.title')}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  {t('forInvestors.earlyStage.desc')}
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>{t('forInvestors.earlyStage.bestFor')}</div>
                {t('forInvestors.earlyStage.items', { returnObjects: true }).map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{t('forInvestors.growthStage.title')}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  {t('forInvestors.growthStage.desc')}
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>{t('forInvestors.growthStage.bestFor')}</div>
                {t('forInvestors.growthStage.items', { returnObjects: true }).map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forInvestors.faqLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('forInvestors.faqTitle')}
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

      {/* Section 8 — Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('forInvestors.ctaTitle')}</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('forInvestors.ctaButton')}</Link>
          <a href="#samples" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t('forInvestors.ctaLink')}</a>
        </div>
      </section>
    </PageWrapper>
  )
}
