import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import HaloRailnet from './pages/HaloRailnet'
import Learning from './pages/Learning'
import Hooked from './pages/Hooked'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { signupRedirects } from './signup'

const titles = {
  '/': 'KeyTrain — Cybersecurity Made Simple',
  '/about': 'About Us — KeyTrain',
  '/team': 'Our Team — KeyTrain',
  '/halo-railnet': 'Halo + RailNet Intelligence — KeyTrain',
  '/learning': 'KeyTrain Learning — KeyTrain',
  '/hooked': 'HOOKeD Phishing Simulator — KeyTrain',
  '/services': 'Services — KeyTrain',
  '/work': 'Our Work — KeyTrain',
  '/contact': 'Contact Us — KeyTrain',
}

// URLs from the previous GoDaddy site, kept so existing links and search results still land.
const legacy = {
  '/about-our-company': '/about',
  '/our-team': '/team',
  '/contact-us': '/contact',
  '/keytrain-halo-+-railnet': '/halo-railnet',
  '/keytrain-halo-%2B-railnet': '/halo-railnet',
  '/keytrain-learning': '/learning',
}

// The build serves these as static redirect pages; this covers the dev server and trailing slashes.
function ExternalRedirect({ to }) {
  const { search } = useLocation()
  useEffect(() => {
    window.location.replace(to + search)
  }, [to, search])
  return null
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname.replace(/(.)\/+$/, '$1')] ?? 'Page Not Found — KeyTrain'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RouteEffects />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/halo-railnet" element={<HaloRailnet />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/hooked" element={<Hooked />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            {Object.entries(legacy).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            {Object.entries(signupRedirects).map(([from, to]) => (
              <Route key={from} path={from} element={<ExternalRedirect to={to} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
