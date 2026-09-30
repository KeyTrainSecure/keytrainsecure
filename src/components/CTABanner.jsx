import { Link } from 'react-router-dom'
import promo from '../assets/hero.jpg'

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24">
      <div className="overflow-hidden rounded-2xl border border-line bg-panel md:grid md:grid-cols-2">
        <img
          src={promo}
          alt="Presale discount — 5% off"
          className="h-48 w-full object-cover md:h-full"
        />
        <div className="px-8 py-12 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">
            Limited-Time Presale
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Get 5% off Halo or RailNet
          </h2>
          <p className="mt-4 text-silver">
            Contact us to secure your deal! This offer is for a limited time only.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-hi"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
