import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import { getLangFromPath, getPathWithoutLang } from './i18n'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SEO from './components/SEO'
import seoConfig from './seoConfig'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import ForAgencies from './pages/ForAgencies'
import Products from './pages/Products'
import Resources from './pages/Resources'
import Partner from './pages/Partner'
import OurPartners from './pages/OurPartners'
import ForInvestors from './pages/ForInvestors'
import ExpansionReport from './pages/ExpansionReport'
import GrowthRoadmap from './pages/GrowthRoadmap'
import ScaleAssessment from './pages/ScaleAssessment'
import IdeaValidation from './pages/IdeaValidation'
import BusinessPlan from './pages/BusinessPlan'
import VirtualFocusGroups from './pages/VirtualFocusGroups'
import FounderPass from './pages/FounderPass'
import InvestorVetting from './pages/InvestorVetting'
import Contact from './pages/Contact'
import USMarketAssumptions from './pages/articles/USMarketAssumptions'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function LanguageSync() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  useEffect(() => {
    const lang = getLangFromPath(pathname)
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [pathname, i18n])
  return null
}

function RouteSEO() {
  const { pathname } = useLocation()
  const basePath = getPathWithoutLang(pathname)
  const config = seoConfig[basePath]
  if (!config) return null
  return <SEO path={pathname} {...config} />
}

const routes = [
  { path: '/', element: <Home /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/for-agencies', element: <ForAgencies /> },
  { path: '/for-investors', element: <ForInvestors /> },
  { path: '/products', element: <Products /> },
  { path: '/expansion-report', element: <ExpansionReport /> },
  { path: '/growth-roadmap', element: <GrowthRoadmap /> },
  { path: '/scale-assessment', element: <ScaleAssessment /> },
  { path: '/idea-validation', element: <IdeaValidation /> },
  { path: '/business-plan', element: <BusinessPlan /> },
  { path: '/virtual-focus-groups', element: <VirtualFocusGroups /> },
  { path: '/founder-pass', element: <FounderPass /> },
  { path: '/investor-vetting', element: <InvestorVetting /> },
  { path: '/resources', element: <Resources /> },
  { path: '/partner', element: <Partner /> },
  { path: '/our-partners', element: <OurPartners /> },
  { path: '/contact', element: <Contact /> },
  { path: '/articles/us-market-assumptions', element: <USMarketAssumptions /> },
]

function Layout() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <LanguageSync />
      <RouteSEO />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* English (default) routes */}
          {routes.map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {/* Spanish routes */}
          {routes.map(r => (
            <Route key={`es${r.path}`} path={`/es${r.path === '/' ? '' : r.path}`} element={r.element} />
          ))}
          {/* Portuguese routes */}
          {routes.map(r => (
            <Route key={`pt${r.path}`} path={`/pt${r.path === '/' ? '' : r.path}`} element={r.element} />
          ))}
          {/* Redirect /es and /pt bare paths to their home */}
          <Route path="/es" element={<Home />} />
          <Route path="/pt" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
