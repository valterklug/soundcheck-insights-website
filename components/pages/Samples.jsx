'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

const sampleData = [
  {
    key: 'goGlobal',
    color: 'var(--teal)',
    num: '02',
    links: [
      { type: 'dashboard', url: 'https://soundcheck.report/share/dashboard/9U6hrWfeTTZ5' },
      { type: 'fullReport', url: 'https://docs.google.com/document/d/15HQXPDenu9AKM5ustpmJOkBqax3VLYaH3YpKYomtwR8' },
      { type: 'presentationDeck', url: 'https://gamma.app/docs/ciad4h58l8df38n' },
    ],
    productLink: '/expansion-report',
  },
  {
    key: 'scale',
    color: 'var(--orange)',
    num: '03',
    links: [
      { type: 'dashboard', url: 'https://soundcheck.report/share/dashboard/e6kXnM4ggR8t' },
      { type: 'fullReport', url: 'https://docs.google.com/document/d/1iFyzyAPRufTnsR7PjTIcmRAGgVo40LWll7JJf40s5Ik/edit?usp=sharing' },
      { type: 'presentationDeck', url: 'https://gamma.app/docs/zdca0zk5usap36y' },
    ],
    productLink: '/scale-assessment',
  },
  {
    key: 'vfg',
    color: '#9B8FFF',
    num: '04',
    links: [
      { type: 'viewSample', url: 'https://soundcheck.report/share/DfcnPoLQ6M8J' },
    ],
    productLink: '/virtual-focus-groups',
  },
  {
    key: 'cj',
    color: 'var(--teal-2)',
    num: '05',
    links: [
      { type: 'viewSample', url: 'https://soundcheck.report/share/journey/CH8rMGjo4ijP' },
    ],
    productLink: '/consumer-journeys',
  },
]

export default function Samples() {
  const t = useTranslations()

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">{t('samples.heroLabel')}</span>
          <h1 className="page-h1">{t('samples.heroTitle')}</h1>
          <p className="page-sub" style={{ maxWidth: 720 }}>{t('samples.heroSub')}</p>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sampleData.map((sample, i) => (
              <FadeIn key={sample.key} delay={i * 0.08}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '280px 1fr',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${sample.color}`,
                  transition: 'border-color 0.2s',
                }} className="sample-row">
                  {/* Left */}
                  <div style={{ padding: '36px 28px', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: 6 }}>PRODUCT {sample.num}</div>
                      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: sample.color, marginBottom: 14 }}>
                        {t(`samples.${sample.key}Label`)}
                      </div>
                    </div>
                    <Link href={sample.productLink} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: sample.color, textDecoration: 'none', marginTop: 18 }}>
                      Product details →
                    </Link>
                  </div>

                  {/* Right */}
                  <div style={{ padding: '36px 40px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 24 }}>
                      {t(`samples.${sample.key}Desc`)}
                    </p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      {sample.links.map(link => (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500,
                            color: '#fff', background: 'rgba(255,255,255,0.06)',
                            border: `1px solid ${sample.color}44`,
                            padding: '10px 18px', textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            transition: 'background 0.2s, border-color 0.2s',
                          }}
                          onMouseEnter={e => { e.target.style.background = `${sample.color}15`; e.target.style.borderColor = `${sample.color}66` }}
                          onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.borderColor = `${sample.color}44` }}
                        >
                          {link.type === 'dashboard' && '📊'}
                          {link.type === 'fullReport' && '📄'}
                          {link.type === 'presentationDeck' && '📑'}
                          {link.type === 'viewSample' && '🔍'}
                          {t(`samples.${link.type}`)}
                          <span style={{ fontSize: 10, opacity: 0.5 }}>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) {
            .sample-row { grid-template-columns: 1fr !important; }
            .sample-row > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .section-pad { padding: 60px 24px !important; }
          }
        `}</style>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('samples.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('samples.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-white">{t('samples.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
