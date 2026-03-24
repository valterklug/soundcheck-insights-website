import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const signals = [
  { num: '1', name: 'Market Reality', desc: 'Is the opportunity real and is the timing right now — not in theory?' },
  { num: '2', name: 'Revenue Quality', desc: 'Is revenue sticky, recurring, and growing? NRR direction cross-validated by the customer.' },
  { num: '3', name: 'Defensibility', desc: 'Is there something structural that takes 18+ months for a well-funded rival to copy?' },
  { num: '4', name: 'Founder Clarity', desc: 'Does the CEO know their numbers, understand their losses, and acknowledge what\'s broken?' },
  { num: '5', name: 'No Deal-Killers', desc: 'Any structural blockers hiding below the pitch — cap table, concentration, litigation?' },
  { num: '6', name: 'Exit Logic', desc: 'Is there a realistic return path at this valuation? Named acquirers, specific rationale.' },
]

const steps = [
  {
    num: '01',
    title: 'You brief us — not the company.',
    body: 'You tell us which company you\'re evaluating. We prepare the pre-interview market and competitive research independently, without any input from the company. This becomes the baseline we test against in both interviews.',
    meta: '~15 min on your end · AI-generated research brief · no company contact yet',
  },
  {
    num: '02',
    title: 'Interview 1 — Leadership Team (60 min)',
    body: 'A structured conversation with the founder/CEO and any available CFO or Head of Sales. Five blocks: market insight, sales and customer intelligence, financials, the moat, and deal structure. Transcript processed and analyzed against our pre-research.',
    meta: 'Scheduled by you · Facilitated by Soundcheck · Recorded with consent',
  },
  {
    num: '03',
    title: 'Interview 2 — A Real Customer (45–60 min)',
    body: 'We ask the company for 5 customer names. We choose one — mid-list, not their most obvious advocate. An independent call covering product centrality, usage reality, NRR signals, and competitive awareness. This is where contradictions surface.',
    meta: 'Customer selected by us · Company doesn\'t know which customer we called',
  },
  {
    num: '04',
    title: 'Full Intelligence Report + Signal Brief',
    body: 'The AI generates a 10-section evidence record from both interviews. The consultant adds their observation notes and signs the Signal Brief — a one-page ADVANCE / CONDITIONAL / STOP verdict with the evidence and the 3 questions your team should answer next.',
    meta: 'Signal Brief: primary deliverable · Full Report: available on request',
  },
]

const samples = [
  {
    verdict: 'ADVANCE',
    color: 'var(--teal)',
    bg: 'rgba(0,196,212,0.04)',
    border: 'rgba(0,196,212,0.15)',
    company: 'Vero Analytics',
    investor: 'Evaluated for Meridian Ventures',
    sector: 'B2B SaaS · Supply Chain Intelligence',
    href: '/samples/signal-brief-advance.html',
  },
  {
    verdict: 'CONDITIONAL',
    color: '#FBBF24',
    bg: 'rgba(217,119,6,0.04)',
    border: 'rgba(217,119,6,0.15)',
    company: 'Fieldwire Health',
    investor: 'Evaluated for Calloway Health Ventures',
    sector: 'Healthcare SaaS · Clinical Workflow Automation',
    href: '/samples/signal-brief-conditional.html',
  },
  {
    verdict: 'STOP',
    color: '#F87171',
    bg: 'rgba(232,71,42,0.04)',
    border: 'rgba(232,71,42,0.15)',
    company: 'Nexpath Commerce',
    investor: 'Evaluated for Irongate Capital',
    sector: 'E-Commerce SaaS · Checkout Optimization',
    href: '/samples/signal-brief-stop.html',
  },
]

const faqs = [
  {
    q: 'Does the company know they\'re being evaluated?',
    a: 'They know they\'re participating in a structured market intelligence process on behalf of an investor. We don\'t identify the investor firm. The company is told upfront that this includes an independent customer interview — they provide 5 names, we choose who we call.',
  },
  {
    q: 'What if the company refuses the customer interview?',
    a: 'A refusal gets noted in the Signal Brief and flagged as a transparency concern. It shifts the verdict toward CONDITIONAL at best. A company that won\'t let a customer speak independently is telling you something.',
  },
  {
    q: 'How is this different from what our analysts already do in round one?',
    a: 'Your analysts probably have some version of this conversation informally. Soundcheck makes it structured, consistent, and documented — with a contradiction log that catches discrepancies across two separate calls, and a one-page output that travels cleanly to IC without a 20-minute briefing.',
  },
  {
    q: 'Can we run this without the company knowing we\'re evaluating them?',
    a: 'No. Both interviews require the company\'s participation and consent to record. The framing is neutral — "structured investment intelligence process" — but they are aware. The value comes from the structured extraction and the independent customer source, not from surprise.',
  },
  {
    q: 'What\'s the turnaround if we need it faster?',
    a: 'Standard is 7 business days from the date both interviews are completed. Rush delivery (3 business days) is available for an additional US$1,000 — subject to availability. Contact us before briefing to confirm.',
  },
  {
    q: 'Do you offer volume pricing?',
    a: 'Yes. Firms running 5 or more evaluations per quarter qualify for volume pricing. We also offer white-label delivery — the Full Intelligence Report and Signal Brief under your firm\'s branding. Talk to us about what fits your pipeline volume.',
  },
]

