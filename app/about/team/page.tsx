import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team — Diventra",
  description: "The people behind Diventra — a senior team delivering digital products for New Zealand organisations.",
};

export default function TeamPage() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="About" label="Team" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              A senior team,{" "}
              <em className="not-italic text-[var(--color-accent)]">built for delivery.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed">
              Diventra brings together experienced practitioners across strategy, design, and
              engineering — working directly with clients rather than through layers of account
              management.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content max-w-[48rem] space-y-6 text-[var(--color-ink-soft)] leading-relaxed">
          <p>
            We&apos;re a deliberately small team. That means the people you meet at discovery are
            the people who shape and build your product — with continuity from first conversation
            through launch and beyond.
          </p>
          <p>
            Individual team profiles will be published here as we grow. In the meantime, you can
            learn more about how we work and what we value.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <MagneticButton href="/about" variant="secondary">
              About Diventra
            </MagneticButton>
            <TransitionLink href="/about/our-approach" className="text-link">
              Our approach →
            </TransitionLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft text-center">
        <div className="container-content">
          <p className="text-[var(--color-grey)] mb-6">
            Interested in joining the team?
          </p>
          <MagneticButton href="/careers" variant="primary">
            View Careers
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
