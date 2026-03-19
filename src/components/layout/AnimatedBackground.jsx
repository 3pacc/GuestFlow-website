import { motion } from 'framer-motion'

const orb = {
  animate: {
    y: [0, -20, 0],
    x: [0, 16, 0],
    transition: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
  },
}

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black" aria-hidden="true">
      <motion.div variants={orb} animate="animate" className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-500/30 blur-[120px]" />
      <motion.div variants={orb} animate="animate" className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-pink-500/20 blur-[140px]" />
      <motion.div variants={orb} animate="animate" className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-400/20 blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
    </div>
  )
}
