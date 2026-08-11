import { buildMetadata, seoConfig } from '@/lib/metadata'
import HomePage from '@/components/pages/Home'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/', ...seoConfig['/'] })
}

export default function Page() {
  return <HomePage />
}
