import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function OurPartners() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const partners = t('ourPartners.partners')

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">{t('ourPartners.heroLabel')}</span>
          <h1 className="page-h1">{t('ourPartners.heroTitle')}</h1>
          <p className="page-sub">{t('ourPartners.heroSub')}</p>
          <div style={{ background: 'rgba(0,196,212,0.06)', border: '1px solid rgba(0,196,212,0.15)', padding: '14px 18px', marginTop: 24, maxWidth: 640, borderLeft: '3px solid var(--teal)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              <strong style={{ color: '#fff' }}>{t('ourPartners.forBrands')}</strong> {t('ourPartners.forBrandsDesc')}
            </span>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label" style={{ marginBottom: 28 }}>{t('ourPartners.findPartner')}</span>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '220px 1fr',
                  background: p.you ? 'rgba(0,196,212,0.03)' : p.featured ? 'rgba(232,71,42,0.03)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.you ? 'rgba(0,196,212,0.2)' : p.featured ? 'rgba(232,71,42,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  transition: 'border-color 0.2s',
                }} className="partner-row">
                  {/* Left */}
                  <div style={{ padding: '28px 22px', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: p.you ? 'var(--teal)' : 'var(--teal)', display: 'block', marginBottom: 8 }}>{p.cat}</span>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', lineHeight: 1.25 }}>{p.name}</div>
                    </div>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.25)', marginTop: 18, display: 'block', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--teal-2)'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
                      >{p.urlLabel} →</a>
                    ) : (
                      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 18, display: 'block' }}>{p.urlLabel}</span>
                    )}
                  </div>

                  {/* Right */}
                  <div style={{ padding: '28px 36px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: 6 }}>{t('ourPartners.whenToReach')}</span>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, marginBottom: 14 }}>{p.when}</div>
                    {p.you ? (
                      <Link to={getLocalizedPath('/contact', lang)} className="text-link">{t('ourPartners.startBrief')}</Link>
                    ) : (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-link">{p.urlLabel} →</a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .partner-row { grid-template-columns: 1fr !important; }
            .partner-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .section-pad { padding: 60px 24px !important; }
          }
        `}</style>
      </section>

      {/* Not sure CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('ourPartners.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('ourPartners.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">{t('ourPartners.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
