import React from 'react'
import './WhatsAppButton.css'

// ── UPDATE THIS with the salon's real WhatsApp number ──────────────
// Format: country code + number, no spaces or dashes
// Nigeria example: 2348012345678
const WHATSAPP_NUMBER = '2348000000000'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi Kfkendo Beauty! I\'d like to book an appointment. 😊'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
// ──────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg
    className="whatsapp-btn__icon"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M16 3C9.4 3 4 8.4 4 15C4 17.3 4.7 19.5 5.8 21.4L4 29L11.8 27.2C13.7 28.3 15.8 28.9 18 28.9C24.6 28.9 30 23.5 30 16.9C30 10.3 24.6 3 16 3Z"
      fill="white"
    />
    <path
      d="M22.5 19.5C22.2 20.2 21 20.9 20.3 21C19.6 21.1 18.8 21.1 18 20.9C17.2 20.6 16.2 20.2 15 19.5C12.8 18.3 11.3 16.2 11.1 15.9C10.9 15.6 9.8 14.1 9.8 12.6C9.8 11.1 10.6 10.4 10.9 10.1C11.2 9.8 11.5 9.7 11.7 9.7C11.9 9.7 12.1 9.7 12.3 9.7C12.5 9.7 12.7 9.7 12.9 10.2C13.1 10.7 13.7 12.2 13.7 12.4C13.8 12.5 13.8 12.7 13.7 12.9C13.6 13.1 13.5 13.2 13.4 13.4C13.2 13.6 13.1 13.7 12.9 13.9C12.7 14.1 12.5 14.3 12.7 14.6C12.9 14.9 13.7 16.1 14.8 17.1C16.2 18.3 17.4 18.7 17.7 18.8C18 18.9 18.2 18.9 18.4 18.6C18.6 18.3 19.2 17.6 19.5 17.3C19.7 17 20 17.1 20.3 17.2C20.6 17.3 22.1 18 22.4 18.2C22.7 18.4 22.9 18.5 22.9 18.7C23 18.9 23 19.2 22.5 19.5Z"
      fill="#25D366"
    />
  </svg>
)

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="whatsapp-btn__text">Chat with us</span>
    </a>
  )
}