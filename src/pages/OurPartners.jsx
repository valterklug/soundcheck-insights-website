import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const partners = [
  {
    cat: 'Marketing Strategy · Fractional CMO',
    icon: '🎯',
    name: 'Valter Klug — Chameleon Collective',
    url: 'https://sambarock.us',
    urlLabel: 'sambarock.us',
    desc: 'If you need marketing leadership, brand strategy, US market expansion strategy, or a fractional CMO — Valter is the right conversation. He operates through Chameleon Collective and leads engagements directly. 25+ years across Brazil, the UK, and the US.',
    when: 'Marketing leadership gaps, brand positioning for US launch, fractional CMO, campaign strategy, international brand expansion from Brazil or LATAM to the US.',
    featured: true,
  },
  {
    cat: 'US Business Setup · Legal & Admin',
    icon: '🏛️',
    name: 'Oxford USA — Fast Track',
    url: 'https://oxfordusa.com',
    urlLabel: 'oxfordusa.com',
    desc: 'For Brazilian or Latin American companies that need to establish a legal entity in the United States — corporate structure, tax planning, bank accounts, and immigration support.',
    when: 'Entity setup, tax planning, US bank accounts, immigration support, business registration.',
  },
  {
    cat: 'Trade · Logistics · Customs',
    icon: '🚢',
    name: 'ITS Company',
    url: 'https://itscompany.com.br',
    urlLabel: 'itscompany.com.br',
    desc: 'For brands moving product between Brazil and the US — import/export operations, customs clearance, freight management, and supply chain logistics. The operational backbone behind market entry.',
    when: 'Import/export of physical goods, customs clearance, freight management, supply chain setup.',
  },
  {
    cat: 'Fulfillment · 3PL · Warehousing',
    icon: '📦',
    name: 'Connection Group USA',
    url: 'https://www.connectiongroupusa.com',
    urlLabel: 'connectiongroupusa.com',
    desc: 'For international companies that need hands-on fulfillment and logistics operations in the US — warehousing, order fulfillment, shipping, and 3PL services. While ITS handles the strategic planning and customs side, Connection Group is the operational partner that stores, picks, packs, and ships your product once it lands.',
    when: 'US warehousing and storage, order fulfillment, 3PL operations, pick-and-pack, domestic shipping, e-commerce logistics.',
  },
  {
    cat: 'Franchise Expansion',
    icon: '🔗',
    name: 'Global Franchise',
    url: 'https://globalfranchise.com.br',
    urlLabel: 'globalfranchise.com.br',
    desc: 'For brands that want to grow through a franchise model internationally — franchise structure design, legal framework, franchisee recruitment, and market launch strategy across multiple geographies.',
    when: 'International franchise expansion, franchise model design, franchisee recruitment, multi-market franchise launch.',
  },
  {
    cat: 'CPG Retail · US Distribution',
    icon: '🛒',
    name: 'Go To Market BD',
    url: 'https://gotomarketbd.com',
    urlLabel: 'gotomarketbd.com',
    desc: 'For Brazilian CPG brands that need a path into US retail distribution — broker relationships, shelf placement strategy, buyer introductions, and retail channel development across major US channels.',
    when: 'US retail shelf placement, distributor and broker relationships, CPG distribution strategy.',
  },
  {
    cat: 'Market Intelligence · Research',
    icon: '📊',
    name: 'Soundcheck Insights (You\'re here)',
    url: null,
    urlLabel: 'soundcheckinsights.com',
    desc: 'For brands or agencies that need market research, expansion viability analysis, competitive intelligence, or AI-powered customer insights — this is the right place.',
    when: 'Market entry viability, competitive landscape research, business plan development, AI virtual focus groups, funding vetting.',
    you: true,
  },
]

export default function OurPartners() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">Our Partner Network</span>
          <h1 className="page-h1">We'll point you to<br />the right expert.</h1>
          <p className="page-sub">Soundcheck Insights focuses on market intelligence and research. If what you need falls outside that scope, here are trusted partners we work with directly — each a specialist in their field.</p>
          <div style={{ background: 'rgba(0,196,212,0.06)', border: '1px solid rgba(0,196,212,0.15)', padding: '14px 18px', marginTop: 24, maxWidth: 640, borderLeft: '3px solid var(--teal)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              <strong style={{ color: '#fff' }}>For brands and businesses:</strong> If you're not an agency but need help entering the US market, this page will help you find the right expert faster.
            </span>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label" style={{ marginBottom: 28 }}>Find the Right Partner for Your Challenge</span>
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
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: 6 }}>When to reach out</span>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, marginBottom: 14 }}>{p.when}</div>
                    {p.you ? (
                      <Link to="/contact" className="text-link">Start a brief →</Link>
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
          <h2 className="cta-strip-h2">Not sure which partner you need?</h2>
          <p className="cta-strip-sub">Send us a message and describe your situation. We'll tell you honestly whether Soundcheck is the right fit — and if not, we'll point you directly to the right person. No runaround, no sales pitch.</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-white">Talk to the Team →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
