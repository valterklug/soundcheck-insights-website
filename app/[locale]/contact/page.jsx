import { buildMetadata, seoConfig } from '@/lib/metadata'
import Contact from '@/components/pages/Contact'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/contact', ...seoConfig['/contact'] })
}

export default function Page() {
  return <Contact />
}
