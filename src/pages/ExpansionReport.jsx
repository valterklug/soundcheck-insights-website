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
      'Brand context: what you sell, your current scale, and why this market now.',
      'Five Critical Insights: each with a finding, why it matters, and what to do.',
      'Three Strategic Paths (Conservative, Balanced, Aggressive) with expected outcomes, investment required, timelines, and key risks.',
      'A recommended path backed by 3 facts, with an overall confidence level.',
    ],
  },
  {
    num: '2',
    title: 'CVE Score',
    sub: 'Your expansion viability in one number.',
    items: [
      'Proprietary Coefficient of Viability of Expansion (0 to 100) scored across three weighted dimensions.',
      'Market Opportunity (40%), Competitive Position (35%), Internal Readiness (25%).',
      'Top 3 drivers pulling the score up, with supporting metrics.',
      'Top 3 drags pulling the score down, with specific evidence.',
      'Impact vs. Readiness matrix positioning your top strategic levers.',
    ],
  },
  {
    num: '3',
    title: 'Business & Brand Assessment',
    sub: 'Your company through the lens of the new market.',
    items: [
      'Current sales and channel mix analysis with gross margin benchmarking.',
      'Product-market fit signals: price-pack positioning, format suitability, label compliance gaps, and demand signals already visible.',
      'Brand positioning and story: the single angle to lead with and why it wins.',
      'Pricing architecture: floor price, recommended retail, tier structure, and the price point where you lose category relevance.',
    ],
  },
  {
    num: '4',
    title: 'Market & Category Intelligence',
    sub: 'The largest section. Every number sourced.',
    items: [
      'TAM / SAM / SOM with top-down and bottom-up sizing, reconciled.',
      'Porter\'s Five Forces scored 1 to 10 with industry attractiveness rating.',
      '5 to 6 trend cards with timeline, impact score, and direct implications for your brand.',
      'Whitespace analysis: 2 to 3 genuine gaps with size, incumbent weaknesses, and timing pressure.',
      '2 high-value customer segments with triggers, barriers, LTV, and best acquisition channel.',
      '6 to 10 competitive benchmarks with threat levels and a whitespace note.',
      'Buyer and retailer landscape calibrated to your business model (retail, Amazon, foodservice, or hybrid).',
      'Import, regulatory, and compliance snapshot with costs and timelines.',
      'Tariff and trade cost scenarios with current, proposed, and worst-case landed cost modeling.',
    ],
  },
  {
    num: '5',
    title: 'Strategic Entry & Growth Plan',
    sub: 'From analysis to action.',
    items: [
      'Entry mode analysis: 6 modes evaluated against your specific situation with pros, cons, costs, and timelines.',
      'Messaging framework: core value proposition, 3 supporting messages with proof points, and the claim to avoid.',
      '3 to 5 growth levers, each with a hypothesis, target, assets required, expected impact range, and a go/no-go gate.',
      'Prioritized 12-month roadmap across three phases (Now, Next, Later).',
      'Unit economics and budget guardrails: CAC, LTV, LTV:CAC ratio, payback period, gross margin floor, and break-even volume.',
    ],
  },
  {
    num: '6',
    title: 'Risks & Watchpoints',
    sub: 'Scored, ranked, and mitigated.',
    items: [
      '6 to 8 risks across four categories: Market, Channel, Brand, and Ops/Regulatory.',
      'Each risk scored by Probability (1 to 5) x Impact (1 to 5).',
      'Early warning indicators for each risk so you catch problems before they compound.',
      'Mitigation and contingency plans. Any score above 16 flagged as Priority Risk.',
    ],
  },
  {
    num: '7',
    title: 'Next Steps',
    sub: 'Your 90-day action plan.',
    items: [
      '30 Days: 3 immediate actions, specific and assigned.',
      '60 Days: 3 build actions moving from setup to execution.',
      '90 Days: 3 scale or test actions producing your first real market signals.',
      'Data to instrument now, decisions required from leadership, and a single Day-30 KPI.',
    ],
  },
  {
    num: '8',
    title: 'Assumptions & Gaps Log',
    sub: 'Full transparency on what we know and what we estimated.',
    items: [
      'Every assumption or proxy used anywhere in the report, logged.',
      'Why the data point is missing, the proxy used, the source, confidence level, and its impact on the analysis.',
    ],
  },
]

const cveScale = [
  { range: '75 to 100', label: 'Exceptional', color: 'var(--teal)', desc: 'Entry recommended with aggressive investment.' },
  { range: '60 to 74', label: 'Strong', color: '#2DD4BF', desc: 'Entry recommended with phased approach.' },
  { range: '45 to 59', label: 'Moderate', color: '#FBBF24', desc: 'Entry conditional. Active risk mitigation required.' },
  { range: '30 to 44', label: 'Weak', color: '#F97316', desc: 'Reconsider timing or target market.' },
  { range: '0 to 29', label: 'Critical', color: '#EF4444', desc: 'Not recommended without structural changes.' },
]

