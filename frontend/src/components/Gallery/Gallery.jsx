import React, { useState, useEffect } from 'react'
import './Gallery.css'

const galleryItems = [
  { id: 1, label: 'Hair styling',  bg: 'linear-gradient(160deg, #8B4562, #C4607F, #E8A0B4)', image: '/images/hairs' },
  { id: 2, label: 'Nail art',      bg: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)', image: '/images/fingernail' },
  { id: 3, label: 'Braiding',      bg: 'linear-gradient(135deg, #3D1520, #6B2A40, #C4607F)', image: null },
  { id: 4, label: 'Spa treatment', bg: 'linear-gradient(135deg, #E8A0B4, #F5D0DC)',           image: null },
  { id: 5, label: 'Barbering',     bg: 'linear-gradient(135deg, #2C1810, #8B4562)',           image: null },
  { id: 6, label: 'Wig styling',   bg: 'linear-gradient(135deg, #C4607F, #E8D5A3)',           image: null },
]

/* ── SVG icons ─────────────────────────────────────────────────── */
const PlusIcon = () => (
  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="15" cy="15" r="13" stroke="white" strokeWidth="1.5" />
    <path d="M10 15 L20 15 M15 10 L15 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ArrowLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Image error handler ────────────────────────────────────────── */
function handleImgError(e) {
  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.jfif']
  const tried = e.target.dataset.tried ? e.target.dataset.tried.split(',') : []
  const next = exts.find(x => !tried.includes(x))
  if (next) {
    e.target.dataset.tried = [...tried, next].join(',')
    e.target.src = `${e.target.dataset.base}${next}`
  } else {
    e.target.style.display = 'none'
  }
}

/* ── Main component ─────────────────────────────────────────────── */
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const isOpen  = activeIndex !== null
  const current = isOpen ? galleryItems[activeIndex] : null
  const total   = galleryItems.length

  const openAt = (i) => setActiveIndex(i)
  const close  = ()  => setActiveIndex(null)
  const goPrev = ()  => setActiveIndex(i => Math.max(0, i - 1))
  const goNext = ()  => setActiveIndex(i => Math.min(total - 1, i + 1))

  /* Keyboard navigation */
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   goPrev()
      if (e.key === 'ArrowRight')  goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ── Gallery grid ── */}
      <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
        <div className="gallery__header">
          <p className="section-label section-label--center">Portfolio</p>
          <h2 className="section-title section-title--center" id="gallery-heading">
            Our <em>Work</em> Speaks<br />For Itself
          </h2>
          <div className="gold-line gold-line--center" aria-hidden="true" />
        </div>

        <div className="gallery__grid" role="list" aria-label="Gallery of salon work">
          {galleryItems.map(({ id, label, bg, image }, i) => (
            <div
              key={id}
              className="gallery__item"
              role="button"
              tabIndex={0}
              aria-label={`View ${label} in full screen`}
              onClick={() => openAt(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openAt(i)}
            >
              {image ? (
                <img
                  src={image}
                  data-base={image}
                  alt={label}
                  className="gallery__item-inner gallery__item-photo"
                  onError={handleImgError}
                />
              ) : (
                <div
                  className="gallery__item-inner"
                  style={{ background: bg }}
                  aria-hidden="true"
                />
              )}
              <div className="gallery__item-overlay" aria-hidden="true">
                <span className="gallery__item-icon">
                  <PlusIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox — fully self-contained, no external import ── */}
      {isOpen && current && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${current.label}`}
        >
          {/* Backdrop closes lightbox */}
          <div className="lb__backdrop" onClick={close} aria-hidden="true" />

          {/* Close button */}
          <button className="lb__close" onClick={close} aria-label="Close viewer">
            <CloseIcon />
          </button>

          {/* Previous */}
          <button
            className="lb__arrow lb__arrow--prev"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ArrowLeft />
          </button>

          {/* Image or gradient placeholder */}
          <div className="lb__stage">
            {current.image ? (
              <img
                key={current.id}
                src={current.image}
                data-base={current.image}
                alt={current.label}
                className="lb__img"
                onError={handleImgError}
              />
            ) : (
              <div
                className="lb__placeholder"
                style={{ background: current.bg }}
                aria-label={current.label}
              />
            )}
            <p className="lb__caption">{current.label}</p>
          </div>

          {/* Next */}
          <button
            className="lb__arrow lb__arrow--next"
            onClick={goNext}
            disabled={activeIndex === total - 1}
            aria-label="Next image"
          >
            <ArrowRight />
          </button>

          {/* Counter */}
          <div className="lb__counter" aria-live="polite">
            <span>{activeIndex + 1}</span>&nbsp;/&nbsp;{total}
          </div>
        </div>
      )}
    </>
  )
}
