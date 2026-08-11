
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'
import { getLangFromPath } from '../i18n'

const FORMSUBMIT_EMAIL = 'info@soundcheckinsights.com'

export default function Partnerships() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)

  const chips = t('partnerships.chips', { returnObjects: true })
  const problemCards = t('partnerships.problemCards', { returnObjects: true })
  const path1Stats = t('partnerships.path1Stats', { returnObjects: true })
  const path2Stats = t('partnerships.path2Stats', { returnObjects: true })
  const path1BestForItems = t('partnerships.path1BestForItems', { returnObjects: true })
  const path2BestForItems = t('partnerships.path2BestForItems', { returnObjects: true })
  const products = t('partnerships.products', { returnObjects: true })
  const whoCategories = t('partnerships.whoCategories', { returnObjects: true })
  const howPath1Steps = t('partnerships.howPath1Steps', { returnObjects: true })
  const howPath2Steps = t('partnerships.howPath2Steps', { returnObjects: true })
  const formOrgTypeOptions = t('partnerships.formOrgTypeOptions', { returnObjects: true })
  const formInterestOptions = t('partnerships.formInterestOptions', { returnObjects: true })

  // ── Form state ──
  const [formData, setFormData] = useState({
    orgName: '', contactName: '', email: '', orgType: '',
    memberCount: '', corridor: '', interest: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `[Soundcheck] Partnership Inquiry — ${formData.orgName}`,
          _template: 'table',
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setFormData({ orgName: '', contactName: '', email: '', orgType: '', memberCount: '', corridor: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      {/* ── 1. Hero ── */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(232,71,42,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="page-hero-inner" style={{ position: 'relative' }}>
          <span className="sc-label sc-label-orange">{t('partnerships.heroLabel')}</span>
          <h1 className="page-h1" style={{ marginBottom: 16 }}>
            {t('partnerships.heroTitle1')}
            <span style={{ color: 'var(--teal)' }}>{t('partnerships.heroTitle2')}</span>
          </h1>
          <p className="page-sub" style={{ maxWidth: 660 }}>{t('partnerships.heroSub')}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
            {chips.map(chip => (
              <div key={chip.value} className="chip">{chip.icon} <strong>{chip.value}</strong> {chip.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Problem Section ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('partnerships.problemLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 20,
            }}>
              {t('partnerships.problemTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.75,
            }}>
              {t('partnerships.problemDesc')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <StaggerContainer style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2-inner">
              {problemCards.map((card, i) => (
                <StaggerItem key={i}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '28px 22px', height: '100%',
                  }}>
                    <div style={{ fontSize: 22, marginBottom: 14 }}>{card.icon}</div>
                    <div style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500,
                      color: '#fff', marginBottom: 8,
                    }}>
                      {card.title}
                    </div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13,
                      color: 'rgba(255,255,255,0.4)', lineHeight: 1.65,
                    }}>
                      {card.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. Two Paths ── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('partnerships.pathsLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 48,
            }}>
              {t('partnerships.pathsTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            {/* Path 1 — Teal accent */}
            <FadeIn>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,196,212,0.14)',
                borderTop: '3px solid var(--teal)',
                padding: '36px 28px', height: '100%',
              }}>
                <span style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--teal)', display: 'inline-block',
                  background: 'rgba(0,196,212,0.08)', padding: '5px 12px', marginBottom: 16,
                }}>
                  {t('partnerships.path1Label')}
                </span>
                <h3 style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1.25rem', fontWeight: 500,
                  color: '#fff', marginBottom: 12,
                }}>
                  {t('partnerships.path1Title')}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 24,
                }}>
                  {t('partnerships.path1Desc')}
                </p>
                {/* Stats */}
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
                  {path1Stats.map((stat, i) => (
                    <div key={i}>
                      <div style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.2rem,2vw,1.6rem)',
                        fontWeight: 300, color: 'var(--teal)', letterSpacing: '-0.01em',
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 11,
                        color: 'rgba(255,255,255,0.35)', marginTop: 2,
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Best for */}
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', marginBottom: 10,
                }}>
                  {t('partnerships.path1BestFor')}
                </div>
                {path1BestForItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: 'var(--teal)', fontSize: 13, marginTop: 1, flexShrink: 0 }}>--</span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13,
                      color: 'rgba(255,255,255,0.5)', lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
            {/* Path 2 — Orange accent */}
            <FadeIn delay={0.1}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(232,71,42,0.14)',
                borderTop: '3px solid var(--orange)',
                padding: '36px 28px', height: '100%',
              }}>
                <span style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--orange)', display: 'inline-block',
                  background: 'rgba(232,71,42,0.08)', padding: '5px 12px', marginBottom: 16,
                }}>
                  {t('partnerships.path2Label')}
                </span>
                <h3 style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1.25rem', fontWeight: 500,
                  color: '#fff', marginBottom: 12,
                }}>
                  {t('partnerships.path2Title')}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 24,
                }}>
                  {t('partnerships.path2Desc')}
                </p>
                {/* Stats */}
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
                  {path2Stats.map((stat, i) => (
                    <div key={i}>
                      <div style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.2rem,2vw,1.6rem)',
                        fontWeight: 300, color: 'var(--orange)', letterSpacing: '-0.01em',
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 11,
                        color: 'rgba(255,255,255,0.35)', marginTop: 2,
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Best for */}
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)', marginBottom: 10,
                }}>
                  {t('partnerships.path2BestFor')}
                </div>
                {path2BestForItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                    <span style={{ color: 'var(--orange)', fontSize: 13, marginTop: 1, flexShrink: 0 }}>--</span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13,
                      color: 'rgba(255,255,255,0.5)', lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 4. Products ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('partnerships.productsLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 10,
            }}>
              {t('partnerships.productsTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 700,
            }}>
              {t('partnerships.productsSub')}
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }} className="grid-5">
            {products.map((p, i) => (
              <StaggerItem key={i}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(0,196,212,0.14)',
                  padding: '24px 20px', height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.95rem', fontWeight: 500,
                    color: '#fff', marginBottom: 8,
                  }}>
                    {p.name}
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, flex: 1, marginBottom: 14,
                  }}>
                    {p.desc}
                  </p>
                  <div style={{
                    background: 'rgba(0,196,212,0.06)', padding: '10px 12px',
                    borderLeft: '2px solid var(--teal)',
                  }}>
                    <div style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
                      color: 'var(--teal)',
                    }}>
                      {p.price}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 5. Who This Is For ── */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('partnerships.whoLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 40,
            }}>
              {t('partnerships.whoTitle')}
            </h2>
          </FadeIn>
          <StaggerContainer style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {whoCategories.map((cat, i) => (
              <StaggerItem key={i}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(0,196,212,0.12)',
                  padding: '10px 18px',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)',
                }}>
                  <span style={{ fontSize: 16 }}>{cat.icon}</span>
                  {cat.name}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 6. How It Works ── */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid rgba(0,196,212,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('partnerships.howLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 48,
            }}>
              {t('partnerships.howTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="grid-2">
            {/* Path 1 steps */}
            <FadeIn>
              <div style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--teal)', marginBottom: 20,
              }}>
                {t('partnerships.howPath1Title')}
              </div>
              {howPath1Steps.map((step, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, alignItems: 'flex-start',
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: 'rgba(0,196,212,0.1)', border: '1px solid rgba(0,196,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600,
                    color: 'var(--teal)', flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500,
                      color: '#fff', marginBottom: 4,
                    }}>
                      {step.title}
                    </div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13,
                      color: 'rgba(255,255,255,0.45)', lineHeight: 1.6,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </FadeIn>
            {/* Path 2 steps */}
            <FadeIn delay={0.1}>
              <div style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--orange)', marginBottom: 20,
              }}>
                {t('partnerships.howPath2Title')}
              </div>
              {howPath2Steps.map((step, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, alignItems: 'flex-start',
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: 'rgba(232,71,42,0.1)', border: '1px solid rgba(232,71,42,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 600,
                    color: 'var(--orange)', flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500,
                      color: '#fff', marginBottom: 4,
                    }}>
                      {step.title}
                    </div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13,
                      color: 'rgba(255,255,255,0.45)', lineHeight: 1.6,
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 7. CTA + Form ── */}
      <section id="partnership-form" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid rgba(232,71,42,0.12)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          {/* Left: CTA copy */}
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('partnerships.ctaTitle')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 20,
            }}>
              {t('partnerships.ctaSub')}
            </h2>
            <a href="#partnership-form" className="btn-primary" style={{
              display: 'inline-block', marginTop: 8,
              background: 'var(--orange)', color: '#fff',
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.9375rem', fontWeight: 600,
              padding: '16px 36px', borderRadius: 4, textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
            }}
              onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
            >
              {t('partnerships.ctaButton')}
            </a>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.15}>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '36px 32px',
            }}>
              <h3 style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1.25rem', fontWeight: 500,
                color: '#fff', marginBottom: 6,
              }}>
                {t('partnerships.formTitle')}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 28,
              }}>
                {t('partnerships.formSub')}
              </p>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: 'rgba(0,196,212,0.08)', border: '1px solid rgba(0,196,212,0.2)',
                    padding: '32px 24px', textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '1.1rem', fontWeight: 500,
                    color: 'var(--teal)', marginBottom: 8,
                  }}>
                    {t('partnerships.formThankYou')}
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.5)', lineHeight: 1.6,
                  }}>
                    {t('partnerships.formThankYouSub')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Org Name */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                    }}>
                      {t('partnerships.formOrgName')}
                    </label>
                    <input
                      type="text" name="orgName" required
                      className="form-field form-field-dark"
                      placeholder={t('partnerships.formOrgNamePlaceholder')}
                      value={formData.orgName} onChange={handleChange}
                    />
                  </div>

                  {/* Contact Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }} className="form-grid-inner">
                    <div>
                      <label style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                      }}>
                        {t('partnerships.formContactName')}
                      </label>
                      <input
                        type="text" name="contactName" required
                        className="form-field form-field-dark"
                        placeholder={t('partnerships.formContactNamePlaceholder')}
                        value={formData.contactName} onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                      }}>
                        {t('partnerships.formEmail')}
                      </label>
                      <input
                        type="email" name="email" required
                        className="form-field form-field-dark"
                        placeholder={t('partnerships.formEmailPlaceholder')}
                        value={formData.email} onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Org Type + Member Count */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }} className="form-grid-inner">
                    <div>
                      <label style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                      }}>
                        {t('partnerships.formOrgType')}
                      </label>
                      <select
                        name="orgType" required
                        className="form-field form-field-dark"
                        style={{ color: formData.orgType ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)' }}
                        value={formData.orgType} onChange={handleChange}
                      >
                        <option value="">Select one</option>
                        {formOrgTypeOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{
                        fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                      }}>
                        {t('partnerships.formMemberCount')}
                      </label>
                      <input
                        type="text" name="memberCount"
                        className="form-field form-field-dark"
                        placeholder={t('partnerships.formMemberCountPlaceholder')}
                        value={formData.memberCount} onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Corridor */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                    }}>
                      {t('partnerships.formCorridor')}
                    </label>
                    <input
                      type="text" name="corridor"
                      className="form-field form-field-dark"
                      placeholder={t('partnerships.formCorridorPlaceholder')}
                      value={formData.corridor} onChange={handleChange}
                    />
                  </div>

                  {/* Interest Path */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                    }}>
                      {t('partnerships.formInterest')}
                    </label>
                    <select
                      name="interest"
                      className="form-field form-field-dark"
                      style={{ color: formData.interest ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)' }}
                      value={formData.interest} onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      {formInterestOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 6,
                    }}>
                      {t('partnerships.formMessage')}
                    </label>
                    <textarea
                      name="message" rows={4}
                      className="form-field form-field-dark"
                      placeholder={t('partnerships.formMessagePlaceholder')}
                      value={formData.message} onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="form-submit"
                    style={{
                      width: '100%', background: 'var(--orange)', color: '#fff',
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '0.9375rem', fontWeight: 600,
                      padding: '16px 36px', border: 'none', borderRadius: 4,
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1,
                      transition: 'opacity 0.2s, transform 0.15s',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : t('partnerships.formSubmit')}
                  </button>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{
                          background: 'rgba(232,71,42,0.1)', border: '1px solid rgba(232,71,42,0.3)',
                          padding: '14px 18px', marginTop: 14,
                          fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#ff9080', lineHeight: 1.5,
                        }}
                      >
                        {t('partnerships.formError')}{' '}
                        <a href="mailto:info@soundcheckinsights.com" style={{ color: '#E8472A' }}>info@soundcheckinsights.com</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .grid-2 { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .grid-5 { grid-template-columns: 1fr !important; }
          .grid-2-inner { grid-template-columns: 1fr !important; }
          .form-grid-inner { grid-template-columns: 1fr !important; }
          .section-pad { padding: 60px 24px !important; }
        }
      `}</style>
    </PageWrapper>
  )
}
