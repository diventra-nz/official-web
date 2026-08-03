import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectParallaxBlock from "@/components/sections/ProjectParallaxBlock";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies — Diventra",
  description:
    "Selected client work from Diventra — digital products, platforms, and experiences delivered for real-world impact.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-12 md:pb-16">
        <div className="container-content">
          <SectionLabel index="Work" label="Case studies" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              Selected work. Real{" "}
              <em className="not-italic text-[var(--color-accent)]">outcomes.</em>
            </h1>
            <p className="text-lg text-[var(--color-ink-soft)] leading-relaxed">
              Products and platforms we&apos;ve helped design, build, and ship — from festival
              platforms to public-space digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-x-clip bg-surface-void bg-grid-dark">
        <div className="container-content">
          <div className="space-y-16 md:space-y-24 [&>article:first-child]:border-t-0 [&>article:first-child]:pt-0">
            {projects.map((project, i) => (
              <ProjectParallaxBlock key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-void-text)] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            We&apos;d love to hear about the challenge you&apos;re solving.
          </p>
          <MagneticButton href="/contact" variant="primary" context="violet">
            Start a conversation
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
