import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { faqSchema } from '../seoConfig'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function VirtualFocusGroups() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const [openFaq, setOpenFaq] = useState(null)
  const [openDeliv, setOpenDeliv] = useState(null)

  const faqs = t('virtualFocusGroups.faqs', { returnObjects: true })
  const steps = t('virtualFocusGroups.steps', { returnObjects: true })
  const advantages = t('virtualFocusGroups.advantages', { returnObjects: true })
  const deliverables = t('virtualFocusGroups.deliverables', { returnObjects: true })
  const heroStats = t('virtualFocusGroups.heroStats', { returnObjects: true })
  const forBrands = t('virtualFocusGroups.forBrands', { returnObjects: true })
  const forAgencies = t('virtualFocusGroups.forAgencies', { returnObjects: true })
  const pricing = t('virtualFocusGroups.pricing', { returnObjects: true })

  return (
    <PageWrapper>
      <SEO
        title="AI Virtual Focus Groups — Product 04"
        description="Pressure-test packaging, taglines, creative territories, and product concepts with AI buyer personas. 2–3 weeks, 5–10× cheaper than traditional panels."
        path="/virtual-focus-groups"
        schema={faqSchema(faqs)}
      />

      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('virtualFocusGroups.heroLabel')}</span>
          <h1 className="page-h1" style={{ maxWidth: 800 }}>
            {t('virtualFocusGroups.heroTitle1')}{' '}
            <span style={{ color: 'var(--teal)' }}>{t('virtualFocusGroups.heroTitle2')}</span>
          </h1>
          <p className="page-sub" style={{ maxWidth: 680 }}>
            {t('virtualFocusGroups.heroSub')}
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 680, marginTop: 12 }}>
            {t('virtualFocusGroups.heroSub2')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('virtualFocusGroups.requestAccess')}</Link>
            <a href="#how-it-works" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('virtualFocusGroups.howItWorks')}</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {heroStats.map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn><span className="sc-label">{t('virtualFocusGroups.advantagesLabel')}</span></FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 32 }} className="advantages-grid">
            {advantages.map((a) => (
              <StaggerItem key={a.title}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>{a.title}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>{a.sub}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.advantages-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.advantages-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Problem */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.problemLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 700 }}>
              {t('virtualFocusGroups.problemTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="grid-2">
            <FadeIn>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{t('virtualFocusGroups.whoAffected')}</div>
              {t('virtualFocusGroups.whoAffectedItems', { returnObjects: true }).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{t('virtualFocusGroups.whatTolerated')}</div>
              {t('virtualFocusGroups.whatToleratedItems', { returnObjects: true }).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--orange)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* How It Works — 3 Steps */}
      <section id="how-it-works" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.processLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 700 }}>
              {t('virtualFocusGroups.processTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {steps.map((s) => (
              <StaggerItem key={s.num}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>Step {s.num}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>{s.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginTop: 20 }}>{s.tag}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      {/* Deliverables */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.deliverablesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40 }}>
              {t('virtualFocusGroups.deliverablesTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {deliverables.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 18 }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', width: 72, flexShrink: 0 }}>{d.label}</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>{d.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For — Brands & Agencies */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.fitLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48 }}>
              {t('virtualFocusGroups.fitTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            {/* For Brands */}
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '36px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{forBrands.label}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 12 }}>{forBrands.title}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 20 }}>{forBrands.desc}</p>
                {forBrands.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, marginTop: 20, fontStyle: 'italic' }}>{forBrands.note}</p>
              </div>
            </FadeIn>
            {/* For Agencies */}
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--orange)', padding: '36px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 12 }}>{forAgencies.label}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 12 }}>{forAgencies.title}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 20 }}>{forAgencies.desc}</p>
                {forAgencies.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--orange)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, marginTop: 20, fontStyle: 'italic' }}>{forAgencies.note}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.methodLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48 }}>
              {t('virtualFocusGroups.methodTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="grid-2">
            <FadeIn>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', marginBottom: 20 }}>{t('virtualFocusGroups.whatWeDo')}</div>
              {t('virtualFocusGroups.whatWeDoItems', { returnObjects: true }).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', marginBottom: 20 }}>{t('virtualFocusGroups.whatWeDont')}</div>
              {t('virtualFocusGroups.whatWeDontItems', { returnObjects: true }).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--orange)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">{pricing.label}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {pricing.title}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {pricing.tiers.map((tier, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.15)', borderTop: '3px solid var(--teal)', padding: '40px 28px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: 'var(--teal)', marginBottom: 8 }}>{tier.name}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 12 }}>{tier.price}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{tier.scope}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{tier.delivery}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>{tier.best}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.15}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: 20 }}>{pricing.includes}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, marginTop: 8 }}>{pricing.wholesale}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6, marginTop: 8 }}>{pricing.note}</p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.faqLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('virtualFocusGroups.faqTitle')}
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
          <h2 className="cta-strip-h2">{t('virtualFocusGroups.ctaTitle')}</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '16px auto 0', lineHeight: 1.7, textAlign: 'center' }}>
            {t('virtualFocusGroups.ctaSub')}
          </p>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('virtualFocusGroups.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
