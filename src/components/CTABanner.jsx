import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-8 py-14 text-center">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get <span className="text-gradient">5% off</span> Halo or RailNet
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Contact us to secure your deal! This offer is for a limited time only.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-ink transition hover:brightness-110"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
