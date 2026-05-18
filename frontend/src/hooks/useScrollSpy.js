/**
 * useScrollSpy
 * Returns the id of the section currently in the viewport.
 * Useful for highlighting active nav links on scroll.
 */

import { useState, useEffect } from 'react'

export default function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId(null)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
