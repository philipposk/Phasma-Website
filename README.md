# Phasma Promotions — Ημερολόγιο του Φαρμακοποιού

Ιστοσελίδα (στα ελληνικά) για το προσωποποιημένο ημερολόγιο φαρμακείων, έκδοση 2027. Δεν υπάρχει online πληρωμή: οι παραγγελίες γίνονται τηλεφωνικά ή μέσω φόρμας.

## Σελίδες
`index.html` (αρχική + διαδραστικό ημερολόγιο), `shop.html` (παραγγελία + υπολογισμός κόστους), `archive.html` (αρχείο 2005–2026), `about.html`, `faq.html`, `contact.html`, `privacy.html`, `terms.html`, `404.html`.

## Για developers
Καθαρό static site (HTML/CSS/JS, **χωρίς build step**), δημοσιεύεται με GitHub Pages από το `main` (δείτε `CNAME`, `.nojekyll`, `DEPLOY.md`).

| Αρχείο | Ρόλος |
|---|---|
| `styles.css` | Ένα stylesheet. Χρώματα/γραμματοσειρές/γωνίες ελέγχονται από τα `:root` tokens στην αρχή |
| `script.js` | Μενού, scroll progress, reveal, copy |
| `calendar.js` | Δείγμα σελίδας ημερολογίου 2027 (αργίες υπολογίζονται, Πάσχα με αλγόριθμο) |
| `shop.js` | Τιμές προϊόντων, ελάχιστες ποσότητες, ΦΠΑ — **εδώ αλλάζουν οι τιμές** (και στα `shop.html`/`index.html`/`faq.html`/`llms.txt`) |
| `forms.js` | Αποστολή φορμών μέσω Formspree (`xvgdnyoe`) |
| `archive.js` | Φίλτρο δεκαετίας + lightbox |
| `fonts/` | Commissioner, Comfortaa, Alegreya (ελληνικά + λατινικά, self-hosted — κανένα αίτημα στο Google) |
| `docs/` | `STYLE-BRIEF.md` (οδηγίες στυλ), `FEATURE-IDEAS.md`, `PREVIEW.md` |

Το site έχει αυστηρό Content-Security-Policy (meta): όχι inline scripts/styles, μόνο `formspree.io` ως εξωτερική σύνδεση.

Τοπική προεπισκόπηση: `python3 -m http.server 8000` και άνοιγμα του `http://localhost:8000`.
