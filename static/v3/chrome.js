/* origin: own code, no registry port (disclosure behaviour only; the ported CTA and wordmark live in chrome.css, see its header) */
/* v3 chrome: nav menu closes on Escape and outside click, focus returns to the trigger. Optional; the menu works without it. */
(() => {
  const d = document.querySelector('.site-header details.nav-menu');
  if (!d) return;
  const s = d.querySelector('summary');
  const close = (refocus) => { d.open = false; if (refocus) s.focus(); };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && d.open) close(true); });
  document.addEventListener('click', (e) => {
    if (!d.open || d.contains(e.target)) return;
    close(!e.target.closest('a,button,input,select,textarea,summary,[tabindex]'));
  });
  matchMedia('(min-width: 1101px)').addEventListener('change', (e) => { if (e.matches) d.open = false; });
})();
