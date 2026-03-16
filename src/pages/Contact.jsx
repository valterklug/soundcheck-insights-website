import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn } from '../components/Animate'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Get in Touch</span>
          <h1 className="page-h1">Ready to brief us?</h1>
          <p className="page-sub">For partnership inquiries, product briefs, and general questions. Every message is reviewed and responded to within one business day.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 60px' }} className="contact-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 80, alignItems: 'start' }} className="contact-grid">

          {/* Form */}
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, color: 'var(--navy)', letterSpacing: '-0.01em', marginBottom: 8 }}>
              Send us a message
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 32 }}>
              No commitment required. Response within 2 business days.
            </p>
            <ContactForm fields="contact" buttonLabel="Send Message →" />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

              {/* Direct contact */}
              <div style={{ background: 'var(--navy)', padding: '24px', color: '#fff' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: 12 }}>Direct Contact</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 14 }}>Prefer to reach out directly? We're reachable by email or LinkedIn.</p>
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
                  >Valter Klug on LinkedIn</a>
                </div>
              </div>

              {/* Valter card */}
              <div style={{ background: 'rgba(6,15,30,0.04)', padding: '22px', borderTop: '2px solid var(--orange)', border: '1px solid rgba(6,15,30,0.08)', borderTop: '2px solid var(--orange)' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 12 }}>What Happens After You Write</span>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>VK</div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--navy)' }}>Valter Klug</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#888', marginTop: 2 }}>Founder · Soundcheck Insights · Miami</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#666', fontStyle: 'italic', lineHeight: 1.65 }}>
                  Valter reviews every message personally. If there's a fit, he'll reply with a short note and a calendar link within one business day. If Soundcheck isn't the right solution, he'll tell you honestly — and point you to the right partner.
                </p>
              </div>

              {/* Partners redirect */}
              <div style={{ background: 'rgba(6,15,30,0.03)', padding: '18px 20px', border: '1px solid rgba(6,15,30,0.07)', marginTop: 0 }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', display: 'block', marginBottom: 8 }}>Looking for a Different Service?</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 12 }}>
                  Soundcheck focuses on market research and intelligence. For marketing strategy, US entity setup, logistics, or franchise expansion, visit our partner network.
                </p>
                <Link to="/our-partners" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)', paddingBottom: 1, display: 'inline-block' }}>
                  See all partners →
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
