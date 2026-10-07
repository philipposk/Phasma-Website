/* Global behaviour: mobile nav, scroll progress, reveal-on-scroll, back-to-top, copy buttons. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Mobile navigation
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Μενού');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setNav(false); toggle.focus(); } });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target) && !toggle.contains(e.target)) setNav(false); });
    window.matchMedia('(min-width: 960px)').addEventListener('change', function (m) { if (m.matches) setNav(false); });
  }

  // Scroll progress + back to top
  var bar = document.getElementById('progress');
  var top = document.getElementById('to-top');
  var ticking = false;
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var y = window.scrollY;
    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (top) top.hidden = y < 500;
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Copy-to-clipboard buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () { var old = btn.textContent; btn.textContent = 'Αντιγράφηκε!'; setTimeout(function () { btn.textContent = old; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });
})();
