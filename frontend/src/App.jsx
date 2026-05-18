import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsApp/WhatsAppButton'
import BackToTop from './components/BackToTop/BackToTop'
import Home from './pages/Home/Home'
import Wigs from './pages/Wigs/Wigs'
import Team from './pages/Team/Team'
import Jobs from './pages/Jobs/Jobs'
import Prices from './pages/Prices/Prices'
import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/"       element={<Home />}   />
          <Route path="/wigs"   element={<Wigs />}   />
          <Route path="/team"   element={<Team />}   />
          <Route path="/jobs"   element={<Jobs />}   />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </main>
      <Footer />
      {/* Fixed floating elements — always visible */}
      <WhatsAppButton />
      <BackToTop />
    </Router>
  )
}

