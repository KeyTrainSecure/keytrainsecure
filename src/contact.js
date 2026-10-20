export const CONTACT_EMAIL = 'connect@keytrainsecure.com'

// This public function does not require an API key. Staging previews override
// VITE_CONTACT_ENDPOINT to use the Learning staging project's function.
const ENDPOINT = import.meta.env?.VITE_CONTACT_ENDPOINT ||
  'https://ajptfhjjoobyomodsijq.supabase.co/functions/v1/send-marketing-contact'

export async function submitContact(form) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      source: 'keytrain-website',
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      website: form._honey,
    }),
  })
  const data = await response.json().catch(() => null)
  if (!response.ok || data?.ok !== true) {
    throw new Error(data?.error || 'Could not send your message. Please try again.')
  }
}
