'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
]

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLang = (code) => {
    if (code === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: code })
    })
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      marginLeft: 12,
      flexShrink: 0,
    }}>
      {languages.map(({ code, label }, i) => (
        <button
          key={code}
          onClick={() => switchLang(code)}
          disabled={isPending}
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: 11,
            fontWeight: locale === code ? 600 : 400,
            color: locale === code ? '#4DDDE8' : 'rgba(255,255,255,0.35)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 6px',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { if (locale !== code) e.target.style.color = '#fff' }}
          onMouseLeave={e => { if (locale !== code) e.target.style.color = 'rgba(255,255,255,0.35)' }}
        >
          {label}
          {i < languages.length - 1 && (
            <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: 6, fontWeight: 300 }}>|</span>
          )}
        </button>
      ))}
    </div>
  )
}
