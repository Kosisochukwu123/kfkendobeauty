import React from 'react'
import './Services.css'

const services = [
  {
    id: 'hairstyling',
    name: 'Hairstyling',
    desc: 'Bespoke cuts, blowouts, colour treatments and styling tailored to your vision',
    price: 'From ₦8,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="24" cy="14" r="10" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M8 44 Q8 32 24 32 Q40 32 40 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 10 Q21 6 24 8 Q27 6 30 10" stroke="#E8A0B4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="21" cy="14" r="1.5" fill="#C9A84C" />
        <circle cx="27" cy="14" r="1.5" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    id: 'wigs',
    name: 'Wig Installation',
    desc: 'Custom wig fittings, lace fronts, full units and professional installation services',
    price: 'From ₦15,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 28 Q10 12 24 12 Q38 12 38 28" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <path d="M10 28 Q8 36 16 38 L32 38 Q40 36 38 28" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <path d="M16 28 Q18 20 24 20 Q30 20 32 28" stroke="#E8A0B4" strokeWidth="1.2" fill="rgba(232,160,180,0.1)" />
        <line x1="24" y1="38" x2="24" y2="44" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="24" cy="44" r="2" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    id: 'nails',
    name: 'Nail Artistry',
    desc: 'Manicures, pedicures, nail extensions and intricate nail art designs',
    price: 'From ₦5,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="16" y="22" width="5" height="14" rx="2.5" stroke="#C9A84C" strokeWidth="1.5" />
        <rect x="22" y="18" width="5" height="18" rx="2.5" stroke="#C9A84C" strokeWidth="1.5" />
        <rect x="28" y="20" width="5" height="16" rx="2.5" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M16 38 Q24 42 33 38" stroke="#E8A0B4" strokeWidth="1.2" fill="none" />
        <circle cx="18.5" cy="24" r="1.5" fill="#E8A0B4" />
        <circle cx="24.5" cy="20" r="1.5" fill="#E8A0B4" />
        <circle cx="30.5" cy="22" r="1.5" fill="#E8A0B4" />
      </svg>
    ),
  },
  {
    id: 'barbering',
    name: 'Barbering',
    desc: 'Precision cuts, beard shaping, hot towel shaves and grooming for the modern man',
    price: 'From ₦4,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 36 L24 12 L36 36" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M16 28 L32 28" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="12" cy="38" r="3" stroke="#E8A0B4" strokeWidth="1.5" />
        <circle cx="36" cy="38" r="3" stroke="#E8A0B4" strokeWidth="1.5" />
        <path d="M9 36 L6 30" stroke="#E8A0B4" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M39 36 L42 30" stroke="#E8A0B4" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'plaiting',
    name: 'Hair Plaiting',
    desc: 'Box braids, cornrows, twists, knotless braids and all protective styles',
    price: 'From ₦10,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 8 C16 16 24 20 20 28 C16 36 20 44 20 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M28 8 C32 16 24 20 28 28 C32 36 28 44 28 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M20 16 L28 20" stroke="#E8A0B4" strokeWidth="1" />
        <path d="M28 20 L20 24" stroke="#E8A0B4" strokeWidth="1" />
        <path d="M20 24 L28 28" stroke="#E8A0B4" strokeWidth="1" />
        <path d="M28 28 L20 32" stroke="#E8A0B4" strokeWidth="1" />
        <path d="M20 32 L28 36" stroke="#E8A0B4" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'spa',
    name: 'Spa Treatments',
    desc: 'Facials, scalp treatments, deep conditioning and full relaxation spa packages',
    price: 'From ₦12,000',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 8 C24 8 16 16 16 24 C16 32 20 36 24 36 C28 36 32 32 32 24 C32 16 24 8 24 8Z"
          stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <path d="M16 24 C10 20 8 26 12 28" stroke="#E8A0B4" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M32 24 C38 20 40 26 36 28" stroke="#E8A0B4" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="22" r="3" fill="rgba(201,168,76,0.3)" stroke="#C9A84C" strokeWidth="1" />
        <path d="M22 42 Q24 40 26 42" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
]

export default function Services() {
  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__header">
        <div>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title section-title--light" id="services-heading">
            Our <em>Signature</em><br />Services
          </h2>
          <div className="section-divider" />
        </div>
        <button className="btn btn--outline" onClick={scrollToBooking}>
          Book Any Service
        </button>
      </div>

      <div className="services__grid" role="list">
        {services.map(({ id, name, desc, price, icon }) => (
          <article className="service-card" key={id} role="listitem">
            <div className="service-card__icon">{icon}</div>
            <h3 className="service-card__name">{name}</h3>
            <p className="service-card__desc">{desc}</p>
            <p className="service-card__price">{price}</p>
            <span className="service-card__arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
