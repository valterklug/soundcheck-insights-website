import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const products = [
  {
    num: '01',
    for: 'International Brands · Market Entry',
    name: 'Market Summary & International Expansion Assessment',
    desc: 'Research-grade US market entry intelligence for established international brands. Proprietary EVC Score, competitive landscape, regulatory snapshot, distribution channel map, and a strategic roadmap — all under your brand in 14 days.',
    price: 'Suggested price: US$5k+',
    delivery: '14-day delivery · White-label included · 1 revision',
    featured: true,
    deliverables: [
      'EVC Score (Expansion Viability Coefficient) — 10-dimension proprietary scoring',
      'US Market Overview & Sizing — category, demand, and regional dynamics',
      'Competitive Landscape Map — direct, indirect, white-space opportunities',
      'Regulatory & Compliance Snapshot — labeling, category requirements',
      'Distribution Channel Map — retail, DTC, foodservice, Amazon, broker',
      'Strategic Timeline — 12-month roadmap with investment estimates',
      '40+ Page Report + White-Label Executive Deck',
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
    for: 'Founders · Pre-Launch',
    name: 'Idea Validation',
    desc: 'Market intelligence for founders testing a business concept before committing capital. A go/no-go recommendation grounded in real data — delivered in 7 days.',
    price: 'Suggested price: US$2.5k+',
    delivery: '7-day delivery · White-label included',
    deliverables: [
      'Market Demand Signals — search volume, consumer interest, category trends',
      'Competitive Gap Analysis — who\'s doing this, how well, and where white space exists',
      'Target Customer Profile — demographics, behaviors, willingness-to-pay signals',
      'Opportunity Sizing Estimate — addressable market and Year 1–3 revenue range',
      'Go / No-Go Recommendation — with key conditions for a successful launch',
      '1-Page Brief + Executive Summary',
    ],
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
    price: 'Suggested price: US$1.5k+/session',
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
    for: 'VC · PE · Investment',
    name: 'Funding Vetting',
    desc: 'Intelligence assessment for VC and PE firms evaluating investment targets. Proprietary Funding Viability Score with dimensional analysis, red flags, and IC-ready deck.',
    price: 'Suggested price: US$5k+/report',
    delivery: '14-day delivery · Volume discounts available',
    deliverables: [
      'Funding Viability Score (0–100%) — Pass / High Risk / Conditional Invest / Strong Invest',
      '5-Dimension Analysis — Market Opportunity, Competitive Moat, Operational Health, Revenue Quality, Investment Risk',
      'Red Flag Assessment — risks, assumptions, and deal-breaker conditions',
      'Competitive Landscape Map for target company',
      '30–50 Page Report + IC-Ready Deck',
    ],
    sample: {
      type: 'evc',
      score: '72%',
      verdict: 'Conditional Invest',
      bars: [['Market Opportunity', 81], ['Competitive Moat', 68], ['Revenue Quality', 70]],
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
          <p className="page-sub">Five fixed-scope products designed to be briefed, delivered, and deployed under your agency's brand — in as little as 7 days. You set the price for your clients.</p>
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
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>{p.name}</div>
                    </div>
                    <div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 14px', marginBottom: 12 }}>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 400, color: '#fff', marginBottom: 3 }}>{p.price}</div>
                        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>{p.delivery}</div>
                      </div>
                      <Link to="/contact" className="btn btn-primary" style={{ fontSize: 12, padding: '10px 18px', display: 'inline-flex' }}>
                        Brief This Product →
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
                            {p.sample?.type === 'personas' && <PersonaSample data={p.sample} />}
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
