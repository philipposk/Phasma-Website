# Fasma Promotion — Visual Style Brief and Change Log

**Purpose:** Hand-off for a cloud session. Captures every change the user (Dimitris, writes in Greek) asked for across the Greek design chats from 2026-09-27 to 2026-10-06, plus notes on the look he is steering toward. The website / landing page work continues once he supplies practical and usage details.

**How to read this file:**
- "User asked" = stated by the user in chat.
- "Claude chose, user accepted" = Claude's decision that the user did not object to. This is weak evidence of taste.
- "Claude chose, no feedback yet" = unvalidated. Do not treat it as the user's style.
- "Observation" = my inference across chats. Verify before relying on it.

---

## 1. Context

- **Brand / client:** Fasma Promotion (with Εκδόσεις Λεβάντη). Product: **«Το Ημερολόγιο του Φαρμακοποιού»**, a personalised wall calendar sold only to pharmacies. The pharmacy's own name sits in a 5 cm header strip. Tagline: «22 Χρόνια Αποκλειστικά στα Φαρμακεία». 2027 edition.
- **Audience:** pharmacists (B2B). They give the calendar to customers.
- **Contact on the flyer:** Τηλ. 2109410131. Contact person on the landing page: Αλεξία Λεβαντή.
- **Language:** all copy is Greek. Font choices must have real Greek glyphs. Most script and calligraphy fonts do not, which has been a recurring constraint.
- **The website:** the only website work so far is one landing page (section 5), built from the printed flyer. The user has given no feedback on it yet.

## 2. Brand palette (sampled from the user's logo and accepted designs)

| Role | Value | Source |
|---|---|---|
| Logo blue (bright cyan) | `#00C5FF` | Sampled from logo at the user's request, used for the flyer banner |
| Logo lime green | `#8CC63F` | Logo, flyer accent strip |
| Logo green | `#1F8B3B` | Logo and flyer headline |
| Flyer light blue | `#1A9AD6` | Flyer sentence 2 |
| Flyer light green | `#5CA626` | Flyer sentence 3 |
| Flyer blue | `#1D4F9E` | Flyer sentence 4 |
| Banner text on cyan | `#0B2A4A` | Dark navy, chosen for legibility |
| Badge outline | `#52C0F0` | Light blue, user approved the look |
| Badge text | `#E30613` | Red |
| Frame outline | `#29B6F6` | "Bright light blue" |
| Frame text | `#009A49` | Green, "like the pharmacy cross" |
| Pale background | `#EAF4FB` | "Very pale blue", user's request |
| Deeper orange | `#DB6A18` | Orange kept on the pale blue background |

Palette in one line: **bright blues + greens, with orange or red as a warm accent, on pale blue or white.**

## 3. Chronological change requests

Each item is quoted or paraphrased from the user's own messages.

### 3.1 Square «22 Χρόνια» graphic (2026-09-27)
Chat: https://claude.ai/chat/07fb9cda-ed97-4d1b-9ac4-123f0a2dc774 · Artifact: https://claude.ai/artifact/UdLvSvgfsDnZy8YikeEoWX
1. Square image with a **cypress-green frame**, **orange calligraphic letters** reading "22 Χρόνια Αποκλειστικά στα Φαρμακεία".
2. Then: **swap to a simple font**, **very pale blue background**, **remove the outer frame**, **keep only the frame between the orange lines** (the double orange border).
   - Result: Commissioner font, `#EAF4FB` background, double thin orange frame at the edge.

### 3.2 Edit of the main promo image (2026-09-27)
Chat: https://claude.ai/chat/d32d13f2-72cb-4f2f-98ec-017198858817
3. Replace the text with: «Το Ημερολόγιο του Φαρμακοποιού» / «Ένα προσωποποιημένο ημερολόγιο με την επωνυμία σας μόνο για εσάς.» / «Ένα δώρο που συνδυάζει την καθημερινή χρησιμότητα με θέματα υγείας και την προβολή του Φαρμακείου σας.»
4. Replace the image on the right with the user's uploaded `fdfdsa.png`.
   - Claude kept the original layout, background `rgb(229,249,237)` (pale mint), text colour, the phone/contact row, and rounded the new image's corners.

### 3.3 Merging two images (2026-09-27)
Chat: 07fb9cda (same as 3.1)
5. Stack «ΕΠΩΝΥΜΙΑ» (pharmacy name header) on top of «ΜΗΝΑΣ» (month page), **same width, no gap, so it looks like one image**.
6. Later: replace the month page with a new image (`ΜΗΝΑΣ_1`), same method.

### 3.4 Landing page request (2026-09-27)
7. User uploaded the printed flyer and asked for a **one-page landing page for upload to a website**, based on the flyer's content. See section 5.

