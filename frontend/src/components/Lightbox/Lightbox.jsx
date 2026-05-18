import React, { useEffect, useCallback } from 'react'
import './Lightbox.css'

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const ChevronLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/**
 * Lightbox component
 *
 * Props:
 *  items  — array of { image, bg, label }
 *  index  — currently open index (null = closed)
 *  onClose — function to close
 *  onPrev  — function to go to previous
 *  onNext  — function to go to next
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index !== undefined

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!items?.length) return null

  const current = isOpen ? items[index] : null

  return (
    <div
      className={`lightbox${isOpen ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop */}
      <div className="lightbox__backdrop" onClick={onClose} />

      {/* Close */}
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>

      {/* Prev */}
      <button
        className="lightbox__arrow lightbox__arrow--prev"
        onClick={onPrev}
        disabled={index === 0}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>

      {/* Content */}
      {current && (
        <div className="lightbox__content">
          {current.image ? (
            <img
              src={current.image}
              alt={current.label}
              className="lightbox__img"
            />
          ) : (
            <div
              className="lightbox__placeholder"
              style={{ background: current.bg }}
              aria-label={current.label}
            />
          )}
          <p className="lightbox__caption">{current.label}</p>
        </div>
      )}

      {/* Next */}
      <button
        className="lightbox__arrow lightbox__arrow--next"
        onClick={onNext}
        disabled={index === items.length - 1}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>

      {/* Counter */}
      <div className="lightbox__counter" aria-live="polite">
        <span>{isOpen ? index + 1 : 0}</span> / {items.length}
      </div>
    </div>
  )
}