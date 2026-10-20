'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'
import FilmPlayer from '@/components/FilmPlayer'
import DemoForm from '@/components/DemoForm'

const h2Style = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1 }
const bodyStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }

export default function ParaAgencias() {
  const t = useTranslations('paraAgencias')
  const steps = t.raw('steps')
  const pricing = t.raw('pricing')

  return (
    <PageWrapper>
      {/* ── HERO + VIDEO ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', position: 'relative', overflow: 'hidden' }} className="pa-hero-pad">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(0,196,212,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }} className="pa-hero">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="sc-label" style={{ display: 'block' }}>
              {t('heroLabel')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 22 }}
            >
              {t('heroTitle1')}<br />
              <span style={{ color: 'var(--teal-2)' }}>{t('heroTitle2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ ...bodyStyle, color: 'rgba(255,255,255,0.55)', maxWidth: 480, marginBottom: 32 }}
            >
              {t('heroDesc')}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <a href="#agendar" className="btn btn-primary">{t('ctaDemo')} →</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <FilmPlayer
              src="/videos/soundcheck-para-agencias.mp4"
              poster="/videos/soundcheck-para-agencias-poster.jpg"
              playLabel={t('playLabel')}
              duration={t('duration')}
            />
          </motion.div>
        </div>
        <style>{`
          @media(max-width:900px){ .pa-hero{grid-template-columns:1fr!important;gap:40px!important} }
          @media(max-width:600px){ .pa-hero-pad{padding:56px 24px!important} }
        `}</style>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('stepsLabel')}</span>
            <h2 style={{ ...h2Style, marginBottom: 40 }}>{t('stepsTitle')}</h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }} className="pa-steps">
            {steps.map(({ num, title, text }, i) => (
              <StaggerItem key={num}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${i === 3 ? 'var(--orange)' : 'var(--teal)'}`, padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: i === 3 ? 'var(--orange)' : 'var(--teal)', marginBottom: 12 }}>{num}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn>
            <p style={{ ...bodyStyle, fontSize: 13, marginTop: 24 }}>{t('telegram')}</p>
          </FadeIn>
        </div>
        <style>{`
          @media(max-width:1000px){ .pa-steps{grid-template-columns:repeat(2,1fr)!important} }
          @media(max-width:600px){ .pa-steps{grid-template-columns:1fr!important} }
          @media(max-width:900px){ .section-pad{padding:60px 24px!important} }
        `}</style>
      </section>

      {/* ── WHITE LABEL + PRICING ────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.1)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="pa-two">
          <FadeIn>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '36px 32px', height: '100%' }}>
              <span className="sc-label">{t('whiteLabelLabel')}</span>
              <h3 style={{ ...h2Style, fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', marginBottom: 14 }}>{t('whiteLabelTitle')}</h3>
              <p style={{ ...bodyStyle, margin: 0 }}>{t('whiteLabelText')}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--orange)', padding: '36px 32px', height: '100%' }}>
              <span className="sc-label sc-label-orange">{t('pricingLabel')}</span>
              <h3 style={{ ...h2Style, fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', marginBottom: 20 }}>{t('pricingTitle')}</h3>
              {pricing.map(({ price, label }) => (
                <div key={price} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 300, fontVariantNumeric: 'tabular-nums', fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: 'var(--teal-2)', whiteSpace: 'nowrap', minWidth: 130 }}>{price}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){ .pa-two{grid-template-columns:1fr!important} }`}</style>
      </section>

      {/* ── DEMO FORM ────────────────────────────────────────────────── */}
      <section id="agendar" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)', scrollMarginTop: 68 }} className="section-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 60, alignItems: 'start' }} className="pa-form">
          <FadeIn>
            <span className="sc-label">{t('formLabel')}</span>
            <h2 style={{ ...h2Style, marginBottom: 16 }}>{t('formTitle')}</h2>
            <p style={bodyStyle}>{t('formDesc')}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <DemoForm namespace="paraAgencias.form" formName="Demo para agências (PT)" />
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){ .pa-form{grid-template-columns:1fr!important;gap:32px!important} }`}</style>
      </section>
    </PageWrapper>
  )
}
