import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const products = [
  {
    num: '01',
    for: 'International Brands · Market Entry',
    name: 'International Expansion Viability Report',
    desc: 'Decision-grade market entry intelligence for international brands. Proprietary CVE Score, competitive landscape, regulatory snapshot, distribution channel map, three strategic paths, and a 12-month roadmap. 100+ pages, white-labeled, in 14 days.',
    price: 'Suggested price: US$5k+',
    delivery: '14-day delivery · White-label included · 1 revision',
    featured: true,
    cta: { label: 'See Full Report Details →', to: '/expansion-report' },
    deliverables: [
      'CVE Score (Coefficient of Viability of Expansion) — 3-dimension weighted scoring (0 to 100)',
      'Executive Summary — 5 critical insights + 3 strategic paths with recommended entry mode',
      'Business & Brand Assessment — product-market fit, pricing architecture, positioning',
      'Market & Category Intelligence — TAM/SAM/SOM, Porter\'s Five Forces, competitive benchmarking, buyer landscape',
      'Strategic Entry & Growth Plan — 12-month roadmap with unit economics and go/no-go gates',
      'Risks & Watchpoints — scored, ranked, and mitigated',
      '100+ Page Report + Visual Executive Summary (white-labeled)',
    ],
    sample: {
      type: 'evc',
      score: '72%',
      verdict: 'Conditional Go · Strong Data Signals',
      bars: [['Market Fit', 80], ['Channel Access', 70], ['Brand Relevance', 75]],
    },
  },
  {
    num: '02',
    for: 'Entrepreneurs · Founders · Serial Entrepreneurs',
    name: 'Idea Validation Analysis',
    tagline: 'Know if your idea has a market before you spend a dollar building it.',
    desc: 'Fill out a 10-minute form describing your idea. Soundcheck\'s AI runs independent market research, analyzes the competition, sizes the opportunity, and estimates what your target customer would pay. You receive a full analysis and a one-page Summary Card in 48 hours.',
    price: 'US$799 per analysis',
    delivery: '48-hour delivery after form submission · Fully automated',
    cta: { label: 'Validate Your Idea →', to: '/idea-validation' },
    deliverables: [
      'Problem Validation — is this a Tier 1 problem with real market demand?',
      'Market Sizing — TAM, SAM, SOM for your target geography',
      'Competition Reality Check — who already solves this and where the whitespace is',
      'Customer & WTP Analysis — who would buy this and how much they\'d pay',
      'IVS Score + Next Steps — Idea Viability Score (0 to 100) and 3 specific actions',
    ],
    sample: {
      type: 'ivs',
      score: 68,
      tier: 'Worth Exploring',
      sub: 'Promising. Key uncertainties remain.',
      bars: [['Problem Validity', 80], ['Market Opportunity', 65], ['Competitive Whitespace', 50], ['Customer Demand Signals', 70], ['Idea Differentiation', 55]],
    },
  },
  {
    num: '03',
    for: 'New Companies · Setup Stage',
    name: 'Business Plan Development',
    desc: 'A complete, research-backed business plan for companies in setup or pre-launch — built for investor conversations, lender requirements, and operational clarity.',
    price: 'Suggested price: US$5k+',
    delivery: '14-day delivery · White-label included · 1 revision',
    deliverables: [
      'Market Analysis — category size, growth drivers, target segments, customer personas',
      'Competitive Landscape — direct competitors, positioning, differentiation strategy',
      'Go-To-Market Strategy — channel priorities, launch sequencing, acquisition strategy',
      'Revenue Projections Framework — 3-year model, conservative/base/optimistic scenarios',
      'Investor-Ready Narrative — problem, solution, market, traction, team, ask',
      'Full Document + Executive Pitch Deck',
    ],
  },
  {
    num: '04',
    for: 'Agencies · Consultancies · Marketing Depts',
    name: 'AI Virtual Focus Groups',
    desc: 'Test creative concepts, product ideas, pricing, and positioning with AI-generated personas that mirror your target audience. No recruiting. No scheduling. Delivered in days.',
    price: 'Persona Definition: US$3k · Focus Group Session: US$2k+',
    delivery: '1–7 day delivery · White-label included',
    deliverables: [
      '3–10 custom AI personas based on exact target demographics',
      'Moderated discussion transcript — no loudest-voice bias',
      'Executive summary with key findings and recommendations',
      'Persona-specific reactions — segment-level decision support',
      'Reusable persona panel — deploy again for future sessions',
    ],
    sample: {
      type: 'personas',
      personas: [
        { label: 'Persona A · Maria, 34 · Miami CPG Buyer', quote: '"The packaging looks premium but I\'d need to understand the ingredients story before I\'d try it."' },
        { label: 'Persona B · James, 28 · Health-Conscious Urban', quote: '"Price point feels right for the category. The brand story needs more."' },
      ],
    },
  },
  {
    num: '05',
    for: 'US Small & Mid-Size Businesses',
    name: 'US Growth Roadmap',
    tagline: 'Reignite growth with ranked moves, clear investment estimates, and a 90-day action plan.',
    desc: 'For B2B service companies and CPG brands that have stalled. Market analysis, competitive intelligence, whitespace identification, company differentiation audit, ranked growth levers with investment estimates, and a 90-day action plan. Two segments: B2B Services & Manufacturing, and Consumer Packaged Goods.',
    price: 'Suggested price: US$5k+',
    delivery: '14-day delivery · White-label included · 1 revision',
    cta: { label: 'See Full Report Details →', to: '/growth-roadmap' },
    deliverables: [
      'Market & Category Analysis — category size, growth trajectory, demand signals, channel dynamics',
      'Competitive Landscape — 5–10 competitors mapped in a competitive matrix with whitespace analysis',
      'Company Differentiation Analysis — honest audit of positioning, defensible claims, and repositioning angles',
      'Top 3–5 Growth Levers (Ranked) — each with hypothesis, investment required, expected ROI, and go/no-go gate',
      'Investment Estimates & ROI Framework — per-lever cost breakdown with conservative, base, and optimistic scenarios',
      '90-Day Action Plan — specific, assigned, measurable actions across 30/60/90-day milestones',
      'In-Depth Report (40–60+ pages) + Executive Presentation & Q&A',
    ],
    sample: {
      type: 'growth',
    },
  },
  {
    num: '06',
    for: 'Venture Capital Firms',
    name: 'Funding Vetting Analysis',
    desc: 'Two structured interviews — one with the founder team, one with a real customer. Soundcheck runs independent research, surfaces contradictions between both interviews, and delivers a one-page ADVANCE / CONDITIONAL / STOP verdict with the evidence behind it. Know which companies deserve your team\'s time before you spend it.',
    price: 'US$3,000 per company',
    delivery: '7-day delivery from completed interviews · Volume discounts available',
    cta: { label: 'See How It Works →', to: '/for-investors' },
    deliverables: [
      'Pre-Interview Research — independent market and competitive scan before any call',
      'Full Intelligence Report — 10-section evidence record from both interviews',
      'Signal Brief — one-page ADVANCE / CONDITIONAL / STOP verdict',
      'Open Questions — what your team should verify before proceeding',
      'Consultant Debrief — 30-minute call to walk through the findings',
    ],
    sample: {
      type: 'signal',
      verdict: 'ADVANCE',
      signals: [['Market Reality', 'Strong'], ['Revenue Quality', 'Strong'], ['No Deal-Killers', 'Flagged']],
    },
  },
]

