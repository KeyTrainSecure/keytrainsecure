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
files, the build (see `spaRoutes` in `vite.config.js`) writes a copy of `index.html` for every
route, plus `404.html` for anything else. When adding a route, add it to both `src/App.jsx` and
the `routes` list in `vite.config.js`. Old GoDaddy URLs (`/about-our-company`, `/our-team`,
`/contact-us`, `/keytrain-halo-%2B-railnet`, `/keytrain-learning`) redirect to their new pages.

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
- The contact form posts to [FormSubmit](https://formsubmit.co). The destination inbox is
  `CONTACT_EMAIL` in `src/pages/Contact.jsx`; the first submission sends that inbox an
  activation link that must be clicked before messages are delivered.
