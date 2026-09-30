import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'
import campaignsImg from '../assets/hooked-1.png'
import statusImg from '../assets/hooked-2.png'
import createImg from '../assets/hooked-3.png'

const shots = [
  {
    img: campaignsImg,
    title: 'HOOKeD Dashboard',
    desc: 'View all of your campaigns at once.',
  },
  {
    img: statusImg,
    title: 'Campaign Status',
    desc: 'Track every campaign from draft to scheduled, sent, and complete.',
  },
  {
    img: createImg,
    title: 'Custom Campaigns',
    desc: 'Create custom phishing campaigns for your organization and assign remedial training for individuals needing to further sharpen their skills.',
  },
]

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
          Create or have us create custom phishing campaigns to send to your teams. Pair HOOKeD with our{' '}
          <Link to="/learning" className="text-brand-hi hover:underline">KTL</Link> training courses to generate
          a comprehensive threat assessment for your organization.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://keytrainlearning.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
          >
            Visit KeyTrain Learning ↗
          </a>
          <Link
            to="/contact"
            className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Go Phishing!</h2>
          <div className="space-y-8">
            {shots.map((s) => (
              <figure key={s.title} className="card overflow-hidden rounded-xl">
                <img src={s.img} alt={`${s.title} screenshot`} loading="lazy" className="w-full bg-white" />
                <figcaption className="border-t border-line p-6">
                  <h3 className="text-lg font-bold text-brand-hi">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-silver">{s.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
