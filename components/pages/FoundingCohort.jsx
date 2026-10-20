'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { PageWrapper } from '@/components/Animate'

// The Founding Cohort closed in October 2026. The address stays live so old
// links land somewhere useful: the standard plans.
export default function FoundingCohort() {
  const t = useTranslations('foundingCohort')

  return (
    <PageWrapper>
      <section className="page-hero" style={{ borderBottom: '3px solid var(--orange)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('heroLabel')}</span>
          <h1 className="page-h1">{t('heroTitle')}</h1>
          <p className="page-sub">{t('heroSub')}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
            <Link href="/pricing" className="btn btn-primary">{t('pricingLink')}</Link>
            <Link href="/for-consultants" className="btn btn-secondary">{t('consultantsLink')}</Link>
            <Link href="/contact" className="btn btn-secondary">{t('contactLink')}</Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