export default function ForInvestors() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <PageWrapper>
      {/* Section 1 — Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">For Venture Capital Firms</span>
          <h1 className="page-h1">Your pipeline is full.<br />Your team's availability isn't.</h1>
          <p className="page-sub" style={{ maxWidth: 600 }}>
            The average VC firm sees hundreds of deals a year. Most of the ones that get filtered don't get filtered early enough.
            Soundcheck gives you a structured, documented triage verdict — ADVANCE, CONDITIONAL, or STOP — before your team commits meaningful hours to a company that shouldn't make it past round one.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/contact" className="btn btn-primary">Request an Engagement →</Link>
            <a href="#samples" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>View Sample Signal Briefs →</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['7', 'BUSINESS DAYS', 'from interviews to Signal Brief'], ['2', 'INTERVIEWS', 'founder team + real customer, independently'], ['US$3,000', '', 'per company evaluated']].map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 2 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">The real cost</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              Most early filtering happens informally. That's the problem.
            </h2>
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
                Pitch decks are prepared for the best possible impression. Founders know how to answer standard questions. Reference calls go through the company's own contacts. By the time you discover the revenue isn't as clean as the deck suggests, or that the founder can't explain why they're losing deals, or that their most loyal-sounding customer is actively evaluating alternatives, your associates have already spent 15+ hours.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                Soundcheck runs two structured interviews independently — one with the leadership team, one with a real customer we select from a list the company provides. We find where their stories don't match. You get the verdict before your team invests.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 48 }} className="offer-grid">
            {[
              ['What we replace', 'The unstructured first-round conversations your analysts are already having — just structured, documented, and with an independent customer source added.'],
              ['What we don\'t replace', 'Full due diligence. Legal review. Financial audits. Technical assessments. Soundcheck is the filter before the filter — not the close.'],
              ['What it costs to skip this', '15–20 associate hours per company that fails in round two. Multiply that by your deal flow volume.'],
            ].map(([title, text]) => (
              <StaggerItem key={title}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      {/* Section 3 — How It Works */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Four steps. Seven days.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              What happens between briefing and verdict.
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }} className="step-row">
                  <div style={{ padding: '28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28, fontWeight: 300, color: 'var(--teal)' }}>{s.num}</span>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{s.title}</div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 12 }}>{s.body}</p>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>{s.meta}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{"@media(max-width:720px){.step-row{grid-template-columns:60px 1fr!important}}"}</style>
      </section>

      {/* Section 4 — The 6 Signals */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">What we test</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              Six signals. Every engagement.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Every engagement tests the same six signals — regardless of company stage, sector, or business model. Every rating is backed by at least two sourced observations, one from each interview.
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {signals.map(s => (
              <StaggerItem key={s.num}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'var(--teal)' }}>{s.num}</span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff' }}>{s.name}</span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Verdict Logic Strip */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: 32, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '28px 32px' }}>
              {[
                ['ADVANCE', 'var(--teal)', '4 or more signals Strong. No structural blockers. Continue to deeper diligence.'],
                ['CONDITIONAL', '#FBBF24', '3 Strong signals + one named condition to verify before advancing.'],
                ['STOP', 'var(--orange)', 'Any single structural blocker confirmed. Specific finding, named and sourced.'],
              ].map(([label, color, text]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: label !== 'STOP' ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, color, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, width: 110, paddingTop: 2 }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5 — Sample Signal Briefs */}
      <section id="samples" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">See the output</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              Three companies. Three verdicts. Real format.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48 }}>
              These are sample Signal Briefs — fictional companies, real format. Each one shows a different verdict: ADVANCE, CONDITIONAL, and STOP. Click through to see exactly what your team receives at the end of each engagement.
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {samples.map(s => (
              <StaggerItem key={s.verdict}>
                <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderTop: `3px solid ${s.color}`, padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.color, marginBottom: 16 }}>{s.verdict}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{s.company}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginBottom: 10 }}>{s.investor}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{s.sector}</div>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: s.color, textDecoration: 'none', borderBottom: `1px solid ${s.border}`, paddingBottom: 2, marginTop: 'auto', display: 'inline-block', width: 'fit-content' }}>
                    View Sample →
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 6 — Where Soundcheck Fits */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Built for your deal flow</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              Where Soundcheck fits in your process.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Early-Stage Funds</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  You move fast and evaluate volume. Soundcheck fits between initial screening and the first internal deep-dive — the moment when a company passes the pitch test but hasn't been stress-tested by anyone outside the firm.
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Best for:</div>
                {['Pre-seed through Series B triage', 'Deals sourced outside your core network', 'Markets where your team lacks deep domain familiarity', 'Verifying NRR and retention claims before committing associate hours'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Growth-Stage Funds</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  At Series B and beyond, the pitch gets more polished but the fundamentals don't always keep up. Soundcheck surfaces discrepancies between what the founder says and what a real customer confirms, before your partners commit time.
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Best for:</div>
                {['Series B+ evaluation and follow-on decisions', 'Deals where the deck looks strong but references feel curated', 'Sectors outside your partners\' primary expertise', 'First-pass validation before engaging the full diligence team'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Common questions</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              Straight answers.
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '20px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14,
                    }}
                  >
                    <motion.span animate={{ rotate: openFaq === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 14, color: 'var(--teal)', flexShrink: 0 }}>›</motion.span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>{f.q}</span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 24px 20px 48px' }}>
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Your next deal is already in your pipeline.<br />Find out if it deserves your team's time.</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="btn btn-white">Request an Engagement →</Link>
          <a href="#samples" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Or view sample Signal Briefs first →</a>
        </div>
      </section>
    </PageWrapper>
  )
}
