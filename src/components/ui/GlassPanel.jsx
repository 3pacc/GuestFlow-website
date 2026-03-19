import { motion } from 'framer-motion'

export function GlassPanel({ children, className = '', interactive = true }) {
  return (
    <motion.div
      whileHover={interactive ? { y: -8, scale: 1.01 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_24px_80px_-40px_rgba(34,211,238,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_55%)]" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
