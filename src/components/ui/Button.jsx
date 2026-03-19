import { motion } from 'framer-motion'

const styles = {
  primary:
    'bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 text-white shadow-[0_0_24px_rgba(124,58,237,0.45)]',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/15',
  ghost: 'text-white/90 hover:text-white hover:bg-white/10 border border-transparent',
}

export function Button({ children, className = '', variant = 'primary', as: Comp = 'button', ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Comp
        className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  )
}
