import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TransitionLink from "@/components/ui/TransitionLink";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries — Diventra",
  description:
    "Digital solutions for startups, SMBs, enterprise, government, professional services, retail, and tourism organisations across New Zealand.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Industries" label="Sectors" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              Experience across{" "}
              <em className="not-italic text-[var(--color-accent)]">New Zealand sectors.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed">
              We partner with organisations where digital experience directly impacts reputation,
              revenue, and public trust — tailoring solutions to each sector&apos;s constraints and
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <TransitionLink
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6 transition-[border-color,box-shadow] hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-soft)] md:p-8"
                >
                  <ServiceIcon src={industry.icon} size={24} well className="mb-5" />
                  <h2 className="display-md text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-[var(--color-grey)] leading-relaxed flex-1 mb-4">
                    {industry.shortDescription}
                  </p>
                  <span className="text-sm font-medium text-[var(--color-accent)]">
                    Learn more →
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
