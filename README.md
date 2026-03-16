# LaunchPad AI Landing Page

A React + Vite landing page for LaunchPad AI using Tailwind CSS and reusable components.

## Environment

- **Node.js**: `>=20.16`
- **Vite**: `^5.4.19` (compatible with Node 20.16)
- **React**: `^19.2.x`
- **framer-motion**: installed for animations

## Install and run

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

If you have a new machine and want lockfile-aligned setup:

```bash
npm install
npm run build
```

## Styling setup

- `src/main.jsx` imports `./styles/globals.css`
- `src/styles/globals.css` imports `../index.css`
- `index.css` includes Tailwind directives

## Project structure

```text
src/
  components/
    Navbar.jsx | Hero.jsx | Features.jsx | HowItWorks.jsx | Testimonials.jsx
    Pricing.jsx | FAQ.jsx | CTASection.jsx | Footer.jsx
  pages/
    LandingPage.jsx
  data/
    content.js
  styles/
    globals.css
  main.jsx
  App.jsx
  index.css
```

## Content editing

Update copy and data in [`src/data/content.js`](/Users/michaelnobles/launchpad-ai/src/data/content.js).

| Data key      | Renders in |
| ------------- | ---------- |
| `navLinks`    | `Navbar` |
| `heroStats`   | `Hero` |
| `features`    | `Features` |
| `steps`       | `HowItWorks` |
| `testimonials`| `Testimonials` |
| `pricingPlans`| `Pricing` |
| `faqs`        | `FAQ` |

## Content-only update flow

1. Edit values in `src/data/content.js`.
2. Save.
3. Refresh the page.

## Deployment

### Vercel

- Build command: `npm run build`
- Publish directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

```bash
npm run build
```

Deploy `dist` with `base` configured in `vite.config.js` (example repo: `/launchpad-ai/`):

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
