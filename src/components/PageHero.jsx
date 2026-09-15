export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-grid border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full border border-line bg-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/65">{subtitle}</p>}
      </div>
    </section>
  )
}
