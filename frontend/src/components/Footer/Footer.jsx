import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'
import SocialIcons from '../SocialIcons/SocialIcons'

const quickLinks = [
  { label: 'Home',          to: '/'      },
  { label: 'Wig Collection',to: '/wigs'  },
  { label: 'Meet the Team', to: '/team'  },
  { label: 'Price List',    to: '/prices'},
  { label: 'Careers & Jobs',to: '/jobs'  },
]

const serviceLinks = [
  'Hairstyling', 'Wig Installation', 'Nail Artistry',
  'Barbering', 'Braiding & Plaiting', 'Spa Treatments',
]

const hours = [
  { day: 'Mon – Fri',  time: '9am – 7pm' },
  { day: 'Saturday',  time: '8am – 8pm' },
  { day: 'Sunday',    time: '12pm – 6pm' },
]

export default function Footer() {
  const navigate = useNavigate()

  const scrollToBooking = () => {
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 400)
    } else {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__grid">
        {/* Brand */}
        <div>
          <Link to="/" className="footer__logo">
            Kfkendo<span>.</span>
          </Link>
          <p className="footer__desc">
            Luxury hair, beauty and spa services crafted to celebrate your most radiant self.
            Where every visit is an experience.
          </p>
          <div className="footer__social" aria-label="Social media links">
            <SocialIcons variant="footer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <nav className="footer__links" aria-label="Footer navigation">
            {quickLinks.map(({ label, to }) => (
              <Link key={label} to={to}>{label}</Link>
            ))}
            <button onClick={scrollToBooking}>Book Now</button>
          </nav>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <div className="footer__links">
            {serviceLinks.map(s => (
              <button key={s} onClick={scrollToBooking}>{s}</button>
            ))}
          </div>
        </div>

        {/* Hours & Contact */}
        <div className="footer__col">
          <h4>Hours of Operation</h4>
          <div className="footer__hours">
            {hours.map(({ day, time }) => (
              <div className="footer__hour-row" key={day}>
                <span className="footer__hour-day">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
          <div className="footer__contact" aria-label="Contact information">
            <span className="footer__contact-item">📞 +234 800 KFKENDO</span>
            <span className="footer__contact-item">✉ hello@kfkendobeauty.com</span>
            <span className="footer__contact-item">📍 Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copy">© 2025 Kfkendo Beauty. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}