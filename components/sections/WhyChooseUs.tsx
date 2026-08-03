import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Business-first thinking",
    icon: "/icons/why/business-first.svg",
    description: "Decisions anchored in commercial outcomes, not trends.",
  },
  {
    title: "Senior technical expertise",
    icon: "/icons/why/expertise.svg",
    description: "Experienced practitioners across design, engineering, and cloud.",
  },
  {
    title: "AI-enabled delivery",
    icon: "/icons/why/ai-delivery.svg",
    description: "Practical AI integrated into how we build and operate.",
  },
  {
    title: "Clear communication",
    icon: "/icons/why/communication.svg",
    description: "Transparent progress, plain language, no surprises.",
  },
  {
    title: "Scalable architecture",
    icon: "/icons/why/architecture.svg",
    description: "Platforms designed to grow with your organisation.",
  },
  {
    title: "Long-term partnership",
    icon: "/icons/why/partnership.svg",
    description: "Engaged beyond launch to evolve your digital capability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-soft section-pad">
      <div className="container-content">
        <SectionLabel index="05" label="Why Diventra" />

        <div className="mb-12 max-w-[48rem]">
          <h2 className="display-lg text-[var(--color-ink)]">
            A digital transformation partner, not a project factory
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-6">
                <ServiceIcon src={item.icon} size={22} well className="mb-4" />
                <h3 className="text-lg font-medium text-[var(--color-ink)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-grey)] leading-relaxed">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
