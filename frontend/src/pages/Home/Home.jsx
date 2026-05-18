import React, { useEffect, useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import SaleBanner from '../../components/SaleBanner/SaleBanner'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Features from '../../components/Features/Features'
import Gallery from '../../components/Gallery/Gallery'
import Testimonials from '../../components/Testimonials/Testimonials'
import MapSection from '../../components/Map/MapSection'
import Booking from '../../components/Booking/Booking'
import './Home.css'

// Attach scroll-animate to sections so they fade in on scroll
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useReveal()

  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="home page-enter">
      <Hero />
      <SaleBanner onCtaClick={scrollToBooking} />
      <div className="reveal-section scroll-animate"><About /></div>
      <div className="reveal-section scroll-animate"><Services /></div>
      <div className="reveal-section scroll-animate"><Features /></div>
      <div className="reveal-section scroll-animate"><Gallery /></div>
      <div className="reveal-section scroll-animate"><Testimonials /></div>
      <div className="reveal-section scroll-animate"><MapSection /></div>
      <div className="reveal-section scroll-animate"><Booking /></div>
    </div>
  )
}