### 3.5 Oval badge «22 Χρόνια Αποκλειστικά στα Φαρμακεία» (2026-10-01)
Chat: https://claude.ai/chat/fb78fbf8-6b8c-431b-8c5e-45a4072c6c82 · Canvas: https://claude.ai/artifact/QqqENBoADS6YLd2YSdFECG
8. Oval spot in **intense blue** with the text inside.
9. Then: **only the oval outline in a lighter blue**, **drawn by hand**, **red letters**, **remove the line under "22 Χρόνια"**. The user replied «πολύ ωραίο» ("very nice").
10. **Slightly thicker outline** (stroke 11 → 19 px), **try another font**, **make the whole badge smaller** (900×560 → 600×374). Claude set Comfortaa as default; Ubuntu, Fira Sans and Commissioner are alternatives.
11. **Shrink only "22 Χρόνια" a little** (~17%, 118→98 px for the number, 50→42 px for the word).
12. **Write "2027" in red in all the Greek-capable font variants**, giving a comparison sheet of 33 Google Fonts grouped as sans, serif and decorative/mono. Artboard `Specimen2027.dc.html`. The user wants to pick a typeface for the year.
13. **Remove the grey background from two sketch images**, keeping only the line-art layer (transparent PNG). Detail: background `rgb(222,222,222)`. Enclosed grey pockets between elements were removed. Real shading inside drawings (the mouse) was kept.
14. **Put the sentence «Το ημερολόγιο του Φαρμακοποιού» in a square frame**, **outline only, bright light blue**, **letters green**. Claude made a 520×520 frame, text on three lines with a smaller «του» in the middle, Comfortaa.
15. **Rounded corners** on both the straight frame and the hand-drawn variant.

### 3.6 QR code image (2026-10-01)
Chat: https://claude.ai/chat/5ba466a1-29e3-4307-9885-ba2c4bd89f6e
16. Remove the thick black frame, leave a **very thin black frame** around the square QR code, write **"Scan me!"** in black, centred below.
17. Thicker outline (4 → 10 px), then **double again** (→ 20 px) and **round the corners**.
18. **Make the outline green** (`#1E8C3C`). The "Scan me!" text stays black.

### 3.7 A4 flyer for pharmacists (2026-10-01)
Chat: https://claude.ai/chat/705d38ac-a99a-4901-83ac-835d171159db · Artifact: https://claude.ai/artifact/KwDie98rchB79w5F6GLe4p
19. One-page promo flyer. Four sentences in this order and colours:
    1. «Είστε Φαρμακοποιός;» — **green**
    2. «Θέλετε να δημιουργήσετε σχέση εμπιστοσύνης με τους πελάτες σας και να τους ευχαριστήσετε;» — **light blue**
    3. «Για εσάς, αποκλειστικά για το Φαρμακείο σας, θα βρείτε την κατάλληλη επιλογή ενός χρήσιμου δώρου.» — **light green**
    4. «Με μία μόνο κίνηση σκανάρετε το QR code για να ανακαλύψετε τι κρύβεται πίσω από αυτό.» — **blue**
    - **Left half:** the uploaded QR image. **Right half:** «Προβάλλετε έξυπνα την επιχείρησή σας.» in **calligraphic letters**.
    - **Bottom banner:** uploaded logo on the left, «Τηλ. 2109410131» on the right.
20. **Take the banner's blue from the logo.** Result `#00C5FF`. Phone text and icon changed to dark navy for legibility.
21. **Enlarge the letters of the next paragraph and leave one more gap before it.** The user first said "third sentence", then corrected: he meant the **fourth** sentence («Με μία μόνο κίνηση…»). It went from 23 to 29 px with 28 px extra space above. The third sentence was reverted.
22. **Make another version of your own, without changing the words or elements.** Claude added `Alt.dc.html` beside the original: left-aligned larger two-line headline, concentric arcs in the top-right corner echoing the logo, boxed QR area with soft background, pill-shaped phone badge. **No user reaction recorded yet.**

### 3.8 Recolour a screenshot (2026-10-06)
Chat: https://claude.ai/chat/5df19f73-b672-49f8-a41e-07f8d39091be
23. **Replace the blue letters with green.** Result `#127A3A`. The yellow underline and accents stayed. Anti-aliased edges were preserved.

### 3.9 Pharmacy print ads (2026-10-06) — print jobs, not the website
Chat: https://claude.ai/chat/527adf02-7b3c-4384-b6ad-242ec6f82089
24. In the oval spot of several pharmacy ad files (ΤΣΑΝΑΚΑΣ, ΚΑΡΕΛΗΣ, ΑΛΕΤΡΑΣ, ΔΕΔΕΣ, ΚΑΤΣΑΝΔΡΗΣ, ΦΩΤΙΔΟΥ, ΧΥΔΗΡΟΓΛΟΥ): change numbers (22→23, 52→53), enlarge elements by 75 % keeping them centred, remove a line of opening-hours text, and recolour all black text and graphics to **Pantone 3305 C green**, leaving logos, publisher credits and crop marks untouched.
25. Standing instruction in all of these: **"ΧΩΡΙΣ ΝΑ ΠΕΙΡΑΞΕΙΣ ΤΙΠΟΤΑ ΑΛΛΟ"** ("don't touch anything else"). Edits were verified by pixel diff against the original.

## 4. Style notes — what the user is trying to achieve

