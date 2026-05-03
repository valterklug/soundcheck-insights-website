import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLangFromPath, getLocalizedPath } from '../i18n'

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const footerLinks = [
    { label: t('nav.howItWorks'), to: getLocalizedPath('/how-it-works', lang) },
    { label: t('nav.forAgencies'), to: getLocalizedPath('/for-agencies', lang) },
    { label: t('nav.products'), to: getLocalizedPath('/products', lang) },
    { label: t('nav.resources'), to: getLocalizedPath('/resources', lang) },
    { label: t('nav.partnerWithUs'), to: getLocalizedPath('/partner', lang) },
    { label: t('nav.ourPartners'), to: getLocalizedPath('/our-partners', lang) },
    { label: t('footer.contact'), to: getLocalizedPath('/contact', lang) },
    { label: 'For Mana Tech Members', to: getLocalizedPath('/mana-tech', lang) },
  ]

  return (
    <footer style={{
      background: '#0A1628', borderTop: '1px solid rgba(0,196,212,0.12)',
      padding: '52px 60px 32px',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '220px 1fr auto',
        gap: 60, alignItems: 'start', maxWidth: 1200, margin: '0 auto',
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <img src="/logo-neg.png" alt="Soundcheck Insights" style={{ height: 28, marginBottom: 14 }} />
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6B8098', lineHeight: 1.7,
          }}>
            {t('footer.tagline')}<br /><br />
            {t('footer.foundedBy')}<br />
            {t('footer.location')}
          </p>
        </div>

        {/* Nav */}
        <div>
          <span style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B8098',
            display: 'block', marginBottom: 16,
          }}>{t('footer.platform')}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {footerLinks.map(({ label, to }) => (
              <Link key={to} to={to} style={{
                fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#4DDDE8'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B8098',
            display: 'block', marginBottom: 4,
          }}>{t('footer.startHere')}</span>
          <Link to={getLocalizedPath('/partner', lang)} className="btn btn-primary" style={{ fontSize: 13, padding: '12px 22px' }}>
            {t('footer.requestAccess')}
          </Link>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-secondary" style={{ fontSize: 13, padding: '11px 22px' }}>
            {t('footer.briefProduct')}
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        maxWidth: 1200, margin: '36px auto 0',
        paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.2)',
      }}
        className="footer-bottom"
      >
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.domain')}</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          footer { padding: 40px 24px 24px !important; }
          .footer-bottom { flex-direction: column; gap: 6px; }
        }
      `}</style>
    </footer>
  )
}
