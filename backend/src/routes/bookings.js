/**
 * Bookings Routes — SCAFFOLD
 * Activate when client approves backend build.
 *
 * POST   /api/bookings        — Create booking
 * GET    /api/bookings        — List all bookings (admin)
 * GET    /api/bookings/:id    — Get single booking
 * PATCH  /api/bookings/:id    — Update booking status
 * DELETE /api/bookings/:id    — Cancel booking
 */

const express = require('express')
const router  = express.Router()

// const { createBooking, getBookings, getBooking, updateBooking, deleteBooking } =
//   require('../controllers/bookingController')
// const { protect, adminOnly } = require('../middleware/auth')

// router.post('/',          createBooking)
// router.get('/',           protect, adminOnly, getBookings)
// router.get('/:id',        protect, getBooking)
// router.patch('/:id',      protect, adminOnly, updateBooking)
// router.delete('/:id',     protect, adminOnly, deleteBooking)

router.get('/ping', (req, res) => res.json({ message: 'Bookings route ready' }))

module.exports = router
