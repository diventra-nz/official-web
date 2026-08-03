import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  blueprintDeliverables,
  blueprintOutcomes,
  blueprintFaqs,
} from "@/lib/digital-roadmapping";

export default function DigitalRoadmappingContent() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Strategy" label="Digital roadmapping" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-[48rem]">
              <h1 className="display-xl text-[var(--color-ink)] mb-4">
                Digital Growth{" "}
                <em className="not-italic text-[var(--color-accent)]">Blueprint.</em>
              </h1>
              <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed mb-8">
                A productised strategy engagement that turns business goals into a prioritised
                12–24 month digital roadmap — before you commit to major build spend.
              </p>
              <MagneticButton href="/contact" variant="primary">
                Book a Blueprint Session
              </MagneticButton>
            </div>
            <ServiceIcon src="/icons/roadmap/blueprint.svg" size={36} well />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display-lg text-[var(--color-ink)] mb-4">
              Strategy you can act on
            </h2>
            <p className="text-[var(--color-ink-soft)] leading-relaxed mb-6">
              Many organisations know they need to modernise — but struggle to prioritise across
              competing initiatives, legacy systems, and limited budget. The Digital Growth
              Blueprint creates a shared plan grounded in your operations, not generic templates.
            </p>
            <p className="text-[var(--color-ink-soft)] leading-relaxed">
              You receive a structured set of deliverables suitable for leadership, IT, and
              delivery teams — whether you build with Diventra or use the roadmap internally.
            </p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6 md:p-8">
            <p className="label-caps mb-4 text-[var(--color-grey)]">What you gain</p>
            <ul className="space-y-3">
              {blueprintOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm text-[var(--color-ink-soft)]">
                  <span className="text-[var(--color-accent)]" aria-hidden="true">
                    ✓
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-4">Deliverables</h2>
          <p className="text-[var(--color-ink-soft)] mb-12 max-w-[48rem] leading-relaxed">
            Everything included in a standard Digital Growth Blueprint engagement.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blueprintDeliverables.map((item, index) => (
              <li
                key={item.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-5"
              >
                <span className="label-caps mb-2 block text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-medium text-[var(--color-ink)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ServiceIcon src="/icons/roadmap/phases.svg" size={28} well className="mb-6" />
            <h2 className="display-md text-[var(--color-ink)] mb-4">From roadmap to delivery</h2>
            <p className="text-[var(--color-ink-soft)] leading-relaxed mb-6">
              The blueprint is designed to connect directly to how we deliver — through phased
              initiatives aligned to our six-stage delivery process.
            </p>
            <MagneticButton href="/how-we-work" variant="secondary">
              How We Work
            </MagneticButton>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] p-6 md:p-8">
            <p className="label-caps mb-3 text-[var(--color-grey)]">Typical engagement</p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-soft)]">
              <li>— Stakeholder workshops and discovery sessions</li>
              <li>— Technology and workflow assessment</li>
              <li>— Draft roadmap review with your team</li>
              <li>— Final blueprint presentation and handover</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content max-w-[48rem]">
          <h2 className="display-md text-[var(--color-ink)] mb-8">Common questions</h2>
          <dl className="space-y-6">
            {blueprintFaqs.map((faq) => (
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
            Start with a clear roadmap
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            Book a consultation to discuss whether the Digital Growth Blueprint is right for your
            organisation.
          </p>
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Book a Consultation
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
