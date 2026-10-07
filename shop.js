/* Order page: product picker + live price estimate. */
(function () {
  'use strict';
  var PRODUCTS = {
    calendar: { name: 'Ημερολόγιο 2027', price: 1.90, min: 50, step: 10 },
    agenda:   { name: 'Ατζέντα (ΚΩΔ. 1)', price: 0.98, min: 200, step: 50 },
    magnet:   { name: 'Μαγνητάκι (ΚΩΔ. 2)', price: 0.98, min: 1000, step: 100 }
  };
  var VAT = 0.24; // indicative standard Greek VAT rate

  var sel = document.getElementById('product');
  var qty = document.getElementById('quantity');
  if (!sel || !qty) return;
  var warn = document.getElementById('qty-warn');
  var fmt = new Intl.NumberFormat('el-GR', { style: 'currency', currency: 'EUR' });
  function $(id) { return document.getElementById(id); }
  var last = sel.value;

  function current() {
    var p = PRODUCTS[sel.value];
    var q = parseInt(qty.value, 10);
    return { p: p, q: isNaN(q) ? 0 : q };
  }
  function refresh() {
    var c = current(), net = c.q * c.p.price, ok = c.q >= c.p.min;
    qty.step = c.p.step; qty.min = c.p.min;
    warn.textContent = ok || !c.q ? '' : 'Η ελάχιστη παραγγελία είναι ' + c.p.min + ' τεμάχια.';
    $('r-product').textContent = c.p.name;
    $('r-unit').textContent = fmt.format(c.p.price);
    $('r-qty').textContent = c.q ? c.q + ' τεμ.' : '—';
    $('r-net').textContent = c.q ? fmt.format(net) : '—';
    $('r-vat').textContent = c.q ? fmt.format(net * VAT) : '—';
    $('r-gross').textContent = c.q ? fmt.format(net * (1 + VAT)) : '—';
    document.querySelectorAll('.pick').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-product') === sel.value)); b.textContent = b.getAttribute('data-product') === sel.value ? '✓ Επιλεγμένο' : 'Επιλογή'; });
  }
  sel.addEventListener('change', function () {
    var prev = PRODUCTS[last], next = PRODUCTS[sel.value], q = parseInt(qty.value, 10);
    if (isNaN(q) || q <= prev.min) qty.value = next.min; else if (q < next.min) qty.value = next.min;
    last = sel.value; refresh();
  });
  qty.addEventListener('input', refresh);
  qty.addEventListener('blur', function () { var c = current(); if (c.q && c.q < c.p.min) { qty.value = c.p.min; } refresh(); });
  $('qty-minus').addEventListener('click', function () { var c = current(); qty.value = Math.max(c.p.min, c.q - c.p.step); refresh(); });
  $('qty-plus').addEventListener('click', function () { var c = current(); qty.value = (c.q || c.p.min) + c.p.step; refresh(); });
  document.querySelectorAll('.pick').forEach(function (b) {
    b.addEventListener('click', function () {
      sel.value = b.getAttribute('data-product'); sel.dispatchEvent(new Event('change'));
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
  });
  // Allow deep links like shop.html?product=agenda&qty=300
  var q = new URLSearchParams(location.search);
  if (PRODUCTS[q.get('product')]) { sel.value = q.get('product'); last = sel.value; qty.value = PRODUCTS[sel.value].min; }
  if (parseInt(q.get('qty'), 10) > 0) qty.value = parseInt(q.get('qty'), 10);

  window.PhasmaOrder = {
    refresh: function () { sel.value = 'calendar'; last = 'calendar'; qty.value = PRODUCTS.calendar.min; refresh(); },
    summary: function () {
      var c = current();
      return { product: c.p.name, quantity: String(c.q), estimate: c.q ? fmt.format(c.q * c.p.price) + ' χωρίς ΦΠΑ (' + fmt.format(c.q * c.p.price * (1 + VAT)) + ' με ΦΠΑ 24%)' : '—' };
    }
  };
  refresh();
})();
