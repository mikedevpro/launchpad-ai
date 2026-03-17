# 🚀 LaunchPad AI — SaaS Landing Page

A modern SaaS-style landing page built with React, Vite, Tailwind CSS, and Framer Motion, designed to demonstrate responsive front-end development, polished UI components, and conversion-focused layout structure.

This project showcases a realistic SaaS marketing page architecture with reusable React components, smooth animations, and mobile-first design.

## 🌐 Live Demo

https://launchpad-ai-theta.vercel.app

## 📸 Screenshots

### Hero Section
<img width="1272" height="630" alt="Screenshot 2026-03-17 at 10 44 15 AM" src="https://github.com/user-attachments/assets/7139689f-5628-4b7e-a5fa-bb05f76ec64b" />


### Features Section
<img width="1272" height="630" alt="Screenshot 2026-03-17 at 10 44 30 AM" src="https://github.com/user-attachments/assets/02bdd81f-f91d-4c80-89bf-262c93edc415" />


### Pricing Section
<img width="1272" height="630" alt="Screenshot 2026-03-17 at 10 44 44 AM" src="https://github.com/user-attachments/assets/73b5ceb8-3b62-4a4e-ab9d-558fc8606ba4" />


### Mobile Navigation
<img width="552" height="630" alt="Screenshot 2026-03-17 at 10 54 54 AM" src="https://github.com/user-attachments/assets/26b89eef-73ac-4aa7-9e7d-9fc9e7d0ecaf" />


## ✨ Features

### Responsive SaaS Landing Page
Fully responsive layout designed to work across desktop, tablet, and mobile devices.

### Component-Based Architecture
Reusable React components for:
- Navbar
- Hero
- Features
- How It Works
- Testimonials
- Pricing
- FAQ
- CTA Section
- Footer

### Animated User Experience
Smooth UI animations powered by Framer Motion including:
- scroll-based reveal animations
- interactive buttons
- animated FAQ accordion
- subtle hero background effects

### Mobile Navigation
Custom responsive navigation with animated hamburger menu and mobile-friendly layout.

### Data-Driven UI
Content is stored in structured data files to keep the interface maintainable and scalable.

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion

### Development Tools
- Node.js
- Git
- GitHub

## 🧠 What This Project Demonstrates

This project highlights several important front-end development skills:
- modern React component architecture
- responsive layout design
- clean UI composition
- animation using Framer Motion
- maintainable data-driven components
- production-style project structure

## 📂 Project Structure

```
src
 ├── components
 │   ├── Navbar.jsx
 │   ├── Hero.jsx
 │   ├── Features.jsx
 │   ├── HowItWorks.jsx
 │   ├── Testimonials.jsx
 │   ├── Pricing.jsx
 │   ├── FAQ.jsx
 │   ├── CTASection.jsx
 │   └── Footer.jsx
 │
 ├── data
 │   └── content.js
 │
 ├── pages
 │   └── LandingPage.jsx
 │
 ├── App.jsx
 └── main.jsx
```

## 🚀 Running the Project

**Clone the repo:**
```bash
git clone https://github.com/mikedevpro/launchpad-ai.git
```

**Install dependencies:**
```bash
npm install
```

**Run the development server:**
```bash
npm run dev
```

Then open: http://localhost:5173

## 📈 Why I Built This

I created this project as part of my portfolio to demonstrate modern front-end development for SaaS landing pages — a common need for startups, product launches, and marketing websites.

The focus was on:
- clean UI design
- reusable React components
- responsive layout
- smooth animation
- production-style project structure

## 👨‍💻 Author

**Michael Nobles**

Front-End / Full-Stack Developer
React • TypeScript • FastAPI • UI Development

[Portfolio](https://www.michaelnobles.dev)

[GitHub](https://github.com/mikedevpro/launchpad-ai)

## ⭐ Future Improvements

- Dark/light theme toggle
- Additional motion polish
- A/B test hero variations
- CMS-driven content

export default defineConfig({
  plugins: [react()],
  base: '/launchpad-ai/',
})
```

## Changelog

Format: `YYYY-MM-DD — Type — Section — Summary`

Example: `2026-03-16 — Content — Hero/Features — Updated heroStats and features`

## Notes

If network access is restricted, run installs/builds from a machine with npm registry access.
