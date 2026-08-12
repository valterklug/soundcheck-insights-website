'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/Animate'

const modules = [
  {
    labelKey: 'mrLabel',
    subKey: 'mrSub',
    color: 'var(--teal)',
    bg: 'rgba(0,196,212,0.08)',
    border: 'rgba(0,196,212,0.25)',
    cells: [
      'Persona panel', 'Consumer clusters', 'Category size', 'Market growth',
      'TAM·SAM·SOM', 'Market drivers', 'Market drags', 'Pricing tiers',
      'Channel mix', 'Comp. matrix', 'Perceptual map', 'Whitespace map',
      'Buying triggers', 'Sentiment map', 'Cultural codes', 'Category claims',
      'Visual codes', 'Regulatory frame',
    ],
  },
  {
    labelKey: 'goGlobalLabel',
    subKey: 'goGlobalSub',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.25)',
    cells: [
      'US market entry', 'Mexico viability', 'UK fit', 'EU expansion',
      'LATAM corridor', 'Channel feasibility', 'Distribution model', 'Retail readiness',
      'DTC viability', 'Compliance', 'Cultural fit', 'Local consumer fit',
      'Local pricing', 'Local competitor', 'Tariff exposure', 'FDI fit',
      'Region priority', 'Entry sequencing',
    ],
  },
  {
    labelKey: 'scaleLabel',
    subKey: 'scaleSub',
    color: '#9B8FFF',
    bg: 'rgba(155,143,255,0.08)',
    border: 'rgba(155,143,255,0.25)',
    cells: [
      'Scale readiness', 'Structural foundation', 'Growth blockers', 'Operator dependency',
      'Founder dependency', 'Pricing architecture', 'Margin compression', 'Cash runway',
      'Hire sequencing', 'Risk frame', '24-mo roadmap', 'Go/No-Go gates',
      'KPI guardrails', 'Phase-2 readiness', 'Series A posture', 'Geographic mix',
      'Quality validation', 'Network density',
    ],
  },
  {
    labelKey: 'cjLabel',
    subKey: 'cjSub',
    color: 'var(--teal-2)',
    bg: 'rgba(45,212,191,0.08)',
    border: 'rgba(45,212,191,0.25)',
    cells: [
      'Awareness', 'Consideration', 'Purchase friction', 'Onboarding',
      'First-use', 'Retention drivers', 'Churn signals', 'Advocacy',
      'Touchpoints', 'Info sources', 'Social proof', 'Influencers',
      'Channel handoff', 'Pre-purchase', 'Post-purchase', 'Repeat triggers',
      'Cross-sell', 'Loyalty',
    ],
  },
  {
    labelKey: 'vfgLabel',
    subKey: 'vfgSub',
    color: 'var(--orange)',
    bg: 'rgba(232,71,42,0.08)',
    border: 'rgba(232,71,42,0.25)',
    cells: [
      'Brand names', 'Slogan testing', 'Package design', 'Logo concepts',
      'Value proposition', 'Campaign creative', 'Tagline candidates', 'Sub-brand fit',
      'Product naming', 'Positioning', 'Visual identity', 'Pitch deck',
      'Founder narrative', 'Press positioning', 'Pricing framing', 'Promo concepts',
      'Tone of voice', 'Origin story',
    ],
  },
]

export default function DecisionGrid() {
  const t = useTranslations('decisionGrid')

  return (
    <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <span className="sc-label">{t('label')}</span>
          <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 8 }}>
            {t('title1')}<br />{t('title2')} <span className="text-teal">{t('title3')}</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 800 }}>
            {t('desc')}
          </p>
        </FadeIn>

        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <div style={{ minWidth: 900, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {modules.map((mod, i) => (
              <FadeIn key={mod.labelKey} delay={i * 0.06}>
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0, alignItems: 'center' }} className="grid-row">
                  {/* Label */}
                  <div style={{ paddingRight: 20 }}>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#fff', lineHeight: 1.25 }}>
                      {t(mod.labelKey)}
                    </div>
                    <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: mod.color, marginTop: 4 }}>
                      {t(mod.subKey)}
                    </div>
                  </div>

                  {/* Cells */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {mod.cells.map(cell => (
                      <div key={cell} style={{
                        background: mod.bg,
                        border: `1px solid ${mod.border}`,
                        padding: '6px 10px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.65)',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                      }}>
                        {cell}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <div style={{
            background: 'rgba(232,71,42,0.06)', borderLeft: '4px solid var(--orange)',
            padding: '20px 24px', maxWidth: 900,
          }}>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff' }}>
              {t('catalogNote')}
            </span>{' '}
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              {t('catalogDesc')}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
