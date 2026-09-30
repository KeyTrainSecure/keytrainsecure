import { Link } from 'react-router-dom'
import wordmark from '../assets/logo-wordmark.png'

const solutions = [
  { to: '/halo-railnet', label: 'Halo + RailNet' },
  { to: '/learning', label: 'KeyTrain Learning' },
  { to: '/hooked', label: 'HOOKeD' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
]

const company = [
  { to: '/about', label: 'About Our Company' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact Us' },
]

const social = [
  { href: 'https://www.facebook.com/KeyTrainLLC', label: 'Facebook' },
  { href: 'https://www.instagram.com/KeyTrain_Secure', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/KeyTrainSecure', label: 'LinkedIn' },
  { href: 'https://www.x.com/KeyTrain_Secure', label: 'X' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" aria-label="KeyTrain home">
              <img src={wordmark} alt="KeyTrain" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-silver">
              Keyed for Defense, Trained to Serve.
            </p>
            <p className="mt-4 text-xs italic text-silver/60">Philippians 2:3-4</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {solutions.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-silver transition hover:text-brand-hi">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-silver transition hover:text-brand-hi">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-line px-3 py-1.5 text-sm text-silver transition hover:border-brand-hi hover:text-brand-hi"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs text-silver/60">
          Copyright © {new Date().getFullYear()} KeyTrainSecure.com — All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
