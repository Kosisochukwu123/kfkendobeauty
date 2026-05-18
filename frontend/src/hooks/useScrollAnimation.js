/**
 * useScrollAnimation
 * Attaches an IntersectionObserver to a ref.
 * Adds 'is-visible' class when element enters viewport.
 *
 * Usage:
 *   const ref = useScrollAnimation()
 *   <div ref={ref} className="fade-up"> ... </div>
 */

import { useEffect, useRef } from 'react'

export default function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
