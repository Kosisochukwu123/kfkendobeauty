import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CookieBanner.css'

const STORAGE_KEY = 'salonname_cookie_consent'

export default function CookieBanner() {
  const [visible,   setVisible]   = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Only show if user hasn't already responded
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      // Small delay so it doesn't pop up the instant the page loads
      const t = setTimeout(() => setVisible(true), 1800)
      return () => clearTimeout(t)
    }
  }, [])

  const handleChoice = (accepted) => {
    localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'declined')
    setDismissed(true)
    // Wait for slide-out animation then unmount
    setTimeout(() => setVisible(false), 380)
  }

  if (!visible) return null

  return (
    <div className={`cookie-banner${dismissed ? ' dismissed' : ''}`} role="region" aria-label="Cookie consent">
      <div className="cookie-banner__body">
        <span className="cookie-banner__icon" aria-hidden="true">🍪</span>
        <p className="cookie-banner__text">
          We use cookies to enhance your experience, cache images for faster loading,
          and analyse how our site is used. By clicking <strong>Accept</strong> you agree
          to our{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>
          {'. '}
          Read our{' '}
          <Link to="/privacy">Privacy Policy</Link>
          {' '}for more details.
        </p>
      </div>
      <div className="cookie-banner__actions">
        <button
          className="cookie-banner__btn cookie-banner__btn--decline"
          onClick={() => handleChoice(false)}
          aria-label="Decline cookies"
        >
          Decline
        </button>
        <button
          className="cookie-banner__btn cookie-banner__btn--accept"
          onClick={() => handleChoice(true)}
          aria-label="Accept cookies"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}