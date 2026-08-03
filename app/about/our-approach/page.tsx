import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import { approachPillars } from "@/lib/about";

export const metadata: Metadata = {
  title: "Our Approach — Diventra",
  description:
    "How Diventra combines strategy, design, and engineering to deliver lasting digital transformation for New Zealand organisations.",
};

export default function OurApproachPage() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Approach" label="About" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              Strategy, design, and engineering —{" "}
              <em className="not-italic text-[var(--color-accent)]">in one partnership.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed">
              We don&apos;t hand off between silos. Discovery, design, and development stay
              connected so what gets built reflects what was agreed — and what your users need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <ol className="grid gap-6 md:grid-cols-2">
            {approachPillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6 md:p-8"
              >
                <span className="label-caps mb-4 block text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="display-md text-[var(--color-ink)] mb-2">{pillar.title}</h2>
                <p className="text-[var(--color-grey)] leading-relaxed">{pillar.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content max-w-[48rem]">
          <h2 className="display-md text-[var(--color-ink)] mb-4">Connected to delivery</h2>
          <p className="text-[var(--color-ink-soft)] leading-relaxed mb-8">
            Our approach maps directly to how we deliver — through a six-stage process from
            discovery to continuous improvement.
          </p>
          <MagneticButton href="/how-we-work" variant="secondary">
            How We Work
          </MagneticButton>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Book a Consultation
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
