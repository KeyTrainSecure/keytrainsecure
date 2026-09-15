import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import itImg from '../assets/svc-it.jpg'
import webImg from '../assets/svc-web.jpg'
import bootImg from '../assets/svc-boot.jpg'
import bizImg from '../assets/svc-biz.jpg'
import consImg from '../assets/svc-cons.jpg'

const services = [
  {
    img: itImg,
    title: 'IT Services',
    desc: "Combine KeyTrain with our expert cybersecurity and IT services for homes and businesses. From network security and data protection to risk assessments, smart home setup, and IT support, we provide reliable solutions that keep your technology secure, connected, and running smoothly.",
  },
  {
    img: webImg,
    title: 'Website & App Development',
    desc: 'We design and develop custom websites and applications that are secure, scalable, and built to meet your business goals. From responsive websites to tailored web and mobile applications, we deliver modern, high-performing solutions that enhance user experience and support long-term growth.',
  },
  {
    img: bootImg,
    title: 'Cybersecurity Bootcamps',
    desc: 'Level up your cyber skills and stay ahead of threats with our cybersecurity bootcamps! Our cyber bootcamps deliver immersive training designed to build real-world cybersecurity skills and knowledge, preparing participants to master advanced cyber terminology, identify and analyze threats, defend systems, and develop the confidence and capability needed to succeed.',
    note: "KeyTrain bootcamps are designed to build cybersecurity knowledge and practical skills using industry-aligned content informed by CompTIA's Security+ (SY0-701) framework. KeyTrain is an independent training provider and is not affiliated with or endorsed by CompTIA. Participation in or completion of a KeyTrain bootcamp does not guarantee passing any certification exam, nor does it result in Security+ certification or any other credential. Certification is earned only by successfully completing the official exam administered by the certifying organization. All training materials are provided for educational purposes only and are subject to updates. Results may vary based on individual effort and experience.",
  },
  {
    img: bizImg,
    title: 'Business Services',
    desc: 'We offer a wide selection of professional business services to help your organization grow and prepare for the future. Our team is committed to helping strengthen your business foundation and support long-term success, whether you are beginning a new venture or expanding an existing one.',
    list: [
      'Bookkeeping', 'Financial Reporting', 'Bank Reconciliations', 'Budgeting & Forecasting',
      'Financial Projections', 'Start-Up Planning (Pro forma)', 'Compensation Planning',
      'Business License Preparation', 'Personal Property Return Preparation',
      'Bank, CPA, & Professional Relationships', 'Business Support',
    ],
  },
  {
    img: consImg,
    title: 'Consulting',
    desc: "Our consulting services deliver strategic, hands-on guidance tailored to each organization's unique environment and goals. We work alongside you and your team to assess risk, strengthen defenses, and implement practical solutions that drive clarity, resilience, and long-term success.",
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Discover all of the services we have to offer"
        subtitle="From IT services and cyber bootcamps to website development and business services and consulting."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 space-y-10">
        {services.map((s) => (
          <div key={s.title} className="card grid gap-6 rounded-2xl p-7 md:grid-cols-[220px_1fr]">
            <img src={s.img} alt={s.title} className="h-40 w-full rounded-xl object-cover md:h-full" />
            <div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
              {s.list && (
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-white/60 sm:grid-cols-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.note && <p className="mt-4 text-xs italic leading-relaxed text-white/35">{s.note}</p>}
              <span className="mt-4 inline-block text-sm font-semibold text-brand">Contact Us for Pricing →</span>
            </div>
          </div>
        ))}
      </section>

      <CTABanner />
    </>
  )
}
