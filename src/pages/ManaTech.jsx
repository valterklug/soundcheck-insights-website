import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import SEO from '../components/SEO'
import { getLangFromPath, getLocalizedPath } from '../i18n'

const memberRates = [
  { name: 'Market Research (Mini/Standard/Premium)', standard: '$3,000 / $3,500 / $4,000', member: '$2,250 / $2,625 / $3,000', link: '/research-platform' },
  { name: 'GoGlobal Viability Analysis', standard: '$2,000', member: '$1,500', link: '/expansion-report' },
  { name: 'Scale Assessment', standard: '$4,000', member: '$3,000', link: '/scale-assessment' },
  { name: 'Customer Journey Maps', standard: '$500/persona', member: '$375/persona', link: '/consumer-journeys' },
  { name: 'Virtual Focus Groups', standard: '$3,000/session', member: '$2,250/session', link: '/virtual-focus-groups' },
  { name: 'VFG Re-Test Pack', standard: '+$2,000', member: '+$1,500', link: '/virtual-focus-groups' },
]

export default function ManaTech() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  return (
    <PageWrapper>
      <SEO
        title="Mana Tech Member Rate — 25% Off All Products"
        description="Decision-grade market intelligence for Mana Tech members, Scale2Miami cohort founders, and the mentor network. 25% off MSRP on all five Soundcheck products."
        path="/mana-tech"
      />

      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>
            Mana Hubs Member-Based · Soundcheck Insights
          </div>
          <h1 className="page-h1">Built inside the Mana Tech ecosystem.<br/>For the operators, mentors, and agencies who run it.</h1>
          <p className="page-sub" style={{ maxWidth: 760 }}>
            Decision-grade market intelligence for operators delivering to international brands, available to Mana Tech members, Scale2Miami ecosystem partners, and the mentor network at 25% off MSRP.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary">Brief a Product</Link>
            <a href="https://calendly.com/valterklug/30min" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none' }}>
              Talk to Valter
            </a>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 48, textAlign: 'center' }}>
              Who qualifies for the Member Rate.
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="who-grid">
            {[
              { title: 'Mana Hubs Members', desc: 'Current tenants of Mana Hubs in downtown Miami. You work from the building, you get the rate.' },
              { title: 'Scale2Miami Cohort Founders', desc: 'Current and alumni cohort participants from any Scale2Miami cohort — pre-accelerator through growth stage.' },
              { title: 'Mana Tech Mentor Network', desc: 'Listed mentors on the Mana Tech mentor directory. Supporting the ecosystem earns you the same rate.' },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '36px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>{card.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, flex: 1, marginBottom: 24 }}>{card.desc}</p>
                  <Link to={getLocalizedPath('/contact', lang)} className="btn btn-primary" style={{ fontSize: 12, padding: '10px 18px', alignSelf: 'flex-start' }}>Brief a Product</Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.who-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Why Soundcheck for Mana Tech */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 48 }}>
              Why Soundcheck for Mana Tech operators.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="why-grid">
            {[
              { title: 'De-risk your clients\' market entry', desc: 'Most operators in the ecosystem serve international brands entering the US. GoGlobal was built for exactly this transition — decision-grade evidence before your clients commit capital.' },
              { title: 'Built by an insider', desc: 'Soundcheck founder Valter Klug is a Mana Hubs member, trilingual, with 28 years across the US-LatAm bridge. Same building, same ecosystem, same mission.' },
              { title: 'White-label delivery under your brand', desc: 'Every product is operator-facing. You deliver the intelligence under your brand, at your price point, with your strategic layer on top. Soundcheck is your production engine.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{item.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:900px){.why-grid{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Product Matrix with Member Rates */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              All five products. 25% off MSRP.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              The Member Rate applies to all direct Soundcheck engagements. Same deliverables, same timelines, same quality — just aligned pricing for the ecosystem.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px 20px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Product</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Standard</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)' }}>Member Rate</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {memberRates.map((p, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '20px', fontWeight: 500, color: '#fff' }}>{p.name}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>{p.standard}</td>
                      <td style={{ padding: '20px', textAlign: 'center', fontWeight: 500, color: 'var(--teal)' }}>{p.member}</td>
                      <td style={{ padding: '20px', textAlign: 'center' }}>
                        <Link to={getLocalizedPath(p.link, lang)} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'var(--teal)', textDecoration: 'none' }}>Details →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Note */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.12)', borderLeft: '4px solid var(--teal)', padding: '40px 36px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 24, fontStyle: 'italic' }}>
                "I joined Mana Hubs because the founders building here are exactly who Soundcheck was built to serve — international entrepreneurs entering new markets, cross-border operators, and the agencies and mentors who support them. The Member Rate isn't a discount, it's how we participate in the ecosystem we operate from."
              </p>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>Valter Klug</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Founder · Soundcheck Insights · Mana Hubs Member</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Ready to brief a product at Member Rate?</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to={getLocalizedPath('/contact', lang)} className="btn btn-white">Brief a Product</Link>
          <a href="https://calendly.com/valterklug/30min" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Or talk to Valter directly →
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
