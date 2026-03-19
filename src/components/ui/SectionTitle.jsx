import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-white/75 md:text-lg">{description}</p>}
    </motion.div>
  )
}
