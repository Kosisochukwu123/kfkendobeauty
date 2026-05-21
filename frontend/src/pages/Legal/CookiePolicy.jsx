import React from 'react'
import { Link } from 'react-router-dom'
import './Legal.css'

const UPDATED = 'January 2025'

export default function CookiePolicy() {
  const clearCookies = () => {
    localStorage.removeItem('salonname_cookie_consent')
    window.location.reload()
  }

  return (
    <div className="page-enter">
      <div className="legal-page__hero">
        <p className="section-label section-label--center">Legal</p>
        <h1 className="legal-page__hero-title">Cookie <em>Policy</em></h1>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="legal-page__hero-updated">Last updated: {UPDATED}</p>
      </div>

      <div className="legal-page__body">
        <nav className="legal-nav" aria-label="Legal pages">
          <Link to="/privacy"       className="legal-nav__link">Privacy Policy</Link>
          <Link to="/terms"         className="legal-nav__link">Terms of Service</Link>
          <Link to="/cookie-policy" className="legal-nav__link active">Cookie Policy</Link>
        </nav>

        <div className="legal-highlight">
          This Cookie Policy explains what cookies are, which ones we use on the salonname Beauty
          website, and how you can control them. By accepting cookies on our site, you agree
          to their use as described below.
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">1.</span>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (phone, tablet, or computer)
            when you visit a website. They are widely used to make websites work more efficiently
            and to provide information to the site owners.
          </p>
          <p>
            Cookies cannot harm your device and do not contain personal information like passwords
            or payment details. They simply help websites remember your preferences and how
            you used them.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">2.</span>Cookies We Use</h2>
          <p>The salonname Beauty website uses the following types of cookies and browser storage:</p>

          <table className="legal-cookie-table" aria-label="Cookie types">
            <thead>
              <tr>
                <th>Name / Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>salonname_cookie_consent</strong><br /><em>Essential</em></td>
                <td>Stores your cookie consent choice so we do not ask you again on every visit</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td><strong>Service Worker Cache</strong><br /><em>Performance</em></td>
                <td>
                  Caches images, fonts and static assets in your browser so the site loads faster
                  on repeat visits. No personal data is stored — only website files
                </td>
                <td>Until cache is cleared or updated</td>
              </tr>
              <tr>
                <td><strong>Browser LocalStorage</strong><br /><em>Functional</em></td>
                <td>
                  Stores your consent preference locally on your device. This data never leaves
                  your device and is not sent to our servers
                </td>
                <td>Until you clear browser data</td>
              </tr>
            </tbody>
          </table>

          <p>
            We do <strong>not</strong> currently use advertising cookies, third-party tracking
            cookies, or analytics platforms that profile your behaviour across other websites.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">3.</span>Essential Cookies</h2>
          <p>
            Some cookies are strictly necessary for the website to function. These include
            the cookie that remembers whether you have accepted or declined our cookie notice.
            You cannot opt out of essential cookies as the website would not work properly
            without them.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">4.</span>Performance & Caching</h2>
          <p>
            Our website uses a <strong>Service Worker</strong> to cache images, fonts and other
            assets in your browser. This means that once you have visited our site, images and
            content load from your device's local cache instead of downloading them again from
            the internet every time. This makes the site significantly faster for you on
            repeat visits and reduces your data usage.
          </p>
          <p>
            No personal information is stored in this cache — only website assets like images
            and stylesheets. You can clear this cache at any time through your browser settings.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">5.</span>Third-Party Services</h2>
          <p>
            Our website uses the following third-party services which may set their own cookies
            or use similar technologies:
          </p>
          <ul>
            <li>
              <strong>Google Fonts</strong> — we load fonts from Google's servers.
              Google may collect limited data about font requests. See{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>
            </li>
            <li>
              <strong>OpenStreetMap</strong> — our location map is powered by OpenStreetMap.
              Their embed may set cookies when you interact with the map. See{' '}
              <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
                OpenStreetMap's Privacy Policy
              </a>
            </li>
            <li>
              <strong>WhatsApp</strong> — if you click our WhatsApp button you will be taken
              to WhatsApp's platform, which is governed by their own privacy policy
            </li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">6.</span>How to Control Cookies</h2>
          <p>
            You can control and manage cookies in several ways:
          </p>
          <ul>
            <li>
              <strong>Browser settings</strong> — most browsers allow you to refuse cookies,
              delete existing cookies, or be notified when cookies are set. Check your browser's
              help section for instructions
            </li>
            <li>
              <strong>Clear our consent</strong> — click the button below to reset your cookie
              choice. You will see the cookie banner again on your next page load
            </li>
            <li>
              <strong>Service Worker</strong> — you can clear cached data via your browser's
              DevTools → Application → Cache Storage, or through your browser settings under
              Site Data
            </li>
          </ul>
          <p>
            Please note that disabling cookies may affect the functionality of this website
            and other websites you visit.
          </p>

          <button
            onClick={clearCookies}
            className="btn btn--outline-dark"
            style={{ marginTop: '1rem' }}
          >
            Reset My Cookie Preferences
          </button>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">7.</span>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy as we add new features or as regulations change.
            Any changes will be reflected by the "Last updated" date at the top of this page.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section__title"><span className="legal-section__num">8.</span>Contact Us</h2>
          <p>
            If you have questions about how we use cookies, contact us at{' '}
            <a href="mailto:hello@salonname.com">hello@salonname.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}