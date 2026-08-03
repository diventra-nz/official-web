import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TransitionLink from "@/components/ui/TransitionLink";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Diventra",
  description:
    "Web development, mobile apps, AI solutions, digital transformation, UX design, and cloud engineering for New Zealand organisations.",
};

export default function ServicesPage() {
  return (
    <div className="page-top page-bottom">
      <div className="container-content">
        <SectionLabel index="Services" label="What we do" />

        <div className="mb-12 max-w-[48rem]">
          <h1 className="display-xl text-[var(--color-ink)] mb-4">
            Digital services for modern organisations
          </h1>
          <p className="text-lg text-[var(--color-ink-soft)] leading-relaxed">
            Strategy, design, engineering, cloud, integrations, and AI — delivered as a long-term
            partnership focused on business outcomes.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <TransitionLink
                href={`/services/${service.slug}`}
                className="group flex h-full items-start gap-5 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-6 transition-[border-color,box-shadow] hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-soft)] md:p-8"
              >
                <ServiceIcon src={service.icon} size={32} className="shrink-0 p-4" />
                <div className="min-w-0 flex-1">
                  <h2 className="display-md text-[var(--color-ink)] mb-2">{service.title}</h2>
                  <p className="text-[var(--color-grey)] mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <span className="text-sm font-medium text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)]">
                    Learn more →
                  </span>
                </div>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
