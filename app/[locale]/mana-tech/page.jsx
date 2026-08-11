import { buildMetadata, seoConfig } from '@/lib/metadata'
import ManaTech from '@/components/pages/ManaTech'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/mana-tech', ...seoConfig['/mana-tech'] })
}

export default function Page() {
  return <ManaTech />
}
