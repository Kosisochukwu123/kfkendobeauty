import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Wigs from './pages/Wigs/Wigs'
import Team from './pages/Team/Team'
import Jobs from './pages/Jobs/Jobs'
import './styles/app.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/"     element={<Home />} />
          <Route path="/wigs" element={<Wigs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
