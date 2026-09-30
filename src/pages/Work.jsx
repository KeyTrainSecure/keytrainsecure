import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import veteranImg from '../assets/work-alabamaveteran.jpg'
import pestImg from '../assets/work-partnerspest.jpg'
import sewImg from '../assets/work-sewsonia.jpg'
import ktlImg from '../assets/work-keytrainlearning.jpg'
import haloImg from '../assets/halo-dashboard.png'
import hookedImg from '../assets/hooked-1.png'

const websites = [
  {
    name: 'Alabama Veteran',
    url: 'https://www.alabamaveteran.org/',
    domain: 'alabamaveteran.org',
    img: veteranImg,
    tag: 'Nonprofit',
    desc: 'A home for a nonprofit serving Alabama veterans through community, resources, retreats, and direct support — with crisis resources, event listings, volunteer sign-ups, and donations front and center.',
  },
  {
    name: 'Partners Pest Solutions',
    url: 'https://partnerspestsolutions.com/',
    domain: 'partnerspestsolutions.com',
    img: pestImg,
    tag: 'Local Business',
    desc: 'A bold, conversion-focused site for a licensed, insured, and family-owned pest control company serving residential and commercial customers across North Alabama.',
  },
  {
    name: 'Elegant Stitches by SewSonia',
    url: 'https://sewsonia.com/',
    domain: 'sewsonia.com',
    img: sewImg,
    tag: 'Small Business',
    desc: 'An elegant portfolio and booking site for custom bridal and formalwear alterations, showcasing tailored gowns and making it easy to schedule a consultation.',
  },
]

const tools = [
  {
    name: 'KeyTrain Learning Portal',
    img: ktlImg,
    href: 'https://keytrainlearning.com/',
    cta: 'Visit keytrainlearning.com',
    desc: 'A web portal for assigned security training, HOOKeD phishing exercises, and RailNet reporting — where frontline staff complete training and security leads review organization-wide results.',
  },
  {
    name: 'KeyTrain Halo',
    img: haloImg,
    contain: true,
    to: '/halo-railnet',
    cta: 'Learn about Halo',
    desc: 'A cross-platform desktop application for Windows, macOS, and Linux that delivers AI-powered Unified Threat Management through a simple, at-a-glance dashboard.',
  },
  {
    name: 'HOOKeD',
    img: hookedImg,
    to: '/hooked',
    cta: 'Learn about HOOKeD',
    desc: 'A phishing simulation platform for building and sending realistic campaigns, measuring click rates, and assigning remedial training to the users who need it.',
  },
]

function External({ href, children, className }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Built by KeyTrain"
        subtitle="Secure, modern websites for organizations we're proud to serve — and the cybersecurity tools we build and run ourselves."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-hi">
            Website Development
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Websites we've built</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {websites.map((w) => (
            <article key={w.url} className="card card-hover group flex flex-col overflow-hidden rounded-xl">
              <External href={w.url} className="block overflow-hidden border-b border-line">
                <img
                  src={w.img}
                  alt={`Screenshot of the ${w.name} website`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </External>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-hi">{w.tag}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{w.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">{w.desc}</p>
                <External
                  href={w.url}
                  className="mt-5 inline-block self-start text-sm font-semibold text-white hover:text-brand-hi"
                >
                  {w.domain} ↗
                </External>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-hi">
              Software &amp; Tools
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Tools we've built</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tools.map((t) => {
              const cls = 'mt-5 inline-block self-start text-sm font-semibold text-white hover:text-brand-hi'
              return (
                <article key={t.name} className="card flex flex-col overflow-hidden rounded-xl">
                  <div className="grid aspect-[16/10] place-items-center overflow-hidden border-b border-line bg-panel-2">
                    <img
                      src={t.img}
                      alt={`Screenshot of ${t.name}`}
                      loading="lazy"
                      className={t.contain ? 'h-full w-auto object-contain py-4' : 'h-full w-full object-cover object-top'}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-white">{t.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">{t.desc}</p>
                    {t.href ? (
                      <External href={t.href} className={cls}>{t.cta} ↗</External>
                    ) : (
                      <Link to={t.to} className={cls}>{t.cta} →</Link>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Want a website like these?</h2>
        <p className="mt-3 text-silver">
          We design and develop custom websites and applications that are secure, scalable, and built to meet
          your business goals.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
          >
            Start a Project
          </Link>
          <Link
            to="/services"
            className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:border-brand-hi hover:text-brand-hi"
          >
            View Services
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
