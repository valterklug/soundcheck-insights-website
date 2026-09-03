'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

const productLinks = {
  'market-research': '/market-research',
  'goglobal': '/expansion-report',
  'scale': '/scale-assessment',
  'customer-journey': '/consumer-journeys',
  'virtual-focus-group': '/virtual-focus-groups',
  'living-intelligence': '/living-intelligence',
}

export default function ForBrands() {
  const t = useTranslations()
  const [formState, setFormState] = useState('idle')

  const doneForYouItems = t.raw('forBrands.doneForYou.items')
  const enterpriseItems = t.raw('forBrands.enterprise.items')
  const products = t.raw('forBrands.products')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('https://formsubmit.co/ajax/info@soundcheckinsights.com', {
        method: 'POST',
        body: data,
      })
      setFormState('sent')
      form.reset()
    } catch {
      setFormState('error')
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" style={{ borderBottom: '3px solid var(--teal)' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('forBrands.heroLabel')}</span>
          <h1 className="page-h1" style={{ maxWidth: 800 }}>
            {t('forBrands.heroTitle')}
          </h1>
          <p className="page-sub" style={{ maxWidth: 680 }}>
            {t('forBrands.heroSub')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">{t('forBrands.heroCta')}</Link>
            <a href="#brief" className="btn btn-glass" style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff', padding: '12px 24px', fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center',
              borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s',
            }}>{t('forBrands.heroSecondary')}</a>
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forBrands.pathsLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 48,
            }}>
              {t('forBrands.pathsTitle')}
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="grid-2">
            {/* Done for You */}
            <FadeIn>
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderTop: '3px solid var(--teal)', padding: '36px 28px', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12,
                }}>{t('forBrands.doneForYou.label')}</div>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300,
                  color: '#fff', marginBottom: 8, lineHeight: 1.2,
                }}>{t('forBrands.doneForYou.title')}</div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7, marginBottom: 4, fontStyle: 'italic',
                }}>{t('forBrands.doneForYou.subtitle')}</p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.7, marginBottom: 20,
                }}>{t('forBrands.doneForYou.desc')}</p>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)',
                  marginBottom: 12,
                }}>{t('forBrands.doneForYou.whatYouGet')}</div>
                {doneForYouItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--teal)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>&#x25CF;</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                  <a href="#brief" style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
                    color: 'var(--teal)', textDecoration: 'none', borderBottom: '1px solid var(--teal)',
                    paddingBottom: 2,
                  }}>{t('forBrands.doneForYou.cta')}</a>
                </div>
              </div>
            </FadeIn>

            {/* Enterprise */}
            <FadeIn delay={0.1}>
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderTop: '3px solid var(--orange)', padding: '36px 28px', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 12,
                }}>{t('forBrands.enterprise.label')}</div>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, fontWeight: 300,
                  color: '#fff', marginBottom: 8, lineHeight: 1.2,
                }}>{t('forBrands.enterprise.title')}</div>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7, marginBottom: 4, fontStyle: 'italic',
                }}>{t('forBrands.enterprise.subtitle')}</p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.7, marginBottom: 20,
                }}>{t('forBrands.enterprise.desc')}</p>
                <div style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)',
                  marginBottom: 12,
                }}>{t('forBrands.enterprise.featuresLabel')}</div>
                {enterpriseItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0' }}>
                    <div style={{ color: 'var(--orange)', flexShrink: 0, fontSize: 10, marginTop: 3 }}>&#x25CF;</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.25)',
                  lineHeight: 1.6, marginTop: 20, fontStyle: 'italic',
                }}>{t('forBrands.enterprise.bestFor')}</p>
                <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                  <Link href="/contact" style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
                    color: 'var(--orange)', textDecoration: 'none', borderBottom: '1px solid var(--orange)',
                    paddingBottom: 2,
                  }}>{t('forBrands.enterprise.cta')}</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{"@media(max-width:900px){.grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Product Grid */}
      <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forBrands.gridLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 12,
            }}>
              {t('forBrands.gridTitle')}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7, marginBottom: 48, maxWidth: 600,
            }}>
              {t('forBrands.gridSub')}
            </p>
          </FadeIn>
          <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="product-grid-3">
            {products.map((p) => (
              <StaggerItem key={p.id}>
                <Link href={productLinks[p.id] || '/products'} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    borderTop: '3px solid var(--teal)', padding: '32px 24px', height: '100%',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 12 }}>{p.icon}</div>
                    <div style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, fontWeight: 500,
                      color: '#fff', marginBottom: 8,
                    }}>{p.name}</div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--teal)',
                      lineHeight: 1.5, marginBottom: 10, fontStyle: 'italic',
                    }}>"{p.question}"</p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.6,
                    }}>{p.desc}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.product-grid-3{grid-template-columns:1fr 1fr!important}}@media(max-width:600px){.product-grid-3{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Intake Form */}
      <section id="brief" style={{ background: 'var(--navy-2)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeIn>
            <span className="sc-label">{t('forBrands.formLabel')}</span>
            <h2 style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)',
              fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.15, marginBottom: 40,
            }}>
              {t('forBrands.formTitle')}
            </h2>
          </FadeIn>

          {formState === 'sent' ? (
            <FadeIn>
              <div style={{
                background: 'rgba(0,196,212,0.06)', border: '1px solid rgba(0,196,212,0.2)',
                borderTop: '3px solid var(--teal)', padding: '40px 32px', textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, fontWeight: 400,
                  color: '#fff', lineHeight: 1.5,
                }}>{t('forBrands.formSuccess')}</p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.05}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <input type="hidden" name="_subject" value="[Soundcheck] Brand Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid-2">
                  <div>
                    <label style={labelStyle}>{t('forBrands.form.name')} *</label>
                    <input name="name" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t('forBrands.form.email')} *</label>
                    <input name="email" type="email" required style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid-2">
                  <div>
                    <label style={labelStyle}>{t('forBrands.form.company')} *</label>
                    <input name="company" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t('forBrands.form.industry')}</label>
                    <input name="industry" type="text" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{t('forBrands.form.decision')} *</label>
                  <textarea name="decision" required rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                <div>
                  <label style={labelStyle}>{t('forBrands.form.timeline')}</label>
                  <select name="timeline" style={inputStyle}>
                    <option value="">{t('forBrands.form.timelineDefault')}</option>
                    {t.raw('forBrands.form.timelineOptions').map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>{t('forBrands.form.referral')}</label>
                  <input name="referral" type="text" style={inputStyle} />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '14px 32px', fontSize: 14, opacity: formState === 'sending' ? 0.6 : 1 }}
                >
                  {formState === 'sending' ? t('forBrands.form.sending') : t('forBrands.form.submit')}
                </button>

                {formState === 'error' && (
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--orange)' }}>
                    {t('forBrands.form.error')}
                  </p>
                )}
              </form>
            </FadeIn>
          )}
        </div>
        <style>{"@media(max-width:600px){.form-grid-2{grid-template-columns:1fr!important}}"}</style>
      </section>

      {/* Bottom CTA */}
      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('forBrands.ctaTitle')}</h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.45)',
            maxWidth: 520, margin: '16px auto 0', lineHeight: 1.7, textAlign: 'center',
          }}>
            {t('forBrands.ctaSub')}
          </p>
        </FadeIn>
        <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <Link href="/contact" className="btn btn-white">{t('forBrands.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}

const labelStyle = {
  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, fontWeight: 500,
  letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
  display: 'block', marginBottom: 6,
}

const inputStyle = {
  width: '100%', padding: '12px 14px', fontFamily: 'Inter, sans-serif', fontSize: 14,
  color: '#fff', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 4, outline: 'none', transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}
