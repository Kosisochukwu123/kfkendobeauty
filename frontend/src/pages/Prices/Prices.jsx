import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Prices.css'

const categories = [
  {
    id: 'hairstyling',
    title: 'Hairstyling',
    sub: 'Cuts · Colour · Blowouts · Treatments',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="10" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M8 44 Q8 32 24 32 Q40 32 40 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 10 Q21 6 24 8 Q27 6 30 10" stroke="#E8A0B4" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    items: [
      { service: 'Ladies Haircut & Blow Dry', note: 'Includes wash and style', price: '₦8,000 – ₦15,000' },
      { service: 'Men\'s Haircut', note: 'Scissors or clipper finish', price: '₦4,000 – ₦8,000' },
      { service: 'Full Colour', note: 'Single process colour', price: '₦25,000 – ₦45,000', popular: true },
      { service: 'Highlights / Balayage', note: 'Partial or full head', price: '₦35,000 – ₦70,000' },
      { service: 'Keratin Treatment', note: 'Smoothing & frizz control', price: '₦40,000 – ₦80,000' },
      { service: 'Deep Conditioning Treatment', note: 'Protein or moisture mask', price: '₦8,000 – ₦15,000' },
      { service: 'Blowout & Style', note: 'Wash, blow dry, set', price: '₦6,000 – ₦12,000' },
      { service: 'Big Chop / Natural Cut', note: 'Specialist natural hair cut', price: '₦10,000 – ₦18,000' },
    ],
  },
  {
    id: 'wigs',
    title: 'Wig Services',
    sub: 'Installation · Customisation · Repair',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28 Q10 12 24 12 Q38 12 38 28" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        <path d="M10 28 Q8 36 16 38 L32 38 Q40 36 38 28" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    items: [
      { service: 'Lace Front Installation', note: 'Glue or tape method', price: '₦15,000 – ₦25,000', popular: true },
      { service: 'Full Lace Wig Installation', note: 'Includes styling', price: '₦20,000 – ₦35,000' },
      { service: 'Closure / Frontal Sew-In', note: 'With leave-out or closure', price: '₦18,000 – ₦30,000' },
      { service: 'Wig Customisation', note: 'Tinting, bleaching knots, plucking', price: '₦12,000 – ₦22,000' },
      { service: 'Wig Wash & Restyle', note: 'Clean, condition and reset', price: '₦8,000 – ₦15,000' },
      { service: 'Wig Repair', note: 'Lace repair, weft re-sewing', price: '₦10,000 – ₦20,000' },
    ],
  },
  {
    id: 'nails',
    title: 'Nail Artistry',
    sub: 'Manicure · Pedicure · Extensions · Art',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="22" width="5" height="14" rx="2.5" stroke="#C9A84C" strokeWidth="1.5"/>
        <rect x="22" y="18" width="5" height="18" rx="2.5" stroke="#C9A84C" strokeWidth="1.5"/>
        <rect x="28" y="20" width="5" height="16" rx="2.5" stroke="#C9A84C" strokeWidth="1.5"/>
      </svg>
    ),
    items: [
      { service: 'Classic Manicure', note: 'Shape, buff, polish', price: '₦5,000 – ₦8,000' },
      { service: 'Gel Manicure', note: 'Long-lasting gel colour', price: '₦8,000 – ₦12,000', popular: true },
      { service: 'Acrylic Extensions', note: 'Full set with shape of choice', price: '₦12,000 – ₦18,000' },
      { service: 'Gel Extensions', note: 'Builder gel full set', price: '₦14,000 – ₦22,000' },
      { service: 'Nail Art', note: 'Per nail or full set designs', price: '₦3,000 – ₦15,000' },
      { service: 'Classic Pedicure', note: 'Soak, scrub, shape, polish', price: '₦6,000 – ₦10,000' },
      { service: 'Spa Pedicure', note: 'Luxury treatment with mask', price: '₦10,000 – ₦16,000' },
      { service: 'Nail Removal & Soak Off', note: 'Safe removal of acrylics or gel', price: '₦3,000 – ₦5,000' },
    ],
  },
  {
    id: 'barbering',
    title: 'Barbering',
    sub: 'Cuts · Beard · Shaves · Grooming',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36 L24 12 L36 36" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M16 28 L32 28" stroke="#C9A84C" strokeWidth="1.5"/>
        <circle cx="12" cy="38" r="3" stroke="#E8A0B4" strokeWidth="1.5"/>
        <circle cx="36" cy="38" r="3" stroke="#E8A0B4" strokeWidth="1.5"/>
      </svg>
    ),
    items: [
      { service: 'Haircut & Shape Up', note: 'Clipper cut with lineup', price: '₦4,000 – ₦7,000', popular: true },
      { service: 'Fade (Low / Mid / High)', note: 'Skin fade or taper', price: '₦5,000 – ₦9,000' },
      { service: 'Beard Trim & Shape', note: 'Define and neaten beard', price: '₦3,000 – ₦5,000' },
      { service: 'Hot Towel Shave', note: 'Traditional straight razor shave', price: '₦6,000 – ₦10,000' },
      { service: 'Haircut + Beard Combo', note: 'Full groom package', price: '₦8,000 – ₦14,000' },
      { service: 'Hair Design / Pattern', note: 'Custom hair art or design', price: '₦5,000 – ₦12,000' },
    ],
  },
  {
    id: 'braiding',
    title: 'Hair Plaiting & Braiding',
    sub: 'Braids · Cornrows · Twists · Protective Styles',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8 C16 16 24 20 20 28 C16 36 20 44 20 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M28 8 C32 16 24 20 28 28 C32 36 28 44 28 44" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M20 16 L28 20 M28 20 L20 24 M20 24 L28 28" stroke="#E8A0B4" strokeWidth="1"/>
      </svg>
    ),
    items: [
      { service: 'Knotless Box Braids', note: 'Small / medium / large', price: '₦20,000 – ₦45,000', popular: true },
      { service: 'Classic Box Braids', note: 'With or without extensions', price: '₦15,000 – ₦35,000' },
      { service: 'Cornrows', note: 'Simple or patterned styles', price: '₦8,000 – ₦20,000' },
      { service: 'Senegalese Twists', note: 'Small / medium / jumbo', price: '₦18,000 – ₦40,000' },
      { service: 'Passion Twists', note: 'With curly ends', price: '₦20,000 – ₦38,000' },
      { service: 'Locs Retwist', note: 'Starter or mature locs', price: '₦8,000 – ₦18,000' },
      { service: 'Ghana Weaving', note: 'Feed-in cornrows', price: '₦10,000 – ₦22,000' },
    ],
  },
  {
    id: 'spa',
    title: 'Spa & Skincare',
    sub: 'Facials · Scalp · Relaxation · Packages',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8 C24 8 16 16 16 24 C16 32 20 36 24 36 C28 36 32 32 32 24 C32 16 24 8 24 8Z"
          stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
        <path d="M16 24 C10 20 8 26 12 28" stroke="#E8A0B4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M32 24 C38 20 40 26 36 28" stroke="#E8A0B4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      { service: 'Express Facial', note: '30 mins — cleanse, tone, moisturise', price: '₦12,000 – ₦18,000' },
      { service: 'Deep Cleanse Facial', note: '60 mins — full treatment', price: '₦20,000 – ₦30,000', popular: true },
      { service: 'Anti-Ageing Facial', note: 'Lifting and firming treatment', price: '₦25,000 – ₦40,000' },
      { service: 'Scalp Treatment', note: 'Oil treatment and massage', price: '₦8,000 – ₦14,000' },
      { service: 'Back Massage', note: '45 mins relaxation massage', price: '₦15,000 – ₦22,000' },
      { service: 'Full Relaxation Package', note: 'Facial + massage + scalp', price: '₦40,000 – ₦65,000' },
    ],
  },
]

const InfoIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M10 9V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="10" cy="6.5" r="0.8" fill="currentColor"/>
  </svg>
)

export default function Prices() {
  const navigate = useNavigate()

  const scrollToBooking = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <div className="page-enter">

      {/* Hero */}
      <div className="prices-page__hero">
        <p className="section-label section-label--center">Transparent Pricing</p>
        <h1 className="prices-page__hero-title">
          Our <em>Service</em> Prices
        </h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="prices-page__hero-desc">
          All prices listed are starting ranges. Final price depends on hair length,
          thickness and complexity. Book a consultation for an exact quote.
        </p>
        <button className="btn btn--primary" onClick={scrollToBooking}>
          Book a Consultation
        </button>
      </div>

      {/* Price tables */}
      <div className="prices-page__body">
        {categories.map(({ id, title, sub, icon, items }) => (
          <div className="price-category" key={id}>
            <div className="price-category__header">
              <div className="price-category__icon">{icon}</div>
              <div>
                <div className="price-category__title">{title}</div>
                <div className="price-category__sub">{sub}</div>
              </div>
            </div>
            <table className="price-table" aria-label={`${title} pricing`}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ service, note, price, popular }) => (
                  <tr key={service}>
                    <td>
                      {service}
                      {popular && <span className="price-table__badge">Popular</span>}
                      {note && <span className="price-table__note">{note}</span>}
                    </td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Disclaimer note */}
      <div className="prices-page__note">
        <div className="prices-page__note-icon">
          <InfoIcon />
        </div>
 <p className="prices-page__note-text">
  Prices are indicative and may vary depending on hair length, density, and the complexity
  of the service requested. All prices are in Nigerian Naira (₦). We are based in
  Uyo, Akwa Ibom State. We offer a free consultation before any major service —
  book online or call us to discuss your needs.
</p>
      </div>

      {/* CTA */}
      <div className="prices-page__cta">
        <h3>Ready to <em>Book?</em></h3>
        <p>Fill in our quick form and our team will confirm your slot within 24 hours.</p>
        <button className="btn btn--primary" onClick={scrollToBooking}>
          Book Now
        </button>
      </div>

    </div>
  )
}