import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

const highlights = [
  'Premium products and techniques for every hair type',
  'Expertly curated wig and hair extension collections',
  'Relaxing spa environment for the full luxury experience',
  'Unisex services welcoming all clients',
  'Nail artistry, barbering, and bespoke styling',
]

export default function About() {
  const navigate = useNavigate()

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__grid">
        {/* Image */}
        <div className="about__img-wrap">
          <div className="about__img-placeholder" aria-hidden="true">
            <svg viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="aboutGrad" x1="0" y1="0" x2="400" y2="460" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C4607F" />
                  <stop offset="50%" stopColor="#E8A0B4" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>
              <rect width="400" height="460" fill="url(#aboutGrad)" />
              <circle cx="200" cy="180" r="80" fill="rgba(255,255,255,.08)" />
              <circle cx="200" cy="180" r="55" fill="rgba(255,255,255,.1)" />
              <ellipse cx="200" cy="155" rx="30" ry="35" fill="rgba(255,255,255,.22)" />
              <path d="M160 230 Q200 200 240 230 L250 320 Q200 340 150 320 Z" fill="rgba(255,255,255,.16)" />
              <path d="M175 135 Q185 115 200 120 Q215 115 225 135" stroke="rgba(255,255,255,.4)" strokeWidth="2" fill="none" />
              <path d="M168 140 Q170 110 200 105 Q230 110 232 140" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" fill="none" />
              <circle cx="80" cy="80" r="3" fill="rgba(201,168,76,.5)" />
              <circle cx="320" cy="100" r="2" fill="rgba(201,168,76,.4)" />
              <circle cx="60" cy="350" r="4" fill="rgba(201,168,76,.3)" />
              <circle cx="340" cy="380" r="2.5" fill="rgba(201,168,76,.5)" />
              <text x="200" y="420" textAnchor="middle" fill="rgba(255,255,255,.4)"
                fontFamily="Cormorant Garamond, serif" fontSize="15" fontStyle="italic">
                Beauty Redefined
              </text>
            </svg>
          </div>
          <div className="about__accent-box" aria-hidden="true">
            <div className="about__accent-num">8+</div>
            <div className="about__accent-text">Years of Luxury</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="section-label">Our Story</p>
          <h2 className="section-title" id="about-heading">
            Crafting <em>Confidence</em><br />One Style at a Time
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            salonname Beauty is more than a salon — it's a sanctuary where artistry meets luxury.
            Our team of seasoned professionals are dedicated to bringing out your most radiant
            self through tailored beauty experiences.
          </p>
          <ul className="about__list" aria-label="Our highlights">
            {highlights.map((item) => (
              <li className="about__list-item" key={item}>{item}</li>
            ))}
          </ul>
          <button
            className="btn btn--primary"
            style={{ marginTop: '2rem' }}
            onClick={() => navigate('/team')}
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
