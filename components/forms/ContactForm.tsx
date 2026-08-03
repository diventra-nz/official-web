"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { serviceInterestOptions } from "@/lib/services";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

const initialState: ContactFormState = { ok: false, message: "" };

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-grey)] transition-colors focus:border-[var(--color-accent)] focus:outline-none";

const labelClass = "label-caps text-[var(--color-grey)] mb-2 block";

const budgetOptions = [
  { value: "under-25k", label: "Under NZD $25k" },
  { value: "25k-50k", label: "NZD $25k – $50k" },
  { value: "50k-100k", label: "NZD $50k – $100k" },
  { value: "100k-plus", label: "NZD $100k+" },
  { value: "not-sure", label: "Not sure yet" },
];

const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible" },
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const startedRef = useRef(false);

  function trackFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent(analyticsEvents.contactFormStart);
  }

  useEffect(() => {
    if (state.ok) {
      trackEvent(analyticsEvents.contactFormSubmit);
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <div
        className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-8 md:p-10"
        role="status"
      >
        <p className="display-md mb-3 text-[var(--color-ink)]">Enquiry received.</p>
        <p className="text-[var(--color-grey)] leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate onFocus={trackFormStart}>
      {state.message && !state.ok && (
        <p
          className="rounded-[var(--radius-sm)] border border-[var(--color-accent)]/30 bg-[var(--color-accent-muted)] px-4 py-3 text-sm text-[var(--color-ink)]"
          role="alert"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            aria-invalid={!!state.fieldErrors?.name}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          />
          {state.fieldErrors?.name && (
            <p id="name-error" className="mt-2 text-sm text-[var(--color-accent)]">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            aria-invalid={!!state.fieldErrors?.email}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          />
          {state.fieldErrors?.email && (
            <p id="email-error" className="mt-2 text-sm text-[var(--color-accent)]">
              {state.fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            Service required
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="">Select a service</option>
            {serviceInterestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClass}>
          Desired timeline
        </label>
        <select id="timeline" name="timeline" className={inputClass} defaultValue="">
          <option value="">Select a timeline</option>
          {timelineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project description
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your goals, users, and any deadlines."
          className={`${inputClass} min-h-[9rem] resize-y`}
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-2 text-sm text-[var(--color-accent)]">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 rounded border-[var(--color-grey-border)] accent-[var(--color-accent)]"
            aria-invalid={!!state.fieldErrors?.consent}
            aria-describedby={state.fieldErrors?.consent ? "consent-error" : undefined}
          />
          <span className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
            I agree to Diventra&apos;s{" "}
            <TransitionLink href="/privacy" className="text-[var(--color-accent)] hover:underline">
              privacy policy
            </TransitionLink>{" "}
            and consent to being contacted about my enquiry.
          </span>
        </label>
        {state.fieldErrors?.consent && (
          <p id="consent-error" className="mt-2 text-sm text-[var(--color-accent)]">
            {state.fieldErrors.consent}
          </p>
        )}
      </div>

      <MagneticButton type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Submit enquiry"}
        {!pending && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 7h12M7.5 1.5L13 7l-5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </MagneticButton>
    </form>
  );
}
