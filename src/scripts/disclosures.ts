// Native <details> provides keyboard interaction and expanded state without a framework.
const disclosures = [...document.querySelectorAll<HTMLDetailsElement>('[data-disclosure]')];

for (const details of disclosures) {
  details.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { details.open = false; }));
}

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Node)) return;
  for (const details of disclosures) {
    if (details.open && !details.contains(event.target)) details.open = false;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  for (const details of disclosures) {
    if (!details.open) continue;
    const hadFocus = details.contains(document.activeElement);
    details.open = false;
    if (hadFocus) details.querySelector('summary')?.focus();
  }
});
