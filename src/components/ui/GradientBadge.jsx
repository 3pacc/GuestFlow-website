export function GradientBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-gradient-to-r from-violet-500/30 via-pink-500/30 to-cyan-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
      {children}
    </span>
  )
}
