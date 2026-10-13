import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { signupRedirects } from './src/signup.js'

// GitHub Pages serves static files only, so give every client-side route (and the old
// GoDaddy URLs we redirect) its own copy of index.html; Pages serves /about from about.html
// without a trailing-slash redirect. Anything else falls through to 404.html, which is also
// the app and renders the Not Found page or a redirect.
const routes = [
  'about', 'team', 'halo-railnet', 'learning', 'hooked', 'services', 'work', 'contact',
  'about-our-company', 'our-team', 'contact-us', 'keytrain-learning',
]

function spaRoutes() {
  return {
    name: 'spa-routes',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const index = resolve(dist, 'index.html')
      for (const route of routes) copyFileSync(index, resolve(dist, `${route}.html`))
      copyFileSync(index, resolve(dist, '404.html'))
    },
  }
}

// A tiny page per short signup URL that forwards straight to keytrainlearning.com, keeping any
// query string (so /signup/halo?tier=intelligence works) without loading the whole app first.
function redirectPage(url) {
  const target = JSON.stringify(url)
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting to sign up…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${url}">
<script>location.replace(${target} + location.search)</script>
<meta http-equiv="refresh" content="0; url=${url}">
</head>
<body><a href="${url}">Continue to sign up</a></body>
</html>
`
}

function signupRedirectPages() {
  return {
    name: 'signup-redirects',
    apply: 'build',
    closeBundle() {
      for (const [path, url] of Object.entries(signupRedirects)) {
        const file = resolve(__dirname, 'dist', `${path.slice(1)}.html`)
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, redirectPage(url))
      }
    },
  }
}

// BASE_PATH is set by the deploy workflow from GitHub Pages: '/keytrainsecure/' on the
// github.io URL, '/' once the custom domain is configured.
const base = `/${(process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')

export default defineConfig({
  plugins: [react(), tailwindcss(), spaRoutes(), signupRedirectPages()],
  base,
})
