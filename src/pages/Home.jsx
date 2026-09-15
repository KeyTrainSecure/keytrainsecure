import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import CTABanner from '../components/CTABanner'

const solutions = [
  {
    to: '/halo-railnet',
    tag: 'KeyTrain Halo + RailNet',
    title: 'AI-Powered Threat Intelligence',
    desc: "KeyTrain is an easy-to-use cybersecurity platform designed to deliver clear insights into your system. RailNet is a shared intelligence network that strengthens cyber defense across all protected organizations — correlating anonymized threat data to improve protection for everyone.",
  },
  {
    to: '/learning',
    tag: 'KeyTrain Learning',
    title: 'Engaging Security Awareness Training',
    desc: 'KeyTrain Learning (KTL) is our learning management platform, offering engaging, interactive training that builds knowledge, strengthens accountability, and empowers your team to apply what they learn with confidence every day.',
  },
  {
    to: '/hooked',
    tag: 'HOOKeD',
    title: 'Phishing Simulation, Made Real',
    desc: 'HOOKeD helps organizations strengthen their human firewall through realistic phishing campaigns. Measure click rates, identify at-risk users, and deliver targeted follow-up training to improve security behavior.',
  },
  {
    to: '/services',
    tag: 'Services',
    title: 'IT, Bootcamps, and Business Support',
    desc: 'From IT services and cyber bootcamps to website development and business services, discover all the ways KeyTrain can help grow your organization.',
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="mb-5 inline-block rounded-full border border-line bg-panel px-4 py-1.5 text-xs italic text-white/60">
              Philippians 2:3-4
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Turning cyber complexity into <span className="text-gradient">simplicity.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/65">
              KeyTrain unifies threat management, security training, and phishing simulation into one
              accessible platform — built so any organization can defend itself with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/halo-railnet" className="rounded-full bg-brand px-6 py-3 font-semibold text-ink transition hover:brightness-110">
                Learn More
              </Link>
              <Link to="/contact" className="rounded-full border border-line px-6 py-3 font-semibold text-white transition hover:border-brand hover:text-brand">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-brand/10 blur-2xl" />
            <img src={hero} alt="KeyTrain Halo dashboard preview" className="relative w-full rounded-2xl border border-line shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Our Solutions</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Everything you need to reduce cyber risk</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((s) => (
            <Link key={s.to} to={s.to} className="card group rounded-2xl p-7 transition hover:border-brand/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-mint">{s.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand group-hover:underline">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
