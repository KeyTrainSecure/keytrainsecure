import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Our Team' },
  { to: '/halo-railnet', label: 'Halo + RailNet' },
  { to: '/learning', label: 'KeyTrain Learning' },
  { to: '/hooked', label: 'HOOKeD' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="KeyTrain" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-lg font-bold tracking-tight text-white">KeyTrain<span className="text-gradient">Secure</span></span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-panel-2 text-white' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110 lg:block"
        >
          Get Started
        </NavLink>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-panel px-5 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-panel-2 text-white' : 'text-white/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
