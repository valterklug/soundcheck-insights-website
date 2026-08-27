'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/Animate'

// Matrix values now come from translation rows as {label, values} objects

function Check() {
  return <span style={{ color: 'var(--teal)', fontSize: 18 }}>✓</span>
}
function Cross() {
  return <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 18 }}>✗</span>
}

export default function Differentiators() {
  const t = useTranslations('differentiators')
  const rows = t.raw('rows')

  return (
    <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <span className="sc-label">{t('label')}</span>
          <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 8 }}>
            {t('title1')} <span className="text-teal">{t('title2')}</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 48, maxWidth: 680 }}>
            {t('desc')}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}></th>
                  <th style={{
                    padding: '16px 20px', textAlign: 'center',
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}>{t('col1')}</th>
                  <th style={{
                    padding: '16px 20px', textAlign: 'center',
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}>{t('col2')}</th>
                  <th style={{
                    padding: '16px 24px', textAlign: 'center',
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: '#fff',
                    background: 'var(--orange)',
                    borderBottom: '1px solid var(--orange)',
                  }}>{t('col3')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const label = typeof row === 'string' ? row : row.label
                  const vals = typeof row === 'string' ? [false, false, true] : row.values
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{
                        padding: '16px 20px',
                        fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)',
                      }}>{label}</td>
                      <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                        {vals[0] ? <Check /> : <Cross />}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                        {vals[1] ? <Check /> : <Cross />}
                      </td>
                      <td style={{
                        padding: '16px 24px', textAlign: 'center',
                        background: 'rgba(232,71,42,0.08)',
                      }}>
                        {vals[2] ? <Check /> : <Cross />}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{
            background: 'rgba(0,196,212,0.04)', borderLeft: '4px solid var(--teal)',
            padding: '20px 24px', marginTop: 32, maxWidth: 900,
          }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              {t('footer')}{' '}
            </span>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff' }}>
              {t('footerBold')}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
