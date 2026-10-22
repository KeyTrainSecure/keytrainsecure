import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HALO_SIGNUP, LEARNING_SIGNUP } from '../signup'
import PageHero from '../components/PageHero'

const plans = [
  {
    name: 'KeyTrain (KTL)',
    price: '$60.00',
    qualifier: 'Up to 24 users included',
    description: 'Portal training for your organization — courses, assignments, and reporting.',
    action: 'Get started',
    href: LEARNING_SIGNUP,
    recommended: true,
    features: [
      'Course catalog & assignments',
      'Required training & progress tracking',
      'Org admin user management',
      'Manager dashboards & reports',
    ],
    footnote:
      'Standard base includes up to 24 users (an org admin and manager account included). Additional users: $2.35 each through 50, $2.10 from 51–100, and $1.93 from 101–200. Contact us for pricing beyond 200.',
  },
  {
    name: 'HOOKeD',
    price: '$1.99',
    qualifier: 'Quote floor — talk to us to enable',
    description: 'Security awareness simulations and risk dashboards. Sold alone or with KTL / Halo.',
    action: 'Talk to us',
    href: '/contact',
    features: [
      'Simulation campaigns for staff',
      'User risk board & campaign heat maps',
      'LMS correlation for susceptible users',
      'Works without KeyTrain LMS or Halo',
    ],
  },
  {
    name: 'Halo',
    price: 'From $15.99',
    qualifier: 'Desktop app — standalone or Intelligence',
    description: 'Halo desktop app for hosts. Pair with RailNet Intelligence when you need the console.',
    action: 'Halo signup',
    href: HALO_SIGNUP,
    features: [
      'Halo desktop app license',
      'Personal or team workspaces',
      'Optional RailNet console',
      'Self-serve Halo signup available',
    ],
  },
]

const faqs = [
  {
    question: 'What is the right product for me?',
    answer:
      'Buy what you need: KeyTrain (KTL) for portal training, HOOKeD for security awareness simulations, or Halo for the desktop app. Each can be sold alone, or combined. Larger orgs that need invoice billing or RailNet Intelligence should contact sales.',
  },
  {
    question: 'Can I buy HOOKeD without KeyTrain or Halo?',
    answer:
      'Yes. HOOKeD is a standalone product. You do not need LMS training or a Halo desktop license to run campaigns and risk dashboards.',
  },
  {
    question: 'Does Halo include KeyTrain training?',
    answer:
      'No. Halo is the desktop app (and optional Intelligence console). KeyTrain Standard is the portal training product. Add either product when you need it.',
  },
  {
    question: 'How does Standard user pricing work?',
    answer:
      'The $60.00/month KeyTrain Standard base includes up to 24 users (including an org admin and a manager). Additional users are $2.35 each through 50, $2.10 from 51–100, and $1.93 from 101–200. Contact us for pricing beyond 200 users.',
  },
  {
    question: 'How does monthly billing work?',
    answer:
      'Your monthly bill date is the day the organization subscription starts. You are charged that day each month for the plan base plus any users beyond the included allotment. Users added mid-cycle are charged only for the remaining days in the billing period. Removals receive a prorated credit. The next renewal is a full month at the then-current headcount.',
  },
  {
    question: 'Do prices change for existing customers?',
    answer:
      'Rates are locked for your organization at signup. Catalog price changes do not affect existing organizations.',
  },
  {
    question: 'Are prices inclusive of taxes?',
    answer: 'All prices are exclusive of any applicable taxes. See our Terms of Service for more information.',
  },
  {
    question: 'What are my payment options?',
    answer:
      'Self-serve checkout with major cards is available for Halo signup via Stripe. For KeyTrain, HOOKeD, or invoice-based billing, contact us.',
  },
]

function CheckMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-hi"
    >
      <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="Plans & Pricing"
        title="Straightforward pricing for a safer team"
        subtitle="Three products you can buy separately: KeyTrain, HOOKeD, and Halo. Rates lock at signup."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <div className="inline-flex rounded-xl border border-line bg-panel p-1" aria-label="Billing period">
            {['monthly', 'yearly'].map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setBillingPeriod(period)}
                aria-pressed={billingPeriod === period}
                className={`rounded-lg px-5 py-2 text-sm font-semibold capitalize transition ${
                  billingPeriod === period ? 'bg-brand text-white' : 'text-silver hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          {billingPeriod === 'yearly' && (
            <p className="text-sm text-silver" role="status">
              Yearly billing is coming soon — monthly rates shown below.
            </p>
          )}
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const actionClassName = `mt-6 rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
              plan.recommended
                ? 'bg-brand text-white hover:bg-brand-hi'
                : 'border border-line text-white hover:border-brand-hi hover:text-brand-hi'
            }`

            return (
              <article
                key={plan.name}
                className={`card relative flex flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.recommended ? 'border-brand/70 shadow-lg shadow-brand/10' : ''
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                    Recommended
                  </span>
                )}
                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-white">{plan.price}</span>
                  <span className="text-sm text-silver">/ mo.</span>
                </p>
                <p className="mt-2 text-sm font-medium text-brand-hi">{plan.qualifier}</p>
                <p className="mt-4 min-h-12 text-sm leading-relaxed text-silver">{plan.description}</p>
                {plan.href === '/contact' ? (
                  <Link to={plan.href} className={actionClassName}>
                    {plan.action}
                  </Link>
                ) : (
                  <a href={plan.href} className={actionClassName}>
                    {plan.action}
                  </a>
                )}
                <p className="mb-3 mt-7 text-sm font-semibold text-white">Includes:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-relaxed text-silver">
                      <CheckMark />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.footnote && (
                  <p className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-silver">{plan.footnote}</p>
                )}
              </article>
            )
          })}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-silver">
          Estimated — your Stripe invoice is the final amount and may differ from this preview after mid-cycle prorations.
        </p>
        <p className="mt-3 rounded-xl border border-line bg-panel p-4 text-sm leading-relaxed text-silver">
          Example: Standard at $60.00/month covers up to 24 users. Grow to 50 users (24 included + 26 × $2.35) =
          $121.10/month. HOOKeD can be purchased alone or alongside KTL — talk to us.
        </p>
      </section>

      <section className="border-t border-line bg-panel/50">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white">Questions &amp; Answers</h2>
          <div className="space-y-3">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = openFaq === index
              const answerId = `pricing-faq-${index}`
              return (
                <div key={question} className="card overflow-hidden rounded-xl">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
                    >
                      {question}
                      <span aria-hidden="true" className="shrink-0 text-brand-hi">{isOpen ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <p
                    id={answerId}
                    hidden={!isOpen}
                    className="border-t border-line px-5 py-4 text-sm leading-relaxed text-silver"
                  >
                    {answer}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white">Get started with KeyTrain</h2>
        <p className="mx-auto mt-4 max-w-2xl text-silver">
          Stand up training for your org in minutes. Checkout is by US bank account (ACH).
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={LEARNING_SIGNUP}
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
          >
            Get started
          </a>
          <Link
            to="/contact"
            className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
          >
            Contact sales
          </Link>
        </div>
      </section>
    </>
  )
}
