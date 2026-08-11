'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

export default function VirtualFocusGroups() {
  const t = useTranslations()
  const [openFaq, setOpenFaq] = useState(null)
  const [openDeliv, setOpenDeliv] = useState(null)

  const faqs = t.raw('virtualFocusGroups.faqs')
  const steps = t.raw('virtualFocusGroups.steps')
  const advantages = t.raw('virtualFocusGroups.advantages')
  const deliverables = t.raw('virtualFocusGroups.deliverables')
  const heroStats = t.raw('virtualFocusGroups.heroStats')
  const forBrands = t.raw('virtualFocusGroups.forBrands')
  const forAgencies = t.raw('virtualFocusGroups.forAgencies')
  const prereqSteps = t.raw('virtualFocusGroups.prereqSteps')

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('virtualFocusGroups.heroLabel')}</span>
          <h1 className="page-h1" style={{ maxWidth: 800 }}>
            {t('virtualFocusGroups.heroTitle')}
          </h1>
          <p className="page-sub" style={{ maxWidth: 680 }}>
            {t('virtualFocusGroups.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">{t('virtualFocusGroups.requestAccess')}</Link>
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
              {t.raw('virtualFocusGroups.whoAffectedItems').map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{t('virtualFocusGroups.whatTolerated')}</div>
              {t.raw('virtualFocusGroups.whatToleratedItems').map((item, i) => (
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

      {/* Prerequisite Block */}
      <section id="how-it-works" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              borderTop: '3px solid var(--teal)',
              background: 'rgba(0,196,212,0.04)',
              padding: '40px 32px',
              marginBottom: 48
            }}>
              <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
                {t('virtualFocusGroups.prereqTitle')}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                {t('virtualFocusGroups.prereqDesc')}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>
                {t('virtualFocusGroups.prereqReady')}
              </p>
              <Link href="/market-research" style={{ color: 'var(--teal)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--teal)', paddingBottom: 2 }}>
                {t('virtualFocusGroups.prereqCta')}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Getting Started
            </h3>
          </FadeIn>

          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="prereq-grid">
            {prereqSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 4 }}>
                      {step.title}
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.prereq-grid{grid-template-columns:1fr!important}}"}</style>
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
              {t.raw('virtualFocusGroups.whatWeDoItems').map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', marginBottom: 20 }}>{t('virtualFocusGroups.whatWeDont')}</div>
              {t.raw('virtualFocusGroups.whatWeDontItems').map((item, i) => (
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
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">{t('virtualFocusGroups.pricing.label')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 20, lineHeight: 1.1 }}>
              {t('virtualFocusGroups.pricing.title')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 40 }}>
              {t('virtualFocusGroups.pricing.sub')}
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div style={{ background: 'rgba(0,196,212,0.05)', border: '1px solid rgba(0,196,212,0.15)', borderTop: '3px solid var(--teal)', padding: '48px 40px', marginBottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 48, fontWeight: 300, color: '#fff', marginBottom: 4 }}>
                {t('virtualFocusGroups.pricing.amount')}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2, marginBottom: 32 }} className="pricing-items">
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '24px 28px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--teal)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Includes</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {t('virtualFocusGroups.pricing.includes')}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '24px 28px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--teal)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Additional Feedback Rounds</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {t('virtualFocusGroups.pricing.extra')}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '24px 28px', textAlign: 'left' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--teal)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Panel Reusability</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {t('virtualFocusGroups.pricing.reuse')}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: 8 }}>
                {t('virtualFocusGroups.pricing.wholesale')}{' '}
                <Link href="/partner" style={{ color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)' }}>
                  {t('nav.partnerWithUs')} →
                </Link>
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
                {t('virtualFocusGroups.pricing.projectNote')} <Link href="/research-platform" style={{ color: 'var(--teal)', textDecoration: 'none', borderBottom: '1px solid var(--teal)' }}>/research-platform</Link>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn btn-primary">
                {t('virtualFocusGroups.requestAccess')}
              </Link>
            </div>
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
          <Link href="/contact" className="btn btn-white">{t('virtualFocusGroups.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
