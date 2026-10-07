/* Interactive sample calendar page for the home page (2027, Greek holidays computed, not hard-coded). */
(function () {
  'use strict';
  var YEAR = 2027;
  var MONTHS = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
  var DOW = ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ'];

  // Orthodox Easter (Meeus Julian algorithm, +13 days for 1900-2099)
  function easter(y) {
    var a = y % 4, b = y % 7, c = y % 19, d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7;
    var m = Math.floor((d + e + 114) / 31), day = ((d + e + 114) % 31) + 1;
    return new Date(Date.UTC(y, m - 1, day + 13));
  }
  function holidays(y) {
    var map = {};
    function add(m, d, name) { map[m + '-' + d] = name; }
    add(0, 1, 'Πρωτοχρονιά'); add(0, 6, 'Θεοφάνεια'); add(2, 25, 'Ευαγγελισμός'); add(4, 1, 'Πρωτομαγιά');
    add(7, 15, 'Κοίμηση Θεοτόκου'); add(9, 28, 'Εθνική Επέτειος'); add(11, 25, 'Χριστούγεννα'); add(11, 26, 'Σύναξη Θεοτόκου');
    var e = easter(y);
    function rel(days, name) { var d = new Date(e.getTime() + days * 86400000); add(d.getUTCMonth(), d.getUTCDate(), name); }
    rel(-48, 'Καθαρά Δευτέρα'); rel(-2, 'Μεγ. Παρασκευή'); rel(0, 'Πάσχα'); rel(1, 'Δευτ. Πάσχα'); rel(50, 'Αγ. Πνεύματος');
    return map;
  }
  var HOL = holidays(YEAR);

  var grid = document.getElementById('cal-grid');
  if (!grid) return;
  var title = document.getElementById('cal-title');
  var foot = document.getElementById('cal-foot');
  var month = 0;

  function render() {
    grid.textContent = '';
    DOW.forEach(function (d) { var el = document.createElement('div'); el.className = 'cal-dow'; el.textContent = d; grid.appendChild(el); });
    var first = new Date(Date.UTC(YEAR, month, 1));
    var offset = (first.getUTCDay() + 6) % 7; // Monday first
    var days = new Date(Date.UTC(YEAR, month + 1, 0)).getUTCDate();
    for (var i = 0; i < offset; i++) grid.appendChild(document.createElement('div'));
    var list = [];
    for (var d = 1; d <= days; d++) {
      var el = document.createElement('div');
      var dow = (offset + d - 1) % 7;
      el.className = 'cal-day' + (dow === 6 ? ' sun' : '');
      el.textContent = d;
      var h = HOL[month + '-' + d];
      if (h) { el.classList.add('hol'); el.setAttribute('data-hol', h); list.push(d + ' ' + h); }
      grid.appendChild(el);
    }
    var total = offset + days;
    for (var k = 0; k < (7 - (total % 7)) % 7; k++) grid.appendChild(document.createElement('div'));
    title.textContent = MONTHS[month] + ' ' + YEAR;
    foot.textContent = list.length ? 'Αργίες: ' + list.join(' · ') : 'Εδώ εμφανίζονται ονομαστικές εορτές και θέματα υγείας.';
  }
  document.getElementById('cal-prev').addEventListener('click', function () { month = (month + 11) % 12; render(); });
  document.getElementById('cal-next').addEventListener('click', function () { month = (month + 1) % 12; render(); });

  // Live pharmacy name
  var input = document.getElementById('cal-input');
  var nameEl = document.getElementById('cal-name');
  input.addEventListener('input', function () {
    var v = input.value.trim();
    nameEl.textContent = '';
    nameEl.appendChild(document.createTextNode(v || 'Φαρμακείο'));
    var sub = document.createElement('span'); sub.className = 'cal-sub'; sub.textContent = v ? 'Φαρμακείο' : 'Η επωνυμία σας εδώ';
    nameEl.appendChild(sub);
  });
  render();
})();
