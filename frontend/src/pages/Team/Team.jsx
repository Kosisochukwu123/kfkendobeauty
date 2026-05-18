import React from 'react'
import './Team.css'

const members = [
  {
    id: 1,
    name: 'Chisom Okonkwo',
    role: 'Lead Hair Stylist',
    bio: '8 years mastering colour, cuts and transformations. Specialist in natural hair care.',
    bg: 'linear-gradient(160deg, #C4607F, #E8A0B4)',
  },
  {
    id: 2,
    name: 'Fatima Aliyu',
    role: 'Wig Specialist & Installer',
    bio: 'Certified wig technician with expertise in lace fronts, full lace and custom units.',
    bg: 'linear-gradient(160deg, #C9A84C, #E8D5A3)',
  },
  {
    id: 3,
    name: 'Tunde Adeyemi',
    role: 'Master Barber',
    bio: 'Precision fades, beard designs and grooming specialist with 10 years experience.',
    bg: 'linear-gradient(160deg, #3D1520, #6B2A40)',
  },
  {
    id: 4,
    name: 'Blessing Eze',
    role: 'Nail Technician',
    bio: 'Creative nail artist specialising in gel art, nail extensions and intricate designs.',
    bg: 'linear-gradient(160deg, #E8A0B4, #F5D0DC, #C9A84C)',
  },
  {
    id: 5,
    name: 'Amina Hassan',
    role: 'Braiding & Plaiting Expert',
    bio: 'Master of box braids, knotless braids, cornrows and all protective styling techniques.',
    bg: 'linear-gradient(160deg, #2C1810, #8B4562, #C4607F)',
  },
  {
    id: 6,
    name: 'Kemi Adeyinka',
    role: 'Spa & Skincare Therapist',
    bio: 'Licensed aesthetician providing facials, scalp treatments and relaxation therapies.',
    bg: 'linear-gradient(160deg, #C9A84C, #E8A0B4)',
  },
]

const IgIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="1" width="12" height="12" rx="3" stroke="white" strokeWidth="1.2" />
    <circle cx="7" cy="7" r="3" stroke="white" strokeWidth="1.2" />
    <circle cx="10.5" cy="3.5" r="0.8" fill="white" />
  </svg>
)

const FbIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.5 2H7C6.4 2 6 2.4 6 3V5H8.5L8.1 7.5H6V12H4V7.5H2V5H4V3C4 1.8 4.9 1 6 1H8.5V2Z"
      stroke="white" strokeWidth="1" fill="none" />
  </svg>
)

export default function Team() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="team-page__hero">
        <p className="section-label section-label--center">The Experts</p>
        <h1 className="team-page__hero-title">
          Meet Our <em>Dream</em> Team
        </h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="team-page__hero-desc">
          Passionate professionals dedicated to your beauty transformation
        </p>
      </div>

      {/* Team grid */}
      <section className="team-page__section" aria-labelledby="team-heading">
        <h2 className="sr-only" id="team-heading">Our Team Members</h2>
        <div className="team-grid">
          {members.map(({ id, name, role, bio, bg }) => (
            <article className="team-card" key={id}>
              <div className="team-card__photo">
                <div
                  className="team-card__photo-inner"
                  style={{ background: bg }}
                  aria-hidden="true"
                />
                <div className="team-card__overlay" aria-hidden="true">
                  <div className="team-card__social">
                    <a
                      href="https://instagram.com/kfkendobeauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card__social-link"
                      aria-label={`${name} on Instagram`}
                    >
                      <IgIcon />
                    </a>
                    <a
                      href="https://facebook.com/kfkendobeauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card__social-link"
                      aria-label={`${name} on Facebook`}
                    >
                      <FbIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="team-card__name">{name}</h3>
              <p className="team-card__role">{role}</p>
              <p className="team-card__bio">{bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
