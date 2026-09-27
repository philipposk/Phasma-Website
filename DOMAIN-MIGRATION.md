# Μετάβαση σε δικό domain (π.χ. phasmapromotions.gr)

Αυτός ο οδηγός εξηγεί τι χρειάζεται ο Δημήτρης όταν αγοράσει δικό του domain και θέλει να μεταφέρει το site από `phasma.6x7.gr` στο νέο του.

Το site φιλοξενείται στο **GitHub Pages** (repository: [Phasma-Website](https://github.com/philipposk/Phasma-Website)). Η μετάβαση είναι κυρίως ρυθμίσεις DNS + μικρές αλλαγές στο site.

---

## Τι θα χρειαστεί

- Ένα domain που θα αγοράσει (π.χ. `phasmapromotions.gr`, `phasma.gr`)
- Πρόσβαση στον λογαριασμό του παρόχου domain (Papaki, GoDaddy, Namecheap, κ.λπ.)
- Πρόσβαση στο GitHub repository (ή κάποιος developer να κάνει τις αλλαγές στον κώδικα)

**Εκτιμώμενος χρόνος:** 1–2 ώρες εργασίας + 24–48 ώρες για να ενεργοποιηθεί πλήρως το DNS/HTTPS.

---

## Βήμα 1: Αγορά domain

1. Επιλέξτε όνομα (π.χ. `phasmapromotions.gr`).
2. Αγοράστε το από πάροχο (.gr domains: Papaki, Hostinger, κ.λπ.).
3. Κρατήστε τα στοιχεία σύνδεσης (email + password) του πίνακα διαχείρισης DNS.

**Συμβουλή:** Αγοράστε και το `www` (συνήθως δωρεάν) ώστε να δουλεύουν και `www.phasmapromotions.gr` και `phasmapromotions.gr`.

---

## Βήμα 2: Ρυθμίσεις DNS (στον πάροχο του domain)

Στον πίνακα DNS του domain, προσθέστε:

### Για το κύριο domain (π.χ. `phasmapromotions.gr`)

Τέσσερα **A records** στην root (`@`):

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### Για το www (π.χ. `www.phasmapromotions.gr`)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `philipposk.github.io` |

> Αν το repository μεταφερθεί σε άλλο GitHub account στο μέλλον, αλλάζει το `philipposk.github.io` στο username του νέου λογαριασμού.

**Έλεγχος:** Μετά από 1–24 ώρες, δείτε αν το DNS έχει διαδοθεί: [dnschecker.org](https://dnschecker.org)

---

## Βήμα 3: GitHub Pages

1. Ανοίξτε: https://github.com/philipposk/Phasma-Website/settings/pages
2. Στο **Custom domain**, βάλτε το νέο domain (π.χ. `phasmapromotions.gr`)
3. Πατήστε **Save**
4. Ενεργοποιήστε **Enforce HTTPS** (μπορεί να εμφανιστεί μετά από 24–48 ώρες, όταν εκδοθεί το πιστοποιητικό)

### Αρχείο CNAME στο repository

Το αρχείο `CNAME` στη ρίζα του project πρέπει να περιέχει **μόνο** το νέο domain, π.χ.:

```
phasmapromotions.gr
```

Το GitHub συνήθως το ενημερώνει αυτόματα όταν αλλάζετε το Custom domain. Αν όχι, αλλάξτε το χειροκίνητα και κάντε push.

---

## Βήμα 4: Ενημέρωση του site (κώδικας)

Μετά την αλλαγή domain, πρέπει να αντικατασταθεί το `phasma.6x7.gr` με το νέο domain στα παρακάτω αρχεία:

| Αρχείο | Τι αλλάζει |
|--------|------------|
| `CNAME` | Το νέο domain |
| `sitemap.xml` | Όλα τα `<loc>` URLs |
| `robots.txt` | Η γραμμή `Sitemap:` |
| `llms.txt` | Τα links |
| Όλα τα `.html` | `canonical`, `og:url`, `og:image`, schema JSON |

**Εύκολος τρόπος (για developer):** αναζήτηση-αντικατάσταση `phasma.6x7.gr` → `το-νεο-domain.gr` σε όλο το project, μετά `git push`.

---

## Βήμα 5: Google Search Console

Το site είναι ήδη στο Search Console ως `https://phasma.6x7.gr/`.

Όταν αλλάξει domain:

1. Προσθέστε **νέο property** για το νέο domain (π.χ. `https://phasmapromotions.gr/`)
2. Επαληθεύστε ιδιοκτησία (meta tag ή HTML αρχείο — ίδια διαδικασία με πριν)
3. Υποβάλετε ξανά το `sitemap.xml`
4. (Προαιρετικά) Στο παλιό property: **Settings → Change of address** → δηλώστε το νέο domain, ώστε η Google να μεταφέρει το SEO ranking

---

## Βήμα 6: Έλεγχος ότι όλα δουλεύουν

Μετά την ενεργοποίηση του DNS, ελέγξτε:

- [ ] Το site ανοίγει στο νέο domain με HTTPS (λουκέτο στη γραμμή διευθύνσεων)
- [ ] Όλες οι σελίδες φορτώνουν (Αρχική, Σχετικά, Κατάστημα, Αρχείο)
- [ ] Η φόρμα επικοινωνίας στο Κατάστημα στέλνει email
- [ ] Το PDF καταλόγου κατεβαίνει
- [ ] Το `sitemap.xml` ανοίγει στο νέο domain
- [ ] Το Google Search Console δείχνει το νέο property ως verified

---

## Τι γίνεται με το παλιό `phasma.6x7.gr`

- Αν ο Δημήτρης **δεν** ελέγχει το `6x7.gr`, το παλιό link θα σταματήσει να δουλεύει μόλις αφαιρεθεί το CNAME ή αλλάξει το DNS.
- Αν **ελέγχει** το subdomain, μπορεί να βάλει redirect (301) από `phasma.6x7.gr` → νέο domain, ώστε παλιά links να μην χάνονται.

---

## Ενδεικτικό κόστος

| Στοιχείο | Κόστος |
|----------|--------|
| Domain .gr | ~15–25 €/έτος |
| GitHub Pages hosting | Δωρεάν (public repo) |
| Formspree (φόρμα) | Δωρεάν tier ή ~10 $/μήνα για περισσότερα emails |
| SSL (HTTPS) | Δωρεάν (αυτόματα από GitHub) |

---

## Ποιος κάνει τι

| Εργασία | Ποιος |
|---------|-------|
| Αγορά domain | Δημήτρης |
| Ρυθμίσεις DNS | Δημήτρης (ή ο πάροχος hosting του) |
| GitHub Pages + CNAME | Developer ή Δημήτρης (αν έχει πρόσβαση στο repo) |
| Αλλαγές URLs στο site | Developer |
| Google Search Console | Developer ή Δημήτρης (με Google account) |

---

## Σύντομη λίστα (checklist)

```
1. Αγορά domain
2. DNS: 4× A records + CNAME για www
3. GitHub → Settings → Pages → Custom domain
4. Ενημέρωση CNAME + sitemap + canonicals στον κώδικα
5. git push
6. Περίμενε 24–48h για DNS + HTTPS
7. Google Search Console: νέο property + sitemap
8. Έλεγχος site + φόρμας
```

---

*Τρέχον domain: `phasma.6x7.gr` · Repository: https://github.com/philipposk/Phasma-Website*
