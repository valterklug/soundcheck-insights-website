import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

/* ── REPORT SECTIONS ─────────────────────────────────────────────── */
const reportSections = [
  {
    num: '1',
    title: 'Executive Summary',
    sub: 'The decision page.',
    items: [
      'Business snapshot: what you sell, your current scale, channels, and why growth has stalled.',
      'Top 3–5 Growth Moves ranked by impact and feasibility, each with expected ROI range.',
      'Clear investment estimates: what each move costs, what it returns, and when.',
      'A recommended starting point backed by market evidence and your competitive position.',
    ],
  },
  {
    num: '2',
    title: 'Market & Category Analysis',
    sub: 'Where the opportunity actually sits.',
    items: [
      'Category size, growth trajectory, and demand signals in your operating geography.',
      'Customer segmentation: who buys, how often, what triggers switching, and what they value.',
      'Channel dynamics: which channels are growing, which are saturating, and where margin lives.',
      'Regulatory or structural shifts creating new openings or closing old ones.',
    ],
  },
  {
    num: '3',
    title: 'Competitive Landscape',
    sub: 'Who you\'re really competing with.',
    items: [
      '5–10 primary and secondary competitors identified through market research.',
      'Competitive matrix: positioning, pricing, channel presence, strengths, and vulnerabilities.',
      'Whitespace analysis: 2–3 genuine gaps where demand exists but supply is weak or absent.',
      'Threat assessment: which competitors are moving, where, and how fast.',
    ],
  },
  {
    num: '4',
    title: 'Company Differentiation Analysis',
    sub: 'What makes you different — and what doesn\'t.',
    items: [
      'Honest assessment of your current positioning relative to direct competitors.',
      'Differentiation audit: which claims hold up under scrutiny and which are table stakes.',
      'Customer perception signals: what your market actually values vs. what you\'re selling.',
      'Repositioning opportunities: angles that are defensible, provable, and underserved.',
    ],
  },
  {
    num: '5',
    title: 'Growth Levers & Strategic Recommendations',
    sub: 'What to do, in what order, and why.',
    items: [
      'Top 3–5 growth levers ranked by expected impact, investment required, and time to results.',
      'Each lever includes: hypothesis, target metric, resources needed, expected outcome range, and a go/no-go gate.',
      'Channel-specific tactics: where to double down, where to pull back, and where to experiment.',
      'Pricing and packaging opportunities: adjustments that unlock revenue without new customer acquisition.',
    ],
  },
  {
    num: '6',
    title: 'Investment Estimates & ROI Framework',
    sub: 'What it costs. What it returns.',
    items: [
      'Per-lever investment breakdown: marketing spend, operational cost, technology, and people.',
      'Conservative, base, and optimistic return scenarios for each recommended move.',
      'Payback period estimates and break-even thresholds.',
      'Budget allocation framework: how to distribute investment across levers for maximum impact.',
    ],
  },
  {
    num: '7',
    title: 'Action Plan & Next Steps',
    sub: 'Your 90-day roadmap.',
    items: [
      '30 Days: 3 immediate actions — specific, assigned, and measurable.',
      '60 Days: 3 build actions moving from setup to execution.',
      '90 Days: 3 scale actions producing your first measurable growth signals.',
      'KPIs to track, decisions required from leadership, and the single metric that matters most at Day 30.',
    ],
  },
  {
    num: '8',
    title: 'Assumptions & Gaps Log',
    sub: 'Full transparency on what we know and what we estimated.',
    items: [
      'Every assumption or proxy used in the analysis, logged with rationale.',
      'Why the data point is missing, the proxy used, the source, confidence level, and its impact on recommendations.',
    ],
  },
]

