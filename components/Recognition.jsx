'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/Animate'

export default function Recognition() {
  const t = useTranslations('recognition')

  return (
    <section
      style={{
        background: 'var(--navy)',
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
      className="recognition-pad"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}
        className="recognition-inner"
      >
        <FadeIn>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}
            className="recognition-content"
          >
            <img
              src="/logo-manatech.png"
              alt="Mana Tech"
              className="recognition-logo"
              style={{
                height: 32,
                width: 'auto',
                opacity: 0.4,
                flexShrink: 0,
              }}
            />

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {t('text')}{' '}
              <a
                href="https://lnkd.in/p/esYN5yUp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(0,196,212,0.45)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,196,212,0.15)',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'rgba(0,196,212,0.7)'
                  e.target.style.borderColor = 'rgba(0,196,212,0.35)'
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(0,196,212,0.45)'
                  e.target.style.borderColor = 'rgba(0,196,212,0.15)'
                }}
              >
                {t('linkText')}
              </a>
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .recognition-pad { padding: 32px 24px !important; }
          .recognition-content { flex-direction: column; text-align: center; gap: 12px !important; }
        }
      `}</style>
    </section>
  )
}
