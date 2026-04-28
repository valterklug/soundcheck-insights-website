import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function ResearchPlatform() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const modules = t('researchPlatform.modules', { returnObjects: true })
  const pricingRows = t('researchPlatform.pricingRows', { returnObjects: true })
  const pricingColumns = t('researchPlatform.pricingColumns', { returnObjects: true })

  return (
    <PageWrapper>
      <SEO
        title="Consumer Intelligence Platform"
        description="Three connected modules for market research, consumer journey maps, and virtual focus groups. Research from $4,000. No minimum commitment."
        path="/research-platform"
        image="/og/og-research-platform.png"
      />

      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('researchPlatform.heroLabel')}</span>
          <h1 className="page-h1">{t('researchPlatform.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 720 }}>
            {t('researchPlatform.heroSub')}
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 760, marginBottom: 28 }}>
            {t('researchPlatform.heroDesc')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('researchPlatform.ctaButton')}</Link>
            <a href="#pricing" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('researchPlatform.seePricing')}</a>
          </div>
        </div>
      </section>

      {/* Module Overview Section */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 48, textAlign: 'center' }}>
              {t('researchPlatform.modulesTitle')}
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {modules.map((module, i) => (
              <FadeIn key={module.num} delay={i * 0.1}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '40px 36px', borderTop: i === 0 ? '3px solid var(--teal)' : 'none', borderBottom: i < modules.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  {/* Module Header */}
                  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28, fontWeight: 300, color: 'var(--teal)', flexShrink: 0, width: 50 }}>{module.num}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{module.name}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>{module.tag}</div>
                    </div>
                  </div>

                  {/* Module Description */}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 24, paddingLeft: 74 }}>
                    {module.desc}
                  </p>

                  {/* What You Get, Delivery, Pricing */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, paddingLeft: 74, marginBottom: 20 }}>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>What you get</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{module.whatYouGet}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Delivery</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{module.delivery}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Pricing</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{module.pricing}</p>
                    </div>
                  </div>

                  {/* Link */}
                  <div style={{ paddingLeft: 74 }}>
                    <Link to={getLocalizedPath(module.link, lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'var(--teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'opacity 0.2s' }}>
                      {module.linkLabel}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:900px){[data-module-grid]{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              {t('researchPlatform.pricingLabel')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              {t('researchPlatform.pricingSub')}
            </p>
          </FadeIn>

          {/* Table - Responsive Wrapper */}
          <FadeIn delay={0.1}>
            <div style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
                <thead>
                  <tr>
                    {pricingColumns.map((col, i) => (
                      <th key={i} style={{
                        padding: '16px 20px',
                        textAlign: i === 0 ? 'left' : 'center',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)'
                      }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{
                        padding: '20px',
                        textAlign: 'left',
                        fontWeight: 500,
                        color: '#fff'
                      }}>
                        {row.name}
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                        {row.research}
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                        {row.journeys}
                      </td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                        {row.vfg}
                      </td>
                      <td style={{
                        padding: '20px',
                        textAlign: 'center',
                        fontWeight: 500,
                        color: 'var(--teal)'
                      }}>
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pricing Note */}
            <div style={{ background: 'rgba(0,196,212,0.05)', border: '1px solid rgba(0,196,212,0.15)', padding: '20px 24px', borderRadius: 4, marginBottom: 32 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                {t('researchPlatform.pricingNote')}
              </p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center' }}>
              <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('researchPlatform.ctaButton')}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 48, textAlign: 'center' }}>
              {t('researchPlatform.whoTitle')}
            </h2>
          </FadeIn>

          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="who-grid">
            {/* Agencies Card */}
            <StaggerItem>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 16 }}>
                  {t('researchPlatform.whoAgenciesTitle')}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                  {t('researchPlatform.whoAgenciesDesc')}
                </p>
                <Link to={getLocalizedPath('/partner', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'var(--teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  {t('researchPlatform.whoCta')}
                </Link>
              </div>
            </StaggerItem>

            {/* Brands Card */}
            <StaggerItem>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 16 }}>
                  {t('researchPlatform.whoBrandsTitle')}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                  {t('researchPlatform.whoBrandsDesc')}
                </p>
                <Link to={getLocalizedPath('/partner', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'var(--teal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  {t('researchPlatform.whoCta')}
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.who-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      {/* Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('researchPlatform.ctaTitle')}</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('researchPlatform.ctaButton')}</Link>
          <Link to={getLocalizedPath('/products', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>See All Products →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