/* ── SEGMENT DATA ────────────────────────────────────────────────── */
const segments = [
  {
    id: 'b2b',
    label: 'B2B Services & Manufacturing',
    tagline: 'For businesses where bookings fluctuate, no-shows erode margins, and marketing spend doesn\'t translate to demand.',
    icon: '🏭',
    color: 'var(--teal)',
    painPoints: [
      'Revenue fluctuates month to month with no clear pattern',
      'Marketing spend isn\'t converting — you\'re spending but not growing',
      'No-shows and cancellations erode margins unpredictably',
      'You know you need to grow but don\'t know which lever to pull first',
    ],
    deliverables: [
      'Top 3–5 Growth Moves (Ranked) — prioritized by impact and feasibility for your specific business',
      'Clear Investment Estimates — what each move costs, what it returns, and when',
      'Reality Check (Competitive Benchmark) — how you stack up and where the whitespace is',
      'Next-Week Action Plan — specific, assigned actions you can start immediately',
    ],
    examples: 'Home services, B2B contractors, healthcare practices, professional services, local manufacturing, fitness and wellness studios, specialty trades.',
  },
  {
    id: 'cpg',
    label: 'Consumer Packaged Goods',
    tagline: 'For CPG brands where channels are active but growth is flat — Amazon, retail, and DTC working in pieces but not compounding.',
    icon: '📦',
    color: 'var(--orange)',
    painPoints: [
      'Amazon, retail, and DTC are all active — but none are scaling',
      'Channels work in pieces but don\'t compound into real growth',
      'Category is competitive and shelf space is getting harder to hold',
      'You\'re spread across channels without a clear priority framework',
    ],
    deliverables: [
      'Top 3–5 Growth Moves (Ranked) — prioritized by category dynamics and channel opportunity',
      'Clear Investment Estimates — per-channel investment with expected return ranges',
      'Competitive and Category Reality Check — where you win, where you don\'t, and why',
      'Channel Focus and Scaling Plan — which channels to double down on and which to deprioritize',
    ],
    examples: 'Food and beverage brands, health and beauty, supplements, household products, pet products, specialty consumer goods.',
  },
]

const principles = [
  { title: 'Decision-grade, not forensic', desc: 'Public sources and lightweight proxies for 80/20 answers. Confidence labeled on every major claim: HIGH, MED, or LOW.' },
  { title: 'Evidence first', desc: 'Every market claim requires a data point, benchmark, or precedent with source name and date.' },
  { title: 'Built for action', desc: 'Every section ends with what to do, not just what we found. Recommendations are specific, sequenced, and costed.' },
  { title: 'Honest assessment', desc: 'If a move won\'t pay back fast enough, we\'ll say so. If your differentiation doesn\'t hold up, you\'ll know.' },
  { title: 'Model-first logic', desc: 'Your business model is identified first. Every recommendation is calibrated to how you actually sell.' },
  { title: 'Full transparency', desc: 'Every assumption, proxy, and estimation is logged. You know exactly what\'s proven and what\'s inferred.' },
]

const faqs = [
  {
    q: 'What information do you need from us to start?',
    a: 'We send you a structured intake form covering your product or service line, current revenue and channels, competitive landscape as you see it, and growth goals. Most clients complete it in 30 to 45 minutes. If anything is missing, we proceed using secondary research and proxy benchmarks, and log every assumption explicitly in the report.',
  },
  {
    q: 'How is this different from hiring a consultant?',
    a: 'A consultant gives you one opinion and charges monthly. This delivers a structured, evidence-based growth roadmap with ranked moves, investment estimates, and an action plan — in 14 days, at a fixed price. Every recommendation is sourced, not just experienced. And you get the full methodology, not a black box.',
  },
  {
    q: 'Is this only for US-based businesses?',
    a: 'The core methodology works for any geography, but our deepest data coverage is in the US market. For US-based small and mid-size businesses, we have the strongest secondary data access and competitive intelligence. International businesses operating in the US are also a strong fit.',
  },
  {
    q: 'What if we already know our competitors?',
    a: 'Good — that saves time on the intake. But most businesses underestimate their competitive set. We independently identify 5–10 competitors through market research, which often surfaces indirect competitors or emerging threats that weren\'t on your radar. The competitive matrix is one of the most valued sections.',
  },
  {
    q: 'Can our agency white-label this and deliver it to our client?',
    a: 'Yes. The report is designed for white-label delivery. We provide it under your brand, your cover page, your agency name. Your client never sees Soundcheck Insights unless you want them to.',
  },
  {
    q: 'What do we get at the end?',
    a: 'Two deliverables: a full In-Depth Viability Report (40–60+ pages, .docx, white-labeled) and an Executive Presentation for leadership or board conversations. Both are delivered within 14 days. One revision round is included.',
  },
]

