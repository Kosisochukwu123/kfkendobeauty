import React, { useState } from 'react'
import './Gallery.css'
import Lightbox from '../Lightbox/Lightbox'

const galleryItems = [
  {
    id: 1,
    label: 'Hair styling',
    bg: 'linear-gradient(160deg, #8B4562, #C4607F, #E8A0B4)',
    image: '/images/hairs',
  },
  {
    id: 2,
    label: 'Nail art',
    bg: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)',
    image: '/images/fingernail',
  },
  {
    id: 3,
    label: 'Braiding',
    bg: 'linear-gradient(135deg, #3D1520, #6B2A40, #C4607F)',
    image: null,
  },
  {
    id: 4,
    label: 'Spa treatment',
    bg: 'linear-gradient(135deg, #E8A0B4, #F5D0DC)',
    image: null,
  },
  {
    id: 5,
    label: 'Barbering',
    bg: 'linear-gradient(135deg, #2C1810, #8B4562)',
    image: null,
  },
  {
    id: 6,
    label: 'Wig styling',
    bg: 'linear-gradient(135deg, #C4607F, #E8D5A3)',
    image: null,
  },
]

function handleImgError(e) {
  const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.jfif']
  const tried = e.target.dataset.tried
    ? e.target.dataset.tried.split(',')
    : []
  const next = exts.find((x) => !tried.includes(x))
  if (next) {
    e.target.dataset.tried = [...tried, next].join(',')
    e.target.src = `${e.target.dataset.base}${next}`
  } else {
    e.target.style.display = 'none'
  }
}

const PlusIcon = () => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="15" cy="15" r="13" stroke="white" strokeWidth="1.5" />
    <path
      d="M10 15 L20 15 M15 10 L15 20"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox  = (i) => setLightboxIndex(i)
  const closeLightbox = ()  => setLightboxIndex(null)

  const prevItem = () =>
    setLightboxIndex((i) => Math.max(0, i - 1))

  const nextItem = () =>
    setLightboxIndex((i) => Math.min(galleryItems.length - 1, i + 1))

  return (
    <>
      <section
        className="gallery"
        id="gallery"
        aria-labelledby="gallery-heading"
      >
        <div className="gallery__header">
          <p className="section-label section-label--center">Portfolio</p>
          <h2
            className="section-title section-title--center"
            id="gallery-heading"
          >
            Our <em>Work</em> Speaks
            <br />
            For Itself
          </h2>
          <div className="gold-line gold-line--center" aria-hidden="true" />
        </div>

        <div
          className="gallery__grid"
          role="list"
          aria-label="Gallery of salon work"
        >
          {galleryItems.map(({ id, label, bg, image }, i) => (
            <div
              className="gallery__item"
              key={id}
              role="listitem"
              aria-label={`${label} — click to enlarge`}
              onClick={() => openLightbox(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openLightbox(i)
              }}
              tabIndex={0}
              style={{ cursor: 'zoom-in' }}
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

      <Lightbox
        items={galleryItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevItem}
        onNext={nextItem}
      />
    </>
  )
}