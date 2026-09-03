import { buildMetadata, seoConfig } from '@/lib/metadata'
import ForBrands from '@/components/pages/ForBrands'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/for-brands', ...seoConfig['/for-brands'] })
}

export default function Page() {
  return <ForBrands />
}
