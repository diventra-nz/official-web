import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Diventra",
  description:
    "Book a consultation or submit a project enquiry. Web development, mobile apps, AI solutions, and digital transformation for New Zealand organisations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-12 md:pb-16">
        <div className="container-content">
          <SectionLabel index="Contact" label="Get in touch" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              Let&apos;s turn your next idea into{" "}
              <em className="not-italic text-[var(--color-accent)]">measurable value.</em>
            </h1>
            <p className="text-lg text-[var(--color-ink-soft)] leading-relaxed">
              Share your goals and constraints. We&apos;ll follow up within one business day to
              explore fit and recommend next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="label-caps text-[var(--color-grey)] mb-2">Location</p>
                <p className="text-[var(--color-ink-soft)]">Wellington, New Zealand</p>
              </div>
              <div>
                <p className="label-caps text-[var(--color-grey)] mb-2">Email</p>
                <a
                  href="mailto:hello@Diventra.dev"
                  className="text-lg text-[var(--color-ink)] link-underline hover:text-[var(--color-accent)] transition-colors"
                >
                  hello@Diventra.dev
                </a>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6">
                <p className="label-caps text-[var(--color-grey)] mb-3">What to expect</p>
                <ul className="space-y-2 text-sm text-[var(--color-ink-soft)]">
                  <li>— A response within one business day</li>
                  <li>— A short discovery call to understand your goals</li>
                  <li>— A clear recommendation on engagement and next steps</li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
