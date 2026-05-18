/**
 * api.js — Fetch wrapper
 * Centralised HTTP client ready to wire up to the backend
 * once the client approves the full stack build.
 *
 * Usage:
 *   import api from '../utils/api'
 *   const data = await api.post('/bookings', payload)
 */

const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(method, path, body = null) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  }

  if (body) options.body = JSON.stringify(body)

  const res = await fetch(`${BASE_URL}${path}`, options)

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }))
    throw new Error(error.message || 'Request failed')
  }

  return res.json()
}

const api = {
  get:    (path)         => request('GET',    path),
  post:   (path, body)   => request('POST',   path, body),
  put:    (path, body)   => request('PUT',    path, body),
  patch:  (path, body)   => request('PATCH',  path, body),
  delete: (path)         => request('DELETE', path),
}

export default api

// ── Convenience helpers (activate when backend is approved) ──

// export const createBooking = (data) => api.post('/bookings', data)
// export const getWigs       = ()     => api.get('/products?category=wig')
// export const getWig        = (id)   => api.get(`/products/${id}`)
// export const login         = (data) => api.post('/auth/login', data)
