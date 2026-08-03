import type { ReactNode } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

interface LegalPageLayoutProps {
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
  lastUpdated?: string;
}

export default function LegalPageLayout({
  label,
  title,
  intro,
  children,
  lastUpdated = "July 2026",
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-12 md:pb-16">
        <div className="container-content max-w-[48rem]">
          <SectionLabel index="Legal" label={label} />
          <h1 className="display-xl text-[var(--color-ink)] mb-4">{title}</h1>
          <p className="text-lg text-[var(--color-ink-soft)] leading-relaxed">{intro}</p>
          <p className="mt-4 text-sm text-[var(--color-grey)]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content max-w-[48rem] prose-legal">{children}</div>
      </section>
    </>
  );
}
