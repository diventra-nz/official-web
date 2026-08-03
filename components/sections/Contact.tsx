import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative section-pad overflow-hidden bg-[var(--color-canvas)]">
      <span className="ghost-number" aria-hidden="true">04</span>
      <div className="container-content">
        <SectionLabel index="04" label="Contact" />

        <div className="max-w-[48rem]">
          <h2 className="display-xl max-w-[14ch] mb-6">
            Let&apos;s{" "}
            <em className="not-italic text-[var(--color-accent)]">talk.</em>
          </h2>
          <p className="text-lg text-[var(--color-grey)] leading-relaxed max-w-[42ch] mb-8">
            Tell us about your business, your goals, and where you need help. We
            respond to every enquiry within one business day.
          </p>
          <MagneticButton href="/contact" variant="primary">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h12M7.5 1.5L13 7l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
