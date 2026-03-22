import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const dimensions = [
  { pts: '25', name: 'Problem Validity', desc: 'Is this a Tier 1 problem — urgent, frequent, and costly to the people who have it?' },
  { pts: '20', name: 'Market Opportunity', desc: 'Is the market large enough and growing in your target geography?' },
  { pts: '20', name: 'Competitive Whitespace', desc: 'Is there a genuine gap, or is the space already well-served?' },
  { pts: '20', name: 'Customer Demand Signals', desc: 'Are there public signals that your target customer wants and would pay for this?' },
  { pts: '15', name: 'Idea Differentiation', desc: 'Is your approach meaningfully different from what already exists?' },
]

const tiers = [
  { range: '75 to 100', label: 'Strong Signal', color: 'var(--teal)', meaning: 'Real problem, real market, real differentiation. Build with urgency.', action: 'Move to business plan. Test pricing with real buyers this month.' },
  { range: '50 to 74', label: 'Worth Exploring', color: '#FBBF24', meaning: 'Promising but key uncertainties remain. Not ready to build. Ready to test.', action: 'Run 2 to 3 targeted experiments. Re-assess in 30 days.' },
  { range: '25 to 49', label: 'Needs Rethinking', color: '#F97316', meaning: 'Problem or market is real but the approach has structural gaps.', action: 'Pivot the solution before investing further. Report specifies what.' },
  { range: '0 to 24', label: "Don't Build Yet", color: '#EF4444', meaning: 'Critical gap in problem validity, market size, or differentiation.', action: 'Stop. Rebuild the hypothesis. The report explains exactly why.' },
]

const sampleBars = [
  ['Problem Validity', 80, 'var(--teal)'],
  ['Market Opportunity', 65, 'var(--teal)'],
  ['Competitive Whitespace', 50, '#D97706'],
  ['Customer Demand Signals', 70, 'var(--teal)'],
  ['Idea Differentiation', 55, '#D97706'],
]

const faqs = [
  {
    q: "Why can't I just use ChatGPT for this?",
    a: "You can, and most people do. The difference is structure, independence, and a scoreable output. ChatGPT will tell you what you want to hear if you're not careful about how you prompt it. Soundcheck runs against a fixed methodology with the same 15 questions, the same 5 scoring dimensions, the same WTP analysis framework. The output is consistent, comparable, and shareable. The IVS score is something you can hand to an advisor or investor. A ChatGPT conversation is not.",
  },
  {
    q: 'What if my idea is in an early, undefined market?',
    a: "Early markets are where this analysis is most valuable. If the category doesn't have clear benchmarks yet, the report says so explicitly, and the IVS reflects it. A low score in an early market often means 'the timing isn't right yet' rather than 'the idea is wrong.' The competitive whitespace and timing signal sections are written specifically to distinguish between the two.",
  },
  {
    q: 'Is the report AI-generated? Will a human review it?',
    a: "The report is fully AI-generated from your intake form and independent public research. No consultant reviews or edits the output before delivery. That's what makes the 48-hour turnaround and $799 price possible. The methodology is designed to make the AI's analysis rigorous. The prompts are built around the same frameworks a senior market analyst would apply. If you want a consultant to review and advise on the findings, that's available as an add-on. Contact us.",
  },
  {
    q: 'What if my idea is a physical product, not software?',
    a: 'The Idea Validation Analysis works for any business type: SaaS, app, physical product, service business, marketplace. The intake form asks you to specify your business model type and the AI calibrates the analysis accordingly. WTP benchmarks, competitive comparables, and market sizing methodology all adapt to the model type you select.',
  },
  {
    q: 'Can I validate more than one idea?',
    a: "Yes. Each analysis is per-idea and per-geography. If you have three ideas you're considering, you can run three separate analyses. Running them in parallel is absolutely possible. Each takes 10 minutes to brief.",
  },
  {
    q: 'What if I disagree with the IVS score?',
    a: "The report shows you the full dimension breakdown and every piece of evidence behind each score. If you think a dimension was scored incorrectly because the AI missed a key data point or competitor, you can contact us and we'll review the specific section. Material factual errors are corrected at no charge.",
  },
  {
    q: 'Is the report available in Portuguese?',
    a: 'Yes. Select Portuguese (Brazilian) at the end of the intake form and the full report and Summary Card will be delivered in PT-BR. Same price, same timeline.',
  },
]

