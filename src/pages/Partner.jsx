import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import ContactForm from '../components/ContactForm'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function Partner() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const nextSteps = t('partner.steps')

  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('partner.heroLabel')}</span>
          <h1 className="page-h1">{t('partner.heroTitle')}</h1>
          <p className="page-sub">{t('partner.heroSub')}</p>
        </div>
      </section>

      <section style={{ background: 'var(--white, #fff)', padding: '80px 60px' }} className="partner-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'start', color: 'var(--navy)' }} className="partner-grid">
          {/* Form */}
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, color: 'var(--navy)', letterSpacing: '-0.01em', marginBottom: 8 }}>
              {t('partner.formTitle')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 32 }}>
              {t('partner.formSub')}
            </p>
            <ContactForm fields="partner" buttonLabel={t('partner.submitButton')} />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--navy)', borderRadius: 4, overflow: 'hidden' }}>
              {/* What happens next */}
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '14px 20px' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>{t('partner.whatHappens')}</span>
              </div>
              <StaggerContainer>
                {nextSteps.map(s => (
                  <StaggerItem key={s.num}>
                    <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', padding: '16px 18px', marginBottom: 2 }}>
                      <div style={{ width: 36, height: 36, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>{s.num}</div>
                      <div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 3 }}>{s.title}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{s.body}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Founder card */}
              <div style={{ padding: '24px', borderTop: '2px solid var(--orange)', marginTop: 2 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>VK</div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>Valter Klug</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Founder · Soundcheck Insights · Miami</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', lineHeight: 1.65 }}>
                  {t('partner.valterQuote')}
                </p>
              </div>

              {/* Direct */}
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '18px 20px', marginTop: 2 }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{t('partner.preferTalk')}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>{t('partner.reachOut')}</p>
                <a href="mailto:info@soundcheckinsights.com" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)', paddingBottom: 1, display: 'block', marginBottom: 8 }}>
                  info@soundcheckinsights.com →
                </a>
                <a href="https://www.linkedin.com/in/valterklug/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)', paddingBottom: 1 }}>
                  LinkedIn →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .partner-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .partner-section { padding: 60px 24px !important; }
          }
        `}</style>
      </section>
    </PageWrapper>
  )
}
