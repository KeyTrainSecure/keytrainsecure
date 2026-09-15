import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import wordmark from '../assets/logo-wordmark.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/halo-railnet', label: 'Halo + RailNet' },
  { to: '/learning', label: 'Learning' },
  { to: '/hooked', label: 'HOOKeD' },
  { to: '/services', label: 'Services' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)} aria-label="KeyTrain home">
          <img src={wordmark} alt="KeyTrain" className="h-8 w-auto sm:h-9" />
        </NavLink>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-panel-2 text-white' : 'text-silver hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hi lg:block"
        >
          Contact Us
        </NavLink>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-panel px-5 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-panel-2 text-white' : 'text-silver'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
