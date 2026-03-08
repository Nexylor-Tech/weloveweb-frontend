export const submitContactForm = async (data: { name: string; email: string; subject: string; message: string; secretVariable?: string }) => {
  const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
  const envSecret = import.meta.env.VITE_SECRET_VARIABLE;

  if (!scriptUrl) {
    throw new Error("Google Apps Script URL is not defined in environment variables.");
  }

  // Bot prevention check: Ensure the submitted secret variable matches the environment variable
  if (!envSecret || data.secretVariable !== envSecret) {
    throw new Error("something went wrong, try later");
  }

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        secret: data.secretVariable
      }),
      headers: {
        "Content-Type": "application/json"
      },
      // mode: 'no-cors' is often needed to bypass CORS issues when posting to Google Scripts, 
      // but it means response.ok is false and response is opaque.
      // If your script returns proper CORS headers, you can omit this.
      mode: 'no-cors'
    });

    // With 'no-cors', we assume success if no network error occurred.
    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
