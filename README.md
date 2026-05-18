# Kfkendo Beauty — Luxury Salon & Spa Website

A modern, luxury unisex salon and beauty brand website delivering a calm, elegant, and premium digital experience.

## Services Covered
- Hairstyling
- Wig Sales & Installation
- Nail Artistry
- Barbering
- Hair Plaiting & Braiding
- Spa Treatments

## Tech Stack
- **Frontend:** React (Vite), plain CSS modules, React Router
- **Backend:** Node.js, Express, MongoDB (Mongoose) — *pending client approval*

## Project Structure
```
kfkendobeauty/
├── frontend/         # React client application
├── backend/          # Express REST API (placeholder)
└── package.json      # Root scripts (monorepo)
```

## Getting Started

### Install dependencies
```bash
npm run install:all
```

### Run development servers
```bash
npm run dev
```

Frontend runs on: http://localhost:5173  
Backend runs on: http://localhost:5000

## Color Palette
| Token       | Value     | Usage                   |
|-------------|-----------|-------------------------|
| --pink      | #E8A0B4   | Accents, hover states   |
| --pink-deep | #C4607F   | CTAs, badges            |
| --gold      | #C9A84C   | Primary accent, borders |
| --cream     | #FDF8F5   | Page background         |
| --text      | #2C1810   | Body text, dark panels  |

## Notes
- Backend routes are scaffolded but inactive — awaiting client approval before wiring up
- All images use SVG placeholders; replace with real brand photography in `/frontend/src/assets/images/`
