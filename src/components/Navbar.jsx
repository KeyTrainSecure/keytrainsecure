import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import wordmark from '../assets/logo-wordmark.png'
import { HALO_SIGNUP, LEARNING_SIGNUP } from '../signup'

const signups = [
  { href: HALO_SIGNUP, label: 'KeyTrain Halo', desc: 'Threat management for your machines' },
  { href: LEARNING_SIGNUP, label: 'KeyTrain Learning', desc: 'Security training for your team' },
]

function SignUpMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hi"
      >
        Sign Up <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl border border-line bg-panel p-2 shadow-2xl shadow-black/50">
          {signups.map((s) => (
            <a key={s.href} href={s.href} className="block rounded-lg px-3 py-2.5 transition hover:bg-panel-2">
              <span className="block text-sm font-semibold text-white">{s.label}</span>
              <span className="block text-xs text-silver">{s.desc}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/halo-railnet', label: 'Halo + RailNet' },
  { to: '/learning', label: 'Learning' },
  { to: '/hooked', label: 'HOOKeD' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
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

        <div className="hidden items-center gap-2 lg:flex">
          <NavLink
            to="/contact"
            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
          >
            Contact
          </NavLink>
          <SignUpMenu />
        </div>

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
            {signups.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="mt-2 rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Sign up for {s.label}
              </a>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-line px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
