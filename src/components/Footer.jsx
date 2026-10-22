import { Link, useLocation } from 'react-router-dom'
import wordmark from '../assets/logo-wordmark.png'
import learningLogo from '../assets/keytrainlearning-logo-light.png'
import { LEARNING_APP, LEARNING_SIGNUP, TERMS_URL } from '../signup'

const solutions = [
  { to: '/halo-railnet', label: 'Halo + RailNet' },
  { to: '/learning', label: 'KeyTrain Learning' },
  { to: '/hooked', label: 'HOOKeD' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
  { to: '/pricing', label: 'Pricing' },
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
  const isPricingPage = useLocation().pathname === '/pricing'
  const pricingGroups = [
    { title: 'Learn', links: [{ to: '/pricing', label: 'Pricing' }] },
    {
      title: 'Account',
      links: [
        { href: `${LEARNING_APP}/login`, label: 'Sign in' },
        { href: LEARNING_SIGNUP, label: 'Get started' },
      ],
    },
    {
      title: 'Company',
      links: [
        { to: '/contact', label: 'Contact' },
        { href: TERMS_URL, label: 'Terms of Service' },
      ],
    },
  ]

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div
          className={`grid gap-12 ${
            isPricingPage ? 'md:grid-cols-[minmax(0,1fr)_auto_auto_auto] md:gap-x-10' : 'md:grid-cols-4'
          }`}
        >
          <div className="md:col-span-1">
            <Link to="/" aria-label="KeyTrain home">
              <img
                src={isPricingPage ? learningLogo : wordmark}
                alt={isPricingPage ? 'KeyTrain Learning' : 'KeyTrain'}
                className={isPricingPage ? 'h-11 w-auto' : 'h-9 w-auto'}
              />
            </Link>
            <p className={`mt-5 text-sm leading-relaxed text-silver ${isPricingPage ? 'max-w-xs' : ''}`}>
              {isPricingPage
                ? 'Security awareness training, HOOKeD simulations, and RailNet intelligence for modern teams.'
                : 'Keyed for Defense, Trained to Serve.'}
            </p>
            {!isPricingPage && <p className="mt-4 text-xs italic text-silver/60">Philippians 2:3-4</p>}
          </div>

          {isPricingPage ? (
            pricingGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-sm font-semibold text-white">{group.title}</h4>
                <ul className="space-y-2.5 text-sm">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="text-silver transition hover:text-brand-hi">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-silver transition hover:text-brand-hi">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <>
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
            </>
          )}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-silver/60">
          {isPricingPage ? (
            <span>© {new Date().getFullYear()} KeyTrain. All rights reserved.</span>
          ) : (
            <>
              <span>Copyright © {new Date().getFullYear()} KeyTrainSecure.com — All Rights Reserved.</span>
              <span className="flex gap-5">
                <Link to="/privacy" className="transition hover:text-brand-hi">Privacy Policy</Link>
                <a href={TERMS_URL} className="transition hover:text-brand-hi">Terms of Service</a>
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  )
}
