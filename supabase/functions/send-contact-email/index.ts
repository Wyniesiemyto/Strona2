// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeadersBase = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeadersBase });
  }

  // --- LOG: headers for debugging
  try {
    console.log("Request headers:", Object.fromEntries(req.headers.entries()));
  } catch (err) {
    console.log("Failed to log headers:", e);
  }

  const contentType = (req.headers.get("content-type") || "").toLowerCase();

  // --- robust body parsing
  let body: any = {};
  try {
    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const fd = await req.formData();
      fd.forEach((v, k) => {
        if (k === "attachments") {
          if (!body.attachments) body.attachments = [];
          body.attachments.push(String(v));
        } else {
          body[k] = String(v);
        }
      });
      console.log("Parsed formData body:", body);
    } else {
      // read raw text first (always safe)
      const raw = await req.text();
      console.log("Raw body length:", raw ? raw.length : 0);
      // log first ~2000 chars only to avoid huge logs
      console.log("Raw body snippet:", raw ? raw.slice(0, 2000) : "");
      if (raw && raw.trim().length > 0) {
        try {
          body = JSON.parse(raw);
          console.log("Parsed JSON body:", body);
        } catch (err) {
          console.warn("Failed to parse body as JSON:", err);
          // keep raw in body for debugging
          body = { rawBody: raw };
        }
      } else {
        body = {};
      }
    }
  } catch (err) {
    console.error("Error while parsing request body:", err);
    return new Response(JSON.stringify({ error: "Nieprawidłowy format żądania" }), {
      status: 400,
      headers: corsHeadersBase,
    });
  }

  // --- validation
  const name = body.name;
  const phone = body.phone;
  const message = body.message;
  const needsWasteCollection = body.needsWasteCollection || "nie określono";
  const contactHours = body.contactHours || "dowolne";
  const attachments = body.attachments || [];

  console.log("Validating fields:", { name: !!name, phone: !!phone, message: !!message, needsWasteCollection: !!needsWasteCollection, contactHours: !!contactHours });

if (!name || !phone || !message) {
  return new Response(JSON.stringify({ error: "Imię, telefon i wiadomość są wymagane" }), {
    status: 400,
    headers: corsHeadersBase,
  });
}

// I ustaw domyślne wartości:


  // --- dry-run if no API key
  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY missing — DRY RUN. Payload:", { name, phone, message, needsWasteCollection, contactHours, attachments });
    return new Response(JSON.stringify({ success: true, message: "Wiadomość (dry-run)" }), {
      status: 200,
      headers: corsHeadersBase,
    });
  }

try {
  const payload = {
    from: "WyniesiemyTo <onboarding@resend.dev>",
    to: ["wyniesiemyto@gmail.com"],
    subject: `Nowe zapytanie od ${name}`,
    html: `
      <h2>Nowe zapytanie z formularza</h2>
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${String(message).replace(/\n/g, "<br>")}</p>
      ${
        attachments && attachments.length
          ? '<p><strong>Załączniki:</strong></p>' + attachments.map((u: string) => `<p><a href="${u}">${u}</a></p>`).join("")
          : ""
      }
    `
  };

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const respText = await emailResponse.text();
  let respBody: any = null;
  if (respText && respText.length > 0) {
    try {
      respBody = JSON.parse(respText);
    } catch (err) {
      respBody = respText;
    }
  }

  console.log("Resend response:", { status: emailResponse.status, body: respBody });

  if (!emailResponse.ok) {
    console.error("Provider error:", { status: emailResponse.status, body: respBody });
    return new Response(JSON.stringify({ error: "Provider error", providerStatus: emailResponse.status, providerBody: respBody }), {
      status: 500,
      headers: corsHeadersBase,
    });
  }

  return new Response(JSON.stringify({ success: true, message: "Wiadomość wysłana" }), {
    status: 200,
    headers: corsHeadersBase,
  });

} catch (err) {
  console.error("Error sending email:", err);
  return new Response(JSON.stringify({ error: "Wystąpił błąd podczas wysyłania wiadomości." }), {
    status: 500,
    headers: corsHeadersBase,
  });
}})