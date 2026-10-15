// The site's pages and old URLs, shared by the app (App.jsx) and the build (vite.config.js),
// which writes a static HTML file per page, a redirect page per old URL, and the sitemap.
export const SITE = 'https://keytrainsecure.com'

export const pages = {
  '/': 'KeyTrain — Cybersecurity Made Simple',
  '/about': 'About Us — KeyTrain',
  '/team': 'Our Team — KeyTrain',
  '/halo-railnet': 'Halo + RailNet Intelligence — KeyTrain',
  '/learning': 'KeyTrain Learning — KeyTrain',
  '/hooked': 'HOOKeD Phishing Simulator — KeyTrain',
  '/services': 'Services — KeyTrain',
  '/work': 'Our Work — KeyTrain',
  '/contact': 'Contact Us — KeyTrain',
  '/privacy': 'Privacy Policy — KeyTrain',
}

// URLs from the previous GoDaddy site, kept so existing links and search results still land.
export const legacy = {
  '/about-our-company': '/about',
  '/our-team': '/team',
  '/contact-us': '/contact',
  '/keytrain-halo-+-railnet': '/halo-railnet',
  '/keytrain-learning': '/learning',
  '/consulting': '/services',
  '/consulting-&-it-services': '/services',
}
