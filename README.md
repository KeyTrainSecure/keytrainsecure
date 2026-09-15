# KeyTrainSecure Website

A modern rebuild of keytrainsecure.com, built with React + Vite + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and publishes the site to GitHub Pages automatically on every push to `main`.

To enable it:

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
3. Push to `main` — the site will build and deploy automatically.

The site uses `HashRouter` and a relative `base: './'` in `vite.config.js`, so it
works correctly on GitHub Pages regardless of the repository name, without needing
a custom 404.html redirect trick.

## Notes

- Content and images were pulled from the original GoDaddy site (keytrainsecure.com)
  and are stored in `src/assets/`.
- The Contact page currently submits via `mailto:` — replace this with a real form
  backend (Formspree, Getform, a serverless function, etc.) when ready to accept
  live submissions, and update the destination address in `src/pages/Contact.jsx`.
