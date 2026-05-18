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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

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
          <li><button className="navbar__link" onClick={() => scrollToSection('booking')}>Contact</button></li>
        </ul>

        <button className="navbar__cta" onClick={() => scrollToSection('booking')}>
          Book Now
        </button>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`menu-overlay${menuOpen ? ' show' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <Link to="/" className="mobile-menu__link" onClick={closeMenu}>Home</Link>
        <button className="mobile-menu__link" onClick={() => scrollToSection('about')}>About</button>
        <button className="mobile-menu__link" onClick={() => scrollToSection('services')}>Services</button>
        <Link to="/wigs" className="mobile-menu__link" onClick={closeMenu}>Wig Collection</Link>
        <Link to="/team" className="mobile-menu__link" onClick={closeMenu}>Meet the Team</Link>
        <button className="mobile-menu__link" onClick={() => scrollToSection('gallery')}>Gallery</button>
        <button className="mobile-menu__link" onClick={() => scrollToSection('booking')}>Book Now</button>

        <div className="mobile-menu__social" aria-label="Social media links">
          <SocialIcons />
        </div>
      </div>
    </>
  )
}
