import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

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

// BASE_PATH is set by the deploy workflow from GitHub Pages: '/keytrainsecure/' on the
// github.io URL, '/' once the custom domain is configured.
const base = `/${(process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')

export default defineConfig({
  plugins: [react(), tailwindcss(), spaRoutes()],
  base,
})
