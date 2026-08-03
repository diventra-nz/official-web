"use server";

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<
    Record<
      | "name"
      | "email"
      | "company"
      | "phone"
      | "service"
      | "budget"
      | "timeline"
      | "message"
      | "consent",
      string
    >
  >;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (!message) fieldErrors.message = "Please describe your project.";
  if (!consent) fieldErrors.consent = "Please confirm you agree to our privacy policy.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  const payload = { name, email, company, phone, service, budget, timeline, message };

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  const resendKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_EMAIL ?? "hello@Diventra.dev";

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Phone: ${phone || "—"}`,
    `Service: ${service || "—"}`,
    `Budget: ${budget || "—"}`,
    `Timeline: ${timeline || "—"}`,
    "",
    message,
  ].join("\n");

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...payload,
        subject: `Diventra enquiry from ${name}`,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Something went wrong sending your message. Please email us directly.",
      };
    }
  } else if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Diventra <onboarding@resend.dev>",
        to: [contactTo],
        reply_to: email,
        subject: `Diventra enquiry from ${name}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Something went wrong sending your message. Please email us directly.",
      };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact] submission (no email provider configured):", payload);
  } else {
    return {
      ok: false,
      message:
        "Contact form is not configured yet. Please email hello@Diventra.dev directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks — we've received your enquiry and will be in touch within one business day.",
  };
}
