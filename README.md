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

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages
(on push to the branches listed under `on.push`, or manually via **Run workflow**).

The site is served from the custom domain in `public/CNAME` (`keytrainsecure.com`) and uses
real paths (`/about`, `/halo-railnet`, …) via `BrowserRouter`. Because Pages only serves static
files, the build (see `sitePages` in `vite.config.js`) writes a copy of `index.html` for every
page, each with its own `<title>` and canonical URL so Google indexes it as its own page, plus
`404.html` (marked `noindex`) for anything else. It also generates `sitemap.xml`.

Pages and old URLs are listed once, in `src/routes.js`. When adding a page, add it to `pages`
there and give it a `<Route>` in `src/App.jsx`. Old GoDaddy URLs go in `legacy`; each gets a
redirect page to its new page (for example `/consulting` and `/consulting-&-it-services` go to
`/services`).

## Sign up links

Signup, checkout, and accounts live in the KeyTrain Learning app
([PatGuettler/keytrain-learning](https://github.com/PatGuettler/keytrain-learning)), not here: its
Stripe checkout, backend, and post-checkout pages all run on keytrainlearning.com. This site only
links into it, and every signup URL comes from `src/signup.js`.

- Halo plan buttons link to `/halo/signup?tier=standalone` or `?tier=intelligence`, which preselects
  the plan. The tier ids must match `HaloTier` in keytrain-learning.
- Short shareable URLs (for emails, flyers, QR codes) forward to the real signup pages and keep any
  query string: `keytrainsecure.com/signup/halo`, `keytrainsecure.com/signup/learning`. Add more in
  `signupRedirects`; the build writes a static redirect page for each.

### Pointing keytrainsecure.com at GitHub Pages

1. In the repo's **Settings → Pages**, set the custom domain to `keytrainsecure.com`.
2. At the DNS host (GoDaddy), replace the apex `A` records with GitHub's:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and point `www` at `keytrainsecure.github.io` with a `CNAME`.
3. **Leave the `MX` and `TXT` records alone** — they run the domain's Microsoft 365 email.
4. Once the certificate is issued, enable **Enforce HTTPS**.

## Notes

- Halo installers are hosted on GitLab Pages (`keytrain-862e21.gitlab.io/downloads`) and
  always point at the latest build; the download buttons live in `src/pages/HaloRailnet.jsx`.
- The contact form uses the Learning app's public `send-marketing-contact` Supabase function
  with `source: keytrain-website`. The function fixes the recipient to
  `connect@keytrainsecure.com`, sends through Resend, and applies rate limits. No FormSubmit
  activation or browser API key is needed. `CONTACT_EMAIL` in `src/contact.js` is the
  fallback mailto address; the server controls delivery.
- Deploy the matching function from `keytrain-learning` to production **before** publishing
  this website change. It adds the website source, Connect routing, and CORS for the apex/www
  domains. The previous function routes all contact messages to the Learning support inbox.
- Local/staging previews can set
  `VITE_CONTACT_ENDPOINT=https://rzrsudrdpnabpseatclm.supabase.co/functions/v1/send-marketing-contact`
  before building or starting Vite (use localhost:5173 for CORS). The default is production.
  Pushing the `staging` branch does not publish the public site; Pages deploys from `main`.
- Run `npm test`, `npm run lint`, and `npm run build` before publishing. Email-provider
  acceptance does not guarantee inbox placement; verify delivery with an authorized form
  submission after deployment.
