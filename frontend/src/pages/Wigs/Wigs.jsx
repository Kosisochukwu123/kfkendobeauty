import React from 'react'
import './Wigs.css'

const wigs = [
  {
    id: 1,
    name: 'Silky Body Wave',
    type: 'Lace Front · 18" · Natural Black',
    price: '₦85,000',
    oldPrice: '₦120,000',
    badge: '-30%',
    badgeVariant: '',
    bg: 'linear-gradient(160deg, #C4607F, #E8A0B4, #F5D0DC)',
  },
  {
    id: 2,
    name: 'Sleek Straight Unit',
    type: 'Full Lace · 22" · #1B Dark',
    price: '₦105,000',
    oldPrice: '₦150,000',
    badge: 'New',
    badgeVariant: '',
    bg: 'linear-gradient(160deg, #3D1520, #6B2A40, #C4607F)',
  },
  {
    id: 3,
    name: 'Golden Curl Goddess',
    type: 'Lace Front · 20" · Honey Blonde',
    price: '₦95,000',
    oldPrice: '₦135,000',
    badge: 'Trending',
    badgeVariant: 'gold',
    bg: 'linear-gradient(160deg, #C9A84C, #E8D5A3, #FBF5E6)',
  },
  {
    id: 4,
    name: 'Deep Wave Bob',
    type: 'Lace Closure · 14" · Natural',
    price: '₦65,000',
    oldPrice: '₦95,000',
    badge: '-30%',
    badgeVariant: '',
    bg: 'linear-gradient(160deg, #2C1810, #4A2030, #8B4562)',
  },
  {
    id: 5,
    name: 'Water Wave Goddess',
    type: 'Full Lace · 24" · Dark Brown',
    price: '₦120,000',
    oldPrice: '₦170,000',
    badge: '-30%',
    badgeVariant: '',
    bg: 'linear-gradient(160deg, #8B4562, #C4607F, #E8A0B4)',
  },
  {
    id: 6,
    name: 'Loose Deep Curls',
    type: 'Lace Front · 20" · Burgundy',
    price: '₦90,000',
    oldPrice: '₦128,000',
    badge: 'Hot',
    badgeVariant: 'gold',
    bg: 'linear-gradient(160deg, #4A2030, #C4607F, #C9A84C)',
  },
]

export default function Wigs() {
  const scrollToBooking = () => {
    window.location.href = '/#booking'
  }

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="wigs-page__hero">
        <p className="section-label section-label--center">Wig Collection</p>
        <h1 className="wigs-page__hero-title">
          Luxury <em>Wig</em> Boutique
        </h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="wigs-page__hero-desc">
          Premium human hair, lace fronts, and full-lace units — handpicked for quality,
          crafted for elegance
        </p>
        <div className="wigs-page__promo-badge" aria-label="30 percent off all wigs this month">
          ✦ 30% OFF ALL WIGS THIS MONTH ✦
        </div>
      </div>

      {/* Catalog */}
      <section className="wigs-page__catalog" aria-labelledby="wigs-catalog-heading">
        <h2 className="sr-only" id="wigs-catalog-heading">Wig Catalog</h2>
        <div className="wig-grid">
          {wigs.map(({ id, name, type, price, oldPrice, badge, badgeVariant, bg }) => (
            <article className="wig-card" key={id}>
              <div className="wig-card__img">
                <div
                  className="wig-card__img-inner"
                  style={{ background: bg }}
                  aria-hidden="true"
                />
                <span className={`wig-card__badge${badgeVariant === 'gold' ? ' wig-card__badge--gold' : ''}`}>
                  {badge}
                </span>
              </div>
              <div className="wig-card__info">
                <h3 className="wig-card__name">{name}</h3>
                <p className="wig-card__type">{type}</p>
                <div className="wig-card__price-row">
                  <div>
                    <span className="wig-card__price">{price}</span>
                    <span className="wig-card__old-price">{oldPrice}</span>
                  </div>
                  <button
                    className="wig-card__btn"
                    onClick={scrollToBooking}
                    aria-label={`Order ${name}`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
