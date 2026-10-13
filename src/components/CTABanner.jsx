import { Link } from 'react-router-dom'
import { HALO_SIGNUP, LEARNING_SIGNUP } from '../signup'

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-panel px-8 py-14 text-center md:px-10">
        <div className="glow absolute inset-0" />
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">Get Started</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Ready to reduce your cyber risk?</h2>
          <p className="mx-auto mt-4 max-w-xl text-silver">
            Sign up in minutes, or talk to us about what your organization needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={HALO_SIGNUP}
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
            >
              Sign Up for Halo
            </a>
            <a
              href={LEARNING_SIGNUP}
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
            >
              Sign Up for KeyTrain Learning
            </a>
            <Link
              to="/contact"
              className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
