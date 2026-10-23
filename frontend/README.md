# Kisaan.AI — Frontend (Week 1: Landing Page)

React + Vite landing page for the Intelligent Farming and Market System (MERN major project).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
```

## Structure
```
src/
├── pages/LandingPage.jsx        # composes the sections
├── components/landing/          # Navbar, Hero, Features, Stats, Testimonials, Footer, ChatbotFab
│   └── landing.css
├── data/landing.js              # all text/numbers (replace with API data later)
├── hooks/                       # useReveal, useCountUp
├── styles/global.css            # design tokens (colors, fonts) + base
└── App.jsx                      # Login / Register / Demo buttons currently show a "coming soon" toast
```

## Next steps
- Add `react-router-dom`, then swap the toast handlers in `App.jsx` for `navigate('/login')` etc.
- Build Auth and Dashboard pages as new folders under `components/` and `pages/`.
