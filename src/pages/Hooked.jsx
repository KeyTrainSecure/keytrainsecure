import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'

export default function Hooked() {
  return (
    <>
      <PageHero
        eyebrow="HOOKeD"
        title="HOOKeD — Phishing Simulator"
        subtitle="Strengthen your human firewall through realistic phishing campaigns."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 space-y-5 text-silver leading-relaxed">
        <p>
          HOOKeD is our phishing simulation platform that helps organizations strengthen their human firewall
          through realistic phishing campaigns. Measure click rates, identify users who may be at greater
          risk, and deliver targeted follow-up training to reinforce awareness and improve security
          behaviors.
        </p>
        <p>
          Create or have us create custom phishing campaigns to send to your teams. Pair HOOKeD with our KTL
          training courses to generate a comprehensive threat assessment for your organization.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link to="/learning" className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi">
            Visit KeyTrain Learning
          </Link>
          <Link to="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi">
            Go Phishing!
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">HOOKeD Dashboard</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card card-hover rounded-xl p-7">
              <h3 className="mb-2 text-lg font-bold text-brand-hi">View All Campaigns at Once</h3>
              <p className="text-sm leading-relaxed text-silver">
                Keep every phishing simulation and its results in one place.
              </p>
            </div>
            <div className="card card-hover rounded-xl p-7">
              <h3 className="mb-2 text-lg font-bold text-brand-hi">Custom Campaigns + Remedial Training</h3>
              <p className="text-sm leading-relaxed text-silver">
                Create custom phishing campaigns for your organization and assign remedial training for
                individuals needing to further sharpen their skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
