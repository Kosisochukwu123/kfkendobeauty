import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const stats = [
  { num: '500+', label: 'Happy Clients' },
  { num: '8+',   label: 'Years of Excellence' },
  { num: '12',   label: 'Expert Stylists' },
  { num: '4.9★', label: 'Client Rating' },
]

export default function Hero() {
  const navigate = useNavigate()

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* ── Right side: real image instead of the gradient panel ── */}
      <div className="hero__img-panel" aria-hidden="true">
        <img
          src="/images/hero-image"
          alt="Kfkendo Beauty salon"
          className="hero__img"
          onError={(e) => {
            /* Silently fall back to the gradient if the file has an extension
               we didn't anticipate — try common extensions one by one */
            const exts = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.jfif', '.bmp']
            const tried = e.target.dataset.tried
              ? e.target.dataset.tried.split(',')
              : []
            const next = exts.find(x => !tried.includes(x))
            if (next) {
              e.target.dataset.tried = [...tried, next].join(',')
              e.target.src = `/images/hero-image${next}`
            } else {
              /* All extensions exhausted — hide img, gradient CSS shows through */
              e.target.style.display = 'none'
            }
          }}
        />
      </div>

      <div className="hero__content">
        <div className="hero__badge">Premium Hair · Beauty · Spa</div>

        <h1 className="hero__title">
          <em>Where Beauty</em>
          <strong>Meets Artistry</strong>
        </h1>

        <p className="hero__subtitle">Kfkendobeauty Luxury Salon</p>

        <p className="hero__desc">
          Experience transformative beauty services crafted with precision and passion.
          From bespoke hairstyling to luxurious spa treatments.
        </p>

        <div className="hero__buttons">
          <button className="btn btn--primary" onClick={scrollToBooking}>
            Book a Session
          </button>
          <button className="btn btn--outline" onClick={() => navigate('/wigs')}>
            View Wig Collection
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="hero__stat-bar" aria-label="Salon statistics">
        {stats.map(({ num, label }) => (
          <div className="hero__stat" key={label}>
            <div className="hero__stat-num">{num}</div>
            <div className="hero__stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}