# Quick Fix Checklist για GitHub Pages

## ✅ Βήματα Ελέγχου (Κάντε τα ένα-ένα)

### 1. Ελέγξτε το GitHub Repository
Πηγαίνετε: https://github.com/philipposk/Phasma-Website

**Ελέγξτε:**
- [ ] Το repository είναι **public** (όχι private)
- [ ] Υπάρχει το `index.html` στο root
- [ ] Υπάρχει το `CNAME` file με `phasma.6x7.gr` μέσα

### 2. Ενεργοποιήστε το GitHub Pages
Πηγαίνετε: https://github.com/philipposk/Phasma-Website/settings/pages

**Ρυθμίσεις:**
- [ ] Source: **Branch** = `main`
- [ ] Source: **Folder** = `/ (root)`
- [ ] Κάντε **Save**
- [ ] Περιμένετε 2-3 λεπτά

**Αν δείτε error:**
- Κάντε scroll down και δείτε το error message
- Ελέγξτε το **Actions** tab για build errors

### 3. Προσθέστε Custom Domain (Αν θέλετε)
Στο ίδιο Pages settings:
- [ ] Custom domain: `phasma.6x7.gr`
- [ ] Κάντε **Save**
- [ ] Περιμένετε 1-2 λεπτά

### 4. Ελέγξτε το DNS (Για custom domain)
- [ ] Πηγαίνετε στο papaki.com DNS settings
- [ ] CNAME record: `phasma` → `philipposk.github.io`
- [ ] Περιμένετε 24-48 ώρες

### 5. Test URLs
Δοκιμάστε:
- https://philipposk.github.io/Phasma-Website/ (GitHub Pages URL)
- https://phasma.6x7.gr (Custom domain - μετά το DNS)

## 🚨 Αν Ακόμα Δεν Λειτουργεί

**Πείτε μου:**
1. Τι ακριβώς βλέπετε; (404, blank page, error message?)
2. Ποιο URL δοκιμάζετε;
3. Τι λέει το GitHub Pages settings page;
4. Υπάρχουν errors στο Actions tab;

