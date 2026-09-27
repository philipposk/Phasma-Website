# Pharmacist's Calendar Website

This is the website for an annual calendar made for pharmacists, produced by Phasma Promotions. It shows off the current year's calendar, lets people browse past editions, and gives them a way to get in touch to order one. The site is in Greek and is aimed at pharmacists and pharmacies who want to buy the calendar. There's no online checkout; orders are placed by phone or by sending a message.

## What it does
- Shows the current year's pharmacist calendar with cover images.
- Has an archive page to look back at calendars from previous years.
- Lets visitors send a message or find a phone number to place an order.
- Includes an "about" page describing the calendar and the company.
- Works on phones and computers, in Greek.

## Status
Working website. It's a simple public website (no login, no online payment) that visitors view in a browser.

---
### For developers
Plain static site: hand-written HTML, CSS, and JavaScript (`index.html`, `about.html`, `archive.html`, `shop.html`, `settings.html`, `styles.css`, `script.js`, `shop.js`), no build step or framework. Contact form submissions are handled by Formspree (a third-party form service). Images live in `images/`. Hosted on GitHub Pages with a custom domain (see `CNAME`, `.nojekyll`). Deployment and form-setup notes are in `DEPLOY.md`, `FORMSPREE_SETUP.md`, and `TROUBLESHOOTING.md`.
