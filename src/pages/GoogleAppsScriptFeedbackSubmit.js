// Client-side helper to submit feedback to a Google Apps Script web app
// NOTE: This uses an API key in the request header.

export async function submitFeedbackToGoogleScript({ endpointUrl, apiKey, payload }) {
  if (!endpointUrl) throw new Error('Missing Google Apps Script endpointUrl');
  if (!apiKey) throw new Error('Missing Google Apps Script apiKey');

  const res = await fetch(endpointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const message = (data && (data.error || data.message)) || `Request failed with status ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.details = data;
    throw err;
  }

  return data;
}

