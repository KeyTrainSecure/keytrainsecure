import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

const markets = ['Churches', 'Small Businesses', 'Healthcare', 'Other Nonprofits']

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About KeyTrain" />

      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="space-y-5 text-silver leading-relaxed">
          <p>
            KeyTrain was founded in 2025 with the intent in mind to help organizations keep their missions
            their main focus. We have a dedicated team that has developed Halo, our software platform
            designed to simplify cybersecurity, reduce operational burden, and deliver meaningful protection
            without added complexity.
          </p>
          <p>
            Halo is a comprehensive cybersecurity platform that combines intuitive Unified Threat Management
            (UTM) technology with practical cybersecurity training to help organizations strengthen their
            security posture. The KeyTrain Halo application delivers AI-powered insights into system health,
            vulnerabilities, and cyber risk through a clean, easy-to-use dashboard, while advanced threat
            detection and prevention works seamlessly in the background.
          </p>
          <p>
            Complimenting Halo, KeyTrain offers a complete cybersecurity awareness and training ecosystem.{' '}
            <strong className="text-white">KeyTrain Learning</strong>, our learning management system,
            delivers structured cybersecurity training curricula designed to educate users at every level.{' '}
            <strong className="text-white">HOOKeD</strong>, our phishing simulation platform, enables
            organizations to test and reinforce user awareness through realistic phishing campaigns. We also
            provide website development, immersive cybersecurity bootcamps and expert consulting services
            tailored to each organization's unique environment, helping teams build stronger security
            practices and reduce human risk.
          </p>
          <p>
            Beyond cybersecurity, KeyTrain offers business services, such as bookkeeping, budgeting,
            financial forecasting, and many other support services to help organizations become and maintain
            successful.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-hi">Our Mission</span>
          <p className="mt-4 text-lg leading-relaxed text-silver">
            KeyTrain's mission is to empower our customers with an accessible, effective, and sustainable
            cybersecurity solution through modular design, expert-grade protection, and intuitive usability.
            KeyTrain seeks to democratize digital security — making robust defense possible for organizations
            that need it most, regardless of size, budget, or in-house expertise.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-silver">
            In addition to our software technology, we are driven to further others' knowledge on
            cybersecurity and its importance. We offer trainings within the user interface that allows
            customers to strengthen their threat awareness skills and learn best practices to mitigate and/or
            avoid potential threats altogether. Along with our trainings, our bootcamps and consulting
            services allow us to further spread our outreach and knowledge on cybersecurity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-hi">Markets We Serve</span>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {markets.map((m) => (
            <span key={m} className="rounded-full border border-line bg-panel px-5 py-2.5 text-sm font-medium text-silver">
              {m}
            </span>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
