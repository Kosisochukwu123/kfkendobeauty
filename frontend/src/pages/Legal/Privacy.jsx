import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Legal.css'

const UPDATED = 'January 2025'

export default function Privacy() {
  return (
    <div className="page-enter">
      <div className="legal-page__hero">
        <p className="section-label section-label--center">Legal</p>
        <h1 className="legal-page__hero-title">Privacy <em>Policy</em></h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="legal-page__hero-updated">Last updated: {UPDATED}</p>
      </div>

      <div className="legal-page__body">
        {/* Navigation between legal pages */}
        <nav className="legal-nav" aria-label="Legal pages">
          <Link to="/privacy"       className="legal-nav__link active">Privacy Policy</Link>
          <Link to="/terms"         className="legal-nav__link">Terms of Service</Link>
          <Link to="/cookie-policy" className="legal-nav__link">Cookie Policy</Link>
        </nav>

        <div className="legal-highlight">
          Your privacy matters to us. This policy explains what personal information Kfkendo Beauty
          collects, how we use it, and your rights in relation to it. We are based in
          Uyo, Akwa Ibom State, Nigeria.
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">1.</span>Who We Are</h2>
          <p>
            Kfkendo Beauty is a luxury hair, beauty and spa salon operating in Uyo, Akwa Ibom State,
            Nigeria. When this policy refers to <strong>"we"</strong>, <strong>"us"</strong> or
            <strong> "our"</strong>, it means Kfkendo Beauty. You can contact us at{' '}
            <a href="mailto:hello@kfkendobeauty.com">hello@kfkendobeauty.com</a>.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">2.</span>Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Your name, phone number and email address when you book an appointment or contact us</li>
            <li>Your name, email and CV/portfolio when you apply for a job vacancy</li>
            <li>Your service preferences and appointment history</li>
            <li>Messages you send us via WhatsApp, email or our contact form</li>
          </ul>
          <p>
            We also collect certain information automatically when you visit our website, such as
            your IP address, browser type, pages visited, and how long you spent on each page.
            This is collected through cookies — see our <Link to="/cookie-policy">Cookie Policy</Link> for details.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">3.</span>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Confirm and manage your appointment bookings</li>
            <li>Contact you about your booking, including reminders and updates</li>
            <li>Process job applications and contact suitable candidates</li>
            <li>Respond to your enquiries and customer service requests</li>
            <li>Improve our website and the services we offer</li>
            <li>Send you promotional offers or newsletters (only if you have opted in)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">4.</span>How We Share Your Information</h2>
          <p>
            We do not sell, trade or rent your personal information to third parties.
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and business (e.g. hosting, email delivery)</li>
            <li>Payment processors when you make a purchase (they handle payment data under their own policies)</li>
            <li>Law enforcement or regulatory authorities if required by law</li>
          </ul>
          <p>All third parties we work with are required to handle your data securely and in accordance with applicable law.</p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">5.</span>How Long We Keep Your Data</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes
            described in this policy. Booking records are kept for up to 3 years for business
            and legal purposes. Job application data is kept for 6 months after a position is filled,
            then securely deleted unless you consent to us keeping it longer.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">6.</span>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent to marketing communications at any time</li>
            <li>Object to how we process your data in certain circumstances</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:hello@kfkendobeauty.com">hello@kfkendobeauty.com</a>.
            We will respond within 30 days.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">7.</span>Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal
            information from unauthorised access, loss or misuse. Our website uses HTTPS
            encryption. However, no method of transmission over the internet is 100% secure
            and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">8.</span>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update
            the "Last updated" date at the top of this page. We encourage you to review this
            policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">9.</span>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data,
            please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:hello@kfkendobeauty.com">hello@kfkendobeauty.com</a></li>
            <li>Phone: +234 800 KFKENDO</li>
            <li>Address: Uyo, Akwa Ibom State, Nigeria</li>
          </ul>
        </div>
      </div>
    </div>
  )
}