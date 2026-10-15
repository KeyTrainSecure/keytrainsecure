import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { legacy, pages, SITE } from './src/routes.js'
import { signupRedirects } from './src/signup.js'

// GitHub Pages serves static files only, so the build writes a copy of index.html for every
// page (Pages serves /about from about.html without a trailing-slash redirect), each with its own
// title and canonical URL so Google indexes it as its own page. Old GoDaddy URLs get a redirect
// page. Anything else falls through to 404.html, which is also the app and renders Not Found.
function setHead(html, { title, url }) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
}

function legacyRedirectPage(url) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(url)} + location.search + location.hash)</script>
</head>
<body><a href="${url}">This page has moved.</a></body>
</html>
`
}

function sitePages() {
  return {
    name: 'site-pages',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const index = readFileSync(resolve(dist, 'index.html'), 'utf8')
      for (const [path, title] of Object.entries(pages)) {
        const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
        writeFileSync(resolve(dist, file), setHead(index, { title, url: SITE + path }))
      }
      writeFileSync(
        resolve(dist, '404.html'),
        setHead(index, { title: 'Page Not Found — KeyTrain', url: SITE + '/' })
          .replace(/\s*<link rel="canonical"[^>]*>/, '')
          .replace('<head>', '<head>\n    <meta name="robots" content="noindex" />'),
      )
      for (const [from, to] of Object.entries(legacy)) {
        // Write both the plain name and the percent-encoded one (+ as %2B, & as %26), since an
        // old link may request either.
        const names = new Set([from.slice(1), encodeURI(from.slice(1)).replace(/\+/g, '%2B').replace(/&/g, '%26')])
        for (const name of names) writeFileSync(resolve(dist, `${name}.html`), legacyRedirectPage(SITE + to))
      }
      const urls = Object.keys(pages).map((path) => `  <url><loc>${SITE}${path}</loc></url>`)
      writeFileSync(
        resolve(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      )
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
  plugins: [react(), tailwindcss(), sitePages(), signupRedirectPages()],
  base,
})
