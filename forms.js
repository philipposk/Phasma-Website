/* Shared form handling (Formspree). Works for any <form data-form="…">. */
(function () {
  'use strict';
  var ENDPOINT = 'https://formspree.io/f/xvgdnyoe';
  var PHONE = '210 9410331';

  function normPhone(v) { return v.replace(/[\s\-().]/g, '').replace(/^(\+30|0030)/, ''); }
  function validPhone(v) { return /^[0-9]{10}$/.test(normPhone(v)); }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  document.querySelectorAll('form[data-form]').forEach(function (form) {
    var msg = form.querySelector('.form-msg');
    var btn = form.querySelector('button[type="submit"]');
    var kind = form.getAttribute('data-form');

    function say(text, type) { msg.textContent = text; msg.className = 'form-msg ' + type; msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    function flag(el, bad) { if (el) { if (bad) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid'); } }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.className = 'form-msg';
      var f = form.elements;
      var name = f.name.value.trim(), phone = f.phone.value.trim(), email = f.email.value.trim();
      [f.name, f.phone, f.email, f.comments].forEach(function (el) { flag(el, false); });

      if (!name) { flag(f.name, true); say('Παρακαλώ συμπληρώστε το όνομά σας.', 'err'); f.name.focus(); return; }
      if (!phone && !email) { flag(f.phone, true); flag(f.email, true); say('Συμπληρώστε τουλάχιστον ένα από τα δύο: τηλέφωνο ή email.', 'err'); f.phone.focus(); return; }
      if (email && !validEmail(email)) { flag(f.email, true); say('Παρακαλώ εισάγετε έγκυρο email.', 'err'); f.email.focus(); return; }
      if (phone && !validPhone(phone)) { flag(f.phone, true); say('Παρακαλώ εισάγετε έγκυρο τηλέφωνο (10 ψηφία).', 'err'); f.phone.focus(); return; }
      if (f.comments && f.comments.required && !f.comments.value.trim()) { flag(f.comments, true); say('Παρακαλώ γράψτε το μήνυμά σας.', 'err'); f.comments.focus(); return; }
      if (!f.consent.checked) { say('Για να συνεχίσετε, αποδεχθείτε την Πολιτική Απορρήτου.', 'err'); f.consent.focus(); return; }
      if (f._gotcha && f._gotcha.value) { return; } // honeypot: silently drop bots

      var body = {
        _subject: kind === 'order' ? 'Νέα παραγγελία — Ημερολόγιο Φαρμακοποιού 2027' : 'Νέο μήνυμα — Ημερολόγιο Φαρμακοποιού',
        name: name, phone: phone || 'Δεν δόθηκε', email: email || 'Δεν δόθηκε',
        comments: (f.comments && f.comments.value.trim()) || 'Δεν υπάρχουν σχόλια'
      };
      if (email) body._replyto = email;
      if (kind === 'order' && window.PhasmaOrder) {
        var s = window.PhasmaOrder.summary();
        body.product = s.product; body.quantity = s.quantity; body.estimate = s.estimate;
      }

      var label = btn.textContent;
      btn.disabled = true; btn.textContent = 'Αποστολή…';
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(body) })
        .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
        .then(function () { say('Το αίτημά σας στάλθηκε! Θα επικοινωνήσουμε μαζί σας το συντομότερο.', 'ok'); form.reset(); if (window.PhasmaOrder) window.PhasmaOrder.refresh(); })
        .catch(function () { say('Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή καλέστε μας στο ' + PHONE + '.', 'err'); })
        .then(function () { btn.disabled = false; btn.textContent = label; });
    });
  });
})();
