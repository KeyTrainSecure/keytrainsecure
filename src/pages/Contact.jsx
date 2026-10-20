import { useState } from 'react'
import PageHero from '../components/PageHero'
import { CONTACT_EMAIL, submitContact } from '../contact'

const empty = { name: '', email: '', phone: '', message: '', _honey: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please enter your name and a message.')
      setStatus('error')
      return
    }
    setError('')
    setStatus('sending')
    try {
      await submitContact(form)
      setForm(empty)
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your message.')
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
          <div className="card rounded-xl p-8 text-center" role="status">
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
              <input id="name" required maxLength={200} autoComplete="name" value={form.name} onChange={set('name')} className={input} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-silver">Email*</label>
              <input
                id="email"
                required
                maxLength={254}
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-silver">Phone</label>
              <input id="phone" type="tel" maxLength={50} autoComplete="tel" value={form.phone} onChange={set('phone')} className={input} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-silver">Message*</label>
              <textarea id="message" required maxLength={5000} rows={4} value={form.message} onChange={set('message')} className={input} />
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
                {error} You can also email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
              </p>
            )}
          </form>
        )}
      </section>
    </>
  )
}
