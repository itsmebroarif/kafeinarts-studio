# Project Roadmap: KafeinArts Studio

> **Status:** Active Development · Open for Contributions

This document outlines the future plans, desired improvements, and feature roadmap for the KafeinArts Studio project.

---

## ✅ Implemented Features

- [x] Landing page with Hero, Featured Games, Services, About, FAQ, Soundboard
- [x] Game store with search, filter, sort
- [x] Cart sidebar with WhatsApp checkout
- [x] Multi-step collaboration wizard
- [x] Contact page with form
- [x] Dark/Light mode toggle (persisted)
- [x] Multilingual support (EN/ID/JP)
- [x] 8-bit sound effects (Web Audio API)
- [x] Admin panel with GitHub sync
- [x] PWA support (manifest + service worker)
- [x] 404 MS-DOS terminal page
- [x] Responsive layout (mobile-first)

---

## 🗺️ Future Roadmap

### Short Term

- [ ] **Game detail page** — dedicated page per game with screenshots gallery, system requirements
- [ ] **Actual game data** — populate `games.json` with real titles
- [ ] **Payment gateway** — integrate Midtrans (Indonesia) or Stripe for real transactions
- [ ] **Blog / News section** — dev logs, game announcements
- [ ] **User accounts** — simple auth (wishlist, purchase history)
- [ ] **Downloadable games** — direct download links or itch.io integration

### Medium Term

- [ ] **Leaderboards** — high-score system for web games
- [ ] **Embedded web games** — playable HTML5 games directly on the site
- [ ] **Comment / review system** — per game ratings and reviews
- [ ] **Team page** — individual team member profiles
- [ ] **Dark/Light mode per-game tinting** — adaptive contrast
- [ ] **Performance optimizations** — lazy loading, image optimization, code splitting

### Long Term

- [ ] **Backend API** — Node.js/Express or Supabase for real data persistence
- [ ] **Admin dashboard v2** — analytics, sales reports, user management
- [ ] **Game publishing pipeline** — upload builds + metadata from admin panel
- [ ] **Community features** — forums, event calendar
- [ ] **Desktop app** — Electron wrapper for native storefront
- [ ] **i18n expansion** — more languages (KR, CN, ES, FR, AR)

---

## 🤝 How to Contribute

See the main [README.md](./README.md#-contributing) for contribution guidelines.

---

## 🐛 Known Issues

- `games.json` is currently empty — needs real data
- No backend API configured — all data uses localStorage fallback
- Images directory `public/images/games/` does not exist yet
- Tests are minimal

---

> This roadmap is a living document. Feel free to open an issue or PR to suggest changes.