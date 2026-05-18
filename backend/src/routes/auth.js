/**
 * Auth Routes — SCAFFOLD
 * Activate when client approves backend build.
 *
 * POST /api/auth/register   — Admin registration
 * POST /api/auth/login      — Admin login
 * GET  /api/auth/me         — Get current user
 * POST /api/auth/logout     — Logout
 */

const express = require('express')
const router  = express.Router()

router.get('/ping', (req, res) => res.json({ message: 'Auth route ready' }))

module.exports = router
