/**
 * Products Routes — SCAFFOLD
 * Activate when client approves backend build.
 *
 * GET    /api/products        — Public catalog
 * GET    /api/products/:id    — Single product
 * POST   /api/products        — Create product (admin)
 * PUT    /api/products/:id    — Update product (admin)
 * DELETE /api/products/:id    — Remove product (admin)
 */

const express = require('express')
const router  = express.Router()

router.get('/ping', (req, res) => res.json({ message: 'Products route ready' }))

module.exports = router
