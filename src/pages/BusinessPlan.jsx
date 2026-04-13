import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const reportSections = [
  {
    num: '1',
    title: 'Executive Summary',
    sub: 'The decision page.',
    items: [
      'Business overview, problem/opportunity, solution, market snapshot.',
      'Team credentials and key milestones to date.',
      'Financial snapshot with the specific ask (if fundraising).',
      'The single most important thing the reader needs to know.',
    ],
  },
  {
    num: '2',
    title: 'Company Description',
    sub: 'Who you are and where you stand.',
    items: [
      'Legal entity, founding story, mission, vision, current stage.',
      'Location, ownership structure, key milestones.',
      'What makes this company real, not theoretical.',
    ],
  },
  {
    num: '3',
    title: 'Products & Services',
    sub: 'What you sell and why it matters.',
    items: [
      'Features, benefits, development stage, product roadmap.',
      'IP, patents, or proprietary technology (if applicable).',
      'Regulatory requirements and compliance status.',
    ],
  },
  {
    num: '4',
    title: 'Market Analysis',
    sub: 'The largest section. Every number sourced.',
    items: [
      'TAM / SAM / SOM with calculation logic and confidence labels.',
      'Market trends, growth drivers, timing factors.',
      'Target customer profile with segments, triggers, and barriers.',
    ],
  },
  {
    num: '5',
    title: 'Competitive Analysis',
    sub: 'Who else solves this problem.',
    items: [
      '3 to 8 direct competitors profiled with positioning and pricing.',
      'Competitive matrix with differentiation strategy.',
      'Switching costs and moat assessment.',
    ],
  },
  {
    num: '6',
    title: 'Marketing & Sales Strategy',
    sub: 'How you acquire and keep customers.',
    items: [
      'Customer acquisition channels with CAC targets.',
      'Pricing strategy with margin analysis.',
      'Go-to-market timeline and launch sequencing.',
    ],
  },
  {
    num: '7',
    title: 'Operations Plan',
    sub: 'How the business actually runs.',
    items: [
      'Facilities, supply chain, technology stack, key processes.',
      'Staffing plan with hiring timeline.',
      'For immigration plans: detailed job creation plan with BLS-sourced wages.',
    ],
  },
  {
    num: '8',
    title: 'Organization & Management',
    sub: 'The team behind the plan.',
    items: [
      'Team bios and organizational chart (current and projected).',
      'Advisory board and key hires planned.',
      'Gap analysis: what roles are missing and when they get filled.',
    ],
  },
  {
    num: '9',
    title: 'Financial Projections',
    sub: 'The numbers that matter.',
    items: [
      'Income statement, cash flow, balance sheet (3-5 years).',
      'Documented assumptions for every line item.',
      'Scenario analysis: conservative, base, and upside.',
      'Break-even analysis with unit economics.',
      'For bank plans: debt service coverage ratio. For immigration: 5-year minimum.',
    ],
  },
  {
    num: '10',
    title: 'Appendix & Exhibits',
    sub: 'Full transparency.',
    items: [
      'Resumes, market research sources, contracts, letters of intent.',
      'For immigration plans: proof of investment source, property documentation.',
      'Job descriptions, BLS wage data, organizational charts.',
      'Every assumption or proxy used, logged with confidence levels.',
    ],
  },
]

const planTypes = [
  {
    type: 'Type A',
    name: 'Investor Plan',
    subname: 'VC / Angel',
    color: 'var(--teal)',
    desc: 'Unit economics, TAM/SAM/SOM, competitive moat, team, exit thesis. 3-5 year projections with monthly Year 1 detail. 20-35 pages.',
  },
  {
    type: 'Type B',
    name: 'Bank / SBA Loan Plan',
    subname: '',
    color: '#2DD4BF',
    desc: 'Cash flow projections, debt service coverage, collateral, owner experience, use of funds. Monthly Year 1, quarterly Year 2. 20-40 pages.',
  },
  {
    type: 'Type C',
    name: 'Immigration Plan',
    subname: 'E-2 / EB-5 / L-1A',
    color: '#FBBF24',
    desc: 'Legal defensibility under the Matter of Ho standard. Job creation, economic impact, 5-year projections, 30-50% appendix of supporting exhibits. 30-60+ pages.',
  },
  {
    type: 'Type D',
    name: 'Franchise Plan',
    subname: '',
    color: '#F97316',
    desc: 'FDD Item 7 and Item 19 alignment. Territory analysis, royalty-adjusted unit economics, franchisor performance data. 20-35 pages.',
  },
  {
    type: 'Type E',
    name: 'CPG / Consumer Product',
    subname: '',
    color: 'var(--orange)',
    desc: 'Distribution strategy (retail, DTC, Amazon), COGS and margin structure, supply chain, FDA/labeling compliance, go-to-market by channel. 25-40 pages.',
  },
  {
    type: 'Type F',
    name: 'Founder\'s Internal Plan',
    subname: '',
    color: '#6B8098',
    desc: 'Strategic clarity for the founding team. No external audience. Shorter, more direct. Honest gap assessment. 10-20 pages.',
  },
]

