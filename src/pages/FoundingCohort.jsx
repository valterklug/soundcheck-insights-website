import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import { getLangFromPath } from '../i18n'
import ContactForm from '../components/ContactForm'

export default function FoundingCohort() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const benefits = t('foundingCohort.benefits', { returnObjects: true })
  const profileItems = t('foundingCohort.profileItems', { returnObjects: true })
  const selectionItems = t('foundingCohort.selectionItems', { returnObjects: true })
  const toolkitItems = t('foundingCohort.toolkitItems', { returnObjects: true })
  const faqItems = t('foundingCohort.faqItems', { returnObjects: true })

  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(232,71,42,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="page-hero-inner" style={{ position: 'relative' }}>
          <span className="sc-label sc-label-orange">{t('foundingCohort.heroLabel')}</span>
          <h1 className="page-h1" style={{ marginBottom: 16 }}>
            {t('foundingCohort.heroTitle1')}<br />
            <span className="text-orange">{t('foundingCohort.heroTitle2')}</span>
          </h1>
          <p className="page-sub" style={{ maxWidth: 640 }}>{t('foundingCohort.heroSub')}</p>

          {/* Urgency chips */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            <div className="chip"><strong>10</strong> {t('foundingCohort.chipSeats')}</div>
            <div className="chip"><strong>85%</strong> {t('foundingCohort.chipFirst2')}</div>
            <div className="chip"><strong>75%</strong> {t('foundingCohort.chipForLife')}</div>
            <div className="chip"><strong>0</strong> {t('foundingCohort.chipSetup')}</div>
          </div>

          <a href="#apply" style={{
            display: 'inline-block', marginTop: 32,
            background: 'var(--orange)', color: '#fff',
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.9375rem', fontWeight: 600,
            padding: '16px 36px', borderRadius: 4, textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.15s',
          }}
            onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
          >
            {t('foundingCohort.heroCta')}
          </a>
        </div>
      </section>

      {/* ── The Deal: 3 benefit cards ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('foundingCohort.dealLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.5rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 40,
            }}>
              {t('foundingCohort.dealTitle')}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2,
          }}>
            {benefits.map((b, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: i === 0 ? 'rgba(232,71,42,0.05)' : 'rgba(255,255,255,0.03)',
                  border: i === 0 ? '1px solid rgba(232,71,42,0.2)' : '1px solid rgba(0,196,212,0.14)',
                  padding: '36px 28px', height: '100%',
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)',
                    fontWeight: 300, color: i === 0 ? 'var(--orange)' : '#fff', marginBottom: 8,
                  }}>
                    {b.stat}
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1rem', fontWeight: 500,
                    color: '#fff', marginBottom: 10,
                  }}>
                    {b.title}
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
                  }}>
                    {b.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── The Math ── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('foundingCohort.mathLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 24,
            }}>
              {t('foundingCohort.mathTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 20,
            }}>
              {t('foundingCohort.mathDesc')}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            {/* Comparison table */}
            <div style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)', marginBottom: 14,
            }}>
              {t('foundingCohort.mathTableHeader')}
            </div>

            {/* Headers */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 0 }} className="econ-grid">
              <div style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.01)' }} />
              <div style={{
                padding: '12px 14px', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center',
              }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  {t('foundingCohort.mathColStandard')}
                </div>
              </div>
              <div style={{
                padding: '12px 14px', background: 'rgba(232,71,42,0.06)',
                border: '1px solid rgba(232,71,42,0.15)', textAlign: 'center',
              }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  {t('foundingCohort.mathColFounding')}
                </div>
              </div>
            </div>

            {/* Rows */}
            {t('foundingCohort.mathRows', { returnObjects: true }).map(([label, std, founding], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 0, marginBottom: 1 }} className="econ-grid">
                <div style={{ padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{label}</span>
                </div>
                <div style={{ padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>{std}</span>
                </div>
                <div style={{ padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#fff' }}>{founding}</span>
                </div>
              </div>
            ))}

            {/* Highlight row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 0, marginTop: 1 }} className="econ-grid">
              <div style={{ padding: '14px 14px', background: 'rgba(232,71,42,0.08)', border: '1px solid rgba(232,71,42,0.15)', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>{t('foundingCohort.mathEffectiveRate')}</span>
              </div>
              <div style={{ padding: '14px 14px', background: 'rgba(232,71,42,0.08)', border: '1px solid rgba(232,71,42,0.15)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>{t('foundingCohort.mathRateStandard')}</span>
              </div>
              <div style={{ padding: '14px 14px', background: 'rgba(232,71,42,0.08)', border: '1px solid rgba(232,71,42,0.15)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--orange)' }}>{t('foundingCohort.mathRateFounding')}</span>
              </div>
            </div>

            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.3)', marginTop: 14, lineHeight: 1.5,
            }}>
              {t('foundingCohort.mathFootnote')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Your Toolkit ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('foundingCohort.toolkitLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 14,
            }}>
              {t('foundingCohort.toolkitTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 680,
            }}>
              {t('foundingCohort.toolkitDesc')}
            </p>
          </FadeIn>

          <StaggerContainer style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2,
          }} className="grid-5">
            {toolkitItems.map((item, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,196,212,0.14)',
                  padding: '24px 20px', height: '100%',
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.68rem', fontWeight: 500,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: item.color || 'var(--teal)', marginBottom: 8,
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.95rem', fontWeight: 500,
                    color: '#fff', marginBottom: 6,
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.4)', lineHeight: 1.5,
                  }}>
                    {item.price}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.35)', marginTop: 20, textAlign: 'center',
            }}>
              {t('foundingCohort.toolkitTypical')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Who Should Apply ── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <FadeIn>
            <span className="sc-label">{t('foundingCohort.profileLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 24,
            }}>
              {t('foundingCohort.profileTitle')}
            </h2>

            {profileItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16,
              }}>
                <span style={{ color: 'var(--teal)', fontSize: 14, marginTop: 2, flexShrink: 0 }}>—</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.65,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="sc-label sc-label-orange">{t('foundingCohort.selectionLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 24,
            }}>
              {t('foundingCohort.selectionTitle')}
            </h2>

            {selectionItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16,
              }}>
                <span style={{ color: 'var(--orange)', fontSize: 14, marginTop: 2, flexShrink: 0 }}>—</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.55)', lineHeight: 1.65,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Operator Zero Proof ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <span className="sc-label">{t('foundingCohort.proofLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 24,
            }}>
              {t('foundingCohort.proofTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40,
            }}>
              {t('foundingCohort.proofDesc')}
            </p>
          </FadeIn>

          <StaggerContainer style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2,
          }} className="grid-4">
            {[
              { num: '20+', label: t('foundingCohort.proofStat1') },
              { num: '9', label: t('foundingCohort.proofStat2') },
              { num: '4', label: t('foundingCohort.proofStat3') },
              { num: '$0', label: t('foundingCohort.proofStat4') },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,196,212,0.14)',
                  padding: '28px 16px',
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)',
                    fontWeight: 300, color: 'var(--teal)', marginBottom: 6,
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.4)', lineHeight: 1.4,
                  }}>
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('foundingCohort.faqLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 40,
            }}>
              {t('foundingCohort.faqTitle')}
            </h2>
          </FadeIn>

          {faqItems.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{
                borderBottom: '1px solid rgba(0,196,212,0.1)',
                paddingBottom: 24, marginBottom: 24,
              }}>
                <h3 style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1rem', fontWeight: 500,
                  color: '#fff', marginBottom: 8,
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
                }}>
                  {faq.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('foundingCohort.formLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 10,
            }}>
              {t('foundingCohort.formTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32,
            }}>
              {t('foundingCohort.formDesc')}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ContactForm
              dark
              fields="cohort"
              buttonLabel={t('foundingCohort.formButton')}
              formName="Founding Operator Cohort Application"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Orange CTA Strip ── */}
      <section style={{
        background: 'var(--orange)', padding: '80px 60px',
        display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 60,
      }} className="cta-strip section-pad">
        <div>
          <h2 style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)',
            fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, color: '#fff', marginBottom: 10,
          }}>
            {t('foundingCohort.ctaTitle')}
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '1rem',
            color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
          }}>
            {t('foundingCohort.ctaSub')}
          </p>
        </div>
        <a href="#apply" style={{
          background: '#fff', color: 'var(--orange)',
          fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.875rem', fontWeight: 700,
          padding: '16px 36px', borderRadius: 4, textDecoration: 'none',
          transition: 'opacity 0.2s, transform 0.15s', flexShrink: 0,
        }}
          onMouseEnter={e => { e.target.style.opacity = '0.92'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
        >
          {t('foundingCohort.ctaButton')}
        </a>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-strip { grid-template-columns: 1fr !important; text-align: center; }
        }
        @media (max-width: 640px) {
          .grid-5 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
