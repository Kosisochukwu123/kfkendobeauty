import React from 'react'
import './Gallery.css'

// Placeholder gallery items — replace SVG fills with real <img> tags when imagery is available
const galleryItems = [
  { id: 1, label: 'Salon portrait', bg: 'linear-gradient(160deg, #8B4562, #C4607F, #E8A0B4)' },
  { id: 2, label: 'Nail art',       bg: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)' },
  { id: 3, label: 'Braiding',       bg: 'linear-gradient(135deg, #3D1520, #6B2A40, #C4607F)' },
  { id: 4, label: 'Spa treatment',  bg: 'linear-gradient(135deg, #E8A0B4, #F5D0DC)' },
  { id: 5, label: 'Barbering',      bg: 'linear-gradient(135deg, #2C1810, #8B4562)' },
  { id: 6, label: 'Wig styling',    bg: 'linear-gradient(135deg, #C4607F, #E8D5A3)' },
]

const PlusIcon = () => (
  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="15" cy="15" r="13" stroke="white" strokeWidth="1.5" />
    <path d="M10 15 L20 15 M15 10 L15 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="gallery__header">
        <p className="section-label section-label--center">Portfolio</p>
        <h2 className="section-title section-title--center" id="gallery-heading">
          Our <em>Work</em> Speaks<br />For Itself
        </h2>
        <div className="gold-line gold-line--center" aria-hidden="true" />
      </div>

      <div className="gallery__grid" role="list" aria-label="Gallery of salon work">
        {galleryItems.map(({ id, label, bg }) => (
          <div className="gallery__item" key={id} role="listitem" aria-label={label}>
            <div
              className="gallery__item-inner"
              style={{ background: bg }}
              aria-hidden="true"
            />
            <div className="gallery__item-overlay" aria-hidden="true">
              <span className="gallery__item-icon">
                <PlusIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