export default function IdeaValidation() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <PageWrapper>
      {/* Section 1 — Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">Idea Validation Analysis · Soundcheck Insights</span>
          <h1 className="page-h1">Your idea might be great.<br />The <span style={{ color: 'var(--teal)' }}>market</span> will decide.</h1>
          <p className="page-sub" style={{ maxWidth: 580 }}>
            Before you build, hire, or fundraise, know if the market is real. Soundcheck runs independent AI research on your idea: market sizing, competitive landscape, customer demand, and what your target buyer would actually pay. You fill a 10-minute form. We deliver a full analysis and your IVS score in 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link to="/contact" className="btn btn-primary">Validate My Idea →</Link>
            <a href="#sample" className="btn btn-glass" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>See a Sample Report →</a>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {[['48', 'HOURS', 'from form submission to full report'], ['US$799', '', 'fixed price, no calls, no scheduling'], ['10', 'MINUTES', 'to complete the intake form']].map(([num, label, sub]) => (
              <div key={sub} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: num.length > 3 ? 24 : 36, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{num}</div>
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
            <span className="sc-label">The real cost of skipping validation</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.1, marginBottom: 24 }}>
              90% of startups fail. Most of them had positive early feedback.
            </h2>
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 14 }}>
                Friends say it's a great idea. Online research feels promising. The competitor landscape looks manageable. Then you spend six months building something nobody pays for.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                The problem isn't enthusiasm. It's the difference between people saying they'd use something and people actually paying for it. Soundcheck separates those two signals with independent market research, not opinions. Before you write a line of code, sign a lease, or pitch an investor.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 48 }} className="offer-grid">
            {[
              ['What most founders skip', "Independent validation of whether the problem is genuinely urgent, not just interesting. If it's not a problem people actively seek to solve, they won't pay to fix it."],
              ['What Soundcheck adds', "Desk research plus a structured scoring model. The IVS gives you a number you can share with a co-founder, an advisor, or an investor that says exactly where your idea is strong and where it's fragile."],
              ['What it replaces', 'Weeks of unstructured Googling, a $5,000 market research firm, or asking ChatGPT without knowing if you\'re asking the right questions. Same output. 48 hours. $799.'],
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
            <span className="sc-label">Three steps. 48 hours.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              No calls. No scheduling. No waiting.
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { num: '01', title: 'Fill the intake form (10 minutes)', body: "Tell us about your idea, the problem it solves, who it's for, what geography you're targeting, and how you're thinking about pricing. 15 structured questions designed to extract exactly what the AI needs to run a real analysis. No fluff, no essays.", meta: 'One question per screen · Mobile-friendly · ~10 minutes · Saves automatically' },
              { num: '02', title: 'AI runs independent market research', body: "Soundcheck's AI independently sizes the market for your target geography, maps the competitive landscape (including competitors you may not know about), surfaces demand signals from public data, and runs a WTP proxy using comparable market pricing. This is not an echo of what you told us. It's independent research.", meta: 'Runs automatically after form submission · Completed in under 48 hours' },
              { num: '03', title: 'Receive your full report + IVS Score', body: "You get two documents: the full Idea Validation Analysis (8 to 12 pages covering all five dimensions in detail) and the Idea Summary Card, a one-page visual you can pin to a wall, share with a co-founder, or show an advisor. Your IVS score tells you exactly where you stand and what to do next.", meta: 'Delivered by email as PDF · No login required · Download immediately' },
            ].map((s, i) => (
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

      {/* Section 4 — The IVS Score */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">The score that makes it concrete</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              One number. Five dimensions. Total clarity.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
              Every Idea Validation Analysis produces an IVS (Idea Viability Score) from 0 to 100. It's not a prediction. It's a structured, evidence-based assessment of where your idea stands across five dimensions that determine whether a market exists and whether someone would pay to enter it.
            </p>
          </FadeIn>

          {/* 5 dimension cards */}
          <StaggerContainer style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 32 }}>
            {dimensions.map(d => (
              <StaggerItem key={d.name}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '18px 24px' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, fontWeight: 300, color: 'var(--teal)', width: 50, textAlign: 'center', flexShrink: 0 }}>{d.pts}<span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>pts</span></div>
                  <div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{d.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{d.desc}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Tier table */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', gap: 0, overflow: 'hidden' }} className="ivs-tiers">
              {tiers.map(t => (
                <div key={t.label} style={{ flex: 1, padding: '18px 16px', background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: t.color, marginBottom: 4 }}>{t.range}</div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{t.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4, marginBottom: 8 }}>{t.meaning}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.25)', lineHeight: 1.4, fontStyle: 'italic' }}>{t.action}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Honesty note */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '18px 24px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
                The IVS is a direction indicator, not a success prediction. A score of 80 means the market conditions are favorable, not that the business will work. A score of 30 means something specific is broken. The report tells you exactly what.
              </p>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.ivs-tiers{flex-direction:column!important}}"}</style>
      </section>

      {/* Section 5 — What You Receive */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Two documents. Delivered together.</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              The full picture, and the one page you share.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>The Full Idea Validation Analysis (8 to 12 pages)</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  A structured, evidence-based report covering all five IVS dimensions in full detail. Written in plain language. Not academic, not hedged.
                </p>
                {['Idea Snapshot: how the AI understood and classified your idea', 'Problem & Market: Tier 1 test, TAM/SAM/SOM, timing thesis', 'Competition Reality Check: landscape map, whitespace analysis, differentiation verdict', 'Customer & Demand Intelligence: ICP profile, demand signals, WTP analysis', 'Viability Verdict + IVS: your score, dimension breakdown, top 3 risks, top 3 strengths', 'Executive Summary: one-page synthesis written for sharing'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>The Idea Summary Card (1 page)</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>
                  A designed, print-ready one-pager with your IVS score, dimension breakdown, 3 key findings, the top risk, the WTP range vs. your proposed price, and the 3 specific next steps.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                  Pin it to a wall. Share it with your co-founder. Show it to an advisor. It says exactly where you stand without requiring them to read 12 pages.
                </p>
              </div>
            </FadeIn>
          </div>
          {/* Pricing strip */}
          <FadeIn delay={0.15}>
            <div style={{ marginTop: 2, background: 'rgba(0,196,212,0.03)', border: '1px solid rgba(0,196,212,0.15)', padding: '36px 32px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 4 }}>US$799 <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>per idea</span></div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>48-hour delivery from form submission</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Includes: Full Idea Validation Analysis + Idea Summary Card, delivered as PDF · Available in English and Portuguese (Brazilian)</div>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Validate My Idea →</Link>
            </div>
          </FadeIn>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Section 6 — Sample Output */}
      <section id="sample" style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">See the output</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 16, lineHeight: 1.1 }}>
              What a real report looks like.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40 }}>
              This is a sample Idea Validation Analysis for a fictional B2B SaaS concept targeting restaurant inventory management in Florida. It shows the IVS score, dimension breakdown, key findings, and the three next steps the founder should take this month.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(6,15,30,0.8)', border: '1px solid rgba(0,196,212,0.15)', padding: '32px 28px' }}>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Sample · Idea Summary Card</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Restaurant Inventory Intelligence App</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>B2B SaaS · United States (Florida) · Proposed price: $79/month</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 48, fontWeight: 300, color: '#fff', lineHeight: 1 }}>68</div>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.25)' }}>/ 100</div>
              </div>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#FBBF24', marginBottom: 2 }}>Worth Exploring</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Promising. Key uncertainties remain.</div>
              {sampleBars.map(([label, pct, color]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', width: 180, flexShrink: 0 }}>{label}</div>
                  <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
                    <motion.div
                      style={{ height: 4, background: color, borderRadius: 2 }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', width: 32, textAlign: 'right' }}>{pct}%</div>
                </div>
              ))}
              <div style={{ marginTop: 20, padding: '16px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>WTP Analysis</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  Floor: $29/mo · Range: $49 to $99/mo · Ceiling: $149/mo · <span style={{ color: 'var(--teal)' }}>Proposed price ($79/mo) is within acceptable range.</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: 14 }}>Get My Idea Validated →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 7 — Who This Is For */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">Built for your moment</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, letterSpacing: '-.015em', marginBottom: 48, lineHeight: 1.1 }}>
              Whether this is your first idea or your fifth.
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>First-Time Entrepreneurs</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  You have an idea you can't stop thinking about. You've done some research but you're not sure what you don't know. You need someone to tell you honestly whether this is worth the next two years of your life.
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Best for:</div>
                {["Ideas at the 'should I quit my job?' stage", 'Pre-revenue, pre-prototype concepts', 'Founders who want an external perspective before pitching friends or family for money', "Anyone who has been told 'that's a great idea' but hasn't heard 'here's the evidence'"].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--teal)', padding: '32px 28px', height: '100%' }}>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 14 }}>Serial Entrepreneurs & Side-Project Builders</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 20 }}>
                  You've built things before. You know the pattern: skip validation, fall in love with the solution, launch to silence. This time you want the market data before you start building.
                </p>
                <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Best for:</div>
                {['Evaluating multiple ideas quickly before committing to one', 'Testing a new geography or market segment for an existing product', 'Getting a second opinion when your own research tells you what you want to hear', 'Producing a shareable artifact before pitching a co-founder or early investor'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>●</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* Not-for note */}
          <FadeIn delay={0.15}>
            <div style={{ marginTop: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--teal)', padding: '18px 24px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, fontStyle: 'italic' }}>
                What this isn't: The Idea Validation Analysis answers market questions, not execution questions. It will tell you if a market exists and if customers would pay. It won't tell you how to build the product, find a co-founder, or raise a round. For those questions, look at Soundcheck's <Link to="/products" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Business Plan Development and Custom Solutions</Link>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
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

      {/* Section 9 — Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">You have the idea.<br />Now find out if the market agrees.</h2>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="btn btn-white">Validate My Idea →</Link>
          <a href="#sample" style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Or see a sample report first →</a>
        </div>
      </section>
    </PageWrapper>
  )
}
