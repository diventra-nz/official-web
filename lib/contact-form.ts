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

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
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

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return {
      ok: false,
      message: "Contact form is not configured yet. Please email hello@Diventra.dev directly.",
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      message,
      subject: `Diventra enquiry from ${name}`,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      message: "Something went wrong sending your message. Please email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks — we've received your enquiry and will be in touch within one business day.",
  };
}
