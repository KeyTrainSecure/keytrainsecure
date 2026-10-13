import { Link } from 'react-router-dom'
import mark from '../assets/logo-full.png'
import CTABanner from '../components/CTABanner'
import GetStarted from '../components/GetStarted'

const solutions = [
  {
    to: '/halo-railnet',
    tag: 'KeyTrain Halo',
    title: 'Clear Insight Into Your Systems',
    desc: "KeyTrain is an easy-to-use, cybersecurity platform designed to deliver clear insights into your system. Discover the full range of Halo's features by clicking below.",
  },
  {
    to: '/halo-railnet',
    tag: 'Halo + RailNet Intelligence',
    title: 'Shared Threat Intelligence',
    desc: 'RailNet is a shared intelligence network that strengthens cyber defense across all protected organizations. By securely correlating anonymized threat data, attack patterns, vulnerabilities, and behavioral anomalies, it enables threats detected in one environment to improve protection for all. AI-driven analytics transform this data into actionable intelligence, delivering faster threat detection, early warning of emerging attacks, enhanced visibility, and continuously evolving defenses—without exposing sensitive organizational information.',
  },
  {
    to: '/learning',
    tag: 'KeyTrain Learning',
    title: 'Security Awareness That Sticks',
    desc: 'KeyTrain Learning (KTL) is our learning management platform, offering engaging, interactive training designed to help your organization and team members stay aware of their environment. Our courses build knowledge, strengthen accountability, reinforce workplace best practices, and empower individuals to apply what they learn with confidence every day.',
  },
  {
    to: '/hooked',
    tag: 'HOOKeD',
    title: 'Phishing Simulation, Made Real',
    desc: 'HOOKeD is our phishing simulation platform that helps organizations strengthen their human firewall through realistic phishing campaigns. Measure click rates, identify users who may be at greater risk, and deliver targeted follow-up training to reinforce awareness and improve security behaviors.',
  },
  {
    to: '/services',
    tag: 'Services',
    title: 'IT, Bootcamps & Business Support',
    desc: 'Discover all of the services we have to offer! From IT services, cyber bootcamps, and website development to business services and consulting. Click below to find all the ways KeyTrain can help grow your organization.',
  },
  {
    to: '/work',
    tag: 'Our Work',
    title: 'Websites & Tools We’ve Built',
    desc: 'See the websites we’ve designed and developed for organizations across Alabama, along with the cybersecurity platforms we build and run ourselves.',
  },
]

const pillars = [
  { k: 'No learning curve', v: 'Works out of the box — no security expertise required.' },
  { k: 'Human risk included', v: 'Training results weigh directly into your threat reporting.' },
  { k: 'Lightweight by design', v: 'Enterprise-grade insight without enterprise-grade overhead.' },
]

function Halo() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2373d" />
            <stop offset="55%" stopColor="#b41416" />
            <stop offset="100%" stopColor="#5a5a60" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="186" fill="none" stroke="#2a2a31" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#2a2a31" strokeWidth="1" />
        <circle cx="200" cy="200" r="112" fill="none" stroke="#2a2a31" strokeWidth="1" />
        <circle
          cx="200" cy="200" r="186" fill="none" stroke="url(#ring)" strokeWidth="2.5"
          strokeLinecap="round" strokeDasharray="300 868"
        >
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="14s" repeatCount="indefinite" />
        </circle>
        <circle
          cx="200" cy="200" r="150" fill="none" stroke="#b41416" strokeWidth="2" strokeOpacity="0.5"
          strokeLinecap="round" strokeDasharray="160 782"
        >
          <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="22s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute inset-0 grid place-items-center p-16">
        <img src={mark} alt="" className="w-full max-w-[210px]" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="glow absolute inset-0" />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <p className="mb-5 text-xs font-medium italic tracking-wide text-silver/70">
              Philippians 2:3-4
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turning cyber complexity into{' '}
              <span className="text-brand-hi">simplicity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">
              KeyTrain unifies threat management, security training, and phishing simulation into one
              accessible platform — built so any organization can defend itself with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
              >
                Get Started
              </a>
              <Link
                to="/halo-railnet"
                className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
              >
                Explore Halo
              </Link>
            </div>
            <dl className="mt-12 grid max-w-xl gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.k}>
                  <dt className="text-sm font-semibold text-white">{p.k}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-silver/80">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Halo />
        </div>
      </section>

      <GetStarted />

      <section className="mx-auto max-w-7xl border-t border-line px-5 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-hi">
            Our Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to reduce cyber risk
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((s) => (
            <Link key={s.tag} to={s.to} className="card card-hover group flex flex-col rounded-xl p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">
                {s.tag}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">{s.desc}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-white group-hover:text-brand-hi">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
