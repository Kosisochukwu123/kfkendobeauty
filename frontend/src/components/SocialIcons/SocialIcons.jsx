import React from 'react'
import './SocialIcons.css'

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/kfkendobeauty',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M13 4H10.5C9.7 4 9 4.7 9 5.5V8H13L12.4 11.5H9V20H5.5V11.5H3V8H5.5V5.5C5.5 2.8 7.3 1 10 1H13V4Z"
          stroke="currentColor" strokeWidth="1.3" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/kfkendobeauty',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="14.5" cy="5.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Threads',
    href: 'https://threads.net/@kfkendobeauty',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M10 3C6.1 3 3 5.9 3 10C3 14.1 6.1 17 10 17C13.3 17 16 15 16.5 12C14.8 12.8 12.8 13 11.5 12C9.5 10.7 10.1 7.8 11.5 7C13 6.2 15.2 7.2 15.2 10"
          stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function SocialIcons({ variant = 'default' }) {
  return (
    <>
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon social-icon--${variant}`}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </>
  )
}
