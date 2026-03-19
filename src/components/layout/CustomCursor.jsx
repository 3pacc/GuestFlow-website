import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice'

export function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false, visible: false })

  useEffect(() => {
    if (isTouch) {
      document.body.style.cursor = ''
      return
    }

    document.body.style.cursor = 'none'

    const onMove = (event) => {
      const interactive = event.target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]',
      )
      setCursor({
        x: event.clientX,
        y: event.clientY,
        active: Boolean(interactive),
        visible: true,
      })
    }

    const onLeave = () => setCursor((prev) => ({ ...prev, visible: false }))
    const onEnter = () => setCursor((prev) => ({ ...prev, visible: true }))

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
    }
  }, [isTouch])

  if (isTouch || !cursor.visible) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-cyan-300/70 bg-cyan-300/10 md:block"
        animate={{
          x: cursor.x - (cursor.active ? 22 : 16),
          y: cursor.y - (cursor.active ? 22 : 16),
          width: cursor.active ? 44 : 32,
          height: cursor.active ? 44 : 32,
          opacity: 1,
          boxShadow: cursor.active
            ? '0 0 30px rgba(34,211,238,0.45)'
            : '0 0 16px rgba(124,58,237,0.35)',
        }}
        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-2.5 w-2.5 rounded-full bg-white md:block"
        animate={{ x: cursor.x - 5, y: cursor.y - 5, opacity: 1 }}
        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
