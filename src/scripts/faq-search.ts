const search = document.querySelector<HTMLInputElement>('[data-faq-search]');
const clear = document.querySelector<HTMLButtonElement>('[data-faq-clear]');
const resultStatus = document.querySelector<HTMLElement>('[data-faq-status]');
const empty = document.querySelector<HTMLElement>('[data-faq-empty]');
const groups = [...document.querySelectorAll<HTMLElement>('[data-faq-group]')];
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

if (search && clear && resultStatus && empty) {
  const controls = document.querySelector<HTMLElement>('[data-faq-controls]');
  if (controls) controls.hidden = false;
  const updateResults = () => {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    for (const group of groups) {
      let matches = 0;
      for (const question of group.querySelectorAll<HTMLDetailsElement>('details')) {
        const content = normalize(question.textContent ?? '');
        const visible = words.every(word => content.includes(word));
        question.hidden = !visible;
        if (!visible) question.open = false;
        if (visible) matches++;
      }
      group.hidden = matches === 0;
      const category = document.querySelector<HTMLAnchorElement>(`[data-faq-category="${group.id}"]`);
      if (category) category.hidden = matches === 0;
      count += matches;
    }
    clear.hidden = words.length === 0;
    empty.hidden = count !== 0;
    resultStatus.textContent = words.length ? `${count} ${count === 1 ? 'answer' : 'answers'} found` : `${count} questions, a clearer starting point.`;
  };
  search.addEventListener('input', updateResults);
  clear.addEventListener('click', () => { search.value = ''; updateResults(); search.focus(); });
  updateResults();
}

function openLinkedQuestion(hash = window.location.hash) {
  let id: string;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) {
    if (target.hidden && search) {
      search.value = '';
      search.dispatchEvent(new Event('input'));
    }
    target.open = true;
  }
}
openLinkedQuestion();
window.addEventListener('hashchange', () => openLinkedQuestion());
// Reveal filtered answers before the browser follows a direct question link.
document.addEventListener('click', event => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link) return;
  const url = new URL(link.href);
  if (url.origin === window.location.origin && url.pathname === window.location.pathname) openLinkedQuestion(url.hash);
});
export {};
