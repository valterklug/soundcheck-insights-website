'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/Animate'

/**
 * Inline sample-report CTA for product pages.
 * @param {Object} props
 * @param {string} props.color - accent color (CSS var or hex)
 * @param {{ type: string, url: string }[]} props.links - sample links
 */
export default function SampleCta({ color = 'var(--teal)', links = [] }) {
  const t = useTranslations()

  return (
    <section style={{ background: 'var(--navy-2)', padding: '60px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            alignItems: 'center', gap: 40,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: `3px solid ${color}`,
            padding: '36px 40px',
          }} className="sample-cta-inner">
            <div>
              <span className="sc-label" style={{ color }}>{t('sampleCta.label')}</span>
              <h3 style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.2rem,2vw,1.6rem)',
                fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.15, marginBottom: 8,
              }}>
                {t('sampleCta.title')}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 13,
                color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, maxWidth: 520,
              }}>
                {t('sampleCta.desc')}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              {links.map(link => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500,
                    color: '#fff', background: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${color}44`,
                    padding: '10px 18px', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    whiteSpace: 'nowrap', transition: 'background 0.2s',
                  }}
                >
                  {link.type === 'dashboard' && '📊'}
                  {link.type === 'fullReport' && '📄'}
                  {link.type === 'presentationDeck' && '📑'}
                  {link.type === 'viewSample' && '🔍'}
                  {t(`samples.${link.type}`)}
                  <span style={{ fontSize: 10, opacity: 0.5 }}>↗</span>
                </a>
              ))}
              <Link href="/samples" style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11,
                color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginTop: 4,
              }}>
                {t('sampleCta.viewAll')}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .sample-cta-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
