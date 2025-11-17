# Troubleshooting GitHub Pages

## 🔍 Έλεγχος Προβλημάτων

### 1. Ελέγξτε το GitHub Pages Status

Πηγαίνετε στο: https://github.com/philipposk/Phasma-Website/settings/pages

**Πρέπει να βλέπετε:**
- ✅ Source: Branch `main`, Folder `/ (root)`
- ✅ Custom domain: `phasma.6x7.gr` (αν το έχετε προσθέσει)
- ✅ "Your site is live at..." message

### 2. Ελέγξτε το Actions Tab

Πηγαίνετε στο: https://github.com/philipposk/Phasma-Website/actions

- Αν υπάρχουν failed workflows, δείτε τα errors
- Αν δεν υπάρχουν workflows, το GitHub Pages μπορεί να μην είναι ενεργοποιημένο

### 3. Ελέγξτε το Repository Visibility

Το GitHub Pages λειτουργεί μόνο με:
- ✅ Public repositories (δωρεάν)
- ✅ Private repositories (μόνο με GitHub Pro/Team)

### 4. Ελέγξτε τα Αρχεία

Βεβαιωθείτε ότι υπάρχουν:
- ✅ `index.html` στο root
- ✅ `CNAME` file (με μόνο `phasma.6x7.gr` μέσα)
- ✅ `.nojekyll` file (κενό)

### 5. Ελέγξτε το DNS

Για το custom domain:
- Ελέγξτε με: https://dnschecker.org/#CNAME/phasma.6x7.gr
- Πρέπει να δείχνει σε: `philipposk.github.io`

## 🛠️ Λύσεις Συχνών Προβλημάτων

### Problem: "Page build failed"
**Solution:** 
- Ελέγξτε το Actions tab για errors
- Βεβαιωθείτε ότι όλα τα αρχεία είναι valid HTML/CSS/JS

### Problem: "404 Not Found"
**Solution:**
- Περιμένετε 5-10 λεπτά μετά το push
- Ελέγξτε ότι το branch είναι `main`
- Ελέγξτε ότι το `index.html` είναι στο root

### Problem: Custom domain δεν λειτουργεί
**Solution:**
- Ελέγξτε το DNS με dnschecker.org
- Περιμένετε 24-48 ώρες για propagation
- Βεβαιωθείτε ότι το CNAME στο DNS δείχνει σε `philipposk.github.io`

### Problem: HTTPS error
**Solution:**
- Περιμένετε 1-2 ώρες μετά το DNS setup
- Ενεργοποιήστε το "Enforce HTTPS" στο GitHub Pages settings

## 📞 Quick Checks

1. Repository είναι public? → Settings → scroll down → "Change visibility"
2. GitHub Pages enabled? → Settings → Pages → Source set to `main`?
3. Files committed? → Check repository files online
4. DNS correct? → Use dnschecker.org

