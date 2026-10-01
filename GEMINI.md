# PROJECT BRIEF & AI CONTEXT NOTE

> **NOTE FOR AI ASSISTANTS (Antigravity, Gemini, Claude, GPT, etc.):**  
> Read this file first! It contains the complete architecture, features, and guidelines for this repository so you don't need to inspect all files individually.

---

## 🏨 1. Project Overview
- **Project Name:** ANEMOS - Luxury Hotel Digital Concierge & QR Menu System
- **Repository:** `https://github.com/vaibhavsarnobat1-bit/TabMenu`
- **Live Hosting:** GitHub Pages (`https://vaibhavsarnobat1-bit.github.io/TabMenu/`)
- **Origin/Inspiration:** Luxury 5-star hotel guest concierge experience & room QR menus (inspired by Instagram hospitality reels).
- **Core Principle:** **100% Free & Lightweight** — Pure Vanilla HTML, CSS, and JavaScript. Zero external frameworks, zero build steps, zero paid servers or databases.

---

## 📁 2. File Architecture & Responsibilities

| File | Purpose / Role |
| :--- | :--- |
| `AGENTS.md` / `GEMINI.md` | **AI Context & Guidelines (this file)** — Read by AI agents on startup for instant project awareness. |
| `index.html` | **Guest Portal** — The primary mobile-first web app opened by hotel guests via QR code. |
| `guest.css` | **Design System & Animations** — Luxury gold/champagne palette, Ken Burns hero zoom, staggered card entrance, hover shimmer, and pulse glow effects. |
| `guest.js` | **Guest Logic** — Dynamic time-of-day greeting, room selector state (101–999), in-app page routing, concierge smart auto-replies, and LocalStorage order sync. |
| `staff.html` | **Staff / Admin Dashboard** — Real-time live order ticker for hotel reception + built-in printable QR code generator for room tables. |
| `assets/` | **High-Res Media** — `hero.jpg` (beachfront suite sunset), `breakfast.jpg`, `spa.jpg`, `drinks.jpg`, `guide.jpg`, `services.jpg`, `resort.jpg`. |
| `README.md` | Public GitHub documentation, feature breakdown, and deployment instructions. |

---

## 🌟 3. Features Breakdown

### A. Guest Portal (`index.html` + `guest.js`)
1. **Branded Splash Screen:** Elegant gold loading bar animation on initial load.
2. **Room Selector Modal:** Prompts guest to confirm or change their room number (e.g., Room 101). Stored in memory & LocalStorage.
3. **Hero Banner:** High-resolution luxury beachfront image with slow cinematic zoom animation + live pulse indicator (*"Concierge Desk Live"*).
4. **Time Greeting:** Automatically greets guest based on local time (*Good Morning / Good Afternoon / Good Evening / Good Night*).
5. **24/7 Smart Concierge Chat:** WhatsApp-style instant chat window with quick request chips (`Order Breakfast`, `Book Spa`, `Extra Towels`, `Clean Room`, `Wi-Fi Password`, `Late Check-out`) and intelligent auto-responses.
6. **10 Interactive Hotel Service Sections:**
   - 🍳 **Breakfast:** Full morning menu with dietary tags (Veg, Vegan, Chef Special) and delivery prep times.
   - 🧖‍♀️ **Spa & Wellness:** Holistic treatments list with instant 1-tap booking.
   - 📶 **House & Wi-Fi:** Network name (`ANEMOS_Luxury_Guest`), password (`Anemos@2024`), speed, and facility timings.
   - 🍸 **Mini Bar & Drinks:** In-room snacks & drinks with instant "Add to Room Bill" button.
   - 🛎️ **Guest Services:** Housekeeping requests (extra pillows, towels, room makeup, iron, DND).
   - 🏖️ **Local Guide:** Curated tourist spots, beaches, distances, and driving times in Goa.
   - 📞 **Contacts & Directory:** Direct call triggers for Reception, Housekeeping, Dining, Spa, and Valet.
   - 🎁 **Property Offers:** Honeymoon packages, pool day passes, and dining discounts.
   - 📋 **Hotel Policies:** Smoking rules, quiet hours, pool rules, payment terms.
   - 🗺️ **Property Map:** Facilities floor plan and address directory.

### B. Staff Dashboard (`staff.html`)
- Displays all incoming guest requests and orders in real-time using `localStorage` (`anemos_orders`).
- Status toggles: **Pending** ➔ **In Progress** ➔ **Completed**.
- QR Code Generator: Enter any room number to generate a printable QR code pointing directly to `index.html`.

---

## 🎨 4. Design Guidelines & CSS Tokens
- **Theme:** Warm luxury hotel hospitality.
- **Palette:**
  - Gold / Primary: `#c4915a` (`--primary`)
  - Dark Gold: `#a87843` (`--primary-dark`)
  - Accent Gold: `#d4a853` (`--accent`)
  - Text Primary: `#1a1614`
  - Backgrounds: `#ffffff` (cards), `#fbf9f6` (sub-surfaces), `#f4efe9` (page backdrop)
  - Success / Green: `#25D366` / `#2e7d32`
- **Typography:**
  - Headings / Logos: `'Cormorant Garamond', serif`
  - Body / UI: `'Inter', sans-serif`
- **Mobile Container:** Max width `440px`, centered for sleek app-like mobile experience on desktops and phones.

---

## ⚠️ 5. Rules for Future Modifications
1. **Keep it Pure & Free:** Do NOT introduce Node.js server dependencies, paid third-party APIs, or complex build pipelines (Vite/Webpack/Tailwind) unless the user explicitly asks.
2. **Offline-Safe:** All core images are saved locally in the `assets/` directory so the project works completely offline or when cloned anywhere.
3. **Sync with Git:** When making significant code or design updates, commit and push to `origin main` to keep the live GitHub repository up to date.
