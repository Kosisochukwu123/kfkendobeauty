import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    text: 'Kfkendo completely transformed my look. The team understood exactly what I wanted and delivered beyond expectations. I left feeling like a queen!',
    name: 'Adaeze Okafor',
    initials: 'AO',
    avatarBg: '#C4607F',
    stars: '★★★★★',
  },
  {
    id: 2,
    text: 'The wig installation was flawless. Nobody can tell it\'s not my natural hair! The stylist was incredibly skilled and the atmosphere was so luxurious.',
    name: 'Ngozi Kalu',
    initials: 'NK',
    avatarBg: '#C9A84C',
    stars: '★★★★★',
  },
  {
    id: 3,
    text: 'Best barbershop experience in Lagos. Clean, modern, professional. My fade was crisp and the beard trim was immaculate. Will be back every month.',
    name: 'Emeka Babatunde',
    initials: 'EB',
    avatarBg: '#4A2030',
    stars: '★★★★★',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__header">
        <p className="section-label section-label--center">Client Love</p>
        <h2 className="section-title section-title--light section-title--center" id="testimonials-heading">
          What Our Clients <em>Say</em>
        </h2>
        <div className="gold-line gold-line--center" aria-hidden="true" />
      </div>

      <div className="testimonials__grid">
        {testimonials.map(({ id, text, name, initials, avatarBg, stars }) => (
          <article className="testimonial-card" key={id}>
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
                <div className="testimonial-card__stars" aria-label="5 stars">{stars}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
