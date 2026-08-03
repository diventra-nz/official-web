import MagneticButton from "@/components/ui/MagneticButton";
import { analyticsEvents } from "@/lib/analytics";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-surface-deep section-pad">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(121,206,228,0.18), transparent 70%)",
        }}
      />
      <div className="container-content relative z-10 text-center">
        <h2 className="display-xl text-[var(--color-void-text)] mb-4 mx-auto max-w-[20ch]">
          Let&apos;s turn your next digital idea into{" "}
          <em className="not-italic text-[var(--color-accent-light)]">measurable value.</em>
        </h2>
        <p className="text-lg text-[var(--color-void-muted)] mb-10 mx-auto max-w-[48ch] leading-relaxed">
          Book a consultation to discuss your goals, or tell us about a project you have in mind.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:[&_a]:min-h-0">
          <MagneticButton
            href="/contact"
            variant="primary"
            context="violet"
            trackEvent={analyticsEvents.consultationCtaClick}
          >
            Book a Consultation
          </MagneticButton>
          <MagneticButton
            href="/contact"
            variant="secondary"
            context="violet"
            trackEvent={analyticsEvents.startProjectClick}
          >
            Tell Us About Your Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
