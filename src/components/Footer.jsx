import { Link } from 'react-router-dom'

const cols = [
  { label: 'Platform', links: [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'For Agencies', to: '/for-agencies' },
    { label: 'Products', to: '/products' },
    { label: 'Resources', to: '/resources' },
    { label: 'Partner with Us', to: '/partner' },
    { label: 'Our Partners', to: '/our-partners' },
    { label: 'Contact', to: '/contact' },
  ]}
]

export default function Footer() {
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
            AI-powered market intelligence platform for agencies and consultancies.<br /><br />
            Founded by Valter Klug<br />
            Miami, FL
          </p>
        </div>

        {/* Nav */}
        <div>
          <span style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B8098',
            display: 'block', marginBottom: 16,
          }}>Platform</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {cols[0].links.map(({ label, to }) => (
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
          }}>Start Here</span>
          <Link to="/partner" className="btn btn-primary" style={{ fontSize: 13, padding: '12px 22px' }}>
            Request Platform Access →
          </Link>
          <Link to="/contact" className="btn btn-secondary" style={{ fontSize: 13, padding: '11px 22px' }}>
            Brief a Product
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
        <span>© 2026 Soundcheck Insights. All rights reserved.</span>
        <span>soundcheckinsights.com</span>
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
