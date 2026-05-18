import React, { useState } from 'react'
import './Booking.css'

const serviceOptions = [
  'Hairstyling',
  'Wig Installation',
  'Nail Artistry',
  'Barbering',
  'Hair Plaiting',
  'Spa Treatment',
]

const timeOptions = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
]

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  service: '',
  date: '',
  time: '9:00 AM',
}

export default function Booking() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.firstName.trim() || !form.phone.trim() || !form.service || !form.date) {
      setError('Please fill in all required fields.')
      return
    }
    // TODO: wire up to POST /api/bookings once backend is approved
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="booking" id="booking" aria-labelledby="booking-heading">
      <div className="booking__inner">
        <p className="section-label section-label--center">Ready for a Change?</p>
        <h2 className="section-title section-title--center" id="booking-heading">
          Book Your <em>Session</em>
        </h2>
        <div className="gold-line gold-line--center" aria-hidden="true" />
        <p className="section-desc section-desc--center" style={{ marginTop: '1rem' }}>
          Reserve your spot with our expert team and experience the Kfkendo difference
        </p>

        {submitted ? (
          <div className="booking__success" role="alert">
            ✦ Thank you, {form.firstName || 'valued client'}! Your booking request has been received.
            We'll confirm your appointment within 24 hours.
          </div>
        ) : (
          <form className="booking__form" onSubmit={handleSubmit} noValidate>
            <div className="booking__form-row">
              <div className="form-group">
                <label className="form-group__label" htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="form-group__input"
                  placeholder="Your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-group__label" htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="form-group__input"
                  placeholder="Your last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-group__label" htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-group__input"
                placeholder="+234 xxx xxx xxxx"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-group__label" htmlFor="service">Service *</label>
              <select
                id="service"
                name="service"
                className="form-group__select"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {serviceOptions.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="booking__form-row">
              <div className="form-group">
                <label className="form-group__label" htmlFor="date">Preferred Date *</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="form-group__input"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-group__label" htmlFor="time">Preferred Time</label>
                <select
                  id="time"
                  name="time"
                  className="form-group__select"
                  value={form.time}
                  onChange={handleChange}
                >
                  {timeOptions.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p role="alert" style={{ color: 'var(--pink-deep)', fontSize: '0.8rem' }}>
                {error}
              </p>
            )}

            <button type="submit" className="btn btn--primary btn--full">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
