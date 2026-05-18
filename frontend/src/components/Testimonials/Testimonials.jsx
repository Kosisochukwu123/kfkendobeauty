import React, { useState, useRef, useCallback } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    text: 'Kfkendo completely transformed my look. The team understood exactly what I wanted and delivered beyond expectations. I left feeling like an absolute queen!',
    name: 'Adaeze Okafor',
    role: 'Loyal Client',
    initials: 'AO',
    avatarBg: '#C4607F',
    stars: '★★★★★',
  },
  {
    id: 2,
    text: "The wig installation was flawless. Nobody can tell it's not my natural hair! The stylist was incredibly skilled and the whole atmosphere was so luxurious.",
    name: 'Ngozi Kalu',
    role: 'Wig Client',
    initials: 'NK',
    avatarBg: '#C9A84C',
    stars: '★★★★★',
  },
  {
    id: 3,
    text: 'Best barbershop experience in Lagos. Clean, modern, professional. My fade was crisp and the beard trim was immaculate. Will be back every single month.',
    name: 'Emeka Babatunde',
    role: 'Barber Client',
    initials: 'EB',
    avatarBg: '#4A2030',
    stars: '★★★★★',
  },
  {
    id: 4,
    text: 'My braids have never looked this neat! Amina is incredibly talented — the knotless braids lasted over six weeks and still looked fresh. Highly recommended.',
    name: 'Fatima Yusuf',
    role: 'Braiding Client',
    initials: 'FY',
    avatarBg: '#8B4562',
    stars: '★★★★★',
  },
  {
    id: 5,
    text: 'The spa facial left my skin glowing for weeks. The environment is so calming and professional. This is now my go-to place whenever I need to pamper myself.',
    name: 'Chidinma Eze',
    role: 'Spa Client',
    initials: 'CE',
    avatarBg: '#6B2A40',
    stars: '★★★★★',
  },
  {
    id: 6,
    text: 'Blessing did my nail extensions and the detail in the art is unmatched. People stop me on the street to ask who did my nails. Worth every naira!',
    name: 'Ifeoma Nnadi',
    role: 'Nail Client',
    initials: 'IN',
    avatarBg: '#C4607F',
    stars: '★★★★★',
  },
]

const CARD_WIDTH = 300 + 24 // card width + gap

const ChevronLeft = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronRight = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const trackRef          = useRef(null)
  const startX            = useRef(null)
  const currentOffset     = useRef(0)
  const isDragging        = useRef(false)

  const maxIndex = testimonials.length - 1

  // Move track to the given index with animation
  const goTo = useCallback((i) => {
    const clamped = Math.max(0, Math.min(i, maxIndex))
    setIndex(clamped)
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.45s cubic-bezier(0.77, 0, 0.18, 1)'
      trackRef.current.style.transform  = `translateX(-${clamped * CARD_WIDTH}px)`
    }
  }, [maxIndex])

  // Snap back or advance based on how far the user dragged
  const settle = useCallback((offset) => {
    const threshold = CARD_WIDTH * 0.2
    if (offset < -threshold) goTo(index + 1)
    else if (offset > threshold) goTo(index - 1)
    else goTo(index)
  }, [index, goTo])

  // ── Mouse drag (desktop) ──────────────────────────
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX
    currentOffset.current = 0
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    currentOffset.current = e.clientX - startX.current
    if (trackRef.current) {
      trackRef.current.style.transform =
        `translateX(${-(index * CARD_WIDTH) + currentOffset.current}px)`
    }
  }

  const onMouseUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    settle(currentOffset.current)
  }

  // ── Touch swipe (mobile / tablet) ────────────────
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    currentOffset.current = 0
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }

  const onTouchMove = (e) => {
    if (startX.current === null) return
    currentOffset.current = e.touches[0].clientX - startX.current
    if (trackRef.current) {
      trackRef.current.style.transform =
        `translateX(${-(index * CARD_WIDTH) + currentOffset.current}px)`
    }
  }

  const onTouchEnd = () => {
    settle(currentOffset.current)
    startX.current = null
  }

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="testimonials__header">
        <p className="section-label section-label--center">Client Love</p>
        <h2
          className="section-title section-title--light section-title--center"
          id="testimonials-heading"
        >
          What Our Clients <em>Say</em>
        </h2>
        <div className="gold-line gold-line--center" aria-hidden="true" />
      </div>

      {/* Arrow controls + counter */}
      <div className="testimonials__controls">
        <button
          className="testimonials__arrow"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>

        <span className="testimonials__count">
          <span>{index + 1}</span> / {testimonials.length}
        </span>

        <button
          className="testimonials__arrow"
          onClick={() => goTo(index + 1)}
          disabled={index === maxIndex}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scrollable track — touch + mouse */}
      <div
        className="testimonials__track-wrap"
        aria-label="Testimonials carousel"
        // Mouse events
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        // Touch events
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="testimonials__track"
          ref={trackRef}
          role="list"
        >
          {testimonials.map(({ id, text, name, role, initials, avatarBg, stars }) => (
            <article className="testimonial-card" key={id} role="listitem">
              <p className="testimonial-card__text">{text}</p>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: avatarBg }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{name}</div>
                  <div className="testimonial-card__role">{role}</div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    {stars}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonials__dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}