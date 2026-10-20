'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'
import PlanCalculator from '@/components/PlanCalculator'

const h2Style = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1 }
const bodyStyle = { fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }
const smallLabel = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }
const PLAN_COLORS = ['var(--teal)', 'var(--orange)', 'var(--teal-2)']

function Table({ head, rows, highlight, cols = '1.8fr 1fr' }) {
  return (
    <div>
      {head && (
        <div style={{ display: 'grid', gridTemplateColumns: cols, marginBottom: 1 }}>
          {head.map((h) => <div key={h} style={{ ...smallLabel, padding: '10px 14px' }}>{h}</div>)}
        </div>
      )}
      {rows.map(([label, value], i) => (
        <div key={label} style={{ display: 'grid', gridTemplateColumns: cols, marginBottom: 1 }}>
          <div style={{ padding: '13px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{label}</div>
          <div style={{ padding: '13px 14px', background: highlight === i ? 'rgba(232,71,42,0.08)' : 'rgba(255,255,255,0.03)', border: highlight === i ? '1px solid rgba(232,71,42,0.2)' : '1px solid rgba(255,255,255,0.05)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: highlight === i ? 'var(--orange)' : '#fff', display: 'flex', alignItems: 'center' }}>{value}</div>
        </div>
      ))}
    </div>
  )
}

export default function Pricing() {
  const t = useTranslations('pricing')
  const tc = useTranslations('planCalculator')
  const plans = t.raw('plans')
  const extras = t.raw('extras')

  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('heroLabel')}</span>
          <h1 className="page-h1">{t('heroTitle')}</h1>
          <p className="page-sub">{t('heroSub')}</p>
        </div>
      </section>

      {/* ── THREE PLANS ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <StaggerContainer style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="plan-grid">
          {plans.map((p, i) => (
            <StaggerItem key={p.name}>
              <div style={{ background: i === 1 ? 'rgba(232,71,42,0.05)' : 'rgba(255,255,255,0.03)', border: i === 1 ? '1px solid rgba(232,71,42,0.25)' : '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${PLAN_COLORS[i]}`, padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 18, minHeight: 22 }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: PLAN_COLORS[i] }}>{p.name}</span>
                  {p.regular && <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', border: '1px solid rgba(232,71,42,0.4)', padding: '3px 8px', borderRadius: 3 }}>{t('introBadge')}</span>}
                </div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 300, color: '#fff', lineHeight: 1 }}>{p.price}</div>
                <div style={{ ...smallLabel, marginTop: 8 }}>{p.per}</div>
                {p.regular && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>{p.regular}</div>}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '20px 0 18px' }}>{p.fit}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                      <span style={{ color: PLAN_COLORS[i], flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                {p.note && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 18 }}>{p.note}</p>}
                <Link href="/contact" className={i === 1 ? 'btn btn-primary' : 'btn btn-secondary'} style={{ justifyContent: 'center' }}>{p.cta}</Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <style>{`@media(max-width:960px){.plan-grid{grid-template-columns:1fr!important;max-width:560px!important}}@media(max-width:900px){.section-pad{padding:60px 24px!important}}`}</style>
      </section>

      {/* ── WHAT A PROJECT IS ────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="pricing-two">
          <FadeIn>
            <span className="sc-label">{t('projectLabel')}</span>
            <h2 style={{ ...h2Style, marginBottom: 18 }}>{t('projectTitle')}</h2>
            <p style={{ ...bodyStyle, marginBottom: 20 }}>{t('projectDesc')}</p>
            {t.raw('projectNotes').map((note) => (
              <p key={note} style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, paddingLeft: 14, borderLeft: '2px solid rgba(0,196,212,0.3)', marginBottom: 12 }}>{note}</p>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <Table head={t.raw('examplesHead')} rows={t.raw('examples')} />
          </FadeIn>
        </div>
        <style>{`@media(max-width:900px){.pricing-two{grid-template-columns:1fr!important;gap:36px!important}}`}</style>
      </section>

      {/* ── EXTRAS ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.1)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('extrasLabel')}</span>
            <h2 style={{ ...h2Style, marginBottom: 40 }}>{t('extrasTitle')}</h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }} className="extras-grid">
            {extras.map((x) => (
              <StaggerItem key={x.name}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '26px 22px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{x.name}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 300, color: 'var(--teal-2)', marginBottom: 12 }}>{x.price}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{x.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:1000px){.extras-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.extras-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── RESALE GUIDANCE + WORKED EXAMPLE ─────────────────────────── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="pricing-two">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('resaleLabel')}</span>
            <h2 style={{ ...h2Style, marginBottom: 16 }}>{t('resaleTitle')}</h2>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>{t('resaleDesc')}</p>
            <Table rows={t.raw('resaleRows')} cols="1fr 1.5fr" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ ...smallLabel, marginBottom: 14, marginTop: 6 }}>{t('exampleTitle')}</div>
            <Table rows={t.raw('exampleRows')} highlight={2} />
          </FadeIn>
        </div>
      </section>

      {/* ── PLAN CALCULATOR ──────────────────────────────────────────── */}
      <section id="calculator" style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.1)', scrollMarginTop: 68 }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{tc('label')}</span>
            <h2 style={{ ...h2Style, marginBottom: 14 }}>{tc.rich('title', { em: (c) => <span style={{ color: 'var(--teal)' }}>{c}</span> })}</h2>
            <p style={{ ...bodyStyle, maxWidth: 680, marginBottom: 36 }}>{tc('lead')}</p>
          </FadeIn>
          <PlanCalculator />
        </div>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-white">{t('ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
