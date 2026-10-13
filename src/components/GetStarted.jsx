import { Link } from 'react-router-dom'
import { haloSignup, LEARNING_SIGNUP } from '../signup'

const haloPlans = [
  { tier: 'standalone', name: 'Halo', desc: 'Halo desktop protection with RailNet sync.' },
  {
    tier: 'intelligence',
    name: 'Halo + RailNet Intelligence',
    desc: 'Everything in Halo, plus the KeyTrain intelligence console.',
  },
]

export default function GetStarted() {
  return (
    <section id="get-started" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20">
      <div className="mb-10 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-hi">Get Started</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sign up in minutes</h2>
        <p className="mt-3 text-silver">
          Pick a plan, create your account, and check out securely. Pricing is shown before you pay.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="card rounded-xl p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">KeyTrain Halo</span>
          <h3 className="mt-3 text-xl font-bold text-white">Protect your machines</h3>
          <p className="mt-2 text-sm text-silver">
            One license per machine, billed monthly.{' '}
            <Link to="/halo-railnet" className="text-brand-hi hover:underline">Compare features</Link>
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {haloPlans.map((p) => (
              <div key={p.tier} className="flex flex-col rounded-xl border border-line bg-panel-2 p-5">
                <h4 className="font-bold text-white">{p.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-silver">{p.desc}</p>
                <a
                  href={haloSignup(p.tier)}
                  aria-label={`Sign up for ${p.name}`}
                  className="mt-5 rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-hi"
                >
                  Sign up
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="card flex flex-col rounded-xl p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">KeyTrain Learning</span>
          <h3 className="mt-3 text-xl font-bold text-white">Train your team</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-silver">
            Security awareness courses for your whole organization. You become the organization admin and can
            invite your team right after checkout.{' '}
            <Link to="/learning" className="text-brand-hi hover:underline">Learn more</Link>
          </p>
          <a
            href={LEARNING_SIGNUP}
            className="mt-6 rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-hi"
          >
            Sign up for KeyTrain Learning
          </a>
        </div>
      </div>
    </section>
  )
}
