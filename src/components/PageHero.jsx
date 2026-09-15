export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="glow absolute inset-0" />
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-hi">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
