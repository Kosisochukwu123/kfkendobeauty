import React from 'react'
import './SaleBanner.css'

export default function SaleBanner({ onCtaClick }) {
  return (
    <div className="sale-banner" role="banner" aria-label="Promotional offer">
      <div className="sale-banner__shimmer" aria-hidden="true" />
      <div className="sale-banner__inner">
        <span className="sale-banner__tag">Limited Time</span>
        <span className="sale-banner__text">
          ✦ Exclusive 30% OFF on all services this season ✦
        </span>
        <button className="sale-banner__cta" onClick={onCtaClick}>
          Claim Offer
        </button>
      </div>
    </div>
  )
}
