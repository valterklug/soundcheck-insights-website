import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import LeadGate from '../components/LeadGate'

const resources = [
  {
    type: 'Whitepaper',
    title: 'The Agency Research Stack: Adding Intelligence Capability Without Hiring',
    desc: 'How boutique agencies are adding research capabilities through white-label partnerships — and the business model math behind the decision.',
    meta: '2026 · Free',
    gated: true,
    pdfUrl: '/resources/whitepaper-agency-research-stack.pdf',
  },
  {
    type: 'Guide',
    title: 'How to Brief a Market Research Project',
    desc: 'A practical briefing template for agency account teams. Captures everything a research partner needs to deliver decision-grade output without back-and-forth.',
    meta: 'Available Now · Free',
    gated: true,
    pdfUrl: '/resources/guide-briefing-template.pdf',
  },
  {
    type: 'Article',
    title: 'The 5 Most Expensive Assumptions Brands Make About the US Market',
    desc: "A practitioner's view on why smart brands fail their US entry — and what agencies can do to protect their clients before the launch.",
    meta: 'March 2026',
    articleUrl: '/articles/us-market-assumptions',
  },
  {
    type: 'Market Briefing',
    title: 'Q1 2026 US CPG Market Intelligence Briefing',
    desc: 'Category velocity, shelf trends, channel shifts, and white-space signals for agencies working with CPG brands in the US market.',
    meta: 'Q1 2026 · Free',
    gated: true,
    pdfUrl: '/resources/briefing-q1-2026-cpg.pdf',
  },
  {
    type: 'Whitepaper',
    title: 'AI + Human Research: Why Neither Works Alone',
    desc: 'A methodological breakdown of where AI aggregation excels, where it fails without human validation, and what "decision-grade" means for client work.',
    meta: 'Q1 2026 · Free',
    gated: true,
    pdfUrl: '/resources/whitepaper-ai-human-research.pdf',
  },
  {
    type: 'Guide',
    title: 'Selling the Research Phase: A Conversation Guide for Agency BD',
    desc: 'How to position a paid research diagnostic as the natural first step in any strategy engagement — with objection handling and pricing framing.',
    meta: 'Available Now · Free',
    gated: true,
    pdfUrl: '/resources/guide-selling-research.pdf',
  },
]

const typeColors = {
  Whitepaper: 'var(--teal)',
  Guide: 'var(--teal-2)',
  Article: 'var(--orange)',
  'Market Briefing': '#9B8FFF',
}

export default function Resources() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('idle')
  const [expandedCard, setExpandedCard] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubStatus('submitting')
    try {
      await fetch('https://formsubmit.co/ajax/info@soundcheckinsights.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: '[Soundcheck] Newsletter subscription',
          _template: 'table',
          type: 'newsletter',
        }),
      })
      setSubStatus('success')
      setEmail('')
    } catch {
      setSubStatus('success')
      setEmail('')
    }
  }

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">Resources · For Agencies & Consultancies</span>
          <h1 className="page-h1">Intelligence you can use<br />before you brief us.</h1>
          <p className="page-sub">Whitepapers, guides, and briefings on market research methodology, US market entry, and competitive intelligence — written for agency strategists and consultants.</p>
        </div>
      </section>

      {/* Featured whitepaper */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(232,71,42,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, alignItems: 'start' }} className="feat-grid">
          <FadeIn>
            <span className="sc-label sc-label-orange">Featured Whitepaper</span>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,71,42,0.1)', border: '1px solid rgba(232,71,42,0.2)', padding: '5px 12px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 16, borderRadius: 3 }}>
              Whitepaper · 18 pages
            </div>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.4rem,2.8vw,2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 12 }}>
              Why Research is the First Investment in Any US Market Entry
            </h2>
            <div style={{ display: 'flex', gap: 16, fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 18 }}>
              <span>Q1 2026</span><span>12 min read</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
              The five most common ways brands waste capital entering the US market — and how agencies can position research as a non-optional first step in every expansion engagement. Includes the Expansion Viability framework and a client conversation guide.
            </p>
            <LeadGate pdfUrl="/resources/featured-whitepaper-us-market-entry.pdf" title="Why Research is the First Investment in Any US Market Entry" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '28px' }}>
              <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: 14 }}>Table of Contents</span>
              {[
                ['01', 'The five capital-destroying assumptions about US market entry'],
                ['02', 'Why timing is as important as positioning — and how to measure it'],
                ['03', 'The competitive landscape problem: who\'s really in the market'],
                ['04', 'How agencies can make research a billable first step, not a cost'],
                ['05', 'The EVC framework: a single score for go/no-go decisions'],
                ['06', 'Client conversation guide: how to sell the research phase'],
              ].map(([n, t]) => (
                <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.2)', flexShrink: 0, paddingTop: 1 }}>{n}</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{`@media(max-width:800px){.feat-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}`}</style>
      </section>

      {/* Resources grid */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">All Resources</span>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 28 }} className="res-grid">
            {resources.map((r, i) => (
              <StaggerItem key={r.title}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `2px solid ${typeColors[r.type] || 'var(--teal)'}`, padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: typeColors[r.type] || 'var(--teal)', display: 'block', marginBottom: 12 }}>{r.type}</span>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 400, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{r.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{r.desc}</p>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>{r.meta}</div>

                  {/* Article link */}
                  {r.articleUrl && (
                    <Link to={r.articleUrl} className="text-link">Read article →</Link>
                  )}

                  {/* Gated download */}
                  {r.gated && (
                    <>
                      <button
                        onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                        className="text-link"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        {expandedCard === i ? 'Close' : 'Download'} →
                      </button>
                      {expandedCard === i && (
                        <div style={{ marginTop: 12 }}>
                          <LeadGate pdfUrl={r.pdfUrl} title={r.title} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{`@media(max-width:900px){.res-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Newsletter */}
      <section style={{ background: 'var(--orange)', padding: '80px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="nl-section">
        <FadeIn>
          <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: 14 }}>Monthly Intelligence Briefing</span>
          <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 14 }}>
            Get our monthly market intelligence briefing.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
            Category shifts, research methodology updates, and competitive intelligence signals — one email per month, written for agency strategists.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          {subStatus === 'success' ? (
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '20px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, color: '#fff', lineHeight: 1.6 }}>
              ✓ You're on the list. First briefing arrives next month.
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>Subscribe · Monthly · Free</div>
              <div style={{ display: 'flex', gap: 0 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@agency.com"
                  required
                  style={{ flex: 1, background: '#fff', border: 'none', color: '#111', fontFamily: 'Inter, sans-serif', fontSize: 14, padding: '14px 16px' }}
                />
                <button type="submit" disabled={subStatus === 'submitting'} style={{ background: 'var(--navy)', color: '#fff', border: 'none', padding: '14px 22px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  {subStatus === 'submitting' ? 'Subscribing…' : 'Subscribe →'}
                </button>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 10 }}>Monthly. No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </FadeIn>
        <style>{`@media(max-width:768px){.nl-section{grid-template-columns:1fr!important;gap:40px!important;padding:60px 24px!important}}`}</style>
      </section>
    </PageWrapper>
  )
}
