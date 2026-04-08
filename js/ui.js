/* =====================================================
   Èlia & Adrián — Wedding Website
   ui.js  ·  Scroll animations, mobile nav, active nav,
             FAQ accordion, timeline equalizer
   ===================================================== */

'use strict';

/* ── Fade-in on scroll ────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── Mobile navigation overlay ───────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('nav-overlay');

  if (!hamburger || !overlay) return;

  function openNav() {
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    document.body.classList.contains('nav-open') ? closeNav() : openNav();
  });

  overlay.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

/* ── Active nav underline on scroll ──────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── FAQ accordion ────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Collapse all
      document.querySelectorAll('.faq-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').classList.remove('is-open');
      });

      // Expand the clicked one if it was closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.closest('.faq-item').classList.add('is-open');
      }
    });
  });
}

/* ── Horizontal timeline slot equalizer ──────────── */
/**
 * Sets all top and bottom label slots to the same height so
 * the connector dots stay perfectly aligned on the centre line.
 */
function equalizeTimelineSlots() {
  if (window.innerWidth <= 600) return;

  const tops    = document.querySelectorAll('.timeline-h-top');
  const bottoms = document.querySelectorAll('.timeline-h-bottom');

  // Reset first so we measure natural height
  tops.forEach(el    => el.style.height = '');
  bottoms.forEach(el => el.style.height = '');

  const maxTop    = Math.max(...[...tops].map(el => el.offsetHeight));
  const maxBottom = Math.max(...[...bottoms].map(el => el.offsetHeight));

  tops.forEach(el    => el.style.height = maxTop    + 'px');
  bottoms.forEach(el => el.style.height = maxBottom + 'px');
}
