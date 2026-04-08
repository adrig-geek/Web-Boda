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

/* ── Filmstrip — build from STORY_PHOTOS, then init ─ */
function initFilmstrip() {
  const strip        = document.querySelector('.story-filmstrip');
  const dotsWrap     = document.querySelector('.story-filmstrip-dots');
  const btnPrev      = document.querySelector('.filmstrip-arrow--prev');
  const btnNext      = document.querySelector('.filmstrip-arrow--next');

  if (!strip || typeof STORY_PHOTOS === 'undefined' || !STORY_PHOTOS.length) return;

  /* ── Build figures & dots from content.js array ── */
  STORY_PHOTOS.forEach((src, i) => {
    const fig = document.createElement('figure');
    const img = document.createElement('img');
    img.src     = src;
    img.alt     = 'Èlia & Adrián';
    img.loading = 'eager';
    fig.appendChild(img);
    strip.appendChild(fig);

    if (dotsWrap) {
      const dot = document.createElement('span');
      dot.className = i === 0 ? 'dot is-active' : 'dot';
      dotsWrap.appendChild(dot);
    }
  });

  const figures = [...strip.querySelectorAll('figure')];
  const dots    = dotsWrap ? [...dotsWrap.querySelectorAll('.dot')] : [];
  let current   = 0;
  let autoTimer = null;

  /* ── Navigate to a specific index ──────────────── */
  function goTo(index) {
    current = (index + figures.length) % figures.length;
    figures[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    updateUI();
  }

  function updateUI() {
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    if (btnPrev) btnPrev.disabled = false;
    if (btnNext) btnNext.disabled = false;
  }

  /* ── Arrow clicks ───────────────────────────────── */
  btnPrev?.addEventListener('click', () => { resetAuto(); goTo(current - 1); });
  btnNext?.addEventListener('click', () => { resetAuto(); goTo(current + 1); });

  /* ── Dot clicks ─────────────────────────────────── */
  dots.forEach((dot, i) => dot.addEventListener('click', () => { resetAuto(); goTo(i); }));

  /* ── Sync dots when user swipes manually ────────── */
  strip.addEventListener('scroll', () => {
    const stripMid = strip.scrollLeft + strip.clientWidth / 2;
    let closest = 0, minDist = Infinity;
    figures.forEach((fig, i) => {
      const dist = Math.abs((fig.offsetLeft + fig.offsetWidth / 2) - stripMid);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    current = closest;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }, { passive: true });

  /* ── Auto-rotate every 4 s ──────────────────────── */
  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  /* Pause when the user hovers over the strip */
  strip.addEventListener('mouseenter', () => clearInterval(autoTimer));
  strip.addEventListener('mouseleave', startAuto);

  /* Also pause when the section is out of view */
  const section = strip.closest('section');
  if (section) {
    new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? startAuto() : clearInterval(autoTimer);
    }, { threshold: 0.3 }).observe(section);
  } else {
    startAuto();
  }

  updateUI();
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
