import React from 'react'
import { Link } from 'react-router-dom'
import './Legal.css'

const UPDATED = 'January 2025'

export default function Terms() {
  return (
    <div className="page-enter">
      <div className="legal-page__hero">
        <p className="section-label section-label--center">Legal</p>
        <h1 className="legal-page__hero-title">Terms of <em>Service</em></h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="legal-page__hero-updated">Last updated: {UPDATED}</p>
      </div>

      <div className="legal-page__body">
        <nav className="legal-nav" aria-label="Legal pages">
          <Link to="/privacy"       className="legal-nav__link">Privacy Policy</Link>
          <Link to="/terms"         className="legal-nav__link active">Terms of Service</Link>
          <Link to="/cookie-policy" className="legal-nav__link">Cookie Policy</Link>
        </nav>

        <div className="legal-highlight">
          By booking an appointment, purchasing a product, or using our website, you agree
          to these Terms of Service. Please read them carefully before proceeding.
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">1.</span>About Us</h2>
          <p>
            These terms govern your use of the salonname Beauty website and the services we provide
            at our salon in Uyo, Akwa Ibom State, Nigeria. By accessing our website or booking
            a service, you confirm that you are at least 18 years old or have parental consent.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">2.</span>Appointments & Bookings</h2>
          <ul>
            <li>All appointments must be booked in advance via our website, phone, or WhatsApp</li>
            <li>A booking is confirmed only after you receive confirmation from our team</li>
            <li>We reserve the right to decline or reschedule bookings at our discretion</li>
            <li>Walk-in appointments are subject to availability and are not guaranteed</li>
            <li>Please arrive on time. Late arrivals may result in a shortened appointment or rescheduling</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">3.</span>Cancellations & No-Shows</h2>
          <ul>
            <li>We require at least 24 hours notice for cancellations or rescheduling</li>
            <li>Cancellations with less than 24 hours notice may incur a cancellation fee</li>
            <li>Repeated no-shows may result in a deposit being required for future bookings</li>
            <li>We reserve the right to cancel appointments in exceptional circumstances and will notify you as soon as possible</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">4.</span>Pricing & Payment</h2>
          <p>
            All prices are listed in Nigerian Naira (₦) and are subject to change without notice.
            The prices shown on our website are indicative starting prices — final costs depend on
            hair length, thickness and complexity of the service.
          </p>
          <ul>
            <li>Payment is due at the time of service unless otherwise agreed</li>
            <li>We accept cash and bank transfers</li>
            <li>A price consultation is available before any major service begins</li>
            <li>Deposits may be required for certain high-value services or new clients</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">5.</span>Services & Results</h2>
          <p>
            While our stylists are highly trained professionals, hair and beauty services involve
            an element of individual variation. Results may vary depending on your hair type,
            condition, previous treatments and natural hair characteristics.
          </p>
          <ul>
            <li>We recommend a consultation before colour, chemical or wig services</li>
            <li>You are responsible for disclosing any allergies, medical conditions or previous treatments</li>
            <li>We will perform patch tests where required before chemical services</li>
            <li>We are not liable for adverse reactions where full disclosure was not made</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">6.</span>Wig Sales & Products</h2>
          <ul>
            <li>All wig and product sales are final unless the item is faulty or not as described</li>
            <li>Custom or ordered wigs cannot be returned or exchanged once commissioned</li>
            <li>Please inspect all products at the time of purchase</li>
            <li>Complaints about product quality must be raised within 48 hours of purchase</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">7.</span>Website Use</h2>
          <p>
            Our website and its content are owned by salonname Beauty. You may not reproduce,
            distribute, or use our content for commercial purposes without written permission.
          </p>
          <ul>
            <li>You must not use our website in any way that causes damage or is unlawful</li>
            <li>We are not responsible for the content of any external websites we link to</li>
            <li>We reserve the right to modify or discontinue any part of our website at any time</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">8.</span>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by Nigerian law, salonname Beauty shall not be liable
            for any indirect, incidental or consequential loss or damage arising from your use
            of our website or services. Our total liability in relation to any claim shall not
            exceed the amount you paid for the service in question.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">9.</span>Governing Law</h2>
          <p>
            These terms are governed by the laws of the Federal Republic of Nigeria.
            Any disputes shall be subject to the exclusive jurisdiction of the courts of
            Akwa Ibom State, Nigeria.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">10.</span>Contact</h2>
          <p>
            For any questions about these terms, contact us at{' '}
            <a href="mailto:hello@salonname.com">hello@salonname.com</a> or
            call +234 800 salonname.
          </p>
        </div>
      </div>
    </div>
  )
}