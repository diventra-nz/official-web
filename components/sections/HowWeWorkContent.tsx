import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import {
  processStages,
  deliveryPractices,
  engagementModels,
  howWeWorkFaqs,
} from "@/lib/how-we-work";

export default function HowWeWorkContent() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Process" label="How we work" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              A clear path from{" "}
              <em className="not-italic text-[var(--color-accent)]">idea to impact.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed mb-8">
              Every engagement follows a structured delivery process — with transparent
              communication, quality built in, and outcomes measured after launch.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Book a Consultation
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-4">Six stages of delivery</h2>
          <p className="text-[var(--color-ink-soft)] mb-12 max-w-[48rem] leading-relaxed">
            Our process keeps complex projects predictable — without sacrificing the flexibility
            needed to respond to what we learn along the way.
          </p>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processStages.map((stage, index) => (
              <li
                key={stage.id}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <ServiceIcon src={stage.icon} size={22} well />
                  <span className="label-caps text-[var(--color-grey)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display-md text-[var(--color-ink)] mb-2">{stage.title}</h3>
                <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-4">How we run projects</h2>
          <p className="text-[var(--color-ink-soft)] mb-10 max-w-[48rem] leading-relaxed">
            Governance and communication are part of delivery — not an afterthought.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {deliveryPractices.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-5"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-xs text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-medium text-[var(--color-ink)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-10">Engagement models</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {engagementModels.map((model) => (
              <article
                key={model.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] p-6 md:p-8"
              >
                <h3 className="display-md text-[var(--color-ink)] mb-2">{model.title}</h3>
                <p className="text-[var(--color-grey)] leading-relaxed">{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content max-w-[48rem]">
          <h2 className="display-lg text-[var(--color-ink)] mb-8">Common questions</h2>
          <dl className="space-y-6">
            {howWeWorkFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--color-grey-border)] pb-6 last:border-0"
              >
                <dt className="text-lg font-medium text-[var(--color-ink)] mb-2">
                  {faq.question}
                </dt>
                <dd className="text-[var(--color-grey)] leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-void-text)] mb-4">
            Ready to start a project?
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            Tell us about your goals and we&apos;ll recommend the right engagement model.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="secondary" context="violet">
              Start a Project
            </MagneticButton>
            <MagneticButton href="/digital-roadmapping" variant="secondary" context="violet">
              Digital Growth Blueprint
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
