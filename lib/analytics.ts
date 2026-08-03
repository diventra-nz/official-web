export const analyticsEvents = {
  consultationCtaClick: "consultation_cta_click",
  startProjectClick: "start_project_click",
  serviceCardClick: "service_card_click",
  caseStudyClick: "case_study_click",
  contactFormStart: "contact_form_start",
  contactFormSubmit: "contact_form_submission",
  phoneClick: "phone_click",
  emailClick: "email_click",
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Lightweight analytics hook — logs in dev, pushes to dataLayer for GTM/GA. */
export function trackEvent(name: AnalyticsEventName, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;

  const payload = { event: name, ...params };

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", payload);
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}
