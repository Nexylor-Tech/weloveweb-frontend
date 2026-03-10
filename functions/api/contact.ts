export async function onRequestPost(context: any) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const token = body['cf-turnstile-response'];
    const ip = request.headers.get("CF-Connecting-IP") || "";

    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Turnstile token missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const formData = new FormData();
    formData.append("secret", env.TURNSTILE_SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", ip);

    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: formData,
        method: "POST",
      }
    );

    const outcome = await result.json() as any;

    if (!outcome.success) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid Turnstile token' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const scriptUrl = env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return new Response(JSON.stringify({ success: false, error: 'Google Apps Script URL is not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Forward only the allowed fields to Google Apps Script
    const payload = {
      name: body.name,
      email: body.email,
      number: body.number,
      subject: body.subject,
      message: body.message
    };

    const appsScriptResponse = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
