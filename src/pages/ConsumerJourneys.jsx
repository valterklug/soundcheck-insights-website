import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { faqSchema } from '../seoConfig'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function ConsumerJourneys() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const [openFaq, setOpenFaq] = useState(null)

  const heroStats = t('consumerJourneys.heroStats', { returnObjects: true })
  const howSteps = t('consumerJourneys.howSteps', { returnObjects: true })
  const outputs = t('consumerJourneys.outputs', { returnObjects: true })
  const faqs = t('consumerJourneys.faqs', { returnObjects: true })

  return (
    <PageWrapper>
      <SEO
        title="Consumer Journey Maps"
        description="See how your buyer moves from discovery to loyalty. Brand-specific journey maps built from your market research and persona data. $500 per persona. 3–5 business days."
        path="/consumer-journeys"
        image="/og/og-consumer-journeys.png"
        schema={faqSchema(faqs)}
      />

      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('consumerJourneys.heroLabel')}</span>
          <h1 className="page-h1">{t('consumerJourneys.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 660 }}>
            {t('consumerJourneys.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('consumerJourneys.ctaButton')}</Link>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {heroStats.map(({ num, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--orange)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisite Block */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '3px solid var(--teal)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ background: 'rgba(0,196,212,0.05)', border: '1px solid rgba(0,196,212,0.15)', borderTop: '3px solid var(--teal)', padding: '40px 36px' }}>
              <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.25rem,2.5vw,1.5rem)', fontWeight: 500, letterSpacing: '-.015em', color: '#fff', marginBottom: 16 }}>
                {t('consumerJourneys.prereqTitle')}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20, maxWidth: 720 }}>
                {t('consumerJourneys.prereqDesc')}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic', maxWidth: 720 }}>
                {t('consumerJourneys.prereqReady')}
              </p>
              <Link to={getLocalizedPath('/market-research', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: 'var(--teal)', textDecoration: 'none', display: 'inline-block', paddingBottom: 4, borderBottom: '1px solid var(--teal)' }}>
                {t('consumerJourneys.prereqCta')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Is a Journey Map */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1, maxWidth: 900 }}>
              {t('consumerJourneys.whatTitle')}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 48 }} className="what-grid">
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                  {t('consumerJourneys.whatDesc1')}
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                  {t('consumerJourneys.whatDesc2')}
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(255,165,0,0.05)', border: '1px solid rgba(255,165,0,0.15)', padding: '32px 28px', borderLeft: '4px solid var(--orange)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                {t('consumerJourneys.whatCallout')}
              </p>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.what-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* How It Works — 4 Steps */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('consumerJourneys.howTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="steps-grid">
            {howSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--orange)', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 36, fontWeight: 300, color: 'var(--orange)', marginBottom: 16, lineHeight: 1 }}>{step.num}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 14, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, flex: 1 }}>{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.steps-grid{grid-template-columns:1fr 1fr!important}}"}</style>
      </section>

      {/* What You Receive */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              {t('consumerJourneys.outputTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }} className="outputs-grid">
            {outputs.map((output, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--orange)', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 14, lineHeight: 1.3 }}>{output.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, flex: 1 }}>{output.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:1100px){.outputs-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:900px){.outputs-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('consumerJourneys.pricingTitle')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(255,165,0,0.03)', border: '1px solid rgba(255,165,0,0.15)', padding: '60px 48px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 48, fontWeight: 300, color: '#fff', marginBottom: 12, lineHeight: 1 }}>
                {t('consumerJourneys.pricingAmount')}
              </div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 32 }}>
                {t('consumerJourneys.pricingSub')}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24, textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '24px 28px', borderRadius: 4 }}>
                {t('consumerJourneys.pricingIncludes')}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 28 }}>
                {t('consumerJourneys.pricingExamples')}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: 28, fontStyle: 'italic' }}>
                {t('consumerJourneys.pricingNote')}{' '}
                <Link to={getLocalizedPath('/partner', lang)} style={{ color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)' }}>
                  {t('nav.partnerWithUs')} →
                </Link>
              </p>
              <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary" style={{ fontSize: 14 }}>
                {t('consumerJourneys.ctaButton')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('consumerJourneys.faqTitle')}
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
                    <motion.span animate={{ rotate: openFaq === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 14, color: 'var(--orange)', flexShrink: 0 }}>›</motion.span>
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
          <h2 className="cta-strip-h2">Ready to map your consumer journey?</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('consumerJourneys.ctaButton')}</Link>
          <Link to={getLocalizedPath('/products', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>View all products</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
