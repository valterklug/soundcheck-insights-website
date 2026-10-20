'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/Animate'
import FilmPlayer from '@/components/FilmPlayer'

export default function PlatformFilm() {
  const t = useTranslations('platformFilm')

  return (
    <section style={{ background: 'var(--navy)', padding: '80px 60px', borderTop: '1px solid var(--border)' }} className="section-pad">
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="sc-label">{t('label')}</span>
            <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 16 }}>
              {t('title')}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
              {t('desc')}
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <FilmPlayer
            src="/videos/soundcheck-platform-film.mp4"
            poster="/videos/soundcheck-platform-film-poster.jpg"
            playLabel={t('play')}
            duration={t('duration')}
          />
        </FadeIn>
      </div>
    </section>
  )
}
