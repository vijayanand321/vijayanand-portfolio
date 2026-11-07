# VIJAYANAND — V SERIES

A cinematic, streaming-inspired portfolio for **Vijayanand G**, Senior Software Developer specializing in Oracle Retail Xstore, Java/JEE, and enterprise retail POS.

> This personal portfolio uses a fictional streaming-platform look. It is not affiliated with any streaming service and uses none of their logos.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Build and preview the static site:

```bash
npm run build
npm run preview
```

The production site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or another static host.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever changes are pushed to `main`. It automatically sets the correct asset path for either a project site or a `username.github.io` site.

1. Push this project to a GitHub repository on the `main` branch.
2. The workflow enables GitHub Pages and deploys the site automatically.

The deployment URL appears in the workflow run's **Deploy to GitHub Pages** environment.

## Portfolio content

Portfolio facts are centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file to change the profile, experience, projects, skills, certifications, timeline, and highlights.

- Replace `public/assets/Vijayanand_Resume.pdf` to update the downloadable resume.
- Certificate records and their supporting files are listed in `certifications` in `src/data/portfolio.ts`.
- The main portrait is `public/assets/vijayanand-photo-4.jpg`. Additional photos are listed in `photoGallery` in `src/data/portfolio.ts`.
- Replace the image files or update `profile.portrait` and `photoGallery` to use different photo paths.
- Update the page title, description, and social preview in `index.html`.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, and Lenis.

## Accessibility and performance

- Respects `prefers-reduced-motion`; hover interactions are limited to precise pointers and touch devices use native swipe rails.
- Custom cursor is enabled only for mouse and trackpad users.
- Overlays close with Escape; the intro reel supports Space and the arrow keys.
- Overlays are code-split, and particles pause when they are off screen.
