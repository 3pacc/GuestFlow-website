export function CardHeader({ eyebrow, title, subtitleItems = [] }) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
          {eyebrow}
        </p>
      )}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {subtitleItems.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-white/70">
          {subtitleItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
