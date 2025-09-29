// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Jeśli w produkcji chcesz ograniczyć origin -> ustaw zamiast "*"
const corsHeadersBase = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  needsWasteCollection: string;
  contactHours: string;
  attachments?: string[];
}

serve(async (req: Request) => {
  // Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeadersBase });
  }

  // 1) Parsowanie body: spróbuj JSON, a jeśli nie - formData
  let body: any = {};
  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const fd = await req.formData();
      fd.forEach((v, k) => {
        // uwzględnij pola powtarzalne (attachments)
        if (k === "attachments") {
          if (!body.attachments) body.attachments = [];
          body.attachments.push(String(v));
        } else {
          body[k] = String(v);
        }
      });
    } else {
      // fallback: spróbuj json, a jeśli nie to pusty obiekt
      try {
        body = await req.json();
      } catch {
        body = {};
      }
    }
  } catch (err) {
    console.error("Error parsing request body:", err);
    return new Response(
      JSON.stringify({ error: "Nieprawidłowy format żądania" }),
      { status: 400, headers: corsHeadersBase }
    );
  }

  console.log("Received request body:", body);

  // 2) Walidacja
  const {
    name,
    phone,
    message,
    needsWasteCollection,
    contactHours,
    attachments
  }: ContactFormData = body;

  console.log("Validating fields:", {
    name: !!name,
    phone: !!phone,
    message: !!message,
    needsWasteCollection: !!needsWasteCollection,
    contactHours: !!contactHours
  });

  if (!name || !phone || !message || !needsWasteCollection || !contactHours) {
    console.log("Missing required fields");
    return new Response(
      JSON.stringify({ error: "Wszystkie pola są wymagane" }),
      { status: 400, headers: corsHeadersBase }
    );
  }

  // 3) Jeśli brak klucza - tylko logujemy i zwracamy success (lokalny tryb)
  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY missing — running in dry-run mode. Email would be:", {
      name,
      phone,
      message,
      needsWasteCollection,
      contactHours,
      attachments
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Wiadomość została wysłana (tryb testowy, brak RESEND_API_KEY)."
      }),
      { status: 200, headers: corsHeadersBase }
    );
  }

  // 4) Wyślij email do Resend — bezpieczne czytanie odpowiedzi
  try {
    const payload = {
      from: "WyniesiemyTo <onboarding@resend.dev>",
      to: ["wyniesiemyto@gmail.com"],
      subject: `Nowe zapytanie od ${name}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Wywóz do PSZOK:</strong> ${needsWasteCollection}</p>
        <p><strong>Godziny kontaktu:</strong> ${contactHours}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
        ${
          attachments && attachments.length > 0
            ? '<p><strong>Załączniki:</strong></p>' +
              attachments.map((url: string) => `<p><a href="${url}" target="_blank">${url}</a></p>`).join("")
            : ""
        }
        <hr>
        <p><small>Wysłane z formularza na WyniesiemyTo.pl</small></p>
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

    // Bezpieczne czytanie body — text() zamiast json()
    const respText = await emailResponse.text();
    let respBody: any = null;
    if (respText && respText.length > 0) {
      try {
        respBody = JSON.parse(respText);
      } catch {
        respBody = respText; // zostaw surowy tekst
      }
    }

    console.log("Resend response:", { status: emailResponse.status, body: respBody });

    if (!emailResponse.ok) {
      // logujemy i zwracamy czytelny błąd (możesz usunąć respBody z produkcji)
      console.error("Failed to send email via Resend:", { status: emailResponse.status, body: respBody });
      return new Response(
        JSON.stringify({
          error: "Wystąpił błąd podczas wysyłania wiadomości (provider).",
          providerStatus: emailResponse.status,
          providerBody: respBody,
        }),
        { status: 500, headers: corsHeadersBase }
      );
    }

    // success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Wiadomość została wysłana pomyślnie!"
      }),
      { status: 200, headers: corsHeadersBase }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error: "Wystąpił błąd podczas wysyłania wiadomości. Prosimy spróbować ponownie lub zadzwonić bezpośrednio."
      }),
      { status: 500, headers: corsHeadersBase }
    );
  }
});
