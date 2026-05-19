import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar        from './components/Navbar/Navbar'
import Footer        from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsApp/WhatsAppButton'
import BackToTop     from './components/BackToTop/BackToTop'
import CookieBanner  from './components/CookieBanner/CookieBanner'
import Home          from './pages/Home/Home'
import Wigs          from './pages/Wigs/Wigs'
import Team          from './pages/Team/Team'
import Jobs          from './pages/Jobs/Jobs'
import Prices        from './pages/Prices/Prices'
import Privacy       from './pages/Legal/Privacy'
import Terms         from './pages/Legal/Terms'
import CookiePolicy  from './pages/Legal/CookiePolicy'
import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/"            element={<Home />}         />
          <Route path="/wigs"        element={<Wigs />}         />
          <Route path="/team"        element={<Team />}         />
          <Route path="/jobs"        element={<Jobs />}         />
          <Route path="/prices"      element={<Prices />}       />
          <Route path="/privacy"     element={<Privacy />}      />
          <Route path="/terms"       element={<Terms />}        />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </Router>
  )
}