export default function GrowthRoadmap() {
  const [openFaq, setOpenFaq] = useState(null)
  const [openSection, setOpenSection] = useState(null)
  const [activeSegment, setActiveSegment] = useState('b2b')

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Product Deep-Dive · US Growth Roadmap</span>
          <h1 className="page-h1">Reignite Your Business Growth<br />with a Clear, Evidence-Based Roadmap</h1>
          <p className="page-sub" style={{ maxWidth: 660 }}>
            The Soundcheck US Growth Roadmap is built for small and mid-size businesses that have stalled. Market analysis, competitive intelligence, whitespace identification, ranked growth levers, investment estimates, and a 90-day action plan — delivered in 14 days.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/contact" className="btn btn-primary">Brief This Report →</Link>
            <a href="#segments" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>See Both Segments →</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['40–60+', 'PAGES', 'sourced research and strategy'], ['14', 'DAYS', 'from intake to delivery'], ['US$5k+', '', 'white-label included']].map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Segments */}
      <section id="segments" style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Two segments. One methodology.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              Built for how your business actually works.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 36, maxWidth: 680 }}>
              A B2B service company and a CPG brand face different growth blockers. The research methodology is the same — market analysis, competitive intelligence, whitespace identification, growth levers — but the lens, the data sources, and the recommendations are calibrated to your business model.
            </p>
          </FadeIn>

          {/* Segment toggle */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
              {segments.map(seg => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    background: activeSegment === seg.id ? `${seg.color}12` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${activeSegment === seg.id ? `${seg.color}44` : 'rgba(255,255,255,0.06)'}`,
                    borderTop: `3px solid ${activeSegment === seg.id ? seg.color : 'transparent'}`,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <span style={{ fontSize: 18 }}>{seg.icon}</span>
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: activeSegment === seg.id ? '#fff' : 'rgba(255,255,255,0.5)' }}>{seg.label}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{seg.tagline}</div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active segment detail */}
          {segments.filter(s => s.id === activeSegment).map(seg => (
            <FadeIn key={seg.id}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
                {/* Pain points */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: seg.color, marginBottom: 16 }}>The Problem</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>This report is built for you if:</div>
                  {seg.painPoints.map(p => (
                    <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 4, height: 4, background: seg.color, borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{p}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 20, fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', lineHeight: 1.5 }}>
                    <strong style={{ color: 'rgba(255,255,255,0.4)' }}>Examples:</strong> {seg.examples}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '32px 28px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: seg.color, marginBottom: 16 }}>What You Get</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>Key deliverables for this segment:</div>
                  {seg.deliverables.map((d, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < seg.deliverables.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: seg.color, flexShrink: 0, marginTop: 2 }}>0{i + 1}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* What's Inside */}
      <section id="whats-inside" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">8 sections. Every claim sourced.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              What's inside the report.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Each section answers a specific strategic question. The report is designed to be read top to bottom for the full picture, or section by section as your team needs specific answers.
            </p>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {reportSections.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <button
                    onClick={() => setOpenSection(openSection === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '22px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 18,
                    }}
                  >
                    <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'var(--teal)', width: 36, flexShrink: 0, textAlign: 'center' }}>{s.num}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff' }}>{s.title}</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 12 }}>{s.sub}</span>
                    </div>
                    <motion.span animate={{ rotate: openSection === i ? 90 : 0 }} style={{ display: 'inline-block', fontSize: 16, color: 'var(--teal)', flexShrink: 0 }}>›</motion.span>
                  </button>
                  <AnimatePresence>
                    {openSection === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 28px 24px 82px' }}>
                          {s.items.map((item, j) => (
                            <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: j < s.items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                              <div style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item}</div>
                            </div>
                          ))}
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

      {/* Operating Principles */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Our standards</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              How we build every report.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Six operating principles govern every report we produce. These aren't aspirational. They're enforced at every stage of generation, review, and delivery.
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {principles.map((p, i) => (
              <StaggerItem key={i}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{p.title}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">What you receive</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              The full delivery package.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>In-Depth Growth Viability Report</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  40–60+ pages covering all 8 sections. Professional .docx format, white-labeled under your brand. Every claim sourced, every recommendation costed, every growth lever ranked.
                </p>
                {['8-section structure with MECE coverage', 'Competitive matrix with 5–10 benchmarks', 'Ranked growth levers with investment estimates', 'Whitespace analysis with market evidence', '90-day action plan with assigned actions', 'Assumptions log for full transparency'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Executive Presentation & Q&A</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  A condensed visual presentation of the key findings and recommendations. Designed for leadership conversations, board meetings, and internal alignment. Includes a live Q&A walkthrough with the research team.
                </p>
                {['Top growth moves with expected ROI ranges', 'Competitive positioning visual', 'Investment vs. return framework', 'Channel priority matrix', '90-day roadmap summary', 'Live Q&A session included'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">Pricing & delivery</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 40, lineHeight: 1.1 }}>
              Fixed scope. Fixed price. No surprises.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.15)', padding: '48px 40px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 4 }}>US$5,000+</div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>per report</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', marginBottom: 28 }}>
                {[['14-day delivery', 'From intake form to final report'], ['White-label included', 'Delivered under your brand'], ['1 revision round', 'Included in the base price']].map(([title, sub]) => (
                  <div key={title} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--teal)' }}>{title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Brief This Report →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Growth doesn't restart by accident.<br />Know exactly where to invest next.</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="btn btn-white">Brief This Report →</Link>
          <Link to="/products" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Or explore all research products →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
