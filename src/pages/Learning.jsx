import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { Link } from 'react-router-dom'
import { LEARNING_SIGNUP } from '../signup'
import dashboardImg from '../assets/ktl-dashboard.png'
import coursesImg from '../assets/ktl-courses.png'
import createImg from '../assets/ktl-create.png'

const shots = [
  {
    img: dashboardImg,
    title: 'KTL Dashboard',
    desc: 'Manage all of your courses for your organization and view results.',
  },
  {
    img: coursesImg,
    title: 'Course Management',
    desc: 'Browse, publish, and assign courses across every department.',
  },
  {
    img: createImg,
    title: 'Custom Courses',
    desc: 'Create custom courses for your organization.',
  },
]

export default function Learning() {
  return (
    <>
      <PageHero
        eyebrow="KeyTrain Learning"
        title="Strengthen Your Skills with KeyTrain Learning"
        subtitle="Our training courses help organizations and individuals build a culture of awareness."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 space-y-5 text-silver leading-relaxed">
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
          <Link to="/hooked" className="text-brand-hi hover:underline">HOOKeD</Link>, to generate a comprehensive
          risk assessment for your organization.
        </p>
        <p className="font-semibold text-white">Contact us for more information on offered courses!</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={LEARNING_SIGNUP}
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
          >
            Sign Up for KeyTrain Learning
          </a>
          <a
            href="https://keytrainlearning.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
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
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Up Your Organization's Game with KTL</h2>
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
