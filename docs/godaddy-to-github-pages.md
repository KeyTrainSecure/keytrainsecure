# Moving keytrainsecure.com off GoDaddy Website Builder → GitHub Pages

**Goal:** The domain stays registered at GoDaddy. GoDaddy's Website Builder goes away.
The site is served by GitHub Pages from this repo, and GoDaddy DNS just points traffic there.

These notes are deliberately high level. Each step says *what* to do. Working out *how* is
part of the exercise: read the docs, try things, and ask when you've been stuck for a while.

---

## Before you touch anything

- [ ] Get access to the GoDaddy account and admin access to this GitHub repo.
- [ ] **Screenshot or export the current GoDaddy DNS records.** This is your rollback plan.
- [ ] Work out which records handle email (hint: look up `MX` records and what `TXT`/SPF are for).
      Breaking email is the worst outcome here. Don't break email.
- [ ] Write down every page/URL on the current site so nothing gets lost.

## 1. Get the site building and deploying on GitHub

- [ ] Run the site locally (see the main `README.md`).
- [ ] Find the GitHub Actions workflow in `.github/` and figure out what triggers it.
- [ ] Get a successful deploy and view the site at its default `*.github.io` URL.
- [ ] Look into what `public/CNAME` does and why it lives in `public/`.

> Question to answer: this is a single-page React app. What happens on GitHub Pages when
> someone opens `/about` directly or refreshes it? How does this repo deal with that?

## 2. Tell GitHub about the custom domain

- [ ] In the repo's Pages settings, set the custom domain.
- [ ] Optional but recommended: verify the domain on your GitHub account/org. Find out why.

## 3. Point GoDaddy DNS at GitHub

- [ ] Find GitHub's docs on "managing a custom domain for your GitHub Pages site".
- [ ] Work out which record type the **apex** (`keytrainsecure.com`) needs and which one
      **`www`** needs. They're different. Understand why.
- [ ] Remove whatever GoDaddy records currently point at Website Builder or "Parked".
      Check for domain forwarding too.
- [ ] **Leave the email records alone.**

> Question to answer: what is TTL, and why might the change take a while to show up?

## 4. Verify and lock it down

- [ ] Use `dig` / `nslookup` (or an online DNS checker) to confirm the records resolve
      to GitHub.
- [ ] Wait for GitHub to issue the TLS certificate, then turn on **Enforce HTTPS**.
- [ ] Test: apex, `www`, `http://` → `https://`, deep links, and a refresh on a sub-page.
- [ ] Test that old GoDaddy URLs still land somewhere sensible.
- [ ] Send and receive a test email on the domain.

## 5. Clean up

- [ ] Once everything has been stable for a few days, cancel the GoDaddy Website Builder
      plan. Do **not** cancel the domain registration or email.
- [ ] Update the README with anything you learned that the next person would need.

---

## Done when

- `https://keytrainsecure.com` and `https://www.keytrainsecure.com` serve the new site over HTTPS
- Pushing to the deploy branch updates the live site
- Email still works
- The GoDaddy bill is just domain + email

## If it goes sideways

Put the DNS records back from your screenshot. DNS changes are reversible, so take your time.

## Useful search terms

`GitHub Pages custom domain` · `apex domain vs subdomain` · `A record vs CNAME` ·
`GoDaddy manage DNS` · `MX record` · `DNS propagation TTL` · `GitHub Pages enforce HTTPS`
