import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TransitionLink from "@/components/ui/TransitionLink";
import { industries } from "@/lib/industries";

export default function Industries() {
  const featured = industries.filter((i) =>
    ["tourism-culture-events", "professional-services", "retail-ecommerce", "government-public-sector", "startups", "enterprise"].includes(
      i.slug
    )
  );

  return (
    <section className="bg-surface-light section-pad">
      <div className="container-content">
        <SectionLabel index="08" label="Industries" />

        <div className="mb-10 max-w-[48rem]">
          <h2 className="display-lg text-[var(--color-ink)] mb-4">
            Experience across New Zealand sectors
          </h2>
          <p className="text-[var(--color-ink-soft)] leading-relaxed">
            We work with organisations where digital experience directly impacts reputation,
            revenue, and public trust.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry) => (
            <li key={industry.slug}>
              <TransitionLink
                href={`/industries/${industry.slug}`}
                className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] px-5 py-4 transition-[border-color] hover:border-[var(--color-accent)]"
              >
                <ServiceIcon src={industry.icon} size={18} well />
                <span className="flex-1 font-medium text-[var(--color-ink)]">{industry.title}</span>
                <span className="text-[var(--color-accent)] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </TransitionLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <TransitionLink href="/industries" className="text-link">
            View all industries →
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
