import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn } from '../components/Animate'
import ContactForm from '../components/ContactForm'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function Contact() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('contact.heroLabel')}</span>
          <h1 className="page-h1">{t('contact.heroTitle')}</h1>
          <p className="page-sub">{t('contact.heroSub')}</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 60px' }} className="contact-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 80, alignItems: 'start' }} className="contact-grid">

          {/* Form */}
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, color: 'var(--navy)', letterSpacing: '-0.01em', marginBottom: 8 }}>
              {t('contact.sendMessage')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 32 }}>
              {t('contact.noCommitment')}
            </p>
            <ContactForm fields="contact" buttonLabel={t('contact.sendButton')} />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

              {/* Direct contact */}
              <div style={{ background: 'var(--navy)', padding: '24px', color: '#fff' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: 12 }}>{t('contact.directContact')}</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 14 }}>{t('contact.directDesc')}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ opacity: 0.5, fontSize: 14 }}>✉</span>
                  <a href="mailto:info@soundcheckinsights.com" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--teal-2)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.target.style.opacity = '0.7'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  >info@soundcheckinsights.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
                  <span style={{ opacity: 0.5, fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700 }}>in</span>
                  <a href="https://www.linkedin.com/in/valterklug/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--teal-2)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.target.style.opacity = '0.7'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  >{t('contact.linkedinLabel')}</a>
                </div>
              </div>

              {/* Valter card */}
              <div style={{ background: 'rgba(6,15,30,0.04)', padding: '22px', borderTop: '2px solid var(--orange)', border: '1px solid rgba(6,15,30,0.08)', borderTop: '2px solid var(--orange)' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 12 }}>{t('contact.whatHappens')}</span>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>VK</div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>{t('contact.valterTitle')}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#888', marginTop: 2 }}>{t('contact.valterSub')}</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#666', fontStyle: 'italic', lineHeight: 1.65 }}>
                  {t('contact.valterDesc')}
                </p>
              </div>

              {/* Partners redirect */}
              <div style={{ background: 'rgba(6,15,30,0.03)', padding: '18px 20px', border: '1px solid rgba(6,15,30,0.07)', marginTop: 0 }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 8 }}>{t('contact.lookingDifferent')}</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>
                  {t('contact.lookingDesc')}
                </p>
                <Link to={getLocalizedPath('/our-partners', lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)', paddingBottom: 1, display: 'inline-block' }}>
                  {t('contact.seePartners')}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .contact-section { padding: 60px 24px !important; }
          }
        `}</style>
      </section>
    </PageWrapper>
  )
}
