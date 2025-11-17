# Formspree Setup Instructions

## 📧 Ρύθμιση Email Sending για το Contact Form

Το GitHub Pages είναι static hosting, οπότε χρειάζεται εξωτερική υπηρεσία για email sending.

### Βήμα 1: Δημιουργία Formspree Account

1. Πηγαίνετε στο: https://formspree.io
2. Κάντε **Sign Up** (δωρεάν)
3. Επιβεβαιώστε το email σας

### Βήμα 2: Δημιουργία Νέου Form

1. Μετά το login, κάντε κλικ **"New Form"**
2. Δώστε όνομα: "Phasma Calendar Contact Form"
3. Το Formspree θα δημιουργήσει ένα **Form ID** (π.χ. `xvgkqjpn`)
4. **ΑΝΤΙΓΡΑΨΤΕ** το Form ID

### Βήμα 3: Ενημέρωση του shop.js

1. Ανοίξτε το `shop.js` file
2. Βρείτε τη γραμμή:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Αντικαταστήστε το `YOUR_FORM_ID` με το Form ID που πήρατε από το Formspree
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/xvgkqjpn';
   ```

### Βήμα 4: Ρύθμιση Email στο Formspree

1. Στο Formspree dashboard, επιλέξτε το form σας
2. Στο **"Email Notifications"**, προσθέστε:
   - `fasmagr@gmail.com`
3. Κάντε **Save**

### Βήμα 5: Test

1. Ανοίξτε το website
2. Συμπληρώστε τη φόρμα επικοινωνίας
3. Κάντε submit
4. Ελέγξτε το email `fasmagr@gmail.com` για το νέο μήνυμα

## 🔄 Εναλλακτικές Λύσεις

### EmailJS (Εναλλακτική)
- Website: https://www.emailjs.com
- Δωρεάν: 200 emails/μήνα
- Πιο flexible, αλλά πιο πολύπλοκο setup

### Web3Forms (Εναλλακτική)
- Website: https://web3forms.com
- Δωρεάν, unlimited
- Απλό setup με access key

## ⚠️ Σημαντικό

- Το Formspree free tier επιτρέπει **50 submissions/μήνα**
- Αν χρειάζεστε περισσότερα, υπάρχουν paid plans
- Όλα τα emails θα σταλούν στο `fasmagr@gmail.com` (όπως το ρυθμίσατε)

## 🐛 Troubleshooting

**Το form δεν στέλνει emails:**
- Ελέγξτε ότι το Form ID είναι σωστό στο `shop.js`
- Ελέγξτε το browser console για errors
- Ελέγξτε το Formspree dashboard για submission logs

**Παίρνω error "Form not found":**
- Βεβαιωθείτε ότι το Form ID είναι σωστό
- Ελέγξτε ότι το form είναι active στο Formspree

