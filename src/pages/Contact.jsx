import { useState } from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@keytrainsecure.com?subject=Website Contact Form&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Contact our team below!" />

      <section className="mx-auto max-w-xl px-5 py-20">
        <form onSubmit={handleSubmit} className="card space-y-5 rounded-xl p-8">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-silver">Name*</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white outline-none focus:border-brand-hi"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-silver">Email*</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white outline-none focus:border-brand-hi"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-silver">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white outline-none focus:border-brand-hi"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-silver">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white outline-none focus:border-brand-hi"
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi">
            Send
          </button>
          {sent && <p className="text-center text-sm text-brand-hi">Opening your email client…</p>}
          <p className="text-center text-xs text-silver/60">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </form>
      </section>
    </>
  )
}
