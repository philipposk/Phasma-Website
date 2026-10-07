/* Archive page: decade filter + keyboard-friendly lightbox. */
(function () {
  'use strict';
  var items = Array.prototype.slice.call(document.querySelectorAll('.archive-item'));
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      items.forEach(function (it) { it.hidden = !(f === 'all' || it.getAttribute('data-decade') === f); });
    });
  });

  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = document.getElementById('lb-img'), yr = document.getElementById('lb-year');
  var idx = 0;
  function visible() { return items.filter(function (i) { return !i.hidden; }); }
  function show(list, i) {
    idx = (i + list.length) % list.length;
    var it = list[idx];
    img.src = it.getAttribute('data-src'); img.alt = 'Ημερολόγιο ' + it.getAttribute('data-year');
    yr.textContent = it.getAttribute('data-year');
  }
  items.forEach(function (it) {
    it.addEventListener('click', function () { var l = visible(); show(l, l.indexOf(it)); dlg.showModal(); });
  });
  // newer = lower index in the list (descending years)
  document.getElementById('lb-prev').addEventListener('click', function () { var l = visible(); show(l, idx + 1); });
  document.getElementById('lb-next').addEventListener('click', function () { var l = visible(); show(l, idx - 1); });
  document.getElementById('lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    var l = visible();
    if (e.key === 'ArrowLeft') show(l, idx + 1);
    if (e.key === 'ArrowRight') show(l, idx - 1);
  });
})();
