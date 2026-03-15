import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import ContactForm from '../components/ContactForm'

const nextSteps = [
  { num: '01', title: 'We review your inquiry', body: 'Within one business day. Every inquiry read personally by Valter.' },
  { num: '02', title: 'Discovery call (30 min)', body: 'We walk through the platform, your client types, and which product makes most sense to start with.' },
  { num: '03', title: 'First report — live practice', body: 'Most operators run their first report on an existing client. You see the full workflow in practice.' },
  { num: '04', title: 'Platform access confirmed', body: 'Simple, clear terms. Pay-per-report to start, or monthly access. No long-term lock-in.' },
]

export default function Partner() {
  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Partner with Us</span>
          <h1 className="page-h1">Add Soundcheck to your practice.<br />Start with one report.</h1>
          <p className="page-sub">Tell us about your agency or consultancy. We'll walk you through platform access, pricing, and how to run your first report — typically on an existing client within your first week.</p>
        </div>
      </section>

      <section style={{ background: 'var(--white, #fff)', padding: '80px 60px' }} className="partner-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'start', color: 'var(--navy)' }} className="partner-grid">
          {/* Form */}
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, color: 'var(--navy)', letterSpacing: '-0.01em', marginBottom: 8 }}>
              Tell us about your agency
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 32 }}>
              Every access request is reviewed personally by Valter. If there's a fit, you'll hear back within one business day.
            </p>
            <ContactForm fields="partner" buttonLabel="Submit Partnership Inquiry →" />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* What happens next */}
              <div style={{ background: 'var(--navy)', padding: '14px 20px' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>What Happens Next</span>
              </div>
              <StaggerContainer>
                {nextSteps.map(s => (
                  <StaggerItem key={s.num}>
                    <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, alignItems: 'flex-start', background: 'rgba(6,15,30,0.04)', padding: '16px 18px', marginBottom: 2 }}>
                      <div style={{ width: 36, height: 36, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>{s.num}</div>
                      <div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>{s.title}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#666', lineHeight: 1.55 }}>{s.body}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Founder card */}
              <div style={{ background: 'var(--navy)', padding: '24px', borderTop: '2px solid var(--orange)', marginTop: 2 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0, borderRadius: '50%' }}>VK</div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>Valter Klug</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Founder · Soundcheck Insights · Miami</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', lineHeight: 1.65 }}>
                  "I built this platform by running every report myself first. I review every platform access inquiry personally — and walk new operators through their first report."
                </p>
              </div>

              {/* Direct */}
              <div style={{ background: 'rgba(6,15,30,0.04)', padding: '18px 20px', border: '1px solid rgba(6,15,30,0.08)', marginTop: 2 }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 8 }}>💬 Prefer to talk first?</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#666', marginBottom: 12 }}>Reach out directly or connect on LinkedIn.</p>
                <a href="mailto:valter.klug@chameleon.co" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid rgba(232,71,42,0.3)', paddingBottom: 1 }}>
                  valter.klug@chameleon.co →
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
