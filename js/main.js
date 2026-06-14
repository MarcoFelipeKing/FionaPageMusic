/* ============================================
   Fiona Page Music — main.js v5
   ============================================ */
'use strict';

/* --- Footer year --- */
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}());

/* --- Navbar scroll shadow --- */
(function () {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}());

/* --- Mobile hamburger --- */
(function () {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('nav-menu');
  var nav  = document.getElementById('navbar');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}());

/* --- Active nav link on scroll --- */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.getAttribute('id');
      links.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    });
  }, { threshold: 0.35 });

  sections.forEach(function (s) { obs.observe(s); });
}());

/* --- Scroll reveal with stagger --- */
(function () {
  var items = document.querySelectorAll(
    '.service-card, .fee-card, .testimonial-card, .credentials, ' +
    '.pull-quote, .location-note, .about-photo-wrap'
  );

  // Stagger cards within grids
  ['.services-grid', '.fees-grid', '.testimonials-grid'].forEach(function (sel) {
    var grid = document.querySelector(sel);
    if (!grid) return;
    Array.from(grid.children).forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  items.forEach(function (el) { el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  items.forEach(function (el) { obs.observe(el); });
}());

