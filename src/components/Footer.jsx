import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="KeyTrain" className="h-9 w-9 rounded-md object-cover" />
              <span className="text-lg font-bold text-white">KeyTrain<span className="text-gradient">Secure</span></span>
            </Link>
            <p className="mt-3 text-sm text-white/60">Turning cyber complexity into simplicity.</p>
            <p className="mt-3 text-xs italic text-white/40">Philippians 2:3-4</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/halo-railnet" className="hover:text-brand">KeyTrain Halo + RailNet</Link></li>
              <li><Link to="/learning" className="hover:text-brand">KeyTrain Learning</Link></li>
              <li><Link to="/hooked" className="hover:text-brand">HOOKeD</Link></li>
              <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-brand">About Our Company</Link></li>
              <li><Link to="/team" className="hover:text-brand">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <a href="https://www.facebook.com/KeyTrainLLC" target="_blank" rel="noreferrer" className="rounded-full border border-line px-3 py-1.5 text-white/70 hover:border-brand hover:text-brand">Facebook</a>
              <a href="https://www.instagram.com/KeyTrain_Secure" target="_blank" rel="noreferrer" className="rounded-full border border-line px-3 py-1.5 text-white/70 hover:border-brand hover:text-brand">Instagram</a>
              <a href="https://www.linkedin.com/company/KeyTrainSecure" target="_blank" rel="noreferrer" className="rounded-full border border-line px-3 py-1.5 text-white/70 hover:border-brand hover:text-brand">LinkedIn</a>
              <a href="https://www.x.com/KeyTrain_Secure" target="_blank" rel="noreferrer" className="rounded-full border border-line px-3 py-1.5 text-white/70 hover:border-brand hover:text-brand">X</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-white/40">
          Copyright © {new Date().getFullYear()} KeyTrainSecure.com — All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
