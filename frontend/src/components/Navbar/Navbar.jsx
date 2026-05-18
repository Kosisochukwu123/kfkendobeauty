import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

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

        <ul className="navbar__links" role="list">
          <li><Link to="/" className={`navbar__link${isActive('/') ? ' active' : ''}`}>Home</Link></li>
          <li><button className="navbar__link" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button className="navbar__link" onClick={() => scrollToSection('services')}>Services</button></li>
          <li><Link to="/wigs" className={`navbar__link${isActive('/wigs') ? ' active' : ''}`}>Wigs</Link></li>
          <li><Link to="/team" className={`navbar__link${isActive('/team') ? ' active' : ''}`}>Team</Link></li>
          <li><button className="navbar__link" onClick={() => scrollToSection('gallery')}>Gallery</button></li>
          <li><button className="navbar__link" onClick={() => scrollToSection('location')}>Location</button></li>
          <li><button className="navbar__link" onClick={() => scrollToSection('booking')}>Contact</button></li>
        </ul>

        <button className="navbar__cta" onClick={() => scrollToSection('booking')}>
          Book Now
        </button>

        {/* Hamburger — three staggered lines, opens the menu */}
        <button
          className="hamburger"
          onClick={toggleMenu}
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

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button sits inside the cream panel — always clearly visible */}
        <button
          className="mobile-menu__close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3"  y1="3"  x2="19" y2="19" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="19" y1="3"  x2="3"  y2="19" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>

        <nav aria-label="Mobile links">
          <Link   to="/"     className="mobile-menu__link" onClick={closeMenu}>Home</Link>
          <button className="mobile-menu__link" onClick={() => scrollToSection('about')}>About</button>
          <button className="mobile-menu__link" onClick={() => scrollToSection('services')}>Services</button>
          <Link   to="/wigs" className="mobile-menu__link" onClick={closeMenu}>Wig Collection</Link>
          <Link   to="/team" className="mobile-menu__link" onClick={closeMenu}>Meet the Team</Link>
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