const faqs = [
  {
    q: 'What information do you need from us to start?',
    a: 'We send you a structured intake questionnaire covering your business, market, team, financials, and the specific audience for the plan. Most clients complete it in 45 to 60 minutes. After we review it, we schedule a 60 to 90 minute stakeholder interview to fill gaps and pressure-test key assumptions.',
  },
  {
    q: 'How is this different from a business plan template?',
    a: 'Templates give you a structure to fill in yourself. This product gives you a finished, professional document built from structured data collection, a stakeholder interview, and independent market and competitive research. Every claim is sourced. Every financial projection carries documented assumptions. The plan is formatted and weighted for the specific audience that will read it.',
  },
  {
    q: 'Do you write immigration business plans?',
    a: 'Yes. We produce business plans for E-2 Treaty Investor, EB-5 Immigrant Investor, and L-1A Intracompany Transferee (New Office) visa applications. The plan meets the Matter of Ho legal standard with job creation projections, economic impact evidence, and an appendix of supporting exhibits. We do not provide legal advice. Your immigration attorney is responsible for the legal strategy and petition filing.',
  },
  {
    q: 'Can our agency white-label this?',
    a: 'Yes. The plan is designed for white-label delivery. We provide it under your brand, your cover page, your agency name. Your client never sees Soundcheck Insights unless you want them to.',
  },
  {
    q: 'What if my client needs changes after delivery?',
    a: 'One revision round is included in the base price. If the client wants to adjust assumptions, explore a different scenario, or update the financial projections, we can update the relevant sections. Additional revision rounds are available at a flat rate.',
  },
  {
    q: 'What languages are available?',
    a: 'English is the default. Other languages are available upon request. Contact us to confirm availability and timeline for your target language.',
  },
]

export default function BusinessPlan() {
  const [openFaq, setOpenFaq] = useState(null)
  const [openSection, setOpenSection] = useState(null)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Product Deep-Dive · Business Plan</span>
          <h1 className="page-h1">A business plan built for<br />the reader who decides.</h1>
          <p className="page-sub" style={{ maxWidth: 640 }}>
            Not a template. Not a pitch deck. A professional, audience-specific business plan built from structured intake data, a stakeholder interview, and independent research. Every claim sourced. Every projection documented. Every section weighted for the specific reader who will make the decision.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/contact" className="btn btn-primary">Brief This Plan →</Link>
            <a href="#plan-types" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>See Plan Types →</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['10-14', 'DAYS', 'from intake to delivery'], ['6', 'PLAN TYPES', 'audience-specific configurations'], ['10', 'SECTIONS', 'every claim sourced']].map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Built for real decisions</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              Who commissions this plan.
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 32 }} className="offer-grid">
            {[
              ['Entrepreneurs and founders', 'You need a professional plan to raise capital, secure a loan, or align your team around a strategy. Not a template filled with generic language. A document built from your actual business data and independent market research.'],
              ['International investors seeking US visas', 'E-2, EB-5, or L-1A. Your immigration attorney needs a business plan that meets the Matter of Ho standard. We produce the plan. Your attorney files the petition.'],
              ['Agencies and consultancies', 'Your client needs a business plan. You need a research-grade document to deliver under your brand. The white-label version ships ready for your client\'s leadership team.'],
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

      {/* Plan Types */}
      <section id="plan-types" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">6 audience-specific configurations</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              One structure. Six configurations.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Every plan follows the same 10-section core structure. But the emphasis, depth, financial projection horizon, and supporting evidence requirements adapt to the audience. The intake questionnaire determines which configuration applies.
            </p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {planTypes.map((p, i) => (
              <FadeIn key={p.type} delay={i * 0.04}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${p.color}`, padding: '28px 24px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.color, marginBottom: 8 }}>{p.type}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{p.name}</div>
                  {p.subname && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>{p.subname}</div>}
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">10 sections. Every claim sourced.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              What's inside the plan.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              All plan types follow this 10-section structure. Emphasis and depth vary by audience configuration.
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
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Full Business Plan</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  Professional .docx format, audience-formatted and white-label ready. 10-section structure with sourced claims, documented assumptions, and confidence-labeled projections throughout.
                </p>
                {['10-section MECE structure', 'Audience-specific emphasis and depth', 'Confidence-labeled projections', 'Sourced market and competitive data', 'Immigration appendix with exhibits (Type C)', 'White-label ready'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Executive Summary One-Pager</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  A condensed visual version of the key findings. Business snapshot, market opportunity, financial highlights, team overview, and the specific ask. Designed for investor meetings, board presentations, and partner conversations.
                </p>
                {['Business snapshot with key metrics', 'Market opportunity sizing', 'Financial highlights and projections', 'Team overview', 'The specific ask (fundraising, loan, visa)', 'Designed for screen and print'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
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
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>per plan</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', marginBottom: 28 }}>
                {[['10-14 day delivery', 'From intake to final plan'], ['White-label included', 'Delivered under your brand'], ['1 revision round', 'Included in the base price']].map(([title, sub]) => (
                  <div key={title} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--teal)' }}>{title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Brief This Plan →</Link>
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
          <h2 className="cta-strip-h2">Your plan should be as serious<br />as your ambition.</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="btn btn-white">Brief This Plan →</Link>
          <Link to="/products" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Or explore all research products →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
