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

function PersonCard({ p }) {
  const [expanded, setExpanded] = useState(false)
  const long = p.bio.length > 180
  return (
    <div className="card rounded-2xl p-6">
      {p.img && (
        <img src={p.img} alt={p.name} className="mb-4 h-56 w-full rounded-xl object-cover" />
      )}
      <h3 className="text-lg font-bold text-white">{p.name}</h3>
      <p className="mb-3 text-sm font-medium text-brand">{p.title}</p>
      <p className="text-sm leading-relaxed text-white/60">
        {long && !expanded ? p.bio.slice(0, 180) + '…' : p.bio}
      </p>
      {long && (
        <button onClick={() => setExpanded((v) => !v)} className="mt-2 text-xs font-semibold text-mint hover:underline">
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="Our Cybersecurity Professionals" />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Executive Leadership</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => <PersonCard key={p.name} p={p} />)}
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="mb-8 text-2xl font-bold text-white">Vice Presidents</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {vps.map((p) => <PersonCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Staff</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((p) => <PersonCard key={p.name} p={p} />)}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
