const revealElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
const motionSections = document.querySelectorAll<HTMLElement>('main > section, .site-footer');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver: IntersectionObserver | undefined;
let activityObserver: IntersectionObserver | undefined;

function configureMotion() {
  revealObserver?.disconnect();
  activityObserver?.disconnect();
  for (const section of motionSections) section.removeAttribute('data-motion-active');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    for (const element of revealElements) element.removeAttribute('data-reveal');
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      revealObserver?.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  for (const element of revealElements) {
    element.setAttribute('data-reveal', '');
    if (!element.classList.contains('is-visible')) revealObserver.observe(element);
  }
  activityObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.toggleAttribute('data-motion-active', entry.isIntersecting);
  });
  for (const section of motionSections) activityObserver.observe(section);
}

// Keep focused controls visible when navigating by keyboard.
document.addEventListener('focusin', (event) => {
  if (!(event.target instanceof Element)) return;
  const container = event.target.closest<HTMLElement>('.reveal-on-scroll');
  container?.classList.add('is-visible');
  if (container) revealObserver?.unobserve(container);
});
reducedMotion.addEventListener('change', configureMotion);
configureMotion();

export {};
