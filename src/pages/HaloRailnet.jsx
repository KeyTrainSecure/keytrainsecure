import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'

const diffs = [
  {
    title: 'Simplistic and familiar dashboard with a powerful backend',
    desc: 'Advanced analysis and AI-driven threat correlation run behind the scenes, while users see only what matters.',
  },
  {
    title: 'No learning curve',
    desc: 'KeyTrain works out of the box — no training or technical expertise required.',
  },
  {
    title: 'Human risk included',
    desc: 'Security training results are weighted directly into threat reporting.',
  },
  {
    title: 'AI that adapts',
    desc: 'Learns from your systems and user behavior to strengthen protection over time.',
  },
  {
    title: 'Lightweight by design',
    desc: 'Enterprise-level insight without heavy infrastructure or complexity.',
  },
]

export default function HaloRailnet() {
  return (
    <>
      <PageHero
        eyebrow="KeyTrain Halo + RailNet Intelligence"
        title="Clarity without sacrificing depth"
        subtitle="An easy-to-use, AI-powered Unified Threat Management cybersecurity platform built for anyone to understand."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 space-y-5 text-white/70 leading-relaxed">
        <p>
          KeyTrain Halo is an easy-to-use, AI-powered Unified Threat Management cybersecurity platform built
          for clarity without sacrificing depth. Its intuitive dashboard shows system health and cyber risk
          at a glance, with no learning curve or technical expertise required.
        </p>
        <p>
          Behind the scenes, KeyTrain's <strong className="text-white">KeUTM engine</strong> analyzes real
          indicators of compromise (IoCs) using AI-driven trend analysis and incorporates security training
          results to account for human risk — delivering accurate, meaningful threat reporting in a way
          anyone can understand.
        </p>
        <p>
          Upgrade to Halo + RailNet Intelligence to join the shared intelligence network. RailNet Intelligence
          enables threat detections in one environment to improve protection for all protected organizations.
          AI analytics transform this data into actionable intelligence, delivering faster threat detection,
          early warning of emerging attacks, enhanced visibility, and continuously evolving defenses — all
          while keeping your organization's sensitive information safe.
        </p>
        <p className="text-sm italic text-white/40">
          *KeUTM (Knowledge-Enhanced Unified Threat Management) is a coined term by KeyTrain LLC.
        </p>
        <div>
          <Link to="/learning" className="text-brand hover:underline font-semibold">Visit KeyTrain Learning for Pricing →</Link>
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Why We Are Different</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diffs.map((d) => (
              <div key={d.title} className="card rounded-2xl p-6">
                <h3 className="mb-2 font-bold text-mint">{d.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="text-2xl font-bold text-white">Available for Download</h2>
        <p className="mt-2 text-white/60">Windows · Linux (Ubuntu) · Mac</p>
      </section>

      <CTABanner />
    </>
  )
}
