import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import SocialIcons from '../SocialIcons/SocialIcons'

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [pagesOpen,    setPagesOpen]    = useState(false)
  const [mPagesOpen,   setMPagesOpen]   = useState(false)
  const dropdownRef                     = useRef(null)
  const location                        = useLocation()
  const navigate                        = useNavigate()

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false)
    setPagesOpen(false)
    setMPagesOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPagesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setPagesOpen(false)
    setMPagesOpen(false)
  }

  const scrollToSection = (id) => {
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          Kfkendo<span>.</span>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="navbar__links" role="list">
          <li>
            <Link to="/" className={`navbar__link${isActive('/') ? ' active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <button className="navbar__link" onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <button className="navbar__link" onClick={() => scrollToSection('services')}>
              Services
            </button>
          </li>

          {/* ── Pages dropdown ── */}
          <li className="navbar__dropdown-wrap" ref={dropdownRef}>
            <button
              className={`navbar__link navbar__dropdown-trigger${pagesOpen ? ' active' : ''}`}
              onClick={() => setPagesOpen(prev => !prev)}
              aria-haspopup="true"
              aria-expanded={pagesOpen}
            >
              Explore <ChevronDown />
            </button>

            <div className={`navbar__dropdown${pagesOpen ? ' open' : ''}`} role="menu">
              <Link to="/wigs" className="navbar__dropdown-item" role="menuitem">
                <span className="navbar__dropdown-icon">
                  <svg viewBox="0 0 20 20" fill="none"><path d="M4 12 Q4 5 10 5 Q16 5 16 12" stroke="#C9A84C" strokeWidth="1.2" fill="none"/><path d="M4 12 Q3 16 7 17 L13 17 Q17 16 16 12" stroke="#C9A84C" strokeWidth="1.2" fill="none"/></svg>
                </span>
                <div>
                  <div className="navbar__dropdown-label">Wig Collection</div>
                  <div className="navbar__dropdown-sub">Browse & order wigs</div>
                </div>
              </Link>
              <Link to="/team" className="navbar__dropdown-item" role="menuitem">
                <span className="navbar__dropdown-icon">
                  <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="4" stroke="#C9A84C" strokeWidth="1.2"/><path d="M3 18 Q3 14 10 14 Q17 14 17 18" stroke="#C9A84C" strokeWidth="1.2" fill="none"/></svg>
                </span>
                <div>
                  <div className="navbar__dropdown-label">Meet the Team</div>
                  <div className="navbar__dropdown-sub">Our expert stylists</div>
                </div>
              </Link>
              <Link to="/prices" className="navbar__dropdown-item" role="menuitem">
                <span className="navbar__dropdown-icon">
                  <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#C9A84C" strokeWidth="1.2"/><path d="M10 6V10L12.5 12.5" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </span>
                <div>
                  <div className="navbar__dropdown-label">Price List</div>
                  <div className="navbar__dropdown-sub">All service prices</div>
                </div>
              </Link>
              <Link to="/jobs" className="navbar__dropdown-item" role="menuitem">
                <span className="navbar__dropdown-icon">
                  <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="6" width="14" height="11" rx="1.5" stroke="#C9A84C" strokeWidth="1.2"/><path d="M7 6V4.5C7 3.7 7.7 3 8.5 3H11.5C12.3 3 13 3.7 13 4.5V6" stroke="#C9A84C" strokeWidth="1.2" fill="none"/><line x1="3" y1="10" x2="17" y2="10" stroke="#C9A84C" strokeWidth="1.2"/></svg>
                </span>
                <div>
                  <div className="navbar__dropdown-label">Careers</div>
                  <div className="navbar__dropdown-sub">View open vacancies</div>
                </div>
              </Link>
            </div>
          </li>

          <li>
            <button className="navbar__link" onClick={() => scrollToSection('gallery')}>
              Gallery
            </button>
          </li>
          <li>
            <button className="navbar__link" onClick={() => scrollToSection('location')}>
              Location
            </button>
          </li>
          <li>
            <button className="navbar__link" onClick={() => scrollToSection('booking')}>
              Contact
            </button>
          </li>
        </ul>

        <button className="navbar__cta" onClick={() => scrollToSection('booking')}>
          Book Now
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>
      </nav>

      {/* Dark overlay */}
      <div
        className={`menu-overlay${menuOpen ? ' show' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button inside panel */}
        <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="3"  y1="3"  x2="19" y2="19" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="19" y1="3"  x2="3"  y2="19" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <span>Close</span>
        </button>

        <nav aria-label="Mobile links">
          <Link   to="/"     className="mobile-menu__link" onClick={closeMenu}>Home</Link>
          <button className="mobile-menu__link" onClick={() => scrollToSection('about')}>About</button>
          <button className="mobile-menu__link" onClick={() => scrollToSection('services')}>Services</button>

          {/* Mobile accordion for "Explore" pages */}
          <button
            className="mobile-menu__link mobile-menu__accordion-trigger"
            onClick={() => setMPagesOpen(prev => !prev)}
            aria-expanded={mPagesOpen}
          >
            Explore
            <span className={`mobile-menu__chevron${mPagesOpen ? ' open' : ''}`}>
              <ChevronDown />
            </span>
          </button>
          <div className={`mobile-menu__accordion${mPagesOpen ? ' open' : ''}`}>
            <Link to="/wigs"   className="mobile-menu__sub-link" onClick={closeMenu}>Wig Collection</Link>
            <Link to="/team"   className="mobile-menu__sub-link" onClick={closeMenu}>Meet the Team</Link>
            <Link to="/prices" className="mobile-menu__sub-link" onClick={closeMenu}>Price List</Link>
            <Link to="/jobs"   className="mobile-menu__sub-link" onClick={closeMenu}>Careers & Jobs</Link>
          </div>

          <button className="mobile-menu__link" onClick={() => scrollToSection('gallery')}>Gallery</button>
          <button className="mobile-menu__link" onClick={() => scrollToSection('location')}>Our Location</button>
          <button className="mobile-menu__link" onClick={() => scrollToSection('booking')}>Book Now</button>
        </nav>

        <div className="mobile-menu__social" aria-label="Social media links">
          <SocialIcons />
        </div>
      </div>
    </>
  )
}