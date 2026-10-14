import { useState } from 'react'
import PageHero from '../components/PageHero'

// Inbox that receives contact-form submissions. FormSubmit (formsubmit.co) emails this
// address a one-time activation link on the first submission; click it to start delivery.
const CONTACT_EMAIL = 'connect@keytrainsecure.com'
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const empty = { name: '', email: '', phone: '', message: '', _honey: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `KeyTrain website contact: ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === false || data.success === 'false') throw new Error(data.message)
      setForm(empty)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white outline-none focus:border-brand-hi'

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Contact our team below!" />

      <section className="mx-auto max-w-xl px-5 py-20">
        {status === 'sent' ? (
          <div className="card rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Thank you!</h2>
            <p className="mt-3 text-silver">Your message has been sent. Our team will be in touch soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-semibold text-brand-hi hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card space-y-5 rounded-xl p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-silver">Name*</label>
              <input id="name" required autoComplete="name" value={form.name} onChange={set('name')} className={input} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-silver">Email*</label>
              <input
                id="email"
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-silver">Phone</label>
              <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} className={input} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-silver">Message</label>
              <textarea id="message" rows={4} value={form.message} onChange={set('message')} className={input} />
            </div>
            {/* Honeypot: hidden from people, filled in by spam bots */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              value={form._honey}
              onChange={set('_honey')}
              className="hidden"
              aria-hidden="true"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
            {status === 'error' && (
              <p className="text-center text-sm text-brand-hi" role="alert">
                Something went wrong sending your message. Please try again, or email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
              </p>
            )}
          </form>
        )}
      </section>
    </>
  )
}
