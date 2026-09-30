import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        subtitle="The page you're looking for doesn't exist or has moved."
      />
      <div className="py-16 text-center">
        <Link
          to="/"
          className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-hi"
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}