const principles = [
  { title: 'Decision-grade, not forensic', desc: 'Public sources and lightweight proxies for 80/20 answers. Confidence labeled on every major claim: HIGH, MED, or LOW.' },
  { title: 'Evidence first', desc: 'Every market claim requires a data point, benchmark, or precedent with source name and date. Primary and official sources preferred.' },
  { title: 'MECE structure', desc: 'No filler. No repetition. Each sentence contains a new insight or substantiated fact.' },
  { title: 'Information typing', desc: 'Every claim tagged as FACT, ESTIMATE, or INTERPRETATION throughout the entire report.' },
  { title: 'Model-first logic', desc: 'Your business model is identified first. Every subsequent recommendation is calibrated to how you actually sell.' },
  { title: 'Tariff awareness', desc: 'If you import goods, we model current duty rates and proposed 2025-2026 tariff changes with margin scenarios.' },
]

const faqs = [
  {
    q: 'What information do you need from us to start?',
    a: 'We send you a structured intake form covering your product line, current sales and channels, target market rationale, budget range, and timeline expectations. Most clients complete it in 30 to 45 minutes. If anything is missing, we proceed using web research and proxy benchmarks, and log every assumption explicitly in the report.',
  },
  {
    q: 'Which markets do you cover?',
    a: 'Our core expertise is brands entering the US market, but the methodology is market-agnostic. We have delivered reports for entry into the US, Canada, the UK, Germany, Brazil, Mexico, and the UAE. The report is always produced in the local language of the target market and uses local currency for all financial figures.',
  },
  {
    q: 'How is this different from a traditional market research report?',
    a: 'Traditional reports give you data. This report gives you a decision. Every section ends with what to do, not just what we found. The CVE Score gives you a single number to anchor internal conversations. The three strategic paths force an explicit choice rather than a single consultant opinion. And the 12-month roadmap with go/no-go gates means you have a plan, not just a PDF.',
  },
  {
    q: 'What sources do you use?',
    a: 'We prefer primary and official sources: USDA, IRI/NIQ, Euromonitor, Census, IBISWorld, USITC, brand filings, retailer portals, and industry association reports. When official data is unavailable, we use proxies and log them explicitly in the Assumptions Log (Section 8) with confidence levels.',
  },
  {
    q: 'Can our agency white-label this and deliver it to our client?',
    a: 'Yes. The report is designed for white-label delivery. We provide it under your brand, your cover page, your agency name. Your client never sees Soundcheck Insights unless you want them to. This is the default for agencies and consultancies.',
  },
  {
    q: 'What if our client needs changes after delivery?',
    a: 'One revision round is included. If the client wants to explore a different entry path or adjust assumptions, we can update the relevant sections. Additional revision rounds are available at a flat rate.',
  },
  {
    q: 'Do you offer a lighter version for early-stage exploration?',
    a: 'Yes. Our Idea Validation product (US$3k+, 7-day delivery) is a go/no-go recommendation for founders testing a concept before committing capital. If the idea passes validation, the full Expansion Report is the natural next step.',
  },
]

