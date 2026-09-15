import { useState } from 'react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import austin from '../assets/team-austin.jpeg'
import adam from '../assets/team-adam.jpg'
import dillon from '../assets/team-dillon.png'
import caitlin from '../assets/team-caitlin.jpg'
import ryals from '../assets/team-ryals.jpeg'

const leadership = [
  {
    name: 'Dr. Austin Hose',
    title: 'CEO | Founder',
    img: austin,
    bio: 'Dr. Austin Matthew Hose is a cybersecurity professional with over 8 years of experience in the technology field. He holds a Ph.D. in Information Technology specializing in Information Securities from the University of the Cumberlands. He earned his masters degree from Western Governors University, and completed his undergraduate studies at The University of Alabama. Outside of technology, he enjoys hunting and spending time outdoors.',
  },
  {
    name: 'Adam Lindquist',
    title: 'CTO | Co-Founder',
    img: adam,
    bio: 'Adam Lindquist is a software engineer with almost 10 years of experience in the telecommunication and defense industries and holds a Bachelor of Science in Electrical Engineering from UAB. He brings a diverse background in software development ranging from embedded firmware applications to UI/UX design and implementation. In his free time, Adam enjoys hanging out with his wife and daughter, woodworking, fishing and various other outdoor activities.',
  },
  {
    name: 'Dillon Hose',
    title: 'COO | Co-Founder',
    img: dillon,
    bio: 'Dillon Hose is a seasoned engineering and operations professional with over a decade of experience in the manufacturing industry. He holds a bachelor’s degree in mechanical engineering from the University of Alabama. Outside of work, Dillon enjoys golfing, barbecuing, woodworking, and staying active through fitness.',
  },
  {
    name: 'Caitlin Hose',
    title: 'CMO | Co-Founder',
    img: caitlin,
    bio: 'Caitlin Hose is an IT professional with over 3 years in the IT field, spending the last 2 years in project management. She graduated from Western Governors University with a Masters in Business Administration in Information Technology Management. She completed her undergraduate degree in Sports Management from the University of Georgia. In her free time, Caitlin enjoys playing basketball, working out, spending time with family and friends, and traveling.',
  },
  {
    name: 'Austin Ryals',
    title: 'CFO | Co-Founder',
    img: ryals,
    bio: 'Austin Ryals is an Accounting and Finance professional who has operated as Head of Finance for over 30 companies through his MSO experience. He holds a Master of Business Administration, with a concentration in Healthcare Administration, through Jacksonville State University. Austin received his undergraduate degree from The University of Alabama where he double majored in Finance and Marketing. Outside of work, he likes to go to sporting events and do activities with his family.',
  },
]

const vps = [
  {
    name: 'Drake Burger',
    title: 'Vice President – Software Development',
    bio: 'Drake Burger is a software engineering and cybersecurity professional with over 5 years of experience in the technology field. He holds a Master of Science in Cybersecurity and Information Assurance from Western Governors University. He earned his Bachelor of Science in Computer Science from Auburn University. Outside of work, he enjoys attending Auburn football games, running, golfing, and spending time with friends and family.',
  },
  {
    name: 'Trey Vanhooser',
    title: 'Vice President – Cyber Operations',
    bio: 'Jerry Trey Vanhooser is a cybersecurity professional with over 8 years of experience in the technology field. He holds a bachelor’s degree in Cybersecurity Management of Operations from Athens State University, along with a minor in Computer Networking. His experience spans network architecture, systems administration, cloud infrastructure, and enterprise cybersecurity solutions. Outside of technology, he enjoys fitness, fishing, watersports, and spending time outdoors with his family.',
  },
]

const staff = [
  {
    name: 'Lauren Markert',
    title: 'Staff Accountant',
    bio: 'Lauren Markert is a senior at Auburn University and will graduate in December 2026 with a degree in Accountancy. Following, she will begin to pursue her Master’s of Accountancy degree. She has internship experience doing accounting work for MSOs. Outside of school, she enjoys attending Auburn sporting events and going to the lake with her friends and family.',
  },
]

function initialsOf(name) {
  return name
    .split(' ')
    .filter((w) => !w.endsWith('.'))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

function PersonCard({ p }) {
  const [expanded, setExpanded] = useState(false)
  const long = p.bio.length > 180
  return (
    <div className="card card-hover flex flex-col overflow-hidden rounded-xl">
      {p.img && (
        <div className="relative">
          <img src={p.img} alt={p.name} className="portrait" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-panel to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {!p.img && (
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-line bg-panel-2 text-sm font-bold tracking-wide text-silver">
            {initialsOf(p.name)}
          </div>
        )}
        <h3 className="text-lg font-bold text-white">{p.name}</h3>
        <p className="mb-3 text-sm font-medium text-brand-hi">{p.title}</p>
        <p className="text-sm leading-relaxed text-silver">
          {long && !expanded ? p.bio.slice(0, 180).trimEnd() + '…' : p.bio}
        </p>
        {long && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 self-start text-xs font-semibold text-white hover:text-brand-hi"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind KeyTrain"
        subtitle="Cybersecurity, engineering, and business professionals building accessible defense for organizations of every size."
      />

      {[
        { heading: 'Executive Leadership', people: leadership },
        { heading: 'Vice Presidents', people: vps },
        { heading: 'Staff', people: staff },
      ].map((group) => (
        <section key={group.heading} className="mx-auto max-w-7xl px-5 pt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">{group.heading}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.people.map((p) => <PersonCard key={p.name} p={p} />)}
          </div>
        </section>
      ))}

      <div className="pt-24" />

      <CTABanner />
    </>
  )
}