function EvcSample({ data }) {
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Score
      </span>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 4 }}>{data.score}</div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.8)', marginBottom: 12 }}>{data.verdict}</div>
      {data.bars.map(([label, pct]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 130, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: 'var(--teal)', borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 28, textAlign: 'right' }}>{pct}%</div>
        </div>
      ))}
    </div>
  )
}

function SignalSample({ data }) {
  const colors = { Strong: 'var(--teal)', Flagged: '#D97706', Weak: 'var(--orange)' }
  const icons = { Strong: '●', Flagged: '◐', Weak: '○' }
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Signal Brief
      </span>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.8)', marginBottom: 4 }}>VERDICT:</div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28, fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: 14 }}>{data.verdict}</div>
      {data.signals.map(([label, rating]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: colors[rating] || 'var(--teal)', flexShrink: 0 }}>{icons[rating] || '●'}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', flex: 1 }}>{label}</div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, color: colors[rating] || 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{rating}</div>
        </div>
      ))}
      <Link to="/samples/signal-brief-advance" target="_blank" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--teal)', marginTop: 12, display: 'inline-block', textDecoration: 'none', borderBottom: '1px solid rgba(0,196,212,0.3)' }}>
        View Full Sample →
      </Link>
    </div>
  )
}

function IvsSample({ data }) {
  const barColor = (pct) => pct >= 70 ? 'var(--teal)' : pct >= 40 ? '#D97706' : 'var(--orange)'
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Idea Validation Analysis
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{data.score}</div>
        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.25)' }}>/ 100</div>
      </div>
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: 'var(--teal)', marginBottom: 2 }}>{data.tier}</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>{data.sub}</div>
      {data.bars.map(([label, pct]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 150, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: barColor(pct), borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 28, textAlign: 'right' }}>{pct}%</div>
        </div>
      ))}
      <Link to="/idea-validation#sample" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--teal)', marginTop: 12, display: 'inline-block', textDecoration: 'none', borderBottom: '1px solid rgba(0,196,212,0.3)' }}>
        View Full Sample Report →
      </Link>
    </div>
  )
}

