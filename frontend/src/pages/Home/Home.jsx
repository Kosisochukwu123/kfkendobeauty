import React from 'react'
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

export default function Home() {
  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="home page-enter">
      <Hero />
      <SaleBanner onCtaClick={scrollToBooking} />
      <About />
      <Services />
      <Features />
      <Gallery />
      <Testimonials />
      <MapSection />
      <Booking />
    </div>
  )
}
