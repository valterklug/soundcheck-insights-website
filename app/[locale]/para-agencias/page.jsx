import { buildMetadata, seoConfig } from '@/lib/metadata'
import ParaAgencias from '@/components/pages/ParaAgencias'

// Portuguese-only landing page; /para-agencias, /en/… and /es/… redirect here (next.config.js).
export async function generateMetadata() {
  return buildMetadata({ locale: 'pt', path: '/para-agencias', ...seoConfig['/para-agencias'] })
}

export default function Page() {
  return <ParaAgencias />
}