function GrowthSample() {
  const levers = [
    ['Channel Optimization', 85, 'High'],
    ['Competitive Repositioning', 70, 'High'],
    ['Pricing Architecture', 65, 'Medium'],
    ['New Segment Penetration', 55, 'Medium'],
  ]
  return (
    <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '18px 20px', marginTop: 16 }}>
      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', display: 'block', marginBottom: 10 }}>
        Sample Output · Growth Levers (Ranked)
      </span>
      {levers.map(([label, impact, priority]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', width: 150, flexShrink: 0 }}>{label}</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
            <motion.div
              style={{ height: 3, background: priority === 'High' ? 'var(--teal)' : '#D97706', borderRadius: 2 }}
              initial={{ width: 0 }}
              whileInView={{ width: `${impact}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, color: priority === 'High' ? 'var(--teal)' : '#D97706', textTransform: 'uppercase', letterSpacing: '0.07em', width: 50, textAlign: 'right' }}>{priority}</div>
        </div>
      ))}
    </div>
  )
}

function PersonaSample({ data }) {
  return (
    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {data.personas.map(p => (
        <div key={p.label} style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid var(--orange)', padding: '12px 16px' }}>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 6 }}>{p.label}</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', lineHeight: 1.5 }}>{p.quote}</div>
        </div>
      ))}
    </div>
  )
}

export default function Products() {
  const [expanded, setExpanded] = useState(null)

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">Research Products</span>
          <h1 className="page-h1">Intelligence your agency deploys.<br />Results your clients remember.</h1>
          <p className="page-sub">Six fixed-scope products designed to be briefed, delivered, and deployed under your agency's brand — in as little as 7 days. You set the price for your clients.</p>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="prod-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {products.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.06}>
              <div style={{
                background: p.featured ? 'rgba(0,196,212,0.03)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${p.featured ? 'rgba(0,196,212,0.2)' : 'rgba(255,255,255,0.06)'}`,
                borderLeft: `3px solid ${p.featured ? 'var(--teal)' : 'transparent'}`,
                transition: 'border-color 0.2s',
              }}>
                {/* Product header row */}
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 120 }} className="prod-row">
                  {/* Left */}
                  <div style={{ padding: '28px 24px', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: 6 }}>{p.num}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{p.for}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', lineHeight: 1.25, marginBottom: p.tagline ? 6 : 16 }}>{p.name}</div>
                      {p.tagline && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, marginBottom: 16 }}>{p.tagline}</div>}
                    </div>
                    <div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 14px', marginBottom: 12 }}>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 400, color: '#fff', marginBottom: 3 }}>{p.price}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>{p.delivery}</div>
                      </div>
                      <Link to={p.cta?.to || '/contact'} className="btn btn-primary" style={{ fontSize: 12, padding: '10px 18px', display: 'inline-flex' }}>
                        {p.cta?.label || 'Brief This Product →'}
                      </Link>
                    </div>
                  </div>

                  {/* Right */}
                  <div style={{ padding: '28px 36px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>

                    {/* Toggle deliverables */}
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', padding: '8px 14px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 3, transition: 'all 0.2s' }}
                    >
                      <motion.span animate={{ rotate: expanded === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 12 }}>›</motion.span>
                      {expanded === i ? 'Hide' : 'View'} What's Delivered
                    </button>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ marginTop: 16 }}>
                            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 10 }}>What's Delivered</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                              {p.deliverables.map(d => (
                                <div key={d} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 12px', background: 'rgba(255,255,255,0.025)' }}>
                                  <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{d}</div>
                                </div>
                              ))}
                            </div>
                            {p.sample?.type === 'evc' && <EvcSample data={p.sample} />}
                            {p.sample?.type === 'ivs' && <IvsSample data={p.sample} />}
                            {p.sample?.type === 'signal' && <SignalSample data={p.sample} />}
                            {p.sample?.type === 'personas' && <PersonaSample data={p.sample} />}
                            {p.sample?.type === 'growth' && <GrowthSample />}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{`
          @media (max-width: 720px) {
            .prod-row { grid-template-columns: 1fr !important; }
            .prod-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .prod-section { padding: 60px 24px !important; }
          }
        `}</style>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Ready to brief your first product?</h2>
          <p className="cta-strip-sub">Tell us what you're working on. We'll match you to the right product and turnaround.</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-white">Brief a Product →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
