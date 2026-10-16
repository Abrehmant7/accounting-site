// Runs before the page renders; stays external for the production CSP.
(() => {
  const storageKey = 'finance-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* Storage can be unavailable in private or restricted browsers. */ }

  const applyTheme = () => {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0E131F' : '#FFFFFF');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-checked', String(theme === 'dark'));
      button.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      button.hidden = false;
    });
  };

  applyTheme();
  document.addEventListener('DOMContentLoaded', applyTheme, { once: true });
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element) || !event.target.closest('[data-theme-toggle]')) return;
    preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(storageKey, preference); } catch { /* Keep the choice for this page. */ }
    applyTheme();
  });
  systemTheme.addEventListener('change', () => { if (!preference) applyTheme(); });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    applyTheme();
  });
})();
