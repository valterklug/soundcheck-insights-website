import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import ForAgencies from './pages/ForAgencies'
import Products from './pages/Products'
import Resources from './pages/Resources'
import Partner from './pages/Partner'
import OurPartners from './pages/OurPartners'
import ForInvestors from './pages/ForInvestors'
import ExpansionReport from './pages/ExpansionReport'
import Contact from './pages/Contact'
import USMarketAssumptions from './pages/articles/USMarketAssumptions'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-agencies" element={<ForAgencies />} />
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/products" element={<Products />} />
          <Route path="/expansion-report" element={<ExpansionReport />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/us-market-assumptions" element={<USMarketAssumptions />} />
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
