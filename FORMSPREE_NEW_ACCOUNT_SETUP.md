# 📧 Οδηγίες: Νέο Formspree Account & Ρύθμιση

## Βήμα 1: Δημιουργία Νέου Formspree Account

1. **Πηγαίνετε στο:** https://formspree.io
2. **Κάντε κλικ "Sign Up"** (ή "Get Started")
3. **Εισάγετε:**
   - Email: `fasma.promo@gmail.com` (ή οποιοδήποτε email θέλετε)
   - Password: (δημιουργήστε ένα password)
4. **Κάντε κλικ "Sign Up"**
5. **Επιβεβαιώστε το email** (θα λάβετε email verification)

---

## Βήμα 2: Δημιουργία Νέου Form

1. **Μετά το login**, θα δείτε το dashboard
2. **Κάντε κλικ "Add New"** (ή "+ New Form")
3. **Δώστε όνομα:** `phasma-calendar` (ή ό,τι θέλετε)
4. **Κάντε "Create"**
5. **ΑΝΤΙΓΡΑΨΤΕ το Form ID** που θα εμφανιστεί
   - Θα είναι κάτι σαν: `xvgdnyoe` ή `abc123xy`
   - Το βρίσκετε στο URL: `formspree.io/forms/YOUR_FORM_ID`

---

## Βήμα 3: Προσθήκη Email στο Account

1. **Πηγαίνετε στο:** https://formspree.io/account
2. **Στο "LINKED EMAILS"**, κάντε κλικ **"+ Add Email"**
3. **Εισάγετε το email:** `fasma.promo@gmail.com` (ή `dimeanastasiou@gmail.com`)
4. **Κάντε "Add"**
5. **Ελέγξτε το email** και κάντε κλικ στο verification link

---

## Βήμα 4: Ρύθμιση Email Action στο Workflow

1. **Πηγαίνετε στο:** https://formspree.io/forms/YOUR_FORM_ID/workflow
   - (Αντικαταστήστε `YOUR_FORM_ID` με το Form ID που πήρατε)
2. **Στο "Actions" section**, βρείτε το **"Email"** action
3. **Κάντε κλικ στο "Email" action**
4. **Στο modal που ανοίγει:**
   - **Email Address:** Επιλέξτε `fasma.promo@gmail.com` (από το dropdown)
   - **Enabled:** Βεβαιωθείτε ότι είναι **ON** (μπλε)
5. **Κάντε "Save"**

---

## Βήμα 5: Αλλαγή Κώδικα στο GitHub

### 5.1 Ανοίξτε το shop.js στο GitHub

1. **Πηγαίνετε στο:** https://github.com/philipposk/Phasma-Website
2. **Κάντε κλικ στο `shop.js`** file
3. **Κάντε κλικ το μολύβι icon** (Edit) στην πάνω δεξιά γωνία

### 5.2 Βρείτε τη γραμμή με το Form ID

**Αναζητήστε** (Cmd+F ή Ctrl+F):
```
const formspreeEndpoint = 'https://formspree.io/f/xvgdnyoe';
```

### 5.3 Αντικαταστήστε το Form ID

**Αλλάξτε από:**
```javascript
const formspreeEndpoint = 'https://formspree.io/f/xvgdnyoe';
```

**Σε:**
```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_NEW_FORM_ID';
```

**Παράδειγμα:**
Αν το νέο Form ID είναι `abc123xy`, γράψτε:
```javascript
const formspreeEndpoint = 'https://formspree.io/f/abc123xy';
```

### 5.4 Commit τις Αλλαγές

1. **Στο κάτω μέρος της σελίδας**, στο "Commit changes":
   - **Title:** `Update Formspree form ID to new account`
   - **Description:** (προαιρετικό)
2. **Κάντε κλικ "Commit changes"**

---

## Βήμα 6: Περιμένετε για GitHub Pages Update

1. **Περιμένετε 1-2 λεπτά** για το GitHub Pages να ενημερωθεί
2. **Ανοίξτε:** https://phasma.6x7.gr/shop.html
3. **Κάντε hard refresh:** Cmd+Shift+R (Mac) ή Ctrl+Shift+R (Windows)

---

## Βήμα 7: Test

1. **Συμπληρώστε τη φόρμα** στο shop.html
2. **Κάντε submit**
3. **Ελέγξτε το email** `fasma.promo@gmail.com` για το νέο μήνυμα
4. **Ελέγξτε το Formspree Submissions:**
   - https://formspree.io/forms/YOUR_NEW_FORM_ID/submissions
   - Θα πρέπει να βλέπετε την υποβολή εκεί

---

## ✅ Checklist

- [ ] Formspree account δημιουργήθηκε
- [ ] Form δημιουργήθηκε και Form ID αντιγράφηκε
- [ ] Email προστέθηκε στο Account → Linked Emails
- [ ] Email action ρυθμίστηκε στο Workflow
- [ ] shop.js ενημερώθηκε στο GitHub με το νέο Form ID
- [ ] Changes committed στο GitHub
- [ ] Περιμένατε 1-2 λεπτά
- [ ] Test έγινε και email ήρθε

---

## 🔄 Αν Χρειάζεστε Βοήθεια

**Αν το email δεν έρχεται:**
1. Ελέγξτε το spam folder
2. Ελέγξτε ότι το email είναι verified στο Account
3. Ελέγξτε ότι το Email action είναι Enabled στο Workflow
4. Ελέγξτε το browser console για errors (F12)

**Αν το form δεν υποβάλλεται:**
1. Ελέγξτε ότι το Form ID είναι σωστό στο shop.js
2. Ελέγξτε το browser console (F12) για "Formspree response:"
3. Ελέγξτε το Network tab για το request

---

## 📝 Σημειώσεις

- **Free tier:** 50 submissions/μήνα
- **Linked emails:** Μέχρι 2 emails στο free plan
- **Form ID:** Μοναδικό για κάθε form, δεν αλλάζει

