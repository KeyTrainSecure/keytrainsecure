import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'

export default function Learning() {
  return (
    <>
      <PageHero
        eyebrow="KeyTrain Learning"
        title="Strengthen Your Skills with KeyTrain Learning"
        subtitle="Our training courses help organizations and individuals build a culture of awareness."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 space-y-5 text-white/70 leading-relaxed">
        <p>
          Our training courses are designed to help organizations and individuals build a culture of
          awareness by equipping employees with the knowledge and confidence to recognize risks, make
          informed decisions, and respond effectively in real-world situations.
        </p>
        <p>
          Through engaging, interactive, and custom content, each curriculum reinforces workplace best
          practices, promotes accountability, and delivers measurable learning outcomes that drive safer,
          smarter behaviors across your organization.
        </p>
        <p>
          Pair your training courses with our phishing simulator,{' '}
          <Link to="/hooked" className="text-brand hover:underline">HOOKeD</Link>, to generate a comprehensive
          risk assessment for your organization.
        </p>
        <p className="font-semibold text-white">Contact us for more information on offered courses!</p>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Up Your Organization's Game with KTL</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card rounded-2xl p-7">
              <h3 className="mb-2 text-lg font-bold text-mint">KTL Dashboard</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Manage all of your courses for your organization and view results.
              </p>
            </div>
            <div className="card rounded-2xl p-7">
              <h3 className="mb-2 text-lg font-bold text-mint">Custom Curricula</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Create custom courses tailored to your organization's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
