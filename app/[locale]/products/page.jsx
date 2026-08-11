import { buildMetadata, seoConfig } from '@/lib/metadata'
import Products from '@/components/pages/Products'

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({ locale, path: '/products', ...seoConfig['/products'] })
}

export default function Page() {
  return <Products />
}
