import type { Service } from "@/lib/services";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import LottiePlayer from "@/components/ui/LottiePlayer";
import { projects } from "@/lib/projects";
import { withBasePath } from "@/lib/paths";

interface ServicePageTemplateProps {
  service: Service;
}

const deliverySteps = [
  "Discover requirements and constraints",
  "Define scope, architecture, and success metrics",
  "Design experiences and technical approach",
  "Develop, test, and iterate",
  "Deploy with documentation and handover",
  "Improve through monitoring and retained support",
];

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedProject = projects[0];

  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-24">
        <div className="container-content">
          <SectionLabel index="Service" label={service.title} />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-[48rem]">
              <h1 className="display-xl text-[var(--color-ink)] mb-4">{service.title}</h1>
              <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed mb-8">
                {service.description}
              </p>
              <MagneticButton href="/contact" variant="primary">
                Book a Consultation
              </MagneticButton>
            </div>
            {service.media?.type === "video" ? (
              <div className="relative aspect-square w-[40dvh] max-w-full shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
                <video
                  src={withBasePath(service.media.src)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={service.media.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : service.media?.type === "lottie" ? (
              <div
                className="relative aspect-square w-[40dvh] max-w-full shrink-0 overflow-hidden p-6"
                role="img"
                aria-label={service.media.alt}
              >
                <LottiePlayer src={service.media.src} className="h-full w-full" />
              </div>
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
                <ServiceIcon src={service.icon} size={40} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-md text-[var(--color-ink)] mb-4">The problem we solve</h2>
            <p className="text-[var(--color-ink-soft)] leading-relaxed">
              Organisations invest in {service.title.toLowerCase()} when existing approaches create
              friction — slow delivery, poor experiences, or technology that cannot keep pace with
              business demand. We help you move from constraint to capability with a clear, phased
              approach.
            </p>
          </div>
          <div>
            <h2 className="display-md text-[var(--color-ink)] mb-4">Business outcomes</h2>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-[var(--color-ink-soft)]">
                  <span className="text-[var(--color-accent)]" aria-hidden="true">
                    —
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
          <h2 className="display-md text-[var(--color-ink)] mb-8">Core capabilities</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-[var(--radius-sm)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] px-4 py-3 text-sm text-[var(--color-ink-soft)]"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-ink)] mb-8">Delivery process</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverySteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] p-5"
              >
                <span className="label-caps text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--color-ink-soft)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface-void">
        <div className="container-content grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="label-caps mb-3 text-[var(--color-accent-light)]">Related work</p>
            <h2 className="display-md text-[var(--color-void-text)] mb-3">{relatedProject.name}</h2>
            <p className="text-[var(--color-void-muted)] mb-6 leading-relaxed">
              {relatedProject.impact}
            </p>
            <MagneticButton
              href={`/work/${relatedProject.slug}`}
              variant="primary"
              context="violet"
            >
              View case study
            </MagneticButton>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-void-border)] bg-[var(--color-void-surface)] p-6">
            <h3 className="text-lg font-medium text-[var(--color-void-text)] mb-4">
              Engagement options
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-void-muted)]">
              <li>Fixed-scope project delivery</li>
              <li>Phased roadmap engagements</li>
              <li>Retained development partnership</li>
              <li>Advisory and discovery workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-void-text)] mb-4">
            Ready to discuss {service.title.toLowerCase()}?
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            Tell us about your goals and we will recommend a practical path forward.
          </p>
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
