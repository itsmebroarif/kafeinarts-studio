# Project: KafeinArts - Indie Game Developer & IT Solution Platform

Act as an expert Senior Frontend Developer and UI/UX Designer. I want you to build a complete, production-ready React.js (With App Router) project for "KafeinArts". This website serves as a company profile landing page and a game store for an Indie Game Developer & IT Solution provider and be targetted for indonesian & japanese and also for common visitor with english language.

## 🛠 Tech Stack & Libraries
- **Framework:** React (With App Router)
- **Language:** Javascript or TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Alerts/Modals:** SweetAlert2 (sweetalert2)
- **State Management:** Zustand (with persist middleware)
- **Icons:** Lucide React
- **PWA:** Electron.js or anything what will get pwa launcher with splash screen 
- **Utilities:** clsx, tailwind-merge, Language pack (Indonesia, English, Japanese)

## 🎨 Design System & Theme
- **Aesthetic:** Retro 16-bit pixel art style mixed with modern UI.
- **Typography:** 'Press Start 2P' (Google Fonts) for headings, buttons, and prices. 'Inter' (Google Fonts) for body text and descriptions.
- **Borders & Shadows:** Use pixelated borders (e.g., `border-2` or `border-4` solid) and hard box-shadows (no blur) to mimic retro UI.
- **Effects:** Neon glow effects on hover (purple/cyan).
- **Dark/Light Mode:** Fully supported. Default to Dark Mode. 
  - Dark: `bg-slate-900`, `text-slate-100`, accents `purple-600` & `cyan-500`.
  - Light: `bg-gray-50`, `text-gray-900`, accents `purple-500` & `cyan-600`.
  - Persist theme selection in `localStorage` via Zustand.

## 📁 Project Structure & Data Handling
- **Data Source:** All game data must be fetched from a local JSON file located at `src/data/games.json`.
- **Images:** Images will be manually uploaded to `public/images/games/`. The JSON should reference them (e.g., `/images/games/game1.png`).
- **Folder Structure:**
  - `src/app/` (pages: landing, games, services, about, contact)
  - `src/components/` (ui, layout, home, games, wizard)
  - `src/lib/` (store, utils)
  - `src/data/` (games.json)
  - `src/types/` (index.ts)

## 🎮 Core Features & Pages

### 1. Global Layout
- **Navbar:** Logo, Navigation links, Theme Toggle (Sun/Moon), Cart Icon (with badge), and a "Request Game" CTA button. Mobile responsive with a pixel-art styled hamburger menu.
- **Footer:** Quick links, Social Media icons (Instagram, Discord, WhatsApp), Copyright.

### 2. Landing Page (`/`)
- **Hero Section:** Retro gaming setup illustration, catchy headline, and two CTA buttons ("Explore Games" and "Request Your Game").
- **Featured Games:** Grid of top games.
- **Services Section:** Cards detailing Game Dev, IT Solutions, etc.
- **About Preview:** Brief company stats.

### 3. Game Store (`/games`)
- **Filter & Search:** Pixel-styled search bar.
- **Game Grid:** Responsive grid (4 cols desktop, 2 cols tablet, 1 col mobile).
- **Game Card:** Thumbnail, pixel-font title, genre badge, price, rating, and "Add to Cart" button. Hover effect: neon glow + slight scale up.
- **Cart Sidebar:** Slides in from the right. Shows items, quantity controls, total price, and a "Checkout via WhatsApp" button.

### 4. Multi-Step Wizards (Crucial Feature)
Create two separate wizard components using SweetAlert2 or custom modals for step transitions:
- **Game Request Wizard:** 
  - Step 1: Game Name, Genre, Platforms(Roblox / Webapp / Windows).
  - Step 2: Description, References, Budget.
  - Step 3: User Contact Info (Name, Email, WA).
  - Step 4: Review & Submit.
- **Service Request Wizard:**
  - Step 1: Service Type (Web, Mobile, Game Dev, IT Consulting).
  - Step 2: Project Details, Deadline, Budget.
  - Step 3: Contact Info & Submit.

### 5. Contact Page (`/contact`)
- Contact form (Name, Email, Subject, Message).
- Direct links to social media with pixel-art styled buttons.

## 🔗 Integrations & Routing

### WhatsApp & Social Media
- **WhatsApp Number:** `6285817048266` (Use `6285817048266` for the `wa.me` URL).
- **Instagram:** `eexxvvn` (Link: `https://instagram.com/eexxvvn`)
- **Discord:** `itsmebroarif` (Link: `https://discord.com/users/itsmebroarif` or just display the username)

### SweetAlert2 WhatsApp Flow
Whenever a form is submitted (Contact, Game Wizard, Service Wizard, or Cart Checkout):
1. Trigger a SweetAlert2 confirmation popup asking "Send via WhatsApp?".
2. If confirmed, format the data into a clean, readable text message.
3. Open `https://wa.me/6285817048266?text=${encodeURIComponent(message)}` in a new tab.
4. Show a success SweetAlert2 popup.

### State Management (Zustand)
- `useThemeStore`: Handles dark/light mode, persists to localStorage.
- `useCartStore`: Handles cart items, add/remove/update, persists to localStorage.

## 📱 PWA & Optimization
- Configure `react-pwa` for offline support and installability.
- Create `public/manifest.json` with appropriate icons, theme colors, and `display: standalone`.
- Ensure all images use React.js `<Image>` component for optimization.
- Ensure the site is fully responsive and accessible (ARIA labels).

## 📝 Execution Instructions for AI
1. First, set up the project structure, install dependencies, and configure Tailwind/React.js.
2. Create the `games.json` file with at least 6 detailed mock games.
3. Build the Zustand stores (Theme and Cart).
4. Build the UI components (Button, Card, Input) with the retro pixel-art styling.
5. Implement the Layout (Navbar/Footer) with Dark/Light mode toggle.
6. Build the Landing Page and Game Store pages.
7. Implement the Cart Sidebar and Checkout flow.
8. Build the Game Request and Service Request Wizards with the SweetAlert2 -> WhatsApp flow.
9. Build the Contact page.
10. Configure PWA and final optimizations.

Write clean, modular, and fully typed TypeScript code. Do not skip any implementations. Provide the code file by file, starting with the configuration and data, then moving to components and pages.