### Stated directly
- **Colour first, always.** The user names exact colours per element (sentence 1 green, sentence 2 light blue, etc.) and ties them to the logo, not to abstract preferences.
- **Simple, readable type.** When given a calligraphic first draft, he asked for a **simple font**. The one place he asked for calligraphy was the flyer's right-side slogan.
- **Hand-drawn outlines** on badges and frames, with **light bright blue** strokes, **no fill**, **red or green letters**. He called the hand-drawn oval «πολύ ωραίο». He then asked for a thicker stroke.
- **Rounded corners** on frames (asked for on the QR frame and on both frame variants).
- **Outline-only shapes.** Frames and badges are never filled. Only the border carries colour.
- **Clean light backgrounds:** very pale blue or white. The dark cypress-green background was dropped at the first revision.
- **Bigger text and more air** around the call-to-action sentence on the flyer.
- **Smaller badge, shrink only the headline words**, not the whole badge, when asked for more subtlety.
- **Wants to choose between options.** He asked for a 33-font specimen and an alternate flyer version "of your own", so offering 2–3 variants side by side suits him.

### Observations (verify)
- **A drift toward green:** QR border blue→green, screenshot text blue→green, print ads recoloured to Pantone 3305 C, frame text green, flyer headline green. Green may be the lead brand colour with blue as the secondary.
- **Brand sampling over invention:** he prefers values pulled from the logo (`#00C5FF`) over Claude's guessed palette.
- **Surgical edits:** he reacts to anything extra. In the print jobs he insists nothing else changes. Don't restyle things he didn't ask about.
- **Corrections are specific:** when Claude changed the wrong sentence he said which one he meant. Ask or confirm which element when a request is ambiguous.
- **Casual typing:** requests come in ALL CAPS with typos and no punctuation. Read intent, not spelling. Even so, the Greek on finished designs must be spelt and accented correctly.

### Claude's choices on the landing page — NOT yet reviewed by the user
- Alegreya italic headings (blue-ink `#2F4799`), Commissioner body, paper background `#F2F7FA`, green `#13803A` buttons, orange `#D9661A` seal.
- Soft pastel gradient blobs in the hero (blue, orange, green, pink).
- A rotated cover image with shadow and a round «22 χρόνια» seal.
- A 12-month theme grid styled like a calendar page.

## 5. Landing page — current state

- **File (from the old session, may not be accessible):** `imerologio-farmakopoiou-landing.html`. A single self-contained HTML file with all images embedded as base64. Responsive for mobile, tablet and desktop.
- **Built from:** `e-entypo_ΗΜΕΡΟΛΟΓΙΟ_ΤΟΥ_ΦΑΡΜΑΚΟΠΟΙΟΥ.png` (the printed flyer).
- **Sections, in order:**
  1. Top bar with logo and phone.
  2. Hero: title «Το Ημερολόγιο του Φαρμακοποιού 2027», cover image, «22 χρόνια» seal, buttons to call or request a sample.
  3. «Γιατί να το επιλέξετε»: six benefits (only your pharmacy is promoted, one per family, in every home all year, no other ads, economical, barcode control).
  4. «Πώς είναι το ημερολόγιο»: April and October pages plus specs (24 × 20 cm month page, 5 cm header for the pharmacy name, name days and holidays, Greek product).
  5. «Τα θέματα του 2027»: 12 months in a calendar-like grid.
  6. Contact: Αλεξία Λεβαντή, phone `210 9410131`, emails `fasma.promo@gmail.com` and `al.levanti@gmail.com`.
  7. Footer.
- **Open items Claude flagged:**
  - Confirm the month-to-theme mapping (only Feb, Apr and Oct were verifiable from the images).
  - The sample pages show a real pharmacy's details (Αναστασίου Φίλιππου). Get consent or use a neutral example name.
  - Spelling: «Περιοδοντίτιδα» (corrected from the flyer's «Περιδοντίτιδα»).
- **No user feedback on the landing page yet.** Everything above is a first draft.

## 6. Open questions to resolve with the user

1. **22 or 23?** Everything for the 2027 site says «22 χρόνια». The user changed numbers 22→23 in print ads on 2026-10-06 (reason unclear: Fasma's years, or each pharmacy's own anniversary?). Confirm which number the website should show.
2. **Which badge, frame and font won?** Comfortaa is the current default; the 33-font 2027 specimen was meant for him to pick from. No choice recorded.
3. **Which flyer version** (`Main` or `Alt`) does he prefer, and should the website follow it?
4. **Calligraphic slogan font:** Alegreya Italic is a stand-in because most script fonts lack Greek. Does he want it kept?
5. **Lead brand colour:** green or cyan? (See the observation about green.)
6. **Practical and usage details** about the site (goal, audience, how orders happen, hosting, domain) are what the user said is coming next.

## 7. Working rules for the next session

- Change only what is asked. Verify unchanged areas by diff when editing existing files.
- Write all Greek copy exactly as given by the user. Do not rephrase.
- Use Greek-capable fonts only. Check coverage (e.g. via `@fontsource/<name>` Greek subsets) before proposing a font.
- Sample brand colours from the uploaded logo instead of guessing.
- Offer a small number of clear variants when taste is the question.
