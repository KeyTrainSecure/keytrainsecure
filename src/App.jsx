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
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import { signupRedirects } from './signup'
import { legacy, pages } from './routes'

// The build serves these as static redirect pages; this covers the dev server and trailing slashes.
function ExternalRedirect({ to }) {
  const { search } = useLocation()
  useEffect(() => {
    window.location.replace(to + search)
  }, [to, search])
  return null
}

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Land on the linked section for /page#section, otherwise start at the top.
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    document.title = pages[pathname.replace(/(.)\/+$/, '$1')] ?? 'Page Not Found — KeyTrain'
  }, [pathname, hash])
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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            {Object.entries(legacy).flatMap(([from, to]) =>
              // Also match the percent-encoded form old links use, e.g. %2B for + and %26 for &.
              [...new Set([from, encodeURI(from).replace(/\+/g, '%2B').replace(/&/g, '%26')])].map((path) => (
                <Route key={path} path={path} element={<Navigate to={to} replace />} />
              )),
            )}
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
