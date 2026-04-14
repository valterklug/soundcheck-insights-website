import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { languages, getLangFromPath, getPathWithoutLang, getLocalizedPath } from '../i18n'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const currentLang = getLangFromPath(location.pathname)

  const switchLang = (code) => {
    if (code === currentLang) return
    i18n.changeLanguage(code)
    const basePath = getPathWithoutLang(location.pathname)
    navigate(getLocalizedPath(basePath, code))
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
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: 11,
            fontWeight: currentLang === code ? 600 : 400,
            color: currentLang === code ? '#4DDDE8' : 'rgba(255,255,255,0.35)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 6px',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { if (currentLang !== code) e.target.style.color = '#fff' }}
          onMouseLeave={e => { if (currentLang !== code) e.target.style.color = 'rgba(255,255,255,0.35)' }}
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
