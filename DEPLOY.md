# Οδηγίες Ανάπτυξης - GitHub Pages & Custom Domain

## ✅ Βήμα 1: Ενεργοποίηση GitHub Pages

1. Πηγαίνετε στο repository: https://github.com/philipposk/Phasma-Website
2. Κάντε κλικ στο **Settings** (Ρυθμίσεις)
3. Στο αριστερό μενού, επιλέξτε **Pages**
4. Στο **Source**, επιλέξτε:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Κάντε κλικ **Save**
6. Περιμένετε 1-2 λεπτά για να ενεργοποιηθεί

Το site θα είναι διαθέσιμο σε: `https://philipposk.github.io/Phasma-Website/`

## 🌐 Βήμα 2: Σύνδεση Custom Domain

### 2.1 Προετοιμασία στο GitHub

1. Στο repository, πηγαίνετε στο **Settings** → **Pages**
2. Στο **Custom domain**, εισάγετε το domain σας (π.χ. `phasmapromotions.gr`)
3. Κάντε κλικ **Save**
4. Το GitHub θα δημιουργήσει ένα commit με ένα `CNAME` file

### 2.2 Ρυθμίσεις DNS στο Domain Provider

Πηγαίνετε στον πάροχο του domain σας και προσθέστε τα εξής DNS records:

#### Επιλογή Α: A Records (Συνιστάται)
```
Type: A
Name: @ (ή root domain)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Επιλογή Β: CNAME Record (Για subdomain)
```
Type: CNAME
Name: www (ή το subdomain που θέλετε)
Value: philipposk.github.io
TTL: 3600
```

### 2.3 Περιμένετε για DNS Propagation

- Μπορεί να πάρει 24-48 ώρες για να ενεργοποιηθεί το domain
- Ελέγξτε με: https://dnschecker.org

### 2.4 Ενεργοποίηση HTTPS

1. Μετά την ενεργοποίηση του domain, πηγαίνετε στο **Settings** → **Pages**
2. Ενεργοποιήστε το **Enforce HTTPS** (μπορεί να χρειαστεί λίγος χρόνος)

## 📝 Σημειώσεις

- Το GitHub Pages είναι δωρεάν για public repositories
- Το site ενημερώνεται αυτόματα κάθε φορά που κάνετε push στο `main` branch
- Για αλλαγές, απλά κάντε `git push` και θα ενημερωθεί σε λίγα λεπτά

## 🔄 Ενημέρωση του Site

```bash
# Μετά από οποιαδήποτε αλλαγή:
git add .
git commit -m "Description of changes"
git push origin main
```

## 🐛 Troubleshooting

### Το site δεν φαίνεται
- Περιμένετε 5-10 λεπτά μετά το push
- Ελέγξτε το **Actions** tab στο GitHub για errors
- Βεβαιωθείτε ότι το branch είναι `main`

### Το custom domain δεν λειτουργεί
- Ελέγξτε τα DNS records με: https://dnschecker.org
- Περιμένετε 24-48 ώρες για DNS propagation
- Βεβαιωθείτε ότι το `CNAME` file υπάρχει στο repository

## 📞 Support

Για βοήθεια με GitHub Pages: https://docs.github.com/en/pages

