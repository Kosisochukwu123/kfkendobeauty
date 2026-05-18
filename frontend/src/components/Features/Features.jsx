import React from 'react'
import './Features.css'

const features = [
  {
    title: 'Premium Quality',
    desc: 'Only the finest products trusted by industry professionals worldwide',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 4 L16.5 10.5 L23 11 L18 16 L19.5 23 L14 19.5 L8.5 23 L10 16 L5 11 L11.5 10.5 Z"
          stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Certified Experts',
    desc: 'All stylists are certified with years of hands-on professional experience',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="11" r="5" stroke="#C9A84C" strokeWidth="1.2" />
        <path d="M5 24 Q5 19 14 19 Q23 19 23 24" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M19 8 L21 10 L25 6" stroke="#E8A0B4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Luxury Environment',
    desc: 'A serene, upscale atmosphere designed for your total relaxation',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="5" y="8" width="18" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.2" />
        <path d="M9 8 V6 Q14 4 19 6 V8" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
        <circle cx="14" cy="15" r="3" stroke="#E8A0B4" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    desc: 'We don\'t stop until you leave feeling absolutely stunning',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 5 C8 5 5 9 5 13 C5 18 9 21 14 23 C19 21 23 18 23 13 C23 9 20 5 14 5Z"
          stroke="#C9A84C" strokeWidth="1.2" fill="none" />
        <path d="M10 13 L13 16 L18 11" stroke="#E8A0B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <p className="section-label section-label--center">Why Choose Us</p>
      <h2 className="section-title section-title--center" id="features-heading">
        The <em>Kfkendo</em> Difference
      </h2>
      <div className="gold-line gold-line--center" aria-hidden="true" />

      <div className="features__grid">
        {features.map(({ title, desc, icon }) => (
          <div className="feature-item" key={title}>
            <div className="feature-item__icon-wrap">{icon}</div>
            <h3 className="feature-item__title">{title}</h3>
            <p className="feature-item__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
