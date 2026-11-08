/* ============================================
   GTA6Storage.co.uk — Main JS
   ============================================ */

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const siteNav   = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !siteNav.contains(e.target)) {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.site-nav a[href^="#"]');
if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

// --- Countdown timer ---
function updateCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  // Midnight 19 Nov 2026 Europe/London (GMT in November = UTC+0)
  const launch = new Date('2026-11-19T00:00:00+00:00');
  const diff   = launch - Date.now();
  if (diff <= 0) { el.textContent = 'OUT NOW'; return; }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);
  el.textContent = `${d}d ${h}h ${m}m ${s}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
// Safety net: re-run once DOM is fully ready in case element wasn't available yet
window.addEventListener('DOMContentLoaded', updateCountdown);

// --- Affiliate link click tracking (console log only — swap for GA/analytics) ---
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product-card')?.querySelector('.product-name')?.textContent || 'unknown';
    console.log('[Affiliate] Click:', product);
    // TODO: replace with GA4: gtag('event', 'affiliate_click', { product_name: product });
  });
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
