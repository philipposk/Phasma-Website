# Formspree Setup Instructions

## 📧 Ρύθμιση Email Sending για το Contact Form

Το GitHub Pages είναι static hosting, οπότε χρειάζεται εξωτερική υπηρεσία για email sending.

### Βήμα 1: Δημιουργία Formspree Account

1. Πηγαίνετε στο: https://formspree.io
2. Κάντε **Sign Up** (δωρεάν)
3. Επιβεβαιώστε το email σας

### ✅ Ρύθμιση Ολοκληρώθηκε

**Form ID:** `xvgdnyoe`  
**Form URL:** https://formspree.io/f/xvgdnyoe

**Test Email (προσωρινά):** `dimeanastasiou@gmail.com`  
**Production Email (μετά το test):** `fasma.promo@gmail.com`

### Βήμα 4: Ρύθμιση Email στο Formspree

1. Στο Formspree dashboard, επιλέξτε το form `xvgdnyoe`
2. Στο **"Email Notifications"**, προσθέστε:
   - `dimeanastasiou@gmail.com` (για test)
   - `fasma.promo@gmail.com` (για production)
3. Κάντε **Save**

### Βήμα 5: Test

1. Ανοίξτε το website
2. Συμπληρώστε τη φόρμα επικοινωνίας
3. Κάντε submit
4. Ελέγξτε το email `dimeanastasiou@gmail.com` για το νέο μήνυμα
5. Μετά το test, αλλάξτε το email στο Formspree dashboard σε `fasma.promo@gmail.com`

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
- **Test:** Emails θα σταλούν στο `dimeanastasiou@gmail.com`
- **Production:** Μετά το test, αλλάξτε σε `fasma.promo@gmail.com` στο Formspree dashboard

## 🐛 Troubleshooting

**Το form δεν στέλνει emails:**
- Ελέγξτε ότι το Form ID είναι σωστό στο `shop.js`
- Ελέγξτε το browser console για errors
- Ελέγξτε το Formspree dashboard για submission logs

**Παίρνω error "Form not found":**
- Βεβαιωθείτε ότι το Form ID είναι σωστό
- Ελέγξτε ότι το form είναι active στο Formspree

