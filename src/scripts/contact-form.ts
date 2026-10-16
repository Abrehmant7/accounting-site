import { submitContactForm } from '@/lib/web3forms';
import { services } from '@/config/site';

const requestedService = new URLSearchParams(window.location.search).get('service');
const selection = services.find(service => service.href === `/services/${requestedService}/`);

for (const form of document.querySelectorAll<HTMLFormElement>('[data-contact-form]')) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = form.querySelector<HTMLElement>('[data-submit-label]');
  const status = form.querySelector<HTMLElement>('[data-enquiry-status]');
  const serviceSelect = form.querySelector<HTMLSelectElement>('[name="service"]');
  if (selection && serviceSelect) {
    for (const option of serviceSelect.options) option.defaultSelected = option.value === selection.label;
    serviceSelect.value = selection.label;
  }
  if (!button || !label || !status) continue;
  const configured = form.dataset.configured === 'true';
  button.disabled = !configured;
  let pending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!configured || pending || !form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '');
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = 'Sending your enquiry…';
    status.textContent = '';
    delete status.dataset.state;
    try {
      const result = await submitContactForm({ name: value('name'), email: value('email'), company: value('company'), service: value('service'), message: value('message'), botcheck: data.has('botcheck') });
      status.textContent = result.message;
      status.dataset.state = 'success';
      form.reset();
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : 'Your enquiry could not be sent. Please try again.';
      status.dataset.state = 'error';
    } finally {
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
      label.textContent = 'Send your enquiry';
    }
  });
}
