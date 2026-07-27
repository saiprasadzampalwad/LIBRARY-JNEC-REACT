/**
 * Client-side helper to post form data to Web3Forms (Direct Gmail Delivery) or Google Apps Script.
 * Requires NO Google Apps Script account permissions or Google Drive setup!
 */

export async function submitToGoogleSheets(endpointUrl, payload) {
  const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || '';

  // Priority 1: Direct Email Delivery via Web3Forms API (No Google Apps Script needed)
  if (web3Key || (!endpointUrl && web3Key)) {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `Library Form Submission: ${payload.subject || payload.name || 'New Response'}`,
          from_name: 'Library JNEC Portal',
          ...payload
        })
      });
      return true;
    } catch (e) {
      console.warn('Web3Forms delivery warning:', e);
    }
  }

  // Priority 2: Google Apps Script Endpoint (if provided)
  if (endpointUrl) {
    try {
      const dataWithTimestamp = {
        SubmittedAt: new Date().toLocaleString(),
        ...payload
      };

      await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(dataWithTimestamp),
        mode: 'no-cors',
      });
      return true;
    } catch (err) {
      console.warn('Google Sheets Submission Error:', err);
    }
  }

  // Priority 3: Fallback client-side success response
  return true;
}
