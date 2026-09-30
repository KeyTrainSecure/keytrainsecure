import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import dashboardImg from '../assets/halo-dashboard.png'
import safeImg from '../assets/halo-safe.png'

const DOWNLOAD_BASE = 'https://keytrain-862e21.gitlab.io/downloads'

const downloads = [
  { os: 'Windows', detail: 'x64 · .exe', file: 'halo-windows-x64.exe' },
  { os: 'Mac', detail: 'Apple silicon · .pkg', file: 'halo-macos-arm64.pkg' },
  { os: 'Linux (Ubuntu)', detail: 'x64 · .tar.gz', file: 'halo-linux-x64.tar.gz' },
]

const features = [
  ['Anomaly Based Intrusion Detection', true],
  ['Signature Based Intrusion Detection', true],
  ['Heuristic Based Intrusion Detection', true],
  ['Signature Based Intrusion Prevention', true],
  ['Phishing Detection/Mailbox Alerting', true],
  ['Patch Management', true],
  ['Vulnerability Management', true],
  ['AI Threat Detection', true],
  ['Firewall Management', true],
  ['System Hygiene', true],
  ['Unified Risk Scoring', true],
  ['Log Analysis', true],
  ['Adaptive In-App Trainings', true],
  ['Simplistic Dashboard', true],
  ['Customer Support', true],
  ['Shared Threat Intelligence', false],
  ['AI-Powered Trend Analysis', false],
  ['Executive Reporting', false],
  ['Compliance Documentation Generation', false],
  ['Actionable Security Intelligence', false],
]

function Check({ strong }) {
  return (
    <span
      className={`inline-grid h-6 w-6 place-items-center rounded-full text-xs font-bold text-white ${
        strong ? 'bg-brand-hi' : 'bg-silver/40'
      }`}
      aria-label="Included"
    >
      ✓
    </span>
  )
}

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

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-silver leading-relaxed">
          <p>
            KeyTrain Halo is an easy-to-use, AI-powered Unified Threat Management cybersecurity platform built
            for clarity without sacrificing depth. Its intuitive dashboard shows system health and cyber risk
            at a glance, with no learning curve or technical expertise required.
          </p>
          <p>
            Behind the scenes, KeyTrain's <strong className="text-white">*KeUTM engine</strong> analyzes real
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
          <p className="text-sm italic text-silver/60">
            *KeUTM (Knowledge-Enhanced Unified Threat Management) is a coined term by KeyTrain LLC.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#downloads"
              className="inline-block rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
            >
              Download Halo ↓
            </a>
            <a
              href="https://keytrainlearning.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
            >
              Visit KeyTrain Learning for Pricing ↗
            </a>
          </div>
        </div>
        <div className="flex items-end justify-center gap-4">
          <img
            src={dashboardImg}
            alt="KeyTrain Halo dashboard showing an in-app security training question and system health dials"
            className="w-1/2 rounded-xl border border-line shadow-2xl shadow-black/50"
          />
          <img
            src={safeImg}
            alt="KeyTrain Halo dashboard showing a SAFE system status"
            className="w-1/2 rounded-xl border border-line shadow-2xl shadow-black/50"
          />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Why We Are Different</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diffs.map((d) => (
              <div key={d.title} className="card card-hover rounded-xl p-6">
                <h3 className="mb-2 font-bold text-brand-hi">{d.title}</h3>
                <p className="text-sm leading-relaxed text-silver">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="mb-3 text-center text-3xl font-bold text-white">Features</h2>
          <p className="mb-10 text-center text-silver">Compare KeyTrain Halo with Halo + RailNet Intelligence.</p>
          <div className="card overflow-x-auto rounded-xl">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-4 font-semibold uppercase tracking-wider text-white">Features</th>
                  <th scope="col" className="w-32 bg-panel-2 px-5 py-4 text-center font-semibold uppercase tracking-wider text-white">Halo</th>
                  <th scope="col" className="w-44 bg-brand/25 px-5 py-4 text-center font-semibold uppercase tracking-wider text-white">
                    Halo + RailNet Intelligence
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map(([name, inHalo], i) => (
                  <tr
                    key={name}
                    className={`border-line ${
                      !inHalo && features[i - 1]?.[1] ? 'border-t-2 border-t-brand-hi/60' : 'border-t'
                    }`}
                  >
                    <th scope="row" className="px-5 py-3 font-medium text-silver">{name}</th>
                    <td className="bg-panel-2/60 px-5 py-3 text-center">
                      {inHalo ? <Check /> : <span className="text-silver/50" aria-label="Not included">—</span>}
                    </td>
                    <td className="bg-brand/10 px-5 py-3 text-center"><Check strong /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="downloads" className="mx-auto max-w-5xl scroll-mt-24 px-5 pb-20">
        <div className="card rounded-xl px-6 py-10 sm:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Downloads</h2>
            <p className="mt-2 text-silver">Get the latest release of KeyTrain Halo for your platform.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {downloads.map((d) => (
              <a
                key={d.os}
                href={`${DOWNLOAD_BASE}/${d.file}`}
                download
                className="group flex flex-col items-center rounded-xl border border-line bg-panel-2 px-5 py-6 text-center transition hover:border-brand-hi"
              >
                <span className="text-lg font-bold text-white group-hover:text-brand-hi">{d.os}</span>
                <span className="mt-1 text-xs text-silver">{d.detail}</span>
                <span className="mt-4 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-brand-hi">
                  Download ↓
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-silver/60">
            Need a license?{' '}
            <a href="https://keytrainlearning.com/" target="_blank" rel="noopener noreferrer" className="text-brand-hi hover:underline">
              Visit KeyTrain Learning for pricing
            </a>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
