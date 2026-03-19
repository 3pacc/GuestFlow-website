import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.div>
  )
}
