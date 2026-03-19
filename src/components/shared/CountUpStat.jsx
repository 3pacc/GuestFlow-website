import { useEffect, useRef, useState } from 'react'

export function CountUpStat({ value, suffix = '', duration = 1400 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let frame
    let started = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            const start = performance.now()

            const animate = (time) => {
              const progress = Math.min((time - start) / duration, 1)
              setDisplay(Math.round(value * progress))
              if (progress < 1) frame = requestAnimationFrame(animate)
            }

            frame = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [duration, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
