
<h1 align="center">
  <img src="public/logo192.png" alt="KafeinArts" width="64" />
  <br/>
  KafeinArts Studio
</h1>

<p align="center">
  <strong>🎮 Retro Indie Game Developer & IT Solution Platform</strong>
  <br/>
  <sub>Pixel-art aesthetic · React · Tailwind CSS · PWA-ready · Multilingual (EN/ID/JP)</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-5-443E38?logo=react" alt="Zustand" />
  <img src="https://img.shields.io/badge/PWA-ready-4FC08D?logo=pwa" alt="PWA" />
  <img src="https://img.shields.io/badge/i18n-EN%20%7C%20ID%20%7C%20JP-FF6F61" alt="Multilingual" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT" />
</p>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [🧐 About The Project](#-about-the-project)
- [✨ Core Features](#-core-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start (Beginner)](#-quick-start-beginner)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [🛠 Tech Stack](#-tech-stack)
- [🎨 Design System & Theming](#-design-system--theming)
- [🌐 Localization](#-localization)
- [📦 Data & Content Management (Intermediate)](#-data--content-management-intermediate)
  - [Adding / Editing Games](#adding--editing-games)
  - [Adding / Editing Collaborators](#adding--editing-collaborators)
  - [Updating Locales / Translations](#updating-locales--translations)
- [🧩 Architecture & Customization (Advanced)](#-architecture--customization-advanced)
  - [State Management (Zustand)](#state-management-zustand)
  - [Sound Effects Engine](#sound-effects-engine)
  - [API Layer](#api-layer)
  - [Admin Panel & GitHub Sync](#admin-panel--github-sync)
  - [PWA Configuration](#pwa-configuration)
- [🧪 Testing](#-testing)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)
- [🙏 Acknowledgements](#-acknowledgements)

---

## 🧐 About The Project

**KafeinArts Studio** is a full-featured company profile and game store website for **KafeinArts** — an Indie Game Developer & IT Solution provider based in Indonesia. The site serves three distinct audiences:

| Audience | Language | Purpose |
|----------|----------|---------|
| 🇮🇩 Indonesian Visitors | Indonesian (id) | Local services & game store |
| 🇯🇵 Japanese Visitors | Japanese (jp) | Showcase & collaboration |
| 🌐 International Visitors | English (en) | Global portfolio & storefront |

The entire UI is styled in a **Retro 16-bit Pixel Art** aesthetic — featuring pixelated borders, CRT scanline effects, neon glows, chiptune sound effects, and a nostalgic terminal vibe — while remaining fully modern under the hood with **React 19**, **Tailwind CSS 3**, and **PWA support**.

> **This is an open-source project.** Anyone can fork, modify, extend, or use it as a template for their own indie game studio or creative agency website.

---

## ✨ Core Features

| Feature | Description |
|---------|-------------|
| 🏠 **Landing Page** | Hero section with CRT terminal animation, featured games grid, services overview, team about section, FAQ accordion, and interactive 8-bit soundboard |
| 🎮 **Game Store** | Search, genre filter, sort (rating, title, year), responsive grid with pixel-art game cards |
| 🛒 **Cart & Checkout** | Slide-out cart sidebar, quantity controls, WhatsApp-based checkout with confetti celebration |
| 📝 **Collab Wizard** | Multi-step modal for submitting collaboration proposals (name, contact, project idea) |
| 📬 **Contact Page** | Contact form + social media links with WhatsApp integration |
| 🔐 **Admin Panel** | PIN-protected dashboard to manage games (CRUD), view collaborator proposals, and push changes directly to GitHub via API |
| 🌙 **Dark/Light Mode** | Fully themed dark/light modes persisted to localStorage |
| 🌍 **Multilingual** | English, Indonesian, and Japanese — all UI strings externalized |
| 🔊 **Retro SFX** | 8-bit chiptune sound effects generated via Web Audio API (no audio files needed) |
| 📱 **PWA** | Service worker, manifest, standalone mode — installable on mobile/desktop |
| 🖼️ **404 Terminal Page** | MS-DOS-style error screen with typewriter animation |

---

## 📁 Project Structure

```
kafeinarts-studio/
├── public/                          # Static assets
│   ├── favicon.ico
│   ├── index.html                   # HTML entry point
│   ├── logo192.png / logo512.png    # PWA icons
│   ├── manifest.json                # PWA manifest
│   ├── robots.txt
│   └── sw.js                        # Service worker
│
├── src/                             # Application source code
│   ├── App.js                       # Root component with page routing
│   ├── App.css                      # Global app styles
│   ├── index.js                     # React entry point
│   ├── index.css                    # Tailwind directives + global styles
│   │
│   ├── components/
│   │   ├── ui/                      # Reusable UI primitives
│   │   │   ├── RetroButton.js       # Pixel-styled button (variants, sizes)
│   │   │   ├── RetroCard.js         # Themed card container
│   │   │   └── RetroInput.js        # Input / textarea / select
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.js            # Top nav + mobile bottom nav
│   │   │   ├── Footer.js            # Site footer
│   │   │   ├── CartSidebar.js       # Slide-out cart panel
│   │   │   └── NotFound.js          # 404 MS-DOS terminal page
│   │   │
│   │   ├── home/                    # Landing page sections
│   │   │   ├── Hero.js              # Hero with CRT display
│   │   │   ├── FeaturedGames.js     # Featured games grid
│   │   │   ├── Services.js          # Service offerings
│   │   │   ├── GameEngine.js        # Tech features + soundboard
│   │   │   ├── About.js             # Company info + diagnostics
│   │   │   └── FAQ.js               # Accordion FAQ
│   │   │
│   │   ├── games/
│   │   │   └── GameStore.js         # Full game catalog with filters
│   │   │
│   │   ├── contact/
│   │   │   └── Contact.js           # Contact form + social links
│   │   │
│   │   ├── wizard/
│   │   │   └── RequestWizard.js     # Multi-step collab proposal wizard
│   │   │
│   │   └── admin/
│   │       └── Admin.js             # Admin panel (PIN: 181203)
│   │
│   ├── lib/                         # Utilities & state
│   │   ├── store.js                 # Zustand stores (theme, lang, nav, cart, admin)
│   │   ├── utils.js                 # cn() helper, formatPrice()
│   │   ├── sfx.js                   # Web Audio API 8-bit synthesizer
│   │   └── api.js                   # API wrapper (with localStorage fallback)
│   │
│   └── data/                        # Static data & localization
│       ├── games.json               # Game catalog data
│       ├── collaborators.json       # Collaboration proposals (seeded data)
│       └── locales.js               # EN / ID / JP translation strings
│
├── build/                           # Production build output
├── node_modules/                    # Dependencies
│
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vercel.json                      # Vercel deployment config
├── .gitignore
├── .npmrc
│
├── README.md                        # This file
├── PROJECT.md                       # Original project spec / AI prompt
├── github.md                        # Git init / remote commands
└── automation-update-repo.md        # Git push commands
```

---

## 🚀 Quick Start (Beginner)

### Prerequisites

- **Node.js** v18 or later → [Download](https://nodejs.org/)
- **npm** v9+ (comes with Node.js) or **yarn** / **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/itsmebroarif/kafeinarts-studio.git

# Navigate into the project
cd kafeinarts-studio

# Install dependencies
npm install
```

### Running the App

```bash
# Start development server (http://localhost:3000)
npm start

# Run tests
npm test

# Build for production
npm run build
```

> After `npm start`, the app opens automatically in your browser. The page hot-reloads on code changes.

---

## 🛠 Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | React 19 | UI library |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS |
| **State** | Zustand 5 + persist | Global state management |
| **Animations** | Framer Motion 12 | Page transitions & UI animations |
| **Icons** | Lucide React | SVG icon library |
| **Alerts** | SweetAlert2 | Modal dialogs & confirmation |
| **Sounds** | Web Audio API | 8-bit chiptune SFX (no files) |
| **Fonts** | Press Start 2P + Inter | Pixel headings + readable body |
| **Utilities** | clsx + tailwind-merge | Conditional class merging |
| **Celebration** | canvas-confetti | Confetti on checkout/submit |
| **PWA** | Service Worker + Manifest | Installable offline-ready app |

---

## 🎨 Design System & Theming

### Retro Aesthetic

The design blends **16-bit pixel art nostalgia** with modern UI conventions:

- **Typography**: `Press Start 2P` (Google Fonts) for headings, buttons, prices; `Inter` for body text
- **Borders**: `border-2` or `border-4` solid (no border-radius)
- **Shadows**: Hard box-shadows with zero blur (`box-shadow: 4px 4px 0px #000`)
- **Glows**: Neon purple (`#9333EA`) and cyan (`#06B6D4`) glow effects on hover
- **CRT Effect**: Scanline overlay and flicker animations on the hero display
- **Colors**:
  - **Dark Mode** (default): `bg-slate-900`, `text-slate-100`, accents purple-600 / cyan-500
  - **Light Mode**: `bg-gray-50`, `text-gray-900`, accents purple-500 / cyan-600

### Custom Tailwind Shadows

```js
// tailwind.config.js
shadow-retro-sm:    '2px 2px 0px 0px rgba(0,0,0,1)'
shadow-retro:       '4px 4px 0px 0px rgba(0,0,0,1)'
shadow-retro-lg:    '6px 6px 0px 0px rgba(0,0,0,1)'
shadow-retro-glow-purple: '0 0 10px rgba(147, 51, 234, 0.6), 4px 4px 0px 0px rgba(0,0,0,1)'
shadow-retro-glow-cyan:   '0 0 10px rgba(6, 182, 212, 0.6), 4px 4px 0px 0px rgba(0,0,0,1)'
```

### Theme Toggle

The theme (dark/light) is managed via Zustand (`useThemeStore`), persisted to `localStorage`, and toggled by adding/removing the `dark` class on `<html>`. Tailwind's `darkMode: 'class'` handles the rest.

---

## 🌐 Localization

Three languages are supported out of the box:

| Key | Language | Prefix |
|-----|----------|--------|
| `en` | English | Default |
| `id` | Bahasa Indonesia | Indonesian |
| `jp` | 日本語 | Japanese |

All UI strings live in `src/data/locales.js` as a nested object:

```js
{
  en: { nav: { home: "Home", games: "Games", ... }, hero: { ... }, ... },
  id: { nav: { home: "Beranda", games: "Game", ... }, hero: { ... }, ... },
  jp: { nav: { home: "ホーム", games: "ゲーム", ... }, hero: { ... }, ... },
}
```

To switch the language: click the language selector in the navbar (desktop) or the floating bottom panel (mobile).

**To add a new language**, add a new key to `locales.js`, update the language selector in `Navbar.js`, and add the flag/label in `src/lib/store.js` under `useLangStore`.

---

## 📦 Data & Content Management (Intermediate)

### Adding / Editing Games

All game data is stored in `src/data/games.json`. Here's the structure:

```json
[
  {
    "id": 1,
    "title": { "en": "Game Title", "id": "Judul Game", "jp": "ゲームタイトル" },
    "description": { "en": "...", "id": "...", "jp": "..." },
    "genre": "Action",
    "rating": 4.5,
    "price": 9.99,
    "year": 2024,
    "featured": true,
    "image": "/images/games/game1.png",
    "platforms": ["Web", "Windows"],
    "technologies": ["Unity", "C#"]
  }
]
```

**Steps to add a new game:**

1. Add a PNG screenshot to `public/images/games/` (e.g., `my-game.png`)
2. Add a new object to the array in `src/data/games.json`
3. Reference the image path as `/images/games/my-game.png`
4. The game will automatically appear in the Game Store and (if `featured: true`) on the landing page

> **Pro tip:** You can also use the **Admin Panel** (navigate to `/admin`, PIN: `181203`) to add games through a GUI form and even commit changes directly to GitHub.

### Adding / Editing Collaborators

Collaborator proposals are stored in `src/data/collaborators.json` or via API. The structure:

```json
[
  {
    "id": "c001",
    "name": "John Doe",
    "email": "john@example.com",
    "whatsapp": "628123456789",
    "idea": "Project description...",
    "timestamp": "2025-01-15T10:30:00Z"
  }
]
```

### Updating Locales / Translations

Edit `src/data/locales.js`:

```js
export const locales = {
  en: {
    nav: { home: "Home", games: "Games" },
    // ...
  },
  id: { /* ... */ },
  jp: { /* ... */ },
};
```

To reference a string in your component:

```jsx
import { useLangStore } from '../lib/store';
import { locales } from '../data/locales';

const lang = useLangStore((s) => s.lang);
const t = locales[lang];

return <h1>{t.hero.heading}</h1>;
```

---

## 🧩 Architecture & Customization (Advanced)

### State Management (Zustand)

Five Zustand stores are defined in `src/lib/store.js`:

| Store | Key State | Persisted | Purpose |
|-------|-----------|-----------|---------|
| `useThemeStore` | `theme` | ✅ localStorage | Dark/light mode |
| `useLangStore` | `lang` | ❌ | Current language |
| `useNavStore` | `page`, `wizardOpen` | ❌ | Page routing & wizard |
| `useCartStore` | `cart[]` | ✅ localStorage | Shopping cart |
| `useAdminStore` | `unlocked`, `githubConfig` | ✅ localStorage | Admin PIN & GitHub |

To extend with a new store:

```js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMyStore = create(
  persist(
    (set, get) => ({
      myValue: 'default',
      setMyValue: (v) => set({ myValue: v }),
    }),
    { name: 'my-store-key' }
  )
);
```

### Sound Effects Engine

`src/lib/sfx.js` implements a lightweight 8-bit synthesizer using the **Web Audio API** — no external audio files needed.

| Function | Sound | Use Case |
|----------|-------|----------|
| `playHover()` | Triangle chirp 800→1200Hz | Menu hover |
| `playClick()` | Square blip 400→600Hz | Button click |
| `playSuccess()` | C-E-G arpeggio (C5→E5→G5) | Success / checkout |
| `playFail()` | Sawtooth drop 180→60Hz | Error / fail |

Usage in any component:

```js
import { playClick, playSuccess } from '../lib/sfx';

<button onClick={() => { playClick(); doSomething(); }} />
```

To add custom sounds, create new functions in `sfx.js` using the AudioContext API.

### API Layer

`src/lib/api.js` abstracts backend communication with a localStorage fallback:

```
submitCollaboration(data)     → POST /api/collaborations
fetchCollaborators()          → GET  /api/collaborations
submitContactMessage(data)    → POST /api/contact
```

Set your API endpoint via environment variable:

```bash
REACT_APP_API_URL=https://your-api.com
```

If `REACT_APP_API_URL` is not set, all requests fall back to `localStorage`, making the app fully functional without a backend.

### Admin Panel & GitHub Sync

The Admin Panel (`/admin`, PIN: `181203`) includes a **GitHub API integration** that allows you to:

1. Configure `owner`, `repo`, `branch`, `path`, and `token` in the GitHub Config tab
2. Add/edit games through a form
3. Click **"COMMIT TO REPO"** — the panel will push `games.json` and images directly to your GitHub repository via the GitHub API

This enables a **zero-local-setup CMS workflow**: edit content through the browser and commit to production instantly.

### PWA Configuration

The app is PWA-ready:

- **Manifest**: `public/manifest.json` — customize name, icons, theme colors
- **Service Worker**: `public/sw.js` — enables offline caching
- **Icons**: Replace `logo192.png` and `logo512.png` with your own branding
- **Display**: `standalone` mode for app-like experience

---

## 🧪 Testing

The project uses **React Testing Library** + **Jest** (bundled via Create React App).

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watchAll=false
```

---

## 👥 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repo
2. **Clone** your fork: `git clone https://github.com/<your-username>/kafeinarts-studio.git`
3. **Create a branch**: `git checkout -b feat/amazing-feature`
4. **Make changes** and commit: `git commit -m "feat: add amazing feature"`
5. **Push**: `git push origin feat/amazing-feature`
6. **Open a Pull Request**

### What you can contribute

- 🐛 Bug fixes
- 🌐 New language translations
- 🎮 More game data / genres
- ✨ New UI components
- ⚡ Performance improvements
- 📖 Better documentation
- 🧪 Additional tests

### Code Style

- The project uses simple JavaScript (no TypeScript) with JSX
- Follow existing component patterns (functional components, hooks)
- Use `cn()` from `src/lib/utils.js` for conditional classes
- Keep retro-style aesthetics consistent
- Run `npm test` before submitting a PR

---

## 📄 License

This project is open-source under the **MIT License**. You are free to use, modify, and distribute it for personal or commercial projects.

---

## 📬 Contact

- **Instagram**: [@eexxvvn](https://instagram.com/eexxvvn)
- **Discord**: `itsmebroarif`
- **WhatsApp**: [+6285817048266](https://wa.me/6285817048266)
- **GitHub**: [itsmebroarif/kafeinarts-studio](https://github.com/itsmebroarif/kafeinarts-studio)

---

## 🙏 Acknowledgements

- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38 — the pixel font
- [Lucide Icons](https://lucide.dev/) — clean SVG icons
- [SweetAlert2](https://sweetalert2.github.io/) — beautiful alert modals
- [Framer Motion](https://www.framer.com/motion/) — smooth animations
- [Zustand](https://github.com/pmndrs/zustand) — minimal state management
- [canvas-confetti](https://github.com/catdad/canvas-confetti) — celebration effects
- [Create React App](https://create-react-app.dev/) — project bootstrap
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
