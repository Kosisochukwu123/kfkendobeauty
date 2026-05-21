/**
 * salonname Beauty — Express Server
 * NOTE: Backend routes are scaffolded but not wired to the frontend.
 *       Activate once the client approves the full stack build.
 */

require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const morgan  = require('morgan')

// Route imports (scaffolded — uncomment when approved)
// const bookingRoutes = require('./routes/bookings')
// const productRoutes = require('./routes/products')
// const authRoutes    = require('./routes/auth')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(morgan('dev'))

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'salonname Beauty API is running' })
})

// ── Routes (activate when approved) ──
// app.use('/api/bookings', bookingRoutes)
// app.use('/api/products', productRoutes)
// app.use('/api/auth',     authRoutes)

// ── 404 handler ──
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// ── Global error handler ──
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  })
})

app.listen(PORT, () => {
  console.log(`✨ salonname Beauty API running on http://localhost:${PORT}`)
})

module.exports = app