export default function ExpansionReport() {
  const [openFaq, setOpenFaq] = useState(null)
  const [openSection, setOpenSection] = useState(null)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Product Deep-Dive · International Expansion</span>
          <h1 className="page-h1">Reduce the Trial and Error<br />of Your International Expansion</h1>
          <p className="page-sub" style={{ maxWidth: 640 }}>
            The Soundcheck International Expansion Viability Report answers the question every brand asks before entering a new market: is this real, and if so, how? Not a data dump. A decision-grade document with sourced evidence, a proprietary viability score, three strategic paths, and a 12-month roadmap your team can execute on Day 1.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/contact" className="btn btn-primary">Brief This Report →</Link>
            <a href="#whats-inside" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>See What's Inside →</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['100+', 'PAGES', 'sourced research and strategy'], ['14', 'DAYS', 'from intake to delivery'], ['US$5k+', '', 'white-label included']].map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
                {label && <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{label}</div>}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Built for real decisions</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              Who commissions this report.
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 32 }} className="offer-grid">
            {[
              ['International brands', 'Established companies from the Americas, Europe, or Asia evaluating entry into a new market. You have a product, revenue, and channels at home. You need to know if the new market is real before you commit.'],
              ['Agencies and consultancies', 'Your client is asking about international expansion. You need a research-grade document to deliver under your brand. The white-label version ships ready for your client\'s executive team.'],
              ['Founders pre-expansion', 'You\'ve validated your product domestically. Before you invest in a new market, you need to know the category size, competitive landscape, regulatory landscape, and whether the unit economics work at scale.'],
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

      {/* CVE Score */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Proprietary metric</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 16 }}>
              The CVE Score. Your viability in one number.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 680 }}>
              The Coefficient of Viability of Expansion is a weighted score from 0 to 100, computed across three dimensions: Market Opportunity (40%), Competitive Position (35%), and Internal Readiness (25%). Each dimension is scored independently with sourced evidence. The final number gives your team a single anchor for the go/no-go conversation.
            </p>
          </FadeIn>

          {/* CVE Visual */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 2, marginBottom: 32 }} className="cve-grid">
              <div style={{ background: 'rgba(0,196,212,0.04)', border: '1px solid rgba(0,196,212,0.15)', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>Sample CVE</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 48, fontWeight: 300, color: '#fff', lineHeight: 1 }}>67</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,196,212,0.7)', marginTop: 4 }}>/ 100</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#2DD4BF', marginTop: 12, padding: '4px 12px', background: 'rgba(0,196,212,0.08)', border: '1px solid rgba(0,196,212,0.2)', borderRadius: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Strong Viability</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[['Market Opportunity', 40, 72], ['Competitive Position', 35, 68], ['Internal Readiness', 25, 58]].map(([label, weight, score]) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 180, flexShrink: 0 }}>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff' }}>{label}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>Weight: {weight}%</div>
                    </div>
                    <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                      <motion.div
                        style={{ height: 6, background: 'var(--teal)', borderRadius: 3 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400, color: '#fff', width: 50, textAlign: 'right' }}>{score}/100</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Scale */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', gap: 0, borderRadius: 3, overflow: 'hidden' }} className="cve-scale">
              {cveScale.map(s => (
                <div key={s.label} style={{ flex: 1, padding: '14px 12px', background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: s.color, marginBottom: 4 }}>{s.range}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.cve-grid{grid-template-columns:1fr!important}.cve-scale{flex-direction:column!important}}"}</style>
      </section>

      {/* What's Inside */}
      <section id="whats-inside" style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">8 sections. Every claim sourced.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              What's inside the report.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Each section is structured to answer a specific strategic question. The report is designed to be read top to bottom for the full picture, or section by section as your team needs specific answers.
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
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
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

      {/* Three Strategic Paths */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Not one recommendation. Three paths.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              Every report presents three strategic paths.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Most consulting reports give you one recommendation and hope you agree. We present three distinct options to force an explicit choice. Each path includes expected outcomes, investment required, key risks, and timeline to first revenue signal.
            </p>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="offer-grid">
            {[
              ['Path A', 'Conservative', 'var(--teal)', 'Lower-risk entry. Single channel, limited geography, slower capital burn. You learn before you invest.'],
              ['Path B', 'Balanced', '#FBBF24', 'Phased multi-channel. Moderate investment over a 12-month horizon with go/no-go gates at each phase.'],
              ['Path C', 'Aggressive', 'var(--orange)', 'Full-market push. Highest investment, fastest scale ambition. Maximum opportunity, maximum exposure.'],
            ].map(([label, name, color, desc]) => (
              <FadeIn key={label}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${color}`, padding: '32px 28px', height: '100%' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: 8 }}>{label}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 12 }}>{name}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
                    Includes: expected outcome, investment required, key risk, and timeline to first revenue signal.
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <div style={{ marginTop: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '24px 28px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                The report then states which path we recommend and why, backed by 3 facts. If we recommend adjustment before entry, we specify exactly what must change and by when. Every recommendation carries an overall confidence level: HIGH, MED, or LOW, with rationale.
              </p>
            </div>
          </FadeIn>
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
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Full Intelligence Report</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  100+ pages covering all 8 sections. Professional .docx format, white-labeled under your brand. Every claim sourced, every number benchmarked, every recommendation actionable.
                </p>
                {['8-section structure with MECE coverage', 'Confidence-labeled claims throughout', 'TAM/SAM/SOM with dual-approach sizing', 'Competitive landscape with 6 to 10 benchmarks', '12-month roadmap with go/no-go gates', 'Assumptions log for full transparency'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Visual Executive Summary</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  A condensed visual version of the key findings. Designed for leadership presentations, board meetings, and internal alignment conversations. Covers the CVE Score, five critical insights, competitive comparison, market sizing, entry model, and recommendation.
                </p>
                {['CVE Score with dimension breakdown', 'Five critical insights with actions', 'Competitive pricing comparison table', 'Market opportunity sizing (TAM/SAM)', 'Recommended entry model with phased investment', 'Designed for screen and print'].map(t => (
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
          <h2 className="cta-strip-h2">Your next market is waiting.<br />Know if it's real before you commit.</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="btn btn-white">Brief This Report →</Link>
          <Link to="/products" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Or explore all research products →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
