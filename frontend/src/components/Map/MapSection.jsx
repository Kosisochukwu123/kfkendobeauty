import React from "react";
import "./MapSection.css";

/**
 * MapSection — Location finder using OpenStreetMap / Leaflet embed.
 * No API key required. Works out of the box.
 *
 * HOW TO UPDATE THE LOCATION:
 * 1. Go to https://www.openstreetmap.org
 * 2. Search for your exact salon address
 * 3. Click "Share" → "HTML" and copy the iframe src URL
 * 4. Paste it into the MAP_EMBED_URL constant below.
 *
 * The GOOGLE_DIRECTIONS_URL opens Google Maps directions to the address
 * in the user's browser/app so they can navigate from their current location.
 */

// ── UPDATE THESE when the exact address is confirmed ──────────────────────
const SALON_ADDRESS = "Uyo, Akwa Ibom State, Nigeria";
const SALON_ADDRESS_ENCODED = encodeURIComponent(SALON_ADDRESS);

// OpenStreetMap embed — centred on Uyo, Akwa Ibom
const MAP_EMBED_URL =
  `https://www.openstreetmap.org/export/embed.html` +
  `?bbox=7.8800%2C4.9800%2C8.0200%2C5.0800` +
  `&layer=mapnik` +
  `&marker=5.0333%2C7.9167`;

// Google Maps directions to Uyo
const GOOGLE_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SALON_ADDRESS_ENCODED}`;
// ─────────────────────────────────────────────────────────────────────────

const LocationIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 2C7.2 2 5 4.2 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.2 12.8 2 10 2Z"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
    />
    <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 3H7.5L9 7L7 8.5C7.9 10.4 9.6 12.1 11.5 13L13 11L17 12.5V16C17 16.6 16.5 17 15.9 17C8.8 17 3 11.2 3 4.1C3 3.5 3.4 3 4 3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M10 6V10L12.5 12.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="4"
      width="16"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path
      d="M2 7L10 12L18 7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const NavigateIcon = () => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 9L16 2L9 16L7.5 10.5L2 9Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export default function MapSection() {
  return (
    <section
      className="map-section"
      id="location"
      aria-labelledby="map-heading"
    >
      <div className="map-section__inner">
        {/* ── Info Panel ── */}
        <div className="map-section__info">
          <p className="section-label">Find Us</p>
          <h2 className="section-title" id="map-heading">
            Visit Our <em>Salon</em>
          </h2>
          <div className="section-divider" />

          <ul
            className="map-section__detail-list"
            aria-label="Contact and location details"
          >
            <li className="map-section__detail-item">
              <div className="map-section__detail-icon">
                <LocationIcon />
              </div>
              <div>
                <p className="map-section__detail-label">Address</p>
                <p className="map-section__detail-value">
                  {SALON_ADDRESS}
                </p>
              </div>
            </li>

            <li className="map-section__detail-item">
              <div className="map-section__detail-icon">
                <PhoneIcon />
              </div>
              <div>
                <p className="map-section__detail-label">Phone</p>
                <p className="map-section__detail-value">
                  <a
                    href="tel:+2348000000000"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +234 800 salonname
                  </a>
                </p>
              </div>
            </li>

            <li className="map-section__detail-item">
              <div className="map-section__detail-icon">
                <MailIcon />
              </div>
              <div>
                <p className="map-section__detail-label">Email</p>
                <p className="map-section__detail-value">
                  <a
                    href="mailto:hello@salonname.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    hello@salonname.com
                  </a>
                </p>
              </div>
            </li>

            <li className="map-section__detail-item">
              <div className="map-section__detail-icon">
                <ClockIcon />
              </div>
              <div>
                <p className="map-section__detail-label">Hours</p>
                <p className="map-section__detail-value">
                  Mon – Fri: 9am – 7pm
                  <br />
                  Saturday: 8am – 8pm
                  <br />
                  Sunday: 12pm – 6pm
                </p>
              </div>
            </li>
          </ul>

          {/* Opens Google Maps directions from the user's current location */}
          <a
            href={GOOGLE_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="map-section__directions-btn"
            aria-label="Get directions to salonname Beauty on Google Maps"
          >
            <NavigateIcon />
            Get Directions
          </a>
        </div>

        {/* ── Map Embed ── */}
        <div className="map-section__map-wrap">
          <iframe
            className="map-section__map-frame"
            src={MAP_EMBED_URL}
            title="salonname Beauty salon location on map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
