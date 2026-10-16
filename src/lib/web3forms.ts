export interface ContactFields {
  name: string;
  email: string;
  message: string;
  company?: string;
  service?: string;
  botcheck?: boolean;
}

export interface SubmissionResult {
  success: true;
  message: string;
}

// Import only on pages that use the enquiry form.
// The Web3Forms access key is a public identifier, never a private API secret.
export async function submitContactForm(
  fields: ContactFields,
  signal?: AbortSignal,
): Promise<SubmissionResult> {
  const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) throw new Error('The contact form is not configured yet. Please try another contact method.');
  if (fields.botcheck) throw new Error('Unable to submit this request.');
  if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
    throw new Error('Please complete your name, email, and message.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    throw new Error('Please enter a valid email address.');
  }

  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) controller.abort();
  signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(abort, 15_000);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'New finance & accounting consultation',
        from_name: 'Website consultation',
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: fields.message.trim(),
        ...(fields.company?.trim() ? { company: fields.company.trim() } : {}),
        ...(fields.service?.trim() ? { service: fields.service.trim() } : {}),
        botcheck: false,
      }),
      signal: controller.signal,
    });

    if (response.status === 429) throw new Error('Too many requests. Please wait a little before trying again.');
    const result: unknown = await response.json();
    if (!response.ok || typeof result !== 'object' || result === null || !('success' in result) || result.success !== true) {
      throw new Error('Your message could not be sent. Please try again or use another contact method.');
    }
    return { success: true, message: 'Thank you. Your message has been sent.' };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(signal?.aborted ? 'Submission cancelled.' : 'The request timed out. Please try again.');
    }
    if (error instanceof TypeError || error instanceof SyntaxError) {
      throw new Error('Unable to connect. Please check your connection and try again.');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
  }
}
