import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { faqSchema } from '../seoConfig'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function InvestorVetting() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = t('investorVetting.faqs', { returnObjects: true })
  const heroStats = t('investorVetting.heroStats', { returnObjects: true })
  const singleVettingItems = t('investorVetting.singleVettingItems', { returnObjects: true })
  const subscriptionTiers = t('investorVetting.subscriptionTiers', { returnObjects: true })

  return (
    <PageWrapper>
      <SEO
        title="Investor Opportunity Vetting — Soundcheck Insights"
        description="Independent vetting infrastructure for investors who run pipeline at scale. Single vettings or subscription tiers for VCs, PE firms, family offices, and accelerators."
        path="/investor-vetting"
        schema={faqSchema(faqs)}
      />

      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('investorVetting.heroLabel')}</span>
          <h1 className="page-h1" style={{ maxWidth: 800 }}>
            {t('investorVetting.heroTitle1')}{' '}
            <span style={{ color: 'var(--teal)' }}>{t('investorVetting.heroTitle2')}</span>
          </h1>
          <p className="page-sub" style={{ maxWidth: 680 }}>
            {t('investorVetting.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">{t('investorVetting.requestAccess')}</Link>
            <a href="#how-vetting-works" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>{t('investorVetting.learnMore')}</a>
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

      {/* Positioning: Why Vetting Infrastructure */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.positioningLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 32, maxWidth: 700 }}>
              {t('investorVetting.positioningTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 800, marginBottom: 20 }}>
              {t('investorVetting.positioningDesc1')}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 800 }}>
              {t('investorVetting.positioningDesc2')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two-Tier Comparison */}
      <section id="how-vetting-works" style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.tiersLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48, maxWidth: 700 }}>
              {t('investorVetting.tiersTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            {/* Tier A: Single Vetting */}
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '40px 32px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t('investorVetting.tierASingleLabel')}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 20, lineHeight: 1.2 }}>{t('investorVetting.tierASingleTitle')}</div>
                <div style={{ background: 'rgba(0,196,212,0.1)', padding: '16px', marginBottom: 20, borderRadius: 4 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--teal)', marginBottom: 6 }}>{t('investorVetting.tierAInstitutional')}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 24, fontWeight: 300, color: '#fff' }}>$2,500</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{t('investorVetting.tierAInstitutionalDesc')}</div>
                </div>
                <div style={{ background: 'rgba(0,196,212,0.1)', padding: '16px', marginBottom: 20, borderRadius: 4 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 400, color: 'var(--teal)', marginBottom: 6 }}>{t('investorVetting.tierAAngelFamily')}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 24, fontWeight: 300, color: '#fff' }}>$1,500</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{t('investorVetting.tierAAngelFamilyDesc')}</div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 20 }}>{t('investorVetting.tierASingleDesc')}</p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 20 }}>{t('investorVetting.tierAAvailability')}</div>
              </div>
            </FadeIn>
            {/* Tier B: Subscription */}
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--orange)', padding: '40px 32px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 12 }}>{t('investorVetting.tierBSubscriptionLabel')}</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300, color: '#fff', marginBottom: 20, lineHeight: 1.2 }}>{t('investorVetting.tierBSubscriptionTitle')}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>{t('investorVetting.tierBDesc')}</div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', marginBottom: 20, borderRadius: 4 }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t('investorVetting.tierBComingSoon')}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{t('investorVetting.tierBLaunchTimeline')}</p>
                </div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 20 }}>{t('investorVetting.tierBEarlyPhase')}</div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Single Vetting Deliverables */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.deliverablesLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40 }}>
              {t('investorVetting.deliverablesTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {singleVettingItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '22px 28px', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', width: 70, flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>{item.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Tiers Table */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.subscriptionTableLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48 }}>
              {t('investorVetting.subscriptionTableTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="subscription-grid">
            {subscriptionTiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>{tier.name}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 24, fontWeight: 300, color: '#fff', marginBottom: 4, lineHeight: 1.2 }}>{tier.price}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>/month</div>
                  <div style={{ flex: 1 }}>
                    {[
                      { label: 'VETTINGS/MONTH', value: tier.vettingsPerMonth },
                      { label: 'PER-VETTING COST', value: tier.perVettingCost },
                      { label: 'SCOPE', value: tier.scope },
                      { label: 'EXPERT REVIEW', value: tier.expertReview }
                    ].map((row, idx) => (
                      <div key={idx} style={{ padding: '12px 0', borderBottom: idx < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>{row.label}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>{row.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:900px){.subscription-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* How We Build Trust — Phase 1 Approach */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.trustLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40 }}>
              {t('investorVetting.trustTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
              {t('investorVetting.trustDesc')}
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
              {t('investorVetting.trustPhase1')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('investorVetting.faqLabel')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              {t('investorVetting.faqTitle')}
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
          <h2 className="cta-strip-h2">{t('investorVetting.ctaTitle')}</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '16px auto 0', lineHeight: 1.7, textAlign: 'center' }}>
            {t('investorVetting.ctaSub')}
          </p>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('investorVetting.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
